export function HeroHorizon() {
  return `
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
  `;
}
