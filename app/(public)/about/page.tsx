import { Metadata } from 'next';
import Image from 'next/image';
import { ValuesCards } from '@/components';
import { teamMembers, valuesCards } from '@/data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Discover who we are, our mission, values, and the team behind our brand. Learn more about our journey, goals, and what drives us forward.',
  keywords:
    'about us, our mission, team, values, company information, brand story, our journey, goals',
};

export default function AboutPage() {
  return (
    <div className='max-w-6xl mx-auto'>
      <section className='text-sm md:text-xl text-slate-700'>
        <h2 className='text-2xl md:text-4xl font-bold my-10 text-center text-slate-800'>
          About Us
        </h2>
        <p className='mb-4 leading-relaxed text-sm md:text-lg'>
          At Daem Tech Solutions, we are committed to delivering innovative and efficient
          technology solutions that empower individuals, small businesses, and large
          corporations. Our goal is to help our clients achieve their strategic objectives
          through reliable, scalable, and user-friendly platforms.
        </p>
        <p className='mb-8 leading-relaxed text-sm md:text-lg'>
          Driven by our core values of integrity, innovation, and customer satisfaction,
          we aim to make a positive impact in the tech industry by providing exceptional
          solutions that are both practical and forward-thinking.
        </p>
        {/* Our Mission Section */}
        <section className='mb-8'>
          <h3 className='text-xl md:text-2xl font-semibold text-slate-800 mb-4'>
            Our Mission
          </h3>
          <p className='leading-relaxed text-sm md:text-lg'>
            To empower our clients by providing technology solutions that enhance
            efficiency, promote growth, and adapt to changing needs. We believe in
            creating a better future through sustainable and accessible technology.
          </p>
        </section>
        {/* Our Values Section */}
        <section className='mb-8'>
          <h3 className='text-xl md:text-2xl font-semibold text-slate-800 mb-4'>
            Our Values
          </h3>
          <ValuesCards values={valuesCards} />
        </section>
        {/* Team Section */}
        <section>
          <h3 className='text-xl md:text-2xl font-semibold text-slate-800 mb-4'>
            Meet Our Team
          </h3>
          <p className='leading-relaxed mb-6 text-sm md:text-lg'>
            Our team is comprised of skilled professionals dedicated to excellence in
            every project. With diverse backgrounds in technology, business, and design,
            we bring a wealth of knowledge and passion to everything we do.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {teamMembers.map((member, index) => (
              <div key={index} className='bg-white shadow-lg rounded-lg p-6 text-center'>
                <Image
                  src={`/member-${index + 1}.png`}
                  alt={member.name}
                  width={160}
                  height={160}
                  className='rounded-full mx-auto mb-4'
                />
                <h4 className='font-bold'>{member.name}</h4>
                <p className='text-slate-400 mb-2 font-bold'>{member.role}</p>
                <p className='text-sm md:text-base text-slate-600'>{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
