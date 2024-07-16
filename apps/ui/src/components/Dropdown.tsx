import clsx from 'clsx';
import React from 'react';

import styles from './Dropdown.module.css';
import { noop } from '../utils/noop';

export function Dropdown({
  hasBorder = true,
  onChange = noop,
  options = [],
  value = '',
}: {
  hasBorder?: boolean;
  onChange?: (input: string) => void;
  options?: string[];
  value?: string;
}): React.ReactElement {
  return (
    <select
      onChange={(event) => onChange(event.target.value)}
      className={clsx(styles.wrapper, !hasBorder && styles.noBorder)}
      value={value}
    >
      <option value="">Please select</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
