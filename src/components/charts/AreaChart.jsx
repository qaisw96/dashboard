import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  ReferenceDot,
  XAxis,
  Tooltip,
} from 'recharts';

const data = [
  { time: '12:00:00 pm', value: 10 },
  { time: '12:05:00 pm', value: 15 },
  { time: '12:10:00 pm', value: 12 },
  { time: '12:15:00 pm', value: 20 },
  { time: '12:20:00 pm', value: 18 },
  { time: '12:23:43 pm', value: 25 },
  { time: '12:25:00 pm', value: 15 },
];

const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <h3 className='text-md text-white'>SOS Raised </h3>
        <p className='label text-light-white'>{label}</p>
      </div>
    );
  }

  return null;
};

const AriaChart = () => {
  return (
    <ResponsiveContainer width='104%' height={130}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0,
        }}>
        <XAxis dataKey='time' hide />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type='linear'
          dataKey='value'
          stroke='#E76465'
          fill='#623e3f'
          className='opacity-35'
          strokeWidth={3}
        />
        <ReferenceDot x='12:23:43 pm' y={25} r={6} fill='#FF5A5F' stroke='none'>
          <text x={-30} y={-10} fill='#fff' textAnchor='middle'>
            SOS Raised
          </text>
          <text x={-30} y={10} fill='#CFCFCF' textAnchor='middle'>
            12:23:43 pm
          </text>
        </ReferenceDot>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AriaChart;
