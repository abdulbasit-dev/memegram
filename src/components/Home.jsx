import React, {useState, useEffect, useContext} from 'react'
import './Home.css'
import {db} from '../firebase'
import {MemeContext, ACTIONS} from '../MemeContext'
import Modal from './Modal'

function Home() {
  const [{selectedImg}, dispatch] = useContext(MemeContext)
  const [genra, setGenra] = useState('')
  const genras = ['all', 'anime', 'programing', 'dc']

  const [memes, setMemes] = useState([])
  useEffect(() => {
    db.collection('memes')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMemes(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  function handleFilter(e) {
    e.preventDefault()
    db.collection('memes')
      .where('genra', '==', genra)
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMemes(snapshot.docs.map(doc => doc.data()))
      })
    // setMemes(memes.filter(meme => meme.genra === genra))
    setGenra('')
  }

  //this fun remove the filter and retudn back to the noraml way of showing all meme
  function removeFilter() {
    db.collection('memes')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMemes(snapshot.docs.map(doc => doc.data()))
      })
  }

  return (
    <div className='home container'>
      <form onSubmit={handleFilter}>
        <div className='form-group'>
          <label htmlFor='exampleFormControlSelect1'>Select a topic</label>
          <select
            required
            className='form-control'
            id='exampleFormControlSelect1'
            onChange={e => setGenra(e.target.value)}
            value={genra}
          >
            {genras.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>

        <button type='submit' className='btn btn-success'>
          Filter
        </button>
        <button className='btn btn-outline-primary ml-4' onClick={removeFilter}>
          Remove Filter
        </button>
      </form>

      <div className='row justify-content-start my-4'>
        {memes?.map(meme => (
          <div
            className='col-md-3 my-4'
            key={meme.url}
            onClick={() => dispatch({type: ACTIONS.SELECTED_IMG, meme: meme})}
          >
            <div className='home__imgWrapper'>
              <img src={meme.url} className='img-fluid home__img' alt='' />
            </div>
            <p>{meme.genra}</p>
          </div>
        ))}
      </div>
      {selectedImg && <Modal />}
    </div>
  )
}

export default Home
