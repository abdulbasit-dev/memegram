import React, {useContext} from 'react'
import './Modal.css'
import {motion} from 'framer-motion'
import {MemeContext, ACTIONS} from '../MemeContext'

function Modal() {
  const [{selectedImg}, dispatch] = useContext(MemeContext)

  function handleClick(e) {
    if (e.target.classList.contains('backdrop'))
      dispatch({type: ACTIONS.UNSELECTED_IMG, meme: null})
  }

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className='backdrop'
      onClick={handleClick}
    >
      <motion.img
        initial={{y: '-100vh'}}
        animate={{y: 0}}
        transition={{delay: 0.4}}
        src={selectedImg.url}
        alt='enlarge pic'
      />
    </motion.div>
  )
}

export default Modal
