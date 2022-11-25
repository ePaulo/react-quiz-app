import './navigation.styles.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='component__nav'>
      <Link className='nav-link' to='/'>
        Select Quiz
      </Link>

      <Link className='nav-link' to='/quiz'>
        Answer Questions
      </Link>

      <Link className='nav-link' to='/result'>
        Save Quiz Results
      </Link>

      <Link className='nav-link' to='/scores'>
        View Saved Scores
      </Link>
    </nav>
  )
}

export default Nav
