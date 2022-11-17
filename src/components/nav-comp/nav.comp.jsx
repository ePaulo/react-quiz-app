import './nav.styles.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav-component'>
      <Link className='nav-link' to='/'>
        Home
      </Link>

      <Link className='nav-link' to='/quiz'>
        Quiz
      </Link>

      <Link className='nav-link' to='/result'>
        Result
      </Link>

      <Link className='nav-link' to='/score'>
        Score
      </Link>
    </nav>
  )
}

export default Nav