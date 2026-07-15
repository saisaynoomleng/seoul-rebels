import {defineField, defineType} from 'sanity'
import {BsBriefcaseFill} from 'react-icons/bs'
import {formatTitle} from '@seoul-rebels/utils'

export const jobOfferType = defineType({
  name: 'jobOffer',
  title: 'Job Offers',
  icon: BsBriefcaseFill,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Job Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-job-offer`,
      },
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'reference',
      to: [{type: 'department'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Job Description',
      type: 'localeContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'openedDate',
      title: 'Application Opening Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'closedDate',
      title: 'Application closing Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      department: 'department.name',
    },
    prepare({name, department}) {
      const formatName = name ? formatTitle(name) : 'Job name not provided'
      const formatDepartment = department ? formatTitle(department) : 'Department date not provided'

      return {
        title: formatName,
        subtitle: `Department: ${formatDepartment}`,
        media: BsBriefcaseFill,
      }
    },
  },
})
