import{j as x}from"./jsx-runtime-BjG_zV1W.js";import{c as z}from"./clsx-B-dksMZM.js";import{S as _}from"./index-Dv5ta01n.js";import"./index-DZ_CqB28.js";import"./_commonjsHelpers-Cpj98o6Y.js";function b({size:t="md",children:C,asChild:y,className:T}){const S=y?_:"h2";return x.jsx(S,{className:z("text-gray-100 font-bold font-sans",{"text-lg":t=="sm","text-xl":t=="md","text-2xl":t=="lg"},T),children:C})}b.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Components/Heading",component:b,args:{children:"Lorem Ipsum",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},asChild:{table:{disable:!0}}}},e={},s={args:{size:"sm"}},r={args:{size:"lg"}},a={args:{asChild:!0,children:x.jsx("h1",{children:"Text with h1 tag"})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <h1>Text with h1 tag</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const L=["Default","Small","Large","CustomComponent"];export{a as CustomComponent,e as Default,r as Large,s as Small,L as __namedExportsOrder,w as default};
