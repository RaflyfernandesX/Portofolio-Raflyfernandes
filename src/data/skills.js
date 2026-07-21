import { FaCss3Alt, FaGitAlt, FaHtml5, FaMicrosoft, FaPalette, FaReact } from 'react-icons/fa';
import { FiPenTool } from 'react-icons/fi';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiCisco,
  SiFigma,
  SiGithub,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { TbNetwork } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

export const skillGroups = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML', icon: FaHtml5, level: 85 },
      { name: 'CSS', icon: FaCss3Alt, level: 85 },
      { name: 'JavaScript', icon: RiJavascriptFill, level: 80 },
      { name: 'React', icon: FaReact, level: 75 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 75 },
      { name: 'Vite', icon: SiVite, level: 80 },
    ],
  },
  {
    title: 'UI/UX & Design',
    items: [
      { name: 'Figma', icon: SiFigma, level: 80 },
      { name: 'UI/UX Design', icon: FiPenTool, level: 80 },
      { name: 'Canva', icon: FaPalette, level: 85 },
    ],
  },
  {
    title: 'Tools & Networking',
    items: [
      { name: 'Git', icon: FaGitAlt, level: 75 },
      { name: 'GitHub', icon: SiGithub, level: 75 },
      { name: 'Cisco', icon: SiCisco, level: 70 },
      { name: 'Computer Networking', icon: TbNetwork, level: 75 },
    ],
  },
];

export const tools = [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: RiJavascriptFill },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Vite', icon: SiVite },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Figma', icon: SiFigma },
  { name: 'Cisco', icon: SiCisco },
  { name: 'Networking', icon: TbNetwork },
  { name: 'Microsoft Office', icon: FaMicrosoft },
  { name: 'Canva', icon: FaPalette },
  { name: 'VS Code', icon: VscVscode },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'npm', icon: SiNpm },
  { name: 'Notion', icon: SiNotion },
];