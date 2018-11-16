import * as assert from 'assert'
import { workingSpecSchemas, workingSpecSchemaMap } from './fixtures/working-spec'
import { predicates } from '..'

describe( 'entity schema predicates', () => {
  describe( 'from working spec', () => {
    describe( 'all are root schema', () => {
      workingSpecSchemas.forEach( schema => {
        it( `${ schema.title } is root schema`, () => {
          assert( predicates.rootSchema( schema ) )
        } )
      } )
    } )

    describe( 'entity schema', () => {
      const { brand, company, detail, getUri, product } = workingSpecSchemaMap

      const entities = [ brand, company, detail, getUri, product ]

      entities.forEach( schema => {
        it( `${ schema.title } is entity schema`, () => {
          assert( predicates.entitySchema( schema ) )
        })
      })
    })
  })
})