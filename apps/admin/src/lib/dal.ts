'use server';

import { sanityFetch } from '@/sanity/live';
import { ALL_TEAMMEMBERS, TEAMMEMBER } from '@/sanity/query';

export const getAllTeamMembers = async (params: { order: string }) => {
  const { data: members } = await sanityFetch({
    query: ALL_TEAMMEMBERS,
    params,
  });

  return members;
};

export const getTeamMember = async (params: { slug: string }) => {
  const { data: member } = await sanityFetch({
    query: TEAMMEMBER,
    params,
  });

  return member;
};
