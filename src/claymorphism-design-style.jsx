import React, { useState } from 'react';
import {
  ArrowLeft, BookOpen, Check, CheckCircle2, Circle, Download, Heart,
  Image as ImageIcon, Layers3, Music2, Pause, Play, Plus, Search,
  SlidersHorizontal, Sparkles, Square, ToggleLeft, Volume2, X
} from 'lucide-react';
import './claymorphism-design-style.css';

const palette = [
  { name: 'Lavender', hex: '#EDE6FF', tone: 'lavender' },
  { name: 'Mint', hex: '#CFF7EB', tone: 'mint' },
  { name: 'Aqua', hex: '#C4F2FF', tone: 'aqua' },
  { name: 'Coral', hex: '#FFC9D3', tone: 'coral' },
  { name: 'Peach', hex: '#FFE6C7', tone: 'peach' },
  { name: 'Butter', hex: '#FFF4BB', tone: 'butter' },
];

function SectionHeading({ eyebrow, title, note }) {
  return <div className="clay-section-heading">
    <span>{eyebrow}</span>
    <h2>{title}</h2>
    {note && <p>{note}</p>}
  </div>;
}

export default function ClaymorphismDesignStyle({ onNavigate }) {
  const [toggle, setToggle] = useState(true);
  const [checked, setChecked] = useState(true);
  const [range, setRange] = useState(64);
  const [query, setQuery] = useState('');
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pressed, setPressed] = useState(null);

  const pressProps = (name) => ({
    onPointerDown: () => setPressed(name),
    onPointerUp: () => setPressed(null),
    onPointerLeave: () => setPressed(null),
    onPointerCancel: () => setPressed(null),
    onBlur: () => setPressed(null),
    onKeyDown: (event) => {
      if (event.key === 'Enter' || event.key === ' ') setPressed(name);
    },
    onKeyUp: () => setPressed(null),
    'aria-pressed': pressed === name,
  });

  return <main className="clay-style-page">
    <div className="clay-specimen-wrap">
      <header className="clay-specimen-header">
        <button className="clay-back-link" type="button" onClick={() => onNavigate?.('library')}>
          <ArrowLeft size={16} /> Back to Design Library
        </button>
        <span className="clay-edition"><Sparkles size={14} /> DESIGN SPECIMEN / 02.04</span>
      </header>

      <section className="clay-intro">
        <div className="clay-intro-copy">
          <span className="clay-kicker">A STUDY IN SOFT MATERIALS</span>
          <h1>Claymorphism<span>.</span></h1>
          <p className="clay-intro-lead">A soft, tactile interface language shaped by rounded forms, inflated surfaces and gentle depth.</p>
          <div className="clay-traits">
            <span><Layers3 size={15}/> Playful</span>
            <span><Circle size={14}/> Tactile</span>
            <span><Heart size={14}/> Friendly</span>
          </div>
        </div>
        <div className="clay-hero-object" aria-label="Abstract layered clay sculpture">
          <div className="clay-hero-orb clay-hero-orb-mint"/>
          <div className="clay-hero-orb clay-hero-orb-coral"/>
          <div className="clay-hero-orb clay-hero-orb-aqua"/>
          <div className="clay-hero-sculpture">
            <div className="clay-sculpture-play"><Play size={54} fill="currentColor"/></div>
            <span className="clay-sculpture-spark">✦</span>
          </div>
          <div className="clay-hero-shadow"/>
        </div>
        <aside className="clay-characteristics">
          <h2>Key characteristics</h2>
          {['Soft, rounded geometry','Inflated tactile surfaces','Gentle diffused shadows','Playful pastel colour','Responsive physical feedback'].map((item, index) =>
            <div key={item}><span>{['◈','▱','☼','✿','⌁'][index]}</span>{item}</div>
          )}
        </aside>
      </section>

      <section className="clay-specimen-grid clay-grid-top">
        <article className="clay-panel clay-anatomy-panel">
          <SectionHeading eyebrow="01 / MATERIAL STUDY" title="Anatomy of a clay surface" note="A soft object is built from light, body and shadow."/>
          <div className="clay-layer-study">
            <div className="clay-layer-stack" aria-hidden="true">
              <div className="clay-layer clay-layer-highlight"/>
              <div className="clay-layer clay-layer-body"/>
              <div className="clay-layer clay-layer-depth"/>
              <div className="clay-layer-ground"/>
            </div>
            <div className="clay-layer-labels">
              <div><i/><b>Highlight</b><span>Soft, diffused light</span></div>
              <div><i/><b>Surface</b><span>Smooth, matte finish</span></div>
              <div><i/><b>Body colour</b><span>Pastel material base</span></div>
              <div><i/><b>Ambient shadow</b><span>Broad, soft falloff</span></div>
            </div>
          </div>
        </article>

        <article className="clay-panel clay-palette-panel">
          <SectionHeading eyebrow="02 / COLOUR STUDY" title="A playful palette" note="Pastels carry the material without overpowering it."/>
          <div className="clay-swatch-grid">
            {palette.map((colour) => <div className="clay-swatch" key={colour.name}>
              <span className={'clay-swatch-chip ' + colour.tone}/>
              <b>{colour.name}</b><code>{colour.hex}</code>
            </div>)}
          </div>
          <div className="clay-palette-note"><span/>Use one dominant pastel, then balance with a quieter neutral.</div>
        </article>

        <article className="clay-panel clay-buttons-panel">
          <SectionHeading eyebrow="03 / ACTIONS" title="Button variations" note="Raised, pillowy surfaces with clear hierarchy."/>
          <div className="clay-button-row">
            <button className="clay-ui-button clay-primary" type="button">Primary action <ArrowLeft className="clay-button-arrow" size={15}/></button>
            <button className="clay-ui-button clay-secondary" type="button">Secondary</button>
          </div>
          <div className="clay-icon-button-row">
            <button className="clay-icon-button tone-lavender" type="button" aria-label="Play"><Play size={22} fill="currentColor"/></button>
            <button className="clay-icon-button tone-aqua" type="button" aria-label="Add"><Plus size={25}/></button>
            <button className={'clay-icon-button tone-coral ' + (liked ? 'is-selected' : '')} type="button" aria-label={liked ? 'Unlike' : 'Like'} aria-pressed={liked} onClick={() => setLiked(!liked)}><Heart size={22} fill={liked ? 'currentColor' : 'none'}/></button>
            <button className="clay-icon-button tone-butter" type="button" aria-label="Download"><Download size={21}/></button>
          </div>
        </article>
      </section>

      <section className="clay-specimen-grid clay-grid-controls">
        <article className="clay-panel clay-controls-panel">
          <SectionHeading eyebrow="04 / INPUTS" title="Tactile controls" note="Small controls should feel soft, not slippery."/>
          <div className="clay-control-row">
            <button type="button" role="switch" aria-checked={toggle} aria-label="Enable soft mode" className={'clay-switch ' + (toggle ? 'is-on' : '')} onClick={() => setToggle(!toggle)}><span/></button>
            <button type="button" role="checkbox" aria-checked={checked} aria-label="Select option" className={'clay-checkbox ' + (checked ? 'is-checked' : '')} onClick={() => setChecked(!checked)}>{checked && <Check size={18}/>}</button>
            <button type="button" className="clay-radio" aria-label="Selected radio option" aria-pressed="true"><span/></button>
            <label className="clay-range-wrap"><span className="sr-only">Surface depth</span><input type="range" min="0" max="100" value={range} onChange={(event) => setRange(Number(event.target.value))} style={{'--range-value': range + '%'}}/></label>
            <output className="clay-range-value">{range}</output>
          </div>
          <p className="clay-control-feedback">{toggle ? 'Soft mode enabled' : 'Soft mode disabled'} · {checked ? 'Option selected' : 'Option cleared'}</p>
        </article>

        <article className="clay-panel clay-input-panel">
          <SectionHeading eyebrow="05 / TEXT ENTRY" title="Input field" note="A recessed surface gives the field a gentle inset feel."/>
          <label className="clay-search-field">
            <Search size={20}/>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the specimen…" aria-label="Search the specimen"/>
            {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={16}/></button>}
          </label>
          <span className="clay-input-hint">{query ? 'Searching for: ' + query : 'Try entering a component name.'}</span>
        </article>

        <article className="clay-panel clay-states-panel">
          <SectionHeading eyebrow="06 / FEEDBACK" title="Button states" note="The material changes with the interaction."/>
          <div className="clay-state-grid">
            <div><button type="button" className="clay-state-button state-default">Aa</button><b>Default</b></div>
            <div><button type="button" className="clay-state-button state-hover">Aa</button><b>Hover</b></div>
            <div><button type="button" className="clay-state-button state-pressed" {...pressProps('state')}>Aa</button><b>Pressed</b></div>
            <div><button type="button" className="clay-state-button state-disabled" disabled>Aa</button><b>Disabled</b></div>
          </div>
          <span className="clay-state-caption">{pressed === 'state' ? 'Pressed state preview' : 'Compare the four visual states'}</span>
        </article>
      </section>

      <section className="clay-specimen-grid clay-grid-patterns">
        <article className="clay-panel clay-card-examples">
          <SectionHeading eyebrow="07 / SURFACE PATTERNS" title="Card examples" note="Different content, one consistent material language."/>
          <div className="clay-example-cards">
            <div className="clay-example-card">
              <div className="clay-example-art art-landscape"><span/><i/></div>
              <b>Media card</b><p>Image and video content</p>
            </div>
            <div className="clay-example-card">
              <div className="clay-example-art art-folder"><span/><i/></div>
              <b>Collection card</b><p>Group related content</p>
            </div>
            <div className="clay-example-card">
              <div className="clay-example-art art-stats"><i/><i/><i/></div>
              <b>Data card</b><p>Simple progress and metrics</p>
            </div>
          </div>
        </article>

        <article className="clay-panel clay-player-panel">
          <SectionHeading eyebrow="08 / INTERFACE PATTERN" title="Media player" note="A compact interface assembled from clay components."/>
          <div className="clay-player">
            <div className="clay-player-cover"><span/><i/></div>
            <div className="clay-player-meta"><b>Morning Vibes</b><span>Ambient playlist · 12 tracks</span></div>
            <button type="button" className={'clay-player-like ' + (liked ? 'is-selected' : '')} aria-label="Like playlist" aria-pressed={liked} onClick={() => setLiked(!liked)}><Heart size={19} fill={liked ? 'currentColor' : 'none'}/></button>
            <div className="clay-player-progress"><span/><i/></div>
            <div className="clay-player-time"><span>01:24</span><span>03:56</span></div>
            <div className="clay-player-controls">
              <button type="button" aria-label="Previous track"><ArrowLeft size={17}/></button>
              <button type="button" className="clay-player-play" aria-label={playing ? 'Pause' : 'Play'} onClick={() => setPlaying(!playing)}>{playing ? <Pause size={20} fill="currentColor"/> : <Play size={20} fill="currentColor"/>}</button>
              <button type="button" aria-label="Next track"><ArrowLeft className="clay-next-icon" size={17}/></button>
            </div>
            <span className="clay-player-status"><Music2 size={13}/>{playing ? 'Now playing' : 'Ready to play'}</span>
          </div>
        </article>

        <article className="clay-panel clay-guidelines-panel">
          <SectionHeading eyebrow="09 / DESIGN PRACTICE" title="Usage guide" note="Keep the softness intentional."/>
          <ul className="clay-guideline-list">
            <li><CheckCircle2/>Use soft, balanced shadows.</li>
            <li><CheckCircle2/>Keep shapes rounded and simple.</li>
            <li><CheckCircle2/>Use pastel colour with clear contrast.</li>
            <li className="avoid"><X/>Avoid sharp edges and hard shadows.</li>
            <li className="avoid"><X/>Do not overuse depth or gloss.</li>
            <li className="avoid"><X/>Keep text and focus states accessible.</li>
          </ul>
        </article>
      </section>

      <footer className="clay-specimen-footer">
        <span>CLAYMORPHISM / DESIGN ANATOMY</span>
        <p>Soft surfaces. Clear purpose. Tactile feedback.</p>
        <button type="button" onClick={() => onNavigate?.('library')}><ArrowLeft size={15}/> Return to Design Library</button>
      </footer>
    </div>
  </main>;
}
