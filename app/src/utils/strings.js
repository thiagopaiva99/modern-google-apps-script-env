export const firstLetterUp = text =>
  text.toLowerCase().replace(/\b[a-z]/g, firstLetter => firstLetter.toUpperCase());
