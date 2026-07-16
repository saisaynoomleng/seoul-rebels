import React from 'react';
import { Bounded } from '../Bounded';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type ColorCode =
  | `#${string}`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `hsla(${number}, ${number}%, ${number}%, ${number})`
  | `rgb(${number}, ${number}, ${number})`
  | `hsl(${number}, ${number}%, ${number}%)`
  | `oklch(${number} ${number} ${number})`;

type ColorBlockProps = {
  className?: string;
  colorCode: ColorCode;
  width?: number;
  height?: number;
};

export const ColorBlock = ({
  className,
  colorCode,
  width = 20,
  height = 20,
}: ColorBlockProps): React.JSX.Element => {
  return (
    <Bounded
      as="div"
      padding="none"
      className={twMerge(
        clsx(
          'rounded-full h-5 aspect-square border-2 border-brand-accent/20 flex justify-center items-center py-4!',
          className,
        ),
      )}
    >
      <div
        data-testid="color"
        style={{
          backgroundColor: colorCode,
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={twMerge(clsx('rounded-full'))}
      />
    </Bounded>
  );
};
