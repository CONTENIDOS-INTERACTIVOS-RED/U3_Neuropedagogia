<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Cerebro y rol en la educación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p El conocimiento del cerebro y su funcionamiento resulta esencial para comprender los procesos de aprendizaje y aplicar estrategias pedagógicas efectivas.
  
      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/1.png', alt='')
      
            .col-lg-7
              h3.mb-4(data-aos="flip-up") Cerebro y rol en la educación 
              p.mb-4(data-aos="fade-right") En el PDF Cerebro y rol en la educación, se exploran los fundamentos neurobiológicos que intervienen en el desarrollo cognitivo y emocional, destacando aspectos como la plasticidad cerebral, la neurogénesis y el impacto de las emociones en la consolidación del conocimiento. Esta perspectiva permite diseñar ambientes educativos enriquecidos que favorezcan la motivación, la atención y la memoria, pilares fundamentales para una educación adaptada a las necesidades reales del estudiante.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Cerebro y rol en la educación 
      

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Procesos cerebrales claves en el aprendizaje


      p Bullón Gallego (2017), explica que, como lo hemos venido estudiando, el aprendizaje es un proceso complejo que involucra múltiples áreas del cerebro, cada una con funciones específicas. A continuación, se presentan los principales procesos cerebrales implicados en la adquisición de conocimientos, según este autor:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-1.png")
              .col-lg-7.order-lg-1
                h4 Plasticidad cerebral 
                p La plasticidad cerebral es la capacidad del cerebro para adaptarse y reorganizarse en función de nuevas experiencias y aprendizajes. Este fenómeno permite que las neuronas formen nuevas conexiones y refuercen las existentes, facilitando el almacenamiento de información en la memoria a largo plazo. 
                p Cuando los estudiantes están expuestos a nuevos conocimientos, su cerebro genera redes neuronales más fuertes y eficientes. La plasticidad es mayor en la infancia, pero se mantiene activa a lo largo de la vida. Las estrategias de enseñanza que fomentan la exploración, la creatividad y la resolución de problemas son fundamentales para estimular la plasticidad cerebral.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-2.png")
              .col-lg-7.order-lg-1
                h4 Memoria y consolidación del aprendizaje
                p El aprendizaje es un proceso que depende en gran medida, de la capacidad del cerebro para retener información, la cual se almacena en la memoria y se consolida mediante diversas estrategias cognitivas. Según Vásquez Muñoz et al. (2023), la memoria no es un sistema uniforme, sino que se divide en varios tipos, cada uno con funciones específicas en la retención y el procesamiento de datos.
      
      
      p Los tipos de memoria son:

      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      
        .col-lg-8
      
              LineaTiempoD.color-primario.large(data-aos="fade-right")
                div(numero="1" titulo="Memoria sensorial")
                  p Es la forma más inmediata de almacenamiento de información. Retiene estímulos externos por fracciones de segundos antes de que sean procesados por otros sistemas de memoria. Este tipo de memoria es clave para la percepción y la rápida evaluación del entorno. Por ejemplo, cuando se ve una imagen fugaz o se escucha una palabra en una conversación, el cerebro la almacena brevemente para decidir si es relevante. Existen diferentes tipos de memoria sensorial; entre ellas, tenemos:
                  ul.lista-ul--color.color-dark.mb-4
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | #[b Memoria icónica.] Relacionada con la información visual.
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | #[b Memoria ecoica.] Retiene estímulos auditivos por períodos breves.
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | #[b Memoria háptica.] Relacionada con el tacto y las sensaciones físicas.
                div(numero="2" titulo="Memoria a corto plazo")
                  p Es el sistema de almacenamiento temporal donde la información se mantiene activa durante períodos breves, generalmente entre 15 y 30 segundos. Vásquez Muñoz et al. (2023), considera una especie de “espacio de trabajo mental”, debido a que permite procesar datos antes de transferirlos a la memoria a largo plazo o descartarlos. Este tipo de memoria es fundamental en tareas como el cálculo mental, la lectura y la comprensión de instrucciones. La capacidad de la memoria a corto plazo es limitada, y suele estar influenciada por la atención y la carga cognitiva del individuo.
                div(numero="3" titulo="Memoria a largo plazo")
                  p Es el sistema de almacenamiento más duradero, responsable de conservar conocimientos, experiencias y habilidades por períodos prolongados, desde horas hasta toda la vida.  Según Vásquez Muñoz et al. (2023), se subdivide en:
                  ul.lista-ul--color.color-dark.mb-4
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | #[b Memoria declarativa.] Relacionada con hechos y eventos específicos que una persona puede recordar conscientemente. Se divide en memoria episódica (experiencias personales) y memoria semántica (conocimiento general, como el significado de palabras o conceptos).
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | #[b Memoria procedimental.] Se encarga de retener habilidades motoras y hábitos, como montar bicicleta o tocar un instrumento musical, sin necesidad de un esfuerzo consciente para recordarlas.
          

      h2 Factores que influyen en la consolidación de la memoria

      p Para Vásquez Muñoz et al. (2023), la consolidación de la memoria ocurre cuando la información se refuerza mediante la repetición significativa y el procesamiento activo. Sin embargo, diversos factores pueden influir en la eficacia con la que se almacena y recupera la información:

      .bg-full-width.bg-color-info.mb-4
        .px-4.px-md-5.pb-0.pt-4.pt-md-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/info1.svg', alt='', style="max-width: 868px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="17%" y="38%" numero="+")
                  h5 Sueño
                  p Durante el descanso, el cerebro reorganiza y refuerza las conexiones neuronales, consolidando los aprendizajes adquiridos durante el día. La falta de sueño afecta negativamente la memoria y la capacidad de concentración. 
      
                .bg-color-white.box-shadow.p-3(x="34%" y="20%" numero="+")
                  h5 Alimentación
                  p Nutrientes como los ácidos grasos omega-3, antioxidantes y vitaminas, contribuyen a la salud cerebral y mejoran la función de la memoria.

                .bg-color-white.box-shadow.p-3(x="67%" y="20%" numero="+")
                  h5 Emoción y motivación
                  p Las experiencias con una carga emocional intensa, tienden a consolidarse más fácilmente en la memoria a largo plazo. Esto se debe a la activación del sistema límbico, particularmente de la amígdala, que refuerza la retención de recuerdos significativos.
        
                .bg-color-white.box-shadow.p-3(x="83.5%" y="37.5%" numero="+")
                  h5 Práctica y repetición
                  p La información que se revisa y se utiliza de manera frecuente tiene mayores probabilidades de ser retenida a largo plazo. Técnicas como el repaso activo y la asociación de conceptos mejoran la consolidación de conocimientos.
      
      .bg-full-width.bg-color-13
        .p-4.p-md-5
          h2 Atención y concentración 

          p Por otra parte, Bullón Gallego (2017), dice que la atención es un proceso fundamental para el aprendizaje, puesto que permite al cerebro filtrar estímulos y enfocarse en la información relevante y que existen diferentes tipos de atención:

          div.row.justify-content-center.align-items-stretch
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/3.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-3.text-center Atención selectiva
                p.mb-0.text-center Permite concentrarse en un estímulo específico mientras se ignoran otros.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-3.text-center Atención sostenida
                p.mb-0.text-center Mantiene el enfoque en una tarea durante períodos prolongados.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-3.text-center Atención dividida
                p.mb-0.text-center Facilita la realización de múltiples tareas simultáneamente.


      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          p.mb-0.text-white Para mejorar la atención en el aula, es recomendable utilizar técnicas como la enseñanza multisensorial, la gamificación y las estrategias de descanso activo.


      h2 Emoción y motivación en el aprendizaje 

      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-3(data-aos="fade-up") Vásquez Muñoz et al. (2023), propone que las emociones desempeñan un papel crucial en la adquisición de conocimientos. Cuando un estudiante experimenta emociones positivas, su cerebro libera neurotransmisores como la dopamina y la serotonina, lo que mejora la retención de información. Por el contrario, el estrés y la ansiedad pueden activar el sistema de respuesta al peligro, dificultando el proceso de aprendizaje. 
              p.mb-0 Para potenciar la motivación de los estudiantes, es recomendable utilizar estrategias como la enseñanza basada en el juego, el refuerzo positivo y la construcción de un ambiente emocionalmente seguro. 
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/6.png', alt='')


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
        .col-lg-8

          h2 Contexto y ambiente de aprendizaje 
          p(data-aos="fade-left").mb-4 El entorno en el que se desarrolla el aprendizaje, influye directamente en la capacidad del cerebro para procesar información. Para Vásquez Muñoz et al. (2023), un ambiente hostil o lleno de distracciones puede activar mecanismos de defensa que inhiben la memoria y la concentración. La neurociencia sugiere que los ambientes de aprendizaje deben estar diseñados para reducir el estrés, proporcionar estimulación adecuada y fomentar la interacción social. 
      
          .bg-color-9.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 #[b El estudio del cerebro en la educación,] ha revolucionado la manera en que se diseñan los procesos de enseñanza. Comprender cómo aprende el cerebro permite a los docentes adaptar sus métodos para mejorar la retención de conocimientos y la motivación de los estudiantes. #[b La neuroeducación] se posiciona como un campo clave para el desarrollo de prácticas pedagógicas innovadoras y eficaces.
      
      


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/129665?page=1" target="_blank" rel="noopener noreferrer") Tillería Pérez, G. D. (2019). El área de educación artística y la discapacidad intelectual: de la teoría de las inteligencias múltiples a la neuroeducación: ( ed.). Homo Sapiens Ediciones. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=pubyGq-zXfE" target="_blank" rel="noopener noreferrer") Diego Neurociencias. (2021, 13 de septiembre). Neuromitos en educación, versión extensa [Vídeo]. YouTube. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
