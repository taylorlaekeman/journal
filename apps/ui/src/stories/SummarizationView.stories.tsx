import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SummarizationView } from '../components/SummarizationView';

const entries = {
  'Sunday, January 7, 2024': 'Sunday first\nSunday second\nSunday',
  'Monday, January 8, 2024': 'Monday first\nMonday second\nMonday',
  'Tuesday, January 9, 2024': 'Tuesday first\nTuesday second\nTuesday',
  'Wednesday, January 10, 2024': 'Wednesday first\nWednesday second\nWednesday',
  'Thursday, January 11, 2024': 'Thursday first\nThursday second\nThursday',
  'Friday, January 12, 2024': 'Friday first\nFriday second\nFriday',
  'Saturday, January 13, 2024': 'Saturday first\nSaturday second\nSaturday',
};

const meta: Meta<React.ComponentProps<typeof SummarizationView>> = {
  args: {
    entries,
    expandedEntry: 'Monday, January 8, 2024',
    summary: 'test\ntest\ntest',
    summaryTitle: 'January 7–13, 2024',
  },
  component: SummarizationView,
  parameters: {},
  title: 'Molecules/SummarizationView',
};

type Story = StoryObj<typeof SummarizationView>;

export const WeekSummary: Story = {};

export const MonthSummary: Story = {
  args: {
    entries: {
      'December 31 2023–January 6 2024': 'week one\nsecond line',
      'January 7–13 2024': 'week two\nsecond line',
      'January 14–20 2024': 'week three\nsecond line',
      'January 21–27 2024': 'week four\nsecond line',
      'January 28–February 3 2024': 'week four\nsecond line',
    },
    expandedEntry: 'December 31 2023–January 6 2024',
    summaryTitle: 'January 2024',
  },
};

export const QuarterSummary: Story = {
  args: {
    entries: {
      'January 2024': 'month one\nsecond line',
      'February 2024': 'month two\nsecond line',
      'March 2024': 'month three\nsecond line',
    },
    expandedEntry: 'January 2024',
    summaryTitle: 'Q1 2024',
  },
};

export const YearSummary: Story = {
  args: {
    entries: {
      'Q1 2024': 'quarter one\nsecond line',
      'Q2 2024': 'quarter two\nsecond line',
      'Q3 2024': 'quarter three\nsecond line',
      'Q4 2024': 'quarter four\nsecond line',
    },
    expandedEntry: 'Q1 2024',
    summaryTitle: '2024',
  },
};

export const InContainer: Story = {
  render: ({ expandedEntry, summary, ...args }) => (
    <SummarizationViewContainer
      initialExpandedEntry={expandedEntry}
      initialSummary={summary}
      {...args}
    />
  ),
};

function SummarizationViewContainer({
  entries = {},
  initialExpandedEntry = '',
  initialSummary = '',
  summaryTitle,
}: {
  entries?: Record<string, string>;
  initialExpandedEntry?: string;
  initialSummary?: string;
  summaryTitle?: string;
}): React.ReactElement {
  const [expandedEntry, setExpandedEntry] =
    React.useState<string>(initialExpandedEntry);
  const [summary, setSummary] = React.useState<string>(initialSummary);
  return (
    <SummarizationView
      entries={entries}
      expandedEntry={expandedEntry}
      onChangeSummary={setSummary}
      onExpandEntry={setExpandedEntry}
      summary={summary}
      summaryTitle={summaryTitle}
    />
  );
}

export default meta;
