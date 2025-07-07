<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Herramientas neuropedagógicas a través de la lúdica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p La neuroeducación propone un enfoque de enseñanza basado en el funcionamiento del cerebro, en el cual la experiencia consciente y la estimulación multisensorial son claves para consolidar el aprendizaje.

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h3.mb-4(data-aos="flip-up") Herramientas neuropedagógicas a través de la lúdica 
            p.mb-4(data-aos="fade-right") En el PDF Herramientas neuropedagógicas a través de la lúdica, se exploran las estrategias que integran el juego como recurso pedagógico, favoreciendo la creación de conexiones neuronales y la aplicación práctica del conocimiento. Este enfoque busca transformar la enseñanza en una experiencia significativa, donde docentes y estudiantes se convierten en protagonistas del proceso de aprendizaje.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas neuropedagógicas a través de la lúdica 
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Herramientas neuropedagógicas


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-3 Torres Bustamante (2020), sostiene que, las herramientas neuropedagógicas tienen, como objetivo, resolver conflictos, elevar el nivel de conciencia y mejorar el aprendizaje. 
          p.mb-0 Se dividen en dos categorías principales: #[b Herramientas de alineación] y #[b Herramientas de contención]. Cada una de ellas cumple una función específica en el desarrollo cognitivo y emocional, permitiendo que el conocimiento se transforme en experiencia significativa. 
    
        p(data-aos="fade-left").mb-4 A continuación, las describiremos:


    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Herramientas de alineación: orden y coherencia")
            p Las herramientas de alineación, ayudan a organizar los pensamientos, emociones y acciones de una persona, promoviendo una conexión equilibrada entre los distintos aspectos del ser humano. Al aplicar la alineación, se logra coherencia en la personalidad y un mejor manejo de la energía interna. 
            p #[b Aspectos que se alinean:]
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Mente.] Claridad en el pensamiento y toma de decisiones.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Cuerpo.] Bienestar físico y conexión con el aprendizaje.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Alma.] Desarrollo personal y emocional.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Emociones.] Regulación afectiva y expresión sana.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Energía.] Motivación y equilibrio interno.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Espíritu.] Propósito y sentido de identidad.

            p Cuando una persona está alineada, vibra con mayor energía y se siente más segura en su forma de pensar y actuar. Esto permite que el aprendizaje sea más efectivo y se mantenga a largo plazo.

    
          .div(titulo="Herramientas de contención: control y reflexión")
            p Las herramientas de contención permiten manejar reacciones impulsivas y aumentar el nivel de conciencia sobre las palabras y pensamientos, antes de expresarlos. Estas herramientas ayudan a modificar la manera en que las personas enfrentan los conflictos, promoviendo respuestas reflexivas, en lugar de reacciones automáticas. 

            p #[b Elementos claves de la contención:]

            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Educación de la mente.] Fomentar el pensamiento crítico y reflexivo.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Disciplina en el lenguaje.] Evitar palabras que causen daño y promover comunicación consciente.

              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[b Neuro plasticidad.] Modificar patrones de conducta para mejorar la forma en que se responde a los problemas.
    
            p Al aplicar estas herramientas, se fortalece la capacidad de control emocional y se promueve un entorno de aprendizaje más positivo, donde el conflicto se convierte en una oportunidad para el crecimiento personal y el desarrollo cognitivo.

    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
    
    

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Para Torres Bustamante (2020), un neuroeducador debe desarrollar la capacidad de contención para guiar a sus estudiantes en el proceso de aprendizaje, ayudándolos a regular sus emociones y pensamientos de manera efectiva. 


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left").mb-4 En resumidas cuentas, las herramientas neuropedagógicas proporcionan estrategias para mejorar el aprendizaje, la conciencia y la regulación emocional. A través de la alineación y la contención, se pueden organizar pensamientos, emociones y acciones, de manera más efectiva. Además, el uso del lenguaje consciente y la comprensión de la flecha del tiempo, fortalecen el proceso educativo, permitiendo una evolución constante en el conocimiento y el desarrollo personal.
    
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Ahora bien, teniendo claro las herramientas de la neuropedagogía y cómo se articula con la lúdica, desde el punto de vista de Pinzón Blanco, y Téllez Sánchez (2016), las herramientas neuropedagógicas a través de la lúdica representan un enfoque innovador en la educación, integrando conocimientos de neurociencia, pedagogía y psicología para optimizar los procesos de enseñanza y aprendizaje. Este enfoque reconoce que el cerebro aprende mejor en entornos estimulantes y significativos, donde el juego y la creatividad desempeñan un papel fundamental. Al incorporar elementos lúdicos en el aprendizaje, se fomenta la participación activa de los estudiantes, promoviendo el pensamiento crítico y la resolución de problemas, de una manera más natural y motivadora.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Importancia de la lúdica en la neuropedagogía

    .bg-full-width.bg-color-6.mb-0
      .p-4.p-md-5

        .row.justify-content-center.align-items-center.mb-5
          .col-lg
            p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.

            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Importancia de a lúdica en la neuropedagogía"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
      
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/6.svg", data-aos="zoom-in" style="max-width: 600px")

        h2 Principios de la neuropedagogía lúdica

        p Pinzón Blanco, y Téllez Sánchez (2016), sustentan que, para que la lúdica se integre eficazmente en los procesos de enseñanza y aprendizaje, es necesario tener en cuenta los siguientes principios fundamentales:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              h5 El cerebro como órgano social
              p La interacción social y el contexto cultural desempeñan un papel clave en el aprendizaje. La neuropedagogía reconoce que las experiencias de aprendizaje deben estar enriquecidas por la colaboración y la comunicación, fortaleciendo la conexión entre emociones, mente y cuerpo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h5 Importancia de las emociones
              p Las emociones influyen directamente en la atención, memoria y motivación de los estudiantes. Al incorporar actividades lúdicas en el aprendizaje, se generan emociones positivas que facilitan la retención del conocimiento y mejoran la disposición hacia el estudio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Aprendizaje basado en el juego
              p La lúdica promueve el desarrollo cognitivo y emocional, permitiendo que los estudiantes experimenten el aprendizaje de manera placentera y significativa. Juegos de roles, narrativas interactivas y actividades de exploración pueden ser estrategias efectivas para potenciar la creatividad y la participación activa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Neuroplasticidad y adaptación
              p El cerebro tiene la capacidad de reorganizarse y adaptarse a nuevas experiencias, lo que permite mejorar los métodos pedagógicos. Al integrar actividades lúdicas, se estimula la creación de nuevas conexiones neuronales, fortaleciendo el pensamiento flexible y la capacidad de resolución de problemas.
    
    .row.justify-content-center.align-items-center.bg-color-9.bordes.p-4.py-lg-0.px-lg-4.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
            p Asimismo, las herramientas neuropedagógicas basadas en la lúdica, pueden aplicarse en diferentes entornos educativos para potenciar la motivación y el compromiso de los estudiantes. Blanco, y Téllez Sánchez (2016), consideran que, su implementación no solo mejora la disposición hacia el aprendizaje, sino que también estimula habilidades cognitivas y emocionales, esenciales para el desarrollo integral. 
            p.mb-0 Al emplear #[b metodologías que involucran el juego y la creatividad], se facilita la construcción de conocimiento, promoviendo un aprendizaje dinámico, significativo y adaptable a las necesidades individuales de cada estudiante. 

          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:295px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    

    p Dentro de este enfoque, según estos autores, se pueden aplicar diversas estrategias que favorecen la participación activa y el aprendizaje autónomo:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Gamificación del aprendizaje")
            p Integrar dinámicas propias de los juegos en el currículo, permite hacer más atractivo el proceso educativo. Elementos como desafíos, recompensas y niveles de progresión, motivan a los estudiantes para alcanzar objetivos, fomentando la perseverancia y la resolución de problemas. Además, la gamificación refuerza la capacidad de toma de decisiones y promueve el desarrollo de la creatividad.
    
          .div(titulo="Estrategias multisensoriales")
            p La incorporación de materiales visuales, auditivos y táctiles, en el aprendizaje, facilita la comprensión de conceptos complejos. Al activar múltiples sentidos, se generan conexiones neuronales más sólidas, lo que mejora la retención de la información. Por ejemplo, el uso de imágenes, sonidos y experiencias táctiles, ayuda a los estudiantes a internalizar los conocimientos de manera más profunda y duradera.
          .div(titulo="Trabajo en equipo")
            p Los juegos cooperativos fortalecen la interacción social y el desarrollo de habilidades como la empatía y el respeto. Al trabajar en conjunto para alcanzar un objetivo común, los estudiantes aprenden a comunicarse de manera efectiva, a negociar soluciones y a reconocer la importancia del apoyo mutuo en la resolución de problemas. Esta estrategia resulta clave para mejorar la convivencia escolar y fomentar valores fundamentales en la educación.

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Blanco, y Téllez Sánchez, (2016), defienden que, el uso de herramientas neuropedagógicas basadas en el juego y la creatividad, no solo optimiza el aprendizaje, sino que también impacta positivamente en la salud emocional de los estudiantes. La reducción del estrés y la ansiedad en el aula, contribuye a mejorar la confianza en sus propias habilidades, permitiéndoles asumir nuevos retos con mayor seguridad. Asimismo, la combinación de la neuropedagogía con la lúdica, favorece la neuroplasticidad, facilitando la adaptación a diferentes entornos y el desarrollo de estrategias de pensamiento flexible. 
    
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la integración de herramientas neuropedagógicas basadas en la lúdica, transforma el proceso educativo al hacerlo más dinámico, estimulante y accesible para los estudiantes. Este enfoque permite fortalecer la conexión con el conocimiento, promoviendo no solo un aprendizaje efectivo, sino también el desarrollo personal y social de los alumnos. 
    
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/225302?page=12" target="_blank" rel="noopener noreferrer") Martínez, Ó. (2022). La emoción de jugar: neuroeducación en acción: (1 ed.). Editorial INDE. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=9drNNDkkHho" target="_blank" rel="noopener noreferrer") Diego Neurociencias. (2022, 13 de abril). ¿Qué es la Neuroeducación? [Vídeo]. YouTube.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
