import React from 'react';

import styles from './InputPanel.module.css';
import { Panel } from './Panel';
import { Border } from '../utils/border';
import { noop } from '../utils/noop';
import { Padding } from '../utils/padding';

export function InputPanel({
  border = Border.Full,
  id,
  onChange = noop,
  placeholder = '',
  title,
  value = '',
}: {
  border?: Border;
  id?: string;
  onChange?: (newValue: string) => void;
  placeholder?: string;
  title?: string;
  value?: string;
}): React.ReactElement {
  const scopedId = getId(id);
  const lineCount = (value || '').split('\n').length;
  const rowCount = Math.max(lineCount, 3);
  return (
    <Panel
      border={border}
      className={styles.inputPanelWrapper}
      id={scopedId}
      padding={Padding.None}
    >
      {title !== undefined && (
        <label htmlFor={`${scopedId}-input`}>{title}</label>
      )}
      <textarea
        id={`${scopedId}-input`}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rowCount}
        value={value}
      />
    </Panel>
  );
}

function getId(id?: string): string {
  if (id === undefined) return 'input-panel';
  return `input-panel-${id}`;
}
