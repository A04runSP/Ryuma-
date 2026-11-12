import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Power, Sun, Volume2 } from 'lucide-react';
import './neomorphism-style.css';

const parts=[
 {n:'01',t:'Colour',d:'Midnight graphite surfaces carry the system. Ember orange provides a restrained, high-contrast accent.'},
 {n:'02',t:'Type',d:'Warm ivory typography keeps the tactile interface readable and grounded.'},
 {n:'03',t:'Form',d:'Rounded controls become raised or recessed through paired soft shadows.'},
 {n:'04',t:'Space',d:'Open spacing separates tactile objects so the surface never feels crowded.'},
 {n:'05',t:'Motion',d:'Controls press inward and release outward, reinforcing the physical metaphor.'}
];

export default function NeomorphismStyle({onNavigate}){
 const [sliderValue,setSliderValue]=useState(58);
 const [pressed,setPressed]=useState({sun:false,power:false,volume:true});
 const toggle=(key)=>setPressed(current=>({...current,[key]:!current[key]}));
 const depth=sliderValue/100;
 const pressedCount=Object.values(pressed).filter(Boolean).length;
 const raisedCount=3-pressedCount;
 const light=0.16 + depth*0.22 + (3-pressedCount)*0.025;
 const dark=0.22 + depth*0.30 + pressedCount*0.035;
 const tactileStyle={
  '--neo-depth':depth,
  '--neo-offset':`${4+depth*18}px`,
  '--neo-blur':`${10+depth*34}px`,
  '--neo-light':`rgba(255,255,255,${Math.min(light,.28)})`,
  '--neo-dark':`rgba(0,0,0,${Math.min(dark,.72)})`,
  '--neo-state':`${pressedCount}`
 };
 const buttonStyle=(isPressed)=>({
  '--neo-btn-offset':`${5+depth*9}px`,
  '--neo-btn-blur':`${10+depth*18}px`,
  '--neo-btn-inset':`${4+depth*7}px`,
  '--neo-btn-light':`rgba(255,255,255,${Math.min(isPressed?light*.9:light,.28)})`,
  '--neo-btn-dark':`rgba(0,0,0,${Math.min(isPressed?dark*1.1:dark,.76)})`
 });
 const stateText=pressedCount===0?'ALL RAISED':pressedCount===3?'ALL PRESSED':`${pressedCount} PRESSED · ${raisedCount} RAISED`;
 return <main className="neo-page"><header className="neo-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button><div><b>RYUMA</b><span>リューマ</span></div><small>DESIGN LANGUAGE / 03</small></header>
 <section className="neo-hero"><div className="neo-intro"><span>03 / NEOMORPHISM</span><h1>Soft.<br/><em>Made tactile.</em></h1><p className="neo-lead">A surface you can almost feel.</p><p>Neomorphism creates the illusion that controls are moulded from the same physical surface — raised by light, pressed by shadow.</p><div className="neo-palette"><i/><i/><i/><i/><i/></div></div><div className="neo-panel" style={tactileStyle}><span className="panel-label">TACTILE SYSTEM / 01</span><h2>CONTROL<br/><em>PANEL</em></h2><div className="neo-controls"><button type="button" aria-label="Light control" aria-pressed={pressed.sun} className={pressed.sun?'neo-pressed':'neo-raised'} style={buttonStyle(pressed.sun)} onClick={()=>toggle('sun')}><Sun size={20}/></button><button type="button" aria-label="Power control" aria-pressed={pressed.power} className={`${pressed.power?'neo-pressed':'neo-raised'} power`} style={buttonStyle(pressed.power)} onClick={()=>toggle('power')}><Power size={20}/></button><button type="button" aria-label="Sound control" aria-pressed={pressed.volume} className={pressed.volume?'neo-pressed':'neo-raised'} style={buttonStyle(pressed.volume)} onClick={()=>toggle('volume')}><Volume2 size={18}/></button></div><div className="neo-slider"><span style={{width:`${sliderValue}%`}}/><input aria-label="Tactile depth control" type="range" min="0" max="100" value={sliderValue} onChange={(e)=>setSliderValue(Number(e.target.value))}/></div><div className="neo-state"><small>TACTILE DEPTH · {sliderValue}%</small><b>{stateText}</b></div></div></section>
 <section className="neo-section"><div className="neo-label">02<br/><b>THE IDEA</b></div><div><h2>One surface.<br/><em>Two directions.</em></h2><p>Light makes an object feel raised. Dark shadow makes it feel pressed. Both belong to the same surface, creating a soft physical illusion.</p><div className="neo-compare"><article><button type="button" className="neo-raised"><span>+</span></button><b>RAISED</b><small>LIGHT OUT / FORM UP</small></article><article><button type="button" className="neo-pressed"><span>−</span></button><b>PRESSED</b><small>SHADOW IN / FORM DOWN</small></article></div></div></section>
 <section className="neo-section"><div className="neo-label">03<br/><b>DESIGN ANATOMY</b></div><div><h2>Five parts.<br/><em>One tactile language.</em></h2><div className="neo-parts">{parts.map(x=><article key={x.n}><span>{x.n}</span><h3>{x.t}</h3><p>{x.d}</p></article>)}</div></div></section>
 <section className="neo-section"><div className="neo-label">04<br/><b>COMPOSITION</b></div><div><h2>Make the surface<br/><em>do the work.</em></h2><div className="neo-stage"><div className="neo-disc"><div className="neo-disc-inner">R</div></div><div className="neo-pill"><span>STATUS</span><b>ACTIVE</b></div><div className="neo-small-button"><ArrowRight size={17}/></div><div className="neo-caption">LIGHT + SHADOW<br/><small>CREATE DEPTH</small></div></div></div></section>
 <footer className="neo-footer"><span>NEOMORPHISM / 03</span><h2>Soft surfaces.<br/><em>Strong illusion.</em></h2><p>Warm, tactile and intentionally restrained.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowRight size={15}/></button></footer></main>;
}
