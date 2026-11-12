import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import './flat-design-style.css';

const anatomy = [
  { title: 'Colour', copy: 'Solid, purposeful colour creates hierarchy.', mark: '●', tone: 'violet' },
  { title: 'Typography', copy: 'Clear type makes information easy to scan.', mark: 'Aa', tone: 'blue' },
  { title: 'Layout', copy: 'Grid and alignment create order.', mark: '▦', tone: 'cyan' },
  { title: 'Components', copy: 'Simple elements communicate their purpose.', mark: '▱', tone: 'green' },
  { title: 'Interaction', copy: 'Immediate feedback makes actions clear.', mark: '↗', tone: 'violet' },
  { title: 'Responsive', copy: 'The system adapts across screen sizes.', mark: '▣', tone: 'blue' },
];

const palette = [
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Red', hex: '#EF4444' },
  { name: 'Yellow', hex: '#FACC15' },
  { name: 'Green', hex: '#10B981' },
  { name: 'Ink', hex: '#0F172A' },
];

export default function FlatDesignStyle({ onNavigate }) {
  const [city, setCity] = useState('Chennai');
  const [forecastOpen, setForecastOpen] = useState(false);
  const [interaction, setInteraction] = useState('normal');

  const weather = city === 'Chennai'
    ? { temp: '32°', condition: 'PARTLY CLOUDY', high: '34°', low: '27°' }
    : { temp: '28°', condition: 'CLOUDY', high: '30°', low: '23°' };

  return (
    <main className="flat-style-page">
      <header className="flat-nav">
        <button className="flat-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={16} /> DESIGN LIBRARY</button>
        <div className="flat-brand"><b>RYŪMA</b><span>DESIGN ANATOMY</span></div>
        <span className="flat-nav-label">DESIGN LANGUAGE / 04</span>
      </header>

      <section className="flat-hero">
        <div className="flat-hero-copy">
          <span className="flat-kicker">04 / FLAT DESIGN</span>
          <h1>Flat<br /><span>Design.</span></h1>
          <p>A clean, simple and functional design approach that focuses on clarity, content and usability.</p>
          <div className="flat-hero-actions">
            <a href="#flat-anatomy">Explore Anatomy <ArrowRight size={16} /></a>
            <a className="flat-secondary-action" href="#flat-demo"><Play size={13} /> Live Demo</a>
          </div>
        </div>
        <div className="flat-hero-art" role="img" aria-label="Flat geometric landscape with a house, sun, mountains and tree">
          <div className="flat-sky-sun" />
          <div className="flat-cloud" />
          <div className="flat-mountain flat-mountain-back" />
          <div className="flat-mountain flat-mountain-front" />
          <div className="flat-tree"><i /></div>
          <div className="flat-house"><i /><b /></div>
          <div className="flat-ground" />
        </div>
      </section>

      <section className="flat-principles" aria-label="Flat design principles">
        <div><b className="principle-icon">◎</b><span><strong>Simple</strong><small>Clear and focused</small></span></div>
        <div><b className="principle-icon">▱</b><span><strong>Functional</strong><small>Purpose-driven UI</small></span></div>
        <div><b className="principle-icon">ϟ</b><span><strong>Scalable</strong><small>Works across devices</small></span></div>
        <div><b className="principle-icon">▦</b><span><strong>Modern</strong><small>Timeless and versatile</small></span></div>
      </section>

      <section className="flat-content-row" id="flat-anatomy">
        <div className="flat-overview">
          <div className="flat-section-heading"><i /> <h2>Design Overview</h2></div>
          <p>Flat Design removes unnecessary visual effects and focuses on content, hierarchy and action.</p>
          <div className="flat-shape-stack" aria-hidden="true"><i /><b /><span /></div>
        </div>
        <div className="flat-anatomy">
          <div className="flat-section-heading"><i /> <h2>Core Anatomy</h2></div>
          <div className="flat-anatomy-grid">
            {anatomy.map((item) => (
              <article className="flat-anatomy-card" key={item.title}>
                <b className={`flat-anatomy-mark ${item.tone}`}>{item.mark}</b>
                <strong>{item.title}</strong>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flat-lab-row" id="flat-demo">
        <div className="flat-interaction">
          <div className="flat-section-heading"><i /> <h2>Interaction States</h2></div>
          <p>Try the controls to see how a flat interface responds.</p>
          <div className="flat-state-buttons">
            <button className="state-normal" onClick={() => setInteraction('normal')}>Normal</button>
            <button className="state-hover" onClick={() => setInteraction('hover')}>Hover</button>
            <button className="state-pressed" onClick={() => setInteraction('pressed')}>Pressed</button>
            <button className="state-disabled" disabled>Disabled</button>
          </div>
          <div className={`flat-state-output state-${interaction}`} aria-live="polite">
            <strong>{interaction === 'normal' ? 'Default state' : interaction === 'hover' ? 'Hover / focus state' : 'Pressed state'}</strong>
            <span>{interaction === 'normal' ? 'Ready for input' : interaction === 'hover' ? 'The control highlights on hover or keyboard focus.' : 'The action has been acknowledged.'}</span>
          </div>
        </div>

        <div className="flat-palette-section">
          <div className="flat-section-heading"><i /> <h2>Colour Palette</h2></div>
          <p>Bright, functional colours with strong contrast.</p>
          <div className="flat-swatches">
            {palette.map((color) => <div className="flat-swatch" key={color.hex}><span style={{ background: color.hex }} /><strong>{color.hex}</strong><small>{color.name}</small></div>)}
          </div>
        </div>
      </section>

      <section className="flat-weather">
        <div className="flat-section-heading"><i /> <h2>Flat Design in Practice</h2></div>
        <p>A compact weather interface built with colour blocks, simple icons and clear information.</p>
        <div className="flat-weather-card">
          <div className="flat-weather-location">
            <span>{city.toUpperCase()}, INDIA</span>
            <button onClick={() => { setCity(city === 'Chennai' ? 'Bengaluru' : 'Chennai'); setForecastOpen(false); }}>CHANGE CITY ↗</button>
          </div>
          <div className="flat-weather-main">
            <div><strong>{weather.temp}</strong><b>{weather.condition}</b><small>H: {weather.high} &nbsp; L: {weather.low}</small></div>
            <div className="flat-weather-sun" aria-hidden="true">☀</div>
          </div>
          {forecastOpen && <div className="flat-forecast" aria-live="polite"><span>MON <b>☀ 32°</b></span><span>TUE <b>☁ 30°</b></span><span>WED <b>☀ 33°</b></span><span>THU <b>☁ 29°</b></span></div>}
          <button className="flat-forecast-toggle" aria-expanded={forecastOpen} onClick={() => setForecastOpen(open => !open)}>{forecastOpen ? 'HIDE FORECAST' : 'VIEW FORECAST'} <ArrowRight size={15} /></button>
        </div>
      </section>

      <footer className="flat-footer"><span>RYŪMA / DESIGN ANATOMY</span><span>FLAT DESIGN — CLARITY THROUGH SIMPLICITY</span><button onClick={() => onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={14} /></button></footer>
    </main>
  );
}
