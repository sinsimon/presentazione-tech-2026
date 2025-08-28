import React from 'react'
import styles from './DataTable.module.css'

export function DataTable({ rows = [] as Array<{ nome: string; util: string; giorni: string; ricavo: string }>, footer }: { rows?: Array<{ nome: string; util: string; giorni: string; ricavo: string }>; footer?: { giorni: string; ricavo: string } }) {
  return (
    <div className={styles.panel}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th className={styles.right}>Utilization</th>
            <th className={styles.right}>Giorni fatturabili</th>
            <th className={styles.right}>Ricavo stimato (€)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.nome}</td>
              <td className={styles.right}>{r.util}</td>
              <td className={styles.right}>{r.giorni}</td>
              <td className={styles.right}>{r.ricavo}</td>
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr>
              <td className={styles.muted}>Totali</td>
              <td></td>
              <td className={styles.right}>{footer.giorni}</td>
              <td className={styles.right}>{footer.ricavo}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}


