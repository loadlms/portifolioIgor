import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const projects = [
    {
      title: 'Campanha de lançamento Golliath Melt',
      client: 'Golliath Burgers',
      description: 'Copywriting para post de anúncio da chegada dos novos Golliath Melt e Golliath Duplo Melt, com linguagem e hashtags específicas.',
      url: 'https://www.instagram.com/p/CyUGX8dsUnz/',
      embed: 'https://www.instagram.com/p/CyUGX8dsUnz/embed'
    },
    {
      title: 'Triplo PCQ = Tripla Suculência',
      client: 'Golliath Burgers',
      description: 'Copywriting para postagem de anúncio digital do Triplo PCQ, com linguagem e hashtags específicas.',
      url: 'https://www.instagram.com/p/C2QHoLRpra5/',
      embed: 'https://www.instagram.com/p/C2QHoLRpra5/embed'
    },
    {
      title: 'Feliz Dia Das Mães Cookie Keria',
      client: 'Cookie Keria',
      description: 'Copywriting para postagem e anúncio digital da box de dia das mães Cookie Keria, com linguagem e hashtags específicas.',
      url: 'https://www.instagram.com/p/C6yqtUiuTX2/',
      embed: 'https://www.instagram.com/p/C6yqtUiuTX2/embed'
    },
    {
      title: 'Cup Love',
      client: 'Cookie Keria',
      description: 'Copywriting para postagem de anunciando a chegada do Cup Love, com linguagem e hashtags específicas.',
      url: 'https://www.instagram.com/p/C79sn-huGck/',
      embed: 'https://www.instagram.com/p/C79sn-huGck/embed'
    },
    {
      title: 'Golliath Burgers Ft Chicken',
      client: 'Golliath Burgers',
      description: 'Desenvolvimento de um roteiro para um vídeo curto, expressivo e impactante, mostrando a suculência da coleção, com legenda, linguagem e hashtags específicas.',
      url: 'https://www.instagram.com/reel/C4eAUh9pb9C/',
      embed: 'https://www.instagram.com/reel/C4eAUh9pb9C/embed'
    }
  ]

  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)

  const closeMenu = () => {
    setMenuClosing(true)
    setTimeout(() => {
      setMenuOpen(false)
      setMenuClosing(false)
    }, 250)
  }

  const startX = useRef(0)
  const startY = useRef(0)
  const dragging = useRef(false)

  const onTouchStart = (e) => {
    const t = e.touches[0]
    startX.current = t.clientX
    startY.current = t.clientY
    dragging.current = true
  }

  const onTouchMove = (e) => {
    if (!dragging.current) return
    const t = e.touches[0]
    const dx = t.clientX - startX.current
    const dy = t.clientY - startY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next()
      else prev()
      dragging.current = false
    }
  }

  const onTouchEnd = () => {
    dragging.current = false
  }

  const prev = () => setActive((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setActive((i) => (i + 1) % projects.length)

  useEffect(() => {
    if (menuOpen) return
    const id = setInterval(() => {
      if (dragging.current) return
      setActive((i) => (i + 1) % projects.length)
    }, 10000)
    return () => clearInterval(id)
  }, [projects.length, menuOpen])

  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <a href="#hero" className="brand"><img src="/icone.png" alt="" className="brand-icon" /> IGOR PIRES</a>
          <nav className="menu">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#contato">Contato</a>
          </nav>
          <button aria-label="Abrir menu" className={"hamburger" + (menuOpen ? " open" : "")} onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}>
            <div className="hamburger-box">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className={"mobile-menu" + (menuOpen ? " open" : "") + (menuClosing ? " closing" : "")} onClick={closeMenu}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <div className="links">
              <a href="#sobre" onClick={closeMenu}>Sobre</a>
              <a href="#servicos" onClick={closeMenu}>Serviços</a>
              <a href="#trabalhos" onClick={closeMenu}>Trabalhos</a>
              <a href="#contato" onClick={closeMenu}>Contato</a>
            </div>
          </div>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container">
          <h1>
            Transforme seguidores em <span className="gold">clientes</span> com <span className="gold">textos estratégicos</span>.
          </h1>
          <p>Redação publicitária e Copywriting focados em conversão e branding para o seu negócio</p>
        </div>
      </section>

      <section id="sobre">
        <div className="card center">
        
          <p className="tagline">Por trás de cada <span className="gold">marca de sucesso</span>, existe uma boa <span className="gold">história</span>. O meu trabalho é contar a sua!</p>
          <p>
            Formado em <span className="gold">Públicidade e Propaganda</span>, atuo hoje como<span className="gold"> Redator Publicitário</span> e nos últimos 3 anos, ajudei empresas a encontrarem sua <span className="gold">voz</span> no meio digital. Eu crio <span className="gold">legendas</span> que engajam, <span className="gold">roteiros</span> que prendem a atenção e <span className="gold">textos de venda</span> que convertem, com <span className="gold">estratégia</span> e <span className="gold">criatividade</span>. Se você busca uma comunicação <span className="gold">sem ruídos</span> e com muita <span className="gold">personalidade</span>, está no lugar certo.
          </p>
        </div>
      </section>

      <section id="servicos" className="services">
        <div className="container">
          <h2>Serviços Oferecidos</h2>
          <div className="grid">
            <div className="service">
              <div className="icon">📱</div>
              <h3>Redação para Redes Sociais</h3>
            </div>
            <div className="service">
              <div className="icon">✍️</div>
              <h3>Copywriting</h3>
            </div>
            <div className="service">
              <div className="icon">🎬</div>
              <h3>Roteiros</h3>
            </div>
            <div className="service">
              <div className="icon">📝</div>
              <h3>Revisão de Textos</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="trabalhos" className="works">
        <div className="container">
          <h2 style={{color:'#ffffffff'}}>Meus Trabalhos</h2>
          <div className="carousel">
            <button className="car-btn prev" onClick={prev}>‹</button>
            <div className="carousel-inner" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
              {projects.map((p, i) => (
                <div key={p.title} className={"carousel-item" + (i === active ? " active" : "")}>
                  <div className="trabalho-card">
                    <h3>{p.title}</h3>
                    <p>Cliente: {p.client}</p>
                    <p>{p.description}</p>
                    <div className="preview">
                      <iframe className="preview-frame" src={p.embed} title={p.title} loading="lazy"></iframe>
                      <p className="preview-note">Se o preview não carregar, clique em “Ver Trabalho”.</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                      <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">Ver Trabalho</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="car-btn next" onClick={next}>›</button>
            <div className="dots">
              {projects.map((_, i) => (
                <span key={i} className={"dot" + (i === active ? " active" : "")} onClick={() => setActive(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="container">
          <div className="card" style={{background: 'url(/sobre.jpg)'}}>
            <h2>Contato</h2>
            <p>Precisa de textos que conversem com seu público e entreguem resultados? Entre em contato:</p>
            <div className="info">
              <span><a href="mailto:igorpires29@gmail.com">✉️igorpires29@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">© 2024 - 2025 Igor Pires - Todos os direitos reservados</footer>
    </div>
  )
}

export default App
