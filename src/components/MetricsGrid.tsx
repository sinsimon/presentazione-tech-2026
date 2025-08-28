import React from 'react'
import { MetricsPanel } from './MetricsPanel'
import styles from './MetricsGrid.module.css'

export function MetricsGrid({ leftItems = [] as Array<{ k: string; v: React.ReactNode }>, rightItems = [] as Array<{ k: string; v: React.ReactNode }> }) {
  return (
    <div className={styles.grid}>
      <MetricsPanel items={leftItems} />
      <MetricsPanel items={rightItems} />
    </div>
  )
}


