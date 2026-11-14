import React, { useMemo, useState } from 'react';
import { ArrowLeft, Download, RotateCcw, Eye, EyeOff } from 'lucide-react';
import './art-deco-style.css';

const principles = [
  ['01', 'Geometric ornament', 'Use stepped forms, fans, sunbursts, chevrons and repeated geometry as deliberate visual structure.'],
  ['02', 'Symmetry & hierarchy', 'Build a clear axis, then use scale, framing and repetition to establish visual order.'],
  ['03', 'Modern craftsmanship', 'Pair machine-age forms with evidence of material quality, precision and skilled making.'],
  ['04', 'Stylised natural forms', 'Reduce plants, animals and human figures into rhythmic, controlled decorative motifs.'],
  ['05', 'Material expression', 'Suggest polished metal, lacquer, stone, glass and inlay through disciplined contrast and texture.'],
  ['06', 'Luxury with restraint', 'Use ornament selectively. Richness comes from proportion, finish and detail—not indiscriminate decoration.'],
];

const timeline = [
  ['1910s', 'Early formation', 'A new decorative language develops from several European design currents before the First World War.'],
  ['1925', 'Paris exposition', 'The Exposition Internationale des Arts Décoratifs et Industriels Modernes gives the later style its familiar name.'],
  ['Late 1920s', 'International spread', 'Art Deco appears across architecture, interiors, fashion, jewellery, transport and graphic communication.'],
  ['1930s', 'Streamlined modernity', 'More aerodynamic and machine-age expressions develop alongside the richer ornamental forms.'],
];

const palette = [
  { name: 'Obsidian', value: '#171717' },
  { name: 'Champagne', value: '#C9A86A' },
  { name: 'Ivory', value: '#F2EBDD' },
  { name: 'Emerald', value: '#176B58' },
  { name: 'Burgundy', value: '#722F3B' },
  { name: 'Midnight', value: '#1E2A42' },
];

const motifs = ['sunburst', 'fan', 'stepped', 'chevron'];

