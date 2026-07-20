'use client';

import { useTeamMembers } from '@/lib/hooks/teamMembers/useTeamMembers';
import {
  Bounded,
  DashboardSkeleton,
  TeamMemberCardSkeleton,
  TeamMemberPreviewCard,
} from '@seoul-rebels/ui';
import clsx from 'clsx';
import { Suspense } from 'react';
import { twMerge } from 'tailwind-merge';
import { PathActionButton } from './PathActionButton';

export const AllTeamMemberDashboard = ({ order = '_createdAt' }) => {
  const params = {
    order,
  };

  const { data, isError, isPending } = useTeamMembers(params);

  if (isPending) return <TeamMemberCardSkeleton />;

  if (!data) return <DashboardSkeleton />;

  if (isError) return <p>Error</p>;

  return (
    <Bounded
      as="div"
      isCentered={false}
      size="full"
      className={twMerge(clsx(''))}
    >
      {data.map((member) => (
        <Suspense key={member._id} fallback={<TeamMemberCardSkeleton />}>
          <TeamMemberPreviewCard
            name={member.name ?? ''}
            position={member.position ?? ''}
            previewAction={{
              href: `/team-members/${member.slug}`,
              label: `Preview ${member.name}`,
            }}
            editAction={{
              href: `/team-members/${member.slug}/edit`,
              label: `Edit ${member.name}`,
            }}
            imageAlt={member.imageAlt ?? ''}
            imageUrl={member.imageUrl ?? ''}
            renderEditAction={({ label, href }) =>
              PathActionButton({
                href,
                label,
                actionType: 'edit',
              })
            }
            renderPreviewAction={({ href, label }) =>
              PathActionButton({ href, label, actionType: 'preview' })
            }
          />
        </Suspense>
      ))}
    </Bounded>
  );
};
