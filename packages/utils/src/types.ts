/**
 * Returned data shape after submitting form
 */
export type ActionResponse<T> = {
  success: boolean;
  message: string;
  field?: keyof T;
};

/**
 * Data shape of an image
 */
export type Media = {
  imageUrl: string;
  imageAlt: string;
};

/**
 * Data shape of call to action
 */
export type CallToAction = {
  label: string;
  href: string;
};
