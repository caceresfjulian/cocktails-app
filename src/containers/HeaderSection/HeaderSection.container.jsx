import React from 'react'
import { Typography } from '@material-ui/core'
import { GridContainer, NavBar } from './HeaderSection.styles.jsx'

export const HeaderSection = () => {
  return (
    <NavBar>
      <GridContainer _padding="3px 30px">
        <Typography variant="h4" component="h1">
          Cocktails with React and Redux
        </Typography>
      </GridContainer>
    </NavBar>
  )
}
