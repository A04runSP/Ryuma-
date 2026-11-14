import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowDown, ArrowUpRight, Copy, Check, RotateCcw, Menu, X, Download } from 'lucide-react';
import './constructivism-style.css';

const principles = [
  ['01','Construction','Forms are assembled from basic geometric elements rather than decorated surfaces.'],
  ['02','Dynamic composition','Diagonals, scale shifts and directional forces create movement and tension.'],
  ['03','Functional typography','Type becomes an active structural element that organises information.'],
  ['04','Material honesty','Industrial materials, production methods and construction logic shape the visual result.'],
  ['05','Photomontage','Photography and graphic forms combine to communicate complex ideas with impact.'],
  ['06','Social purpose','Design is connected to communication, collective life and practical use.'],
];
const timeline = [
  ['1913–17','Early experiments','Russian avant-garde artists challenge academic conventions and explore abstraction, material and construction.'],
  ['1919','Constructivist turn','Artists increasingly frame creative work as construction, production and social practice.'],
  ['1920','Working groups','The Institute of Artistic Culture and related debates sharpen the distinction between composition and construction.'],
  ['1922–25','Graphic language','Posters, books, photography, theatre and typography develop a forceful public visual language.'],
  ['Late 1920s','Wider influence','Constructivist ideas influence modern graphic design, architecture, photography and visual communication internationally.'],
];
const palette = [
  {name:'Signal red',hex:'#D52B1E',role:'Urgency, emphasis and directional energy'},
  {name:'Carbon black',hex:'#171717',role:'Structure, weight and high contrast'},
  {name:'Paper',hex:'#F1E5CC',role:'Warm working surface and negative space'},
  {name:'Concrete',hex:'#9C9A91',role:'Industrial secondary tone'},
  {name:'Ochre',hex:'#E6A928',role:'Secondary signal and measured emphasis'},
];
const studies = [
  {name:'Geometric force',kind:'FORM / CONSTRUCTION',mark:'▲',copy:'Circles, triangles, bars and planes are assembled into a deliberate visual system.'},
  {name:'Diagonal movement',kind:'DIRECTION / RHYTHM',mark:'╱',copy:'Strong diagonals create momentum, tension and a clear path through the composition.'},
  {name:'Typographic structure',kind:'TYPE / HIERARCHY',mark:'А',copy:'Letterforms carry information while acting as shapes within the overall layout.'},
  {name:'Photomontage',kind:'IMAGE / MESSAGE',mark:'▧',copy:'Photographic fragments and graphic geometry are layered to create a new visual statement.'},
];

function ConstructivistMark({className=''}) {
  return <svg className={className} viewBox="0 0 420 520" fill="none" aria-hidden="true">
    <circle cx="265" cy="180" r="150" fill="#D52B1E"/>
    <path d="M20 420L245 18L420 420H20Z" fill="#171717"/>
    <path d="M20 420L245 18L160 420H20Z" fill="#F1E5CC"/>
    <path d="M0 480L300 0H370L70 480H0Z" fill="#D52B1E"/>
    <path d="M240 520L420 210V520H240Z" fill="#9C9A91"/>
    <circle cx="265" cy="180" r="70" fill="#F1E5CC"/>
    <path d="M265 110V250M195 180H335" stroke="#171717" strokeWidth="8"/>
    <path d="M40 455H380" stroke="#171717" strokeWidth="9"/>
  </svg>;
}

function Shape({kind,fill='#D52B1E',className=''}) {
  if(kind==='circle') return <span className={'cv-shape cv-circle '+className} style={{background:fill}}/>;
  if(kind==='triangle') return <span className={'cv-shape cv-triangle '+className} style={{'--shape-fill':fill}}/>;
  if(kind==='bar') return <span className={'cv-shape cv-bar '+className} style={{background:fill}}/>;
  return <span className={'cv-shape cv-square '+className} style={{background:fill}}/>;
}

