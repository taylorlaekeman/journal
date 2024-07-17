import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Border, Padding, Panel } from '../components/Panel';

const meta: Meta<React.ComponentProps<typeof Panel>> = {
  args: {
    border: Border.Full,
    children: 'panel',
    padding: Padding.Full,
  },
  component: Panel,
  parameters: {},
  title: 'Atoms/Panel',
};

type Story = StoryObj<typeof Panel>;

export const Default: Story = {};

export const ShortPadding: Story = {
  args: {
    padding: Padding.Short,
  },
};

export const NoPadding: Story = {
  args: {
    padding: Padding.None,
  },
};

export const OnlyBottomBorder: Story = {
  args: {
    border: Border.OnlyBottom,
  },
};

export const NoBorder: Story = {
  args: {
    border: Border.None,
  },
};

export default meta;
