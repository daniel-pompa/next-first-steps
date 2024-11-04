/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to us with any questions, support inquiries, or feedback. Our team is here to assist you. Contact us via phone, email, or through our contact form.',
  keywords:
    'contact us, customer support, inquiries, feedback, contact information, reach out, phone, email, support team',
};

export default function ContactPage() {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl md:text-4xl font-bold my-10 text-slate-800 text-center'>
        Get in Touch
      </h2>
      <div className='bg-white shadow-lg rounded p-4 md:p-10 text-sm md:text-lg text-center max-w-3xl w-full'>
        <p className='text-slate-700 mb-4'>
          We're here to help! Reach out to us with any questions, comments, or concerns.
        </p>

        <form className='flex flex-col space-y-4'>
          <input
            type='text'
            placeholder='Your name'
            className='border border-slate-300 p-2 rounded'
            required
          />
          <input
            type='email'
            placeholder='Your email'
            className='border border-slate-300 p-2 rounded'
            required
          />
          <textarea
            placeholder='Your message'
            className='border border-slate-300 p-2 rounded resize-none'
            rows={4}
            required
          />
          <button className='text-sm md:text-lg mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300'>
            Send message
          </button>
        </form>
      </div>
      <section className='mt-16 grid gap-8 md:grid-cols-3 max-w-6xl w-full'>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <FaPhoneAlt className='text-4xl text-slate-600 mx-auto mb-4' />
          <h3 className='text-xl font-bold text-slate-800'>Phone</h3>
          <p className='text-slate-600 mt-2'>+1 (555) 123-4567</p>
        </div>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <FaEnvelope className='text-4xl text-slate-600 mx-auto mb-4' />
          <h3 className='text-xl font-bold text-slate-800'>Email</h3>
          <p className='text-slate-600 mt-2'>support@daemtech.com</p>
        </div>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <FaMapMarkerAlt className='text-4xl text-slate-600 mx-auto mb-4' />
          <h3 className='text-xl font-bold text-slate-800'>Location</h3>
          <p className='text-slate-600 mt-2'>123 Tech Lane, Silicon Valley, CA</p>
        </div>
      </section>
    </div>
  );
}
