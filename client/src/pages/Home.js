import React from 'react'
import video1 from '../assets/carousel-44.mp4'
import video2 from '../assets/ferris-wheel-27057.mp4'
import video3 from '../assets/cars-130481.mp4'
import video4 from '../assets/fair-42561.mp4'

const Home = () => {
	return (
		<div >
		<div className='title-cont'>
      <img className="tittle" alt="heading" src='https://i.postimg.cc/XYmSHMXT/Theme-Park-Insider.png' />
		</div>

		<div className='welcome'>
			<h1>Welcome to Theme Park Insider </h1>
			<h2>Where we share reviews for America's most visited theme parks and attractions. You can view reviews from previous visitors as well as leave your own review </h2>
		</div>
<div className='videos'>

		<div className='video-cont1'>
			<div className='video'>
				<video src={video1} autoPlay loop muted />
			</div>
		</div>
		<div className='video-cont2'>
			<div className='video'>
				<video src={video2} autoPlay loop muted />
			</div>
		</div>
		<div className='video-cont1'>
			<div className='video'>
				<video src={video3} autoPlay loop muted />
			</div>
		</div>
		<div className='video-cont2'>
			<div className='video'>
				<video src={video4} autoPlay loop muted />
			</div>
		</div>
</div>

			
		</div>
	)
}

export default Home
