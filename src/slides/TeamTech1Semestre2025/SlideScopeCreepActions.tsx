import React from 'react'
import { TwoColumnSlide, Nav } from '@components'
import styles from './kanban.module.css'

type ColKey = 'Q3' | 'Q4' | 'Q1+1'
const CAPACITY: Record<ColKey, number> = { Q3: 1, Q4: 2, 'Q1+1': 2 }
const KEYS: ColKey[] = ['Q3','Q4','Q1+1']

type Item = { id: string; title: string; desc: string }

const INITIAL_ITEMS: Item[] = [
  { id: 'governance', title: 'Governance progetto anti-creep', desc: 'Sistema di governance che preveda extra-effort e segnali di scope creep. @fabio @simo @vale' },
  { id: 'sdb', title: 'Partnership SDB', desc: 'Verificare marginalità reale della partnership con SDB e sostenibilità. @fabe @robi' },
  { id: 'publione', title: 'Partnership Publione', desc: 'Analizzare rischi di scope creep e sostenibilità operativa/economica. @simo @emil' },
  { id: 'preventivatore', title: 'Preventivatore con fattore creep', desc: 'Scalare il preventivatore con un rischio creep parametrico (settore/cliente/scope). @simo @richi' },
]

export function SlideScopeCreepActions() {
  const [columns, setColumns] = React.useState<Record<ColKey, string[]>>({ Q3: [], Q4: [], 'Q1+1': [] })
  const [dropIndex, setDropIndex] = React.useState<Partial<Record<ColKey, number>>>({})

  const itemsById = React.useMemo(() => {
    const m: Record<string, Item> = {}
    INITIAL_ITEMS.forEach((i) => (m[i.id] = i))
    return m
  }, [])

  function allowDrop(e: React.DragEvent) { e.preventDefault() }
  function onDragStart(id: string, e: React.DragEvent) { e.dataTransfer.setData('text/plain', id); e.dataTransfer.effectAllowed = 'move' }
  function setIndexHint(col: ColKey, idx: number) { setDropIndex((d) => ({ ...d, [col]: idx })) }

  function handleDrop(e: React.DragEvent<HTMLDivElement>, target: ColKey) {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (!id) return
    setColumns((prev: Record<ColKey, string[]>) => {
      const next: Record<ColKey, string[]> = { Q3: [...prev.Q3], Q4: [...prev.Q4], 'Q1+1': [...prev['Q1+1']] }
      KEYS.forEach((k) => { next[k] = next[k].filter((x) => x !== id) })
      if (next[target].length >= CAPACITY[target]) return prev
      const at = dropIndex[target]
      if (at != null && at >= 0 && at <= next[target].length) next[target] = [...next[target].slice(0, at), id, ...next[target].slice(at)]
      else next[target] = [...next[target], id]
      return next
    })
    setDropIndex((d) => ({ ...d, [target]: undefined }))
  }

  function handleDropToPool(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (!id) return
    setColumns((prev: Record<ColKey, string[]>) => {
      const next: Record<ColKey, string[]> = { Q3: [...prev.Q3], Q4: [...prev.Q4], 'Q1+1': [...prev['Q1+1']] }
      KEYS.forEach((k) => { next[k] = next[k].filter((x) => x !== id) })
      return next
    })
  }

  const left = (
    <div className={styles.leftText}>
      <h3 className={styles.h3}>Cos&apos;è lo scope creep e perché erode i margini</h3>
      <p className="muted">
        Per scope creep si intende l&apos;espansione non controllata dello scope di un progetto (features, deliverable, canali),
        spesso senza adeguato aggiornamento di tempi e budget. Negli studi di controllo di gestione, è una causa tipica di
        perdita di marginalità sui lavori a progetto: aumenta l&apos;effort non fatturabile, genera ritardi e costi di coordinamento,
        e rende imprevedibile la pianificazione della capacità. I progetti piccoli soffrono meno perché hanno confini più
        netti e governance più semplice.
      </p>
    </div>
  )

  const board = (
    <div className={styles.board}>
      {KEYS.map((col) => (
        <div key={col} className={styles.column} onDrop={(e) => handleDrop(e, col)} onDragOver={allowDrop}>
          <div className={styles.colHeader}>
            <span>{col}</span>
            <span className={styles.counter}>{columns[col].length}/{CAPACITY[col]}</span>
          </div>
          <div className={styles.colBody}>
            {columns[col].map((id, idx) => (
              <div key={id} className={styles.card} draggable onDragStart={(e) => onDragStart(id, e)} onDragEnter={() => setIndexHint(col, idx)}>
                <div className={styles.cardTitle}>{itemsById[id].title}</div>
                <div className={styles.cardDesc}>{itemsById[id].desc}</div>
              </div>
            ))}
            <div className={styles.dropArea} onDragEnter={() => setIndexHint(col, columns[col].length)} />
          </div>
        </div>
      ))}
      <div className={styles.pool}>
        <div className={styles.colHeader}><span>Later</span></div>
        <div className={styles.colBody} onDrop={handleDropToPool} onDragOver={allowDrop}>
          {INITIAL_ITEMS.filter((i) => !columns.Q3.includes(i.id) && !columns.Q4.includes(i.id) && !columns['Q1+1'].includes(i.id)).map((i) => (
            <div key={i.id} className={styles.card} draggable onDragStart={(e) => onDragStart(i.id, e)}>
              <div className={styles.cardTitle}>{i.title}</div>
              <div className={styles.cardDesc}>{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <TwoColumnSlide
      leftTitle={<>Scope creep</>}
      leftSubtitle={<>Takeaway e piano operativo</>}
      leftContent={left}
      rightTitle={<>Action points (trascina nelle colonne)</>}
      rightContent={board}
      footer={<Nav />}
    />
  )
}

export default SlideScopeCreepActions


