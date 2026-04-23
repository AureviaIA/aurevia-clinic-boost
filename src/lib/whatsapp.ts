// Centralized WhatsApp opener — guarantees direct external navigation
// and bypasses any SPA router or in-app link interception.
import { trackWhatsAppClick } from "./tracking";

export const WHATSAPP_NUMBER = "34640624484";

export const buildWaLink = (message: string): string =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

export interface WaMeta {
  section: string;
  button: string;
  message: string;
}

/**
 * Opens a WhatsApp link in a new tab using window.open, bypassing the SPA router.
 * Uses api.whatsapp.com format for maximum compatibility.
 *
 * If `meta` is provided, fires a tracked `whatsapp_click` event.
 */
export const openWhatsApp = (
  e: React.MouseEvent<HTMLElement> | undefined,
  url: string,
  meta?: WaMeta
) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (meta) {
    trackWhatsAppClick(meta);
  }
  // Ensure api.whatsapp.com format for compatibility
  const safeUrl = url.replace(
    /https?:\/\/wa\.me\/(\d+)\?text=/i,
    "https://api.whatsapp.com/send?phone=$1&text="
  );
  window.open(safeUrl, "_blank", "noopener,noreferrer");
};
