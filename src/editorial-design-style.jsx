import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const cityPhoto='https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1800&q=85';
const cityDetail='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85';
const reference='https://i.pinimg.com/originals/5f/2b/22/5f2b228ba56911f77047c8ad29d542da.jpg';

const anatomy=[
 {n:'01',t:'Grid',d:'Columns give every story, image and caption a place to live.'},
 {n:'02',t:'Hierarchy',d:'Headline, deck, image and body copy create a clear reading order.'},
 {n:'03',t:'Typography',d:'Display type attracts attention while small text supports long reading.'},
 {n:'04',t:'Image',d:'Photography is cropped and positioned as part of the composition.'},
 {n:'05',t:'Information',d:'Dates, captions, folios and labels make the page feel complete.'}
];

const filler='After sunset, the city becomes a map of small decisions. Lit windows pull the eye upward, traffic draws bright lines across the street, and dark façades give each illuminated detail room to speak.';
const storyDetail='From the waterfront, the skyline reads as a sequence rather than a single view: a low band of buildings, a cluster of glass towers, then the narrow spire that anchors the composition. Distance softens the edges while the water carries the last colour of the evening.';
const storyClosing='The page follows the same logic. One image establishes place; a headline names the idea; short passages build context; captions and folios help the reader stay oriented. Each element has a different job, but all of them belong to the same visual argument.';

