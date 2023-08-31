/* adição de cores customizadas dentro do tailwind, e fonte do google para criar a logo
aqui o esqueleto visual de todas as paginas do site está definido.*/
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UpperBar } from "./components/UpperBar";
import YourMovieLogo from "./components/YourMovieLogo";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='h-screen flex flex-col'>
			<div>
				{/* logo feito apenas com fonte Pacifico importada do Google */}
				<YourMovieLogo />
				<div>
					<Head>
						<link rel='shortcut icon' href='/' />
					</Head>
					{/* Upper Bar em rosa com quatro botões de navegação */}
					<UpperBar />
				</div>
			</div>
			<div className='flex flex-1 top-fit bg-LaranjaCorpo'>
				<main className=''>
					{/* Componente principal */}
					<div className=''>
						<Component {...pageProps} />
					</div>
				</main>
			</div>
		</div>
	);
}
