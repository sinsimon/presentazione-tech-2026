import React from 'react'
import { TwoColumnSlide, Badge } from '@components'

export function SlideRoadmapQ3Q4() {
  return (
    <TwoColumnSlide
      leftTitleSize="small"
      leftTitle={<>Attività previste Q3–Q4</>}
      rightTitle={<>Roadmap</>}
      rightItems={[
        {
          title: (
            <>
              <span>Start refactor banner — React + React Native / tvOS</span>
            </>
          ),
          body: (
            <>
              100 ore: Erica, Fabio. La codebase attuale è del 2018 (presa nel 2020), portata su web, mobile e TV via adapter: ora richiede un restart. Il restart ci permette una tecnologia unica per tutti i device, partendo da tvOS richiesto da RAI.
            </>
          ),
        },
        {
          title: (
            <>
              <span>Visualizzazioni massime per free</span> <Badge variant="warn">FORSE</Badge>
            </>
          ),
          body: (
            <>
              30 ore: Erica, Cristiano, Vale M. Per evitare picchi in CDN, concludere lo sviluppo che avvisa i free del nuovo limite. Dopo il rilascio valutiamo l’impatto sui costi e la priorità.
            </>
          ),
        },
        { title: (<><span>Scansione tramite AI</span> <Badge>2026</Badge></>), body: 'Per deal con Axeptio' },
        { title: (<><span>Generazione Termini e Condizioni</span> <Badge>2026</Badge></>), body: 'Per e‑commerce' },
        { title: (<><span>Consenso banner</span> <Badge>2026</Badge></>), body: 'Feature più richiesta' },
        { title: (<><span>Migliorare plugin WP</span> <Badge>2026</Badge></>), body: 'Maggiori richieste assistenza' },
      ]}
    />
  )
}

export default SlideRoadmapQ3Q4


