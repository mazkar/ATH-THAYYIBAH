import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setUser } from '../../../store/action/authAction'
import jwtDecode from 'jwt-decode'

import * as AuthService from '../../../services/auth'
import API from './../../../utils/apiServices'
import Swal from 'sweetalert2'

const Login = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state)
  const [authLoading, setAuthLoading] = useState(false)

  const converToken = (token) => {
    try {
      const decodedToken = jwtDecode(token)
      console.log(decodedToken, 'decode token')

      return decodedToken
    } catch (error) {
      console.error('Error decoding JWT:', error)
    }
  }

  const handleLogin = async (username, password) => {
    console.log(username, password)
    try {
      setAuthLoading(true)
      const token = await AuthService.loginAPI(username, password)
      Swal.fire({
        title: token.message,
        text: token.message,
        icon: 'success',
        confirmButtonText: 'Close',
      })
      console.log('login : ', token)
      dispatch(setToken(token?.data))
      dispatch(setUser(converToken(token?.data)))
      nav('/')

      setAuthLoading(false)
    } catch (error) {
      Swal.fire({
        title: 'Login Gagal',
        text: 'Usernamae / Kata Sandi Salah',
        icon: 'error',
        confirmButtonText: 'Close',
      })
      setAuthLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let user = event.target
    let username = user.username.value
    let password = user.password.value
    handleLogin(username, password)
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" name="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput type="password" name="password" placeholder="Password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => console.log(user)}>
                          console
                        </CButton>
                      </CCol> */}
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
