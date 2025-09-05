# Componenti condivisi – Documentazione

Questo file raccoglie la documentazione minima e aggiornata dei componenti riusabili in `src/components/**`.

## Badge

- Descrizione: piccolo indicatore testuale per categorie/stati.
- Props:
  - `children: React.ReactNode` – contenuto del badge (testo breve).
  - `variant?: 'default' | 'mkt' | 'tech' | 'warn' | 'danger' | 'good'` – colore/stile. Default: `default`.
  - `className?: string` – classi addizionali.
- Esempio:
  ```tsx
  <Badge variant="mkt">MKT</Badge>
  <Badge variant="tech">TECH</Badge>
  ```
- Note: non usare per testi lunghi. Coerente con palette delle tabelle (vedi `DataTable.module.css`).

## TwoColumnSlide

- Descrizione: layout a due colonne per slide: sinistra (titolo, contenuti), destra (lista o contenuto libero).
- Props:
  - `leftTitle: React.ReactNode` – titolo principale.
  - `leftSubtitle?: React.ReactNode` – sottotitolo opzionale.
  - `leftContent?: React.ReactNode` – contenuti custom colonna sinistra.
  - `leftTitleSize?: 'normal' | 'small'` – dimensione del titolo sinistro. Default: `normal`.
  - `rightTitle: React.ReactNode` – titolo colonna destra.
  - `rightItems?: Array<{ title: React.ReactNode; body?: React.ReactNode }>` – elenco puntato strutturato.
  - `rightContent?: React.ReactNode` – contenuto alternativo alla lista.
  - `footer?: React.ReactNode` – contenuto in fondo alla colonna destra.
- Esempio:
  ```tsx
  <TwoColumnSlide
    leftTitle="Ore di progetto"
    leftTitleSize="small"
    leftContent={<MyTable />}
    rightTitle="Attività"
    rightItems={[{ title: "Task", body: "Dettagli" }]}
  />
  ```
- Note: preferire `rightItems` per liste a punti omogenee; usare `rightContent` per layout custom.

## DataTable

- Descrizione: tabella standardizzata per metriche e rendicontazioni.
- Props:
  - `rows?: Array<{ nome: string; util: string; giorni: string; ricavo: string; prezzoGiorno?: string; utilValue?: number; prezzoGiornoValue?: number }>` – righe.
  - `footer?: { giorni: string; ricavo: string }` – riga totali.
  - `editable?: { utilization?: boolean; prezzoGiorno?: boolean }` – abilita input inline.
  - `onChange?: (index: number, field: 'utilization' | 'prezzoGiorno', value: number) => void` – callback edit.
  - `size?: 'compact' | 'normal' | 'large'` – scala tipografia/padding. Default: `normal`.
- Esempio:
  ```tsx
  <DataTable
    rows={[{ nome: "Mario", util: "80%", giorni: "92", ricavo: "18.000" }]}
    footer={{ giorni: "92", ricavo: "18.000" }}
    size="large"
  />
  ```
- Note: l’header va a capo su due righe se lungo; usare `colgroup` per pesare le colonne quando serve.

---

Linee guida: ogni nuova prop pubblica va documentata qui entro lo stesso PR.
