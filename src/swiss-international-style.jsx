import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, RotateCcw, Eye, EyeOff } from 'lucide-react';
import './swiss-international-style.css';

const principles = [
  ['01', 'Grid as structure', 'A measured column system creates relationships between type, image and empty space.'],
  ['02', 'Typography as voice', 'Neutral sans-serif typography carries information with precision and a clear hierarchy.'],
  ['03', 'Asymmetry with logic', 'Composition can be off-centre, but every element remains aligned to an underlying system.'],
  ['04', 'Photography as evidence', 'Images communicate facts and ideas rather than acting as decoration.'],
  ['05', 'Reduction with purpose', 'Remove anything that does not clarify, organize or strengthen the message.'],
];

const eras = [
  ['1950s', 'A new visual language', 'Swiss designers develop a rational approach to graphic communication through grids, sans-serif type and objective imagery.'],
  ['1957', 'The movement travels', 'The term International Typographic Style gains wider recognition as the approach spreads through education and publishing.'],
  ['Today', 'A living system', 'Its principles continue in editorial design, identity systems, information graphics and digital interfaces.'],
];

const palette = [
  { name: 'Signal red', value: '#e63224' },
  { name: 'Ultramarine', value: '#244bd6' },
  { name: 'Black', value: '#171717' },
];

