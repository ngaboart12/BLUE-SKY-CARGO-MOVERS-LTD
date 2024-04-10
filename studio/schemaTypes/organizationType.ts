import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'organizationType',
  title: 'Organization Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
})
