import React from 'react';
import { Bounded } from '../Bounded';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type YouTubeEmbeddedProps = {
  title: string;
  videoId: string;
  className?: string;
};

export const YouTubeEmbedded = ({
  title,
  videoId,
  className,
}: YouTubeEmbeddedProps): React.JSX.Element => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('aspect-video h-full w-full youtubeShadow py-0!', className),
      )}
      padding="none"
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=0&fs=0&rel=0&disablekb=1&iv_load_privacy=3`}
        title={title}
        allow="accelerometer; autoplay; ecrypte-media; gyroscope; picture-in-picture"
        loading="lazy"
        className="pointer-events-none w-full h-full saturate-0"
        data-testid="iframe"
      />
    </Bounded>
  );
};
