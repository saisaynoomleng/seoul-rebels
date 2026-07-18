'use server';

import { writeClient } from '@/sanity/writeClient';

export const handleSanityImageUpload = async (
  formData: FormData,
): Promise<string> => {
  try {
    const file = formData.get('file') as File;

    if (!file) {
      return 'File not exists!';
    }

    const assetId = await writeClient.assets.upload('image', file, {
      filename: file.name,
    });

    return assetId._id;
  } catch (error) {
    console.error(error);
    return '';
  }
};
