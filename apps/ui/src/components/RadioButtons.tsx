import clsx from 'clsx';
import React from 'react';

import styles from './RadioButtons.module.css';
import { noop } from '../utils/noop';

export function RadioButtons({
  hasOuterBorder = true,
  onChange = noop,
  options = [],
  value = '',
}: {
  hasOuterBorder?: boolean;
  onChange?: (input: string) => void;
  options?: string[];
  value?: string;
}): React.ReactElement {
  return (
    <fieldset
      className={clsx(styles.wrapper, !hasOuterBorder && styles.noBorder)}
    >
      {options.map((option) => (
        <div className={styles.option} key={option}>
          <input
            checked={option === value}
            id={option}
            onChange={() => onChange(option)}
            type="radio"
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </fieldset>
  );
}
