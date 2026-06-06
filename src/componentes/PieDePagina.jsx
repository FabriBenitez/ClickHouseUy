// componentes/PieDePagina.jsx — ClickHouse UY

const enlacesPie = [
  {
    titulo: 'Empresa',
    links: [
      { etiqueta: 'Nosotros',     href: '#inicio' },
      { etiqueta: 'Proceso',      href: '#proceso' },
      { etiqueta: 'Sostenibilidad', href: '#beneficios' },
    ],
  },
  {
    titulo: 'Modelos',
    links: [
      { etiqueta: 'Módulo Esencial', href: '#modelos' },
      { etiqueta: 'Módulo Confort',  href: '#modelos' },
      { etiqueta: 'Módulo Off-Grid', href: '#modelos' },
    ],
  },
  {
    titulo: 'Soporte',
    links: [
      { etiqueta: 'Preguntas frecuentes', href: '#faq' },
      { etiqueta: 'Tour VR 360°',         href: '#tour-vr' },
      { etiqueta: 'Contacto',             href: '#contacto' },
    ],
  },
]

const redesSociales = [
  {
    id: 'instagram',
    nombre: 'Instagram',
    href: 'https://instagram.com/clickhouseuy',
    icono: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    nombre: 'Facebook',
    href: 'https://facebook.com/clickhouseuy',
    icono: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export default function PieDePagina() {
  const anioActual = new Date().getFullYear()

  return (
    <footer
      id="pie-de-pagina"
      role="contentinfo"
      className="bg-carbon-900 text-crema-200"
    >
      <div className="contenedor">
        {/* Cuerpo del pie */}
        <div className="pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Marca */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2.5 mb-5 group" aria-label="ClickHouse UY — Inicio">
              <div className="w-10 h-10 rounded-xl bg-verde-600 flex items-center justify-center
                              shadow-lg transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-crema-50" aria-hidden="true">
                  <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl text-crema-50 leading-none">
                Click<span className="text-verde-400">House</span>
                <span className="text-madera-300 text-sm font-sans font-semibold ml-0.5">UY</span>
              </span>
            </a>
            <p className="text-crema-200/60 text-sm leading-relaxed max-w-xs mb-6">
              Casas modulares premium de 36m² fabricadas en Uruguay.
              Presupuesto cerrado, entrega en 60 días y diseño flexible.
            </p>

            {/* Redes */}
            <div className="flex gap-3">
              {redesSociales.map(({ id, nombre, href, icono }) => (
                <a
                  key={id}
                  id={`rrss-${id}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguinos en ${nombre}`}
                  className="w-10 h-10 rounded-lg bg-carbon-800 text-crema-200/60
                             flex items-center justify-center
                             transition-all duration-300 hover:bg-verde-600 hover:text-crema-50"
                >
                  {icono}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {enlacesPie.map(({ titulo, links }) => (
            <nav key={titulo} aria-label={`Links de ${titulo}`}>
              <p className="text-crema-50 font-semibold text-sm uppercase tracking-widest mb-4">
                {titulo}
              </p>
              <ul className="space-y-3" role="list">
                {links.map(({ etiqueta, href }) => (
                  <li key={etiqueta}>
                    <a
                      href={href}
                      className="text-crema-200/55 text-sm hover:text-verde-400
                                 transition-colors duration-200"
                    >
                      {etiqueta}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Barra inferior */}
        <div className="border-t border-crema-50/10 py-6 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-crema-200/40 text-xs text-center sm:text-left">
            &copy; {anioActual} ClickHouse UY. Todos los derechos reservados.
          </p>
          <p className="text-crema-200/30 text-xs">
            Fabricado en Uruguay 🇺🇾 &nbsp;·&nbsp; Instalación en todo el país
          </p>
        </div>
      </div>
    </footer>
  )
}
