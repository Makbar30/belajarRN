import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createDebugger from 'redux-flipper'
import { AuthReducer } from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
}

const reducers = combineReducers({ auth: AuthReducer })
const persistedReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(createDebugger()),
})

const persistor = persistStore(store)

export { store, persistor }
