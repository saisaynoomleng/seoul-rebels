'use server';

import { writeClient } from '@/sanity/writeClient';
import {
  ActionResponse,
  TeamMemberFormSchema,
  TeamMemberInputSchema,
  TeamMemberOutputSchema,
} from '@seoul-rebels/utils';

export const handleEditTeamMember = async (
  data: TeamMemberInputSchema,
): Promise<ActionResponse<TeamMemberOutputSchema>> => {
  try {
    const result = TeamMemberFormSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: result.error.issues[0].message,
        field: result.error.issues[0].path.join(
          '.',
        ) as keyof TeamMemberOutputSchema,
      };
    }

    const { _id, name, slug, imageAlt, imageAssetId, position } = result.data;

    await writeClient
      .patch(_id)
      .set({
        name,
        slug: { current: slug },
        mainImage: {
          alt: imageAlt,
          asset: {
            _type: 'reference',
            _ref: imageAssetId,
          },
        },
        position,
      })
      .commit();

    return {
      success: true,
      message: 'Team Member Edited!',
    };
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {
      success: false,
      message: 'Someting went wrong!',
    };
  }
};
