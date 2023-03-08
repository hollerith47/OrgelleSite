import React from 'react';

const SectionHome= () => {
	return (
		<div>
			<section className="home" id="home">
				<div className="swiper-container home-slider">
					<div className="swiper-wrapper wrapper">
						<div className="swiper-slide slide">
							<div className="content">
								<span>dish 1</span>
								<h3>Makayabu</h3>
								<p>En plus d'être riche en vitamines B, ses feuilles possèdent une action
									antibactérienne.
									Le manioc est également recommandé aux personnes diabétiques car il a un faible
									indice glycémique.
									Sa forte teneur en fibres permet de ralentir la vitesse d'absorption du sucre dans
									le sang</p>
								<a href="#" className="btn">order now</a>
							</div>
							<div className="image">
								<img src="images/makayambu.jpg" alt=""/>
							</div>
						</div>
						
						<div className="swiper-slide slide">
							<div className="content">
								<span>dish 2</span>
								<h3>Ndakala</h3>
								<p>En plus d'être riche en vitamines B, ses feuilles possèdent une action
									antibactérienne.
									Le manioc est également recommandé aux personnes diabétiques car il a un faible
									indice glycémique.
									Sa forte teneur en fibres permet de ralentir la vitesse d'absorption du sucre dans
									le sang</p>
								<a href="#" className="btn">order now</a>
							</div>
							<div className="image">
								<img src="images/dish-8.jpg" alt=""/>
							</div>
						</div>
						
						<div className="swiper-slide slide">
							<div className="content">
								<span>dish 3</span>
								<h3>Pondu</h3>
								<p>En plus d'être riche en vitamines B, ses feuilles possèdent une action
									antibactérienne.
									Le manioc est également recommandé aux personnes diabétiques car il a un faible
									indice glycémique.
									Sa forte teneur en fibres permet de ralentir la vitesse d'absorption du sucre dans
									le sang</p>
								<a href="#" className="btn">order now</a>
							</div>
							<div className="image">
								<img src="images/dish-7.jpg" alt=""/>
							</div>
						</div>
					
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</section>
		</div>
	);
};

export default SectionHome;