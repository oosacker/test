import generateJoke from './joke'
import {v4 as uuidv4 } from 'uuid'
import './styles/main.scss'

// webpack automatically loads these modules into the output js file
console.log(generateJoke())
console.log(uuidv4())

console.log('111')