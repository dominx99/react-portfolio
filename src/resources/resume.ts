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
        items: ['Symfony', 'Slim Framework', 'Laravel', 'Redis'],
      },
      {
        title: 'Javascript',
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
        subtitle: 'Since 2017',
        description:
          'I started my adventure with programming 6 years ago. In my daily work, I put a lot of focus on that my code at the end of the day is easy to read, testable, and well organized. Lately, I develop my skills in DDD, TDD, Hexagonal Infrastructure, and Design Patterns.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        title: 'PHP Developer',
        subtitle: 'June 2021 - Present',
        description: `
          Worked with microservices, AWS, PHP, Symfony, and Redis.
          Maintained various SaaS integrations, mostly with push notifications and newsletters.
          Learned how to manage a huge amount of data.
        `,
        skills: ['Symfony', 'Redis', 'AWS', 'Docker'],
      },
      {
        title: 'PHP Developer',
        subtitle: 'May 2018 - June 2021',
        description: `
          REST APIs, and integrations between various systems.
          Maintained an already working e-commerce system.
        `,
        skills: ['React', 'Vue.js', 'Laravel', 'Symfony', 'Docker'],
      },
      {
        title: 'Freelance PHP Developer',
        subtitle: 'May 2017 - May 2018',
        description: `
          Landpages, CMS websites
        `,
        skills: ['Slim Framework', 'Javascript'],
      },
    ],
  },
  interests: {
    title: 'Interests',
    items: [
      {
        description: "I like to solve Rubik's cube",
      },
    ],
  },
};

export { baseResume };
