import Image from 'next/image';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

import { SiJavascript, SiNextdotjs, SiHtml5, SiCss, SiReact, SiTypescript, SiGithub } from 'react-icons/si';

export default function Home() {
	return (
		<div className='flex flex-col items-center bg-[#101010]'>
			<Header />

			<div className='flex flex-col items-center h-full min-[800px]:w-170 w-full min-[800px]:px-0 min-[350px]:px-8 px-5 '>
				<main className='flex min-w-full min-h-full justify-center mt-16'>
					<div className='flex flex-col min-[500px]:gap-y-16 gap-y-14 items-center min-[800px]:mt-12 mt-8 w-full h-full text-white pb-18'>
						{/* Sekcja Hero */}
						<section className='flex flex-col items-center text-center min-[800px]:gap-y-7 min-[450px]:gap-y-5 gap-y-4 min-[800px]:w-3/4'>
							<Image
								className='mix-blend-screen object-contain'
								src='/memoji.png'
								alt='memoji-maciej-skokowski'
								width={150}
								height={150}
							/>
							<h1 className='min-[800px]:text-4xl min-[420px]:text-3xl text-2xl font-black text-white'>
								Portfolio
								<br />
								<span className='min-[500px]:inline hidden'>dev{' '}</span>
								<span className='bg-gradient-to-r from-sky-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent'>
									Maciej Skokowski
								</span>
							</h1>
							<p className='h-full min-[500px]:text-sm text-[12.5px] text-[#8491A0]'>
								Junior Full-Stack Developer z praktycznym doświadczeniem w projektach IT. Specjalizuję się w tworzeniu
								nowoczesnych aplikacji w oparciu o React i Next.js.
							</p>
							<section className='flex gap-x-4'>
								<a
									href='tel:795369308'
									className='group relative isolate inline-block overflow-hidden rounded-3xl border-2 border-white min-[500px]:px-4 min-[500px]:py-3 px-2 font-semibold text-black bg-white transition-all duration-300 min-[800px]:hover:scale-105 min-[500px]:text-md text-sm py-3.5'>
									<span className='absolute inset-0 -z-10 ' />
									+48 795369308
								</a>
								<a
									href=''
									download=''
									className='group relative isolate inline-block overflow-hidden rounded-3xl border-2 border-white min-[500px]:px-5 px-4 min-[500px]:py-3 py-3.5 min-[500px]:text-md text-sm font-semibold text-white transition-colors duration-300 hover:text-black'>
									<span className='absolute inset-0 -z-10 bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100' />
									Pobierz CV
								</a>
							</section>
						</section>

						{/* Sekcja Umiejętności */}
						<section className='flex flex-col items-center min-[800px]:gap-y-7 min-[500px]:gap-y-5 gap-y-4'>
							<h3 className='uppercase tracking-[2px] font-semibold text-[#e8e9ea] min-[500px]:text-sm text-[13px]'>Umięjetności</h3>
							<section className='flex flex-wrap justify-center min-[800px]:gap-x-10 min-[500px]:gap-x-6 gap-y-4 gap-x-4'>
								<SiJavascript className='h-8 w-8 rounded-[3px]' title='Javascript' />
								<SiNextdotjs className='h-8 w-8' title='Next.js' />
								<SiHtml5 className='h-8 w-8' title='HTML' />
								<SiCss className='h-8 w-8' title='CSS' />
								<SiReact className='h-8 w-8' title='React' />
								<SiTypescript className='h-8 w-8' title='Typescript' />
								<SiGithub className='h-8 w-8' title='Github' />
							</section>
						</section>

						{/* Sekcja Projekty */}
						<section className='flex flex-col items-center min-[500px]:gap-y-7 gap-y-5 w-full' id='projekty'>
							<h2 className='uppercase min-[800px]:text-2xl text-xl font-black text-orange-300'>Projekty</h2>
							<section className='w-full h-max rounded-2xl p-0.5 shadow-lg'>
								<a
									href='https://martamoszko.pl'
									target='_blank'
									rel='noopener noreferrer'
									className='relative rounded-2xl w-full inline-block transition-transform duration-300 ease-in-out hover:scale-[101%] hover:z-20'>
									<section className='bg-white w-full h-3/4 z-10 relative overflow-hidden rounded-t-2xl'>
										<div className='relative w-full aspect-video overflow-hidden rounded-t-2xl'>
											<Image
												src='/martamoszkostrona.png'
												alt='strona-psycholożki-podgląd'
												fill
												sizes='(max-width: 1200px) 100vw, 1200px'
												quality={100}
												className='object-cover object-top'
											/>
										</div>
									</section>
									<section className='relative flex justify-between items-center w-full min-[400px]:px-4 px-3 bg-[#252525] h-max rounded-b-2xl z-20 pt-3 pb-3'>
										<section className='flex flex-col'>
											<span className='text-[9px] uppercase font-semibold text-[#8491A0]'>Kliknij żeby zobaczyć</span>
											<h3 className='uppercase text-sm font-bold leading-2.5'>Strona psycholożki</h3>
										</section>
										<section className='flex items-center gap-x-3'>
											<p className='text-[9px] tracking-wide uppercase font-semibold text-[#8491A0] min-[450px]:block hidden'>
												Podgląd kodu {'\u2192'}
											</p>
											<a href='https://github.com/vvaciej/Marta-Psycholog' target='_blank'>
												{' '}
												<SiGithub className='h-7 w-7 cursor-pointer hover:text-green-200 transition-colors' />
											</a>
										</section>
									</section>
								</a>
							</section>
						</section>

						{/* Sekcja Doświadczenie */}
						<section className='flex flex-col min-[500px]:gap-y-3 gap-y-0 w-full' id='doswiadczenie'>
							<h2 className='uppercase min-[800px]:text-2xl text-xl text-center font-black text-blue-300 tracking-wide'>
								Doświadczenie
							</h2>

							<section className='flex w-full flex-col gap-y-6'>
								<div className='flex flex-col gap-y-5 mt-10'>
									<section className='flex min-[800px]:justify-between min-[800px]:flex-row flex-col items-center w-full'>
										<section className='flex min-[800px]:gap-x-4 gap-x-2 min-[800px]:mb-0 mb-2 items-center'>
											<Image src={'/pobrane.png'} title='PARP-logo' alt='Logo PARP' width={30} height={30} />
											<h2 className='font-semibold min-[800px]:block hidden'>
												Stażysta w Polska Agencja Rozwoju Przedsiębiorczości
											</h2>
											<h2 className='font-semibold min-[800px]:hidden block'>Stażysta w PARP</h2>
										</section>
										<span className='text-xs text-[#8491A0]'>Paźdz. 2026 - Obecnie</span>
									</section>
									<p className='text-[12.5px] text-[#8491A0] min-[800px]:leading-6 flex flex-col gap-y-2'>
										<li>
											Obsługa i praca z system CMS, w tym edycja oraz aktualizacja treść na stronach intenetowych według
											odgórnych zgłoszeń
										</li>
										<li>Udział w przygotwywaniu nowego systemu CMS do wdrożenia</li>
										<li>Tworzenie i dokumentowanie scenariuszy oraz przypadków testowych (Test Cases)</li>
										<li>Praca z narzędziem TestLink w zakresie zarządzania przypadkami testowymi</li>
										<li>Przygotowywanie scenariuszy testowych weryfikujących funkcjonalności nowego systemu CMS</li>
										<li>Poznawanie funkcjonalności systemu oraz wspieranie procesu jego testowania przed wdrożeniem</li>
										<li>Współpraca z zespołem marketingowym przy realizacji bieżących zadań i projektów</li>
										<li>
											Udział w cotygowniowym spotkaniach zespołu dotyczących postępów prac, planowania i omawiania
											bieżących zadań i projektów
										</li>
									</p>
								</div>
							</section>

							<section className='flex w-full flex-col gap-y-6'>
								<div className='flex flex-col gap-y-5 mt-10 '>
									<section className='flex min-[800px]:justify-between min-[800px]:flex-row flex-col justify-between items-center w-full'>
										<section className='flex items-center min-[800px]:gap-x-4 gap-x-2 min-[800px]:mb-0 mb-2'>
											<Image src={'/images.jpg'} alt='Logo netMachina' width={30} height={30} />
											<h2 className='font-semibold'>Stażysta w netMachina</h2>
										</section>
										<span className='text-xs text-[#8491A0]'>Sierp. 2026 - Wrzes. 2026</span>
									</section>
									<p className='text-[12.5px] text-[#8491A0] min-[800px]:leading-6 flex flex-col gap-y-2'>
										<li>
											Tworzenie i rozwijanie funkcjonalnej strony internetowej z wykorzystaniem systemu CMS Drupal
										</li>
										<li>Praca z system CRM oraz poznawanie jego funkcjonalności</li>
										<li>Integracja warstwy frontendowej strony internetowej z system CRM</li>
										<li>Konfiguracja i praca ze środowiskiem hostingowym Pantheon</li>
										<li>
											Testowanie funkcjonalności strony internetowej oraz sprawdzanie poprawności działania połączenia z
											CRM
										</li>
										<li>
											Praktyczne wykorzystanie technologii webowych w procesie tworzenia i wdrażania strony internetowej
										</li>
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
