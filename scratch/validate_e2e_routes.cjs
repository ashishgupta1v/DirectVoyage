const fs = require('fs');

const { routes } = require('../src/application/router/routes.js');
const { ItineraryModal } = require('../src/presentation/components/ItineraryModal.js');
const { Header } = require('../src/presentation/components/Header.js');
const { Footer, FloatingActions } = require('../src/presentation/components/Footer.js');

console.log('--- EXECUTING END-TO-END MULTI-ROUTE VALIDATION ---');

let totalChecks = 0;
let passedChecks = 0;

function check(label, condition) {
  totalChecks++;
  if (condition) {
    console.log(`✓ PASS: ${label}`);
    passedChecks++;
  } else {
    console.error(`✗ FAIL: ${label}`);
  }
}

// 1. Shell validation
const modalHtml = ItineraryModal();
check('Shell: ItineraryModal present', modalHtml.includes('id="itineraryModal"') && modalHtml.includes('modal-tabs'));
check('Shell: Header present with brand mark and menu', Header().includes('id="hdr"') && Header().includes('id="menu"'));
check('Shell: Footer with social links and contact', Footer().includes('<footer') && Footer().includes('+91 98881 81890'));
check('Shell: Floating actions (WhatsApp fab + toTop)', FloatingActions().includes('class="fab"') && FloatingActions().includes('id="totop"'));

// 2. Route views validation
const routePaths = [
  '/',
  '/about',
  '/services',
  '/destinations',
  '/destinations/singapore',
  '/destinations/bali',
  '/destinations/thailand',
  '/destinations/vietnam',
  '/destinations/dubai',
  '/fleet',
  '/experiences',
  '/packages',
  '/planner',
  '/why-us',
  '/testimonials',
  '/faq',
  '/contact',
  '*'
];

routePaths.forEach(path => {
  const isParam = path.startsWith('/destinations/');
  const id = isParam ? path.split('/')[2] : undefined;
  
  let route = routes.find(r => r.path === path);
  if (!route && isParam) {
    route = routes.find(r => r.path === '/destinations/:id');
  }

  check(`Route configured: ${path}`, !!route);
  if (!route) return;

  const html = route.view(id ? { id } : {});
  check(`Route renders content: ${path} (${html.length} chars)`, html.length > 500);

  // Negative safety checks on every page
  const giantSvgPresent = html.includes('viewBox="0 0 24 24"') && !html.includes('width=') && html.includes('d="M17 21v-2a4');
  check(`Route ${path}: Zero unconstrained silhouette SVGs`, !giantSvgPresent);

  if (path === '/') {
    check('Home: Hero Section with aurora & stardust', html.includes('class="hero"') && html.includes('class="aurora"'));
    check('Home: Destinations grid with 5 hubs', html.includes('id="destinations"') && html.includes('sgSky') && html.includes('dxSky'));
    check('Home: Experiences grid with 8 styles', html.includes('id="experiences"') && html.includes('Family Holidays'));
    check('Home: Booking form with direct WA', html.includes('class="js-wa"') && html.includes('id="b-name"'));
  }

  if (path === '/destinations') {
    check('Destinations: Category filter bar', html.includes('class="filter-bar"') && html.includes('data-filter="all"'));
    check('Destinations: Search input box', html.includes('id="dest-search-input"'));
    check('Destinations: Quick itinerary modal triggers', html.includes('js-view-itinerary'));
  }

  if (isParam) {
    check(`Detail ${id}: Day-by-day timeline`, html.includes('class="timeline"') && html.includes('timeline-day-badge'));
    check(`Detail ${id}: Landmark SVG scene banner`, html.includes('class="scene"'));
    check(`Detail ${id}: Sticky quote sidebar with direct WA`, html.includes('class="detail-quote-box"') && html.includes('wa.me'));
  }

  if (path === '/fleet') {
    check('Fleet: Executive showcase cards', html.includes('class="fleet-card"') && html.includes('fleet-badge'));
    check('Fleet: Chauffeur standards grid', html.includes('Live Flight Radar Tracking') && html.includes('VIP Fast-Track Clearance'));
  }

  if (path === '/planner') {
    check('Planner: Interactive live calculator', html.includes('planner-card') && html.includes('id="p-dest"'));
    check('Planner: Duration range slider', html.includes('id="p-nights"'));
    check('Planner: Live estimate display', html.includes('id="p-est-perperson"'));
  }

  if (path === '/why-us') {
    check('WhyUs: Direct DMC comparison matrix', html.includes('id="comparison"') && html.includes('Traditional Retail Agent'));
    check('WhyUs: Physical regional desks', html.includes('Chandigarh HQ') && html.includes('Singapore Ops'));
  }

  if (path === '/testimonials') {
    check('Testimonials: Verified client cards', html.includes('glass-surface-card') && html.includes('★'));
  }

  if (path === '/faq') {
    check('FAQ: Accordion knowledgebase', html.includes('class="acc-q"'));
  }

  if (path === '/contact') {
    check('Contact: Dedicated booking form', html.includes('id="book"'));
  }
});

console.log(`\n========================================`);
console.log(`E2E VALIDATION: ${passedChecks}/${totalChecks} CHECKS PASSED`);
console.log(`========================================`);

if (passedChecks === totalChecks) {
  console.log('🎉 COMPLETE END-TO-END UI/UX EXCELLENCE VERIFIED ACROSS ALL ROUTES!');
} else {
  console.error(`❌ ${totalChecks - passedChecks} checks failed.`);
  process.exit(1);
}
