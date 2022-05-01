import { Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useStyles } from './DetailSection.styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { onGetDetailThunk } from './DetailSection.actions'

export const DetailsSection = () => {
  const classes = useStyles()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { detail, isLoading } = useSelector(state => state.detailSection)

  useEffect(() => {
    dispatch(onGetDetailThunk({ id }))
  }, [])

  return (
    <div style={{ width: '1140px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <Card className={classes.root}>
        {detail && !isLoading ? (
          <>
            <CardHeader className={classes.containedPrimary} title={detail.strDrink} />
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fffde7' }}>
              <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '70%' }}>
                <CardContent>
                  <Typography component="h5" variant="h5">
                    Ingredients
                  </Typography>
                  {Object.entries(detail)
                    .filter(([key]) => key.includes('Ingredient'))
                    .map(ingredient => (
                      <Typography style={{ margin: 0 }} key={ingredient[0]}>
                        {ingredient[1]}
                      </Typography>
                    ))}
                  <br />
                  <Typography component="h5" variant="h5">
                    Instructions
                  </Typography>
                  <p style={{ textAlign: 'justify', marginTop: 5 }}>{detail.strInstructions}</p>
                </CardContent>
              </div>
              <CardMedia image={`${detail.strDrinkThumb}/preview`} className={classes.media} />
            </div>
          </>
        ) : (
          <>
            <CardHeader title="Loading..." className={classes.containedPrimary} />
            <Skeleton variant="rect" height={250} />
            <CardContent>
              <CircularProgress data-testid="loader" />
            </CardContent>
          </>
        )}
      </Card>
      <Link to="/">
        <Button variant="contained" color="secondary" style={{ marginTop: '15px', color: '#ffffff' }}>
          Back home
        </Button>
      </Link>
    </div>
  )
}
