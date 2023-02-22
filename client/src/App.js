// import { Router } from 'express';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {


	return (
		<div className="App">
    <header>
      <Nav />
    </header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
		</div>
	);
}

export default App
