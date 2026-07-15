import {defineField, defineType} from 'sanity'
import {FaPeopleGroup} from 'react-icons/fa6'
import {formatTitle} from '@seoul-rebels/utils'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Members',
  icon: FaPeopleGroup,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Member Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-team-member`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Member Photo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      position: 'position',
    },
    prepare({name, position, image}) {
      const formatName = name ? formatTitle(name) : 'Member name not provided'
      const formatPosition = position ? formatTitle(position) : 'Position not provided'

      return {
        title: formatName,
        subtitle: `Position: ${formatPosition}`,
        media: image ?? FaPeopleGroup,
      }
    },
  },
})