export default function ConstructivismStyle({onNavigate}) {
  const [activeStudy,setActiveStudy] = useState(0);
  const [selected,setSelected] = useState(palette[0]);
  const [headline,setHeadline] = useState('FORM\nFOLLOWS\nPURPOSE');
  const [shape,setShape] = useState('triangle');
  const [accent,setAccent] = useState('#D52B1E');
  const [angle,setAngle] = useState(24);
  const [showGrid,setShowGrid] = useState(true);
  const [mobileMenu,setMobileMenu] = useState(false);
  const [copied,setCopied] = useState(false);
  const lines = useMemo(()=>headline.split('\n').filter(Boolean).slice(0,3),[headline]);
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); setMobileMenu(false); };
  const copyHex = async()=>{try{await navigator.clipboard.writeText(selected.hex);setCopied(true);window.setTimeout(()=>setCopied(false),1400)}catch{setCopied(false)}};
  const reset=()=>{setHeadline('FORM\nFOLLOWS\nPURPOSE');setShape('triangle');setAccent('#D52B1E');setAngle(24);setShowGrid(true)};
  const exportPoster=()=>{
    const escaped=lines.map((line,i)=>'<text x="70" y="'+(590+i*115)+'" font-family="Arial,sans-serif" font-weight="900" font-size="88" letter-spacing="-2" fill="#F1E5CC">'+line.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</text>').join('');
    let geometry='';
    if(shape==='circle')geometry='<circle cx="780" cy="340" r="190" fill="'+accent+'"/>';
    if(shape==='triangle')geometry='<path d="M540 520L850 40L1060 520Z" fill="'+accent+'"/>';
    if(shape==='square')geometry='<rect x="610" y="150" width="360" height="360" fill="'+accent+'"/>';
    if(shape==='bar')geometry='<path d="M560 520L860 0H990L690 520Z" fill="'+accent+'"/>';
    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><rect width="1080" height="1350" fill="#171717"/>'+geometry+'<path d="M0 0H1080V90H0Z" fill="#F1E5CC"/><text x="60" y="60" font-family="Arial" font-weight="bold" font-size="26" letter-spacing="5" fill="#171717">RYŪMA / CONSTRUCTIVISM</text>'+escaped+'<text x="70" y="1230" font-family="Arial" font-size="25" letter-spacing="6" fill="#F1E5CC">ART / INDUSTRY / PEOPLE / DESIGN</text></svg>';
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));const a=document.createElement('a');a.href=url;a.download='ryuma-constructivist-poster.svg';a.click();URL.revokeObjectURL(url);
  };

  return <main className="cv-page">
    <header className="cv-nav">
      <button className="cv-brand" onClick={()=>onNavigate?.('library')}><b>RYŪMA</b><span>DESIGN ANATOMY</span></button>
      <button className="cv-menu" onClick={()=>setMobileMenu(v=>!v)} aria-label="Toggle section navigation" aria-expanded={mobileMenu}>{mobileMenu?<X size={20}/>:<Menu size={20}/>}</button>
      <nav className={mobileMenu?'cv-links is-open':'cv-links'} aria-label="Constructivism sections">
        {['cv-principles','cv-history','cv-studies','cv-type','cv-colour','cv-lab'].map((id,i)=><button key={id} onClick={()=>scrollTo(id)}>{['Principles','History','Studies','Typography','Palette','Lab'][i]}</button>)}
        <button className="cv-library" onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Library</button>
      </nav>
    </header>

    <section className="cv-hero">
      <div className="cv-hero-copy">
        <span className="cv-kicker"><i/> DESIGN MOVEMENTS / 1910s–1920s</span>
        <h1>CONSTRUC<span>T</span><br/>IVISM<span className="cv-period">.</span></h1>
        <div className="cv-hero-sub">DESIGN FOR A<br/><b>NEW SOCIETY</b></div>
        <p>A design movement that brought art, industry and social purpose into one language of geometry, typography and construction.</p>
        <div className="cv-hero-actions"><button className="cv-primary" onClick={()=>scrollTo('cv-principles')}>Explore anatomy <ArrowDown size={15}/></button><button className="cv-secondary" onClick={()=>scrollTo('cv-studies')}>View studies <ArrowUpRight size={15}/></button></div>
      </div>
      <div className="cv-hero-art"><ConstructivistMark className="cv-hero-mark"/><span className="cv-plate">PLATE 01 / GEOMETRIC CONSTRUCTION</span><span className="cv-art-number">01—06</span></div>
      <div className="cv-hero-strip"><span>FORM</span><i>×</i><span>FUNCTION</span><i>×</i><span>PRODUCTION</span><i>×</i><span>PURPOSE</span></div>
    </section>

    <section className="cv-thesis"><span className="cv-label">THE CENTRAL IDEA / 00</span><p>Design is not an ornament applied to an object. <strong>It is a structure built for a purpose.</strong></p><div className="cv-thesis-mark"><Shape kind="triangle"/><Shape kind="bar" fill="#171717"/></div></section>

    <section className="cv-principles" id="cv-principles">
      <div className="cv-section-head"><span className="cv-label">01 / DESIGN ANATOMY</span><h2>Six principles.<br/><i>Built with intent.</i></h2><p>Constructivism asks what a design does, how it is made and who it serves.</p></div>
      <div className="cv-principle-list">{principles.map(([n,title,copy])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={16}/></article>)}</div>
    </section>

    <section className="cv-history" id="cv-history">
      <div className="cv-section-head"><span className="cv-label">02 / HISTORICAL CONTEXT</span><h2>Art into<br/><i>production.</i></h2><p>A short timeline through the movement's emergence, debates and expansion into public visual communication.</p></div>
      <div className="cv-timeline">{timeline.map(([date,title,copy])=><article key={date}><span>{date}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="cv-studies" id="cv-studies">
      <div className="cv-section-head"><span className="cv-label">03 / VISUAL ANATOMY</span><h2>Understand<br/><i>the construction.</i></h2><p>Select a visual device to see how it shapes the message and the reading order.</p></div>
      <div className="cv-study-grid">{studies.map((s,i)=><button key={s.name} className={activeStudy===i?'cv-study is-active':'cv-study'} onClick={()=>setActiveStudy(i)} aria-pressed={activeStudy===i}><span className="cv-study-mark">{s.mark}</span><small>{s.kind}</small><b>{s.name}</b><span className="cv-study-number">0{i+1}</span></button>)}</div>
      <div className="cv-study-detail"><span>SELECTED DEVICE / 0{activeStudy+1}</span><h3>{studies[activeStudy].name}</h3><p>{studies[activeStudy].copy}</p></div>
    </section>

    <section className="cv-type" id="cv-type">
      <div className="cv-section-head"><span className="cv-label">04 / TYPOGRAPHY</span><h2>Type as<br/><i>structure.</i></h2><p>Heavy sans-serif letterforms, compact line spacing and strong scale changes make information immediate and unmistakable.</p></div>
      <div className="cv-type-specimen"><span>DISPLAY STUDY / CONSTRUCTIVIST GROTESK</span><strong>АБВГД<br/>12345</strong><div>FORM / FUNCTION / FUTURE</div><small>LOUD DISPLAY · CLEAR INFORMATION · HARD EDGES</small></div>
      <div className="cv-type-notes"><span>01 / BOLD DISPLAY</span><span>02 / FUNCTIONAL LABELS</span><span>03 / SCALE CONTRAST</span></div>
    </section>

    <section className="cv-colour" id="cv-colour">
      <div className="cv-section-head"><span className="cv-label">05 / COLOUR SYSTEM</span><h2>Signals, not<br/><i>decoration.</i></h2><p>A compact palette uses high contrast and a small number of deliberate signals. Select a swatch to inspect its role.</p></div>
      <div className="cv-palette">
        <div className="cv-swatches">{palette.map(c=><button key={c.name} className={selected.name===c.name?'cv-swatch is-active':'cv-swatch'} onClick={()=>{setSelected(c);setCopied(false)}} aria-pressed={selected.name===c.name}><span style={{background:c.hex}}/><b>{c.name}</b><small>{c.hex}</small></button>)}</div>
        <div className="cv-colour-preview" style={{background:selected.hex,color:selected.name==='Paper'?'#171717':'#F1E5CC'}}><span>LIVE COLOUR / {selected.name.toUpperCase()}</span><strong>MAKE<br/>IT CLEAR.</strong><p>{selected.role}</p><button onClick={copyHex}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'COPIED':'COPY HEX'}</button></div>
      </div>
    </section>

    <section className="cv-applications">
      <div className="cv-section-head"><span className="cv-label">06 / APPLICATIONS</span><h2>Design for<br/><i>the world.</i></h2><p>Constructivist ideas crossed the boundary between art and everyday life.</p></div>
      <div className="cv-application-grid">
        <article><div className="cv-app-poster"><span>PRINT / 1920s</span><b>WORK<br/><i>TOGETHER</i></b><Shape kind="triangle" fill="#D52B1E"/></div><h3>Posters & publications</h3><p>Public messages built from direct language, strong hierarchy and geometric force.</p></article>
        <article><div className="cv-app-architecture"><span>ARCHITECTURE / FORM</span><div className="cv-building"><i/><i/><i/><b/></div></div><h3>Architecture & objects</h3><p>Structure, material and production become visible parts of the design.</p></article>
        <article><div className="cv-app-photo"><span>PHOTOGRAPHY / MONTAGE</span><div className="cv-photo-disc"/><b>IMAGE<br/>+ TYPE</b></div><h3>Photography & theatre</h3><p>Images, performance and typography combine to communicate with energy.</p></article>
      </div>
    </section>

    <section className="cv-lab" id="cv-lab">
      <div className="cv-section-head"><span className="cv-label">07 / COMPOSITION LAB</span><h2>Build the<br/><i>message.</i></h2><p>Assemble a poster from basic forms. Adjust the headline, shape, signal colour and angle, then export an SVG study.</p></div>
      <div className="cv-lab-layout">
        <div className="cv-lab-controls">
          <label className="cv-field">YOUR HEADLINE<textarea value={headline} onChange={e=>setHeadline(e.target.value)} maxLength={72} rows={3}/></label>
          <div className="cv-field"><span>PRIMARY GEOMETRY</span><div className="cv-choice-row">{['triangle','circle','square','bar'].map(s=><button key={s} className={shape===s?'is-active':''} onClick={()=>setShape(s)}>{s}</button>)}</div></div>
          <div className="cv-field"><span>SIGNAL COLOUR</span><div className="cv-colour-choices">{['#D52B1E','#171717','#E6A928','#9C9A91'].map(c=><button key={c} className={accent===c?'is-active':''} style={{background:c}} onClick={()=>setAccent(c)} aria-label={'Select '+c}/>)}</div></div>
          <label className="cv-field cv-range">DIAGONAL ANGLE <strong>{angle}°</strong><input type="range" min="0" max="60" value={angle} onChange={e=>setAngle(Number(e.target.value))}/></label>
          <label className="cv-toggle"><input type="checkbox" checked={showGrid} onChange={e=>setShowGrid(e.target.checked)}/><span>Show construction grid</span></label>
          <div className="cv-lab-actions"><button onClick={reset}><RotateCcw size={14}/> Reset</button><button className="cv-export" onClick={exportPoster}><Download size={14}/> Export SVG</button></div>
        </div>
        <div className="cv-poster-preview"><div className={'cv-poster-frame '+(showGrid?'has-grid':'')}><span>RYŪMA / CONSTRUCTIVISM</span><div className="cv-poster-geometry" style={{'--cv-accent':accent,'--cv-angle':angle+'deg'}}><Shape kind={shape} fill={accent}/></div><strong>{lines.map((line,i)=><i key={i}>{line}</i>)}</strong><small>ART / INDUSTRY / PEOPLE / DESIGN</small></div></div>
      </div>
    </section>

    <footer className="cv-footer"><span className="cv-label">RYŪMA / DESIGN ANATOMY</span><div className="cv-footer-bars"><i/><i/><i/></div><h2>ART / INDUSTRY<br/><i>PEOPLE / DESIGN</i></h2><p>Build with purpose. Communicate with clarity.</p><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Back to Design Library</button><small>CONSTRUCTIVISM / DESIGN STUDY</small></footer>
  </main>;
}
