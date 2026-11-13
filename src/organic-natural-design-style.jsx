import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, RotateCcw, Menu } from 'lucide-react';
import './organic-natural-design-style.css';
import './organic-natural-design-v2.css';
import './organic-composition.css';

// Original vector artwork: illustrated botanical forms, never stock photography.
const makeArtwork = (kind) => {
  const palettes = {
    hero: ['#0C3328','#164A38','#F4E8C9','#D9A74D','#E8C7A0'],
    form: ['#143D30','#78916C','#E6CBA4','#C16A43','#F4E8C9'],
    botany: ['#173F31','#3D7250','#F4E8C9','#D8A64B','#A8B69A'],
    texture: ['#E8D8B9','#B9A58A','#514638','#D6BFA0','#F4E8C9'],
    colour: ['#E9DDC4','#C06B45','#D9A74D','#8B9B79','#163D30'],
    rhythm: ['#174233','#EBDCC0','#D8A64B','#A9B99B','#C56B48'],
    brand: ['#12392D','#1B4B39','#EADCC0','#D6A24B','#C16A43'],
    stone: ['#E8DDC7','#AFA48E','#637A60','#D7A34C','#F4E8C9']
  };
  const [bg,green,cream,gold,clay] = palettes[kind] || palettes.hero;
  const leaves = kind === 'texture' || kind === 'stone' ? '' : `
    <g stroke="${cream}" stroke-opacity=".55" stroke-width="1.5" fill="none">
      <path d="M110 440 C180 350 215 260 260 120"/>
      <path d="M194 302 C130 310 106 272 112 238 C162 240 195 263 194 302Z" fill="${green}"/>
      <path d="M222 240 C274 225 297 188 286 158 C247 170 220 201 222 240Z" fill="${gold}"/>
      <path d="M153 360 C98 351 75 318 87 288 C132 300 159 327 153 360Z" fill="${clay}"/>
      <path d="M247 172 C213 137 223 101 249 82 C276 113 273 146 247 172Z" fill="${green}"/>
      <path d="M181 319 C236 300 270 320 273 353 C232 368 199 352 181 319Z" fill="${green}"/>
      <path d="M265 142 C298 100 337 105 352 130 C324 158 291 164 265 142Z" fill="${clay}"/>
      <path d="M130 390 C92 408 64 391 58 366 C91 354 119 366 130 390Z" fill="${green}"/>
    </g>`;
  const flower = `<g transform="translate(320 118)" fill="${cream}" stroke="${gold}" stroke-width="1.2">
    <ellipse cy="-24" rx="10" ry="25"/><ellipse cx="23" cy="-7" rx="10" ry="25" transform="rotate(55 23 -7)"/><ellipse cx="15" cy="21" rx="10" ry="25" transform="rotate(115 15 21)"/><ellipse cx="-15" cy="21" rx="10" ry="25" transform="rotate(-115 -15 21)"/><ellipse cx="-23" cy="-7" rx="10" ry="25" transform="rotate(-55 -23 -7)"/><circle r="10" fill="${gold}"/>
  </g>`;
  const texture = kind === 'texture' || kind === 'stone' ? `
    <path d="M-20 320 L100 220 240 252 400 160 430 490 -20 490Z" fill="${green}" opacity=".95"/>
    <path d="M-20 360 L118 288 226 320 365 250 430 490 -20 490Z" fill="${clay}" opacity=".9"/>
    <path d="M40 110 Q100 70 150 115 T270 105 T420 100" fill="none" stroke="${gold}" stroke-width="2" opacity=".8"/>
    <g fill="${cream}" opacity=".6">${Array.from({length:42},(_,i)=>`<circle cx="${(i*47)%420}" cy="${(i*71)%440}" r="${i%3+1}"/>`).join('')}</g>` : '';
  const flowerBits = kind === 'botany' || kind === 'hero' || kind === 'rhythm' ? flower + `<g transform="translate(92 180) scale(.55)">${flower.replaceAll('translate(320 118)','translate(0 0)')}</g><g transform="translate(354 280) scale(.42)">${flower.replaceAll('translate(320 118)','translate(0 0)')}</g>` : '';
  const circles = kind === 'colour' || kind === 'form' || kind === 'hero' || kind === 'brand' ? `<circle cx="340" cy="95" r="82" fill="${gold}" opacity=".8"/><circle cx="38" cy="300" r="68" fill="${clay}" opacity=".8"/><path d="M300 -10 C240 75 360 115 292 195 S345 325 420 360 L430 -10Z" fill="${cream}" opacity=".72"/>` : '';
  const label = ({hero:'FIELD STUDY / 01',form:'FORM / CURVES',botany:'BOTANY / GROWTH',texture:'TEXTURE / GRAIN',colour:'COLOUR / EARTH',rhythm:'RHYTHM / REPEAT',brand:'ALVORA / NATURAL CARE',stone:'MATERIAL / STONE'})[kind] || 'RYŪMA / STUDY';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 480"><rect width="420" height="480" fill="${bg}"/><path d="M0 0H420V480H0Z" fill="${cream}" opacity=".08"/>${circles}${texture}${leaves}${flowerBits}<g fill="${cream}" opacity=".45">${Array.from({length:70},(_,i)=>`<circle cx="${(i*61)%420}" cy="${(i*37)%480}" r="${i%3===0?1.8:1}"/>`).join('')}</g><path d="M18 18H402V462H18Z" fill="none" stroke="${cream}" stroke-opacity=".35"/><text x="28" y="445" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="${cream}">${label}</text><text x="390" y="445" text-anchor="end" font-family="Arial,sans-serif" font-size="9" letter-spacing="2" fill="${cream}">RYŪMA</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
};
const photos = {
  hero: makeArtwork('hero'), form: makeArtwork('form'), botany: makeArtwork('botany'),
  texture: makeArtwork('texture'), colour: makeArtwork('colour'), rhythm: makeArtwork('rhythm'),
  brand: makeArtwork('brand'), stone: makeArtwork('stone')
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
{name:"Organic abstraction",kind:"abstraction",no:"01",copy:"Freeform silhouettes, layered masses and expressive negative space.",detail:"Build a composition from distinct irregular forms. Control overlap, scale and empty space so the result feels expressive rather than random."},
{name:"Organic geometry",kind:"geometry",no:"02",copy:"Soft geometry, imperfect circles and playful proportion.",detail:"Vary the proportions, edges and alignment of geometric primitives. The tension between order and irregularity gives the system character."},
{name:"Fluid design",kind:"fluid",no:"03",copy:"Continuous contours, flowing paths and visual movement.",detail:"Use connected curves and directional movement to lead the eye. Motion should clarify relationships, not become decoration."},
{name:"Organic editorial",kind:"editorial",no:"04",copy:"Expressive type, asymmetric grids and deliberate rhythm.",detail:"Let typography carry the voice. Offset columns, varied scale and whitespace create editorial composition without sacrificing readability."},
{name:"Biomorphic patterns",kind:"biomorphic",no:"05",copy:"Repeated cellular forms, clusters and irregular patterns.",detail:"Create rhythm through repetition with controlled variation. Change scale, rotation and spacing while keeping a recognisable pattern."},
{name:"Material-led design",kind:"material",no:"06",copy:"Layered planes, cut-paper edges and tactile surface effects.",detail:"Suggest material through layers, borders, grain and shadow. Keep effects restrained so the interface remains crisp and usable."}
];
const rules = [
  ['01','Work with natural forms','Use curves, irregular silhouettes and gentle transitions—not a grid of identical boxes.'],
  ['02','Let texture stay tactile','Bring in paper, bark, stone and grain with restraint.'],
  ['03','Ground the palette','Pair botanical greens with warm neutrals and one earthy focal accent.'],
  ['04','Create rhythm through variation','Shift scale, crop and spacing while keeping a clear hierarchy.'],
  ['05','Design for human experience','Keep contrast, legibility and interaction ahead of decoration.']
];
function DesignSpecimen({kind}) {
 if(kind==="abstraction") return <svg viewBox="0 0 320 210" role="img" aria-label="Abstract overlapping organic forms"><path d="M18 120C22 50 92 18 143 54C190 87 159 145 111 169C67 191 14 173 18 120Z" fill="#6F855D"/><path d="M116 36C172 1 255 28 275 83C292 131 238 165 194 139C158 118 158 70 116 36Z" fill="#C16B49"/><path d="M128 117C154 76 212 78 235 118C253 150 224 193 178 190C139 188 111 155 128 117Z" fill="#D8B95F"/><path d="M32 22C62 4 97 12 111 38C123 61 99 83 74 76C50 69 26 49 32 22Z" fill="#203D2B"/></svg>;
 if(kind==="geometry") return <svg viewBox="0 0 320 210" role="img" aria-label="Soft organic geometry"><path d="M30 72C30 37 65 22 95 31C128 40 137 78 115 104C92 131 49 119 35 97C31 90 30 81 30 72Z" fill="#A8B69A"/><circle cx="171" cy="79" r="48" fill="#D8B95F"/><path d="M207 133C222 93 272 84 291 115C309 144 283 184 246 184C216 184 195 163 207 133Z" fill="#C16B49"/><rect x="130" y="144" width="47" height="47" rx="17" transform="rotate(-17 130 144)" fill="#203D2B"/></svg>;
 if(kind==="fluid") return <svg viewBox="0 0 320 210" role="img" aria-label="Fluid contours and movement"><path d="M-8 110C37 7 111 14 135 80C158 145 218 171 331 72V220H-8Z" fill="#6F855D"/><path d="M-8 137C48 39 105 43 137 103C174 174 242 185 331 105" fill="none" stroke="#203D2B" strokeWidth="2"/><path d="M-8 158C47 65 99 71 139 127C183 190 249 198 331 135" fill="none" stroke="#F3EBDD" strokeWidth="2"/><path d="M-8 178C47 92 95 99 141 151C188 207 259 211 331 163" fill="none" stroke="#C16B49" strokeWidth="3"/><circle cx="246" cy="42" r="24" fill="#D8B95F"/></svg>;
 if(kind==="editorial") return <svg viewBox="0 0 320 210" role="img" aria-label="Organic editorial typography specimen"><rect x="13" y="12" width="294" height="186" fill="#F3EBDD" stroke="#203D2B"/><text x="28" y="42" fontSize="9" letterSpacing="2" fill="#203D2B">FIELD NOTES / 06</text><path d="M27 57H291" stroke="#203D2B" opacity=".35"/><text x="25" y="116" fontFamily="Georgia,serif" fontSize="53" letterSpacing="-3" fill="#203D2B">Soft</text><text x="25" y="159" fontFamily="Georgia,serif" fontSize="53" fontStyle="italic" letterSpacing="-3" fill="#C16B49">forms.</text><path d="M217 165H289M217 174H275M217 183H286" stroke="#203D2B" strokeWidth="2"/></svg>;
 if(kind==="biomorphic") return <svg viewBox="0 0 320 210" role="img" aria-label="Repeating biomorphic pattern"><defs><pattern id="bioPattern" width="72" height="64" patternUnits="userSpaceOnUse"><path d="M5 31C7 8 31 1 46 13C64 27 55 53 35 58C17 63 3 49 5 31Z" fill="#6F855D" stroke="#203D2B"/><circle cx="36" cy="31" r="8" fill="#D8B95F"/></pattern></defs><rect width="320" height="210" fill="#F3EBDD"/><rect x="12" y="12" width="296" height="186" fill="url(#bioPattern)"/><path d="M12 12H308V198H12Z" fill="none" stroke="#203D2B" strokeWidth="1.5"/></svg>;
 return <svg viewBox="0 0 320 210" role="img" aria-label="Layered cut paper material composition"><rect x="24" y="24" width="245" height="155" fill="#203D2B"/><path d="M49 36C83 8 133 18 153 51C172 82 149 117 112 124C73 132 36 93 49 36Z" fill="#A8B69A"/><path d="M135 75C165 31 236 43 264 88C287 126 250 171 203 162C158 154 114 111 135 75Z" fill="#C16B49"/><path d="M57 146L112 104L169 146L222 111L264 153" fill="none" stroke="#F3EBDD" strokeWidth="2"/></svg>;
}
function Sprig({className=''}) { return <svg className={`ry-sprig ${className}`} viewBox="0 0 180 240" fill="none" aria-hidden="true">
  <path d="M22 226C48 185 76 141 91 102C108 60 125 34 158 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
  <g fill="currentColor" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
    <path d="M58 171C26 174 10 157 11 134C37 130 59 146 58 171Z"/><path d="M58 171C40 157 27 145 14 136" stroke="#F3EBDD" strokeOpacity=".72" fill="none"/>
    <path d="M78 139C45 133 34 111 43 90C69 96 85 117 78 139Z" opacity=".9"/><path d="M78 139L46 94" stroke="#F3EBDD" strokeOpacity=".72" fill="none"/>
    <path d="M96 105C66 92 62 68 76 50C100 64 108 87 96 105Z"/><path d="M96 105L78 54" stroke="#F3EBDD" strokeOpacity=".72" fill="none"/>
    <path d="M116 70C100 42 111 20 134 13C149 37 141 60 116 70Z" opacity=".84"/><path d="M116 70L134 17" stroke="#F3EBDD" strokeOpacity=".72" fill="none"/>
    <path d="M72 151C89 122 113 116 132 131C119 154 94 163 72 151Z" opacity=".72"/><path d="M74 151L127 133" stroke="#F3EBDD" strokeOpacity=".72" fill="none"/>
    <path d="M91 115C112 87 138 85 153 103C135 126 111 132 91 115Z" opacity=".86"/><path d="M94 115L149 105" stroke="#F3EBDD" strokeOpacity=".72" fill="none"/>
  </g>
  <g fill="none" stroke="currentColor" strokeWidth="1" opacity=".48"><path d="M58 171L49 150M78 139L63 116M96 105L87 80M116 70L116 42M72 151L97 138M91 115L116 100"/></g>
</svg> }
function OrganicComposition() { return <section className="ry-organic-composition" id="ry-organic-composition">
  <div className="ry-composition-intro"><span className="ry-kicker">02 / 06 · VISUAL LANGUAGE</span><h2>Nature is a<br/><em>way of seeing.</em></h2><p>Organic design borrows the logic of living things: asymmetry, rhythm, tactility and growth. It is not decoration added to a layout; it is the way the whole composition behaves.</p><span className="ry-composition-index">FORM STUDY — 001</span></div>
  <div className="ry-composition-stage">
    <div className="ry-composition-topline"><span>COMPOSITION / 01</span><span>FORM · SPACE · MATERIAL</span></div>
    <div className="ry-composition-art" aria-label="Abstract organic design composition">
      <div className="ry-orbit orbit-one"/><div className="ry-orbit orbit-two"/>
      <div className="ry-form form-sun"/><div className="ry-form form-petal"/><div className="ry-form form-stone"/>
      <div className="ry-form form-leaf"><span/></div><div className="ry-form form-disc"/>
      <span className="ry-art-caption caption-a">GROW / 01</span><span className="ry-art-caption caption-b">SOFT STRUCTURE</span>
    </div>
    <div className="ry-composition-caption"><strong>Imperfect by nature.</strong><span>Controlled irregularity creates character. A clear grid keeps it intentional.</span></div>
  </div>
  <div className="ry-composition-principles">
    <article><span>01</span><div><h3>Living shapes</h3><p>Uneven curves and silhouettes with a sense of movement.</p></div><i className="principle-shape shape-one"/></article>
    <article><span>02</span><div><h3>Tactile surfaces</h3><p>Warm paper, muted pigment and material-led contrast.</p></div><i className="principle-shape shape-two"/></article>
    <article><span>03</span><div><h3>Natural rhythm</h3><p>Asymmetry balanced by repetition, alignment and space.</p></div><i className="principle-shape shape-three"/></article>
  </div>
</section> }
function ApplicationComposition({view}) {
 if(view==="Packaging") return <div className="ry-app-art ry-app-pack"><div className="pack-box"><span>FORM / 01</span><b>field<br/><i>notes</i></b><small>BOTANICAL SOAP · 120G</small></div><div className="pack-tube"><b>O</b><small>daily<br/>care</small></div></div>;
 if(view==="Digital") return <div className="ry-app-art ry-app-digital"><div className="app-window"><span>STUDIO / HOME</span><b>Make room<br/><i>to breathe.</i></b><div/><small>Explore the collection ↗</small></div></div>;
 if(view==="Editorial") return <div className="ry-app-art ry-app-editorial"><div className="editorial-sheet"><small>ISSUE 04 / CULTURE</small><b>Objects<br/><i>with a soul.</i></b><span>FORM, MATERIAL & THE EVERYDAY</span></div></div>;
 return <div className="ry-app-art ry-app-space"><div className="space-arch"/><div className="space-orb"/><div className="space-seat"/></div>;
}
function Flower({className=''}) { return <svg className={`ry-flower ${className}`} viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><ellipse cx="50" cy="22" rx="10" ry="22"/><ellipse cx="78" cy="38" rx="10" ry="22" transform="rotate(55 78 38)"/><ellipse cx="72" cy="70" rx="10" ry="22" transform="rotate(110 72 70)"/><ellipse cx="28" cy="70" rx="10" ry="22" transform="rotate(-110 28 70)"/><ellipse cx="22" cy="38" rx="10" ry="22" transform="rotate(-55 22 38)"/></g><circle cx="50" cy="50" r="11" fill="#D9B85F"/></svg> }
export default function OrganicNaturalDesignStyle({onNavigate}) {
  const [activeStudy,setActiveStudy] = useState(0);
  const [selected,setSelected] = useState(palette[0]);
  const [paletteMode,setPaletteMode] = useState('Single');
  const [copied,setCopied] = useState(false);
  const [typeRole,setTypeRole] = useState('Display');
  const [typeSize,setTypeSize] = useState(64);
  const [typeWeight,setTypeWeight] = useState('Regular');
  const [brandView,setBrandView] = useState('Packaging');
  const [mobileMenu,setMobileMenu] = useState(false);
  const typeText = useMemo(()=>({Display:'A natural voice.',Heading:'Good things grow slowly.',Body:'Design should feel as natural as the world around it.',Caption:'FORM · BOTANY · TEXTURE'})[typeRole],[typeRole]);
  const activePalette = useMemo(() => {
    if (paletteMode === 'Harmony') return ['#203D2B','#65784B','#A8B69A','#F3EBDD'];
    if (paletteMode === 'Brand') return ['#203D2B','#B96646','#D9B85F','#F3EBDD'];
    if (paletteMode === 'Custom') return [selected.hex,'#B58B7A','#B8B0A0','#F3EBDD'];
    return [selected.hex];
  }, [paletteMode, selected]);
  const choosePaletteMode = mode => { setPaletteMode(mode); const first = mode==='Harmony' ? palette[1] : mode==='Brand' ? palette[4] : mode==='Custom' ? palette[6] : palette[0]; setSelected(first); setCopied(false); };
  const copyHex = async () => { try { await navigator.clipboard.writeText(selected.hex); setCopied(true); window.setTimeout(()=>setCopied(false),1500); } catch { setCopied(false); } };
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); setMobileMenu(false); };
  return <main className="ry-organic" style={{'--ry-selected':selected.hex}}>
    <header className="ry-nav">
      <button className="ry-wordmark" onClick={()=>onNavigate?.('library')} aria-label="Back to design library"><span>RYŪMA</span><small>DESIGN ANATOMY</small></button>
      <nav id="organic-section-navigation" className={mobileMenu?'ry-nav-links is-open':'ry-nav-links'} aria-label="Organic design sections">{[['Overview','ry-hero'],['Forms','ry-organic-composition'],['Studies','ry-studies'],['Colour','ry-colour'],['Typography','ry-type'],['Practice','ry-practice'],['Rules','ry-rules']].map(([label,id])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}</nav>
      <button className="ry-library-link" onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> <span>Library</span></button>
      <button className="ry-menu-toggle" onClick={()=>setMobileMenu(v=>!v)} aria-label="Toggle navigation" aria-controls="organic-section-navigation" aria-expanded={mobileMenu}><Menu size={19}/></button>
    </header>

    <section className="ry-hero" id="ry-hero">
      <div className="ry-hero-copy">
        <span className="ry-kicker"><i/> 01 / 06 · ORGANIC / NATURAL</span>
        <h1>Organic /<br/><em>Natural</em><br/>Design</h1>
        <p className="ry-hero-lead">Design that grows instead of being constructed.</p>
        <p className="ry-hero-body">A living visual experience inspired by nature’s forms, textures and rhythms — to create human, warm and harmonious experiences.</p>
        <div className="ry-hero-actions"><button className="ry-pill-button" onClick={()=>scrollTo('ry-studies')}>Explore elements <ArrowRight size={16}/></button><span>↓ &nbsp; SCROLL TO EXPLORE</span></div>
        <span className="ry-hero-index">FIELD NOTE / 01</span>
      </div>
      <div className="ry-hero-art">
        <div className="ry-sun-disc"/><div className="ry-terra-shape"/><div className="ry-hero-coded-art" aria-hidden="true"><DesignSpecimen kind="abstraction"/></div>
        <div className="ry-hero-art-note"><span>ABSTRACT FORM STUDY</span><span>FORM · LIGHT · GROWTH</span></div><Sprig className="ry-hero-sprig"/>
      </div>
      <div className="ry-side-notes"><span>FORMS</span><span>TEXTURES</span><span>COLOURS</span><span>RHYTHMS</span><span>PEOPLE</span><b>01 — 06</b></div>
    </section>

    <OrganicComposition />

    <section className="ry-studies" id="ry-studies">
      <div className="ry-studies-intro"><span className="ry-kicker">03 / 06 · DESIGN STUDIES</span><h2>Six ways<br/><em>to go organic</em></h2><p>Six design families. Select a coded specimen to explore a different organic visual approach.</p><button className="ry-light-button" onClick={()=>scrollTo('ry-study-detail')}>Explore studies <ArrowRight size={15}/></button></div>
      <div className="ry-study-cards">{studies.map((study,i)=><button key={study.no} className={activeStudy===i?'ry-study-card is-active':'ry-study-card'} onClick={()=>{setActiveStudy(i);scrollTo('ry-study-detail')}} aria-pressed={activeStudy===i}><div className="ry-study-art"><DesignSpecimen kind={study.kind}/></div><span className="ry-study-number">{study.no}</span><strong>{study.name}</strong><small>{study.copy}</small><span className="ry-study-arrow"><ArrowRight size={14}/></span></button>)}</div>
      <div className="ry-study-detail" id="ry-study-detail" aria-live="polite"><span>ACTIVE SPECIMEN / {studies[activeStudy].no}</span><div><h3>{studies[activeStudy].name}</h3><p>{studies[activeStudy].detail}</p></div><button onClick={()=>setActiveStudy(v=>(v+1)%studies.length)}>Next specimen <ArrowRight size={14}/></button></div>
    </section>

    <section className="ry-colour" id="ry-colour">
      <div className="ry-colour-heading"><span className="ry-kicker">04 / 06 · COLOUR SYSTEM</span><h2>The Colour<br/><em>Garden</em></h2><p>Choose a living colour, explore combinations and see the palette change a composition in real time.</p><div className="ry-palette-modes" role="group" aria-label="Palette mode">{['Single','Harmony','Brand','Custom'].map(mode=><button key={mode} type="button" className={paletteMode===mode?'is-active':''} aria-pressed={paletteMode===mode} onClick={()=>choosePaletteMode(mode)}>{mode}</button>)}</div></div>
      <div className="ry-palette-grid">{palette.map(c=><button key={c.name} className={selected.name===c.name?'ry-swatch is-selected':'ry-swatch'} onClick={()=>{setSelected(c);setCopied(false);setPaletteMode('Single')}} aria-pressed={selected.name===c.name} aria-label={`Select ${c.name} ${c.hex}`}><span className="ry-swatch-colour" style={{background:c.hex}}>{selected.name===c.name&&<Check size={17}/>}</span><strong>{c.name}</strong><small>{c.hex}</small></button>)}</div>
      <div className="ry-live-preview" style={{background:selected.hex,color:['#203D2B','#65784B'].includes(selected.hex)?'#F3EBDD':'#203D2B'}}><span>LIVE COMPOSITION / COLOUR {palette.findIndex(c=>c.name===selected.name)+1}</span><h3>Good things<br/><em>grow slowly.</em></h3><p>Nature-inspired design<br/>for a calmer, more human experience.</p><div className="ry-preview-palette" aria-label={`${paletteMode} palette preview`}>{activePalette.map((hex,i)=><i key={`${hex}-${i}`} style={{background:hex}} title={hex}/>)}</div><div className="ry-preview-bottom"><span>{selected.name} · {selected.hex}</span><button onClick={copyHex}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'COPIED':'COPY COLOUR'}</button></div><Sprig/></div>
      <div className="ry-colour-note"><span className="ry-note-dot" style={{background:selected.hex}}/><div><strong>{selected.name} / {selected.role}</strong><p>Selected colour updates the preview instantly. Copy its exact HEX value for your next design.</p></div><button onClick={()=>{setSelected(palette[0]);setPaletteMode('Single');setCopied(false)}}><RotateCcw size={14}/> Reset</button></div>
    </section>

    <section className="ry-type" id="ry-type">
      <div className="ry-type-copy"><span className="ry-kicker">05 / 06 · TYPOGRAPHY</span><h2>Type That<br/><em>Grows.</em></h2><p>A refined serif carries the human, crafted feeling. A clean sans-serif keeps the interface clear and contemporary.</p><div className="ry-type-tags"><span>DISPLAY SERIF</span><span>BODY SANS</span><span>UTILITY LABELS</span></div></div>
      <div className="ry-type-lab"><div className="ry-type-stage"><span>TYPE SPECIMEN / {typeRole.toUpperCase()}</span><div className="ry-type-preview" style={{fontSize:`clamp(30px, ${typeSize/10}vw, ${typeSize}px)`,fontStyle:typeWeight==='Italic'?'italic':'normal',fontWeight:typeWeight==='Bold'?700:400}}>{typeText}</div><Sprig/></div><div className="ry-type-controls"><div className="ry-type-tabs">{['Display','Heading','Body','Caption'].map(role=><button key={role} className={typeRole===role?'is-active':''} onClick={()=>setTypeRole(role)}>{role}</button>)}</div><label className="ry-range-row"><span>SIZE</span><input type="range" aria-label="Typography specimen size" min="24" max="88" step="2" value={typeSize} onChange={e=>setTypeSize(Number(e.target.value))}/><b>{typeSize}px</b></label><div className="ry-weight-row"><span>WEIGHT</span>{['Regular','Italic','Bold'].map(w=><button key={w} className={typeWeight===w?'is-active':''} onClick={()=>setTypeWeight(w)}>{w}</button>)}</div><button className="ry-reset-type" onClick={()=>{setTypeRole('Display');setTypeSize(64);setTypeWeight('Regular')}}><RotateCcw size={13}/> Reset specimen</button></div></div>
    </section>

    <section className="ry-practice" id="ry-practice">
      <div className="ry-practice-heading"><span className="ry-kicker">06 / 06 · APPLIED DESIGN</span><h2>Nature in<br/><em>Practice.</em></h2><p>One visual language applied across packaging, digital interfaces and editorial materials.</p><div className="ry-practice-tabs">{['Packaging','Digital','Editorial','Environmental'].map(v=><button key={v} className={brandView===v?'is-active':''} onClick={()=>setBrandView(v)}>{v}<ArrowRight size={13}/></button>)}</div></div>
      <div className="ry-brand-composition"><div className="ry-brand-photo"><span>{brandView.toUpperCase()} / CODED STUDY 01</span><ApplicationComposition view={brandView}/><div><small>STUDIO / ORGANIC SYSTEMS</small><h3>{brandView==='Digital'?'A softer interface.':brandView==='Editorial'?'A slower kind of story.':brandView==='Environmental'?'Space to belong.':'Made to feel human.'}</h3></div></div><div className="ry-brand-side"><span>APPLICATION / {brandView.toUpperCase()}</span><h3>Rooted<br/><em>in balance.</em></h3><p>Natural materials, considered typography and a grounded palette make one recognisable system.</p><div className="ry-brand-swatches">{palette.slice(0,5).map(c=><i key={c.name} style={{background:c.hex}} title={c.name}/>)}</div><button onClick={()=>setBrandView(v=>{const a=['Packaging','Digital','Editorial','Environmental'];return a[(a.indexOf(v)+1)%a.length]})}>Next application <ArrowRight size={14}/></button></div></div>
    </section>

    <section className="ry-rules" id="ry-rules">
      <div className="ry-rules-heading"><span className="ry-kicker">06 / 06 · LIVING RULES</span><h2>The Living<br/><em>Rules</em></h2><p>Practical principles for creating organic, human and expressive designs.</p></div>
      <div className="ry-rule-list">{rules.map(([no,title,copy],i)=><article key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="ry-rule-mark" aria-hidden="true">{["◒","≈","Aa","✳","▧"][i]}</span></article>)}</div>
      <div className="ry-rules-outro"><span>NATURE IS A PROCESS.<br/>NOT A PERFECT SHAPE.</span><div className="ry-outro-landscape ry-coded-outro" aria-hidden="true"><DesignSpecimen kind="fluid"/></div></div>
    </section>
    <footer className="ry-footer"><div><span className="ry-kicker">RYŪMA / DESIGN ANATOMY</span><h2>Design with<br/><em>a human touch.</em></h2><p>Not a leaf pasted onto a layout. A visual system inspired by the way nature grows.</p></div><button onClick={()=>onNavigate?.('library')}>Back to Design Library <ArrowLeft size={15}/></button><div className="ry-footer-meta"><span>FORM · BOTANY · TEXTURE · COLOUR · RHYTHM</span><span>ORGANIC / NATURAL DESIGN</span></div></footer>
  </main>;
}
