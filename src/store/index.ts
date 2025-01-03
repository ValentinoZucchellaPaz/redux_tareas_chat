import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import pokemonReducer from './slices/pokemonSlice'
import userReducer from './slices/userSlice'
import { loggerMiddleware } from './middleware/loggerMiddleware'
// import { loggerMiddleware } from './middleware/loggerMiddleware'


// se crea una caja con estado global y distintas sub cajas (slices)
const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemon: pokemonReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
})

export default store