// Centralized WhatsApp opener — guarantees direct external navigation
// using the api.whatsapp.com format for maximum compatibility on
// mobile (opens app) and desktop (opens WhatsApp Web).
import { trackWhatsAppClick } from "./tracking";

export const WHATSAPP_NUMBER = "34640624484";

/**
 * Build a WhatsApp link in api.whatsapp.com format.
 * The message is URL-encoded (spaces → %20, accents → %C3%xx, etc.).
 * Returns a single-line URL with no whitespace.
 */
export const buildWaLink = (message: string): string =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

export interface WaMeta {
  section: string;
  button: string;
  message: string;
}

/**
 * Normalize any legacy wa.me link to the api.whatsapp.com format.
 * Also strips any accidental whitespace/newlines.
 */
const normalizeWaUrl = (url: string): string => {
  const cleaned = url.replace(/\s+/g, "");
  return cleaned.replace(
    /https?:\/\/wa\.me\/(\d+)\?text=/i,
    "https://api.whatsapp.com/send?phone=$1&text="
  );
};

/**
 * Opens a WhatsApp link reliably across browsers.
 *
 * Strategy:
 * 1. Fire tracking (if meta provided).
 * 2. Try window.open in a new tab.
 * 3. If blocked (popup blocker / mobile WebView), fall back to
 *    location.href so the user is never left without action.
 *
 * IMPORTANT: We do NOT call preventDefault unconditionally. Anchor
 * tags with a valid href + target="_blank" already work natively;
 * intercepting them can break behavior in some browsers. We only
 * intercept if window.open succeeds — otherwise the native anchor
 * navigation runs as a fallback.
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

  // Allow modifier-clicks (cmd/ctrl/shift/middle) to use native behavior.
  if (
    e &&
    (e.metaKey || e.ctrlKey || e.shiftKey || (e as React.MouseEvent).button === 1)
  ) {
    return;
  }

  try {
    const win = window.open(safeUrl, "_blank", "noopener,noreferrer");
    if (win) {
      // Successfully opened in new tab — prevent the native anchor
      // from also navigating (which would duplicate the action).
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }
  } catch {
    // Ignore — fall through to location fallback.
  }

  // Popup blocked or window.open unavailable: navigate the current tab.
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  window.location.href = safeUrl;
};
