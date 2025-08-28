/* global React */
declare const React: any;
import { SlideTitle, Nav } from '@components';

export function SlideConfrontoH1() {
  return (
    <div className="container">
      <header className="bar"><SlideTitle>Confronto H1 (Test)</SlideTitle><Nav /></header>
      <div className="panel"><p className="muted">Placeholder: qui inseriremo il confronto H1 stimato vs reale vs target Gemini.</p></div>
    </div>
  );
}


