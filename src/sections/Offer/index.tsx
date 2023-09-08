const cardData = [
  {
    icon: '',
    title: 'Funding',
    desc: 'Up to $40,000 CAD paid out at agreed-upon intervals dictated by the Builder Agreement.',
  },
  {
    icon: '',
    title: 'Technical Assistance',
    desc: 'Deep technical support from our lead developers during the design, testing, and deployment phases of project development.',
  },
  {
    icon: '',
    title: 'Marketing & Network Support',
    desc: 'ChainSafe boosts your project\'s visibility through our channels and community, and connects you with relevant ecosystem partners.',
  },
]

export default function Offer() {
  return (
    <div className='overflow-hidden py-24 bg-black sm:py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <h1 className='mobile-header-light lg:h1-light'>
          What do we offer?
        </h1>
        <div className='py-6 grid grid-cols-1  md:gap-x-4 gap-y-4 sm:gap-y-6 md:grid-cols-3'>
          {cardData.map((card) => (
            <div className='flex flex-col border border-solid border-gray-800 rounded-xl px-4 py-16'>
              <h1 className='text-2xl text-gray-200 py-2'>{card.title}</h1>
              <p className='text-lg text-gray-400'>{card.desc}</p>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}
