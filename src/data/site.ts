import type { SiteContent } from '../types/content'

export const site: SiteContent = {
  name: 'Abdallah El Hamawi',
  roleTags: ['Software Engineer', 'AI Engineer', 'Researcher', 'Reinforcement Learning Engineer'],
  heroHeadline:
    'Software Engineer building AI-powered products, intelligent systems, and modern applications.',
  heroSubheadline:
    'I work across mobile, full-stack, and reinforcement learning — from on-device generative AI to autonomous robotics — turning hard technical problems into products people actually use.',
  aboutParagraphs: [
    "I'm a software engineer who builds AI-powered products across mobile, web, and robotics — from on-device generative AI running inside a Kotlin Multiplatform app to reinforcement learning policies driving an autonomous racing platform in MuJoCo.",
    'At Boston University, I research generative AI for mobile, integrating on-device LLMs and building AI chat systems with ONNX Runtime across Android and iOS. At Neobotics, I work as a reinforcement learning engineer on autonomous vehicle control, combining sensor simulation with RL training pipelines. Outside of research, I ship full-stack products end to end — a fishing companion app, a job-search AI assistant, a community resource platform — because I care as much about whether something ships and gets used as I do about the algorithm behind it.',
    'Before engineering, I spent years as a union organizer — running campaigns, negotiating with stakeholders, and leading teams under pressure. Those skills carry directly into how I scope ambiguous problems, communicate technical tradeoffs, and drive projects to completion.',
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
