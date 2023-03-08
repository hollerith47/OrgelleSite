import React from 'react';

const Navbar = () => {
	return (
		<div>
			<header>
				{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
				<a href="#" className="logo"><i className="fas fa-utensils"></i>OlkaFood.</a>
				
				<nav className="navbar">
					<a className="active" href="/">home</a>
					<a href="#dishes">dishes</a>
					<a href="#about">about</a>
					<a href="#menu">menu</a>
					<a href="#review">review</a>
					<a href="/login">Login</a>
					<a href="/register">Signup</a>
					
				</nav>
				
				<div className="icons">
					<i className="fas fa-bars" id="menu-bars"></i>
					<i className="fas fa-search" id="search-icon"></i>
					{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
					<a href="#" className="fas fa-heart"></a>
					{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
					<a href="#" className="fas fa-shopping-cart"></a>
				</div>
			
			</header>
		</div>
	);
};

export default Navbar;