export default {
  global: {
    Name: 'Comercio electrónico y análisis organizacional',
    Description:
      'Este componente brinda al aprendiz los fundamentos teóricos y prácticos de internet, comercio y negocios electrónicos, así como su evolución y relación con la planeación estratégica. Incluye el análisis del mercado digital mediante herramientas como la matriz DOFA y el perfil competitivo (MPC) para apoyar la toma de decisiones estratégicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Internet',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Comercio electrónico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Negocios electrónicos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evolución de los negocios electrónicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Productos, servicios y procesos (segmentación del mercado)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Misión',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Visión',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Objetivos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Políticas de calidad ',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Responsabilidad social',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Matriz DOFA.',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Composición ',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estrategias DOFA',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Análisis DOFA ',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Análisis del perfil competitivo MPC',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_21720033_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*
  complementario: [
    {
      tema: 'Internet',
      referencia:
        'SENA. (2023). <em>Conceptos básicos sobre marketing digital</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LnUX087fcsk',
    },
    {
      tema: 'Evolución de los negocios electrónicos',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones – MinTIC. (2019). <em>Libro blanco del comercio electrónico en Colombia</em>.',
      tipo: 'Modulo',
      link:
        'https://colombiatic.mintic.gov.co/679/articles-197363_recurso_1.pdf',
    },
    {
      tema: 'Evolución de los negocios electrónicos',
      referencia:
        'Rodríguez, J. C. (2019). <em>Comercio electrónico: fundamentos, modelos y aplicaciones</em>. Universidad Cooperativa de Colombia.',
      tipo: 'Modulo',
      link:
        'https://repository.ucc.edu.co/server/api/core/bitstreams/693b8bdc-9024-429c-8182-37a4416d2c47/content',
    },
    {
      tema: 'Análisis del mercado',
      referencia:
        'Talancón, H. P. (2013). <em>La matriz FODA: alternativa de diagnóstico y determinación de estrategias</em>. Revista Academia y Negocios, 2(1), 113–130.',
      tipo: 'Articulo revista científica',
      link: 'https://www.redalyc.org/pdf/292/29212108.pdf',
    },
  ],
  */
  glosario: [
    {
      termino: 'Analítica digital',
      significado:
        'Proceso de recopilación, medición y análisis de datos generados en entornos digitales para apoyar la toma de decisiones.',
    },
    {
      termino: 'Amenazas',
      significado:
        'Factores externos que pueden afectar negativamente el desempeño, la competitividad y la sostenibilidad organizacional.',
    },
    {
      termino: 'Automatización',
      significado:
        'Uso de herramientas tecnológicas para ejecutar procesos comerciales y operativos con mínima intervención humana.',
    },
    {
      termino: 'Comercio electrónico',
      significado:
        'Realización de transacciones de compra y venta de bienes o servicios a través de plataformas digitales.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad de una organización para mantener y mejorar su posición frente a sus competidores en el mercado.',
    },
    {
      termino: 'Debilidades',
      significado:
        'Limitaciones internas que reducen la eficiencia y el desempeño de una organización.',
    },
    {
      termino: 'Estrategias DA',
      significado:
        'Acciones orientadas a disminuir debilidades internas y minimizar el impacto de amenazas externas.',
    },
    {
      termino: 'Estrategias DO',
      significado:
        'Estrategias diseñadas para superar debilidades internas aprovechando oportunidades del entorno.',
    },
    {
      termino: 'Estrategias FA',
      significado:
        'Acciones que utilizan fortalezas internas para enfrentar riesgos y amenazas externas.',
    },
    {
      termino: 'Estrategias FO',
      significado:
        'Estrategias que aprovechan fortalezas internas para capitalizar oportunidades externas.',
    },
    {
      termino: 'Experiencia del usuario',
      significado:
        'Percepción y nivel de satisfacción del cliente durante la interacción con una plataforma digital.',
    },
    {
      termino: 'Factores críticos de éxito',
      significado:
        'Elementos determinantes que influyen directamente en el logro de los objetivos organizacionales.',
    },
    {
      termino: 'Fortalezas',
      significado:
        'Recursos y capacidades internas que generan ventajas competitivas para la organización.',
    },
    {
      termino: 'Innovación digital',
      significado:
        'Aplicación de tecnologías digitales para mejorar productos, servicios o procesos empresariales.',
    },
    {
      termino: 'Internet',
      significado:
        'Infraestructura tecnológica global que permite la interconexión de dispositivos y el intercambio de información.',
    },
    {
      termino: 'Logística',
      significado:
        'Conjunto de actividades relacionadas con el almacenamiento, transporte y entrega de productos al cliente.',
    },
    {
      termino: 'Marketing digital',
      significado:
        'Estrategias de promoción y comunicación realizadas a través de canales digitales.',
    },
    {
      termino: 'Matriz DOFA',
      significado:
        'Herramienta estratégica que analiza fortalezas, oportunidades, debilidades y amenazas organizacionales.',
    },
    {
      termino: 'Matriz de Perfil Competitivo (MPC)',
      significado:
        'Instrumento que compara el desempeño de una empresa frente a sus competidores según factores clave.',
    },
    {
      termino: 'Negocios electrónicos',
      significado:
        'Uso estratégico de tecnologías digitales para integrar y optimizar procesos organizacionales.',
    },
    {
      termino: 'Oportunidades',
      significado:
        'Factores externos favorables que pueden ser aprovechados para el crecimiento empresarial.',
    },
    {
      termino: 'Plataforma tecnológica',
      significado:
        'Sistema digital que soporta la operación y gestión de un negocio electrónico.',
    },
    {
      termino: 'Posicionamiento de marca',
      significado:
        'Nivel de reconocimiento y percepción de una marca en la mente del consumidor.',
    },
    {
      termino: 'Procesos digitales',
      significado:
        'Actividades empresariales apoyadas o automatizadas mediante tecnologías digitales.',
    },
    {
      termino: 'Segmentación del mercado',
      significado:
        'Proceso de división del mercado en grupos con características y necesidades similares.',
    },
  ],
  referencias: [
    {
      referencia:
        'David, F. R. (2020). <em>Conceptos de administración estratégica</em> (16.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2021). <em>Dirección de marketing</em> (16.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Laudon, K. C., & Laudon, J. P. (2020). <em>Sistemas de información gerencial: Administración de la empresa digital</em> (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC). (2019). <em>Libro blanco del comercio electrónico en Colombia</em>.',
      link:
        'https://colombiatic.mintic.gov.co/679/articles-197363_recurso_1.pdf',
    },
    {
      referencia:
        'Porter, M. E. (2008). <em>Ventaja competitiva: Creación y sostenimiento de un desempeño superior</em>. Grupo Editorial Patria.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J. C. (2019). <em>Comercio electrónico: fundamentos, modelos y aplicaciones</em>. Universidad Cooperativa de Colombia.',
      link:
        'https://repository.ucc.edu.co/server/api/core/bitstreams/693b8bdc-9024-429c-8182-37a4416d2c47/content',
    },
    {
      referencia:
        'Talancón, H. P. (2013). <em>La matriz FODA: alternativa de diagnóstico y determinación de estrategias</em>. Revista Academia y Negocios, 2(1), 113–130.',
      link: 'https://www.redalyc.org/pdf/292/29212108.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
