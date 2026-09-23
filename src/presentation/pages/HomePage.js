/**
 * Direct Voyage — Master Home Page View
 * Complete, uninterrupted luxury voyage containing all 14 core sections with 100% original fidelity.
 */

import { Hero } from '../components/Hero.js';
import { TrustStrip, AboutDMC } from '../components/AboutDMC.js';
import { WhyUs, ServicesSection } from '../components/WhyUs.js';
import { DestinationsGrid } from '../components/DestinationsGrid.js';
import { ExperiencesGrid } from '../components/ExperiencesGrid.js';
import { HowItWorks, PackagesGrid } from '../components/PackagesGrid.js';
import { PromiseBanner, TestimonialsRail } from '../components/TestimonialsRail.js';
import { BookingSection } from '../components/BookingSection.js';
import { FaqAccordion } from '../components/FaqAccordion.js';
import { FinaleCTA } from '../components/Footer.js';

export function HomePage() {
  return `
    <main id="top" tabindex="-1">
      ${Hero()}
      ${TrustStrip()}
      ${AboutDMC()}
      ${WhyUs()}
      ${ServicesSection()}
      ${DestinationsGrid()}
      ${ExperiencesGrid()}
      ${HowItWorks()}
      ${PackagesGrid()}
      ${PromiseBanner()}
      ${TestimonialsRail()}
      ${BookingSection()}
      ${FaqAccordion()}
      ${FinaleCTA()}
    </main>
  `;
}
