import type { Metadata } from 'next';
import { Poppins, Geist_Mono, Mr_Dafoe } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const mrDafoe = Mr_Dafoe({
	variable: '--font-mr-dafoe',
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Portfolio Sanity & Next.js app',
	description: 'Portfolio jako projekt pod prace licencjacką frontend z cms',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pl' className={`${poppins.variable} ${geistMono.variable} ${mrDafoe.variable} h-full antialiased`}>
			<head>
				<meta name='theme-color' content='#191919' />
			</head>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	);
}
