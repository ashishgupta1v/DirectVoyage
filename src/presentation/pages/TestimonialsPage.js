/**
 * Direct Voyage — Testimonials & Client Stories Page
 * Verified client reviews, satisfaction metrics, and corporate retreat feedback.
 */

import { REVIEWS } from '../../domain/social-proof/reviews.data.js';
import { PromiseBanner } from '../components/TestimonialsRail.js';
import { FinaleCTA } from '../components/Footer.js';

export function TestimonialsPage() {
  return `
    <div class="page page-testimonials">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Stories</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Real Traveler Proof</p>
          <h1 class="page-title">Client Stories &amp; Verified Reviews</h1>
          <p class="page-subtitle">
            See how Direct Voyage turns complex international itineraries into seamless, worry-free luxury memories for couples, families, and corporate leadership teams.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">4.9 / 5.0 Overall Satisfaction</span>
            <span class="page-meta-pill">99.4% On-Time Chauffeur Record</span>
            <span class="page-meta-pill">100% Verified Voyagers</span>
          </div>
        </div>
      </section>

      <section class="reviews-section" style="padding: clamp(40px, 6vw, 70px) 0;">
        <div class="wrap">
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 340px), 1fr));gap:24px;">
            ${REVIEWS.map(r => {
              const authorName = r.author || r.name || 'Verified Traveler';
              const destName = r.dest || (r.tag ? r.tag.split('·')[0].trim() : 'International');
              const travelRole = r.role || (r.tag && r.tag.includes('·') ? r.tag.split('·')[1].trim() : 'Custom Itinerary');
              const cityName = r.city || 'India';
              const tripDate = r.date || 'Verified Trip';

              return `
              <div class="card glass-surface-card" style="padding:clamp(22px, 3vw, 32px);display:flex;flex-direction:column;border-radius:16px;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
                  <div style="display:flex;gap:4px;color:var(--gold);font-size:1.1rem;">
                    ${'★'.repeat(r.rating || 5)}
                  </div>
                  <span style="font-size:0.8rem;background:rgba(201,162,75,0.18);color:var(--gold-light);font-weight:600;padding:4px 12px;border-radius:999px;border:1px solid rgba(201,162,75,0.3);">
                    ${destName}
                  </span>
                </div>

                <p style="font-size:0.96rem;color:rgba(248,245,238,0.9);line-height:1.65;font-style:italic;margin-bottom:24px;flex:1;">
                  "${r.quote}"
                </p>

                <div style="border-top:1px solid rgba(201,162,75,0.2);padding-top:16px;display:flex;align-items:center;justify-content:space-between;">
                  <div>
                    <strong style="display:block;color:var(--gold-soft);font-size:1rem;font-family:var(--serif);">${authorName}</strong>
                    <span style="font-size:0.84rem;color:rgba(248,245,238,0.65);">${travelRole} · ${cityName}</span>
                  </div>
                  <span style="font-size:0.8rem;color:rgba(248,245,238,0.5);">${tripDate}</span>
                </div>
              </div>
            `;
            }).join('')}
          </div>
        </div>
      </section>

      ${PromiseBanner()}

      ${FinaleCTA()}
    </div>
  `;
}
