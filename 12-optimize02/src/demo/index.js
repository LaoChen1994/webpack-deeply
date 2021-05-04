import './index.css'
import { get } from 'lodash'
import { funcA } from './utils'

window.onload = () => {
  const elem = document.getElementById('app')
  elem.innerText = 123
  const value = funcA(1, 3)
  get({ b: 2 }, 'b')
  console.log('res -> ', value)

  document.getElementById('btn').addEventListener('click', function() {
    import(/*webpackChunkName: "show"*/"./c").then(({handleClick}) => {
      handleClick()
    })
  })
}