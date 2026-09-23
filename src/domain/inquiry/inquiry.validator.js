/**
 * Form Validation Service
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+0-9\s\-()]{7,20}$/;

export class InquiryValidator {
  static validateField(name, value) {
    const trimmed = String(value || '').trim();

    switch (name) {
      case 'name':
        return trimmed.length >= 2 ? null : 'Please enter your name.';
      case 'phone':
        return trimmed.length >= 7 && PHONE_REGEX.test(trimmed) ? null : 'Please enter a valid contact number.';
      case 'destination':
        return trimmed.length > 0 ? null : 'Please select a destination.';
      case 'style':
        return trimmed.length > 0 ? null : 'Please select a travel style.';
      case 'email':
        if (!trimmed) return null; // Email is optional in some forms
        return EMAIL_REGEX.test(trimmed) ? null : 'Please enter a valid email address.';
      default:
        return null;
    }
  }

  static validateForm(formData) {
    const errors = {};

    ['name', 'phone', 'destination'].forEach(field => {
      const err = this.validateField(field, formData[field]);
      if (err) errors[field] = err;
    });

    if (formData.email) {
      const err = this.validateField('email', formData.email);
      if (err) errors.email = err;
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}
