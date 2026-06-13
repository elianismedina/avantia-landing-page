---
_schema: default
title: Cursos
description: Conoce nuestros cursos y programas de capacitación en contratación y licitaciones públicas.
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow: Formación Profesional
    heading: Programas y Cursos de Contratación Estatal
    subtext: >-
      Capacitación práctica orientada a resultados. Selecciona uno de nuestros cursos a continuación para ver su plan de estudio detallado.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Ver Plan de Estudio
        hideText: false
        link: '#plan-estudio'
        iconName: ''
        iconPosition: before
        variant: primary
        size: md
      - _component: building-blocks/core-elements/button
        text: Solicitar Asesoría
        hideText: false
        link: '#contacto'
        iconName: ''
        iconPosition: before
        variant: secondary
        size: md
    colorScheme: inherit
    backgroundColor: base
    paddingVertical: xl
  - _component: page-sections/builders/custom-section
    id: plan-estudio
    label: ''
    contentSections:
      - _component: building-blocks/core-elements/spacer
        size: md
      - _component: building-blocks/core-elements/heading
        text: Planes de Estudio por Curso
        level: h2
        size: default
        alignmentHorizontal: center
        iconName:
        iconPosition: before
      - _component: building-blocks/core-elements/text
        text: >-
          Selecciona un curso a la izquierda para desplegar el contenido y módulos temáticos de cada programa.
        alignmentHorizontal: center
        size: md
      - _component: building-blocks/wrappers/content-selector
        navigationPosition: start
        items:
          - title: Programa Experto en Licitaciones
            subtext: Formación integral de 40 horas
            iconName: academic-cap
            iconColor: blue
            contentSections:
              - _component: page-sections/info-blocks/faq-section
                heading: Temario - Programa Experto
                headingLevel: h3
                headingSize: sm
                singleOpen: true
                openFirst: true
                items:
                  - title: Módulo 1 - Fundamentos e Inscripción (RUP)
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Introducción al ecosistema de contratación estatal. Requisitos para contratar, tipos de contratación y estructuración correcta del Registro Único de Proponentes (RUP).
                        size: md
                  - title: Módulo 2 - Búsqueda de Procesos y Alertas
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Mapeo de necesidades del Estado mediante códigos de clasificación estándar (UNSPSC). Configuración de alertas automáticas y escaneo preventivo de pliegos.
                        size: md
                  - title: Módulo 3 - Preparación de la Oferta Técnica y Económica
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Estructuración paso a paso de los documentos habilitantes. Elaboración de la propuesta económica sin cometer errores de ponderación, cálculo o vigencia de pólizas.
                        size: md
                  - title: Módulo 4 - Cierre, Subsanaciones y Defensa
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Carga correcta de la oferta en el portal, dinámica de la audiencia de cierre, cómo responder y subsanar requerimientos, y estrategias para impugnar ofertas de competidores.
                        size: md
          - title: Taller Práctico de Portales
            subtext: Carga de ofertas y simulaciones
            iconName: computer-desktop
            iconColor: yellow
            contentSections:
              - _component: page-sections/info-blocks/faq-section
                heading: Temario - Taller de Portales
                headingLevel: h3
                headingSize: sm
                singleOpen: true
                openFirst: true
                items:
                  - title: Módulo 1 - Configuración y Registro
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Creación de usuario, configuración de la firma digital, configuración del perfil de la empresa y seguridad del portal.
                        size: md
                  - title: Módulo 2 - Simulación y Carga de Ofertas
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Carga práctica de la documentación requerida, simulación de cierre digital a contra reloj y envío oficial de subsanaciones.
                        size: md
          - title: Seminario de Pliegos e Indicadores
            subtext: Análisis y viabilidad de procesos
            iconName: calculator
            iconColor: green
            contentSections:
              - _component: page-sections/info-blocks/faq-section
                heading: Temario - Seminario de Pliegos
                headingLevel: h3
                headingSize: sm
                singleOpen: true
                openFirst: true
                items:
                  - title: Módulo 1 - Análisis Financiero
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Cálculo práctico de liquidez, endeudamiento, y cobertura de intereses a partir de los estados financieros presentados en el balance general.
                        size: md
                  - title: Módulo 2 - Identificación de Requisitos Excluyentes
                    contentSections:
                      - _component: building-blocks/core-elements/text
                        text: Cómo detectar cláusulas restrictivas o dirigidas, limitantes de experiencia injustificadas y redacción y radicación formal de observaciones a pliegos.
                        size: md
    maxContentWidth: xl
    paddingHorizontal: lg
    paddingVertical: 2xl
    colorScheme: inherit
    backgroundColor: surface
    rounded: false
  - _component: page-sections/ctas/cta-form
    heading: Obtén el pensum completo en PDF
    subtext: >-
      ¿Quieres compartir esta información con tu equipo o necesitas un temario personalizado para tu empresa? Déjanos tus datos y te lo enviaremos de inmediato.
    formAction: ./
    formBlocks:
      - _component: building-blocks/forms/input
        label: Nombre Completo
        name: nombre
        type: text
        required: true
      - _component: building-blocks/forms/input
        label: Correo Corporativo
        name: email
        type: email
        required: true
      - _component: building-blocks/forms/textarea
        label: ¿Qué programa o módulo te interesa más?
        name: mensaje
        required: true
      - _component: building-blocks/forms/submit
        text: Solicitar Pensum
        variant: primary
        size: md
        iconPosition: before
        hideText: false
        disabled: false
    imageSource: /src/assets/images/component-docs/castle.jpg
    imageAlt: Solicitar Información
    reverse: false
    colorScheme: dark
    backgroundColor: surface
    paddingVertical: 4xl
---
