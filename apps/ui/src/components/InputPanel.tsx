import React from 'react';

import styles from './InputPanel.module.css';
import { noop } from '../utils/noop';

export function InputPanel({
  id,
  onChange = noop,
  title,
  value,
}: {
  id?: string;
  onChange?: (newValue: string) => void;
  title?: string;
  value?: string;
}): React.ReactElement {
  const scopedId = getId(id);
  return (
    <div id={scopedId} className={styles.wrapper}>
      {title !== undefined && (
        <label htmlFor={`${scopedId}-input`}>{title}</label>
      )}
      <textarea
        id={`${scopedId}-input`}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
}

function getId(id?: string): string {
  if (id === undefined) return 'input-panel';
  return `input-panel-${id}`;
}
