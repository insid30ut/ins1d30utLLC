/**
 * Form validation utilities
 */

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format (flexible for different formats)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  const digits = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && digits.length >= 10;
}

/**
 * Validates required field
 */
export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Validates minimum length
 */
export function minLength(value: string, min: number): boolean {
  return value.trim().length >= min;
}

/**
 * Validates maximum length
 */
export function maxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}

/**
 * Comprehensive contact form validation
 */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function validateContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  } else if (!minLength(data.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!isRequired(data.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Invalid phone number';
  }

  if (!isRequired(data.message)) {
    errors.message = 'Message is required';
  } else if (!minLength(data.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}