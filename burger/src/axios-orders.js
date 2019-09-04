import axios from 'axios'

const instance = axios.create({baseURL: 'https://burger-builder-react-c3110.firebaseio.com/'})

export default instance