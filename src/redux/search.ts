import { ActionCreator } from 'redux'

export type SearchState = {
  items: any[]
  searchTerm: string
}

type SearchAction<a> = {
  type: actions
  payload: a
}

enum actions {
  UpdateSearch
}

const initialState: SearchState = {
  items: [],
  searchTerm: ''
}

export const search = (state: SearchState = initialState, action: SearchAction<any>): SearchState => {
  switch (action.type) {
    case actions.UpdateSearch :
      return { ...state, searchTerm: action.payload }
    default :
      return state
  }
}

export const updateSearchTerm: ActionCreator<SearchAction<string>> =
  (term: string) => ({ type: actions.UpdateSearch, payload: term })
