import clsx from 'clsx';
import { DateTime } from 'luxon';
import React from 'react';

import { Padding } from '../utils/padding';
import styles from './Calendar.module.css';
import { Panel } from './Panel';

export function Calendar({
  highlightedDays = {},
  month,
}: {
  highlightedDays?: Record<string, HighlightedDay>;
  month: DateTime;
}): React.ReactElement {
  const days = getDays({ month });
  return (
    <Panel padding={Padding.None}>
      <div className={styles.header}>
        <button>prev</button>
        <p>{month.toLocaleString({ month: 'long', year: 'numeric' })}</p>
        <button>next</button>
      </div>
      <div className={styles.body}>
        {days.map((day) => {
          const hasHighlight = day in highlightedDays;
          const highlightColour = highlightedDays[day]?.colour;
          const highlightClass = styles[`highlight-${highlightColour}`];
          return (
            <div
              className={clsx(styles.day, hasHighlight && highlightClass)}
              key={day}
            >
              <p>{day > 0 && day}</p>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

interface HighlightedDay {
  colour: Colour;
}

export enum Colour {
  Red = 'red',
}

function getDays({ month }: { month: DateTime }): number[] {
  const result = [];
  const firstDay = month.startOf('month');
  const lastDay = month.endOf('month');
  const firstDateWeekday = firstDay.weekday;
  for (let i = 0; i < firstDateWeekday; i += 1) result.push(Math.random() * -1);
  for (let day = firstDay; day < lastDay; day = day.plus({ days: 1 })) {
    result.push(day.day);
  }
  return result;
}
