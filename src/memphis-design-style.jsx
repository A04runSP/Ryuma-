import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Copy, RotateCcw } from 'lucide-react';
import './memphis-design-style.css';

const palette = [
  { name: 'Coral Red', hex: '#FF5C5C', role: 'Expressive accent' },
  { name: 'Memphis Yellow', hex: '#FFD84D', role: 'Optimistic energy' },
  { name: 'Aqua Teal', hex: '#35C9B5', role: 'Fresh contrast' },
  { name: 'Electric Blue', hex: '#6965E8', role: 'Structural colour' },
  { name: 'Warm Cream', hex: '#F5F0E6', role: 'Canvas / breathing room' },
  { name: 'Ink Black', hex: '#171717', role: 'Typography / structure' }
];

const traits = [
  ['01', 'Bold geometry', 'Simple circles, triangles, arches and blocks become a playful visual vocabulary.'],
  ['02', 'Playful forms', 'Familiar objects are exaggerated, tilted and recombined in unexpected ways.'],
  ['03', 'Vibrant colour', 'High-contrast colour blocks create rhythm, energy and unmistakable personality.'],
  ['04', 'Graphic patterns', 'Dots, grids, squiggles and stripes add texture without relying on gradients.'],
  ['05', 'Layered composition', 'Overlaps, shadows and scale shifts create depth and visual tension.'],
  ['06', 'Postmodern spirit', 'Function and craft meet humour, decoration and a refusal to be too serious.']
];

const patterns = [
  { id: 'confetti', name: 'Confetti sprinkles', description: 'Loose marks bring movement and texture.' },
  { id: 'grid', name: 'Architectural grid', description: 'A strict structure gives the playful forms a frame.' },
  { id: 'wave', name: 'Wavy lines', description: 'Repeated curves create a lively visual rhythm.' },
  { id: 'dots', name: 'Dot matrix', description: 'Simple repetition turns a small mark into a field.' },
  { id: 'stripes', name: 'Bold stripes', description: 'Directional bands create instant contrast.' }
];

function MemphisFurniture() {
  return <div className="memphis-furniture" role="img" aria-label="A playful Memphis-style sculptural chair, geometric side table, lamp and abstract forms">
    <div className="mf-grid" />
    <div className="mf-sun" />
    <div className="mf-tall-triangle" />
    <div className="mf-arch" />
    <div className="mf-lamp"><i /><b /><span /></div>
    <div className="mf-side-table"><i /><b /><span /></div>
    <div className="mf-chair">
      <div className="mf-chair-back"><span /></div>
      <div className="mf-chair-seat" />
      <div className="mf-chair-arm mf-arm-left" />
      <div className="mf-chair-arm mf-arm-right" />
      <div className="mf-chair-cushion" />
      <div className="mf-chair-leg mf-leg-left" />
      <div className="mf-chair-leg mf-leg-right" />
    </div>
    <div className="mf-block mf-block-one" />
    <div className="mf-block mf-block-two" />
    <div className="mf-floor" />
    <span className="mf-spark mf-spark-one">✳</span>
    <span className="mf-spark mf-spark-two">✦</span>
    <span className="mf-caption">OBJECTS / SHAPES / PLAY</span>
  </div>;
}

function GeometryArtwork() {
  return <div className="memphis-geometry-art" aria-label="Memphis geometric forms">
    <span className="geo-circle" />
    <span className="geo-triangle" />
    <span className="geo-arch" />
    <span className="geo-stairs" />
    <span className="geo-cylinder"><i /></span>
    <span className="geo-squiggle">〰</span>
  </div>;
}

function PatternPreview({ id }) {
  return <div className={`memphis-pattern-swatch pattern-${id}`} aria-hidden="true">
    {id === 'wave' && <span>∿ ∿ ∿</span>}
    {id === 'stripes' && <span />}
    {id === 'confetti' && <span />}
    {id === 'grid' && <span />}
    {id === 'dots' && <span />}
  </div>;
}

