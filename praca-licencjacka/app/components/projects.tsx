'use client';

import Image from 'next/image';
import { SiGithub } from 'react-icons/si';

const PROJECTS = [
	{
		title: 'Strona psycholożki',
		liveUrl: 'https://martamoszko.pl',
		githubUrl: 'https://github.com/vvaciej/Marta-Psycholog',
		imageSrc: '/martamoszkostrona.png',
		imageAlt: 'strona-psycholożki-podgląd',
		projectId: 'project_section__marta__moszko__id' 
	},
];

export default function Projects() {
	return (
		<section className='flex flex-col items-center min-[500px]:gap-y-7 gap-y-5 w-full' id='projects_section'>
			<h2 className='uppercase min-[800px]:text-2xl text-xl font-black text-orange-300' id='projects_section__main__section__text'>Projekty</h2>

			<div className='flex flex-col gap-y-6 w-full'>
				{PROJECTS.map((project, index) => (
					<div key={index} className='w-full h-max rounded-2xl p-0.5 shadow-lg' id={project.projectId}>
						<a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='relative rounded-2xl w-full inline-block transition-transform duration-300 ease-in-out hover:scale-[101%] hover:z-20'>
							<div className='bg-white w-full h-3/4 z-10 relative overflow-hidden rounded-t-2xl'>
								<div className='relative w-full aspect-video overflow-hidden rounded-t-2xl'>
									<Image
										src={project.imageSrc}
										alt={project.imageAlt}
										fill
										sizes='(max-width: 1200px) 100vw, 1200px'
										quality={100}
										className='object-cover object-top'
									/>
								</div>
							</div>

							<div className='relative flex justify-between items-center w-full min-[400px]:px-4 px-3 bg-[#252525] h-max rounded-b-2xl z-20 pt-3 pb-3'>
								<div className='flex flex-col'>
									<span className='text-[9px] uppercase font-semibold text-[#8491A0]'>Kliknij żeby zobaczyć</span>
									<h3 className='uppercase text-sm font-bold leading-2.5'>{project.title}</h3>
								</div>

								<div className='flex items-center gap-x-3'>
									<p className='text-[9px] tracking-wide uppercase font-semibold text-[#8491A0] min-[450px]:block hidden'>
										Podgląd kodu {'\u2192'}
									</p>
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										onClick={e => e.stopPropagation()}
									>
										<SiGithub className='h-7 w-7 cursor-pointer hover:text-green-200 transition-colors' />
									</a>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}
