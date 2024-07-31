import Link from 'next/link';
import React from 'react';

import { Panel } from './Panel';
import styles from './AvailableSummaries.module.css';
import { Padding } from '../utils/padding';

export function AvailableSummaries({
  periods = [],
}: {
  periods?: string[];
}): React.ReactElement {
  return (
    <Panel padding={Padding.None}>
      <p className={styles.header}>Available Summaries</p>
      <ul className={styles.list}>
        {periods.map((period) => (
          <li key={period}>
            <Link href="">{period}</Link>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
