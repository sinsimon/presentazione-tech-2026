import React from 'react'
import styles from './DataTable.module.css'

type Row = {
  nome: string;
  util: string;
  giorni: string;
  ricavo: string;
  prezzoGiorno?: string;
  utilValue?: number; // opzionale: valore numerico (percentuale 0-100)
  prezzoGiornoValue?: number; // opzionale: valore numerico €/giorno
}

export function DataTable(
  {
    rows = [] as Array<Row>,
    footer,
    editable,
    onChange,
  }: {
    rows?: Array<Row>;
    footer?: { giorni: string; ricavo: string };
    editable?: { utilization?: boolean; prezzoGiorno?: boolean };
    onChange?: (index: number, field: 'utilization' | 'prezzoGiorno', value: number) => void;
  }
) {
  const showPrezzoGiorno = rows.some((r: any) => r && r.prezzoGiorno !== undefined)
  return (
    <div className={styles.panel}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th className={styles.right}>Utilization</th>
            <th className={styles.right}>Giorni fatturabili</th>
            {showPrezzoGiorno && <th className={styles.right}>Costo uscita a Giorno</th>}
            <th className={styles.right}>Ricavo stimato (€)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const utilNumber = r.utilValue !== undefined
              ? r.utilValue
              : (typeof r.util === 'string' ? parseFloat(String(r.util).replace('%', '').replace(',', '.')) : 0);
            const prezzoNumber = r.prezzoGiornoValue !== undefined
              ? r.prezzoGiornoValue
              : (r.prezzoGiorno ? parseInt(String(r.prezzoGiorno).replace(/\./g, ''), 10) : 0);
            return (
              <tr key={i}>
                <td>{r.nome}</td>
                <td className={styles.right}>
                  {editable?.utilization && onChange ? (
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={isNaN(utilNumber) ? '' : utilNumber}
                      onChange={(e) => onChange(i, 'utilization', Number(e.target.value))}
                      style={{ width: 72, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }}
                    />
                  ) : (
                    r.util
                  )}
                </td>
                <td className={styles.right}>{r.giorni}</td>
                {showPrezzoGiorno && (
                  <td className={styles.right}>
                    {editable?.prezzoGiorno && onChange ? (
                      <input
                        type="number"
                        min={0}
                        value={isNaN(prezzoNumber) ? '' : prezzoNumber}
                        onChange={(e) => onChange(i, 'prezzoGiorno', Number(e.target.value))}
                        style={{ width: 82, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }}
                      />
                    ) : (
                      r.prezzoGiorno ?? ''
                    )}
                  </td>
                )}
                <td className={styles.right}>{r.ricavo}</td>
              </tr>
            )
          })}
        </tbody>
        {footer && (
          <tfoot>
            <tr>
              <td className={styles.muted}>Totali</td>
              <td></td>
              <td className={styles.right}>{footer.giorni}</td>
              {showPrezzoGiorno && <td></td>}
              <td className={styles.right}>{footer.ricavo}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}


