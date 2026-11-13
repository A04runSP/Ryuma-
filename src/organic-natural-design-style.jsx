import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, RotateCcw, Menu } from 'lucide-react';
import './organic-natural-design-style.css';
import './organic-natural-design-v2.css';
import './organic-composition.css';
import './organic-visual-families.css';
import './organic-family-layout.css';
import './organic-redesign.css';

const palette = [
  {name:'Forest',hex:'#203D2B',role:'Grounding · depth'},
  {name:'Moss',hex:'#65784B',role:'Growth · accent'},
  {name:'Sage',hex:'#A8B69A',role:'Quiet · balance'},
  {name:'Paper',hex:'#F3EBDD',role:'Light · space'},
  {name:'Terracotta',hex:'#B96646',role:'Warmth · focus'},
  {name:'Pollen',hex:'#D9B85F',role:'Light · detail'},
  {name:'Clay',hex:'#B58B7A',role:'Soft neutral'},
  {name:'Stone',hex:'#B8B0A0',role:'Structure · calm'}
];
const studies = [
  {no:'01',name:'Botanical editorial',kind:'Editorial',copy:'Image-led storytelling, considered type and open page structure.',img:'https://uploads-ssl.webflow.com/6444c7203a4d012f0ef8ebf1/6461496e0d088515372dfeff_ForgottenFruitsMagazine_Hero-p-1600.jpg'},
  {no:'02',name:'Specimen study',kind:'Research',copy:'A single subject treated with care, labels and supporting notes.',img:'https://inspgr.id/app/uploads/2019/07/design-herbaria-05.jpg'},
  {no:'03',name:'Living forms',kind:'Photography',copy:'Natural detail becomes the visual anchor, not a decorative extra.',img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eba76c31722519.565df12569da4.jpg'},
  {no:'04',name:'Material & texture',kind:'Material',copy:'Paper, pigment and surface bring warmth to a clear grid.',img:'https://images.squarespace-cdn.com/content/v1/56c4faa64c2f8515529c78be/7a50c06a-fc97-4429-910b-0a0323e7c9ee/magmockup01.jpg'}
];
const rules = [
  ['01','Observe before styling','Start with the character of the subject: its shape, texture, scale and context.'],
  ['02','Let the grid hold the irregularity','A stable layout gives expressive images and forms room to breathe.'],
  ['03','Use type as an editorial voice','Pair a distinctive display face with a neutral, readable text system.'],
  ['04','Make imagery do real work','Use photographs, specimens and diagrams to explain—not merely decorate.'],
  ['05','Keep the details quiet','Labels, rules and colour accents should guide the reader without competing.']
];

export default function OrganicNaturalDesignStyle({onNavigate}) {
  const [activeStudy,setActiveStudy] = useState(0);
  const [selected,setSelected] = useState(palette[0]);
  const [paletteMode,setPaletteMode] = useState('Field palette');
  const [copied,setCopied] = useState(false);
  const [typeRole,setTypeRole] = useState('Display');
  const [typeSize,setTypeSize] = useState(64);
  const [typeWeight,setTypeWeight] = useState('Regular');
  const [brandView,setBrandView] = useState('Packaging');
  const [mobileMenu,setMobileMenu] = useState(false);
  const typeText = useMemo(()=>({Display:'A slower kind of looking.',Heading:'Nature is full of structure.',Body:'Good design notices the small details, then gives them space to matter.',Caption:'FIELD NOTES · FORM · MATERIAL'})[typeRole],[typeRole]);
  const activePalette = paletteMode==='Warm study' ? ['#B96646','#D9B85F','#F3EBDD','#203D2B'] : paletteMode==='Quiet study' ? ['#A8B69A','#B8B0A0','#F3EBDD','#65784B'] : [selected.hex,'#65784B','#F3EBDD','#B96646'];
  const copyHex = async()=>{try{await navigator.clipboard.writeText(selected.hex);setCopied(true);window.setTimeout(()=>setCopied(false),1400)}catch{setCopied(false)}};
  const scrollTo=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});setMobileMenu(false)};
  return <main className="ry-organic ry-redesign" style={{'--specimen-colour':selected.hex}}>
    <header className="or-nav">
      <button className="or-brand" onClick={()=>onNavigate?.('library')}><b>RYŪMA</b><span>DESIGN ANATOMY / FIELD STUDIES</span></button>
      <nav className={mobileMenu?'or-links is-open':'or-links'} aria-label="Organic design sections">{[['Overview','or-hero'],['Approach','or-approach'],['Studies','or-studies'],['Colour','or-colour'],['Typography','or-type'],['Applications','or-application'],['Principles','or-principles']].map(([label,id])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}</nav>
      <button className="or-back" onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Library</button>
      <button className="or-menu" onClick={()=>setMobileMenu(v=>!v)} aria-label="Toggle section navigation" aria-expanded={mobileMenu}><Menu size={19}/></button>
    </header>

    <section className="or-hero" id="or-hero">
      <div className="or-hero-meta"><span>DESIGN LANGUAGE / 06</span><span>01 — 07</span></div>
      <div className="or-hero-copy">
        <p className="or-eyebrow">THE NATURAL WORLD, OBSERVED</p>
        <h1>Organic<br/><i>& Natural</i><br/>Design.</h1>
        <p className="or-deck">A visual language shaped by living forms, material character and the quiet rhythm of nature.</p>
        <button className="or-primary" onClick={()=>scrollTo('or-approach')}>Explore the language <ArrowDownIcon/></button>
      </div>
      <figure className="or-hero-image">
        <img src="https://uploads-ssl.webflow.com/6444c7203a4d012f0ef8ebf1/6461496e0d088515372dfeff_ForgottenFruitsMagazine_Hero-p-1600.jpg" alt="Botanical editorial magazine with illustrated plant studies"/>
        <figcaption><span>FIG. 01</span><span>THE FIELD JOURNAL / VISUAL REFERENCE</span></figcaption>
      </figure>
      <div className="or-hero-foot"><span>OBSERVE / COLLECT / COMPOSE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="or-approach" id="or-approach">
      <div className="or-section-label"><span>01 / THE APPROACH</span><span>FORM FOLLOWS LIFE</span></div>
      <div className="or-approach-grid">
        <h2>Not decoration.<br/><i>A way of seeing.</i></h2>
        <div className="or-approach-copy"><p>Organic design looks to the natural world for its visual logic. It finds character in irregular forms, asymmetry, growth, texture and variation.</p><p>Structure still matters. A deliberate grid, clear hierarchy and measured use of space let the natural elements speak without turning the page into noise.</p></div>
      </div>
      <div className="or-principle-strip">{[['01','Observe','Look closely at the subject.'],['02','Interpret','Find its visual character.'],['03','Compose','Build a clear, human layout.']].map(([n,t,c])=><article key={n}><span>{n}</span><b>{t}</b><small>{c}</small></article>)}</div>
    </section>

    <section className="or-studies" id="or-studies">
      <div className="or-section-label"><span>02 / VISUAL STUDIES</span><span>SELECT A STUDY TO EXPLORE</span></div>
      <div className="or-heading-row"><h2>Four ways to<br/><i>read nature.</i></h2><p>Different visual approaches, connected by observation, restraint and a strong editorial structure.</p></div>
      <div className="or-study-grid">{studies.map((s,i)=><button className={activeStudy===i?'or-study is-active':'or-study'} key={s.no} onClick={()=>setActiveStudy(i)} aria-pressed={activeStudy===i}><div className="or-study-image"><img src={s.img} alt=""/></div><div className="or-study-meta"><span>{s.no} / {s.kind}</span><ArrowRight size={15}/></div><h3>{s.name}</h3><p>{s.copy}</p></button>)}</div>
      <div className="or-study-detail"><span>SELECTED STUDY / {studies[activeStudy].no}</span><strong>{studies[activeStudy].name}</strong><p>{studies[activeStudy].copy} Study the relationship between image scale, typography, whitespace and supporting information.</p></div>
    </section>

    <section className="or-colour" id="or-colour">
      <div className="or-section-label"><span>03 / COLOUR FIELD</span><span>EARTH / LEAF / LIGHT</span></div>
      <div className="or-colour-layout">
        <div><h2>Colour from<br/><i>the ground up.</i></h2><p>A grounded palette built from forest depth, muted foliage, warm paper and small moments of pigment.</p><div className="or-palette-modes">{['Field palette','Warm study','Quiet study'].map(m=><button key={m} className={paletteMode===m?'is-active':''} onClick={()=>setPaletteMode(m)}>{m}</button>)}</div></div>
        <div className="or-palette-panel"><div className="or-swatch-row">{palette.map(c=><button key={c.name} className={selected.name===c.name?'or-swatch is-active':'or-swatch'} onClick={()=>{setSelected(c);setPaletteMode('Field palette');setCopied(false)}} aria-label={'Select '+c.name+' '+c.hex}><span style={{background:c.hex}}/ ><b>{c.name}</b><small>{c.hex}</small></button>)}</div><div className="or-colour-preview" style={{background:selected.hex,color:['#203D2B','#65784B'].includes(selected.hex)?'#F3EBDD':'#203D2B'}}><span>LIVE COLOUR STUDY / {selected.name.toUpperCase()}</span><strong>Nature<br/><i>in balance.</i></strong><div><small>{selected.role}</small><button onClick={copyHex}>{copied?<Check size={13}/>:<Copy size={13}/>} {copied?'COPIED':'COPY HEX'}</button></div></div><p className="or-palette-note">Select a swatch to update the live study. Palette modes show alternate combinations.</p></div>
      </div>
    </section>

    <section className="or-type" id="or-type">
      <div className="or-section-label"><span>04 / TYPOGRAPHY</span><span>VOICE / SCALE / RHYTHM</span></div>
      <div className="or-type-grid"><div><h2>Words with<br/><i>room to grow.</i></h2><p>Expressive serif typography gives the specimen its editorial voice. A neutral sans-serif keeps navigation, labels and longer explanations readable.</p><div className="or-type-tags"><span>DISPLAY SERIF</span><span>EDITORIAL SANS</span><span>FIELD LABELS</span></div></div><div className="or-type-lab"><div className="or-type-stage"><span>TYPE SPECIMEN / {typeRole.toUpperCase()}</span><div style={{fontSize:`clamp(30px, ${typeSize/10}vw, ${typeSize}px)`,fontStyle:typeWeight==='Italic'?'italic':'normal',fontWeight:typeWeight==='Bold'?700:400}}>{typeText}</div></div><div className="or-type-controls"><div>{['Display','Heading','Body','Caption'].map(r=><button key={r} className={typeRole===r?'is-active':''} onClick={()=>setTypeRole(r)}>{r}</button>)}</div><label>SIZE <input type="range" min="24" max="88" step="2" value={typeSize} onChange={e=>setTypeSize(Number(e.target.value))}/><b>{typeSize}px</b></label><div className="or-weight">WEIGHT {['Regular','Italic','Bold'].map(w=><button key={w} className={typeWeight===w?'is-active':''} onClick={()=>setTypeWeight(w)}>{w}</button>)}</div><button className="or-reset" onClick={()=>{setTypeRole('Display');setTypeSize(64);setTypeWeight('Regular')}}><RotateCcw size={13}/> Reset specimen</button></div></div></div>
    </section>

    <section className="or-application" id="or-application">
      <div className="or-section-label"><span>05 / IN USE</span><span>ONE LANGUAGE / MANY CONTEXTS</span></div>
      <div className="or-heading-row"><h2>From the page<br/><i>to the world.</i></h2><p>Organic principles can shape a publication, a product experience or a physical environment. The expression changes; the visual logic stays coherent.</p></div>
      <div className="or-app-tabs">{['Packaging','Digital','Editorial','Environment'].map(v=><button key={v} className={brandView===v?'is-active':''} onClick={()=>setBrandView(v)}>{v}<ArrowRight size={14}/></button>)}</div>
      <div className="or-app-showcase"><div className="or-app-photo"><img src={brandView==='Editorial'?studies[1].img:brandView==='Environment'?studies[2].img:studies[0].img} alt={brandView+' organic design reference'}/><span>{brandView.toUpperCase()} / APPLICATION STUDY</span></div><div className="or-app-copy"><span>APPLICATION / 0{['Packaging','Digital','Editorial','Environment'].indexOf(brandView)+1}</span><h3>{brandView==='Packaging'?'A tactile first impression.':brandView==='Digital'?'A calmer digital space.':brandView==='Editorial'?'A story worth exploring.':'A place shaped by nature.'}</h3><p>Use considered materials, clear hierarchy and natural visual references to make the experience feel connected and intentional.</p><div className="or-app-swatches">{activePalette.map((c,i)=><i key={i} style={{background:c}}/>)}</div><button onClick={()=>setBrandView(v=>{const a=['Packaging','Digital','Editorial','Environment'];return a[(a.indexOf(v)+1)%a.length]})}>Next application <ArrowRight size={14}/></button></div></div>
    </section>

    <section className="or-principles" id="or-principles">
      <div className="or-section-label"><span>06 / DESIGN PRINCIPLES</span><span>A PRACTICAL CHECKLIST</span></div>
      <div className="or-principles-layout"><h2>Keep it<br/><i>alive. Keep it clear.</i></h2><div className="or-rule-list">{rules.map(([n,t,c])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div><b>↗</b></article>)}</div></div>
    </section>
    <footer className="or-footer"><div><span>RYŪMA / DESIGN ANATOMY</span><h2>Look closer.<br/><i>Design better.</i></h2><p>Organic / Natural Design — a study in form, material and visual rhythm.</p></div><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> Back to Design Library</button><small>END OF FIELD STUDY / 06</small></footer>
  </main>;
}
function ArrowDownIcon(){return <ArrowRight size={16}/>}
