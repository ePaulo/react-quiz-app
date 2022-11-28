import './navigation.styles.scss'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='component__nav-bar'>
      <NavLink className='nav-link' to='/'>
        Select Quiz
      </NavLink>

      <NavLink className='nav-link' to='/quiz'>
        Answer Questions
      </NavLink>

      <NavLink className='nav-link' to='/result'>
        Save Quiz Results
      </NavLink>

      <NavLink className='nav-link' to='/scores'>
        View Saved Scores
      </NavLink>
    </nav>
  )
}

export default NavBar
