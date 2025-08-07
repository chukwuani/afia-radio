import {defineField, defineType} from 'sanity'

export const podcastType = defineType({
  name: 'podcasts',
  title: 'Podcasts',
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
      name: 'coverArt',
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
    }),
       defineField({
      name: 'uploadUrl',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverArt',
    }
  },
})
