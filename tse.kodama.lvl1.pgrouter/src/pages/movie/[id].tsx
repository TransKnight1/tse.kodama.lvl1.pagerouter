/* Pagina gerada dinamicamente com o ID de cada filme, ao clicar na imagem, apresentando mais detalhes
mapeando as quatro funcções/categorias de filmes apresentadas e construidas nas páginas, há problemas na
velocidade do código após multiplas solicitações */
import { MovieDb, MovieResult } from "moviedb-promise";
import { API_KEYS } from "../../../ApiKeys/apikeys";
import { useRouter } from "next/router";
import { MovieCardNoButton } from "../components/MovieCardNoButton";

//fazendo com que a category consiga ter uma tipagem dentro da bibloteca, e possa rodar as strings
declare module "moviedb-promise" {
	export interface MovieDb {
		[category: string]: () => Promise<any>;
	}
}
//getStaticPaths para gerar as páginas
export async function getStaticPaths() {
	// bibloteca moviedb-promise
	const moviedb = new MovieDb(API_KEYS.MOVIE_DB);
	// definição de todas as quatro categorias apresentadas nas paginas
	const categories = [
		"movieNowPlaying",
		"upcomingMovies",
		"moviePopular",
		"movieTopRated",
	];

	const paths = [];
	// esse for foi realizado pelo chatgpt, apesar de adaptado e funcional, tenho dúvidas sobre
	for (const category of categories) {
		const data = await moviedb[category]();
		const categoryPaths = (data.results as MovieResult[]).map((movie) => ({
			params: { id: movie.id!.toString() },
		}));
		paths.push(...categoryPaths);
	}

	return { paths, fallback: false };
}
// getStaticProps para disponibilizar os props da página
export async function getStaticProps({ params }: any) {
	const moviedb = new MovieDb(API_KEYS.MOVIE_DB);
	const movie = await moviedb.movieInfo({ id: params.id });

	return {
		props: {
			movie,
		},
	};
}

// useRouter para acessar o id, com o router.query e MovieCard adaptado para não ter o botão
const MoviePage = ({ movie }: { movie: MovieResult }) => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<div className='float-left mx-4'>
				<MovieCardNoButton
					key={movie.id}
					poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					title={movie.title}
					popularity={movie.popularity}
					media_type='movie'
					id={movie.id}
				/>
			</div>
			<h1 className='flex mt-4 font-bold text-xl'>{movie.title}</h1>
			<p className=''>
				TMDB Score:
				{" " +
					`${Math.round((movie.vote_average! + Number.EPSILON) * 10) / 10}`}
			</p>
			<p className='mt-4'>{movie.release_date}</p>
			<p className='flex m-4 text-justify font-bold'>{movie.overview}</p>
		</div>
	);
};

export default MoviePage;
