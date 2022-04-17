import { Chip, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onGetCategoriesThunk } from './CategoriesSection.actions'
import { GridContainer } from './CategoriesSection.styles'

export const CategoriesSection = () => {
  const dispatch = useDispatch()
  const { categoriesList, isLoading, error } = useSelector(state => state.categoriesSection)

  if (!isLoading && error) alert(error)

  useEffect(() => {
    dispatch(onGetCategoriesThunk())
  }, [dispatch])

  return (
    <GridContainer _margin="10px 0 0 0" _maxWidth="1140px">
      <Typography component="h2" variant="h5">
        Categories
      </Typography>
      <GridContainer container spacing={1}>
        {categoriesList
          ? categoriesList.map(category => (
              <Grid item key={category.strCategory}>
                <Chip label={category.strCategory} color="secondary" />
              </Grid>
            ))
          : null}
      </GridContainer>
    </GridContainer>
  )
}
