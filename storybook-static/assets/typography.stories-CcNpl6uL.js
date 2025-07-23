const w={title:"Styles/Typography"},e=()=>`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`.trim(),t=()=>`
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
`.trim(),i=()=>`
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
`.trim(),s=()=>`
Lorem ipsum dolor sit amet,
<a href="#">consectetur adipiscing elit</a>.
`.trim(),a=()=>`
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
`.trim(),n=()=>`
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
`.trim(),r=()=>`
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
`.trim(),l=()=>`
<p class="text-start">start-aligned text on all viewport sizes.</p>
<p class="text-center">center-aligned text on all viewport sizes.</p>
<p class="text-end">end-aligned text on all viewport sizes.</p>
`.trim(),o=()=>`
<p class="lg:text-center">  
  Centered on large and up viewport sizes 
</p>

<p class="text-center md:text-start"> 
  Centered on small viewports and left aligned starting at the medium viewport
  size and up
</p>
`.trim(),c=()=>`
<p class="text-lowercase">LOWERCASED TEXT</p>
<p class="text-uppercase">uppercased text</p>
`.trim(),d=()=>`
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
`.trim(),u=()=>`
<p class="text-sm">.text-sm size</p>
<p class="text-md">.text-md size</p>
<p class="text-lg">.text-lg size</p>
`.trim(),p=()=>`
<p class="text-normal">normal text weight</p>
<p class="text-semi-bold">semi-bold text</p>
<p class="text-bold">bold text</p>
`.trim(),m=()=>`
<p class="text-italic">
  This is italicized text
</p>
`.trim(),h=()=>`
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
`.trim(),g=()=>`
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
`.trim(),b=()=>`
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
`.trim(),f=()=>`
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
`.trim(),x=()=>`
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
`.trim(),S=()=>`
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
`.trim();e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
\`.trim()`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
Lorem ipsum dolor sit amet,
<a href="#">consectetur adipiscing elit</a>.
\`.trim()`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<p class="text-start">start-aligned text on all viewport sizes.</p>
<p class="text-center">center-aligned text on all viewport sizes.</p>
<p class="text-end">end-aligned text on all viewport sizes.</p>
\`.trim()`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<p class="lg:text-center">  
  Centered on large and up viewport sizes 
</p>

<p class="text-center md:text-start"> 
  Centered on small viewports and left aligned starting at the medium viewport
  size and up
</p>
\`.trim()`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<p class="text-lowercase">LOWERCASED TEXT</p>
<p class="text-uppercase">uppercased text</p>
\`.trim()`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`
<p class="text-sm">.text-sm size</p>
<p class="text-md">.text-md size</p>
<p class="text-lg">.text-lg size</p>
\`.trim()`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<p class="text-normal">normal text weight</p>
<p class="text-semi-bold">semi-bold text</p>
<p class="text-bold">bold text</p>
\`.trim()`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => \`
<p class="text-italic">
  This is italicized text
</p>
\`.trim()`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => \`
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
\`.trim()`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => \`
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
\`.trim()`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => \`
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
\`.trim()`,...S.parameters?.docs?.source}}};const k=["HeadingsSample","ParagraphSample","InlineSample","HyperlinkSample","UnorderedListSample","OrderedListSample","DescriptionListSample","TextAlignmentUtilitiesSample","ResponsiveTextAlignmentUtilitiesSample","TextTransformUtilitiesSample","ForcedHeadingStyleUtilitiesSample","FontSizeUtilitiesSample","FontWeightUtilitiesSample","FontStyleUtilitiesSample","BlockquoteSample","BlockquoteWithSourceSample","LeadingUtilitiesSample","UnstyledListSample","InlineListSample","ProseSample"];export{h as BlockquoteSample,g as BlockquoteWithSourceSample,r as DescriptionListSample,u as FontSizeUtilitiesSample,m as FontStyleUtilitiesSample,p as FontWeightUtilitiesSample,d as ForcedHeadingStyleUtilitiesSample,e as HeadingsSample,s as HyperlinkSample,x as InlineListSample,i as InlineSample,b as LeadingUtilitiesSample,n as OrderedListSample,t as ParagraphSample,S as ProseSample,o as ResponsiveTextAlignmentUtilitiesSample,l as TextAlignmentUtilitiesSample,c as TextTransformUtilitiesSample,a as UnorderedListSample,f as UnstyledListSample,k as __namedExportsOrder,w as default};
