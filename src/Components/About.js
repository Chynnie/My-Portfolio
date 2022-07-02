import React from 'react';
import PortfolioPic from '../Assets/Portfolio_Pic.jpg';

const About = () => {
	return (
		<div className='px-6 py-4 bg-[#fafafa] text-neutral700 flex flex-col max-h-full max-w-full'>
			<h1 className='text-3xl font-semibold'>About Me</h1>
			<div className='flex justify-between mx-6'>
				<div className='max-w-xs mt-6'>
					<img
						className='about-image object-contain shadow-2xl rounded-full'
						src={PortfolioPic}
					/>
				</div>
				<div className='about-text text-xl flex items-center'>
					<p className='max-w-2xl leading-9'>
						I have been a Software Development enthusiast for about four years
						and have practical experience using HTML, CSS, JavaScript, ReactJs,
						Redux, and Python Programming. Currently, I'm specializing my career
						in Frontend development, and I'm proficient in using HTML, CSS,
						JavaScript, ReactJs, and Redux libraries in developing Frontend
						applications, with a minimum of two years of experience in this
						field.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
