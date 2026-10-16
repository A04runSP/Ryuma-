import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './claymorphism-design-style.css';

const anatomy=[
 ['01','SOFTNESS','Rounded geometry creates a friendly physical character.'],
 ['02','VOLUME','Raised surfaces make components feel molded rather than flat.'],
 ['03','TOUCH','Pressed states communicate interaction through physical response.'],
 ['04','PLAY','Small movements and exaggerated forms give the system personality.'],
 ['05','DEPTH','Light and shadow create the illusion of soft material.'],
];

export default function ClaymorphismDesignStyle({onNavigate}){
 const [pressed,setPressed]=useState(null);
 const press=(key)=>setPressed(key);
 const release=()=>setPressed(null);
 return <main className="clay-style-page">
  <header className="clay-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button><div><b>RYUMA</b><span>リューマ</span></div><span>DESIGN LANGUAGE / 02.04</span></header>

  <section className="clay-hero"><div className="clay-copy"><span className="clay-kicker">02 / CLAYMORPHISM</span><h1>Soft by<br/><em>design.</em></h1><p className="clay-lead">A tactile visual language built from soft surfaces, rounded forms and playful physicality.</p><p>Claymorphism makes digital interfaces feel almost touchable. Every surface appears molded, raised and ready to respond.</p><div className="clay-palette"><i/><i/><i/><i/><i/></div></div><div className="clay-hero-art"><div className="clay-hero-blob"/><div className="clay-hero-card"><span>CLAY UI</span><strong>SOFT<br/>SURFACES.</strong><small>FORM / VOLUME / TOUCH</small></div><div className="clay-hero-pill">MOLDED</div></div></section>

  <section className="clay-section"><div className="clay-label"><span>03</span><b>THE IDEA</b></div><div><h2>Interfaces you can<br/><em>almost touch.</em></h2><p>Claymorphism turns familiar interface elements into soft, dimensional objects. Rounded geometry, controlled shadows and tactile states create a friendly sense of physicality.</p><div className="clay-flow"><span>FORM</span><i>→</i><span>VOLUME</span><i>→</i><span>TOUCH</span><i>→</i><b>FEEL</b></div></div></section>

  <section className="clay-section"><div className="clay-label"><span>04</span><b>DESIGN ANATOMY</b></div><div><h2>Five parts.<br/><em>One soft language.</em></h2><div className="clay-anatomy">{anatomy.map(([no,title,copy])=><article key={no}><span>{no}</span><div><b>{title}</b><p>{copy}</p></div></article>)}</div></div></section>

  <section className="clay-section"><div className="clay-label"><span>05</span><b>MATERIAL</b></div><div><h2>Made to<br/><em>feel.</em></h2><p>Soft surfaces gain character through inflated forms, gentle highlights and shadows that suggest depth without becoming glossy.</p>
   <div className="clay-playground">
    <div className="clay-playground-label">CLAY PLAYGROUND / TOUCH THE OBJECTS</div>
    <div className="clay-playground-orb orb-pink"/><div className="clay-playground-orb orb-blue"/>
    <button className={`clay-object clay-main ${pressed==='main'?'is-pressed':''}`} onPointerDown={()=>press('main')} onPointerUp={release} onPointerCancel={release} onPointerLeave={release}><span>CLAY UI</span><strong>SOFT<br/>BY DESIGN.</strong><small>{pressed==='main'?'PRESSED / SPRING BACK':'PRESS ME'}</small></button>
    <button className={`clay-object clay-circle ${pressed==='circle'?'is-pressed':''}`} aria-label="Press clay circle" onPointerDown={()=>press('circle')} onPointerUp={release} onPointerCancel={release} onPointerLeave={release}><b>+</b></button>
    <button className={`clay-object clay-button ${pressed==='button'?'is-pressed':''}`} onPointerDown={()=>press('button')} onPointerUp={release} onPointerCancel={release} onPointerLeave={release}>{pressed==='button'?'PRESSED':'TOUCH'}</button>
    <button type="button" className={`clay-object clay-tile ${pressed==='tile'?'is-pressed':''}`} aria-pressed={pressed==='tile'} onPointerDown={()=>press('tile')} onPointerUp={release} onPointerCancel={release} onPointerLeave={release} onKeyDown={(event)=>{if(event.key==='Enter'||event.key===' ')press('tile')}} onKeyUp={release} onBlur={release}><span>04</span><b>{pressed==='tile'?'PLAYING':'PLAY'}</b></button>
   </div>
  </div></section>

  <section className="clay-section"><div className="clay-label"><span>06</span><b>FORM</b></div><div><h2>Round the edges.<br/><em>Keep the character.</em></h2><p>Soft geometry makes controls feel approachable. Circles, inflated rectangles and generous radii establish the molded visual vocabulary.</p><div className="clay-form-demo"><div/><div/><div/><span>SOFT GEOMETRY</span></div></div></section>

  <section className="clay-section"><div className="clay-label"><span>07</span><b>TOUCH</b></div><div><h2>Press it.<br/><em>Feel it respond.</em></h2><p>The interface communicates touch through compression and spring-back. Interaction becomes part of the material itself.</p><div className="clay-states"><div><span>REST</span><b>RAISED</b></div><i>→</i><div><span>TOUCH</span><b>PRESSED</b></div><i>→</i><div><span>RELEASE</span><b>SPRING</b></div></div></div></section>

  <section className="clay-section"><div className="clay-label"><span>08</span><b>ADAPTATION</b></div><div><h2>One soft language.<br/><em>Many interfaces.</em></h2><p>Claymorphism can scale from playful controls to complete interface systems while preserving its tactile personality.</p><div className="clay-adapt"><div><span>MOBILE</span><b>FOCUS</b></div><div><span>TABLET</span><b>PLAY</b></div><div><span>DESKTOP</span><b>FLOW</b></div></div></div></section>

  <footer className="clay-footer"><span>CLAYMORPHISM / 02.04</span><h2>Soft surface.<br/><em>Strong character.</em></h2><p>A tactile visual language built from softness, volume, touch, play and depth.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
 </main>;
}
