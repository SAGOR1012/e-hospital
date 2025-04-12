import React, { useState } from 'react';

const QUESTIONS = [
  'What is the difference between lease and licence agreement?',
  'How ownership of property is acquired by a person?',
  'Can a registered will be rectified or changed?',
  'Is the certified copy of a registered will available to any body?',
];

const WHY_US_DATA = [
  {
    title: 'Great Infrastructure',
    desc: 'Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.',
    icon: '🏥',
  },
  {
    title: '24/7 Ambulance Services',
    desc: 'Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.',
    icon: '🚑',
  },
  {
    title: 'Cutting Edge Technology',
    desc: 'Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.',
    icon: '💉',
  },
];

// Reusable FAQ Item Component
const Faqs = ({ question, isOpen: defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  return (
    <div className='border rounded-lg overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium flex justify-between items-center'>
        <span>{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className='px-4 py-2 text-sm text-gray-600 bg-white'>
          {/* Placeholder answer — replace with real answer if needed */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
          pariatur?
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div
      data-aos='zoom-in-right'
      className='grid md:grid-cols-2 gap-20 px-6 py-10'>
      {/* FAQs */}
      <div>
        <h2 className='text-2xl font-bold mb-6'>FAQ's</h2>
        <div className='space-y-3'>
          {QUESTIONS.map((q, i) => (
            <Faqs
              key={i}
              question={q}
              isOpen={i === 3}
            />
          ))}
        </div>
      </div>

      {/* Why Us */}
      <div>
        <h2 className='text-2xl font-bold mb-6'>Why Us?</h2>
        <div
          data-aos='zoom-in-left'
          className='space-y-6'>
          {WHY_US_DATA.map((item, i) => (
            <div
              key={i}
              className='flex items-start gap-4'>
              <div className='bg-cyan-400 text-white p-4 rounded-full text-2xl'>
                {item.icon}
              </div>
              <div>
                <h3 className='font-bold text-lg'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
