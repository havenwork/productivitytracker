import React, { useMemo } from 'react';

const Stat = ({ stats, size }) => {
  const { gauge, title, value, unit } = stats;

  const gaugeColor = useMemo(() => {
    if (gauge >= 0 && gauge < 30) {
      return 'text-red';
    }
    if (gauge >= 30 && gauge < 80) {
      return 'text-yellow';
    }
    return 'text-blue';
  }, [gauge]);

  const strokeDashArray = useMemo(() => {
    if (gauge >= 0 && gauge < 30) {
      return `${gauge} 360`;
    }
    if (gauge >= 30 && gauge < 80) {
      return `25 1 ${gauge - 26} 360`;
    }
    return `25 1 40 1 ${gauge - 67} 360`;
  }, [gauge]);

  return (
    <div
      className={`relative flex items-center justify-center bg-white rounded-[10px] bg-opacity-[0.02] ${
        size === 'md' ? 'w-[160px] h-[175px]' : 'w-[130px] h-[140px]'
      }`}
    >
      <svg
        className="absolute"
        height={size === 'md' ? 138 : 110}
        width={size === 'md' ? 138 : 110}
        viewBox="0 0 152 152"
        fill="none"
      >
        {/* ... Paths go here ... */}
      </svg>
      <div className="flex flex-col items-center justify-center pt-3 text-white">
        <span className={`uppercase ${size === 'md' ? 'text-xxs' : 'text-xxxs'}`}>{title}</span>
        <span className={`leading-tight ${size === 'md' ? 'text-3xl' : 'text-2xl'}`}>{value}</span>
        <span className={`leading-normal ${size === 'md' ? 'text-xl' : 'text-base'}`}>{unit}</span>
      </div>
    </div>
  );
};

export default Stat;
