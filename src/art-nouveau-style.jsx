import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowDown, ArrowUpRight, Copy, Check, RotateCcw, Menu, X } from 'lucide-react';
import './art-nouveau-style.css';

const principles = [
  ['01','Whiplash line','Long, asymmetrical curves create movement and connect the composition.'],
  ['02','Natural structure','Plants, stems, insects and flowing forms become the source of visual logic.'],
  ['03','Integrated ornament','Decoration grows from the structure instead of sitting on top of it.'],
  ['04','Asymmetrical balance','Unequal forms are balanced through rhythm, scale and visual weight.'],
  ['05','Decorative typography','Letterforms become part of the image, with expressive shapes and carefully controlled hierarchy.'],
  ['06','Art and craft unity','Architecture, objects, graphics and interiors share one coherent visual language.'],
];

const timeline = [
  ['c. 1890','Emergence','New decorative approaches develop across Europe, reacting against historic imitation and industrial mass production.'],
  ['1895','A name takes hold','The Paris gallery Maison de l’Art Nouveau helps popularise the movement’s name.'],
  ['1890s–1900s','International languages','Related approaches appear across Europe, with distinct regional interpretations and names.'],
  ['1910s','Transformation','The movement’s influence gives way to newer modernist directions, while its craft legacy continues.'],
];

const palette = [
  {name:'Forest',hex:'#173F35',role:'Deep structural green'},
  {name:'Moss',hex:'#78845A',role:'Natural supporting tone'},
  {name:'Warm ivory',hex:'#F4EBD8',role:'Paper and breathing space'},
  {name:'Antique gold',hex:'#C49A52',role:'Ornamental highlight'},
  {name:'Terracotta',hex:'#B66F55',role:'Warm accent'},
  {name:'Ink',hex:'#292A24',role:'Text and fine detail'},
];

const studies = [
  {name:'The whiplash line',kind:'LINE & MOVEMENT',copy:'A continuous curve leads the eye through the composition, linking separate forms into one visual rhythm.',mark:'〰'},
  {name:'Botanical vocabulary',kind:'NATURE & FORM',copy:'Leaves, flowers, stems and seed forms are stylised into a repeatable decorative vocabulary.',mark:'❧'},
  {name:'Ornamental frame',kind:'FRAME & HIERARCHY',copy:'Borders and arches organise the page while allowing the main subject to remain dominant.',mark:'⌒'},
  {name:'Integrated lettering',kind:'TYPE & IMAGE',copy:'Display lettering participates in the composition rather than behaving as a detached label.',mark:'Aa'},
];

function Sprig({className=''}) {
  return <svg className={className} viewBox="0 0 220 360" fill="none" aria-hidden="true">
    <path d="M110 350C103 280 125 230 105 170C91 126 72 85 42 18" stroke="currentColor" strokeWidth="3"/>
    <path d="M105 247C67 239 39 211 27 177C63 178 93 201 105 247Z" fill="#78845A" stroke="currentColor" strokeWidth="2"/>
    <path d="M112 207C150 192 175 161 183 125C145 132 118 159 112 207Z" fill="#9AA176" stroke="currentColor" strokeWidth="2"/>
    <path d="M93 151C57 137 39 108 37 76C70 89 91 114 93 151Z" fill="#A9AE7C" stroke="currentColor" strokeWidth="2"/>
    <path d="M85 111C104 78 128 57 158 46C147 81 123 105 85 111Z" fill="#78845A" stroke="currentColor" strokeWidth="2"/>
    <path d="M42 18C56 30 69 43 80 61M27 177L93 231M183 125L117 190M37 76L82 132" stroke="#F4EBD8" strokeWidth="1.5" opacity=".8"/>
    <circle cx="42" cy="18" r="7" fill="#C49A52"/>
  </svg>;
}

function Flower({className=''}) {
  return <svg className={className} viewBox="0 0 240 240" fill="none" aria-hidden="true">
    {Array.from({length:8},(_,i)=><ellipse key={i} cx="120" cy="65" rx="24" ry="54" fill={i%2?'#B9B98C':'#E6D7B6'} stroke="#173F35" strokeWidth="2" transform={`rotate(${i*45} 120 120)`}/>)}
    <circle cx="120" cy="120" r="24" fill="#C49A52" stroke="#173F35" strokeWidth="3"/>
    <circle cx="120" cy="120" r="8" fill="#173F35"/>
  </svg>;
}


