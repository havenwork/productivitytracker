import React from 'react';

const BottomStats = () => {
  const bottomStats = [
    {
      title: "Loop A",
      value: "26.53",
      unit: "°C",
      gauge: 135,
    },
    {
      title: "Loop B",
      value: "20.00",
      unit: "°C",
      gauge: 180,
    },
    {
      title: "NET PWR 1",
      value: "0.00",
      unit: "W",
      gauge: 0,
    },
    {
      title: "NET PWR 2",
      value: "0.00",
      unit: "W",
      gauge: 0,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 pt-4">
      {bottomStats.map((stats, index) => (
        <Stat
          key={index}
          stats={stats}
          className={index === 2 ? 'col-start-4' : ''}
          size="sm"
        />
      ))}
    </div>
  );
};

const Stat = ({ stats, className, size }) => {
  return (
    <div className={`col-span-1 sm:col-span-2 ${className}`}>
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-lg font-semibold">{stats.title}</h3>
        <p className="text-2xl font-bold">{stats.value} {stats.unit}</p>
        <div className="mt-2">
          <span className="text-gray-500">Gauge: {stats.gauge}</span>
        </div>
      </div>
    </div>
  );
};

export default BottomStats;
