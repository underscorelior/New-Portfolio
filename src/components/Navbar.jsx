import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

class Navbar extends Component {
	render() {
		return (
			<nav className="sticky top-0 z-10 hidden w-full justify-between border-b-[1.5px] border-neutral-300/50 bg-neutral-100 bg-opacity-10 py-3 backdrop-blur-lg backdrop-filter md:flex">
				<div className="mx-auto flex h-16 min-w-[90%] items-center justify-between px-4">
					<span className="text-4xl font-semibold text-neutral-900/90">
						Lior
					</span>
					<div className="flex items-center justify-center space-x-8 text-xl text-neutral-900">
						<a href="#">About</a>
						<a href="#">Contact</a>
						<HashLink
							to="/#work"
							smooth
							className="rounded-2xl bg-neutral-900 p-4 text-neutral-100">
							View Work
						</HashLink>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
