import React from 'react';
import menudata from './menu.data';

const Menu = () => {
	return (
		<div>
			<section className="menu" id="menu">
				<h3 className="sub-heading">our menu</h3>
				<h1 className="heading">today's speciality</h1>
				
				<div className="box-container">
					{menudata && menudata.map(item => (
						<div className="box">
							<div className="image">
								<img src={item.imgSrc} alt=""/>
								<a href="src/components/sections#" className="fas fa-heart"></a>
							</div>
							<div className="content">
								<div className="stars">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star-half-alt"></i>
								</div>
								<h3>{item.titre}</h3>
								<p>
									{item.description}
								</p>
								<a href="src/components/sections#" className="btn">add to cart</a>
								<span className="price">{item.price}</span>
							</div>
						</div>
					))}
				</div>
			</section>
		
		</div>
	);
};

export default Menu;