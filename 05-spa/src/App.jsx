import React from 'react'
import styles from './index.scss'

export const App = () => {
  console.log('styles = ', styles)
  return (
    <div className={styles.title}>测试</div>
  )
}
