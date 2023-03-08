import React, {useEffect, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import SectionHome from "../components/sections/home";
import Dishes from "../components/sections/dishes";
import About from "../components/sections/about";
import Menu from "../components/menu/menu";
import Swiper from "swiper";


const Home = () => {
	const swiperRef = useRef(null);
	
	useEffect(()=> {
		swiperRef.current = new Swiper(".swipper-container",{
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable:true,
			},
		});
	},[])
	
	return (
		<Container>
			<SectionHome/>
			<Dishes/>
			<About/>
			<Menu/>
		</Container>
	);
};

export default Home;