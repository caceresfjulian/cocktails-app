const URL = process.env.REACT_APP_API_URL
const randomCocktailPath = 'random.php'

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
