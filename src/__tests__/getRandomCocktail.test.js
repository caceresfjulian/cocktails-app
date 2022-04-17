import { expect } from '@jest/globals'
import { getRandomCocktail } from '../service/cocktails'
import { randomCocktailMock as RANDOM_COCKTAIL_MOCK } from '../mocks/randomCocktail.mock'

describe('When a random cocktail is requested', () => {
  let randomCocktail

  beforeEach(async () => {
    fetch.mockResponseOnce(JSON.stringify(RANDOM_COCKTAIL_MOCK))
    randomCocktail = await getRandomCocktail()
  })

  it('Then a cocktail object is provided', () => {
    expect(randomCocktail).toMatchObject(RANDOM_COCKTAIL_MOCK.drinks[0])
  })
})
