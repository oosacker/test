import generateJoke from './joke'
import {v4 as uuidv4 } from 'uuid'
import './styles/main.scss'
import testImg from './assets/test.png'

// webpack automatically loads these modules into the output js file
console.log(generateJoke())
console.log(uuidv4())

console.log('111')

const image = document.getElementById('testImg')
image.src = testImg