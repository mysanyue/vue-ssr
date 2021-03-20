exports.ids = [3];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("19da9b2b", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22a91ed8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22a91ed8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22a91ed8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22a91ed8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_22a91ed8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".layout-container .userinfo img[data-v-22a91ed8]{width:25px;height:25px;border-radius:50%}.layout-container .footer-container .container[data-v-22a91ed8]:after{display:block;content:\"\";clear:both}.layout-container .footer-container .author[data-v-22a91ed8]{float:left}.layout-container .footer-container .author .logo-font[data-v-22a91ed8]{margin-right:20px}.layout-container .footer-container .author .attribution a[data-v-22a91ed8]{margin-left:10px}.layout-container .footer-container .design[data-v-22a91ed8]{float:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=template&id=22a91ed8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"layout-container"},[_vm._ssrNode("<nav class=\"navbar navbar-light\" data-v-22a91ed8>","</nav>",[_vm._ssrNode("<div class=\"container\" data-v-22a91ed8>","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",attrs:{"to":"/"}},[_vm._v("三月风")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\" data-v-22a91ed8>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-22a91ed8>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/","exact":""}},[_vm._v("首页")])],1),_vm._ssrNode(" "),(_vm.user)?[_vm._ssrNode("<li class=\"nav-item\" data-v-22a91ed8>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/editor"}},[_c('i',{staticClass:"ion-compose"}),_vm._v(" 发一篇")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-22a91ed8>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" 设置")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item userinfo\" data-v-22a91ed8>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{ name: 'profile', params: { username: _vm.user.username } }}},[_c('img',{attrs:{"src":_vm.user.image}}),_vm._v("\n              "+_vm._s(_vm.user.username)+"\n            ")])],1)]:[_vm._ssrNode("<li class=\"nav-item\" data-v-22a91ed8>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/login"}},[_vm._v("登录")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-22a91ed8>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/register"}},[_vm._v("注册")])],1)]],2)],2)]),_vm._ssrNode(" "),_c('nuxt-child'),_vm._ssrNode(" <footer class=\"footer-container\" data-v-22a91ed8><div class=\"container\" data-v-22a91ed8><p class=\"author\" data-v-22a91ed8><a href=\"/\" class=\"logo-font\" data-v-22a91ed8>三月风</a> <span class=\"attribution\" data-v-22a91ed8>一个互动学习项目 <a href=\"https://www.58taoweb.com\" data-v-22a91ed8>mysanyue</a></span></p> <p class=\"design\" data-v-22a91ed8>Code &amp; design licensed under MIT.</p></div></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=template&id=22a91ed8&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: 'layout',
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/layout/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22a91ed8",
  "65318c98"
  
)

/* harmony default export */ var layout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map