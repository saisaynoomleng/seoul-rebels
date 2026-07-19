'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ActionResponse,
  StockistInputSchema,
  StockistOutputSchema,
  StockistFormSchema,
} from '@seoul-rebels/utils';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { StockistForm } from './StockistForm';

type EditStockistFormProps = {
  action: (
    data: StockistInputSchema,
  ) => Promise<ActionResponse<StockistOutputSchema>>;
  imageUploadAction: (formData: FormData) => Promise<string>;
  stockist: StockistOutputSchema;
};

export const EditStockistForm = ({
  action,
  imageUploadAction,
  stockist,
}: EditStockistFormProps): React.JSX.Element => {
  const form = useForm<StockistInputSchema>({
    resolver: zodResolver(StockistFormSchema),
    defaultValues: {
      _id: stockist._id,
      name: stockist.name,
      slug: stockist.slug,
      email: stockist.email,
      phone: stockist.phone,
      street: stockist.street,
      city: stockist.city,
      state: stockist.state,
      zip: stockist.zip,
      country: stockist.country,
      storeHours: stockist.storeHours,
      imageAlt: stockist.imageAlt,
      imageAssetId: stockist.imageAssetId,
    },
  });

  const onSubmit: SubmitHandler<StockistInputSchema> = async (data) => {
    const result = await action(data);

    if (!result.success) {
      toast.error(result.message);
      return form.setError(result.field as keyof StockistInputSchema, {
        message: result.message,
      });
    }

    return toast.success(result.message);
  };

  return (
    <StockistForm
      form={form}
      title={`Edit ${stockist.name ?? ''}`}
      submitLabel="Publish"
      onSubmit={onSubmit}
      imageUploadAction={imageUploadAction}
    />
  );
};
