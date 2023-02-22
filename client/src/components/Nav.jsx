import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link className="link" to="/">
        <b>Home</b>
      </Link>
      <Link className="link" to="/about">
        <b>About</b>
      </Link>
    </nav>
  )
}

export default Nav
