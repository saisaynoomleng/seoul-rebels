import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Headings = 'h2' | 'h3' | 'h4' | 'h5';

type SectionTitleProps<T extends Headings> = {
  as?: T;
  className?: string;
  size?: Size;
  label: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

type Size = 'sm' | 'md' | 'lg';

const sizeVariants: Record<Size, string> = {
  sm: 'text-fs-500 md:text-fs-600 lg:text-fs-700',
  md: 'text-fs-600 md:text-fs-700 lg:text-fs-800',
  lg: 'text-fs-700 md:text-fs-800 lg:text-fs-900',
};

export const SectionTitle = <T extends Headings>({
  as,
  className,
  size = 'sm',
  label,
  ...props
}: SectionTitleProps<T>): React.JSX.Element => {
  const Comp = as ?? 'h2';

  return (
    <Comp
      className={twMerge(
        clsx('uppercase font-semibold', sizeVariants[size], className),
      )}
      {...props}
    >
      {label}
    </Comp>
  );
};
