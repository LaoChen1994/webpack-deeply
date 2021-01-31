import './index.css';
import img from './img.png'
import sayHello from 'sayHello'
const util = require('./utils/index')

const imgElem = document.createElement('img')
imgElem.src = img

document.body.appendChild(imgElem)
sayHello()