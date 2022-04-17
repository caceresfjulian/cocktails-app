import React from 'react'
import { Card, CardContent, CardHeader, CardMedia, CircularProgress, Typography } from '@material-ui/core'
import { useStyles } from './CocktailCard.styles'
import PropTypes from 'prop-types'
import { Skeleton } from '@material-ui/lab'

export const CocktailCard = ({ data, isLoading }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      {data && !isLoading ? (
        <>
          <CardHeader title={data.strDrink} className={classes.containedPrimary} />
          <CardMedia
            data-testid="thumbnail"
            className={classes.media}
            image={`${data.strDrinkThumb}/preview`}
            title={data.strDrink}
          />
          <CardContent className={classes.containedPrimary}>
            <Typography variant="body2" component="p">
              Ingredients:
            </Typography>
            {Object.entries(data).map(([key, value]) =>
              key.indexOf('Ingredient') !== -1 && value ? (
                <Typography variant="body2" component="p" key={value}>
                  *{value}
                </Typography>
              ) : null
            )}
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader title="Loading..." className={classes.containedPrimary} />
          <Skeleton variant="rect" height={250} />
          <CardContent className={classes.containedPrimary}>
            <CircularProgress data-testid="loader" />
          </CardContent>
        </>
      )}
    </Card>
  )
}

CocktailCard.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired
}
