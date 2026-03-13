import './typography.css';

export default {
  title: 'Styles/Typography',
  tags: ['autodocs'],
  render: (args) => args.html,
  parameters: {
    docs: {
      description: {
        component: `Styling text to reflect the FMX brand on the web.

## 1. Base typography

Base typography provides minimum text styling as a foundation to meet the needs of both prose content and components.

One important feature is that it removes extra margin on the last block element within a containing block.

FMX uses a customized version of [normalize.css](https://necolas.github.io/normalize.css/) as a starting point for our styles to achieve consistency between browsers and best-practice accessibility.`,
      },
    },
  },
};

// Typography Overview
export const TypographyOverview = {
  name: 'Typography Overview',
  tags: ['!dev'],
  args: {
    html: `<h1>Level 1 Heading</h1>
<p>This is a paragraph of body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi erat, varius et lectus eget, placerat maximus quam.</p>

<h2>Level 2 Heading</h2>
<p>Duis malesuada sodales dui, malesuada auctor purus vulputate id. You can use <strong>bold text</strong>, <em>italic text</em>, and <a href="#">hyperlinks</a> within paragraphs.</p>

<h3>Level 3 Heading</h3>
<ul>
  <li>Unordered list item one</li>
  <li>Unordered list item two</li>
  <li>Unordered list item three</li>
</ul>

<h4>Level 4 Heading</h4>
<ol>
  <li>Ordered list item one</li>
  <li>Ordered list item two</li>
  <li>Ordered list item three</li>
</ol>

<h5>Level 5 Heading</h5>
<p>Additional inline elements include <code>inline code</code>, <mark>highlighted text</mark>, and <small>small text</small>.</p>

<h6>Level 6 Heading</h6>
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>

<h3 class="h1-style">Heading 3 with h1-style class</h3>
<p>You can also use heading style classes like <code>.h1-style</code>, <code>.h2-style</code>, etc. to apply the visual style of one heading level to a different semantic heading element.</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `A comprehensive overview showing various typography elements together, demonstrating how headings, paragraphs, lists, inline elements, and heading style utilities work in combination.`,
      },
    },
  },
};

// 1.1 Headings
export const Headings = {
  name: '1.1 Headings',
  args: {
    html: `<h1>This is a Level 1 Header</h1>
<h2>This is a Level 2 Header</h2>
<h3>This is a Level 3 Header</h3>
<h4>This is a Level 4 Header</h4>
<h5>This is a Level 5 Header</h5>
<h6>This is a Level 6 Header</h6>`,
  },
  parameters: {
    docs: {
      description: {
        story: `The "major third" scale (1.25x between levels) works really well for web UI because of the flow between type levels. This scale uses medium contrast so fonts are not drastic in sizing and can fit in more content.

Headings follow this priority list of fonts and fallbacks:

1. Figtree
2. sans-serif`,
      },
    },
  },
};

// 1.2 Body Text
export const BodyText = {
  name: '1.2 Body Text',
  args: {
    html: `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
  erat, varius et lectus eget, placerat maximus quam. Duis malesuada
  sodales dui, malesuada auctor purus vulputate id. Integer pulvinar
  pellentesque tincidunt.
</p>
<p>
  Duis malesuada sodales dui, malesuada auctor purus vulputate id.
  Integer pulvinar pellentesque tincidunt.
</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Paragraphs and other body text follow this priority list of fonts and fallbacks:

1. Figtree
2. sans-serif`,
      },
    },
  },
};

// 1.3 Inline Text Elements
export const InlineTextElements = {
  name: '1.3 Inline Text Elements',
  args: {
    html: `<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is deleted.</del></p>
<p><s>This line of text is no longer accurate.</s></p>
<p><ins>This line of text is an addition to the document.</ins></p>
<p><small>This line of text is fine print.</small></p>
<p><strong>This line is rendered as strong, bold text.</strong></p>
<p><em>This line is rendered as emphasized, italicized text.</em></p>
<p>Type <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste text.</p>

<p>
  A short snippet of code:
  <code>&lt;strong&gt;Hello world&lt;/strong&gt;</code>.
</p>

<p>
  <abbr title="standard operating procedure">SOP</abbr>
  is an abbreviation for "standard operating procedure."
</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Styling for common HTML inline elements.

Beware that those tags should be used for semantic purpose:

* \`<mark>\` represents text which is marked or highlighted for reference or notation purposes.
* \`<small>\` represents side-comments and small print, like copyright and legal text.
* \`<s>\` represents elements that are no longer relevant or no longer accurate.`,
      },
    },
  },
};

// 1.4 Hyperlinks
export const Hyperlinks = {
  name: '1.4 Hyperlinks',
  args: {
    html: `Lorem ipsum dolor sit amet,
<a href="#">consectetur adipiscing elit</a>.`,
  },
};

