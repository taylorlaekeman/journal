import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../components/Dropdown';

const meta: Meta<React.ComponentProps<typeof Dropdown>> = {
  args: {
    hasBorder: true,
    options: ['one', 'two', 'three'],
    value: 'one',
  },
  component: Dropdown,
  parameters: {},
  title: 'Atoms/Dropdown',
};

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

export const Unselected: Story = {
  args: { value: undefined },
};

export const NoOuterBorder: Story = {
  args: { hasBorder: false },
};

export const InContainer: Story = {
  render: ({ options }) => <DropdownContainer options={options} />,
};

function DropdownContainer({
  options = [],
}: {
  options?: string[];
}): React.ReactElement {
  const [selectedOption, setSelectedOption] = React.useState<string>('');
  return (
    <Dropdown
      onChange={setSelectedOption}
      options={options}
      value={selectedOption}
    />
  );
}

export default meta;
