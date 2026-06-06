// App.jsx — ClickHouse UY — Componente raíz
import NavegacionPrincipal  from './componentes/NavegacionPrincipal'
import HeroSeccion          from './componentes/HeroSeccion'
import TarjetasModelos      from './componentes/TarjetasModelos'
import TourVR               from './componentes/TourVR'
import BeneficiosModulares  from './componentes/BeneficiosModulares'
import ProcesoConstruccion  from './componentes/ProcesoConstruccion'
import PreguntasFrecuentes  from './componentes/PreguntasFrecuentes'
import ContactoSeccion      from './componentes/ContactoSeccion'
import PieDePagina          from './componentes/PieDePagina'

export default function App() {
  return (
    <>
      {/* Skip navigation para accesibilidad */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2
                   focus:z-[100] focus:px-4 focus:py-2 focus:bg-verde-600 focus:text-crema-50
                   focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Ir al contenido principal
      </a>

      <NavegacionPrincipal />

      <main id="contenido-principal">
        <HeroSeccion />
        <TarjetasModelos />
        <TourVR />
        <BeneficiosModulares />
        <ProcesoConstruccion />
        <PreguntasFrecuentes />
        <ContactoSeccion />
      </main>

      <PieDePagina />
    </>
  )
}
