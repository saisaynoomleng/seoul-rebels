import {defineField, defineType} from 'sanity'
import {MdMapsHomeWork} from 'react-icons/md'

export const departmentType = defineType({
  name: 'department',
  title: 'Departments',
  icon: MdMapsHomeWork,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Department Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-department`,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
