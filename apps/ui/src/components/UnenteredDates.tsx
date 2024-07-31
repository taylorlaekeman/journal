import { DateTime } from 'luxon';
import Link from 'next/link';
import React from 'react';

import { Panel } from './Panel';
import styles from './UnenteredDates.module.css';
import { Padding } from '../utils/padding';

export function UnenteredDates({
  dates = [],
}: {
  dates?: DateTime[];
}): React.ReactElement {
  return (
    <Panel padding={Padding.None}>
      <p className={styles.header}>Unentered Dates</p>
      <ul className={styles.list}>
        {dates.map((date) => (
          <li key={date.toISODate()}>
            <Link href="">
              {date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
            </Link>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
