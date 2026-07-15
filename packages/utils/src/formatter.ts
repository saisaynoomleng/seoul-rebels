/**
 * Return a sentence with all words Capitalized
 * @param title string
 * @returns string
 */
export const formatTitle = (title: string): string => {
  return title
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Return a slug string for sanity documents
 * @param input string
 * @returns string
 */
export const sanitySlugifier = (input: string): string => {
  return input
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 200);
};

/**
 * Return a local date Format
 * @param date string | Date
 * @returns string
 */
export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Return random SKU number with name input
 * @param brand string
 * @returns string
 */
export const generateSKU = (name: string): string => {
  const normalizeName = normalizeInput(name);
  const random = crypto.randomUUID().slice(0, 13);

  return `${normalizeName}-${random.toUpperCase()}`;
};

/**
 * Return a string with 3 uppercased letters
 * @param input string
 * @returns string
 */
export const normalizeInput = (input: string): string => {
  return input
    .trim()
    .toUpperCase()
    .replace(/[^\w]/g, '')
    .padEnd(3, 'X')
    .slice(0, 3);
};

/**
 * Return Korean Won Currency
 * @param currency number
 * @returns string
 */
export const formatKRW = (currency: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'krw',
  }).format(currency);
};

/**
 * Return US Dollar currency
 * @param currency number
 * @returns string
 */
export const formatUSD = (currency: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
  }).format(currency);
};
