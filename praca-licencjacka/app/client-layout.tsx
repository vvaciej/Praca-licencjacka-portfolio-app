'use client';

import { useState, useEffect, ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Sprawdzamy czy okno już jest załadowane (np. szybki powrót z cache)
		if (document.readyState === 'complete') {
			setIsLoaded(true);
		} else {
			const handleLoad = () => setIsLoaded(true);
			window.addEventListener('load', handleLoad);
			return () => window.removeEventListener('load', handleLoad);
		}
	}, []);

	return (
		<>
			{/* Ekran ładowania blokujący widok */}
			<div
				className={`fixed inset-0 z-50 flex items-center justify-center bg-[#101010] text-white transition-opacity duration-500 pointer-events-none ${
					isLoaded ? 'opacity-0' : 'opacity-100 pointer-events-auto'
				}`}>
				<div className='flex flex-col items-center gap-3'>
					{/* Prosty spinner CSS lub tekst */}
					<div className='w-8 h-8 border-2 border-neutral-600 border-t-white rounded-full animate-spin'></div>
					<p className='text-sm tracking-widest uppercase text-neutral-400'>Ładowanie...</p>
				</div>
			</div>

			{/* Właściwa zawartość strony z płynnym pojawieniem się */}
			<div
				className={`flex flex-col items-center bg-(--bg-color) transition-opacity duration-700 ${
					isLoaded ? 'opacity-100' : 'opacity-0'
				}`}>
				{children}
			</div>
		</>
	);
}
