import {SchemaTypeDefinition} from 'sanity'

const projectCategories: SchemaTypeDefinition = {
  name: 'projectCategories',
  title: 'Project Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
        name: 'isPublished',
        title: 'Published',
        type: 'boolean',
    },
    {
        name: 'projects',
        title: 'Projects',
        type: 'array',
        of: [{type: 'reference', to: {type: 'projects'}}]
    },
    
  ],
}

export default projectCategories
