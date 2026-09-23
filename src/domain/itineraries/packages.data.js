/**
 * Packages & Itinerary Domain Data
 * Preserves The Essentials, The Signature Voyage, and The Private Collection.
 */

export const PACKAGES = [
  {
    id: 'essentials',
    name: 'The Essentials',
    tier: 'Smart Value',
    fromPrice: 34900,
    formattedPrice: '₹34,900',
    subtitle: 'per person · from',
    isFeatured: false,
    duration: '4–5 nights',
    stays: 'Comfortable 3★ stays',
    inclusions: [
      '4–5 nights, comfortable 3★ stays',
      'Airport transfers on our own fleet',
      'Two guided sightseeing days',
      'Daily breakfast included',
      'Shared transfers for tours',
      'On-ground support throughout'
    ]
  },
  {
    id: 'signature',
    name: 'The Signature Voyage',
    tier: 'Signature',
    badge: 'Most Popular',
    fromPrice: 68900,
    formattedPrice: '₹68,900',
    subtitle: 'per person · from',
    isFeatured: true,
    duration: '6–7 nights',
    stays: 'Premium 4★ stays',
    inclusions: [
      '6–7 nights, premium 4★ stays',
      'Private transfers throughout',
      'Curated attractions & skip-the-line tickets',
      'One signature experience included',
      'Daily breakfast + one special dinner',
      'Dedicated trip coordinator'
    ]
  },
  {
    id: 'luxury',
    name: 'The Private Collection',
    tier: 'Luxury',
    fromPrice: 149000,
    formattedPrice: '₹1,49,000',
    subtitle: 'per person · from',
    isFeatured: false,
    duration: '7+ nights',
    stays: '5★ hotels & private pool villas',
    inclusions: [
      '7+ nights, 5★ hotels & pool villas',
      'Chauffeured premium vehicle on call',
      'Private guides & exclusive access',
      'Yacht, safari or private-dinner experience',
      'Full-board options & lounge access',
      '24/7 concierge line'
    ]
  }
];
