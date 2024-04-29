import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function ChartStudentUse() {
    const parentRef = React.useRef(null);

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

    const [chartWidth, setChartWidth] = React.useState(0);

    return (
        <div ref={parentRef} style={{ width: '100%' }}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={chartWidth}
                height={160}
            />
        </div>
    );
}
