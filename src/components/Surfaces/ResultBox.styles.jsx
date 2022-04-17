import React from 'react'
import styled from 'styled-components'
import { Chip, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  paper: {
    padding: '5px 40px',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50px',
    overflow: 'hidden'
  },
  paperColumn: {
    display: 'flex',
    alignItems: 'center'
  },
  paperTitle: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '100%',
    lineHeight: '20px',
    verticalAlign: 'middle'
  }
}))

export const ResultsChip = styled(({ ...props }) => <Chip {...props} />)`
  &.MuiChip-label {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 20px;
    vertical-align: middle;
  }
  &.MuiChip-root {
    max-width: 100px;
  }
`
