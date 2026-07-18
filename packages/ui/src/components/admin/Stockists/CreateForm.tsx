'use client';

import React from 'react';
import { StockistForm } from './StockistForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ActionResponse,
  StockistFormSchema,
  StockistInputSchema,
} from '@seoul-rebels/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

type CreateStockistFormProps = {
  action: (
    data: StockistInputSchema,
  ) => Promise<ActionResponse<StockistInputSchema>>;
  imageUploadAction: (formData: FormData) => Promise<string>;
};

export const CreateStockistForm = ({
  action,
  imageUploadAction,
}: CreateStockistFormProps): React.JSX.Element => {
  const form = useForm<StockistInputSchema>({
    resolver: zodResolver(StockistFormSchema),
    defaultValues: {
      name: '',
      slug: '',
      email: '',
      phone: '',
      street: '',
      state: '',
      city: '',
      zip: '',
      country: '',
      storeHours: Array.from({ length: 7 }, (_, day) => ({
        day,
        _type: 'storeHour',
        _key: crypto.randomUUID(),
        openingHours: '',
        closingHours: '',
      })),
      imageAssetId: '',
      imageAlt: '',
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

    toast.success(result.message);
  };

  return (
    <StockistForm
      title="Create Stockist"
      form={form}
      onSubmit={onSubmit}
      submitLabel="Create"
      imageUploadAction={imageUploadAction}
    />
  );
};
