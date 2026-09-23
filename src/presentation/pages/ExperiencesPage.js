/**
 * Direct Voyage — Experiences & Specialities Page
 * 8 curated travel styles, luxury niches, private charters, and honeymoon odysseys.
 */

import { ExperiencesGrid } from '../components/ExperiencesGrid.js';
import { FinaleCTA } from '../components/Footer.js';

export function ExperiencesPage() {
  return `
    <div class="page page-experiences">
      <section class="page-hero">
        <div class="wrap">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="sep">/</span>
            <span class="current">Experiences</span>
          </nav>
          <p class="eyebrow" style="color:var(--c-gold);margin-bottom:8px;">Bespoke Travel Specialities</p>
          <h1 class="page-title">Curated Experiences &amp; Travel Styles</h1>
          <p class="page-subtitle">
            Whether it's a private catamaran sunset sail in Phuket, a helicopter flight over Dubai's Palm, or a family sanctuary villa in Bali, we design travel around what moves you.
          </p>
          <div class="page-meta-row">
            <span class="page-meta-pill">Ultra-Luxury Honeymoons</span>
            <span class="page-meta-pill">Private Yacht Charters</span>
            <span class="page-meta-pill">Family Villas</span>
            <span class="page-meta-pill">MICE &amp; Corporate Retreats</span>
          </div>
        </div>
      </section>

      ${ExperiencesGrid()}

      ${FinaleCTA()}
    </div>
  `;
}
