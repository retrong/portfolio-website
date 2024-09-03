import React from 'react';

const Loading = () => {
  return (
		<div className='flex justify-center items-center'>
			<div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-accent border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
		</div>
	);
}

export default Loading