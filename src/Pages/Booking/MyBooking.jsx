import UseBookingCart from '../../Hooks/UseBookingCart';

const MyBooking = () => {
  const [myBooking] = UseBookingCart();
  const booking = myBooking;
  console.log(booking);

  return (
    <div>
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
    </div>
  );
};

export default MyBooking;
