export default function Header() {
	return (
		<header className='flex fixed top-0 z-30 h-17 w-full justify-center border-b border-[#252525] bg-[#1c1c1c]'>
			<div className='w-180'>
				<nav className='flex h-full w-full items-center justify-between text-xs'>
					<a href='./' className='cursor-pointer text-[0.95rem] font-semibold text-white'>
						logo
					</a>
					<ul className='flex gap-16 uppercase tracking-wider text-white'>
						<button className='cursor-pointer'>O mnie</button>
						<button className='cursor-pointer'>Projekty</button>
						<button className='cursor-pointer'>Doświadczenie</button>
						<button className='cursor-pointer'>Kontakt</button>
					</ul>
				</nav>
			</div>
		</header>
	);
}
