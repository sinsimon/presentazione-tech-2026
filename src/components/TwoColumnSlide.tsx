import React from 'react'
import styles from './TwoColumnSlide.module.css'

export function TwoColumnSlide({
  leftTitle,
  leftSubtitle,
  leftContent,
  rightTitle,
  rightItems,
  rightContent,
  footer,
}: {
  leftTitle: React.ReactNode
  leftSubtitle?: React.ReactNode
  leftContent?: React.ReactNode
  rightTitle: React.ReactNode
  rightItems?: Array<{ title: React.ReactNode; body?: React.ReactNode }>
  rightContent?: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div className={styles.root}>
      <section className={styles.left}>
        <div className={styles.leftInner}>
          <h1 className={styles.h1}>{leftTitle}</h1>
          {leftSubtitle ? <p className={styles.subtitle}>{leftSubtitle}</p> : null}
          {leftContent}
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.rightInner}>
          <h2 className={styles.h2}>{rightTitle}</h2>
          {rightItems && rightItems.length > 0 ? (
            <ul className={styles.list}>
              {rightItems.map((it, i) => (
                <li key={i} className={styles.item}>
                  <div className={styles.bullet} aria-hidden>✶</div>
                  <div className={styles.itemText}>
                    <div className={styles.itemTitle}>{it.title}</div>
                    {it.body ? <div className={styles.itemBody}>{it.body}</div> : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : rightContent ? (
            <div>{rightContent}</div>
          ) : null}
          {footer ? <div className={styles.footer}>{footer}</div> : null}
        </div>
      </section>
    </div>
  )
}

export default TwoColumnSlide


