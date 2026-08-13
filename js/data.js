/**
 * FirstCommit — Site Content
 * Edit this file to update copy, prizes, timeline, and FAQ.
 */

export const siteConfig = {
  name: 'FirstCommit',
  tagline: 'Your First Commit Starts Here.',
  description:
    'A beginner-focused hackathon built for the next generation of developers. Learn, build, experiment, and ship something you\'re proud of.',
  registerUrl: '#register',
  meta: {
    title: 'FirstCommit — Beginner-Focused Coding Hackathon',
    description:
      'FirstCommit is a beginner-focused hackathon for ages 13–21. Learn by building, ship your first project, and showcase what you accomplished.',
    ogImage: '/assets/og-image.png',
    url: 'https://firstcommit.dev',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'FAQ', href: '#faq' },
];

export const aboutPoints = [
  {
    icon: 'users',
    title: 'Beginner-Focused',
    text: 'Designed for developers who are just getting started. No gatekeeping — just growth.',
  },
  {
    icon: 'calendar',
    title: 'Ages 13–21',
    text: 'Open to young builders who want to learn, experiment, and create something real.',
  },
  {
    icon: 'chart',
    title: 'Learning Matters',
    text: 'We celebrate progress and what you learned, not just polished final products.',
  },
  {
    icon: 'layers',
    title: 'Web or Mobile',
    text: 'Build the kind of project that excites you — websites, apps, tools, or experiments.',
  },
  {
    icon: 'team',
    title: 'Solo or Team',
    text: 'Work alone or collaborate with friends. Teams are welcome.',
  },
  {
    icon: 'spark',
    title: 'AI Tools Allowed',
    text: 'Use AI as a helper — but you should genuinely understand and contribute to your project.',
  },
  {
    icon: 'doc',
    title: 'Document Your Journey',
    text: 'Track your progress, iterations, and learning. Your story is part of the submission.',
  },
];

export const whyCards = [
  {
    title: 'Learn by Building',
    text: 'Skip the tutorials loop. Pick up real skills by making something you care about.',
    icon: 'build',
  },
  {
    title: 'Ship Your First Project',
    text: 'Go from idea to working product. Every participant leaves with something tangible.',
    icon: 'rocket',
  },
  {
    title: 'Meet Other Builders',
    text: 'Connect with peers who share your curiosity. Build friendships alongside projects.',
    icon: 'connect',
  },
  {
    title: 'Showcase Your Work',
    text: 'Present what you built and what you learned. Your work deserves to be seen.',
    icon: 'showcase',
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Register',
    text: 'Sign up and join the FirstCommit community of young builders.',
  },
  {
    step: 2,
    title: 'Get an Idea',
    text: 'Brainstorm a project you\'re excited about. Start small — you can always expand.',
  },
  {
    step: 3,
    title: 'Build',
    text: 'Turn your idea into reality. Web, mobile, tools — the choice is yours.',
  },
  {
    step: 4,
    title: 'Learn & Iterate',
    text: 'Hit roadblocks, learn, and improve. Document your progress along the way.',
  },
  {
    step: 5,
    title: 'Submit',
    text: 'Share your project, your story, and what you accomplished.',
  },
  {
    step: 6,
    title: 'Showcase',
    text: 'Present your work to judges and the community. Celebrate what you built.',
  },
];

export const prizes = [
  {
    name: 'First Commit Champion',
    description:
      'Awarded to the overall standout project that best embodies the spirit of FirstCommit — learning, building, and shipping.',
    highlight: true,
  },
  {
    name: 'Most Creative Project',
    description:
      'For the project with the most original idea, unexpected approach, or creative problem-solving.',
  },
  {
    name: 'Best Technical Achievement',
    description:
      'Recognizes impressive technical execution, clever implementation, or engineering skill for your level.',
  },
  {
    name: 'Best Web Experience',
    description:
      'For web projects that deliver an excellent user experience — fast, intuitive, and well-crafted.',
  },
  {
    name: 'Best Design',
    description:
      'Celebrates outstanding visual design, UX, and attention to detail in how the project looks and feels.',
  },
  {
    name: 'Most Ambitious Project',
    description:
      'For builders who reached for something big — even if they didn\'t finish everything, the ambition counts.',
  },
  {
    name: 'Biggest Learning Journey',
    description:
      'Honors the participant who grew the most — documented progress, pivots, and lessons learned matter here.',
  },
  {
    name: 'Most Polished Project',
    description:
      'For the project that feels complete, refined, and ready to share with the world.',
  },
  {
    name: 'Community Choice Award',
    description:
      'Voted on by fellow participants — the project the community loved most.',
  },
];

