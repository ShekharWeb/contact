import Footer from '../components/Footer';
import Header from '../components/Header';
import WalletComponent from '../components/Wallet.component';

const Wallet = () => {
	return (
		<div>
			<div className="h-24">
				<Header />
			</div>
			<main style={{ minHeight: 'calc(100vh - 144px)' }}>
				<WalletComponent />
			</main>
			<Footer />
		</div>
	);
};

export default Wallet;
