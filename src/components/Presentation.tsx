import React from 'react';
import styles from './Nav.module.css'
const NavContext = React.createContext<any>(null);

export function Nav() {
  const ctx = React.useContext(NavContext)!;
  const atStart = ctx.index === 0;
  const atEnd = ctx.index === ctx.total - 1;
  return (
    <nav className={styles.nav}>
      <a className={styles.badge} href="#" aria-disabled={atStart} onClick={(e) => { e.preventDefault(); if (!atStart) ctx.prev(); }}>← Indietro</a>
      <a className={styles.badge} href="#" aria-disabled={atEnd} onClick={(e) => { e.preventDefault(); if (!atEnd) ctx.next(); }}>Avanti →</a>
    </nav>
  );
}

export function Presentation({ children }: { children: any }) {
  const [index, setIndex] = React.useState(0);
  const total = React.Children.count(children);
  const current = React.Children.toArray(children)[index];
  const value = { index, total, next: () => setIndex(i => Math.min(i + 1, total - 1)), prev: () => setIndex(i => Math.max(i - 1, 0)) };
  return <NavContext.Provider value={value}>{current}</NavContext.Provider>;
}


