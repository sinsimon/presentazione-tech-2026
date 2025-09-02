import React from 'react'
import { SlideTitle, Nav, MetricsPanel } from '@components'
import tableStyles from '../../components/DataTable.module.css'

const DEFAULT_GIORNI_H1_PER_PERSONA = 120

// Utilization e Prezzo Giorno come nella slide CaricoMassimo
const UTILIZATION: Record<string, number> = {
  'Erica': 0.81,
  'Fabio': 0.79,
  'Giada': 0.45,
  'Margherita': 0.91,
  'Cristiano': 0.93,
  'Elisabetta': 0.90,
  'Pierpaolo': 0.93,
}

const PREZZO_GIORNO: Record<string, number> = {
  'Erica': 555,
  'Fabio': 632,
  'Giada': 478,
  'Margherita': 501,
  'Cristiano': 555,
  'Elisabetta': 478,
  'Pierpaolo': 555,
}

// RAL da CSV Andamento Tech Jun 30 2025.csv (sezione Totale Personale)
const RAL: Record<string, number> = {
  'Erica': 32952,
  'Fabio': 42000,
  'Giada': 24720,
  'Margherita': 32952,
  'Cristiano': 35700,
  'Elisabetta': 21408,
  'Pierpaolo': 35700,
}

// CSV tab 2 per quote progetto per persona
const CSV2 = `,CRIS,FATT CRIS,ERICA,FATT ERICA,PIER,FATT PIER,GIADA,FATT GIADA,MEG,FATT MEG,BETTA,FATT BETTA,FABE,FATT FABE,TOTALE FATTURATO
AVACY,35%,€ 48.462,13%,€ 18.000,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,4%,€ 5.538,€ 72.000
BLOOM,0%,€ 0,22%,€ 9.600,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,€ 9.600
IT,15%,€ 0,4%,€ 0,0%,€ 0,36%,€ 0,1%,€ 0,2%,€ 0,14%,€ 0,€ 0
RAI,15%,€ 7.500,3%,€ 1.500,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,42%,€ 21.000,€ 30.000
SCAT,13%,€ 6.319,10%,€ 4.861,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,€ 11.180
SITO JUMP,0%,€ 0,8%,€ 0,0%,€ 0,2%,€ 0,27%,€ 0,4%,€ 0,3%,€ 0,€ 0
ECO-CRE,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,3%,€ 3.000,€ 3.000
EUROGAMES,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,2%,€ 1.200,€ 1.200
RIUNIONI,5%,€ 0,2%,€ 0,0%,€ 0,0%,€ 0,4%,€ 0,4%,€ 0,1%,€ 0,€ 0
FORMAZIONE,0%,€ 0,7%,€ 0,4%,€ 0,3%,€ 0,4%,€ 0,4%,€ 0,0%,€ 0,€ 0
TREVI FIN,0%,€ 0,0%,€ 0,2%,€ 0,0%,€ 0,0%,€ 0,2%,€ 0,0%,€ 0,€ 0
MAIOR MOVER,0%,€ 0,0%,€ 0,2%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,€ 0
RELATA,0%,€ 0,0%,€ 0,4%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,€ 0
MOONEY,3%,€ 10.250,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,€ 10.250
EXPERT AI,0%,€ 0,6%,€ 3.367,2%,€ 1.122,8%,€ 4.489,23%,€ 12.907,4%,€ 2.245,0%,€ 0,€ 24.130
R&D TECH,0%,€ 0,0%,€ 0,5%,€ 0,0%,€ 0,4%,€ 0,0%,€ 0,€ 0
SDB,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,3%,€ 1.490,0%,€ 0,€ 1.490
MVG,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,4%,€ 0,0%,€ 0,€ 0
SVILUPPO BUSINESS,0%,€ 0,0%,€ 0,0%,€ 0,4%,€ 0,2%,€ 0,3%,€ 0,0%,€ 0,€ 0
ORDINE ARCHITETTI,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,11%,€ 4.400,€ 4.400
ARMERIA INNOCENTI,0%,€ 0,5%,€ 0,0%,€ 9.450,0%,€ 0,0%,€ 0,0%,€ 0,€ 9.450
KOLINPHARMA,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,8%,€ 18.837,0%,€ 0,€ 18.837
OUM,0%,€ 0,4%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,10%,€ 0,0%,€ 0,€ 0
FA ESTATE,0%,€ 0,0%,€ 0,0%,€ 0,2%,€ 277,0%,€ 0,14%,€ 1.937,0%,€ 0,€ 2.213
ALIMENTA,0%,€ 0,7%,€ 3.919,0%,€ 0,1%,€ 560,18%,€ 10.078,2%,€ 1.120,12%,€ 6.719,€ 22.397
TAS,0%,€ 0,0%,€ 0,0%,€ 0,1%,€ 1.132,0%,€ 0,1%,€ 1.132,1%,€ 1.132,€ 3.395
EMILAV,0%,€ 0,0%,€ 0,0%,€ 0,1%,€ 3.250,0%,€ 0,0%,€ 0,0%,€ 0,€ 3.250
ALPS,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,4%,€ 9.216,0%,€ 0,€ 9.216
ALMO NATURE,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,5%,€ 0,0%,€ 0,€ 0
MUSEI SAN DOMENICO,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,5%,€ 0,0%,€ 0,€ 0
FLAMIGNI,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,7%,€ 5.332,7%,€ 5.332,0%,€ 0,€ 10.665
AHOLDING,0%,€ 0,0%,€ 0,0%,€ 0,7%,€ 7.000,0%,€ 0,0%,€ 0,0%,€ 0,€ 7.000
AMS,0%,€ 0,0%,€ 0,0%,€ 0,20%,€ 73.243,0%,€ 0,1%,€ 3.662,2%,€ 7.324,€ 84.230
TUMIDEI,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,0%,€ 0,1%,€ 0,€ 0
ROBINSON AMS,0%,€ 0,0%,€ 0,17%,€ 19.722,0%,€ 0,0%,€ 0,0%,€ 0,€ 19.722
ROBINSON SITO,3%,€ 1.778,0%,€ 0,64%,€ 37.938,3%,€ 1.778,10%,€ 5.928,1%,€ 593,1%,€ 593,€ 48.608
TOTALE fatturato,89%,€ 74.309,91%,€ 41.247,95%,€ 68.232,93%,€ 91.729,96%,€ 34.245,92%,€ 45.563,97%,€ 50.906,€ 406.232`

