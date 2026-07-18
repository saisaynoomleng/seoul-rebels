import React from 'react';
import { Bounded, PageLocation } from '../../shared';
import { CallToAction } from '@seoul-rebels/utils';
import { Separator } from '#components/ui/separator';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Button } from '#components/ui/button';
import { FaPlus } from 'react-icons/fa6';

type AdminNavigationProps = {
  className?: string;
  title: string;
  location: string;
  actions: CallToAction;
  renderAction: (props: CallToAction) => React.ReactNode;
};

export const AdminNavigation = ({
  className,
  title,
  location,
  actions,
  renderAction,
}: AdminNavigationProps): React.JSX.Element => {
  return (
    <Bounded
      as="nav"
      size="full"
      padding="sm"
      isCentered={false}
      className={twMerge(
        clsx('flex items-center justify-between min-w-full shadow', className),
      )}
    >
      <div className="flex items-center gap-x-4">
        <p>{title}</p>
        <Separator orientation="vertical" />
        <PageLocation location={location} />
      </div>

      <div className="">
        <Button className="flex items-center group">
          <span className="group-hover:rotate-90 duration-150">
            <FaPlus />
          </span>
          {renderAction({ label: actions.label, href: actions.href })}
        </Button>
      </div>
    </Bounded>
  );
};
