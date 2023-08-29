import React from "react";
import Image from "next/image";
import { MovieResult } from "moviedb-promise";
import Link from "next/link";

const MovieCard = ({ poster_path, title, id }: MovieResult) => {
	return (
		<button>
			<Link href={`/movie/${id}`}>
				<Image
					className='rounded-lg'
					src={poster_path!}
					alt={title!}
					width={500}
					height={500}
					id=''
				/>
			</Link>
		</button>
	);
};

export { MovieCard };
