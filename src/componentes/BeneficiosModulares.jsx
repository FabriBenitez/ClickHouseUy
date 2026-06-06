// componentes/BeneficiosModulares.jsx — ClickHouse UY
import { beneficios } from '../datos/beneficios'

// Íconos SVG por nombre
function IconoBeneficio({ nombre }) {
  const iconos = {
    reloj: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    moneda: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v2m0 8v2M9.5 9.5a3.5 3.5 0 015 3.5 3.5 3.5 0 01-5 3" />
      </svg>
    ),
    escudo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    expandir: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    hoja: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6 2 3 8 3 12c0 5 4 9 9 9 4 0 8-2.5 9-7.5C22 8 18 2 12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V12M12 12s-3-2-5-5" />
      </svg>
    ),
    fortaleza: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V9l9-6 9 6v12M9 21V15h6v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18" />
      </svg>
    ),
  }
  return iconos[nombre] || null
}

function TarjetaBeneficio({ beneficio, indice }) {
  const esPar = indice % 2 === 0
  return (
    <article
      className="group tarjeta-glass p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      aria-labelledby={`beneficio-titulo-${beneficio.id}`}
    >
      {/* Ícono */}
      <div className={`icono-beneficio mb-5 transition-all duration-300
                       group-hover:bg-verde-600 group-hover:text-crema-50`}>
        <IconoBeneficio nombre={beneficio.icono} />
      </div>

      {/* Título */}
      <h3
        id={`beneficio-titulo-${beneficio.id}`}
        className="font-display text-lg font-bold text-carbon-800 mb-3"
      >
        {beneficio.titulo}
      </h3>

      {/* Descripción */}
      <p className="text-carbon-800/65 text-sm leading-relaxed mb-4">
        {beneficio.descripcion}
      </p>

      {/* Acento diferenciador */}
      <div className="flex items-center gap-2 pt-3 border-t border-crema-300">
        <div className="w-1.5 h-1.5 rounded-full bg-madera-400 flex-shrink-0" aria-hidden="true" />
        <p className="text-madera-500 text-xs font-semibold">{beneficio.acento}</p>
      </div>
    </article>
  )
}

export default function BeneficiosModulares() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-titulo"
      className="py-20 md:py-28 bg-crema-50"
    >
      <div className="contenedor">
        {/* Encabezado */}
        <div className="max-w-xl mb-14">
          <p className="seccion-subtitulo">Por qué elegirnos</p>
          <h2 id="beneficios-titulo" className="seccion-titulo mt-2">
            Las razones que nos diferencian
          </h2>
          <div className="linea-decorativa" aria-hidden="true" />
          <p className="text-carbon-800/60 text-base leading-relaxed">
            Construir de forma modular no es un compromiso —
            es una decisión inteligente con ventajas concretas y medibles.
          </p>
        </div>

        {/* Grid 2 cols mobile / 3 desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Beneficios de las casas modulares"
        >
          {beneficios.map((beneficio, indice) => (
            <div key={beneficio.id} role="listitem">
              <TarjetaBeneficio beneficio={beneficio} indice={indice} />
            </div>
          ))}
        </div>

        {/* Banner comparativo */}
        <div
          className="mt-14 p-8 rounded-2xl gradiente-verde text-center text-crema-50"
          role="complementary"
          aria-label="Comparativa de tiempos"
        >
          <p className="text-verde-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Comparativa de tiempos
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div>
              <p className="font-display text-5xl font-bold text-red-300">12+</p>
              <p className="text-verde-200 text-sm mt-1">meses en obra húmeda</p>
            </div>
            <div className="font-display text-4xl text-verde-300 font-bold" aria-hidden="true">vs</div>
            <div>
              <p className="font-display text-5xl font-bold text-crema-50">60</p>
              <p className="text-verde-200 text-sm mt-1">días con ClickHouse UY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
