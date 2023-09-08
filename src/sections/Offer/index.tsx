import { FlowArrow, Headset, CurrencyCircleDollar } from "@phosphor-icons/react";
import { motion } from 'framer-motion';
import {
  parentVariant,
  fadeInVariant,
  childVariants,
} from '@/styles/animations';

const cardData = [
  {
    icon: <CurrencyCircleDollar color="#B4FF68" size={27}/>,
    title: 'Funding',
    desc: 'Up to $40,000 CAD paid out at agreed-upon intervals dictated by the Builder Agreement.',
  },
  {
    icon: <FlowArrow  color="#B4FF68" size={27}/>,
    title: 'Technical Assistance',
    desc: 'Deep technical support from our lead developers during the design, testing, and deployment phases of project development.',
  },
  {
    icon: <Headset color="#B4FF68" size={27}/>,
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
        <motion.div initial='offscreen'
          whileInView='onscreen'
          variants={parentVariant}
          viewport={{ amount: 0.5 }} className='py-6 grid grid-cols-1  md:gap-x-4 gap-y-4 sm:gap-y-6 md:grid-cols-3'>
          {cardData.map((card) => (
            <motion.div variants={childVariants} className='flex flex-col border border-solid border-gray-800 rounded-xl px-6 py-16'>
              {card.icon}
              <h1 className='text-2xl text-gray-200 py-3'>{card.title}</h1>
              <p className='text-lg text-gray-400'>{card.desc}</p>
            </motion.div>
          ))}
      </motion.div>
      </div>
    </div>
  );
}
