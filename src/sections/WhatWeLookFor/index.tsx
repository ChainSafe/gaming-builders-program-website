const cardData = [
  {
    icon: '',
    title: 'Compelling teams',
    desc: 'Teams with strong technical backgrounds that have a clear vision for their project, including a growth strategy and structured plan of development.',
  },
  {
    icon: '',
    title: 'Innovative ideas',
    desc: 'Contributions to ChainSafe Gaming use cases',
  },
  {
    icon: '',
    title: 'Funding levels',
    desc: '$10000 CAD for the 2 top projects, $5000 CAD for 4 other projects',
  },
]

export default function WhatWeLookFor() {
  return (
    <div className='overflow-hidden py-3 bg-black'>
      <div className='mx-auto max-w-7xl py-24 px-16 bg-white rounded-3xl'>
        <h1 className='text-center mobile-header-dark lg:h1-dark'>
          What do we offer?
        </h1>
        <div className='max-w-2xl py-4 grid grid-cols-1 gap-y-6 sm:gap-y-4 '>
          {cardData.map((card) => (
            <div className='flex flex-col py-3'>
              <h1 className='text-2xl text-gray-900 py-2'>{card.title}</h1>
              <p className='text-lg text-gray-800'>{card.desc}</p>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}
