export function DestinationsGrid() {
  return `
<section id="destinations" aria-labelledby="dest-h">
  <div class="wrap">
    <div class="center rv sec-head">
      <p class="eyebrow">Where We Operate</p>
      <h2 class="h-xl" id="dest-h">Five destinations. Endless ways to travel.</h2>
      <p class="lead">We operate directly in each of these — our vehicles, our coordinators, our relationships. That's why we can price them better.</p>
    </div>

    <div class="dest-grid stagger rv mt-lg">

      <!-- SINGAPORE — decorative brand scene; swap for a photo by replacing this SVG with <img> -->
      <article class="dest">
        <svg class="scene" viewBox="0 108 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="sgSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#071F38"/><stop offset=".26" stop-color="#11486B"/>
              <stop offset=".46" stop-color="#2A7E96"/><stop offset=".58" stop-color="#7FA9A6"/>
              <stop offset=".66" stop-color="#C9A24B"/><stop offset=".72" stop-color="#2B5F7A"/>
              <stop offset="1" stop-color="#061829"/>
            </linearGradient>
            <radialGradient id="sgSun" cx=".5" cy=".5" r=".5">
              <stop offset="0" stop-color="#FDF4DD"/><stop offset=".34" stop-color="#F2DFAE" stop-opacity=".85"/>
              <stop offset=".62" stop-color="#E4C67F" stop-opacity=".34"/><stop offset="1" stop-color="#E4C67F" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="sgWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#1C6E82"/><stop offset=".35" stop-color="#0E3E58"/><stop offset="1" stop-color="#030D1A"/>
            </linearGradient>
            <linearGradient id="sgHaze" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#C9A24B" stop-opacity="0"/><stop offset="1" stop-color="#E4C67F" stop-opacity=".3"/>
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#sgSky)"/>
          <circle cx="292" cy="290" r="130" fill="url(#sgSun)"/>
          <circle cx="292" cy="290" r="38" fill="#FBEFD2" opacity=".92"/>
          <!-- cloud bands -->
          <g fill="#F2DFAE" opacity=".16">
            <rect x="0" y="150" width="400" height="7" rx="3.5"/><rect x="60" y="186" width="300" height="5" rx="2.5"/>
            <rect x="140" y="112" width="230" height="4" rx="2"/>
          </g>
          <!-- far skyline -->
          <g fill="#0D3350" opacity=".9">
            <rect x="0" y="252" width="26" height="78"/><rect x="30" y="228" width="18" height="102"/>
            <rect x="52" y="266" width="24" height="64"/><rect x="342" y="240" width="22" height="90"/>
            <rect x="368" y="262" width="32" height="68"/>
          </g>
          <!-- Singapore Flyer -->
          <g stroke="#0B2A44" stroke-width="3" fill="none" opacity=".9">
            <circle cx="60" cy="238" r="30"/><path d="M60 208v60M30 238h60M39 217l42 42M81 217l-42 42"/>
            <path d="M48 266v64M72 266v64"/>
          </g>
          <!-- ArtScience lotus -->
          <g fill="#092A44">
            <path d="M96 330q4-46 20-62 2 26 10 34 4-30 14-40 2 32 10 40 4-24 12-30 6 24 6 58z"/>
          </g>
          <!-- Marina Bay Sands -->
          <g fill="#061F35">
            <rect x="152" y="196" width="20" height="134"/><rect x="190" y="196" width="20" height="134"/><rect x="228" y="196" width="20" height="134"/>
          </g>
          <g fill="#0A2A42" opacity=".55">
            <rect x="152" y="196" width="7" height="134"/><rect x="190" y="196" width="7" height="134"/><rect x="228" y="196" width="7" height="134"/>
          </g>
          <path d="M136 196q64-38 132 0l0 11q-68-32-132 0z" fill="#C9A24B"/>
          <path d="M136 196q64-38 132 0l0 4q-68-30-132 0z" fill="#F2DFAE" opacity=".7"/>
          <!-- supertrees -->
          <g stroke="#0FA3A0" stroke-width="3.2" fill="none" opacity=".92" stroke-linecap="round">
            <path d="M330 330v-68M330 274q-18-18-8-38M330 274q18-18 8-38M330 268q-22-6-24-28M330 268q22-6 24-28"/>
            <path d="M372 330v-52M372 288q-14-14-6-30M372 288q14-14 6-30"/>
          </g>
          <!-- golden horizon haze -->
          <rect x="0" y="288" width="400" height="42" fill="url(#sgHaze)"/>
          <!-- water -->
          <rect y="330" width="400" height="170" fill="url(#sgWater)"/>
          <g opacity=".5"><rect x="278" y="330" width="28" height="86" fill="#F2DFAE" opacity=".25"/></g>
          <g stroke="#8FDAD6" stroke-width="1.8" opacity=".38" fill="none" stroke-linecap="round">
            <path d="M18 352h60M152 346h96M286 358h66M60 374h84M250 380h96M24 398h58M168 404h120"/>
          </g>
        </svg>
        <div class="scrim"></div>
        <div class="dest-price"><i>From</i><b>₹42,900</b><span>per person</span></div>
        <div class="dest-body">
          <p class="dest-flag">
            <svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#ED2939"/><rect y="8" width="24" height="8" fill="#fff"/><circle cx="6" cy="4" r="2.7" fill="#fff"/><circle cx="7.6" cy="4" r="2.7" fill="#ED2939"/><g fill="#fff"><circle cx="9.9" cy="2.2" r=".55"/><circle cx="11.5" cy="3.4" r=".55"/><circle cx="10.9" cy="5.3" r=".55"/><circle cx="8.9" cy="5.3" r=".55"/><circle cx="8.3" cy="3.4" r=".55"/></g></svg>
            Singapore
          </p>
          <h3>The Lion City, Your Way</h3>
          <p>Skyline dinners, Gardens by the Bay and Sentosa — seamless from the moment you land.</p>
          <div class="dest-meta">
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>4–5 nights</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v3M16 3v3M3 9h18"/><rect x="3" y="5" width="18" height="16" rx="2"/></svg>Great year-round</span>
          </div>
          <div class="chips"><span class="chip">Marina Bay</span><span class="chip">Sentosa</span><span class="chip">Universal</span></div>
          <a class="dest-link" href="/destinations/singapore" data-dest="Singapore">Explore Singapore <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <!-- BALI — decorative brand scene; swap for a photo by replacing this SVG with <img> -->
      <article class="dest">
        <svg class="scene" viewBox="0 84 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="baSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#0A2742"/><stop offset=".22" stop-color="#1E5C7E"/>
              <stop offset=".42" stop-color="#4E8F9B"/><stop offset=".56" stop-color="#D9AE63"/>
              <stop offset=".64" stop-color="#E8C88A"/><stop offset=".74" stop-color="#2E6273"/>
              <stop offset="1" stop-color="#061829"/>
            </linearGradient>
            <radialGradient id="baSun" cx=".5" cy=".5" r=".5">
              <stop offset="0" stop-color="#FFF7E4"/><stop offset=".36" stop-color="#F7E7BE" stop-opacity=".8"/>
              <stop offset="1" stop-color="#E4C67F" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="baPaddy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#0D3F4A"/><stop offset="1" stop-color="#030F1C"/>
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#baSky)"/>
          <circle cx="124" cy="272" r="120" fill="url(#baSun)"/>
          <circle cx="124" cy="272" r="40" fill="#FFF4DC" opacity=".95"/>
          <g fill="#F7E7BE" opacity=".18">
            <rect x="0" y="128" width="400" height="6" rx="3"/><rect x="90" y="166" width="280" height="4" rx="2"/><rect x="40" y="96" width="200" height="4" rx="2"/>
          </g>
          <!-- Mt Agung -->
          <path d="M228 306 L308 148 L318 160 L330 146 L400 306Z" fill="#0C3550" opacity=".85"/>
          <path d="M296 176 L308 148 L318 160 L330 146 L346 180q-26 10-50 -4z" fill="#F7E7BE" opacity=".3"/>
          <!-- rice terraces -->
          <path d="M0 306q120-40 210 0 92 40 190 6L400 500 0 500Z" fill="url(#baPaddy)"/>
          <g stroke="#C9A24B" stroke-width="2" opacity=".42" fill="none">
            <path d="M0 330q120-36 208 0 90 36 192 4"/><path d="M0 358q120-34 208 0 90 34 192 4"/>
            <path d="M0 388q120-32 208 0 90 32 192 4"/><path d="M0 420q120-30 208 0 90 30 192 4"/>
          </g>
          <!-- candi bentar split gate -->
          <g fill="#051D31">
            <path d="M150 316 L150 214 L166 186 L178 214 L178 316Z"/>
            <path d="M250 316 L250 214 L234 186 L222 214 L222 316Z"/>
          </g>
          <g stroke="#E4C67F" stroke-width="2.2" opacity=".75" fill="none">
            <path d="M152 292h26M154 268h24M156 244h22M158 222h20"/>
            <path d="M222 292h26M224 268h24M226 244h22M228 222h20"/>
          </g>
          <path d="M166 186 L170 172 L174 186Z" fill="#E4C67F"/>
          <path d="M234 186 L230 172 L226 186Z" fill="#E4C67F"/>
          <!-- palms -->
          <g stroke="#04121F" stroke-width="7" fill="none" stroke-linecap="round">
            <path d="M46 432q-6-56 6-96"/><path d="M356 420q6-52-4-88"/>
          </g>
          <g stroke="#0FA3A0" stroke-width="4.4" fill="none" opacity=".92" stroke-linecap="round">
            <path d="M52 336q-36-8-48-36M52 336q36-8 48-36M52 334q-14-36-40-48M52 334q14-36 40-48M52 334q-2-34 4-46"/>
            <path d="M352 332q-34-8-44-34M352 332q34-8 44-34M352 330q-12-32-36-44M352 330q12-32 36-44"/>
          </g>
          <g fill="#F7E7BE" opacity=".5"><circle cx="124" cy="330" r="26"/></g>
        </svg>
        <div class="scrim"></div>
        <div class="dest-price"><i>From</i><b>₹38,900</b><span>per person</span></div>
        <div class="dest-body">
          <p class="dest-flag">
            <svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="8" fill="#CE1126"/><rect y="8" width="24" height="8" fill="#fff"/></svg>
            Bali
          </p>
          <h3>Island of the Gods</h3>
          <p>Jungle villas, infinity pools and Uluwatu sunsets — tailored to your pace.</p>
          <div class="dest-meta">
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>5–6 nights</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v3M16 3v3M3 9h18"/><rect x="3" y="5" width="18" height="16" rx="2"/></svg>Best Apr–Oct</span>
          </div>
          <div class="chips"><span class="chip">Ubud</span><span class="chip">Uluwatu</span><span class="chip">Nusa Penida</span></div>
          <a class="dest-link" href="/destinations/bali" data-dest="Bali">Explore Bali <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <!-- THAILAND — decorative brand scene; swap for a photo by replacing this SVG with <img> -->
      <article class="dest">
        <svg class="scene" viewBox="0 102 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="thSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#08243D"/><stop offset=".2" stop-color="#17557A"/>
              <stop offset=".36" stop-color="#3E8EA0"/><stop offset=".46" stop-color="#9CC3BC"/>
              <stop offset=".53" stop-color="#E4C67F"/><stop offset=".6" stop-color="#2F6B80"/>
              <stop offset="1" stop-color="#061829"/>
            </linearGradient>
            <radialGradient id="thSun" cx=".5" cy=".5" r=".5">
              <stop offset="0" stop-color="#FFF8E7"/><stop offset=".38" stop-color="#F7E7BE" stop-opacity=".78"/>
              <stop offset="1" stop-color="#E4C67F" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="thSea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#25A0A6"/><stop offset=".22" stop-color="#13697E"/>
              <stop offset=".55" stop-color="#0A3350"/><stop offset="1" stop-color="#030D1A"/>
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#thSky)"/>
          <circle cx="196" cy="214" r="96" fill="url(#thSun)"/>
          <circle cx="196" cy="214" r="30" fill="#FFF6E0" opacity=".95"/>
          <g fill="#F7E7BE" opacity=".16">
            <rect x="0" y="152" width="400" height="5" rx="2.5"/><rect x="110" y="178" width="250" height="4" rx="2"/>
            <rect x="40" y="196" width="150" height="3.5" rx="1.75"/>
          </g>
          <!-- far islands -->
          <g fill="#14536E" opacity=".6">
            <path d="M318 270q6-58 30-58t30 58z"/><path d="M0 270q8-44 24-44t24 44z"/>
          </g>
          <!-- main karst with overhang -->
          <path d="M44 270q-6-86 38-102 44-16 56 42 5 22-10 28 13 6 11 32z" fill="#04121F"/>
          <path d="M56 194q16-30 40-30" stroke="#0FA3A0" stroke-width="2.8" fill="none" opacity=".5" stroke-linecap="round"/>
          <g fill="#0FA3A0" opacity=".4">
            <path d="M92 178q10-8 18-2-8 7-18 2z"/><path d="M122 208q10-7 17 0-8 6-17 0z"/>
          </g>
          <!-- second karst -->
          <path d="M248 270q-4-64 28-74 32-10 35 40 3 20-7 34z" fill="#092A44"/>
          <!-- sea -->
          <rect y="270" width="400" height="230" fill="url(#thSea)"/>
          <rect y="270" width="400" height="18" fill="#8FDAD6" opacity=".22"/>
          <!-- sun path on water -->
          <g opacity=".5" fill="#FFF3D6">
            <rect x="182" y="272" width="28" height="5" rx="2.5"/><rect x="174" y="286" width="44" height="4" rx="2"/>
            <rect x="164" y="302" width="64" height="4" rx="2"/><rect x="152" y="320" width="88" height="3.5" rx="1.75"/>
          </g>
          <!-- longtail boat -->
          <g>
            <path d="M136 318q56 20 112 0-15 22-56 22t-56-22z" fill="#C9A24B"/>
            <path d="M136 318q56 20 112 0-9 12-56 12t-56-12z" fill="#F7E7BE" opacity=".55"/>
            <path d="M138 318 L114 286" stroke="#C9A24B" stroke-width="3.4" fill="none" stroke-linecap="round"/>
            <path d="M246 318 L272 288" stroke="#C9A24B" stroke-width="3.4" fill="none" stroke-linecap="round"/>
            <path d="M192 316v-40" stroke="#04121F" stroke-width="3.4" fill="none"/>
            <path d="M194 280q22 6 25 15-15 7-25 2z" fill="#E2645A" opacity=".88"/>
            <g stroke="#F7E7BE" stroke-width="1.8" opacity=".7"><path d="M114 286q8-7 18-5M272 288q-8-8-18-6"/></g>
          </g>
          <g stroke="#8FDAD6" stroke-width="2" fill="none" opacity=".38" stroke-linecap="round">
            <path d="M20 356h64M128 378h110M282 354h70M44 404h90M228 412h114"/>
          </g>
        </svg>
        <div class="scrim"></div>
        <div class="dest-price"><i>From</i><b>₹34,900</b><span>per person</span></div>
        <div class="dest-body">
          <p class="dest-flag">
            <svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#fff"/><rect width="24" height="2.7" fill="#A51931"/><rect y="13.3" width="24" height="2.7" fill="#A51931"/><rect y="5.3" width="24" height="5.4" fill="#2D2A4A"/></svg>
            Thailand
          </p>
          <h3>Islands, Temples &amp; More</h3>
          <p>Turquoise bays and longtail boats, golden temples and Bangkok's buzz.</p>
          <div class="dest-meta">
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>4–7 nights</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v3M16 3v3M3 9h18"/><rect x="3" y="5" width="18" height="16" rx="2"/></svg>Best Nov–Mar</span>
          </div>
          <div class="chips"><span class="chip">Phuket</span><span class="chip">Krabi</span><span class="chip">Phi Phi</span></div>
          <a class="dest-link" href="/destinations/thailand" data-dest="Thailand">Explore Thailand <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <!-- VIETNAM — decorative brand scene; swap for a photo by replacing this SVG with <img> -->
      <article class="dest">
        <svg class="scene" viewBox="0 140 600 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="vnSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#09263E"/><stop offset=".26" stop-color="#1A5372"/>
              <stop offset=".46" stop-color="#457F8E"/><stop offset=".6" stop-color="#C6A369"/>
              <stop offset=".68" stop-color="#E4C67F"/><stop offset=".76" stop-color="#2A5E74"/>
              <stop offset="1" stop-color="#061829"/>
            </linearGradient>
            <radialGradient id="vnSun" cx=".5" cy=".5" r=".5">
              <stop offset="0" stop-color="#FFF8E8"/><stop offset=".4" stop-color="#F7E7BE" stop-opacity=".75"/>
              <stop offset="1" stop-color="#E4C67F" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="vnBay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#1B7285"/><stop offset=".32" stop-color="#0E4258"/><stop offset="1" stop-color="#030D1A"/>
            </linearGradient>
            <linearGradient id="vnMist" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#8FDAD6" stop-opacity="0"/><stop offset="1" stop-color="#CFE8E4" stop-opacity=".3"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#vnSky)"/>
          <circle cx="452" cy="232" r="118" fill="url(#vnSun)"/>
          <circle cx="452" cy="232" r="34" fill="#FFF6E2" opacity=".95"/>
          <g fill="#F7E7BE" opacity=".15">
            <rect x="0" y="96" width="600" height="5" rx="2.5"/><rect x="140" y="132" width="380" height="4" rx="2"/>
          </g>
          <!-- layer 1 far karsts -->
          <g fill="#14536E" opacity=".55">
            <path d="M40 268q12-104 52-104t54 104z"/><path d="M220 268q10-86 44-86t46 86z"/>
            <path d="M400 268q8-74 36-74t38 74z"/><path d="M520 268q8-92 42-92t38 92z"/>
          </g>
          <rect x="0" y="212" width="600" height="56" fill="url(#vnMist)"/>
          <!-- layer 2 mid karsts -->
          <g fill="#0C3A52" opacity=".9">
            <path d="M0 274q14-88 50-88t48 88z"/><path d="M150 274q12-74 42-74t44 74z"/>
            <path d="M330 274q10-96 46-96t44 96z"/><path d="M470 274q10-64 34-64t36 64z"/>
          </g>
          <rect x="0" y="240" width="600" height="34" fill="url(#vnMist)" opacity=".7"/>
          <!-- layer 3 near karsts -->
          <g fill="#04121F">
            <path d="M74 282q12-66 42-66t40 66z"/><path d="M430 282q10-56 36-56t36 56z"/>
          </g>
          <!-- bay -->
          <rect y="278" width="600" height="122" fill="url(#vnBay)"/>
          <rect y="278" width="600" height="18" fill="#8FDAD6" opacity=".2"/>
          <g opacity=".4" fill="#FFF3D6">
            <rect x="436" y="280" width="34" height="5" rx="2.5"/><rect x="424" y="294" width="58" height="4" rx="2"/><rect x="410" y="310" width="86" height="4" rx="2"/>
          </g>
          <!-- junk boat with red sails -->
          <g>
            <path d="M232 324h104l-16 20h-74z" fill="#04121F"/>
            <path d="M266 324v-72" stroke="#04121F" stroke-width="3.4" fill="none"/>
            <path d="M268 252q40 26 44 66-24 6-44 0z" fill="#C9564B" opacity=".9"/>
            <path d="M262 268q-28 22-30 54 18 6 30 0z" fill="#B0463D" opacity=".85"/>
            <path d="M268 252q40 26 44 66" stroke="#E4C67F" stroke-width="1.6" fill="none" opacity=".7"/>
          </g>
          <!-- floating lanterns -->
          <g fill="#F7E7BE">
            <circle cx="112" cy="316" r="6" opacity=".9"/><circle cx="160" cy="330" r="4.4" opacity=".75"/>
            <circle cx="520" cy="320" r="5.4" opacity=".85"/><circle cx="564" cy="336" r="4" opacity=".7"/>
            <circle cx="372" cy="334" r="4.6" opacity=".8"/>
          </g>
          <g fill="#C9A24B" opacity=".3">
            <circle cx="112" cy="316" r="14"/><circle cx="520" cy="320" r="12"/><circle cx="372" cy="334" r="11"/>
          </g>
          <g stroke="#8FDAD6" stroke-width="1.8" fill="none" opacity=".35" stroke-linecap="round">
            <path d="M30 348h88M210 362h140M400 352h120M90 380h130M330 386h170"/>
          </g>
          <g stroke="#C9A24B" stroke-width="1.6" opacity=".4" fill="none" stroke-dasharray="6 9"><path d="M0 150Q300 72 600 138"/></g>
        </svg>
        <div class="scrim"></div>
        <div class="dest-price"><i>From</i><b>₹46,900</b><span>per person</span></div>
        <div class="dest-body">
          <p class="dest-flag">
            <svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#DA251D"/><path d="M12 3.8 12.94 6.71 15.99 6.7 13.52 8.49 14.47 11.4 12 9.6 9.53 11.4 10.48 8.49 8.01 6.7 11.06 6.71Z" fill="#FF0"/></svg>
            Vietnam
          </p>
          <h3>Timeless &amp; Breathtaking</h3>
          <p>Cruise the karst islands of Ha Long Bay, float a lantern in Hoi An, cross the Golden Bridge in Da Nang.</p>
          <div class="dest-meta">
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>6–8 nights</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v3M16 3v3M3 9h18"/><rect x="3" y="5" width="18" height="16" rx="2"/></svg>Best Oct–Apr</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18M12 3a16 16 0 010 18M12 3a16 16 0 000 18"/><circle cx="12" cy="12" r="9"/></svg>Overnight cruise</span>
          </div>
          <div class="chips"><span class="chip">Ha Long Bay Cruise</span><span class="chip">Hoi An Lanterns</span><span class="chip">Ba Na Hills</span><span class="chip">Mekong Delta</span></div>
          <a class="dest-link" href="/destinations/vietnam" data-dest="Vietnam">Explore Vietnam <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <!-- DUBAI — decorative brand scene; swap for a photo by replacing this SVG with <img> -->
      <article class="dest">
        <svg class="scene" viewBox="0 146 600 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="dxSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#0B2540"/><stop offset=".3" stop-color="#28597A"/>
              <stop offset=".46" stop-color="#7B8E92"/><stop offset=".55" stop-color="#D8A96A"/>
              <stop offset=".63" stop-color="#EFC98A"/><stop offset=".72" stop-color="#8A6B39"/>
              <stop offset="1" stop-color="#1A1206"/>
            </linearGradient>
            <radialGradient id="dxSun" cx=".5" cy=".5" r=".5">
              <stop offset="0" stop-color="#FFF8E6"/><stop offset=".34" stop-color="#F7E7BE" stop-opacity=".85"/>
              <stop offset="1" stop-color="#E4C67F" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="dxDune" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#E0B968"/><stop offset=".45" stop-color="#9C7828"/><stop offset="1" stop-color="#2A1E08"/>
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#dxSky)"/>
          <circle cx="132" cy="224" r="104" fill="url(#dxSun)"/>
          <circle cx="132" cy="224" r="36" fill="#FFF7E6" opacity=".95"/>
          <g fill="#F7E7BE" opacity=".14">
            <rect x="0" y="178" width="600" height="4" rx="2"/><rect x="200" y="200" width="360" height="3.5" rx="1.75"/>
          </g>
          <!-- Burj Al Arab sail -->
          <path d="M466 266q5-92 42-110 5 82 32 110z" fill="#0C3550" opacity=".85"/>
          <path d="M480 266q5-78 30-94" stroke="#F7E7BE" stroke-width="1.8" fill="none" opacity=".45"/>
          <!-- far skyline -->
          <g fill="#123C57" opacity=".85">
            <rect x="192" y="206" width="22" height="60"/><rect x="220" y="222" width="17" height="44"/>
            <rect x="350" y="216" width="20" height="50"/><rect x="378" y="198" width="24" height="68"/>
            <rect x="410" y="228" width="18" height="38"/><rect x="152" y="230" width="28" height="36"/>
            <rect x="246" y="238" width="15" height="28"/><rect x="524" y="224" width="22" height="42"/>
          </g>
          <!-- Burj Khalifa -->
          <g fill="#04121F">
            <path d="M293 266 L300 158 L307 266Z"/>
            <path d="M283 214h34v52h-34z"/><path d="M272 236h56v30h-56z"/><path d="M262 252h76v14h-76z"/>
          </g>
          <g fill="#2A5674" opacity=".5"><path d="M297 172 L300 158 L302 266 L297 266Z"/></g>
          <path d="M300 158 L302 196 L298 196Z" fill="#F7E7BE"/>
          <circle cx="300" cy="158" r="2.8" fill="#FFF7E6"/>
          <!-- dunes -->
          <path d="M0 266q140-40 268 4 152 52 332-14L600 400 0 400Z" fill="url(#dxDune)" opacity=".92"/>
          <path d="M0 300q176-28 328 6 152 34 272-8L600 400 0 400Z" fill="#6B5219" opacity=".9"/>
          <path d="M0 336q190-22 334 8 140 30 266-4L600 400 0 400Z" fill="#241A06"/>
          <g stroke="#FFF3D6" stroke-width="1.5" fill="none" opacity=".28" stroke-linecap="round">
            <path d="M44 288q90-20 180-2M336 296q100 20 200-4M86 324q120-14 224 8"/>
          </g>
          <!-- camel caravan silhouette -->
          <g fill="#241A06">
            <path d="M406 300q4-9 10-7 2-7 9-5 6 2 6 7l7 2 4 7-4 2-2 9h-4l-2-7h-7l-2 7h-4l-2-9-5-2z"/>
            <path d="M446 304q3-7 8-6 2-6 8-4 5 1 5 6l6 1 3 6-3 1-2 8h-3l-2-6h-6l-2 6h-3l-1-8-5-1z"/>
          </g>
        </svg>
        <div class="scrim"></div>
        <div class="dest-price"><i>From</i><b>₹49,900</b><span>per person</span></div>
        <div class="dest-body">
          <p class="dest-flag">
            <svg class="flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="5.34" fill="#00732F"/><rect y="5.34" width="24" height="5.33" fill="#fff"/><rect y="10.67" width="24" height="5.33" fill="#000"/><rect width="6.5" height="16" fill="#CE1126"/></svg>
            Dubai
          </p>
          <h3>Where Luxury Lives</h3>
          <p>Burj Khalifa sunsets, golden dune safaris and yacht cruises — luxury made simple, and priced honestly.</p>
          <div class="dest-meta">
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>4–6 nights</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v3M16 3v3M3 9h18"/><rect x="3" y="5" width="18" height="16" rx="2"/></svg>Best Nov–Mar</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h16M6 17l-2-6h16l-2 6M9 11V7h6v4"/></svg>Own fleet transfers</span>
          </div>
          <div class="chips"><span class="chip">Burj Khalifa</span><span class="chip">Desert Safari</span><span class="chip">Yacht Cruise</span><span class="chip">Palm Jumeirah</span></div>
          <a class="dest-link" href="/destinations/dubai" data-dest="Dubai">Explore Dubai <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>
    </div>

    <div class="dest-note rv">
      <p><strong>Indicative from-prices</strong> · per person on twin sharing, land-only, excluding flights &amp; visa. Final quote depends on season, hotels and inclusions.</p>
      <p>Somewhere else in mind? <a class="link-arrow" href="/contact" style="vertical-align:middle">Ask us anyway <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
    </div>
  </div>
</section>
`;
}
