import { GroundOpsService } from '../../domain/fleet/ground-ops.service.js';

export function FleetShowcase() {
  const fleet = GroundOpsService.getFleet();
  const promises = GroundOpsService.getPromises();

  return `
    <section id="fleet" aria-labelledby="fleet-h">
      <div class="wrap">
        <div class="center rv sec-head">
          <p class="eyebrow">Our Ground Operations</p>
          <h2 class="h-xl" id="fleet-h">Our Own Fleet. Our Own Drivers.<br/>Zero Third-Party Surprises.</h2>
          <p class="lead">Unlike retail agents who outsource transport to unknown local contractors, Direct Voyage operates and dispatches its own vehicles in every destination.</p>
        </div>

        <div class="fleet-grid stagger rv mt-lg">
          ${fleet.map(item => `
            <article class="fleet-card">
              <span class="fleet-badge">${item.tier}</span>
              <h3>${item.name}</h3>
              <p>${item.idealFor}</p>
              
              <div class="chips" style="margin-block: 10px;">
                ${item.destinations.map(d => `<span class="chip" style="background:rgba(201,162,75,0.1);color:var(--gold-light);border:1px solid rgba(201,162,75,0.25);">${d}</span>`).join('')}
              </div>

              <ul class="tick" style="margin-top:12px;margin-bottom:18px;font-size:0.88rem;">
                ${item.features.map(f => `<li>${f}</li>`).join('')}
              </ul>

              <div class="fleet-specs">
                <span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  ${item.capacity}
                </span>
                <span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                  ${item.luggage}
                </span>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Fleet Guarantees Banner -->
        <div class="cards c4 stagger rv mt-lg" style="margin-top:clamp(32px,4vw,52px);">
          ${promises.map(p => `
            <div style="background:linear-gradient(158deg, rgba(22, 68, 104, 0.35), rgba(6, 24, 41, 0.75));border:1px solid rgba(201,162,75,0.22);border-radius:var(--radius-md);padding:22px;backdrop-filter:blur(8px);">
              <h4 style="color:var(--gold-soft);font-size:1.05rem;margin-bottom:8px;font-family:var(--serif);">${p.title}</h4>
              <p style="font-size:0.88rem;color:rgba(248,245,238,0.82);line-height:1.55;margin:0;">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
