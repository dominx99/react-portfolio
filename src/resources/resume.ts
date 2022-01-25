const baseResume = {
  languages: {
    title: 'Languages',
    items: [
      {
        title: 'Polish',
        subtitle: 'Native',
      },
      {
        title: 'English',
        subtitle: 'B1/B2',
      },
    ],
  },
  contact: {
    title: 'Contact',
    items: [
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/dominik-chylo',
      },
      {
        title: 'Github',
        link: 'https://github.com/dominx99',
      },
      {
        title: '54-060 Wrocław, Poland',
      },
      {
        title: 'dominikchylo@gmail.com',
      },
    ],
  },
  skills: {
    title: 'Skills',
    items: [
      {
        title: 'PHP',
        subtitle: 'Middle level',
        description: 'Good parts: pure function, higher-order functions, factory functions, composition. Bad parts: inheritance, this, new',
        items: ['Symfony', 'Slim Framework', 'Laravel'],
      },
      {
        title: 'Javascript',
        subtitle: 'Middle level',
        description: 'Good parts: pure function, higher-order functions, factory functions, composition. Bad parts: inheritance, this, new',
        items: ['ES6', 'React', 'Vue.js'],
      },
      {
        title: 'Other',
        items: ['Git', 'MySQL', 'SASS', 'HTML', 'CSS'],
      },
    ],
  },
  about: {
    title: 'About',
    items: [
      {
        title: 'PHP Developer',
        subtitle: 'Since 2016',
        description: 'I started my adventure with programming 5 years ago. Since then I learned a lot about Design Patterns.',
      }
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      {
        title: 'PHP Developer',
        subtitle: 'June 2021 - Present',
        description: `
          Worked with microservices, Cloud, PHP, Symfony, Vue.js.
          Maintained various amount of applications.
        `
      },
      {
        title: 'PHP Developer',
        subtitle: 'May 2018 - June 2021',
        description: `
          Designed REST APIs, worked on external system integrations.
          Maintained long term projects.
        `,
      },
    ]
  },
}

export {
  baseResume,
}
