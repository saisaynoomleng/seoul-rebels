import {defineField, defineType} from 'sanity'
import {GiFurShirt} from 'react-icons/gi'
import {SkuGenerator} from '../../components/skuGenerator'
import {formatKRW, formatTitle, formatUSD} from '@seoul-rebels/utils'

export const productVariantType = defineType({
  name: 'productVariant',
  title: 'Product Variants',
  icon: GiFurShirt,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Variant Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: (doc) => `${doc.name}`,
      },
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      components: {
        input: SkuGenerator,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priceInUSD',
      title: 'Price in USD',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'priceInKRW',
      title: 'Price in KRW',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'size',
      title: 'Product Size',
      type: 'string',
      options: {
        list: [
          {title: 'XS', value: 'xs'},
          {title: 'S', value: 's'},
          {title: 'M', value: 'm'},
          {title: 'L', value: 'l'},
          {title: 'XL', value: 'xl'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Product Color',
      type: 'color',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImages',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      size: 'size',
      priceInKRW: 'priceInKRW',
      priceInUSD: 'priceInUSD',
      image: 'mainImages.0.asset',
    },
    prepare({name, size, priceInKRW, priceInUSD, image}) {
      const formatName = name ? formatTitle(name) : 'Name not provided'
      const formatSize = size ? formatTitle(size) : 'Size not provided'
      const krw = priceInKRW ? formatKRW(priceInKRW) : 'Price in Won not provided'
      const usd = priceInUSD ? formatUSD(priceInUSD) : 'Price in Dollar not provided'

      return {
        title: formatName,
        subtitle: `Price: ${krw} or ${usd} | Size: ${formatSize}`,
        media: image ?? GiFurShirt,
      }
    },
  },
})
