exports.ids = [7];
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/login.vue?vue&type=template&id=8967f9cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"login-container"},[_vm._ssrNode("<div class=\"auth-page\">","</div>",[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? '登录' : '注册'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("需要一个帐户吗?")]):_vm._e(),_vm._ssrNode(" "),(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("已经有账户?")]):_vm._e()],2),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.isLogin ? '登录' : '注册')+"\n            ")+"</button></form>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/login.vue?vue&type=template&id=8967f9cc&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/login.vue?vue&type=script&lang=js&
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
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticated',
  name: 'login',

  data() {
    return {
      user: {
        username: '',
        email: 'sanyue@qq.com',
        password: 'bb123456'
      },
      errors: {} // 错误信息

    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        // 登录
        const {
          data
        } = this.isLogin ? await user["a" /* default */].login({
          user: this.user
        }) : await user["a" /* default */].register({
          user: this.user
        }); // 保存用户的登录状态

        this.$store.commit('setUser', data.user); // 为了防止刷新页面数据丢失，我们需要把数据持久化

        Cookie.set('user', data.user); // 登录成功跳转到首页

        if (data) this.$router.push('/');
      } catch (err) {
        this.errors = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0b7d2e6e"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map