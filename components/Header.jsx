import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
	return (
		<div className="w-full z-50 top-0 left-0 fixed bg-gray-100 shadow-lg backdrop-blur-md bg-opacity-40">
			<nav className="flex items-center px-6 max-w-7xl mx-auto sm:px-16 py-4 justify-between">
				{/* Left */}
				<div
					className="text-2xl font-semibold text-gray-700 cursor-pointer"
					onClick={() => router.push('/')}
				>
					<h1 className="md:hidden">
						T&nbsp;<span className="bold text-blue-500">B</span>
					</h1>
					<h1 className="hidden md:inline-block">
						Tiny&nbsp;<span className="text-blue-500">Bones</span>
					</h1>
				</div>
				{/* Right */}
				<div className="text-xl font-normal">
					<ul className="flex items-center space-x-6">
						<li
							className="cursor-pointer"
							onClick={() => router.push('/wallet')}
						>
							Wallet
						</li>
						<li className="font-normal border-2 border-blue-500 px-6 cursor-pointer text-gray-50 bg-blue-500 md:hover:bg-gray-50 md:hover:text-blue-500 transition-all duration-200 ease-out rounded-md py-2">
							Collect
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
