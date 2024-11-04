'use client';
import { ValueCard } from '@/data';
import { useState } from 'react';
import { AiOutlineSync } from 'react-icons/ai';

interface ValuesCardsProps {
  values: ValueCard[];
}

export const ValuesCards = ({ values }: ValuesCardsProps) => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {values.map((value: ValueCard, index: number) => (
        <div
          key={index}
          className='relative w-full h-48 perspective cursor-pointer'
          onClick={() => setFlippedCard(flippedCard === index ? null : index)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
              flippedCard === index ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front side */}
            <div
              className={`absolute inset-0 bg-white shadow-lg rounded p-6 flex flex-col items-center justify-center backface-hidden ${
                flippedCard === index ? 'hidden' : 'block'
              }`}
            >
              <h4 className='font-bold'>{value.title}</h4>
              <AiOutlineSync
                className='w-8 h-8 text-slate-400 mt-4'
                aria-label='Click to flip'
              />
            </div>
            {/* Back side */}
            <div
              className={`absolute inset-0 bg-blue-50 shadow-lg rounded p-6 flex items-center justify-center text-center transform rotate-y-180 backface-hidden ${
                flippedCard === index ? 'block' : 'hidden'
              }`}
            >
              <p className='text-sm md:text-lg'>{value.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
