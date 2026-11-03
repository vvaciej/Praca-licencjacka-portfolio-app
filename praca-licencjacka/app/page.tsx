import Image from 'next/image';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

import { SiJavascript, SiNextdotjs, SiHtml5, SiCss, SiReact, SiTypescript } from 'react-icons/si';

export default function Home() {
	return (
		<div className='flex flex-col items-center bg-[#101010]'>
			<Header />

			<div className='flex flex-col items-center h-full w-170'>
				<main className='flex min-w-full min-h-full justify-center mt-16'>
					<div className='flex flex-col gap-y-16 items-center mt-12 w-full h-full text-white pb-18'>
						{/* Sekcja Hero */}
						<section className='flex flex-col items-center text-center gap-y-7 w-3/4'>
							<div className=''>jakies logo</div>
							<h1 className='text-4xl font-black'>
								Portfolio
								<br />
								dev <span className='text-green-200'>Maciej Skokowski</span>
							</h1>
							<p className='h-full text-sm text-[#8491A0]'>
								Junior Full-Stack Developer z praktycznym doświadczeniem w projektach IT. Specjalizuję się w tworzeniu
								nowoczesnych aplikacji w oparciu o React i Next.js.
							</p>
							<section className='flex gap-x-4'>
								<a
									href='mailto:maciejskok2004@gmail.com'
									className='rounded-3xl px-5 py-3 text-black bg-white font-semibold'>
									Skontaktuj się
								</a>
								<a href='' download='' className='border-2 rounded-3xl px-5 py-2.5 font-semibold'>
									Pobierz CV
								</a>
							</section>
						</section>

						{/* Sekcja Umiejętności */}
						<section className='flex flex-col items-center gap-y-7'>
							<h3 className='uppercase tracking-[2px] font-semibold text-[#e8e9ea] text-sm'>Umięjetności</h3>
							<section className='flex gap-x-10'>
								<SiJavascript className='h-8 w-8 rounded-[3px]' title='Javascript' />
								<SiNextdotjs className='h-8 w-8' title='Next.js' />
								<SiHtml5 className='h-8 w-8' title='HTML' />
								<SiCss className='h-8 w-8' title='CSS' />
								<SiReact className='h-8 w-8' title='React' />
								<SiTypescript className='h-8 w-8' title='Typescript' />
							</section>
						</section>

						{/* Sekcja Projekty */}
						<section className='flex flex-col items-center gap-y-3 w-full'>
							<h2 className='uppercase text-2xl font-black text-orange-300'>Projekty</h2>
							<section className='flex gap-x-6 w-full h-50'>
								<a
									href='https://martamoszko.pl'
									target='_blank'
									rel='noopener noreferrer'
									className='relative rounded-2xl w-full inline-block transition-transform duration-300 ease-in-out hover:scale-105 hover:z-20'>
									<section className='bg-white w-full h-3/4 z-10 relative overflow-hidden rounded-t-2xl'>
										<Image
											src={'/martamoszkostrona.png'}
											alt='strona-psycholożki-podgląd'
											width={500}
											height={500}
											className='w-full h-full object-cover'
										/>
									</section>
									<section className='relative px-4 pt-0.5 bg-[#252525] h-1/4 rounded-b-2xl z-20'>
										<span className='text-[9px] uppercase font-semibold text-[#8491A0]'>Kliknij żeby zobaczyć</span>
										<h3 className='uppercase text-sm font-bold leading-2.5'>Strona psycholożki</h3>
									</section>
								</a>

								<a
									href='https://martamoszko.pl'
									target='_blank'
									rel='noopener noreferrer'
									className='relative rounded-2xl w-full inline-block transition-transform duration-300 ease-in-out hover:scale-105 hover:z-20'>
									<section className='bg-white w-full h-3/4 z-10 relative overflow-hidden rounded-t-2xl'></section>
									<section className='relative px-4 pt-0.5 bg-[#252525] h-1/4 rounded-b-2xl z-20'>
										<span className='text-[9px] uppercase font-semibold text-[#8491A0]'>Kliknij żeby zobaczyć</span>
										<h3 className='uppercase text-sm font-bold leading-2.5'>Javascript quiz</h3>
									</section>
								</a>
							</section>
						</section>

						{/* Sekcja Doświadczenie */}
						<section className='flex flex-col gap-y-3 w-full'>
							<h2 className='uppercase text-2xl text-center font-black text-blue-300 tracking-wide'>Doświadczenie</h2>

							<section className='flex w-full flex-col gap-y-6'>
								<div className='flex flex-col gap-y-5 mt-10'>
									<section className='flex justify-between items-center w-full'>
										<section className='flex gap-x-4 items-center'>
											<Image src={'/pobrane.png'} title='PARP-logo' alt='Logo PARP' width={30} height={30} />
											<h2 className='font-semibold'>Stażysta w Polska Agencja Rozwoju Przedsiębiorczości</h2>
										</section>
										<span className='text-xs text-[#8491A0]'>Paźdz. 2026 - Obecnie</span>
									</section>
									<p className='text-xs text-[#8491A0]'>
										Jako stażysta brałem udział w realnych projektach jdjjdjdjdjdjdjdj jdj djd jddjdjd jdjdj djdjdjddj
										djd jdjdjdjddj djdjdj wef w f ef w f f wew we fwf ewew fwe we fwe fwef few we we wfe fwe fwe fwe fwe
										we we fwe we fwe fwe fwewfe e fwefw e fwe wef efe ef wef f ew efwf ew efw efwf ew fwe few few w fwe
									</p>
								</div>
							</section>

							<section className='flex w-full flex-col gap-y-6'>
								<div className='flex flex-col gap-y-5 mt-10'>
									<section className='flex justify-between items-center w-full'>
										<section className='flex gap-x-4 items-center'>
											<Image src={'/images.jpg'} alt='Logo netMachina' width={30} height={30} />
											<h2 className='font-semibold'>Stażysta w netMachina</h2>
										</section>
										<span className='text-xs text-[#8491A0]'>Sierp. 2026 - Wrzes. 2026</span>
									</section>
									<p className='text-xs text-[#8491A0]'>
										Jako stażysta brałem udział w realnych projektach jdjjdjdjdjdjdjdj jdj djd jddjdjd jdjdj djdjdjddj
										djd jdjdjdjddj djdjdj wef w f ef w f f wew we fwf ewew fwe we fwe fwef few we we wfe fwe fwe fwe fwe
										we we fwe we fwe fwe fwewfe e fwefw e fwe wef efe ef wef f ew efwf ew efw efwf ew fwe few few w fwe
									</p>
								</div>
							</section>
						</section>
					</div>
				</main>
			</div>

			<Footer />
		</div>
	);
}
