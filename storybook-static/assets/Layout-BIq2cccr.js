import{j as e,M as t,C as i}from"./blocks-Baj3Q0Vt.js";import{useMDXComponents as d}from"./index-BsttL0Be.js";import{Grid as l,Spacing as o,Cards as a,CardDecks as c}from"./layout.stories-DY47CNyI.js";import"./iframe-C-aqhIaS.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Layout"}),`
`,e.jsx(n.h1,{id:"layout",children:"Layout"}),`
`,e.jsx(n.p,{children:`Layout is a major set of frames on which we can hang content and design
elements.`}),`
`,e.jsx(n.p,{children:`Our layout system provides a toolkit for positioning within a grid
layout, spacing, and grouping of elements like cards. This all can be configured
flexibly with optional mobile-first responsive breakpoints.`}),`
`,e.jsx(n.h2,{id:"responsive-breakpoints",children:"Responsive breakpoints"}),`
`,e.jsx(n.p,{children:`Based on Bootstrap, Electric references five responsive breakpoints. The five
tiers are as follows:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Extra small (",e.jsx(n.code,{children:"xs"}),")"]}),`
`,e.jsxs(n.li,{children:["Small (",e.jsx(n.code,{children:"sm"}),")"]}),`
`,e.jsxs(n.li,{children:["Medium (",e.jsx(n.code,{children:"md"}),")"]}),`
`,e.jsxs(n.li,{children:["Large (",e.jsx(n.code,{children:"lg"}),")"]}),`
`,e.jsxs(n.li,{children:["Extra large (",e.jsx(n.code,{children:"xl"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:`As noted above, each of these breakpoints have their own container, unique class
prefix, and modifiers. Here are the thresholds and class prefixes for the
breakpoints:`}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"xs"}),e.jsx("th",{children:"sm"}),e.jsx("th",{children:"md"}),e.jsx("th",{children:"lg"}),e.jsx("th",{children:"xl"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Screen min width"}),e.jsx("td",{children:"0"}),e.jsx("td",{children:"≥576px"}),e.jsx("td",{children:"≥768px"}),e.jsx("td",{children:"≥992px"}),e.jsx("td",{children:"≥1200px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Class prefix"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("code",{children:"sm:"})}),e.jsx("td",{children:e.jsx("code",{children:"md:"})}),e.jsx("td",{children:e.jsx("code",{children:"lg:"})}),e.jsx("td",{children:e.jsx("code",{children:"xl:"})})]})]})]}),`
`,e.jsx(n.p,{children:`Responsive class prefixes can be applied across several different layout
utilities:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/grid/",children:"Grid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/spacing/",children:"Spacing"})}),`
`]}),`
`,e.jsx(n.h2,{id:"grid-system",children:"Grid system"}),`
`,e.jsxs(n.p,{children:["Most FMX website layouts use the ",e.jsx(n.a,{href:"/grid/",children:"grid system"}),`. It provides a set of
utilities for composing row- and column-based layouts scaling from mobile up
through desktop viewport sizes.`]}),`
`,e.jsx(i,{of:l}),`
`,e.jsxs(n.p,{children:["See the chapter about the ",e.jsx(n.a,{href:"/grid/",children:"grid"})," for more information."]}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.p,{children:["Electric ",e.jsx(n.a,{href:"/spacing/",children:"spacing utilities and tokens"}),` provide a toolkit for consistent
spacing of elements vertically and horizontally.`]}),`
`,e.jsx(n.p,{children:`Utilities for padding and margin can be applied as square and squish insets,
stacked, inline, and on the grid.`}),`
`,e.jsx(n.p,{children:`Following is an example of applying a medium inset padding to a frame and a
small stack margin to the bottom of the first element.`}),`
`,e.jsx(i,{of:o}),`
`,e.jsxs(n.p,{children:["See the chapter about the ",e.jsx(n.a,{href:"/grid/",children:"spacing"})," for more information."]}),`
`,e.jsx(n.h2,{id:"cards",children:"Cards"}),`
`,e.jsx(n.h3,{id:"cards-1",children:"Cards"}),`
`,e.jsx(n.p,{children:"A card component can contain a header, image, body, and footer."}),`
`,e.jsx(i,{of:a}),`
`,e.jsxs(n.p,{children:[e.jsx("mark",{children:"TODO: link it up"})," See more about the card component."]}),`
`,e.jsx(n.p,{children:`All card components in the design system extend this base card component and
override properties within to add extra visual effects. The following components
extend the base card component:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx("mark",{children:"TODO: list these"})," Feature card"]}),`
`]}),`
`,e.jsx(n.h3,{id:"card-decks",children:"Card decks"}),`
`,e.jsx(n.p,{children:`Cards are typically laid out within a card deck grid, which sets the number of
cards per row based on what makes sense for each breakpoint.`}),`
`,e.jsx(n.p,{children:"A base card deck looks like the following:"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.p,{children:"Custom card decks are provided for each card outlined above:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("mark",{children:"TODO: list these after we sort out components"}),`
`]}),`
`]})]})}function m(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
