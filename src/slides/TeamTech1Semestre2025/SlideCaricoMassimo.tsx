import React from 'react'
import { SlideTitle, DataTable, Nav, MetricsPanel } from '@components'

const DEFAULT_GIORNI_H1_PER_PERSONA = 120;

const UTILIZATION: Record<string, number> = {
  'Simone': 0.55,
  'Erica': 0.81,
  'Fabio': 0.79,
  'Giada': 0.45,
  'Margherita': 0.91,
  'Cristiano': 0.93,
  'Elisabetta': 0.90,
  'Pierpaolo': 0.93,
};

const PREZZO_GIORNO: Record<string, number> = {
  'Simone': 708,
  'Erica': 555,
  'Fabio': 632,
  'Giada': 478,
  // Calcolato da RAL 33k ≈ 501 €/g
  'Margherita': 501,
  'Cristiano': 555,
  'Elisabetta': 478,
  'Pierpaolo': 555,
};

function formatInt(itNumber: number) {
  return itNumber.toLocaleString('it-IT', { maximumFractionDigits: 0 });
}

function formatDays(days: number) {
  return days.toLocaleString('it-IT', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export function SlideCaricoMassimo() {
  const [giorniH1PerPersona, setGiorniH1PerPersona] = React.useState<number>(DEFAULT_GIORNI_H1_PER_PERSONA);

  const nomi = Object.keys(UTILIZATION);

  const [utilization, setUtilization] = React.useState<Record<string, number>>(UTILIZATION);
  const [prezziGiorno, setPrezziGiorno] = React.useState<Record<string, number>>(PREZZO_GIORNO);

  const rowsComputed = nomi.map(nome => {
    const util = utilization[nome];
    const giorni = giorniH1PerPersona * util;
    const prezzo = prezziGiorno[nome] ?? 0;
    const ricavo = Math.round(giorni * prezzo);
    return {
      nome,
      util: `${Math.round(util * 100)}%`,
      giorni: formatDays(giorni),
      prezzoGiorno: formatInt(prezzo),
      ricavo: formatInt(ricavo),
      utilValue: Math.round(util * 100),
      prezzoGiornoValue: prezzo,
    };
  });

  const totGiorni = rowsComputed.reduce((acc, r) => acc + parseFloat(r.giorni.replace(',', '.')), 0);
  const totRicavo = rowsComputed.reduce((acc, r) => acc + parseInt(r.ricavo.replace(/\./g, ''), 10), 0);

  const left = [
    { k: 'Periodo', v: 'Gen–Giu 2025 (H1)' },
    { k: 'Giorni lavorativi per risorsa', v: (
      <input
        type="number"
        min={0}
        max={200}
        value={giorniH1PerPersona}
        onChange={(e) => setGiorniH1PerPersona(Number(e.target.value))}
        style={{ width: 80, textAlign: 'right', background: 'transparent', color: 'inherit', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '6px 8px' }}
      />
    ) },
  ];
  const right = [
    { k: 'Totale giorni fatturabili stimati', v: formatDays(totGiorni) + ' gg' },
    { k: 'Ricavo H1 a prezzi di uscita', v: formatInt(totRicavo) + ' €' },
  ];

  return (
    <div className="container">
      <header className="bar"><SlideTitle>Carico massimo: ricavo H1 a prezzi di uscita</SlideTitle><Nav /></header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0 22px' }}>
        <MetricsPanel items={left} />
        <MetricsPanel items={right} />
      </div>
      <DataTable
        rows={rowsComputed as any}
        footer={{ giorni: formatDays(totGiorni), ricavo: formatInt(totRicavo) }}
        editable={{ utilization: true, prezzoGiorno: true }}
        onChange={(index, field, value) => {
          const nome = nomi[index];
          if (field === 'utilization') {
            const pct = Math.max(0, Math.min(100, value));
            setUtilization(prev => ({ ...prev, [nome]: pct / 100 }));
          } else if (field === 'prezzoGiorno') {
            const val = Math.max(0, value);
            setPrezziGiorno(prev => ({ ...prev, [nome]: val }));
          }
        }}
      />
      <p className="muted">Assunzioni: 6 mesi ≈ 120 giorni lavorativi (modificabile). Utilization e prezzi/giorno sono configurabili riga per riga.</p>
    </div>
  )
}

export default SlideCaricoMassimo


