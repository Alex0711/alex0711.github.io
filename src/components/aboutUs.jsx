const AboutUs = () => {
	return(
		<section className="flex flex-col lg:flex-row">
			<div className="h-screen w-full lg:w-1/2 flex flex-col justify-between p-4">
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
			<div className="h-screen w-full lg:w-1/2">
				Insertar imagen en esta sección
			</div>
		</section>
	)
}

export default AboutUs;