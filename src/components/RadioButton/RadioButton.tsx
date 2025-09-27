import { isReactNodeNotEmpty } from '@true-engineering/true-react-platform-helpers';
import { type ReactNode, type FC } from 'react';

import useStyles from './RadioButton.styles';
import clsx from 'clsx';

export interface RadioButtonProps {
  label: ReactNode;
  name: string;
  value: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange: (value: string) => void | Promise<void>;
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  name,
  value,
  isChecked,
  onChange,
  isDisabled = false,
}) => {
  const classes = useStyles();

  return (
    <label className={clsx(classes.label, { [classes.isDisabled]: isDisabled })}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={(event) => onChange(event.target.value)}
        disabled={isDisabled}
        className={clsx(classes.input, {
          [classes.isDisabled]: isDisabled,
        })}
      />
      {isReactNodeNotEmpty(label) && <span className={classes.content}>{label}</span>}
    </label>
  );
};
