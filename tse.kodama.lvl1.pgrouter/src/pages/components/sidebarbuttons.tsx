import { useRouter } from "next/router";
export default function SideButtons() {
	const router = useRouter();
	const TopRatedButton = () => {
		return (
			<button
				className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
				onClick={() => router.push("top-rated")}>
				<svg className='fill-current w-4 h-4'></svg>
				<span>Top Rated</span>
			</button>
		);
	};
	const NowPlayingButton = () => {
		return (
			<button
				className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
				onClick={() => router.push("/")}>
				<svg className='fill-current w-4 h-4'></svg>
				<span>Top Rated</span>
			</button>
		);
	};

	return (
		<div>
			<TopRatedButton />
			<NowPlayingButton />
		</div>
	);
}
