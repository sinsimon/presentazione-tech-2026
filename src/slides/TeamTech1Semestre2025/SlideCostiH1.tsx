import React from 'react'
import { SlideTitle, Nav, MetricsPanel } from '@components'
import tableStyles from '../../components/DataTable.module.css'

const DEFAULT_GIORNI_H1_PER_PERSONA = 115

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

const H1_FACTORS: Record<string, number> = { 'AVACY': 0.5, 'AMS': 0.6, 'ROBINSON SITO': 0.6, 'KOLINPHARMA': 0.5 }

function readTotals(csv: string) {
  const lines = csv.trim().split(/\r?\n/)
  const idx = { CRIS: { pct: 1, val: 2 }, ERICA: { pct: 3, val: 4 }, PIER: { pct: 5, val: 6 }, GIADA: { pct: 7, val: 8 }, MEG: { pct: 9, val: 10 }, BETTA: { pct: 11, val: 12 }, FABE: { pct: 13, val: 14 } }
  const totals: Record<string, number> = { 'Cristiano': 0, 'Erica': 0, 'Pierpaolo': 0, 'Giada': 0, 'Margherita': 0, 'Elisabetta': 0, 'Fabio': 0 }
  const rowMap: Record<string, Record<Person, number>> = {}
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',')
    const project = cols[0]
    if (project.toLowerCase().startsWith('totale')) continue
    const factor = H1_FACTORS[project] ?? 1
    const add = (valStr: string, key: string) => { totals[key] += Math.round(parseEuro(valStr || '') * factor) }
    add(cols[idx.CRIS.val], 'Cristiano')
    add(cols[idx.ERICA.val], 'Erica')
    add(cols[idx.PIER.val], 'Pierpaolo')
    add(cols[idx.GIADA.val], 'Giada')
    add(cols[idx.MEG.val], 'Margherita')
    add(cols[idx.BETTA.val], 'Elisabetta')
    add(cols[idx.FABE.val], 'Fabio')
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
  // Valori annui; in H1 applichiamo una ripartizione al 50%
  const [costiSoftCommesse, setCostiSoftCommesse] = React.useState<number>(8737)
  const [costiIndirettiTech, setCostiIndirettiTech] = React.useState<number>(Math.round((1100000 / 37) * 8))
  const [costoAMS, setCostoAMS] = React.useState<number>(31200)
  const [costoAvacy, setCostoAvacy] = React.useState<number>(3000)
  const [costoSimone, setCostoSimone] = React.useState<number>(42000)
  const [simulateH2, setSimulateH2] = React.useState(false)
  const periodFactor = simulateH2 ? 1 : 0.5
  const perHeadSoftCommesse = (costiSoftCommesse * periodFactor) / people.length
  const perHeadIndiretti = (costiIndirettiTech * periodFactor) / people.length

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
  const [avacyPct, setAvacyPct] = React.useState<Record<Person, number>>(() => ({
    'Cristiano': 55,
    'Erica': 35,
    'Fabio': 10,
    'Giada': 0,
    'Margherita': 0,
    'Elisabetta': 0,
    'Pierpaolo': 0,
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
    const amsShareManual = Math.round((costoAMS * periodFactor) * ((amsPct[nome] || 0) / 100))
    const avacyShareManual = Math.round((costoAvacy * periodFactor) * ((avacyPct[nome] || 0) / 100))
    const simoneShare = Math.round((costoSimone * periodFactor) * ((simonePct[nome] || 0) / 100))
    const indirettiEq = Math.round(perHeadIndiretti)
    const ralH1 = Math.round((RAL[nome] || 0) * periodFactor)
    const costiTot = (ralH1 + Math.round(perHeadSoftCommesse) + amsShareManual + avacyShareManual + simoneShare + indirettiEq)
    const revenueReale = simulateH2 ? fattReale * 2 : fattReale
    const revenueMax = simulateH2 ? fattMax * 2 : fattMax
    const totaleReale = revenueReale - costiTot
    const totaleMax = revenueMax - costiTot
    return {
      nome,
      fattMax: revenueMax,
      fattReale: revenueReale,
      ral: ralH1,
      costiTech: Math.round(perHeadSoftCommesse),
      amsPct: amsPct[nome] || 0,
      ams: amsShareManual,
      avacyPct: avacyPct[nome] || 0,
      avacy: avacyShareManual,
      simonePct: simonePct[nome] || 0,
      simone: simoneShare,
      // Indiretti = quota pro-capite uguale per tutti (Avacy e AMS sono separati)
      indiretti: indirettiEq,
      costiTot,
      totaleReale,
      totaleMax,
    }
  })

  const [showMax, setShowMax] = React.useState(false)

  const left = [
    { k: `Costi Software annuali (${simulateH2 ? 'Y' : 'H1'}: ${formatEuro(Math.round(costiSoftCommesse * periodFactor))} €)`, v: (
      <input type="number" value={costiSoftCommesse} onChange={e => setCostiSoftCommesse(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: `Costi Indiretti Tech annuali (${simulateH2 ? 'Y' : 'H1'}: ${formatEuro(Math.round(costiIndirettiTech * periodFactor))} €)`, v: (
      <input type="number" value={costiIndirettiTech} onChange={e => setCostiIndirettiTech(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: 'Mostra Fatturato H1 max billable (no recurring)', v: (
      <input type="checkbox" checked={showMax} onChange={(e) => setShowMax(e.target.checked)} />
    ) },
    { k: 'Simula H2 (raddoppia H1)', v: (
      <input type="checkbox" checked={simulateH2} onChange={(e) => setSimulateH2(e.target.checked)} />
    ) },
  ]
  const right = [
    { k: `Costo AMS annuali (${simulateH2 ? 'Y' : 'H1'}: ${formatEuro(Math.round(costoAMS * periodFactor))} €)`, v: (
      <input type="number" value={costoAMS} onChange={e => setCostoAMS(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: `Costo Avacy annuali (${simulateH2 ? 'Y' : 'H1'}: ${formatEuro(Math.round(costoAvacy * periodFactor))} €)`, v: (
      <input type="number" value={costoAvacy} onChange={e => setCostoAvacy(Number(e.target.value))} style={{ width: 140, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
    ) },
    { k: `Costo Simone annuali (${simulateH2 ? 'Y' : 'H1'}: ${formatEuro(Math.round(costoSimone * periodFactor))} €)`, v: (
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
      <header className="bar"><SlideTitle>Costi H1 per persona </SlideTitle><Nav /></header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0 22px' }}>
        <MetricsPanel items={left} />
        <MetricsPanel items={right} />
      </div>
      <div className={`${tableStyles.panel} ${tableStyles.scrollY}`}>
        <table className={tableStyles.table}>
          {(() => {
            const weights = Array(13).fill(1)
            const total = weights.reduce((a, b) => a + b, 0)
            const widths = weights.map(w => `${(w / total) * 100}%`)
            return (<colgroup>{widths.map((w, i) => (<col key={i} style={{ width: w }} />))}</colgroup>)
          })()}
          <thead>
            <tr>
              <th>Nome</th>
              <th className={tableStyles.right}>{showMax ? (simulateH2 ? 'Fatturato Y max' : 'Fatturato H1 max') : (simulateH2 ? 'Fatturato Y raggiunto' : 'Fatturato H1 raggiunto')}</th>
              <th className={tableStyles.right}>RAL</th>
              <th className={tableStyles.right}>Costi Tech</th>
              <th className={tableStyles.right}>AMS %</th>
              <th className={tableStyles.right}>AMS</th>
              <th className={tableStyles.right}>Avacy %</th>
              <th className={tableStyles.right}>Avacy</th>
              <th className={tableStyles.right}>Simo %</th>
              <th className={tableStyles.right}>Simo</th>
              <th className={tableStyles.right}>Costi indiretti</th>
              <th className={tableStyles.right}>Costi totali</th>
              <th className={tableStyles.right}>Margine</th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map((r, i) => (
              <tr key={i}>
                <td>{r.nome}</td>
                <td className={tableStyles.right}>{formatEuro(showMax ? r.fattMax : r.fattReale)}</td>
                <td className={tableStyles.right}><span className={tableStyles.cellStack}><span className={tableStyles.cellValue}>{formatEuro(r.ral)}</span><span className={`${tableStyles.badge} ${tableStyles.cellBadge}`}>{`${r.costiTot ? Math.round((r.ral / r.costiTot) * 100) : 0}%`}</span></span></td>
                <td className={tableStyles.right}><span className={tableStyles.cellStack}><span className={tableStyles.cellValue}>{formatEuro(r.costiTech)}</span><span className={`${tableStyles.badge} ${tableStyles.cellBadge}`}>{`${r.costiTot ? Math.round((r.costiTech / r.costiTot) * 100) : 0}%`}</span></span></td>
                <td className={tableStyles.right}>
                  <input type="number" min={0} max={100} value={r.amsPct}
                    onChange={(e) => setAmsPct(prev => ({ ...prev, [rowsData[i].nome]: Number(e.target.value) }))}
                    style={{ width: 72, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
                </td>
                <td className={tableStyles.right}><span className={tableStyles.cellStack}><span className={tableStyles.cellValue}>{formatEuro(r.ams)}</span><span className={`${tableStyles.badge} ${tableStyles.cellBadge}`}>{`${r.costiTot ? Math.round((r.ams / r.costiTot) * 100) : 0}%`}</span></span></td>
                <td className={tableStyles.right}>
                  <input type="number" min={0} max={100} value={r.avacyPct}
                    onChange={(e) => setAvacyPct(prev => ({ ...prev, [rowsData[i].nome]: Number(e.target.value) }))}
                    style={{ width: 72, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
                </td>
                <td className={tableStyles.right}><span className={tableStyles.cellStack}><span className={tableStyles.cellValue}>{formatEuro(r.avacy)}</span><span className={`${tableStyles.badge} ${tableStyles.cellBadge}`}>{`${r.costiTot ? Math.round((r.avacy / r.costiTot) * 100) : 0}%`}</span></span></td>
                <td className={tableStyles.right}>
                  <input type="number" min={0} max={100} value={r.simonePct}
                    onChange={(e) => setSimonePct(prev => ({ ...prev, [rowsData[i].nome]: Number(e.target.value) }))}
                    style={{ width: 72, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }} />
                </td>
                <td className={tableStyles.right}><span className={tableStyles.cellStack}><span className={tableStyles.cellValue}>{formatEuro(r.simone)}</span><span className={`${tableStyles.badge} ${tableStyles.cellBadge}`}>{`${r.costiTot ? Math.round((r.simone / r.costiTot) * 100) : 0}%`}</span></span></td>
                <td className={tableStyles.right}><span className={tableStyles.cellStack}><span className={tableStyles.cellValue}>{formatEuro(r.indiretti)}</span><span className={`${tableStyles.badge} ${tableStyles.cellBadge}`}>{`${r.costiTot ? Math.round((r.indiretti / r.costiTot) * 100) : 0}%`}</span></span></td>
                <td className={tableStyles.right}>{formatEuro(r.costiTot)}</td>
                <td className={tableStyles.right}>{formatEuro(showMax ? r.totaleMax : r.totaleReale)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className={tableStyles.muted}>Totali</td>
              <td className={tableStyles.right}>{formatEuro(showMax ? tot.fattMax : tot.fattReale)}</td>
              <td className={tableStyles.right}>{formatEuro(tot.ral)}</td>
              <td className={tableStyles.right}>{formatEuro(tot.costiTech)}</td>
              <td></td>
              <td className={tableStyles.right}>{formatEuro(rowsData.reduce((a, r) => a + (r.ams || 0), 0))}</td>
              <td></td>
              <td className={tableStyles.right}>{formatEuro(rowsData.reduce((a, r) => a + (r.avacy || 0), 0))}</td>
              <td></td>
              <td className={tableStyles.right}>{formatEuro(rowsData.reduce((a, r) => a + (r.simone || 0), 0))}</td>
              <td className={tableStyles.right}>{formatEuro(tot.indiretti)}</td>
              <td className={tableStyles.right}>{formatEuro(rowsData.reduce((a, r) => a + (r.costiTot || 0), 0))}</td>
              <td className={tableStyles.right}>{formatEuro(rowsData.reduce((a, r) => a + ((showMax ? r.totaleMax : r.totaleReale) || 0), 0))}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="muted">Note: Costi indiretti per persona = quota pro-capite di 1,1mil/anno di costi aziendali da ripartire su 37 persone. Simone è un costo e non è stato calcolato su commesse (RAI, VEM, ecc).</p>
      <p className="muted">H1 factors applicati ai ricavi: {Object.entries(H1_FACTORS).map(([k,v]) => `${k} ${Math.round(v*100)}%`).join(' · ')}. Con "Simula H2" si considera il 100%.</p>
    </div>
  )
}

export default SlideCostiH1


