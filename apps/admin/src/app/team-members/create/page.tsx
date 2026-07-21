'use client';

import { handleSanityImageUpload } from '@/actions/handleSanityImageUpload';
import { useCreateTeamMember } from '@/lib/hooks/teamMembers/useCreateTeamMember';
import { CreateTeamMemberForm } from '@seoul-rebels/ui';

const CreateTeamMemberPage = () => {
  const createTeamMember = useCreateTeamMember();

  return (
    <CreateTeamMemberForm
      action={createTeamMember.mutateAsync}
      imageUploadAction={handleSanityImageUpload}
    />
  );
};

export default CreateTeamMemberPage;
