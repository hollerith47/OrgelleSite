import React, {useEffect} from 'react';

const Loader = () => {
	function loader(){
		document.querySelector('.loader-container').classList.add('fade-out');
	}
	
	function fadeOut(){
		setInterval(loader, 3000);
	}
	useEffect(()=>{
		window.onload = fadeOut();
	},[fadeOut])
	return (
		<div>
			<div className="loader-container">
				<img src="images/loader.gif" alt=""/>
			</div>
		</div>
	);
};

export default Loader;