import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Minus, Plus, RotateCcw } from 'lucide-react';
import './skeuomorphism-style.css';

const parts = [
  { n:'01', t:'Material', d:'Leather, metal, glass and paper create recognizable physical context.' },
  { n:'02', t:'Light', d:'Highlights and shadows establish a consistent source of light and depth.' },
  { n:'03', t:'Texture', d:'Subtle surface detail makes digital elements feel tangible rather than synthetic.' },
  { n:'04', t:'Depth', d:'Bevels, layers and cast shadows separate surfaces and establish hierarchy.' },
  { n:'05', t:'Affordance', d:'A raised button suggests pressing. A knob suggests turning. A slider suggests dragging.' },
  { n:'06', t:'Feedback', d:'Controls respond visibly so interaction feels physical, not merely animated.' },
];

export default function SkeuomorphismStyle({ onNavigate }) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(50);
  const [volume, setVolume] = useState(62);
  const [isPlaying, setIsPlaying] = useState(false);\n  const audioContext = useRef(null);\n  const speechTimer = useRef(null);\n\n  const getAudio = () => {\n    const AudioCtx = window.AudioContext || window.webkitAudioContext;\n    if (!AudioCtx) return null;\n    if (!audioContext.current) audioContext.current = new AudioCtx();\n    if (audioContext.current.state === 'suspended') audioContext.current.resume();\n    return audioContext.current;\n  };\n\n  const radioClick = (kind) => {\n    const ctx = getAudio();\n    if (!ctx) return;\n    const now = ctx.currentTime;\n    const osc = ctx.createOscillator();\n    const gain = ctx.createGain();\n    osc.type = kind === 'off' ? 'sine' : 'triangle';\n    osc.frequency.setValueAtTime(kind === 'off' ? 520 : 180, now);\n    osc.frequency.exponentialRampToValueAtTime(kind === 'off' ? 120 : 720, now + (kind === 'tune' ? 0.18 : 0.09));\n    gain.gain.setValueAtTime(0.0001, now);\n    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.012);\n    gain.gain.exponentialRampToValueAtTime(0.0001, now + (kind === 'tune' ? 0.2 : 0.13));\n    osc.connect(gain); gain.connect(ctx.destination);\n    osc.start(now); osc.stop(now + (kind === 'tune' ? 0.21 : 0.14));\n    if (kind === 'on' || kind === 'tune') {\n      const length = Math.floor(ctx.sampleRate * (kind === 'on' ? 0.16 : 0.1));\n      const buffer = ctx.createBuffer(1, length, ctx.sampleRate);\n      const data = buffer.getChannelData(0);\n      for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length) * 0.22;\n      const noise = ctx.createBufferSource(); const ng = ctx.createGain();\n      noise.buffer = buffer; ng.gain.value = kind === 'on' ? 0.13 : 0.07; noise.connect(ng); ng.connect(ctx.destination); noise.start();\n    }\n  };\n\n  const stopRj = () => {\n    if ('speechSynthesis' in window) window.speechSynthesis.cancel();\n    if (speechTimer.current) window.clearTimeout(speechTimer.current);\n    speechTimer.current = null;\n  };\n\n  const startRj = () => {\n    stopRj();\n    if (!('speechSynthesis' in window)) return;\n    const lines = [\n      'Good evening, radio lovers! You are tuned in to Ryuma FM, where every frequency has a feeling.',\n      'This is your host, RJ Nova. Stay with me, keep the dial right here, and let the music find you.',\n      'You are listening to Ryuma Radio. Turn the dial, find your frequency, and make this moment yours.'\n    ];\n    let index = 0;\n    const speakNext = () => {\n      if (!isPlaying) return;\n      const utterance = new SpeechSynthesisUtterance(lines[index % lines.length]);\n      utterance.rate = 0.92; utterance.pitch = 0.88; utterance.volume = Math.max(0.2, volume / 100);\n      const voices = window.speechSynthesis.getVoices();\n      const voice = voices.find(v => /en-IN|en-GB/i.test(v.lang)) || voices.find(v => /en/i.test(v.lang));\n      if (voice) utterance.voice = voice;\n      utterance.onend = () => { if (isPlaying) speechTimer.current = window.setTimeout(() => { index++; speakNext(); }, 1400); };\n      window.speechSynthesis.speak(utterance);\n    };\n    speakNext();\n  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setValue(v => (v >= 100 ? 0 : v + 2));
    }, 120);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const changeValue = (delta) => {
    if (!active) return;
    setValue(v => Math.max(0, Math.min(100, v + delta)));
  };

  return <main className="skeu-page">
    <header className="skeu-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button>
      <div><b>RYUMA</b><span>リューマ</span></div>
      <strong>05 / SKEUOMORPHISM</strong>
    </header>

    <section className="skeu-hero">
      <div className="skeu-copy">
        <span>DESIGN LANGUAGE / 05</span>
        <h1>MAKE IT<br/><i>FEEL REAL.</i></h1>
        <p>Physical cues. Digital control. Familiar interaction.</p>
        <div className="skeu-stamp">BUILT<br/>TO FEEL.</div>
      </div>
      <div className="skeu-desk">
        <div className="desk-paper"><small>RYUMA / OBJECT 05</small><h2>FAMILIAR<br/><em>BY DESIGN.</em></h2><div className="paper-line"/><span>TOUCH / TURN / PRESS</span></div>
        <div className="desk-screw screw-a"/><div className="desk-screw screw-b"/>
        <div className="desk-knob"><span/><b>VOL</b></div>
        <div className="desk-switch"><span>POWER</span><button className={active?'on':''} onClick={()=>{setActive(v=>!v);radioClick(active?'off':'on')}}><i/></button></div>
      </div>
    </section>

    <section className="skeu-demo">
      <div className="skeu-label">01 / LIVE SPECIMEN</div>
      <div className="skeu-console">
        <div className="skeu-console-top"><b>CONTROL DECK / 05</b><span>STATUS: {active?'ACTIVE':'STANDBY'}</span></div>
        <div className="skeu-console-body">
          <div className="skeu-display"><small>MASTER LEVEL</small><strong>{String(volume).padStart(2,'0')}</strong><span>{active?'SYSTEM LIVE':'SYSTEM STANDBY'}</span></div>
          <div className="skeu-control-group">
            <div className="skeu-knob-wrap"><div className="skeu-knob-live" style={{'--rotation':`${-135 + volume * 2.7}deg`}}><span/></div><small>VOLUME</small></div>
            <div className="skeu-slider-wrap"><label>LEVEL</label><div className="skeu-slider" onClick={(e)=>{if(!active)return;const r=e.currentTarget.getBoundingClientRect();setVolume(Math.round(((e.clientX-r.left)/r.width)*100))}}><span style={{width:`${volume}%`}}/><i style={{left:`${volume}%`}}/></div><div className="skeu-slider-labels"><span>MIN</span><span>MAX</span></div></div>
            <div className="skeu-actions"><button onClick={()=>{if(active)setVolume(v=>Math.max(0,v-5))}}><Minus/></button><button onClick={()=>{if(active)setVolume(v=>Math.min(100,v+5))}}><Plus/></button><button onClick={()=>{if(active)setVolume(50)}} aria-label="Reset"><RotateCcw/></button></div>
          </div>
        </div>
        <div className="skeu-console-bottom"><span>PHYSICAL CUES / DIGITAL RESPONSE</span><button onClick={()=>{setActive(v=>!v);radioClick(active?'off':'on')}}>{active?'ON':'OFF'}</button></div>
      </div>
    </section>

    <section className="skeu-section">
      <div className="skeu-label">02 / THE IDEA</div>
      <div><h2>DIGITAL,<br/><span>BUT FAMILIAR.</span></h2><p>Skeuomorphism brings the visual language of physical objects into digital interfaces. Texture, depth, lighting and familiar metaphors help users understand what something does before they interact with it.</p><div className="skeu-rules"><div><b>01</b><span>REAL METAPHOR</span></div><div><b>02</b><span>DEPTH</span></div><div><b>03</b><span>AFFORDANCE</span></div><div><b>04</b><span>FAMILIARITY</span></div></div></div>
    </section>

    <section className="skeu-section anatomy">
      <div className="skeu-label">03 / DESIGN ANATOMY</div>
      <div><h2>EVERY DETAIL.<br/><span>HAS A PURPOSE.</span></h2><div className="skeu-parts">{parts.map(x=><article key={x.n}><b>{x.n}</b><h3>{x.t}</h3><p>{x.d}</p></article>)}</div></div>
    </section>

    <section className="skeu-section composition">
      <div className="skeu-label">04 / COMPOSITION</div>
      <div className="skeu-workbench">
        <div className="leather-card">
          <small>OBJECT / 05 — RADIO DECK</small>
          <h3>TUNE IN.<br/><em>FEEL IT.</em></h3>
          <div className="leather-seam"/>
          <span>TURN THE DIAL / PRESS PLAY</span>
          <div className="radio-frequency"><span>FM</span><b>{(88 + (value / 100) * 20).toFixed(1)}</b><small>MHz</small></div>
        </div>

        <div className="metal-plate">
          <div className="metal-title">VINTAGE RADIO / CONTROLS</div>
          <div className="radio-dial-wrap">
            <div className="radio-dial" style={{'--dial-angle':`${-135 + value * 2.7}deg`}} aria-hidden="true"><span/></div>
            <div><label htmlFor="radio-tuning">TUNING</label><input id="radio-tuning" className="radio-tuning" type="range" min="0" max="100" value={value} onChange={e=>{setValue(Number(e.target.value));radioClick('tune')}} aria-valuetext={`${(88 + (value / 100) * 20).toFixed(1)} megahertz`}/><div className="radio-scale"><span>88 MHz</span><span>108 MHz</span></div></div>
          </div>
          <div className="metal-row">
            <button className={`metal-button ${isPlaying ? 'is-active' : ''}`} onClick={() => {setIsPlaying(true);radioClick('on')}} disabled={isPlaying} aria-pressed={isPlaying}>▶ PLAY</button>
            <button className={`metal-button ${!isPlaying ? 'is-active' : ''}`} onClick={() => {setIsPlaying(false);radioClick('off')}} disabled={!isPlaying} aria-pressed={!isPlaying}>Ⅱ PAUSE</button>
          </div>
          <div className="metal-meter" role="progressbar" aria-label="Tuning position" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
            <span style={{width:`${value}%`}}/>
          </div>
          <div className="metal-status" aria-live="polite">{isPlaying ? 'ON AIR / RJ NOVA LIVE' : 'STANDBY / READY'}</div><p className="radio-caption">{isPlaying ? 'RJ NOVA: GOOD EVENING, RADIO LOVERS…' : 'PRESS PLAY TO HEAR THE RJ'}</p>
        </div>

        <div className="glass-note">PHYSICAL DIAL<br/><b>→</b><br/>DIGITAL TUNING</div>
      </div>
    </section>

    <section className="skeu-section tradeoff">
      <div className="skeu-label">05 / THE TRADE-OFF</div>
      <div><h2>REALISM<br/><span>HAS A COST.</span></h2><p>Too much detail can become heavy, cluttered and distracting. The strongest skeuomorphic interfaces use realism with purpose — enough physical cues to explain interaction without decorating every surface.</p><div className="skeu-warning"><b>REALISM ≠ CLUTTER</b><span>USE THE METAPHOR. DON'T LET IT BECOME THE TASK.</span></div></div>
    </section>

    <footer className="skeu-footer"><span>SKEUOMORPHISM / 05</span><h2>TOUCHABLE.<br/><i>FAMILIAR.</i><br/>ALIVE.</h2><p>When digital interfaces borrow the language of the physical world.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowRight size={16}/></button></footer>
  </main>;
}
