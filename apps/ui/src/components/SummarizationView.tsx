import React from 'react';

import { InputPanel } from './InputPanel';
import { Panel } from './Panel';
import styles from './SummarizationView.module.css';
import { SummaryPanel } from './SummaryPanel';
import { Border } from '../utils/border';
import { noop } from '../utils/noop';
import { Padding } from '../utils/padding';

export function SummarizationView({
  entries = {},
  expandedEntry = '',
  onChangeSummary = noop,
  onExpandEntry = noop,
  summary = '',
  summaryTitle,
}: {
  entries?: Record<string, string>;
  expandedEntry?: string;
  onChangeSummary?: (input: string) => void;
  onExpandEntry?: (input: string) => void;
  summary?: string;
  summaryTitle?: string;
}): React.ReactElement {
  return (
    <Panel padding={Padding.None}>
      <SummaryPanel
        border={Border.OnlyBottom}
        entries={entries}
        expandedEntry={expandedEntry}
        onExpandEntry={onExpandEntry}
      />
      <InputPanel
        border={Border.None}
        onChange={onChangeSummary}
        placeholder="Enter your summary here"
        title={summaryTitle}
        value={summary}
      />
    </Panel>
  );
}
