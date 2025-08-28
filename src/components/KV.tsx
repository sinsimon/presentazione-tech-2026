import React from 'react'
import styles from './KV.module.css'

export function KV({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <span className={styles.k}>{k}</span>
      <span className={styles.v}>{v}</span>
    </div>
  )
}


