import React from 'react';
import { Skeleton } from '#components/ui/skeleton';

export const TeamMemberCardSkeleton = (): React.JSX.Element => {
  return (
    <div className="max-w-100 w-100 h-100 space-y-2">
      <Skeleton className="w-100 h-80" />

      <div className="flex justify-between">
        <Skeleton className="w-40 h-5" />
        <Skeleton className="w-40 h-5" />
      </div>

      <div className="mr-auto flex gap-x-1 justify-end">
        <Skeleton className="w-15 h-5" />
        <Skeleton className="w-15 h-5" />
      </div>
    </div>
  );
};
