import { fn } from 'storybook/test';

export const logoWhiteURL =
  'https://cdn.sanity.io/images/fg8lqh2u/production/84fa054f0cb7edd4ea2dabef706ab3b23c1488ef-520x250.png';

export const logoBlackURL =
  'https://cdn.sanity.io/images/fg8lqh2u/production/b307b8433b2f5fa67446d57093699e63d6294f6f-503x239.png';

export const mockForm = fn(async () => {
  return { success: true, message: 'Submission Success' };
});

export const mockImageUploadAction = fn(async () => 'test imageAssetId');

export const mockFileUpload = new File(['image'], 'image.png', {
  type: 'image/png',
});
