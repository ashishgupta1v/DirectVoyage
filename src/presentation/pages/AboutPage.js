/**
 * Direct Voyage — About Us Page
 * Who We Are, DMC Direct Operations Model, and Zero-Middlemen Philosophy.
 */

import { AboutDMC, TrustStrip } from '../components/AboutDMC.js';
import { FinaleCTA } from '../components/Footer.js';

export function AboutPage() {
  return `
    <div class="page page-about">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">About</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Who We Are</p>
          <h1 class="page-title">Direct DMC. Real People On Ground.</h1>
          <p class="page-subtitle">
            Direct Voyage is an international Destination Management Company. We don't resell generic packages — we own our fleet, run our own operations desks, and coordinate your journey directly across our destination hubs.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">Direct DMC Operations</span>
            <span class="page-meta-pill">Privately Owned Fleet</span>
            <span class="page-meta-pill">Zero Broker Margins</span>
            <span class="page-meta-pill">24/7 Ground Concierge</span>
          </div>
        </div>
      </section>

      ${TrustStrip()}

      ${AboutDMC()}

      <!-- Core Values Section -->
      <section class="about-values-section" style="padding-bottom:clamp(60px, 8vw, 100px);">
        <div class="wrap">
          <div class="glass-surface-card">
            <div class="sec-head" style="margin-bottom:28px;">
              <p class="eyebrow" style="color:var(--gold-soft);">Our Guiding Principles</p>
              <h2 class="h-md" style="color:var(--gold-soft);">The Direct Voyage Standard</h2>
              <p class="lead" style="font-size:0.95rem;color:rgba(248,245,238,0.85);">
                Every itinerary we craft is anchored by three uncompromising promises to our travelers:
              </p>
            </div>

            <div class="cards c3 stagger rv">
              <div style="background:linear-gradient(158deg, rgba(22, 68, 104, 0.35), rgba(6, 24, 41, 0.75));padding:26px;border-radius:14px;border:1px solid rgba(201,162,75,0.24);">
                <div class="ico" style="margin-bottom:14px;"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A24B" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <h3 style="color:var(--gold-light);margin-bottom:8px;font-size:1.15rem;font-family:var(--serif);">Direct Accountability</h3>
                <p style="font-size:0.9rem;color:rgba(248,245,238,0.8);line-height:1.6;margin:0;">When you step out of the terminal, our own chauffeur and placard greet you. If your flight is delayed or plans shift, your dedicated manager updates everything in real time.</p>
              </div>

              <div style="background:linear-gradient(158deg, rgba(22, 68, 104, 0.35), rgba(6, 24, 41, 0.75));padding:26px;border-radius:14px;border:1px solid rgba(201,162,75,0.24);">
                <div class="ico" style="margin-bottom:14px;"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A24B" stroke-width="1.8"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
                <h3 style="color:var(--gold-light);margin-bottom:8px;font-size:1.15rem;font-family:var(--serif);">Radical Price Honesty</h3>
                <p style="font-size:0.9rem;color:rgba(248,245,238,0.8);line-height:1.6;margin:0;">No surprise 'local fees', no check-out markups. By eliminating multiple middlemen tiers, you get premium hotels and private transport at ground-direct pricing.</p>
              </div>

              <div style="background:linear-gradient(158deg, rgba(22, 68, 104, 0.35), rgba(6, 24, 41, 0.75));padding:26px;border-radius:14px;border:1px solid rgba(201,162,75,0.24);">
                <div class="ico" style="margin-bottom:14px;"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C9A24B" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                <h3 style="color:var(--gold-light);margin-bottom:8px;font-size:1.15rem;font-family:var(--serif);">Pacing Built For You</h3>
                <p style="font-size:0.9rem;color:rgba(248,245,238,0.8);line-height:1.6;margin:0;">We don't do factory-style group buses or rush you through 10 sights in an hour. We design each day around your personal rhythm, travel companions, and tastes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${FinaleCTA()}
    </div>
  `;
}
