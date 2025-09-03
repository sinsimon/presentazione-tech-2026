import React from 'react'
import { SlideTitle, Nav } from '@components'
import tableStyles from '../../components/DataTable.module.css'

const DEFAULT_GIORNI_H1_PER_PERSONA = 115

// Mappatura utilization e prezzo/giorno coerente con la slide "Carico massimo"
const UTILIZATION: Record<string, number> = {
  'Simone': 0.55,
  'Erica': 0.81,
  'Fabio': 0.79,
  'Giada': 0.45,
  'Margherita': 0.91,
  'Cristiano': 0.93,
  'Elisabetta': 0.90,
  'Pierpaolo': 0.93,
}

const PREZZO_GIORNO: Record<string, number> = {
  'Simone': 708,
  'Erica': 555,
  'Fabio': 632,
  'Giada': 478,
  'Margherita': 501,
  'Cristiano': 555,
  'Elisabetta': 478,
  'Pierpaolo': 555,
}

// CSV incollato (tab 2) per parsing interno
const CSV = `,CRIS,FATT CRIS,ERICA,FATT ERICA,PIER,FATT PIER,GIADA,FATT GIADA,MEG,FATT MEG,BETTA,FATT BETTA,FABE,FATT FABE,TOTALE FATTURATO
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

function parseEuro(s: string): number {
  const digits = s.replace(/[^0-9]/g, '')
  return digits ? parseInt(digits, 10) : 0
}

function formatEuro(n: number): string {
  return n.toLocaleString('it-IT', { maximumFractionDigits: 0 })
}

type PersonKey = 'Cristiano' | 'Erica' | 'Pierpaolo' | 'Giada' | 'Margherita' | 'Elisabetta' | 'Fabio'

const H1_FACTORS: Record<string, number> = {
  'AVACY': 0.5,
  'AMS': 0.6,
  'ROBINSON SITO': 0.6,
  'KOLINPHARMA': 0.5,
}

function computeFromCsv(csv: string) {
  const lines = csv.trim().split(/\r?\n/)
  const header = lines[0].split(',')
  const idx = {
    CRIS: { pct: 1, val: 2 },
    ERICA: { pct: 3, val: 4 },
    PIER: { pct: 5, val: 6 },
    GIADA: { pct: 7, val: 8 },
    MEG: { pct: 9, val: 10 },
    BETTA: { pct: 11, val: 12 },
    FABE: { pct: 13, val: 14 },
  }
  const totals: Record<PersonKey, number> = {
    Cristiano: 0,
    Erica: 0,
    Pierpaolo: 0,
    Giada: 0,
    Margherita: 0,
    Elisabetta: 0,
    Fabio: 0,
  }
  const projects: Record<PersonKey, Array<{ name: string; value: number }>> = {
    Cristiano: [],
    Erica: [],
    Pierpaolo: [],
    Giada: [],
    Margherita: [],
    Elisabetta: [],
    Fabio: [],
  }
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',')
    const project = cols[0]
    if (project.toLowerCase().startsWith('totale')) continue
    const factor = H1_FACTORS[project] ?? 1
    const pushIf = (_pctStr: string, valStr: string, person: PersonKey) => {
      const val = Math.round(parseEuro(valStr || '') * factor)
      if (val > 0) projects[person].push({ name: project, value: val })
    }
    pushIf(cols[idx.CRIS.pct], cols[idx.CRIS.val], 'Cristiano')
    pushIf(cols[idx.ERICA.pct], cols[idx.ERICA.val], 'Erica')
    pushIf(cols[idx.PIER.pct], cols[idx.PIER.val], 'Pierpaolo')
    pushIf(cols[idx.GIADA.pct], cols[idx.GIADA.val], 'Giada')
    pushIf(cols[idx.MEG.pct], cols[idx.MEG.val], 'Margherita')
    pushIf(cols[idx.BETTA.pct], cols[idx.BETTA.val], 'Elisabetta')
    pushIf(cols[idx.FABE.pct], cols[idx.FABE.val], 'Fabio')
  }
  // Calcola i totali come somma dei progetti (con fattori H1 applicati)
  (Object.keys(projects) as Array<PersonKey>).forEach((k) => {
    totals[k] = projects[k].reduce((acc, p) => acc + p.value, 0)
  })
  return { totals, projects }
}

export function SlideConfrontoH1() {
  const { totals, projects } = React.useMemo(() => computeFromCsv(CSV), [])
  const giorni = DEFAULT_GIORNI_H1_PER_PERSONA

  const order = ['Simone', 'Erica', 'Fabio', 'Giada', 'Margherita', 'Cristiano', 'Elisabetta', 'Pierpaolo'] as const

  const rows = order.map(nome => {
    const util = UTILIZATION[nome] ?? 0
    const prezzo = PREZZO_GIORNO[nome] ?? 0
    const fattMax = Math.round(giorni * util * prezzo)
    const fattReale = nome === 'Simone' ? 0 : (totals as any)[nome] ?? 0
    const diff = fattReale - fattMax
    let projs: string[] = []
    if (nome !== 'Simone') {
      const keyMap: Record<string, PersonKey> = {
        'Cristiano': 'Cristiano',
        'Erica': 'Erica',
        'Pierpaolo': 'Pierpaolo',
        'Giada': 'Giada',
        'Margherita': 'Margherita',
        'Elisabetta': 'Elisabetta',
        'Fabio': 'Fabio',
      }
      const k = keyMap[nome]
      if (k && fattReale > 0) {
        const withPct = projects[k].map(p => ({ name: p.name, pct: (p.value / fattReale) * 100 }))
        const sorted = withPct.sort((a, b) => b.pct - a.pct)
        const above = sorted.filter(p => p.pct >= 5)
        const below = sorted.filter(p => p.pct > 0 && p.pct < 5)
        const sumBelow = Math.round(below.reduce((acc, p) => acc + p.pct, 0))
        projs = [
          ...above.map(p => `${p.name} (${Math.round(p.pct)}%)`),
          ...(sumBelow > 0 ? [`Altro (${sumBelow}%)`] : []),
        ]
      } else {
        projs = []
      }
    }
    const diffPct = fattMax > 0 ? Math.round(((fattReale - fattMax) / fattMax) * 100) : 0
    return {
      nome,
      fattMax,
      fattReale,
      diff,
      diffPct,
      progetti: nome === 'Simone' ? '0%' : projs.join(', '),
    }
  })

  const totMax = rows.reduce((a, r) => a + r.fattMax, 0)
  const totReale = rows.reduce((a, r) => a + r.fattReale, 0)
  const totDiff = totMax - totReale
  const totDiffPct = totMax > 0 ? Math.round(((totReale - totMax) / totMax) * 100) : 0

  return (
    <div className="container">
      <header className="bar"><SlideTitle>Confronto pro capite: massimo vs reale</SlideTitle><Nav /></header>
      <div className={tableStyles.panel}>
        <table className={tableStyles.table}>
          {(() => {
            const weights = [1, 1, 1, 1, 1, 2];
            const total = weights.reduce((a, b) => a + b, 0);
            const widths = weights.map(w => `${(w / total) * 100}%`);
            return (
              <colgroup>
                {widths.map((w, i) => (<col key={i} style={{ width: w }} />))}
              </colgroup>
            );
          })()}
          <thead>
            <tr>
              <th>Nome</th>
              <th className={tableStyles.right}>Fatt. max a progetto</th>
              <th className={tableStyles.right}>Fatt reale</th>
              <th className={tableStyles.right}>Differenza</th>
              <th className={tableStyles.right}>Differenza %</th>
              <th>Progetti Lavorati</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.nome}</td>
                <td className={tableStyles.right}>{formatEuro(r.fattMax)}</td>
                <td className={tableStyles.right}>{formatEuro(r.fattReale)}</td>
                <td className={tableStyles.right}>{formatEuro(r.diff)}</td>
                <td className={tableStyles.right}>{`${r.diffPct > 0 ? '+' : ''}${r.diffPct}%`}</td>
                <td className={`${tableStyles.wrap} ${tableStyles.clamp2}`}>{r.progetti}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className={tableStyles.muted}>Totali</td>
              <td className={tableStyles.right}>{formatEuro(totMax)}</td>
              <td className={tableStyles.right}>{formatEuro(totReale)}</td>
              <td className={tableStyles.right}>{formatEuro(totDiff)}</td>
              <td className={tableStyles.right}>{`${totDiffPct > 0 ? '+' : ''}${totDiffPct}%`}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="muted">Considerazione principale: le persone che riescono a matchare il max sono quelle che seguono attività ricorrenti (AMS) o prodotti.</p>
      <p className="muted">H1 factors applicati: {Object.entries(H1_FACTORS).map(([k,v]) => `${k} ${Math.round(v*100)}%`).join(' · ')}. In simulazione H2/anno considerati al 100%.</p>
    </div>
  )
}

export default SlideConfrontoH1


