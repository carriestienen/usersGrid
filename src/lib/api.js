import axios from 'axios'

function readComputers(){
  return axios.get('https://sb-backendapi.azurewebsites.net/api/Computers')
}

function readUsers(){
  return axios.get('https://sb-backendapi.azurewebsites.net/api/Users')
}

function readComputer(id){
  return axios.get(`https://sb-backendapi.azurewebsites.net/api/Computers/${id}`)
}

function readUser(id){
  return axios.get(`https://sb-backendapi.azurewebsites.net/api/Users/${id}`)
}

export default {
  readComputers,
  readUsers,
  readComputer,
  readUser
}