import {defineArrayMember, defineField, defineType} from 'sanity'
import {BsPostcardHeartFill} from 'react-icons/bs'
import {formatTitle} from '@seoul-rebels/utils'

export const heroType = defineType({
  name: 'hero',
  title: 'Heroes',
  type: 'document',
  icon: BsPostcardHeartFill,
  fields: [
    defineField({
      name: 'name',
      title: 'Hero Page Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-hero-banner`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'banners',
      title: 'Banners',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'title',
          type: 'localeString',
          validation: (rule) => rule.required(),
        }),
        defineArrayMember({
          name: 'body',
          type: 'localeText',
          validation: (rule) => rule.required(),
        }),
        defineArrayMember({
          name: 'mainImage',
          type: 'imageWithAlt',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'banners.0.asset',
    },
    prepare({name, image}) {
      const formatName = name ? formatTitle(name) : 'Name not provided'

      return {
        title: formatName,
        media: image || BsPostcardHeartFill,
      }
    },
  },
})
