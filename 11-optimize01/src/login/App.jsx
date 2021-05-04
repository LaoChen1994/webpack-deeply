import React from 'react'
import styles from './style.scss'
import { ut1 } from '../../utils/index'
import Home from './Home'
import moment from 'moment'
import lodash from 'lodash'
console.log('styles 1 = ', ut1())
console.log(moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'))
console.log(lodash.get({a: 1}, 'a'))

export const App = () => {
  return (
    <div className={styles.title}>
      <Home />
    </div>
  )
}
