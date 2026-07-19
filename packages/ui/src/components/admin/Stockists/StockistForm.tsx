'use client';

import React from 'react';
import { Bounded, ImageInput, SectionTitle } from '../../shared';
import {
  FieldLabel,
  Field,
  FieldError,
  FieldDescription,
} from '#components/ui/field';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { sanitySlugifier, StockistInputSchema } from '@seoul-rebels/utils';
import { Input } from '#components/ui/input';
import { Button } from '#components/ui/button';

type StockistFormProps = {
  form: UseFormReturn<StockistInputSchema>;
  onSubmit: SubmitHandler<StockistInputSchema>;
  title: string;
  submitLabel: string;
  imageUploadAction: (formData: FormData) => Promise<string>;
};

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const StockistForm = ({
  form,
  onSubmit,
  title,
  submitLabel,
  imageUploadAction,
}: StockistFormProps): React.JSX.Element => {
  const { register } = form;
  const { errors } = form.formState;

  const generateSlug = () => {
    const name = form.getValues('name');

    if (!name) {
      return form.setError('slug', {
        message: 'Input store name first',
      });
    }

    const slug = sanitySlugifier(name);

    if (!slug) {
      return form.setError('slug', {
        message: 'Invalid Slug',
      });
    }

    form.setValue('slug', `${slug}-store`, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleImageUploadAction = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const assetId = await imageUploadAction(formData);

      if (!assetId) {
        return form.setError('imageAssetId', {
          message: 'Image upload failed!',
        });
      }

      form.setValue('imageAssetId', assetId, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      form.setError('imageAssetId', {
        message: 'Something went wrong!',
      });
    }
  };

  return (
    <Bounded
      as="form"
      size="full"
      isCentered={false}
      className="grid grid-cols-2 gap-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <SectionTitle label={title} size="sm" className="col-span-full" />

      <Field className="col-span-full">
        <FieldLabel htmlFor="name">Store Name</FieldLabel>
        <Input type="text" id="name" {...register('name')} />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </Field>

      <Field className="col-span-full">
        <FieldLabel htmlFor="slug">Slug</FieldLabel>
        <FieldDescription>
          Slug is required to generate a page on the website
          <span className="block test-fs-300 text-brand-success-700 font-semibold">
            Gererate automatically with Generate button
          </span>
        </FieldDescription>
        <div className="flex items-center gap-x-2">
          <Input type="text" id="slug" {...register('slug')} />
          <Button type="button" variant="outline" onClick={generateSlug}>
            Generate
          </Button>
        </div>
        {errors.slug && <FieldError>{errors.slug.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input type="email" id="email" {...register('email')} />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="phone">Phone</FieldLabel>
        <Input type="text" id="phone" {...register('phone')} />
        {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
      </Field>

      <Field className="col-span-full">
        <FieldLabel htmlFor="street">Street</FieldLabel>
        <Input type="text" id="street" {...register('street')} />
        {errors.street && <FieldError>{errors.street.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <Input type="text" id="city" {...register('city')} />
        {errors.city && <FieldError>{errors.city.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="state">State</FieldLabel>
        <Input type="text" id="state" {...register('state')} />
        {errors.state && <FieldError>{errors.state.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="zip">Zip/Postal Code</FieldLabel>
        <Input type="string" id="zip" {...register('zip')} />
        {errors.zip && <FieldError>{errors.zip.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="country">Country</FieldLabel>
        <Input type="text" id="country" {...register('country')} />
        {errors.country && <FieldError>{errors.country.message}</FieldError>}
      </Field>

      <Field className="col-span-full">
        <ImageInput
          onChange={handleImageUploadAction}
          errorMessage={errors.imageAssetId?.message}
        />
      </Field>

      <Field className="col-span-full">
        <FieldLabel htmlFor="imageAlt">Image Alternative Text</FieldLabel>
        <FieldDescription>
          Image Alternative text is required for Accessibility
        </FieldDescription>
        <Input type="text" id="imageAlt" {...register('imageAlt')} />
        {errors.imageAlt && <FieldError>{errors.imageAlt.message}</FieldError>}
      </Field>

      <Bounded
        as="div"
        size="full"
        isCentered={false}
        className="col-span-full border border-input"
        space
      >
        <p className="font-semibold">Store Hours</p>

        {DAYS.map((day, i) => (
          <div key={i} className="grid grid-cols-3 gap-4 w-full">
            <Field>
              <FieldLabel>{day}</FieldLabel>
              <Input type="hidden" {...register(`storeHours.${i}.day`)} />
              {errors.storeHours?.[i]?.day && (
                <FieldError>{errors.storeHours[i].day.message}</FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor={`storeHours.${i}.openingHour`}>
                Opening Hour
              </FieldLabel>
              <Input
                type="time"
                id={`storeHours.${i}.openingHours`}
                data-testid={`storeHours.${i}.openingHours`}
                {...register(`storeHours.${i}.openingHours`)}
              />
              {errors.storeHours?.[i]?.openingHours && (
                <FieldError>
                  {errors.storeHours[i].openingHours.message}
                </FieldError>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor={`storeHours.${i}.closingHours`}>
                Closing Hours
              </FieldLabel>
              <Input
                type="time"
                id={`storeHours.${i}.closingHour`}
                data-testid={`storeHours.${i}.closingHours`}
                {...register(`storeHours.${i}.closingHours`)}
              />
              {errors.storeHours?.[i]?.closingHours && (
                <FieldError>
                  {errors.storeHours[i].closingHours.message}
                </FieldError>
              )}
            </Field>
          </div>
        ))}
      </Bounded>

      <Button type="submit">{submitLabel}</Button>
    </Bounded>
  );
};
