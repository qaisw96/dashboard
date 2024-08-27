import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { time: '6:00 AM', greenZone: 100, amberZone: 20, redZone: 20 },
  { time: '7:00 AM', greenZone: 100, amberZone: 30, redZone: 20 },
  { time: '8:00 AM', greenZone: 95, amberZone: 30, redZone: 20 },
  { time: '9:00 AM', greenZone: 95, amberZone: 30, redZone: 20 },
  { time: '10:00 AM', greenZone: 90, amberZone: 40, redZone: 20 },
  { time: '11:00 AM', greenZone: 90, amberZone: 50, redZone: 25 },
  { time: '12:00 PM', greenZone: 85, amberZone: 50, redZone: 30 },
  { time: '1:00 AM', greenZone: 85, amberZone: 50, redZone: 35 },
  { time: '2:00 AM', greenZone: 80, amberZone: 50, redZone: 40 },
  { time: '3:00 AM', greenZone: 75, amberZone: 50, redZone: 40 },
  { time: '4:00 AM', greenZone: 75, amberZone: 50, redZone: 45 },
  { time: '5:00 AM', greenZone: 70, amberZone: 50, redZone: 50 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip bg-[#3c4352] text-white p-3'>
        <p>{`${label}`}</p>
        <p>{`Selected Employees: ${payload[0].value}%`}</p>
        <p>{`Group Average: ${payload[1].value}%`}</p>
      </div>
    );
  }

  return null;
};

const WorkersTrendChart = () => {
  return (
    <ResponsiveContainer width='100%' height={340}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' className='opacity-25' />
        <XAxis
          dataKey='time'
          axisLine={false}
          ticks={[
            '6:00 AM',
            '7:00 AM',
            '8:00 AM',
            '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '1:00 AM',
            '2:00 AM',
            '3:00 AM',
            '4:00 AM',
            '5:00 AM',
          ]}
        />
        <YAxis
          ticks={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type='monotone'
          dataKey='greenZone'
          stroke='#34D399'
          dot={false}
        />
        <Line
          type='monotone'
          dataKey='amberZone'
          stroke='#FBBF24'
          dot={false}
          strokeDasharray='5 5'
        />
        <Line type='monotone' dataKey='redZone' stroke='#F87171' dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WorkersTrendChart;
