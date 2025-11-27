import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'videos',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
       defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'duration',
      type: 'number',
      description: 'Duration in seconds',
    }),
       defineField({
      name: 'embedUrl',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    }
  },
})
