import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onClearSearchResults, onGetSearchThunk, onUpdateSearchTerm } from './SearchSection.actions'
import { useStyles } from './SearchSection.styles'

const BASE_ROUTE = process.env.REACT_APP_BASE_ROUTE

export const SearchSection = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { searchTerm } = useSelector(state => state.searchSection)

  const doTheSearch = event => {
    event.preventDefault()
    dispatch(onGetSearchThunk(searchTerm))
  }

  return (
    <Grid container direction="column" alignItems="center" style={{ maxWidth: '1140px' }}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/cocktails-and-drinks.png`}
        alt="a full table of cocktails and drinks with a coloured water splash in the background"
        style={{ maxWidth: '514px' }}
      />
      <form onSubmit={doTheSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          label="Search a drink"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          value={searchTerm}
          onChange={e => dispatch(onUpdateSearchTerm(e.target.value))}
        />
        <Grid
          container
          justifyContent="center"
          spacing={2}
          style={{ maxWidth: '1140px', overflow: 'hidden', marginBottom: '5px' }}
        >
          <Grid item>
            <Button onClick={doTheSearch} variant="contained" color="primary" style={{ marginTop: '15px' }}>
              Search
            </Button>
          </Grid>
          <Grid item>
            <Link to={`/${BASE_ROUTE}/random-search`}>
              <Button variant="contained" color="secondary" style={{ marginTop: '15px', color: '#ffffff' }}>
                Random search
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Typography variant="caption" className={classes.link} onClick={() => dispatch(onClearSearchResults())}>
          Clear results
        </Typography>
      </form>
    </Grid>
  )
}
