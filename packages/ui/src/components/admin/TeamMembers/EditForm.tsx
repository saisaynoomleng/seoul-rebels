'use client';

import React from 'react';
import { TeamMemberForm } from './TeamMemberForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ActionResponse,
  TeamMemberFormSchema,
  TeamMemberInputSchema,
  TeamMemberOutputSchema,
} from '@seoul-rebels/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

type EditTeamMemberFormProps = {
  teamMember: TeamMemberOutputSchema;
  action: (
    data: TeamMemberInputSchema,
  ) => Promise<ActionResponse<TeamMemberInputSchema>>;
  imageUploadAction: (formData: FormData) => Promise<string>;
};

export const EditTeamMemberForm = ({
  teamMember,
  action,
  imageUploadAction,
}: EditTeamMemberFormProps): React.JSX.Element => {
  const form = useForm<TeamMemberInputSchema>({
    resolver: zodResolver(TeamMemberFormSchema),
    defaultValues: {
      _id: teamMember._id,
      name: teamMember.name ?? '',
      slug: teamMember.slug ?? '',
      imageAlt: teamMember.imageAlt ?? '',
      imageAssetId: teamMember.imageAssetId ?? '',
      position: teamMember.position ?? '',
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
      form={form}
      submitLabel="Publish"
      onSubmit={onSubmit}
      title={`Edit ${teamMember.name}`}
      imageUploadAction={imageUploadAction}
    />
  );
};