export const prizeNote =
  'Select awards include a free .xyz domain for one year, courtesy of our sponsor.';

export const sponsors = [
  {
    name: '.xyz',
    description: 'Domain sponsor — providing free .xyz domains for award winners.',
    logo: '/assets/sponsors/xyz-logo.svg',
    url: 'https://gen.xyz',
  },
];

export const timeline = [
  {
    date: 'TBD — Placeholder',
    title: 'Registration Opens',
    description: 'Sign up and secure your spot. Early registration helps us plan resources.',
    status: 'upcoming',
  },
  {
    date: 'TBD — Placeholder',
    title: 'Kickoff & Workshops',
    description: 'Official start with optional workshops to help you get going.',
    status: 'upcoming',
  },
  {
    date: 'TBD — Placeholder',
    title: 'Building Period',
    description: 'The main hackathon window. Build, learn, iterate, and document your progress.',
    status: 'upcoming',
  },
  {
    date: 'TBD — Placeholder',
    title: 'Submissions Due',
    description: 'Submit your project, documentation, and learning journey.',
    status: 'upcoming',
  },
  {
    date: 'TBD — Placeholder',
    title: 'Showcase & Awards',
    description: 'Present your work, celebrate achievements, and announce winners.',
    status: 'upcoming',
  },
];

export const faqItems = [
  {
    question: 'Who can participate?',
    answer:
      'FirstCommit is open to young developers ages 13–21. Whether you\'re writing your first line of code or have a few projects under your belt, you\'re welcome.',
  },
  {
    question: 'Do I need coding experience?',
    answer:
      'No prior experience is required. FirstCommit is beginner-focused — we care about your effort, learning, and progress more than your starting skill level.',
  },
  {
    question: 'Can I work with a team?',
    answer:
      'Absolutely. You can participate solo or form a team with friends. Just make sure everyone registers and contributes meaningfully to the project.',
  },
  {
    question: 'Can I use AI?',
    answer:
      'Yes, AI tools are allowed as assistants. However, you should genuinely understand and contribute to your project. Judges will look for authentic learning and ownership.',
  },
  {
    question: 'What can I build?',
    answer:
      'Web apps, mobile apps, tools, games, experiments — if you can build it and learn from it, it counts. Choose something you\'re excited about.',
  },
  {
    question: 'How are projects judged?',
    answer:
      'Projects are evaluated on learning and progress, creativity, technical execution, design, documentation, and overall effort — not just polish or complexity.',
  },
  {
    question: 'Do I need a GitHub repository?',
    answer:
      'A GitHub repo is recommended but not strictly required. What matters is that you can share your code and demonstrate your work. We\'ll provide submission details closer to the event.',
  },
  {
    question: 'What do I submit?',
    answer:
      'Your working project (or demo), a brief write-up of what you built, and documentation of your learning journey — including challenges, pivots, and what you\'d do next.',
  },
  {
    question: 'How does judging work?',
    answer:
      'A panel of judges reviews submissions across multiple award categories. The Community Choice Award is voted on by participants. Winners are announced during the showcase event.',
  },
];

export const socialLinks = [
  { label: 'Twitter / X', href: '#', icon: 'twitter' },
  { label: 'Discord', href: '#', icon: 'discord' },
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'Email', href: 'mailto:hello@firstcommit.dev', icon: 'email' },
];

export const footerDescription =
  'A beginner-focused coding hackathon for ages 13–21. Learn by building, ship your first project, and showcase what you accomplished.';
