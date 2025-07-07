<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Neuroclase'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p La transformación del rol docente y del entorno educativo ha cobrado relevancia en un mundo en constante cambio, donde la neurociencia aporta claves fundamentales para mejorar los procesos de enseñanza-aprendizaje.


      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/1.png', alt='')
      
            .col-lg-7
              h3.mb-4(data-aos="flip-up") Neuroclase
              p.mb-4(data-aos="fade-right") En el PDF Neuroclase, se examina cómo la neurodidáctica, las estrategias basadas en el funcionamiento cerebral y la neuroarquitectura pueden enriquecer la práctica docente, fortalecer la experiencia estudiantil y optimizar los ambientes escolares. Esta mirada integral permite comprender la importancia de conectar la enseñanza con el desarrollo cognitivo, emocional y sensorial del estudiante, proponiendo un modelo educativo más humano, consciente y efectivo.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Neuroclase
      

      p Algunos consejos de León (2023), para mejorar la experiencia de aprendizaje, a través de la neurociencia, incluyen:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-1.png")
              .col-lg-7.order-lg-1
                h4 Fomentar un ambiente positivo en el aula
                p El entorno de aprendizaje influye directamente en la motivación y el rendimiento de los estudiantes. Un aula con una atmósfera positiva, donde se promueve la confianza y el respeto, facilita la liberación de neurotransmisores como la dopamina, que refuerzan la motivación y el interés por aprender.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-2.png")
              .col-lg-7.order-lg-1
                h4 Estimular emociones durante la enseñanza
                p Las emociones juegan un papel clave en la consolidación de la memoria. La neurociencia sugiere que el aprendizaje es más efectivo cuando se asocia con experiencias emocionales positivas. Estrategias como el uso de historias, juegos y desafíos pueden captar la atención y mejorar la retención de información.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-3.png")
              .col-lg-7.order-lg-1
                h4 Evitar la memorización mecánica y favorecer el aprendizaje experiencial
                p El aprendizaje basado en la repetición sin contexto tiende a ser menos efectivo. En cambio, la neurociencia recomienda el uso de aprendizaje multisensorial, donde los estudiantes interactúan con el contenido a través de la vista, el oído y el tacto. Esto fortalece las conexiones neuronales y mejora la comprensión.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-4.png")
              .col-lg-7.order-lg-1
                h4 Optimizar el tiempo de atención
                p Los estudios han demostrado que la capacidad de atención de un estudiante es limitada y varía, según la edad y el nivel de interés. Para maximizar la concentración, se recomienda:
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Dividir las clases en segmentos cortos con pausas activas.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Usar técnicas como el aprendizaje espaciado, que distribuye la información en intervalos de tiempo.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Incorporar elementos visuales y dinámicos para mantener el interés.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-5.png")
              .col-lg-7.order-lg-1
                h4 Promover el trabajo colaborativo
                p El aprendizaje social es fundamental para el desarrollo cognitivo. La interacción en grupos pequeños fomenta la empatía, el pensamiento crítico y la resolución de problemas. Métodos como el aprendizaje basado en proyectos, el aula invertida y el uso de tecnología interactiva, han demostrado ser efectivos para mejorar la participación y el rendimiento académico.
      
  
      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Ejemplo de clase basada en neurociencia

      p Basándonos en todo lo estudiado y en Pardo (2025), a continuación, se presenta un ejemplo de una neuroclase.

      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Inicio")
              p #[b Activación y motivación]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se inicia con una #[b pregunta intrigante] o un #[b desafío] para captar la atención.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se usa #[b música estimulante] o una breve actividad física para activar el cerebro.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se plantea un #[b objetivo claro], conectando el contenido con experiencias personales.

              
            div(numero="2" titulo="Desarrollo")
              p Aprendizaje multisensorial
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se presentan conceptos con #[b imágenes, videos y ejemplos prácticos].

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se fomenta la #[b participación activa], con debates o juegos que generen emoción.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se utilizan #[b historias] o situaciones reales para conectar el contenido con la vida cotidiana.

            div(numero="3" titulo="Cierre")
              p #[b Trabajo colaborativo]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se organizan #[b grupos pequeños] para resolver problemas o crear proyectos.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se usa el aprendizaje basado en proyectos, donde los estudiantes aplican lo aprendido en situaciones reales.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se incorporan #[b pizarras digitales, gráficos interactivos y simulaciones] para reforzar conceptos.
          
            div(numero="4" titulo="Cierre")
              p #[b Reflexión y retroalimentación]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se realiza una #[b autoevaluación] donde los estudiantes expresan lo que aprendieron.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se ofrece #[b retroalimentación inmediata], destacando logros y áreas de mejora.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se finaliza con una #[b actividad lúdica] que refuerce el aprendizaje de manera divertida.

      
      .bg-full-width.bg-color-3
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Este enfoque aprovecha la #[b neuroplasticidad, la motivación emocional y la atención limitada], para mejorar la experiencia educativa.
      

          
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://www.rperspectivasinvestigativas.org/index.php/multidiscipinaria/article/download/282/835" target="_blank" rel="noopener noreferrer") Palma-Menéndez, S. P., Rizzo-Andrade, M. O., Vera-Rivera, M. A., & Palacios-Alonzo, S. M. (2025). Estrategias en neuroeducación y aprendizaje basado en la emoción para la motivación en el aula [Strategies in neuroeducation and emotion-based learning for motivation in the classroom]. Revista Multidisciplinaria Perspectivas Investigativas, 5(1), 18-24. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=QUjtcFoTtpU" target="_blank" rel="noopener noreferrer") Teran, Tair. (2023, 26 de octubre). Las ventajas de la neuroeducación en el aula [Vídeo]. YouTube.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones describe mejor la neuroplasticidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La capacidad del cerebro para almacenar recuerdos de forma permanente.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La habilidad del cerebro para adaptarse y cambiar mediante nuevas conexiones neuronales.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La función del cerebro de procesar información sensorial sin cambios estructurales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La tendencia del cerebro a perder habilidades con el tiempo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La neuroplasticidad es la capacidad del cerebro para adaptarse y cambiar mediante nuevas conexiones neuronales.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es la opción B.',
          },
          {
            id: 2,
            texto:
              '¿Qué teoría sostiene que cada persona aprende de manera diferente según sus habilidades cognitivas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Teoría del aprendizaje conductista.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Teoría de la neuroplasticidad.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Teoría de las inteligencias múltiples.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Teoría de la memoria sensorial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La teoría de las inteligencias múltiples sostiene que cada persona aprende de manera diferente.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es la opción C.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el papel de la corteza prefrontal en el aprendizaje?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Procesar estímulos visuales y auditivos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Regular emociones y funciones ejecutivas como la planificación y toma de decisiones.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Controlar los movimientos involuntarios del cuerpo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Almacenar recuerdos a largo plazo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La corteza prefrontal regula emociones y funciones ejecutivas.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es la opción B.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes estrategias se basa en la neuropedagogía para mejorar el aprendizaje?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Memorización repetitiva sin contexto.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Uso de estímulos emocionales y multisensoriales en la enseñanza.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminación de actividades lúdicas en el aula.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aplicación de exámenes sin interacción social.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La neuropedagogía promueve el uso de estímulos emocionales y multisensoriales.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es la opción B.',
          },
          {
            id: 5,
            texto:
              '¿Qué concepto neuro pedagógico enfatiza la importancia del juego en el aprendizaje?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Neuroplasticidad.', esCorrecta: false },
              { id: 'b', texto: 'Lúdica.', esCorrecta: true },
              { id: 'c', texto: 'Sinapsis.', esCorrecta: false },
              { id: 'd', texto: 'Atención selectiva.', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El concepto lúdica enfatiza la importancia del juego en el aprendizaje.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es la opción B.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
