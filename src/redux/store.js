import { configureStore } from '@reduxjs/toolkit'
import charactersaction from './charactersaction'
import qutesaction from './qutesaction'

export const store = configureStore({
    reducer: {
      characters: charactersaction,
      qutes:qutesaction,
    },
  })