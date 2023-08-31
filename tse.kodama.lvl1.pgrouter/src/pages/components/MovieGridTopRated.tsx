import React, { useEffect, useState } from "react";
import { MovieDb } from "moviedb-promise";
import { API_KEYS } from "../../../ApiKeys/apikeys";
import { MovieCard } from "./MovieCard";
import { MovieResult } from "moviedb-promise";

// topRated

const MovieGridTopRated = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesListData, setMoviesListData] = useState<MovieResult[]>([]);

	useEffect(() => {
		const fetchMovies = async (page: number) => {
			const moviedb = new MovieDb(API_KEYS.MOVIE_DB);

			try {
				const nowPlayingData = await moviedb.movieTopRated({
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

			{/* Pagination Links */}
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

export { MovieGridTopRated };
