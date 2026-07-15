import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Seoul Rebels')
    .items([
      S.divider().title('Operations'),

      S.divider().title('Marketing'),

      S.divider().title('Pages'),
    ])
