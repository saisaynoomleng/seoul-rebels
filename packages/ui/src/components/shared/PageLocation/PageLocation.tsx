import {
  addPointerArrow,
  removeDashAndReplaceWithSpace,
} from '@seoul-rebels/utils';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type PageLocationProps = {
  className?: string;
  location: string;
};

export const PageLocation = ({
  className,
  location,
}: PageLocationProps): React.JSX.Element => {
  const addArrow = addPointerArrow(location);
  const removeDash = removeDashAndReplaceWithSpace(addArrow);

  return (
    <p className={twMerge(clsx('font-medium text-fs-300', className))}>
      {removeDash}
    </p>
  );
};
