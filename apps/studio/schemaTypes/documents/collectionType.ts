import {defineField, defineType} from 'sanity'
import {BiCollection} from 'react-icons/bi'
import {formatTitle} from '@seoul-rebels/utils'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collections',
  icon: BiCollection,
  type: 'document',
  fields: [
    defineField(
      {
        name: 'name',
        title: 'Collection Name',
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
          return `${name.en}-collections`
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Collection Photo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'productVariant'}]}],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({name, image}) {
      const formatName = name ? formatTitle(name) : 'Collection name not provided'

      return {
        title: formatName,
        media: image ?? BiCollection,
      }
    },
  },
})
