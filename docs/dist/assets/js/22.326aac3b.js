(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{314:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tron"}},[t._v("#")]),t._v(" Tron")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.tron.network/docs/tronlink-integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tronlink dapp"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"installed-or-not"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installed-or-not"}},[t._v("#")]),t._v(" Installed or not")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isSafePalInstalled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SafePalHook "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tronWeb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"tron-requestaccounts-request-authorization-to-connect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tron-requestaccounts-request-authorization-to-connect"}},[t._v("#")]),t._v(" tron_requestAccounts(request authorization to connect)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" SafePalHook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tron_requestAccounts'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" address "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SafePalHook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base58"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" tronWeb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBalance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"connected"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connected"}},[t._v("#")]),t._v(" connected")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tronWeb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ready"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"sendtransaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sendtransaction"}},[t._v("#")]),t._v(" sendTransaction")]),t._v(" "),s("p",[t._v("SafePal wallet currently only supports the TriggerSmartContract method, please refer to:"),s("a",{attrs:{href:"https://developers.tron.network/reference/tronweb-triggersmartcontract",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.tron.network/reference/tronweb-triggersmartcontract"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);