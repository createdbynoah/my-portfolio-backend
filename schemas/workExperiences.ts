import {SchemaTypeDefinition} from 'sanity'

const workExperiences: SchemaTypeDefinition = {
  name: 'workExperiences',
  title: 'Work Experiences',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}

export default workExperiences
