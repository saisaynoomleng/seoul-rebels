import {formatTitle} from '@seoul-rebels/utils'
import {BiSolidCategory} from 'react-icons/bi'
import {defineField, defineType} from 'sanity'

export const productCategoryType = defineType({
  name: 'productCategory',
  title: 'Product Categories',
  icon: BiSolidCategory,
  type: 'document',
  fields: [
    defineField(
      {
        name: 'name',
        title: 'Category Name',
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

          return name.en + '-product-category'
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Category Photo',
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
      const formatName = name ? formatTitle(name) : 'Category name not provided'
      return {
        title: formatName,
        media: image ?? BiSolidCategory,
      }
    },
  },
})
