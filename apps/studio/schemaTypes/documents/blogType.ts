import {defineField, defineType} from 'sanity'
import {PiNewspaperBold} from 'react-icons/pi'
import {formatDate, formatTitle} from '@seoul-rebels/utils'

export const blogType = defineType({
  name: 'blog',
  title: 'Blogs',
  icon: PiNewspaperBold,
  type: 'document',
  fieldsets: [
    {
      title: 'reference',
      name: 'reference',
      options: {collapsible: true, columns: 2, collapsed: false},
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Blog Title',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (rule) => rule.required(),
      fieldset: 'reference',
    }),
    defineField({
      name: 'category',
      title: 'Blog Category',
      type: 'reference',
      to: [{type: 'blogCategory'}],
      validation: (rule) => rule.required(),
      fieldset: 'reference',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'minRead',
      title: 'Reading Duration',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Blog Cover Photo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Blog Summary',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Block Content',
      type: 'localeContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isMemberOnly',
      title: 'Is member only blog?',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is this a featured blog?',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      date: 'publishedAt',
      image: 'mainImage',
      author: 'author.name',
    },
    prepare({name, date, image, author}) {
      const formatName = name ? formatTitle(name) : 'Blog title not provided'
      const previewDate = date ? formatDate(date) : 'No publish date'
      const formatAuthor = author ? formatTitle(author) : 'Author name not provided'

      return {
        title: formatName,
        subtitle: `Author: ${formatAuthor} | Published Date: ${previewDate}`,
        media: image ?? PiNewspaperBold,
      }
    },
  },
})
