import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AvailableSummaries } from '../components/AvailableSummaries';

const meta: Meta<React.ComponentProps<typeof AvailableSummaries>> = {
  args: {
    periods: ['June 2024', 'Q1 2024'],
  },
  component: AvailableSummaries,
  parameters: {},
  title: 'Molecules/AvailableSummaries',
};

type Story = StoryObj<typeof AvailableSummaries>;

export const Default: Story = {};

export default meta;
