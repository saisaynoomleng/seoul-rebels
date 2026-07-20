import React from 'react';
import { Bounded } from '../../shared';
import { CallToAction } from '@seoul-rebels/utils';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { PreviewCardRender } from '../PreviewCardRender';

type TeamMemberPreviewCardProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  position: string;
  previewAction: CallToAction;
  editAction: CallToAction;
  renderPreviewAction: (props: CallToAction) => React.ReactElement;
  renderEditAction: (props: CallToAction) => React.ReactElement;
  className?: string;
};

export const TeamMemberPreviewCard = ({
  imageAlt,
  imageUrl,
  name,
  position,
  previewAction,
  editAction,
  renderPreviewAction,
  renderEditAction,
  className,
}: TeamMemberPreviewCardProps): React.JSX.Element => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('flex flex-col gap-y-1 max-w-100 shadow-lg', className),
      )}
    >
      <div className="overflow-hidden h-100 relative apsect-square">
        <img
          src={imageUrl}
          alt={imageAlt}
          loading="lazy"
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <p data-testid="name">{name}</p>
          <p
            data-testid="position"
            className="text-brand-accent-600 font-semibold text-fs-300"
          >
            {position}
          </p>
        </div>

        <PreviewCardRender
          cardName="Team Member"
          previewAction={previewAction}
          editAction={editAction}
          renderEditAction={renderEditAction}
          renderPreviewAction={renderPreviewAction}
        />
      </div>
    </Bounded>
  );
};
