import { useEffect, useState } from "react";
import { MovieDb } from "moviedb-promise";
import React from "react";
import { API_KEYS } from "../../../ApiKeys/apikeys";
import { MovieCard } from "./movie.card";
import { MovieResult } from "moviedb-promise";

const TopRatedMovieslist = () => {
	const [moviesListData, setMoviesListData] = useState<MovieResult[]>([]);

	useEffect(() => {
		const moviedb = new MovieDb(API_KEYS.MOVIE_DB);

		const fetchData = async () => {
			try {
				const movieTopRated = await moviedb.movieTopRated();

				if (movieTopRated.results) {
					const twentyMovieTopRated = movieTopRated.results.slice(0, 20);
					console.log(twentyMovieTopRated);
					setMoviesListData(twentyMovieTopRated);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className=' grid grid-cols-5 md:grid-cols-5 gap-4 max-w-screen-xlg '>
			{moviesListData.map((movie) => (
				<MovieCard
					key={movie.id}
					poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					title={movie.title}
					popularity={movie.popularity}
					media_type='movie'
				/>
			))}
		</div>
	);
};

export { TopRatedMovieslist };
