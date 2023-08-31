// Botões da upper bar construídos utilizando o router.push, para acessar as páginas, o estilo ainda há
// de ser ajustado, junto com icones
import { useRouter } from "next/router";

export default function UpperBarButtons() {
	const router = useRouter();
	const buttonStyle = "mx-2 bg-black text-white px-4 py-2 rounded";

	const TopRated = () => (
		<button className={buttonStyle} onClick={() => router.push("/topRated")}>
			<svg className='fill-current w-4 h-4'></svg>
			<span>Top Rated</span>
		</button>
	);

	const Home = () => (
		<button className={buttonStyle} onClick={() => router.push("/")}>
			<svg className='fill-current w-4 h-4'></svg>
			<span>Home</span>
		</button>
	);

	const Popular = () => (
		<button
			className={buttonStyle}
			onClick={() => router.push("/moviePopular")}>
			<svg className='fill-current w-4 h-4'></svg>
			<span>Popular</span>
		</button>
	);

	const UpComing = () => (
		<button
			className={buttonStyle}
			onClick={() => router.push("/upComingMovies")}>
			<svg className='fill-current w-4 h-4'></svg>
			<span>UpComing</span>
		</button>
	);

	return (
		<ul className='font-Pacifico'>
			<Home />

			<a className=''>
				<TopRated />
			</a>
			<a className=''>
				<Popular />
			</a>
			<a className=''>
				<UpComing />
			</a>
		</ul>
	);
}
