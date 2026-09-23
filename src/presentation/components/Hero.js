import { Icon } from './Icon.js';

export function Hero() {
  return `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="stardust" id="stars" aria-hidden="true"></div>
  <div class="hero-sun" aria-hidden="true"></div>

  <!-- Decorative compass watermark -->
  <svg class="compass-wm" viewBox="0 0 200 200" aria-hidden="true">
    <circle cx="100" cy="100" r="96" fill="none" stroke="#C9A24B" stroke-width=".8"/>
    <circle cx="100" cy="100" r="74" fill="none" stroke="#C9A24B" stroke-width=".5" stroke-dasharray="3 6"/>
    <path d="M100 6 L112 88 L194 100 L112 112 L100 194 L88 112 L6 100 L88 88 Z" fill="#C9A24B"/>
  </svg>

  <!-- Gold flight path with a plane tracing it -->
  <div class="flight" aria-hidden="true">
    <svg class="path" viewBox="0 0 1440 640" preserveAspectRatio="none">
      <path d="M-40 300 Q 520 90 1480 240" fill="none" stroke="#C9A24B" stroke-width="1.1" stroke-dasharray="6 11" opacity=".45"/>
    </svg>
    <svg class="plane" viewBox="0 0 24 24">
      <path d="M2 16l20-6-6 12-3-5z" fill="#F2DFAE"/>
    </svg>
  </div>

  <!-- Layered cinematic horizon: islands, sea and a blended skyline -->
  <div class="hero-scene" aria-hidden="true">
    <svg viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="hSea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1B6F80"/><stop offset=".45" stop-color="#0D3F5C"/><stop offset="1" stop-color="#04101F"/>
        </linearGradient>
        <linearGradient id="hFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1A4E74"/><stop offset="1" stop-color="#0C2C4A"/>
        </linearGradient>
        <linearGradient id="hMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0E3455"/><stop offset="1" stop-color="#071F36"/>
        </linearGradient>
        <linearGradient id="hNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#071C30"/><stop offset="1" stop-color="#04101F"/>
        </linearGradient>
        <linearGradient id="hGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F2DFAE" stop-opacity=".5"/><stop offset="1" stop-color="#F2DFAE" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- far skyline: Dubai spire + towers + Marina-Bay style triple tower -->
      <g class="lyr" data-depth="6" fill="url(#hFar)" opacity=".92">
        <path d="M150 300 L156 120 L162 300 Z"/>
        <rect x="140" y="212" width="32" height="88"/>
        <rect x="186" y="238" width="26" height="62"/><rect x="220" y="254" width="20" height="46"/>
        <rect x="74" y="248" width="28" height="52"/><rect x="108" y="262" width="20" height="38"/>
        <rect x="1188" y="216" width="26" height="84"/><rect x="1222" y="196" width="30" height="104"/>
        <rect x="1260" y="234" width="22" height="66"/><rect x="1150" y="246" width="24" height="54"/>
        <g>
          <rect x="1010" y="196" width="19" height="104"/><rect x="1038" y="196" width="19" height="104"/>
          <rect x="1066" y="196" width="19" height="104"/>
          <path d="M1000 196 q47 -30 95 0 z"/>
        </g>
        <rect x="1300" y="258" width="26" height="42"/><rect x="1336" y="240" width="18" height="60"/>
      </g>
      <!-- gold horizon glow -->
      <rect x="0" y="278" width="1440" height="34" fill="url(#hGlow)" opacity=".55"/>

      <!-- mid karst islands -->
      <g class="lyr" data-depth="11" fill="url(#hMid)">
        <path d="M300 312 q14 -108 58 -108 q44 0 54 108 Z"/>
        <path d="M400 312 q10 -74 40 -74 q30 0 36 74 Z" opacity=".9"/>
        <path d="M700 312 q16 -122 62 -122 q46 0 56 122 Z"/>
        <path d="M812 312 q10 -80 42 -80 q32 0 38 80 Z" opacity=".9"/>
        <path d="M540 312 q8 -58 30 -58 q22 0 26 58 Z" opacity=".75"/>
      </g>

      <!-- sea -->
      <rect x="0" y="310" width="1440" height="310" fill="url(#hSea)"/>
      <g opacity=".3" stroke="#7FCFCB" fill="none" stroke-width="1.4">
        <path d="M0 356 q90 -12 180 0 t180 0 t180 0 t180 0 t180 0 t180 0 t180 0"/>
        <path d="M0 392 q110 -14 220 0 t220 0 t220 0 t220 0 t220 0 t220 0"/>
        <path d="M0 438 q130 -16 260 0 t260 0 t260 0 t260 0 t260 0"/>
      </g>
      <!-- sun reflection on the water -->
      <g opacity=".5" fill="#F2DFAE">
        <rect x="1010" y="330" width="60" height="4" rx="2"/><rect x="994" y="352" width="92" height="4" rx="2"/>
        <rect x="1006" y="376" width="68" height="4" rx="2"/><rect x="980" y="402" width="120" height="5" rx="2"/>
        <rect x="1014" y="432" width="52" height="4" rx="2"/>
      </g>

      <!-- a junk boat silhouette -->
      <g class="lyr" data-depth="16" fill="#04101F" opacity=".82">
        <path d="M300 404 h120 l-16 26 h-88 z"/>
        <path d="M352 404 v-52 l40 40 z"/><path d="M348 404 v-52 l-34 34 z"/>
      </g>

      <!-- near shore with palms -->
      <g class="lyr" data-depth="22">
        <path d="M0 470 q180 -34 360 -6 q190 30 360 -2 q190 -34 360 -2 q190 30 360 -6 L1440 620 L0 620 Z" fill="url(#hNear)"/>
        <g stroke="#04101F" stroke-width="7" fill="none" stroke-linecap="round">
          <path d="M120 620 q-10 -78 -26 -108"/>
          <path d="M94 512 q-34 -20 -50 -50 M94 512 q34 -20 50 -50 M94 512 q-12 -42 -34 -62 M94 512 q12 -42 34 -62"/>
          <path d="M1330 620 q10 -88 30 -120"/>
          <path d="M1360 500 q-36 -22 -54 -52 M1360 500 q36 -22 54 -52 M1360 500 q-12 -44 -36 -66 M1360 500 q12 -44 36 -66"/>
        </g>
      </g>
    </svg>
  </div>

  <div class="wrap hero-grid">
    <div>
      <p class="eyebrow">International Destination Management Company</p>
      <h1 id="hero-h">
        <span class="ln"><span>Your Destination.</span></span>
        <span class="ln"><span>Your Comfort.</span></span>
        <span class="ln"><span><em class="shine">Our Responsibility.</em></span></span>
      </h1>
      <p class="hero-sub">Singapore · Bali · Vietnam · Thailand · Dubai. We own our fleet and operate directly at every destination — so you get better prices, better comfort and better experiences, with nothing hidden in between.</p>
      <div class="hero-actions">
        <a class="btn btn-gold btn-lg" href="/planner">Plan My Trip</a>
        <a class="btn btn-ghost btn-lg" href="/destinations">Explore Destinations</a>
      </div>
      <div class="hero-rating">
        <span class="faces" aria-hidden="true"><i>A</i><i>M</i><i>P</i><i>+</i></span>
        <span class="stars-inline" aria-hidden="true">★★★★★</span>
        <span>Rated 5.0 by our travellers · <a href="/testimonials" class="gold">Read their stories</a></span>
      </div>
      <div class="hero-meta">
        <div><b class="shine num" data-count="5">5</b><span>Destinations</span></div>
        <div><b class="shine">Own</b><span>Fleet</span></div>
        <div><b class="shine num" data-count="0">0</b><span>Hidden Costs</span></div>
        <div><b class="shine">24/7</b><span>On-Ground Support</span></div>
      </div>
    </div>

    <aside class="quick" aria-labelledby="quick-h">
      <span class="tagpill">Free · No obligation</span>
      <h2 id="quick-h">Get your custom quote</h2>
      <p>Tell us three things. We reply with a tailored plan and a transparent price — usually the same day.</p>

      <output class="form-alert" id="quickAlert">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
        <span><b>Thank you!</b>We've opened WhatsApp with your details. Didn't open? <a href="mailto:help@directvoyage.in">Email us instead</a>.</span>
      </output>

      <form class="js-wa" data-context="Quick Quote" data-alert="quickAlert" novalidate>
        <div class="field">
          <label for="q-name">Your name <span class="req" aria-hidden="true">*</span></label>
          <input id="q-name" name="name" required placeholder="e.g. Aarav Sharma" autocomplete="name" aria-describedby="q-name-e" />
          <span class="err-msg" id="q-name-e">Please tell us your name.</span>
        </div>
        <div class="grid-2">
          <div class="field">
            <label for="q-dest">Destination <span class="req" aria-hidden="true">*</span></label>
            <select id="q-dest" name="destination" required aria-describedby="q-dest-e">
              <option value="">Choose…</option>
              <option>Singapore</option><option>Bali</option><option>Thailand</option>
              <option>Vietnam</option><option>Dubai</option><option>Cruise</option>
              <option>Multi-country</option><option>Not sure yet</option>
            </select>
            <span class="err-msg" id="q-dest-e">Pick a destination.</span>
          </div>
          <div class="field">
            <label for="q-travellers">Travellers</label>
            <input id="q-travellers" name="travellers" type="number" inputmode="numeric" min="1" max="60" value="2" required />
          </div>
        </div>
        <div class="field">
          <label for="q-phone">WhatsApp number <span class="req" aria-hidden="true">*</span></label>
          <input id="q-phone" name="phone" type="tel" inputmode="tel" required placeholder="+91 …" autocomplete="tel" aria-describedby="q-phone-e" />
          <span class="err-msg" id="q-phone-e">We need a number to reply on.</span>
        </div>
        <div class="hp" aria-hidden="true"><label for="q-company">Company</label><input id="q-company" name="_company" tabindex="-1" autocomplete="off" /></div>
        <button class="btn btn-gold btn-block" type="submit">
          <span class="spin" aria-hidden="true"></span>
          ${Icon('whatsapp', { size: 18 })}
          <span>Send Enquiry via WhatsApp</span>
        </button>
        <p class="form-note">Opens WhatsApp with your details pre-filled. No spam, ever.</p>
      </form>
    </aside>
  </div>

  <a class="scroll-cue" href="/about" aria-label="Learn about Direct Voyage">
    <span>About</span><i aria-hidden="true"></i>
  </a>

  <nav class="hero-ticker" aria-label="Destination shortcuts">
    <a href="/destinations/singapore">Singapore<small>from ₹42,900</small></a>
    <a href="/destinations/bali">Bali<small>from ₹38,900</small></a>
    <a href="/destinations/thailand">Thailand<small>from ₹34,900</small></a>
    <a href="/destinations/vietnam">Vietnam<small>from ₹46,900</small></a>
    <a href="/destinations/dubai">Dubai<small>from ₹49,900</small></a>
  </nav>
</section>
`;
}
