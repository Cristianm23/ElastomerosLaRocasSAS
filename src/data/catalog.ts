import type { FrequentlyAskedQuestion, Product, ProductCategory, Service } from '../types/catalog';

export const productCategories: ProductCategory[] = [
  {
    "id": "category-1",
    "name": "Rodillos industriales",
    "slug": "rodillos-industriales",
    "description": "Productos y soluciones de la categoría rodillos industriales. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  },
  {
    "id": "category-2",
    "name": "Ruedas industriales",
    "slug": "ruedas-industriales",
    "description": "Productos y soluciones de la categoría ruedas industriales. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  },
  {
    "id": "category-3",
    "name": "Piñones y transmisión",
    "slug": "pinones-y-transmision",
    "description": "Productos y soluciones de la categoría piñones y transmisión. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  },
  {
    "id": "category-4",
    "name": "Barras y materiales",
    "slug": "barras-y-materiales",
    "description": "Productos y soluciones de la categoría barras y materiales. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  },
  {
    "id": "category-5",
    "name": "Piezas especiales",
    "slug": "piezas-especiales",
    "description": "Productos y soluciones de la categoría piezas especiales. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  },
  {
    "id": "category-6",
    "name": "Productos en caucho",
    "slug": "productos-en-caucho",
    "description": "Productos y soluciones de la categoría productos en caucho. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  },
  {
    "id": "category-7",
    "name": "Moldes y mecanizados",
    "slug": "moldes-y-mecanizados",
    "description": "Productos y soluciones de la categoría moldes y mecanizados. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  },
  {
    "id": "category-8",
    "name": "Aplicaciones industriales",
    "slug": "aplicaciones-industriales",
    "description": "Productos y soluciones de la categoría aplicaciones industriales. Consulta el alcance y las condiciones de fabricación según tu requerimiento.",
    "isDemo": false
  }
];

export const products: Product[] = [
  {
    "id": "product-1-1",
    "name": "Rodillos recubiertos en poliuretano",
    "slug": "rodillos-recubiertos-en-poliuretano",
    "categoryId": "category-1",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Rodillos industriales",
      "Rodillos recubiertos en poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-1-2",
    "name": "Rodillos con rodamientos alojados",
    "slug": "rodillos-con-rodamientos-alojados",
    "categoryId": "category-1",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Rodillos industriales",
      "Rodillos con rodamientos alojados"
    ],
    "isDemo": false
  },
  {
    "id": "product-1-3",
    "name": "Rodillos mecanizados con ejes metálicos",
    "slug": "rodillos-mecanizados-con-ejes-metalicos",
    "categoryId": "category-1",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Rodillos industriales",
      "Rodillos mecanizados con ejes metálicos"
    ],
    "isDemo": false
  },
  {
    "id": "product-1-4",
    "name": "Rodillos recibidores de papel",
    "slug": "rodillos-recibidores-de-papel",
    "categoryId": "category-1",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Rodillos industriales",
      "Rodillos recibidores de papel"
    ],
    "isDemo": false
  },
  {
    "id": "product-1-5",
    "name": "Rodillos de arrastre y transporte",
    "slug": "rodillos-de-arrastre-y-transporte",
    "categoryId": "category-1",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Rodillos industriales",
      "Rodillos de arrastre y transporte"
    ],
    "isDemo": false
  },
  {
    "id": "product-2-1",
    "name": "Ruedas industriales en poliuretano",
    "slug": "ruedas-industriales-en-poliuretano",
    "categoryId": "category-2",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Ruedas industriales",
      "Ruedas industriales en poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-2-2",
    "name": "Ruedas con núcleo metálico",
    "slug": "ruedas-con-nucleo-metalico",
    "categoryId": "category-2",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Ruedas industriales",
      "Ruedas con núcleo metálico"
    ],
    "isDemo": false
  },
  {
    "id": "product-2-3",
    "name": "Ruedas de empuje",
    "slug": "ruedas-de-empuje",
    "categoryId": "category-2",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Ruedas industriales",
      "Ruedas de empuje"
    ],
    "isDemo": false
  },
  {
    "id": "product-2-4",
    "name": "Ruedas de carga",
    "slug": "ruedas-de-carga",
    "categoryId": "category-2",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Ruedas industriales",
      "Ruedas de carga"
    ],
    "isDemo": false
  },
  {
    "id": "product-2-5",
    "name": "Ruedas especiales sobre plano",
    "slug": "ruedas-especiales-sobre-plano",
    "categoryId": "category-2",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Ruedas industriales",
      "Ruedas especiales sobre plano"
    ],
    "isDemo": false
  },
  {
    "id": "product-3-1",
    "name": "Piñones en poliuretano con núcleo metálico",
    "slug": "pinones-en-poliuretano-con-nucleo-metalico",
    "categoryId": "category-3",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piñones y transmisión",
      "Piñones en poliuretano con núcleo metálico"
    ],
    "isDemo": false
  },
  {
    "id": "product-3-2",
    "name": "Engranajes en poliuretano",
    "slug": "engranajes-en-poliuretano",
    "categoryId": "category-3",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piñones y transmisión",
      "Engranajes en poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-3-3",
    "name": "Acoples industriales",
    "slug": "acoples-industriales",
    "categoryId": "category-3",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piñones y transmisión",
      "Acoples industriales"
    ],
    "isDemo": false
  },
  {
    "id": "product-3-4",
    "name": "Elementos de arrastre",
    "slug": "elementos-de-arrastre",
    "categoryId": "category-3",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piñones y transmisión",
      "Elementos de arrastre"
    ],
    "isDemo": false
  },
  {
    "id": "product-3-5",
    "name": "Componentes de transmisión especiales",
    "slug": "componentes-de-transmision-especiales",
    "categoryId": "category-3",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piñones y transmisión",
      "Componentes de transmisión especiales"
    ],
    "isDemo": false
  },
  {
    "id": "product-4-1",
    "name": "Barras de poliuretano de 95 Shore A",
    "slug": "barras-de-poliuretano-de-95-shore-a",
    "categoryId": "category-4",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Barras y materiales",
      "Barras de poliuretano de 95 Shore A"
    ],
    "isDemo": false
  },
  {
    "id": "product-4-2",
    "name": "Barras de poliuretano de 60 Shore A a 75 Shore D",
    "slug": "barras-de-poliuretano-de-60-shore-a-a-75-shore-d",
    "categoryId": "category-4",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Barras y materiales",
      "Barras de poliuretano de 60 Shore A a 75 Shore D"
    ],
    "isDemo": false
  },
  {
    "id": "product-4-3",
    "name": "Planchas de poliuretano",
    "slug": "planchas-de-poliuretano",
    "categoryId": "category-4",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Barras y materiales",
      "Planchas de poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-4-4",
    "name": "Bloques de poliuretano",
    "slug": "bloques-de-poliuretano",
    "categoryId": "category-4",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Barras y materiales",
      "Bloques de poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-4-5",
    "name": "Perfiles industriales de poliuretano",
    "slug": "perfiles-industriales-de-poliuretano",
    "categoryId": "category-4",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Barras y materiales",
      "Perfiles industriales de poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-5-1",
    "name": "Mecanizados especiales en poliuretano",
    "slug": "mecanizados-especiales-en-poliuretano",
    "categoryId": "category-5",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piezas especiales",
      "Mecanizados especiales en poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-5-2",
    "name": "Codos en poliuretano",
    "slug": "codos-en-poliuretano",
    "categoryId": "category-5",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piezas especiales",
      "Codos en poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-5-3",
    "name": "Bujes especiales",
    "slug": "bujes-especiales",
    "categoryId": "category-5",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piezas especiales",
      "Bujes especiales"
    ],
    "isDemo": false
  },
  {
    "id": "product-5-4",
    "name": "Anillos técnicos en poliuretano",
    "slug": "anillos-tecnicos-en-poliuretano",
    "categoryId": "category-5",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piezas especiales",
      "Anillos técnicos en poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-5-5",
    "name": "Piezas fabricadas sobre plano o muestra",
    "slug": "piezas-fabricadas-sobre-plano-o-muestra",
    "categoryId": "category-5",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Piezas especiales",
      "Piezas fabricadas sobre plano o muestra"
    ],
    "isDemo": false
  },
  {
    "id": "product-6-1",
    "name": "Piezas de caucho por compresión",
    "slug": "piezas-de-caucho-por-compresion",
    "categoryId": "category-6",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Productos en caucho",
      "Piezas de caucho por compresión"
    ],
    "isDemo": false
  },
  {
    "id": "product-6-2",
    "name": "Topes industriales en caucho",
    "slug": "topes-industriales-en-caucho",
    "categoryId": "category-6",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Productos en caucho",
      "Topes industriales en caucho"
    ],
    "isDemo": false
  },
  {
    "id": "product-6-3",
    "name": "Empaques y sellos",
    "slug": "empaques-y-sellos",
    "categoryId": "category-6",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Productos en caucho",
      "Empaques y sellos"
    ],
    "isDemo": false
  },
  {
    "id": "product-6-4",
    "name": "Piezas de caucho con inserto metálico",
    "slug": "piezas-de-caucho-con-inserto-metalico",
    "categoryId": "category-6",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Productos en caucho",
      "Piezas de caucho con inserto metálico"
    ],
    "isDemo": false
  },
  {
    "id": "product-6-5",
    "name": "Recubrimientos de caucho",
    "slug": "recubrimientos-de-caucho",
    "categoryId": "category-6",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Productos en caucho",
      "Recubrimientos de caucho"
    ],
    "isDemo": false
  },
  {
    "id": "product-7-1",
    "name": "Moldes en acero para prensado",
    "slug": "moldes-en-acero-para-prensado",
    "categoryId": "category-7",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Moldes y mecanizados",
      "Moldes en acero para prensado"
    ],
    "isDemo": false
  },
  {
    "id": "product-7-2",
    "name": "Moldes para fabricación de piezas en caucho",
    "slug": "moldes-para-fabricacion-de-piezas-en-caucho",
    "categoryId": "category-7",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Moldes y mecanizados",
      "Moldes para fabricación de piezas en caucho"
    ],
    "isDemo": false
  },
  {
    "id": "product-7-3",
    "name": "Moldes para poliuretano",
    "slug": "moldes-para-poliuretano",
    "categoryId": "category-7",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Moldes y mecanizados",
      "Moldes para poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-7-4",
    "name": "Mecanizados especiales en acero",
    "slug": "mecanizados-especiales-en-acero",
    "categoryId": "category-7",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Moldes y mecanizados",
      "Mecanizados especiales en acero"
    ],
    "isDemo": false
  },
  {
    "id": "product-7-5",
    "name": "Núcleos metálicos para recubrimiento",
    "slug": "nucleos-metalicos-para-recubrimiento",
    "categoryId": "category-7",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Moldes y mecanizados",
      "Núcleos metálicos para recubrimiento"
    ],
    "isDemo": false
  },
  {
    "id": "product-8-1",
    "name": "Toberas en poliuretano",
    "slug": "toberas-en-poliuretano",
    "categoryId": "category-8",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Aplicaciones industriales",
      "Toberas en poliuretano"
    ],
    "isDemo": false
  },
  {
    "id": "product-8-2",
    "name": "Revestimientos resistentes al desgaste",
    "slug": "revestimientos-resistentes-al-desgaste",
    "categoryId": "category-8",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Aplicaciones industriales",
      "Revestimientos resistentes al desgaste"
    ],
    "isDemo": false
  },
  {
    "id": "product-8-3",
    "name": "Componentes para maquinaria petrolera",
    "slug": "componentes-para-maquinaria-petrolera",
    "categoryId": "category-8",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Aplicaciones industriales",
      "Componentes para maquinaria petrolera"
    ],
    "isDemo": false
  },
  {
    "id": "product-8-4",
    "name": "Piezas especiales para minería",
    "slug": "piezas-especiales-para-mineria",
    "categoryId": "category-8",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Aplicaciones industriales",
      "Piezas especiales para minería"
    ],
    "isDemo": false
  },
  {
    "id": "product-8-5",
    "name": "Componentes para sistemas transportadores",
    "slug": "componentes-para-sistemas-transportadores",
    "categoryId": "category-8",
    "description": "Producto incluido en el catálogo de Elastómeros La Roca S.A.S. Solicita información sobre disponibilidad, dimensiones y condiciones según tu necesidad.",
    "features": [],
    "applications": [],
    "technicalSpecifications": [],
    "tags": [
      "Aplicaciones industriales",
      "Componentes para sistemas transportadores"
    ],
    "isDemo": false
  }
];

