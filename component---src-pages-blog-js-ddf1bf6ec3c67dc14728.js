(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{vx99:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("6Gk8"),i=a("Bl7J"),c=a("vrFN"),s=a("p3AD");t.default=function(e){var t,a=e.data,l=e.location,m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.allMarkdownRemark.nodes.filter((function(e){return"/"!==e.fields.slug}));return 0===u.length?n.a.createElement(i.a,{location:l,title:m},n.a.createElement(c.a,{title:"EPI2MELabs"}),n.a.createElement(o.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(i.a,{location:l,title:m},n.a.createElement(c.a,{title:"EPI2MELabs"}),n.a.createElement(o.a,null),u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.a.createElement("article",{key:e.fields.slug,itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:Object(s.a)(1/4)}},n.a.createElement(r.Link,{style:{boxShadow:"none"},to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))})))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ddf1bf6ec3c67dc14728.js.map