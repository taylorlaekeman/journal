import clsx from 'clsx';
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
  return (
    <Panel border={border} padding={Padding.None}>
      {Object.entries(entries).map(([key, value], index) => (
        <div key={key}>
          <Text hasBorderTop={index !== 0} value={key} />
          <Text value={value} />
        </div>
      ))}
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

function Text({
  hasBorderTop = true,
  value = '',
}: {
  hasBorderTop?: boolean;
  value?: string;
}): React.ReactElement {
  const lines = value.split('\n');
  return (
    <div className={clsx(styles.text, hasBorderTop && styles.borderTop)}>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}
