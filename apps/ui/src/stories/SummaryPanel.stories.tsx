import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Mode, SummaryPanel } from '../components/SummaryPanel';

const entries = {
  'Sunday, January 7, 2024': 'Sunday first\nSunday second\nSunday',
  'Monday, January 8, 2024': 'Monday first\nMonday second\nMonday',
  'Tuesday, January 9, 2024': 'Tuesday first\nTuesday second\nTuesday',
  'Wednesday, January 10, 2024': 'Wednesday first\nWednesday second\nWednesday',
  'Thursday, January 11, 2024': 'Thursday first\nThursday second\nThursday',
  'Friday, January 12, 2024': 'Friday first\nFriday second\nFriday',
  'Saturday, January 13, 2024': 'Saturday first\nSaturday second\nSaturday',
};

const meta: Meta<React.ComponentProps<typeof SummaryPanel>> = {
  args: {
    entries,
    expandedEntry: 'Monday, January 8, 2024',
    mode: Mode.Dropdown,
  },
  component: SummaryPanel,
  parameters: {},
  title: 'Molecules/SummaryPanel',
};

type Story = StoryObj<typeof SummaryPanel>;

export const Default: Story = {};

export const Radio: Story = {
  args: { mode: Mode.Radio },
};

export const InContainer: Story = {
  render: ({ entries, expandedEntry }) => (
    <SummaryPanelContainer
      entries={entries}
      initialExpandedEntry={expandedEntry}
    />
  ),
};

function SummaryPanelContainer({
  entries = {},
  initialExpandedEntry = '',
}: {
  entries?: Record<string, string>;
  initialExpandedEntry?: string;
}): React.ReactElement {
  const [expandedEntry, setExpandedEntry] =
    React.useState<string>(initialExpandedEntry);
  return (
    <SummaryPanel
      entries={entries}
      expandedEntry={expandedEntry}
      onExpandEntry={setExpandedEntry}
    />
  );
}

export default meta;
