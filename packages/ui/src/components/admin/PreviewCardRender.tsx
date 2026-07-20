import React from 'react';
import { Bounded } from '../shared';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#components/ui/tooltip';
import { CallToAction } from '@seoul-rebels/utils';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type PreviewCardRenderProps = {
  className?: string;
  previewAction: CallToAction;
  editAction: CallToAction;
  renderPreviewAction: (props: CallToAction) => React.ReactElement;
  renderEditAction: (props: CallToAction) => React.ReactElement;
  cardName: string;
};

export const PreviewCardRender = ({
  className,
  previewAction,
  editAction,
  renderEditAction,
  renderPreviewAction,
  cardName,
}: PreviewCardRenderProps): React.JSX.Element => {
  return (
    <Bounded
      as="div"
      padding="none"
      isCentered={false}
      className={twMerge(clsx('self-end flex justify-between', className))}
    >
      <div>
        <Tooltip>
          <TooltipTrigger
            render={renderPreviewAction({
              label: previewAction.label,
              href: previewAction.href,
            })}
          />
          <TooltipContent>
            <p>Preview this {cardName}</p>
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
            <p>Edit this {cardName}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </Bounded>
  );
};
