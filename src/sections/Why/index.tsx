

export default function Why() {
  return (
    <div className='overflow-hidden py-24 bg-black sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 lg:px-0'>
      <div className='grid grid-cols-1 items-end md:gap-x-8 lg:gap-x-16 gap-y-16 sm:gap-y-20 md:grid-cols-2 '>
        <img
          src='/dashboard.png'
          alt='Product screenshot'
          className='lg:w-[40rem] lg:max-w-none md:inline lg:ml-0 md:w-full lg:mt-12'
          width={2432}
          height={1442}
        />
        <div className='lg:max-w-lg'>
          <h1 className='mobile-header-light lg:h1-light'>
          Why should you apply?
        </h1>
        <p className='h4-light '>
         We offer funding, technical assistance, and marketing support to boost the success of your project.
        </p>
        <p className='h4-light'>
         Our unique combination of capital and expertise in technical architecture and R&D has empowered numerous games to go web3 and beyond, accelerating your time-to-market and project impact significantly.
        </p>
        </div>
      </div>
      </div>
    </div>
  );
}
