import UseAllAmbulanceBookings from '../../../Hooks/UseAllAmbulanceBookings';

const DashboardAmbulanceBookingList = () => {
  const [AllAmbulanceBookingList] = UseAllAmbulanceBookings();

  const handleAmbulanceUpdate = (item) => {
    console.log('Update ambulance booking:', item);
    // open a modal or navigate to update page
  };

  const handleAmbulanceDelete = (item) => {
    console.log('Delete ambulance booking:', item);
    // confirm and then delete logic
  };

  return (
    <div>
      {/* ambulance */}
      <h1 className='text-2xl font-bold text-center my-2 border bg-sky-900 text-white py-3'>
        Ambulance Bookings : {AllAmbulanceBookingList.length}
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
              <th>Actions</th> {/* New column for buttons */}
            </tr>
          </thead>

          <tbody>
            {AllAmbulanceBookingList.map((item, index) => (
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

                {/* Action Buttons */}
                <td className='flex flex-col md:flex-row gap-2'>
                  <button
                    onClick={() => handleAmbulanceUpdate(item)}
                    className='btn btn-xs bg-blue-500 text-white hover:bg-blue-600'>
                    Update
                  </button>
                  <button
                    onClick={() => handleAmbulanceDelete(item)}
                    className='btn btn-xs bg-red-500 text-white hover:bg-red-600'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAmbulanceBookingList;
