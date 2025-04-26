import DashboardStats from '../../../Components/DashboardComponents/DashboardStats';
import UseAllAppoinment from '../../../Hooks/UseAllAppoinment';
// import UseBookingCart from '../../../Hooks/UseBookingCart';

const DashboardHome = () => {
  const [AllAppoinment] = UseAllAppoinment();
  const handleUpdate = (item) => {
    console.log('Update item:', item);
    // You can open a modal or navigate to an update form
  };

  const handleDelete = (item) => {
    console.log('Delete item:', item);
    // You can show a confirmation alert before deleting
  };
  return (
    <div className=''>
      <h1>Dashboard home</h1>
      <DashboardStats></DashboardStats>
      <div>
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
                      onClick={() => handleUpdate(item)}
                      className='btn btn-xs bg-blue-500 text-white hover:bg-blue-600'>
                      Update
                    </button>
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
    </div>
  );
};

export default DashboardHome;
