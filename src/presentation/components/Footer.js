import { Icon } from './Icon.js';

export function FinaleCTA() {
  return `
<section class="finale">
  <div class="wrap center rv">
    <p class="eyebrow">Ready When You Are</p>
    <h2 class="h-xl">Your next journey starts<br/>with one message.</h2>
    <p class="lead">Singapore. Bali. Vietnam. Thailand. Dubai. One team, endless ways to travel — all built around you.</p>
    <div class="hero-actions" style="justify-content:center">
      <a class="btn btn-wa" href="https://wa.me/919888181890?text=Hi%20Direct%20Voyage%2C%20I%27d%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener">
        ${Icon('whatsapp', { size: 18 })}
        <span>Chat on WhatsApp</span>
      </a>
      <a class="btn btn-ghost" href="tel:+919888181890">Call +91 98881 81890</a>
    </div>
  </div>

  <!-- Decorative brand panorama: the five destinations in one skyline -->
  <svg class="panorama" viewBox="0 0 1600 240" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs>
      <linearGradient id="panoFar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#16496E"/><stop offset="1" stop-color="#0A2A45"/>
      </linearGradient>
      <linearGradient id="panoNear" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0A2540"/><stop offset="1" stop-color="#030D1A"/>
      </linearGradient>
      <linearGradient id="panoGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#C9A24B" stop-opacity="0"/><stop offset="1" stop-color="#C9A24B" stop-opacity=".16"/>
      </linearGradient>
    </defs>

    <rect y="150" width="1600" height="90" fill="url(#panoGlow)"/>
    <path class="leg" d="M40 96 Q 800 6 1560 88" fill="none" stroke="#C9A24B" stroke-width="1.3" stroke-dasharray="5 11" opacity=".45"/>
    <path class="plane" d="M-7 0 L7 4 L-7 8 L-4 4 Z" fill="#F7E7BE" opacity=".9"/>

    <!-- far layer -->
    <g fill="url(#panoFar)" opacity=".7">
      <path d="M120 210q10-74 38-74t36 74z"/><path d="M690 210q8-60 30-60t30 60z"/>
      <path d="M980 210q10-70 34-70t34 70z"/><path d="M1408 210q9-56 30-56t30 56z"/>
      <rect x="330" y="154" width="18" height="56"/><rect x="356" y="168" width="14" height="42"/>
      <rect x="600" y="162" width="16" height="48"/><rect x="1210" y="158" width="15" height="52"/>
    </g>

    <!-- DUBAI -->
    <g fill="url(#panoNear)">
      <path d="M172 210 L180 74 L188 210Z"/><rect x="168" y="140" width="24" height="70"/>
      <rect x="160" y="168" width="40" height="42"/>
      <rect x="92" y="160" width="26" height="50"/><rect x="124" y="176" width="20" height="34"/>
      <rect x="208" y="170" width="22" height="40"/>
      <path d="M244 210q4-72 28-86 3 62 20 86z"/>
    </g>
    <path d="M180 74 L183 112 L177 112Z" fill="#E4C67F"/>

    <!-- SINGAPORE -->
    <g fill="url(#panoNear)">
      <rect x="420" y="124" width="20" height="86"/><rect x="452" y="124" width="20" height="86"/><rect x="484" y="124" width="20" height="86"/>
    </g>
    <path d="M406 124q58-32 118 0l0 10q-60-28-118 0z" fill="#C9A24B"/>
    <path d="M372 210q4-40 18-52 2 24 9 34 4-22 11-28 5 20 5 46z" fill="url(#panoNear)"/>
    <g stroke="#12AFAB" stroke-width="2.6" fill="none" opacity=".75" stroke-linecap="round">
      <path d="M536 210v-52M536 168q-14-14-6-30M536 168q14-14 6-30M536 164q-18-6-18-24M536 164q18-6 18-24"/>
    </g>

    <!-- THAILAND -->
    <g fill="url(#panoNear)">
      <path d="M630 210q-4-84 36-98 42-14 46 44 3 22-8 28 12 6 10 26z"/>
    </g>
    <g>
      <path d="M742 196q42 16 84 0-11 18-42 18t-42-18z" fill="#C9A24B"/>
      <path d="M744 196 L726 170" stroke="#C9A24B" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M824 196 L842 172" stroke="#C9A24B" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    </g>

    <!-- VIETNAM -->
    <g fill="url(#panoNear)">
      <path d="M900 210q8-72 34-72t34 72z"/><path d="M1040 210q9-84 38-84t36 84z"/>
      <path d="M1160 210q7-58 28-58t28 58z"/>
    </g>
    <g>
      <path d="M974 210v-58" stroke="#030D1A" stroke-width="3" fill="none"/>
      <path d="M976 152q30 20 34 50-18 5-34 0z" fill="#C9564B" opacity=".9"/>
      <path d="M970 166q-22 16-24 42 14 5 24 0z" fill="#A8403A" opacity=".85"/>
    </g>
    <g fill="#F7E7BE" opacity=".8"><circle cx="1122" cy="196" r="3.4"/><circle cx="1146" cy="186" r="2.6"/><circle cx="1098" cy="188" r="2.6"/></g>

    <!-- BALI -->
    <g fill="url(#panoNear)">
      <path d="M1300 210 L1300 146 L1312 126 L1322 146 L1322 210Z"/>
      <path d="M1382 210 L1382 146 L1370 126 L1360 146 L1360 210Z"/>
    </g>
    <g stroke="#E4C67F" stroke-width="1.8" opacity=".6" fill="none">
      <path d="M1302 194h18M1304 176h16M1306 158h14"/><path d="M1362 194h18M1364 176h16M1366 158h14"/>
    </g>
    <path d="M1312 126 L1315 116 L1318 126Z" fill="#E4C67F"/>
    <path d="M1370 126 L1367 116 L1364 126Z" fill="#E4C67F"/>
    <g stroke="#030D1A" stroke-width="5" fill="none" stroke-linecap="round"><path d="M1254 210v-52"/><path d="M1432 210v-44"/></g>
    <g stroke="#12AFAB" stroke-width="3.2" fill="none" opacity=".8" stroke-linecap="round">
      <path d="M1254 160q-24-6-32-26M1254 160q24-6 32-26M1254 158q-8-24-26-32M1254 158q8-24 26-32"/>
      <path d="M1432 168q-20-5-27-22M1432 168q20-5 27-22"/>
    </g>

    <rect y="206" width="1600" height="34" fill="#030D1A"/>
  </svg>

  <div class="wrap">
    <nav class="pano-key" aria-label="Destinations">
      <a href="/destinations/dubai"><span>Dubai</span></a>
      <a href="/destinations/singapore"><span>Singapore</span></a>
      <a href="/destinations/thailand"><span>Thailand</span></a>
      <a href="/destinations/vietnam"><span>Vietnam</span></a>
      <a href="/destinations/bali"><span>Bali</span></a>
    </nav>
  </div>
</section>
`;
}

