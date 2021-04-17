import React from 'react'
import styles from './index.scss'
import { co1 } from '../../common/index'

export const App = () => {
  console.log('styles = ', co1())
  return (
    <div className={styles.title}>welcome</div>
  )
}
