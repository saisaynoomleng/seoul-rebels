import React from 'react';
import { Bounded } from '../../shared';
import { CallToAction } from '@seoul-rebels/utils';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { CiMapPin } from 'react-icons/ci';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#components/ui/tooltip';

type StockistPreviewCardProps = {
  className?: string;
  imageUrl: string;
  imageAlt: string;
  editAction: CallToAction;
  previewAction: CallToAction;
  renderEditAction: (props: CallToAction) => React.ReactElement;
  renderPreviewAction: (props: CallToAction) => React.ReactElement;
  name: string;
  city: string;
  country: string;
};

export const StockistPreviewCard = ({
  className,
  imageAlt,
  imageUrl,
  name,
  editAction,
  previewAction,
  city,
  country,
  renderEditAction,
  renderPreviewAction,
}: StockistPreviewCardProps): React.JSX.Element => {
  return (
    <Bounded
      as="div"
      padding="sm"
      className={twMerge(
        clsx('flex flex-col gap-y-2 shadow-lg max-w-100', className),
      )}
    >
      <div className="overflow-hidden aspect-square">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="min-w-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">{name}</p>

        <div className="flex gap-x-2 items-center">
          <CiMapPin />
          <p className="capitalize">
            {city}, {country}
          </p>
        </div>
      </div>

      <div className="self-end flex justify-between">
        <Tooltip>
          <TooltipTrigger
            render={renderPreviewAction({
              label: previewAction.label,
              href: previewAction.href,
            })}
          />
          <TooltipContent>
            <p>Preview this Stockist</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={renderEditAction({
              label: editAction.label,
              href: editAction.href,
            })}
          />
          <TooltipContent>
            <p>Edit this Stockist</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </Bounded>
  );
};
