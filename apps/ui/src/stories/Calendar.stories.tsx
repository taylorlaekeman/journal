import { DateTime } from 'luxon';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Calendar, Colour } from '../components/Calendar';

const meta: Meta<React.ComponentProps<typeof Calendar>> = {
  args: {
    highlightedDays: {},
    month: DateTime.fromISO('2024-01'),
  },
  component: Calendar,
  parameters: {},
  title: 'Atoms/Calendar',
};

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const HighlightedDays: Story = {
  args: {
    highlightedDays: {
      13: { colour: Colour.Red },
      21: { colour: Colour.Red },
    },
  },
};

export default meta;
