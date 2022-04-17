import React from 'react'
import styled from 'styled-components'
import { Grid as BaseGrid } from '@material-ui/core'
import { theme } from '../../config/settings/theme'

export const GridContainer = styled(({ _margin, _padding, _maxWidth, ...props }) => <BaseGrid container {...props} />)`
  &.MuiGrid-container {
    margin: ${props => props._margin};
    padding: ${props => props._padding};
  }
`

export const NavBar = styled(({ ...props }) => <div {...props} />)`
  padding: 10px 0;
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
`
