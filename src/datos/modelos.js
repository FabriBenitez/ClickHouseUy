// datos/modelos.js — Modelos de casas modulares ClickHouse UY

export const modelos = [
  {
    id: 'basico',
    nombre: 'Módulo Esencial',
    subtitulo: 'Ideal para empezar',
    descripcion: 'Solución inteligente para quienes buscan su primer hogar o una cabaña de descanso con todo lo necesario.',
    imagen: '/imagenes/casa-modular-real.jpg',
    precio: 'Desde USD 28.000',
    datos: {
      metros: '36 m²',
      aislamiento: 'Poliuretano inyectado 60mm',
      cimientos: 'Plateas o pilotes puntuales',
      offGrid: false,
      entrega: '60 días',
    },
    etiquetas: ['1 dormitorio', 'Cocina integrada', 'Baño completo'],
  },
  {
    id: 'confort',
    nombre: 'Módulo Confort',
    subtitulo: 'Vida plena en 36m²',
    descripcion: 'Diseño optimizado para familias. Incluye terminaciones premium, doble vidriado y mayor eficiencia energética.',
    imagen: '/imagenes/casa-modular-real.jpg',
    precio: 'Desde USD 34.500',
    datos: {
      metros: '36 m²',
      aislamiento: 'Lana de vidrio alta densidad + cámara de aire',
      cimientos: 'Plateas o pilotes puntuales',
      offGrid: false,
      entrega: '65 días',
    },
    etiquetas: ['2 ambientes', 'DVH', 'Deck incluido'],
    destacado: true,
  },
  {
    id: 'offgrid',
    nombre: 'Módulo Off-Grid',
    subtitulo: 'Autonomía total',
    descripcion: 'Sistema de energía solar, recolección de agua de lluvia y tratamiento de efluentes. Cero dependencia de la red.',
    imagen: '/imagenes/casa-modular-real.jpg',
    precio: 'Desde USD 42.000',
    datos: {
      metros: '36 m²',
      aislamiento: 'Multicapa poliuretano + lana mineral 80mm',
      cimientos: 'Pilotes helicoidales (cero impacto)',
      offGrid: true,
      entrega: '75 días',
    },
    etiquetas: ['Panel solar 3kW', 'Cisterna 5.000L', 'Batería litio'],
  },
]
