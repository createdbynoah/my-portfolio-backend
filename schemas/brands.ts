import {SchemaTypeDefinition} from 'sanity'

const brands: SchemaTypeDefinition = {
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
}

export default brands
