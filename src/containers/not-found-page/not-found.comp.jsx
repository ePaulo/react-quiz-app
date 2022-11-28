import './not-found.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])

  return (
    <div className='container__not-found'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Redirecting you to the Quiz Start page...</p>
    </div>
  )
}

export default NotFound
