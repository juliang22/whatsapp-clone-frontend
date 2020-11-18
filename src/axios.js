import axios from 'axios'

const instance = axios.create({
	baseURL: "https://whatsapp-clone-back.herokuapp.com"
})

export default instance