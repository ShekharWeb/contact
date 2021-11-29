const WalletComponent = () => {
	return (
		<div>
			<div className="max-w-7xl space-y-6 px-6 sm:px-16 mx-auto py-8">
				<h3 className="text-3xl font-bold">Wallet.</h3>
				<div className="space-y-4 max-w-3xl text-gray-700">
					<p className="text-xl">
						Check out all your tiny bones here. Including traits and
						rarity!
					</p>
					<button className="bg-gray-700 text-gray-100 px-8 py-4 rounded-sm text-2xl">
						Claim Rewards
					</button>
				</div>
			</div>
		</div>
	);
};

export default WalletComponent;
