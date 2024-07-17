import React from 'react';

import { Dropdown } from './Dropdown';
import { Panel } from './Panel';
import { RadioButtons } from './RadioButtons';
import styles from './SummaryPanel.module.css';
import { Border } from '../utils/border';
import { noop } from '../utils/noop';
import { Padding } from '../utils/padding';

export function SummaryPanel({
  border = Border.Full,
  entries = {},
  expandedEntry = '',
  mode = Mode.Dropdown,
  onExpandEntry = noop,
}: {
  border?: Border;
  entries?: Record<string, string>;
  expandedEntry?: string;
  mode?: Mode;
  onExpandEntry?: (input: string) => void;
}): React.ReactElement {
  const keys = Object.keys(entries);
  const value = entries[expandedEntry];
  return (
    <Panel border={border} padding={Padding.None}>
      <Selector
        mode={mode}
        onChange={onExpandEntry}
        options={keys}
        value={expandedEntry}
      />
      <Text value={value} />
    </Panel>
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
