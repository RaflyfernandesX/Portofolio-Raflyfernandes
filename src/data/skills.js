import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from 'react-icons/fa';
import { FiPenTool } from 'react-icons/fi';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiCisco,
  SiFigma,
  SiGithub,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { TbNetwork } from 'react-icons/tb';

export const skillGroups = [
  {
    title: 'Frontend Development',
    items: [
      {
        name: 'HTML',
        icon: FaHtml5,
        level: 85,
      },
      {
        name: 'CSS',
        icon: FaCss3Alt,
        level: 85,
      },
      {
        name: 'JavaScript',
        icon: RiJavascriptFill,
        level: 80,
      },
      {
        name: 'React',
        icon: FaReact,
        level: 65,
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        level: 70,
      },
      {
        name: 'Vite',
        icon: SiVite,
        level: 70,
      },
    ],
  },
  {
    title: 'UI/UX & Design',
    items: [
      {
        name: 'Figma',
        icon: SiFigma,
        level: 80,
      },
      {
        name: 'UI/UX Design',
        icon: FiPenTool,
        level: 75,
      },
    ],
  },
  {
    title: 'Tools & Networking',
    items: [
      {
        name: 'Git',
        icon: FaGitAlt,
        level: 75,
      },
      {
        name: 'GitHub',
        icon: SiGithub,
        level: 80,
      },
      {
        name: 'Cisco',
        icon: SiCisco,
        level: 50,
      },
      {
        name: 'Computer Networking',
        icon: TbNetwork,
        level: 60,
      },
    ],
  },
];

export const tools = [
  {
    name: 'React',
    icon: FaReact,
  },
  {
    name: 'JavaScript',
    icon: RiJavascriptFill,
  },
  {
    name: 'HTML',
    icon: FaHtml5,
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    name: 'Vite',
    icon: SiVite,
  },
  {
    name: 'Git',
    icon: FaGitAlt,
  },
  {
    name: 'GitHub',
    icon: SiGithub,
  },
  {
    name: 'Figma',
    icon: SiFigma,
  },
  {
    name: 'Cisco',
    icon: SiCisco,
  },
  {
    name: 'Networking',
    icon: TbNetwork,
  },
  {
    name: 'UI/UX Design',
    icon: FiPenTool,
  },
];