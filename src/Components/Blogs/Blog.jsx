import toast, { Toaster } from 'react-hot-toast';
import tipDoctorImg from '../../assets/tip-image.jpg';
import { useForm } from 'react-hook-form';

const Blog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast.success('Booking Confirmed!'); // toastify msg
    reset(); // ✅ Reset the form after submission
  };

  return (
    <div
      data-aos='zoom-in-up'
      className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-6'>
        {/* Doctor Info */}
        <div className='flex flex-col text-center'>
          <img
            src={tipDoctorImg}
            alt='Doctor'
            className='object-cover mb-4'
          />
          <h3 className='font-bold'>
            Drew Stronghold,{' '}
            <span className='font-normal text-gray-500'>MPH</span>
          </h3>
          <p className='italic text-sm text-gray-500'>Medicine, Surgery</p>
        </div>
        {/* Booking Form */}
        <div className='bg-gray-100 p-6 rounded-xl shadow space-y-4'>
          <h3 className='text-lg font-semibold text-cyan-600'>
            📅 Book an Ambulance
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'>
            <select
              className='w-full border p-2 rounded'
              {...register('area', { required: 'Area is required' })}>
              <option value=''>Select Area</option>
              <option value='Dhanmondi'>Dhanmondi</option>
              <option value='Mohammadpur'>Mohammadpur</option>
              <option value='Gabtoli'>Gabtoli</option>
              <option value='Hazaribbugh'>Hazaribbugh</option>
              <option value='Gulshan'>Gulshan</option>
              <option value='Banani'>Banani</option>
            </select>
            {errors.area && (
              <p className='text-red-500 text-sm'>{errors.area.message}</p>
            )}

            <input
              type='text'
              placeholder='Your Name (required)'
              className='w-full border p-2 rounded'
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name.message}</p>
            )}

            <input
              type='text'
              placeholder='Your Phone (required)'
              className='w-full border p-2 rounded'
              {...register('phone', { required: 'Phone is required' })}
            />
            {errors.phone && (
              <p className='text-red-500 text-sm'>{errors.phone.message}</p>
            )}

            <input
              type='email'
              placeholder='Your Email (optional)'
              className='w-full border p-2 rounded'
              {...register('email')}
            />

            <input
              type='date'
              className='w-full border p-2 rounded'
              {...register('date')}
            />

            <button
              type='submit'
              className='w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded'>
              SUBMIT
            </button>
          </form>
        </div>
        {/* Blog Content */}
        <div className='space-y-4'>
          <h2 className='font-bold text-lg'>
            How to live a healthy lifestyle?
          </h2>
          <p className='text-gray-600 text-sm'>
            Etiam sit amet orci eget eros faucibus tincidunt...
          </p>
          <ul className='space-y-2 text-sm'>
            <li>➤ Don’t just worry about the things you cannot help.</li>
            <li>➤ Eat healthy, work better, do gardening.</li>
            <li>➤ Some relationships can kill you. Avoid them at the most.</li>
            <li>➤ Focus on the good things that you like.</li>
          </ul>
          <p className='text-gray-600 text-sm'>
            Donec sodales sagittis magna. Sed consequat, leo eget bibendum
            sodales...
          </p>
        </div>
      </div>

      {/* ✅ Toast Renderer for react-hot-toast */}
      <Toaster position='top-right' />
    </div>
  );
};

export default Blog;
