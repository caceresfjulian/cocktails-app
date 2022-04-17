import { combineReducers } from 'redux'
import categoriesSectionReducer from '../../containers/CategoriesSection/CategoriesSection.reducer'
import randomCocktailSectionReducer from '../../containers/RandomCocktailSection/RandomCocktailSection.reducer'
import counterSectionReducer from '../../containers/CounterSection/CounterSection.reducer'
import searchSectionReducer from '../../containers/SearchSection/SearchSection.reducer'
import SnackbarProviderReducer from '../../containers/SnackbarProvider/SnackbarProvider.reducer'

const reducers = combineReducers({
  searchSection: searchSectionReducer,
  randomCocktailSection: randomCocktailSectionReducer,
  counterSection: counterSectionReducer,
  categoriesSection: categoriesSectionReducer,
  snackbarProvider: SnackbarProviderReducer
})

export default reducers
