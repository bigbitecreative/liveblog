!function(e){function t(l){if(n[l])return n[l].exports;var i=n[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=815)}({815:function(e,t,n){"use strict";!function(){var e=window.wp.i18n.__,t=window.wp.blocks.registerBlockType,n=window.wp.components.Button;t("gutenberg/liveblog",{title:e("Liveblog"),icon:"universal-access-alt",category:"widgets",useOnce:!0,customClassName:!1,html:!1,attributes:{status:{type:"string",default:"0"},showOptions:{type:"string",default:"show"}},edit:function(e){var t=e.attributes,l=e.className,i=e.setAttributes,a=e.focus,s=t.status,r=a?"show":"hide",o=function(e){return i({status:e})},c=void 0;switch(s){case"enable":c="enabled";break;case"archive":c="archived";break;default:c="disabled"}var u={show:{display:"block"},hide:{display:"none"}};return React.createElement("section",{className:l},React.createElement("h2",null,"Liveblog"),React.createElement("p",null,"Liveblog is currently ",React.createElement("strong",null,c),".",React.createElement("br",null),React.createElement("small",{style:{color:"#666",display:a?"none":"block"}},React.createElement("em",null,"(Focus on this block to change this)"))),React.createElement("div",{style:u[r]},React.createElement("div",{style:u["enable"===s?"hide":"show"]},React.createElement(n,{isPrimary:!0,onClick:function(){return o("enable")}},"Enable Liveblog"),React.createElement("p",null,"Enables liveblog on this post. Posting tools are enabled for editors, visitors get the latest updates.")),React.createElement("div",{style:u["archive"===s?"hide":"show"]},React.createElement(n,{isLarge:!0,onClick:function(){return o("archive")}},"Archive Liveblog"),React.createElement("p",null,"Archives the liveblog on this post. Visitors still see the liveblog entries, but posting tools are hidden.")),React.createElement("div",{style:u["0"===s?"hide":"show"]},React.createElement(n,{isLarge:!0,onClick:function(){return o("0")}},"Disable Liveblog"),React.createElement("p",null,"Disables the liveblog on this post. Everything is hidden."))))},save:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.attributes;t=void 0===t?{}:t;var n=t.status;return'[liveblog status="'+(void 0===n?0:n)+'" /]'}})}()}});