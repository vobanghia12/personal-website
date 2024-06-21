import React from 'react';

const Summary = () => {
  return (
    <section id='summary' className='flex items-center justify-between'>
      <div className='flex-1 space-y-1.5'>
        <h1 className=' font-bold text-2xl '>hi, i'm nghia 👋🏼</h1>
        <div className='max-w-full text-pretty font-sans text-sm text-gray-400 italic'>
          <p>
            Software Engineer, Indie Hack and Photographer. I love build
            products to simplify difficult problems. Very active on Twitter and
            Instagram.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
