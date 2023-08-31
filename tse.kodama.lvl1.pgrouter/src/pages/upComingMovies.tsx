/* Constroí a pagina UpComing, acessando a api moviedb com a bibloteca moviedb-promise,
 usando a função upcomingMovies */
import { MovieGridUpcomingMovies } from "./components/MovieGridUpcomingMovies";
export default function upcomingMovies() {
	return (
		<div className='mx-4 my-4'>
			<MovieGridUpcomingMovies />
		</div>
	);
}
