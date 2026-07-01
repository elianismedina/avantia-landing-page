import { collection, config, fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

const buttonSchema = fields.object({
  _component: fields.text({ label: "Component", defaultValue: "building-blocks/core-elements/button" }),
  text: fields.text({ label: "Text" }),
  link: fields.text({ label: "Link" }),
  variant: fields.select({
    label: "Variant",
    options: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Tertiary", value: "tertiary" },
    ],
    defaultValue: "primary",
  }),
  size: fields.select({
    label: "Size",
    options: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
    ],
    defaultValue: "md",
  }),
  iconName: fields.text({ label: "Icon Name" }),
  iconPosition: fields.text({ label: "Icon Position", defaultValue: "before" }),
  hideText: fields.checkbox({ label: "Hide Text", defaultValue: false }),
});

const formBlockSchema = fields.object({
  _component: fields.text({ label: "Component" }),
  label: fields.text({ label: "Label" }),
  name: fields.text({ label: "Name" }),
  type: fields.text({ label: "Type" }),
  required: fields.checkbox({ label: "Required" }),
  placeholder: fields.text({ label: "Placeholder" }),
  options: fields.array(
    fields.object({
      label: fields.text({ label: "Label" }),
      value: fields.text({ label: "Value" }),
    }),
    {
      label: "Options",
      itemLabel: (props) => props.fields.label.value || "Option",
    }
  ),
});

const heroSplitBlock = {
  label: "Hero Split",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/heroes/hero-split" }),
    eyebrow: fields.text({ label: "Eyebrow" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    imageSource: fields.text({ label: "Image Source" }),
    imageAlt: fields.text({ label: "Image Alt" }),
    imageAspectRatio: fields.text({ label: "Image Aspect Ratio", defaultValue: "square" }),
    reverse: fields.checkbox({ label: "Reverse", defaultValue: false }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "base" }),
    paddingVertical: fields.text({ label: "Padding Vertical", defaultValue: "4xl" }),
    buttonSections: fields.array(buttonSchema, {
      label: "Buttons",
      itemLabel: (props) => props.fields.text.value || "Button",
    }),
  }),
};

const heroCenterBlock = {
  label: "Hero Center",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/heroes/hero-center" }),
    eyebrow: fields.text({ label: "Eyebrow" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "base" }),
    paddingVertical: fields.text({ label: "Padding Vertical", defaultValue: "4xl" }),
    buttonSections: fields.array(buttonSchema, {
      label: "Buttons",
      itemLabel: (props) => props.fields.text.value || "Button",
    }),
  }),
};

const featureGridBlock = {
  label: "Feature Grid",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/features/feature-grid" }),
    eyebrow: fields.text({ label: "Eyebrow" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    gap: fields.text({ label: "Gap", defaultValue: "xl" }),
    minItemWidth: fields.number({ label: "Min Item Width", defaultValue: 280 }),
    maxItemWidth: fields.number({ label: "Max Item Width", defaultValue: 360 }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "surface" }),
    alignmentHorizontal: fields.text({ label: "Alignment Horizontal", defaultValue: "center" }),
    features: fields.array(
      fields.object({
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        iconName: fields.text({ label: "Icon Name" }),
        iconColor: fields.text({ label: "Icon Color" }),
      }),
      {
        label: "Features",
        itemLabel: (props) => props.fields.title.value || "Feature",
      }
    ),
  }),
};

const featureSplitBlock = {
  label: "Feature Split",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/features/feature-split" }),
    eyebrow: fields.text({ label: "Eyebrow" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    imageSource: fields.text({ label: "Image Source" }),
    imageAlt: fields.text({ label: "Image Alt" }),
    imageAspectRatio: fields.text({ label: "Image Aspect Ratio", defaultValue: "video" }),
    imageRounded: fields.checkbox({ label: "Image Rounded", defaultValue: true }),
    reverse: fields.checkbox({ label: "Reverse", defaultValue: false }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "base" }),
    paddingVertical: fields.text({ label: "Padding Vertical", defaultValue: "lg" }),
    buttonSections: fields.array(buttonSchema, {
      label: "Buttons",
      itemLabel: (props) => props.fields.text.value || "Button",
    }),
  }),
};

