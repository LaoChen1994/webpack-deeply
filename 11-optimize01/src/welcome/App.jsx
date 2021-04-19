import React from 'react'
import styles from './index.scss'
import { co1 } from '../../common/index'
import About from './About'

export const App = () => {
  console.log('styles = ', co1())
  return (
    <div className={styles.title}>
      <span>welcome 1</span>
      <About />
    </div>
  )
}
