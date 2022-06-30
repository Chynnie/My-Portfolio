import React from 'react';
import './style.css';

const Navbar = () => {
	return (
		<div>
			<div className='navbar h-[60px] w-screen bg-[#d1d5db] shadow-lg text-2xl flex items-center justify-between px-4 text-neutral700 font-sans max-w-full'>
				<div className='text-4xl font-bold'>Frontend Developer</div>
				<ul className='flex space-x-4'>
					<li>Home</li>
					<li>About</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Resume</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
