import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className='navbar navbar-expand-lg shadow-sm navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Memegram
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto mr-5'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/addMeme'>
                Add Meme <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/about'>
                About <span className='sr-only'>(current)</span>
              </Link>
            </li>
          </ul>

          <Link to='/login'>
            <button className='btn btn-outline-success btn-sm my-2 my-sm-0' type='submit'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
