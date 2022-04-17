import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/styles'

export const ResultsSkeleton = styled(({ _margin, ...props }) => <Skeleton {...props} />)`
  &.MuiSkeleton-root {
    margin: ${props => props._margin};
  }
`

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: '20px'
  }
}))
