import React from 'react'
import { Presentation } from '@components'
import { SlideCaricoMassimo } from '@slides/TeamTech1Semestre2025/SlideCaricoMassimo'
import { SlideConfrontoH1 } from '@slides/TeamTech1Semestre2025/SlideConfrontoH1'
import { SlideCostiH1 } from '@slides/TeamTech1Semestre2025/SlideCostiH1'
import { SlideTakeaways } from '@slides/TeamTech1Semestre2025/SlideTakeaways'
import { SlideRecurringActions } from '@slides/TeamTech1Semestre2025/SlideRecurringActions'
import { SlideScopeCreepActions } from '@slides/TeamTech1Semestre2025/SlideScopeCreepActions'
import { SlideIndirectCostsActions } from '@slides/TeamTech1Semestre2025/SlideIndirectCostsActions'

export default function TeamTech1Semestre2025() {
  return (
    <Presentation>
      <SlideCaricoMassimo />
      <SlideConfrontoH1 />
      <SlideCostiH1 />
      <SlideTakeaways />
      <SlideRecurringActions />
      <SlideScopeCreepActions />
      <SlideIndirectCostsActions />
    </Presentation>
  )
}


