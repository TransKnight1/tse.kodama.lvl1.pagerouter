import React from "react";
import Image from "next/image";
import { MovieResult } from "moviedb-promise";
import Link from "next/link";

/* Criação do componente MovieCard, que armazena poster_path, title e id, e usa a tipagem MovieResult 
já provida pela bibloteca moviedb-promise */

const MovieCard = ({ poster_path, title, id }: MovieResult) => {
	return (
		<button>
			<Link href={`/movie/${id}`}>
				{/* Link para navegar para a página do filme e componente Image do next,
				 com todas as propriedades necessárias, e a tipagem MovieResult */}
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
