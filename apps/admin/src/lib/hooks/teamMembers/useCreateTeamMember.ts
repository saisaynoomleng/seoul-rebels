'use client';

import { handleCreateTeamMember } from '@/actions/handleCreateTeamMember';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateTeamMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleCreateTeamMember,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.teamMembers.all,
      });
    },
  });
};
