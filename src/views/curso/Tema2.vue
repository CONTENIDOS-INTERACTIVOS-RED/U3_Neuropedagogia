<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Herramientas neuro pedagógicas a través de las inteligencias múltiples'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p La comprensión de cómo funciona el cerebro en relación con el aprendizaje ha dado paso a nuevas propuestas pedagógicas que buscan atender la diversidad cognitiva de los estudiantes.

      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/1.png', alt='')
      
            .col-lg-8
              h3.mb-4(data-aos="flip-up") Herramientas neuro pedagógicas a través de las inteligencias múltiples 
              p.mb-4(data-aos="fade-right") En el PDF Herramientas neuropedagógicas a través de las inteligencias múltiples, se analiza cómo la integración entre neurodidáctica, autorregulación del aprendizaje y la teoría de las inteligencias múltiples permite diseñar estrategias educativas personalizadas. Este enfoque promueve un aprendizaje más autónomo, significativo y ajustado a las fortalezas cognitivas de cada estudiante.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Herramientas neuro pedagógicas a través de las inteligencias múltiples.
      

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Fundamentos neuropsicológicos de las inteligencias

      p El reconocimiento de las distintas formas en que las personas aprenden ha llevado al desarrollo de enfoques pedagógicos más inclusivos y personalizados.

      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h3.mb-4(data-aos="flip-up") Fundamentos neuropsicológicos de las inteligencias 
              p.mb-4(data-aos="fade-right") En el PDF Fundamentos neuropsicológicos de las inteligencias, se analizan las bases cerebrales de las inteligencias múltiples y su aplicación en el ámbito educativo, resaltando cómo cada tipo de inteligencia se relaciona con áreas específicas del cerebro. Este enfoque permite adaptar las estrategias de enseñanza a las capacidades individuales, favoreciendo un aprendizaje más significativo, motivador y acorde con el funcionamiento neuropsicológico de cada estudiante.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Fundamentos neuropsicológicos de las inteligencias.
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/2.png', alt='')

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Herramientas para cada inteligencia
      


      .row.justify-content-center.align-items-center.bg-color-9.bordes.p-4.py-lg-0.px-lg-4.mb-5
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-auto(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema2/3.svg', style="max-width:400px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
            .col-lg(data-aos="fade-left").mb-3.mb-lg-0
              p A continuación, se presentan herramientas neuropedagógicas organizadas, según cada una de las inteligencias múltiples, con un enfoque en principios claves como la emoción, la novedad, el movimiento y la conexión social. Estas herramientas se construyen siguiendo los principios establecidos en las investigaciones de Berrú et al. (2025), ICCSI (2025), y Vergara Romero y Macias Aldana (2022), quienes resaltan la importancia de integrar estrategias docentes basadas en las inteligencias múltiples para potenciar el aprendizaje significativo. De acuerdo con estos estudios, la estimulación de diversas inteligencias mediante metodologías activas y multisensoriales, favorece la conexión neuronal y el desarrollo integral de los estudiantes, promoviendo entornos educativos más inclusivos y adaptativos.
    
      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Inteligencia lingüístico-verbal")
              p El cerebro está programado para recordar historias. La narrativa activa múltiples áreas cerebrales, incluyendo las emocionales (amígdala) y de memoria (hipocampo).
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b #[i Storytelling.]] Presentar contenidos curriculares en formato de relato o cuento para generar una conexión emocional que fija el aprendizaje.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Debates y tertulias dialógicas.] Fomentan el pensamiento crítico y la organización de ideas, activando las funciones ejecutivas del lóbulo frontal.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Creación de blogs o podcasts.] Permite a los alumnos producir contenido, lo que implica un procesamiento más profundo de la información y activa los circuitos de recompensa.


      
            .div(titulo="Inteligencia lógico-matemática")
              p El cerebro aprende mejor mediante la resolución de problemas y la identificación de patrones, lo que activa el córtex prefrontal y parietal.
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Gamificación.] Uso de elementos de juego para presentar problemas matemáticos o lógicos, aumentando la motivación, a través de la liberación de dopamina.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Aprendizaje basado en problemas (ABP).] Plantear un problema real que requiera investigación y análisis de datos.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Mapas mentales y organizadores gráficos.] Facilitan la codificación y recuperación de la información.


      
            .div(titulo="Inteligencia viso-espacial")
              p El uso de imágenes, colores y esquemas, facilita la comprensión y la memoria a largo plazo.
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Visual Thinking.] Uso de dibujos y esquemas para explicar y organizar ideas.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Recorridos virtuales y realidad aumentada.] Explorar entornos de forma inmersiva, activando el hipocampo para la creación de mapas cognitivos.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Creación de maquetas y modelos 3D.] Conecta la percepción visual con la manipulación motora.


        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
      

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Inteligencia corporal-kinestésica")
              p El movimiento y la cognición están intrínsecamente ligados.
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Pausas activas. Incorporar breves periodos de actividad física para recargar los recursos atencionales.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Role playing y dramatizaciones.] Representar eventos históricos o procesos científicos para hacer el conocimiento memorable.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Aprendizaje estacionario.] Diseñar estaciones de trabajo en el aula para fomentar el movimiento y el cambio de enfoque.


      
            .div(titulo="Inteligencia musical-rítmica")
              p La música puede modular el estado de ánimo y los niveles de alerta.
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Uso de música ambiental.] Crear un ambiente de calma que favorezca la concentración.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Creación de canciones y raps.] Ayuda a memorizar listas, fórmulas o fechas de manera lúdica.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Identificación de patrones rítmicos.] Usar el ritmo para enseñar conceptos matemáticos o estructuras lingüísticas.

      
            .div(titulo="Inteligencia interpersonal")
              p El aprendizaje colaborativo, activa las neuronas espejo y los circuitos de recompensa social.
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Aprendizaje cooperativo.] Estructurar tareas en grupos pequeños con roles definidos.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Tutoría entre iguales.] Los estudiantes se enseñan unos a otros, consolidando su propio conocimiento.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Círculos de diálogo.] Espacios seguros para discutir temas académicos o socioemocionales.


      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Inteligencia intrapersonal")
              p La metacognición y la autorregulación son claves para el aprendizaje autónomo.
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Diarios de aprendizaje y portafolios.] Reflexión escrita sobre lo aprendido.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Técnicas de #[i mindfulness.]] Mejoran la concentración y gestionan el estrés.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Establecimiento de metas SMART.] Definir objetivos de aprendizaje específicos y alcanzables.

            .div(titulo="Inteligencia naturalista")
              p El contacto con la naturaleza tiene un efecto restaurador sobre la atención y reduce el estrés.
              p #[b Herramientas:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Aprendizaje al aire libre.] Realizar clases en patios o parques.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Proyectos de clasificación y observación.] Recoger y analizar elementos naturales.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[b Creación de huertos escolares.] Integrar biología, planificación y trabajo en equipo.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0


      .bg-full-width.bg-color-3
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white La integración de herramientas neuro pedagógicas basadas en las inteligencias múltiples, transforma el proceso educativo, haciéndolo más dinámico y adaptado a las necesidades individuales de los estudiantes. Este enfoque fortalece la conexión con el conocimiento y promueve un desarrollo integral.
      
      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.image-out-bg
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 85%
    transform: translateY(-0%)
    background-color: #DFF4F8
    z-index: 0
  .col-lg-auto, .col-lg, .row
    z-index: 1


  @media screen and (max-width: bp-max-md)
    padding: 1rem

    &::after
      height: 100%
</style>
