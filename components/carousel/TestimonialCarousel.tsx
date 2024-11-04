'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { testimonials } from '@/data';

export const TestimonialCarousel = () => {
  return (
    <div className='max-w-80 md:max-w-4xl mx-auto mt-16'>
      <h2 className='text-xl md:text-2xl font-bold text-center text-slate-800 mb-6'>
        What our clients say
      </h2>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={true}
        showThumbs={false}
        className='bg-white p-6 rounded shadow-lg'
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className='text-center'>
            <div className='flex justify-center mb-4'>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={120}
                height={120}
                className='rounded-full max-w-[120px] max-h-[120px] object-cover'
              />
            </div>
            <p className='text-slate-600 mb-4'>“{testimonial.quote}”</p>
            <h3 className='font-bold text-slate-800'>{testimonial.name}</h3>
            <p className='text-sm text-slate-500 mb-12'>{testimonial.role}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
