import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import logo from '../images/workout-logo-strong.png'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className='header'>
            <img style={{ width: 75, height: 75 }} src={logo} alt="logo" /> 
            <h1>Workout Tracker</h1>
          </div>
          
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button className='logout' onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar