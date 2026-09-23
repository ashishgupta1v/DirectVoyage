/**
 * Fleet & Ground Operations Domain Data
 * Direct Voyage operates its own dedicated fleet across destinations.
 */

export const FLEET = [
  {
    id: 'alphard',
    name: 'Toyota Alphard Executive Lounge',
    tier: 'First Class VIP',
    capacity: '4 Passengers',
    luggage: '4 Large Bags',
    idealFor: 'VIP, Honeymooners, Luxury Couples',
    features: ['Captain Ottoman Reclining Seats', 'Privacy Tint & Curtains', 'High-Speed Wi-Fi & Cold Refreshments', 'English-Speaking Senior Chauffeur'],
    destinations: ['Singapore', 'Thailand', 'Dubai']
  },
  {
    id: 'innova',
    name: 'Toyota Innova Crysta / Reborn',
    tier: 'Premium Family',
    capacity: '5–6 Passengers',
    luggage: '4 Bags',
    idealFor: 'Families & Small Groups',
    features: ['Spacious Cabin & Dual AC', 'Direct Flight Tracking at Arrivals', 'Child Seats Available on Request', 'Dedicated Airport Meet & Greet'],
    destinations: ['Bali', 'Thailand', 'Vietnam', 'Singapore']
  },
  {
    id: 'commuter',
    name: 'Toyota Commuter VIP Van',
    tier: 'Group & Corporate',
    capacity: '9–12 Passengers',
    luggage: '10 Bags',
    idealFor: 'Friends, Family Reunions, Corporate Teams',
    features: ['High-Roof Luxury Layout', 'Reclining Bucket Seats', 'Full Luggage Trailer Available', 'Single Point Coordinator for Group'],
    destinations: ['Thailand', 'Bali', 'Vietnam', 'Dubai']
  },
  {
    id: 'yacht',
    name: 'Private Luxury Yachts & Speedboats',
    tier: 'Signature Marine',
    capacity: '2–25 Guests',
    luggage: 'Day Gear',
    idealFor: 'Island Hopping & Sunset Cruises',
    features: ['Licensed Marine Captain & Crew', 'Sundeck, Sound System & Snorkeling Gear', 'Complimentary Sunset Refreshments', 'Private Docking & Priority Boarding'],
    destinations: ['Dubai Marina', 'Phuket & Krabi', 'Ha Long Bay', 'Bali Nusa Penida']
  }
];

export const FLEET_PROMISES = [
  { title: '100% Owned & Maintained', desc: 'Vehicles are maintained to rigorous safety standards, air-conditioned, spotless, and never a third-party surprise.' },
  { title: 'Chauffeur Meet & Greet', desc: 'Your driver is waiting at airport arrivals with a named paging board, even if your flight is delayed.' },
  { title: 'Zero Surge or Extra Charges', desc: 'Fuel, tolls, parking, and driver allowances are all inclusive. No cash collections in the vehicle.' },
  { title: 'Flexible Multi-Stop Dispatches', desc: 'Want to stop for lunch or photography on the way? Our drivers accommodate your itinerary smoothly.' }
];
