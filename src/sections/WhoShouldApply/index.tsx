import { motion } from "framer-motion";
import { parentVariant, childVariants } from "@/styles/animations";
import Image from "next/image";
const candidateCriteria = [
  {
    index: '01',
    desc: 'Web3 game developers or those transitioning existing projects to web3',
  },
  {
    index: '02',
    desc: 'Teams with innovative games utilizing in-game assets or built with Unity',
  },
  { index: '03', desc: 'Full-time teams focused on gaming' },
  { index: '04', desc: 'Optional: have funding' },
];
export default function WhoShouldApply() {
  return (
    <div className='overflow-hidden py-12 bg-white sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 lg:px-8 z-2'>
        <h1 className='mobile-header-dark lg:h1-dark'>
          Who should apply?
        </h1>
        <p className='h4-ndark max-w-3xl'>
          ChainSafe Gaming backs top teams with strong web3 gaming expertise and
          a clear vision for utilizing CSG products in their projects.
        </p>
      <div className='grid grid-cols-1 content-end gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2'>
        <div className='lg:max-w-lg'>
          <motion.dl initial='offscreen'
          whileInView='onscreen'
          variants={parentVariant}
          viewport={{ amount: 0.5 }} className='mt-10 max-w-xl space-y-8 text-base leading-7  lg:max-w-none'>
            {candidateCriteria.map((feature) => (
              <motion.div
                variants={childVariants}
                key={feature.desc}
                className='relative px-4 mx-auto md:pl-9 flex-row flex border-b border-gray-600 py-8'>
                <dt className='min-w-[2rem] inline text-xl font-medium text-gray-600 mr-8'>
                  {feature.index}
                </dt>{' '}
                <dd className='text-xl text-black'>{feature.desc}</dd>
              </motion.div>
            ))}
          </motion.dl>
          </div>
          <div className='relative'>
            <Image src="/bg/square1.png" className='hidden md:inline z-0 absolute right-11 top-4' alt="background" height={80} width={100}/>
            <Image src="/bg/square2.png" className='hidden md:inline z-0 absolute left-[-2rem] top-[80%]' alt="background" height={80} width={100}/>
            <Image src="/bg/square3.png" className='hidden md:inline z-0 absolute right-8 top-[105%]' alt="background" height={80} width={100}/>
          <Image
            src='/apply.png'
            alt='ChainSafe Gaming dashboard showcasing SDK functionality to retrieve token data.'
            className='relative z-10 lg:w-[48rem] lg:max-w-none hidden md:inline lg:-ml-0 md:w-full mt-12'
            width={2432}
            height={1442}
           />
          </div>
      </div>
      </div>
    </div>
  );
}
