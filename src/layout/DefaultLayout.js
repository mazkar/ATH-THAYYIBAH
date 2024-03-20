import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DefaultLayout = () => {
  const token = useSelector((state) => state.authReducer.token)
  const nav = useNavigate()
  useEffect(() => {
    if (token == undefined || token === '') {
      nav('/login')
    } else {
      nav('/')
    }
  }, [token])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
