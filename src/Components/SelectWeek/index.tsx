import Select from 'react-select';
import { useState } from 'react';

const options = [
  { value: 'current', label: 'Эта неделя' },
  { value: 'lastWeek', label: 'Прошедшая неделя' },
  { value: 'twoWeeks', label: 'Две недели назад' },
];

interface ISelectWeek {
  className?: string,
}

const SelectWeek = ({ className }: ISelectWeek) => {
  const [value, setValue] = useState(null);

  return (
    <Select defaultValue={options[0]}
            options={options}
            className={className}
    />
  );
};

export default SelectWeek;
