'use server';

import { writeClient } from '@/sanity/writeClient';
import {
  ActionResponse,
  TeamMemberFormSchema,
  TeamMemberInputSchema,
  TeamMemberOutputSchema,
} from '@seoul-rebels/utils';

export const handleCreateTeamMember = async (
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
        ) as keyof TeamMemberInputSchema,
      };
    }

    const { _id, name, slug, position, imageAlt, imageAssetId } = result.data;

    await writeClient.create({
      _type: 'teamMember',
      _id,
      name,
      slug: {
        current: slug,
      },
      position,
      mainImage: {
        alt: imageAlt,
        asset: {
          _type: 'reference',
          _ref: imageAssetId,
        },
      },
    });

    return {
      success: true,
      message: 'Team Member Created Successfully!',
    };
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
};
