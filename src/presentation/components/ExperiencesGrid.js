export function ExperiencesGrid() {
  return `
<section id="experiences" aria-labelledby="exp-h">
  <div class="wrap">
    <div class="center rv sec-head">
      <p class="eyebrow">Our Specialities</p>
      <h2 class="h-xl" id="exp-h">Travel styles we do best</h2>
      <p class="lead">Tell us who's travelling and how you like to travel. We shape the hotels, the pace and the pick-ups around that — not the other way round.</p>
    </div>

    <div class="exp-grid stagger rv mt-lg">

      <article class="exp" style="--tint-a:#1B5375;--tint-b:#08243C">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="40" cy="34" r="11"/><path d="M28 62c0-9 5-15 12-15s12 6 12 15v26"/><path d="M28 88V62"/>
          <circle cx="74" cy="40" r="9"/><path d="M64 64c0-8 4-13 10-13s10 5 10 13v24"/>
          <circle cx="98" cy="58" r="6"/><path d="M91 76c0-6 3-9 7-9s7 3 7 9v12"/>
          <path d="M10 100h104" stroke-dasharray="3 6"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">01</p>
          <h3>Family Holidays</h3>
          <p>Kid-friendly stays, short transfer legs and a pace that suits grandparents and toddlers alike. Connecting rooms, early check-ins and a vegetarian-friendly food plan are handled before you ask.</p>
          <p class="exp-for">Best for 4–12 travellers</p>
          <a class="exp-cta" href="/planner" data-plan="Family Holiday">Plan a family trip <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article class="exp" style="--tint-a:#563A4E;--tint-b:#160D1E">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <path d="M60 96C36 78 22 66 22 50a16 16 0 0130-8 16 16 0 0130 8c0 16-14 28-38 46z"/>
          <path d="M14 104h92" stroke-dasharray="3 6"/><circle cx="96" cy="26" r="7"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">02</p>
          <h3>Honeymoons &amp; Couples</h3>
          <p>Private dinners, sunset cruises and villas built for two.</p>
          <p class="exp-for">Best for 2 travellers</p>
          <a class="exp-cta" href="/planner" data-plan="Honeymoon">Plan a honeymoon <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article class="exp" style="--tint-a:#5E4A22;--tint-b:#1A1206">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <path d="M20 86h80l6-40-24 16-22-30-22 30-24-16z"/><path d="M20 98h80" stroke-dasharray="3 6"/>
          <circle cx="60" cy="24" r="4"/><circle cx="20" cy="42" r="4"/><circle cx="100" cy="42" r="4"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">03</p>
          <h3>Luxury Travel</h3>
          <p>Private yachts, five-star suites, chauffeured everything — priced fairly.</p>
          <p class="exp-for">Five-star stays</p>
          <a class="exp-cta" href="/planner" data-plan="Luxury">Plan a luxury trip <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article class="exp" style="--tint-a:#1C5E56;--tint-b:#04211F">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="58" r="30"/><path d="M60 40v36M53 48h10a6 6 0 010 12h-6a6 6 0 000 12h10"/>
          <path d="M16 100h88" stroke-dasharray="3 6"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">04</p>
          <h3>Smart Value Trips</h3>
          <p>Big trips, sensible budgets. More experiences per rupee, honestly priced.</p>
          <p class="exp-for">Best for first-timers</p>
          <a class="exp-cta" href="/planner" data-plan="Smart Value">See what fits my budget <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article class="exp" style="--tint-a:#17537A;--tint-b:#051A2E">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <path d="M16 82h88l-10 20H26z"/><path d="M30 82V48h60v34"/><path d="M44 58h8M64 58h8M44 70h8M64 70h8"/>
          <path d="M60 48V30M48 30h24"/><path d="M8 108h104" stroke-dasharray="3 6"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">05</p>
          <h3>International Cruises</h3>
          <p>Sail in style for less — cruise plus transfers, hotels and sightseeing around it.</p>
          <p class="exp-for">3–7 night sailings</p>
          <a class="exp-cta" href="/planner" data-plan="Cruise">Plan a cruise <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article class="exp" style="--tint-a:#254A72;--tint-b:#061829">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <rect x="18" y="52" width="68" height="34" rx="6"/><path d="M86 62h12l10 12v12H86z"/>
          <circle cx="38" cy="92" r="8"/><circle cx="94" cy="92" r="8"/><path d="M18 68h68"/>
          <path d="M8 104h104" stroke-dasharray="3 6"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">06</p>
          <h3>Group &amp; Corporate</h3>
          <p>Offsites, incentives, weddings and large family groups moved on our own coaches and vans — one coordinator, one manifest, one invoice. We hold rooms across hotels so nobody gets split up.</p>
          <p class="exp-for">Best for 15–150 travellers</p>
          <a class="exp-cta" href="/planner" data-plan="Group &amp; Corporate">Request a group quote <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article class="exp" style="--tint-a:#6B5020;--tint-b:#190F04">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <path d="M60 18l11 26 28 2-21 19 7 28-25-15-25 15 7-28-21-19 28-2z"/>
          <path d="M14 104h92" stroke-dasharray="3 6"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">07</p>
          <h3>Signature Experiences</h3>
          <p>The moments people actually remember — a floating breakfast in an Ubud villa, a private dune safari at golden hour, a lantern released over the Hoi An river, a chef's table above the Marina Bay skyline.</p>
          <p class="exp-for">Add on to any itinerary</p>
          <a class="exp-cta" href="/planner" data-plan="Signature Experiences">Add a signature moment <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>

      <article class="exp" style="--tint-a:#1D4C64;--tint-b:#05161F">
        <svg class="exp-art" viewBox="0 0 120 120" aria-hidden="true">
          <rect x="22" y="44" width="26" height="46"/><rect x="52" y="28" width="22" height="62"/><rect x="78" y="56" width="24" height="34"/>
          <path d="M28 54h6M38 54h6M28 66h6M38 66h6M58 38h6M66 38h6M58 50h6M66 50h6M58 62h6M66 62h6M84 66h6M92 66h6"/>
          <path d="M12 100h96" stroke-dasharray="3 6"/>
        </svg>
        <div class="exp-body">
          <p class="exp-no">08</p>
          <h3>City Breaks</h3>
          <p>Short, sharp long-weekend escapes with the sightseeing pre-sorted — land Friday night, be at Gardens by the Bay by Saturday morning, home before Monday standup.</p>
          <p class="exp-for">3–4 nights · leave Thursday</p>
          <a class="exp-cta" href="/planner" data-plan="City Break">Plan a long weekend <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </article>
    </div>
  </div>
</section>
`;
}
