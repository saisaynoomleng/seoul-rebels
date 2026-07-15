import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type BoundedProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  size?: Size;
  padding?: Padding;
  isCentered?: boolean;
  children: React.ReactNode;
  space?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

type Size = 'sm' | 'md' | 'full';
type Padding = 'none' | 'sm' | 'md' | 'lg';

const sizeVariants: Record<Size, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  full: 'max-w-none',
};

const paddingVariants: Record<Padding, string> = {
  none: '',
  sm: 'px-2 md:px-4 lg:px-6',
  md: 'px-4 md:px-6 lg:px-8',
  lg: 'px-6 md:px-8 lg:px-10',
};

export const Bounded = <T extends React.ElementType>({
  as,
  padding = 'md',
  size = 'md',
  isCentered = true,
  space = false,
  className,
  children,
  ...props
}: BoundedProps<T>): React.JSX.Element => {
  const Comp = as ?? 'section';

  return (
    <Comp
      className={twMerge(
        clsx(
          'py-4 md:py-6',
          sizeVariants[size],
          paddingVariants[padding],
          space && 'space-y-6 md:space-y-8 lg:space-y-12',
          isCentered && 'mx-auto',
          className,
        ),
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
