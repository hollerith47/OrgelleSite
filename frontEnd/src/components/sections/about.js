import React from 'react';

const About = () => {
	return (
		<div>
			<section className="about" id="about">
				<h3 className="sub-heading">about us</h3>
				<h1 className="heading">why choose us?</h1>
				
				<div className="row">
					<div className="image">
						<img src="images/liboke.jpg" alt=""/>
					</div>
					
					<div className="content">
						<h3>best food in the country</h3>
						<h3>Liboké</h3>
						<p>
							Dans la nourriture congolaise, le liboké fait partie des mets
							favoris des habitants du pays. Plat typique congolais, le liboké est
							à la fois un plat et la façon dont on cuisine ce mets.
						</p>
						<p>
							La recette la plus connue est le liboke ya mbisi ya mayi ou poisson
							d'eau douce cuit à l'étouffé dans des feuilles vertes naturelles,
							même si d'autres variantes existent.
						</p>
						<p>
							Un conseil: ne quittez pas Kinshasa sans avoir goûté un liboke.
							C'est un rituel culinaire pour des kinois.
						</p>
						<a href="#" className="btn">learn more</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;