import React from 'react'
import styles from './Badge.module.css'

type Variant = 'default' | 'mkt' | 'tech' | 'warn' | 'danger' | 'good'

export function Badge({ children, variant = 'default', className }: { children: React.ReactNode; variant?: Variant; className?: string }) {
  const variantClass =
    variant === 'mkt' ? styles.mkt :
    variant === 'tech' ? styles.tech :
    variant === 'warn' ? styles.warn :
    variant === 'danger' ? styles.danger :
    variant === 'good' ? styles.good :
    undefined
  return (
    <span className={[styles.badge, variantClass, className].filter(Boolean).join(' ')}>{children}</span>
  )
}

export default Badge


