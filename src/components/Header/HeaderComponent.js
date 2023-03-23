import React from 'react'
import {Link} from 'react-router-dom'
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
  return (
    <div className={styles.HeaderComponent}>
      <nav className={styles.Links}>
        <Link to='/' style={{color:'white'}}>Home</Link>
        <Link to='/characters' style={{color:'white'}}>Characters</Link>
      </nav>
    </div>
  )
}

export default HeaderComponent