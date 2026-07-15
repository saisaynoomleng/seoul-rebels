import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import {structure} from './structure'

import {media} from 'sanity-plugin-media'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Seoul Rebels',

  projectId: 'fg8lqh2u',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), media(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
