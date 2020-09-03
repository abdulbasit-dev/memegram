import React, {useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Header from './components/Header'
import AddMeme from './components/AddMeme'
import {MemeContext} from './MemeContext'

function App() {
  const [state] = useContext(MemeContext)

  console.log(state)
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/addMeme'>
            <Header />
            <AddMeme />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
