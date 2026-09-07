import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './ryuma-brand.css';
import './glass-preview.css';
import './dashboard.css';
import './library.css';
import './brutalism-style.css';
import './skeuomorphism-style.css';
import './aurora-gradient-design-style.css';
import './aurora-brightness.css';
import './home-mobile-fix.css';
import './dark-ui-style.css';
import './maximalism-style.css';
import './maximalism-fixes.css';
import './retro-vintage-style.css';
import './y2k-style.css';
import './memphis-design-style.css';
import './editorial-design-style.css';
import './editorial-design-enhancements.css';
import './organic-natural-design-style.css';
import Dashboard from './dashboard.jsx';
import Library from './library.jsx';
import ViewStyle from './view-style.jsx';
import GlassmorphismStyle from './glassmorphism-style.jsx';
import NeomorphismStyle from './neomorphism-style.jsx';
import BrutalismStyle from './brutalism-style.jsx';
import SkeuomorphismStyle from './skeuomorphism-style.jsx';
import FlatDesignStyle from './flat-design-style.jsx';
import MaterialDesignStyle from './material-design-style.jsx';
import FluentDesignStyle from './fluent-design-style.jsx';
import ClaymorphismDesignStyle from './claymorphism-design-style.jsx';
import AuroraGradientDesignStyle from './aurora-gradient-design-style.jsx';
import DarkUIStyle from './dark-ui-style.jsx';
import MaximalismStyle from './maximalism-style.jsx';
import RetroVintageStyle from './retro-vintage-style.jsx';
import Y2KStyle from './y2k-style.jsx';
import MemphisDesignStyle from './memphis-design-style.jsx';
import EditorialDesignStyle from './editorial-design-style.jsx';
import OrganicNaturalDesignStyle from './organic-natural-design-style.jsx';

const previews = [
  { name: 'Glassmorphism', className: 'preview-glass', accent: 'Soft surfaces, depth & light' },
  { name: 'Brutalism', className: 'preview-brutal', accent: 'Raw structure, bold contrast' },
  { name: 'Minimalism', className: 'preview-minimal', accent: 'Reduction, rhythm & clarity' },
  { name: 'Dark UI', className: 'preview-dark', accent: 'Contrast, atmosphere & focus' },
  { name: 'Material', className: 'preview-material', accent: 'Systems, motion & hierarchy' },
];
const anatomy = [
  { name:'Colour',mark:'COLOUR',copy:'Sets the mood, creates emphasis and shapes perception.',className:'anatomy-colour' },
  { name:'Type',mark:'TYPE',copy:'Gives a design its voice, rhythm and hierarchy.',className:'anatomy-type' },
  { name:'Form',mark:'FORM',copy:'Creates shape, structure and visual character.',className:'anatomy-form' },
  { name:'Space',mark:'SPACE',copy:'Builds rhythm, focus and room to breathe.',className:'anatomy-space' },
  { name:'Motion',mark:'MOTION',copy:'Brings the system alive through movement and response.',className:'anatomy-motion' },
];
function AnatomyVisual({type}){if(type==='anatomy-colour')return <div className="anatomy-visual colour-visual"><span className="colour-wheel"/><b className="colour-wheel-core"/></div>;if(type==='anatomy-type')return <div className="anatomy-visual type-visual"><span>Aa</span><b>Aa</b></div>;if(type==='anatomy-form')return <div className="anatomy-visual form-visual"><i className="form-circle"/><i className="form-square"/><i className="form-triangle"/></div>;if(type==='anatomy-space')return <div className="anatomy-visual space-visual"><i className="space-orbit"/><i className="space-orbit small"/><b/></div>;return <div className="anatomy-visual motion-visual"><i className="motion-track"/><i className="motion-dot one"/><i className="motion-dot two"/><i className="motion-dot three"/></div>}
function HomePage({onNavigate}){const[active,setActive]=useState(0);useEffect(()=>{const timer=window.setInterval(()=>setActive(c=>(c+1)%previews.length),2500);return()=>window.clearInterval(timer)},[]);const jumpIn=()=>onNavigate('dashboard');return <main className="home-shell"><div className="aurora aurora-one"/><div className="aurora aurora-two"/><div className="aurora aurora-three"/><div className="grain"/><nav className="topbar"><div className="brand-lockup"><span className="brand-mark">R</span><span className="brand-name"><span className="brand-english">RYUMA</span><span className="brand-japanese">リューマ</span></span></div><span className="product-label">DESIGN ANATOMY</span></nav><section className="hero"><h1>Design has a<br/><span>language.</span></h1><p className="hero-copy">Explore the visual systems behind the designs you see — and discover how colour, type, form, space and motion work together.</p><button className="jump-button" onClick={jumpIn}><span>JUMP IN</span><ArrowRight size={18}/></button></section><section className="anatomy-definition"><div className="definition-copy"><span className="section-kicker">WHAT IS DESIGN ANATOMY?</span><h2>A way to see<br/><span>what makes design work.</span></h2><p>A design can look simple, complex, beautiful or strange. Underneath, it is built from a series of visual decisions.</p><p><strong>Design Anatomy breaks those decisions apart, so you can understand what you're looking at — and why it works.</strong></p></div><div className="definition-process"><span>SEE</span><i>→</i><span>BREAK DOWN</span><i>→</i><span>UNDERSTAND</span><i>→</i><span>CREATE</span></div><div className="definition-close"><strong>Don't just look at design.</strong><span>Learn to read it.</span></div></section><section className="anatomy-section"><div className="anatomy-intro"><span className="section-kicker">DESIGN ANATOMY</span><h2>Look closer.</h2><p>Design isn't just what you see.<br/><strong>It's a system of decisions.</strong></p></div><div className="anatomy-stage"><div className="anatomy-orbit orbit-one"/><div className="anatomy-orbit orbit-two"/>{anatomy.map((item,index)=><article className={`anatomy-item ${item.className}`} key={item.name} style={{'--i':index}}><AnatomyVisual type={item.className}/><span className="anatomy-mark">{item.mark}</span><div><h3>{item.name}</h3><p>{item.copy}</p></div></article>)}</div><p className="anatomy-note">Colour · Type · Form · Space · Motion</p></section><section className="preview-section"><div className="section-meta"><div><span className="section-kicker">LIVE PREVIEW</span><h2>Watch design change.</h2></div><div className="preview-counter"><strong>0{active+1}</strong> / 0{previews.length}</div></div><div className="preview-stage">{previews.map((preview,index)=><article key={preview.name} className={`preview-card ${preview.className} ${index===active?'is-active':''}`}><div className="preview-art"><div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/><div className="art-block block-a"/><div className="art-block block-b"/><div className="art-type">Aa</div><div className="art-line"/></div><div className="preview-caption"><div><span>DESIGN LANGUAGE</span><h3>{preview.name}</h3></div><p>{preview.accent}</p></div></article>)}</div><div className="preview-dots">{previews.map((preview,index)=><button key={preview.name} className={index===active?'active':''} onClick={()=>setActive(index)} aria-label={`Show ${preview.name}`}/>)}</div><button className="jump-button secondary" onClick={jumpIn}><span>JUMP IN</span><ArrowRight size={18}/></button></section><footer className="home-footer"><span>RYUMA / DESIGN ANATOMY</span><span>LIVING COMPONENTS · UNLIMITED MOTION</span></footer></main>}

