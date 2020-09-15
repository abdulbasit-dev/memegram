import React, {useState, useEffect, useContext} from 'react'
import './Home.css'
import {db} from '../firebase'
import {MemeContext, ACTIONS} from '../MemeContext'
import Modal from './Modal'

function Home() {
  const [{selectedImg}, dispatch] = useContext(MemeContext)

  const [memes, setMemes] = useState([])
  useEffect(() => {
    db.collection('memes')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMemes(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  return (
    <div className='home container'>
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
          </div>
        ))}
      </div>
      {selectedImg && <Modal />}
    </div>
  )
}

export default Home
