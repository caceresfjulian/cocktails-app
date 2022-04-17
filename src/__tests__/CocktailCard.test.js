import React from 'react'
import { render } from '@testing-library/react'
import { CocktailCard } from '../components/Surfaces/CocktailCard'

describe('When the CocktailCard is rendered', () => {
  test('it displayes an animation while loading', async () => {
    const cocktailCard = render(<CocktailCard isLoading />)

    const animatedLoader = await cocktailCard.findByTestId('loader')
    expect(animatedLoader).toBeTruthy()
  })

  test("it displayes the card's content when data is provided", async () => {
    const cocktailCard = render(<CocktailCard isLoading={false} data={{ strDrink: 'Name', strDrinkThumb: '' }} />)

    const thumbnail = await cocktailCard.findByTestId('thumbnail')
    expect(thumbnail).toBeTruthy()
  })
})
