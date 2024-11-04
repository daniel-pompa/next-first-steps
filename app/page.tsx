/* eslint-disable react/no-unescaped-entities */
import { TestimonialCarousel } from '@/components';
import { FaUser, FaBriefcase, FaBuilding } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen items-center justify-center p-4'>
      <h1 className='text-2xl md:text-4xl font-bold md:font-extrabold text-slate-800 my-10 text-center'>
        Welcome to Daem Tech Solutions
      </h1>
      <div className='text-sm md:text-lg bg-white shadow-lg rounded p-8 md:p-12 text-center max-w-4xl'>
        <p className='text-slate-700 leading-relaxed mb-4'>
          Discover our platform offering innovative solutions tailored to individual,
          business, and enterprise needs. Start exploring our features and find out how we
          can help you achieve your goals.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          Our platform is designed to be user-friendly, efficient, and adaptable. Whether
          you're a startup, a small business, or an enterprise, we have everything you
          need to succeed.
        </p>
        <button className='text-xs md:text-lg mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300'>
          Get started
        </button>
      </div>
      <section className='text-sm md:text-base mt-16 grid gap-8 md:grid-cols-3 max-w-4xl'>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <FaUser className='text-4xl text-slate-600 mx-auto mb-4' />
          <h2 className='text-xl font-bold text-slate-800'>For Individuals</h2>
          <p className='text-slate-600 mt-2'>
            Access tools and resources tailored to personal growth and learning.
          </p>
        </div>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <FaBriefcase className='text-4xl text-slate-600 mx-auto mb-4' />
          <h2 className='text-xl font-bold text-slate-800'>For Businesses</h2>
          <p className='text-slate-600 mt-2'>
            Empower your business with solutions designed for efficiency and growth.
          </p>
        </div>
        <div className='bg-white p-6 rounded shadow-md text-center'>
          <FaBuilding className='text-4xl text-slate-600 mx-auto mb-4' />
          <h2 className='text-xl font-bold text-slate-800'>For Enterprises</h2>
          <p className='text-slate-600 mt-2'>
            Scalable and secure solutions to meet your organization's demands.
          </p>
        </div>
      </section>
      <section>
        <TestimonialCarousel />
      </section>
    </main>
  );
}
