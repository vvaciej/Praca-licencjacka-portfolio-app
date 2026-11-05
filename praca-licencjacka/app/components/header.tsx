'use client'

export default function Header() {
	const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

	return (
		<header className='flex fixed top-0 z-30 h-17 w-full justify-center border-b border-[#252525] bg-[#1c1c1c]'>
			<div className='min-[800px]:w-180 w-max'>
				<nav className='flex h-full w-full items-center justify-between text-xs'>
					<a
						href='./'
						className='cursor-pointer font-[family-name:var(--font-mr-dafoe)] text-xl text-white text-center leading-[18px]'>
						Skokowski
					</a>
					<ul className='gap-16 uppercase tracking-wider text-white min-[800px]:flex hidden'>
						<button
							onClick={() => scrollToSection('projekty')}
							className='cursor-pointer hover:text-sky-300 transition-colors'>
							Projekty
						</button>
						<button
							onClick={() => scrollToSection('doswiadczenie')}
							className='cursor-pointer hover:text-sky-300 transition-colors'>
							Doświadczenie
						</button>
						<button
							onClick={() => scrollToSection('kontakt')}
							className='cursor-pointer hover:text-sky-300 transition-colors'>
							Kontakt
						</button>
					</ul>
				</nav>
			</div>
		</header>
	);
}
