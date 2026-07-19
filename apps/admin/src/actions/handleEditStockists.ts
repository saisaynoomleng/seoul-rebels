'use server';

import { env } from '@/lib/env/client-env';
import { writeClient } from '@/sanity/writeClient';
import {
  ActionResponse,
  StockistFormSchema,
  StockistInputSchema,
  StockistOutputSchema,
} from '@seoul-rebels/utils';

export const handleEditStockists = async (
  data: StockistInputSchema,
): Promise<ActionResponse<StockistOutputSchema>> => {
  try {
    const result = StockistFormSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: result.error.issues[0].message,
        field: result.error.issues[0].path.join(
          '.',
        ) as keyof StockistInputSchema,
      };
    }

    const {
      _id,
      name,
      slug,
      email,
      phone,
      street,
      city,
      state,
      zip,
      country,
      storeHours,
      imageAlt,
      imageAssetId,
    } = result.data;

    await writeClient
      .patch(_id as string)
      .set({
        name,
        slug: { current: slug },
        contacts: { email, phone, street, city, state, zip, country },
        storeHours: [...storeHours],
        mainImage: {
          alt: imageAlt,
          asset: {
            _type: 'reference',
            _ref: imageAssetId,
          },
        },
      })
      .commit();

    await fetch(`${env.NEXT_PUBLIC_API_URL}/stores/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sanityId: _id,
        name,
        sanitySlug: slug,
      }),
    });

    return {
      success: true,
      message: 'Stockist successfully Edited!',
    };
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {
      success: false,
      message: 'Something went wrong! Try again later!',
    };
  }
};
