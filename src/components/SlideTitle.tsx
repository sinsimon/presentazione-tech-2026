// Namespace globale semplice per evitare bundler: i componenti vivono in window.App
import React from 'react';
import styles from './SlideTitle.module.css'

export function SlideTitle({ children }: { children: any }) {
  return <h1 className={styles.title}>{children}</h1>;
}


