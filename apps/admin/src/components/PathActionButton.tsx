import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { PiEyes } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import { AiOutlineEdit } from 'react-icons/ai';

type PathActionButtonProps = {
  className?: string;
  href: string;
  label: string;
  actionType: 'preview' | 'edit';
};

export const PathActionButton = ({
  className,
  href,
  label,
  actionType,
}: PathActionButtonProps): React.JSX.Element => {
  return (
    <Link
      href={href}
      className={twMerge(
        clsx(
          'py-1 px-4 border rounded-lg border-brand-accent-300 dark:border-brand-accent-600 group',
          className,
        ),
      )}
    >
      <span>
        {actionType === 'preview' ? (
          <PiEyes className="group-hover:animate-bounce" />
        ) : (
          <AiOutlineEdit className="group-hover:animate-bounce" />
        )}
      </span>
      <span className="sr-only">{label}</span>
    </Link>
  );
};
