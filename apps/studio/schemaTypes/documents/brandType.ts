import {formatTitle} from '@seoul-rebels/utils'
import {defineField, defineType} from 'sanity'
import {SiNike} from 'react-icons/si'

export const brandType = defineType({
  name: 'brand',
  title: 'Brands',
  type: 'document',
  icon: SiNike,
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-brand`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Brand Logo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({name, image}) {
      const formatName = name ? formatTitle(name) : 'Brand Name not provided'

      return {
        title: formatName,
        media: image ?? SiNike,
      }
    },
  },
})