const productMediaAndSpecifications: Record<string, Pick<Product, 'image' | 'features' | 'applications' | 'technicalSpecifications'>> = {
  'Rodillos recubiertos en poliuretano': {
    image: '/images/products/recubrimiento-de-rodillos-en-poliuretano.webp',
    features: ['Recubrimiento de rodillos en poliuretano según plano, muestra o especificaciones del cliente.'],
    applications: ['Aplicación industrial definida por el cliente.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Diámetro y longitud del rodillo; medidas del núcleo y del eje; cantidad y aplicación' },
    ],
  },
  'Piñones en poliuretano con núcleo metálico': {
    image: '/images/products/pinones-en-poliuretano-con-nucleos-metalicos.webp',
    features: ['Fabricación según plano, muestra o especificaciones del cliente.'],
    applications: ['Transmisión industrial.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Plano o muestra del piñón; medidas y número de dientes; cantidad y aplicación' },
    ],
  },
  'Barras de poliuretano de 95 Shore A': {
    image: '/images/products/barras-de-poliuretano-95-shore-a.webp',
    features: ['Barras de poliuretano resistentes al trabajo con derivados de los hidrocarburos.'],
    applications: ['Fabricación de piezas industriales según requerimiento.'],
    technicalSpecifications: [
      { name: 'Dureza', value: '95', unit: 'Shore A' },
      { name: 'Rango mostrado en la ficha', value: '60 a 75', unit: 'Shore D' },
      { name: 'Información para cotizar', value: 'Diámetro y longitud; dureza requerida; cantidad y aplicación' },
    ],
  },
  'Piezas fabricadas sobre plano o muestra': {
    image: '/images/products/piezas-especiales-bajo-plano.webp',
    features: ['Fabricación de piezas con perfiles y medidas especiales.'],
    applications: ['Aplicación definida por el cliente.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y material requerido; cantidad y aplicación' },
    ],
  },
  'Piezas de caucho por compresión': {
    image: '/images/products/fabricaciones-especiales-mecanizado.webp',
    features: ['Fabricación de piezas especiales en caucho según plano, muestra o especificaciones del cliente.'],
    applications: ['Aplicación definida por el cliente.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y dureza requerida; cantidad y aplicación' },
    ],
  },
  'Mecanizados especiales en poliuretano': {
    image: '/images/products/fabricaciones-especiales-mecanizado.webp',
    features: ['Mecanizado de piezas en poliuretano según plano, muestra o especificaciones del cliente.'],
    applications: ['Aplicación definida por el cliente.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y detalles del mecanizado; cantidad y aplicación' },
    ],
  },
  'Empaques y sellos': {
    image: '/images/products/empaques-para-bombas.webp',
    features: ['Fabricación de empaques en poliuretano para bombas.'],
    applications: ['Bombas industriales.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Plano o muestra del empaque; medidas y dureza requerida; cantidad y aplicación' },
    ],
  },
  'Moldes en acero para prensado': {
    image: '/images/products/moldes-en-acero.webp',
    features: ['Diseño y fabricación de moldes en acero para la fabricación de piezas en caucho.'],
    applications: ['Prensado y fabricación de piezas en caucho.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y aplicación; cantidad requerida' },
    ],
  },
  'Toberas en poliuretano': {
    image: '/images/products/toberas-en-poliuretano.webp',
    features: ['Fabricación de toberas en distintos perfiles y tamaños, según plano, muestra o referencia.'],
    applications: ['Lanzado de concreto.'],
    technicalSpecifications: [
      { name: 'Información para cotizar', value: 'Referencia y cantidad; medidas y tipo de conexión; equipo de aplicación' },
    ],
  },
};

