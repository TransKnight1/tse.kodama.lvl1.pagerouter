import React, { useEffect, useState } from "react";
import { MovieDb } from "moviedb-promise";
import { API_KEYS } from "../../../ApiKeys/apikeys";
import { MovieCard } from "./MovieCard";
import { MovieResult } from "moviedb-promise";

/* função nowPlaying aplicada no MovieGridHome, com a bibloteca moviedb-promise, a lógica segue para as
outras três páginas, e com um useState para navegar através das páginas, apesar de funcionar, não é o ideal
já que não é dinâmico, e caso você avançe para a página 4 estando no home, e clique em home novamente,
para voltar para página 0, nada irá acontecer, já que a função não é dinâmica */

const HomeMovieslist = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesListData, setMoviesListData] = useState<MovieResult[]>([]);

	/* useEffect para carregar os dados */
	useEffect(() => {
		const fetchMovies = async (page: number) => {
			const moviedb = new MovieDb(API_KEYS.MOVIE_DB);

			//para ser sincero, não sei pra que serve o try aqui
			try {
				const nowPlayingData = await moviedb.movieNowPlaying({
					page,
				});

				if (nowPlayingData.results) {
					setMoviesListData(nowPlayingData.results);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchMovies(currentPage);
	}, [currentPage]);

	/* MovieCard chamado, com as informações do MovieResult, para ser renderizado, e os botões
	para avançar e retornar a página, quando clicados, que deveriam ser componentes react próprios,
	 e só importados*/
	return (
		<div className=' grid grid-cols-5 md:grid-cols-5 gap-4 max-w-screen-xlg '>
			{moviesListData.map((movie) => (
				<MovieCard
					key={movie.id}
					poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					title={movie.title}
					popularity={movie.popularity}
					media_type='movie'
					id={movie.id}
				/>
			))}

			<div className='flex justify-between'>
				<button
					className='bg-black text-white py-2 px-4 rounded'
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}>
					Previous
				</button>
				<button
					className='bg-black text-white py-2 px-4 rounded'
					onClick={() => setCurrentPage(currentPage + 1)}>
					Next
				</button>
			</div>
		</div>
	);
};

export { HomeMovieslist };
