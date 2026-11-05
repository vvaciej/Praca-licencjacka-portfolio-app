import { Mail } from 'lucide-react';
import { FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='flex h-90 w-full items-center justify-center bg-[#191919]'>
			<section className='flex min-w-[800px]:h-2/3 h-full min-w-[800px]:w-170 flex-col px-7 py-14 justify-between text-white' id='kontakt'>
				<section>
					<h3 className='text-xl font-semibold'>Kontakt</h3>
				</section>
				<section className='flex flex-col gap-y-4 text-[13px]'>
					<p className='font-light text-[#C5C5C5]'>
						Początkujący Full Stack Developerem, a świat IT i nowych technologii to moja pasja i hobby. Interesuję się
						zarówno programowaniem, tworzeniem aplikacji internetowych, jak i testowaniem oraz rozwojem systemów
						informatycznych. Stale poszerzam swoją wiedzę, chętnie poznając nowe technologię i rozwiązania.
					</p>
					<div className='flex items-center'>
						<Mail className='h-4 pr-2' />
						<a className='font-semibold text-[#e0e0e0]' href='mailto:maciejskok2004@gmail.com'>
							maciejskok2004@gmail.com
						</a>
					</div>
				</section>
				<section className='flex gap-x-5'>
					<a href='https://github.com' target='_blank' rel='noopener noreferrer'>
						<FaGithub className='h-5 w-5 cursor-pointer hover:text-green-200 transition-colors' />
					</a>
					<a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
						<FaInstagram className='h-5 w-5 cursor-pointer hover:text-green-200 transition-colors' />
					</a>
				</section>
			</section>
		</footer>
	);
}
