import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Plus, Minus } from 'lucide-react';
import './material-design-style.css';

const anatomy = [
  ['01','SURFACE','Layers give content a clear place to live.'],
  ['02','ELEVATION','Depth separates priority without decoration.'],
  ['03','TYPE','Scale and hierarchy make information scannable.'],
  ['04','COLOUR','A focused accent system guides action and meaning.'],
  ['05','MOTION','Transitions explain change and preserve continuity.'],
];

export default function MaterialDesignStyle({onNavigate}) {
  const [selected, setSelected] = useState('surface');
  const [count, setCount] = useState(2);
  const [openCard, setOpenCard] = useState(null);
  const [done, setDone] = useState(false);
  const modes = {surface:'SURFACE', elevation:'ELEVATION', type:'TYPE'};
  const cardInfo = {
    depth: { no:'03', title:'DEPTH', copy:'Elevation creates clear relationships between surfaces. Higher layers receive stronger separation so priority is visible at a glance.' },
    structure: { no:'02', title:'STRUCTURE', copy:'Components follow shared rules for spacing, shape and hierarchy, making the system predictable and easy to navigate.' },
    component: { no:'01 / COMPONENT', title:'MAKE IT CLEAR.', copy:'Reusable components turn the system into a consistent interface. Each part has a clear role and response.' }
  };
  return <main className="material-style-page" onClick={(event)=>{if(openCard && !event.target.closest('.material-card'))setOpenCard(null)}}>
    <header className="material-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button>
      <div className="material-brand"><b>RYUMA</b><span>リューマ</span></div>
      <span>DESIGN LANGUAGE / 02.02</span>
    </header>

    <section className="material-hero">
      <div className="material-hero-copy">
        <span className="material-kicker">02 / MATERIAL DESIGN</span>
        <h1>Objects<br/><em>have order.</em></h1>
        <p className="material-lead">A system of surfaces, hierarchy, motion and meaningful interaction built for the screen.</p>
        <p>Material design turns digital interfaces into a coherent system of components — clear enough to understand, flexible enough to adapt.</p>
        <button className="material-primary" onClick={()=>document.getElementById('material-anatomy')?.scrollIntoView({behavior:'smooth',block:'start'})}>EXPLORE THE SYSTEM <ArrowRight size={17}/></button>
      </div>
      <div className="material-stage">
        <div className="material-backdrop"/>
        <button type="button" aria-expanded={openCard==='depth'} aria-label="View depth details" className={`material-card card-back ${openCard==='depth'?'is-open':''}`} onClick={(event)=>{event.stopPropagation();setOpenCard(openCard==='depth'?null:'depth')}}><span>{cardInfo.depth.no}</span><b>{cardInfo.depth.title}</b>{openCard==='depth'&&<p>{cardInfo.depth.copy}</p>}</button>
        <button type="button" aria-expanded={openCard==='structure'} aria-label="View structure details" className={`material-card card-mid ${openCard==='structure'?'is-open':''}`} onClick={(event)=>{event.stopPropagation();setOpenCard(openCard==='structure'?null:'structure')}}><span>{cardInfo.structure.no}</span><b>{cardInfo.structure.title}</b>{openCard==='structure'&&<p>{cardInfo.structure.copy}</p>}</button>
        <button type="button" aria-expanded={openCard==='component'} aria-label="View component details" className={`material-card card-front ${openCard==='component'?'is-open':''}`} onClick={(event)=>{event.stopPropagation();setOpenCard(openCard==='component'?null:'component')}}><span>{cardInfo.component.no}</span><strong>{cardInfo.component.title}</strong>{openCard==='component'&&<p>{cardInfo.component.copy}</p>}<span className="card-action">VIEW DETAILS <ArrowRight size={14}/></span></button>
        <button type="button" className="material-fab" aria-label="Add one item" onClick={()=>setCount(c=>c+1)}>+</button>
        {openCard&&<span className="card-return-hint">TAP OUTSIDE TO RETURN</span>}
      </div>
    </section>

    <section className="material-section material-idea">
      <div className="material-label"><span>03</span><b>THE IDEA</b></div>
      <div><h2>One system.<br/><em>Many surfaces.</em></h2><p>Material design is not about making screens look like physical paper. It uses a shared model of surfaces, hierarchy and motion so components behave consistently.</p><div className="material-flow"><span>COMPONENT</span><i>→</i><span>SYSTEM</span><i>→</i><b>EXPERIENCE</b></div></div>
    </section>

    <section className="material-section" id="material-anatomy">
      <div className="material-label"><span>04</span><b>DESIGN ANATOMY</b></div>
      <div><h2>Build the<br/><em>system.</em></h2><div className="material-anatomy">{anatomy.map(([no,title,copy])=><article key={no}><span>{no}</span><div><b>{title}</b><p>{copy}</p></div><ArrowRight size={17}/></article>)}</div></div>
    </section>

    <section className="material-section material-elevation">
      <div className="material-label"><span>05</span><b>ELEVATION</b></div>
      <div><h2>Depth without<br/><em>confusion.</em></h2><p>Elevation establishes relationships between surfaces. The visual language stays restrained so hierarchy does the talking.</p><div className="elevation-demo"><div className="elevation-ground"><span>BASE</span><div className="elevation-surface level-one">LEVEL 01</div><div className="elevation-surface level-two">LEVEL 02</div><div className="elevation-surface level-three">LEVEL 03</div></div></div></div>
    </section>

    <section className="material-section material-components" id="material-components">
      <div className="material-label"><span>06</span><b>COMPONENTS</b></div>
      <div><h2>Small parts.<br/><em>Shared rules.</em></h2><div className="component-demo"><div className="demo-toolbar"><span>ACCOUNT</span><i/><i/><i/></div><div className="demo-content"><div className="demo-avatar">R</div><div><strong>RYUMA SYSTEM</strong><span>Component study</span></div><button type="button" aria-pressed={done} onClick={()=>setDone(v=>!v)}><Check size={15}/> {done?'COMPLETED':'MARK COMPLETE'}</button><span className="component-status" aria-live="polite">{done?'Component marked complete.':'Not completed yet.'}</span></div></div></div>
    </section>

    <section className="material-section material-motion">
      <div className="material-label"><span>07</span><b>MOTION</b></div>
      <div><h2>Change should<br/><em>make sense.</em></h2><p>Motion connects one state to the next. It gives feedback, preserves context and makes an interface feel responsive rather than abrupt.</p><div className={`motion-demo ${selected}`}><div className="motion-orb"/><span>{modes[selected]}</span></div><div className="material-controls">{Object.entries(modes).map(([key,label])=><button key={key} className={selected===key?'is-selected':''} onClick={()=>setSelected(key)}>{label}</button>)}</div></div>
    </section>

    <section className="material-section material-interaction">
      <div className="material-label"><span>08</span><b>INTERACTION</b></div>
      <div><h2>Design for<br/><em>the response.</em></h2><p>Components should communicate their state clearly. Tap the controls to change the system and see the response immediately.</p><div className="stepper"><button aria-label="Decrease" onClick={()=>setCount(c=>Math.max(0,c-1))}><Minus size={18}/></button><strong aria-live="polite">{count}</strong><button aria-label="Increase" onClick={()=>setCount(c=>c+1)}><Plus size={18}/></button><span>ITEMS</span></div></div>
    </section>

    <footer className="material-footer"><span>MATERIAL DESIGN / 02.02</span><h2>Clear system.<br/><em>Natural response.</em></h2><p>A design specimen for studying surfaces, hierarchy, components and motion.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
  </main>;
}
