const AboutUs = () => {
	return(
		<section className="flex flex-col lg:flex-row justify-between h-[200vh] lg:h-screen">
			<div className="h-1/2 lg:h-[100%] w-full lg:w-[45%] flex flex-col justify-between">
				<div>
					<h2 className="text-title">
						About Us
					</h2>
					<p>
						Driven by passion and curiosity, we continuously explore new technologies to find smarter, more effective ways to deliver the best solutions for our clients.
					</p>
				</div>
				<div>
					<h3 className="text-subtitle">
						Our Vision
					</h3>
					<p>
						To merge creativity and functionality to help our clients stand out online and become the first choice for their customers.
					</p>
					<h3 className="text-subtitle">
						Our Mission
					</h3>
					<p>
						To drive online growth for businesses, enabling them to reach and engage the customers who matter most.
					</p>
				</div>
			</div>
			<div className="h-1/2 lg:h-[100%] w-full lg:w-[45%]">
				Insertar imagen en esta sección
			</div>
		</section>
	)
}

export default AboutUs;