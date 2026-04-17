// Centralized WhatsApp opener — guarantees direct external navigation
// and bypasses any SPA router or in-app link interception.
export const WHATSAPP_NUMBER = "34640624484";

export const buildWaLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * Opens a wa.me link in a new tab using window.open, bypassing the SPA router.
 * NEVER uses api.whatsapp.com — only wa.me.
 */
export const openWhatsApp = (
  e: React.MouseEvent<HTMLElement> | undefined,
  url: string
) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  // Sanity check: force wa.me, never api.whatsapp.com
  const safeUrl = url.replace(/https?:\/\/api\.whatsapp\.com\/send\?phone=/i, "https://wa.me/");
  window.open(safeUrl, "_blank", "noopener,noreferrer");
};
