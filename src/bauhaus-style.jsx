import React, { useMemo, useState } from 'react';
import { ArrowLeft, RotateCcw, Download, Eye, EyeOff } from 'lucide-react';
import './bauhaus-style.css';

const principles = [
  ['01', 'Form', 'Reduce visual language to essential geometric forms: circle, square and triangle.'],
  ['02', 'Function', 'Let purpose shape the composition. Decoration has no role unless it communicates.'],
  ['03', 'Geometry', 'Use proportion, direction and measured relationships to create visual order.'],
  ['04', 'Unity', 'Bring art, craft and technology into one coherent design practice.'],
  ['05', 'Production', 'Design for repeatability, material logic and the realities of modern life.'],
];

const timeline = [
  ['1919', 'The school begins', 'Walter Gropius founds the Bauhaus in Weimar, bringing fine art and applied craft into a shared school.'],
  ['1923', 'Art and technology', 'The school increasingly embraces industrial production and the idea that form should respond to use.'],
  ['1925', 'Dessau', 'The Bauhaus moves into its purpose-built Dessau campus, designed by Walter Gropius.'],
  ['1933', 'The school closes', 'Political pressure forces the Bauhaus to close. Its teachers and ideas continue to influence design worldwide.'],
];

const palette = [
  { name: 'Bauhaus red', value: '#E53935' },
  { name: 'Signal yellow', value: '#F4C400' },
  { name: 'Ultramarine', value: '#1556C0' },
  { name: 'Black', value: '#111111' },
  { name: 'Paper', value: '#F5F1E8' },
];

