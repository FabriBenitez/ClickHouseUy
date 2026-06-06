// componentes/ProcesoConstruccion.jsx — ClickHouse UY

const pasosProceso = [
  {
    numero: '01',
    titulo: 'Diseño y consultoría',
    descripcion: 'Evaluamos tu terreno, escuchamos tus necesidades y te presentamos la configuración ideal. Todo sin costo inicial.',
    duracion: '1 semana',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'Fabricación en taller',
    descripcion: 'Construimos tu módulo en un entorno controlado. Sin clima, sin demoras. Avances semanales con fotos y video.',
    duracion: '4 semanas',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    numero: '03',
    titulo: 'Transporte e instalación',
    descripcion: 'Trasladamos el módulo completo hasta tu terreno. Una grúa lo ubica en su posición definitiva en pocas horas.',
    duracion: '1 semana',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    numero: '04',
    titulo: 'Entrega y postventa',
    descripcion: 'Conexión a servicios, prueba de todos los sistemas y entrega de llaves. Garantía estructural de 15 años.',
    duracion: '1 semana',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function ProcesoConstruccion() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-titulo"
      className="py-20 md:py-28 bg-crema-100"
    >
      <div className="contenedor">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="seccion-subtitulo">Así trabajamos</p>
          <h2 id="proceso-titulo" className="seccion-titulo mt-2">
            De la firma al hogar en 4 pasos
          </h2>
          <div className="linea-decorativa mx-auto" aria-hidden="true" />
          <p className="text-carbon-800/60 max-w-lg mx-auto text-base leading-relaxed">
            Un proceso transparente, trazable y sin sorpresas.
            Sabés exactamente en qué etapa estás en todo momento.
          </p>
        </div>

        {/* Timeline */}
        <ol
          className="relative"
          aria-label="Proceso de construcción paso a paso"
        >
          {/* Línea conectora desktop */}
          <div
            className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-px h-[calc(100%-80px)] bg-gradient-to-b from-verde-300 via-verde-500 to-madera-400"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {pasosProceso.map((paso, indice) => {
              const esIzquierda = indice % 2 === 0
              return (
                <li
                  key={paso.numero}
                  className={`relative flex gap-5 items-start group ${
                    esIzquierda ? 'lg:pr-12' : 'lg:pl-12 lg:mt-20'
                  }`}
                >
                  {/* Número + ícono */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <div
                      className="w-16 h-16 rounded-2xl bg-verde-600 text-crema-50
                                 flex items-center justify-center shadow-lg
                                 transition-all duration-300 group-hover:bg-verde-700
                                 group-hover:shadow-xl group-hover:scale-105"
                      aria-hidden="true"
                    >
                      {paso.icono}
                    </div>
                    <span
                      className="text-xs font-bold text-verde-600 bg-verde-100
                                 px-2 py-0.5 rounded-full"
                    >
                      {paso.duracion}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="font-display text-4xl font-bold text-crema-300
                                   leading-none select-none"
                        aria-hidden="true"
                      >
                        {paso.numero}
                      </span>
                      <h3 className="font-display text-lg font-bold text-carbon-800">
                        {paso.titulo}
                      </h3>
                    </div>
                    <p className="text-carbon-800/65 text-sm leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                </li>
              )
            })}
          </div>
        </ol>

        {/* CTA final */}
        <div className="text-center mt-16">
          <a href="#contacto" id="cta-proceso" className="boton-primario px-10 py-4 text-base">
            Empezá el proceso hoy
          </a>
          <p className="text-carbon-800/40 text-xs mt-3">
            Primera consulta sin costo ni compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
