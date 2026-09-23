export function ComparisonMatrix() {
  return `
    <section id="comparison" aria-labelledby="comp-h" style="padding-top:clamp(40px, 6vw, 70px);">
      <div class="wrap">
        <div class="center rv sec-head" style="margin-bottom:36px;">
          <p class="eyebrow">The Direct Advantage</p>
          <h2 class="h-xl" id="comp-h">Why Booking Direct Changes Everything</h2>
          <p class="lead">Compare what happens when you book through a typical broker vs. directly with the on-ground DMC.</p>
        </div>

        <div class="rv table-responsive" style="background:linear-gradient(158deg, rgba(22, 68, 104, 0.42), rgba(6, 24, 41, 0.88));border:1px solid rgba(201,162,75,0.28);border-radius:var(--radius-lg);backdrop-filter:blur(14px);box-shadow:0 16px 48px rgba(3,13,26,0.4);">
          <table style="width:100%;border-collapse:collapse;min-width:680px;text-align:left;">
            <thead>
              <tr style="background:rgba(6, 24, 41, 0.95);border-bottom:2px solid rgba(201, 162, 75, 0.4);">
                <th style="padding:20px 24px;font-family:var(--font-heading, 'Playfair Display', serif);font-size:1.05rem;font-weight:600;color:var(--gold-soft);">Feature / Aspect</th>
                <th style="padding:20px 24px;font-family:var(--font-body);font-size:0.92rem;color:rgba(226,100,90,0.9);width:36%;">Traditional Retail Agent / OTA</th>
                <th style="padding:20px 24px;font-family:var(--font-body);font-size:0.95rem;color:var(--gold-light);width:38%;background:rgba(201,162,75,0.14);font-weight:700;">Direct Voyage DMC</th>
              </tr>
            </thead>
            <tbody style="font-size:0.92rem;color:rgba(248, 245, 238, 0.85);">
              <tr style="border-bottom:1px solid rgba(201, 162, 75, 0.14);">
                <td style="padding:18px 24px;font-weight:600;color:var(--ivory);">Pricing &amp; Margins</td>
                <td style="padding:18px 24px;color:rgba(248, 245, 238, 0.65);">3+ layers of markups (Agent + Consolidator + Sub-contractor)</td>
                <td style="padding:18px 24px;background:rgba(201,162,75,0.08);font-weight:600;color:var(--gold-light);">1 direct transparent margin. Best price guaranteed.</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(201, 162, 75, 0.14);">
                <td style="padding:18px 24px;font-weight:600;color:var(--ivory);">Fleet &amp; Transfers</td>
                <td style="padding:18px 24px;color:rgba(248, 245, 238, 0.65);">Third-party random taxis or outsourced transport. Driver unknown.</td>
                <td style="padding:18px 24px;background:rgba(201,162,75,0.08);font-weight:600;color:var(--gold-light);">Our own fleet (Alphards, Innovas, VIP Vans). Meet &amp; greet at gate.</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(201, 162, 75, 0.14);">
                <td style="padding:18px 24px;font-weight:600;color:var(--ivory);">Flight Delay &amp; Changes</td>
                <td style="padding:18px 24px;color:rgba(248, 245, 238, 0.65);">Call-center hold queues. Delayed pickups, extra cancellation fees.</td>
                <td style="padding:18px 24px;background:rgba(201,162,75,0.08);font-weight:600;color:var(--gold-light);">Flight tracked live. Driver waits. Zero stress, zero extra fees.</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(201, 162, 75, 0.14);">
                <td style="padding:18px 24px;font-weight:600;color:var(--ivory);">Itinerary Flexibility</td>
                <td style="padding:18px 24px;color:rgba(248, 245, 238, 0.65);">Rigid pre-packaged bus tours with forced shopping stops.</td>
                <td style="padding:18px 24px;background:rgba(201,162,75,0.08);font-weight:600;color:var(--gold-light);">100% custom to your pace. No forced stops, unlimited revisions.</td>
              </tr>
              <tr>
                <td style="padding:18px 24px;font-weight:600;color:var(--ivory);">Emergency On-Ground Contact</td>
                <td style="padding:18px 24px;color:rgba(248, 245, 238, 0.65);">Email ticketing desk in another time zone.</td>
                <td style="padding:18px 24px;background:rgba(201,162,75,0.08);font-weight:600;color:var(--gold-light);">Dedicated on-ground coordinator WhatsApp line available 24/7.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}
