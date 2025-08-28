# Tech Plan Presentation

Presentazione interattiva (React + Vite) per il report performance del team.

## Requisiti

- Node 18+

## Setup

```bash
npm install
```

## Sviluppo

```bash
npm run dev
```

Apri l'URL mostrato in console (default: http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Struttura

```
./index.html              # Shell con #root e stile base
./src/main.tsx            # Entrypoint React
./src/Root.tsx            # Root component: definisce ordine slide
./src/components/         # Componenti riusabili (Presentation, KV, DataTable...)
./src/slides/             # Slide componentizzate (SlideProiezioneH1, SlideConfrontoH1)
./vite.config.ts          # Alias @components, @slides
./tsconfig.json           # Alias TypeScript, JSX react-jsx
```

## Note

- Aggiungi nuove slide creando componenti in src/slides/ e inserendoli in src/Root.tsx.
- I link Avanti/Indietro sono gestiti da Presentation e si disabilitano agli estremi.
