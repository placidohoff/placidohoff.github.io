import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { scrollToSection } from './utils/scrollToSection'

function Page() {
  useEffect(() => {
    const goToHash = (behavior) => {
      const id = window.location.hash.replace('#', '')
      if (id) scrollToSection(id, { updateHash: false, behavior })
    }

    // Wait a frame so section layout (and fade-in elements) has settled before jumping.
    requestAnimationFrame(() => requestAnimationFrame(() => goToHash('auto')))

    const onPopState = () => goToHash('smooth')
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <>
      <Header />
      <main>
        <section id="home" className="page-section">
          <Home />
        </section>
        <section id="projects" className="page-section">
          <Projects />
        </section>
        <section id="resume" className="page-section">
          <Resume />
        </section>
        <section id="contact" className="page-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
