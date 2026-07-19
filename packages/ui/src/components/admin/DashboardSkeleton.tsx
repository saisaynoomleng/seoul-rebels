import React from 'react';
import { Bounded } from '../shared';
import { Skeleton } from '../ui';

export const DashboardSkeleton = (): React.JSX.Element => {
  return (
    <Bounded
      as="div"
      space
      isCentered={false}
      size="full"
      className="min-h-full"
    >
      <div className="flex gap-x-4">
        <Skeleton className=" h-100" />
        <Skeleton className=" h-100" />
        <Skeleton className=" h-100" />
        <Skeleton className=" h-100" />
      </div>

      <div className="flex gap-x-4">
        <Skeleton className=" h-100" />
        <Skeleton className=" h-100" />
      </div>

      <div className="flex gap-x-4">
        <Skeleton className=" h-100" />
        <Skeleton className=" h-100" />
        <Skeleton className=" h-100" />
      </div>
    </Bounded>
  );
};
