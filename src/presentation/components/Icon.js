/**
 * Direct Voyage — Centralized Icon System
 * Standardized icon generator combining Simple Icons (official brand assets)
 * and Lucide geometries (crisp, modern UI action icons).
 */

const ICONS = {
  // Brand Icons (Simple Icons - solid filled glyphs)
  whatsapp: {
    type: 'fill',
    viewBox: '0 0 24 24',
    body: '<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.2 0-.43.08-.66.33-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29s-1.48-.73-1.71-.81c-.23-.08-.4-.13-.57.13-.17.25-.66.81-.8 1-.15.19-.29.21-.54.08-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.44s-.57-1.38-.79-1.89c-.21-.51-.43-.44-.59-.45h-.5z"/>'
  },
  instagram: {
    type: 'fill',
    viewBox: '0 0 24 24',
    body: '<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.066.935 20.398.522 19.608.217 18.842-.08 17.972-.283 16.695-.342 15.415-.4 15.008-.415 11.747-.415zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>'
  },

  // UI Action & Contact Icons (Lucide - stroked geometric glyphs)
  phone: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  },
  mail: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
  },
  clock: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
  },
  calendar: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>'
  },
  check: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    strokeWidth: 2.5,
    body: '<polyline points="20 6 9 17 4 12"/>'
  },
  search: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'
  },
  'arrow-right': {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
  },
  'chevron-down': {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<path d="m6 9 6 6 6-6"/>'
  },
  shield: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'
  },
  users: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  },
  x: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    strokeWidth: 2,
    body: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
  },
  sparkles: {
    type: 'stroke',
    viewBox: '0 0 24 24',
    body: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>'
  }
};

/**
 * Functional Icon component
 * @param {string} name - Icon identifier (e.g. 'whatsapp', 'phone', 'mail', 'check')
 * @param {Object} [options]
 * @param {number} [options.size=18] - Width and height in px
 * @param {string} [options.className=''] - Additional CSS classes
 * @param {boolean} [options.ariaHidden=true] - Accessibility hidden flag
 * @param {string} [options.ariaLabel] - Accessible label if not hidden
 * @param {number} [options.strokeWidth] - Custom stroke width for stroke-based icons
 * @param {string} [options.style=''] - Inline CSS styles
 * @returns {string} Optimized SVG string
 */
export function Icon(name, options = {}) {
  const icon = ICONS[name];
  if (!icon) {
    console.warn(`[Icon] Unknown icon: "${name}"`);
    return '';
  }

  const {
    size = 18,
    className = '',
    ariaHidden = true,
    ariaLabel,
    strokeWidth = icon.strokeWidth || 2,
    style = ''
  } = options;

  const classAttr = className ? ` class="icon ${className}"` : ' class="icon"';
  const ariaAttr = ariaLabel
    ? ` role="img" aria-label="${ariaLabel}"`
    : ariaHidden
    ? ' aria-hidden="true"'
    : '';
  const styleAttr = style ? ` style="${style}"` : '';

  if (icon.type === 'fill') {
    return `<svg viewBox="${icon.viewBox}" width="${size}" height="${size}" fill="currentColor"${classAttr}${ariaAttr}${styleAttr}>${icon.body}</svg>`;
  }

  return `<svg viewBox="${icon.viewBox}" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"${classAttr}${ariaAttr}${styleAttr}>${icon.body}</svg>`;
}
