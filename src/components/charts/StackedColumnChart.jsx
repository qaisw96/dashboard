import React from 'react';

const StackedColumnChart = ({ data }) => {
  const totalHeight = 80;

  return (
    <div className='flex flex-col items-center justify-center mr-6 text-xs'>
      <div className='text-white mb-2'>
        <p>{data.top}</p>
      </div>
      <div
        className='w-[30px] bg-gray-800 rounded-lg overflow-hidden flex flex-col justify-end'
        style={{ height: `${totalHeight}px` }}>
        {data.data?.map((item, index) => (
          <div
            key={index}
            className='w-full'
            style={{
              height: item.value,
              backgroundColor: item.color,
            }}
          />
        ))}
      </div>
      <div className='text-white mt-2'>
        <p>{data.bottom}</p>
      </div>
    </div>
  );
};

export default StackedColumnChart;
