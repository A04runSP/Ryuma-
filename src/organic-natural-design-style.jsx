import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, RotateCcw, Menu } from 'lucide-react';
import './organic-natural-design-style.css';
import './organic-natural-design-v2.css';
import './organic-botanical-anatomy.css';

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
function BotanicalAnatomy() { return <section className="ry-botanical-atlas" id="ry-botanical-atlas">
  <div className="ry-atlas-heading"><span className="ry-kicker">02 / 07 · BOTANICAL ANATOMY</span><h2>Study the<br/><em>living form.</em></h2><p>Four structural studies drawn as vector specimens: morphology, growth, reproduction and branching.</p></div>
  <div className="ry-atlas-grid">
    <article className="ry-atlas-specimen ry-atlas-leaf"><div className="ry-specimen-meta"><span>FIG. 01</span><span>FOLIAGE / MORPHOLOGY</span></div><svg viewBox="0 0 260 300" role="img" aria-label="Botanical leaf anatomy with midrib and secondary veins"><defs><linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#71895D"/><stop offset="1" stopColor="#1F432F"/></linearGradient></defs><path d="M130 276C55 231 22 165 49 94C68 43 116 23 130 16C145 26 193 53 211 105C236 177 194 237 130 276Z" fill="url(#leafFill)" stroke="#183B2A" strokeWidth="2"/><path d="M130 276C126 190 128 101 130 18" stroke="#E9DDBF" strokeWidth="3" fill="none"/><g stroke="#D8D9B3" strokeWidth="1.25" fill="none" opacity=".9"><path d="M128 228C95 201 72 174 52 132M128 201C91 181 68 151 55 116M128 173C95 151 76 126 65 96M128 143C99 124 84 100 79 76M129 114C108 95 99 76 98 56M132 228C164 201 187 174 208 132M132 201C169 181 192 151 205 116M132 173C165 151 184 126 195 96M132 143C161 124 176 100 181 76M131 114C152 95 161 76 162 56"/></g><path d="M130 276L130 292" stroke="#183B2A" strokeWidth="5" strokeLinecap="round"/><g fill="#203D2B" fontSize="9" fontFamily="Arial"><text x="8" y="286">PETIOLE</text><path d="M47 278L119 281" stroke="#203D2B"/><text x="166" y="42">APEX</text><path d="M161 46L145 35" stroke="#203D2B"/><text x="8" y="153">MARGIN</text><path d="M50 150L64 150" stroke="#203D2B"/></g></svg><h3>Leaf</h3><p>Blade · midrib · veins · margin · apex · petiole</p></article>
    <article className="ry-atlas-specimen ry-atlas-stem"><div className="ry-specimen-meta"><span>FIG. 02</span><span>AXIS / GROWTH</span></div><svg viewBox="0 0 260 300" role="img" aria-label="Plant stem anatomy showing nodes, internodes, branches and leaves"><path d="M128 282C126 218 131 151 126 18" stroke="#735B35" strokeWidth="12" strokeLinecap="round" fill="none"/><path d="M128 282C126 218 131 151 126 18" stroke="#B4A06D" strokeWidth="3" fill="none"/><path d="M128 217C94 188 76 153 60 126M129 155C165 132 182 105 196 75M127 91C100 68 92 49 88 30" stroke="#735B35" strokeWidth="7" strokeLinecap="round" fill="none"/><g fill="#637F4C" stroke="#203D2B" strokeWidth="1.5"><path d="M61 127C25 132 15 104 27 80C55 82 73 101 61 127Z"/><path d="M195 76C207 39 236 39 248 59C237 87 215 95 195 76Z"/><path d="M89 31C60 34 47 15 57 0C83 1 98 14 89 31Z"/></g><g fill="#C06A47" stroke="#F3EBDD" strokeWidth="2"><circle cx="128" cy="217" r="8"/><circle cx="128" cy="155" r="8"/><circle cx="127" cy="91" r="8"/></g><g stroke="#203D2B" strokeWidth="1" fill="none"><path d="M137 217L190 232M137 155L190 164M136 91L190 101"/></g><g fill="#203D2B" fontSize="10" fontFamily="Arial"><text x="194" y="235">NODE</text><text x="194" y="167">NODE</text><text x="194" y="104">NODE</text><text x="15" y="263">INTERNODE</text><path d="M87 256L119 238" /></g></svg><h3>Stem</h3><p>Node · internode · branch · leaf attachment</p></article>
    <article className="ry-atlas-specimen ry-atlas-flower"><div className="ry-specimen-meta"><span>FIG. 03</span><span>FLOWER / REPRODUCTION</span></div><svg viewBox="0 0 260 300" role="img" aria-label="Flower anatomy showing petals, sepals, stamens and pistil"><g fill="#F2E7D2" stroke="#B66A48" strokeWidth="1.6"><path d="M130 140C89 118 82 77 108 54C128 71 137 101 130 140Z"/><path d="M130 140C126 92 153 55 183 65C188 93 165 124 130 140Z"/><path d="M130 140C170 111 210 123 211 154C185 174 151 164 130 140Z"/><path d="M130 140C166 171 161 211 132 224C108 202 110 164 130 140Z"/><path d="M130 140C93 171 57 156 55 126C81 106 111 115 130 140Z"/></g><g fill="#637F4C" stroke="#203D2B" strokeWidth="1.5"><path d="M126 152L104 184L130 173L155 188L137 151Z"/><path d="M130 165C126 211 126 245 130 280" fill="none" strokeWidth="5"/></g><g stroke="#D5A744" strokeWidth="2" strokeLinecap="round"><path d="M130 138L130 91M130 138L98 104M130 138L164 103M130 138L177 143M130 138L88 145"/></g><g fill="#D5A744"><circle cx="130" cy="89" r="5"/><circle cx="96" cy="102" r="5"/><circle cx="166" cy="101" r="5"/><circle cx="179" cy="144" r="5"/><circle cx="86" cy="146" r="5"/></g><path d="M130 136L130 72" stroke="#B66A48" strokeWidth="4" strokeLinecap="round"/><ellipse cx="130" cy="68" rx="7" ry="12" fill="#B66A48"/><g fill="#203D2B" fontSize="10" fontFamily="Arial"><text x="12" y="28">PETAL</text><path d="M48 31L101 65" stroke="#203D2B" fill="none"/><text x="173" y="37">STAMEN</text><path d="M174 41L163 99" stroke="#203D2B" fill="none"/><text x="13" y="270">SEPAL</text><path d="M50 266L110 181" stroke="#203D2B" fill="none"/></g></svg><h3>Flower</h3><p>Petal · sepal · stamen · anther · pistil</p></article>
    <article className="ry-atlas-specimen ry-atlas-tree"><div className="ry-specimen-meta"><span>FIG. 04</span><span>ARBOREAL / BRANCHING</span></div><svg viewBox="0 0 260 300" role="img" aria-label="Tree anatomy with trunk, branching canopy and roots"><path d="M130 282C127 220 132 166 130 111C127 80 113 54 104 30M130 130C103 103 79 85 57 57M130 157C160 128 182 97 199 58M128 192C101 173 80 151 65 125M131 187C159 171 181 149 197 121" stroke="#79583A" strokeWidth="10" fill="none" strokeLinecap="round"/><path d="M130 278C111 285 95 291 78 296M130 278C143 287 159 292 177 297M130 278L127 299" stroke="#79583A" strokeWidth="5" fill="none" strokeLinecap="round"/><g fill="#6B8552" stroke="#203D2B" strokeWidth="1.3"><circle cx="104" cy="40" r="32"/><circle cx="56" cy="65" r="30"/><circle cx="199" cy="62" r="34"/><circle cx="68" cy="129" r="29"/><circle cx="194" cy="126" r="32"/><circle cx="132" cy="100" r="40"/></g><g fill="#A8B69A" opacity=".7"><circle cx="95" cy="34" r="12"/><circle cx="51" cy="58" r="10"/><circle cx="189" cy="53" r="13"/><circle cx="125" cy="91" r="15"/></g><g fill="#203D2B" fontSize="10" fontFamily="Arial"><text x="10" y="18">CANOPY</text><path d="M53 20L79 43" stroke="#203D2B" fill="none"/><text x="177" y="278">ROOTS</text><path d="M174 273L155 284" stroke="#203D2B" fill="none"/><text x="12" y="228">TRUNK</text><path d="M50 224L119 214" stroke="#203D2B" fill="none"/></g></svg><h3>Tree</h3><p>Trunk · crown · branch hierarchy · roots</p></article>
  </div>
</section> }
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
      <nav id="organic-section-navigation" className={mobileMenu?'ry-nav-links is-open':'ry-nav-links'} aria-label="Organic design sections">{[['Overview','ry-hero'],['Studies','ry-studies'],['Colour','ry-colour'],['Typography','ry-type'],['Practice','ry-practice'],['Rules','ry-rules']].map(([label,id])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}</nav>
      <button className="ry-library-link" onClick={()=>onNavigate?.('library')}><ArrowLeft size={14}/> <span>Library</span></button>
      <button className="ry-menu-toggle" onClick={()=>setMobileMenu(v=>!v)} aria-label="Toggle navigation" aria-controls="organic-section-navigation" aria-expanded={mobileMenu}><Menu size={19}/></button>
    </header>

    <section className="ry-hero" id="ry-hero">
      <div className="ry-hero-copy">
        <span className="ry-kicker"><i/> 01 / 06 · WILD BOTANICAL</span>
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

    <BotanicalAnatomy />

    <section className="ry-studies" id="ry-studies">
      <div className="ry-studies-intro"><span className="ry-kicker">02 / 06 · THE ANATOMY</span><h2>Anatomy<br/><em>of Nature</em></h2><p>Five visual studies. Select a specimen and explore how nature informs design.</p><button className="ry-light-button" onClick={()=>scrollTo('ry-study-detail')}>Explore studies <ArrowRight size={15}/></button></div>
      <div className="ry-study-cards">{studies.map((study,i)=><button key={study.no} className={activeStudy===i?'ry-study-card is-active':'ry-study-card'} onClick={()=>{setActiveStudy(i);scrollTo('ry-study-detail')}} aria-pressed={activeStudy===i}><img src={study.image} alt={study.name+' specimen'}/><span className="ry-study-number">{study.no}</span><strong>{study.name}</strong><small>{study.copy}</small><span className="ry-study-arrow"><ArrowRight size={14}/></span></button>)}</div>
      <div className="ry-study-detail" id="ry-study-detail" aria-live="polite"><span>ACTIVE SPECIMEN / {studies[activeStudy].no}</span><div><h3>{studies[activeStudy].name}</h3><p>{studies[activeStudy].detail}</p></div><button onClick={()=>setActiveStudy(v=>(v+1)%studies.length)}>Next specimen <ArrowRight size={14}/></button></div>
    </section>

    <section className="ry-colour" id="ry-colour">
      <div className="ry-colour-heading"><span className="ry-kicker">03 / 06 · COLOUR SYSTEM</span><h2>The Colour<br/><em>Garden</em></h2><p>Choose a living colour, explore combinations and see the palette change a composition in real time.</p><div className="ry-palette-modes" role="group" aria-label="Palette mode">{['Single','Harmony','Brand','Custom'].map(mode=><button key={mode} type="button" className={paletteMode===mode?'is-active':''} aria-pressed={paletteMode===mode} onClick={()=>choosePaletteMode(mode)}>{mode}</button>)}</div></div>
      <div className="ry-palette-grid">{palette.map(c=><button key={c.name} className={selected.name===c.name?'ry-swatch is-selected':'ry-swatch'} onClick={()=>{setSelected(c);setCopied(false);setPaletteMode('Single')}} aria-pressed={selected.name===c.name} aria-label={`Select ${c.name} ${c.hex}`}><span className="ry-swatch-colour" style={{background:c.hex}}>{selected.name===c.name&&<Check size={17}/>}</span><strong>{c.name}</strong><small>{c.hex}</small></button>)}</div>
      <div className="ry-live-preview" style={{background:selected.hex,color:['#203D2B','#65784B'].includes(selected.hex)?'#F3EBDD':'#203D2B'}}><span>LIVE COMPOSITION / COLOUR {palette.findIndex(c=>c.name===selected.name)+1}</span><h3>Good things<br/><em>grow slowly.</em></h3><p>Nature-inspired design<br/>for a calmer, more human experience.</p><div className="ry-preview-palette" aria-label={`${paletteMode} palette preview`}>{activePalette.map((hex,i)=><i key={`${hex}-${i}`} style={{background:hex}} title={hex}/>)}</div><div className="ry-preview-bottom"><span>{selected.name} · {selected.hex}</span><button onClick={copyHex}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'COPIED':'COPY COLOUR'}</button></div><Sprig/></div>
      <div className="ry-colour-note"><span className="ry-note-dot" style={{background:selected.hex}}/><div><strong>{selected.name} / {selected.role}</strong><p>Selected colour updates the preview instantly. Copy its exact HEX value for your next design.</p></div><button onClick={()=>{setSelected(palette[0]);setPaletteMode('Single');setCopied(false)}}><RotateCcw size={14}/> Reset</button></div>
    </section>

    <section className="ry-type" id="ry-type">
      <div className="ry-type-copy"><span className="ry-kicker">04 / 06 · TYPOGRAPHY</span><h2>Type That<br/><em>Grows.</em></h2><p>A refined serif carries the human, crafted feeling. A clean sans-serif keeps the interface clear and contemporary.</p><div className="ry-type-tags"><span>DISPLAY SERIF</span><span>BODY SANS</span><span>UTILITY LABELS</span></div></div>
      <div className="ry-type-lab"><div className="ry-type-stage"><span>TYPE SPECIMEN / {typeRole.toUpperCase()}</span><div className="ry-type-preview" style={{fontSize:`clamp(30px, ${typeSize/10}vw, ${typeSize}px)`,fontStyle:typeWeight==='Italic'?'italic':'normal',fontWeight:typeWeight==='Bold'?700:400}}>{typeText}</div><Sprig/></div><div className="ry-type-controls"><div className="ry-type-tabs">{['Display','Heading','Body','Caption'].map(role=><button key={role} className={typeRole===role?'is-active':''} onClick={()=>setTypeRole(role)}>{role}</button>)}</div><label className="ry-range-row"><span>SIZE</span><input type="range" aria-label="Typography specimen size" min="24" max="88" step="2" value={typeSize} onChange={e=>setTypeSize(Number(e.target.value))}/><b>{typeSize}px</b></label><div className="ry-weight-row"><span>WEIGHT</span>{['Regular','Italic','Bold'].map(w=><button key={w} className={typeWeight===w?'is-active':''} onClick={()=>setTypeWeight(w)}>{w}</button>)}</div><button className="ry-reset-type" onClick={()=>{setTypeRole('Display');setTypeSize(64);setTypeWeight('Regular')}}><RotateCcw size={13}/> Reset specimen</button></div></div>
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
