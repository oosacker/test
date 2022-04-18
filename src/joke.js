import axios from 'axios'

const generateJoke = () => {
  const config = {
    headers: {
      "Accept": "application/json",
      mode: 'cors',
      credentials: 'include'
    }
  }
  axios.get(
    'https://icanhasdadjoke.com',
    config,
  ).then(res => {
    document.getElementById('joke').innerHTML = res.data.joke
  })
}

export default generateJoke