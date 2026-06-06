// componentes/PreguntasFrecuentes.jsx — ClickHouse UY
import { useState } from 'react'
import { faqs } from '../datos/faqs'

function ItemFaq({ faq, estaAbierto, alClickear }) {
  return (
    <div className="faq-item">
      <h3>
        <button
          id={`faq-btn-${faq.id}`}
          type="button"
          className="faq-pregunta"
          aria-expanded={estaAbierto}
          aria-controls={`faq-resp-${faq.id}`}
          onClick={alClickear}
        >
          <span>{faq.pregunta}</span>
          <span
            className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-crema-200
                        flex items-center justify-center transition-all duration-300
                        ${estaAbierto ? 'bg-verde-600 rotate-45' : ''}`}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke={estaAbierto ? '#F9F4EC' : 'currentColor'}
              strokeWidth="2.5"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={`faq-resp-${faq.id}`}
        role="region"
        aria-labelledby={`faq-btn-${faq.id}`}
        className={`faq-respuesta-wrapper ${estaAbierto ? 'faq-respuesta-wrapper--abierto' : ''}`}
      >
        <div>
          <p className="faq-respuesta">{faq.respuesta}</p>
        </div>
      </div>
    </div>
  )
}

export default function PreguntasFrecuentes() {
  const [abierto, setAbierto] = useState(faqs[0].id)

  const manejarClick = (id) => setAbierto(abierto === id ? null : id)

  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="py-20 md:py-28 bg-crema-50"
    >
      <div className="contenedor">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Columna izquierda — Encabezado */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <p className="seccion-subtitulo">Resolvemos tus dudas</p>
            <h2 id="faq-titulo" className="seccion-titulo mt-2">
              Preguntas frecuentes
            </h2>
            <div className="linea-decorativa" aria-hidden="true" />
            <p className="text-carbon-800/60 text-base leading-relaxed mb-8">
              Sabemos que elegir una casa modular genera dudas.
              Aquí respondemos las más comunes con total transparencia.
            </p>

            {/* Imagen decorativa */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="/imagenes/casa-modular-real.jpg"
                alt="Detalle exterior de casa modular ClickHouse UY"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-verde-800/30" aria-hidden="true" />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                  background: 'rgba(28,28,26,0.7)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p className="text-crema-50 font-semibold text-sm">
                  ¿Tenés otra pregunta?
                </p>
                <a
                  href="#contacto"
                  className="text-verde-300 text-sm hover:text-verde-200 transition-colors
                             underline underline-offset-2 mt-1 inline-block"
                >
                  Escribinos directamente →
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha — Acordeón */}
          <div className="lg:col-span-3">
            <div role="list" aria-label="Preguntas frecuentes">
              {faqs.map((faq) => (
                <div key={faq.id} role="listitem">
                  <ItemFaq
                    faq={faq}
                    estaAbierto={abierto === faq.id}
                    alClickear={() => manejarClick(faq.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
