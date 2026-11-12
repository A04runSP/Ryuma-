import React, { useState } from 'react';
import {
  ArrowRight, BookOpen, Box, ChevronRight, Grid2X2, Layers3, Lightbulb,
  Monitor, MonitorSmartphone, Moon, MoveUpRight, Play, RotateCcw,
  Smartphone, Sun, Tablet, X
} from 'lucide-react';
import './fluent-design-style.css';

const foundations = [
  { id:'light', number:'01', title:'Light', description:'Illumination, reveal and visual hierarchy.', icon:Sun, detail:'Light directs attention, reveals important information and creates a clear visual focus. It should respond to context and interaction rather than decorate the interface.' },
  { id:'material', number:'02', title:'Material', description:'A sense of place through responsive surfaces.', icon:Layers3, detail:'Material gives digital surfaces context. Mica and Acrylic can connect an interface to its environment while maintaining readable contrast and clear content hierarchy.' },
  { id:'depth', number:'03', title:'Depth', description:'Layering, elevation and spatial context.', icon:Box, detail:'Depth communicates what is in front, what belongs together and where attention should go. Elevation should be intentional and consistent.' },
  { id:'motion', number:'04', title:'Motion', description:'Purposeful, natural movement and transitions.', icon:Play, detail:'Motion connects interface states. It helps people understand change, preserve context and build a sense of continuity.' },
  { id:'adaptation', number:'05', title:'Adaptation', description:'Responsive across devices and input methods.', icon:MonitorSmartphone, detail:'Adaptation keeps the experience coherent across screen sizes, orientations, pointer, touch and keyboard input.' }
];

function FluentMark() {
  return <div className="fluent-mark" aria-label="Fluent four-pane mark"><i/><i/><i/><i/></div>;
}

