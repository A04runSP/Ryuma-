import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './y2k-style.css';

const anatomy = [
  { no:'01', title:'Chrome', copy:'Liquid metal, bevels and reflective surfaces turn ordinary interface pieces into futuristic objects.' },
  { no:'02', title:'Colour', copy:'Electric cyan, bubblegum pink, violet, silver and acid green create a playful digital spectrum.' },
  { no:'03', title:'Type', copy:'Wide display lettering, tiny technical labels and stretched proportions create instant Y2K attitude.' },
  { no:'04', title:'Texture', copy:'Gloss, noise, glass, pixels and soft gradients recreate the optimistic material culture of the early web.' },
  { no:'05', title:'Motion', copy:'Floating objects, scrolling marquees and playful transitions make the interface feel alive.' }
];

export default function Y2KStyle({ onNavigate }) {
  const [enteredWeb, setEnteredWeb] = useState(false);
  return <main className="y2k-page">
    <header className="y2k-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button>
      <div className="y2k-brand"><b>RYUMA</b><span>リューマ</span></div>
      <span>EXPRESSIVE / 03</span>
    </header>

    <section className="y2k-hero">
      <div className="y2k-grid"/>
      <div className="y2k-orb orb-pink"/><div className="y2k-orb orb-cyan"/><div className="y2k-orb orb-silver"/>
      <div className="y2k-hero-copy">
        <span className="y2k-kicker">03 / Y2K</span>
        <h1>HELLO<br/><em>2000.</em></h1>
        <p>The future looked shiny, optimistic and slightly weird. Y2K brings that digital dream back.</p>
      </div>
      <div className="y2k-badge"><span>THE</span><b>FUTURE</b><i>IS NOW</i></div>
      <div className="y2k-marquee">CYBER · CHROME · POP · PIXEL · GLASS · FUTURE · CYBER · CHROME · POP · PIXEL</div>
    </section>

    <section className="y2k-intro">
      <div><span className="y2k-kicker">THE IDEA</span><h2>When tomorrow<br/><em>looked like this.</em></h2></div>
      <p>Y2K design captures the visual optimism of the late 1990s and early 2000s — a moment when the internet felt new, technology felt magical and the future was imagined in chrome.</p>
      <strong>Playful. Glossy. Unapologetically digital.</strong>
    </section>

    <section className="y2k-anatomy">
      <div className="y2k-section-label"><span>03</span><b>DESIGN ANATOMY</b></div>
      <div className="y2k-section-main">
        <h2>Five signals.<br/><em>Maximum millennium.</em></h2>
        <div className="y2k-anatomy-grid">{anatomy.map(item=><article key={item.no}><span>{item.no}</span><div className="y2k-mini-shape"/><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </div>
    </section>

    <section className="y2k-colour">
      <div className="y2k-section-label"><span>04</span><b>COLOUR SYSTEM</b></div>
      <div className="y2k-colour-main">
        <div><h2>Colour from<br/><em>the future.</em></h2><p>Y2K colour is bright, artificial and optimistic. Metallic neutrals meet candy brights and digital glow.</p></div>
        <div className="y2k-palette"><div className="y2k-chrome"><span>CHROME</span></div><div className="y2k-cyan"><span>CYAN</span></div><div className="y2k-pink"><span>BUBBLEGUM</span></div><div className="y2k-violet"><span>VIOLET</span></div><div className="y2k-lime"><span>ACID LIME</span></div></div>
      </div>
    </section>

    <section className="y2k-type">
      <div className="y2k-section-label"><span>05</span><b>TYPOGRAPHY</b></div>
      <div className="y2k-type-main">
        <div className="y2k-type-screen"><small>WELCOME TO THE</small><strong>NEW<br/>WEB</strong><span>EST. 2000 // ONLINE</span></div>
        <div><h2>Type gets<br/><em>wide.</em></h2><p>Y2K typography loves stretched proportions, geometric forms, oversized display type and tiny technical labels that make the whole system feel like a digital artifact.</p></div>
      </div>
    </section>

    <section className="y2k-interface">
      <div className="y2k-section-label"><span>06</span><b>INTERFACE CULTURE</b></div>
      <div className="y2k-interface-main">
        <div className="y2k-window"><div className="window-top"><span>●</span><span>●</span><span>●</span><b>MY_FUTURE.EXE</b></div><div className={`window-body${enteredWeb ? " is-online" : ""}`} aria-live="polite"><span>{enteredWeb ? "CONNECTION ESTABLISHED" : "LOADING..."}</span><strong>{enteredWeb ? "ONLINE" : "100%"}</strong><div className="loading" aria-label="Connection progress"><i/></div><button type="button" onClick={() => setEnteredWeb(value => !value)}>{enteredWeb ? "RESTART CONNECTION ↻" : "ENTER THE WEB →"}</button></div></div>
        <div><h2>Make it<br/><em>feel digital.</em></h2><p>Y2K is more than chrome and pink. It reflects an era of translucent interfaces, desktop windows, media players, animated cursors and the excitement of being online.</p></div>
      </div>
    </section>

    <section className="y2k-rules">
      <div className="y2k-section-label"><span>07</span><b>THE RULES</b></div>
      <div className="y2k-rules-main"><h2>Don't be<br/><em>too serious.</em></h2><div className="y2k-rule-list">
        <div><b>01</b><strong>Shine</strong><span>Use gloss, chrome and reflective surfaces to create digital excitement.</span></div>
        <div><b>02</b><strong>Play</strong><span>Mix shapes, scale and colour with the confidence of early internet culture.</span></div>
        <div><b>03</b><strong>Float</strong><span>Let objects overlap, orbit and hover instead of sitting rigidly on a grid.</span></div>
        <div><b>04</b><strong>Pixelate</strong><span>Keep small technical details that make the world feel unmistakably digital.</span></div>
      </div></div>
    </section>

    <footer className="y2k-footer">
      <span className="y2k-kicker">Y2K · EXPRESSIVE</span>
      <h2>THE FUTURE<br/><em>IS STILL FUN.</em></h2>
      <p>A visual language built from chrome dreams, digital optimism and the strange beauty of imagining tomorrow.</p>
      <div><span>CHROME · POP · PIXEL · GLASS · FUTURE</span><span>RYUMA / DESIGN ANATOMY</span></div>
    </footer>
  </main>;
}
