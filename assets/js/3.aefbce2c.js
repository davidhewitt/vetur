(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"linting-error-checking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting-error-checking","aria-hidden":"true"}},[t._v("#")]),t._v(" Linting / Error Checking")]),n("p",[t._v("Vetur provides error-checking and linting.")]),n("h2",{attrs:{id:"error-checking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#error-checking","aria-hidden":"true"}},[t._v("#")]),t._v(" Error Checking")]),n("p",[t._v("Vetur has error checking for the following languages:")]),n("ul",[n("li",[n("code",[t._v("<template>")]),t._v(": "),n("code",[t._v("html")])]),n("li",[n("code",[t._v("<style>")]),t._v(": "),n("code",[t._v("css")]),t._v(", "),n("code",[t._v("scss")]),t._v(", "),n("code",[t._v("less")])]),n("li",[n("code",[t._v("<script>")]),t._v(": "),n("code",[t._v("js")]),t._v(", "),n("code",[t._v("ts")])])]),n("p",[t._v("You can selectively turn error checking off by "),n("code",[t._v("vetur.validation.[template/style/script]")]),t._v(".")]),n("h2",{attrs:{id:"linting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting","aria-hidden":"true"}},[t._v("#")]),t._v(" Linting")]),n("p",[t._v("Install "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint plugin")]),t._v(" for the best linting experience. Vetur's template linting is only for quick start and does not support rule configuration.")]),n("p",[t._v("After you installed "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint plugin")]),t._v(", add "),n("code",[t._v("vue")]),t._v(" to "),n("code",[t._v("eslint.validate")]),t._v(" in VS Code config:")]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"eslint.validate"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"javascript"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"javascriptreact"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v('"language"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"vue"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v('"autoFix"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("When configured correctly, ESLint should work for both "),n("code",[t._v("<template>")]),t._v(" and "),n("code",[t._v("<script>")]),t._v(".")]),n("h4",{attrs:{id:"linting-for-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting-for-template","aria-hidden":"true"}},[t._v("#")]),t._v(" Linting for "),n("code",[t._v("<template>")])]),n("p",[t._v("Vetur automatically uses "),n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("eslint-plugin-vue")])]),t._v(" for linting "),n("code",[t._v("<template>")]),t._v(". Linting configuration is based on eslint-plugin-vue's "),n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention",target:"_blank",rel:"noopener noreferrer"}},[t._v("essential rule set")]),t._v(".")]),n("p",[t._v("To turn it off, set "),n("code",[t._v("vetur.validation.template: false")]),t._v(".")]),n("p",[t._v("To configure linting rules:")]),n("ul",[n("li",[n("p",[t._v("Turn off Vetur's template validation with "),n("code",[t._v("vetur.validation.template: false")])])]),n("li",[n("p",[n("code",[t._v("yarn add -D eslint eslint-plugin-vue")])])]),n("li",[n("p",[t._v("Set ESLint rules in "),n("code",[t._v(".eslintrc")]),t._v(". An example:")]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"extends"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"plugin:vue/recommended"')]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"vue/html-self-closing"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),n("p",[t._v("You can also checkout "),n("a",{attrs:{href:"https://github.com/octref/veturpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("Veturpack")]),t._v(" to see how to setup "),n("code",[t._v("eslint-plugin-vue")]),t._v(".")]),n("h4",{attrs:{id:"linting-typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linting-typescript","aria-hidden":"true"}},[t._v("#")]),t._v(" Linting TypeScript")]),n("p",[t._v("TSLint is not available yet. We do look forward to including it. See "),n("a",{attrs:{href:"https://github.com/vuejs/vetur/issues/170",target:"_blank",rel:"noopener noreferrer"}},[t._v("#170")]),t._v(".")]),n("p",[t._v("Meanwhile, TS compiler errors will be shown.")])])}],!1,null,null,null);e.default=s.exports}}]);