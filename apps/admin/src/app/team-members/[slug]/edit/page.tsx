'use client';

import { handleSanityImageUpload } from '@/actions/handleSanityImageUpload';
import { useEditTeamMember } from '@/lib/hooks/teamMembers/useEditTeamMember';
import { useTeamMember } from '@/lib/hooks/teamMembers/useTeamMember';
import { DashboardSkeleton, EditTeamMemberForm } from '@seoul-rebels/ui';
import { TeamMemberOutputSchema } from '@seoul-rebels/utils';
import React, { use } from 'react';

const EditTeamMemberPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): React.JSX.Element => {
  const { slug } = use(params);
  const editTeamMember = useEditTeamMember();

  const { data: teamMember, isPending, isError } = useTeamMember({ slug });

  if (isPending) return <DashboardSkeleton />;

  if (!teamMember) return <DashboardSkeleton />;

  if (isError) return <div> Error</div>;

  const member: TeamMemberOutputSchema = {
    name: teamMember.name ?? '',
    slug: teamMember.slug ?? '',
    position: teamMember.position ?? '',
    imageAlt: teamMember.position ?? '',
    imageAssetId: teamMember.imageAssetId ?? '',
    _id: teamMember._id,
  };

  return (
    <EditTeamMemberForm
      action={editTeamMember.mutateAsync}
      imageUploadAction={handleSanityImageUpload}
      teamMember={member}
    />
  );
};

export default EditTeamMemberPage;
