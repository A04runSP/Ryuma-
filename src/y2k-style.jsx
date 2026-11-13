import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Globe2, Monitor, Mouse, Disc3, Gamepad2, Smartphone, Sparkles, Heart, Search, Download, X, Minus, Square } from 'lucide-react';
import './y2k-style.css';
import './y2k-redesign.css';

const characteristics = [
  ['01', 'Digital optimism', 'Technology presented as playful, accessible and full of possibility.'],
  ['02', 'Futurist materials', 'Chrome, translucent plastic, holographic film and reflective surfaces.'],
  ['03', 'Pop colour', 'Electric cyan, violet and bubblegum pink against deep digital navy.'],
  ['04', 'Expressive type', 'Oversized geometric display lettering balanced with compact UI labels.'],
  ['05', 'Interface nostalgia', 'Desktop windows, media players, pixel icons and early-web details.']
];
const palette = [
  ['Chrome Silver', '#C0C0C0', 'Reflective neutral'],
  ['Electric Cyan', '#00E5FF', 'Digital signal'],
  ['Holo Violet', '#B27BFF', 'Futurist accent'],
  ['Bubble Pink', '#FF6EC7', 'Pop energy'],
  ['Digital Navy', '#0B1028', 'Deep foundation']
];
const materials = [
  ['Chrome metallic', 'Polished, directional highlights', 'material-chrome'],
  ['Iridescent film', 'Colour shifts across the surface', 'material-holo'],
  ['Translucent plastic', 'Soft refraction and layered depth', 'material-plastic'],
  ['Pixel / scanline', 'Visible digital texture, used sparingly', 'material-pixel']
];
function WindowControls(){return <div className="y2k-window-controls" aria-hidden="true"><i/><i/><i/></div>}