export function Footer() {
  return `
<footer>
  <div class="wrap foot-grid">
    <div class="foot">
      <a class="brand" href="/" style="margin-bottom:18px">
        <svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
          <g class="bm-bezel">
            <circle cx="32" cy="32" r="30.2" fill="none" stroke="#C9A24B" stroke-width="1" opacity=".5"/>
            <circle cx="32" cy="32" r="24.6" fill="none" stroke="#C9A24B" stroke-width=".7" opacity=".28"/>
            <path stroke="#C9A24B" stroke-width="1.1" opacity=".55" stroke-linecap="round" fill="none"
              d="M32 6.2V2.8M44.9 9.65 46.6 6.71M54.34 19.1 57.29 17.4M57.8 32H61.2M54.34 44.9 57.29 46.6M44.9 54.34 46.6 57.29M32 57.8V61.2M19.1 54.34 17.4 57.29M9.66 44.9 6.71 46.6M6.2 32H2.8M9.66 19.1 6.71 17.4M19.1 9.66 17.4 6.71"/>
          </g>
          <g class="bm-star">
            <g fill="#C9A24B" opacity=".4">
              <path d="M42.25 21.75 32 27.6 32 32 36.4 32Z"/><path d="M42.25 42.25 36.4 32 32 32 32 36.4Z"/>
              <path d="M21.75 42.25 32 36.4 32 32 27.6 32Z"/><path d="M21.75 21.75 27.6 32 32 32 32 27.6Z"/>
            </g>
            <g fill="#F7E7BE">
              <path d="M32 9 27.62 27.62 32 32Z"/><path d="M55 32 36.38 27.62 32 32Z"/>
              <path d="M32 55 36.38 36.38 32 32Z"/><path d="M9 32 27.62 36.38 32 32Z"/>
            </g>
            <g fill="#BC8A31">
              <path d="M32 9 32 32 36.38 27.62Z"/><path d="M55 32 32 32 36.38 36.38Z"/>
              <path d="M32 55 32 32 27.62 36.38Z"/><path d="M9 32 32 32 27.62 27.62Z"/>
            </g>
          </g>
          <circle cx="32" cy="32" r="3.8" fill="#061829"/>
          <circle cx="32" cy="32" r="3.8" fill="none" stroke="#F7E7BE" stroke-width=".9"/>
        </svg>
        <span class="brand-text">
          <span class="brand-name">DIRECT VOYAGE</span>
          <span class="brand-rule" aria-hidden="true"></span>
          <span class="brand-tag">Travel Your Way</span>
        </span>
      </a>
      <p class="lead" style="font-size:.9rem;max-width:36ch">International Destination Management Company. Our own fleet, our own on-ground teams, and honest pricing across five destinations.</p>
      <div class="socials">
        <a href="https://instagram.com/directvoyage" target="_blank" rel="noopener" aria-label="Instagram">${Icon('instagram', { size: 18 })}</a>
        <a href="https://wa.me/919888181890" target="_blank" rel="noopener" aria-label="WhatsApp">${Icon('whatsapp', { size: 18 })}</a>
        <a href="mailto:help@directvoyage.in" aria-label="Email">${Icon('mail', { size: 18 })}</a>
        <a href="tel:+919888181890" aria-label="Call">${Icon('phone', { size: 18 })}</a>
      </div>
    </div>

    <div class="foot">
      <h3>Destinations</h3>
      <ul>
        <li><a href="/destinations/singapore">Singapore</a></li>
        <li><a href="/destinations/bali">Bali</a></li>
        <li><a href="/destinations/thailand">Thailand</a></li>
        <li><a href="/destinations/vietnam">Vietnam</a></li>
        <li><a href="/destinations/dubai">Dubai</a></li>
      </ul>
    </div>

    <div class="foot">
      <h3>Services</h3>
      <ul>
        <li><a href="/services">Hotels &amp; Villas</a></li>
        <li><a href="/fleet">Transfers &amp; Fleet</a></li>
        <li><a href="/planner">Custom Itineraries</a></li>
        <li><a href="/services">Cruises</a></li>
        <li><a href="/services">Attraction Tickets</a></li>
        <li><a href="/experiences">Group &amp; Corporate</a></li>
      </ul>
    </div>

    <div class="foot">
      <h3>Get In Touch</h3>
      <ul>
        <li><a href="tel:+919888181890">+91 98881 81890</a></li>
        <li><a href="mailto:help@directvoyage.in">help@directvoyage.in</a></li>
        <li><a href="https://instagram.com/directvoyage" target="_blank" rel="noopener">@directvoyage</a></li>
        <li><a href="/planner">Request a quote</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
    </div>
  </div>

  <div class="foot-bar">
    <div class="wrap">
      <p>© <span id="yr">2026</span> Direct Voyage · Travel Your Way</p>
      <p aria-hidden="true" style="color:var(--gold-text)">◆</p>
      <p>Best Prices. Best Comfort. Best Experiences.</p>
    </div>
  </div>
</footer>
`;
}

export function FloatingActions() {
  return `
<!-- floating actions -->
<a class="fab" href="https://wa.me/919888181890?text=Hi%20Direct%20Voyage%2C%20I%27d%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
  ${Icon('whatsapp', { size: 20 })}
  <span>WhatsApp</span>
</a>

<button class="totop" id="totop" type="button" aria-label="Back to top">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
</button>

<!-- sticky mobile action bar -->
<div class="mbar" id="mbar">
  <div class="mbar-in">
    <a class="m-call" href="tel:+919888181890">
      ${Icon('phone', { size: 18 })}
      <span>Call</span>
    </a>
    <a class="m-wa" href="https://wa.me/919888181890?text=Hi%20Direct%20Voyage%2C%20I%27d%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener">
      ${Icon('whatsapp', { size: 18 })}
      <span>WhatsApp</span>
    </a>
    <a class="m-plan" href="/planner"><span>Plan My Trip</span></a>
  </div>
</div>
`;
}
