'use client';

import { queryKeys } from '@/lib/queryKeys';
import { getAllTeamMembers } from '@/lib/dal';
import { useQuery } from '@tanstack/react-query';

export const useTeamMembers = (params: { order: string }) => {
  return useQuery({
    queryKey: queryKeys.teamMembers.all,
    queryFn: () => getAllTeamMembers(params),
  });
};
