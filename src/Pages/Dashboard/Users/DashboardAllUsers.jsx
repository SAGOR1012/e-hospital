import UseAllUsers from '../../../Hooks/UseAllUsers';

const DashboardAllUsers = () => {
  const [allUsers] = UseAllUsers();

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-center my-2 border bg-sky-900 text-white py-3'>
          Total Registered Users: {allUsers.length}
        </h1>

        <div className='overflow-x-auto'>
          <table className='table '>
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created Date</th>
                <th>Time</th>
                <th>Gender</th>
              </tr>
            </thead>

            <tbody>
              {allUsers.map((item, index) => (
                <tr
                  key={item._id}
                  className='hover:bg-base-200'>
                  <th>{index + 1}</th>

                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{'Not Ready Yet'}</td>
                  <td>{'Not Ready Yet'}</td>
                  <td>{'Not Ready Yet'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAllUsers;
