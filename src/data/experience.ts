import type { ExperienceEntry } from '../types/content'

export const experience: ExperienceEntry[] = [
  {
    id: 'boston-university',
    organization: 'Boston University',
    role: 'Researcher — Generative AI & Mobile Development',
    startDate: 'May 2026',
    endDate: 'Present',
    bullets: [
      'Build AI-powered Android and iOS features using Kotlin Multiplatform for cross-platform development.',
      'Integrate on-device LLMs and run mobile AI inference with ONNX Runtime.',
      'Design and implement AI chat systems, including prompt engineering for on-device use cases.',
      'Work on TinyMusician, an on-device generative music research project (see Projects).',
      'Integrate HealthKit for health and activity data on iOS as part of cross-platform mobile research.',
    ],
  },
  {
    id: 'neobotics',
    organization: 'Neobotics',
    organizationHref: 'https://github.com/Neobotics-Foundation-Inc',
    role: 'Reinforcement Learning Engineer',
    startDate: 'May 2026',
    endDate: 'Present',
    bullets: [
      'Develop reinforcement learning architectures for autonomous vehicles using MuJoCo simulation.',
      'Build and tune sensor systems (e.g. downsampled raycast/LiDAR arrays) for RL agents operating in simulation.',
      'Implement control systems and reward shaping for autonomous racing and navigation tasks.',
      'Work across Python and XML (simulation/scene definitions) to build and iterate on training environments.',
    ],
  },
  {
    id: 'protec17',
    organization: 'PROTEC17',
    role: 'Union Organizer',
    startDate: 'Feb 2024',
    endDate: 'Present',
    bullets: [
      'Run organizing campaigns end to end, from initial outreach through representation.',
      'Manage multi-stakeholder projects, coordinating timelines, resources, and competing priorities.',
      'Communicate with and negotiate on behalf of diverse stakeholder groups.',
      'Lead teams and speak publicly in high-pressure, high-stakes settings.',
    ],
  },
]
