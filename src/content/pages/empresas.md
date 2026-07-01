---
_schema: default
title: Soluciones para Empresas
description: >-
  Capacitación corporativa in-company, consultoría estratégica y analítica de
  datos en licitaciones y contratación estatal.
schemaData:
  - '@context': https://schema.org
    '@type': Service
    name: Capacitación Licitaciones In-Company
    description: >-
      Formación personalizada a la medida para equipos comerciales, jurídicos y
      técnicos en contratación y SECOP II.
    provider:
      '@type': Organization
      name: Avantia Academia
      url: https://avantia.edu.co
    serviceType: Professional Training
  - '@context': https://schema.org
    '@type': Service
    name: Consultoría y Diagnóstico de Licitaciones
    description: >-
      Auditoría de ofertas rechazadas e inteligencia de datos predictivos de
      licitaciones públicas.
    provider:
      '@type': Organization
      name: Avantia Academia
      url: https://avantia.edu.co
    serviceType: Business Consulting
pageSections:
  - discriminant: page-sections/heroes/hero-center
    value:
      _component: page-sections/heroes/hero-center
      eyebrow: Soluciones Corporativas
      heading: Eleva la Tasa de Éxito de tu Empresa en Licitaciones Públicas
      subtext: >-
        Capacitamos a tu equipo comercial, jurídico y técnico con programas
        prácticos personalizados y herramientas de IA aplicadas a la
        contratación estatal colombiana.
      buttonSections:
        - _component: building-blocks/core-elements/button
          text: Ver Soluciones
          hideText: false
          link: '#soluciones'
          iconName: ''
          iconPosition: before
          variant: primary
          size: md
        - _component: building-blocks/core-elements/button
          text: Cotizar Capacitación
          hideText: false
          link: '#contacto'
          iconName: ''
          iconPosition: before
          variant: secondary
          size: md
      colorScheme: inherit
      backgroundColor: base
      paddingVertical: xl
  - discriminant: page-sections/builders/custom-section
    value:
      _component: page-sections/builders/custom-section
      id: soluciones
      label: ''
      contentSections:
        - _component: building-blocks/core-elements/spacer
          size: md
        - _component: building-blocks/core-elements/heading
          text: Programas Corporativos a la Medida
          level: h2
          size: default
          alignmentHorizontal: center
          iconName: null
          iconPosition: before
        - _component: building-blocks/core-elements/text
          text: >-
            Diseñamos la formación ideal según el sector económico de tu empresa
            y el nivel de experiencia de tu equipo.
          alignmentHorizontal: center
          size: md
        - _component: building-blocks/wrappers/content-selector
          navigationPosition: start
          items:
            - title: Capacitación In-Company (SECOP II)
              subtext: Formación intensiva para equipos
              iconName: user-group
              iconColor: blue
              contentSections:
                - _component: page-sections/info-blocks/faq-section
                  heading: Detalle - Capacitación In-Company
                  headingLevel: h3
                  headingSize: sm
                  singleOpen: true
                  openFirst: true
                  items:
                    - title: Adaptación al Sector Económico
                      contentSections:
                        - _component: building-blocks/core-elements/text
                          text: >
                            Analizamos los pliegos de condiciones históricos y
                            actuales de tu sector (tecnología, obras,
                            suministros, salud, etc.) para que las simulaciones
                            prácticas de carga de ofertas se basen en tu negocio
                            real.
                          size: md
                    - title: Talleres Prácticos y Simulacros
                      contentSections:
                        - _component: building-blocks/core-elements/text
                          text: >
                            Realizamos simulacros de cierres a contra reloj en
                            la plataforma SECOP II, capacitando a los equipos
                            para mitigar errores bajo presión y asegurar la
                            radicación correcta de subsanaciones.
                          size: md
            - title: Inteligencia de Datos e IA
              subtext: Monitoreo predictivo de mercado
              iconName: cpu-chip
              iconColor: yellow
              contentSections:
                - _component: page-sections/info-blocks/faq-section
                  heading: Detalle - Inteligencia de Datos aplicada
                  headingLevel: h3
                  headingSize: sm
                  singleOpen: true
                  openFirst: true
                  items:
                    - title: Análisis de Competencia e Históricos
                      contentSections:
                        - _component: building-blocks/core-elements/text
                          text: >
                            Enseñamos a tu equipo a estructurar búsquedas
                            predictivas mediante Datos Abiertos y el Plan Anual
                            de Adquisiciones (PAA), permitiendo anticipar los
                            requerimientos de las entidades del Estado.
                          size: md
                    - title: Integración de Modelos de Lenguaje
                      contentSections:
                        - _component: building-blocks/core-elements/text
                          text: >
                            Uso práctico de Inteligencia Artificial para el
                            escaneo rápido de pliegos extensos, detección
                            automática de requisitos habilitantes y optimización
                            del tiempo de estructuración de propuestas.
                          size: md
            - title: Consultoría y Acompañamiento
              subtext: Diagnóstico de procesos de licitación
              iconName: chat-bubble-bottom-center-text
              iconColor: green
              contentSections:
                - _component: page-sections/info-blocks/faq-section
                  heading: Detalle - Consultoría y Diagnóstico
                  headingLevel: h3
                  headingSize: sm
                  singleOpen: true
                  openFirst: true
                  items:
                    - title: Auditoría de Ofertas Rechazadas
                      contentSections:
                        - _component: building-blocks/core-elements/text
                          text: >
                            Revisamos los procesos anteriores en los que tu
                            empresa fue descalificada para detectar fallas
                            procedimentales, debilidades en los indicadores
                            financieros o errores en la carga de documentos de
                            SECOP II.
                          size: md
      maxContentWidth: xl
      paddingHorizontal: lg
      paddingVertical: 2xl
      colorScheme: inherit
      backgroundColor: surface
  - discriminant: page-sections/features/feature-grid
    value:
      _component: page-sections/features/feature-grid
      eyebrow: Beneficios Corporativos
      heading: Resultados Tangibles para tu Organización
      subtext: >-
        Minimizamos riesgos jurídicos y maximizamos las adjudicaciones mediante
        un método probado de formación corporativa.
      backgroundColor: base
      paddingVertical: 2xl
      features:
        - title: Mitigación de Descalificaciones
          description: >-
            Reducimos a cero los errores formales de carga y subsanación en
            portales públicos.
          iconName: shield-check
          iconColor: blue
        - title: Eficiencia Comercial
          description: >-
            Capacitamos al equipo comercial para seleccionar únicamente
            licitaciones viables y rentables.
          iconName: chart-bar
          iconColor: green
        - title: Retorno de Inversión Rápido
          description: >-
            La adjudicación de un solo proceso adicional cubre con creces el
            costo del programa.
          iconName: currency-dollar
          iconColor: indigo
  - discriminant: page-sections/ctas/cta-form
    value:
      _component: page-sections/ctas/cta-form
      id: contacto
      heading: Cotizar Plan Corporativo
      subtext: >-
        ¿Quieres estructurar un programa a la medida para tu equipo de trabajo?
        Cuéntanos tus necesidades y un especialista diseñará una propuesta
        corporativa personalizada.
      formAction: /api/contact
      formBlocks:
        - _component: building-blocks/forms/input
          label: Nombre del Contacto
          name: nombre
          type: text
          required: true
        - _component: building-blocks/forms/input
          label: Correo Corporativo
          name: email
          type: email
          required: true
        - _component: building-blocks/forms/input
          label: Teléfono / WhatsApp
          name: telefono
          type: tel
          required: true
        - _component: building-blocks/forms/input
          label: Razón Social / Empresa
          name: empresa
          type: text
          required: true
        - _component: building-blocks/forms/select
          label: Tamaño del Equipo a Capacitar
          name: personas_capacitar
          placeholder: Selecciona el número de personas
          required: true
          options:
            - label: Grupo Pequeño (2 a 5 personas)
              value: 2-5
            - label: Grupo Mediano (6 a 15 personas)
              value: 6-15
            - label: Grupo Grande (Más de 15 personas)
              value: 15+
        - _component: building-blocks/forms/textarea
          label: Cuéntanos sobre tu sector y necesidades de capacitación
          name: requerimientos
          placeholder: >-
            Por ejemplo: Licitamos en el sector de tecnología y queremos
            aprender analítica del PAA...
          required: true
        - _component: building-blocks/forms/submit
          text: Solicitar Propuesta
          variant: primary
          size: md
          iconPosition: before
          hideText: false
          disabled: false
      imageSource: /src/assets/images/component-docs/SolicitaInformacion.png
      imageAlt: Solicitar Propuesta Corporativa
      reverse: false
      colorScheme: dark
      backgroundColor: surface
      paddingVertical: 4xl
---
