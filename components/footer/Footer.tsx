import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white py-8 mt-16'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Contact Section */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
            <p className='mb-2'>Email: support@example.com</p>
            <p className='mb-2'>Phone: +1 (234) 567-890</p>
            <p>Address: 123 Tech Lane, Silicon Valley, CA</p>
          </div>
          {/* Useful Links Section */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Useful Links</h3>
            <ul>
              <li className='mb-2'>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/about' className='hover:underline'>
                  About
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/pricing' className='hover:underline'>
                  Pricing
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/contact' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/*Social Networks Section */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <Link href='https://github.com' target='_blank'>
                <FaGithub className='text-2xl hover:text-slate-400' />
              </Link>
              <Link href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-2xl hover:text-blue-600' />
              </Link>
              <Link
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram className='text-2xl hover:text-pink-500' />
              </Link>
            </div>
          </div>
        </div>
        {/* Copyrights */}
        <div className='text-center mt-8 border-t border-slate-600 pt-4'>
          <p className='text-sm mt-2'>
            &copy; {new Date().getFullYear()} Daem Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
