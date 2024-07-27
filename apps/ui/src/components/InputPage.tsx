import React from 'react';

import { InputPanel } from './InputPanel';
import { PageWrapper } from './PageWrapper';
import { noop } from '../utils/noop';

export function InputPage({
  onChange = noop,
  title,
  value = '',
}: {
  onChange?: (input: string) => void;
  title?: string;
  value?: string;
}): React.ReactElement {
  return (
    <PageWrapper>
      <InputPanel
        onChange={onChange}
        placeholder="What did you do today?"
        title={title}
        value={value}
      />
    </PageWrapper>
  );
}
