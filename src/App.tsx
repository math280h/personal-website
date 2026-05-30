import { Backdrop } from './components/Backdrop';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';

export default function App() {
	return (
		<>
			<Backdrop />
			<Nav />
			<main>
				<Hero />
				<Projects />
				<Gallery />
			</main>
			<Footer />
		</>
	);
}
