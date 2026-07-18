/**
 * Return the MegaByte size of the input size
 * @param size number
 * @returns number
 */
export const maximumImageSize = (size: number): number => {
  return size * 1024 * 1024;
};

/**
 * Allowed image types for the input file
 */
export const ALLOWED_IMAGE_TYPES = [
  'image/avif',
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'image/gif',
  'image/svg',
  'image/ai',
  'image/eps',
];

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
 * Return a slug string for sanity documents
 * @param input string
 * @returns string
 */
export const sanitySlugifier = (input: string): string => {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 200);
};

type ValidateImageResult =
  | { success: true; file: File }
  | { success: false; error: string };

/**
 * Validate the Image upload's type and size
 * @param file File
 * @returns | {success: true, file: File} | {success: false, error: string}
 */
export const validateImage = (file: File): ValidateImageResult => {
  if (!file) {
    return {
      success: false,
      error: 'Upload an image',
    };
  }

  if (file.size > maximumImageSize(1)) {
    return {
      success: false,
      error: 'Image cannot exceeds 1 MB',
    };
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return {
      success: false,
      error: 'Unsupported image type',
    };
  }

  return {
    success: true,
    file,
  };
};

/**
 * Add greater than sign '>' on every whitespace
 * @param input string
 * @returns string
 */
export const addPointerArrow = (input: string): string => {
  return input.trim().replace(/\s+/g, ' ').split(' ').join(' > ');
};

/**
 * Remove dash '-' in a string and replace with whitespace
 * @param input string
 * @returns string
 */
export const removeDashAndReplaceWithSpace = (input: string): string => {
  return input.replace(/-/g, ' ');
};

/**
 * Generate Random UUID string for Sanity document's _id
 * @returns string
 */
export const generateSanityId = (): string => {
  const dateDigits = new Date().getTime().toString().slice(0, 8);
  const random = crypto.randomUUID();

  return `${random}-${dateDigits}`;
};
