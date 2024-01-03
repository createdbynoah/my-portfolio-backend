import {SchemaTypeDefinition} from 'sanity'

const about: SchemaTypeDefinition = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export default about
