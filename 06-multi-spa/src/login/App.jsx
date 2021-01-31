import React from 'react'
import styles from '../welcome/index.scss'

export const App = () => {
  console.log('styles = ', styles)
  return (
    <div className={styles.title}>login</div>
  )
}
