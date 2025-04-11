import { FaBriefcaseMedical, FaUserMd, FaAmbulance } from 'react-icons/fa';

const Features = () => {
  return (
    <div className='bg-white py-12 px-6 md:px-20 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
        {/* Feature 1: Advanced Technology */}
        <div className='space-y-4'>
          <FaBriefcaseMedical className='text-cyan-700 text-5xl mx-auto' />
          <h3 className='font-bold text-lg'>ADVANCED TECHNOLOGY</h3>
          <p className='text-sm text-gray-600'>
            We leverage cutting-edge medical equipment and diagnostic tools{' '}
            <br />
            to ensure accurate results, faster treatment, and improved patient
            care.
          </p>
        </div>

        {/* Feature 2: Healthcare Solutions */}
        <div className='space-y-4'>
          <FaUserMd className='text-cyan-700 text-5xl mx-auto' />
          <h3 className='font-bold text-lg'>HEALTHCARE SOLUTIONS</h3>
          <p className='text-sm text-gray-600'>
            Our comprehensive healthcare services are designed to meet your{' '}
            <br />
            needs—from preventive care to advanced treatment plans.
          </p>
        </div>

        {/* Feature 3: 24/7 Availability */}
        <div className='space-y-4'>
          <FaAmbulance className='text-cyan-700 text-5xl mx-auto' />
          <h3 className='font-bold text-lg'>24/7 AVAILABILITY</h3>
          <p className='text-sm text-gray-600'>
            We’re always ready—day or night—with round-the-clock emergency{' '}
            <br />
            ambulance services and dedicated medical professionals on call.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
