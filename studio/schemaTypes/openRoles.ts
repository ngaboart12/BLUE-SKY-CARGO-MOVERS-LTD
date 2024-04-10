import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'openRoles',
  title: 'Open Roles',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of the role',
      type: 'string',
    }),
    defineField({
      name: 'experience',
      title: 'Experience range',
      type: 'string',
      initialValue: '0-2 years',
      options: {
        list: [
          {title: '0-2 years', value: '0-2 years'},
          {title: '2-5 years', value: '2-5 years'},
          {title: '5-10 years', value: '5-10 years'},
          {title: '10+ years', value: '10+ years'},
        ],
      },
    }),
    defineField({
      name: 'type',
      title: 'Type of the role',
      type: 'string',
      initialValue: 'full-time',
      options: {
        list: [
          {title: 'full-time', value: 'full-time'},
          {title: 'part-time', value: 'part-time'},
          {title: 'contract', value: 'contract'},
          {title: 'internship', value: 'internship'},
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location of the job',
      type: 'string',
    }),
    defineField({
      name: 'openings',
      title: 'Openings',
      type: 'number',
      initialValue: 1,
    }),

    defineField({
      name: 'isAvailable',
      title: 'Is the role available?',
      type: 'boolean',
      initialValue: true,
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
