import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './memphis-design-style.css';

const anatomy = [
  { no:'01', title:'Shape', copy:'Squiggles, triangles, circles and playful geometry turn simple forms into a visual vocabulary.' },
  { no:'02', title:'Colour', copy:'Hot pink, electric blue, yellow, black and mint create bold contrast with a deliberately playful attitude.' },
  { no:'03', title:'Pattern', copy:'Dots, stripes, grids and irregular repeats add rhythm and make flat surfaces feel alive.' },
  { no:'04', title:'Balance', copy:'Objects are scattered and asymmetrical, but scale, repetition and spacing keep the chaos intentional.' },
  { no:'05', title:'Personality', copy:'Memphis design rejects seriousness when seriousness is unnecessary. The mood is curious, optimistic and loud.' }
];

export default function MemphisDesignStyle({ onNavigate }) {
  return <main className="memphis-page">
    <header className="memphis-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button>
      <div className="memphis-brand"><b>RYUMA</b><span>リューマ</span></div>
      <span>EXPRESSIVE / 04</span>
    </header>

    <section className="memphis-hero">
      <div className="memphis-grid"/>
      <span className="memphis-star star-a">✦</span><span className="memphis-star star-b">✦</span>
      <span className="memphis-squiggle">〰</span><span className="memphis-dot dot-a"/><span className="memphis-dot dot-b"/>
      <div className="memphis-hero-copy">
        <span className="memphis-kicker">04 / MEMPHIS DESIGN</span>
        <h1>PLAY<br/><em>LOUD.</em></h1>
        <p>A visual language of colour, pattern and playful geometry that refuses to behave.</p>
      </div>
      <div className="memphis-hero-card">
        <span className="memphis-card-label">POST-MODERN / 1980s</span>
        <div className="memphis-shape-circle"/><div className="memphis-shape-triangle"/><div className="memphis-shape-zig"/>
        <strong>FUN<br/>IS A<br/>SYSTEM.</strong>
        <small>FORM / COLOUR / PATTERN</small>
      </div>
    </section>

    <section className="memphis-intro">
      <span className="memphis-kicker">THE IDEA</span>
      <div><h2>What if design<br/><em>stopped behaving?</em></h2><p>Memphis design emerged in the 1980s as a joyful reaction against restrained modernism. It mixes unexpected colour, decorative pattern and geometric forms into compositions that feel spontaneous — while remaining carefully constructed.</p></div>
      <strong>Serious craft.<br/>Playful attitude.</strong>
    </section>

    <section className="memphis-anatomy">
      <div className="memphis-section-label"><span>01</span><b>DESIGN ANATOMY</b></div>
      <div className="memphis-section-main">
        <h2>Five ingredients.<br/><em>Zero boredom.</em></h2>
        <div className="memphis-anatomy-grid">{anatomy.map(item=><article key={item.no}><span>{item.no}</span><div className="memphis-mini-shape"><i/></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </div>
    </section>

    <section className="memphis-colour">
      <div className="memphis-section-label"><span>02</span><b>COLOUR SYSTEM</b></div>
      <div className="memphis-colour-main">
        <div><h2>Colour<br/><em>has volume.</em></h2><p>Memphis palettes use contrast as entertainment. Strong colour blocks sit beside unexpected neighbours to create energy and visual hierarchy.</p></div>
        <div className="memphis-palette"><div><b>HOT<br/>PINK</b><span>#F45B9A</span></div><div><b>CYAN<br/>BLUE</b><span>#32C5E8</span></div><div><b>LEMON<br/>YELLOW</b><span>#FFD84D</span></div><div><b>MINT<br/>GREEN</b><span>#8DE0B0</span></div><div><b>INK<br/>BLACK</b><span>#171717</span></div><div><b>PURE<br/>WHITE</b><span>#FFFFFF</span></div></div>
      </div>
    </section>

    <section className="memphis-pattern">
      <div className="memphis-section-label"><span>03</span><b>PATTERN + FORM</b></div>
      <div className="memphis-pattern-main">
        <div className="memphis-pattern-board"><span className="pattern-dot-grid"/><span className="pattern-blob"/><span className="pattern-zig">〰</span><span className="pattern-eye">◉</span><span className="pattern-cross">+</span><b>NOT<br/>A<br/>GRID.</b></div>
        <div><h2>Make the<br/><em>ordinary weird.</em></h2><p>Memphis turns familiar geometry into character. A circle becomes a face, a squiggle becomes a line of motion, and a repeated dot becomes an entire texture.</p></div>
      </div>
    </section>

    <section className="memphis-composition">
      <div className="memphis-section-label"><span>04</span><b>COMPOSITION</b></div>
      <div className="memphis-composition-main"><h2>Controlled<br/><em>chaos.</em></h2><div className="memphis-rule-cards"><div><b>01</b><strong>Scatter</strong><span>Break the predictable alignment.</span></div><div><b>02</b><strong>Repeat</strong><span>Use motifs to create hidden rhythm.</span></div><div><b>03</b><strong>Contrast</strong><span>Let colour and scale create tension.</span></div><div><b>04</b><strong>Balance</strong><span>Keep the chaos visually intentional.</span></div></div></div>
    </section>

    <section className="memphis-rules">
      <div className="memphis-section-label"><span>05</span><b>THE RULES</b></div>
      <div className="memphis-rules-main"><h2>Break a rule.<br/><em>Then make it work.</em></h2><div className="memphis-rule-list"><p><b>01</b>Mix shapes that normally don't belong together.</p><p><b>02</b>Choose colour combinations with personality.</p><p><b>03</b>Use pattern as a structural element, not wallpaper.</p><p><b>04</b>Keep enough hierarchy that the playfulness stays readable.</p></div></div>
    </section>

    <footer className="memphis-footer"><span className="memphis-kicker">MEMPHIS / EXPRESSIVE</span><h2>Design can<br/><em>have fun.</em></h2><p>Memphis design proves that visual systems can be expressive, strange and joyful without losing structure.</p><div><span>SHAPE · COLOUR · PATTERN · PLAY</span><span>RYUMA / DESIGN ANATOMY</span></div></footer>
  </main>;
}
