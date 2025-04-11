const TechBanner = () => {
  return (
    <div className='relative mx-auto px-4'>
      <div className='bg-cyan-100 flex items-center justify-between p-6 pr-16 relative rounded-md overflow-hidden'>
        {/* Left vertical line */}
        <div className='absolute top-0 left-0 h-full w-1 bg-cyan-500'></div>

        {/* Text Content */}
        <div>
          <h2 className='text-lg md:text-xl font-semibold text-gray-800'>
            OUR TECHNOLOGICAL SERVICES HAS BEEN IMPROVED VASTLY
          </h2>
          <p className='text-sm font-medium text-gray-800 mt-1'>
            Come Experience the real life situations of saving life
          </p>
        </div>

        {/* Button */}
        <button className='border border-cyan-500 text-cyan-500 px-4 py-2 text-sm rounded hover:bg-cyan-500 hover:text-white transition'>
          PURCHASE NOW
        </button>

        {/* Right angled arrow effect */}
        <div className='absolute right-0 top-0 h-full w-10 bg-cyan-100 -skew-x-[30deg] origin-left'></div>
      </div>
    </div>
  );
};

export default TechBanner;