export default function Y2KStyle({ onNavigate }) {
  const [online, setOnline] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [motionOn, setMotionOn] = useState(true);
  const [downloaded, setDownloaded] = useState(false);
  return <main className={`y2k-page y2k-redesign ${motionOn ? 'y2k-motion-on' : 'y2k-motion-off'}`}>
    <header className="y2k-nav">
      <button className="y2k-back" type="button" onClick={() => onNavigate?.('library')}><ArrowLeft size={16}/> <span>DESIGN LIBRARY</span></button>
      <a className="y2k-brand" href="#y2k-top" aria-label="Ryūma Y2K specimen home"><span className="y2k-brand-mark">✳</span><span><b>RYŪMA</b><small>DESIGN ANATOMY</small></span></a>
      <nav className="y2k-nav-links" aria-label="Specimen sections"><a href="#y2k-anatomy">Anatomy</a><a href="#y2k-system">Systems</a><a href="#y2k-components">Components</a></nav>
      <span className="y2k-nav-index">03.03 / EXPRESSIVE</span>
    </header>

    <section className="y2k-hero" id="y2k-top">
      <div className="y2k-hero-grid" aria-hidden="true"/>
      <div className="y2k-hero-copy">
        <span className="y2k-eyebrow"><i/> 03.03 / EXPRESSIVE — DIGITAL</span>
        <h1><span>Y2K</span><em>DIGITAL<br/>FUTURISM</em></h1>
        <p>The bold, optimistic design language of the early 2000s — where the internet, technology and pop culture imagined a brighter digital future.</p>
        <div className="y2k-tags"><span>Y2K</span><span>DIGITAL</span><span>FUTURISM</span><span>CHROME</span></div>
      </div>
      <div className="y2k-hero-art" role="img" aria-label="Retro-futurist desktop computer with a holographic disc and mobile phone">
        <div className="y2k-orbit y2k-orbit-one"/><div className="y2k-orbit y2k-orbit-two"/>
        <div className="y2k-globe"><span/></div><div className="y2k-cd"><i/></div>
        <div className="y2k-computer"><div className="y2k-computer-shell"><div className="y2k-screen"><div className="y2k-screen-sun"/><div className="y2k-screen-palm palm-a"/><div className="y2k-screen-palm palm-b"/><span>RYŪMA / ONLINE</span></div><div className="y2k-speaker speaker-a"/><div className="y2k-speaker speaker-b"/><div className="y2k-drive"/></div><div className="y2k-computer-neck"/><div className="y2k-computer-base"/></div>
        <div className="y2k-keyboard">{Array.from({length:24},(_,i)=><i key={i}/>)}</div><div className="y2k-mouse"/><div className="y2k-phone"><div className="y2k-phone-screen">✳<small>01:38</small></div></div>
        <div className="y2k-star star-a">✳</div><div className="y2k-star star-b">✧</div><div className="y2k-floor-grid"/>
      </div>
      <div className="y2k-hero-stamp"><small>RYŪMA SPECIMEN</small><b>03.03</b><span>EST. 2000 / REIMAGINED</span></div>
      <div className="y2k-hero-bottom"><span>THE FUTURE WAS A FEELING.</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="y2k-characteristics" id="y2k-anatomy">
      <div className="y2k-characteristics-title"><span>✳</span><b>CORE<br/>CHARACTERISTICS</b></div>
      {characteristics.map(([no,title])=><div className="y2k-characteristic" key={no}><span>{no}</span><b>{title}</b></div>)}
    </section>

    <section className="y2k-intro-section">
      <div className="y2k-section-meta"><span>01 / THE IDEA</span><span>OPTIMISM, REBOOTED</span></div>
      <div className="y2k-intro-layout"><h2>A future<br/>that felt <em>possible.</em></h2><div><p>Y2K emerged around the turn of the millennium, shaped by personal computing, the early web, electronic music and a new pop-cultural fascination with the digital world.</p><p>Its visual language imagined technology as something tactile and exciting: polished metal, translucent shells, luminous colour and interfaces that invited exploration.</p><strong>Not nostalgia for old technology. Nostalgia for how new it felt.</strong></div></div>
    </section>

    <section className="y2k-system-section" id="y2k-system">
      <div className="y2k-section-heading"><span>02 / COLOUR SYSTEM</span><h2>Colour from<br/><em>tomorrow.</em></h2><p>A compact palette of metallic neutrals and high-energy digital accents.</p></div>
      <div className="y2k-palette-grid">{palette.map(([name,hex,role])=><article className="y2k-swatch" key={name}><div className={`y2k-swatch-surface ${name==='Chrome Silver'?'swatch-chrome':''}`} style={{'--swatch':hex}}><span>{name==='Chrome Silver'?'✧':''}</span></div><div className="y2k-swatch-info"><b>{name}</b><code>{hex}</code><small>{role}</small></div></article>)}</div>
    </section>

    <section className="y2k-type-section">
      <div className="y2k-section-meta"><span>03 / TYPOGRAPHY</span><span>DISPLAY × INTERFACE</span></div>
      <div className="y2k-type-layout"><div className="y2k-type-poster"><span>WELCOME TO THE</span><strong>NEW<br/>WEB<span>✳</span></strong><i>EST. 2000 — ONLINE</i><div className="y2k-type-orbit"/></div><div className="y2k-type-copy"><h2>Big type.<br/><em>Small signals.</em></h2><p>Use wide, geometric display lettering to create impact. Pair it with clear interface typography, compact metadata and mono labels for technical contrast.</p><div className="y2k-type-spec"><div><b>DISPLAY</b><span>Eurostile / Orbitron-inspired</span></div><div><b>HEADING</b><span>Geometric sans — bold weight</span></div><div><b>BODY</b><span>Neutral sans — open counters</span></div><div><b>MICRO</b><span>Monospace — tracked labels</span></div></div></div></div>
    </section>

    <section className="y2k-layer-section">
      <div className="y2k-section-meta"><span>04 / LAYERING & COMPOSITION</span><span>DEPTH IS A MATERIAL</span></div>
      <div className="y2k-layer-layout"><div className="y2k-layer-window"><div className="y2k-layer-title"><WindowControls/><span>DESKTOP / 2001</span><span>— ◱ ×</span></div><div className="y2k-layer-content"><div className="y2k-layer-wallpaper"><div className="y2k-wallpaper-sun"/><span>HELLO<br/>WORLD.</span></div><div className="y2k-floating-panel"><b>NOW PLAYING</b><span>Digital Dreams.mp3</span><div className="y2k-track"><i/></div><small>03:08　◖◖◖　04:22</small></div><div className="y2k-pixel-heart">♥</div></div></div><div className="y2k-layer-copy"><h2>Layer it.<br/><em>Let it float.</em></h2><ul><li>Overlapping windows and panels</li><li>Glossy, translucent surfaces</li><li>Bold, oversized typography</li><li>Orbital and geometric graphics</li><li>Pixel details as visual punctuation</li></ul></div></div>
    </section>

    <section className="y2k-material-section">
      <div className="y2k-section-heading"><span>05 / TEXTURE & MATERIAL</span><h2>Touch the<br/><em>digital.</em></h2><p>Surfaces give Y2K its unmistakable physicality.</p></div>
      <div className="y2k-material-grid">{materials.map(([name,copy,cls])=><article className="y2k-material" key={name}><div className={`y2k-material-sample ${cls}`}/><b>{name}</b><p>{copy}</p></article>)}</div>
    </section>

    <section className="y2k-component-section" id="y2k-components">
      <div className="y2k-section-meta"><span>06 / COMPONENT SHOWCASE</span><span>INTERFACE PLAYGROUND</span></div>
      <div className="y2k-component-layout"><div className="y2k-component-copy"><h2>Built for<br/><em>interaction.</em></h2><p>Y2K interfaces combine expressive surfaces with familiar controls. The details should feel tactile, not ornamental.</p><div className="y2k-component-tabs" role="tablist" aria-label="Component examples">{['Overview','Tokens','States'].map(tab=><button type="button" role="tab" aria-selected={activeTab===tab} className={activeTab===tab?'is-active':''} onClick={()=>setActiveTab(tab)} key={tab}>{tab}</button>)}</div><div className="y2k-tab-copy" role="tabpanel">{activeTab==='Overview'?'A compact collection of buttons, icons, progress and window controls.':activeTab==='Tokens'?'Use chrome for material, cyan for primary signals and pink or violet for selective emphasis.':'Every control needs hover, pressed, focus and disabled states — not just a shiny default.'}</div></div>
        <div className="y2k-demo-window"><div className="y2k-demo-bar"><WindowControls/><b>MY_FUTURE.EXE</b><span>— ◱ ×</span></div><div className="y2k-demo-body"><div className="y2k-demo-actions"><button className="y2k-button-primary" type="button" onClick={()=>setDownloaded(true)}>{downloaded?'DOWNLOADED ✓':'DOWNLOAD'} <ArrowUpRight size={15}/></button><button className="y2k-button-secondary" type="button" onClick={()=>setDownloaded(false)}>RESET</button><button className="y2k-button-icon" type="button" aria-label="Close demo" onClick={()=>setDownloaded(false)}><X size={17}/></button></div><div className="y2k-progress-label"><span>{downloaded?'FILE READY':'DOWNLOADING...'}</span><b>{downloaded?'100%':'72%'}</b></div><div className="y2k-progress"><i style={{width:downloaded?'100%':'72%'}}/></div><div className="y2k-demo-footer"><span><Heart size={15} fill="currentColor"/> PIXEL LOVE</span><span>ONLINE / 2001</span></div></div></div></div>
      <div className="y2k-motion-control"><div><Sparkles size={17}/><span><b>Motion preview</b><small>Toggle the specimen's subtle floating details.</small></span></div><button type="button" role="switch" aria-checked={motionOn} onClick={()=>setMotionOn(v=>!v)} className={`y2k-switch ${motionOn?'is-on':''}`}><i/></button></div>
    </section>

    <section className="y2k-live-section">
      <div className="y2k-section-meta"><span>07 / INTERACTION STUDY</span><span>CONNECT TO THE WEB</span></div>
      <div className="y2k-live-layout"><div className="y2k-live-copy"><h2>Enter the<br/><em>new world.</em></h2><p>A tiny interaction inspired by the anticipation of connecting to the early internet.</p></div><div className="y2k-live-window"><div className="y2k-live-title"><WindowControls/><b>CONNECTION_MANAGER.EXE</b><span>v2.0</span></div><div className="y2k-live-body" aria-live="polite"><Globe2 size={32}/><span>{online?'CONNECTION ESTABLISHED':'READY TO CONNECT'}</span><strong>{online?'YOU ARE ONLINE':'WELCOME, USER'}</strong><div className="y2k-live-meter"><i style={{width:online?'100%':'12%'}}/></div><button type="button" onClick={()=>setOnline(v=>!v)}>{online?'DISCONNECT ↻':'CONNECT TO THE WEB ↗'}</button></div></div></div>
    </section>

    <section className="y2k-use-section"><div className="y2k-section-meta"><span>08 / WHERE IT LIVES</span><span>Y2K, REIMAGINED</span></div><h2>Still shaping<br/><em>the future.</em></h2><div className="y2k-use-grid"><article><Disc3/><b>Music & creative media</b><span>Album artwork, visualizers and culture-led campaigns.</span><ArrowUpRight/></article><article><Gamepad2/><b>Gaming & entertainment</b><span>Playful interfaces, virtual worlds and collectible digital objects.</span><ArrowUpRight/></article><article><Smartphone/><b>Tech & digital brands</b><span>Product launches and expressive technology experiences.</span><ArrowUpRight/></article></div></section>

    <footer className="y2k-footer"><span>RYŪMA / DESIGN ANATOMY — 03.03</span><h2>THE FUTURE<br/><em>IS STILL FUN.</em></h2><p>Digital optimism, reimagined for a new generation.</p><button type="button" onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
  </main>;
}
