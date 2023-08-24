import { Movieslist } from "@/pages/components/movie.grid";
import { MovieCard } from "@/pages/components/movie.card";
export default function Home() {
	return (
		<div className='h-screen flex flex-col'>
			<div className='sticky top-0 w-full h-12 bg-LaranjaCorpo text-center border-b-2 font-Pacifico text-3xl'>
				Your Movie
			</div>
			<div className='flex flex-1 top-fit bg-LaranjaCorpo'>
				<aside className='w-20 bg-slate-800 border-r-2 border-cyan-400 bg-RosaCorpo'>
					Side bar
				</aside>
				<main className=''>
					<div className='padding-'>
						<Movieslist />
						<MovieCard image='' title='' popularity={0} />
					</div>
				</main>
			</div>
		</div>
	);
}
