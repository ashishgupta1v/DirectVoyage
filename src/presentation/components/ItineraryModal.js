export function ItineraryModal() {
  return `
    <div class="modal-backdrop" id="itineraryModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-container">
        <button class="modal-close" id="modalCloseBtn" type="button" aria-label="Close dialog">&times;</button>
        
        <p class="eyebrow" id="modalEyebrow">Direct DMC Handcrafted Voyage</p>
        <h2 class="h-md" id="modalTitle" style="color:var(--gold-light);margin-bottom:8px;">Destination Itinerary</h2>
        <p class="fineprint" style="margin-bottom:20px;color:var(--muted)">
          Private chauffeur transfers, hand-picked hotels, skip-the-line entries, and on-ground team support throughout. 100% customizable to your exact dates and pace.
        </p>

        <div class="modal-tabs" role="tablist">
          <button type="button" class="modal-tab-btn active" data-tab="itinerary">Day-by-Day Plan</button>
          <button type="button" class="modal-tab-btn" data-tab="inclusions">DMC Inclusions</button>
          <button type="button" class="modal-tab-btn" data-tab="pricing">Direct Pricing</button>
        </div>

        <div id="modalTabContentItinerary" class="modal-tab-panel">
          <div id="modalDaysContainer" style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
            <!-- Days populated dynamically by modal.controller.js -->
          </div>
        </div>

        <div id="modalTabContentInclusions" class="modal-tab-panel" style="display:none;margin-bottom:24px;">
          <div class="card" style="background:rgba(255,255,255,0.03);border:1px solid var(--line);padding:24px;">
            <h3 class="gold" style="font-size:1.15rem;margin-bottom:14px;">What's Included in Your Direct DMC Voyage:</h3>
            <ul class="tick" style="margin-top:0;">
              <li><strong>Private In-House Fleet:</strong> Airport meet-and-greet and inter-city transfers in our own vehicles.</li>
              <li><strong>Curated Accommodations:</strong> Verified 4★ or 5★ stays with breakfast, local taxes, and confirmed early check-in requests.</li>
              <li><strong>Skip-the-Line Entry:</strong> Pre-booked attraction and monument passes with dedicated guide coordination.</li>
              <li><strong>Local English-Speaking Chauffeur-Guides:</strong> Vetted professionals with deep local knowledge.</li>
              <li><strong>24/7 Dedicated Ground Coordinator:</strong> Single WhatsApp point of contact from landing to takeoff.</li>
            </ul>
          </div>
        </div>

        <div id="modalTabContentPricing" class="modal-tab-panel" style="display:none;margin-bottom:24px;">
          <div class="card" style="background:rgba(255,255,255,0.03);border:1px solid var(--line);padding:24px;">
            <h3 class="gold" style="font-size:1.15rem;margin-bottom:14px;">Honest Pricing Guarantee:</h3>
            <p style="font-size:0.92rem;color:var(--muted);line-height:1.6;margin-bottom:14px;">
              Because you are booking directly with the on-ground Destination Management Company, there are zero retail broker margins or hidden third-party fees.
            </p>
            <ul class="tick" style="margin-top:0;">
              <li>Itemised quotation with every element transparently broken down.</li>
              <li>Best price promise: no inflated markups or commission stacking.</li>
              <li>Flexible deposit terms and clear, written cancellation policies.</li>
            </ul>
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end;border-top:1px solid var(--hairline);padding-top:20px;align-items:center;">
          <button type="button" class="btn btn-ghost" id="modalCloseFooter">Close</button>
          <a class="btn btn-gold" id="modalCustomizeBtn" href="/planner">Customize This Itinerary</a>
        </div>
      </div>
    </div>
  `;
}
