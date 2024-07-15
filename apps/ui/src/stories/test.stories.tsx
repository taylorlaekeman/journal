import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<React.ComponentProps<typeof Test>> = {
  args: {},
  component: Test,
  parameters: {
    layout: 'centered',
  },
  title: 'Atoms/Test',
};

function Test(): React.ReactElement {
  return <p>test</p>;
}

type Story = StoryObj<typeof Test>;

export const Default: Story = {
  args: {},
};

export default meta;
