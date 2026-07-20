'use client';

import { getTeamMember } from '@/lib/dal';
import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useTeamMember = (params: { slug: string }) => {
  const { slug } = params;

  return useQuery({
    queryKey: queryKeys.teamMembers.bySlug(slug),
    queryFn: () => getTeamMember(params),
    enabled: !!slug,
  });
};
