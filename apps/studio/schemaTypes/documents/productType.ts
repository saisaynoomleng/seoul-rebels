import {defineField, defineType} from 'sanity'
import {GiTShirt} from 'react-icons/gi'
import {formatTitle} from '@seoul-rebels/utils'

export const productType = defineType({
  name: 'product',
  title: 'Products',
  icon: GiTShirt,
  type: 'document',
  fieldsets: [{title: 'Reference', name: 'reference', options: {collapsible: true, columns: 2}}],
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{type: 'brand'}],
      validation: (rule) => rule.required(),
      fieldset: 'reference',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      validation: (rule) => rule.required(),
      fieldset: 'reference',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'localeContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'variants',
      title: 'Product Variants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'productVariant'}]}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'variants.0.mainImages.0.asset',
      brand: 'brand.name',
      category: 'category.name',
    },
    prepare({name, image, brand, category}) {
      const formatName = name ? formatTitle(name) : 'Product name not provided'
      const formatBrand = brand ? formatTitle(brand) : 'Brand not provided'
      const formatCategory = category ? formatTitle(category) : 'Category  not provided'

      return {
        title: formatName,
        subtitle: `Brand: ${formatBrand} | Category: ${formatCategory}`,
        media: image ?? GiTShirt,
      }
    },
  },
})
