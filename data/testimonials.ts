interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Noah Wang',
    role: 'CEO, Tech Innovations',
    quote:
      'Daem Tech Solutions transformed our business. Their solutions are top-notch and their support is exceptional.',
    image: '/client-1.png',
  },
  {
    name: 'Jane Lee',
    role: 'CTO, Future Tech',
    quote:
      'The team at Daem Tech Solutions is incredibly professional. Their insights have helped us grow significantly.',
    image: '/client-2.png',
  },
  {
    name: 'Ethan Harris',
    role: 'COO, Business Growth Corp',
    quote:
      'I highly recommend Daem Tech Solutions. They provided excellent support throughout our project.',
    image: '/client-3.png',
  },
  {
    name: 'Daniel Carter',
    role: 'Founder, Startups Inc.',
    quote: 'Exceptional service and a great team to work with! Highly recommend.',
    image: '/client-4.png',
  },
  {
    name: 'Emma Lewis',
    role: 'VP of Marketing, Creatives Co.',
    quote: 'A fantastic experience! They truly understand our needs.',
    image: '/client-5.png',
  },
  {
    name: 'Alex Davis',
    role: 'Product Manager, Innovate Ltd.',
    quote:
      'Their solutions helped us streamline our processes and improve our bottom line.',
    image: '/client-6.png',
  },
];
