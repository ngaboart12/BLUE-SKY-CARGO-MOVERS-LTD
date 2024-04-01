import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'applications',
  title: 'applications',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
    }),
    defineField({
        name: 'phone',
        title: 'Phone',
        type: 'string',
    }),
    defineField({
        name: 'address',
        title: 'Address',
        type: 'string',
    }),
    defineField({
        name: 'message',
        title: 'Message',
        type: 'text',
    }),
    defineField({
        name: 'gender',
        title: 'Gender',
        type: 'string',
    }),
    defineField({
        name: 'openRole',
        title: 'role',
        type: 'reference',
        to: [{type: 'openRoles'}],
      }),
  ],

  preview: {
    select: {
      title: 'name',
      author: 'email',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
