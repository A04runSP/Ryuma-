import React, { useState } from 'react';
import { ArrowLeft, RotateCcw, Activity, Cpu, Radio, Terminal, Zap } from 'lucide-react';
import './special-style.css';

const systems = {
  Bauhaus: {
    number: '04.02', era: 'GERMANY · 1919', thesis: 'Art. Craft. Function.',
    intro: 'Bauhaus brought art, craft and industrial production into a shared design practice. Geometry, primary colours and clear construction make the system legible.',
    palette: [['Red','#e53935'],['Yellow','#f5c542'],['Blue','#2355d6'],['Black','#171717']],
    rules: [['01','Geometry','Reduce forms to circles, squares, triangles and their relationships.'],['02','Primary colour','Use colour to distinguish form and function, not as decoration.'],['03','Construction','Make the structure visible and let materials inform the result.']],
    headline: 'FORM\nFOLLOWS\nFUNCTION.'
  },
  Cyberpunk: {
    number: '04.03', era: 'FUTURES · URBAN SYSTEMS', thesis: 'Signal in the noise.',
    intro: 'Cyberpunk combines high technology with urban grit. Dense information, luminous accents, industrial texture and sharp contrast create a world of tension and surveillance.',
    palette: [['Neon cyan','#20e3e6'],['Magenta','#ff4ca7'],['Acid green','#d5ff3f'],['Black','#090b12']],
    rules: [['01','High contrast','Separate critical signals from dark, complex environments.'],['02','Layered information','Use labels, grids and fragments to suggest systems and interfaces.'],['03','Controlled noise','Texture and distortion should reinforce the message rather than obscure it.']],
    headline: 'SIGNAL\nOVER\nNOISE.'
  }
};

export default function SpecialStyle({ style, onNavigate }) {
  const system = systems[style] || systems.Bauhaus;
  const [accent, setAccent] = useState(system.palette[0][1]);
  const [headline, setHeadline] = useState(system.headline.replaceAll('\\n','\n'));
  const reset = () => { setAccent(system.palette[0][1]); setHeadline(system.headline.replaceAll('\\n','\n')); };\n  const isCyberpunk = style === 'Cyberpunk';
  return <main className={`special-style special-${style.toLowerCase()}`} style={{'--special-accent':accent}}>
    <header className={`special-nav ${style === "Cyberpunk" ? "cyber-terminal-nav" : ""}`}><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button><b>RYŪMA / DESIGN ANATOMY</b><span>{system.number}</span></header>
    <section className="special-hero"><div className="special-intro"><span className="special-kicker">{system.era} / DESIGN LANGUAGE</span><h1>{isCyberpunk ? <>SIGNAL<br/><em>OVERRIDE</em></> : system.thesis}</h1><p>{system.intro}</p>{isCyberpunk && <div className="cyber-readout"><span><Terminal size={13}/> TERMINAL / 04.03</span><span>ENCRYPTION: <b>ACTIVE</b></span><span>NOISE FLOOR <b>-12 DB</b></span></div>}<div className="special-palette">{system.palette.map(([name,value])=><button key={value} aria-label={name} title={name} className={accent===value?'selected':''} style={{'--swatch':value}} onClick={()=>setAccent(value)}/>)}</div><span className="special-hint">SELECT A COLOUR TO CHANGE THE SPECIMEN</span></div>
      <div className={`special-specimen ${isCyberpunk ? "cyber-terminal-specimen" : ""}`}>{isCyberpunk && <div className="cyber-specimen-top"><span><Zap size={12}/> SIGNAL_RENDER.EXE</span><span>SECURE CHANNEL / 04</span></div>}<span className="special-specimen-label">{style.toUpperCase()} / SPECIMEN</span><div className="special-shapes" aria-hidden="true"><i/><i/><i/></div>{isCyberpunk && <div className="cyber-coordinate">X: 042.91<br/>Y: 119.04</div>}<h2>{headline.split('\n').map((line,index)=><React.Fragment key={index}>{index>0&&<br/>}{line}</React.Fragment>)}</h2>{isCyberpunk && <div className="cyber-signal-bars" aria-hidden="true">{Array.from({length:18},(_,i)=><i key={i} style={{"--bar":`${18+(i*17)%72}%`}}/>)}</div>}<span className="special-specimen-foot">FORM / COLOUR / SYSTEM</span>{isCyberpunk && <div className="cyber-specimen-bottom"><span>PACKET 0x04A</span><span>LATENCY 08ms</span><span>TRACE: STABLE</span></div>}</div></section>
    <section className={`special-principles ${isCyberpunk ? "cyber-terminal-principles" : ""}`}>{isCyberpunk && <div className="cyber-section-strip"><span>SYS.DIAGNOSTICS</span><span>THREAT MODEL / VISUAL LANGUAGE</span><span>STATUS: NOMINAL</span></div>}<div className="special-section-title"><span>01 — DESIGN ANATOMY</span><h2>Three rules<br/>behind the language.</h2></div>{system.rules.map(([no,title,copy])=><article key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</section>
    <section className={`special-lab ${isCyberpunk ? "cyber-terminal-lab" : ""}`}><div><span className="special-kicker">02 — PLAYGROUND</span><h2>Make the system<br/>your own.</h2><p>Change the headline and accent colour. Reset to return to the original specimen.</p></div><div className="special-controls">{isCyberpunk && <div className="cyber-control-header"><Terminal size={14}/> SPECIMEN_CONTROL // LIVE</div>}<label>SPECIMEN HEADLINE<textarea rows={3} maxLength={48} value={headline} onChange={event=>setHeadline(event.target.value)}/></label><button onClick={reset}><RotateCcw size={15}/> RESET SPECIMEN</button></div></section>
    <footer className="special-footer"><span>RYŪMA / DESIGN ANATOMY</span><button onClick={()=>onNavigate?.('library')}>ALL DESIGN LANGUAGES ↗</button></footer>
  </main>;
}
