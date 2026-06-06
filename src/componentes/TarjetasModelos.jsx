// componentes/TarjetasModelos.jsx — ClickHouse UY
import { modelos } from '../datos/modelos'

function IconoCheck({ activo }) {
  return activo ? (
    <span className="inline-flex items-center gap-1 text-verde-600 font-semibold text-xs">
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      Apta Off-Grid
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-carbon-800/40 text-xs">
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
      Requiere red eléctrica
    </span>
  )
}

function TarjetaModelo({ modelo }) {
  const { nombre, subtitulo, descripcion, imagen, precio, datos, etiquetas, destacado } = modelo

  return (
    <article
      className={`tarjeta-modelo relative ${
        destacado ? 'ring-2 ring-verde-500 ring-offset-2' : ''
      }`}
      aria-label={`Modelo ${nombre}`}
    >
      {/* Badge "Más elegido" */}
      {destacado && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-verde-600 text-crema-50 text-xs font-bold
                           rounded-full shadow-lg tracking-wide uppercase">
            Más elegido
          </span>
        </div>
      )}

      {/* Imagen 3:2 con hover zoom */}
      <div className="tarjeta-modelo__imagen-wrapper">
        <img
          src={imagen}
          alt={`Casa modular ClickHouse UY — ${nombre}`}
          className="tarjeta-modelo__imagen"
          loading="lazy"
        />
        {/* Overlay precio */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3
                        bg-gradient-to-t from-carbon-900/80 to-transparent">
          <p className="text-crema-50 font-display font-bold text-xl">{precio}</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Cabecera */}
        <div className="mb-4">
          <p className="seccion-subtitulo text-xs mb-1">{subtitulo}</p>
          <h3 className="font-display text-xl font-bold text-carbon-800">{nombre}</h3>
          <p className="text-carbon-800/60 text-sm mt-2 leading-relaxed">{descripcion}</p>
        </div>

        {/* Datos técnicos */}
        <div className="space-y-3 py-4 border-t border-b border-crema-200 my-4">
          <div className="dato-tecnico">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-verde-500 flex-shrink-0 mt-0.5" aria-hidden="true">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="dato-tecnico__etiqueta">Superficie</p>
              <p className="font-semibold text-carbon-800">{datos.metros}</p>
            </div>
          </div>

          <div className="dato-tecnico">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-verde-500 flex-shrink-0 mt-0.5" aria-hidden="true">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            <div>
              <p className="dato-tecnico__etiqueta">Aislamiento térmico</p>
              <p className="text-carbon-800/80">{datos.aislamiento}</p>
            </div>
          </div>

          <div className="dato-tecnico">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-verde-500 flex-shrink-0 mt-0.5" aria-hidden="true">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="dato-tecnico__etiqueta">Cimientos requeridos</p>
              <p className="text-carbon-800/80">{datos.cimientos}</p>
            </div>
          </div>

          <div className="dato-tecnico">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-verde-500 flex-shrink-0 mt-0.5" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="dato-tecnico__etiqueta">Entrega estimada</p>
              <p className="font-semibold text-verde-600">{datos.entrega}</p>
            </div>
          </div>

          <div className="pt-1">
            <IconoCheck activo={datos.offGrid} />
          </div>
        </div>

        {/* Etiquetas */}
        <div className="flex flex-wrap gap-2 mb-5">
          {etiquetas.map((etiqueta) => (
            <span
              key={etiqueta}
              className="px-2.5 py-1 bg-verde-100 text-verde-700 text-xs font-medium rounded-full"
            >
              {etiqueta}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          id={`cta-modelo-${modelo.id}`}
          className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
            destacado
              ? 'bg-verde-600 text-crema-50 hover:bg-verde-700 shadow-md hover:shadow-lg hover:-translate-y-0.5'
              : 'border-2 border-verde-600 text-verde-600 hover:bg-verde-600 hover:text-crema-50'
          }`}
        >
          Consultá este modelo
        </a>
      </div>
    </article>
  )
}

export default function TarjetasModelos() {
  return (
    <section
      id="modelos"
      aria-labelledby="modelos-titulo"
      className="py-20 md:py-28 bg-crema-100"
    >
      <div className="contenedor">
        {/* Encabezado sección */}
        <div className="text-center mb-14">
          <p className="seccion-subtitulo" aria-label="Sección modelos">Nuestros modelos</p>
          <h2 id="modelos-titulo" className="seccion-titulo mt-2">
            36m² de posibilidades
          </h2>
          <div className="linea-decorativa mx-auto" aria-hidden="true" />
          <p className="text-carbon-800/60 max-w-xl mx-auto text-base leading-relaxed">
            Tres configuraciones pensadas para distintos estilos de vida y terrenos.
            Todos incluyen precio cerrado y entrega garantizada.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Modelos de casas modulares"
        >
          {modelos.map((modelo) => (
            <div key={modelo.id} role="listitem">
              <TarjetaModelo modelo={modelo} />
            </div>
          ))}
        </div>

        {/* Nota inferior */}
        <p className="text-center text-carbon-800/50 text-sm mt-10">
          * Precios en dólares americanos. Incluye fabricación, flete e instalación.
          Financiación disponible.{' '}
          <a href="#contacto" className="text-verde-600 underline underline-offset-2 hover:text-verde-700">
            Consultanos
          </a>
          .
        </p>
      </div>
    </section>
  )
}
