const DashboardStateCard = ({ title, value, percentage, color, Icon }) => {
  return (
    <div
      className={`rounded-sm p-4 text-white shadow-md border-2 border-transparent transition-all duration-300 hover:shadow-lg hover:border-white/50 ${color}`}>
      <div className='flex items-center justify-between'>
        <h4 className='text-lg font-semibold'>{title}</h4>
        {Icon && <Icon className='text-2xl' />}
      </div>
      <p className='text-3xl font-bold mt-1'>{value}</p>
      <p className='text-sm'>Last month</p>
      <p className='text-sm mt-2 font-medium'>
        <span className='text-white bg-white/20 px-2 py-1 rounded'>
          {percentage}%
        </span>
      </p>
    </div>
  );
};

export default DashboardStateCard;
