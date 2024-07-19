import React from 'react';

import { PageWrapper } from './PageWrapper';
import { Mode, SummarizationView } from './SummarizationView';
import { noop } from '../utils/noop';

export function SummarizationPage({
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
    <PageWrapper>
      <SummarizationView
        entries={entries}
        expandedEntry={expandedEntry}
        onChangeSummary={onChangeSummary}
        onExpandEntry={onExpandEntry}
        selectionMode={selectionMode}
        summary={summary}
        summaryTitle={summaryTitle}
      />
    </PageWrapper>
  );
}
