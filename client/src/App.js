// import { Router } from 'express';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ParkList from './pages/ParkList';

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
				</Routes>
			</main>
		</div>
	);
}

export default App
