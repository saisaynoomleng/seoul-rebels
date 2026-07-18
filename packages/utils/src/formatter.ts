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

/**
 * Return 12 Hours time string with date or string input
 * @param time string | Date
 * @returns string
 */
export const formatTime = (time: string): string => {
  const [hour, minute] = time.split(':');

  const date = new Date();
  date.setHours(Number(hour));
  date.setMinutes(Number(minute));

  return date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

/**
 * Format file size in byte
 * @param byte number
 * @returns string
 */
export const formatFileSize = (byte: number): string => {
  if (byte < 1024) {
    return `${byte}B`;
  }

  if (byte < 1024 * 1024) {
    return `${(byte / 1024).toFixed(2)} KB`;
  }

  if (byte < 1024 * 1024 * 1024) {
    return `${(byte / 1024 / 1024).toFixed(2)} MB`;
  }

  return `${(byte / 1024 / 1024 / 1024).toFixed(2)} GB`;
};
