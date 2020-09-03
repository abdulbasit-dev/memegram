import React from 'react'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Header from './components/Header'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
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
