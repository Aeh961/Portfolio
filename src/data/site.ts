import type { SiteContent } from '../types/content'

export const site: SiteContent = {
  name: 'Abdallah El Hamawi',
  roleTags: ['Software Engineer', 'AI Engineer', 'Researcher', 'Reinforcement Learning Engineer'],
  heroHeadline:
    'Software Engineer building AI-powered products, intelligent systems, and modern applications.',
  heroSubheadline:
    "I like problems that don't have a clean answer yet — getting a language model to run on a phone, teaching a small car to drive itself, building software that people other than me actually open twice.",
  aboutParagraphs: [
    "Most of what I build sits at the intersection of AI and something physical or personal: a music model that has to fit inside a phone's memory limits, a race car that has to learn to steer itself, an app that has to work when there's no signal at the lake. I like that constraint. Anyone can make a demo; making something survive contact with real hardware and real users is the actual job.",
    "Right now that means research at Boston University on generative AI for mobile — on-device LLMs, ONNX Runtime, more debugging of memory and cache limits than I'd like to admit — and reinforcement learning at Neobotics, where I spend a lot of time in MuJoCo trying to get a simulated car to stop crashing into things. Alongside that I've shipped a handful of my own products end to end: a fishing app, a job-search assistant, a directory site for an immigrant community, mostly because I wanted to see them actually get used, not just finished.",
    "Before any of this I organized unions for a few years, which sounds unrelated until you realize it's the same job: figure out what people actually need, build consensus among people who don't agree, ship something under a deadline you don't control. That's probably where most of my instincts about scoping and shipping projects come from.",
  ],
  email: 'abdallahelhamawi@gmail.com',
  social: [
    { label: 'GitHub', href: 'https://github.com/aeh961', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdallah-el-hamawi-419a75173/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:abdallahelhamawi@gmail.com', icon: 'email' },
  ],
  resumeHref: `${import.meta.env.BASE_URL}resume/Resume.pdf`,
}
