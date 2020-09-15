import React, {useState} from 'react'

import {storage, db} from '../firebase'
import firebase from 'firebase'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {useHistory} from 'react-router-dom'

function AddMeme() {
  const [genra, setGenra] = useState('')
  const [languag, setLanguag] = useState('')
  const [file, setFile] = useState('')
  const [progress, setProgress] = useState(0)
  const history = useHistory()

  const types = ['image/jpeg', 'image/png']
  const genras = ['select genra', 'anime', 'programing', 'dc']
  const languages = ['select meme language', 'english', 'عربی', 'کوردی']

  function handleChange(e) {
    let selected = e.target.files[0]

    //only update the state when we have files selcted
    //check if we have files and valid  types
    if (selected && types.includes(selected.type)) {
      setFile(e.target.files[0])
      // setError(null)
    } else {
      setFile(null)
      // setError('Please select an image file (png or jpeg)')
    }
  }

  function handleUpload(e) {
    e.preventDefault()
    //put on firebase
    const uploadImg = storage.ref(`images/${file.name}`).put(file)

    //get download link ,and put this link in the firestore
    uploadImg.on(
      'state_changed',
      snapshot => {
        //get progress number
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgress(progress)
      },
      error => alert(error.message),
      () => {
        //complet function
        storage
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            db.collection('memes').add({
              url,
              languag,
              genra,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            history.push('/')
            setLanguag('')
            setGenra('')
            setProgress(0)
            setFile(null)
          })
      }
    )
  }

  return (
    <div className='addMeme container mt-5'>
      <ProgressBar animated now={progress} />

      <div className='row mt-5'>
        <div className='col-md-6'>
          <form onSubmit={handleUpload}>
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
            <div className='form-group'>
              <label htmlFor='exampleFormControlSelect1'>Select a language</label>
              <select
                className='form-control'
                id='exampleFormControlSelect1'
                onChange={e => setLanguag(e.target.value)}
                value={languag}
              >
                {languages.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <input type='file' onChange={handleChange} />

            <button type='submit' className='btn btn-danger'>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddMeme
