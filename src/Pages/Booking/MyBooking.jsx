import UseAmbulanceBookingCart from '../../Hooks/UseAmbulanceBookingCart';
import UseBookingCart from '../../Hooks/UseBookingCart';

const MyBooking = () => {
  const [myBooking] = UseBookingCart();
  const [ambulanceBooking] = UseAmbulanceBookingCart();
  const aBooking = ambulanceBooking;
  console.log('ambulance', aBooking);
  const booking = myBooking;
  console.log(booking);

  return (
    <div className='px-5'>
      <h1 className='text-2xl font-bold text-center my-2 border bg-sky-500 text-white py-3'>
        Doctor Appoinment : {myBooking.length}
      </h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>P.Name</th>
              <th>Doctors</th>
              <th>Appointment Date</th>
              <th>A.Time</th>
              <th>DR.Fee</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myBooking.map((item, index) => (
              <tr
                key={index}
                className='hover:bg-base-200'>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.doctor}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.fee}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ambulance */}

      <h1 className='text-2xl font-bold text-center my-2 border bg-sky-900 text-white py-3'>
        Ambulance Bookings : {ambulanceBooking.length}
      </h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Area</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Pickup Point</th>
            </tr>
          </thead>
          <tbody>
            {ambulanceBooking.map((item, index) => (
              <tr
                key={index}
                className='hover:bg-base-200'>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.area}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