export default function FluentDesignStyle({ onNavigate }) {
  const [activeFoundation, setActiveFoundation] = useState('light');
  const [lightOn, setLightOn] = useState(true);
  const [material, setMaterial] = useState('Mica');
  const [elevation, setElevation] = useState(2);
  const [motion, setMotion] = useState('Fade');
  const [device, setDevice] = useState('desktop');
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [demoKey, setDemoKey] = useState(0);

  const selected = foundations.find(item => item.id === activeFoundation) || foundations[0];
  const SelectedIcon = selected.icon;

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start' });
  };

  return (
    <main className="fluent-page">
      <header className="fluent-topbar">
        <button className="fluent-brand" onClick={() => onNavigate?.('library')} aria-label="Back to Ryūma design library">
          <span className="fluent-brand-symbol"><i/><i/><i/><i/></span>
          <span><strong>Ryūma</strong><small>Design Anatomy</small></span>
        </button>
        <nav className="fluent-topnav" aria-label="Primary navigation">
          <button className="is-current" onClick={() => goTo('fluent-overview')}>Design Library</button>
          <button onClick={() => goTo('fluent-foundations')}>Components</button>
          <button onClick={() => goTo('fluent-action')}>Patterns</button>
          <button onClick={() => goTo('fluent-guidelines')}>Anatomy</button>
        </nav>
        <button className="fluent-top-back" onClick={() => onNavigate?.('library')}>All styles <ArrowRight size={15}/></button>
      </header>

      <div className="fluent-layout">
        <aside className="fluent-sidebar" aria-label="Fluent Design sections">
          <div className="fluent-sidebar-heading"><Grid2X2 size={19}/><strong>Design Library</strong></div>
          <button className="fluent-side-link is-active" onClick={() => goTo('fluent-overview')}><Grid2X2 size={18}/>Overview</button>
          <span className="fluent-side-caption">IN THIS STYLE</span>
          {foundations.map(item => {
            const Icon = item.icon;
            return <button key={item.id} className={'fluent-side-link' + (activeFoundation===item.id?' is-selected':'')} onClick={() => {setActiveFoundation(item.id);goTo('fluent-foundations')}}><Icon size={18}/>{item.title}</button>;
          })}
          <span className="fluent-side-caption fluent-side-divider">OTHER STYLES</span>
          {['Material Design','Swiss Design','Bauhaus','Cyberpunk'].map((name,index)=><button key={name} className="fluent-other-style" onClick={() => onNavigate?.('view-style', name==='Swiss Design'?'Swiss / International Style':name)}><span className={'fluent-style-dot dot-'+index}>{['M','S','B','C'][index]}</span>{name}</button>)}
          <button className="fluent-sidebar-return" onClick={() => onNavigate?.('library')}><ArrowRight size={15}/> Browse all styles</button>
        </aside>

        <div className="fluent-content">
          <section className="fluent-hero" id="fluent-overview">
            <div className="fluent-breadcrumb"><span>Design Library</span><ChevronRight size={13}/><strong>Fluent Design</strong></div>
            <div className="fluent-hero-copy">
              <span className="fluent-eyebrow">DESIGN LANGUAGE / 02.03</span>
              <h1>Fluent Design</h1>
              <p>A design language shaped by light, material, depth, motion and adaptation — bringing clarity and continuity to modern digital experiences.</p>
              <div className="fluent-hero-actions">
                <button className="fluent-primary-button" onClick={() => goTo('fluent-foundations')}>Explore Anatomy <ArrowRight size={17}/></button>
                <button className="fluent-secondary-button" onClick={() => setShowGuidelines(true)}><BookOpen size={18}/> Design Guidelines</button>
              </div>
            </div>
            <div className="fluent-hero-visual" aria-hidden="true">
              <div className="fluent-ribbon ribbon-one"/><div className="fluent-ribbon ribbon-two"/><div className="fluent-ribbon ribbon-three"/>
              <FluentMark/>
            </div>
          </section>

          <section className="fluent-foundations-section" id="fluent-foundations">
            <div className="fluent-section-heading">
              <div className="fluent-heading-icon"><Layers3 size={25}/></div>
              <div><h2>The Five Foundations</h2><p>Core principles that shape Fluent Design.</p></div>
            </div>
            <div className="fluent-foundation-grid">
              {foundations.map(item => {
                const Icon = item.icon;
                return <button key={item.id} className={'fluent-foundation-card' + (activeFoundation===item.id?' is-active':'')} onClick={() => setActiveFoundation(item.id)} aria-pressed={activeFoundation===item.id}>
                  <Icon size={29} strokeWidth={1.8}/>
                  <span className="fluent-card-number">{item.number}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <span className="fluent-card-more">Explore principle <ArrowRight size={14}/></span>
                </button>;
              })}
            </div>
            <div className="fluent-foundation-detail" aria-live="polite">
              <div className="fluent-detail-icon"><SelectedIcon size={23}/></div>
              <div><span>{selected.number} / SELECTED FOUNDATION</span><h3>{selected.title}</h3><p>{selected.detail}</p></div>
              <button onClick={() => goTo('fluent-action')}>See it in action <ArrowRight size={16}/></button>
            </div>
          </section>

          <section className="fluent-action-section" id="fluent-action">
            <div className="fluent-action-main">
              <div className="fluent-section-heading">
                <div className="fluent-heading-icon"><Lightbulb size={25}/></div>
                <div><h2>Fluent in Action</h2><p>Adjust the system and see the interface respond.</p></div>
              </div>
              <div className="fluent-demo-layout">
                <div className={'fluent-live-preview ' + (lightOn?'light-enabled':'light-disabled') + ' elevation-'+elevation + ' motion-'+motion.toLowerCase()} key={demoKey}>
                  <div className="fluent-preview-wallpaper"><span/><i/><b/></div>
                  <div className="fluent-preview-window">
                    <div className="fluent-preview-windowbar"><span/><span/><span/></div>
                    <div className="fluent-preview-windowbody"><div className="fluent-preview-appicon"><FluentMark/></div><strong>Your workspace</strong><p>A calm space for focused work.</p><div className="fluent-preview-skeleton"><i/><i/><i/></div><button onClick={() => setDemoKey(v=>v+1)}>Try interaction <ArrowRight size={13}/></button></div>
                  </div>
                  {lightOn&&<div className="fluent-preview-reveal"/>}
                </div>
                <div className="fluent-controls">
                  <div className="fluent-control-row">
                    <div className="fluent-control-label"><Sun size={18}/><span>Light Reveal</span></div>
                    <button className={'fluent-switch'+(lightOn?' is-on':'')} role="switch" aria-checked={lightOn} aria-label="Toggle light reveal" onClick={()=>setLightOn(v=>!v)}><i/></button>
                  </div>
                  <div className="fluent-control-row">
                    <div className="fluent-control-label"><Layers3 size={18}/><span>Surface Material</span></div>
                    <div className="fluent-segmented" role="group" aria-label="Surface material">{['None','Mica','Acrylic'].map(value=><button key={value} className={material===value?'is-active':''} aria-pressed={material===value} onClick={()=>setMaterial(value)}>{value}</button>)}</div>
                  </div>
                  <div className="fluent-control-row">
                    <div className="fluent-control-label"><Layers3 size={18}/><span>Elevation (Depth)</span></div>
                    <div className="fluent-segmented compact" role="group" aria-label="Elevation">{[0,1,2,3].map(value=><button key={value} className={elevation===value?'is-active':''} aria-pressed={elevation===value} onClick={()=>setElevation(value)}>{value}</button>)}</div>
                  </div>
                  <div className="fluent-control-row">
                    <div className="fluent-control-label"><Play size={18}/><span>Motion</span></div>
                    <div className="fluent-segmented" role="group" aria-label="Motion style">{['Fade','Slide','Scale'].map(value=><button key={value} className={motion===value?'is-active':''} aria-pressed={motion===value} onClick={()=>setMotion(value)}>{value}</button>)}</div>
                  </div>
                  <p className="fluent-control-note">Selected: {material} surface · Elevation {elevation} · {motion} transition</p>
                </div>
              </div>
            </div>
            <aside className="fluent-material-card">
              <div className={'fluent-material-stack material-'+material.toLowerCase()}><i/><i/><i/></div>
              <h3>{material} Surface</h3>
              <p>{material==='None'?'A flat, uninterrupted surface with no added translucency.':material==='Mica'?'A subtle, adaptive material that samples the desktop backdrop.':'A translucent material that lets background context show through.'}</p>
              <div className="fluent-material-swatches"><button className="swatch-blue" onClick={()=>setMaterial('Mica')} aria-label="Select Mica"/><button className="swatch-cyan" onClick={()=>setMaterial('Acrylic')} aria-label="Select Acrylic"/><button className="swatch-violet" onClick={()=>setMaterial('None')} aria-label="Select no material"/><button className="swatch-neutral" onClick={()=>setLightOn(v=>!v)} aria-label="Toggle light reveal"/></div>
            </aside>
          </section>

          <section className="fluent-adaptation-section" id="fluent-guidelines">
            <div className="fluent-adaptation-copy">
              <div className="fluent-section-heading"><div className="fluent-heading-icon"><MonitorSmartphone size={25}/></div><div><h2>Adaptive Layout</h2><p>One system, different form factors.</p></div></div>
              <p className="fluent-adaptation-description">The interface changes its composition to suit the available space while keeping navigation, hierarchy and essential actions familiar.</p>
              <div className="fluent-device-picker" role="group" aria-label="Choose device preview">
                <button className={device==='desktop'?'is-active':''} onClick={()=>setDevice('desktop')} aria-pressed={device==='desktop'}><Monitor size={23}/><span>Desktop</span></button>
                <button className={device==='tablet'?'is-active':''} onClick={()=>setDevice('tablet')} aria-pressed={device==='tablet'}><Tablet size={23}/><span>Tablet</span></button>
                <button className={device==='mobile'?'is-active':''} onClick={()=>setDevice('mobile')} aria-pressed={device==='mobile'}><Smartphone size={23}/><span>Mobile</span></button>
              </div>
            </div>
            <div className={'fluent-device-stage device-'+device}>
              <div className="fluent-device-frame"><div className="fluent-device-top"><i/><i/><i/></div><div className="fluent-device-body"><div className="fluent-device-sidebar"/><div className="fluent-device-main"><b/><i/><i/><span/><span/><span/></div></div></div>
              <span className="fluent-device-caption">{device.toUpperCase()} / RESPONSIVE PREVIEW</span>
            </div>
          </section>

          <footer className="fluent-footer">
            <div><span className="fluent-eyebrow">RYŪMA / DESIGN ANATOMY</span><h2>Designed to<br/><em>feel connected.</em></h2><p>Explore the details behind a design language built around clarity, continuity and context.</p></div>
            <button onClick={()=>onNavigate?.('library')}>Back to Design Library <ArrowRight size={16}/></button>
          </footer>
        </div>
      </div>

      {showGuidelines&&<div className="fluent-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setShowGuidelines(false)}}><section className="fluent-guidelines-modal" role="dialog" aria-modal="true" aria-labelledby="fluent-guidelines-title"><button className="fluent-modal-close" onClick={()=>setShowGuidelines(false)} aria-label="Close guidelines"><X size={19}/></button><span className="fluent-eyebrow">DESIGN REFERENCE</span><h2 id="fluent-guidelines-title">Fluent Design Guidelines</h2><p>Use these principles as a practical checklist when designing a Fluent interface.</p><ul><li><strong>Clarity first.</strong> Keep content readable and controls predictable.</li><li><strong>Material with purpose.</strong> Use Mica and Acrylic to establish context, not as decoration.</li><li><strong>Meaningful depth.</strong> Use elevation to show hierarchy and focus.</li><li><strong>Motion with intent.</strong> Animate state changes and respect reduced motion.</li><li><strong>Adapt to input.</strong> Support touch, pointer, keyboard and different screen sizes.</li></ul><button className="fluent-primary-button" onClick={()=>setShowGuidelines(false)}>Got it <ArrowRight size={16}/></button></section></div>}
    </main>
  );
}
