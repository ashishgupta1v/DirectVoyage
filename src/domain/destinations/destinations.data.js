/**
 * Destination Domain Data
 * Preserving all original 5 destinations, prices, tags, and itinerary data.
 */

export const DESTINATIONS = [
  {
    id: 'singapore',
    name: 'Singapore',
    tagline: 'The Lion City, Your Way',
    description: 'Skyline dinners, Gardens by the Bay and Sentosa — seamless from the moment you land.',
    fromPrice: 42900,
    formattedPrice: '₹42,900',
    nights: '4–5 nights',
    bestSeason: 'Great year-round',
    chips: ['Marina Bay', 'Sentosa', 'Universal'],
    flag: 'singapore',
    highlights: [
      'Marina Bay Sands SkyPark & Observation Deck',
      'Universal Studios Singapore with VIP access options',
      'Night Safari & Mandai Wildlife Reserve',
      'Sentosa Island luxury beach clubs & cable car'
    ],
    sampleItinerary: [
      { day: 1, title: 'Arrival & Marina Bay Sunset', desc: 'VIP meet & greet at Changi Airport. Private transfer in Direct Voyage fleet to hotel. Evening stroll at Marina Bay Sands and Spectra light show.' },
      { day: 2, title: 'Sentosa & Universal Studios', desc: 'Full-day thrills at Universal Studios Singapore, S.E.A. Aquarium, and sunset at Siloso Beach.' },
      { day: 3, title: 'Gardens by the Bay & Flower Dome', desc: 'Cloud Forest, Supertree Observatory, and night light show at Gardens by the Bay.' },
      { day: 4, title: 'Heritage & Shopping', desc: 'Chinatown, Little India heritage walk, Orchard Road shopping, and evening Marina cruise.' },
      { day: 5, title: 'Jewel Changi & Departure', desc: 'Rain Vortex exploration at Jewel Changi with private departure chauffeur.' }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    tagline: 'Island of the Gods',
    description: 'Jungle villas, infinity pools and Uluwatu sunsets — tailored to your pace.',
    fromPrice: 38900,
    formattedPrice: '₹38,900',
    nights: '5–6 nights',
    bestSeason: 'Best Apr–Oct',
    chips: ['Ubud', 'Uluwatu', 'Nusa Penida'],
    flag: 'bali',
    highlights: [
      'Private pool villas in Ubud and Seminyak',
      'Uluwatu cliffside temple & Kecak fire dance',
      'Nusa Penida island speed-boat tour & Kelingking beach',
      'Tegallalang rice terraces & jungle swing'
    ],
    sampleItinerary: [
      { day: 1, title: 'Arrival in Denpasar & Ubud Transfer', desc: 'Chauffeur meet at Ngurah Rai Airport. Private transfer to jungle pool villa in Ubud. Traditional Balinese welcome dinner.' },
      { day: 2, title: 'Cultural Ubud & Waterfalls', desc: 'Tegallalang rice terraces, sacred monkey forest, and Tegenungan waterfall.' },
      { day: 3, title: 'Nusa Penida Speedboat Excursion', desc: 'Private speedboat to Nusa Penida: Kelingking T-Rex cliff, Angel’s Billabong, and Broken Beach.' },
      { day: 4, title: 'South Bali Beach Club & Uluwatu', desc: 'Transfer to Seminyak/Canggu villa. Sunset cocktails at Uluwatu cliff temple with Kecak performance.' },
      { day: 5, title: 'Tanah Lot & Departure', desc: 'Iconic offshore temple visit and chauffeured transfer to Denpasar Airport.' }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    tagline: 'Islands, Temples & More',
    description: 'Turquoise bays and longtail boats, golden temples and Bangkok\'s buzz.',
    fromPrice: 34900,
    formattedPrice: '₹34,900',
    nights: '4–7 nights',
    bestSeason: 'Best Nov–Mar',
    chips: ['Phuket', 'Krabi', 'Phi Phi'],
    flag: 'thailand',
    highlights: [
      'Phi Phi Islands & Maya Bay speedboat tour',
      'Bangkok Grand Palace & Wat Arun temple cruise',
      'Phuket James Bond island & sea canoeing',
      'Chao Phraya luxury dinner cruise'
    ],
    sampleItinerary: [
      { day: 1, title: 'Phuket Arrival & Patong Leisure', desc: 'Direct Voyage fleet transfer to beachfront resort. Evening at leisure along Patong beach.' },
      { day: 2, title: 'Phi Phi Islands & Maya Bay', desc: 'Speedboat cruise across emerald waters, snorkeling at Pileh Lagoon, and beach barbecue at Bamboo Island.' },
      { day: 3, title: 'Transfer to Krabi & Ao Nang', desc: 'Scenic transfer to Krabi. Sunset views over limestone karst cliffs in Ao Nang.' },
      { day: 4, title: 'Four Island Tour & Railay Beach', desc: 'Traditional longtail ride to Phra Nang cave, Chicken Island sandbar, and Railay beach.' },
      { day: 5, title: 'Bangkok City & Chao Phraya Dinner', desc: 'Short flight to Bangkok. Private transfer to hotel and evening Chao Phraya luxury river cruise.' },
      { day: 6, title: 'Departure', desc: 'Souvenir shopping and private transfer to Suvarnabhumi Airport.' }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    tagline: 'Timeless & Breathtaking',
    description: 'Cruise the karst islands of Ha Long Bay, float a lantern in Hoi An, cross the Golden Bridge in Da Nang.',
    fromPrice: 46900,
    formattedPrice: '₹46,900',
    nights: '6–8 nights',
    bestSeason: 'Best Oct–Apr',
    chips: ['Ha Long Bay Cruise', 'Hoi An Lanterns', 'Ba Na Hills', 'Mekong Delta'],
    flag: 'vietnam',
    highlights: [
      '5-Star overnight cruise on Ha Long Bay & Lan Ha Bay',
      'Golden Bridge held by giant stone hands at Ba Na Hills',
      'Hoi An ancient lantern town night boat ride',
      'Hanoi French quarter & train street experience'
    ],
    sampleItinerary: [
      { day: 1, title: 'Hanoi Arrival & Old Quarter', desc: 'Meet & greet at Noi Bai International Airport. Private hotel transfer, traditional egg coffee, and water puppet show.' },
      { day: 2, title: 'Overnight 5★ Ha Long Bay Cruise', desc: 'Board luxury cruise through emerald karst waters, kayak through Sung Sot Cave, sunset on sundeck.' },
      { day: 3, title: 'Morning Tai Chi & Da Nang Flight', desc: 'Morning sunrise on the bay. Transfer back to Hanoi and direct flight to coastal Da Nang.' },
      { day: 4, title: 'Ba Na Hills & Golden Bridge', desc: 'World’s longest cable car to the iconic Golden Bridge held by stone hands. French village exploration.' },
      { day: 5, title: 'Hoi An Ancient Lantern Town', desc: 'Lantern making workshop, riverboat ride releasing floating candles, and tailored silk shopping.' },
      { day: 6, title: 'Departure from Da Nang', desc: 'Marble mountains tour and private transfer to Da Nang International Airport.' }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    tagline: 'Where Luxury Lives',
    description: 'Burj Khalifa sunsets, golden dune safaris and yacht cruises — luxury made simple, and priced honestly.',
    fromPrice: 49900,
    formattedPrice: '₹49,900',
    nights: '4–6 nights',
    bestSeason: 'Best Nov–Mar',
    chips: ['Burj Khalifa', 'Desert Safari', 'Yacht Cruise', 'Palm Jumeirah'],
    flag: 'dubai',
    highlights: [
      'Burj Khalifa 124th & 125th floor observation lounge',
      'VIP 4x4 desert safari with dune bashing & bedouin camp BBQ',
      'Dubai Marina private luxury yacht cruise',
      'Abu Dhabi Sheikh Zayed Grand Mosque day tour'
    ],
    sampleItinerary: [
      { day: 1, title: 'Dubai Arrival & Marina Walk', desc: 'Arrival at DXB Airport. Direct fleet pickup to downtown or marina hotel. Evening walk by Dubai Marina.' },
      { day: 2, title: 'Burj Khalifa & Dubai Mall', desc: 'Fast-track entry to Burj Khalifa At The Top, Dubai Mall aquarium, and dancing fountains evening show.' },
      { day: 3, title: 'Desert Safari with Dune Bashing', desc: 'Afternoon 4x4 Land Cruiser dune bashing, sandboarding, camel rides, and VIP 5-course BBQ dinner under starlight.' },
      { day: 4, title: 'Abu Dhabi Grand Mosque Day Tour', desc: 'Scenic highway transfer to Abu Dhabi. Guided tour of the breathtaking Sheikh Zayed Grand Mosque.' },
      { day: 5, title: 'Palm Jumeirah & Yacht Cruise', desc: 'Monorail to Atlantis The Palm and 2-hour private yacht cruise along Dubai shoreline.' },
      { day: 6, title: 'Gold Souk & Departure', desc: 'Traditional abra boat across Dubai Creek, spice and gold souks, private transfer to DXB Airport.' }
    ]
  }
];
