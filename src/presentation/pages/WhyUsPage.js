/**
 * Direct Voyage — Why Us Page (Direct DMC vs Broker)
 * Transparency matrix, the 15-25% broker markup breakdown, and ground accountability.
 */

import { ComparisonMatrix } from '../components/ComparisonMatrix.js';
import { WhyUs, ServicesSection } from '../components/WhyUs.js';
import { PromiseBanner } from '../components/TestimonialsRail.js';
import { FinaleCTA } from '../components/Footer.js';

export function WhyUsPage() {
  return `
    <div class="page page-why-us">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Why Us</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">The Direct Difference</p>
          <h1 class="page-title">Why A Direct DMC Beats Travel Brokers</h1>
          <p class="page-subtitle">
            Most travellers don't realize that standard travel websites don't own vehicles or employ drivers. They subcontract to middleman brokers who subcontract to local DMCs. We cut out all middle tiers.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">15–25% Middleman Fee Saved</span>
            <span class="page-meta-pill">Direct On-Ground Fleet</span>
            <span class="page-meta-pill">15-Min Response SLA</span>
            <span class="page-meta-pill">Zero Subcontracting</span>
          </div>
        </div>
      </section>

      ${ComparisonMatrix()}

      ${WhyUs()}

      ${ServicesSection()}

      <!-- Regional Operations Desks -->
      <section class="regional-ops-section" style="padding: clamp(50px, 7vw, 90px) 0;">
        <div class="wrap">
          <div class="glass-surface-card">
            <div class="sec-head" style="margin-bottom:28px;">
              <p class="eyebrow" style="color:var(--gold-soft);">Our Ground Footprint</p>
              <h2 class="h-md" style="color:var(--gold-soft);">Physical Desks &amp; Dedicated Fleet Hubs</h2>
              <p class="lead" style="font-size:0.95rem;color:rgba(248,245,238,0.85);">
                When you travel with Direct Voyage, our own on-ground teams are stationed within 30 minutes of your hotel:
              </p>
            </div>

            <div class="cards c4 stagger rv">
              <div style="background:rgba(10,37,64,0.5);padding:22px;border-radius:12px;border:1px solid rgba(201,162,75,0.2);">
                <h4 style="color:var(--gold-light);margin-bottom:6px;font-size:1.05rem;">Chandigarh HQ</h4>
                <p style="font-size:0.85rem;color:rgba(248,245,238,0.8);line-height:1.5;margin:0;">Corporate Headquarters &amp; Central Flight Desk. 9 AM – 9 PM IST daily concierge team.</p>
              </div>
              <div style="background:rgba(10,37,64,0.5);padding:22px;border-radius:12px;border:1px solid rgba(201,162,75,0.2);">
                <h4 style="color:var(--gold-light);margin-bottom:6px;font-size:1.05rem;">Singapore Ops</h4>
                <p style="font-size:0.85rem;color:rgba(248,245,238,0.8);line-height:1.5;margin:0;">Marina Bay / Changi dispatch team. Executive Toyota Alphards and VIP lounge escorts.</p>
              </div>
              <div style="background:rgba(10,37,64,0.5);padding:22px;border-radius:12px;border:1px solid rgba(201,162,75,0.2);">
                <h4 style="color:var(--gold-light);margin-bottom:6px;font-size:1.05rem;">Bali Ground Hub</h4>
                <p style="font-size:0.85rem;color:rgba(248,245,238,0.8);line-height:1.5;margin:0;">Denpasar &amp; Ubud field coordination. Private speedboat charters to Nusa Penida and luxury villas.</p>
              </div>
              <div style="background:rgba(10,37,64,0.5);padding:22px;border-radius:12px;border:1px solid rgba(201,162,75,0.2);">
                <h4 style="color:var(--gold-light);margin-bottom:6px;font-size:1.05rem;">Bangkok &amp; Phuket</h4>
                <p style="font-size:0.85rem;color:rgba(248,245,238,0.8);line-height:1.5;margin:0;">Fast-track immigration clearance escorts and island-hopping fleet coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${PromiseBanner()}

      ${FinaleCTA()}
    </div>
  `;
}
