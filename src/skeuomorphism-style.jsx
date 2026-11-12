import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause, SkipBack, SkipForward, Volume2, Radio, Layers, Sun, MousePointer2, Grid2X2, Box } from 'lucide-react';
import './skeuomorphism-style.css';

const parts=[
 {n:'01',title:'Material Realism',desc:'Leather, metal, glass and paper create recognizable physical context.',icon:Box},
 {n:'02',title:'Tactile Interaction',desc:'Controls invite pressing, turning, sliding and handling.',icon:MousePointer2},
 {n:'03',title:'Depth & Layers',desc:'Bevels, layers and cast shadows establish physical hierarchy.',icon:Layers},
 {n:'04',title:'Realistic Lighting',desc:'Consistent highlights and shadows make surfaces feel tangible.',icon:Sun},
 {n:'05',title:'Familiar Metaphors',desc:'Recognizable objects help people understand unfamiliar controls.',icon:Radio},
 {n:'06',title:'Functional Intuition',desc:'Every physical cue communicates a clear purpose.',icon:Grid2X2}
];

export default function SkeuomorphismStyle({onNavigate}){
 const [active,setActive]=useState(false);
 const [volume,setVolume]=useState(60);
 const [frequency,setFrequency]=useState(50);
 const [isPlaying,setIsPlaying]=useState(false);
 const [mode,setMode]=useState('ANALOG');
 const audioContext=useRef(null);
 const speechTimer=useRef(null);
 const getAudio=()=>{
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx)return null;
  if(!audioContext.current)audioContext.current=new AudioCtx();
  if(audioContext.current.state==='suspended')audioContext.current.resume();
  return audioContext.current;
 };
 const radioClick=(kind='click')=>{
  const ctx=getAudio();if(!ctx)return;
  const now=ctx.currentTime,osc=ctx.createOscillator(),gain=ctx.createGain();
  osc.type='triangle';osc.frequency.setValueAtTime(kind==='off'?520:180,now);
  osc.frequency.exponentialRampToValueAtTime(kind==='off'?120:kind==='tune'?880:620,now+.13);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.08,now+.01);gain.gain.exponentialRampToValueAtTime(.0001,now+.15);
  osc.connect(gain);gain.connect(ctx.destination);osc.start(now);osc.stop(now+.16);
 };
 const stopSpeech=()=>{
  if('speechSynthesis'in window)window.speechSynthesis.cancel();
  if(speechTimer.current)window.clearTimeout(speechTimer.current);
  speechTimer.current=null;
 };
 useEffect(()=>{
  if(!isPlaying||!('speechSynthesis'in window)){stopSpeech();return;}
  const lines=['Good evening, radio lovers. You are tuned in to Ryuma FM, where every frequency has a feeling.','This is your host, RJ Nova. Stay with me, keep the dial right here, and let the music find you.'];
  let index=0, cancelled=false;
  const speak=()=>{
   if(cancelled)return;
   const utterance=new SpeechSynthesisUtterance(lines[index%lines.length]);
   utterance.rate=.92;utterance.pitch=.9;utterance.volume=Math.max(.2,volume/100);
   const voices=window.speechSynthesis.getVoices();
   const voice=voices.find(v=>/en-IN|en-GB/i.test(v.lang))||voices.find(v=>/^en/i.test(v.lang));
   if(voice)utterance.voice=voice;
   utterance.onend=()=>{if(!cancelled)speechTimer.current=window.setTimeout(()=>{index++;speak();},1200);};
   window.speechSynthesis.speak(utterance);
  };
  speak();
  return()=>{cancelled=true;stopSpeech();};
 },[isPlaying]);
 useEffect(()=>()=>{stopSpeech();if(audioContext.current)audioContext.current.close();},[]);
 const togglePower=()=>{setActive(v=>!v);if(active){setIsPlaying(false);radioClick('off');}else radioClick('on');};
 const togglePlay=()=>{if(!active){setActive(true);radioClick('on');}setIsPlaying(v=>!v);radioClick(isPlaying?'off':'click');};
 const mhz=(88+(frequency/100)*20).toFixed(1);
 return <main className="skeu-page">
  <header className="skeu-nav">
   <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button>
   <div className="skeu-brand"><b>△ RYŪMA</b><span>Design Anatomy</span></div>
   <nav><a href="#skeu-anatomy">ANATOMY</a><a href="#skeu-lab">LAB</a><a href="#skeu-tradeoff">TRADE-OFF</a></nav>
   <strong>05 / SKEUOMORPHISM</strong>
  </header>

  <section className="skeu-hero">
   <div className="skeu-copy">
    <span>05 / SKEUOMORPHISM</span>
    <h1>MAKE IT<br/>FEEL <i>REAL.</i></h1>
    <div className="skeu-paper-note">A digital design approach that borrows from the physical world to create familiar, tangible and intuitive experiences.</div>
    <p className="skeu-triad">PHYSICAL&nbsp; / &nbsp;FAMILIAR&nbsp; / &nbsp;TACTILE</p>
   </div>
   <div className="skeu-radio-hero" aria-label="Vintage wooden radio illustration">
    <div className="radio-lamp"><i/></div>
    <div className="hero-radio">
     <div className="radio-handle"/>
     <div className="radio-speaker"><i/><i/><i/><i/><i/></div>
     <div className="radio-vu"><span>VU</span><b/></div>
     <div className="hero-radio-knobs"><span/><span/><span/></div>
     <div className="hero-radio-labels"><small>VOLUME</small><small>TONE</small><small>TUNING</small></div>
     <div className="radio-screw screw-one"/><div className="radio-screw screw-two"/><div className="radio-screw screw-three"/><div className="radio-screw screw-four"/>
    </div>
   </div>
  </section>

  <section className="skeu-demo" id="skeu-demo">
   <div className="skeu-console">
    <div className="console-rail"><b>LIVE CONTROL DECK</b><span>RYŪMA / AUDIO SYSTEM 05</span></div>
    <div className="console-controls">
     <div className="transport-controls">
      <button className="transport-play" onClick={togglePlay} aria-label={isPlaying?'Pause radio':'Play radio'}>{isPlaying?<Pause/>:<Play/>}</button>
      <button onClick={()=>{setFrequency(v=>Math.max(0,v-5));radioClick('tune')}} aria-label="Tune down"><SkipBack/></button>
      <button onClick={()=>{setFrequency(v=>Math.min(100,v+5));radioClick('tune')}} aria-label="Tune up"><SkipForward/></button>
     </div>
     <div className="console-divider"/>
     <div className="console-volume">
      <div className="console-big-knob" style={{'--turn':`${-135+volume*2.7}deg`}}><i/></div><small>VOLUME</small>
     </div>
     <label className="console-slider"><input aria-label="Volume" type="range" min="0" max="100" value={volume} onChange={e=>setVolume(Number(e.target.value))}/><span>{volume}%</span></label>
     <div className="console-modes"><button className={mode==='ANALOG'?'selected':''} onClick={()=>setMode('ANALOG')}>● ANALOG</button><button className={mode==='DIGITAL'?'selected':''} onClick={()=>setMode('DIGITAL')}>DIGITAL</button></div>
     <button className={active?'power-light on':'power-light'} onClick={togglePower} aria-label="Power" aria-pressed={active}/>
    </div>
    <div className="console-status"><span>{active?'POWER ON':'POWER OFF'} / {isPlaying?'ON AIR':'STANDBY'}</span><span>{mode} MODE</span></div>
   </div>
  </section>

  <section className="skeu-intro-row">
   <article className="idea-paper">
    <span className="paper-ribbon">THE IDEA</span>
    <h2>Digital, But<br/>Familiar.</h2>
    <p>Skeuomorphism brings the physical world into digital interfaces—using real-world materials, textures and behaviours to make technology feel intuitive and human.</p>
    <div className="paper-stamp">△<small>RYŪMA<br/>DESIGN LAB</small></div>
   </article>
   <section className="skeu-anatomy-board" id="skeu-anatomy">
    <h2>DESIGN ANATOMY</h2>
    <div className="skeu-parts">{parts.map(({n,title,desc,icon:Icon})=><article key={n}><div className="part-icon"><Icon size={27}/></div><b>{title}</b><p>{desc}</p></article>)}</div>
   </section>
  </section>

  <section className="skeu-section skeu-lab-section" id="skeu-lab">
   <div className="skeu-section-heading"><span>RYŪMA RADIO / DESIGN LAB</span><h2>FIND YOUR<br/><i>FREQUENCY.</i></h2><p>Turn the dial. Tune the signal. Hear the interface respond.</p></div>
   <div className="skeu-radio-workbench">
    <div className="workbench-speaker"><i/><i/><i/><i/><i/><i/></div>
    <div className="radio-frequency-panel">
     <div className="frequency-top"><b>FM</b><strong>{mhz}</strong><small>MHz</small></div>
     <div className="frequency-scale"><div className="scale-ticks"/><input aria-label="Radio frequency" type="range" min="0" max="100" value={frequency} onChange={e=>{setFrequency(Number(e.target.value));radioClick('tune')}}/><i style={{left:`${frequency}%`}}/></div>
     <div className="frequency-numbers"><span>88</span><span>92</span><span>96</span><span>100</span><span>104</span><span>108</span></div>
     <div className="frequency-bottom"><span>AM　530　700　900　1200　1600　kHz</span></div>
    </div>
    <div className="radio-tuning-knob" style={{'--turn':`${-135+frequency*2.7}deg`}}><i/></div>
    <small className="tuning-label">TUNING</small>
    <div className="radio-led" aria-label={isPlaying?'Radio playing':'Radio standby'}/>
    <div className="radio-bolts"><i/><i/><i/><i/></div>
   </div>
   <div className="radio-player-actions"><button onClick={togglePlay} className={isPlaying?'active':''}>{isPlaying?<Pause size={16}/>:<Play size={16}/>} {isPlaying?'PAUSE':'PLAY'}</button><button onClick={()=>{setIsPlaying(false);setActive(false);radioClick('off')}}><span>■</span> POWER OFF</button><span aria-live="polite">{isPlaying?'RJ NOVA / ON AIR':'STANDBY / READY'}</span></div>
  </section>

  <section className="skeu-tradeoff" id="skeu-tradeoff">
   <div className="tradeoff-title">THE TRADE-OFF</div>
   <div className="tradeoff-paper">
    <div><h3><b>＋</b> STRENGTHS</h3><ul><li>Feels familiar and intuitive</li><li>Rich and engaging experience</li><li>Stronger visual affordance</li></ul></div>
    <div><h3><b>−</b> LIMITATIONS</h3><ul><li>Can feel visually heavy</li><li>Higher design and development effort</li><li>May not suit minimalist systems</li></ul></div>
    <div className="tradeoff-photo"><span>TACTILE<br/>DETAIL / 05</span></div>
   </div>
  </section>

  <footer className="skeu-footer"><h2>TOUCHABLE. FAMILIAR. <i>ALIVE.</i></h2><span>///　SKEUOMORPHISM IN RYŪMA</span><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowRight size={16}/></button></footer>
 </main>;
}