for (const product of products) {
  const update = productMediaAndSpecifications[product.name];
  if (update) Object.assign(product, update);
}

productCategories[0].image = '/images/products/rodillos-en-poliuretano.webp';

products.push(
  {
    id: 'product-special-1',
    name: 'Fabricaciones especiales en poliuretano',
    slug: 'fabricaciones-especiales-en-poliuretano',
    categoryId: 'category-5',
    description: 'Diseño y fabricación de piezas especiales en poliuretano con núcleos metálicos, según plano, muestra o especificaciones del cliente.',
    image: '/images/products/fabricaciones-especiales-en-poliuretano.webp',
    features: ['Fabricación a medida.'],
    applications: ['Aplicación definida por el cliente.'],
    technicalSpecifications: [{ name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y dureza requerida; cantidad y aplicación' }],
    tags: ['Piezas especiales', 'Poliuretano', 'Núcleos metálicos'],
    isDemo: false,
  },
  {
    id: 'product-special-2',
    name: 'Run Flat en poliuretano',
    slug: 'run-flat-en-poliuretano',
    categoryId: 'category-5',
    description: 'Fabricación de insertos Run Flat en poliuretano según plano, muestra o especificaciones del cliente.',
    image: '/images/products/run-flat-en-poliuretano.webp',
    features: ['Fabricación a medida.'],
    applications: ['Aplicación definida por el cliente.'],
    technicalSpecifications: [{ name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y dureza requerida; cantidad y aplicación' }],
    tags: ['Piezas especiales', 'Run Flat', 'Poliuretano'],
    isDemo: false,
  },
  {
    id: 'product-special-3',
    name: 'Aletas para ventiladores industriales',
    slug: 'aletas-para-ventiladores-industriales',
    categoryId: 'category-8',
    description: 'Fabricación de aletas en poliuretano para ventiladores industriales, según plano, muestra o especificaciones del cliente.',
    image: '/images/products/aletas-para-ventiladores-industriales.webp',
    features: ['Fabricación a medida.'],
    applications: ['Ventiladores industriales.'],
    technicalSpecifications: [{ name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y dureza requerida; cantidad y aplicación' }],
    tags: ['Aplicaciones industriales', 'Ventiladores', 'Poliuretano'],
    isDemo: false,
  },
  {
    id: 'product-special-4',
    name: 'Asientos de válvulas en poliuretano',
    slug: 'asientos-de-valvulas-en-poliuretano',
    categoryId: 'category-5',
    description: 'Fabricación de asientos de válvulas en poliuretano según plano, muestra o especificaciones del cliente.',
    image: '/images/products/asientos-de-valvulas-en-poliuretano.webp',
    features: ['Fabricación a medida.'],
    applications: ['Válvulas industriales.'],
    technicalSpecifications: [{ name: 'Información para cotizar', value: 'Plano o muestra del asiento; medidas y dureza requerida; cantidad y aplicación' }],
    tags: ['Piezas especiales', 'Válvulas', 'Poliuretano'],
    isDemo: false,
  },
  {
    id: 'product-special-5',
    name: 'Mecanizados especiales en piezas de poliuretano',
    slug: 'mecanizados-especiales-en-piezas-de-poliuretano',
    categoryId: 'category-5',
    description: 'Mecanizado de piezas en poliuretano según plano, muestra o especificaciones del cliente.',
    image: '/images/products/mecanizados-especiales-en-poliuretano.webp',
    features: ['Fabricación a medida.'],
    applications: ['Aplicación definida por el cliente.'],
    technicalSpecifications: [{ name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y detalles del mecanizado; cantidad y aplicación' }],
    tags: ['Piezas especiales', 'Mecanizados', 'Poliuretano'],
    isDemo: false,
  },
  {
    id: 'product-special-6',
    name: 'Piezas para recuperación de lodos de perforación',
    slug: 'piezas-para-recuperacion-de-lodos-de-perforacion',
    categoryId: 'category-8',
    description: 'Fabricación de piezas para sistemas de recuperación de lodos de perforación, según plano, muestra o especificaciones del cliente.',
    image: '/images/products/piezas-para-recuperacion-de-lodos.webp',
    features: ['Fabricación a medida.'],
    applications: ['Sistemas de recuperación de lodos de perforación.'],
    technicalSpecifications: [{ name: 'Información para cotizar', value: 'Plano o muestra de la pieza; medidas y material requerido; cantidad y aplicación' }],
    tags: ['Aplicaciones industriales', 'Perforación', 'Poliuretano'],
    isDemo: false,
  },
  {
    id: 'product-special-7',
    name: 'Boquillas para lanzado de concreto',
    slug: 'boquillas-para-lanzado-de-concreto',
    categoryId: 'category-8',
    description: 'Boquillas para lanzado de concreto en distintos perfiles y tamaños, con bases tipo pestaña o roscadas según la referencia.',
    image: '/images/products/boquillas-para-lanzado-de-concreto.webp',
    features: ['Bases tipo pestaña o roscadas según la referencia.'],
    applications: ['Lanzado de concreto.'],
    technicalSpecifications: [
      { name: 'Dureza', value: '80 a 85', unit: 'Shore A' },
      { name: 'Información para cotizar', value: 'Referencia y cantidad; medidas y tipo de conexión; equipo de aplicación' },
    ],
    tags: ['Aplicaciones industriales', 'Lanzado de concreto', 'Poliuretano'],
    isDemo: false,
  },
);

export const services: Service[] = [{ id: 'demo-service', name: '[Servicio pendiente de confirmar]', slug: 'servicio-pendiente', description: '[Descripción provisional pendiente de validación]', isDemo: true }];

export const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [{ id: 'demo-faq', question: '[Pregunta frecuente pendiente de confirmar]', answer: '[Respuesta provisional pendiente de validación]', isDemo: true }];
