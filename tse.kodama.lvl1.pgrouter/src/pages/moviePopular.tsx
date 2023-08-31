/* Constroí a pagina popular, acessando a api moviedb com a bibloteca moviedb-promise,
 usando a função moviePopular */
import { MovieGridMoviePopular } from "./components/MovieGridMoviePopular";
export default function MoviePopular() {
	return (
		<div className='m-4'>
			<MovieGridMoviePopular />
		</div>
	);
}
