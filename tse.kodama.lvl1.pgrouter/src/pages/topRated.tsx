/* Constroí a pagina Top Rated, acessando a api moviedb com a bibloteca moviedb-promise,
 usando a função topRated */
import { MovieGridTopRated } from "./components/MovieGridTopRated";
export default function TopRated() {
	return (
		<div className='mx-4 my-4'>
			<MovieGridTopRated />
		</div>
	);
}
