import React from 'react'
import { TwoColumnSlide, Nav } from '@components'
import styles from './kanban.module.css'

type ColKey = 'Q3' | 'Q4' | 'Q1+1'

const CAPACITY: Record<ColKey, number> = { Q3: 1, Q4: 2, 'Q1+1': 2 }

type Item = { id: string; title: string; desc: string }

const INITIAL_ITEMS: Item[] = [
  { id: 'ams-revenue', title: 'Aumentare ricavi AMS', desc: 'Analisi competitor; definire azioni breve/lungo periodo. @simo @sara @giada' },
  { id: 'new-recurring', title: 'Nuove recurring su clienti', desc: 'Formazione, accessibilità, update contenuti, plugin interni a pagamento. @fabe @robi' },
  { id: 'fte-products', title: 'FTE annuale prodotti', desc: 'Definire un FTE dedicato allo sviluppo di nuovi prodotti. @simo @richi' },
  { id: 'preventivatore-recurring', title: 'Preventivatore con previsione recurring', desc: 'Scalare il preventivatore con una previsione recurring parametrica. @simo @richi' },
]

export function SlideRecurringActions() {
  const [columns, setColumns] = React.useState<Record<ColKey, string[]>>({ Q3: [], Q4: [], 'Q1+1': [] })
  const [dropIndex, setDropIndex] = React.useState<Partial<Record<ColKey, number>>>({})
  const KEYS: ColKey[] = ['Q3','Q4','Q1+1']

  const itemsById = React.useMemo(() => {
    const m: Record<string, Item> = {}
    INITIAL_ITEMS.forEach((i) => (m[i.id] = i))
    return m
  }, [])

  function handleDrop(e: React.DragEvent<HTMLDivElement>, target: ColKey) {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (!id) return
    setColumns((prev: Record<ColKey, string[]>) => {
      // clone and remove from all columns first
      const next: Record<ColKey, string[]> = { Q3: [...prev.Q3], Q4: [...prev.Q4], 'Q1+1': [...prev['Q1+1']] }
      KEYS.forEach((k: ColKey) => {
        next[k] = next[k].filter((x: string) => x !== id)
      })
      const currentCount = next[target].length
      if (currentCount >= CAPACITY[target]) return prev // capacity reached
      const at = dropIndex[target]
      if (at != null && at >= 0 && at <= next[target].length) {
        next[target] = [...next[target].slice(0, at), id, ...next[target].slice(at)]
      } else {
        next[target] = [...next[target], id]
      }
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
      KEYS.forEach((k: ColKey) => { next[k] = next[k].filter((x: string) => x !== id) })
      return next
    })
  }

  function allowDrop(e: React.DragEvent) {
    e.preventDefault()
  }

  function onDragStart(id: string, e: React.DragEvent) {
    e.dataTransfer.setData('text/plain', id)
    e.dataTransfer.effectAllowed = 'move'
  }

  function setIndexHint(col: ColKey, idx: number) {
    setDropIndex((d) => ({ ...d, [col]: idx }))
  }

  const leftDescription = (
    <div className={styles.leftText}>
      <h3 className={styles.h3}>Perché spingere sui ricavi ricorrenti</h3>
      <p className="muted">
        I ricavi ricorrenti (es. AMS, manutenzione evolutiva, prodotti) stabilizzano la cassa, riducono la dipendenza
        dai progetti one-shot e migliorano il profilo di margine nel tempo. Dal punto di vista di controllo di gestione
        (rif. guida costi), i ricavi ricorrenti aiutano a coprire l&apos;overhead costante e rendono più prevedibile la
        pianificazione della capacità: meno tempo non fatturabile, più efficienza, meno rischio di scope creep.
      </p>
      <p className="muted">Sotto, prioritizziamo le mosse operative per Q3, Q4 e Q1+1.</p>
      <div className={styles.legend}>
        {(['Q3','Q4','Q1+1'] as ColKey[]).map((k) => (
          <span key={k} className={styles.badge}>{k}: {CAPACITY[k]} slot</span>
        ))}
      </div>
    </div>
  )

  const rightBoard = (
    <div className={styles.board}>
      {(['Q3','Q4','Q1+1'] as ColKey[]).map((col) => (
        <div key={col} className={styles.column}
          onDrop={(e) => handleDrop(e, col)}
          onDragOver={allowDrop}
        >
          <div className={styles.colHeader}>
            <span>{col}</span>
            <span className={styles.counter} data-over={columns[col].length > CAPACITY[col]}>{columns[col].length}/{CAPACITY[col]}</span>
          </div>
          <div className={styles.colBody}>
            {columns[col].map((id, idx) => (
              <div key={id}
                className={styles.card}
                draggable
                onDragStart={(e) => onDragStart(id, e)}
                onDragEnter={() => setIndexHint(col, idx)}
              >
                <div className={styles.cardTitle}>{itemsById[id].title}</div>
                <div className={styles.cardDesc}>{itemsById[id].desc}</div>
              </div>
            ))}
            {/* empty drop target to allow append and index hint at end */}
            <div className={styles.dropArea} onDragEnter={() => setIndexHint(col, columns[col].length)} />
          </div>
        </div>
      ))}
      {/* Unassigned bucket */}
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
      leftTitle={<>Ricavi ricorrenti</>}
      leftSubtitle={<>Takeaway e piano operativo</>}
      leftContent={leftDescription}
      rightTitle={<>Action points (trascina nelle colonne)</>}
      rightContent={rightBoard}
      footer={<Nav />}
    />
  )
}

export default SlideRecurringActions


