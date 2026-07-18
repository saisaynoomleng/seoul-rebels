'use server';

import { env } from '@/lib/env/client-env';
import { writeClient } from '@/sanity/writeClient';
import {
  ActionResponse,
  generateSanityId,
  StockistFormSchema,
  StockistInputSchema,
} from '@seoul-rebels/utils';

export const handleCreateStockits = async (
  data: StockistInputSchema,
): Promise<ActionResponse<StockistInputSchema>> => {
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

    const sanityId = generateSanityId();

    await writeClient.create({
      _type: 'stockist',
      _id: sanityId,
      name,
      slug: {
        current: slug,
      },
      contacts: { email, phone, street, city, state, zip, country },
      storeHours: [...storeHours],
      mainImage: {
        alt: imageAlt,
        asset: {
          _type: 'reference',
          _ref: imageAssetId,
        },
      },
    });

    await fetch(`${env.NEXT_PUBLIC_API_URL}/stores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        sanityId,
        sanitySlug: slug,
      }),
    });

    return {
      success: true,
      message: 'Stockist Created!',
    };
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {
      success: false,
      message: 'Error, something went wrong!',
    };
  }
};
