import { useState } from "react";
import React, { Component } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [viewSubSection, setViewSubSection] = useState(false);
	function toggleMenu() {
		setViewSubSection(!viewSubSection);
	}

	return (
		<div className="nav">
			<nav className="navbar">
				<ul className="navbar_list">
					<li className={'navbarli left'}><img src="../logo.svg"/></li>
					<li className={'navbarli title'}> <Link to="/" className = "navbarHomeLink"> Code Chaser</Link> </li>
					<li className={'navbarli right'}>Log in</li>
					<li className={'navbarli right'}>Sign up</li>
				</ul>
			</nav>
		</div> 
	);
};

export default Navbar;