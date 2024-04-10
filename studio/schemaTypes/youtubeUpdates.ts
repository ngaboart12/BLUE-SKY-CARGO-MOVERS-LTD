import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'youtubeUpdates',
  title: 'Youtube Updates',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Youtube Link',
      type: 'url',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'all',
      options: {
        list: [
          {title: 'Rwanda', value: 'rw'},
          {title: 'Burundi', value: 'bi'},
          {title: 'England', value: 'en'},
          {title: 'Kenya', value: 'ke'},
          {title: 'Zambia', value: 'za'},
          {title: 'South Africa', value: 'sa'},
          {title: 'All', value: 'all'},
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
