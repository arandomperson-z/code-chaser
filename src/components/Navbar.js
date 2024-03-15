import { useState } from "react";
import React, { Component } from 'react';
import "./Navbar.css";

const Navbar = () => {
	const [viewSubSection, setViewSubSection] = useState(false);
	function toggleMenu() {
		setViewSubSection(!viewSubSection);
	}

	return (
		<div>
			<nav>
				<div className="list">
					<span>
						<ul>
							<li className="left"><img src="../logo.svg"/></li>
							<li className="left">Code Chaser</li>
							<li className="right">Log in</li>
							<li className="right">Sign up</li>
						</ul>
					</span>
				</div>
			</nav>
		</div> 
	);
};

export default Navbar;