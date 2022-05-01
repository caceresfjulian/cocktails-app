import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { ResultsChip, useStyles } from './ResultBox.styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const ResultBox = ({ data }) => {
  const classes = useStyles()

  return (
    <Grid item xs={4} key={data.idDrink}>
      <Link to={`details/${data.idDrink}`}>
        <Paper className={classes.paper}>
          <Grid container justifyContent="space-between">
            <Grid item className={classes.paperColumn} xs={6}>
              <Typography variant="body1" className={classes.paperTitle}>
                {data.strDrink}
              </Typography>
            </Grid>
            <Grid item className={classes.paperChip}>
              <ResultsChip label={data.strAlcoholic} color="primary" />
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  )
}

ResultBox.propTypes = {
  data: PropTypes.object.isRequired
}
