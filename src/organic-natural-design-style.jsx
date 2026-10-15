import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, RotateCcw, Leaf, Menu } from 'lucide-react';
import './organic-natural-design-style.css';

const photos = {
  hero: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1800&q=90',
  form: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=88',
  botany: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=88',
  texture: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=900&q=88',
  colour: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=88',
  rhythm: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=88',
  brand: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1400&q=90',
  stone: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=88'
};
const palette = [
  {name:'Forest',hex:'#203D2B',role:'Anchor · depth'},
  {name:'Moss',hex:'#65784B',role:'Natural accent'},
  {name:'Sage',hex:'#A8B69A',role:'Quiet surface'},
  {name:'Ivory',hex:'#F3EBDD',role:'Paper · space'},
  {name:'Terracotta',hex:'#B96646',role:'Warm focal point'},
  {name:'Pollen',hex:'#D9B85F',role:'Small highlights'},
  {name:'Clay',hex:'#B58B7A',role:'Soft neutral'},
  {name:'Stone',hex:'#B8B0A0',role:'Grounding neutral'}
];
const studies = [
  {name:'Form',no:'01',image:photos.form,copy:'Soft curves, irregular silhouettes and gentle transitions make interfaces feel grown rather than engineered.',detail:'Let a shape feel discovered. Use asymmetry, rounded edges and natural variation, then balance it with a clear grid.'},
  {name:'Botany',no:'02',image:photos.botany,copy:'Leaves, stems and organic structures become part of the visual language.',detail:'Use botanical imagery as structure, not filler. Let the crop, direction and scale guide the eye through the page.'},
  {name:'Texture',no:'03',image:photos.texture,copy:'Paper, bark, stone and grain introduce a tactile physical layer.',detail:'A little material texture can soften a digital surface. Keep detail subtle enough that text and controls remain crisp.'},
  {name:'Colour',no:'04',image:photos.colour,copy:'Earth, plant, clay and sky tones create warmth without relying on green alone.',detail:'Build from a stable dark, a warm paper and a small set of living accents. Reserve the strongest colour for meaningful moments.'},
  {name:'Rhythm',no:'05',image:photos.rhythm,copy:'Variation in scale, crop and spacing creates a natural reading rhythm.',detail:'Alternate density and breathing room. Repetition creates coherence; variation makes the system feel alive.'}
];
const rules = [
  ['01','Work with natural forms','Use curves, irregular silhouettes and gentle transitions—not a grid of identical boxes.'],
  ['02','Let texture stay tactile','Bring in paper, bark, stone and grain with restraint.'],
  ['03','Ground the palette','Pair botanical greens with warm neutrals and one earthy focal accent.'],
  ['04','Create rhythm through variation','Shift scale, crop and spacing while keeping a clear hierarchy.'],
  ['05','Design for human experience','Keep contrast, legibility and interaction ahead of decoration.']
];
function Sprig({className=''}) { return <svg className={`ry-sprig ${className}`} viewBox="0 0 160 220" fill="none" aria-hidden="true"><path d="M22 204C52 151 82 95 125 14" stroke="currentColor" strokeWidth="2"/><path d="M44 166C13 165 5 146 11 130C31 133 46 146 44 166Z" fill="currentColor"/><path d="M60 135C29 128 25 107 34 93C54 102 66 117 60 135Z" fill="currentColor" opacity=".8"/><path d="M77 103C52 91 52 72 63 60C80 72 86 88 77 103Z" fill="currentColor"/><path d="M94 73C80 53 88 37 103 30C113 48 109 64 94 73Z" fill="currentColor" opacity=".76"/><path d="M56 145C69 119 88 112 103 121C93 140 76 150 56 145Z" fill="currentColor" opacity=".65"/><path d="M78 110C93 85 112 80 125 91C112 109 95 116 78 110Z" fill="currentColor" opacity=".82"/><path d="M100 70C118 49 136 50 146 63C131 78 114 82 100 70Z" fill="currentColor" opacity=".7"/></svg> }
function Flower({className=''}) { return <svg className={`ry-flower ${className}`} viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><ellipse cx="50" cy="22" rx="10" ry="22"/><ellipse cx="78" cy="38" rx="10" ry="22" transform="rotate(55 78 38)"/><ellipse cx="72" cy="70" rx="10" ry="22" transform="rotate(110 72 70)"/><ellipse cx="28" cy="70" rx="10" ry="22" transform="rotate(-110 28 70)"/><ellipse cx="22" cy="38" rx="10" ry="22" transform="rotate(-55 22 38)"/></g><circle cx="50" cy="50" r="11" fill="#D9B85F"/></svg> }
export default function OrganicNaturalDesignStyle({onNavigate}) {
  const [activeStudy,setActiveStudy] = useState(0);
  const [selected,setSelected] = useState(palette[0]);
  const [copied,setCopied] = useState(false);
  const [typeRole,setTypeRole] = useState('Display');
  const [typeSize,setTypeSize] = useState(64);
  const [typeWeight,setTypeWeight] = useState('Regular');
  const [brandView,setBrandView] = useState('Packaging');
  const [mobileMenu,setMobileMenu] = useState(false);
  const typeText = useMemo(()=>({Display:'A natural voice.',Heading:'Good things grow slowly.',Body:'Design should feel as natural as the world around it.',Caption:'FORM · BOTANY · TEXTURE'})[typeRole],[typeRole]);
  const copyHex = async () => { try { await navigator.clipboard.writeText(selected.hex); setCopied(true); window.setTimeout(()=>setCopied(false),1500); } catch { setCopied(false); } };
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); setMobileMenu(false); };
  return <main className="ry-organic" style={{'--ry-selected':selected.hex}}>
    <header className="ry-nav">
      <button className="ry-wordmark" onClick={()=>onNavigate?.('library')} aria-label="Back to design library"><span>RYŪMA</span><small>DESIGN ANATOMY</small></button>
      <nav className={mobileMenu?'ry-nav-links is-open':'ry-nav-links'} aria-label="Organic design sections">{[['Overview','ry-hero'],['Studies','ry-studies'],['Colour','ry-colour'],['Typography','ry-type'],['Practice','ry-practice'],['Rules','ry-rules']].map(([label,id])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}</nav>
      <button className="ry-library-link" onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> <span>Library</span></button>
      <button className="ry-menu-toggle" onClick={()=>setMobileMenu(v=>!v)} aria-label="Toggle navigation"><Menu size={19}/></button>
    </header>

    <section className="ry-hero" id="ry-hero">
      <div className="ry-hero-copy">
        <span className="ry-kicker"><i/> 08 / 12 · EXPRESSIVE</span>
        <h1>Organic /<br/><em>Natural</em><br/>Design</h1>
        <p className="ry-hero-lead">Design that grows instead of being constructed.</p>
        <p className="ry-hero-body">A living visual experience inspired by nature’s forms, textures and rhythms — to create human, warm and harmonious experiences.</p>
        <div className="ry-hero-actions"><button className="ry-pill-button" onClick={()=>scrollTo('ry-studies')}>Explore elements <ArrowRight size={16}/></button><span>↓ &nbsp; SCROLL TO EXPLORE</span></div>
        <span className="ry-hero-index">FIELD NOTE / 01</span>
      </div>
      <div className="ry-hero-art">
        <div className="ry-sun-disc"/><div className="ry-terra-shape"/><img src={photos.hero} alt="Layered tropical leaves with natural texture"/>
        <div className="ry-hero-art-note"><span>BOTANICAL STUDY</span><span>FORM · LIGHT · GROWTH</span></div><Sprig className="ry-hero-sprig"/>
      </div>
      <div className="ry-side-notes"><span>FORMS</span><span>TEXTURES</span><span>COLOURS</span><span>RHYTHMS</span><span>PEOPLE</span><b>01 — 06</b></div>
    </section>

    <section className="ry-studies" id="ry-studies">
      <div className="ry-studies-intro"><span className="ry-kicker">02 / 06 · THE ANATOMY</span><h2>Anatomy<br/><em>of Nature</em></h2><p>Five visual studies. Select a specimen and explore how nature informs design.</p><button className="ry-light-button" onClick={()=>scrollTo('ry-study-detail')}>Explore studies <ArrowRight size={15}/></button></div>
      <div className="ry-study-cards">{studies.map((study,i)=><button key={study.no} className={activeStudy===i?'ry-study-card is-active':'ry-study-card'} onClick={()=>{setActiveStudy(i);scrollTo('ry-study-detail')}} aria-pressed={activeStudy===i}><img src={study.image} alt={study.name+' specimen'}/><span className="ry-study-number">{study.no}</span><strong>{study.name}</strong><small>{study.copy}</small><span className="ry-study-arrow"><ArrowRight size={14}/></span></button>)}</div>
      <div className="ry-study-detail" id="ry-study-detail" aria-live="polite"><span>ACTIVE SPECIMEN / {studies[activeStudy].no}</span><div><h3>{studies[activeStudy].name}</h3><p>{studies[activeStudy].detail}</p></div><button onClick={()=>setActiveStudy(v=>(v+1)%studies.length)}>Next specimen <ArrowRight size={14}/></button></div>
    </section>

    <section className="ry-colour" id="ry-colour">
      <div className="ry-colour-heading"><span className="ry-kicker">03 / 06 · COLOUR SYSTEM</span><h2>The Colour<br/><em>Garden</em></h2><p>Choose a living colour, explore combinations and see the palette change a composition in real time.</p><div className="ry-palette-modes"><span>SINGLE</span><span>HARMONY</span><span>BRAND</span><span>CUSTOM</span></div></div>
      <div className="ry-palette-grid">{palette.map(c=><button key={c.name} className={selected.name===c.name?'ry-swatch is-selected':'ry-swatch'} onClick={()=>{setSelected(c);setCopied(false)}} aria-pressed={selected.name===c.name} aria-label={`Select ${c.name} ${c.hex}`}><span className="ry-swatch-colour" style={{background:c.hex}}>{selected.name===c.name&&<Check size={17}/>}</span><strong>{c.name}</strong><small>{c.hex}</small></button>)}</div>
      <div className="ry-live-preview" style={{background:selected.hex,color:['#203D2B','#65784B'].includes(selected.hex)?'#F3EBDD':'#203D2B'}}><span>LIVE COMPOSITION / COLOUR {palette.findIndex(c=>c.name===selected.name)+1}</span><h3>Good things<br/><em>grow slowly.</em></h3><p>Nature-inspired design<br/>for a calmer, more human experience.</p><div className="ry-preview-bottom"><span>{selected.name} · {selected.hex}</span><button onClick={copyHex}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'COPIED':'COPY COLOUR'}</button></div><Sprig/></div>
      <div className="ry-colour-note"><span className="ry-note-dot" style={{background:selected.hex}}/><div><strong>{selected.name} / {selected.role}</strong><p>Selected colour updates the preview instantly. Copy its exact HEX value for your next design.</p></div><button onClick={()=>{setSelected(palette[0]);setCopied(false)}}><RotateCcw size={14}/> Reset</button></div>
    </section>

    <section className="ry-type" id="ry-type">
      <div className="ry-type-copy"><span className="ry-kicker">04 / 06 · TYPOGRAPHY</span><h2>Type That<br/><em>Grows.</em></h2><p>A refined serif carries the human, crafted feeling. A clean sans-serif keeps the interface clear and contemporary.</p><div className="ry-type-tags"><span>DISPLAY SERIF</span><span>BODY SANS</span><span>UTILITY LABELS</span></div></div>
      <div className="ry-type-lab"><div className="ry-type-stage"><span>TYPE SPECIMEN / {typeRole.toUpperCase()}</span><div className="ry-type-preview" style={{fontSize:`clamp(30px, ${typeSize/10}vw, ${typeSize}px)`,fontStyle:typeWeight==='Italic'?'italic':'normal',fontWeight:typeWeight==='Bold'?700:400}}>{typeText}</div><Sprig/></div><div className="ry-type-controls"><div className="ry-type-tabs">{['Display','Heading','Body','Caption'].map(role=><button key={role} className={typeRole===role?'is-active':''} onClick={()=>setTypeRole(role)}>{role}</button>)}</div><label className="ry-range-row"><span>SIZE</span><input type="range" min="24" max="88" step="2" value={typeSize} onChange={e=>setTypeSize(Number(e.target.value))}/><b>{typeSize}px</b></label><div className="ry-weight-row"><span>WEIGHT</span>{['Regular','Italic','Bold'].map(w=><button key={w} className={typeWeight===w?'is-active':''} onClick={()=>setTypeWeight(w)}>{w}</button>)}</div><button className="ry-reset-type" onClick={()=>{setTypeRole('Display');setTypeSize(64);setTypeWeight('Regular')}}><RotateCcw size={13}/> Reset specimen</button></div></div>
    </section>

    <section className="ry-practice" id="ry-practice">
      <div className="ry-practice-heading"><span className="ry-kicker">05 / 06 · APPLIED DESIGN</span><h2>Nature in<br/><em>Practice.</em></h2><p>One visual language applied across packaging, digital interfaces and editorial materials.</p><div className="ry-practice-tabs">{['Packaging','Digital','Editorial','Environmental'].map(v=><button key={v} className={brandView===v?'is-active':''} onClick={()=>setBrandView(v)}>{v}<ArrowRight size={13}/></button>)}</div></div>
      <div className="ry-brand-composition"><div className="ry-brand-photo" style={{backgroundImage:`linear-gradient(0deg,rgba(15,39,28,.4),transparent 45%),url(${brandView==='Packaging'?photos.brand:brandView==='Digital'?photos.hero:brandView==='Editorial'?photos.texture:photos.stone})`}}><span>{brandView.toUpperCase()} / FIELD STUDY 01</span><div><small>ALVORA · NATURAL CARE</small><h3>{brandView==='Digital'?'Rooted in balance.':brandView==='Editorial'?'A slower kind of living.':brandView==='Environmental'?'Made of the earth.':'Good Things Grow Here.'}</h3></div></div><div className="ry-brand-side"><span>APPLICATION / {brandView.toUpperCase()}</span><h3>Rooted<br/><em>in balance.</em></h3><p>Natural materials, considered typography and a grounded palette make one recognisable system.</p><div className="ry-brand-swatches">{palette.slice(0,5).map(c=><i key={c.name} style={{background:c.hex}} title={c.name}/>)}</div><button onClick={()=>setBrandView(v=>{const a=['Packaging','Digital','Editorial','Environmental'];return a[(a.indexOf(v)+1)%a.length]})}>Next application <ArrowRight size={14}/></button></div></div>
    </section>

    <section className="ry-rules" id="ry-rules">
      <div className="ry-rules-heading"><span className="ry-kicker">06 / 06 · LIVING RULES</span><h2>The Living<br/><em>Rules</em></h2><p>Practical principles for creating organic, human and expressive designs.</p></div>
      <div className="ry-rule-list">{rules.map(([no,title,copy],i)=><article key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div><img src={[photos.form,photos.texture,photos.colour,photos.rhythm,photos.botany][i]} alt="" loading="lazy"/></article>)}</div>
      <div className="ry-rules-outro"><span>NATURE IS A PROCESS.<br/>NOT A PERFECT SHAPE.</span><div className="ry-outro-landscape"><img src={photos.stone} alt="Soft natural textures and foliage" loading="lazy"/><span/></div></div>
    </section>
    <footer className="ry-footer"><div><span className="ry-kicker">RYŪMA / DESIGN ANATOMY</span><h2>Design with<br/><em>a human touch.</em></h2><p>Not a leaf pasted onto a layout. A visual system inspired by the way nature grows.</p></div><button onClick={()=>onNavigate?.('library')}>Back to Design Library <ArrowLeft size={15}/></button><div className="ry-footer-meta"><span>FORM · BOTANY · TEXTURE · COLOUR · RHYTHM</span><span>ORGANIC / NATURAL DESIGN</span></div></footer>
  </main>;
}
