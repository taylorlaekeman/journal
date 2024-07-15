import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { InputPanel } from '../components/InputPanel';

const meta: Meta<React.ComponentProps<typeof InputPanel>> = {
  args: {
    onChange: fn(),
    title: 'January 1, 2024',
    value: '-test\n-test\n-test',
  },
  component: InputPanel,
  parameters: {},
  title: 'Atoms/InputPanel',
};

type Story = StoryObj<typeof InputPanel>;

export const Default: Story = {};

export const InContainer: Story = {
  render: ({ title, value }) => (
    <InputPanelContainer initialValue={value} title={title} />
  ),
};

function InputPanelContainer({
  initialValue = '',
  title,
}: {
  initialValue?: string;
  title?: string;
}): React.ReactElement {
  const [value, setValue] = React.useState<string>(initialValue);
  return <InputPanel onChange={setValue} title={title} value={value} />;
}

export default meta;
