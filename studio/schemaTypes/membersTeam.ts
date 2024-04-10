import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'membersTeam',
  title: 'Members on the team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'organizationType',
      title: 'Organization Type',
      type: 'reference',
      to: [{type: 'organizationType'}],
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
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
