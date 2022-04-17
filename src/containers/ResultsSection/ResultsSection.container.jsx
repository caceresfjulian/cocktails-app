import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { ResultsSkeleton, useStyles } from './ResultsSection.styles'
import { ResultBox } from '../../components/Surfaces/ResultBox'

export const ResultsSection = () => {
  const { results, isLoading } = useSelector(state => state.searchSection)
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={3}
      style={{ maxWidth: '1140px' }}
      className={classes.root}
      justifyContent={isLoading ? 'center' : null}
    >
      {results && !isLoading ? (
        results.map(drink => <ResultBox data={drink} key={drink.idDrink} />)
      ) : isLoading ? (
        <ResultsSkeleton _margin="30px 0 0 0" variant="rect" width="80%" height={150} />
      ) : null}
    </Grid>
  )
}
