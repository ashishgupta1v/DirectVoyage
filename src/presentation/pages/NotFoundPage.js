/**
 * Direct Voyage — 404 Not Found Page
 * Luxury error page guiding users back to active routes.
 */

export function NotFoundPage() {
  return `
    <div class="page page-404">
      <section class="page-hero" style="text-align:center;padding:150px 0 100px;">
        <div class="wrap">
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:12px;">Route Not Found</p>
          <h1 class="page-title" style="font-size:clamp(2.5rem, 6vw, 4.5rem);">404: Voyage Off Course</h1>
          <p class="page-subtitle" style="margin:0 auto 30px;max-width:540px;">
            The coordinates you navigated to do not exist or have been re-charted. Choose a destination below or return to the main deck.
          </p>
          <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
            <a href="/" class="btn btn-gold">Return to Home Deck</a>
            <a href="/destinations" class="btn btn-ghost">View All Destinations</a>
            <a href="/contact" class="btn btn-ghost">Contact Concierge</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
