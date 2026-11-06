import { SiJavascript, SiNextdotjs, SiHtml5, SiCss, SiReact, SiTypescript, SiGithub } from 'react-icons/si';

const SKILLS = [
	{ icon: <SiJavascript className='h-8 w-8 rounded-[3px]' />, title: 'Javascript' },
	{ icon: <SiNextdotjs className='h-8 w-8' />, title: 'Next.js' },
	{ icon: <SiHtml5 className='h-8 w-8' />, title: 'HTML' },
	{ icon: <SiCss className='h-8 w-8' />, title: 'CSS' },
	{ icon: <SiReact className='h-8 w-8' />, title: 'React' },
	{ icon: <SiTypescript className='h-8 w-8' />, title: 'Typescript' },
	{ icon: <SiGithub className='h-8 w-8' />, title: 'Github' },
];

export default function Skills() {
	return (
		<section id='skills_section' className='flex flex-col items-center min-[800px]:gap-y-7 min-[500px]:gap-y-5 gap-y-4'>
			<h3 className='uppercase tracking-[2px] font-semibold text-(--second-text-lighter-lighter) min-[500px]:text-sm text-[13px]' id='skills_section__main__section__text'>
				Umiejętności
			</h3>
			<div className='flex flex-wrap justify-center min-[800px]:gap-x-10 min-[500px]:gap-x-6 gap-y-4 gap-x-4'>
				{SKILLS.map((skill, index) => (
					<div key={index} title={skill.title} className='cursor-pointer transition-transform hover:scale-110'>
						{skill.icon}
					</div>
				))}
			</div>
		</section>
	);
}
