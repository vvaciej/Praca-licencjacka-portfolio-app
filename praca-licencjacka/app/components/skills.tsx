import { Suspense } from 'react';
import { SiJavascript, SiNextdotjs, SiHtml5, SiCss, SiReact, SiTypescript, SiGithub } from 'react-icons/si';

import { getSkills } from '../lib/queries';

const ICONS = {
	javascript: SiJavascript,
	nextjs: SiNextdotjs,
	html5: SiHtml5,
	css: SiCss,
	react: SiReact,
	typescript: SiTypescript,
	git: SiGithub,
};

async function SkillsContent() {
	const skills = await getSkills();

	return (
		<section id='skills_section' className='flex flex-col items-center min-[800px]:gap-y-7 min-[500px]:gap-y-5 gap-y-4'>
			<h3
				className='uppercase tracking-[2px] font-semibold text-(--second-text-lighter-lighter) min-[500px]:text-sm text-[13px]'
				id='skills_section__main__section__text'>
				Umiejętności
			</h3>

			<div className='flex flex-wrap justify-center min-[800px]:gap-x-10 min-[500px]:gap-x-6 gap-y-4 gap-x-4'>
				{skills.map((skill: { _id: string; title: string; icon: keyof typeof ICONS }) => {
					const Icon = ICONS[skill.icon];

					if (!Icon) return null;

					return (
						<div key={skill._id} title={skill.title} className='cursor-pointer transition-transform hover:scale-110'>
							<Icon className='h-8 w-8' />
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default function Skills() {
	return (
		<Suspense fallback={<p>Ładowanie umiejętności...</p>}>
			<SkillsContent />
		</Suspense>
	);
}
