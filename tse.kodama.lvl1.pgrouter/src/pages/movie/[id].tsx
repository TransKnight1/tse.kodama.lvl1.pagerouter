import { useEffect, useState } from "react";
import { MovieDb } from "moviedb-promise";
import React from "react";
import { API_KEYS } from "../../../ApiKeys/apikeys";
import { MovieCard } from "../components/movie.card";
import { MovieResult } from "moviedb-promise";
import { useRouter } from "next/router";

export default function MoviePage() {
	const router = useRouter();

	const getStaticProps = async ({ params: { id } }) => {
		const moviedb = new MovieDb(API_KEYS.MOVIE_DB);

		const movie = await moviedb.tvInfo(id);
	};

	return { props: { getStaticProps } };
}
