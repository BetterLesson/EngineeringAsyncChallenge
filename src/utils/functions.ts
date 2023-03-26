export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.trim() !== '';
}

export function isValidFullName(fullName: string) {
  const nameParts = fullName.trim().split(/\s+/);
  return nameParts.length >= 2 && fullName.trim() !== '';
}
