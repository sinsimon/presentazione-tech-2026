import React from 'react'
import { KV } from './KV'

export function MetricsPanel({ items = [] as Array<{ k: string; v: React.ReactNode }> }) {
  return (
    <div className="panel">
      {items.map((it, i) => (
        <KV key={i} k={it.k} v={it.v} />
      ))}
    </div>
  )
}


