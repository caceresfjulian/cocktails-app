import { combineReducers } from 'redux'
import categoriesSectionReducer from '../../containers/CategoriesSection/CategoriesSection.reducer'
import randomCocktailSectionReducer from '../../containers/RandomCocktailSection/RandomCocktailSection.reducer'
import counterSectionReducer from '../../containers/CounterSection/CounterSection.reducer'
import searchSectionReducer from '../../containers/SearchSection/SearchSection.reducer'
import SnackbarProviderReducer from '../../containers/SnackbarProvider/SnackbarProvider.reducer'
import detailSectionReducer from '../../containers/DetailSection/DetailSection.reducer'

const reducers = combineReducers({
  categoriesSection: categoriesSectionReducer,
  counterSection: counterSectionReducer,
  detailSection: detailSectionReducer,
  randomCocktailSection: randomCocktailSectionReducer,
  searchSection: searchSectionReducer,
  snackbarProvider: SnackbarProviderReducer
})

export default reducers
