import React, { useEffect, useState } from 'react';

const UseDoctorsData = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  /* server side data fetching  from env file */
  const url = import.meta.env.VITE_API_DOCTORS; // url form env file
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching doctor data:', error));
  });
  return [doctors, loading];
};

export default UseDoctorsData;
