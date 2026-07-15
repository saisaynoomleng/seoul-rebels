import {defineArrayMember, defineField, defineType} from 'sanity'
import {GrWorkshop} from 'react-icons/gr'
import {formatTitle} from '@seoul-rebels/utils'

export const shopTheLookType = defineType({
  name: 'shopTheLook',
  icon: GrWorkshop,
  title: 'Shop the look',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: (doc) => `${doc.name}-shop-the-look`,
      },
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'product',
          type: 'object',
          fields: [
            defineField({
              name: 'variant',
              type: 'reference',
              to: [{type: 'productVariant'}],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'positionXPercent',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'positionYPercent',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
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
      const formatName = name ? formatTitle(name) : 'Name not provided'

      return {
        title: formatName,
        media: image ?? GrWorkshop,
      }
    },
  },
})
