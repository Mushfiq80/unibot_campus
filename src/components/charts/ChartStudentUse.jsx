import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function ChartStudentUse() {
  return (
    <div style={{ width: '100%' }}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={1000}
        height={160}
      />
    </div>
  );
}
