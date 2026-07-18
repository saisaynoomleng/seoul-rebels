import React from 'react';
import Link from 'next/link';

export const RenderAction = ({
  label,
  href,
}: {
  label: string;
  href: string;
}): React.JSX.Element => {
  return (
    <Link href={href} className="font-semibold">
      {label}
    </Link>
  );
};
