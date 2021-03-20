exports.ids = [2];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


class User {
  // 用户登录
  login(data) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post('/api/users/login', data);
  } // 用户注册


  register(data) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post('/api/users', data);
  } // 设置用户信息


  settingUser(data) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].put('/api/user', data);
  }
  /**
   * @description 根据用户名获取用户信息
   * @param {string} name 
   * @returns 
   */


  getProfiles(name) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/profiles/${name}`);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new User());

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("6692527c", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72741832_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72741832_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72741832_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72741832_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72741832_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settings-container .btn-logout[data-v-72741832]{margin-top:60px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=72741832&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"settings-container"},[_vm._ssrNode("<div class=\"settings-page\" data-v-72741832><div class=\"container page\" data-v-72741832><div class=\"row\" data-v-72741832><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-72741832><h1 class=\"text-xs-center\" data-v-72741832>Your Settings</h1> <form data-v-72741832><fieldset data-v-72741832><fieldset class=\"form-group\" data-v-72741832><input type=\"text\" placeholder=\"头像的 URL\""+(_vm._ssrAttr("value",(_vm.userinfo.image)))+" class=\"form-control\" data-v-72741832></fieldset> <fieldset class=\"form-group\" data-v-72741832><input type=\"text\" placeholder=\"用户名\""+(_vm._ssrAttr("value",(_vm.userinfo.username)))+" class=\"form-control form-control-lg\" data-v-72741832></fieldset> <fieldset class=\"form-group\" data-v-72741832><textarea rows=\"8\" placeholder=\"个性签名\" class=\"form-control form-control-lg\" data-v-72741832>"+_vm._ssrEscape(_vm._s(_vm.userinfo.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-72741832><input type=\"text\" placeholder=\"邮箱地址\""+(_vm._ssrAttr("value",(_vm.userinfo.email)))+" class=\"form-control form-control-lg\" data-v-72741832></fieldset> <fieldset class=\"form-group\" data-v-72741832><input type=\"password\" placeholder=\"密码\""+(_vm._ssrAttr("value",(_vm.userinfo.password)))+" class=\"form-control form-control-lg\" data-v-72741832></fieldset> <button class=\"btn btn-primary pull-xs-right\" data-v-72741832>更新设置</button></fieldset></form> <button class=\"btn btn-outline-danger btn-block btn-logout\" data-v-72741832>退出登录</button></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=72741832&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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

 // 仅在客户端加载 js-cookie 包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'settings',

  data() {
    return {
      userinfo: {
        bio: '',
        email: '',
        image: '',
        password: '',
        username: ''
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  created() {
    this.setUserinfo();
  },

  methods: {
    logout() {
      Cookie.set('user', null);
      window.location = '/';
    },

    async settingUser() {
      const {
        data
      } = await user["a" /* default */].settingUser({
        user: this.userinfo
      });

      if (data) {
        // 保存用户的登录状态
        this.$store.commit('setUser', data.user); // 为了防止刷新页面数据丢失，我们需要把数据持久化

        Cookie.set('user', data.user);
        this.$router.push({
          name: 'profile',
          params: {
            username: this.user.username
          }
        });
      }
    },

    setUserinfo() {
      const {
        user,
        userinfo
      } = this;
      userinfo.username = user.username;
      userinfo.bio = user.bio;
      userinfo.email = user.email;
      userinfo.image = user.image;
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72741832",
  "c0c32f26"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map