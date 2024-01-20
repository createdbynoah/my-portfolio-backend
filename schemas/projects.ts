import {SchemaTypeDefinition} from 'sanity'

const projects: SchemaTypeDefinition = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
        name: 'isPublished',
        title: 'Published',
        type: 'boolean',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'heroImageUrl',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
        name: 'heroImageAlt',
        title: 'Hero Image Alt',
        type: 'string',
    },
    {
        name: 'projectImageUrls',
        title: 'Project Images',
        type: 'array',
        of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'description_short',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'description_long',
      title: 'Long Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'projectCategories'}}]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
  ],
}

export default projects
