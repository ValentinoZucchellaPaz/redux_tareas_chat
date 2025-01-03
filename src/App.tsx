// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route } from 'wouter'
import './App.css'
import Counter from './components/Counter'
import { PokemonSearcher } from './components/PokemonSearcher'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'


function App() {
  return (
    <main className='flex flex-col items-start'>
      <Nav />
      <Route path='/'>
        <p className='m-auto'>Estas en la home</p>
      </Route>
      <Route path='/counter'>
        <Counter />
      </Route>
      <Route path='/pokemon'>
        <PokemonSearcher />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
    </main>
  )
}

export default App
