import {SchemaTypeDefinition} from 'sanity'

const workExperiences: SchemaTypeDefinition = {
  name: 'workExperiences',
  title: 'Work Experiences',
  type: 'document',
  fields: [
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }
  ],
}

export default workExperiences
