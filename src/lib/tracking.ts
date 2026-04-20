// ============================================================================
// Aurevia — Sistema de tracking unificado (GA4 + Meta Pixel)
// ----------------------------------------------------------------------------
// Cualquier evento de conversión, scroll o click pasa por aquí.
// Si gtag / fbq no están cargados, los eventos se loguean en consola y se
// empujan a window.dataLayer para futura integración con GTM.
// ============================================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const ATTRIBUTION_KEY = "aurevia_attribution";

export interface TrackPayload {
  section?: string;
  button?: string;
  message?: string;
  value?: number;
  [k: string]: unknown;
}

/** Registra la primera sección desde la que el usuario interactúa. */
export const setAttribution = (section: string) => {
  if (typeof window === "undefined") return;
  try {
    if (!sessionStorage.getItem(ATTRIBUTION_KEY)) {
      sessionStorage.setItem(ATTRIBUTION_KEY, section);
    }
  } catch {
    // ignore
  }
};

export const getAttribution = (): string | null => {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(ATTRIBUTION_KEY);
  } catch {
    return null;
  }
};

/** Evento genérico — se dispara en GA4, Meta Pixel y dataLayer. */
export const trackEvent = (eventName: string, payload: TrackPayload = {}) => {
  if (typeof window === "undefined") return;

  const enriched = {
    ...payload,
    attribution_section: getAttribution(),
    page_path: window.location.pathname,
    timestamp: Date.now(),
  };

  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, enriched);
  }

  // Meta Pixel — usa trackCustom para eventos no estándar
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, enriched);
  }

  // GTM / dataLayer fallback
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...enriched });

  // Debug en desarrollo
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("[track]", eventName, enriched);
  }
};

/** Helper específico para clicks de WhatsApp. */
export const trackWhatsAppClick = (payload: {
  section: string;
  button: string;
  message: string;
}) => {
  setAttribution(payload.section);
  trackEvent("whatsapp_click", payload);
  // Evento estándar de Meta para optimización de campañas
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact", { source: payload.section });
  }
};

/** Inicializa el tracker de scroll depth (25/50/75/100). */
export const initScrollDepthTracking = () => {
  if (typeof window === "undefined") return () => {};
  const fired = new Set<number>();
  const thresholds = [25, 50, 75, 100];

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.min(100, Math.round((scrollTop / docHeight) * 100));

    thresholds.forEach((t) => {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent("scroll_depth", { depth: t });
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
};
