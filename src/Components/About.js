import React from 'react';
import PortfolioPic from '../Assets/Portfolio_Pic.jpg';

const About = () => {
	return (
		<div className='px-4 bg-[#d4d4d4] h-2/5 text-neutral700 flex flex-col justify-between'>
			<h1 className='text-3xl font-semibold mt-4'>About Me</h1>
			<div className='about-text  max-w-3xl text-xl flex justify-between items-center '>
				<p>
					I've been a Software Development enthusiast for about four years and
					have practical experience using HTML, CSS, JavaScript, ReactJs, Redux,
					and Python Programming. Currently, I'm specializing my career in
					Frontend development, and I'm proficient in using HTML, CSS,
					JavaScript, ReactJs, and Redux libraries in developing Frontend
					applications, with a minimum of two years of experience in this field.
				</p>
				<img className='about-image h-10 w-10' src={PortfolioPic} />
			</div>
		</div>
	);
};

export default About;
