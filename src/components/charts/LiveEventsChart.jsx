import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Info', value: 841, color: '#3B82F6' },
  { name: 'Alert', value: 270, color: '#F59E0B' },
  { name: 'Alarm', value: 487, color: '#EF4444' },
];

const LiveEventsChart = () => {
  return (
    <div className='relative p-12 bg-[#3B3B3B] rounded-md'>
      <ResponsiveContainer width={340} height={340}>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            innerRadius={150}
            outerRadius={170}
            paddingAngle={0}
            dataKey='value'
            strokeWidth={0}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute h-full w-full top-0 flex justify-center items-center flex-col left-0'>
        <h2 className='text-light-white text-2xl'>Total Events</h2>
        <h2 className='text-white text-6xl mt-2'>1,111</h2>
      </div>
    </div>
  );
};

export default LiveEventsChart;