export default function MemphisDesignStyle({ onNavigate }) {
  const [activePattern, setActivePattern] = useState('confetti');
  const [copied, setCopied] = useState('');
  const [showComposition, setShowComposition] = useState(true);

  const copyHex = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      window.setTimeout(() => setCopied(''), 1400);
    } catch {
      setCopied('');
    }
  };

  return <main className="memphis-page">
    <header className="memphis-nav">
      <button className="memphis-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={16} /> <span>DESIGN LIBRARY</span></button>
      <div className="memphis-brand"><b>RYŪMA</b><span>DESIGN ANATOMY</span></div>
      <span className="memphis-nav-index">EXPRESSIVE / 03.04</span>
    </header>

    <section className="memphis-hero">
      <div className="memphis-hero-copy">
        <span className="memphis-kicker"><b>03.04</b> / POSTMODERN · CLASSIC</span>
        <h1>Memphis<br /><em>Design</em><i className="memphis-title-mark">〰</i></h1>
        <p>A bold, playful and anti-minimal design movement from the 1980s — built from geometric forms, vibrant colour and unexpected compositions.</p>
        <div className="memphis-tags"><span>1980s</span><span>Geometric</span><span>Playful</span><span>Postmodern</span></div>
      </div>
      <div className="memphis-hero-art"><MemphisFurniture /><div className="memphis-specimen-stamp"><small>RYŪMA SPECIMEN</small><b>03.04</b><span>EST. 1980 / REIMAGINED</span></div></div>
      <div className="memphis-hero-foot"><span>FORM FOLLOWS FEELING.</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="memphis-traits">
      <div className="memphis-traits-title"><span className="memphis-asterisk">✳</span><h2>CORE<br />CHARACTERISTICS</h2></div>
      <div className="memphis-traits-grid">{traits.map(([no, title, copy]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="memphis-history">
      <div className="memphis-section-meta"><span>01 / THE MOVEMENT</span><span>ANTI-MINIMAL · 1980s</span></div>
      <div className="memphis-history-layout">
        <div><span className="memphis-kicker">A DIFFERENT KIND OF ORDER</span><h2>Make room<br />for <em>play.</em></h2></div>
        <div className="memphis-history-copy">
          <p>Memphis emerged in Milan in 1981 around a group of designers led by Ettore Sottsass. It challenged the restraint of modernist design with colour, ornament, humour and unconventional forms.</p>
          <p>Furniture, interiors and everyday objects became expressive compositions. Geometry was not merely a tool for structure — it became the personality of the object itself.</p>
          <strong>Serious craft.<br />Playful attitude.</strong>
        </div>
      </div>
      <div className="memphis-history-ribbon"><span>BREAK THE GRID</span><i>✳</i><span>KEEP THE RHYTHM</span><i>✳</i><span>MAKE IT HUMAN</span></div>
    </section>

    <section className="memphis-colours">
      <div className="memphis-section-meta"><span>02 / COLOUR SYSTEM</span><span>HIGH ENERGY · HIGH CONTRAST</span></div>
      <div className="memphis-colour-heading"><h2>Colour has<br /><em>personality.</em></h2><p>A lively palette built from confident blocks. Use contrast to guide attention, not to compete with every element at once.</p></div>
      <div className="memphis-palette">{palette.map((colour, i) => <button key={colour.hex} className={`memphis-colour-chip chip-${i}`} onClick={() => copyHex(colour.hex)} aria-label={`Copy ${colour.name} colour ${colour.hex}`}><span className="memphis-chip-top"><b>{colour.name}</b><i>{copied === colour.hex ? <Check size={16} /> : <Copy size={15} />}</i></span><strong>{colour.hex}</strong><small>{copied === colour.hex ? 'COPIED' : colour.role}</small></button>)}</div>
      <p className="memphis-palette-note">Select a swatch to copy its HEX value.</p>
    </section>

    <section className="memphis-type">
      <div className="memphis-section-meta"><span>03 / TYPOGRAPHY</span><span>LOUD, BUT LEGIBLE</span></div>
      <div className="memphis-type-layout">
        <div className="memphis-type-poster"><span>DISPLAY / 01</span><strong>Aa</strong><b>MAKE<br />A SCENE.</b><i>TYPE WITH ATTITUDE ↗</i></div>
        <div className="memphis-type-copy"><span className="memphis-kicker">TYPE IS A SHAPE</span><h2>Say it<br /><em>louder.</em></h2><p>Memphis typography uses bold, geometric display forms and direct, readable supporting text. Contrast in scale and weight creates the hierarchy.</p>
          <dl><div><dt>DISPLAY</dt><dd>Heavy geometric sans</dd></div><div><dt>HEADING</dt><dd>Bold, compact sans</dd></div><div><dt>BODY</dt><dd>Neutral, open sans</dd></div><div><dt>MICRO</dt><dd>Monospace / tracked labels</dd></div></dl>
        </div>
      </div>
    </section>

    <section className="memphis-geometry">
      <div className="memphis-section-meta"><span>04 / GEOMETRY & FORMS</span><span>EVERYDAY SHAPES, REIMAGINED</span></div>
      <div className="memphis-geometry-layout"><GeometryArtwork /><div><span className="memphis-kicker">SHAPE LANGUAGE</span><h2>Simple forms.<br /><em>Big character.</em></h2><ul><li>Circles and discs create rhythm.</li><li>Triangles add direction and tension.</li><li>Arches and cylinders add sculptural weight.</li><li>Unexpected scale makes the familiar feel new.</li></ul></div></div>
    </section>

    <section className="memphis-patterns">
      <div className="memphis-section-meta"><span>05 / PATTERNS & TEXTURES</span><span>REPETITION WITH PERSONALITY</span></div>
      <div className="memphis-pattern-heading"><h2>Pattern is<br /><em>part of the structure.</em></h2><p>Choose a pattern to see how a small graphic rule can change the energy of a surface.</p></div>
      <div className="memphis-pattern-lab">
        <div className="memphis-pattern-options">{patterns.map(pattern => <button key={pattern.id} className={activePattern === pattern.id ? 'is-active' : ''} onClick={() => setActivePattern(pattern.id)} aria-pressed={activePattern === pattern.id}><PatternPreview id={pattern.id} /><b>{pattern.name}</b><span>{pattern.description}</span></button>)}</div>
        <div className="memphis-pattern-stage"><div className={`memphis-pattern-large pattern-${activePattern}`}><span className="pattern-stage-disc" /><span className="pattern-stage-triangle" /><b>PLAY<br />WITH<br />PATTERN.</b><i>MEMPHIS / 1981</i></div></div>
      </div>
    </section>

    <section className="memphis-composition">
      <div className="memphis-section-meta"><span>06 / COMPOSITION</span><span>CONTROLLED CHAOS</span></div>
      <div className="memphis-composition-layout"><div><span className="memphis-kicker">A COMPOSITION STUDY</span><h2>Order is<br /><em>optional.</em></h2><p>Memphis uses asymmetry, overlap and contrast — but the result is never accidental. Repetition and scale keep the composition connected.</p><button className="memphis-composition-toggle" onClick={() => setShowComposition(v => !v)}><RotateCcw size={15} /> {showComposition ? 'SHOW ALTERNATE LAYOUT' : 'RESTORE COMPOSITION'}</button></div>
        <div className={`memphis-composition-board ${showComposition ? 'layout-a' : 'layout-b'}`} aria-label="Interactive Memphis composition example"><span className="comp-grid" /><i className="comp-circle" /><i className="comp-triangle" /><i className="comp-arch" /><i className="comp-block" /><i className="comp-zig">〰</i><b>GOOD<br />CHAOS.</b><small>FORM / COLOUR / BALANCE</small></div>
      </div>
    </section>

    <section className="memphis-applications">
      <div className="memphis-section-meta"><span>07 / WHERE IT WORKS</span><span>FROM OBJECT TO INTERFACE</span></div>
      <h2>Play has<br /><em>many forms.</em></h2>
      <div className="memphis-application-grid">
        <article className="application-web"><div className="application-art"><span /><i /><b>WEB<br />PLAY</b></div><h3>Creative web & UI</h3><p>Expressive landing pages, playful controls and memorable digital identities.</p><ArrowUpRight /></article>
        <article className="application-product"><div className="application-art"><span /><i /><b>OBJECT<br />STUDY</b></div><h3>Product & packaging</h3><p>Distinctive forms and patterns that give everyday objects personality.</p><ArrowUpRight /></article>
        <article className="application-editorial"><div className="application-art"><span /><i /><b>LOUD<br />TYPE</b></div><h3>Editorial & branding</h3><p>Bold typographic systems, colour and composition with a point of view.</p><ArrowUpRight /></article>
      </div>
    </section>

    <footer className="memphis-footer"><span className="memphis-kicker">RYŪMA / DESIGN ANATOMY — 03.04</span><h2>Make it<br /><em>memorable.</em></h2><p>Memphis reminds us that a visual system can be structured, expressive and full of joy at the same time.</p><div><span>SHAPE · COLOUR · PATTERN · PLAY</span><span>POSTMODERN / 1980s</span></div></footer>
  </main>;
}
