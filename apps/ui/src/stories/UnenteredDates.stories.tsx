import { DateTime } from 'luxon';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { UnenteredDates } from '../components/UnenteredDates';

const meta: Meta<React.ComponentProps<typeof UnenteredDates>> = {
  args: {
    dates: [
      DateTime.fromISO('2020-01-22'),
      DateTime.fromISO('2020-01-17'),
      DateTime.fromISO('2020-01-11'),
    ],
  },
  component: UnenteredDates,
  parameters: {},
  title: 'Molecules/UnenteredDates',
};

type Story = StoryObj<typeof UnenteredDates>;

export const Default: Story = {};

export default meta;
