import { FaHeadset, FaShieldAlt, FaUser } from 'react-icons/fa';

export const metadata = {
  title: 'Pricing',
  description:
    'Explore our flexible and affordable pricing plans tailored to suit individuals, small businesses, and enterprises. Find the perfect option for your needs.',
  keywords:
    'pricing plans, affordable pricing, subscription options, individual plans, business plans, enterprise pricing, flexible options, cost-effective solutions',
};

export default function PricingPage() {
  return (
    <div className='text-sm md:text-xl'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-2xl md:text-4xl font-bold my-10'>Flexible Pricing Plans</h2>
        <p className='text-sm md:text-lg mb-10'>
          Everything you need to kickstart your web project. Choose a plan that fits your
          needs.
        </p>
        {/* Pricing section */}
        <section className='text-sm md:text-base grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mt-8'>
          {/* Plan Individual */}
          <div className='bg-white p-6 rounded shadow-md text-center'>
            <h3 className='text-2xl font-bold text-slate-800'>Individual</h3>
            <p className='text-slate-600 mt-2'>
              Everything you need to kickstart your web project.
            </p>
            <ul className='text-left mt-4'>
              <li>
                <FaUser className='inline-block mr-2' /> 1 User
              </li>
              <li>
                <FaShieldAlt className='inline-block mr-2' /> Basic features
              </li>
              <li>
                <FaHeadset className='inline-block mr-2' /> Email support
              </li>
            </ul>
            <p className='text-xl font-bold mt-4'>$10/month</p>
            <button className='w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition-colors'>
              Get started
            </button>
          </div>
          {/* Plan Business */}
          <div className='bg-white p-6 rounded shadow-md text-center'>
            <h3 className='text-2xl font-bold text-slate-800'>Business</h3>
            <p className='text-slate-600 mt-2'>
              Collaborate with a team for $8/month, per member.
            </p>
            <ul className='text-left mt-4'>
              <li>
                <FaUser className='inline-block mr-2' /> Up to 10 users
              </li>
              <li>
                <FaShieldAlt className='inline-block mr-2' /> Advanced features
              </li>
              <li>
                <FaHeadset className='inline-block mr-2' /> Priority support
              </li>
            </ul>
            <p className='text-xl font-bold mt-4'>$20/month</p>
            <button className='w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition-colors'>
              Get started
            </button>
          </div>
          {/* Plan Enterprise */}
          <div className='bg-white p-6 rounded shadow-md text-center'>
            <h3 className='text-2xl font-bold text-slate-800'>Enterprise</h3>
            <p className='text-slate-600 mt-2'>
              Critical security, performance, observability and support.
            </p>
            <ul className='text-left mt-4'>
              <li>
                <FaUser className='inline-block mr-2' /> Unlimited users
              </li>
              <li>
                <FaShieldAlt className='inline-block mr-2' /> All features included
              </li>
              <li>
                <FaHeadset className='inline-block mr-2' /> 24/7 support
              </li>
            </ul>
            <p className='text-xl font-bold mt-4'>Contact us for pricing</p>
            <button className='w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition-colors'>
              Contact sales
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
