// import { Router } from 'express';
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ParkList from './pages/ParkList';
import ParkDetails from './components/ParkDetails';
import About from './pages/About';

function App() {


	return (
		<div className="App">
    <header>
      <Nav />
    </header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/themeParks" element={<ParkList />} />
					<Route path="themeParks/:id" element={<ParkDetails />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
		</div>
	);
}

export default App
