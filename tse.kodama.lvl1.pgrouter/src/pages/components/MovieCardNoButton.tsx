import React from "react";
import Image from "next/image";
import { MovieResult } from "moviedb-promise";

/* MovieCardNoButton, literalmente a mesma função que MovieCard, mas sem o botão e o link*/
const MovieCardNoButton = ({ poster_path, title, id }: MovieResult) => {
	return (
		<Image
			priority={true}
			className='rounded-lg mb-4'
			src={poster_path!}
			alt={title!}
			width={500}
			height={500}
			id=''
		/>
	);
};

export { MovieCardNoButton };
