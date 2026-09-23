
export function PromiseBanner() {
  return `
<section class="promise" aria-labelledby="promise-h">
  <svg class="route-map" viewBox="0 0 1440 460" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g fill="none" stroke="#E4C67F" stroke-width="1.4" opacity=".5" stroke-linecap="round">
      <path class="leg" d="M392 150 Q 270 60 150 236"/>
      <path class="leg" d="M392 150 Q 600 40 764 212"/>
      <path class="leg" d="M392 150 Q 700 8 986 158"/>
      <path class="leg" d="M392 150 Q 760 96 1124 284"/>
      <path class="leg" d="M392 150 Q 880 60 1318 232"/>
    </g>
    <g fill="#F7E7BE">
      <circle class="node" cx="150" cy="236" r="5"/><circle class="node" cx="764" cy="212" r="5"/>
      <circle class="node" cx="986" cy="158" r="5"/><circle class="node" cx="1124" cy="284" r="5"/>
      <circle class="node" cx="1318" cy="232" r="5"/>
    </g>
    <g fill="none" stroke="#8FDAD6" stroke-width="1.2" opacity=".55">
      <circle cx="392" cy="150" r="9"/><circle cx="392" cy="150" r="17" opacity=".45"/>
    </g>
    <circle cx="392" cy="150" r="4" fill="#8FDAD6"/>
  </svg>
  <div class="wrap rv">
    <p class="eyebrow center">Our Promise</p>
    <h2 id="promise-h">Your Destination. Your Comfort. Your Experience. <span class="gold">Our Responsibility.</span></h2>
    <p class="lead center" style="margin-top:20px">From the moment you land to the moment you leave — we've got everything covered, so you can simply enjoy the journey.</p>
    <div class="stats mt-lg">
      <div class="stat"><b data-count="5">5</b><span>Destinations Operated</span></div>
      <div class="stat"><b data-count="100" data-suffix="%">100%</b><span>Custom Itineraries</span></div>
      <div class="stat"><b data-count="0">0</b><span>Hidden Charges</span></div>
      <div class="stat"><b>24/7</b><span>In-Trip Support</span></div>
    </div>
  </div>
</section>
`;
}

export function TestimonialsRail() {
  return `
<!-- NOTE: replace these placeholder quotes with real, attributable reviews before publishing. -->
<section id="stories" aria-labelledby="stories-h">
  <div class="wrap">
    <div class="center rv sec-head">
      <p class="eyebrow">Traveller Stories</p>
      <h2 class="h-xl" id="stories-h">What our travellers say</h2>
      <p class="lead">Real feedback from the people we've sent out into the world.</p>
    </div>

    <div class="rail-wrap rv mt-lg">
      <div class="rail" id="rail">
        <figure class="quote">
          <div class="stars" aria-label="Rated 5 out of 5">★★★★★</div>
          <blockquote>Everything was handled — airport pickup to check-out. Best price we found, and zero stress the whole week.</blockquote>
          <figcaption class="who"><span class="avatar" aria-hidden="true">A</span><span><b>Anjali &amp; Rohit</b><span>Singapore · Couple</span></span></figcaption>
        </figure>
        <figure class="quote">
          <div class="stars" aria-label="Rated 5 out of 5">★★★★★</div>
          <blockquote>They planned everything around our kids and our budget. We felt genuinely taken care of, not sold to.</blockquote>
          <figcaption class="who"><span class="avatar" aria-hidden="true">M</span><span><b>The Mehta Family</b><span>Thailand · Family of 5</span></span></figcaption>
        </figure>
        <figure class="quote">
          <div class="stars" aria-label="Rated 5 out of 5">★★★★★</div>
          <blockquote>The quote was the final bill. Nothing extra appeared later. That alone made me recommend them to three friends.</blockquote>
          <figcaption class="who"><span class="avatar" aria-hidden="true">S</span><span><b>Suresh N.</b><span>Dubai · Business Trip</span></span></figcaption>
        </figure>
        <figure class="quote">
          <div class="stars" aria-label="Rated 5 out of 5">★★★★★</div>
          <blockquote>Our driver was waiting at arrivals every single time. After three bad trips with other agents, this felt like a different sport.</blockquote>
          <figcaption class="who"><span class="avatar" aria-hidden="true">P</span><span><b>Priya K.</b><span>Bali · Honeymoon</span></span></figcaption>
        </figure>
        <figure class="quote">
          <div class="stars" aria-label="Rated 5 out of 5">★★★★★</div>
          <blockquote>Ha Long Bay cruise, Hoi An lanterns, Da Nang — all stitched together perfectly. We only had to show up.</blockquote>
          <figcaption class="who"><span class="avatar" aria-hidden="true">V</span><span><b>Vikram &amp; friends</b><span>Vietnam · Group of 8</span></span></figcaption>
        </figure>
        <figure class="quote">
          <div class="stars" aria-label="Rated 5 out of 5">★★★★★</div>
          <blockquote>They changed our whole day plan when a flight got delayed — no fuss, no extra charge. That's the part you can't compare on price.</blockquote>
          <figcaption class="who"><span class="avatar" aria-hidden="true">R</span><span><b>Ritu S.</b><span>Dubai · Family</span></span></figcaption>
        </figure>
      </div>

      <div class="rail-nav">
        <button class="rail-btn" id="railPrev" type="button" aria-label="Previous testimonials" aria-controls="rail">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
        </button>
        <div class="dots" id="railDots" role="tablist" aria-label="Testimonial pages"></div>
        <button class="rail-btn" id="railNext" type="button" aria-label="More testimonials" aria-controls="rail">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  </div>
</section>
`;
}
