'use client';

export default function Header() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header
			id='header_section'
			className='flex fixed top-0 z-30 h-17 w-full justify-center border-b border-[#252525] bg-(--header-bg-color)'>
			<div className='min-[800px]:w-180 w-max'>
				<nav className='flex h-full w-full items-center justify-between text-xs'>
					<a
						href='./'
						id="header_section__home__button"
						className='cursor-pointer font-(family-name:--font-mr-dafoe) text-xl text-white text-center leading-4.5'>
						Skokowski
					</a>
					<ul className='gap-16 uppercase tracking-wider text-white min-[800px]:flex hidden'>
						<button
							id='header_section__projects__nav__button'
							onClick={() => scrollToSection('projects_section')}
							className='cursor-pointer hover:text-sky-300 transition-colors'>
							Projekty
						</button>
						<button
							id='experience_section__projects__nav__button'
							onClick={() => scrollToSection('experience_section')}
							className='cursor-pointer hover:text-sky-300 transition-colors'>
							Doświadczenie
						</button>
						<button
							id='contact_section__projects__nav__button'
							onClick={() => scrollToSection('contact_section')}
							className='cursor-pointer hover:text-sky-300 transition-colors'>
							Kontakt
						</button>
					</ul>
				</nav>
			</div>
		</header>
	);
}
