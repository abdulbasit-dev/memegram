import React, {useState, useEffect} from 'react'
import './Home.css'
import {db} from '../firebase'
import {Card} from 'react-bootstrap'

function Home() {
  const [memes, setMemes] = useState([])
  useEffect(() => {
    db.collection('memes')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMemes(snapshot.docs.map(doc => doc.data()))
      })
  })
  return (
    <div className='home container'>
      <div className='row justify-content-start my-4'>
        {memes?.map(meme => (
          <div className='col-md-3 my-4'>
            <div className='home__imgWrapper'>
              <img src={meme.url} className='img-fluid home__img' alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
