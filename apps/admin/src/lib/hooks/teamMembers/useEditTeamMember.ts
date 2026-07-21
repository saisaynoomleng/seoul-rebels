'use client';

import { handleEditTeamMember } from '@/actions/handleEditTeamMember';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditTeamMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleEditTeamMember,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.teamMembers.all,
      });
    },
  });
};
