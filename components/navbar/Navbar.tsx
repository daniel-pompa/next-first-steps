import { ActiveLink } from '..';

type IconName = 'FaHome' | 'FaInfoCircle' | 'FaTags' | 'FaEnvelope';

const navItems: { path: string; text: string; iconName: IconName }[] = [
  { path: '/about', text: 'About', iconName: 'FaInfoCircle' },
  { path: '/pricing', text: 'Pricing', iconName: 'FaTags' },
  { path: '/contact', text: 'Contact', iconName: 'FaEnvelope' },
];

export const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row bg-slate-800 text-base md:text-lg text-white p-4 md:p-8 m-2 rounded'>
      <ActiveLink path='/' text='Home' iconName='FaHome' />
      <div className='flex flex-1'></div>
      {navItems.map(item => (
        <ActiveLink
          key={item.path}
          path={item.path}
          text={item.text}
          iconName={item.iconName}
        />
      ))}
    </nav>
  );
};
