'use client';

import React from 'react';
import { Bounded, ImageInput, SectionTitle } from '../../shared';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { sanitySlugifier, TeamMemberInputSchema } from '@seoul-rebels/utils';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from '#components/ui/field';
import { Input } from '#components/ui/input';
import { Button } from '#components/ui/button';

type TeamMemberFormProps = {
  form: UseFormReturn<TeamMemberInputSchema>;
  onSubmit: SubmitHandler<TeamMemberInputSchema>;
  imageUploadAction: (formData: FormData) => Promise<string>;
  title: string;
  submitLabel: string;
  className?: string;
};

export const TeamMemberForm = ({
  form,
  onSubmit,
  imageUploadAction,
  title,
  submitLabel,
  className,
}: TeamMemberFormProps): React.JSX.Element => {
  const { register, setError, setValue } = form;
  const { errors } = form.formState;

  const generateSlug = () => {
    const name = form.getValues('name');

    if (!name) {
      return setError('slug', {
        message: 'Input name first!',
      });
    }

    const slug = sanitySlugifier(name);

    if (!slug) {
      return setError('slug', {
        message: 'Invalid Slug',
      });
    }

    setValue('slug', slug + '-team-member', {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleImageUploadAction = async (file: File) => {
    if (!file) {
      return setError('imageAssetId', {
        message: 'Upload an image',
      });
    }

    const formData = new FormData();
    formData.append('file', file);

    const assetId = await imageUploadAction(formData);

    if (!assetId) {
      return setError('imageAssetId', {
        message: 'Image upload failed',
      });
    }

    setValue('imageAssetId', assetId, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <Bounded
      as="form"
      size="full"
      isCentered={false}
      onSubmit={form.handleSubmit(onSubmit)}
      className={twMerge(clsx('flex flex-col gap-y-6', className))}
    >
      <SectionTitle as="h3" size="sm" label={title} />

      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input type="text" id="name" {...register('name')} />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="slug">Slug</FieldLabel>
        <FieldDescription>
          Slug is required to generate a page on the website
        </FieldDescription>
        <div className="flex items-center gap-x-1">
          <Input type="slug" id="slug" {...register('slug')} />
          <Button type="button" variant="outline" onClick={generateSlug}>
            Generate
          </Button>
        </div>
        {errors.slug && <FieldError>{errors.slug.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="position">Position</FieldLabel>
        <Input type="text" id="position" {...register('position')} />
        {errors.position && <FieldError>{errors.position.message}</FieldError>}
      </Field>

      <Field>
        <ImageInput
          errorMessage={errors.imageAssetId?.message}
          onChange={handleImageUploadAction}
        />
        {errors.imageAssetId && (
          <FieldError>{errors.imageAssetId?.message}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="imageAlt">Image Alt</FieldLabel>
        <FieldDescription>
          Image Alternative text is required for screen reader
        </FieldDescription>
        <Input type="text" id="imageAlt" {...register('imageAlt')} />
        {errors.imageAlt && <FieldError>{errors.imageAlt.message}</FieldError>}
      </Field>

      <Button type="submit" className="self-start">
        {submitLabel}
      </Button>
    </Bounded>
  );
};
