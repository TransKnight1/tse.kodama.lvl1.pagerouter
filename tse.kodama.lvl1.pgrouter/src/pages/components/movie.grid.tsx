import { useEffect, useState } from "react";
import { MovieDb } from "moviedb-promise";
import React from "react";
import { API_KEYS } from "../../../ApiKeys/apikeys";
import { MovieCard } from "../components/movie.card";

type MovieResult = {
	id: number; // Make id required
	poster_path: string;
	title: string;
	popularity: number;
	// Add other properties
};

const Movieslist = () => {
	const [moviesListData, setMoviesListData] = useState<MovieResult[]>([]);

	useEffect(() => {
		const moviedb = new MovieDb(API_KEYS.MOVIE_DB);

		const fetchData = async () => {
			try {
				const nowPlayingData = await moviedb.movieNowPlaying();

				if (nowPlayingData.results) {
					const twentyNowPlayingMovies = nowPlayingData.results.slice(0, 20);
					console.log(twentyNowPlayingMovies);
					setMoviesListData(twentyNowPlayingMovies);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className=' grid grid-cols-2 hover:grid-flow-row md:grid-cols-4 gap-2 max-w-screen-lg '>
			{moviesListData.map((movie) => (
				<MovieCard
					key={movie.id}
					image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					title={movie.title}
					popularity={movie.popularity}
				/>
			))}
		</div>
	);
};

export { Movieslist };
