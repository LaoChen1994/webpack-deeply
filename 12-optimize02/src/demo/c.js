import { funcA } from './utils'
import { get } from 'lodash'

export function handleClick() {
  console.log(funcA(1, 2))
  console.log('get -> ', get({a: 3}, 'a'))
}