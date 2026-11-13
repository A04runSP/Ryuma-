import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Copy, Grid3X3, RotateCcw, ScanLine, ShieldAlert, Signal, SlidersHorizontal } from 'lucide-react';
import './cyberpunk-style.css';

const palette=[{name:'Signal cyan',value:'#20E3E6'},{name:'Neon magenta',value:'#FF4CA7'},{name:'Acid green',value:'#D5FF3F'},{name:'Warning amber',value:'#FFB454'}];
const principles=[
['01','High contrast','Separate critical signals from complex environments. Bright accents should be rare enough to remain meaningful.'],
['02','Layered information','Combine labels, coordinates and data fragments into a believable system. Give every layer a readable role.'],
['03','Controlled noise','Use grain, distortion and interruption to communicate instability without obscuring essential content.'],
['04','Urban density','Let architecture, signage and overlapping systems create the sense of a city that never switches off.'],
['05','Signal colour','Assign cyan, magenta and acid tones to functional roles: navigation, warning, status and emphasis.'],
['06','Resistance and agency','Contrast corporate systems with human intervention. Make the conflict visible through language and composition.']
];
const applications=[
['A','Editorial & posters','Urgent headlines, fragmented grids and high-impact information hierarchy.','PRINT / CULTURE / CAMPAIGN'],
['B','Interface systems','Dense operational screens with clear status, navigation and alert priorities.','UI / DATA / CONTROL'],
['C','Environmental graphics','Wayfinding, district identity and signage for layered urban spaces.','SPACE / WAYFINDING / SIGNAGE']
];

