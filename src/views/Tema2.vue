<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evolución de los negocios electrónicos

    .tarjeta--bg-img.color-primario-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema2/img_1.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
            p.mb-0 La evolución de los negocios electrónicos ha estado estrechamente relacionada con los avances tecnológicos y la adopción progresiva de internet por parte de la sociedad. En sus etapas iniciales, las empresas utilizaban la web como un medio informativo, limitándose a presentar datos corporativos y catálogos básicos. Posteriormente, incorporaron funciones transaccionales que permitieron la venta directa de productos y servicios.

    .bg_img_6.mb-3
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos='zoom-in-right') En la actualidad, los negocios electrónicos integran tecnologías avanzadas como la analítica de datos, la inteligencia artificial, el comercio móvil y la automatización de procesos. Estas tecnologías permiten anticipar necesidades del cliente, optimizar procesos internos y desarrollar estrategias comerciales basadas en información en tiempo real.
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema2/img_2.svg', class="img-fluid")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 Este proceso evolutivo ha transformado la estructura organizacional de las empresas, promoviendo modelos más flexibles, orientados al cliente y basados en la innovación continua. La evolución de los negocios electrónicos no solo ha impactado la forma de vender, sino también la manera de producir, distribuir y comunicarse con el mercado.
          .tarjeta.color-primario-v.p-3.rounded-3.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_3.png', class="img-fluid p-3")
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Empresas como Netflix pasaron de un modelo físico de alquiler de DVDs a un modelo digital basado en streaming, demostrando cómo la evolución tecnológica redefine completamente los modelos de negocio.
        .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_4.png', class="img-fluid") 

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-primario
            h5 Figura 3.
            |    Evolución en los negocios electrónicos
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema2/img_6.svg', class="img-fluid d-none d-lg-block").mb-5
            img(src='@/assets/curso/tema2/img_7.svg', class="img-fluid d-block d-lg-none").mb-5
            figcaption Nota. Sena, (2026).

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-primario-o.rounded-3.overflow-hidden
          .row.align-items-center.mb-0
            .col-auto.d-flex.align-items-center.ps-4.py-3
              figure.m-0
                img(src="@/assets/curso/tema2/img_8.svg" style="width: 100px; height: auto;")
            .col.py-4.pe-4
              p.fw-bold.text-white.mb-3 Acceder a los siguientes enlaces para ampliar sus conocimientos sobre comercio electrónico, sus modelos, aplicaciones y el contexto colombiano en el desarrollo de los negocios digitales:
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://colombiatic.mintic.gov.co/679/articles-197363_recurso_1.pdf" target="_blank")
                span Libro blanco del comercio electrónico Colombia
                i.fas.fa-link.ms-2
              br
              a.boton.color-acento-botones.d-inline-flex.mt-2(href="https://repository.ucc.edu.co/server/api/core/bitstreams/693b8bdc-9024-429c-8182-37a4416d2c47/content" target="_blank")
                span El comercio electrónico: concepto, características e importancia en las organizaciones
                i.fas.fa-link.ms-2
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
