import React, { useMemo, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUpRight, RotateCcw, Download, Menu, X } from 'lucide-react';
import './pop-art-style.css';

const principles=[
 ['01','Popular imagery','Everyday products, celebrities, advertising and mass media become legitimate visual subjects.'],
 ['02','Bold contrast','Flat, saturated colour and heavy outlines make images immediate and unmistakable.'],
 ['03','Repetition','Serial reproduction turns one image into a pattern and asks how meaning changes through repetition.'],
 ['04','Commercial language','Packaging, comics, labels and advertising become part of the visual vocabulary.'],
 ['05','Mechanical reproduction','Screen printing, collage and photographic processes challenge the idea of the unique artwork.'],
 ['06','Irony and appropriation','Familiar images are reframed to question celebrity, consumption and visual culture.']
];
const studies=[
 {id:'halftone',n:'01',title:'Halftone',tag:'TONE / PRINT',desc:'Dots simulate tone and texture, recalling commercial printing and comic reproduction.'},
 {id:'burst',n:'02',title:'Impact burst',tag:'SHAPE / EMPHASIS',desc:'A jagged burst creates an instant focal point and gives a short message visual force.'},
 {id:'speech',n:'03',title:'Speech & sound',tag:'LANGUAGE / VOICE',desc:'Speech balloons and onomatopoeia make words behave like graphic objects.'},
 {id:'serial',n:'04',title:'Serial image',tag:'REPETITION / SERIES',desc:'Repeated image units expose variation, consistency and the logic of mass production.'},
 {id:'product',n:'05',title:'Product icon',tag:'OBJECT / COMMERCE',desc:'An ordinary packaged object becomes a bold, simplified symbol.'}
];
const palette=[['Signal Red','#EF3340','Impact and emphasis'],['Electric Yellow','#FFD928','Energy and attention'],['Cobalt Blue','#1455D9','Graphic contrast'],['Mint','#70E1D1','Secondary counterpoint'],['Warm Paper','#FFF3D9','Breathing space'],['Ink','#111827','Outline and typography']];
function StudyArt({id}){return <svg viewBox="0 0 220 150" aria-hidden="true" className={'pa-study-art pa-'+id}>
 {id==='halftone'&&<><rect width="220" height="150" fill="#FFF3D9"/>{Array.from({length:10},(_,y)=>Array.from({length:15},(_,x)=><circle key={y+'-'+x} cx={8+x*15} cy={8+y*15} r={4.5} fill="#EF3340"/>))}</>}
 {id==='burst'&&<><rect width="220" height="150" fill="#1455D9"/><path d="M110 8L128 48L170 20L157 64L210 75L162 94L185 137L135 113L110 147L89 111L38 137L59 92L8 75L62 62L43 20L91 47Z" fill="#FFD928" stroke="#111827" strokeWidth="7"/></>}
 {id==='speech'&&<><rect width="220" height="150" fill="#EF3340"/><path d="M25 25Q25 10 45 10H180Q200 10 200 30V95Q200 112 180 112H82L52 140L58 112H45Q25 112 25 95Z" fill="#FFF3D9" stroke="#111827" strokeWidth="7"/><text x="112" y="77" textAnchor="middle" fontSize="42" fontWeight="900" fontStyle="italic" fill="#111827">BANG!</text></>}
 {id==='serial'&&<><rect width="220" height="150" fill="#70E1D1"/>{['#EF3340','#FFD928','#1455D9','#EF3340'].map((c,i)=><g key={i} transform={'translate('+(i%2*105+5)+' '+(Math.floor(i/2)*72+3)+')'}><circle cx="50" cy="32" r="27" fill={c} stroke="#111827" strokeWidth="3"/><path d="M30 29Q50 9 70 29M38 44Q50 52 62 44" fill="none" stroke="#111827" strokeWidth="4"/><circle cx="41" cy="30" r="3" fill="#111827"/><circle cx="59" cy="30" r="3" fill="#111827"/></g>)}</>}
 {id==='product'&&<><rect width="220" height="150" fill="#FFD928"/><path d="M75 25H145V42L158 52V126H62V52L75 42Z" fill="#FFF3D9" stroke="#111827" strokeWidth="7"/><path d="M65 65H155V97H65Z" fill="#EF3340" stroke="#111827" strokeWidth="4"/><text x="110" y="87" textAnchor="middle" fontSize="17" fontWeight="900" fill="#FFF3D9">POP</text><path d="M82 25V15H138V25" fill="none" stroke="#111827" strokeWidth="6"/></>}
 </svg>}
