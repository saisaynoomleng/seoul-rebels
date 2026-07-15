import {defineField, defineType} from 'sanity'
import {GiStairsGoal} from 'react-icons/gi'
import {formatTitle} from '@seoul-rebels/utils'

export const milestoneType = defineType({
  name: 'milestone',
  title: 'Milestones',
  icon: GiStairsGoal,
  type: 'document',
  fields: [
    defineField(
      {
        name: 'slogan',
        title: 'Slogan',
        type: 'localeString',
        validation: (rule) => rule.required(),
      },
      {aliasFor: 'object'},
    ),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => {
          const name = doc.name as {en: string}
          return name.en + '-milestone'
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Summary',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      slogan: 'slogan.en',
      year: 'year',
    },
    prepare({slogan, year}) {
      const formatSlogan = slogan ? formatTitle(slogan) : 'Slogan not provided'

      return {
        title: formatSlogan,
        subtitle: `Year: ${year}`,
        media: GiStairsGoal,
      }
    },
  },
})
