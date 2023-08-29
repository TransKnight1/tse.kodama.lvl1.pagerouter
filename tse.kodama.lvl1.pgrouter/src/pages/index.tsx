import { HomeMovieslist } from "@/pages/components/movie.grid.home";
export default function Home() {
	return (
		<div className='mx-4 my-4'>
			{/* Movieslist acessa todas informações, rendezirando os critérios escolhidos e o MovieCard renderiza a imagem do poster dos primeiros 20 resultados */}
			<HomeMovieslist />
		</div>
	);
}