export default function CyberpunkStyle({onNavigate}){
 const [accent,setAccent]=useState(palette[0].value);
 const [headline,setHeadline]=useState('SIGNAL\nOVER\nNOISE.');
 const [subline,setSubline]=useState('THE CITY IS LISTENING.');
 const [gridOn,setGridOn]=useState(true);
 const [mode,setMode]=useState('broadcast');
 const [copied,setCopied]=useState(false);
 const lines=useMemo(()=>headline.split('\n').slice(0,4),[headline]);
 const reset=()=>{setAccent(palette[0].value);setHeadline('SIGNAL\nOVER\nNOISE.');setSubline('THE CITY IS LISTENING.');setGridOn(true);setMode('broadcast');};
 const copyText=async()=>{try{await navigator.clipboard.writeText(headline+'\n'+subline);setCopied(true);window.setTimeout(()=>setCopied(false),1600);}catch{setCopied(false);}};
 return <main className="cyberpunk-page" style={{'--cyber-accent':accent}}>
  <header className="cyber-nav">
   <button className="cyber-back" onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button>
   <a className="cyber-wordmark" href="#/" onClick={()=>onNavigate?.('home')}>RYŪMA <span>/ DESIGN ANATOMY</span></a>
   <span className="cyber-index">04.03 <i>—</i> INDEPENDENT STYLE WORLD</span>
  </header>
  <section className="cyber-hero">
   <div className="cyber-hero-copy">
    <div className="cyber-eyebrow"><span className="cyber-live-dot"/> FUTURE STUDIES / 2089</div>
    <h1>NO FUTURE<br/><em>WITHOUT</em><br/><span>RESISTANCE_</span></h1>
    <p>High technology. Low life. Cyberpunk turns the city into an interface — where corporate systems, human resistance and machine intelligence collide.</p>
    <div className="cyber-hero-meta"><span><b>01</b> URBAN SYSTEMS</span><span><b>02</b> TECHNOLOGY & POWER</span><span><b>03</b> COUNTER-CULTURE</span></div>
    <a className="cyber-text-link" href="#anatomy">EXPLORE THE ANATOMY <ArrowUpRight size={15}/></a>
   </div>
   <div className="cyber-city-art" role="img" aria-label="Abstract cyberpunk city skyline"><div className="cyber-art-scan"/><div className="cyber-sun"/><div className="cyber-city-grid"/>
    <div className="cyber-building cyber-building-one"><i/><i/><i/></div><div className="cyber-building cyber-building-two"><i/><i/><i/><i/></div><div className="cyber-building cyber-building-three"><i/><i/><i/></div><div className="cyber-building cyber-building-four"><i/><i/><i/><i/></div>
    <div className="cyber-billboard">YOUR<br/>FUTURE<br/><b>IS OWNED.</b></div><div className="cyber-city-caption"><span>SECTOR 09 / NIGHT SHIFT</span><span>35° 41' 22.2" N</span></div><div className="cyber-art-stamp">NO<br/>EXIT</div>
   </div>
  </section>
  <section className="cyber-thesis"><span className="cyber-section-label">THE CENTRAL IDEA / 00</span><p>Cyberpunk is not simply a neon colour palette. It is a visual language about <strong>technology, inequality, surveillance, identity and resistance.</strong></p><div className="cyber-thesis-mark">HIGH TECH<br/><b>LOW LIFE</b></div></section>
  <section className="cyber-anatomy" id="anatomy">
   <div className="cyber-section-heading"><div><span className="cyber-section-label">01 — DESIGN ANATOMY</span><h2>Read the<br/><em>system.</em></h2></div><p>Six principles shape the language. Each one is a design decision — not a decorative effect.</p></div>
   <div className="cyber-principle-grid">{principles.map(item=><article className="cyber-principle" key={item[0]}><span className="cyber-principle-number">{item[0]} / PRINCIPLE</span><h3>{item[1]}</h3><p>{item[2]}</p><span className="cyber-principle-mark">↗</span></article>)}</div>
  </section>
  <section className="cyber-type-colour">
   <div className="cyber-type-panel"><span className="cyber-section-label">02 — TYPOGRAPHY</span><div className="cyber-type-display">Aa<span>09</span></div><h3>LOUD DISPLAY.<br/>QUIET INTERFACE.</h3><p>Use compressed display faces for short statements. Pair them with a legible sans-serif and restrained monospace for metadata, coordinates and system labels.</p><div className="cyber-type-spec"><span>DISPLAY / CONDENSED BOLD</span><span>BODY / NEUTRAL SANS</span><span>DATA / MONOSPACE</span></div></div>
   <div className="cyber-colour-panel"><span className="cyber-section-label">03 — SIGNAL COLOUR</span><div className="cyber-colour-stack"><i/><i/><i/><i/><i/></div><h3>COLOUR HAS<br/>A JOB TO DO.</h3><p>Start with a dark environment. Assign bright colours to specific signals — active, warning, interruption and focus. Avoid using every accent at once.</p><div className="cyber-colour-legend"><span><i/> ENVIRONMENT</span><span><i/> SIGNAL</span><span><i/> ALERT</span></div></div>
  </section>
  <section className="cyber-grid-study"><div><span className="cyber-section-label">04 — GRID & COMPOSITION</span><h2>Order inside<br/><em>the overload.</em></h2><p>Cyberpunk compositions can feel fragmented, but their structure should remain intentional. Use a strong base grid, then interrupt it with labels, overlaps and directional elements.</p></div><div className="cyber-grid-demo" aria-label="Modular grid composition example"><div className="cyber-grid-demo-top">SYS / 09.2089 <span>GRID TEST 04</span></div><div className="cyber-grid-demo-block block-a">NO<br/>FUTURE</div><div className="cyber-grid-demo-block block-b">SIGNAL<br/>LOST</div><div className="cyber-grid-demo-block block-c">RESIST</div><div className="cyber-grid-demo-lines"/><div className="cyber-grid-demo-foot">STRUCTURE / INTERRUPTION / RHYTHM</div></div></section>
  <section className="cyber-applications"><div className="cyber-section-heading"><div><span className="cyber-section-label">05 — IN USE</span><h2>Beyond the<br/><em>neon.</em></h2></div><p>Translate the visual language into real communication systems. Atmosphere is not a substitute for usability.</p></div>
   <div className="cyber-application-list">{applications.map(item=><article key={item[0]}><span className="cyber-application-id">{item[0]}</span><div><h3>{item[1]}</h3><p>{item[2]}</p><small>{item[3]}</small></div><ArrowUpRight size={20}/></article>)}</div>
  </section>
  <section className="cyber-playground"><div className="cyber-playground-intro"><span className="cyber-section-label">06 — COMPOSITION LAB</span><h2>Make your<br/><em>own signal.</em></h2><p>Change the message, choose a signal colour and switch the visual treatment. The composition updates as you work.</p><div className="cyber-lab-note"><SlidersHorizontal size={16}/> LIVE SPECIMEN CONTROLS</div></div>
   <div className="cyber-lab-workspace"><div className="cyber-lab-controls">
    <label>HEADLINE<textarea rows={3} maxLength={54} value={headline} onChange={e=>setHeadline(e.target.value)}/></label>
    <label>SUPPORTING LINE<input value={subline} maxLength={48} onChange={e=>setSubline(e.target.value)}/></label>
    <div className="cyber-control-group"><span className="cyber-control-label">SIGNAL COLOUR</span><div className="cyber-swatches">{palette.map(item=><button key={item.value} aria-label={item.name} title={item.name} aria-pressed={accent===item.value} style={{'--swatch':item.value}} onClick={()=>setAccent(item.value)}/>)}</div></div>
    <div className="cyber-control-group"><span className="cyber-control-label">COMPOSITION MODE</span><div className="cyber-mode-buttons"><button className={mode==='broadcast'?'active':''} onClick={()=>setMode('broadcast')}>BROADCAST</button><button className={mode==='warning'?'active':''} onClick={()=>setMode('warning')}>WARNING</button></div></div>
    <label className="cyber-grid-toggle"><input type="checkbox" checked={gridOn} onChange={e=>setGridOn(e.target.checked)}/><span><Grid3X3 size={15}/> SHOW GRID</span></label>
    <div className="cyber-lab-actions"><button onClick={reset}><RotateCcw size={14}/> RESET</button><button onClick={copyText}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'COPIED':'COPY TEXT'}</button></div>
   </div>
   <div className={'cyber-live-specimen mode-'+mode+(gridOn?' show-grid':'')}><div className="cyber-live-specimen-head"><span><Signal size={13}/> TRANSMISSION / LIVE</span><span>CH 09 — 2089</span></div><div className="cyber-live-specimen-alert"><ShieldAlert size={13}/> {mode==='warning'?'CRITICAL SYSTEM WARNING':'UNAUTHORIZED BROADCAST'}</div><div className="cyber-live-specimen-copy">{lines.map((line,i)=><span key={i}>{line||'\u00a0'}</span>)}</div><p>{subline}</p><div className="cyber-live-specimen-footer"><span>TRACE: LOST</span><span>FEED / 09.04</span><span>END SIGNAL_</span></div></div>
   </div>
  </section>
  <section className="cyber-motion-note"><div className="cyber-motion-icon"><ScanLine size={25}/></div><div><span className="cyber-section-label">07 — MOTION & INTERACTION</span><h2>Motion should<br/>carry information.</h2><p>Use scan lines, signal pulses and short transitions to communicate system state. Keep reading stable, provide clear controls and respect reduced-motion preferences.</p></div><div className="cyber-motion-meter"><Signal size={19}/><span>STATIC SIGNAL</span><b>128 <small>BPM</small></b><i/></div></section>
  <footer className="cyber-footer"><span>RYŪMA / DESIGN ANATOMY</span><span>CYBERPUNK / 04.03</span><button onClick={()=>onNavigate?.('library')}>RETURN TO DESIGN LIBRARY <ArrowLeft size={14}/></button></footer>
 </main>;
}
