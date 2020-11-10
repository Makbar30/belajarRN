import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createDebugger from 'redux-flipper'
import { AuthReducer } from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
}

const reducers = combineReducers({ AuthReducer })
const persistedReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createDebugger()),
})

const persistor = persistStore(store)

export { store, persistor }
