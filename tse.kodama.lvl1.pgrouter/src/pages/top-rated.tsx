import { MovieCard } from "@/pages/components/movie.card";
import { TopRatedMovieslist } from "./components/movie.grid.top.rated";
import { Sidebar } from "./components/sidebar";
export default function TopRated() {
	return (
		<div className='h-screen flex flex-col'>
			{/* Logo feito apenas com fonte Pacifico importada do google*/}
			<div className='sticky top-0 w-full h-12 bg-LaranjaCorpo text-center border-b-2 font-Pacifico text-3xl'>
				Your Movie
			</div>
			<div className='flex flex-1 top-fit bg-LaranjaCorpo'>
				{/* Side bar onde fica icones de navegação */}
				<Sidebar />
				<main className=''>
					{/* Movieslist acessa todas informações, rendezirando os critérios escolhidos e o MovieCard renderiza a imagem do poster dos primeiros 20 resultados */}
					<div className='mt-4 ml-4 mr-4'>
						<TopRatedMovieslist />
					</div>
				</main>
			</div>
		</div>
	);
}
