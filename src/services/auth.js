import React from 'react'

import API from '../utils/apiServices'

export const apiToken = async (username, password) => {
  const userdata = {
    username: username,
    password: password,
  }
  const token = API.Login('api/Auth/Login')(userdata).then((result) => {
    console.log('i am auth :', result.data.message)
    return result.data
  })
  return token
}

export const loginAPI = async (username, password) => {
  const token = await apiToken(username, password)
  console.log('i am loginbyauth :', token)
  localStorage.setItem('token', token)
  document.getElementById('root').classList.remove('login-page')
  document.getElementById('root').classList.remove('hold-transition')
  return token
}
