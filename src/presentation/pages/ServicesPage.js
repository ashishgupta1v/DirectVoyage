/**
 * Direct Voyage — Services Page
 * Complete On-Ground DMC Capabilities, Private Fleet, Stays, Tickets & Curated Logistics.
 */

import { ServicesSection } from '../components/WhyUs.js';
import { FleetShowcase } from '../components/FleetShowcase.js';
import { FinaleCTA } from '../components/Footer.js';

export function ServicesPage() {
  return `
    <div class="page page-services">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Services</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">End-to-End On-Ground Capabilities</p>
          <h1 class="page-title">Everything Under One Roof</h1>
          <p class="page-subtitle">
            From the moment your flight lands to your final departure gate, every single detail of your journey is managed directly by our own local teams and private fleet.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">Hotels &amp; Luxury Villas</span>
            <span class="page-meta-pill">Executive Airport Transfers</span>
            <span class="page-meta-pill">Curated Day Tours</span>
            <span class="page-meta-pill">Skip-The-Line Attraction Tickets</span>
          </div>
        </div>
      </section>

      ${ServicesSection()}

      ${FleetShowcase()}

      <section class="services-cta-section" style="padding: 0 0 clamp(60px, 8vw, 100px);">
        <div class="wrap center rv">
          <a href="/fleet" class="btn btn-gold">Explore Full Fleet &amp; Specifications &rarr;</a>
        </div>
      </section>

      ${FinaleCTA()}
    </div>
  `;
}
