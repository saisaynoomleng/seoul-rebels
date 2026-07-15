import {formatTitle} from '@seoul-rebels/utils'
import {BsPencil} from 'react-icons/bs'
import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  icon: BsPencil,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-author`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Author Bio',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specializeIn',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Author Photo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLink',
      title: 'Social Media URL',
      type: 'socialLink',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      specializeIn: 'specializeIn',
    },
    prepare({name, image, specializeIn}) {
      const formatName = name ? formatTitle(name) : 'Author name not provided'
      const formatS = specializeIn ? formatTitle(specializeIn) : 'No specialization'

      return {
        title: formatName,
        subtitle: `Specialization: ${formatS}`,
        media: image ?? BsPencil,
      }
    },
  },
})
