import clsx from 'clsx';
import React from 'react';

import styles from './Panel.module.css';
import { Border } from '../utils/border';
import { Padding } from '../utils/padding';

export function Panel({
  border = Border.Full,
  children = '',
  className: inputClassName = '',
  id,
  padding = Padding.Full,
}: {
  border?: Border;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  padding?: Padding;
}): React.ReactElement {
  return (
    <div
      className={clsx(
        styles.panelWrapper,
        styles[`padding-${padding}`],
        styles[`border-${border}`],
        inputClassName
      )}
      id={id}
    >
      {children}
    </div>
  );
}
