import React from 'react';

import styles from './PageWrapper.module.css';

export function PageWrapper({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.bodyWrapper}>
        <main className={styles.body}>{children}</main>
      </div>
    </div>
  );
}

function Header(): React.ReactNode {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>
          <a href="/">Journal</a>
        </h1>
      </header>
    </div>
  );
}
