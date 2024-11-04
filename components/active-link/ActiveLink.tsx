'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './ActiveLink.module.css';

type IconName = 'FaHome' | 'FaInfoCircle' | 'FaTags' | 'FaEnvelope';

interface ActiveLinkProps {
  path: string;
  text: string;
  iconName: IconName;
}

// Load icons dynamically according to name
const icons = {
  FaHome: dynamic(() => import('react-icons/fa').then(mod => mod.FaHome)),
  FaInfoCircle: dynamic(() => import('react-icons/fa').then(mod => mod.FaInfoCircle)),
  FaTags: dynamic(() => import('react-icons/fa').then(mod => mod.FaTags)),
  FaEnvelope: dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope)),
};

export const ActiveLink = ({ path, text, iconName }: ActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  const Icon = icons[iconName]; // Select icon dynamically

  return (
    <Link
      href={path}
      className={`${styles.link} ${isActive ? styles['active-link'] : ''}`}
    >
      <Icon className='mr-2' />
      {text}
    </Link>
  );
};
