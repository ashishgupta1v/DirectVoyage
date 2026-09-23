/**
 * Direct Voyage — Curated Packages Page
 * Tier comparisons, inclusions, how it works, and booking triggers.
 */

import { HowItWorks, PackagesGrid } from '../components/PackagesGrid.js';
import { FinaleCTA } from '../components/Footer.js';

export function PackagesPage() {
  return `
    <div class="page page-packages">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Packages</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Transparent Curation Tiers</p>
          <h1 class="page-title">Curated Voyage Tiers</h1>
          <p class="page-subtitle">
            From smart value luxury to private yachts and presidential suites, select the tier that fits your journey. All backed by our own vehicles and on-ground team.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">The Essentials</span>
            <span class="page-meta-pill">The Signature Voyage</span>
            <span class="page-meta-pill">The Private Collection</span>
            <span class="page-meta-pill">Zero Hidden Fees</span>
          </div>
        </div>
      </section>

      ${HowItWorks()}

      ${PackagesGrid()}

      <!-- Tiers Feature Comparison Matrix -->
      <section class="package-tiers-section" style="padding-bottom:clamp(60px, 8vw, 100px);">
        <div class="wrap">
          <div class="glass-surface-card">
            <div class="sec-head" style="margin-bottom:28px;">
              <p class="eyebrow" style="color:var(--gold-soft);">Tier Breakdown</p>
              <h2 class="h-md" style="color:var(--gold-soft);">Detailed Inclusions Comparison</h2>
            </div>

            <div class="table-responsive">
              <table class="spa-compare-table" style="min-width:680px;">
                <thead>
                  <tr>
                    <th>Inclusion Feature</th>
                    <th style="text-align:center;">The Essentials</th>
                    <th style="text-align:center;color:var(--gold-light);font-weight:700;">The Signature Voyage</th>
                    <th style="text-align:center;">The Private Collection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight:600;color:var(--gold-light);">Accommodation Standard</td>
                    <td style="text-align:center;">Handpicked 4-Star Hotels</td>
                    <td style="text-align:center;font-weight:600;color:var(--gold-soft);">5-Star Luxury Hotels &amp; Villas</td>
                    <td style="text-align:center;font-weight:700;color:var(--gold-light);">Presidential Suites &amp; Private Estates</td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:var(--gold-light);">Airport &amp; Intercity Transfers</td>
                    <td style="text-align:center;">Private AC Innova Crysta</td>
                    <td style="text-align:center;font-weight:600;color:var(--gold-soft);">Dedicated Executive Chauffeur</td>
                    <td style="text-align:center;font-weight:700;color:var(--gold-light);">VIP Toyota Alphard / Private Yacht</td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:var(--gold-light);">Attractions &amp; Sightseeing</td>
                    <td style="text-align:center;">Pre-booked confirmed tickets</td>
                    <td style="text-align:center;font-weight:600;color:var(--gold-soft);">Skip-the-line VIP entry passes</td>
                    <td style="text-align:center;font-weight:700;color:var(--gold-light);">After-hours private access &amp; permits</td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:var(--gold-light);">Concierge &amp; Ground Support</td>
                    <td style="text-align:center;">WhatsApp desk (9 AM – 9 PM)</td>
                    <td style="text-align:center;font-weight:600;color:var(--gold-soft);">24/7 Dedicated Ops WhatsApp</td>
                    <td style="text-align:center;font-weight:700;color:var(--gold-light);">24/7 Personal In-Destination Butler</td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:var(--gold-light);">Itinerary Flexibility</td>
                    <td style="text-align:center;">Pre-planned daily schedule</td>
                    <td style="text-align:center;font-weight:600;color:var(--gold-soft);">Flexible daily timings on request</td>
                    <td style="text-align:center;font-weight:700;color:var(--gold-light);">Completely on-demand daily pacing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="margin-top:30px;text-align:center;">
              <a href="/contact" class="btn btn-gold">Customize A Tier For Your Group</a>
            </div>
          </div>
        </div>
      </section>

      ${FinaleCTA()}
    </div>
  `;
}
