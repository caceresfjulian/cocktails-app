const URL = process.env.REACT_APP_API_URL
const randomCocktailPath = '/api/json/v1/1/random.php'
const cocktailDetailsPath = '/api/json/v1/1/lookup.php?i='

export const getRandomCocktail = async () => {
  const response = await fetch(URL + randomCocktailPath)

  if (response.status === 200) {
    const json = await response.json()
    const randomCocktail = json.drinks[0]
    return randomCocktail
  } else {
    throw new Error('There was an error in your request. Try later.')
  }
}

export const getCocktailDetail = async ({ id }) => {
  const response = await fetch(URL + cocktailDetailsPath + id)

  if (response.status === 200) {
    const json = await response.json()
    const resultCocktail = json.drinks[0]
    return resultCocktail
  } else {
    throw new Error('There was an error in your request. Try later.')
  }
}
