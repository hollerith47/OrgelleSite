import React from 'react';

function Footer() {
	return (
		<section className="footer">
			<div className="box-container">
				<div className="box">
					<h3>locations</h3>
					<a href="#">Russia</a>
					<a href="#">Republic Democtratic of Kongo</a>
					<a href="#">Canada</a>
					<a href="#">USA</a>
					<a href="#">france</a>
				</div>
				
				<div className="box">
					<h3>quick links</h3>
					<a href="/">home</a>
					<a href="/dishes">dishes</a>
					<a href="/about">about</a>
					<a href="/menu">menu</a>
					<a href="/review">reivew</a>
					<a href="/order">order</a>
				</div>
				
				<div className="box">
					<h3>contact info</h3>
					<a href="tel:+79956151603">+79956151603</a>
					<a href="tel:+79956151502">+79956151502</a>
					<a href="mailto:Benlugralumbu530@gmail.com">Benlugralumbu530@gmail.com</a>
					<a href="mailto:Bashiyachris520@gmail.com">Bashiyachris520@gmail.com</a>
					<a href="https://www.google.com/maps/place/rostov-on-don">Rostov-on-Don, Russia - 344000</a>
				</div>
				
				<div className="box">
					<h3>follow us</h3>
					<a href="#">facebook</a>
					<a href="#">twitter</a>
					<a href="#">instagram</a>
					<a href="#">linkedin</a>
				</div>
			</div>
			
			<div className="credit">copyright @ 2023 by <span>Orgelle Lumbu</span></div>
		</section>
	);
}

export default Footer;