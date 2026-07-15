import {defineField, defineType} from 'sanity'
import {LuBookHeart} from 'react-icons/lu'
import {formatTitle} from '@seoul-rebels/utils'

export const lookbookType = defineType({
  name: 'lookbook',
  title: 'Lookbooks',
  icon: LuBookHeart,
  type: 'document',
  fields: [
    defineField(
      {
        name: 'name',
        title: 'Lookbook Name',
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
          return `${name.en}-lookbook`
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'productVariant'}]}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({name, image}) {
      const formatName = name ? formatTitle(name) : 'Lookbook Name not provided'

      return {
        title: formatName,
        media: image ?? LuBookHeart,
      }
    },
  },
})