function parseEuro(s: string): number { const d = s.replace(/[^0-9]/g, ''); return d ? parseInt(d, 10) : 0 }
function formatEuro(n: number): string { return n.toLocaleString('it-IT', { maximumFractionDigits: 0 }) }

type Person = keyof typeof UTILIZATION

function readTotals(csv: string) {
  const lines = csv.trim().split(/\r?\n/)
  const idx = { CRIS: { pct: 1, val: 2 }, ERICA: { pct: 3, val: 4 }, PIER: { pct: 5, val: 6 }, GIADA: { pct: 7, val: 8 }, MEG: { pct: 9, val: 10 }, BETTA: { pct: 11, val: 12 }, FABE: { pct: 13, val: 14 } }
  const totals: Record<string, number> = {}
  const rowMap: Record<string, Record<Person, number>> = {}
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',')
    const project = cols[0]
    if (project.toLowerCase().startsWith('totale')) {
      totals['Cristiano'] = parseEuro(cols[idx.CRIS.val])
      totals['Erica'] = parseEuro(cols[idx.ERICA.val])
      totals['Pierpaolo'] = parseEuro(cols[idx.PIER.val])
      totals['Giada'] = parseEuro(cols[idx.GIADA.val])
      totals['Margherita'] = parseEuro(cols[idx.MEG.val])
      totals['Elisabetta'] = parseEuro(cols[idx.BETTA.val])
      totals['Fabio'] = parseEuro(cols[idx.FABE.val])
    }
    if (project === 'AMS' || project === 'AVACY') {
      const pct = (s: string) => parseFloat((s || '').replace('%', '').replace(',', '.')) || 0
      rowMap[project] = {
        'Cristiano': pct(cols[idx.CRIS.pct]),
        'Erica': pct(cols[idx.ERICA.pct]),
        'Pierpaolo': pct(cols[idx.PIER.pct]),
        'Giada': pct(cols[idx.GIADA.pct]),
        'Margherita': pct(cols[idx.MEG.pct]),
        'Elisabetta': pct(cols[idx.BETTA.pct]),
        'Fabio': pct(cols[idx.FABE.pct]),
      }
    }
  }
  return { totals, rows: rowMap as { [k in 'AMS' | 'AVACY']: Record<Person, number> } }
}

