import {defineArrayMember, defineField, defineType} from 'sanity'
import {IoStorefrontSharp} from 'react-icons/io5'
import {formatTime, formatTitle} from '@seoul-rebels/utils'

export const stockistType = defineType({
  name: 'stockist',
  title: 'Stockists',
  icon: IoStorefrontSharp,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Store Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-store`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contacts',
      type: 'contactInfo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'storeHours',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'storeHour',
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'openingHours',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'closingHours',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              openingHour: 'openingHours',
              closingHour: 'closingHours',
            },
            prepare({openingHour, closingHour}) {
              const open = openingHour ? formatTime(openingHour) : 'Opening Hour not specified'
              const close = closingHour ? formatTime(closingHour) : 'Closing Hour not specified'

              return {
                title: 'Store Hour',
                subtitle: `Opening Hour: ${open} | Closing Hour: ${close}`,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      type: 'imageWithAlt',
      title: 'Store Photo',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({name, image}) {
      const formatName = name ? formatTitle(name) : 'Store name not provided'

      return {
        title: formatName,
        media: image ?? IoStorefrontSharp,
      }
    },
  },
})
