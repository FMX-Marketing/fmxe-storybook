export default {
  title: 'Styles/Typography'
};

export const HeadingsSample = () => `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`.trim();
  
export const ParagraphSample = () => `
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
  erat, varius et lectus eget, placerat maximus quam. Duis malesuada
  sodales dui, malesuada auctor purus vulputate id. Integer pulvinar
  pellentesque tincidunt.
</p>
<p>
  Duis malesuada sodales dui, malesuada auctor purus vulputate id.
  Integer pulvinar pellentesque tincidunt.
</p>
`.trim();

export const InlineSample = () => `
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is deleted.</del></p>
<p><s>This line of text is no longer accurate.</s></p>
<p><ins>This line of text is an addition to the document.</ins></p>
<p><small>This line of text is fine print.</small></p>
<p>This line contains <strong>strong, bold text</strong>.</p>
<p>This line contains <em>emphasized, italicized text</em>.</p>
<p>Type <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste text.</p>

<p>
  A short snippet of code:
  <code>&lt;strong&gt;Hello world&lt;/strong&gt;</code>.
</p>

<p>
  <abbr title="standard operating procedure">SOP</abbr>
  is an abbreviation for &ldquo;standard operating procedure.&rdquo;
</p>
`.trim();

export const HyperlinkSample = () => `
Lorem ipsum dolor sit amet,
<a href="#">consectetur adipiscing elit</a>.
`.trim();

export const UnorderedListSample = () => `
<ul>
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
</ul>
`.trim();

export const OrderedListSample = () => `
<ol>
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
</ol>
`.trim();

export const DescriptionListSample = () => `
<dl>
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
</dl>
`.trim();

export const TextAlignmentUtilitiesSample = () => `
<p class="text-start">start-aligned text on all viewport sizes.</p>
<p class="text-center">center-aligned text on all viewport sizes.</p>
<p class="text-end">end-aligned text on all viewport sizes.</p>
`.trim();

export const ResponsiveTextAlignmentUtilitiesSample = () => `
<p class="lg:text-center">  
  Centered on large and up viewport sizes 
</p>

<p class="text-center md:text-start"> 
  Centered on small viewports and left aligned starting at the medium viewport
  size and up
</p>
`.trim();

export const TextTransformUtilitiesSample = () => `
<p class="text-lowercase">LOWERCASED TEXT</p>
<p class="text-uppercase">uppercased text</p>
`.trim();

export const ForcedHeadingStyleUtilitiesSample = () => `
<h6 class="h1-style">
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
</h5>
`.trim();
 
export const FontSizeUtilitiesSample = () => `
<p class="text-sm">.text-sm size</p>
<p class="text-md">.text-md size</p>
<p class="text-lg">.text-lg size</p>
`.trim();

export const FontWeightUtilitiesSample = () => `
<p class="text-normal">normal text weight</p>
<p class="text-semi-bold">semi-bold text</p>
<p class="text-bold">bold text</p>
`.trim();

export const FontStyleUtilitiesSample = () => `
<p class="text-italic">
  This is italicized text
</p>
`.trim();

export const BlockquoteSample = () => `
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
`.trim();

export const BlockquoteWithSourceSample = () => `
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
`.trim();

export const LeadingUtilitiesSample = () => `
<p>
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
</p>
`.trim();

export const UnstyledListSample = () => `
<p>My favorite things:</p>

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
</ul>
`.trim();

export const InlineListSample = () => `
<p>My favorite things:</p>

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
</ul>
`.trim();

export const ProseSample = () => `
<div class="prose">
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
</div>
`.trim();
