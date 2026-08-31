import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, GraduationCap, Mail, PackageOpen } from 'lucide-react';

const experience = [
  { period: 'Present', role: 'Your Current Role', company: 'Company or Organization', note: 'Describe the work you lead, the people you serve, and the measurable result you create.' },
  { period: 'Previous', role: 'Previous Position', company: 'Company or Organization', note: 'Add one concise achievement that shows scope, ownership, and impact.' },
];
const education = [
  { year: 'Year', degree: 'Degree or Certification', school: 'Institution name' },
  { year: 'Year', degree: 'Additional Education', school: 'Institution name' },
];
const ventures = [
  { name: 'Business or Venture', type: 'Founder / Owner', text: 'A clear one-line description of the customer, offer, and value you create.' },
  { name: 'Second Venture', type: 'Partner / Advisor', text: 'Explain what makes this business useful, distinctive, or commercially strong.' },
];
const products = [
  { name: 'Flagship Product', category: 'Digital Product', text: 'The problem it solves and the outcome it gives customers.', tag: 'Explore product' },
  { name: 'Product or Service', category: 'Service', text: 'A concise, benefit-led description for prospective clients.', tag: 'View details' },
  { name: 'New Initiative', category: 'In development', text: 'A short preview of what you are building next.', tag: 'Coming soon' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Home">S<span>.</span></a>
        <nav aria-label="Primary navigation"><a href="#career">Career</a><a href="#education">Education</a><a href="#business">Business</a><a href="#products">Products</a></nav>
        <a className="contact-link" href="mailto:hello@example.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>
      <section className="hero" id="top">
        <div className="eyebrow"><span /> Professional portfolio · 2026</div>
        <h1>Building useful things<br />with <em>purpose.</em></h1>
        <div className="hero-footer"><p>I&apos;m <strong>Shani</strong> — a professional, entrepreneur, and product builder turning ideas into work that creates lasting value.</p><a className="scroll-cue" href="#career">Discover my work <ArrowDownRight size={20} /></a></div>
        <div className="hero-mark" aria-hidden="true">S</div>
      </section>
      <section className="statement section-pad">
        <p className="section-number">01 / Profile</p>
        <div><h2>Strategy, execution,<br />and an eye for opportunity.</h2><p>This portfolio brings together my career, education, businesses, and products — the four threads that define how I learn, lead, and build.</p></div>
      </section>
      <section className="section-pad dark-section" id="career">
        <div className="section-heading"><div><BriefcaseBusiness size={20} /><p className="section-number">02 / Career</p></div><h2>Experience that<br />moves work forward.</h2></div>
        <div className="timeline">{experience.map((item, index) => <article key={item.role}><span className="index">0{index + 1}</span><div><p className="meta">{item.period} · {item.company}</p><h3>{item.role}</h3><p>{item.note}</p></div></article>)}</div>
      </section>
      <section className="section-pad split-section" id="education">
        <div className="sticky-title"><GraduationCap size={22} /><p className="section-number">03 / Education</p><h2>A foundation for<br />lifelong learning.</h2></div>
        <div className="education-list">{education.map((item) => <article key={item.degree}><p className="meta">{item.year}</p><h3>{item.degree}</h3><p>{item.school}</p></article>)}<p className="aside-note">Formal education is only part of the story. Add professional training, licenses, workshops, and independent study here too.</p></div>
      </section>
      <section className="section-pad business-section" id="business">
        <div className="section-heading"><div><BriefcaseBusiness size={20} /><p className="section-number">04 / Business</p></div><h2>Ventures built around<br />real customer needs.</h2></div>
        <div className="venture-grid">{ventures.map((venture, index) => <article key={venture.name}><span className="venture-num">0{index + 1}</span><p className="meta">{venture.type}</p><h3>{venture.name}</h3><p>{venture.text}</p><a href="mailto:hello@example.com">Discuss this venture <ArrowUpRight size={16} /></a></article>)}</div>
      </section>
      <section className="section-pad products-section" id="products">
        <div className="section-heading"><div><PackageOpen size={20} /><p className="section-number">05 / Products</p></div><h2>Ideas made<br />tangible.</h2></div>
        <div className="product-list">{products.map((product, index) => <article key={product.name}><span>0{index + 1}</span><div><p className="meta">{product.category}</p><h3>{product.name}</h3></div><p>{product.text}</p><span className="product-link">{product.tag} <ArrowUpRight size={15} /></span></article>)}</div>
      </section>
      <footer className="section-pad">
        <p className="section-number">06 / Contact</p><h2>Have an idea worth<br /><em>building?</em></h2>
        <a className="email" href="mailto:hello@example.com"><Mail size={20} /> hello@example.com <ArrowUpRight size={22} /></a>
        <div className="footer-line"><span>© 2026 Shani</span><span>LinkedIn · GitHub · Instagram</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
