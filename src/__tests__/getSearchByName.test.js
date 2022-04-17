import { expect } from '@jest/globals'
import { getSearchByName } from '../service/search'
import { searchListMock as SEARCH_LIST_MOCK } from '../mocks/searchList.mock'

describe('When a search is performed', () => {
  let searchList

  beforeEach(async () => {
    fetch.mockResponseOnce(JSON.stringify(SEARCH_LIST_MOCK))
    searchList = await getSearchByName()
  })

  it('Then a list of results is provided', () => {
    expect(searchList).toMatchObject(SEARCH_LIST_MOCK)
  })
})
