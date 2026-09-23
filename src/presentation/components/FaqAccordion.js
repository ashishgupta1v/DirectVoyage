export function FaqAccordion() {
  return `
<section id="faq" aria-labelledby="faq-h">
  <div class="wrap">
    <div class="center rv sec-head">
      <p class="eyebrow">Good To Know</p>
      <h2 class="h-xl" id="faq-h">Frequently asked questions</h2>
      <p class="lead">Still unsure about something? <a href="/contact" class="gold">Ask us directly</a> — we answer honestly.</p>
    </div>

    <div class="faq rv" style="margin-top:clamp(32px,4vw,46px)">
      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="true" aria-controls="faq1">What exactly is a Destination Management Company?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq1"><div><p>A DMC operates on the ground at the destination itself — vehicles, guides, hotel contracts, tickets and coordination. Most travel agents buy from a DMC and add a margin. With Direct Voyage you're dealing with the DMC directly, which is why the pricing works out better.</p></div></div>
      </div>

      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="false" aria-controls="faq2">Do you sell fixed packages?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq2"><div><p>No. We publish sample plans as starting points, then rebuild them around your dates, budget, pace and preferences. Nothing is locked until you approve the final itinerary and price.</p></div></div>
      </div>

      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="false" aria-controls="faq3">Are flights and visas included?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq3"><div><p>Our quotes are land packages by default — stays, transfers, sightseeing and experiences. We can add flights on request and we guide you through visa requirements and documentation for each destination.</p></div></div>
      </div>

      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="false" aria-controls="faq4">What does "no hidden costs" really mean?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq4"><div><p>Your quotation is itemised line by line, with inclusions and exclusions written out clearly. There are no service charges added at check-out and no local "extras" collected by drivers or guides.</p></div></div>
      </div>

      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="false" aria-controls="faq5">How do I pay, and what about cancellations?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq5"><div><p>Bookings are typically confirmed with an advance and settled before departure. Cancellation and refund terms depend on the hotels, cruise lines and airlines involved — they're stated in writing on your quotation before you pay anything.</p></div></div>
      </div>

      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="false" aria-controls="faq6">What if something goes wrong during the trip?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq6"><div><p>You'll have a direct line to our on-ground coordinator for the destination throughout your travel window. Delayed flight, changed plan, a hotel issue — one message and we handle it, usually without extra cost.</p></div></div>
      </div>

      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="false" aria-controls="faq7">Can you handle large groups or corporate trips?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq7"><div><p>Yes. Our own fleet makes group movement far easier to coordinate. We handle family reunions, friend groups, offsites and incentive trips, with a single coordinator managing the whole party.</p></div></div>
      </div>

      <div class="acc">
        <button class="acc-q" type="button" aria-expanded="false" aria-controls="faq8">How soon will I get my itinerary?<i aria-hidden="true"></i></button>
        <div class="acc-a" id="faq8"><div><p>Most custom itineraries and quotes go out the same day, and complex multi-country or cruise plans within one working day.</p></div></div>
      </div>
    </div>
  </div>
</section>
`;
}
