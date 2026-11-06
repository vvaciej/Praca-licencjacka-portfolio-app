import Image from 'next/image';

export default function Hero() {
	return (
		<section
			id='hero_section'
			className='flex flex-col items-center text-center min-[800px]:gap-y-7 min-[450px]:gap-y-5 gap-y-4 min-[800px]:w-3/4'>
			<Image id='hero_section__hero__image__memoji'
				className='mix-blend-screen object-contain'
				src='/memoji.png'
				alt='memoji-maciej-skokowski'
				width={150}
				height={150}
			/>
			<h1 className='min-[800px]:text-4xl min-[420px]:text-3xl text-2xl font-black text-white' id='hero_section__main__text'>
				Portfolio
				<br />
				<span className='min-[500px]:inline hidden'>dev </span>
				<span className='bg-gradient-to-r from-sky-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent'>
					Maciej Skokowski
				</span>
			</h1>
			<p className='h-full min-[500px]:text-sm text-[12.5px] text-(--second-text)' id='hero_section__bio'>
				Junior Full-Stack Developer z praktycznym doświadczeniem w projektach IT. Specjalizuję się w tworzeniu
				nowoczesnych aplikacji w oparciu o React i Next.js.
			</p>
			<section className='flex gap-x-4'>
				<a
					href='tel:795369308'
					id='hero_section__calling__button'
					className='group relative isolate inline-block overflow-hidden rounded-3xl border-2 border-white min-[500px]:px-4 min-[500px]:py-3 px-2 font-semibold text-black bg-white transition-all duration-300 min-[800px]:hover:scale-105 min-[500px]:text-md text-sm py-3.5'>
					<span className='absolute inset-0 -z-10 ' />
					+48 795369308
				</a>
				<a
					href=''
					download=''
					id='hero_section__download__cv__button'
					className='group relative isolate inline-block overflow-hidden rounded-3xl border-2 border-white min-[500px]:px-5 px-4 min-[500px]:py-3 py-3.5 min-[500px]:text-md text-sm font-semibold text-white transition-colors duration-300 hover:text-black'>
					<span className='absolute inset-0 -z-10 bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100' />
					Pobierz CV
				</a>
			</section>
		</section>
	);
}