export function SlideCostiH1() {
  const giorni = DEFAULT_GIORNI_H1_PER_PERSONA
  const people: Person[] = ['Erica', 'Fabio', 'Giada', 'Margherita', 'Cristiano', 'Elisabetta', 'Pierpaolo']

  // KV configurabili
  const [costiSoftCommesse, setCostiSoftCommesse] = React.useState<number>(42937)
  const [costiIndirettiJump, setCostiIndirettiJump] = React.useState<number>(1100000)
  const costiIndirettiTech = Math.round((costiIndirettiJump / 37) * 8) // non modificabile
  const [costoAMS, setCostoAMS] = React.useState<number>(31200)
  const [costoAvacy, setCostoAvacy] = React.useState<number>(3000)
  const [costoSimone, setCostoSimone] = React.useState<number>(42000)
  const perHeadSoftCommesse = costiSoftCommesse / people.length
  const perHeadIndiretti = costiIndirettiTech / people.length

  const { totals, rows } = React.useMemo(() => readTotals(CSV2), [])

  // Quote AMS e AVACY per persona (proporzionali ai pct sul totale dei pct delle persone considerate)
  function allocateByPct(total: number, row: Record<Person, number>): Record<Person, number> {
    const sum = people.reduce((acc, p) => acc + (row[p] || 0), 0)
    const result: Record<Person, number> = { 'Erica': 0, 'Fabio': 0, 'Giada': 0, 'Margherita': 0, 'Cristiano': 0, 'Elisabetta': 0, 'Pierpaolo': 0 }
    if (sum <= 0) return result
    people.forEach(p => { result[p] = (row[p] || 0) / sum * total })
    return result
  }

  const shareAMS = allocateByPct(costoAMS, rows.AMS)
  const shareAvacy = allocateByPct(costoAvacy, rows.AVACY)

  // AMS manuale (prima chiamato hosting) e Simone: ripartizione percentuale configurabile a livello riga
  const [amsPct, setAmsPct] = React.useState<Record<Person, number>>(() => ({
    'Erica': 1,
    'Fabio': 10,
    'Giada': 85,
    'Margherita': 1,
    'Cristiano': 0,
    'Elisabetta': 2,
    'Pierpaolo': 1,
  }))
  const [simonePct, setSimonePct] = React.useState<Record<Person, number>>(() => ({

    'Erica': 17,     
    'Fabio': 17,     
    'Cristiano': 22,   
    'Giada': 17,       
    'Margherita': 9,   
    'Elisabetta': 9,   
    'Pierpaolo': 9, 
  }))

  const rowsData = people.map(nome => {
    const util = UTILIZATION[nome]
    const prezzo = PREZZO_GIORNO[nome]
    const fattMax = Math.round(giorni * util * prezzo)
    const fattReale = totals[nome] || 0
    const amsShareManual = Math.round(costoAMS * ((amsPct[nome] || 0) / 100))
    const simoneShare = Math.round(costoSimone * ((simonePct[nome] || 0) / 100))
    return {
      nome,
      fattMax,
      fattReale,
      ral: RAL[nome] || 0,
      costiTech: Math.round(perHeadSoftCommesse),
      amsPct: amsPct[nome] || 0,
      ams: amsShareManual,
      simonePct: simonePct[nome] || 0,
      simone: simoneShare,
      // Indiretti = quota pro-capite + ripartizione Avacy; (AMS gestito nella colonna dedicata)
      indiretti: Math.round(perHeadIndiretti + (shareAvacy[nome] || 0)),
    }
  })

  const left = [
    { k: 'Costi Software + Commesse Tech (annui)', v: (
      <input type="number" value={costiSoftCommesse} onChange={e => setCostiSoftCommesse(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: 'Costi Indiretti Jump (annui)', v: (
      <input type="number" value={costiIndirettiJump} onChange={e => setCostiIndirettiJump(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: 'Costi Indiretti Tech (calcolato)', v: `${formatEuro(costiIndirettiTech)} €` },
    { k: 'Indiretti per persona', v: `${formatEuro(perHeadIndiretti)} €` },
  ]
  const right = [
    { k: 'Costo AMS (annui)', v: (
      <input type="number" value={costoAMS} onChange={e => setCostoAMS(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: 'Costo Avacy (annui)', v: (
      <input type="number" value={costoAvacy} onChange={e => setCostoAvacy(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: 'Costo Simone (annui)', v: (
      <input type="number" value={costoSimone} onChange={e => setCostoSimone(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
  ]

  const tot = rowsData.reduce((acc, r) => ({
    fattMax: acc.fattMax + r.fattMax,
    fattReale: acc.fattReale + r.fattReale,
    ral: acc.ral + r.ral,
    costiTech: acc.costiTech + r.costiTech,
    ams: acc.ams + (r.ams || 0),
    indiretti: acc.indiretti + r.indiretti,
  }), { fattMax: 0, fattReale: 0, ral: 0, costiTech: 0, ams: 0, indiretti: 0 })

  return (
    <div className="container">
      <header className="bar"><SlideTitle>Costi H1 per persona (senza Simone)</SlideTitle><Nav /></header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0 22px' }}>
        <MetricsPanel items={left} />
        <MetricsPanel items={right} />
      </div>
      <div className={`${tableStyles.panel} ${tableStyles.scrollY}`}>
        <table className={tableStyles.table}>
          {(() => {
            const weights = [1, 1, 1, 1, 1, 1, 1, 1, 1]
            const total = weights.reduce((a, b) => a + b, 0)
            const widths = weights.map(w => `${(w / total) * 100}%`)
            return (<colgroup>{widths.map((w, i) => (<col key={i} style={{ width: w }} />))}</colgroup>)
          })()}
          <thead>
            <tr>
              <th>Nome</th>
              <th className={tableStyles.right}>Fatturato H1 max</th>
              <th className={tableStyles.right}>Fatturato H1 raggiunto</th>
              <th className={tableStyles.right}>RAL</th>
              <th className={tableStyles.right}>Costi Tech (Soft+Commesse)</th>
              <th className={tableStyles.right}>AMS %</th>
              <th className={tableStyles.right}>AMS</th>
              <th className={tableStyles.right}>Simo %</th>
              <th className={tableStyles.right}>Simo</th>
              <th className={tableStyles.right}>Costi indiretti</th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map((r, i) => (
              <tr key={i}>
                <td>{r.nome}</td>
                <td className={tableStyles.right}>{formatEuro(r.fattMax)}</td>
                <td className={tableStyles.right}>{formatEuro(r.fattReale)}</td>
                <td className={tableStyles.right}>{formatEuro(r.ral)}</td>
                <td className={tableStyles.right}>{formatEuro(r.costiTech)}</td>
                <td className={tableStyles.right}>
                  <input type="number" min={0} max={100} value={r.amsPct}
                    onChange={(e) => setAmsPct(prev => ({ ...prev, [rowsData[i].nome]: Number(e.target.value) }))}
                    style={{ width: 72, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
                </td>
                <td className={tableStyles.right}>{formatEuro(r.ams)}</td>
                <td className={tableStyles.right}>
                  <input type="number" min={0} max={100} value={r.simonePct}
                    onChange={(e) => setSimonePct(prev => ({ ...prev, [rowsData[i].nome]: Number(e.target.value) }))}
                    style={{ width: 72, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
                </td>
                <td className={tableStyles.right}>{formatEuro(r.simone)}</td>
                <td className={tableStyles.right}>{formatEuro(r.indiretti)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className={tableStyles.muted}>Totali</td>
              <td className={tableStyles.right}>{formatEuro(tot.fattMax)}</td>
              <td className={tableStyles.right}>{formatEuro(tot.fattReale)}</td>
              <td className={tableStyles.right}>{formatEuro(tot.ral)}</td>
              <td className={tableStyles.right}>{formatEuro(tot.costiTech)}</td>
              <td></td>
              <td className={tableStyles.right}>{formatEuro(rowsData.reduce((a, r) => a + (r.ams || 0), 0))}</td>
              <td></td>
              <td className={tableStyles.right}>{formatEuro(rowsData.reduce((a, r) => a + (r.simone || 0), 0))}</td>
              <td className={tableStyles.right}>{formatEuro(tot.indiretti)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="muted">Note: Costi indiretti per persona = quota pro-capite + Avacy (quota AMS gestita separatamente). Software/Commesse ripartiti su 7 persone. Simone escluso dalla tabella.</p>
    </div>
  )
}

export default SlideCostiH1


