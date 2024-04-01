import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dnr',

  projectId: 'f3af10kw',
  dataset: 'dnr-data-set',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
