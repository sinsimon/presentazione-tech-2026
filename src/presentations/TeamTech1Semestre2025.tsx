import React from 'react'
import { Presentation } from '@components'
import { SlideCaricoMassimo } from '@slides/TeamTech1Semestre2025/SlideCaricoMassimo'
import { SlideConfrontoH1 } from '@slides/TeamTech1Semestre2025/SlideConfrontoH1'
import { SlideCostiH1 } from '@slides/TeamTech1Semestre2025/SlideCostiH1'

export default function TeamTech1Semestre2025() {
  return (
    <Presentation>
      <SlideCaricoMassimo />
      <SlideConfrontoH1 />
      <SlideCostiH1 />
    </Presentation>
  )
}


