export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.trim() !== '';
};

export const isValidFullName = (fullName: string): boolean => {
  const nameParts = fullName.trim().split(/\s+/);
  return nameParts.length >= 2 && fullName.trim() !== '';
};
