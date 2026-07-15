import {defineField, defineType} from 'sanity'
import {BsReverseLayoutTextWindowReverse} from 'react-icons/bs'

export const utilityPageType = defineType({
  name: 'utilityPage',
  title: 'Utility Pages',
  icon: BsReverseLayoutTextWindowReverse,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Page Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: (doc) => `${doc.name}-utility-page`,
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Page Content',
      type: 'localeContent',
      validation: (rule) => rule.required(),
    }),
  ],
})
