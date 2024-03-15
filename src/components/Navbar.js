import { useState } from "react";
import React, { Component } from 'react';

const Navbar = () => {
	const [viewSubSection, setViewSubSection] = useState(false);
	function toggleMenu() {
		setViewSubSection(!viewSubSection);
	}

	return (
		<div>
			<nav>
				<span>
					<div>
						<span>The </span>Spectator
					</div>
				</span>
			</nav>
		</div>
	);
};

export default Navbar;