import {SchemaTypeDefinition} from 'sanity'

const testimonials: SchemaTypeDefinition = {
  name: 'testimonials',
  title: 'Testimonials',
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
      name: 'imageurl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}

export default testimonials
