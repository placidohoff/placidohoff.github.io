export const SECTION_IDS = ['home', 'projects', 'resume', 'contact']

export function scrollToSection(id, { updateHash = true, behavior = 'smooth' } = {}) {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({ behavior, block: 'start' })

  if (updateHash) {
    const url = id === 'home'
      ? window.location.pathname + window.location.search
      : `#${id}`
    window.history.pushState(null, '', url)
  }
}