// 1.5 Lists - Unordered
export const UnorderedList = {
  name: '1.5 Lists - Unordered',
  args: {
    html: `<ul>
  <li>
    Curabitur ultricies lectus quis tellus hendrerit, a faucibus nibh
    auctor. Pellentesque tempor neque at augue efficitur, eget
    lacinia ante bibendum.
  </li>
  <li>
    Nullam pretium turpis ac nunc scelerisque sollicitudin.
  </li>
  <li>
    Pellentesque sollicitudin nisl id orci sollicitudin varius. Cras
    vehicula feugiat justo, sed pretium justo euismod ut.
  </li>
</ul>`,
  },
};

// 1.5 Lists - Ordered
export const OrderedList = {
  name: '1.5 Lists - Ordered',
  args: {
    html: `<ol>
  <li>
    Curabitur ultricies lectus quis tellus hendrerit, a faucibus nibh
    auctor. Pellentesque tempor neque at augue efficitur, eget
    lacinia ante bibendum.
  </li>
  <li>
    Nullam pretium turpis ac nunc scelerisque sollicitudin.
  </li>
  <li>
    Pellentesque sollicitudin nisl id orci sollicitudin varius. Cras
    vehicula feugiat justo, sed pretium justo euismod ut.
  </li>
</ol>`,
  },
};

// 1.5 Lists - Description
export const DescriptionList = {
  name: '1.5 Lists - Description',
  args: {
    html: `<dl>
  <dt>Reactive maintenance</dt>
  <dd>
    Managed by submitting, working on, and closing out work orders
    or work requests.
  </dd>

  <dt>Preventive maintenance</dt>
  <dd>
    Performed on assets at intervals of time or meter readings in
    order to minimize breakdowns.
  </dd>

  <dt>Condition-based maintenance</dt>
  <dd>
    Monitors each asset and its performance to determine when
    maintenance needs to be performed.
  </dd>

  <dt>Predictive maintenance</dt>
  <dd>
    Uses sensors to alert you to perform maintenance when a reading
    is out of specification.
  </dd>
</dl>`,
  },
  parameters: {
    docs: {
      description: {
        story: `A description list helps describe a glossary of terms or key/value pairs. Description lists are preferred over bulleted lists with a bolded short phrase followed by a lengthier description.`,
      },
    },
  },
};

// 2. Typography utilities
export const TextAlignment = {
  name: '2. Typography utilities',
  args: {
    html: `<p class="text-start">start-aligned text on all viewport sizes.</p>
<p class="text-center">center-aligned text on all viewport sizes.</p>
<p class="text-end">end-aligned text on all viewport sizes.</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `### 2.1 Text Alignment

These utilities allow for easy adjustment of text alignment within a block element.

* \`.text-start\` aligns text to the beginning of the line (left side for LTR languages)
* \`.text-center\` center-aligns text
* \`.text-end\` aligns text to the end of the line (right side for LTR languages)
* \`.text-left\` is deprecated. It should be replaced with \`.text-start\`.
* \`.text-right\` is deprecated. It should be replaced with \`.text-end\`.`,
      },
    },
  },
};

export const TextAlignmentResponsive = {
  name: '2.1.1 Text Alignment - Responsive',
  args: {
    html: `<p class="lg:text-center">
  Centered on large and up viewport sizes
</p>

<p class="text-center md:text-start">
  Centered on small viewports and left-aligned starting at the medium viewport size and up
</p>

<div class="text-center sm:text-start md:text-center lg:text-start">
  This text changes alignment at different breakpoints
</div>`,
  },
  parameters: {
    docs: {
      description: {
        story: `There is also a set of responsive utilities that determine which breakpoint to start applying the alignment. The responsive utilities can be combined to allow different styles for different responsive breakpoints.

For easier readability, the ordering of the classes should be mobile-first: default screenless class first, followed by override for increasing screen size variants.`,
      },
    },
  },
};

// 2.2 Text Transform
export const TextTransform = {
  name: '2.2 Text Transform',
  args: {
    html: `<p class="text-lowercase">LOWERCASED TEXT</p>
<p class="text-uppercase">uppercased text</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Apply text capitalization transformations to text within the container.`,
      },
    },
  },
};

// 2.3 Forced Heading Style
export const ForcedHeadingStyle = {
  name: '2.3 Forced Heading Style',
  args: {
    html: `<h6 class="h1-style">
  Heading 6 styled as heading 1
</h6>

<h1 class="h2-style">
  Heading 1 styled as heading 2
</h1>

<h2 class="h3-style">
  Heading 2 styled as heading 3
</h2>

<h3 class="h4-style">
  Heading 3 styled as heading 4
</h3>

<h4 class="h5-style">
  Heading 4 styled as heading 5
</h4>

<h5 class="h6-style">
  Heading 5 styled as heading 6
</h5>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Useful if you want to keep the correct document heading hierarchy but want for the headings to appear at different sizes than the base styles.`,
      },
    },
  },
};

