import React from 'react'
import { Presentation } from '@components'
import { SlideProiezioneH1 } from '@slides/SlideProiezioneH1'
import { SlideConfrontoH1 } from '@slides/SlideConfrontoH1'

export function Root() {
  // Qui definiamo l'ordine e la lista delle slide
  return (
    <Presentation>
      <SlideProiezioneH1 />
      <SlideConfrontoH1 />
    </Presentation>
  )
}


