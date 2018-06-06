(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{63:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),s("h2",{attrs:{id:"no-syntax-highlighting-no-language-features-working"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-syntax-highlighting-no-language-features-working","aria-hidden":"true"}},[t._v("#")]),t._v(" No Syntax Highlighting & No Language Features working")]),s("p",[t._v("This is probably caused by VS Code not installing Vetur properly. Try these methods:")]),s("ul",[s("li",[t._v("Run command: "),s("code",[t._v("Developer: Reinstall Extension")]),t._v(" for Vetur.")]),s("li",[t._v("Remove Vetur in your "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_common-questions",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions folder")]),t._v(" and do a clean reinstall.")]),s("li",[t._v("(Windows): Try reinstall Vetur with admin permission.")]),s("li",[t._v("If nothing above works, download the "),s("a",{attrs:{href:"https://github.com/vuejs/vetur/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("latest pre-packaged vsix file")]),t._v(" and "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix",target:"_blank",rel:"noopener noreferrer"}},[t._v("install through vsix")]),t._v(".")])]),s("h2",{attrs:{id:"vetur-crash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vetur-crash","aria-hidden":"true"}},[t._v("#")]),t._v(" Vetur Crash")]),s("ul",[s("li",[s("p",[t._v("If it says "),s("code",[t._v("cannot find module <some-module>")]),t._v(", go to Vetur's client code installation directory and run "),s("code",[t._v("yarn")]),t._v(" or "),s("code",[t._v("npm install")]),t._v(".\nThis is usually caused by VS Code not correctly updating Vetur's dependencies from version to version.\nPaths:")]),s("ul",[s("li",[t._v("Win: "),s("code",[t._v("%USERPROFILE%\\.vscode\\extensions\\octref.vetur-<version>\\client")])]),s("li",[t._v("Mac: "),s("code",[t._v("~/.vscode/extensions/octref.vetur-<version>/client")])]),s("li",[t._v("Linux: "),s("code",[t._v("~/.vscode/extensions/octref.vetur-<version>/client")])])]),s("p",[t._v("You can also try uninstall/reinstall Vetur."),s("br"),t._v("\nMore details at: https://github.com/vuejs/vetur/issues/352#issuecomment-318168811")])]),s("li",[s("p",[t._v("If it says problem related to memory and cpu, try to add a "),s("code",[t._v("jsconfig.json")]),t._v(" or "),s("code",[t._v("tsconfig.json")]),t._v(" and only include Vue-related code: https://vuejs.github.io/vetur/setup.html")])])]),s("h2",{attrs:{id:"vetur-can-t-recognize-components-imported-using-webpack-s-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vetur-can-t-recognize-components-imported-using-webpack-s-alias","aria-hidden":"true"}},[t._v("#")]),t._v(" Vetur can't recognize components imported using webpack's alias")]),s("ul",[s("li",[s("p",[t._v("You need to setup path mapping in "),s("code",[t._v("jsconfig.json")]),t._v(" or "),s("code",[t._v("tsconfig.json")]),t._v(": https://www.typescriptlang.org/docs/handbook/module-resolution.html. For example:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// Webpack")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alias"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v("'@'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'src'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("// tsconfig.json\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"baseUrl"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"paths"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v('"@/*"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"src/*"')]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("li",[s("p",[t._v("You need to add "),s("code",[t._v(".vue")]),t._v(" extension when importing SFC.")])])]),s("p",[t._v("More details at: https://github.com/vuejs/vetur/issues/423")]),s("h2",{attrs:{id:"vue-file-cannot-be-imported-in-ts-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-file-cannot-be-imported-in-ts-file","aria-hidden":"true"}},[t._v("#")]),t._v(" .vue file cannot be imported in TS file.")]),s("p",[t._v("You need to add "),s("code",[t._v("declare module '*.vue'")]),t._v(" in your dts files: https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components.")]),s("h2",{attrs:{id:"formatting-doesn-t-work-in-template-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatting-doesn-t-work-in-template-section","aria-hidden":"true"}},[t._v("#")]),t._v(" Formatting doesn't work in template section.")]),s("p",[t._v("Vetur by default does "),s("strong",[t._v("not")]),t._v(" format html."),s("br"),t._v("\nSee https://github.com/vuejs/vetur/blob/master/CHANGELOG.md#vetur-formatting-changes for more detail.")]),s("p",[t._v("If template still gets no formatting after enabling js-beautify, it is probably caused by "),s("a",{attrs:{href:"https://github.com/prettier/prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier-vscode")]),t._v(" extension."),s("br"),t._v("\nYou can disable it for Vue: https://github.com/prettier/prettier-vscode#prettierdisablelanguages-default-")]),s("h2",{attrs:{id:"install-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-from-source","aria-hidden":"true"}},[t._v("#")]),t._v(" Install from source.")]),s("p",[t._v("To build and install the extension from source, you need to install "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/extensions/publish-extension",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("vsce")])]),t._v(".")]),s("p",[t._v("Then, clone the repository and compile it.")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone https://github.com/vuejs/vetur\ncd vetur\nyarn \ncd server && yarn && yarn compile \ncd ../ && yarn compile \nvsce package\n")])]),s("p",[t._v("Now you'll find "),s("code",[t._v("vetur-{version}.vsix")]),t._v(', you can install it by editor command "Install from VSIX".')])])}],!1,null,null,null);e.default=a.exports}}]);