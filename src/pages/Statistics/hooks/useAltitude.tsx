import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectWeekWorkData } from '../slices/statisticsSlice';

const getAltitude = (array: number[]): [number[], number] => {
  const calcMaxValue = Math.max(...array);
  const calcAltitude = (array: number[]) => {
    return array.map(number => {
      const num = Math.round((number / calcMaxValue) * 100);
      if (Number.isNaN(num)) {
        return 0;
      }
      return num;
    })
  }
  return [calcAltitude(array), calcMaxValue];
};

export const useAltitude = () => {
  const activityTime = useAppSelector(selectWeekWorkData);

  const [altitude, setAltitude] = useState<number[]>([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    const [calcAltitude, calcMaxValue] = getAltitude(activityTime);
    setAltitude(calcAltitude);
    setMaxValue(calcMaxValue);

  }, [activityTime]);

  return { altitude, maxValue };
};
