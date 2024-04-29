// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';

// export default function FeedbackChart() {
//   return (
//     <LineChart
//       series={[
//         {
//           data: [2, 5.5, 2, 8.5, 1.5, 5],
//         },
//       ]}
//       height={300}
//       margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
//       grid={{ vertical: true, horizontal: true }}
//     />
//   );
// }
import * as React from 'react';
import { ChartContainer } from '@mui/x-charts';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function FeedbackChart() {
  const parentRef = React.useRef(null);
  const [chartWidth, setChartWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        const width = parentRef.current.clientWidth;
        setChartWidth(width);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={parentRef} style={{ width: '100%' }}>
      <ChartContainer
        width={chartWidth}
        height={160}
        series={[{ type: 'line', data: pData }]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            stroke: '#8884d8',
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: '#8884d8',
            scale: '0.6',
            fill: '#fff',
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
        <MarkPlot />
      </ChartContainer>
    </div>
  );
}
