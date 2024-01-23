import {SchemaTypeDefinition} from 'sanity'

const workExperiences: SchemaTypeDefinition = {
  name: 'workExperiences',
  title: 'Work Experiences',
  type: 'document',
  fields: [
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
      placeholder: '"Jan 2023" or "2023" or "Present"'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'string',
      placeholder: '"Jan 2023" or "2023" or "Present"'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'tools',
      title: 'Tools Used',
      type: 'array',
      of: [{type: 'string'}],
    }
  ],
}

export default workExperiences
