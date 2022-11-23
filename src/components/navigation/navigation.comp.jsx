import './navigation.styles.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='component__nav'>
      <Link className='nav-link' to='/'>
        Home
      </Link>

      <Link className='nav-link' to='/quiz'>
        Quiz
      </Link>

      <Link className='nav-link' to='/result'>
        Result
      </Link>

      <Link className='nav-link' to='/scores'>
        Scores
      </Link>
    </nav>
  )
}

export default Nav