// 2.4 Font Sizes
export const FontSizes = {
  name: '2.4 Font Sizes',
  args: {
    html: `<p class="text-sm">.text-sm size</p>
<p class="text-md">.text-md size</p>
<p class="text-lg">.text-lg size</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Quickly change the font size based on heading font sizes. Note that this only applies font sizes and not other font styles.`,
      },
    },
  },
};

// 2.5 Font Weights
export const FontWeights = {
  name: '2.5 Font Weights',
  args: {
    html: `<p class="text-normal">normal text weight</p>
<p class="text-semi-bold">semi-bold text</p>
<p class="text-bold">bold text</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Quickly change the font weight with these utilities.`,
      },
    },
  },
};

// 2.6 Font Styles
export const FontStyles = {
  name: '2.6 Font Styles',
  args: {
    html: `<p class="text-italic">
  This is italicized text
</p>`,
  },
};

// 2.7 Blockquotes
export const Blockquote = {
  name: '2.7 Blockquotes',
  args: {
    html: `<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>

<figure>
  <blockquote class="blockquote">
    <p>A well-known quote with attribution, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>`,
  },
  parameters: {
    docs: {
      description: {
        story: `For quoting blocks of content from another source within your document. Wrap \`<blockquote class="blockquote">\` around any HTML as the quote.

### Naming a Source

The HTML spec requires that blockquote attribution be placed outside the \`<blockquote>\`. When providing attribution, wrap your \`<blockquote>\` in a \`<figure>\` and use a \`<figcaption>\` with the blockquote-footer class. Be sure to wrap the name of the source work in \`<cite>\` as well.`,
      },
    },
  },
};

// 2.8 Tight Leading
export const TightLeading = {
  name: '2.8 Tight Leading',
  args: {
    html: `<p>
  <strong>This is normal text.</strong> I called the IT department
  about that ransomware because of the old antivirus, but he said
  that we were using Avast 2021. Service as core &amp; innovations as
  power makes our brand cannibalize.
</p>

<p class="text-tight">
  <strong>This is tight text.</strong> I called the IT department
  about that ransomware because of the old antivirus, but he said
  that we were using Avast 2021. Service as core &amp; innovations as
  power makes our brand cannibalize.
</p>`,
  },
  parameters: {
    docs: {
      description: {
        story: `The default line height (leading) for our text is 1.58. Tighten line height on shorter blocks of text by adding the \`.text-tight\` class.`,
      },
    },
  },
};

// 2.9 Unstyled Lists
export const UnstyledList = {
  name: '2.9 Unstyled Lists',
  args: {
    html: `<p>My favorite things:</p>

<ul class="list-unstyled">
  <li>Peanut butter</li>
  <li>Ice cream</li>
  <li>
    Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>Long walks on the beach</li>
</ul>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Use this utility in the event that the content should be structured like a list but presented without the styling of one.`,
      },
    },
  },
};

// 2.10 Inline Lists
export const InlineList = {
  name: '2.10 Inline Lists',
  args: {
    html: `<p>My favorite things:</p>

<ul class="list-inline">
  <li class="list-inline-item">
    Peanut butter
  </li>
  <li class="list-inline-item">
    Ice cream
  </li>
  <li class="list-inline-item">
    Long walks on the beach
  </li>
</ul>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Remove a list's bullets and apply some light margin with a combination of two classes, \`list-inline\` and \`list-inline-item\`.`,
      },
    },
  },
};

// 3. Prose Typography
export const ProseTypography = {
  name: '3. Prose Typography',
  args: {
    html: `<div class="prose">
  <h2>Line length test</h2>
  <p>
    The following paragraph contains 2&frac12; lengths of the
    alphabet for testing measure:
  </p>
  <p style="overflow-x: auto;">
    abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm
  </p>

  <h2>How it all began</h2>
  <p class="lead">
    A summary that will knock your socks off and make you want to
    read more of this article.
  </p>
  <p>
    It was a dark and stormy night. I would describe it as such:
  </p>
  <ul>
    <li>Dark</li>
    <li>Stormy</li>
  </ul>

  <h3>Listing it out as a numbered list</h3>
  <p>
    If I were to describe it with an ordered list, it would look like
    this:
  </p>
  <ol>
    <li>Dark</li>
    <li>Stormy</li>
  </ol>
</div>`,
  },
  parameters: {
    docs: {
      description: {
        story: `Adding a class of \`.prose\` to a block containing content provides styling suitable for longer-form content and builds on top of base typography styles.

* Typically used for large blocks of prose or content authored through a rich text or WYSIWYG editor. Think bodies of articles, extended descriptions, and posts.
* Provides extra space between subheadings that aren't the first element within the block.
* Adds margin below ordered and unordered list items.
* For maximum readability, measure does not exceed 2½ lengths of the alphabet in the paragraph font size.`,
      },
    },
  },
};
