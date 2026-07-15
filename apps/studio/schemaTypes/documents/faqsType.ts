import {defineField, defineType} from 'sanity'
import {RiQuestionnaireLine} from 'react-icons/ri'

export const FAQsType = defineType({
  name: 'faqs',
  title: 'FAQs',
  icon: RiQuestionnaireLine,
  type: 'document',
  fields: [
    defineField(
      {
        name: 'name',
        title: 'FAQs Name',
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

          return name.en + 'faqs'
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contents',
      type: 'faq',
    }),
  ],
})
