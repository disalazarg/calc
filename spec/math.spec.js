const { add, sub, mult, div } = require( '../lib/math' )

describe('Math module', () => {
  describe('add()', () => {
    it('can add two numbers', () => {
      expect( add(3, 5) ).toEqual( 8 )
    })
  })

  describe('sub()', () => {
    it('can substract two numbers', () => {
      expect( sub(5, 3) ).toEqual( 2 )
    })
  })

  describe('mult()', () => {
    it('can multiply two numbers', () => {
      expect( mult(3, 5) ).toEqual( 15 )
    })
  })

  describe('div()', () => {
    it('can divide two numbers', () => {
      expect( div(15, 3) ).toEqual( 5 )
    })
  })
})
