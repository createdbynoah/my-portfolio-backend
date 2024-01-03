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
      name: 'imageUrl',
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
   
  ],
}

export default testimonials
