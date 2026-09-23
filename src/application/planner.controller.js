import { PricingCalculatorService } from '../domain/inquiry/pricing-calculator.service.js';
import { WhatsAppPayloadBuilder } from '../domain/inquiry/whatsapp-payload.builder.js';

export class PlannerController {
  static init() {
    const destSelect = document.getElementById('p-dest');
    const styleSelect = document.getElementById('p-style');
    const nightsSlider = document.getElementById('p-nights');
    const nightsVal = document.getElementById('p-nights-val');
    const adultsInput = document.getElementById('p-adults');
    const childrenInput = document.getElementById('p-children');
    const nameInput = document.getElementById('p-name');
    const phoneInput = document.getElementById('p-phone');
    const estPerPerson = document.getElementById('p-est-perperson');
    const estTotal = document.getElementById('p-est-total');
    const sendBtn = document.getElementById('p-send-wa');

    if (!destSelect || !estPerPerson) return;

    function updateCalculations() {
      const destination = destSelect.value;
      const style = styleSelect.value;
      const nights = parseInt(nightsSlider.value, 10);
      const adults = parseInt(adultsInput.value, 10) || 2;
      const children = parseInt(childrenInput.value, 10) || 0;

      nightsVal.textContent = `${nights} Nights`;

      // Fluid gold range track progress
      const min = parseInt(nightsSlider.min, 10) || 3;
      const max = parseInt(nightsSlider.max, 10) || 14;
      const percent = Math.min(100, Math.max(0, ((nights - min) / (max - min)) * 100));
      nightsSlider.style.setProperty('--range-progress', `${percent}%`);

      const result = PricingCalculatorService.calculate({
        destination,
        nights,
        style,
        adults,
        children
      });

      estPerPerson.textContent = result.formattedPerPerson;
      estTotal.textContent = `Total for ${result.travellers} travellers: ${result.formattedTotalGroup}`;
    }

    // Attach listeners
    [destSelect, styleSelect, adultsInput, childrenInput].forEach(el => {
      el.addEventListener('change', updateCalculations);
    });

    nightsSlider.addEventListener('input', updateCalculations);

    // Send via WhatsApp
    sendBtn.addEventListener('click', () => {
      const destination = destSelect.options[destSelect.selectedIndex].text;
      const style = styleSelect.options[styleSelect.selectedIndex].text;
      const nights = nightsSlider.value;
      const adults = adultsInput.value;
      const children = childrenInput.value;
      const name = nameInput.value;
      const phone = phoneInput.value;
      const estimate = `${estPerPerson.textContent} per person (Est. Total: ${estTotal.textContent.split(': ')[1] || ''})`;

      const url = WhatsAppPayloadBuilder.buildUrl({
        name,
        phone,
        destination,
        style,
        nights,
        adults,
        children,
        estimate
      }, 'Interactive Trip Planner Estimate');

      const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = url;
      } else {
        window.open(url, '_blank', 'noopener');
      }
    });

    // Initial calculation
    updateCalculations();
  }
}
