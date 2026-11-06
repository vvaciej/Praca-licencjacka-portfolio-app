import {defineType, defineField} from 'sanity'

// SKILLS
export const skillType = defineType({
  name: 'skill',
  title: 'Umiejętność',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nazwa technologii',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ikona',
      type: 'string',
      options: {
        list: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'Next.js', value: 'nextjs'},
          {title: 'HTML5', value: 'html5'},
          {title: 'CSS', value: 'css'},
          {title: 'React', value: 'react'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Git', value: 'git'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
    }),
  ],
})

// PROJECTS
export const projectType = defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nazwa projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'liveUrl',
      title: 'Link do strony',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'Link GitHub',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie projektu',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Opis zdjęcia',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
    }),
  ],
})

// EXPERIENCE
export const experienceType = defineType({
  name: 'experience',
  title: 'Doświadczenie zawodowe',
  type: 'document',
  fields: [
    defineField({
      name: 'companyFull',
      title: 'Pełna nazwa firmy',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyShort',
      title: 'Skrócona nazwa firmy',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Pełna nazwa stanowiska',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionId',
      title: 'ID sekcji',
      type: 'slug',
      options: {
        source: 'companyFull',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo firmy',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Opis logo',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Okres zatrudnienia',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duties',
      title: 'Obowiązki',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
    }),
  ],
})
