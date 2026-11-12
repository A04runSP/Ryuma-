import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './minimalism-style.css';

const principles = [
  { number: '01', title: 'Reduce', description: 'Remove elements that do not clarify the message or help complete the task.' },
  { number: '02', title: 'Align', description: 'Use a consistent grid so relationships are clear before decoration is added.' },
  { number: '03', title: 'Emphasize', description: 'Create one clear focal point through scale, weight or contrast.' },
  { number: '04', title: 'Breathe', description: 'Use negative space to separate ideas and make the important content easier to read.' },
];

const anatomy = [
  { number: '01', title: 'Colour', description: 'A restrained palette establishes hierarchy. Neutral foundations can be supported by one deliberate accent.' },
  { number: '02', title: 'Typography', description: 'A small type family and clear scale create emphasis without relying on ornament.' },
  { number: '03', title: 'Form', description: 'Basic geometry and consistent edges make the structure immediately legible.' },
  { number: '04', title: 'Space', description: 'Margins, gutters and line length define rhythm as much as the visible objects do.' },
  { number: '05', title: 'Motion', description: 'Transitions are brief and functional, helping people understand a change of state.' },
];

export default function MinimalismStyle({ onNavigate }) {
  return (
    <main className="minimalism-page">
      <header className="minimalism-nav">
        <button className="minimalism-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> DESIGN LIBRARY</button>
        <a className="minimalism-brand" href="#/" aria-label="Ryuma home">RYUMA <span>リューマ</span></a>
        <span className="minimalism-nav-index">DESIGN LANGUAGE / 01</span>
      </header>

      <section className="minimalism-hero">
        <div className="minimalism-hero-copy">
          <span className="minimalism-eyebrow">01 / FOUNDATION</span>
          <h1>Less.<br /><span>But better.</span></h1>
          <p className="minimalism-lead">Make room for what matters.</p>
          <p className="minimalism-intro">Minimalism is not the absence of design. It is the deliberate removal of everything that competes with its purpose.</p>
          <div className="minimalism-swatches" aria-label="Minimalism poster colour palette">
            <span title="Near black #0F0F0F" className="swatch-charcoal" />
            <span title="Soft ivory #F5F1E8" className="swatch-ivory" />
            <span title="Powder blue #8FB8E8" className="swatch-blue" />
            <span title="Warm brown #A66B3D" className="swatch-clay" />
          </div>
        </div>
        <div className="minimalism-poster" role="img" aria-label="Editorial Minimalism poster: bold black THE ESSENTIAL typography over a powder-blue square, a small brown circle containing the Minimalism description, and a curved brown underline">
          <div className="poster-meta"><span>FORM STUDY — 001</span><span>2026</span></div>
          <div className="poster-number">01</div>
          <div className="poster-square" aria-hidden="true" />
          <div className="poster-title">THE<br /><i>ESSENTIAL.</i></div>
          <svg className="poster-underline" viewBox="0 0 720 52" preserveAspectRatio="none" aria-hidden="true">
            <path d="M5 39 Q360 -15 715 39" />
          </svg>
          <div className="poster-circle">
            <span className="poster-circle-mark" aria-hidden="true" />
            <strong>Minimalism</strong>
            <p>The art of<br />international<br />reduction.</p>
          </div>
          <div className="poster-descriptor">SPACE /<br />FORM /<br />TYPE /<br />BALANCE</div>
          <div className="poster-foot"><span>RYŪMA — DESIGN ANATOMY</span><span>01—05</span></div>
        </div>
      </section>

      <section className="minimalism-section minimalism-idea">
        <div className="minimalism-section-label"><span>02</span><b>THE IDEA</b></div>
        <div className="minimalism-section-body">
          <h2>Remove the noise.<br /><em>Keep the meaning.</em></h2>
          <p className="minimalism-section-lead">Every element asks for attention. Minimalism makes sure that attention is spent on the right things.</p>
          <div className="minimalism-equation"><span>LESS DECORATION</span><b>→</b><span>MORE CLARITY</span></div>
        </div>
      </section>

      <section className="minimalism-section">
        <div className="minimalism-section-label"><span>03</span><b>DESIGN ANATOMY</b></div>
        <div className="minimalism-section-body">
          <h2>Five parts.<br /><em>One quiet system.</em></h2>
          <div className="minimalism-anatomy">
            {anatomy.map(item => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="minimalism-section">
        <div className="minimalism-section-label"><span>04</span><b>TYPE & GRID</b></div>
        <div className="minimalism-section-body">
          <h2>Structure creates<br /><em>quiet confidence.</em></h2>
          <div className="minimalism-type-specimen">
            <div className="type-specimen-head"><span>TYPOGRAPHY / SCALE</span><span>01—04</span></div>
            <div className="type-row type-display"><span>Display</span><strong>Aa</strong><small>Large / expressive</small></div>
            <div className="type-row type-heading"><span>Heading</span><strong>Clear hierarchy</strong><small>Medium / strong</small></div>
            <div className="type-row type-body"><span>Body</span><strong>Readable by design.</strong><small>Regular / calm</small></div>
            <div className="type-row type-label"><span>Label</span><strong>DETAIL / 001</strong><small>Compact / precise</small></div>
            <div className="minimalism-grid-demo" aria-label="Example twelve-column layout grid">
              {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
            </div>
            <p className="grid-caption">A consistent grid gives every element a clear place to belong.</p>
          </div>
        </div>
      </section>

      <section className="minimalism-section minimalism-composition-section">
        <div className="minimalism-section-label"><span>05</span><b>COMPOSITION</b></div>
        <div className="minimalism-section-body">
          <h2>Space is part<br /><em>of the design.</em></h2>
          <div className="minimalism-product-poster">
            <div className="product-copy"><span>OBJECT STUDY / 01</span><strong>STILL<br />LIGHT.</strong><small>FORM FOLLOWS PURPOSE</small><p>A quieter kind of light.<br />Made for everyday living.</p></div>
            <div className="minimalism-lamp" aria-hidden="true"><i className="lamp-shade" /><i className="lamp-neck" /><i className="lamp-stem" /><i className="lamp-base" /><i className="lamp-ground" /></div>
            <div className="product-caption">STILL LIGHT <b>—</b> OBJECTS FOR EVERYDAY</div>
          </div>
        </div>
      </section>

      <section className="minimalism-section">
        <div className="minimalism-section-label"><span>06</span><b>THE RULES</b></div>
        <div className="minimalism-section-body">
          <h2>Simple doesn't mean<br /><em>easy.</em></h2>
          <div className="minimalism-rules">
            {principles.map(item => <div key={item.number}><span>{item.number}</span><strong>{item.title}</strong><p>{item.description}</p></div>)}
          </div>
        </div>
      </section>

      <footer className="minimalism-footer">
        <span className="minimalism-eyebrow">MINIMALISM / 01</span>
        <h2>Nothing extra.<br /><em>Nothing missing.</em></h2>
        <p>A visual language built from clarity, restraint and intention.</p>
        <div><span>COLOUR · TYPE · FORM · SPACE · MOTION</span><span>RYUMA / DESIGN ANATOMY</span></div>
      </footer>
    </main>
  );
}
