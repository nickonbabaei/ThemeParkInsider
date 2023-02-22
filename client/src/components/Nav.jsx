import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
      		<Link to="/themeParks">Theme Parks</Link>
			<Link to="/about">About</Link>
		</nav>
	)
}

export default Nav
