import Swal from 'sweetalert2';
import UseAllAmbulanceBookings from '../../../Hooks/UseAllAmbulanceBookings';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const DashboardAmbulanceBookingList = () => {
  const [AllAmbulanceBookingList, refetch] = UseAllAmbulanceBookings();
  const axiosSecure = UseAxiosSecure();

  const handleAmbulanceUpdate = (id) => {
    console.log('Update ambulance booking:', id);
  };

  const handleAmbulanceDelete = (item) => {
    const id = item._id;
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/ambulancebookings/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'The booking has been deleted.', 'success');
              refetch();
            }
          })
          .catch((error) => {
            console.error('Delete error:', error);
            Swal.fire('Error!', 'Failed to delete booking.', 'error');
          });
      }
    });
  };

  return (
    <div>
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
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {AllAmbulanceBookingList.map((item, index) => (
              <tr
                key={item._id}
                className='hover:bg-base-200'>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.area}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td className='flex flex-col md:flex-row gap-2'>
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
