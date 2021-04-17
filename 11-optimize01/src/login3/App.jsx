import React from 'react'
import styles from './style.scss'
import { ut1 } from '../../utils/index'
import Home from './Home'

export const App = () => {
  console.log('styles 3 = ', ut1())
  return (
    <div className={styles.title}>
      <Home />
    </div>
  )
}
