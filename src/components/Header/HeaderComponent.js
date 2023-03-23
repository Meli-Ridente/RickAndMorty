import React from 'react'
import {Link} from 'react-router-dom'
import styles from './HeaderComponent.module.css'
import { Button, Space } from 'antd';

const HeaderComponent = () => {
  return (
    <div className={styles.HeaderComponent}>
      <nav className={styles.Links}>
        <Space wrap>
          <Button value="default" className={styles.Buttons} ><Link to='/' style={{ color:'#50ea00'}}> Home </Link></Button>
          <Button value="default" className={styles.Buttons}><Link to='/characters' style={{ color:'#50ea00'}}>Characters</Link></Button>
       </Space>
      </nav>
    </div>
  )
}

export default HeaderComponent