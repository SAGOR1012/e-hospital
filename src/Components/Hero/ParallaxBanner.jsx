import { FaHospitalSymbol } from 'react-icons/fa';
import parallaximage from '../../assets/parallaximg.jpg';

const ParallaxBanner = () => {
  return (
    <div
      className='bg-fixed bg-center bg-cover mb-20'
      style={{
        backgroundImage: `url(${parallaximage})`,
      }}>
      <div className='bg-white/70 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center py-16 px-6 md:px-12'>
          {/* Doctor Image */}
          <div className='md:w-1/2 mb-10 md:mb-0'></div>

          {/* Best Features */}
          <div className='md:w-1/2 text-center md:text-left space-y-6'>
            <h2 className='text-3xl font-serif font-semibold text-gray-800'>
              BEST FEATURES
            </h2>
            <ul className='space-y-3 text-cyan-600 text-sm'>
              {[
                'State-of-the-art diagnostic equipment',
                'Specialized and experienced medical staff',
                'Patient-centered approach to treatment',
                'Emergency support available 24/7',
                'Personalized health consultations',
                'Seamless appointment and follow-up system',
              ].map((text, idx) => (
                <li
                  key={idx}
                  className='flex items-center gap-2'>
                  <FaHospitalSymbol className='text-cyan-700' />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className='mt-6 px-6 py-2 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition rounded'>
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
