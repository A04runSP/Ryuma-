import React, { useState } from 'react';
import { ArrowLeft, RotateCcw, Grid3X3, Eye, EyeOff } from 'lucide-react';
import './swiss-international-style.css';

const principles = [
  ['01','Grid','A consistent column system gives every element a clear relationship to the page.'],
  ['02','Typography','Sans-serif type, strong scale contrast and concise wording create a direct reading path.'],
  ['03','Asymmetry','An off-centre composition creates energy while the underlying grid keeps it controlled.'],
  ['04','Negative space','Open space separates information and makes the hierarchy easier to scan.'],
  ['05','Function','Every line, label and colour should help communicate—not merely decorate.'],
];

export default function SwissInternationalStyle({ onNavigate }) {
  const [columns,setColumns] = useState(6);
  const [showGrid,setShowGrid] = useState(true);
  const [annotations,setAnnotations] = useState(true);
  const [alignment,setAlignment] = useState('left');
  const [accent,setAccent] = useState('#e53935');
  const [headline,setHeadline] = useState('GOOD DESIGN\nIS CLEAR.');
  const [resetCount,setResetCount] = useState(0);
  const reset = () => { setColumns(6); setShowGrid(true); setAnnotations(true); setAlignment('left'); setAccent('#e53935'); setHeadline('GOOD DESIGN\nIS CLEAR.'); setResetCount(v=>v+1); };
  return <main className="swiss-page" key={resetCount}>
    <nav className="swiss-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button><strong>RYŪMA <span>DESIGN ANATOMY</span></strong><small>04 / 01 — SWISS STYLE</small></nav>
    <header className="swiss-hero">
      <div className="swiss-overline"><span>DESIGN LANGUAGE / 04.01</span><span>SWITZERLAND · 1950s</span></div>
      <h1>Order.<br/><em>Without noise.</em></h1>
      <p>The Swiss / International Typographic Style uses grid systems, objective photography and clear typography to make information direct, useful and unmistakable.</p>
      <div className="swiss-hero-foot"><span>GRID / TYPE / SPACE</span><span>CLARITY IS A DESIGN DECISION ↘</span></div>
    </header>
    <section className="swiss-specimen-section">
      <div className="swiss-section-head"><span>01 — LIVE SPECIMEN</span><p>Change the grid and composition. The poster updates instantly.</p></div>
      <div className="swiss-playground">
        <div className="swiss-controls">
          <label>HEADLINE<textarea value={headline} onChange={e=>setHeadline(e.target.value)} rows={2} maxLength={42}/></label>
          <label>GRID COLUMNS <b>{columns}</b><input type="range" min="3" max="12" value={columns} onChange={e=>setColumns(Number(e.target.value))}/></label>
          <label>ALIGNMENT<select value={alignment} onChange={e=>setAlignment(e.target.value)}><option value="left">Left aligned</option><option value="center">Centered</option><option value="right">Right aligned</option></select></label>
          <label>ACCENT COLOUR<div className="swiss-swatches">{[['Red','#e53935'],['Blue','#1749d1'],['Black','#171717']].map(([name,value])=><button key={value} aria-label={name} className={accent===value?'selected':''} style={{'--swatch':value}} onClick={()=>setAccent(value)}/>)}</div></label>
          <div className="swiss-toggle-row"><span>Show grid</span><button onClick={()=>setShowGrid(v=>!v)} aria-pressed={showGrid}>{showGrid?<Eye size={16}/>:<EyeOff size={16}/>} {showGrid?'ON':'OFF'}</button></div>
          <div className="swiss-toggle-row"><span>Annotations</span><button onClick={()=>setAnnotations(v=>!v)} aria-pressed={annotations}>{annotations?'ON':'OFF'}</button></div>
          <button className="swiss-reset" onClick={reset}><RotateCcw size={15}/> RESET PLAYGROUND</button>
        </div>
        <div className="swiss-poster-wrap">
          <div className={'swiss-poster align-'+alignment} style={{'--swiss-columns':columns,'--swiss-accent':accent}}>
            {showGrid&&<div className="swiss-grid" aria-hidden="true">{Array.from({length:columns},(_,i)=><i key={i}/>)}</div>}
            <div className="swiss-poster-top"><b>RŪ / 04.01</b><span>INFORMATION<br/>DESIGN SYSTEMS</span></div>
            <div className="swiss-poster-main"><span className="swiss-poster-kicker">FORM FOLLOWS FUNCTION</span><h2>{headline.split('\n').map((line,i)=><React.Fragment key={i}>{i>0&&<br/>}{line}</React.Fragment>)}</h2><div className="swiss-accent-rule"/><p>Make the message<br/>impossible to miss.</p></div>
            <div className="swiss-poster-circle" aria-hidden="true"/>
            <div className="swiss-poster-footer"><span>GRID / TYPE / SPACE</span><b>LESS, BUT CLEARER.</b><span>1957—NOW</span></div>
            {annotations&&<><span className="swiss-annotation ann-a">01 / HIERARCHY</span><span className="swiss-annotation ann-b">02 / GEOMETRY</span><span className="swiss-annotation ann-c">03 / ALIGNMENT</span></>}
          </div>
        </div>
      </div>
    </section>
    <section className="swiss-history"><div className="swiss-section-head"><span>02 — THE IDEA</span><span>HISTORICAL CONTEXT</span></div><div className="swiss-history-grid"><h2>Design as<br/><em>information.</em></h2><div><p>Emerging in Switzerland in the 1950s, the International Typographic Style became known for disciplined grids, sans-serif typography, asymmetrical layouts and photography used as evidence rather than ornament.</p><p>Designers such as Josef Müller-Brockmann and Armin Hofmann helped establish a language that could feel rational, modern and consistent across posters, publications and identity systems.</p><strong>It is not just a minimalist look. It is a method for organizing meaning.</strong></div></div></section>
    <section className="swiss-anatomy"><div className="swiss-section-head"><span>03 — DESIGN ANATOMY</span><span>FIVE CORE PRINCIPLES</span></div><div className="swiss-principles">{principles.map(([no,title,copy])=><article key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div></section>
    <section className="swiss-applications"><div className="swiss-section-head"><span>04 — IN PRACTICE</span><span>WHERE IT WORKS</span></div><div className="swiss-application-grid"><article><span>01</span><h3>Editorial systems</h3><p>Use columns, consistent margins and clear typographic levels to make long-form information navigable.</p></article><article><span>02</span><h3>Wayfinding</h3><p>Prioritize legibility, contrast and repeatable rules when people need to make quick decisions.</p></article><article><span>03</span><h3>Brand identity</h3><p>Build a recognizable visual system from typography, alignment and a restrained palette.</p></article></div></section>
    <section className="swiss-challenge"><div><span>05 — DESIGN CHALLENGE</span><h2>Make one message<br/><em>clear in five seconds.</em></h2><p>Create a poster for a public event. Use one headline, one supporting detail, a visible grid and one accent colour. Remove every element that does not help the audience understand what, where or when.</p></div><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY ↗</button></section>
    <footer className="swiss-footer"><span>RYŪMA / DESIGN ANATOMY</span><span>SWISS / INTERNATIONAL STYLE</span><button onClick={()=>onNavigate?.('library')}>← ALL DESIGN LANGUAGES</button></footer>
  </main>;
}
