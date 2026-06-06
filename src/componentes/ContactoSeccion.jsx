// componentes/ContactoSeccion.jsx — ClickHouse UY

const iconoWpp = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const mensajesRapidos = [
  { id: 'msg-cotizar',   texto: 'Quiero cotizar un módulo', emoji: '🏠' },
  { id: 'msg-consulta',  texto: 'Tengo una consulta',       emoji: '💬' },
  { id: 'msg-visita',    texto: 'Quiero visitar un módulo', emoji: '📍' },
]

export default function ContactoSeccion() {
  const urlBase = 'https://wa.me/598XXXXXXXX?text='

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Fondo con imagen + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imagenes/casa-modular-real.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(249,244,236,0.97) 0%, rgba(232,240,229,0.95) 100%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 contenedor">
        <div className="max-w-2xl mx-auto text-center">

          {/* Encabezado */}
          <p className="seccion-subtitulo">Contacto directo</p>
          <h2 id="contacto-titulo" className="seccion-titulo mt-2">
            ¿Hablamos por WhatsApp?
          </h2>
          <div className="linea-decorativa mx-auto" aria-hidden="true" />
          <p className="text-carbon-800/60 text-base leading-relaxed mb-10">
            Sin formularios, sin esperas. Escribinos directo y te respondemos
            en minutos con toda la información que necesitás.
          </p>

          {/* Botón WhatsApp principal — grande y llamativo */}
          <a
            id="cta-whatsapp-principal"
            href={`${urlBase}${encodeURIComponent('Hola ClickHouse UY! Quiero cotizar una casa modular de 36m².')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iniciar conversación en WhatsApp con ClickHouse UY"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl
                       text-white font-bold text-xl shadow-2xl
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,211,102,0.4)]"
            style={{ background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)' }}
          >
            {iconoWpp}
            Escribinos por WhatsApp
          </a>

          <p className="text-carbon-800/40 text-xs mt-3 mb-12">
            +598 XX XXX XXX &nbsp;·&nbsp; Respondemos en minutos
          </p>

          {/* Mensajes rápidos */}
          <div className="mb-12">
            <p className="text-carbon-800/50 text-sm font-medium mb-4">
              O elegí un mensaje rápido:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {mensajesRapidos.map(({ id, texto, emoji }) => (
                <a
                  key={id}
                  id={id}
                  href={`${urlBase}${encodeURIComponent(`${emoji} ${texto}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enviar mensaje: ${texto}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                             border-2 border-[#25D366] text-carbon-800 font-medium text-sm
                             bg-white/80 backdrop-blur-sm
                             transition-all duration-200 hover:bg-[#25D366] hover:text-white
                             hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span aria-hidden="true">{emoji}</span>
                  {texto}
                </a>
              ))}
            </div>
          </div>

          {/* Tarjeta de confianza */}
          <div className="tarjeta-glass rounded-2xl p-6 grid grid-cols-3 gap-4 text-center">
            {[
              { numero: '< 10 min', texto: 'Tiempo de respuesta' },
              { numero: 'L — S',    texto: '8:00 a 20:00 hs' },
              { numero: '100%',     texto: 'Consulta sin cargo' },
            ].map(({ numero, texto }) => (
              <div key={texto}>
                <p className="font-display text-xl font-bold text-verde-600">{numero}</p>
                <p className="text-carbon-800/55 text-xs mt-1">{texto}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
