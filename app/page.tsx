import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, GraduationCap, Mail, PackageOpen } from 'lucide-react';

const experience = [
  { period: 'Jul 2023 - Present', role: 'Information Technology Assistant', company: 'Private Company · Lahore', note: 'Developing internal desktop and mobile applications in Python, C#, and Java; building API integrations and automation workflows; testing with Selenium and Appium; and managing SQL Server, MySQL, and MongoDB.' },
  { period: 'Apr 2021 - Mar 2023', role: 'Senior Software Developer', company: 'Suzuki Premier Motors · Lahore', note: 'Designed desktop application components with cross-functional teams, optimized Android and desktop performance, integrated frontend components with backend data, and contributed within Agile sprints.' },
  { period: 'Apr 2020 - May 2021', role: 'Network Security Administrator', company: 'Prodesec SMC Ltd · Islamabad', note: 'Designed Android interfaces with XAML, structured databases for reliable access and performance, and supported system administration and security configuration across client environments.' },
  { period: 'Feb 2018 - Feb 2019', role: 'Android Developer', company: 'Softwarehouse Corp · Pakistan', note: 'Developed Android applications across design, coding, and testing, building a strong foundation in mobile development practices.' },
];
const education = [
  { year: '2014 - 2018', degree: 'Bachelor of Science in Computer Science', school: 'University of Sargodha, Lahore Campus' },
];
const ventures = [
  { name: 'AutoMind Solutions', type: 'Founder · AI-Driven Business Automation', text: 'A Lahore-based venture exploring applied AI, automation, and R&D to streamline repetitive business workflows and processes.', href: 'https://automindsolutions.store/' },
];
const products = [
  { name: 'MirrorFlow', category: 'AI Automation Platform', text: 'A business automation platform that streamlines repetitive workflows using Python, FastAPI, SQLModel, MySQL, Bootstrap, JavaScript, and Jinja2.', tag: 'View project', href: 'https://dev-arslan.github.io/MirrorFlow-SaaS-/' },
  { name: 'Automation Bots', category: 'C# & Python Automation', text: 'Automation tools and bots designed to reduce repetitive operations, connect APIs, move data reliably, and improve day-to-day business workflows.', tag: 'Discuss solutions', href: 'mailto:arslanahmeddev350@gmail.com' },
  { name: 'Cybersecurity & Infrastructure', category: 'Systems, Servers & Networks', text: 'Project experience spanning server administration, network administration, security configuration, database reliability, and secure client environments.', tag: 'Discuss experience', href: 'mailto:arslanahmeddev350@gmail.com' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Home">AA<span>.</span></a>
        <nav aria-label="Primary navigation"><a href="#career">Career</a><a href="#education">Education</a><a href="#business">Business</a><a href="#products">Products</a></nav>
        <a className="contact-link" href="mailto:arslanahmeddev350@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>
      <section className="hero" id="top">
        <div className="eyebrow"><span /> Professional portfolio · 2026</div>
        <div className="portrait-frame"><img src="/arslan-ahmed.jpg" alt="Arslan Ahmed, Software Engineer" /><span>Available for opportunities</span></div>
        <h1>Engineering software<br />with <em>purpose.</em></h1>
        <div className="hero-footer"><p>I&apos;m <strong>Arslan Ahmed</strong> — a Software Engineer with 5+ years of full-stack experience, building reliable applications, automation systems, and AI-driven products.</p><a className="scroll-cue" href="#career">Discover my work <ArrowDownRight size={20} /></a></div>
        <div className="hero-stats" aria-label="Professional highlights"><div><strong>5+</strong><span>Years in software</span></div><div><strong>04</strong><span>Professional roles</span></div><div><strong>01</strong><span>AI platform launched</span></div></div>
        <div className="hero-mark" aria-hidden="true">A</div>
      </section>
      <section className="statement section-pad">
        <p className="section-number">01 / Profile</p>
        <div><h2>Full-stack engineering,<br />automation, and applied AI.</h2><p>My work spans C#, Python, Java, APIs, databases, mobile development, testing, and business process automation — backed by practical experience across the complete software lifecycle.</p></div>
      </section>
      <section className="tech-band" aria-label="Core technology stack"><p>Core technology stack</p><div>{['Python','C#','Java','FastAPI','Frontend','Backend','Automation Bots','API Integration','SQL','MongoDB','Server Administration','Network Administration','Cybersecurity','GitHub Actions','Selenium'].map((skill) => <span key={skill}>{skill}</span>)}</div></section>
      <section className="section-pad dark-section" id="career">
        <div className="section-heading"><div><BriefcaseBusiness size={20} /><p className="section-number">02 / Career</p></div><h2>Experience that<br />moves work forward.</h2></div>
        <div className="timeline">{experience.map((item, index) => <article key={item.role}><span className="index">0{index + 1}</span><div><p className="meta">{item.period} · {item.company}</p><h3>{item.role}</h3><p>{item.note}</p></div></article>)}</div>
      </section>
      <section className="section-pad split-section" id="education">
        <div className="sticky-title"><GraduationCap size={22} /><p className="section-number">03 / Education</p><h2>A foundation for<br />lifelong learning.</h2></div>
        <div className="education-list">{education.map((item) => <article key={item.degree}><p className="meta">{item.year}</p><h3>{item.degree}</h3><p>{item.school}</p></article>)}<p className="aside-note">Core studies included Data Structures, Algorithm Analysis, Software Engineering, and Database Management. Languages: English, Urdu, and Punjabi.</p></div>
      </section>
      <section className="section-pad business-section" id="business">
        <div className="section-heading"><div><BriefcaseBusiness size={20} /><p className="section-number">04 / Business</p></div><h2>Ventures built around<br />real customer needs.</h2></div>
        <div className="venture-grid">{ventures.map((venture, index) => <article key={venture.name}><span className="venture-num">0{index + 1}</span><p className="meta">{venture.type}</p><h3>{venture.name}</h3><p>{venture.text}</p><a href={venture.href} target="_blank" rel="noreferrer">Visit AutoMind Solutions <ArrowUpRight size={16} /></a></article>)}</div>
      </section>
      <section className="section-pad products-section" id="products">
        <div className="section-heading"><div><PackageOpen size={20} /><p className="section-number">05 / Products</p></div><h2>Ideas made<br />tangible.</h2></div>
        <div className="product-list">{products.map((product, index) => <article key={product.name}><span>0{index + 1}</span><div><p className="meta">{product.category}</p><h3>{product.name}</h3></div><p>{product.text}</p><a className="product-link" href={product.href} target="_blank" rel="noreferrer">{product.tag} <ArrowUpRight size={15} /></a></article>)}</div>
      </section>
      <footer className="section-pad">
        <p className="section-number">06 / Contact</p><h2>Have an idea worth<br /><em>building?</em></h2>
        <a className="email" href="mailto:arslanahmeddev350@gmail.com"><Mail size={20} /> arslanahmeddev350@gmail.com <ArrowUpRight size={22} /></a>
        <div className="footer-line"><span>© 2026 Arslan Ahmed · Lahore, Pakistan</span><span><a href="https://www.linkedin.com/in/arslan-ahmed-30aab017a" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/Dev-Arslan" target="_blank" rel="noreferrer">GitHub</a></span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
