/**
 * WhatsApp Payload Builder
 * Builds clean, structured, and URL-encoded WhatsApp deep-links for direct DMC inquiries.
 */

export const DIRECT_VOYAGE_WHATSAPP = '919888181890';

export class WhatsAppPayloadBuilder {
  static buildUrl(data, context = 'Custom Trip Inquiry') {
    const lines = [
      `🌟 *Direct Voyage — ${context}*`,
      ''
    ];

    if (data.name) lines.push(`👤 *Name:* ${data.name.trim()}`);
    if (data.phone) lines.push(`📱 *Phone/WhatsApp:* ${data.phone.trim()}`);
    if (data.email) lines.push(`✉️ *Email:* ${data.email.trim()}`);
    if (data.destination) lines.push(`📍 *Destination:* ${data.destination}`);
    if (data.style) lines.push(`✨ *Travel Style:* ${data.style}`);
    if (data.date) lines.push(`📅 *Tentative Date:* ${data.date}`);
    if (data.nights) lines.push(`🌙 *Nights:* ${data.nights}`);

    const adults = data.adults || (data.travellers ? data.travellers : 2);
    lines.push(`👥 *Travellers:* ${adults} Adults${data.children ? ` + ${data.children} Children` : ''}`);

    if (data.budget) lines.push(`💰 *Approx. Budget:* ${data.budget}`);
    if (data.estimate) lines.push(`📊 *Indicative Planner Estimate:* ${data.estimate}`);
    if (data.message) {
      lines.push('');
      lines.push(`📝 *Notes & Preferences:*`);
      lines.push(data.message.trim());
    }

    lines.push('');
    lines.push(`🌐 _Sent from Direct Voyage Official Website_`);

    const encoded = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${DIRECT_VOYAGE_WHATSAPP}?text=${encoded}`;
  }
}
