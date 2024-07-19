import React from 'react';

import { InputPanel } from './InputPanel';
import { Panel } from './Panel';
import { Mode, SummaryPanel } from './SummaryPanel';
import { Border } from '../utils/border';
import { noop } from '../utils/noop';
import { Padding } from '../utils/padding';

export { Mode } from './SummaryPanel';

export function SummarizationView({
  entries = {},
  expandedEntry = '',
  onChangeSummary = noop,
  onExpandEntry = noop,
  selectionMode = Mode.Dropdown,
  summary = '',
  summaryTitle,
}: {
  entries?: Record<string, string>;
  expandedEntry?: string;
  onChangeSummary?: (input: string) => void;
  onExpandEntry?: (input: string) => void;
  selectionMode?: Mode;
  summary?: string;
  summaryTitle?: string;
}): React.ReactElement {
  return (
    <Panel padding={Padding.None}>
      <SummaryPanel
        border={Border.OnlyBottom}
        entries={entries}
        expandedEntry={expandedEntry}
        mode={selectionMode}
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
