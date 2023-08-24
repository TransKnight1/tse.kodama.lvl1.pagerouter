// MovieCard.tsx
import React from "react";
import Image from "next/image";

type MovieCardProps = {
	image: string;
	title: string;
	popularity: number;
};

const MovieCard: React.FC<MovieCardProps> = ({ image, title }) => {
	return (
		<div>
			<Image
				className='rounded-lg'
				src={image}
				alt={title}
				width={500}
				height={500}
			/>
			<h3 className='text-center'>{title}</h3>
		</div>
	);
};

export { MovieCard };
