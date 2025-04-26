import Swal from 'sweetalert2';
import UseAllAppoinment from '../../../Hooks/UseAllAppoinment';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const DashboardAppointment = () => {
  const [AllAppoinment, refetch] = UseAllAppoinment();
  const axiosSecure = UseAxiosSecure();

  const handleDelete = (item) => {
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
          .delete(`/bookings/${id}`)
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
      <h1 className='text-xl md:text-2xl font-semibold mb-10'>
        <h1 className='text-2xl font-bold text-center my-2 border bg-sky-900 text-white py-3'>
          Total Appointment : {AllAppoinment.length}
        </h1>
      </h1>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* Table Head */}
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
              <th>Actions</th> {/* New column for buttons */}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {AllAppoinment.map((item, index) => (
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

                {/* Action Buttons */}
                <td className='flex flex-col md:flex-row gap-2'>
                  <button
                    onClick={() => handleDelete(item)}
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

export default DashboardAppointment;
