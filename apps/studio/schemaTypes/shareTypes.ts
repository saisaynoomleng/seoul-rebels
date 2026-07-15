import {defineArrayMember, defineField, defineType} from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const blockContent = defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'imageWithAlt',
      title: 'Image',
    }),
  ],
})

export const localeString = defineType({
  name: 'localeString',
  title: 'Locale String',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ko',
      title: 'Korean',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const localeText = defineType({
  name: 'localeText',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ko',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const localeContent = defineType({
  name: 'localeContent',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      type: 'blockContent',
    }),
    defineField({
      name: 'ko',
      type: 'blockContent',
    }),
  ],
})

export const socialLink = defineType({
  name: 'socialLink',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'X', value: 'twitter-x'},
          {title: 'GitHub', value: 'github'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      description: 'Full URL to the social media platform',
      type: 'url',
    }),
  ],
})

export const seo = defineType({
  name: 'seo',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'localeString',
    }),
    defineField({
      name: 'metaDescription',
      type: 'localeText',
    }),
    defineField({
      name: 'ogImage',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'noIndex',
      type: 'boolean',
    }),
  ],
})

export const faq = defineType({
  name: 'faq',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      name: 'body',
      type: 'localeText',
    }),
  ],
})

export const measurement = defineType({
  name: 'measurement',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      options: {
        list: [
          {title: 'Shoulder', value: 'shoulder'},
          {title: 'Chest', value: 'chest'},
          {title: 'Length', value: 'length'},
          {title: 'Sleeve', value: 'sleeve'},
          {title: 'Waist', value: 'waist'},
          {title: 'Hips', value: 'hips'},
          {title: 'Inseam', value: 'inseam'},
          {title: 'Rise', value: 'rise'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'value',
      type: 'string',
    }),
  ],
})

export const contactInfo = defineType({
  name: 'contactInfo',
  type: 'object',
  fields: [
    defineField({
      name: 'email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'street',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'city',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'state',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'zip',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'country',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
