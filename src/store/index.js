// store.js
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Import your reducers
import { allReducer } from './reducer/allReducer'

// Configure persistence
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allReducer)

// Create the Redux store
export const store = createStore(persistedReducer)

// Create the persistor object
export const persistor = persistStore(store)
