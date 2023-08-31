/* Home é uma variação do acesso as informações nowPlaying na bibloteca moviedb-promise,
 rendezirando os critérios escolhidos e o MovieCard renderiza a imagem do poster dos primeiros 20 resultados,
 essa lógica do MovieCard, se extende para todas outras páginas, exceto as geradas dinamicamente com o id
do filme */

import { HomeMovieslist } from "@/pages/components/MovieGridHome";
export default function Home() {
	return (
		<div className='mx-4 my-4'>
			<HomeMovieslist />
		</div>
	);
}
