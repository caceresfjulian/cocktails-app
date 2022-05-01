const URL = process.env.REACT_APP_API_URL
const searchByNamePath = '/api/json/v1/1/search.php?s='

export const getSearchByName = async searchTerm => {
  const response = await fetch(URL + searchByNamePath + searchTerm)
  const json = await response.json()
  return json
}
