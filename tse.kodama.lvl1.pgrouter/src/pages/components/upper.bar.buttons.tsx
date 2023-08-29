import { useRouter } from "next/router";
export default function UpperBarButtons() {
	const router = useRouter();
	const TopRatedButton = () => {
		return (
			<button className='mx-2' onClick={() => router.push("top-rated")}>
				<svg className='fill-current w-4 h-4'></svg>
				<span>Top Rated</span>
			</button>
		);
	};
	const Home = () => {
		return (
			<button className='mx-2' onClick={() => router.push("/")}>
				<svg className='fill-current w-4 h-4'></svg>
				<span>Home</span>
			</button>
		);
	};
	const NewPage = () => {
		return (
			<button className='mx-2' onClick={() => router.push("/newpage")}>
				<svg className='fill-current w-4 h-4'></svg>
				New Page
			</button>
		);
	};
	const NewPage2 = () => {
		return (
			<button className='mx-2' onClick={() => router.push("/newpage2")}>
				<svg className='fill-current w-4 h-4'></svg>
				New Page 2
			</button>
		);
	};

	return (
		<ul className='font-Pacifico'>
			<a className=''>
				<Home />
			</a>
			<a className=''>
				<TopRatedButton />
			</a>
			<a className=''>
				<NewPage />
			</a>
			<a className=''>
				<NewPage2 />
			</a>
		</ul>
	);
}
