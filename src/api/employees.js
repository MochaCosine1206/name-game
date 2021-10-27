import axios from 'axios'

export default axios.create({
    baseURL: 'https://namegame.willowtreeapps.com/api/v1.0/profiles'
})