export default function SwissInternationalStyle({ onNavigate }) {
  const [columns, setColumns] = useState(6);
  const [gridVisible, setGridVisible] = useState(true);
  const [labelsVisible, setLabelsVisible] = useState(true);
  const [alignment, setAlignment] = useState('left');
  const [accent, setAccent] = useState('#e63224');
  const [message, setMessage] = useState('FORM\nFOLLOWS\nFUNCTION.');
  const [posterMode, setPosterMode] = useState('type');
  const [resetKey, setResetKey] = useState(0);

  const lines = useMemo(() => message.split('\n').filter(Boolean).slice(0, 4), [message]);
  const reset = () => {
    setColumns(6); setGridVisible(true); setLabelsVisible(true);
    setAlignment('left'); setAccent('#e63224');
    setMessage('FORM\nFOLLOWS\nFUNCTION.'); setPosterMode('type');
    setResetKey(value => value + 1);
  };

  return <main className="swiss-page" key={resetKey}>
    <nav className="swiss-topbar">
      <button className="swiss-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button>
      <div className="swiss-wordmark">RYŪMA <span>/ DESIGN ANATOMY</span></div>
      <span className="swiss-index">STYLE STUDY&nbsp; 04—01</span>
    </nav>

    <header className="swiss-masthead">
      <div className="swiss-kicker"><span>THE INTERNATIONAL TYPOGRAPHIC STYLE</span><span>SWITZERLAND · 1950—</span></div>
      <div className="swiss-hero-grid">
        <div className="swiss-hero-title">
          <h1>Make<br/>it <i>clear.</i></h1>
          <p className="swiss-deck">A visual language built on order, precision and the belief that design should make information easier to understand.</p>
        </div>
        <div className="swiss-hero-aside">
          <div className="swiss-red-index">01<span>/05</span></div>
          <p>LESS DECORATION.<br/>MORE COMMUNICATION.</p>
          <span className="swiss-aside-rule"/>
          <small>GRID / TYPE / IMAGE / SPACE</small>
        </div>
      </div>
      <div className="swiss-masthead-bottom"><span>DESIGN IS ORGANIZED INFORMATION</span><span>SCROLL TO EXPLORE ↓</span></div>
    </header>

    <section className="swiss-poster-wall">
      <div className="swiss-section-label"><span>01 — VISUAL LANGUAGE</span><span>THREE EXPRESSIONS / ONE SYSTEM</span></div>
      <div className="swiss-poster-grid">
        <article className="swiss-print swiss-print-a">
          <div className="print-meta"><span>RŪ / 1957</span><span>01—03</span></div>
          <div className="print-a-title"><span>THE</span><strong>GRID</strong><b>IS A<br/>TOOL.</b></div>
          <div className="print-a-disc"/>
          <div className="print-foot"><span>ORDER CREATES MEANING</span><span>FIG. 01</span></div>
        </article>
        <article className="swiss-print swiss-print-b">
          <div className="print-meta"><span>INFORMATION</span><span>02—03</span></div>
          <div className="print-b-bars"><i/><i/><i/><i/><i/></div>
          <h2>READ<br/>THE<br/><em>SPACE.</em></h2>
          <div className="print-b-footer"><span>NEGATIVE SPACE</span><b>↗</b></div>
        </article>
        <article className="swiss-print swiss-print-c">
          <div className="print-meta"><span>PUBLIC NOTICE</span><span>03—03</span></div>
          <div className="print-c-number">3</div>
          <h2>POINTS<br/>OF VIEW</h2>
          <div className="print-c-bottom"><span>ALIGNMENT</span><span>CONTRAST</span><span>RHYTHM</span></div>
        </article>
      </div>
      <p className="swiss-wall-caption">A system can produce many compositions. Consistency comes from the rules, not from repeating the same layout.</p>
    </section>

    <section className="swiss-lab">
      <div className="swiss-section-label"><span>02 — COMPOSITION LAB</span><span>INTERACTIVE SPECIMEN</span></div>
      <div className="swiss-lab-intro"><h2>Build with<br/><i>the grid.</i></h2><p>Change the structure, message and accent. Notice how the same rules can create a different visual rhythm.</p></div>
      <div className="swiss-lab-layout">
        <aside className="swiss-tools">
          <div className="swiss-tool-heading"><span>01 / CONTROLS</span><button onClick={reset} aria-label="Reset controls"><RotateCcw size={15}/></button></div>
          <label className="swiss-field">YOUR MESSAGE<textarea value={message} onChange={event => setMessage(event.target.value.toUpperCase())} rows={3} maxLength={48}/><small>Use a new line to control the hierarchy.</small></label>
          <label className="swiss-field">COLUMN COUNT <b>{columns}</b><input type="range" min="3" max="12" value={columns} onChange={event => setColumns(Number(event.target.value))}/></label>
          <label className="swiss-field">ALIGNMENT<select value={alignment} onChange={event => setAlignment(event.target.value)}><option value="left">Flush left</option><option value="center">Centered</option><option value="right">Flush right</option></select></label>
          <div className="swiss-field"><span>ACCENT COLOUR</span><div className="swiss-palette">{palette.map(item => <button key={item.value} title={item.name} aria-label={item.name} className={accent === item.value ? 'is-active' : ''} style={{'--swatch': item.value}} onClick={() => setAccent(item.value)}/>)}</div></div>
          <div className="swiss-field"><span>POSTER STRUCTURE</span><div className="swiss-mode-switch"><button className={posterMode === 'type' ? 'is-active' : ''} onClick={() => setPosterMode('type')}>TYPE</button><button className={posterMode === 'number' ? 'is-active' : ''} onClick={() => setPosterMode('number')}>NUMBER</button></div></div>
          <div className="swiss-checks"><button onClick={() => setGridVisible(value => !value)} aria-pressed={gridVisible}>{gridVisible ? <Eye size={15}/> : <EyeOff size={15}/>} GRID {gridVisible ? 'ON' : 'OFF'}</button><button onClick={() => setLabelsVisible(value => !value)} aria-pressed={labelsVisible}>{labelsVisible ? 'LABELS ON' : 'LABELS OFF'}</button></div>
        </aside>
        <div className="swiss-live-wrap">
          <div className="swiss-live-head"><span>LIVE OUTPUT / 01</span><span>4:5 POSTER</span></div>
          <div className={'swiss-live-poster align-' + alignment} style={{'--swiss-cols': columns, '--swiss-accent': accent}}>
            {gridVisible && <div className="swiss-live-grid" aria-hidden="true">{Array.from({length: columns}, (_, index) => <i key={index}/>)}</div>}
            <div className="live-top"><b>RŪ—04</b><span>INTERNATIONAL<br/>TYPOGRAPHIC STYLE</span></div>
            <div className={'live-content mode-' + posterMode}>
              {labelsVisible && <span className="live-kicker">FORM / FUNCTION / CLARITY</span>}
              {posterMode === 'type' ? <h3>{lines.map((line, index) => <React.Fragment key={index}>{index > 0 && <br/>}{line}</React.Fragment>)}</h3> : <div className="live-number">04</div>}
              <div className="live-rule"/>
              <p>Communication<br/>before decoration.</p>
            </div>
            <div className="live-red-shape"/>
            <div className="live-bottom"><span>GRID SYSTEMS</span><b>DESIGN STUDY</b><span>1957—TODAY</span></div>
            {labelsVisible && <><span className="live-note note-one">A / HIERARCHY</span><span className="live-note note-two">B / ALIGNMENT</span></>}
          </div>
          <div className="swiss-live-foot"><span>OUTPUT UPDATES AS YOU EDIT</span><span>NO FIXED TEMPLATE</span></div>
        </div>
      </div>
    </section>

    <section className="swiss-history">
      <div className="swiss-section-label"><span>03 — CONTEXT</span><span>A SHORT HISTORY</span></div>
      <div className="swiss-history-heading"><h2>Not a look.<br/><i>A way of thinking.</i></h2><p>The International Typographic Style emerged in Switzerland during the 1950s. It proposed that graphic design could be objective, structured and accessible—using visual order to make complex information easier to read.</p></div>
      <div className="swiss-timeline">{eras.map(([year, title, copy]) => <article key={year}><span>{year}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div>
      <div className="swiss-designers"><span>KEY CONTRIBUTORS</span><p>Josef Müller-Brockmann <i>·</i> Armin Hofmann <i>·</i> Emil Ruder <i>·</i> Max Bill</p></div>
    </section>

    <section className="swiss-principles">
      <div className="swiss-section-label"><span>04 — DESIGN ANATOMY</span><span>THE FIVE RULES</span></div>
      <div className="swiss-principle-list">{principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={18}/></article>)}</div>
    </section>

    <section className="swiss-applications">
      <div className="swiss-section-label"><span>05 — APPLICATION</span><span>FROM PRINT TO SCREEN</span></div>
      <div className="swiss-application-grid">
        <article><span>01 / EDITORIAL</span><h3>Publications</h3><p>Use a consistent column grid, typographic scale and image logic to guide long-form reading.</p><div className="app-editorial"><i/><i/><i/><b/></div></article>
        <article><span>02 / INFORMATION</span><h3>Wayfinding</h3><p>Make directions scannable through hierarchy, contrast, spacing and predictable placement.</p><div className="app-wayfinding"><b>←</b><strong>PLATFORM 02</strong><small>DEPARTURES / 09:42</small></div></article>
        <article><span>03 / IDENTITY</span><h3>Visual systems</h3><p>Build recognition through repeatable rules rather than a collection of unrelated decorations.</p><div className="app-identity"><b>R</b><span>RŪ / SYSTEM 04</span></div></article>
      </div>
    </section>

    <section className="swiss-exercise">
      <div className="swiss-exercise-number">06 / PRACTICE</div>
      <div><h2>One message.<br/><i>Five seconds.</i></h2><p>Design a public-event poster. Include what, where and when. Start with a grid, establish one clear headline, add one supporting detail and use a single accent colour. Then remove anything that does not help the audience understand.</p></div>
      <button onClick={() => onNavigate?.('practice-studio')}>OPEN PRACTICE STUDIO <ArrowUpRight size={16}/></button>
    </section>

    <footer className="swiss-footer"><span>RYŪMA / DESIGN ANATOMY</span><span>SWISS / INTERNATIONAL TYPOGRAPHIC STYLE</span><button onClick={() => onNavigate?.('library')}><ArrowLeft size={14}/> BACK TO LIBRARY</button></footer>
  </main>;
}
