import Head from 'next/head';
import Footer from '../components/Footer';
import Gravetown from '../components/Gravetown';
import Header from '../components/Header';
import Main from '../components/Main';
import Qna from '../components/Qna';
import Rarity from '../components/Rarity';
import Roadmap from '../components/Roadmap';
import Tokenomics from '../components/Tokenomics';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="h-24">
				<Header />
			</div>
			<main>
				<Main />
				<Contact />
				<Contact />
				<Rarity />
				<Gravetown />
				<Tokenomics />
				<Roadmap />
				<Qna />
			</main>
			<Footer />
		</div>
	);
}