function BotanicalPlant({className=''}) {
  return <svg className={className} viewBox="0 0 360 500" fill="none" aria-hidden="true">
    <path d="M175 492C170 424 194 365 180 300C167 239 143 177 105 112C89 85 72 58 49 30" stroke="#C49A52" strokeWidth="5" strokeLinecap="round"/>
    <path d="M177 421C128 398 87 363 62 313C111 318 154 354 177 421Z" fill="#78845A" stroke="#D7C18F" strokeWidth="3"/>
    <path d="M180 354C224 322 255 276 260 224C212 244 181 291 180 354Z" fill="#9AA176" stroke="#D7C18F" strokeWidth="3"/>
    <path d="M157 278C106 257 75 214 68 163C119 183 153 224 157 278Z" fill="#A9AE7C" stroke="#D7C18F" strokeWidth="3"/>
    <path d="M173 213C198 160 241 124 293 110C276 165 235 205 173 213Z" fill="#78845A" stroke="#D7C18F" strokeWidth="3"/>
    <path d="M117 137C75 126 43 96 28 54C76 61 108 91 117 137Z" fill="#9AA176" stroke="#D7C18F" strokeWidth="3"/>
    <path d="M177 421L75 330M180 354L249 246M157 278L80 181M173 213L277 124M117 137L43 69" stroke="#E9DFC9" strokeWidth="2" opacity=".8"/>
    <path d="M175 492C196 451 213 414 242 383" stroke="#C49A52" strokeWidth="3" strokeLinecap="round"/>
    <path d="M225 405C245 365 280 345 319 344C300 385 267 408 225 405Z" fill="#B66F55" stroke="#D7C18F" strokeWidth="3"/>
    <path d="M49 30C66 35 78 48 88 64" stroke="#F4EBD8" strokeWidth="2"/>
    <circle cx="49" cy="30" r="10" fill="#C49A52" stroke="#F4EBD8" strokeWidth="2"/>
    <path d="M44 19C42 7 50 2 58 7C62 15 57 21 49 26" stroke="#78845A" strokeWidth="3" strokeLinecap="round"/>
  </svg>;
}

