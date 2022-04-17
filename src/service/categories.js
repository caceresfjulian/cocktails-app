const URL = process.env.REACT_APP_API_URL
const categoriesPath = 'list.php?c=list'

export const getCategories = async () => {
  const response = await fetch(URL + categoriesPath)
  const json = await response.json()
  const categoriesList = json.drinks
  return categoriesList
}
