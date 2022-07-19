"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4401],{4401:function(e,a,t){t.r(a),t(7378);var n=t(2682);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",s({components:a},t),(0,n.kt)("p",null,"Configuring the ",(0,n.kt)("inlineCode",{parentName:"p"},"output")," configuration options tells webpack how to write the compiled files to disk. Note that, while there can be multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," points, only one ",(0,n.kt)("inlineCode",{parentName:"p"},"output")," configuration is specified."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"usage",parentName:"h2"}),"Usage",(0,n.kt)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"The minimum requirement for the ",(0,n.kt)("inlineCode",{parentName:"p"},"output")," property in your webpack configuration is to set its value to an object and provide an ",(0,n.kt)("a",{href:"/configuration/output/#outputfilename",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"output.filename"))," to use for the output file(s):"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'bundle.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"This configuration would output a single ",(0,n.kt)("inlineCode",{parentName:"p"},"bundle.js")," file into the ",(0,n.kt)("inlineCode",{parentName:"p"},"dist")," directory."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"multiple-entry-points",parentName:"h2"}),"Multiple Entry Points",(0,n.kt)("a",{href:"#multiple-entry-points","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,'If your configuration creates more than a single "chunk" (as with multiple entry points or when using plugins like CommonsChunkPlugin), you should use ',(0,n.kt)("a",{href:"/configuration/output/#outputfilename",parentName:"p"},"substitutions")," to ensure that each file has a unique name."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    app",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/app.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    search",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/search.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'[name].js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    path",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," __dirname ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"+")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'/dist'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// writes to disk: ./dist/app.js, ./dist/search.js"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"advanced",parentName:"h2"}),"Advanced",(0,n.kt)("a",{href:"#advanced","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Here's a more complicated example of using a CDN and hashes for assets:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    path",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'/home/proj/cdn/assets/[fullhash]'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    publicPath",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'https://cdn.example.com/assets/[fullhash]/'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"In cases where the eventual ",(0,n.kt)("inlineCode",{parentName:"p"},"publicPath")," of output files isn't known at compile time, it can be left blank and set dynamically at runtime via the ",(0,n.kt)("inlineCode",{parentName:"p"},"__webpack_public_path__")," variable in the entry point file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"__webpack_public_path__ ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," myRuntimePublicPath",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// rest of your application entry"))))}p.isMDXComponent=!0,a.default=p}}]);