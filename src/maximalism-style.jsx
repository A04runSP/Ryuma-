import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './maximalism-style.css';

const anatomy=[
 {no:'01',title:'Colour',copy:'Metallic red, cream, yellow and red-pink collide to create energy, hierarchy and visual tension.'},
 {no:'02',title:'Type',copy:'Oversized headlines, mixed weights and unexpected scale make typography feel like an image.'},
 {no:'03',title:'Pattern',copy:'Repeating marks, stripes, dots and textures build density without relying on empty space.'},
 {no:'04',title:'Layer',copy:'Objects overlap, interrupt and compete. Depth comes from accumulation rather than restraint.'},
 {no:'05',title:'Contrast',copy:'Opposites sit together: loud and quiet, polished and rough, geometric and organic.'}
];

export default function MaximalismStyle({onNavigate}){
 return <main className="max-page">
  <header className="max-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button><div className="max-brand"><b>RYUMA</b><span>リューマ</span></div><span>EXPRESSIVE / 01</span></header>

  <section className="max-hero">
   <div className="max-hero-sticker">MORE<br/>IS<br/>MORE</div>
   <div className="max-hero-copy"><span className="max-kicker">01 / MAXIMALISM</span><h1>MAKE<br/><em>NOISE.</em></h1><p>Maximalism is not chaos without intention. It is the deliberate art of excess.</p></div>
   <div className="max-hero-art"><span className="max-sunburst"/><span className="max-circle one"/><span className="max-circle two"/><span className="max-star">✦</span><span className="max-orbit orbit-a"/><span className="max-orbit orbit-b"/><span className="max-hero-burst">WOW<br/>WOW<br/>WOW</span><span className="max-side-note">COLOR OUTSIDE THE LINES</span><b>LOUD<br/>VISUAL<br/>LANGUAGE</b><i>×</i></div>
  </section>

  <section className="max-intro"><span className="max-intro-stamp">NOT<br/>SUBTLE<br/>✳</span><div><span className="max-kicker">THE IDEA</span><h2>When everything<br/><em>wants attention.</em></h2></div><p>Maximalist design fills the canvas with colour, type, pattern, imagery and texture. The challenge is to make the abundance feel composed — not accidental.</p><strong>Excess becomes a system.</strong></section>

  <section className="max-anatomy"><div className="max-section-label"><span>03</span><b>DESIGN ANATOMY</b></div><div className="max-section-main"><h2>Five ingredients.<br/><em>Infinite combinations.</em></h2><div className="max-anatomy-grid">{anatomy.map(item=><article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

  <section className="max-colour"><div className="max-section-label"><span>04</span><b>COLOUR SYSTEM</b></div><div className="max-colour-main"><div className="max-colour-copy"><h2>Colour doesn't whisper.<br/><em>It collides.</em></h2><p>The palette is intentionally loud, but cream gives the eye somewhere to reset.</p></div><div className="max-palette"><div className="metal-red"><span>METALLIC<br/>RED</span></div><div className="cream"><span>CREAM</span></div><div className="yellow"><span>YELLOW</span></div><div className="red-pink"><span>RED + PINK</span></div></div></div></section>

  <section className="max-type"><div className="max-section-label"><span>05</span><b>TYPOGRAPHY</b></div><div className="max-type-main"><div className="type-collision"><span>BIG</span><strong>LOUD</strong><i>TYPE</i><b>EVERYWHERE</b><small>READ / FEEL / NOTICE</small></div><div><h2>Type becomes<br/><em>the artwork.</em></h2><p>Scale, rotation, overlap and contrast turn words into shapes. Readability still matters — but predictability doesn't.</p></div></div></section>

  <section className="max-composition"><div className="max-section-label"><span>06</span><b>COMPOSITION</b></div><div className="max-composition-main"><h2>Controlled<br/><em>chaos.</em></h2><div className="chaos-canvas"><span className="chaos-word a">WOW</span><span className="chaos-word b">FORM</span><span className="chaos-word c">PLAY</span><span className="chaos-dot d"/><span className="chaos-dot e"/><span className="chaos-line"/><span className="chaos-checker">✳ ✳ ✳<br/>✳ ✳ ✳</span><span className="chaos-sticker">TOO MUCH?<br/>GOOD.</span><span className="chaos-ring"/><span className="chaos-note">NOT RANDOM.<br/>COMPOSED.</span></div></div></section>

  <section className="max-rules"><div className="max-section-label"><span>07</span><b>THE RULES</b></div><div className="max-rules-main"><h2>Break the rules.<br/><em>Know why.</em></h2><div className="max-rule-list"><div><b>01</b><strong>Layer</strong><span>Let elements overlap and create visual depth.</span></div><div><b>02</b><strong>Amplify</strong><span>Push scale, colour and contrast until the composition has energy.</span></div><div><b>03</b><strong>Repeat</strong><span>Patterns and motifs create rhythm inside the abundance.</span></div><div><b>04</b><strong>Control</strong><span>Give the chaos a grid, a palette or a clear point of focus.</span></div></div></div></section>

  <footer className="max-footer"><span className="max-kicker">MAXIMALISM / EXPRESSIVE</span><h2>More colour.<br/><em>More type. More life.</em></h2><p>Maximalism turns visual abundance into a language of energy, personality and deliberate excess.</p><div><span>COLOUR · TYPE · PATTERN · LAYER · CONTRAST</span><span>RYUMA / DESIGN ANATOMY</span></div></footer>
 </main>;
}
