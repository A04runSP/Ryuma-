import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowDown, ArrowUpRight, Download, RotateCcw, Menu, X, Copy, Check } from 'lucide-react';
import './futurism-style.css';

const principles = [
  ['01','Dynamism','Repeated contours, directional lines and shifting scale make still images feel in motion.'],
  ['02','Simultaneity','Several viewpoints, moments and sensations can occupy one visual field.'],
  ['03','Force lines','Diagonals and radiating paths carry the eye through the composition.'],
  ['04','Machine-age form','Engines, transport, industry and modern technology become visual subjects.'],
  ['05','Experimental typography','Words behave as image, rhythm and sound—not only as neutral information.'],
  ['06','Modern life','The movement responds to the speed, noise and transformations of contemporary life.'],
];
const timeline = [
  ['1909','The manifesto','Filippo Tommaso Marinetti publishes the Futurist manifesto in the Paris newspaper Le Figaro.'],
  ['1910','Painting takes shape','Futurist painters publish their technical manifesto and develop a language of movement and simultaneity.'],
  ['1912','Sculpture and form','Umberto Boccioni publishes ideas for Futurist sculpture and expands the movement into three dimensions.'],
  ['1913–14','Words in freedom','Typography, sound, performance and graphic experimentation push beyond conventional page structure.'],
  ['1920s–30s','New directions','Futurist ideas continue through advertising, aeropittura, architecture and applied arts.'],
];
const palette = [
  {name:'Deep indigo',hex:'#081E3B',role:'Primary field and depth'},
  {name:'Aqua cyan',hex:'#00C2A8',role:'Motion and technological energy'},
  {name:'Dynamic orange',hex:'#FF6A08',role:'Speed, action and emphasis'},
  {name:'Warm ivory',hex:'#FFEDD0',role:'Editorial surface and readable type'},
  {name:'Steel blue',hex:'#496B8A',role:'Structure and secondary contrast'},
];
const studies = [
  {name:'Velocity lines',kind:'DIRECTION / SPEED',mark:'↗',copy:'Parallel and converging lines imply acceleration, trajectory and force.'},
  {name:'Simultaneous form',kind:'TIME / REPETITION',mark:'◉',copy:'Repeated silhouettes show successive positions as one continuous event.'},
  {name:'Words in freedom',kind:'TYPE / RHYTHM',mark:'Aa',copy:'Scale, angle and spacing turn language into a dynamic visual composition.'},
  {name:'Machine anatomy',kind:'INDUSTRY / FORM',mark:'✳',copy:'Mechanical parts and geometric structures become expressive visual elements.'},
];
const motionLayers = [
 {id:'all',label:'Full composition',detail:'Five forces together',hint:'Energy, direction, force, stability and rhythm combine to create one dynamic visual field.'},
 {id:'energy',label:'Energy',detail:'Focal energy',hint:'A strong central form attracts attention. The surrounding rings show energy radiating from one focal point.'},
 {id:'velocity',label:'Velocity',detail:'Directional movement',hint:'Repeated arrow-like forms travel from lower left to upper right. Their direction pulls the eye forward.'},
 {id:'force',label:'Force lines',detail:'Force and direction',hint:'Parallel strokes share a clear direction. Their spacing and length create acceleration and tension.'},
 {id:'anchor',label:'Anchor',detail:'Geometric anchor',hint:'A symmetrical triangle and central axis create a stable point inside a dynamic composition.'},
 {id:'rhythm',label:'Rhythm',detail:'Repeated rhythm',hint:'Bars repeat with progressively changing lengths and intervals, creating a visible cadence.'},
];
function MotionMark({activeLayer}){
 if(activeLayer==='all') return <svg className="fu-hero-mark fu-full-composition" viewBox="0 0 560 420" role="img" aria-label="Complete Futurist composition showing a focal energy disc, a streamlined machine, directional force lines and repeated rhythm marks">
  <defs>
   <clipPath id="fuFullClip"><rect x="16" y="16" width="528" height="388"/></clipPath>
   <linearGradient id="fuDisc" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#FF6A08"/><stop offset="1" stopColor="#D94708"/></linearGradient>
  </defs>
  <rect x="16" y="16" width="528" height="388" fill="none" stroke="#FFEDD066"/>
  <g clipPath="url(#fuFullClip)">
   <circle cx="390" cy="145" r="100" fill="url(#fuDisc)"/>
   <circle cx="390" cy="145" r="118" fill="none" stroke="#FFEDD0" strokeWidth="2" strokeDasharray="5 9"/>
   <g stroke="#FFEDD0" strokeWidth="5" opacity=".9">
    <path d="M32 100H190M32 125H145"/>
    <path d="M410 320H530M445 342H530"/>
   </g>
   <g fill="none" stroke="#496B8A" strokeWidth="9" opacity=".95">
    <path d="M15 340L195 160L230 195L360 65"/>
    <path d="M45 385L225 205L260 240L390 110"/>
   </g>
   <g fill="none" stroke="#FFEDD0" strokeWidth="13" strokeLinecap="square">
    <path d="M20 300L185 135L220 170L345 45"/>
   </g>
   <g fill="none" stroke="#00C2A8" strokeWidth="18" strokeLinejoin="miter">
    <path d="M-5 365L165 195L205 235L330 110"/>
    <path d="M135 420L285 270L325 310L475 160"/>
   </g>
   <g transform="translate(92 220)" strokeLinejoin="round">
    <path d="M24 105L55 73L125 60L166 18Q180 5 202 5H292Q315 5 330 23L370 70L420 88Q434 94 438 111L433 127H398Q390 98 361 98Q332 98 324 127H145Q137 98 108 98Q79 98 71 127H29Q10 127 10 115Z" fill="#00A995" stroke="#FFEDD0" strokeWidth="7"/>
    <path d="M170 18Q181 12 202 12H288Q307 12 319 28L347 66H137Z" fill="#082A43" stroke="#FFEDD0" strokeWidth="5"/>
    <path d="M236 13V66M315 24L340 66" stroke="#FFEDD0" strokeWidth="5"/>
    <path d="M26 88L80 76L137 69H347L411 91L423 105H380Q365 86 342 91H129Q104 85 83 105H20Z" fill="#08233F" stroke="#FFEDD0" strokeWidth="3"/>
    <path d="M178 80L225 72L255 72L208 83ZM267 78L304 71L325 73L285 84Z" fill="#FF6A08" stroke="#FF6A08" strokeWidth="3"/>
    <path d="M15 115H435" stroke="#FFEDD0" strokeWidth="5"/>
    <g fill="#08233F" stroke="#FFEDD0" strokeWidth="7">
     <circle cx="108" cy="127" r="30"/><circle cx="361" cy="127" r="30"/>
    </g>
    <g fill="#00C2A8" stroke="#FFEDD0" strokeWidth="4">
     <path d="M108 105L130 127L108 149L86 127Z"/><path d="M361 105L383 127L361 149L339 127Z"/>
    </g>
    <g fill="#08233F" stroke="#FFEDD0" strokeWidth="3">
     <path d="M108 115L120 127L108 139L96 127Z"/><path d="M361 115L373 127L361 139L349 127Z"/>
    </g>
    <path d="M0 92H-35M5 107H-48M445 94H480" stroke="#FF6A08" strokeWidth="7"/>
   </g>
   <g stroke="#FF6A08" strokeWidth="8">
    <path d="M35 55H155"/><path d="M35 72H120"/>
   </g>
   <path d="M40 390H520" stroke="#FFEDD0" strokeWidth="2" opacity=".65"/>
  </g>
 </svg>;
 return <svg className="fu-hero-mark" viewBox="0 0 560 420" role="img" aria-label={motionLayers.find(x=>x.id===activeLayer)?.detail||'Futurist visual study'}>
 <rect x="15" y="15" width="530" height="390" fill="none" stroke="#FFEDD066" strokeWidth="1"/>
 {(activeLayer==='energy')&&<g className="fu-study-energy"><circle cx="280" cy="205" r="112" fill="#FF6A08"/><circle cx="280" cy="205" r="135" fill="none" stroke="#FFEDD0" strokeWidth="3"/><circle cx="280" cy="205" r="158" fill="none" stroke="#FF6A08" strokeWidth="2" strokeDasharray="7 12"/><circle cx="280" cy="205" r="12" fill="#081E3B"/></g>}
 {(activeLayer==='velocity')&&<g className="fu-study-velocity" fill="#00C2A8"><path d="M55 330L185 190L185 245L300 110L300 175L430 35L410 150L300 265L300 210L185 345L185 290Z"/><path d="M250 365L365 250L365 295L490 170L470 275L365 390L365 345Z" opacity=".72"/></g>}
 {(activeLayer==='force')&&<g className="fu-study-force" fill="none" strokeLinecap="square"><path d="M65 325L310 80" stroke="#FFEDD0" strokeWidth="17"/><path d="M125 355L370 110" stroke="#00C2A8" strokeWidth="12"/><path d="M185 385L430 140" stroke="#496B8A" strokeWidth="8"/><path d="M245 395L490 150" stroke="#FF6A08" strokeWidth="5"/></g>}
 {(activeLayer==='anchor')&&<g className="fu-study-anchor"><path d="M280 65L485 340H75Z" fill="#00C2A8" stroke="#FFEDD0" strokeWidth="7" strokeLinejoin="round"/><path d="M280 120L425 315H135Z" fill="#081E3B" stroke="#FFEDD0" strokeWidth="4" strokeLinejoin="round"/><path d="M280 65V340M75 340H485" stroke="#FFEDD0" strokeWidth="4"/><circle cx="280" cy="245" r="26" fill="#FF6A08" stroke="#FFEDD0" strokeWidth="4"/></g>}
 {(activeLayer==='rhythm')&&<g className="fu-study-rhythm" fill="#FF6A08"><rect x="75" y="95" width="410" height="22"/><rect x="75" y="145" width="330" height="22"/><rect x="75" y="195" width="250" height="22"/><rect x="75" y="245" width="170" height="22"/><rect x="75" y="295" width="90" height="22"/></g>}
 </svg>;
}
function Shape({kind,fill,index=0}){const style={'--fu-index':index,'--fu-fill':fill,background:kind==='triangle'?'transparent':fill};if(kind==='circle')return <span className="fu-shape fu-circle" style={style}/>;if(kind==='bar')return <span className="fu-shape fu-bar" style={style}/>;if(kind==='triangle')return <span className="fu-shape fu-triangle" style={style}/>;return <span className="fu-shape fu-square" style={style}/>;}
export default function FuturismStyle({onNavigate}){
 const [activeMotion,setActiveMotion]=useState('all'),[activeStudy,setActiveStudy]=useState(0),[headline,setHeadline]=useState('SPEED\nBECOMES\nFORM'),[shape,setShape]=useState('triangle'),[accent,setAccent]=useState('#00C2A8'),[angle,setAngle]=useState(28),[repeats,setRepeats]=useState(4),[showGrid,setShowGrid]=useState(true),[menu,setMenu]=useState(false),[copied,setCopied]=useState('');
 const lines=useMemo(()=>headline.split('\n').filter(Boolean).slice(0,3),[headline]);
 const scrollTo=id=>{document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});setMenu(false)};
 const reset=()=>{setHeadline('SPEED\nBECOMES\nFORM');setShape('triangle');setAccent('#00C2A8');setAngle(28);setRepeats(4);setShowGrid(true)};
 const copyHex=async hex=>{try{await navigator.clipboard.writeText(hex);setCopied(hex);setTimeout(()=>setCopied(''),1400)}catch{setCopied('Copy unavailable')}};
 const exportSvg=()=>{const escaped=lines.map((line,i)=>'<text x="76" y="'+(690+i*112)+'" fill="#FFEDD0" font-family="Arial,sans-serif" font-weight="900" font-size="92">'+line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</text>').join('');let marks='';for(let i=0;i<repeats;i++){const offset=i*34;marks+='<path d="M'+(80+offset)+' 580 L'+(260+offset)+' 230 L'+(420+offset)+' 580" fill="none" stroke="'+accent+'" stroke-width="10" opacity="'+(1-i*.13)+'" transform="rotate('+angle+' 280 400)"/>'}const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><rect width="1080" height="1350" fill="#081E3B"/><path d="M0 900L1080 150" stroke="#FF6A08" stroke-width="34"/>'+marks+'<text x="76" y="100" fill="#FFEDD0" font-family="Arial" font-size="26" letter-spacing="8">RYŪMA / FUTURISM</text>'+escaped+'<text x="76" y="1260" fill="#00C2A8" font-family="Arial" font-size="22" letter-spacing="5">MOTION / FORCE / SIMULTANEITY</text></svg>';const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));const a=document.createElement('a');a.href=url;a.download='ryuma-futurism-study.svg';a.click();URL.revokeObjectURL(url)};
 return <main className="fu-page">
 <nav className="fu-nav"><button className="fu-brand" onClick={()=>onNavigate?.('home')}><b>RYŪMA</b><span>DESIGN ANATOMY</span></button><button className="fu-menu" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} onClick={()=>setMenu(v=>!v)}>{menu?<X/>:<Menu/>}</button><div className={'fu-links '+(menu?'is-open':'')}>{[['Principles','fu-principles'],['Timeline','fu-history'],['Anatomy','fu-studies'],['Palette','fu-palette'],['Motion Lab','fu-lab']].map(([label,id])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}<button className="fu-library" onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Design Library</button></div></nav>
 <section className="fu-hero"><div className="fu-hero-copy"><span className="fu-kicker"><i/> DESIGN MOVEMENT / 1909–1944</span><h1>FUTURISM<span>.</span></h1><h2>THE ANATOMY<br/>OF MOTION</h2><p>An Italian avant-garde movement that explored speed, movement, technology and the energy of modern life.</p><div className="fu-actions"><button className="fu-primary" onClick={()=>scrollTo('fu-principles')}>Explore anatomy <ArrowDown size={16}/></button><button className="fu-secondary" onClick={()=>scrollTo('fu-studies')}>View studies <ArrowUpRight size={16}/></button></div></div><div className="fu-hero-art"><MotionMark activeLayer={activeMotion}/><span className="fu-art-index">01—05 / MOTION STUDY</span><span className="fu-plate">VELOCITY / FORCE / SIMULTANEITY</span></div><div className="fu-motion-explorer"><div className="fu-motion-tabs" role="group" aria-label="Explore artwork layers">{motionLayers.map((layer,i)=><button key={layer.id} className={activeMotion===layer.id?"is-active":""} onClick={()=>setActiveMotion(layer.id)} aria-pressed={activeMotion===layer.id}><span>0{i+1}</span>{layer.label}</button>)}</div><div className="fu-motion-caption" aria-live="polite"><span>SELECTED LAYER / {motionLayers.findIndex(x=>x.id===activeMotion)+1}</span><strong>{motionLayers.find(x=>x.id===activeMotion)?.detail}</strong><p>{motionLayers.find(x=>x.id===activeMotion)?.hint}</p></div></div><div className="fu-strip"><span>MOVE THROUGH FORM</span><i>✳</i><span>BREAK THE STATIC</span><i>✳</i><span>DESIGN IN MOTION</span></div></section>
 <section className="fu-thesis"><span className="fu-label">THE CENTRAL IDEA / 00</span><p>Make the still image feel <strong>alive with energy.</strong> Show movement, not merely the object that moves.</p><div className="fu-thesis-mark"><span/><i/><b/></div></section>
 <section className="fu-principles" id="fu-principles"><header className="fu-section-head"><span className="fu-label">01 / PRINCIPLES</span><h2>NOT A STATIC<br/><i>WORLD.</i></h2><p>Futurism treats movement as a visual material. Explore the forces that shape its language.</p></header><div className="fu-principle-list">{principles.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={17}/></article>)}</div></section>
 <section className="fu-history" id="fu-history"><header className="fu-section-head"><span className="fu-label">02 / HISTORICAL CONTEXT</span><h2>THE FUTURE<br/><i>ARRIVES.</i></h2><p>A concise timeline of the movement's emergence and changing visual experiments.</p></header><div className="fu-timeline">{timeline.map(([date,title,copy])=><article key={date}><span>{date}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><p className="fu-context-note">HISTORICAL NOTE / Futurism also had nationalist and pro-war currents and later associations with Italian Fascism. Its history should be studied critically, not romanticised.</p></section>
 <section className="fu-studies" id="fu-studies"><header className="fu-section-head"><span className="fu-label">03 / VISUAL ANATOMY</span><h2>UNDERSTAND<br/><i>THE MOTION.</i></h2><p>Select a visual device to see how it changes rhythm, direction and reading order.</p></header><div className="fu-study-grid">{studies.map((s,i)=><button key={s.name} className={'fu-study '+(activeStudy===i?'is-active':'')} onClick={()=>setActiveStudy(i)}><span className="fu-study-mark">{s.mark}</span><small>{s.kind}</small><b>{s.name}</b><em>0{i+1}</em></button>)}</div><article className="fu-study-detail"><span>SELECTED DEVICE / 0{activeStudy+1}</span><h3>{studies[activeStudy].name}</h3><p>{studies[activeStudy].copy}</p></article></section>
 <section className="fu-type"><header className="fu-section-head"><span className="fu-label">04 / TYPOGRAPHY</span><h2>TYPE IN<br/><i>VELOCITY.</i></h2><p>Scale, slant, repetition and unexpected spacing turn text into a moving composition.</p></header><div className="fu-type-specimen"><span>WORDS IN FREEDOM / STUDY 01</span><strong>MOVE<br/><i>FASTER</i></strong><div>TYPE / RHYTHM / FORCE</div><small>DISPLAY — CONDENSED / HEAVY / DIRECTIONAL</small></div></section>
 <section className="fu-palette" id="fu-palette"><header className="fu-section-head"><span className="fu-label">05 / COLOUR SYSTEM</span><h2>VELOCITY<br/><i>SPECTRUM.</i></h2><p>A dedicated Futurist identity, deliberately distinct from the red, black and cream Constructivist specimen.</p></header><div className="fu-swatches">{palette.map(c=><button className="fu-swatch" key={c.hex} onClick={()=>copyHex(c.hex)}><span style={{background:c.hex}}/><b>{c.name}</b><small>{copied===c.hex?'COPIED':c.hex}</small><em>{c.role}</em></button>)}</div></section>
 <section className="fu-applications"><header className="fu-section-head"><span className="fu-label">06 / APPLICATIONS</span><h2>DESIGN FOR<br/><i>A MOVING WORLD.</i></h2><p>Futurist ideas travelled through print, objects, performance and modern communication.</p></header><div className="fu-application-grid"><article><div className="fu-app-poster"><span>PRINT / TYPE</span><b>MOVE<br/><i>FORWARD</i></b><div/></div><h3>Posters & publishing</h3><p>Expressive typography and repeated forms create urgency and movement.</p></article><article><div className="fu-app-machine"><span>TRANSPORT / FORM</span><svg className="fu-car-art" viewBox="0 0 560 230" role="img" aria-label="Streamlined Futurist racing car in side profile"><defs><linearGradient id="fuCarBody" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#FFEDD0"/><stop offset=".48" stopColor="#00C2A8"/><stop offset="1" stopColor="#008E86"/></linearGradient><linearGradient id="fuCarGlass" x1="0" x2="1"><stop stopColor="#00C2A8"/><stop offset="1" stopColor="#081E3B"/></linearGradient></defs><g fill="none" stroke="#FFEDD0" strokeWidth="4" opacity=".75"><path d="M20 186H540M34 202H180M380 202H526"/><path d="M42 66H145M18 82H118"/></g><g className="fu-car-speed" stroke="#FF6A08" strokeWidth="7" strokeLinecap="square"><path d="M42 130H155M20 151H126M75 108H170"/></g><path d="M88 158L115 126L185 109L235 61Q248 47 274 47H360Q382 49 402 73L451 117L501 132Q520 140 524 159L516 176H67Q67 164 88 158Z" fill="url(#fuCarBody)" stroke="#FFEDD0" strokeWidth="5" strokeLinejoin="round"/><path d="M204 105L247 61Q254 55 274 55H354Q370 57 385 77L410 108Z" fill="url(#fuCarGlass)" stroke="#081E3B" strokeWidth="5"/><path d="M298 57V107M367 59L391 106" stroke="#FFEDD0" strokeWidth="4"/><path d="M120 132L193 119M421 121L476 137" stroke="#081E3B" strokeWidth="5" opacity=".8"/><path d="M84 158L113 148H475L518 158" stroke="#FFEDD0" strokeWidth="4"/><path d="M148 163H418" stroke="#081E3B" strokeWidth="8"/><path d="M451 136L494 147" stroke="#FF6A08" strokeWidth="7"/><path d="M102 143L119 139M492 144L513 151" stroke="#FFEDD0" strokeWidth="6"/><g><circle cx="174" cy="169" r="37" fill="#081E3B" stroke="#FFEDD0" strokeWidth="6"/><circle cx="174" cy="169" r="20" fill="#496B8A" stroke="#00C2A8" strokeWidth="5"/><circle cx="174" cy="169" r="7" fill="#FFEDD0"/><circle cx="432" cy="169" r="37" fill="#081E3B" stroke="#FFEDD0" strokeWidth="6"/><circle cx="432" cy="169" r="20" fill="#496B8A" stroke="#00C2A8" strokeWidth="5"/><circle cx="432" cy="169" r="7" fill="#FFEDD0"/></g><path d="M157 169L174 151L191 169L174 187ZM415 169L432 151L449 169L432 187Z" fill="none" stroke="#FFEDD0" strokeWidth="3"/><path d="M230 118L248 114M264 116L283 112M302 116L321 112" stroke="#FF6A08" strokeWidth="4"/></svg></div><h3>Transport & machines</h3><p>Streamlined shapes and mechanical rhythm turn technology into visual identity.</p></article><article><div className="fu-app-stage"><span>PERFORMANCE / SOUND</span><b>NOISE<br/>+ MOTION</b><div/></div><h3>Photography & theatre</h3><p>Performance, sound and image become experiments in simultaneity.</p></article></div></section>
 <section className="fu-lab" id="fu-lab"><header className="fu-section-head"><span className="fu-label">07 / MOTION COMPOSITION LAB</span><h2>BUILD THE<br/><i>VELOCITY.</i></h2><p>Change repetition, direction and form. Export your composition as an SVG poster.</p></header><div className="fu-lab-layout"><div className="fu-lab-controls"><label className="fu-field">YOUR MESSAGE<textarea value={headline} maxLength={54} onChange={e=>setHeadline(e.target.value.toUpperCase())}/></label><div className="fu-field">GEOMETRIC FORM<div className="fu-choice-row">{['triangle','circle','square','bar'].map(k=><button key={k} className={shape===k?'is-active':''} onClick={()=>setShape(k)}>{k}</button>)}</div></div><div className="fu-field">MOTION COLOUR<div className="fu-colour-choices">{palette.slice(1).map(c=><button key={c.hex} aria-label={c.name} title={c.name} className={accent===c.hex?'is-active':''} style={{background:c.hex}} onClick={()=>setAccent(c.hex)}/>)}</div></div><label className="fu-field fu-range">DIRECTION <strong>{angle}°</strong><input type="range" min="-45" max="45" value={angle} onChange={e=>setAngle(Number(e.target.value))}/></label><label className="fu-field fu-range">REPETITION <strong>{repeats}×</strong><input type="range" min="1" max="7" value={repeats} onChange={e=>setRepeats(Number(e.target.value))}/></label><label className="fu-toggle"><input type="checkbox" checked={showGrid} onChange={e=>setShowGrid(e.target.checked)}/> Show construction grid</label><div className="fu-lab-actions"><button onClick={reset}><RotateCcw size={15}/> Reset</button><button className="fu-export" onClick={exportSvg}><Download size={15}/> Export SVG</button></div></div><div className="fu-preview-wrap"><div className={'fu-poster-preview '+(showGrid?'has-grid':'')}><span>RYŪMA / FUTURISM</span><div className="fu-preview-forms" style={{'--fu-angle':angle+'deg'}}>{Array.from({length:repeats},(_,i)=><Shape key={i} kind={shape} fill={accent} index={i}/>)}</div><strong>{lines.map((line,i)=><i key={i}>{line}</i>)}</strong><small>MOTION / FORCE / SIMULTANEITY</small></div></div></div></section>
 <footer className="fu-footer"><span className="fu-label">RYŪMA / DESIGN ANATOMY</span><div className="fu-footer-streaks"><i/><i/><i/></div><h2>ART / INDUSTRY<br/><em>TIME / MOTION</em></h2><p>Explore the forces behind the form.</p><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> Back to Design Library</button><small>FUTURISM / DESIGN STUDY</small></footer>
 </main>;
}