const featureSliderBlock = {
  label: "Feature Slider",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/features/feature-slider" }),
    eyebrow: fields.text({ label: "Eyebrow" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "base" }),
    features: fields.array(
      fields.object({
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        iconName: fields.text({ label: "Icon Name" }),
        iconColor: fields.text({ label: "Icon Color" }),
      }),
      {
        label: "Features",
        itemLabel: (props) => props.fields.title.value || "Feature",
      }
    ),
  }),
};

const faqSectionBlock = {
  label: "FAQ Section",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/info-blocks/faq-section" }),
    heading: fields.text({ label: "Heading" }),
    headingLevel: fields.text({ label: "Heading Level", defaultValue: "h2" }),
    headingSize: fields.text({ label: "Heading Size", defaultValue: "lg" }),
    singleOpen: fields.checkbox({ label: "Single Open", defaultValue: true }),
    openFirst: fields.checkbox({ label: "Open First", defaultValue: false }),
    maxContentWidth: fields.text({ label: "Max Content Width", defaultValue: "xl" }),
    paddingHorizontal: fields.text({ label: "Padding Horizontal", defaultValue: "xl" }),
    paddingVertical: fields.text({ label: "Padding Vertical", defaultValue: "4xl" }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "none" }),
    items: fields.array(
      fields.object({
        title: fields.text({ label: "Question" }),
        contentSections: fields.array(
          fields.object({
            _component: fields.text({ label: "Component", defaultValue: "building-blocks/core-elements/text" }),
            text: fields.text({ label: "Answer Text", multiline: true }),
            size: fields.text({ label: "Size", defaultValue: "md" }),
          }),
          {
            label: "Answer Paragraphs",
            itemLabel: (props) => props.fields.text.value || "Paragraph",
          }
        ),
      }),
      {
        label: "Questions & Answers",
        itemLabel: (props) => props.fields.title.value || "FAQ Item",
      }
    ),
  }),
};

const testimonialSectionBlock = {
  label: "Testimonial Section",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/people/testimonial-section" }),
    text: fields.text({ label: "Text", multiline: true }),
    authorName: fields.text({ label: "Author Name" }),
    authorDescription: fields.text({ label: "Author Description" }),
    authorImage: fields.text({ label: "Author Image" }),
    alignmentHorizontal: fields.text({ label: "Alignment Horizontal", defaultValue: "center" }),
    maxContentWidth: fields.text({ label: "Max Content Width", defaultValue: "xl" }),
    paddingHorizontal: fields.text({ label: "Padding Horizontal", defaultValue: "xl" }),
    paddingVertical: fields.text({ label: "Padding Vertical", defaultValue: "2xl" }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "dark" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "surface" }),
  }),
};

const ctaFormBlock = {
  label: "CTA Form",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/ctas/cta-form" }),
    id: fields.text({ label: "Section ID" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    formAction: fields.text({ label: "Form Action URL" }),
    imageSource: fields.text({ label: "Image Source" }),
    imageAlt: fields.text({ label: "Image Alt" }),
    reverse: fields.checkbox({ label: "Reverse", defaultValue: false }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "dark" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "surface" }),
    paddingVertical: fields.text({ label: "Padding Vertical", defaultValue: "4xl" }),
    formBlocks: fields.array(formBlockSchema, {
      label: "Form Fields",
      itemLabel: (props) => `${props.fields.label.value || "Field"} (${props.fields.name.value || ""})`,
    }),
  }),
};

const ctaCenterBlock = {
  label: "CTA Center",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/ctas/cta-center" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "base" }),
    rounded: fields.checkbox({ label: "Rounded", defaultValue: true }),
    class: fields.text({ label: "Class", defaultValue: "wide" }),
    style: fields.text({ label: "Style" }),
    buttonSections: fields.array(buttonSchema, {
      label: "Buttons",
      itemLabel: (props) => props.fields.text.value || "Button",
    }),
  }),
};

const ctaSplitBlock = {
  label: "CTA Split",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/ctas/cta-split" }),
    heading: fields.text({ label: "Heading" }),
    subtext: fields.text({ label: "Subtext", multiline: true }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color", defaultValue: "base" }),
    buttonSections: fields.array(buttonSchema, {
      label: "Buttons",
      itemLabel: (props) => props.fields.text.value || "Button",
    }),
  }),
};

