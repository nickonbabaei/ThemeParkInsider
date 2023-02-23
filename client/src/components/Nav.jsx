import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<nav>
    <div className="logo">
      <h1>Theme Park Insider</h1>
    </div>
			<Link to="/about">About</Link>
			<Link to="/themeParks">Theme Parks</Link>
			<Link to="/">Home</Link>
		</nav>
	)
}

export default Nav
