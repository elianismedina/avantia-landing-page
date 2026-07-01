---
_schema: default
title: Inicio
description: >-
  Domina las licitaciones públicas y vende al Estado de forma exitosa. Cursos de contratación pública prácticos con expertos activos.
schemaData:
  - "@context": "https://schema.org"
    "@type": "EducationalOrganization"
    "name": "Avantia Academia"
    "description": "Aprende a venderle al Estado. Cursos prácticos y consultoría en contratación pública y licitaciones estatales en Hispanoamérica."
    "url": "https://avantia.edu.co"
    "logo": "https://avantia.edu.co/favicon.svg"
    "address":
      "@type": "PostalAddress"
      "addressCountry": "CO"
pageSections:
  - _component: page-sections/heroes/hero-split
    eyebrow: Academia de Contratación Estatal
    heading: Domina las licitaciones públicas y haz crecer tu negocio
    subtext: >-
      Capacitación 100% práctica para venderle al cliente más grande de tu país: el Estado.
      Aprende a identificar oportunidades reales, estructurar ofertas ganadoras y evitar errores costosos.
    imageSource: /src/assets/images/component-docs/secop2image.png
    imageAlt: Licitaciones exitosas con Avantia
    imageAspectRatio: square
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Ver Programas
        hideText: false
        link: '/personas/'
        iconName: ''
        iconPosition: before
        variant: primary
        size: lg
      - _component: building-blocks/core-elements/button
        text: Asesoría Gratuita
        hideText: false
        link: '#contacto'
        iconName: ''
        iconPosition: before
        variant: secondary
        size: lg
    reverse: false
    colorScheme: inherit
    backgroundColor: base
    paddingVertical: 4xl
  - _component: page-sections/features/feature-grid
    eyebrow: Nuestra Metodología
    heading: ¿Por qué capacitarte con Avantia?
    subtext: Diseñamos nuestros programas pensando en los retos reales de las pymes y profesionales al licitar.
    gap: xl
    minItemWidth: 280
    maxItemWidth: 360
    features:
      - title: Enfoque 100% Práctico
        description: >-
          Aprende con casos y pliegos reales. Te enseñamos a usar los portales oficiales de compras del Estado desde el primer día.
        iconName: book-open
        iconColor: blue
      - title: Consultores en Activo
        description: >-
          Tus profesores no son teóricos; son expertos que cada semana preparan y ganan licitaciones públicas para diversas industrias.
        iconName: academic-cap
        iconColor: yellow
      - title: Plantillas Descargables
        description: >-
          Accede a modelos de ofertas, cartas de presentación y listas de chequeo listas para usar en tus propias postulaciones.
        iconName: document-duplicate
        iconColor: green
      - title: Soporte y Comunidad
        description: >-
          Resuelve tus dudas puntuales sobre los pliegos que estés trabajando a través de nuestro foro exclusivo de estudiantes.
        iconName: chat-bubble-left-right
        iconColor: purple
    colorScheme: inherit
    backgroundColor: surface
    alignmentHorizontal: center
  - _component: page-sections/features/feature-split
    eyebrow: Programa Insignia
    heading: Curso Experto en Contratación Pública y Licitaciones
    subtext: >-
      El programa más completo diseñado para empresarios, directores comerciales y consultores. 
      Descubre cómo funciona el sistema de compras estatales de principio a fin, cómo analizar pliegos de condiciones y cómo construir una oferta técnica y económica imbatible sin necesidad de ser abogado.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Ver Programas
        hideText: false
        link: '/personas/'
        iconName: ''
        iconPosition: before
        variant: primary
        size: md
    imageSource: /src/assets/images/component-docs/ProgramaInsigniaImage.png
    imageAlt: Curso de Licitaciones de Avantia
    imageAspectRatio: video
    imageRounded: true
    reverse: true
    colorScheme: inherit
    backgroundColor: base
    paddingVertical: lg
  - _component: page-sections/people/testimonial-section
    text: >-
      "Gracias a la metodología paso a paso de Avantia, logramos adjudicarnos nuestro primer contrato de servicios de tecnología con el Ministerio de Educación. La inversión en el curso se pagó sola con la primera oferta ganada."
    authorName: Carlos Mendoza
    authorDescription: Gerente General, TecnoSoluciones
    authorImage: /src/assets/images/component-docs/profile.jpg
    alignmentHorizontal: center
    maxContentWidth: xl
    paddingHorizontal: xl
    paddingVertical: 2xl
    colorScheme: dark
    backgroundColor: surface
  - _component: page-sections/info-blocks/faq-section
    heading: Preguntas Frecuentes
    headingLevel: h2
    headingSize: lg
    singleOpen: true
    openFirst: false
    items:
      - title: ¿Necesito ser abogado para tomar los cursos?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              No. Nuestros programas están explicados en un lenguaje empresarial directo, accesible y alejado de tecnicismos legales innecesarios. Está pensado para dueños de negocio y equipos de ventas.
            size: md
      - title: ¿Las clases son grabadas o en vivo?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              Combinamos lo mejor de ambos mundos: lecciones grabadas en alta definición para que estudies a tu propio ritmo, junto con sesiones semanales de tutoría en vivo para resolver tus dudas.
            size: md
      - title: ¿El curso sirve para licitar en cualquier sector?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              Sí. Los fundamentos de análisis de pliegos, estratégicas de participación son aplicables tanto a la venta de bienes, obras físicas como servicios profesionales.
            size: md
      - title: ¿Entregan certificado al terminar?
        contentSections:
          - _component: building-blocks/core-elements/text
            text: >-
              Sí, emitimos un certificado digital de participación y aprobación que avala las horas académicas y los conocimientos adquiridos para tu currículum o perfil empresarial.
            size: md
    maxContentWidth: xl
    paddingHorizontal: xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: none
  - _component: page-sections/ctas/cta-form
    id: contacto
    heading: Da el primer paso para venderle al Estado
    subtext: >-
      ¿Quieres saber cuál de nuestros programas se adapta mejor a tu tipo de negocio? Déjanos tus datos y un asesor se pondrá en contacto contigo.
    formAction: /api/contact
    formBlocks:
      - _component: building-blocks/forms/input
        label: Nombre Completo
        name: nombre
        type: text
        required: true
      - _component: building-blocks/forms/input
        label: Correo Electrónico
        name: email
        type: email
        required: true
      - _component: building-blocks/forms/input
        label: Teléfono de Contacto
        name: telefono
        type: tel
        required: true
      - _component: building-blocks/forms/input
        label: Nombre de la Empresa
        name: empresa
        type: text
        required: true
      - _component: building-blocks/forms/select
        label: Sector Económico
        name: sector
        placeholder: Selecciona tu sector
        required: true
        options:
          - label: Comercio
            value: comercio
          - label: Finanzas y seguros
            value: finanzas_seguros
          - label: Transporte y turismo
            value: transporte_turismo
          - label: Agricultura y Agroindustria
            value: agricultura_agroindustria
          - label: Minería y Energía
            value: mineria_energia
          - label: Industria manufacturera
            value: industria_manufacturera
          - label: Construcción
            value: construccion
          - label: Otro
            value: otro
      - _component: building-blocks/forms/input
        label: ¿Cuál es tu sector económico?
        name: sector_otro
        type: text
        required: false
      - _component: building-blocks/forms/select
        label: Personas a Capacitar
        name: personas_capacitar
        placeholder: ¿Cuántas personas deseas capacitar?
        required: true
        options:
          - label: 1 persona (Solo yo)
            value: '1'
          - label: 2 a 5 personas
            value: 2-5
          - label: 6 a 10 personas
            value: 6-10
          - label: Más de 10 personas
            value: 10+
      - _component: building-blocks/forms/textarea
        label: Expectativas del curso
        name: expectativas
        placeholder: ¿Qué esperas aprender o lograr con esta capacitación?
        required: true
      - _component: building-blocks/forms/submit
        text: Solicitar Información
        variant: primary
        size: md
        iconPosition: before
        hideText: false
        disabled: false
    imageSource: /src/assets/images/component-docs/ContactanosImage.png
    imageAlt: Contáctanos en Avantia
    reverse: false
    colorScheme: dark
    backgroundColor: surface
    paddingVertical: 4xl
---
