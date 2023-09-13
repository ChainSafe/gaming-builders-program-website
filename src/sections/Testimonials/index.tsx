import { motion } from 'framer-motion';
import {
  parentVariant,
  childVariants,
} from '@/styles/animations';

const testimonialData = [
  {
    from: 'NFTPixels, Untitled Platformer',
    entry: '“For a long time [onchain economy] wasn\'t even going to be a feature set. Then I actually found ChainSafe—I stumbled across some videos, showing people how to do things, and I eventually found my way into ChainSafe\'s Discord. They basically taught me the SDK in like 6 months. It allowed me to really expand on the game and implement some really, really creative things.”',
  },
  {
    from: 'Loet de Hooge, co-founder, Fabwelt',
    entry: '“We use NFT tech in our games as strategic utilities and assets. Buying our NFTs on the market allows the gamer to use them in-game by connecting their wallet with the ChainSafe Gaming SDK.”',
  },
  {
    from: 'Leroy ter Braak, Co-founder, CFX Gaming',
    entry: '“Understanding the blockchain is a complex task, and ChainSafe Gaming greatly facilitated our team in understanding some of the more nuanced aspects of it. This reduced the cost of entry to the space with an easy-to-use SDK.”',
  },
]

export default function Testimonials() {
  return (
    <div className='overflow-hidden py-24 bg-black sm:py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <h1 className='mobile-header-light lg:h1-light'>
          Testimonials
        </h1>
        <motion.div initial='offscreen'
          whileInView='onscreen'
          variants={parentVariant}
          viewport={{ amount: 0.5, once: true}} className='py-6 grid grid-cols-1  md:gap-x-4 gap-y-4 sm:gap-y-6 md:grid-cols-3'>
          {testimonialData.map((card) => (
            <motion.div variants={childVariants} key={card.from} className='flex flex-col border border-solid border-gray-800 rounded-xl px-6 py-8'>
              <p className='text-lg text-gray-200'>{card.entry}</p>
              <p className='text-lg text-gray-400 my-2'>- <em>{card.from}</em></p>
            </motion.div>
          ))}
      </motion.div>
      </div>
    </div>
  );
}
