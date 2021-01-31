import { add, Base } from './utils'
import './main.scss'

const value: number[] = [1, 2, 3, 4, 5]

const average = (value: number[]) => (value.reduce((p, c) => add(p, c), 0) / value.length)

export class Father extends Base {}

console.log(average(value))