export default function ArtDecoStyle({ onNavigate }) {
  const [headline, setHeadline] = useState('THE AGE\nOF ELEGANCE.');
  const [accent, setAccent] = useState('#C9A86A');
  const [motif, setMotif] = useState('sunburst');
  const [symmetry, setSymmetry] = useState(true);
  const [ornament, setOrnament] = useState(true);
  const lines = useMemo(() => headline.split('\n').filter(Boolean).slice(0, 3), [headline]);

  const reset = () => {
    setHeadline('THE AGE\nOF ELEGANCE.');
    setAccent('#C9A86A');
    setMotif('sunburst');
    setSymmetry(true);
    setOrnament(true);
  };

  const exportPoster = () => {
    const safeLines = lines.map((line, i) =>
      '<text x="540" y="' + (690 + i * 104) + '" text-anchor="middle" font-family="Arial,sans-serif" font-size="82" font-weight="700" letter-spacing="3" fill="#F2EBDD">' +
      line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</text>'
    ).join('');
    const motifMarkup = motif === 'sunburst'
      ? Array.from({ length: 24 }, (_, i) => '<path d="M540 145 L540 350" transform="rotate(' + (i * 15) + ' 540 350)" stroke="' + accent + '" stroke-width="5"/>').join('')
      : motif === 'fan'
      ? Array.from({ length: 11 }, (_, i) => '<path d="M540 350 L' + (180 + i * 72) + ' 120" stroke="' + accent + '" stroke-width="5" fill="none"/>').join('')
      : motif === 'chevron'
      ? Array.from({ length: 5 }, (_, i) => '<path d="M' + (260 + i * 20) + ' 240 L540 ' + (80 + i * 35) + ' L' + (820 - i * 20) + ' 240" stroke="' + accent + '" stroke-width="7" fill="none"/>').join('')
      : '<path d="M300 350 V210 H780 V350 M350 350 V260 H730 V350 M400 350 V310 H680 V350" stroke="' + accent + '" stroke-width="7" fill="none"/>';
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><rect width="1080" height="1350" fill="#171717"/><rect x="36" y="36" width="1008" height="1278" fill="none" stroke="' + accent + '" stroke-width="3"/><rect x="54" y="54" width="972" height="1242" fill="none" stroke="' + accent + '" stroke-opacity=".45"/>' + (ornament ? motifMarkup : '') + (symmetry ? '<path d="M540 70 V1280" stroke="' + accent + '" stroke-opacity=".18"/>' : '') + '<text x="540" y="110" text-anchor="middle" fill="' + accent + '" font-family="Arial,sans-serif" font-size="22" letter-spacing="8">RYUMA / ART DECO STUDY</text>' + safeLines + '<text x="540" y="1190" text-anchor="middle" fill="' + accent + '" font-family="Arial,sans-serif" font-size="22" letter-spacing="6">GEOMETRY · ORNAMENT · PROPORTION</text></svg>';
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ryuma-art-deco-poster.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return <main className="artdeco-page" style={{ '--ad-accent': accent }}>
    <header className="ad-topbar">
      <button className="ad-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button>
      <a className="ad-wordmark" href="#/" onClick={() => onNavigate?.('home')}>RYŪMA <span>/ DESIGN ANATOMY</span></a>
      <span className="ad-index">03.07 — DESIGN MOVEMENT</span>
    </header>

    <section className="ad-hero">
      <div className="ad-hero-copy">
        <span className="ad-kicker">DESIGN MOVEMENTS / 1910s—1930s</span>
        <h1>ART<br/><em>DECO</em><span className="ad-period">.</span></h1>
        <p className="ad-hero-lede">A language of geometry, ornament and modern elegance.</p>
        <p className="ad-hero-body">Art Deco brings decorative craft into conversation with the machine age. Its visual world can be opulent or restrained, architectural or ornamental, but its details are shaped with intention.</p>
        <div className="ad-hero-tags"><span>GEOMETRY</span><span>CRAFT</span><span>MODERNITY</span></div>
        <a className="ad-text-link" href="#ad-anatomy">EXPLORE THE ANATOMY ↓</a>
      </div>
      <div className="ad-hero-art" aria-label="Original geometric Art Deco inspired composition">
        <div className="ad-art-frame"><div className="ad-art-sun"/><div className="ad-art-rays"/><div className="ad-art-steps"/><div className="ad-art-base"><span>FORM</span><b>AND</b><span>ORNAMENT</span></div></div>
        <span className="ad-art-caption">PLATE 01 / GEOMETRIC STUDY</span>
      </div>
    </section>

    <section className="ad-thesis">
      <span className="ad-section-label">THE CENTRAL IDEA / 00</span>
      <p>Art Deco is not one fixed recipe. It is a broad design movement that reconciles <strong>historical references, modern forms, decorative craft and industrial ambition.</strong></p>
      <span className="ad-thesis-mark">1925<br/><i>PARIS</i></span>
    </section>

    <section className="ad-anatomy" id="ad-anatomy">
      <div className="ad-section-head"><div><span className="ad-section-label">01 — DESIGN ANATOMY</span><h2>Six rules.<br/><em>One language.</em></h2></div><p>Study the relationships between ornament, geometry, material and hierarchy. The style is not simply “gold on black”.</p></div>
      <div className="ad-principles">{principles.map(item => <article key={item[0]}><span>{item[0]} / PRINCIPLE</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
    </section>

    <section className="ad-history">
      <div className="ad-history-intro"><span className="ad-section-label">02 — HISTORICAL CONTEXT</span><h2>Modernity,<br/><em>decorated.</em></h2><p>The 1925 Paris exposition became the defining public milestone. The movement itself had begun developing earlier and continued to evolve through the 1930s.</p></div>
      <div className="ad-timeline">{timeline.map(item => <article key={item[0]}><span>{item[0]}</span><div><h3>{item[1]}</h3><p>{item[2]}</p></div></article>)}</div>
    </section>

    <section className="ad-type-material">
      <div className="ad-type-panel"><span className="ad-section-label">03 — TYPOGRAPHY</span><div className="ad-type-specimen">Aa<span>09</span></div><h3>STRUCTURE IN<br/>EVERY LETTER.</h3><p>Look for geometric construction, strong verticals, stylised capitals and carefully composed display lettering. Pair expressive headlines with readable supporting text.</p><div className="ad-type-notes"><span>DISPLAY / GEOMETRIC</span><span>TEXT / READABLE SERIF OR SANS</span><span>DETAIL / SMALL CAPS</span></div></div>
      <div className="ad-material-panel"><span className="ad-section-label">04 — COLOUR & MATERIAL</span><h3>FINISH IS<br/>PART OF FORM.</h3><p>Historical Art Deco spans many palettes and materials. This digital study uses a restrained selection to examine contrast and finish—not as a universal historical formula.</p><div className="ad-palette">{palette.map(item => <button key={item.value} title={item.name} aria-label={item.name + ' ' + item.value} aria-pressed={accent===item.value} onClick={() => setAccent(item.value)}><i style={{ background: item.value }}/><span>{item.name}</span><code>{item.value}</code></button>)}</div></div>
    </section>

    <section className="ad-applications">
      <div className="ad-section-head"><div><span className="ad-section-label">05 — APPLICATIONS</span><h2>From object<br/><em>to city.</em></h2></div><p>Art Deco crossed disciplines. Its vocabulary can be studied through graphic communication as well as built and crafted environments.</p></div>
      <div className="ad-app-grid">
        <article><div className="ad-app-art ad-app-poster"><span>1925</span><b>MODERN<br/>LIVING</b><i/></div><h3>Posters & identity</h3><p>Framed typography, repeated geometry, stylised illustration and strong focal points.</p></article>
        <article><div className="ad-app-art ad-app-building"><i/><b/><span>METROPOLIS</span></div><h3>Architecture</h3><p>Stepped silhouettes, vertical emphasis, patterned surfaces and carefully staged entrances.</p></article>
        <article><div className="ad-app-art ad-app-object"><i/><b/><em/></div><h3>Objects & interiors</h3><p>Material contrast, precise detailing, inlay, lacquer and sculptural silhouettes.</p></article>
      </div>
    </section>

    <section className="ad-lab">
      <div className="ad-lab-intro"><span className="ad-section-label">06 — COMPOSITION LAB</span><h2>Compose with<br/><em>ornament.</em></h2><p>Change the headline, motif and accent. Toggle symmetry and ornament to see how each decision changes the composition.</p><div className="ad-lab-note">LIVE SPECIMEN / SVG EXPORT</div></div>
      <div className="ad-lab-workspace">
        <div className="ad-controls">
          <label>HEADLINE<textarea rows={3} maxLength={54} value={headline} onChange={e => setHeadline(e.target.value)}/></label>
          <div className="ad-control-group"><span>MOTIF</span><div className="ad-motif-options">{motifs.map(item => <button key={item} className={motif===item?'active':''} onClick={() => setMotif(item)}>{item.toUpperCase()}</button>)}</div></div>
          <div className="ad-control-group"><span>ACCENT</span><div className="ad-swatches">{palette.map(item => <button key={item.value} title={item.name} aria-label={item.name} aria-pressed={accent===item.value} style={{ background: item.value }} onClick={() => setAccent(item.value)}/>)}</div></div>
          <label className="ad-toggle"><input type="checkbox" checked={symmetry} onChange={e => setSymmetry(e.target.checked)}/><span>{symmetry ? <Eye size={14}/> : <EyeOff size={14}/>} SYMMETRY AXIS</span></label>
          <label className="ad-toggle"><input type="checkbox" checked={ornament} onChange={e => setOrnament(e.target.checked)}/><span>{ornament ? <Eye size={14}/> : <EyeOff size={14}/>} ORNAMENT</span></label>
          <div className="ad-lab-actions"><button onClick={reset}><RotateCcw size={14}/> RESET</button><button onClick={exportPoster}><Download size={14}/> EXPORT SVG</button></div>
        </div>
        <div className="ad-poster-preview"><div className="ad-poster-frame"><div className={'ad-poster-motif motif-'+motif+(ornament?'':' is-hidden')}/>{symmetry && <i className="ad-axis"/>}<div className="ad-poster-headline">{lines.map((line,i)=><span key={i}>{line}</span>)}</div><div className="ad-poster-footer"><span>RYŪMA / DESIGN ANATOMY</span><span>PLATE 025</span></div></div></div>
      </div>
    </section>

    <section className="ad-motion"><span className="ad-section-label">07 — MOTION & INTERACTION</span><div><h2>Precision,<br/>not spectacle.</h2><p>Use measured reveals, stepped transitions and subtle geometric movement to explain relationships. Avoid ornamental animation that competes with reading, and respect reduced-motion preferences.</p></div></section>
    <footer className="ad-footer"><span>RYŪMA / DESIGN ANATOMY</span><span>ART DECO / 03.07</span><button onClick={() => onNavigate?.('library')}>RETURN TO DESIGN LIBRARY <ArrowLeft size={14}/></button></footer>
  </main>;
}
