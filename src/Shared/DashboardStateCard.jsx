const DashboardStateCard = ({ title, value, status, textColor, Icon }) => {
  return (
    <div className='rounded-2xl p-6 text-stone-800 shadow-lg border  border-white/20 backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105'>
      <div className='flex items-center justify-between mb-4'>
        <h4 className={`text-lg font-bold ${textColor}`}>{title}</h4>{' '}
        {/* Apply dynamic text color */}
        {Icon && <Icon className={`text-3xl ${textColor} opacity-80`} />}
      </div>

      <p className='text-4xl font-extrabold tracking-wide'>{value}</p>

      <div className='flex items-center justify-between mt-4 text-sm text-black'>
        <p className='text-green-600 font-bold'>{status}</p>
      </div>
    </div>
  );
};

export default DashboardStateCard;
