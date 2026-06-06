// componentes/HeroSeccion.jsx — ClickHouse UY
const badgesHero = [
  { icono: '⏱', texto: 'Instalación en 60 días' },
  { icono: '🌿', texto: 'Sostenibilidad Premium' },
  { icono: '📐', texto: 'Diseño Flexible' },
]

const estadisticas = [
  { numero: '60',  unidad: 'días',  descripcion: 'Tiempo de instalación' },
  { numero: '36',  unidad: 'm²',    descripcion: 'Espacio optimizado' },
  { numero: '100', unidad: '%',     descripcion: 'Precio cerrado' },
  { numero: '15+', unidad: 'años',  descripcion: 'Garantía estructural' },
]

export default function HeroSeccion() {
  return (
    <section
      id="inicio"
      aria-label="Hero — Tu hogar modular"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Imagen de fondo con zoom animado */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imagenes/casa-modular-real.jpg"
          alt="Casa modular ClickHouse UY de 36m² instalada en entorno natural"
          className="w-full h-full object-cover animate-zoom-slow"
          fetchpriority="high"
        />
        {/* Gradiente superpuesto */}
        <div className="absolute inset-0 gradiente-oscuro-bottom" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(15,15,13,0.45) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Contenido hero */}
      <div className="relative z-10 contenedor pb-16 md:pb-20 pt-32">
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {badgesHero.map(({ icono, texto }) => (
            <span key={texto} className="badge-hero">
              <span aria-hidden="true">{icono}</span>
              {texto}
            </span>
          ))}
        </div>

        {/* Headline principal */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     text-crema-50 leading-tight max-w-2xl text-balance
                     animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Tu hogar de{' '}
          <span className="text-madera-300">36m²</span>{' '}
          listo en{' '}
          <span className="text-verde-300 italic">60 días</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="mt-5 text-crema-200/90 text-lg md:text-xl max-w-xl leading-relaxed
                     animate-fade-in-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          Casas modulares premium con presupuesto cerrado, aislamiento superior
          y mínimo impacto ambiental. Fabricamos en Uruguay, instalamos en todo el país.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a
            href="#contacto"
            id="cta-hero-cotizar"
            className="boton-primario px-8 py-4 text-base shadow-xl"
          >
            Cotizá tu módulo gratis
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#tour-vr"
            id="cta-hero-tour"
            className="boton-secundario px-8 py-4 text-base"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                 className="w-5 h-5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 2 8 6 8 12s4 10 4 10M12 2c0 0 4 4 4 10s-4 10-4 10M2 12h20" />
            </svg>
            Tour VR 360°
          </a>
        </div>

        {/* Estadísticas */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-8
                     border-t border-crema-50/20 animate-fade-in"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          {estadisticas.map(({ numero, unidad, descripcion }) => (
            <div key={descripcion} className="text-crema-50">
              <p className="font-display text-3xl md:text-4xl font-bold leading-none">
                {numero}
                <span className="text-madera-300 text-2xl ml-0.5">{unidad}</span>
              </p>
              <p className="text-crema-200/70 text-xs mt-1 font-medium">{descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-1 text-crema-50/60 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
