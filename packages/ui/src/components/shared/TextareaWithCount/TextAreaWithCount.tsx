'use client';

import React, { ComponentPropsWithoutRef, Dispatch, useState } from 'react';
import { Bounded } from '../Bounded';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Textarea } from '#components/ui/textarea';

type TextAreaWithCountProps = {
  className?: string;
  maxLength?: number;
  id: string;
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'className' | 'id'>;

export const TextAreaWithCount = ({
  maxLength = 2000,
  className,
  id,
  onChange,
  ...props
}: TextAreaWithCountProps): React.JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
    onChange?.(e);
  };

  return (
    <Bounded className={twMerge(clsx('flex flex-col gap-y-2', className))}>
      <Textarea
        maxLength={maxLength}
        id={id}
        onChange={handleChange}
        {...props}
        className={twMerge(clsx('h-20', className))}
      />
      <p className="self-end">
        {count} / {maxLength}
      </p>
    </Bounded>
  );
};
