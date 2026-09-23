const fs = require('fs');

async function run() {
  console.log('Testing full application render...');
  
  // Test HomePage assembly
  const { HomePage } = await import('../src/presentation/pages/HomePage.js');
  const { Header, MobileDrawer } = await import('../src/presentation/components/Header.js');
  const { Footer, FloatingActions, FinaleCTA } = await import('../src/presentation/components/Footer.js');
  const { ItineraryModal } = await import('../src/presentation/components/ItineraryModal.js');
  
  const fullHtml = `
    ${Header()}
    ${MobileDrawer()}
    <main id="router-view">
      ${HomePage()}
    </main>
    ${Footer()}
    ${FloatingActions()}
    ${ItineraryModal()}
  `;

  console.log('Total rendered HTML size:', fullHtml.length, 'bytes');

  const landmarks = [
    { name: 'Header', pattern: /<header id="hdr">/ },
    { name: 'Mobile Drawer', pattern: /<nav class="drawer" id="drawer"/ },
    { name: 'Hero Section', pattern: /<section class="hero" aria-labelledby="hero-h">/ },
    { name: 'Aurora animation', pattern: /<div class="aurora"/ },
    { name: 'Stardust stars', pattern: /<div class="stardust" id="stars"/ },
    { name: 'Compass Watermark SVG', pattern: /<svg class="compass-wm"/ },
    { name: 'Flight Path & Plane', pattern: /<div class="flight"/ },
    { name: 'Hero Horizon Scene', pattern: /<div class="hero-scene"/ },
    { name: 'Scroll Cue', pattern: /<a class="scroll-cue"/ },
    { name: 'Hero Ticker', pattern: /<nav class="hero-ticker"/ },
    { name: 'Trust Marquee Strip', pattern: /<div class="strip"/ },
    { name: 'About Section', pattern: /<section id="about"/ },
    { name: 'Why Us Section', pattern: /<section id="why"/ },
    { name: 'Services Section', pattern: /<section id="services"/ },
    { name: 'Fleet Showcase Section', pattern: /<section id="fleet"/ },
    { name: 'Comparison Matrix Section', pattern: /<section class="light" id="comparison"/ },
    { name: 'Destinations Section', pattern: /<section id="destinations"/ },
    { name: 'Singapore Card with SVG Scene', pattern: /id="dest-singapore"/ },
    { name: 'Bali Card with SVG Scene', pattern: /id="dest-bali"/ },
    { name: 'Thailand Card with SVG Scene', pattern: /id="dest-thailand"/ },
    { name: 'Vietnam Card with SVG Scene', pattern: /id="dest-vietnam"/ },
    { name: 'Dubai Card with SVG Scene', pattern: /id="dest-dubai"/ },
    { name: 'Experiences Section', pattern: /<section id="experiences"/ },
    { name: 'How It Works Section', pattern: /<section id="how"/ },
    { name: 'Packages Section', pattern: /<section id="packages"/ },
    { name: 'Promise Banner', pattern: /<section class="promise"/ },
    { name: 'Testimonials Section', pattern: /<section id="stories"/ },
    { name: 'Testimonial Rail Track', pattern: /id="rail"/ },
    { name: 'Interactive Trip Planner', pattern: /<section id="planner"/ },
    { name: 'Booking Section', pattern: /<section id="book"/ },
    { name: 'WhatsApp Booking Form', pattern: /<form class="js-wa"/ },
    { name: 'FAQ Section', pattern: /<section id="faq"/ },
    { name: 'FAQ Accordion Items', pattern: /class="acc"/ },
    { name: 'Finale CTA Section', pattern: /<section class="finale">/ },
    { name: 'Panorama Skyline SVG', pattern: /<svg class="panorama"/ },
    { name: 'Footer', pattern: /<footer>/ },
    { name: 'WhatsApp FAB Button', pattern: /<a class="fab"/ },
    { name: 'Back to Top Button', pattern: /<button class="totop" id="totop"/ },
    { name: 'Mobile Bottom Bar', pattern: /<div class="mbar" id="mbar"/ },
    { name: 'Itinerary Modal', pattern: /id="itineraryModal"/ }
  ];

  console.log('\n--- Verifying All Landmark Components & Elements ---');
  let missingCount = 0;
  landmarks.forEach(item => {
    const found = item.pattern.test(fullHtml);
    console.log((found ? '✓ PASS: ' : '✗ FAIL: ') + item.name);
    if (!found) missingCount++;
  });

  // Count SVGs
  const svgCount = (fullHtml.match(/<svg/g) || []).length;
  console.log('\nTotal SVGs rendered in full DOM:', svgCount);

  if (missingCount === 0) {
    console.log('\n🎉 ALL 40 LANDMARK CHECKS PASSED! Full fidelity verified.');
  } else {
    console.error('\n⚠️', missingCount, 'checks failed!');
    process.exit(1);
  }
}

run().catch(e => { console.error(e); process.exit(1); });
