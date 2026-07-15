import {defineArrayMember, defineField, defineType} from 'sanity'
import {GiResize} from 'react-icons/gi'

export const sizeChartType = defineType({
  name: 'sizeChart',
  title: 'Size Charts',
  icon: GiResize,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Size Chart Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-size-chart`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Size Chart Photo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sizeDesc',
      title: 'Size Descriptions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localeString',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Description',
              type: 'localeText',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'size',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'measurements',
              type: 'array',
              of: [{type: 'measurement'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
