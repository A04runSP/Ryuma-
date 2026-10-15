import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import './dashboard.css';

const systems = [
  { no:'01', name:'Glassmorphism', note:'Transparency · depth · light', className:'dashboard-glass' },
  { no:'02', name:'Brutalism', note:'Structure · contrast · raw form', className:'dashboard-brutal' },
  { no:'03', name:'Minimalism', note:'Reduction · rhythm · clarity', className:'dashboard-minimal' },
  { no:'04', name:'Dark UI', note:'Contrast · atmosphere · focus', className:'dashboard-dark' },
  { no:'05', name:'Material Design', note:'Elevation · systems · motion', className:'dashboard-material' },
];

const history = [
  { no:'01', era:'ORIGINS', title:'Before screens.', copy:'Marks, symbols, objects and images became ways to communicate, identify and create meaning.', tag:'MARKS · SYMBOLS · OBJECTS', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lascaux_painting.jpg', source:'Lascaux cave painting' },
  { no:'02', era:'PRINT & TYPOGRAPHY', title:'The page becomes a system.', copy:'Printing and typography made visual communication reproducible, while type, margins and layout created repeatable structures.', tag:'TYPE · PAGE · REPRODUCTION', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gutenberg_bible.jpg', source:'Gutenberg Bible, c. 1453' },
  { no:'03', era:'INDUSTRIAL DESIGN', title:'Machines change the possibilities.', copy:'Mass production and new materials changed how objects were made, distributed and experienced at everyday scale.', tag:'MATERIAL · MANUFACTURING · SCALE', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/AssemblyLine.jpg', source:'Ford assembly line, 1913' },
  { no:'04', era:'MODERNISM', title:'Less becomes a language.', copy:'Function, geometry, grids and reduction became powerful tools for visual communication and designed objects.', tag:'GRID · GEOMETRY · FUNCTION', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Josef_Müller-Brockmann_1957.jpg', source:'Josef Müller-Brockmann / Swiss Style' },
  { no:'05', era:'DIGITAL DESIGN', title:'Design enters the screen.', copy:'Pixels, software and graphical interfaces introduced a new medium where visual systems could become interactive.', tag:'PIXELS · INTERFACE · INTERACTION', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Xerox_Alto_full.jpg', source:'Xerox Alto graphical interface, 1973' },
  { no:'06', era:'WEB DESIGN', title:'The interface becomes a place.', copy:'The Web moved design from individual screens toward connected documents, navigation and eventually responsive digital products.', tag:'WEB · HYPERLINK · RESPONSIVE', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/W3_First_Website.png', source:'First World Wide Web site' },
  { no:'07', era:'CONTEMPORARY', title:'Design becomes fluid.', copy:'Motion, 3D, generative systems, AI and spatial interfaces are expanding what a visual language can be.', tag:'MOTION · 3D · GENERATIVE', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mona_Lisa_2024.jpg', source:'Contemporary generative digital art' },
];

const foundations = [
  { no:'01', name:'Colour', copy:'Sets mood, creates emphasis and changes how elements are perceived.', cue:'HUE · VALUE · SATURATION' },
  { no:'02', name:'Type', copy:'Gives a design its voice through hierarchy, rhythm, scale and spacing.', cue:'VOICE · HIERARCHY · RHYTHM' },
  { no:'03', name:'Form', copy:'Creates shape and structure through geometry, proportion and visual weight.', cue:'SHAPE · SCALE · WEIGHT' },
  { no:'04', name:'Space', copy:'Controls relationships, focus and breathing room through distance and alignment.', cue:'GAP · ALIGNMENT · FOCUS' },
  { no:'05', name:'Motion', copy:'Adds time and response, showing how a system behaves rather than only how it looks.', cue:'TIME · TRANSITION · RESPONSE' },
];

const readingSteps = [
  { no:'01', title:'Observe', copy:'Start with what is visible. Notice colour, type, shape, spacing, movement and repetition before judging it.' },
  { no:'02', title:'Break down', copy:'Separate the visual decisions into parts. Ask what each element is doing and what changes when one part moves.' },
  { no:'03', title:'Find relationships', copy:'Look for hierarchy, contrast, alignment, rhythm and proportion. Design becomes clearer when the relationships are visible.' },
  { no:'04', title:'Ask why', copy:'Connect the decisions to purpose, audience, culture, technology and the medium they live in.' },
  { no:'05', title:'Rebuild', copy:'Use the same observations to recreate the logic. Understanding becomes useful when you can make a new system yourself.' },
];

const principles = [
  ['Hierarchy','Guide attention by making some things matter before others.'],
  ['Contrast','Create difference in scale, colour, weight or form so important things can be found.'],
  ['Balance','Distribute visual weight so a composition feels intentional rather than accidental.'],
  ['Rhythm','Use repetition and variation to create a sense of movement and order.'],
  ['Proportion','Control relationships between sizes so elements feel connected and purposeful.'],
  ['Consistency','Repeat rules across a system so separate parts feel like one language.'],
];

export default function Dashboard({ onNavigate }) {
  const [open, setOpen] = useState(null);
  const [historyOpen, setHistoryOpen] = useState(null);
  const goLibrary = () => onNavigate?.('library');
  const goHome = () => onNavigate?.('home');

  return <main className="dashboard-shell">
    <div className="dashboard-glow glow-a"/><div className="dashboard-glow glow-b"/><div className="dashboard-grain"/>
    <header className="dashboard-nav">
      <button className="dashboard-brand" onClick={goHome}><span>R</span><b>RYUMA</b><em>リューマ</em></button>
      <div className="dashboard-nav-title">DESIGN ANATOMY</div>
      <div className="dashboard-nav-actions"><button className="dashboard-back" onClick={goHome}><ArrowLeft size={15}/> BACK TO HOME</button><button className="dashboard-library" onClick={goLibrary}>LIBRARY <ArrowRight size={15}/></button></div>
    </header>

    <section className="dashboard-hero">
      <span className="dashboard-kicker">DESIGN ANATOMY / 01</span>
      <h1>Design is a<br/><span>system.</span></h1>
      <p>Look beyond the surface. Explore the decisions, influences and visual languages that make design feel the way it does.</p>
      <button className="dashboard-cta" onClick={goLibrary}>EXPLORE THE LIBRARY <ArrowRight size={18}/></button>
    </section>

    <section className="dashboard-story">
      <div className="story-intro"><span className="dashboard-kicker">01 / THE IDEA</span><h2>Design doesn't<br/><span>appear out of nowhere.</span></h2></div>
      <div className="story-copy"><p>Every visual language grows from choices. Culture changes what we value. Technology changes what we can make. Materials change what we can build.</p><p><strong>Over time, those influences become recognizable ways of seeing and making.</strong></p></div>
      <div className="influence-line"><span>CULTURE</span><i>→</i><span>TECHNOLOGY</span><i>→</i><span>MATERIAL</span><i>→</i><span>PEOPLE</span><i>→</i><b>DESIGN</b></div>
    </section>

    <section className="dashboard-systems">
      <div className="systems-heading"><div><span className="dashboard-kicker">02 / VISUAL LANGUAGES</span><h2>Explore the<br/><span>systems.</span></h2></div><p>Each design language makes a different set of decisions. Open one to see where its visual world will live.</p></div>
      <div className="system-list">{systems.map((system,index) => <article className={`system-row ${system.className} ${open===index?'is-open':''}`} key={system.name}>
        <button className="system-toggle" onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index}><span className="system-no">{system.no}</span><div><h3>{system.name}</h3><p>{system.note}</p></div><ChevronDown className="system-chevron" size={22}/></button>
        <div className="system-panel"><div className="system-preview"><span>LIVE PREVIEW</span><div className="preview-placeholder"><b>{system.name}</b><small>COLOUR · TYPE · FORM · SPACE</small></div></div><div className="system-panel-copy"><span>DESIGN LANGUAGE</span><p>Explore the complete learning environment, its visual rules, and its interactive examples.</p><button onClick={()=>onNavigate?.('view-style',system.name)}>EXPLORE STYLE <ArrowRight size={15}/></button></div></div>
      </article>)}</div>
    </section>

    <section className="dashboard-history" aria-label="Design history">
      <div className="history-heading"><div><span className="dashboard-kicker">03 / DESIGN HISTORY</span><h2>How visual language<br/><span>evolved.</span></h2></div><p>Design changes when culture, technology, materials and human needs change. Follow seven moments that shaped how we make and see things.</p></div>
      <div className="history-timeline">{history.map((item,index)=><article className={`history-card ${historyOpen===index?'is-open':''}`} key={item.no}>
        <button className="history-toggle" onClick={()=>setHistoryOpen(historyOpen===index?null:index)} aria-expanded={historyOpen===index}><span className="history-no">{item.no}</span><div><span className="history-era">{item.era}</span><h3>{item.title}</h3></div><ChevronDown className="history-chevron" size={22}/></button>
        <div className="history-panel"><div className="history-image-wrap"><img src={item.image} alt={item.source} loading="lazy"/><span>{item.source}</span></div><div className="history-copy"><p>{item.copy}</p><strong>{item.tag}</strong></div></div>
      </article>)}</div>
      <div className="history-thread"><span>CULTURE</span><i>→</i><span>TECHNOLOGY</span><i>→</i><span>MATERIAL</span><i>→</i><span>PEOPLE</span><i>→</i><b>DESIGN</b></div>
    </section>

    <section className="dashboard-foundations">
      <div className="foundations-heading"><div><span className="dashboard-kicker">04 / DESIGN FOUNDATIONS</span><h2>Meet the<br/><span>building blocks.</span></h2></div><p>Before a style becomes recognizable, it is assembled from a small set of visual decisions. Learn the parts before studying the whole.</p></div>
      <div className="foundation-grid">{foundations.map(item=><article className="foundation-card" key={item.no}><span className="foundation-no">{item.no}</span><h3>{item.name}</h3><p>{item.copy}</p><strong>{item.cue}</strong></article>)}</div>
      <div className="foundation-formula"><span>COLOUR</span><i>+</i><span>TYPE</span><i>+</i><span>FORM</span><i>+</i><span>SPACE</span><i>+</i><b>MOTION</b><em>= VISUAL LANGUAGE</em></div>
    </section>

    <section className="dashboard-reading">
      <div className="reading-heading"><div><span className="dashboard-kicker">05 / HOW TO READ DESIGN</span><h2>Don't stop at<br/><span>what you see.</span></h2></div><p>Use a repeatable process. The goal is not to guess what a designer was thinking, but to make the visible decisions and their relationships easier to understand.</p></div>
      <div className="reading-list">{readingSteps.map(step=><article className="reading-step" key={step.no}><span>{step.no}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}</div>
    </section>

    <section className="dashboard-principles">
      <div className="principles-heading"><span className="dashboard-kicker">06 / DESIGN PRINCIPLES</span><h2>Rules that create<br/><span>relationships.</span></h2><p>Principles describe how visual parts interact, compete, support one another and form a coherent system.</p></div>
      <div className="principles-grid">{principles.map(([title,copy],index)=><article className="principle-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="dashboard-language">
      <div><span className="dashboard-kicker">07 / VISUAL LANGUAGE</span><h2>When the parts<br/><span>start speaking.</span></h2></div>
      <div className="language-copy"><p>A visual language is what happens when individual choices stop feeling isolated and begin working as a recognizable system.</p><p><strong>Colour, type, form, space and motion reinforce one another.</strong> Principles give those choices structure. Culture, technology and purpose give them meaning.</p></div>
      <div className="language-chain"><span>PARTS</span><i>→</i><span>RELATIONSHIPS</span><i>→</i><span>RULES</span><i>→</i><b>LANGUAGE</b></div>
    </section>

    <section className="dashboard-end"><span className="dashboard-kicker">08 / NEXT</span><h2>Don't just look at design.<br/><span>Learn to read it.</span></h2><p>Take the framework into the Design Library and explore each visual language as a complete environment.</p><button className="dashboard-cta" onClick={goLibrary}>ENTER THE LIBRARY <ArrowRight size={18}/></button></section>
    <footer className="dashboard-footer"><span>RYUMA / DESIGN ANATOMY</span><span>SEE · BREAK DOWN · UNDERSTAND · CREATE</span></footer>
  </main>;
}
