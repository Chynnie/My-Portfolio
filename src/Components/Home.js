import React from 'react';

const Home = () => {
	return (
		<div className='text-xl bg-neutral500 w-full h-3/6 flex flex-col justify-center items-center'>
			<div className='max-w-lg text-[#262626]'>
				<h2 className='text-3xl font-semibold text-center py-4'>
					Hello👋 I'm Chinenye Jiwuaku
				</h2>
				<p className='text-center py-2'>
					I develop good functional and responsive web applications that deliver
					optimum performance and seamless interactivity to their users.
				</p>
				<div className='flex justify-center my-3'>
					<button className='text-center p-2 bg-neutral700 text-[#d4d4d4] rounded-md'>
						Download Resume
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