export default function ArtNouveauStyle({onNavigate}) {
  const [activeStudy,setActiveStudy] = useState(0);
  const [selected,setSelected] = useState(palette[0]);
  const [headline,setHeadline] = useState('GROW IN\nYOUR OWN\nDIRECTION');
  const [motif,setMotif] = useState('flower');
  const [ornament,setOrnament] = useState(true);
  const [mobileMenu,setMobileMenu] = useState(false);
  const [copied,setCopied] = useState(false);
  const lines = useMemo(()=>headline.split('\n').filter(Boolean).slice(0,3),[headline]);
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); setMobileMenu(false); };
  const copyHex = async () => { try { await navigator.clipboard.writeText(selected.hex); setCopied(true); window.setTimeout(()=>setCopied(false),1400); } catch { setCopied(false); } };
  const reset = () => { setHeadline('GROW IN\nYOUR OWN\nDIRECTION'); setMotif('flower'); setOrnament(true); };

  const exportPoster = () => {
    const safe = lines.map((line,i)=>'<text x="540" y="'+(650+i*105)+'" text-anchor="middle" font-family="Georgia,serif" font-size="78" letter-spacing="2" fill="#F4EBD8">'+line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</text>').join('');
    const decoration = motif === 'flower'
      ? '<g transform="translate(540 300)">'+Array.from({length:8},(_,i)=>'<ellipse cx="0" cy="-72" rx="24" ry="62" fill="#B9B98C" stroke="#C49A52" stroke-width="3" transform="rotate('+(i*45)+')"/>').join('')+'<circle r="28" fill="#C49A52"/></g>'
      : '<path d="M120 500 C300 150 760 150 960 500 C760 850 300 850 120 500" fill="none" stroke="#C49A52" stroke-width="7"/><path d="M170 500 C350 250 700 250 910 500" fill="none" stroke="#78845A" stroke-width="4"/>';
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><rect width="1080" height="1350" fill="#173F35"/><rect x="34" y="34" width="1012" height="1282" rx="160" fill="none" stroke="#C49A52" stroke-width="4"/>'+(ornament?decoration:'')+'<text x="540" y="120" text-anchor="middle" fill="#C49A52" font-family="Georgia,serif" font-size="24" letter-spacing="8">RYŪMA / ART NOUVEAU STUDY</text>'+safe+'<text x="540" y="1190" text-anchor="middle" fill="#C49A52" font-family="Georgia,serif" font-size="22" letter-spacing="5">LINE · NATURE · ORNAMENT</text></svg>';
    const url = URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
    const a = document.createElement('a'); a.href=url; a.download='ryuma-art-nouveau-study.svg'; a.click(); URL.revokeObjectURL(url);
  };

  return <main className="an-page">
    <header className="an-nav">
      <button className="an-brand" onClick={()=>onNavigate?.('library')}><b>RYŪMA</b><span>DESIGN ANATOMY</span></button>
      <button className="an-menu" onClick={()=>setMobileMenu(v=>!v)} aria-label="Toggle section navigation" aria-expanded={mobileMenu}>{mobileMenu?<X size={20}/>:<Menu size={20}/>}</button>
      <nav className={mobileMenu?'an-links is-open':'an-links'} aria-label="Art Nouveau sections">
        {['an-principles','an-history','an-studies','an-type','an-colour','an-lab'].map((id,i)=><button key={id} onClick={()=>scrollTo(id)}>{['Principles','History','Studies','Typography','Colour','Lab'][i]}</button>)}
        <button className="an-library" onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Library</button>
      </nav>
    </header>

    <section className="an-hero" id="an-top">
      <div className="an-hero-copy">
        <span className="an-kicker">DESIGN MOVEMENTS / c. 1890—1910s</span>
        <h1>Art<br/><i>Nouveau</i><span>.</span></h1>
        <p className="an-hero-deck">The art of organic modernity.</p>
        <p className="an-hero-body">A visual language shaped by flowing lines, natural forms and the unity of art, design and craft.</p>
        <button className="an-primary" onClick={()=>scrollTo('an-principles')}>Explore the anatomy <ArrowDown size={15}/></button>
        <span className="an-hero-index">01 / A STUDY IN LINE, FORM & ORNAMENT</span>
      </div>
      <div className="an-hero-art">
        <div className="an-arch"><div className="an-arch-inner"><div className="an-sun-disc"/><BotanicalPlant className="an-hero-plant"/><Flower className="an-hero-bloom"/></div></div>
        <span className="an-art-caption">PLATE 01 / BOTANICAL STUDY</span>
      </div>
      <div className="an-hero-bottom"><span>OBSERVE / INTERPRET / ORNAMENT</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="an-thesis">
      <span className="an-label">THE CENTRAL IDEA / 00</span>
      <p>Art Nouveau treats ornament as part of the design’s structure. <strong>Line, nature, typography and craft become one connected composition.</strong></p>
      <Flower className="an-thesis-flower"/>
    </section>

    <section className="an-principles" id="an-principles">
      <div className="an-section-head"><span className="an-label">01 / DESIGN ANATOMY</span><h2>Six principles.<br/><i>One flowing language.</i></h2><p>Look beyond floral decoration. Understand the underlying visual decisions that give Art Nouveau its identity.</p></div>
      <div className="an-principle-list">{principles.map(([n,title,copy])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={16}/></article>)}</div>
    </section>

    <section className="an-history" id="an-history">
      <div className="an-section-head"><span className="an-label">02 / HISTORICAL CONTEXT</span><h2>A new art<br/><i>for a new age.</i></h2><p>Art Nouveau was not one uniform style. It developed through connected regional movements, each with its own artists, materials and visual character.</p></div>
      <div className="an-timeline">{timeline.map(([date,title,copy])=><article key={date}><span>{date}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="an-studies" id="an-studies">
      <div className="an-section-head"><span className="an-label">03 / VISUAL ANATOMY</span><h2>Read the<br/><i>ornament.</i></h2><p>Select a study to examine how a distinct visual device contributes to the whole composition.</p></div>
      <div className="an-study-grid">{studies.map((s,i)=><button key={s.name} className={activeStudy===i?'an-study is-active':'an-study'} onClick={()=>setActiveStudy(i)} aria-pressed={activeStudy===i}><span className="an-study-mark">{s.mark}</span><small>{s.kind}</small><b>{s.name}</b><span className="an-study-number">0{i+1}</span></button>)}</div>
      <div className="an-study-detail"><span>SELECTED STUDY / 0{activeStudy+1}</span><h3>{studies[activeStudy].name}</h3><p>{studies[activeStudy].copy}</p></div>
    </section>

    <section className="an-type" id="an-type">
      <div className="an-section-head"><span className="an-label">04 / TYPOGRAPHY</span><h2>Letters in<br/><i>full bloom.</i></h2><p>Expressive display type gives the page its voice. Supporting text remains clear and readable, even when the ornament becomes elaborate.</p></div>
      <div className="an-type-specimen"><span>DISPLAY STUDY / SERIF</span><strong>Art Nouveau</strong><em>Nature · Line · Craft</em><div className="an-type-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789 &amp; @ ! ?</div></div>
      <div className="an-type-notes"><span>01 / EXPRESSIVE DISPLAY</span><span>02 / READABLE TEXT</span><span>03 / DECORATIVE DETAILS</span></div>
    </section>

    <section className="an-colour" id="an-colour">
      <div className="an-section-head"><span className="an-label">05 / COLOUR & MATERIAL</span><h2>Colour from<br/><i>the natural world.</i></h2><p>This study palette combines deep botanical greens, warm paper, muted foliage and small touches of metallic warmth.</p></div>
      <div className="an-palette">
        <div className="an-swatches">{palette.map(c=><button key={c.name} className={selected.name===c.name?'an-swatch is-active':'an-swatch'} onClick={()=>{setSelected(c);setCopied(false)}} aria-pressed={selected.name===c.name}><span style={{background:c.hex}}/><b>{c.name}</b><small>{c.hex}</small></button>)}</div>
        <div className="an-colour-preview" style={{background:selected.hex,color:selected.name==='Warm ivory'?'#292A24':'#F4EBD8'}}><span>LIVE COLOUR STUDY / {selected.name.toUpperCase()}</span><strong>Nature<br/><i>in balance.</i></strong><p>{selected.role}</p><button onClick={copyHex}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'COPIED':'COPY HEX'}</button></div>
      </div>
    </section>

    <section className="an-applications">
      <div className="an-section-head"><span className="an-label">06 / APPLICATIONS</span><h2>One language.<br/><i>Many forms.</i></h2><p>Art Nouveau travelled across disciplines. Its principles can be read in graphics, architecture, interiors and crafted objects.</p></div>
      <div className="an-application-grid"><article><div className="an-app-poster"><span>1898 / PLATE</span><b>THE<br/><i>FLOWER</i><br/>STUDY</b><Flower/></div><h3>Posters & identity</h3><p>Illustration, lettering and ornament form one unified graphic composition.</p></article><article><div className="an-app-architecture"><div/><span>ARCHITECTURE / DETAIL</span></div><h3>Architecture</h3><p>Curved ironwork, organic structures, crafted surfaces and integrated decorative detail.</p></article><article><div className="an-app-object"><Flower/><span>OBJECT / CRAFT STUDY</span></div><h3>Objects & interiors</h3><p>Furniture, glass, ceramics and interiors bring the movement’s craft language into daily life.</p></article></div>
    </section>

    <section className="an-lab" id="an-lab">
      <div className="an-section-head"><span className="an-label">07 / COMPOSITION LAB</span><h2>Compose a<br/><i>living form.</i></h2><p>Change the words and decorative motif. Experiment with visual balance and export your own study as an SVG poster.</p></div>
      <div className="an-lab-layout">
        <div className="an-lab-controls">
          <label className="an-field">YOUR HEADLINE<textarea value={headline} onChange={e=>setHeadline(e.target.value)} maxLength={72} rows={3}/></label>
          <div className="an-field"><span>DECORATIVE MOTIF</span><div className="an-choice-row"><button className={motif==='flower'?'is-active':''} onClick={()=>setMotif('flower')}>Flower</button><button className={motif==='curve'?'is-active':''} onClick={()=>setMotif('curve')}>Whiplash</button></div></div>
          <label className="an-toggle"><input type="checkbox" checked={ornament} onChange={e=>setOrnament(e.target.checked)}/><span>Show ornament</span></label>
          <div className="an-lab-actions"><button onClick={reset}><RotateCcw size={14}/> Reset</button><button className="an-export" onClick={exportPoster}>Export SVG <ArrowUpRight size={14}/></button></div>
        </div>
        <div className="an-poster-preview"><div className="an-poster-frame">{ornament&&<BotanicalPlant className="an-poster-plant"/>}<span>RYŪMA / ART NOUVEAU</span><strong>{lines.map((line,i)=><i key={i}>{line}</i>)}</strong><small>LINE · NATURE · ORNAMENT</small></div></div>
      </div>
    </section>

    <footer className="an-footer"><Sprig className="an-footer-sprig"/><span className="an-label">RYŪMA / DESIGN ANATOMY</span><h2>Art is in the<br/><i>details.</i></h2><p>Observe the line. Understand the form. Compose with intention.</p><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Back to Design Library</button><small>ART NOUVEAU / DESIGN STUDY</small></footer>
  </main>;
}
