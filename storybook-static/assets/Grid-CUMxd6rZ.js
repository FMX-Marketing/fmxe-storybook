import{j as e,M as l,C as c}from"./blocks-Baj3Q0Vt.js";import{useMDXComponents as o}from"./index-BsttL0Be.js";import{Breakpoints as r}from"./grid.stories-ZD7sKcBM.js";import"./iframe-C-aqhIaS.js";function i(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Grid"}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsxs(n.p,{children:[`Most major layout elements are laid on top of a responsive grid system. Electric
draws inspiration from `,e.jsx(n.a,{href:"https://getbootstrap.com/docs/5.3/layout/grid/",rel:"nofollow",children:"Bootstrap's grid system"}),`, but our implementation
strips out unnecessary weight and complexity.`]}),`
`,e.jsx(n.h2,{id:"1-how-it-works",children:"1. How it works"}),`
`,e.jsx(n.p,{children:"Much like Bootstrap's, here's how the grid system comes together."}),`
`,e.jsx(n.h3,{id:"11-our-grid-supports-five-responsive-breakpoints",children:"1.1 Our grid supports five responsive breakpoints"}),`
`,e.jsxs(n.p,{children:["Breakpoints are based on ",e.jsx(n.code,{children:"min-width"}),` media queries, meaning they affect that
breakpoint and all those above it (e.g., `,e.jsx(n.code,{children:".sm:col-4"})," applies to ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),`,
`,e.jsx(n.code,{children:"lg"}),", and ",e.jsx(n.code,{children:"xl"}),")."]}),`
`,e.jsx(n.p,{children:`This means you can control container and column sizing and behavior by each
breakpoint.`}),`
`,e.jsx(n.h3,{id:"12-containers-center-and-horizontally-pad-your-content",children:"1.2 Containers center and horizontally pad your content"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".container"})," for a responsive pixel width, ",e.jsx(n.code,{children:".container-fluid"}),` for
`,e.jsx(n.code,{children:"width: 100%"}),` across all viewports and devices, or a responsive container (e.g.,
`,e.jsx(n.code,{children:".container-md"}),") for a combination of fluid and pixel widths."]}),`
`,e.jsx(n.h3,{id:"13-rows-are-wrappers-for-columns",children:"1.3 Rows are wrappers for columns"}),`
`,e.jsxs(n.p,{children:["Each column has horizontal ",e.jsx(n.code,{children:"padding"})," (called a ",e.jsx(n.em,{children:"gutter"}),`) for controlling the
space between them. This `,e.jsx(n.code,{children:"padding"}),` is then counteracted on the rows with
negative margins to ensure the content in your columns is visually aligned down
the left side.`]}),`
`,e.jsx(n.p,{children:`Rows also support modifier classes to uniformly apply column sizing and gutter
classes to change the spacing of your content.`}),`
`,e.jsx(n.h3,{id:"14-columns-are-incredibly-flexible",children:"1.4 Columns are incredibly flexible"}),`
`,e.jsx(n.p,{children:`There are 12 template columns available per row, allowing you to create
different combinations of elements that span any number of columns.`}),`
`,e.jsxs(n.p,{children:["Column classes indicate the number of template columns to span (e.g., ",e.jsx(n.code,{children:"col-4"}),`
spans four).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"width"}),"s are set in percentages so you always have the same relative sizing."]}),`
`,e.jsx(n.h3,{id:"15-gutters-are-also-responsive-and-customizable",children:"1.5 Gutters are also responsive and customizable"}),`
`,e.jsxs(n.p,{children:[`Gutter classes are available across all breakpoints, with all the same sizes as
our margin and padding spacing. Change horizontal gutters with `,e.jsx(n.code,{children:".gx-*"}),` classes,
vertical gutters with `,e.jsx(n.code,{children:".gy-*"}),", or all gutters with ",e.jsx(n.code,{children:".g-*"})," classes. ",e.jsx(n.code,{children:".g-0"}),` is
also available to remove gutters.`]}),`
`,e.jsx(n.h2,{id:"2-breakpoints",children:"2. Breakpoints"}),`
`,e.jsx(n.p,{children:`The grid system can adapt across all five breakpoints. The five grid tiers are
as follows:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Extra small (",e.jsx(n.code,{children:"xs"}),")"]}),`
`,e.jsxs(n.li,{children:["Small (",e.jsx(n.code,{children:"sm"}),")"]}),`
`,e.jsxs(n.li,{children:["Medium (",e.jsx(n.code,{children:"md"}),")"]}),`
`,e.jsxs(n.li,{children:["Large (",e.jsx(n.code,{children:"lg"}),")"]}),`
`,e.jsxs(n.li,{children:["Extra large (",e.jsx(n.code,{children:"xl"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:`As noted above, each of these breakpoints have their own container, unique class
prefix, and modifiers. Here’s how the grid changes across these breakpoints:`}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"xs"}),e.jsx("th",{children:"sm"}),e.jsx("th",{children:"md"}),e.jsx("th",{children:"lg"}),e.jsx("th",{children:"xl"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Screen min width"}),e.jsx("td",{children:"0"}),e.jsx("td",{children:"≥576px"}),e.jsx("td",{children:"≥768px"}),e.jsx("td",{children:"≥992px"}),e.jsx("td",{children:"≥1200px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Container max width"}),e.jsx("td",{children:"None (auto)"}),e.jsx("td",{children:"540px"}),e.jsx("td",{children:"720px"}),e.jsx("td",{children:"960px"}),e.jsx("td",{children:"1140px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Class prefix"}),e.jsx("td",{children:e.jsx("code",{children:"col-"})}),e.jsx("td",{children:e.jsx("code",{children:"sm:col-"})}),e.jsx("td",{children:e.jsx("code",{children:"md:col-"})}),e.jsx("td",{children:e.jsx("code",{children:"lg:col-"})}),e.jsx("td",{children:e.jsx("code",{children:"xl:col-"})})]})]})]}),`
`,e.jsx(n.p,{children:"The gutter width on all breakpoints is 1.5rem (0.75rem on each side)."}),`
`,e.jsx(n.h2,{id:"3-the-grid-in-figma",children:"3. The grid in Figma"}),`
`,e.jsx("iframe",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"800",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fbg8ecYNq9ja8DbKW07QLrB%2FFMX-Styles%3Ftype%3Ddesign%26node-id%3D1882%253A100%26mode%3Ddesign%26t%3DxQw65GdvUtkSaSgr-1",allowfullscreen:!0}),`
`,e.jsxs(n.p,{children:[`382px 3-column mobile and 1,440px 12-column desktop grid system frames are
available in the `,e.jsx(n.a,{href:"https://www.figma.com/file/bg8ecYNq9ja8DbKW07QLrB/FMX-Styles?type=design&node-id=1211-18&mode=design&t=xQw65GdvUtkSaSgr-0",rel:"nofollow",children:"Figma styles file"}),"."]}),`
`,e.jsxs(n.p,{children:[`To turn on the grid for a frame, select the frame and click the eye icon next to
the `,e.jsx(n.em,{children:"Layout grid > columns"})," inspector control."]}),`
`,e.jsx(n.h2,{id:"4-responsive-classes",children:"4. Responsive classes"}),`
`,e.jsxs(n.p,{children:[`The grid system employs a "current size and up" style of layering varied
column sizing based on breakpoints. This follows the `,e.jsx(n.a,{href:"https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00",rel:"nofollow",children:"mobile first"}),` style of
building responsive UIs.`]}),`
`,e.jsx(n.h3,{id:"41-applying-to-all-breakpoints",children:"4.1 Applying to all breakpoints"}),`
`,e.jsxs(n.p,{children:[`For grids that are the same from the smallest of devices to the largest, use the
`,e.jsx(n.code,{children:".col"})," and ",e.jsx(n.code,{children:".col-*"})," classes."]}),`
`,e.jsxs(n.p,{children:[`Specify a numbered class when you need a particularly sized column. Otherwise,
feel free to stick to `,e.jsx(n.code,{children:".col"})," to get evenly-spaced columns across."]}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h3,{id:"42-stacked-to-horizontal",children:"4.2 Stacked to horizontal"}),`
`,e.jsxs(n.p,{children:["Using a single set of ",e.jsx(n.code,{children:".sm:col-*"}),` classes, you can create a basic grid system
that starts out stacked and becomes horizontal at the small breakpoint (`,e.jsx(n.code,{children:"sm"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row">
    <div class="sm:col-8">sm:col-8</div>
    <div class="sm:col-4">sm:col-4</div>
  </div>
  <div class="row">
    <div class="sm:col">sm:col</div>
    <div class="sm:col">sm:col</div>
    <div class="sm:col">sm:col</div>
  </div>
</div>
`})}),`
`,e.jsx(n.h3,{id:"43-layer-various-breakpoints",children:"4.3 Layer various breakpoints"}),`
`,e.jsxs(n.p,{children:[`If you need more nuance across various breakpoints, you can layer the grid
classes from the base `,e.jsx(n.code,{children:".col-*"}),` classes to largest breakpoint (e.g.,
`,e.jsx(n.code,{children:".xl:col-*"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row">
    <div class="sm:col-6 lg:col-4 xl:col-3">
      .sm:col-6 .lg:col-4 .xl:col-3
    </div>
    <div class="sm:col-6 lg:col-8 xl:col-9">
      .sm:col-6 .lg:col-8 .xl:col-9
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.h2,{id:"5-nesting",children:"5. Nesting"}),`
`,e.jsxs(n.p,{children:["To nest your content within the grid, add a new ",e.jsx(n.code,{children:".row"})," and set of ",e.jsx(n.code,{children:".col-*"}),`
columns within an existing `,e.jsx(n.code,{children:".col-*"})," column."]}),`
`,e.jsx(n.p,{children:`Nested rows should include a set of columns that add up to 12 or fewer. (It is
not required that you use all 12 available columns.)`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row">
    <div class="col-3">
      Level 1: .col-3
    </div>
    <div class="col-9">
      <div class="row">
        <div class="col-8 sm:col-6">
          Level 2: .col-8 .sm:col-6
        </div>
        <div class="col-4 sm:col-6">
          Level 2: .col-4 .sm:col-6
        </div>
      </div>
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.h2,{id:"6-column-alignment",children:"6. Column alignment"}),`
`,e.jsx(n.p,{children:`Use alignment utilities to vertically and horizontally align columns within the
grid.`}),`
`,e.jsx(n.h3,{id:"61-vertical-alignment",children:"6.1 Vertical alignment"}),`
`,e.jsxs(n.p,{children:["Change the vertical alignment with any of the responsive ",e.jsx(n.code,{children:"row-align-items-*"}),`
classes. The naming is inspired by flexbox's `,e.jsx(n.code,{children:"align-items"})," property."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"row-align-items-start"}),` aligns all columns in the row to the top of the row
boundary:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row row-align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"row-align-items-center"}),` aligns all columns in the row to the center of the
boundary:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row row-align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"row-align-items-end"}),` aligns all columns in the row to the bottom of the row
boundary.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row row-align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:[`Or change the alignment of each column individually with any of the responsive
`,e.jsx(n.code,{children:".col-align-self-*"})," classes:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row">
    <div class="col col-align-self-start">
      One of three columns
    </div>
    <div class="col col-align-self-center">
      One of three columns
    </div>
    <div class="col col-align-self-end">
      One of three columns
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.h3,{id:"62-horizontal-alignment",children:"6.2 Horizontal alignment"}),`
`,e.jsxs(n.p,{children:[`Change the horizontal alignment with any of the responsive
`,e.jsx(n.code,{children:"row-justify-content-*"})," classes."]}),`
`,e.jsxs(n.p,{children:[`Like with our vertical alignment utilities, these classes are named after a
flexbox property: `,e.jsx(n.code,{children:"justify-content"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row row-justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row row-justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row row-justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row row-justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row row-justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row row-justify-content-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.h2,{id:"7-column-wrapping",children:"7. Column wrapping"}),`
`,e.jsx(n.p,{children:`If more than 12 columns are placed within a single row, each group of extra
columns will, as one unit, wrap onto a new line.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container">
  <div class="row">
    <div class="col-9">
      .col-9
    </div>
    <div class="col-4">
      .col-4<br>
      Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new
      line as one contiguous unit.
    </div>
    <div class="col-6">
      .col-6<br>
      Subsequent columns continue along the new line.
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.h2,{id:"8-reordering-columns",children:"8. Reordering columns"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:".col-order-*"}),` classes for controlling the visual order of your content.
This includes support for `,e.jsx(n.code,{children:"1"})," through ",e.jsx(n.code,{children:"5"})," across all six grid tiers."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col col-order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col col-order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:[`These classes are responsive, so you can set the order by breakpoint (e.g.,
`,e.jsx(n.code,{children:".col-order-1.md:col-order-2"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row">
    <div class="col-12 lg:col-6 lg:col-order-2">
      First on mobile, second on desktop
    </div>
    <div class="col-12 lg:col-6 lg:col-order-1">
      First on desktop, second on mobile
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.h3,{id:"81-forcing-column-order-to-beginning-or-end",children:"8.1 Forcing column order to beginning or end"}),`
`,e.jsxs(n.p,{children:["There are also responsive ",e.jsx(n.code,{children:".col-order-0"})," and ",e.jsx(n.code,{children:".col-order-6"}),` classes that
change the order of an element by applying `,e.jsx(n.code,{children:"order: 0"})," and ",e.jsx(n.code,{children:"order: 6"}),`,
respectively. These should be used sparingly in cases where you want a
guaranteed way to force a column to the beginning or ending positions.`]}),`
`,e.jsxs(n.p,{children:["These classes can also be intermixed with the numbered ",e.jsx(n.code,{children:".col-order-* "}),`classes as
needed.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container text-center">
  <div class="row">
    <div class="col-12 lg:col-6 lg:col-order-6">
      First on mobile, second on desktop
    </div>
    <div class="col-12 lg:col-6 lg:col-order-0">
      First on desktop, second on mobile
    </div>
  </div>
</div>
`})}),`
`,e.jsx(n.h2,{id:"9-gutters",children:"9. Gutters"}),`
`,e.jsxs(n.p,{children:[`Gutters are the gaps between column content, created by horizontal padding. We
set `,e.jsx(n.code,{children:"padding-right"})," and ",e.jsx(n.code,{children:"padding-left"}),` on each column, and use negative margin
to offset that at the start and end of each row to align content.`]}),`
`,e.jsxs(n.p,{children:["Gutters start at ",e.jsx(n.code,{children:"1.5rem"})," (",e.jsx(n.code,{children:"24px"}),`) wide. This allows us to match our grid to the
padding and margin spacers scale.`]}),`
`,e.jsx(n.h3,{id:"91-remove-gutters",children:"9.1 Remove gutters"}),`
`,e.jsxs(n.p,{children:[`The gutters between columns in our predefined grid classes can be removed with
`,e.jsx(n.code,{children:".row-gutter-0"}),". This removes the negative margins from ",e.jsx(n.code,{children:".row"}),` and the
horizontal padding from all immediate children columns.`]}),`
`,e.jsxs(n.p,{children:["Need an edge-to-edge design? Drop the parent ",e.jsx(n.code,{children:".container"})," or ",e.jsx(n.code,{children:".container-fluid"}),`
and add `,e.jsx(n.code,{children:".mx-0"})," to the ",e.jsx(n.code,{children:".row"})," to prevent overflow."]}),`
`,e.jsx(n.p,{children:`In practice, here’s how it looks. Note you can continue to use this with all
other predefined grid classes (including column widths, responsive tiers,
reorders, and more).`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="row row-gutter-0 text-center">
  <div class="sm:col-6 md:col-8">
    .sm:col-6 .md:col-8
  </div>
  <div class="col-6 md:col-4">
    .col-6 .md:col-4
  </div>
</div>
`})})]})}function m(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
