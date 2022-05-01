const URL = process.env.REACT_APP_API_URL
const categoriesPath = '/api/json/v1/1/list.php?c=list'

export const getCategories = async () => {
  const response = await fetch(URL + categoriesPath)
  const json = await response.json()
  const categoriesList = json.drinks
  return categoriesList
}
