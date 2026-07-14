import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from 'react-icons/fa';
import { FiPenTool } from 'react-icons/fi';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiCisco, SiFigma, SiTailwindcss, SiVite } from 'react-icons/si';
import { TbNetwork } from 'react-icons/tb';

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', level: 90, icon: FaHtml5 },
      { name: 'CSS', level: 86, icon: FaCss3Alt },
      { name: 'JavaScript', level: 78, icon: RiJavascriptFill },
      { name: 'React', level: 74, icon: FaReact },
    ],
  },
  {
    title: 'UI/UX',
    items: [
      { name: 'Figma', level: 74, icon: SiFigma },
      { name: 'Wireframe', level: 70, icon: FiPenTool },
      { name: 'Responsive UI', level: 82, icon: SiTailwindcss },
    ],
  },
  {
    title: 'Networking',
    items: [
      { name: 'TCP/IP Basic', level: 68, icon: TbNetwork },
      { name: 'Subnetting', level: 64, icon: SiCisco },
      { name: 'Troubleshooting', level: 70, icon: TbNetwork },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Vite', level: 80, icon: SiVite },
      { name: 'Tailwind CSS', level: 82, icon: SiTailwindcss },
      { name: 'Git', level: 72, icon: FaGitAlt },
    ],
  },
];