function App(){const[page,setPage]=useState('home');const[style,setStyle]=useState('Minimalism');useEffect(()=>{const handler=e=>{const target=e.detail;if(typeof target==='object'){setPage(target.page||'home');setStyle(target.style||'Minimalism')}else setPage(target||'home')};window.addEventListener('ryuma:navigate',handler);return()=>window.removeEventListener('ryuma:navigate',handler)},[]);useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'instant'})},[page,style]);const navigate=(target,selectedStyle)=>{if(target==='view-style'){setStyle(selectedStyle||'Minimalism');setPage('view-style');return}setPage(target)};if(page==='dashboard')return <Dashboard onNavigate={navigate}/>;if(page==='library')return <Library onNavigate={navigate}/>;if(page==='view-style'){if(style==='Glassmorphism')return <GlassmorphismStyle onNavigate={navigate}/>;if(style==='Neomorphism'||style==='Neumorphism')return <NeomorphismStyle onNavigate={navigate}/>;if(style==='Brutalism')return <BrutalismStyle onNavigate={navigate}/>;if(style==='Skeuomorphism')return <SkeuomorphismStyle onNavigate={navigate}/>;if(style==='Flat Design')return <FlatDesignStyle onNavigate={navigate}/>;if(style==='Material Design')return <MaterialDesignStyle onNavigate={navigate}/>;if(style==='Fluent Design')return <FluentDesignStyle onNavigate={navigate}/>;if(style==='Claymorphism')return <ClaymorphismDesignStyle onNavigate={navigate}/>;if(style==='Aurora Gradient Design')return <AuroraGradientDesignStyle onNavigate={navigate}/>;if(style==='Dark UI')return <DarkUIStyle onNavigate={navigate}/>;if(style==='Maximalism')return <MaximalismStyle onNavigate={navigate}/>;if(style==='Retro / Vintage')return <RetroVintageStyle onNavigate={navigate}/>;if(style==='Y2K')return <Y2KStyle onNavigate={navigate}/>;if(style==='Memphis Design')return <MemphisDesignStyle onNavigate={navigate}/>;if(style==='Editorial Design')return <EditorialDesignStyle onNavigate={navigate}/>;if(style==='Organic / Natural Design')return <OrganicNaturalDesignStyle onNavigate={navigate}/>;return <ViewStyle style={style} onNavigate={navigate}/>};return <HomePage onNavigate={navigate}/>}
// Organic / Natural Design is wired as a dedicated expressive design system.
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