function HeroArt(){return <div className="pa-hero-art" role="img" aria-label="Bold 2D Pop Art illustration of a woman astronaut in a large rounded space helmet, with comic-book bursts, stars and halftone print texture"><svg className="pa-hero-illustration" viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
 <defs>
  <pattern id="paSpaceDots" width="15" height="15" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2.2" fill="#111827"/></pattern>
  <pattern id="paBlueDots" width="13" height="13" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2" fill="#FFF3D9"/></pattern>
  <clipPath id="paVisorClip"><path d="M137 105Q142 48 248 42Q359 37 405 118Q439 178 411 273Q384 354 274 364Q166 370 118 294Q80 232 101 160Q111 124 137 105Z"/></clipPath>
 </defs>
 <rect width="700" height="450" fill="#1455D9"/>
 <rect x="0" y="0" width="700" height="450" fill="url(#paBlueDots)" opacity=".18"/>
 <path d="M0 0H260L180 450H0Z" fill="#EF3340"/>
 <path d="M0 0H260L180 450H0Z" fill="url(#paSpaceDots)" opacity=".3"/>
 <path d="M540 0H700V450H590Q633 300 540 0Z" fill="#FFD928"/>
 <path d="M540 0H700V450H590Q633 300 540 0Z" fill="url(#paSpaceDots)" opacity=".28"/>
 {/* Comic impact burst behind the helmet */}
 <path d="M478 22L508 67L565 30L558 89L636 80L596 135L681 165L611 199L658 263L584 253L575 329L515 281L471 337L449 273L380 292L402 222L337 194L402 151L382 85L447 107Z" fill="#FFF3D9" stroke="#111827" strokeWidth="10" strokeLinejoin="round"/>
 <text x="518" y="158" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="67" fontWeight="900" fontStyle="italic" fill="#EF3340" stroke="#111827" strokeWidth="3" paintOrder="stroke">ZAP!</text>
 <path d="M424 185L617 165L625 207L432 229Z" fill="#FFD928" stroke="#111827" strokeWidth="6"/>
 <text x="523" y="211" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="20" fontWeight="900" fill="#111827" transform="rotate(-6 523 211)">TO THE STARS</text>
 {/* Stars and orbit marks */}
 <path d="M60 65L70 91L97 101L70 111L60 138L50 111L24 101L50 91Z" fill="#FFD928" stroke="#111827" strokeWidth="5"/>
 <path d="M620 350L629 372L652 381L629 390L620 414L611 390L589 381L611 372Z" fill="#EF3340" stroke="#111827" strokeWidth="5"/>
 <path d="M36 300Q58 270 88 281M580 38Q620 48 645 76" fill="none" stroke="#FFF3D9" strokeWidth="7" strokeLinecap="round" strokeDasharray="14 13"/>
 {/* Space suit torso and shoulders */}
 <path d="M72 450Q91 375 159 353Q219 334 283 353Q360 374 402 450Z" fill="#FFF3D9" stroke="#111827" strokeWidth="12" strokeLinejoin="round"/>
 <path d="M115 450Q142 389 207 378Q275 367 333 397L367 450Z" fill="#EF3340" stroke="#111827" strokeWidth="9" strokeLinejoin="round"/>
 <path d="M182 389L183 450M299 389L319 450" stroke="#111827" strokeWidth="7"/>
 <rect x="211" y="395" width="70" height="37" rx="5" fill="#FFD928" stroke="#111827" strokeWidth="6"/>
 <circle cx="246" cy="413" r="8" fill="#1455D9" stroke="#111827" strokeWidth="4"/>
 {/* Helmet outer shell: broad, rounded, unmistakably space helmet */}
 <path d="M137 105Q142 48 248 42Q359 37 405 118Q439 178 411 273Q384 354 274 364Q166 370 118 294Q80 232 101 160Q111 124 137 105Z" fill="#FFD928" stroke="#111827" strokeWidth="15" strokeLinejoin="round"/>
 <path d="M137 105Q142 48 248 42Q359 37 405 118Q439 178 411 273Q384 354 274 364Q166 370 118 294Q80 232 101 160Q111 124 137 105Z" fill="none" stroke="#FFF3D9" strokeWidth="5"/>
 {/* Visor glass and face, clipped within helmet */}
 <g clipPath="url(#paVisorClip)">
  <path d="M92 90H430V370H92Z" fill="#BDE8E8"/>
  <path d="M92 90H430V370H92Z" fill="url(#paBlueDots)" opacity=".14"/>
  <path d="M119 125Q178 80 243 94Q316 95 369 145L400 232Q366 319 275 348Q176 358 121 286Q95 218 119 125Z" fill="#FFE0B8" stroke="#111827" strokeWidth="9"/>
  {/* Hair framing the face */}
  <path d="M124 180Q122 104 200 89Q275 69 335 116Q360 140 369 181Q322 142 292 155Q260 113 212 132Q163 148 142 204Z" fill="#EF3340" stroke="#111827" strokeWidth="9" strokeLinejoin="round"/>
  <path d="M130 180Q159 119 217 116Q277 111 323 151" fill="none" stroke="#FFD928" strokeWidth="12" strokeLinecap="round"/>
  {/* Face */}
  <path d="M150 207Q176 176 205 194M264 192Q295 170 322 198" fill="none" stroke="#111827" strokeWidth="10" strokeLinecap="round"/>
  <path d="M157 224Q184 203 211 225Q184 247 157 224Z" fill="#FFF3D9" stroke="#111827" strokeWidth="6"/>
  <ellipse cx="185" cy="224" rx="9" ry="13" fill="#1455D9"/><circle cx="188" cy="219" r="4" fill="#FFF3D9"/>
  <path d="M265 220Q291 199 318 221Q292 245 265 220Z" fill="#FFF3D9" stroke="#111827" strokeWidth="6"/>
  <ellipse cx="292" cy="220" rx="9" ry="13" fill="#1455D9"/><circle cx="295" cy="215" r="4" fill="#FFF3D9"/>
  <path d="M235 224Q226 257 212 270Q230 279 246 270" fill="none" stroke="#111827" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M197 307Q237 279 278 301Q260 340 222 338Q199 334 197 307Z" fill="#111827"/>
  <path d="M207 306Q238 291 270 304Q245 322 210 318Z" fill="#EF3340"/>
  <path d="M210 306Q239 298 263 305" fill="none" stroke="#FFF3D9" strokeWidth="5" strokeLinecap="round"/>
  {/* Visor shine */}
  <path d="M131 145Q157 111 193 104M350 130Q378 157 382 194" fill="none" stroke="#FFF3D9" strokeWidth="9" strokeLinecap="round" opacity=".9"/>
 </g>
 {/* Helmet rim, bolts and side communication discs */}
 <path d="M119 295Q159 361 274 364Q385 361 411 273" fill="none" stroke="#111827" strokeWidth="12" strokeLinecap="round"/>
 <circle cx="111" cy="235" r="28" fill="#EF3340" stroke="#111827" strokeWidth="10"/>
 <circle cx="111" cy="235" r="10" fill="#FFD928"/>
 <circle cx="411" cy="235" r="28" fill="#EF3340" stroke="#111827" strokeWidth="10"/>
 <circle cx="411" cy="235" r="10" fill="#FFD928"/>
 <path d="M128 113L144 96M383 105L399 124" stroke="#111827" strokeWidth="8" strokeLinecap="round"/>
 {/* Foreground gloved hand raised in a confident space-explorer gesture */}
 <path d="M367 450Q359 422 367 400Q374 382 390 374Q402 368 411 378Q419 389 405 405Q431 393 441 408Q448 421 426 436L416 450Z" fill="#FFE0B8" stroke="#111827" strokeWidth="9" strokeLinejoin="round"/>
 <path d="M390 400Q405 391 417 400M404 421Q420 411 432 421" fill="none" stroke="#EF3340" strokeWidth="7" strokeLinecap="round"/>
 {/* Caption strip */}
 <rect x="14" y="405" width="270" height="34" fill="#FFF3D9" stroke="#111827" strokeWidth="5"/>
 <text x="27" y="428" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="18" fill="#111827">01 / COSMIC POP STUDY</text>
</svg></div>}
export default function PopArtStyle({onNavigate}){
 const [menu,setMenu]=useState(false),[activeStudy,setActiveStudy]=useState(0),[headline,setHeadline]=useState('POP\nIS EVERYWHERE'),[shape,setShape]=useState('burst'),[accent,setAccent]=useState('#EF3340'),[dots,setDots]=useState(true),[repeat,setRepeat]=useState(4);
 const lines=useMemo(()=>headline.split('\n').filter(Boolean).slice(0,3),[headline]);
 const jump=id=>{document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});setMenu(false)};
 const reset=()=>{setHeadline('POP\nIS EVERYWHERE');setShape('burst');setAccent('#EF3340');setDots(true);setRepeat(4)};
 const exportSvg=()=>{const text=lines.map((line,i)=>'<text x="44" y="'+(280+i*90)+'" font-family="Arial,sans-serif" font-size="76" font-weight="900" fill="#FFF3D9">'+line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</text>').join('');const pattern=dots?'<defs><pattern id="d" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="3" fill="'+accent+'"/></pattern></defs><rect width="700" height="900" fill="url(#d)" opacity=".22"/>':'';const graphic=shape==='burst'?'<path d="M350 90L390 190L500 130L465 245L630 300L480 365L545 500L410 440L350 590L285 440L150 500L220 365L70 300L235 245L200 130L310 190Z" fill="'+accent+'" stroke="#111827" stroke-width="12"/>':shape==='circle'?'<circle cx="350" cy="350" r="190" fill="'+accent+'" stroke="#111827" stroke-width="12"/>':'<rect x="170" y="170" width="360" height="360" fill="'+accent+'" stroke="#111827" stroke-width="12"/>';const svg='<svg xmlns="http://www.w3.org/2000/svg" width="700" height="900" viewBox="0 0 700 900"><rect width="700" height="900" fill="#1455D9"/>'+pattern+graphic+'<g>'+text+'</g><text x="44" y="850" fill="#FFF3D9" font-family="Arial" font-size="20" letter-spacing="5">RYŪMA / POP ART</text></svg>';const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));const a=document.createElement('a');a.href=url;a.download='ryuma-pop-art-composition.svg';a.click();URL.revokeObjectURL(url)};
 return <main className="pa-page">
  <nav className="pa-nav"><button className="pa-brand" onClick={()=>onNavigate?.('home')}><b>RYŪMA</b><span>DESIGN ANATOMY</span></button><button className="pa-menu" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} onClick={()=>setMenu(v=>!v)}>{menu?<X/>:<Menu/>}</button><div className={'pa-links '+(menu?'is-open':'')}>{[['Principles','pa-principles'],['History','pa-history'],['Visual anatomy','pa-studies'],['Palette','pa-palette'],['Composition lab','pa-lab']].map(([n,id])=><button key={id} onClick={()=>jump(id)}>{n}</button>)}<button onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Design Library</button></div></nav>
  <header className="pa-hero"><div className="pa-hero-copy"><span className="pa-kicker"><i/> DESIGN MOVEMENT / 1950s–1970s</span><h1>POP <em>ART.</em></h1><h2>THE ART OF<br/>POPULAR CULTURE</h2><p>A visual language that brought everyday objects, advertising, comics and celebrity imagery into fine art and design.</p><div className="pa-actions"><button className="pa-primary" onClick={()=>jump('pa-principles')}>Explore anatomy <ArrowDown size={16}/></button><button className="pa-secondary" onClick={()=>jump('pa-studies')}>View studies <ArrowUpRight size={16}/></button></div></div><HeroArt/><div className="pa-hero-foot"><span>IMAGE / COMMERCE / REPRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div></header>
  <section className="pa-thesis"><span>THE CENTRAL IDEA / 00</span><h2>Ordinary images.<br/><i>Extraordinary impact.</i></h2><p>Pop Art borrows the visual language of mass culture and makes it impossible to ignore.</p></section>
  <section className="pa-principles" id="pa-principles"><header className="pa-section-head"><span>01 / PRINCIPLES</span><h2>Culture becomes<br/><i>the canvas.</i></h2><p>Six ideas explain how Pop Art turns familiar imagery into a graphic system.</p></header><div className="pa-principle-list">{principles.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></article>)}</div></section>
  <section className="pa-history" id="pa-history"><header className="pa-section-head"><span>02 / HISTORICAL CONTEXT</span><h2>From everyday<br/><i>to iconic.</i></h2><p>A movement shaped by post-war consumer culture, mass media and new forms of reproduction.</p></header><div className="pa-timeline"><article><span>EARLY 1950s</span><div><h3>British beginnings</h3><p>Artists and critics explore advertising, cinema, comics and American consumer imagery.</p></div></article><article><span>MID–LATE 1950s</span><div><h3>New visual language</h3><p>Independent Group discussions help frame popular culture as a subject for serious art.</p></div></article><article><span>1960s</span><div><h3>American Pop</h3><p>Artists such as Andy Warhol and Roy Lichtenstein bring serial imagery, commercial printing and comic language into the spotlight.</p></div></article><article><span>1970s</span><div><h3>Wider influence</h3><p>Pop aesthetics continue to shape graphic design, advertising, fashion and visual communication.</p></div></article></div><aside className="pa-context-note">HISTORICAL NOTE / Pop Art developed across different scenes; the dates above are a concise orientation, not a single universal timeline.</aside></section>
  <section className="pa-studies" id="pa-studies"><header className="pa-section-head"><span>03 / VISUAL ANATOMY</span><h2>Read the<br/><i>visual code.</i></h2><p>Select an element to see how it changes tone, emphasis and meaning.</p></header><div className="pa-study-grid">{studies.map((s,i)=><button key={s.id} className={'pa-study '+(activeStudy===i?'is-active':'')} onClick={()=>setActiveStudy(i)} aria-pressed={activeStudy===i}><StudyArt id={s.id}/><span>{s.n} / {s.tag}</span><b>{s.title}</b></button>)}</div><div className="pa-study-detail" aria-live="polite"><span>SELECTED ELEMENT / {studies[activeStudy].n}</span><h3>{studies[activeStudy].title}</h3><p>{studies[activeStudy].desc}</p></div></section>
  <section className="pa-type"><span>04 / TYPOGRAPHY</span><h2>LOUD TYPE.<br/><i>SHORT MESSAGE.</i></h2><p>Heavy display lettering, compressed headlines, italic emphasis and conversational sound words create an immediate reading order.</p><div className="pa-type-sample"><small>DISPLAY / IMPACT</small><strong>WOW!</strong><b>LOOK AT THIS.</b><span>WEIGHT / SCALE / CONTRAST</span></div></section>
  <section className="pa-palette" id="pa-palette"><header className="pa-section-head"><span>05 / COLOUR SYSTEM</span><h2>Colour with<br/><i>volume.</i></h2><p>A deliberately compact palette for high contrast, print-like energy and visual clarity.</p></header><div className="pa-swatches">{palette.map(([n,h,d])=><article key={h}><span style={{background:h}}/><b>{n}</b><code>{h}</code><small>{d}</small></article>)}</div></section>
  <section className="pa-applications"><header className="pa-section-head"><span>06 / APPLICATIONS</span><h2>Design for<br/><i>mass attention.</i></h2><p>Pop Art's graphic vocabulary travels easily between media and everyday objects.</p></header><div className="pa-app-grid"><article><div className="pa-app-poster"><span>POSTER / PRINT</span><b>BUY<br/><i>LESS?</i></b><small>QUESTION THE MESSAGE</small></div><h3>Posters & publishing</h3><p>Large type and flat colour make messages immediate from a distance.</p></article><article><div className="pa-app-pack"><span>PRODUCT / PACKAGING</span><div><b>POP</b><i>★</i></div><small>EVERYDAY ICON</small></div><h3>Packaging & products</h3><p>Ordinary goods become memorable through scale, repetition and simplified form.</p></article><article><div className="pa-app-media"><span>MEDIA / CULTURE</span><b>HEY!</b><i>● ● ●</i><small>REPEAT / REFRAME / REPEAT</small></div><h3>Advertising & media</h3><p>Image repetition and graphic slogans turn familiar media into visual statements.</p></article></div></section>
  <section className="pa-lab" id="pa-lab"><header className="pa-section-head"><span>07 / COMPOSITION LAB</span><h2>Make it<br/><i>pop.</i></h2><p>Build a compact Pop Art poster. Change the message, shape, colour and print texture.</p></header><div className="pa-lab-layout"><div className="pa-controls"><label className="pa-field">HEADLINE<textarea value={headline} maxLength={42} onChange={e=>setHeadline(e.target.value)} aria-label="Poster headline"/></label><div className="pa-control-group"><span>DOMINANT SHAPE</span><div className="pa-choice-row">{['burst','circle','square'].map(x=><button key={x} className={shape===x?'is-active':''} onClick={()=>setShape(x)} aria-pressed={shape===x}>{x}</button>)}</div></div><div className="pa-control-group"><span>SIGNAL COLOUR</span><div className="pa-colours">{palette.slice(0,4).map(([n,h])=><button key={h} aria-label={n} title={n} className={accent===h?'is-active':''} style={{background:h}} onClick={()=>setAccent(h)}/>)}</div></div><label className="pa-range">IMAGE REPETITION <strong>{repeat}×</strong><input type="range" min="1" max="6" value={repeat} onChange={e=>setRepeat(Number(e.target.value))}/></label><label className="pa-check"><input type="checkbox" checked={dots} onChange={e=>setDots(e.target.checked)}/> Show halftone texture</label><div className="pa-lab-actions"><button onClick={reset}><RotateCcw size={15}/> Reset</button><button className="pa-export" onClick={exportSvg}><Download size={15}/> Export SVG</button></div></div><div className="pa-preview-wrap"><div className={'pa-preview '+(dots?'has-dots':'')}><small>RYŪMA / POP ART</small><div className="pa-preview-shape" style={{background:accent,clipPath:shape==='burst'?'polygon(50% 0%,61% 32%,96% 12%,78% 48%,100% 65%,65% 70%,76% 100%,48% 78%,20% 100%,32% 68%,0 55%,34% 44%,18% 15%,44% 32%)':undefined,borderRadius:shape==='circle'?'50%':shape==='square'?'0':'0'}}/>{Array.from({length:repeat},(_,i)=><b className="pa-preview-repeat" key={i} style={{top:(24+i*9)+'%',left:(8+i*3)+'%',opacity:1-i*.12}}>{lines[0]||'POP'}</b>)}<div className="pa-preview-copy">{lines.map((line,i)=><strong key={i}>{line}</strong>)}</div><small>IMAGE / CULTURE / REPRODUCTION</small></div></div></div></section>
  <footer className="pa-footer"><span>RYŪMA / DESIGN ANATOMY</span><b>POP ART / DESIGN STUDY</b><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Back to Design Library</button></footer>
 </main>;
}
