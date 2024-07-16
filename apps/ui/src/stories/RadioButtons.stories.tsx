import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioButtons } from '../components/RadioButtons';

const meta: Meta<React.ComponentProps<typeof RadioButtons>> = {
  args: {
    hasOuterBorder: true,
    options: ['one', 'two', 'three'],
    value: 'one',
  },
  component: RadioButtons,
  parameters: {},
  title: 'Atoms/RadioButtons',
};

type Story = StoryObj<typeof RadioButtons>;

export const Default: Story = {};

export const Unselected: Story = {
  args: { value: undefined },
};

export const NoOuterBorder: Story = {
  args: { hasOuterBorder: false },
};

export const InContainer: Story = {
  render: ({ options }) => <RadioButtonsContainer options={options} />,
};

function RadioButtonsContainer({
  options = [],
}: {
  options?: string[];
}): React.ReactElement {
  const [selectedOption, setSelectedOption] = React.useState<string>('');
  return (
    <RadioButtons
      onChange={setSelectedOption}
      options={options}
      value={selectedOption}
    />
  );
}

export default meta;
