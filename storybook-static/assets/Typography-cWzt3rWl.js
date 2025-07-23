import{e as s,j as e,M as p,C as t}from"./blocks-Baj3Q0Vt.js";import{useMDXComponents as c}from"./index-BsttL0Be.js";import{HeadingsSample as f,ParagraphSample as m,InlineSample as u,HyperlinkSample as g,UnorderedListSample as j,OrderedListSample as y,DescriptionListSample as b,TextAlignmentUtilitiesSample as w,ResponsiveTextAlignmentUtilitiesSample as k,TextTransformUtilitiesSample as T,ForcedHeadingStyleUtilitiesSample as v,FontSizeUtilitiesSample as S,FontWeightUtilitiesSample as z,FontStyleUtilitiesSample as V,BlockquoteSample as M,BlockquoteWithSourceSample as E,LeadingUtilitiesSample as A,UnstyledListSample as P,InlineListSample as F,ProseSample as U}from"./typography.stories-CcNpl6uL.js";import"./iframe-C-aqhIaS.js";const d={typography:{"--fmxe-font-family-body":{cssValue:"Mulish, Muli, sans-serif",figmaValue:"Mulish, Muli, sans-serif",cssProps:{fontFamily:"Mulish, Muli, sans-serif"},previewText:"Electric"},"--fmxe-font-family-brand":{cssValue:"Hind, sans-serif",figmaValue:"Hind, sans-serif",cssProps:{fontFamily:"Mulish, Muli, sans-serif"},previewText:"Electric"},"--fmxe-font-size-body-s":{cssValue:"1rem",figmaValue:"16px",cssProps:{fontSize:"1rem"},previewText:"Aa"},"--fmxe-font-size-body-md":{cssValue:"1.1875rem",figmaValue:"19px",cssProps:{fontSize:"1.1875rem"},previewText:"Aa"},"--fmxe-font-size-body-lg":{cssValue:"1.3125rem",figmaValue:"21px",cssProps:{fontSize:"1.3125rem"},previewText:"Aa"},"--fmxe-font-size-heading-1":{cssValue:"3.4375rem",figmaValue:"55px",cssProps:{fontSize:"3.4375rem"},previewText:"Aa"},"--fmxe-font-size-heading-2":{cssValue:"2.5rem",figmaValue:"40px",cssProps:{fontSize:"2.5rem"},previewText:"Aa"},"--fmxe-font-size-heading-3":{cssValue:"1.875rem",figmaValue:"30px",cssProps:{fontSize:"1.875rem"},previewText:"Aa"},"--fmxe-font-size-heading-4":{cssValue:"1.5625rem",figmaValue:"25px",cssProps:{fontSize:"1.5625rem"},previewText:"Aa"},"--fmxe-font-size-heading-5":{cssValue:"1.1875rem",figmaValue:"19px",cssProps:{fontSize:"1.1875rem"},previewText:"Aa"},"--fmxe-font-size-heading-6":{cssValue:"0.875rem",figmaValue:"14px",cssProps:{fontSize:"0.875rem"},previewText:"Aa"},"--fmxe-font-weight-normal":{cssValue:"400",figmaValue:"medium",cssProps:{fontWeight:"400"},previewText:"Aa"},"--fmxe-font-weight-semi-bold":{cssValue:"600",figmaValue:"semi-bold",cssProps:{fontWeight:"600"},previewText:"Aa"},"--fmxe-font-weight-bold":{cssValue:"700",figmaValue:"bold",cssProps:{fontWeight:"700"},previewText:"Aa"}}};function q({category:i}){let n,l;return i?(n={},n[i]=d[i],l=1):(n=d,l=Object.keys(n).length),Object.entries(n).map(([o,x])=>s.createElement("div",{key:o},l>1?s.createElement("h2",null,o):"",s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null),s.createElement("th",null,"Token"),s.createElement("th",null,"Value"),s.createElement("th",null,"Figma usage"))),s.createElement("tbody",null,Object.entries(x).map(([a,r])=>s.createElement("tr",{key:a},s.createElement("td",null,H(r)),s.createElement("td",null,s.createElement("code",null,a)),s.createElement("td",null,s.createElement("code",null,r.cssValue)),s.createElement("td",null,r.figmaValue)))))))}function H(i){return s.createElement("span",{class:"token-preview",style:i.cssProps},i.previewText)}function h(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Typography"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(n.p,{children:"Styling text to reflect the FMX brand on the web."}),`
`,e.jsx(n.h2,{id:"1-base-typography",children:"1. Base typography"}),`
`,e.jsx(n.p,{children:`Base typography provides minimum text styling as a foundation to meet the needs
of both prose content and components.`}),`
`,e.jsx(n.p,{children:`One important feature is that it removes extra margin on the last block element
within a containing block.`}),`
`,e.jsxs(n.p,{children:["FMX uses a customized version of ",e.jsx(n.a,{href:"https://necolas.github.io/normalize.css/",rel:"nofollow",children:"normalize.css"}),` as a starting point for our
styles to achieve consistency between browsers and best-practice accessibility.`]}),`
`,e.jsx(n.h3,{id:"11-headings",children:"1.1 Headings"}),`
`,e.jsx(n.p,{children:`The "major third" scale (1.25x between levels) works really well for web UI
because of the flow between type levels. This scale uses medium contrast so
fonts are not drastic in sizing and can fit in more content.`}),`
`,e.jsx(n.p,{children:"Headings follow this priority list of fonts and fallbacks:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://fonts.google.com/specimen/Hind",rel:"nofollow",children:"Hind"})}),`
`,e.jsx(n.li,{children:"sans-serif (usually Arial)"}),`
`]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h3,{id:"12-body-text",children:"1.2. Body text"}),`
`,e.jsx(n.p,{children:"Paragraphs and other body text follow this priority list of fonts and fallbacks:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://fonts.google.com/specimen/Mulish",rel:"nofollow",children:"Mulish"})," (formerly called Muli)"]}),`
`,e.jsx(n.li,{children:"sans-serif (usually Arial)"}),`
`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"13-inline-text-elements",children:"1.3 Inline text elements"}),`
`,e.jsx(n.p,{children:"Styling for common HTML inline elements."}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.p,{children:"Beware that those tags should be used for semantic purpose:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<mark>"}),` represents text which is marked or highlighted for reference or
notation purposes.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<small>"}),` represents side-comments and small print, like copyright and legal
text.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<s>"})," represents elements that are no longer relevant or no longer accurate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"13-hyperlinks",children:"1.3 Hyperlinks"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h3,{id:"14-lists",children:"1.4 Lists"}),`
`,e.jsx(n.h4,{id:"unordered-lists",children:"Unordered lists"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h4,{id:"ordered-lists",children:"Ordered lists"}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(n.h4,{id:"description-lists",children:"Description lists"}),`
`,e.jsx(n.p,{children:`A description list helps describe a glossary of terms or key/value pairs.
Description lists are preferred over bulleted lists with a bolded short phrase
followed by a lengthier description.`}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h2,{id:"2-typography-utilities",children:"2. Typography utilities"}),`
`,e.jsx(n.h3,{id:"21-text-alignment",children:"2.1 Text alignment"}),`
`,e.jsx(n.p,{children:`These utilities allow for easy adjustment of text alignment within a block
element.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".text-start"}),` aligns text to the beginning of the line (left side for LTR
languages)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".text-center"})," center-aligns text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".text-end"})," aligns text to the end of the line (right side for LTR languages)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".text-left"})," is deprecated. It should be replaced with ",e.jsx(n.code,{children:".text-start"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".text-right"})," is deprecated. It should be replaced with ",e.jsx(n.code,{children:".text-end"}),"."]}),`
`]}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(n.p,{children:`There is also a set of responsive utilities that determine which breakpoint to
start applying the alignment.`}),`
`,e.jsx(t,{of:k}),`
`,e.jsx(n.p,{children:`The responsive utilities can be combined to allow different styles for different
responsive breakpoints.`}),`
`,e.jsx(n.p,{children:`For easier readability, the ordering of the classes
should be mobile-first: default screenless class first, followed by override for
increasing screen size variants. Consider this example:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="text-center sm:text-start md:text-center lg:text-start">
</div>
`})}),`
`,e.jsx(n.h3,{id:"22-text-transform",children:"2.2 Text transform"}),`
`,e.jsx(n.p,{children:"Apply text capitalization transformations to text within the container."}),`
`,e.jsx(t,{of:T}),`
`,e.jsx(n.h3,{id:"23-forced-heading-style",children:"2.3 Forced heading style"}),`
`,e.jsx(n.p,{children:`Useful if you want to keep the correct document heading hierarchy but want for
the headings to appear at different sizes than the base styles.`}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.h3,{id:"24-font-sizes",children:"2.4 Font sizes"}),`
`,e.jsx(n.p,{children:`Quickly change the font size based on heading font sizes. Note that this only
applies font sizes and not other font styles.`}),`
`,e.jsx(t,{of:S}),`
`,e.jsx(n.h3,{id:"25-font-weights",children:"2.5 Font weights"}),`
`,e.jsx(n.p,{children:"Quickly change the font weight with these utilities."}),`
`,e.jsx(t,{of:z}),`
`,e.jsx(n.h3,{id:"26-font-styles",children:"2.6 Font styles"}),`
`,e.jsx(t,{of:V}),`
`,e.jsx(n.h3,{id:"27-blockquotes",children:"2.7 Blockquotes"}),`
`,e.jsxs(n.p,{children:[`For quoting blocks of content from another source within your document. Wrap
`,e.jsx(n.code,{children:'<blockquote class="blockquote">'}),"around any HTML as the quote."]}),`
`,e.jsx(t,{of:M}),`
`,e.jsx(n.h4,{id:"naming-a-source",children:"Naming a source"}),`
`,e.jsxs(n.p,{children:[`The HTML spec requires that blockquote attribution be placed outside the
`,e.jsx(n.code,{children:"<blockquote>"}),". When providing attribution, wrap your ",e.jsx(n.code,{children:"<blockquote>"}),` in a
`,e.jsx(n.code,{children:"<figure>"})," and use a ",e.jsx(n.code,{children:"<figcaption>"}),` with the blockquote-footer class. Be sure to
wrap the name of the source work in `,e.jsx(n.code,{children:"<cite>"})," as well."]}),`
`,e.jsx(t,{of:E}),`
`,e.jsx(n.h3,{id:"28-tight-leadingline-height",children:"2.8 Tight leading/line height"}),`
`,e.jsxs(n.p,{children:[`The default line height (leading) for our text is 1.58. Tighten line height on
shorter blocks of text by adding the `,e.jsx(n.code,{children:".text-tight"})," class."]}),`
`,e.jsx(t,{of:A}),`
`,e.jsx(n.h3,{id:"29-unstyled-lists",children:"2.9 Unstyled lists"}),`
`,e.jsx(n.p,{children:`Use this utility in the event that the content should be structured like a list
but presented without the styling of one.`}),`
`,e.jsx(t,{of:P}),`
`,e.jsx(n.h3,{id:"210-inline-lists",children:"2.10 Inline lists"}),`
`,e.jsxs(n.p,{children:[`Remove a list's bullets and apply some light margin with a combination of two
classes, `,e.jsx(n.code,{children:"list-inline"})," and ",e.jsx(n.code,{children:"list-inline-item"}),"."]}),`
`,e.jsx(t,{of:F}),`
`,e.jsx(n.h2,{id:"3-prose-typography",children:"3. Prose typography"}),`
`,e.jsxs(n.p,{children:["Adding a class of ",e.jsx(n.code,{children:".prose"}),` to a block containing content provides styling
suitable for longer-form content and builds on top of base typography styles.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Typically used for large blocks of prose or content authored through a rich
text or WYSIWYG editor. Think bodies of articles, extended descriptions, and
posts.`}),`
`,e.jsx(n.li,{children:`Provides extra space between subheadings that aren't the first element within
the block.`}),`
`,e.jsx(n.li,{children:"Adds margin below ordered and unordered list items."}),`
`,e.jsx(n.li,{children:`For maximum readability, measure does not exceed 2½ lengths of the alphabet in
the paragraph font size.`}),`
`]}),`
`,e.jsx(t,{of:U}),`
`,e.jsx(n.h2,{id:"4-typography-design-tokens",children:"4. Typography design tokens"}),`
`,e.jsx(q,{category:"typography"}),`
`,e.jsx("nav",{children:e.jsx("a",{href:"/tokens",children:"See all design tokens"})})]})}function C(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(h,{...i})}):h(i)}export{C as default};
