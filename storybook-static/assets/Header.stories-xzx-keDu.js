import{c as s}from"./Header-BvD3VdEM.js";import"./Button-NMr-KkIJ.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,c={title:"Example/Header",tags:["autodocs"],render:a=>s(a),parameters:{layout:"fullscreen"},args:{onLogin:o(),onLogout:o(),onCreateAccount:o()}},e={args:{user:{name:"Jane Doe"}}},r={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const d=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,d as __namedExportsOrder,c as default};
