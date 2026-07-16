import React, { ComponentPropsWithoutRef, useState } from 'react';
import { Bounded } from '../Bounded';
import { Input } from '#components/ui/input';
import { Field, FieldError, FieldLabel } from '#components/ui/field';
import { formatFileSize, validateImage } from '@seoul-rebels/utils';
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
} from '#components/ui/attachment';
import { GoFileMedia } from 'react-icons/go';

type ImageInputProps = {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidFile?: (file: File) => void;
  onValidationError?: (message: string) => void;
  errorMessage?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'className' | 'onChange'>;

export const ImageInput = ({
  className,
  onChange,
  onValidFile,
  onValidationError,
  errorMessage,
  ...props
}: ImageInputProps): React.JSX.Element => {
  const [image, setImage] = useState<{
    file: File;
    preview: string;
  }>();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = validateImage(e.target.files?.[0] as File);

    if (!result.success) {
      return onValidationError?.(result.error);
    }

    onValidFile?.(result.file);

    setImage({
      file: result.file,
      preview: URL.createObjectURL(result.file),
    });

    onChange?.(e);
  };

  return (
    <Bounded className="border" as="div">
      <Field className="flex flex-col gap-y-4 w-full">
        <FieldLabel htmlFor="photo">Upload an image</FieldLabel>

        {image?.file ? (
          <Attachment orientation="vertical" className="w-full mx-auto">
            <AttachmentMedia>
              <img src={image.preview} alt="" className="mx-auto" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentDescription>
                <span className="font-semibold">Size: </span>
                {formatFileSize(image.file.size)}
              </AttachmentDescription>
              <AttachmentDescription>
                <span className="font-semibold">Type: </span>
                {image.file.type.split('/')[1]?.toUpperCase()}
              </AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        ) : (
          <Attachment>
            <GoFileMedia size={50} className="mx-auto " />
          </Attachment>
        )}

        <Input
          type="file"
          accept="image/*"
          id="photo"
          onChange={handleUpload}
          {...props}
        />
        <FieldError>{errorMessage}</FieldError>
      </Field>
    </Bounded>
  );
};
