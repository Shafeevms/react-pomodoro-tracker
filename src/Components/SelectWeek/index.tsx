import Select, { SingleValue } from 'react-select';
import { useAppDispatch } from '../../store/hooks';
import { changeDay, changeWeek } from '../../pages/Statistics/calendarSlice';
import { currentDay, currentWeek } from '../../helpers/data.helper';

const options = [
  { value: 'currentWeek', label: 'Эта неделя' },
  { value: 'oneWeekAgo', label: 'Прошедшая неделя' },
  { value: 'twoWeeksAgo', label: 'Две недели назад' },
];

interface ISelectWeek {
  className?: string,
}

const SelectWeek = ({ className }: ISelectWeek) => {

  const dispatch = useAppDispatch();

  const handleChange = ({ value }: SingleValue<any>) => {
    const thisWeek = currentWeek();
    const thisDay = currentDay();

    switch (value) {
      case 'oneWeekAgo': {
        dispatch(changeWeek(thisWeek - 1));
        break;
      }
      case 'twoWeeksAgo': {
        dispatch(changeWeek(thisWeek - 2));
        break;
      }
      default: {
        dispatch(changeWeek(thisWeek));
        dispatch(changeDay(thisDay));
        break;
      }
    }


  };
  return (
    <Select defaultValue={options[0]}
            options={options}
            className={className}
            onChange={(value) => handleChange(value)}
    />
  );
};

export default SelectWeek;
