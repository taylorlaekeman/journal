import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PageWrapper } from '../components/PageWrapper';

const meta: Meta<React.ComponentProps<typeof PageWrapper>> = {
  args: {
    children: <p>page wrapper</p>,
    title: 'Page',
  },
  component: PageWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Molecules/PageWrapper',
};

type Story = StoryObj<typeof PageWrapper>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    children: (
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    ),
  },
};

export default meta;
