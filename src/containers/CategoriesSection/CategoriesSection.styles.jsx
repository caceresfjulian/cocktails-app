import React from 'react'
import styled from 'styled-components'
import { Grid as BaseGrid } from '@material-ui/core'

export const GridContainer = styled(({ _margin, _padding, _maxWidth, ...props }) => <BaseGrid container {...props} />)`
  &.MuiGrid-container {
    margin: ${props => props._margin};
    padding: ${props => props._padding};
    max-width: ${props => props._maxWidth};
    width: 100%;
  }
`
