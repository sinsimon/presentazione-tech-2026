import React from 'react'
import ReactDOM from 'react-dom/client'
import { presentations } from '@presentations'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const bySlug = Object.fromEntries(presentations.map(p => ['/' + p.slug, React.createElement(p.component)])) as Record<string, React.ReactNode>

const Home = (
  <div className="container">
    <header className="bar"><h1 className="title">Presentazioni</h1></header>
    <ul className="homeList">
      {presentations.map(p => (
        <li key={p.slug}><a className="homeLink" href={'/' + p.slug}>{p.slug}</a></li>
      ))}
    </ul>
  </div>
)

const path = location.pathname
root.render(<React.StrictMode>{bySlug[path] ?? Home}</React.StrictMode>)


