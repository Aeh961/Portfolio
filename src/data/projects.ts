import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'unskunked',
    title: 'Unskunked',
    description:
      'A local-first fishing assistant for beginner anglers. Helps users pick a waterbody and target species, build a rig, plan a trip, and log what worked — with GPS-aware nearby fishing, offline weather/tide/sun scoring, and source-confidence badges on regulation data.',
    highlights: [
      'Built a native GPS map with fishing, clamming, crabbing, and launch-site markers and permission-aware location fallbacks.',
      'Designed offline weather/tide/sun scoring so trip planning works without a live connection.',
      'Added source-confidence badges and data-freshness warnings for regulation data pulled from public sources.',
      'Shipped a full Demo Mode with realistic trip history, profiles, and search history for onboarding.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript'],
    repoUrl: 'https://github.com/aeh961/unskunked',
    repoLabel: 'aeh961/unskunked',
    ownership: 'own',
    featured: true,
  },
  {
    id: 'job-finder',
    title: 'JobFinder AI',
    description:
      'A SaaS-style MVP for tracking target employers, discovering roles from Greenhouse and Lever, scoring role fit, and preparing application materials.',
    highlights: [
      'Built job-discovery adapters that pull live postings from Greenhouse and Lever.',
      'Implemented 0–100 match scoring with reasons, missing skills, and a suggested next action.',
      'Designed a Prisma/PostgreSQL schema covering employers, jobs, applications, and pipeline status.',
      'Added a local AI application-helper fallback with optional OpenAI/Anthropic integration.',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repoUrl: 'https://github.com/aeh961/Job-Finder',
    repoLabel: 'aeh961/Job-Finder',
    ownership: 'own',
    featured: true,
  },
  {
    id: 'tinymusician',
    title: 'TinyMusician',
    description:
      'An on-device generative AI music feature that generates short music clips from text prompts directly on mobile devices, developed as part of research at Boston University.',
    highlights: [
      'Built and tested the text-to-music inference pipeline end to end.',
      'Integrated ONNX Runtime for mobile inference of MusicGen model components (tokenizer, text encoder, decoder, EnCodec decoder).',
      'Debugged delay-mask, key-value cache, memory, and model-loading issues specific to on-device inference.',
      'Integrated the feature into a Kotlin Multiplatform mobile application and improved Android/iOS compatibility.',
      'Researched approaches for generating longer audio clips within mobile memory limits.',
    ],
    stack: [
      'Python',
      'Kotlin',
      'Swift',
      'Kotlin Multiplatform',
      'ONNX Runtime',
      'MusicGen',
      'NumPy',
    ],
    repoUrl: 'https://github.com/Rezar/Ubiqlog3',
    repoLabel: 'Related repository',
    ownership: 'collaborative',
    ownershipNote:
      'Collaborative Boston University research project — not a personally owned repository.',
  },
  {
    id: 'union-campaign-tracker',
    title: 'Union Campaign Tracker',
    description:
      'A web application to modernize union organizing operations, replacing spreadsheet-based workflows with a centralized platform for campaigns, accretions, grievances, stewards, and employee information.',
    highlights: [
      'Planned campaign management dashboard with organizer/employee role-based access.',
      'Planned grievance and accretion tracking, a steward directory, and automated member notifications.',
      'Planned UnionWare integration and reporting/analytics.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL'],
    repoUrl: 'https://github.com/Aeh961/OrganizerTool',
    repoLabel: 'aeh961/OrganizerTool',
    ownership: 'own',
    status: 'active-development',
  },
  {
    id: 'identifyhub',
    title: 'IdentifyHub',
    description:
      'An open-source identity and account-management platform that helps users securely organize account information and personal data.',
    highlights: [
      'Built and improved vault and account-creation forms.',
      'Added integration and component tests, plus ESLint to improve code quality.',
      'Fixed duplicate-account handling and database uniqueness behavior.',
      'Verified that personally identifiable information was encrypted and added audit-log coverage for data mutations.',
      'Worked in a TypeScript monorepo spanning web and API applications, including PR review and issue tracking.',
    ],
    stack: [
      'TypeScript',
      'React',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'ESLint',
      'Automated Testing',
      'Encryption',
    ],
    repoUrl: 'https://github.com/kevintatou/identifyhub',
    repoLabel: 'kevintatou/identifyhub',
    ownership: 'contribution',
    ownershipNote: 'Open-source project I contributed to — not created or owned by me.',
  },
  {
    id: 'neoracer-mujoco',
    title: 'NeoRacer MuJoCo Simulator',
    description:
      'A clean, team-facing MuJoCo baseline simulator for the NeoRacer 1/12-scale autonomous RC car platform, used for reinforcement learning research at Neobotics.',
    highlights: [
      'Built the MuJoCo simulation baseline for the NeoRacer autonomous vehicle platform.',
      'Set up a reproducible environment/dependency pipeline (conda and uv) for the team.',
      'Worked with Git LFS-managed mesh assets for accurate vehicle physics.',
    ],
    stack: ['Python', 'MuJoCo', 'XML', 'NumPy'],
    repoUrl: 'https://github.com/Neobotics-Foundation-Inc/neoracer-mujoco',
    repoLabel: 'Neobotics-Foundation-Inc/neoracer-mujoco',
    ownership: 'own',
    featured: true,
  },
  {
    id: 'neoracer-rl',
    title: 'NeoRacer Reinforcement Learning',
    description:
      'Reinforcement learning architecture and trained models for the NeoRacer autonomous racing platform, combining Proximal Policy Optimization with imitation learning to navigate a track autonomously.',
    highlights: [
      'Implemented a custom downsampled Ray Perception Sensor 3D (raycast) array in place of heavy LiDAR to reduce compute overhead.',
      'Replaced sparse checkpoint rewards with a continuous reward gradient (normalized speed × alignment, smoothed via power mean) to reduce erratic agent behavior.',
      'Built a training pipeline using behavioral cloning for initial policy bootstrapping, transitioning to pure RL for time-optimization.',
    ],
    stack: ['Python', 'Reinforcement Learning', 'PPO', 'Imitation Learning', 'Simulation'],
    repoUrl: 'https://github.com/Neobotics-Foundation-Inc/neoracer-rl',
    repoLabel: 'Neobotics-Foundation-Inc/neoracer-rl',
    ownership: 'own',
  },
  {
    id: 'build-interpreter',
    title: 'Build Your Own Interpreter',
    description:
      'An interpreter implemented from the ground up as part of Boston University’s MS in Software Development program, covering lexical analysis through expression evaluation.',
    highlights: [
      'Implemented a lexer, parser, and AST generation from scratch.',
      'Handled operator precedence and expression evaluation.',
      'Applied object-oriented design principles with accompanying unit tests.',
    ],
    stack: ['Java'],
    repoUrl: 'https://github.com/Aeh961/build-interpreter-abdallah',
    repoLabel: 'aeh961/build-interpreter-abdallah',
    ownership: 'own',
    ownershipNote: 'Academic project completed for Boston University.',
  },
  {
    id: 'contract-answerer',
    title: 'Contract Answerer',
    description:
      'An AI-powered document question-answering application that lets users ask natural-language questions about long PDF documents and get source-grounded answers using retrieval-augmented generation.',
    highlights: [
      'Implemented embeddings-based retrieval for precise context selection over long documents.',
      'Designed the pipeline to minimize hallucination by grounding answers in retrieved source passages.',
    ],
    stack: ['Python', 'RAG', 'Embeddings', 'Vector Search', 'LLMs'],
    repoUrl: 'https://github.com/aeh961/Contract-Answerer',
    repoLabel: 'aeh961/Contract-Answerer',
    ownership: 'own',
  },
  {
    id: 'daleelna',
    title: 'Daleelna',
    description:
      'Daleelna (دليلنا, "Our Guide") is a production-ready community resource hub for the Arab community across Washington, Oregon, and Idaho, with directories for resources, businesses, events, and jobs.',
    highlights: [
      'Designed a Prisma schema covering users, roles, resources, businesses, events, jobs, and moderation.',
      'Built submission and edit-submission flows with Zod validation and an approval workflow.',
      'Built an admin dashboard and moderation review queue.',
      'Prepared English/Arabic language-toggle support for the interface.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth'],
    repoUrl: 'https://github.com/aeh961/daleelna',
    repoLabel: 'aeh961/daleelna',
    ownership: 'own',
    featured: true,
  },
]
