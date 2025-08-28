import React from 'react';
import { SlideTitle, MetricsPanel, DataTable, Nav } from '@components';

export function SlideProiezioneH1() {

  const left = [
    { k: 'Periodo', v: 'Gen–Giu 2025 (H1)' },
    { k: 'Giorni lavorativi per risorsa', v: '120' },
    { k: 'Tariffa media', v: '500 € / giornata' },
  ];
  const right = [
    { k: 'Totale giorni fatturabili stimati', v: '752,4 gg' },
    { k: 'Ricavo H1 stimato', v: '376.200 €' },
    { k: 'Media mensile', v: '≈ 62.700 € / mese' },
  ];
  const rows = [
    { nome: 'Simone', util: '55%', giorni: '66,0', ricavo: '33.000' },
    { nome: 'Erica', util: '81%', giorni: '97,2', ricavo: '48.600' },
    { nome: 'Fabio', util: '79%', giorni: '94,8', ricavo: '47.400' },
    { nome: 'Giada', util: '45%', giorni: '54,0', ricavo: '27.000' },
    { nome: 'Margherita', util: '91%', giorni: '109,2', ricavo: '54.600' },
    { nome: 'Cristiano', util: '93%', giorni: '111,6', ricavo: '55.800' },
    { nome: 'Elisabetta', util: '90%', giorni: '108,0', ricavo: '54.000' },
    { nome: 'Pierpaolo', util: '93%', giorni: '111,6', ricavo: '55.800' },
  ];
  const footer = { giorni: '752,4', ricavo: '376.200' };

  return (
    <div className="container">
      <header className="bar"><SlideTitle>Proiezione H1</SlideTitle><Nav /></header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0 22px' }}>
        <MetricsPanel items={left} />
        <MetricsPanel items={right} />
      </div>
      <DataTable rows={rows} footer={footer} />
      <p className="muted">Assunzioni: 6 mesi = 24 settimane ≈ 120 giorni lavorativi (già inclusi ferie/festivi). Ricavo = giorni × utilization × 500 €.</p>
    </div>
  );
}
