// componentes/NavegacionPrincipal.jsx — ClickHouse UY
import { useState, useEffect } from 'react'

const enlacesNav = [
  { etiqueta: 'Modelos',    ancla: '#modelos' },
  { etiqueta: 'Beneficios', ancla: '#beneficios' },
  { etiqueta: 'Proceso',    ancla: '#proceso' },
  { etiqueta: 'FAQ',        ancla: '#faq' },
  { etiqueta: 'Contacto',   ancla: '#contacto' },
]

export default function NavegacionPrincipal() {
  const [estaScrolleado, setEstaScrolleado] = useState(false)
  const [menuAbierto,    setMenuAbierto]    = useState(false)

  useEffect(() => {
    const manejarScroll = () => setEstaScrolleado(window.scrollY > 40)
    window.addEventListener('scroll', manejarScroll, { passive: true })
    return () => window.removeEventListener('scroll', manejarScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        estaScrolleado ? 'glass-nav glass-nav--scrolled' : 'glass-nav'
      }`}
    >
      <div className="contenedor">
        <nav
          aria-label="Navegación principal"
          className="flex items-center justify-between h-16 md:h-20"
        >
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group"
            aria-label="ClickHouse UY — Inicio"
          >
            <div className="w-9 h-9 rounded-lg bg-verde-600 flex items-center justify-center
                            shadow-md transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-crema-50" aria-hidden="true">
                <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="currentColor" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-carbon-800 leading-none">
              Click<span className="text-verde-600">House</span>
              <span className="text-madera-400 text-sm font-sans font-semibold ml-0.5">UY</span>
            </span>
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {enlacesNav.map(({ etiqueta, ancla }) => (
              <li key={ancla}>
                <a
                  href={ancla}
                  className="text-sm font-medium text-carbon-800/70 hover:text-verde-600
                             transition-colors duration-200 relative group"
                >
                  {etiqueta}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-verde-500
                                   transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <a href="#contacto" className="boton-primario text-sm px-5 py-2.5">
              Cotizá tu módulo
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Hamburguesa mobile */}
          <button
            id="menu-mobile-toggle"
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-expanded={menuAbierto}
            aria-controls="menu-mobile"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden p-2 rounded-lg text-carbon-800 hover:bg-crema-200 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 className="w-6 h-6" aria-hidden="true">
              {menuAbierto
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </nav>

        {/* Menú mobile desplegable */}
        {menuAbierto && (
          <div
            id="menu-mobile"
            role="navigation"
            aria-label="Menú mobile"
            className="md:hidden border-t border-crema-300/50 pb-4 pt-2"
          >
            <ul className="flex flex-col gap-1" role="list">
              {enlacesNav.map(({ etiqueta, ancla }) => (
                <li key={ancla}>
                  <a
                    href={ancla}
                    onClick={() => setMenuAbierto(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-carbon-800/80
                               hover:text-verde-600 hover:bg-crema-100 rounded-lg transition-colors"
                  >
                    {etiqueta}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-3">
                <a href="#contacto" onClick={() => setMenuAbierto(false)}
                   className="boton-primario w-full text-sm py-2.5">
                  Cotizá tu módulo
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
