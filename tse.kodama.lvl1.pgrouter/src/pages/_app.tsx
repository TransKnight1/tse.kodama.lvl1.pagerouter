import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UpperBar } from "./components/upper.bar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='h-screen flex flex-col'>
			{/* Logo feito apenas com fonte Pacifico importada do google*/}
			<div>
				<div className='sticky top-0 w-full h-12 bg-LaranjaCorpo text-center border-b-2 font-Pacifico text-3xl'>
					Your Movie
				</div>
				<div>
					<UpperBar />
				</div>
			</div>
			<div className='flex flex-1 top-fit bg-LaranjaCorpo'>
				<main className=''>
					{/* Movieslist acessa todas informações, rendezirando os critérios escolhidos e o MovieCard renderiza a imagem do poster dos primeiros 20 resultados */}
					<div className=''>
						<Component {...pageProps} />
					</div>
				</main>
			</div>
		</div>
	);
}
