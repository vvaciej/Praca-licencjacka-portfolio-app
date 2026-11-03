import Image from 'next/image';

import { Mail } from 'lucide-react';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Home() {
	return (
		<div className='flex flex-col items-center bg-[#101010]'>
			<header className='flex justify-center h-17 border bg-[#1c1c1c] fixed w-full'>
				<div className='w-180'>
					<nav className='flex items-center w-full justify-between text-xs h-full'>
						<button className='text-[0.95rem] bold font-semibold text-white cursor-pointer'>logo</button>
						<ul className='flex gap-16 uppercase leading tracking-wider text-white'>
							<button className='cursor-pointer'>O mnie</button>
							<button className='cursor-pointer'>Projekty</button>
							<button className='cursor-pointer'>Doświadczenie</button>
							<button className='cursor-pointer'>Kontakt</button>
						</ul>
					</nav>
				</div>
			</header>
			<div className='flex flex-col items-center h-full w-170'>
				<main className='flex min-w-full min-h-full justify-center mt-16'>
					<div className='flex flex-col gap-y-16 items-center mt-12 w-full h-full text-white pb-18'>
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
								<button className='rounded-3xl px-5 py-3 text-black bg-white font-semibold'>Skontaktuj się</button>
								<button className='border-2 rounded-3xl px-5 py-2 font-semibold'>Pobierz CV</button>
							</section>
						</section>
						<section className='flex flex-col items-center gap-y-9'>
							<h3 className='uppercase tracking-[2px] font-semibold text-[#e8e9ea] text-sm'>Umięjetności</h3>
							<section className='flex gap-x-10'>
								<SiJavascript className='h-8 w-8 rounded-[3px]' />
								<SiNextdotjs className='h-8 w-8' />
								<SiHtml5 className='h-8 w-8' />
								<SiCss className='h-8 w-8' />
								<SiReact className='h-8 w-8' />
								<SiTypescript className='h-8 w-8' />
							</section>
						</section>
						<section className='flex flex-col items-center gap-y-3 w-full'>
							<h2 className='uppercase text-2xl font-black text-orange-300'>Projekty</h2>
							<section className='flex gap-x-6 w-full h-50'>
								<div className='rounded-2xl w-full'>
									<section className='bg-white w-full h-3/4'></section>
									<section className='px-4 pt-0.5 bg-[#252525] h-1/4 rounded-b-2xl'>
										<span className='text-[9px] uppercase font-semibold text-[#8491A0]'>Kliknij żeby zobaczyć</span>
										<h3 className='uppercase text-sm font-bold leading-2.5'>Strona psycholożki</h3>
									</section>
								</div>

								<div className='rounded-2xl w-full'>
									<section className='bg-white w-full h-3/4'></section>
									<section className='px-4 pt-0.5 bg-[#252525] h-1/4 rounded-b-2xl'>
										<span className='text-[9px] uppercase font-semibold text-[#8491A0]'>Kliknij żeby zobaczyć</span>
										<h3 className='uppercase text-sm font-bold leading-2.5'>Javascript quiz</h3>
									</section>
								</div>
							</section>
						</section>
						<section className='flex flex-col gap-y-3 w-full'>
							<h2 className='uppercase text-2xl text-center font-black text-blue-300 tracking-wide'>Doświadczenie</h2>
							<section className='flex w-full flex-col gap-y-6'>
								<div className='flex flex-col gap-y-5 mt-10'>
									<section className='flex justify-between items-center w-full'>
										<section className='flex gap-x-4 items-center'>
											<Image src={'/pobrane.png'} alt='Logo PARP' width={30} height={30} />
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
											<Image src={'/images.jpg'} alt='Logo PARP' width={30} height={30} />
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
			<footer className='w-full h-90 bg-[#191919] flex items-center justify-center'>
				<div className='h-4/9 text-white flex flex-col justify-between w-170'>
					<section>
						<h3 className='text-xl font-semibold'>Kontakt</h3>
					</section>
					<section className='flex flex-col gap-y-3 text-[13px]'>
						<p className='text-[#C5C5C5] font-light'>rewfwffw efw fewfwffe</p>
						<div className='flex items-center gap-1'>
							<Mail className='h-4' />
							<a className='font-semibold text-[#e0e0e0]' href='mailto:maciejskok2004@gmail,com'>maciejskok2004@gmail.com</a>
						</div>
					</section>
					<section className='flex gap-x-5'>
						<FaInstagram className='h-5 w-5 cursor-pointer' />
						<FaGithub className='h-5 w-5 cursor-pointer'/>
					</section>
				</div>
			</footer>
		</div>
	);
}
