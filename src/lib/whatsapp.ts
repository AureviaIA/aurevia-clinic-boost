// Centralized WhatsApp opener — guarantees direct external navigation
// using the wa.me format for maximum compatibility on
// mobile (opens app) and desktop (opens WhatsApp Web).
import { trackWhatsAppClick } from "./tracking";

export const WHATSAPP_NUMBER = "34640624484";

/**
 * Build a WhatsApp link in wa.me format.
 * The message is URL-encoded (spaces → %20, accents → %C3%xx, etc.).
 * Returns a single-line URL with no whitespace.
 */
export const buildWaLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export interface WaMeta {
  section: string;
  button: string;
  message: string;
}

/**
 * Normalize any accidental whitespace/newlines in the URL.
 */
const normalizeWaUrl = (url: string): string => url.replace(/\s+/g, "");

/**
 * Opens a WhatsApp link reliably across browsers.
 *
 * Strategy:
 * 1. Fire tracking (if meta provided).
 * 2. Try window.open in a new tab.
 * 3. If blocked (popup blocker / mobile WebView), fall back to
 *    location.href so the user is never left without action.
 */
export const openWhatsApp = (
  e: React.MouseEvent<HTMLElement> | undefined,
  url: string,
  meta?: WaMeta
) => {
  const safeUrl = normalizeWaUrl(url);

  if (meta) {
    trackWhatsAppClick(meta);
  }

  if (
    e &&
    (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)
  ) {
    return;
  }

  try {
    const win = window.open(safeUrl, "_blank", "noopener,noreferrer");
    if (win) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }
  } catch {
    // Ignore — fall through to location fallback.
  }

  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  window.location.href = safeUrl;
};
