import React from "react";
import Image from "next/image";
import { MovieResult } from "moviedb-promise";

export const revalidate = 0;
const MovieCard = ({ poster_path, title }: MovieResult) => {
	return (
		<div>
			<Image
				priority={true}
				className='rounded-lg'
				src={poster_path}
				alt={title}
				width={500}
				height={500}
			/>
			{/* <h3 className='text-center font-bold'>{title}</h3> */}
		</div>
	);
};

export { MovieCard };
