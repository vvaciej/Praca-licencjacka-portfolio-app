import Header from '@/app/components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/expierence';
import Footer from '@/app/components/footer';

export default function Home() {
	return (
		<div className='flex flex-col items-center bg-(--bg-color)'>
			{/* Sekcja Header */}
			<Header />

			<div className='flex flex-col items-center h-full min-[800px]:w-170 w-full min-[800px]:px-0 min-[350px]:px-8 px-5 '>
				<main className='flex min-w-full min-h-full justify-center mt-16'>
					<div className='flex flex-col min-[500px]:gap-y-16 gap-y-14 items-center min-[800px]:mt-12 mt-8 w-full h-full text-white pb-18'>
						{/* Sekcja Hero */}
						<Hero />

						{/* Sekcja Umiejętności */}
						<Skills />

						{/* Sekcja Projekty */}
						<Projects />

						{/* Sekcja Doświadczenia */}
						<Experience />
					</div>
				</main>
			</div>

			{/* Sekcja Footer */}
			<Footer />
		</div>
	);
}
