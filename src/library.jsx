import React from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import './library.css';

const groups = [
  { id:'01', title:'Foundation', subtitle:'The building blocks of visual language.', styles:['Minimalism','Glassmorphism','Neumorphism','Brutalism','Skeuomorphism'] },
  { id:'02', title:'Modern Digital', subtitle:'Design languages shaped by digital tools and interfaces.', styles:['Flat Design','Material Design','Fluent Design','Claymorphism','Aurora Gradient Design','Dark UI'] },
  { id:'03', title:'Expressive / Creative', subtitle:'Styles built around personality, abundance and visual expression.', styles:['Maximalism','Retro / Vintage','Y2K','Memphis Design','Editorial Design','Organic / Natural Design'] },
  { id:'04', title:'Advanced / Specialized', subtitle:'Distinct systems with strong historical or specialized identities.', styles:['Swiss / International Style','Bauhaus','Cyberpunk'] },
];

export default function Library({ onNavigate }) {
  return <main className="library-shell">
    <div className="library-glow library-glow-a"/><div className="library-glow library-glow-b"/><div className="library-grain"/>
    <header className="library-nav">
      <button className="library-back" onClick={()=>onNavigate?.('dashboard')}><ArrowLeft size={15}/> DASHBOARD</button>
      <button className="library-brand" onClick={()=>onNavigate?.('home')}><b>RYUMA</b><em>リューマ</em></button>
      <button className="library-search" aria-label="Search design library"><Search size={17}/></button>
    </header>
    <section className="library-hero"><span className="library-kicker">DESIGN ANATOMY / 03</span><h1>Design<br/><span>Library.</span></h1><p>A catalogue of visual languages. Explore the ideas, characteristics and systems that make each style distinct.</p><div className="library-meta"><span>04 CATEGORIES</span><i>·</i><span>20+ DESIGN LANGUAGES</span></div></section>
    <section className="library-collection">{groups.map(group => <section className="library-group" key={group.id}><div className="library-group-head"><div><span className="library-number">{group.id}</span><h2>{group.title}</h2></div><p>{group.subtitle}</p></div><div className="library-grid">{group.styles.map((style,index)=><button className="library-card" key={style} onClick={()=>onNavigate?.('view-style',style)}><span className="library-card-number">{group.id}.{String(index+1).padStart(2,'0')}</span><div className="library-card-art"><span>{style.split(' ').map(word=>word[0]).join('').slice(0,3)}</span></div><div className="library-card-info"><h3>{style}</h3><span>VIEW STYLE <ArrowRight size={14}/></span></div></button>)}</div></section>)}</section>
    <section className="library-end"><span className="library-kicker">DESIGN N → N+1</span><h2>The library<br/><span>keeps growing.</span></h2><p>New design languages can be added without rebuilding the ones already here.</p></section>
    <footer className="library-footer"><span>RYUMA / DESIGN ANATOMY</span><button onClick={()=>onNavigate?.('dashboard')}>BACK TO DASHBOARD <ArrowLeft size={14}/></button></footer>
  </main>;
}
