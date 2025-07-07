export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Componentes teóricos y metodológicos de la neuropedagogía',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas neuropedagógicas a través de la lúdica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas neuropedagógicas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia de la lúdica en la neuropedagogía',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Herramientas neuro pedagógicas a través de las inteligencias múltiples',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fundamentos neuropsicológicos de las inteligencias',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas para cada inteligencia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cerebro y rol en la educación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Procesos cerebrales claves en el aprendizaje',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Neuroclase',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Ejemplo de clase basada en neurociencia',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Mora, F. (2017). Neuroeducación: solo se puede aprender aquello que se ama: (ed.). Difusora Larousse - Alianza Editorial.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/1228787?page=21',
    },
    {
      referencia:
        'Torres Bustamante, E. (2020). Manual de herramientas neuropedagógicas. Instituto Nacional de Neuroeducación A.C.',
      link:
        'https://www.neuroeducacion.com.mx/modulo/panel/archivos/documento-965-200891.pdf',
    },
    {
      referencia:
        'Pinzón Blanco, D. M., & Téllez Sánchez, F. J. (2016). Herramientas neuropedagógicas: una alternativa para el mejoramiento en la competencia de resolución de problemas en matemáticas.',
      link: 'https://doi.org/10.15665/esc.v14i2.931',
    },
    {
      referencia:
        'Vergara Romero, C. y Macias Aldana, Y. (2022). Metasíntesis de técnicas, programas y estrategias neuropsicológicos que promueven las inteligencias múltiples en el aula. Corporación Universitaria Iberoamericana - Repositorio de Trabajos de Grado.',
      link:
        'https://repositorio.ibero.edu.co/items/a1f0ff40-88a0-4091-beef-b16925f3bd02',
    },
    {
      referencia:
        'Muchuit, A. F., Zapata, R. B., Comba, A., Mari, M., Torres, N., Pellizard, J., & Segovia, A. P. (2018). Neurodidáctica y autoorganización del aprendizaje, un camino de la teoría a la práctica.',
      link: 'https://rieoei.org/RIE/article/view/3193/3996',
    },
    {
      referencia:
        'Berrú Torres, C. P., Pardo Romero, S.R., Gordillo Salas, D. Y., Escaleras Encarnación, V. E., Vega Lanchi, M. M., Camacho Castillo, B. R., & Merino Abad, M. M. (2025). Estrategias docentes para integrar inteligencias múltiples y estilos de aprendizaje. Revista InveCom, 5(1), eS01012. Epub 18 de noviembre de 2024.',
      link: 'https://doi.org/10.5281/zenodo.10909995',
    },
    {
      referencia:
        'ICCSI. (2025). Caja de herramientas para inteligencias múltiples. ICCSI.',
      link:
        'https://iccsi.com.ar/caja-de-herramientas-de-las-inteligencias-multiples/',
    },
    {
      referencia:
        'Universidad CESUMA. (2025). El cerebro y su relación con el aprendizaje.',
      link:
        'https://www.cesuma.mx/blog/el-cerebro-y-su-relacion-con-el-aprendizaje.html',
    },
    {
      referencia:
        'Valencia Jiménez, L. K. (2024). Neurociencia y educación: cómo el cerebro aprende y su aplicación en el aula. Revista Multidisciplinar Ciencia y Descubrimiento.',
      link:
        'https://cienciaydescubrimiento.com/index.php/cyd/article/view/14/15',
    },
    {
      referencia:
        'Roldán Gallego, I. (2017). La neurociencia en el ámbito educativo. Revista Internacional de apoyo a la inclusión, logopedia, sociedad y multiculturalidad, 3(1), 118-135.',
      link: 'https://www.redalyc.org/journal/5746/574660910005/html/',
    },
    {
      referencia:
        'Vásquez Muñoz, A., Silva Siesquén, J. A., & Morales Huamán, H. I. (2023). Aporte de la neurociencia a la educación: a partir de una revisión bibliográfica.',
      link:
        'https://www.researchgate.net/publication/372568776_Aporte_de_la_neurociencia_a_la_educacion_a_partir_de_una_revision_bibliografica/fulltext/64bbe6108de7ed28bac0072c/Aporte-de-la-neurociencia-a-la-educacion-a-partir-de-una-revision-bibliografica.pdf',
    },
    {
      referencia:
        'León, M. I. (2023, 18 octubre). ¿Qué es neuroeducación y cómo aplicarla en el aula? Blog Escuela de posgrado.',
      link:
        'https://blogposgrado.ucontinental.edu.pe/neuroeducacion-aprendizaje-aula',
    },
    {
      referencia:
        "D'Addario, M. (2019). Educación y neurociencia Tratados, análisis, neuroaula y ejercicios (Primera edición).",
      link:
        'https://ciec.edu.co/wp-content/uploads/2025/01/Educacion-y-neurociencia.pdf',
    },
    {
      referencia:
        'Pardo, A. (2025, 4 febrero). 25 actividades basadas en neuroeducación para aplicar en tu aula. Edutopía Formación.',
      link:
        'https://edutopiaformacion.com/25-actividades-basadas-en-neuroeducacion-para-aplicar-en-tu-aula/',
    },
  ],
  glosario: [
    {
      termino: 'Circuitos neuronales',
      significado:
        'Redes de neuronas interconectadas que transmiten información en el cerebro, esenciales para el procesamiento cognitivo y el aprendizaje.',
    },
    {
      termino: 'Cognición',
      significado:
        'Conjunto de procesos mentales como percepción, memoria, lenguaje y razonamiento que permiten el aprendizaje.',
    },
    {
      termino: 'Corteza prefrontal',
      significado:
        'Área del cerebro responsable de funciones ejecutivas como planificación, toma de decisiones y control de impulsos.',
    },
    {
      termino: 'Emoción',
      significado:
        'Factor clave en el aprendizaje, ya que influye en la motivación y la retención de información.',
    },
    {
      termino: 'Funciones ejecutivas',
      significado:
        'Habilidades cognitivas que permiten organizar, planificar y regular el comportamiento para alcanzar objetivos.',
    },
    {
      termino: 'Memoria de trabajo',
      significado:
        'Sistema que retiene información temporalmente para su procesamiento y uso en tareas cognitivas.',
    },
    {
      termino: 'Neurodidáctica',
      significado:
        'Disciplina que aplica conocimientos de neurociencia para mejorar estrategias de enseñanza y aprendizaje.',
    },
    {
      termino: 'Neuroimagen',
      significado:
        'Técnica que permite visualizar la actividad cerebral mediante herramientas como la resonancia magnética funcional (fMRI) y la tomografía por emisión de positrones (PET), ayudando a comprender los procesos de aprendizaje.',
    },
    {
      termino: 'Neuroplasticidad',
      significado:
        'Capacidad del cerebro para adaptarse y cambiar mediante la formación de nuevas conexiones neuronales.',
    },
    {
      termino: 'Sinapsis',
      significado:
        'Capacidad del cerebro para adaptarse y cambiar mediante la formación de nuevas conexiones neuronales.',
    },
  ],
}