const customSectionBlock = {
  label: "Custom Section",
  schema: fields.object({
    _component: fields.text({ label: "Component", defaultValue: "page-sections/builders/custom-section" }),
    label: fields.text({ label: "Label" }),
    maxContentWidth: fields.text({ label: "Max Content Width", defaultValue: "lg" }),
    paddingHorizontal: fields.text({ label: "Padding Horizontal", defaultValue: "lg" }),
    paddingVertical: fields.text({ label: "Padding Vertical", defaultValue: "4xl" }),
    colorScheme: fields.text({ label: "Color Scheme", defaultValue: "inherit" }),
    backgroundColor: fields.text({ label: "Background Color" }),
    blocks: fields.array(
      fields.object({
        _component: fields.text({ label: "Element Type" }),
        text: fields.text({ label: "Text", multiline: true }),
        size: fields.text({ label: "Size" }),
        alignmentHorizontal: fields.text({ label: "Alignment" }),
        level: fields.text({ label: "Heading Level" }),
        variant: fields.text({ label: "Variant" }),
        link: fields.text({ label: "Link" }),
        url: fields.text({ label: "URL" }),
        html: fields.text({ label: "HTML", multiline: true }),
        height: fields.text({ label: "Height" }),
      }),
      {
        label: "Blocks",
        itemLabel: (props) => `${props.fields._component.value || "Element"}`,
      }
    ),
  }),
};

export default config({
  storage:
    process.env.NODE_ENV === "development"
      ? { kind: "local" }
      : {
          kind: "github",
          repo: "elianismedina/avantia-landing-page",
        },
  collections: {
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/*",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        keywords: fields.array(fields.text({ label: "Keyword" }), {
          label: "Keywords",
          itemLabel: (props) => props.value,
        }),
        image: fields.text({ label: "Image URL/Path" }),
        canonical: fields.text({ label: "Canonical" }),
        schemaData: fields.ignored(),
        pageSections: fields.blocks(
          {
            "page-sections/heroes/hero-split": heroSplitBlock,
            "page-sections/heroes/hero-center": heroCenterBlock,
            "page-sections/features/feature-grid": featureGridBlock,
            "page-sections/features/feature-split": featureSplitBlock,
            "page-sections/features/feature-slider": featureSliderBlock,
            "page-sections/info-blocks/faq-section": faqSectionBlock,
            "page-sections/people/testimonial-section": testimonialSectionBlock,
            "page-sections/ctas/cta-form": ctaFormBlock,
            "page-sections/ctas/cta-center": ctaCenterBlock,
            "page-sections/ctas/cta-split": ctaSplitBlock,
            "page-sections/builders/custom-section": customSectionBlock,
          },
          {
            label: "Page Sections",
          }
        ),
        _schema: fields.ignored(),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
        }),
      },
    }),
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        date: fields.date({ label: "Published Date" }),
        author: fields.text({ label: "Author", defaultValue: "Anonymous" }),
        image: fields.text({ label: "Image URL/Path" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        keywords: fields.array(fields.text({ label: "Keyword" }), {
          label: "Keywords",
          itemLabel: (props) => props.value,
        }),
        content: fields.mdx({
          label: "Content",
          components: {
            CtaCenter: block({
              label: "CTA Center",
              schema: {
                heading: fields.text({ label: "Heading" }),
                subtext: fields.text({ label: "Subtext", multiline: true }),
                buttonSections: fields.ignored(),
                colorScheme: fields.text({ label: "Color Scheme" }),
                backgroundColor: fields.text({ label: "Background Color" }),
                rounded: fields.checkbox({ label: "Rounded" }),
                class: fields.text({ label: "Class" }),
                style: fields.text({ label: "Style" }),
              },
            }),
            TestimonialSection: block({
              label: "Testimonial Section",
              schema: {
                paddingVertical: fields.text({ label: "Padding Vertical" }),
                text: fields.text({ label: "Text", multiline: true }),
                authorName: fields.text({ label: "Author Name" }),
                authorDescription: fields.text({ label: "Author Description" }),
                authorImage: fields.text({ label: "Author Image" }),
                class: fields.text({ label: "Class" }),
              },
            }),
          },
        }),
        _schema: fields.ignored(),
      },
    }),
  },
});
