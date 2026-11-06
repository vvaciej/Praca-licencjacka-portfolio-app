import { sanityClient } from './sanity';

export async function getSkills() {
  return sanityClient.fetch(`
    *[_type == "skill"] | order(order asc) {
      _id,
      title,
      icon,
      order
    }
  `)
}

export async function getProjects() {
	return sanityClient.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      liveUrl,
      githubUrl,
      image,
      imageAlt,
      order
    }
  `);
}

export async function getExperiences() {
	return sanityClient.fetch(`
    *[_type == "experience"] | order(order asc) {
      _id,
      companyFull,
      companyShort,
      position,
      "sectionId": sectionId.current,
      logo,
      alt,
      period,
      duties,
      order
    }
  `);
}

