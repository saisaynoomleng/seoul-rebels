'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ActionResponse,
  generateSanityId,
  TeamMemberFormSchema,
  TeamMemberInputSchema,
  TeamMemberOutputSchema,
} from '@seoul-rebels/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TeamMemberForm } from './TeamMemberForm';
import { toast } from 'sonner';

type CreateTeamMemberFormProps = {
  action: (
    data: TeamMemberInputSchema,
  ) => Promise<ActionResponse<TeamMemberOutputSchema>>;
  imageUploadAction: (formData: FormData) => Promise<string>;
};

export const CreateTeamMemberForm = ({
  action,
  imageUploadAction,
}: CreateTeamMemberFormProps) => {
  const form = useForm<TeamMemberInputSchema>({
    resolver: zodResolver(TeamMemberFormSchema),
    defaultValues: {
      _id: generateSanityId(),
      name: '',
      slug: '',
      imageAlt: '',
      imageAssetId: '',
      position: '',
    },
  });

  const onSubmit: SubmitHandler<TeamMemberInputSchema> = async (data) => {
    const result = await action(data);

    if (!result.success) {
      toast.error(result.message);

      return form.setError(result.field as keyof TeamMemberOutputSchema, {
        message: result.message,
      });
    }

    return toast.success(result.message);
  };

  return (
    <TeamMemberForm
      title="Create Team Member"
      submitLabel="Publish"
      form={form}
      imageUploadAction={imageUploadAction}
      onSubmit={onSubmit}
    />
  );
};
