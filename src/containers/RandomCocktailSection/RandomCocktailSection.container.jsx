import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { onGetDrinkThunk } from './RandomCocktailSection.actions'
import { Button } from '@material-ui/core'
import { GridContainer } from './RandomCocktailSection.styles'
import { Link } from 'react-router-dom'
import { CocktailCard } from '../../components/Surfaces/CocktailCard'

const RandomCocktailSection = () => {
  const dispatch = useDispatch()
  const { drink, isLoading, error } = useSelector(state => state.randomCocktailSection)

  if (!isLoading && error) alert(error)

  useEffect(() => {
    dispatch(onGetDrinkThunk({ isFirstTime: true }))
  }, [dispatch])

  return (
    <GridContainer container direction="column" _maxWidth="1140px">
      <GridContainer direction="column" alignItems="center">
        <CocktailCard data={drink} isLoading={isLoading} />
        <Button
          style={{ margin: '12px', borderRadius: '100%', height: '100px', width: '100px' }}
          variant="contained"
          color="primary"
          onClick={() => dispatch(onGetDrinkThunk({ isFirstTime: false }))}
        >
          Get a new one
        </Button>
        <Link to="/">
          <Button variant="contained" color="secondary" style={{ marginTop: '15px', color: '#ffffff' }}>
            Back home
          </Button>
        </Link>
      </GridContainer>
    </GridContainer>
  )
}

export { RandomCocktailSection }
