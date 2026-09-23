export function PanoramaSkyline() {
  return `
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
  `;
}
