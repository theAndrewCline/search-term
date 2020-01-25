import { createStore, Store, combineReducers } from 'redux'
import { search } from './search'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducter = combineReducers({
  search
})

export const initStore = (): Store => createStore(
  rootReducter,
  composeWithDevTools()
)
