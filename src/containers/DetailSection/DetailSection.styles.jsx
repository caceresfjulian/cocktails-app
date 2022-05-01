import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    width: 1000,
    maxHeight: 1000
  },
  media: {
    height: 250,
    width: 250,
    margin: 24
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  containedPrimary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    textAlign: 'center',
    fontStyle: 'italic',
    wordBreak: 'break-all'
  }
}))
