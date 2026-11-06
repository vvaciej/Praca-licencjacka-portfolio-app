import Image from 'next/image';

const EXPERIENCES = [
	{
		logo: '/pobrane.png',
		alt: 'Logo PARP',
		titleFull: 'Stażysta w Polska Agencja Rozwoju Przedsiębiorczości',
		titleShort: 'Stażysta w PARP',
		period: 'Paźdz. 2026 - Obecnie',
		id: 'experience_section__PARP__experience',
		duties: [
			'Obsługa i praca z system CMS, w tym edycja oraz aktualizacja treści na stronach internetowych według odgórnych zgłoszeń.',
			'Udział w przygotowywaniu nowego systemu CMS do wdrożenia.',
			'Tworzenie i dokumentowanie scenariuszy oraz przypadków testowych (Test Cases).',
			'Praca z narzędziem TestLink w zakresie zarządzania przypadkami testowymi.',
			'Przygotowywanie scenariuszy testowych weryfikujących funkcjonalności nowego systemu CMS.',
			'Poznawanie funkcjonalności systemu oraz wspieranie procesu jego testowania przed wdrożeniem.',
			'Współpraca z zespołem marketingowym przy realizacji bieżących zadań i projektów.',
			'Udział w cotygodniowych spotkaniach zespołu dotyczących postępów prac, planowania i omawiania bieżących zadań.',
		],
	},
	{
		logo: '/images.jpg',
		alt: 'Logo netMachina',
		titleFull: 'Stażysta w netMachina',
		titleShort: 'Stażysta w netMachina',
		period: 'Sierp. 2026 - Wrzes. 2026',
		id: 'experience_section__netMachina__experience',
		duties: [
			'Tworzenie i rozwijanie funkcjonalnej strony internetowej z wykorzystaniem systemu CMS Drupal.',
			'Praca z systemem CRM oraz poznawanie jego funkcjonalności.',
			'Integracja warstwy frontendowej strony internetowej z systemem CRM.',
			'Konfiguracja i praca ze środowiskiem hostingowym Pantheon.',
			'Testowanie funkcjonalności strony internetowej oraz sprawdzanie poprawności działania połączenia z CRM.',
			'Praktyczne wykorzystanie technologii webowych w procesie tworzenia i wdrażania strony internetowej.',
		],
	},
];

export default function Experience() {
	return (
		<section className='flex flex-col gap-y-8 min-[800px]:gap-y-10 w-full' id='experience_section'>
			<h2 className='uppercase min-[800px]:text-2xl text-xl text-center font-black text-blue-300 tracking-wide'>
				Doświadczenie
			</h2>

			{EXPERIENCES.map((exp, index) => (
				<section key={index} className='flex w-full flex-col mb-7' id={exp.id}>
					<div className='flex flex-col gap-y-5'>
						<div className='flex min-[800px]:justify-between min-[800px]:flex-row flex-col items-center w-full'>
							<div className='flex min-[800px]:gap-x-4 gap-x-2 min-[800px]:mb-0 mb-2 items-center'>
								<Image src={exp.logo} title={exp.alt} alt={exp.alt} width={30} height={30} />
								<h2 className='font-semibold min-[800px]:block hidden'>{exp.titleFull}</h2>
								<h2 className='font-semibold min-[800px]:hidden block'>{exp.titleShort}</h2>
							</div>
							<span className='text-xs text-(--second-text)'>{exp.period}</span>
						</div>

						<ul className='list-disc list-inside text-[12.5px] text-(--second-text-lighter) min-[800px]:leading-6 flex flex-col min-[800px]:gap-y-2 gap-y-3'>
							{exp.duties.map((duty, dutyIdx) => (
								<li key={dutyIdx}>{duty}</li>
							))}
						</ul>
					</div>
				</section>
			))}
		</section>
	);
}