export default function BauhausStyle({ onNavigate }) {
  const [headline, setHeadline] = useState('FORM\nFOLLOWS\nFUNCTION.');
  const [shape, setShape] = useState('circle');
  const [accent, setAccent] = useState('#E53935');
  const [columns, setColumns] = useState(6);
  const [alignment, setAlignment] = useState('left');
  const [gridVisible, setGridVisible] = useState(true);
  const lines = useMemo(() => headline.split('\n').filter(Boolean).slice(0, 4), [headline]);

  const reset = () => {
    setHeadline('FORM\nFOLLOWS\nFUNCTION.');
    setShape('circle');
    setAccent('#E53935');
    setColumns(6);
    setAlignment('left');
    setGridVisible(true);
  };

  const exportPoster = () => {
    const svgText = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
      <rect width="1080" height="1350" fill="#F5F1E8"/>
      <g opacity=".12" stroke="#111" stroke-width="2">${Array.from({length: columns - 1}, (_, i) => `<path d="M${(1080 / columns) * (i + 1)} 0V1350"/>`).join('')}</g>
      <circle cx="790" cy="360" r="260" fill="${shape === 'circle' ? accent : 'none'}"/>
      <rect x="90" y="490" width="360" height="190" fill="${shape === 'square' ? accent : '#F4C400'}"/>
      <path d="M650 980 L940 980 L795 710 Z" fill="${shape === 'triangle' ? accent : '#1556C0'}"/>
      <text x="${alignment === 'left' ? 90 : alignment === 'center' ? 540 : 990}" y="760" text-anchor="${alignment === 'left' ? 'start' : alignment === 'center' ? 'middle' : 'end'}" font-family="Arial,sans-serif" font-size="104" font-weight="900" fill="#111">${lines.map((line, i) => `<tspan x="${alignment === 'left' ? 90 : alignment === 'center' ? 540 : 990}" dy="${i === 0 ? 0 : 112}">${line.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}</tspan>`).join('')}</text>
      <text x="90" y="1270" font-family="Arial,sans-serif" font-size="24" letter-spacing="5" fill="#111">BAUHAUS / FORM · FUNCTION · MATERIAL</text>
    </svg>`;
    const blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bauhaus-composition.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return <main className="bauhaus-page">
    <nav className="bauhaus-topbar">
      <button className="bauhaus-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button>
      <div className="bauhaus-wordmark">RYŪMA <span>/ DESIGN ANATOMY</span></div>
      <span className="bauhaus-index">STYLE STUDY&nbsp; 04—02</span>
    </nav>

    <header className="bauhaus-hero">
      <div className="bauhaus-hero-copy">
        <div className="bauhaus-kicker"><span>THE BAUHAUS MOVEMENT</span><span>GERMANY · 1919—1933</span></div>
        <h1>Bauhaus<span className="bauhaus-period">.</span></h1>
        <p>Art, design and industry brought together through simple forms, functional thinking and a new approach to making.</p>
        <div className="bauhaus-hero-rule"><i/><span>ART / CRAFT / TECHNOLOGY</span></div>
      </div>
      <div className="bauhaus-hero-art" aria-label="Abstract Bauhaus geometric composition">
        <div className="bauhaus-hero-red"/><div className="bauhaus-hero-yellow"/><div className="bauhaus-hero-blue"/>
        <div className="bauhaus-building"><div className="bauhaus-building-glass"/><b>BAU<br/>HAUS</b></div>
        <span className="bauhaus-hero-caption">DESSAU / 1925</span>
      </div>
    </header>

    <nav className="bauhaus-section-nav" aria-label="Bauhaus sections">
      <a href="#overview">Overview</a><a href="#principles">Principles</a><a href="#history">History</a><a href="#playground">Composition lab</a><a href="#type-colour">Type & colour</a><a href="#applications">Applications</a>
    </nav>

    <section className="bauhaus-principles" id="principles">
      <div className="bauhaus-section-heading"><span>01 / DESIGN ANATOMY</span><h2>Five ideas.<br/>One visual language.</h2></div>
      <div className="bauhaus-principle-grid">{principles.map(([number, title, copy], index) => <article className="bauhaus-principle" key={number}>
        <span className="bauhaus-principle-number">{number}</span>
        <div className={`bauhaus-principle-mark mark-${index}`} aria-hidden="true"><i/></div>
        <h3>{title}</h3><p>{copy}</p>
      </article>)}</div>
    </section>

    <section className="bauhaus-history" id="history">
      <div className="bauhaus-history-title"><span>02 / CONTEXT</span><h2>A school.<br/>A movement.<br/><em>A lasting influence.</em></h2><p>Bauhaus was not a decorative style. It was an educational experiment that changed how designers thought about materials, making and everyday objects.</p></div>
      <div className="bauhaus-history-panel"><div className="bauhaus-history-shape"/><span className="bauhaus-history-label">WEIMAR → DESSAU → BERLIN</span><strong>1919<br/>—<br/>1933</strong><small>THE BAUHAUS YEARS</small></div>
      <div className="bauhaus-timeline">{timeline.map(([year, title, copy]) => <article key={year}><span>{year}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="bauhaus-lab" id="playground">
      <div className="bauhaus-section-heading"><span>03 / INTERACTIVE STUDY</span><h2>Build a composition.</h2><p>Change one variable at a time. Observe how geometry, proportion and hierarchy alter the same visual system.</p></div>
      <div className="bauhaus-lab-layout">
        <aside className="bauhaus-tools">
          <div className="bauhaus-tool-heading"><span>COMPOSITION CONTROLS</span><button onClick={reset} aria-label="Reset composition"><RotateCcw size={15}/></button></div>
          <label className="bauhaus-field">YOUR MESSAGE<textarea rows={3} maxLength={52} value={headline} onChange={event => setHeadline(event.target.value.toUpperCase())}/><small>Use line breaks to set the typographic rhythm.</small></label>
          <fieldset className="bauhaus-field"><legend>PRIMARY FORM</legend><div className="bauhaus-shape-options">{['circle','square','triangle'].map(item => <button type="button" key={item} className={shape === item ? 'is-active' : ''} aria-pressed={shape === item} onClick={() => setShape(item)}><i className={`shape-${item}`}/><span>{item}</span></button>)}</div></fieldset>
          <div className="bauhaus-field"><span>ACCENT COLOUR</span><div className="bauhaus-swatches">{palette.slice(0,4).map(item => <button type="button" key={item.value} title={item.name} aria-label={item.name} className={accent === item.value ? 'is-active' : ''} style={{'--swatch':item.value}} onClick={() => setAccent(item.value)}/>)}</div></div>
          <label className="bauhaus-field">GRID COLUMNS <b>{columns}</b><input type="range" min="3" max="12" value={columns} onChange={event => setColumns(Number(event.target.value))}/></label>
          <label className="bauhaus-field">TYPE ALIGNMENT<select value={alignment} onChange={event => setAlignment(event.target.value)}><option value="left">Flush left</option><option value="center">Centered</option><option value="right">Flush right</option></select></label>
          <button className="bauhaus-grid-toggle" onClick={() => setGridVisible(value => !value)} aria-pressed={gridVisible}>{gridVisible ? <Eye size={15}/> : <EyeOff size={15}/>} GRID {gridVisible ? 'VISIBLE' : 'HIDDEN'}</button>
          <button className="bauhaus-export" onClick={exportPoster}><Download size={15}/> EXPORT SVG POSTER</button>
        </aside>
        <div className="bauhaus-output">
          <div className="bauhaus-output-meta"><span>LIVE OUTPUT / 01</span><span>4:5 POSTER</span></div>
          <div className={`bauhaus-poster align-${alignment}`} style={{'--bauhaus-accent':accent,'--bauhaus-columns':columns}}>
            {gridVisible && <div className="bauhaus-poster-grid" aria-hidden="true">{Array.from({length:columns - 1},(_,i)=><i key={i}/>)}</div>}
            <span className="bauhaus-poster-kicker">BAUHAUS / VISUAL STUDY</span>
            <div className={`bauhaus-poster-shape poster-${shape}`} aria-hidden="true"/>
            <h3>{lines.map((line,index)=><React.Fragment key={index}>{index > 0 && <br/>}{line}</React.Fragment>)}</h3>
            <div className="bauhaus-poster-footer"><span>FORM FOLLOWS PURPOSE</span><b>RŪ—04.02</b></div>
          </div>
          <p className="bauhaus-output-note">The poster updates as you edit. Export creates a scalable SVG file.</p>
        </div>
      </div>
    </section>

    <section className="bauhaus-type-colour" id="type-colour">
      <div className="bauhaus-type-panel"><span>04 / TYPOGRAPHY</span><h2>Aa</h2><div><strong>Geometric sans</strong><p>Bold, direct, functional. Typography is a structural element: use scale, weight and alignment to establish hierarchy.</p></div><small>DISPLAY / HEAVY · BODY / REGULAR</small></div>
      <div className="bauhaus-colour-panel"><span>05 / COLOUR SYSTEM</span><h2>Primary colours.<br/>Purposeful contrast.</h2><div className="bauhaus-colour-list">{palette.map(item=><div key={item.value}><i style={{background:item.value}}/><b>{item.name}</b><code>{item.value}</code></div>)}</div></div>
    </section>

    <section className="bauhaus-applications" id="applications">
      <div className="bauhaus-section-heading"><span>06 / IN PRACTICE</span><h2>From principle<br/>to everyday life.</h2></div>
      <div className="bauhaus-application-grid">
        <article className="app-poster"><span>01 / GRAPHIC DESIGN</span><div className="app-poster-art"><b>FORM<br/>IS<br/>FUNCTION</b><i/></div><h3>Posters & print</h3><p>Use bold hierarchy and reduced forms to make a message immediate.</p></article>
        <article className="app-product"><span>02 / PRODUCT</span><div className="app-chair"><i/><b/><em/></div><h3>Objects & furniture</h3><p>Let construction, material and use shape the object's appearance.</p></article>
        <article className="app-architecture"><span>03 / ARCHITECTURE</span><div className="app-building"><i/><b/><em/></div><h3>Architecture</h3><p>Express structure through proportion, light, material and function.</p></article>
        <article className="app-wayfinding"><span>04 / INFORMATION</span><div className="app-sign"><b>→</b><strong>WAY<br/>FINDING</strong></div><h3>Wayfinding</h3><p>Make information easy to scan through consistent visual rules.</p></article>
      </div>
    </section>

    <footer className="bauhaus-footer"><span>RYŪMA / DESIGN ANATOMY</span><strong>ART · CRAFT · TECHNOLOGY</strong><button onClick={() => onNavigate?.('library')}>BACK TO DESIGN LIBRARY ↗</button></footer>
  </main>;
}
