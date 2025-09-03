import React from 'react'
import { Nav, TwoColumnSlide } from '@components'
import tableStyles from '../../components/DataTable.module.css'

// CSV tab2 (ricavi H1 raggiunti pro capite)
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

function parseEuro(s?: string): number { if (!s) return 0; const d = s.replace(/[^0-9]/g, ''); return d ? parseInt(d, 10) : 0 }

export function SlideTakeaways() {
  // Applica i fattori H1 a specifici progetti e somma i ricavi
  const H1_FACTORS: Record<string, number> = { 'AVACY': 0.5, 'AMS': 0.6, 'ROBINSON SITO': 0.6, 'KOLINPHARMA': 0.5 }
  const lines = CSV2.trim().split(/\r?\n/)
  const idx = { CRIS: 2, ERICA: 4, PIER: 6, GIADA: 8, MEG: 10, BETTA: 12, FABE: 14 }
  let ricaviTot = 0
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',')
    const project = cols[0]
    if (project.toLowerCase().startsWith('totale')) continue
    const f = H1_FACTORS[project] ?? 1
    ricaviTot += Math.round((parseEuro(cols[idx.CRIS]) + parseEuro(cols[idx.ERICA]) + parseEuro(cols[idx.PIER]) + parseEuro(cols[idx.GIADA]) + parseEuro(cols[idx.MEG]) + parseEuro(cols[idx.BETTA]) + parseEuro(cols[idx.FABE])) * f)
  }

  // Costi H1 (stesse ipotesi della slide costi)
  const people = ['Erica','Fabio','Giada','Margherita','Cristiano','Elisabetta','Pierpaolo'] as const
  const RAL: Record<typeof people[number], number> = { Erica: 32952, Fabio: 42000, Giada: 24720, Margherita: 32952, Cristiano: 35700, Elisabetta: 21408, Pierpaolo: 35700 }
  const costiSoftCommesse = 8737
  const costiIndirettiTech = Math.round((1100000 / 37) * 8)
  const costoAMS = 31200
  const costoAvacy = 3000
  const costoSimone = 42000
  const H1 = 0.5
  const perHeadSoft = (costiSoftCommesse * H1) / people.length
  const perHeadInd = (costiIndirettiTech * H1) / people.length
  const amsPct: Record<typeof people[number], number> = { Erica: 1, Fabio: 10, Giada: 85, Margherita: 1, Cristiano: 0, Elisabetta: 2, Pierpaolo: 1 }
  const avacyPct: Record<typeof people[number], number> = { Cristiano: 55, Erica: 35, Fabio: 10, Giada: 0, Margherita: 0, Elisabetta: 0, Pierpaolo: 0 }
  const simoPct: Record<typeof people[number], number> = { Erica: 17, Fabio: 17, Cristiano: 22, Giada: 17, Margherita: 9, Elisabetta: 9, Pierpaolo: 9 }

  const totRAL = people.reduce((a,p)=> a + (RAL[p]||0)*H1, 0)
  const totSoft = perHeadSoft * people.length
  const totInd = perHeadInd * people.length
  const totAMS = people.reduce((a,p)=> a + Math.round(costoAMS*H1*(amsPct[p]||0)/100), 0)
  const totAvacy = people.reduce((a,p)=> a + Math.round(costoAvacy*H1*(avacyPct[p]||0)/100), 0)
  const totSimo = people.reduce((a,p)=> a + Math.round(costoSimone*H1*(simoPct[p]||0)/100), 0)
  const costiTot = totRAL + totSoft + totInd + totAMS + totAvacy + totSimo
  const margine = ricaviTot - costiTot
  const marginePct = ricaviTot > 0 ? Math.round((margine/ricaviTot)*100) : 0
  const overheadRate = (totInd) / (costiTot - totInd)

  return (
    <TwoColumnSlide
      leftTitle={<>TAKEAWAYS</>}
      leftSubtitle={<>Risultati H1</>}
      leftContent={
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className={tableStyles.badge} style={{ fontSize: 18, padding: '10px 14px', color: '#fff', background: 'rgba(255,255,255,0.16)' }}>Ricavi H1: {ricaviTot.toLocaleString('it-IT')}</span>
          <span className={tableStyles.badge} style={{ fontSize: 18, padding: '10px 14px', color: '#fff', background: 'rgba(255,255,255,0.16)' }}>Costi H1: {costiTot.toLocaleString('it-IT')}</span>
          <span className={tableStyles.badge} style={{ fontSize: 18, padding: '10px 14px', color: '#fff', background: 'rgba(255,255,255,0.16)' }}>Margine: {margine.toLocaleString('it-IT')} ({marginePct}%)</span>
        </div>
      }
      rightTitle={<>Scelte strategiche e punti di attenzione</>}
      rightItems={[
        {
          title: <>Redditività trainata da ricorrenti/prodotti (AMS/Avacy)</>,
          body: <>Come da analisi di sostenibilità: ricavi ricorrenti e prodotti digitali stabilizzano la cassa e migliorano i margini grazie a standardizzazione e learning curve.</>,
        },
        {
          title: <>Scope creep: erosione della marginalità dei prodotti/progetti</>,
          body: <>Nei lavori a progetto più complessi lo scope creep riduce la marginalità pur partendo da prezzi più alti; i progetti piccoli soffrono meno perché hanno uno scope più delimitato e governance più semplice.</>,
        },
        {
          title: <>Costi indiretti alti</>,
          body: <>Overhead rate ≈ {Math.round(overheadRate*100)}% (indiretti/diretti). Benchmark: 40–70% per agenzie di servizi.</>,
        },
      ]}
      footer={<Nav />}
    />
  )
}

export default SlideTakeaways


