import React from 'react';

import { Dropdown } from './Dropdown';
import { RadioButtons } from './RadioButtons';
import styles from './SummaryPanel.module.css';
import { noop } from '../utils/noop';

export function SummaryPanel({
  entries = {},
  expandedEntry = '',
  mode = Mode.Dropdown,
  onExpandEntry = noop,
}: {
  entries?: Record<string, string>;
  expandedEntry?: string;
  mode?: Mode;
  onExpandEntry?: (input: string) => void;
}): React.ReactElement {
  const keys = Object.keys(entries);
  const value = entries[expandedEntry];
  return (
    <div className={styles.wrapper}>
      <Selector
        mode={mode}
        onChange={onExpandEntry}
        options={keys}
        value={expandedEntry}
      />
      <Text value={value} />
    </div>
  );
}

export enum Mode {
  Dropdown = 'dropdown',
  Radio = 'radio',
}

function Selector({
  mode = Mode.Dropdown,
  onChange = noop,
  options = [],
  value = '',
}: {
  mode?: Mode;
  onChange?: (input: string) => void;
  options?: string[];
  value?: string;
}): React.ReactElement {
  switch (mode) {
    case Mode.Radio:
      return (
        <RadioButtons
          hasOuterBorder={false}
          onChange={onChange}
          options={options}
          value={value}
        />
      );
    case Mode.Dropdown:
    default:
      return (
        <Dropdown
          hasBorder={false}
          onChange={onChange}
          options={options}
          value={value}
        />
      );
  }
}

function Text({ value = '' }: { value?: string }): React.ReactElement {
  const lines = value.split('\n');
  return (
    <div className={styles.text}>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}
