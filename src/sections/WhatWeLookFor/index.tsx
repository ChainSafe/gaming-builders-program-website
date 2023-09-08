import {motion} from 'framer-motion';
import { fadeInVariant } from '@/styles/animations';
import { Lightbulb, UsersFour, HandCoins } from "@phosphor-icons/react"
const cardData = [
  {
    icon: <UsersFour size={24} color="#B4FF68"/>,
    title: 'Compelling teams',
    desc: 'Teams with strong technical backgrounds that have a clear vision for their project, including a growth strategy and structured plan of development.',
  },
  {
    icon: <Lightbulb size={24} color="#B4FF68"/>,
    title: 'Innovative ideas',
    desc: 'Contributions to ChainSafe Gaming use cases',
  },
  {
    icon: <HandCoins size={24} color="#B4FF68" />,
    title: 'Funding levels',
    desc: '$10000 CAD for the 2 top projects, $5000 CAD for 4 other projects',
  },
]

export default function WhatWeLookFor() {
  return (
    <div className='overflow-hidden py-3 bg-black'>
      <motion.div initial='offscreen'
          whileInView='onscreen' viewport={{amount: 0.4}} className='mx-auto max-w-7xl py-16 px-16 bg-white rounded-3xl'>
        <motion.h1 variants={fadeInVariant} className='text-center mobile-header-dark lg:h1-dark'>
          What we look for
        </motion.h1>
        <div className='max-w-2xl py-12 grid grid-cols-1 gap-y-6 sm:gap-y-4 '>
          {cardData.map((card, index) => (
            <div className='flex flex-row justify-start items-start' key={index}>
              <div className='relative'>
                <div className='z-3 relative rounded-xl px-3 py-3 w-12 h-12 bg-gray-900'>{card.icon}</div>
                {index < 2 ? (<div className='z-0 h-48 sm:h-20 w-[2px] bg-gray-200 absolute left-6'></div>) : ''}
              </div>
            <div className='flex flex-col px-4 pb-3'>
              <h1 className='text-2xl text-gray-900 py-2'>{card.title}</h1>
              <p className='text-lg text-gray-800'>{card.desc}</p>
              </div>
              </div>
          ))}
      </div>
      </motion.div>
    </div>
  );
}
