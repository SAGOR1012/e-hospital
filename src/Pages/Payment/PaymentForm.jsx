import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const PaymentForm = () => {
  //   const { user } = UseAuth(); // for get user data

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset, // clean form after submit button
    formState: { errors },
  } = useForm();

  const paymentMethod = watch('paymentMethod');
  /* after click payment button*/
  const onSubmit = (data) => {
    console.log('Payment Info:', data);
    /* success message */
    toast.success('Payment successful!');
    reset(); /* rest form */
    setTimeout(() => {
      navigate('/mybooking');
    }, 1000);
  };

  return (
    <section className='bg-white p-4 xs:p-8'>
      <div className='max-w-xl mx-auto border border-[#4D7C0F] rounded-lg p-6 sm:p-8'>
        <h2 className='text-xl font-bold mb-6 text-center'>
          Payment Information
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6'>
          {/* Full Name */}
          <div>
            <label className='text-sm font-medium text-gray-700 mb-1 block'>
              Full Name
            </label>
            <input
              type='text'
              {...register('fullName', { required: 'Full name is required' })}
              className='h-[45px] w-full rounded-md border border-gray-300 px-3 text-sm'
              placeholder='Your full name'
            />
            {errors.fullName && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <label className='text-sm font-medium text-gray-700 mb-2 block'>
              Select Payment Method
            </label>
            <div className='flex flex-col gap-2 sm:flex-row'>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  value='bkash'
                  {...register('paymentMethod', { required: true })}
                />
                bKash
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  value='nagad'
                  {...register('paymentMethod', { required: true })}
                />
                Nagad
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  value='card'
                  {...register('paymentMethod', { required: true })}
                />
                Card (Visa / MasterCard)
              </label>
            </div>
            {errors.paymentMethod && (
              <p className='text-red-500 text-xs mt-1'>
                Select a payment method
              </p>
            )}
          </div>

          {/* Conditional Inputs */}
          {paymentMethod === 'bkash' && (
            <div>
              <label className='text-sm font-medium text-gray-700 mb-1 block'>
                bKash Number
              </label>
              <input
                type='text'
                {...register('bkashNumber', {
                  required: 'bKash number is required',
                })}
                className='h-[45px] w-full rounded-md border border-gray-300 px-3 text-sm'
                placeholder='01XXXXXXXXX'
              />
              {errors.bkashNumber && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.bkashNumber.message}
                </p>
              )}
            </div>
          )}

          {paymentMethod === 'nagad' && (
            <div>
              <label className='text-sm font-medium text-gray-700 mb-1 block'>
                Nagad Number
              </label>
              <input
                type='text'
                {...register('nagadNumber', {
                  required: 'Nagad number is required',
                })}
                className='h-[45px] w-full rounded-md border border-gray-300 px-3 text-sm'
                placeholder='01XXXXXXXXX'
              />
              {errors.nagadNumber && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.nagadNumber.message}
                </p>
              )}
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className='space-y-4'>
              <div>
                <label className='text-sm font-medium text-gray-700 mb-1 block'>
                  Card Number
                </label>
                <input
                  type='text'
                  {...register('cardNumber', {
                    required: 'Card number is required',
                  })}
                  className='h-[45px] w-full rounded-md border border-gray-300 px-3 text-sm'
                  placeholder='xxxx-xxxx-xxxx-xxxx'
                />
                {errors.cardNumber && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.cardNumber.message}
                  </p>
                )}
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm font-medium text-gray-700 mb-1 block'>
                    Expiry
                  </label>
                  <input
                    type='text'
                    {...register('expiry', { required: 'Expiry is required' })}
                    className='h-[45px] w-full rounded-md border border-gray-300 px-3 text-sm'
                    placeholder='MM/YY'
                  />
                </div>
                <div>
                  <label className='text-sm font-medium text-gray-700 mb-1 block'>
                    CVV
                  </label>
                  <input
                    type='password'
                    {...register('cvv', { required: 'CVV is required' })}
                    className='h-[45px] w-full rounded-md border border-gray-300 px-3 text-sm'
                    placeholder='XXX'
                  />
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className='pt-4 border-t border-gray-200 flex justify-end'>
            <button
              type='submit'
              className='sm:w-[100px] w-full h-[45px] text-sm bg-sky-500 rounded-md px-4 text-white'>
              Pay Now
            </button>
            <Toaster
              position='top-right'
              reverseOrder={false}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
