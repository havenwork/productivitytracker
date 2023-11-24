import React from 'react';
import Stat from './Stat'; // Adjust the path as needed

const TopStats = () => {
  const topStats = [
    {
      title: 'Ppo2',
      value: '2.69',
      unit: 'psia',
      gauge: 61,
    },
    {
      title: 'Cabin temp',
      value: '2.41',
      unit: '°C',
      gauge: 20,
    },
    {
      title: 'Cabin pressure',
      value: '14.00',
      unit: 'psia',
      gauge: 61,
    },
    {
      title: 'Co2',
      value: '0.07',
      unit: 'mmHg',
      gauge: 80,
    },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {topStats.map((stats, index) => (
        <Stat key={index} stats={stats} />
      ))}
    </div>
  );
};

export default TopStats;
