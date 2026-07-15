import {defineField, defineType} from 'sanity'
import {BiSolidCategoryAlt} from 'react-icons/bi'

export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog Categories',
  icon: BiSolidCategoryAlt,
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
          return name.en + '-blog-category'
        },
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
