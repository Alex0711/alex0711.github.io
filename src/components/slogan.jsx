import blueSpots from 'assets/images/blueSpots.png';
const Slogan = () => {
	return(
		<section 
			className="bg-cover bg-center text-black flex-grow" 
			style={{ backgroundImage: `url(${blueSpots})` }}
		>
			<h2 className="text-slogan font-bold">Be seen. Be chosen.</h2>
		</section>
	)
}

export default Slogan;