export default function EditorialDesignStyle({onNavigate}){
 return <main className="editorial-shell editorial-real">
  <header className="editorial-nav">
   <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button>
   <button className="editorial-brand" onClick={()=>onNavigate?.('home')}>RYŪMA <em>リューマ</em></button>
   <span>DESIGN ANATOMY / EDITORIAL DESIGN</span>
  </header>

  <section className="ed-masthead">
   <div className="ed-paper-top"><span>VOL. 07 / NO. 01</span><b>THE VISUAL REVIEW</b><span>04 SEPTEMBER 2026</span></div>
   <div className="ed-paper-rule" />
   <div className="ed-mast-grid">
    <div className="ed-mast-copy">
     <span className="ed-kicker">DESIGN ANATOMY / 07</span>
     <h1>EDITORIAL<br/><i>DESIGN</i></h1>
     <p className="ed-deck">A page is not a container for information. <b>It is a system that decides how information is experienced.</b></p>
     <div className="ed-byline">RYŪMA EDITORIAL DESK &nbsp;·&nbsp; VISUAL CULTURE</div>
    </div>
    <figure className="ed-mast-image"><img src={cityPhoto} alt="City skyline used as an editorial feature image"/><figcaption>FIG. 01 — VISUAL ENTRY POINT / CITY AFTER DARK</figcaption></figure>
   </div>
   <div className="ed-front-columns">
    <div><b>THE IDEA</b><p>Editorial design brings several kinds of information onto one surface and gives each one a role.</p></div>
    <div><b>THE JOB</b><p>Guide the eye without making the page feel like a collection of unrelated boxes.</p></div>
    <div className="ed-front-stat"><strong>01</strong><span>IMAGE<br/>TYPE<br/>GRID<br/>INFO</span></div>
   </div>
  </section>

  <section className="ed-explain">
   <div className="ed-section-head"><span>01 — AN EXAMPLE</span><h2>Read the<br/><i>whole page.</i></h2></div>
   <div className="ed-reference-layout">
    <figure className="ed-reference"><img src={reference} alt="Real editorial magazine spread with photography, headlines and columns"/><figcaption><span>REFERENCE / EDITORIAL SPREAD</span><span>WHAT MAKES IT WORK</span></figcaption></figure>
    <div className="ed-reference-copy">
     <div className="ed-callout"><b>THIS IS EDITORIAL DESIGN</b><p>The photograph is not sitting beside an explanation. Image, headline, columns, captions and graphic accents are designed as one page.</p></div>
     <ol>
      <li><b>01</b><span><strong>IMAGE</strong> establishes the visual entry point.</span></li>
      <li><b>02</b><span><strong>HEADLINE</strong> establishes the story and scale.</span></li>
      <li><b>03</b><span><strong>COLUMNS</strong> turn information into a reading path.</span></li>
      <li><b>04</b><span><strong>ACCENTS</strong> separate and emphasise key content.</span></li>
      <li><b>05</b><span><strong>DETAILS</strong> such as captions and folios finish the system.</span></li>
     </ol>
    </div>
   </div>
  </section>

  <section className="ed-definition">
   <div><span>THE IMPORTANT DIFFERENCE</span><h2>Not a picture<br/><i>with text.</i></h2></div>
   <div className="ed-definition-body"><p>Editorial design is the composition of information. A strong page can contain a photograph, a headline, a long article, a quote, a small fact, a caption and page navigation — and still feel like one intentional object.</p><div className="ed-definition-tags"><span>GRID</span><span>HIERARCHY</span><span>TYPE</span><span>IMAGE</span><span>INFORMATION</span></div></div>
  </section>

  <section className="ed-real">
   <div className="ed-real-head"><span>02 — NOW, SEE IT AS A REAL DESIGN</span><span>ORIGINAL RYŪMA FEATURE / AFTER DARK</span></div>
   <div className="ed-newspaper">
    <article className="ed-news-page ed-news-left">
     <div className="ed-news-header"><span>THE VISUAL REVIEW</span><b>AFTER DARK</b><span>07</span></div>
     <div className="ed-news-rule"/>
     <div className="ed-news-kicker">CITY / VISUAL CULTURE / NIGHT STUDY</div>
     <h2>WHEN THE<br/><i>CITY LIGHTS</i><br/>TAKE OVER.</h2>
     <p className="ed-news-deck">After sunset, architecture stops being background. Light, shadow and movement turn the street into a living composition.</p>
     <div className="ed-news-photo"><img src={cityPhoto} alt="City skyline at dusk"/><span>01 / LOWER MANHATTAN — 23:48</span></div>
     <div className="ed-news-bottom"><p>{filler}</p><div className="ed-quote">“Darkness gives the eye somewhere to travel.”</div></div>
    </article>

    <article className="ed-news-page ed-news-right">
     <div className="ed-news-header"><span>FEATURE / 08</span><b>THE NIGHT CITY</b><span>RYŪMA</span></div>
     <div className="ed-news-rule"/>
     <div className="ed-story-grid">
      <div className="ed-story-main">
       <span className="ed-story-label">01 — THE STORY</span>
       <p>{filler}</p><p>{filler}</p>
       <h3>Light creates<br/><i>hierarchy.</i></h3>
       <p>{filler}</p>
      </div>
      <aside className="ed-story-side">
       <img src={cityDetail} alt="City buildings detail"/>
       <small>FIG. 02 / URBAN DETAIL</small>
       <div className="ed-fact"><b>23:48</b><span>PEAK CITY LIGHT</span></div>
       <div className="ed-fact"><b>05</b><span>EDITORIAL ELEMENTS</span></div>
       <div className="ed-side-note">IMAGE / TYPE / QUOTE / CAPTION / FOLIO</div>
      </aside>
     </div>
     <div className="ed-news-footer"><span>TEXT / RYŪMA EDITORIAL DESK</span><span>THE VISUAL REVIEW · 08</span></div>
    </article>
   </div>
   <div className="ed-spread-note"><span>IMAGE</span><i>→</i><span>HEADLINE</span><i>→</i><span>ARTICLE</span><i>→</i><span>DETAIL</span></div>
  </section>

  <section className="ed-anatomy">
   <div className="ed-section-head"><span>03 — ANATOMY</span><h2>What makes<br/><i>the page work?</i></h2></div>
   <div className="ed-anatomy-grid">{anatomy.map(x=><article key={x.n}><b>{x.n}</b><h3>{x.t}</h3><p>{x.d}</p></article>)}</div>
  </section>

  <section className="ed-contrast">
   <div><span>04 — THE DIFFERENCE</span><h2>One page.<br/><i>Many jobs.</i></h2></div>
   <div className="ed-contrast-paper">
    <div className="ed-contrast-head"><b>EDITORIAL / 01</b><span>THE SYSTEM</span></div>
    <h3>Everything<br/><i>has a place.</i></h3>
    <div className="ed-contrast-grid">
      <div className="fake-photo" aria-label="Illustrated editorial page layout">
       <span className="fake-photo-kicker">FIELD NOTES / 07</span><b>THE<br/><i>SHAPE</i><br/>OF NIGHT</b><span className="fake-photo-columns"><i/><i/><i/></span><span className="fake-photo-folio">FIG. 01 — CITY STUDY</span>
      </div>
      <div><b>HEADLINE</b><p>Scale attracts the eye and names the story.</p></div>
      <div><b>ARTICLE</b><p>A short lead introduces the subject. Supporting paragraphs add context in a clear reading sequence.</p></div>
      <div><b>DETAIL</b><p>Caption · date · folio</p></div>
     </div>
   </div>
  </section>

  <footer className="ed-footer"><div><span>RYŪMA / DESIGN ANATOMY</span><h2>Design the way<br/><i>the story is read.</i></h2></div><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={16}/></button></footer>
 </main>;
}
