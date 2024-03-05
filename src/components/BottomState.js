import React from 'react';
import Stat from './Stat';

const bottomStats = [
  {
    title: 'Loop A',
    value: '26.53',
    unit: '°C',
    gauge: 135,
  },
  {
    title: 'Loop B',
    value: '20.00',
    unit: '°C',
    gauge: 180,
  },
  {
    title: 'NET PWR 1',
    value: '0.00',
    unit: 'W',
    gauge: 0,
  },
  {
    title: 'NET PWR 2',
    value: '0.00',
    unit: 'W',
    gauge: 0,
  },
];

const MyComponent = () => {
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

export default MyComponent;

