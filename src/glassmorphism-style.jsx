import React, { useEffect } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, Layers, Palette, Play, Sun, Type, Grid2X2, Sparkles } from 'lucide-react';
import './glassmorphism-style.css';

const anatomy = [
  { title: 'Colour', detail: 'Pastel pink, lavender and violet create a soft atmosphere.', icon: Palette },
  { title: 'Type', detail: 'Clear typography gives the translucent surfaces structure.', icon: Type },
  { title: 'Form', detail: 'Rounded panels and fluid shapes make the interface feel tactile.', icon: Grid2X2 },
  { title: 'Space', detail: 'Careful spacing keeps each glass layer distinct and readable.', icon: Sparkles },
  { title: 'Motion', detail: 'Subtle transitions add life without distracting from content.', icon: Play },
];

const layers = [
  { title: 'Transparency', copy: 'See-through surfaces reveal context while keeping content in focus.', icon: Layers },
  { title: 'Depth', copy: 'Layering, blur and shadow create a clear sense of foreground and background.', icon: Layers },
  { title: 'Light', copy: 'Soft highlights and controlled glow give the material its luminous quality.', icon: Sun },
  { title: 'Hierarchy', copy: 'Contrast, scale and spacing make the most important information easy to find.', icon: Grid2X2 },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
}

export default function GlassmorphismStyle({ onNavigate }) {
  useEffect(() => {
    document.documentElement.classList.add('glass-route-html');
    document.body.classList.add('glass-route-body');
    return () => {
      document.documentElement.classList.remove('glass-route-html');
      document.body.classList.remove('glass-route-body');
    };
  }, []);

  return (
    <main className="glass-style-page">
      <div className="glass-atmosphere glass-atmosphere-pink" aria-hidden="true" />
      <div className="glass-atmosphere glass-atmosphere-violet" aria-hidden="true" />
      <header className="glass-style-nav">
        <button className="glass-back-link" onClick={() => onNavigate?.('library')} aria-label="Back to Design Library">
          <ArrowLeft size={16} /> <span>RYŪMA — DESIGN LIBRARY</span>
        </button>
        <div className="glass-nav-meta"><span>DESIGN LANGUAGE</span><b>02 / 20</b></div>
      </header>

      <div className="glass-content">
        <section className="glass-hero" aria-labelledby="glass-title">
          <div className="glass-hero-copy">
            <span className="glass-eyebrow">DESIGN LANGUAGE / 02</span>
            <h1 id="glass-title">Glassmorphism</h1>
            <h2>Light through glass.</h2>
            <p>A design style that uses transparency, blur and light to create depth, softness and modern clarity.</p>
            <div className="glass-hero-actions">
              <button className="glass-primary-button" onClick={() => scrollToSection('glass-anatomy')}>Explore <ArrowDown size={16} /></button>
              <button className="glass-secondary-button" onClick={() => scrollToSection('glass-layers')}><Layers size={16} /> View Components</button>
            </div>
          </div>
          <div className="glass-hero-art" aria-label="Abstract translucent glass panels">
            <div className="glass-orb glass-orb-one" />
            <div className="glass-orb glass-orb-two" />
            <div className="glass-pane glass-pane-back" />
            <div className="glass-pane glass-pane-middle" />
            <div className="glass-pane glass-pane-front" />
            <div className="glass-art-caption"><span>GLASS / 01</span><b>Clarity in layers</b></div>
          </div>
        </section>

        <section className="glass-panel glass-anatomy" id="glass-anatomy" aria-labelledby="glass-anatomy-title">
          <div className="glass-section-heading">
            <span className="glass-eyebrow">THE FOUNDATIONS</span>
            <h2 id="glass-anatomy-title">Design Anatomy</h2>
            <p>The five elements that shape the glassmorphism language.</p>
          </div>
          <div className="glass-anatomy-grid">
            {anatomy.map(({ title, detail, icon: Icon }, index) => (
              <article className="glass-anatomy-card" key={title}>
                <div className="glass-anatomy-icon"><Icon size={25} strokeWidth={1.8} /></div>
                <span className="glass-card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-panel glass-layers-section" id="glass-layers" aria-labelledby="glass-layers-title">
          <div className="glass-layer-art" aria-hidden="true">
            <div className="glass-layer-glow" />
            <div className="glass-layer-shape shape-back" />
            <div className="glass-layer-shape shape-middle" />
            <div className="glass-layer-shape shape-front" />
            <span className="glass-layer-art-label">MATERIAL STUDY / 04</span>
          </div>
          <div className="glass-layer-copy">
            <span className="glass-eyebrow">MATERIAL & DEPTH</span>
            <h2 id="glass-layers-title">The Layers</h2>
            <p className="glass-layer-intro">How glassmorphism builds visual depth.</p>
            <div className="glass-layer-list">
              {layers.map(({ title, copy, icon: Icon }, index) => (
                <article className="glass-layer-item" key={title}>
                  <span className="glass-layer-icon"><Icon size={19} /></span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <span className="glass-layer-number">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="glass-footer">
        <span>RYŪMA / DESIGN ANATOMY</span>
        <p>Transparency · Depth · Light · Hierarchy</p>
        <button onClick={() => onNavigate?.('library')}>Back to Design Library <ArrowRight size={15} /></button>
      </footer>
    </main>
  );
}
