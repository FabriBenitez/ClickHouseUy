// componentes/TourVR.jsx — ClickHouse UY

export default function TourVR() {
  return (
    <section
      id="tour-vr"
      aria-labelledby="tour-vr-titulo"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Fondo imagen con overlay oscuro */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imagenes/casa-modular-real.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(14,38,11,0.93) 0%, rgba(28,28,26,0.88) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Textura de puntos decorativa */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 contenedor">
        <div className="max-w-3xl mx-auto text-center">
          {/* Ícono VR */}
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8
                       border border-verde-400/40 shadow-xl"
            style={{ background: 'rgba(58, 107, 49, 0.3)', backdropFilter: 'blur(16px)' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-verde-300">
              <rect x="4" y="16" width="40" height="20" rx="10" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="17" cy="26" r="5" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="31" cy="26" r="5" stroke="currentColor" strokeWidth="2.5" />
              <path d="M22 26h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M24 10v6M20 12l4-2 4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Etiqueta */}
          <p className="seccion-subtitulo text-verde-300 mb-3">Experiencia inmersiva</p>

          {/* Título */}
          <h2
            id="tour-vr-titulo"
            className="font-display text-4xl md:text-5xl text-crema-50 leading-tight mb-6"
          >
            Viví los{' '}
            <span className="text-verde-300 italic">36m²</span>{' '}
            antes de construirlos
          </h2>

          {/* Descripción */}
          <p className="text-crema-200/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Muchos clientes se sorprenden al ver cuánto espacio ofrece un módulo bien diseñado.
            Con nuestro Tour VR 360° podés recorrer cada rincón del interior, ver las terminaciones
            y sentir la amplitud — sin salir de tu casa.
          </p>

          {/* Stats de espacio */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-sm mx-auto">
            {[
              { numero: '4m', texto: 'Altura de cumbrera' },
              { numero: '8', texto: 'Zonas diferenciadas' },
              { numero: '360°', texto: 'Vista completa' },
            ].map(({ numero, texto }) => (
              <div key={texto} className="text-center">
                <p className="font-display text-2xl font-bold text-verde-300">{numero}</p>
                <p className="text-crema-50/60 text-xs mt-1">{texto}</p>
              </div>
            ))}
          </div>

          {/* CTA principal */}
          <a
            href="#contacto"
            id="cta-tour-vr"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-base
                       text-carbon-800 bg-crema-50 shadow-2xl
                       transition-all duration-300
                       hover:bg-crema-200 hover:shadow-verde-800/30 hover:-translate-y-1"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 className="w-5 h-5 text-verde-600" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
            </svg>
            Iniciar Tour VR 360°
          </a>

          <p className="text-crema-50/40 text-xs mt-4">
            Sin registro. Compatible con lentes VR y mobile.
          </p>
        </div>
      </div>
    </section>
  )
}
