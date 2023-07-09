import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation, useNavigation} from 'react-router-dom'
import LoadingSpinner from '../Components/LoadingSpinner'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  const navigate=useNavigation()
  if (navigate.state==='loading') {
    return <LoadingSpinner/>
  }
  if (user) {
    return children
  }

  return (<Navigate state={{from:location}} to="/login"></Navigate>)
}

export default PrivateRoute