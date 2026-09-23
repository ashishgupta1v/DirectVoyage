/**
 * Dynamic Pricing Estimator Service
 * Calculates real-time indicative budgets based on destination, travel style, nights, and pax.
 */

const BASE_RATES = {
  thailand: { base4N: 34900, extraNight: 4200 },
  bali: { base4N: 38900, extraNight: 4800 },
  singapore: { base4N: 42900, extraNight: 6500 },
  vietnam: { base4N: 46900, extraNight: 5400 },
  dubai: { base4N: 49900, extraNight: 6800 },
  cruise: { base4N: 54900, extraNight: 7200 },
  'multi-country': { base4N: 68900, extraNight: 8500 }
};

const STYLE_MULTIPLIERS = {
  'smart-value': 1.0,
  'comfortable-family': 1.18,
  'premium': 1.35,
  'honeymoon': 1.45,
  'luxury': 2.1,
  'group-corporate': 0.92
};

export class PricingCalculatorService {
  static calculate({ destination = 'thailand', nights = 5, style = 'comfortable-family', adults = 2, children = 0 }) {
    const destKey = destination.toLowerCase().replace(/\s+/g, '-');
    const rate = BASE_RATES[destKey] || BASE_RATES.thailand;
    const styleKey = style.toLowerCase().replace(/[\s\/]+/g, '-');
    const multiplier = STYLE_MULTIPLIERS[styleKey] || 1.15;

    const extraNights = Math.max(0, parseInt(nights, 10) - 4);
    const basePerPerson = (rate.base4N + (extraNights * rate.extraNight)) * multiplier;

    const adultCount = Math.max(1, parseInt(adults, 10) || 2);
    const childCount = Math.max(0, parseInt(children, 10) || 0);

    // Children under twin sharing / extra bed typically 70% of land cost
    const totalGroupEstimate = Math.round((basePerPerson * adultCount) + (basePerPerson * 0.7 * childCount));
    const perPersonEstimate = Math.round(totalGroupEstimate / (adultCount + childCount));

    return {
      perPerson: perPersonEstimate,
      formattedPerPerson: '₹' + perPersonEstimate.toLocaleString('en-IN'),
      totalGroup: totalGroupEstimate,
      formattedTotalGroup: '₹' + totalGroupEstimate.toLocaleString('en-IN'),
      nights: parseInt(nights, 10),
      travellers: adultCount + childCount,
      adults: adultCount,
      children: childCount
    };
  }
}
