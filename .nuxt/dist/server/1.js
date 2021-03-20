exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


class Article {
  /**
   * @description 获取公共文章列表
   * @param { object } params 
   * @returns 
   */
  getArticles(params) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get('/api/articles', {
      params
    });
  }
  /**
   * @description 获取关注的文章列表 
   * @param { object } params 
   * @returns 
   */
  // 获取公共文章列表


  getFeedArticles(params) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get('/api/articles/feed', {
      params
    });
  }
  /**
   * @description 添加点赞功能
   * @param {string} params 
   * @returns 
   */


  addFavorite(slug) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/articles/${slug}/favorite`);
  }
  /**
   * @description 取消点赞功能
   * @param {string} params 
   * @returns 
   */


  deleteFavorite(slug) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/articles/${slug}/favorite`);
  }
  /**
   * @description 获取文章详情
   * @param {string} slug 
   * @returns 
   */


  getArticle(slug) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/articles/${slug}`);
  }
  /**
   * @description 获取文章品论
   * @param {string} slug 
   * @returns 
   */


  getComments(slug) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/articles/${slug}/comments`);
  }
  /**
   * @description 添加文章
   * @param {object} params 
   * @returns 
   */


  addArticle(params) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post('/api/articles', params);
  }
  /**
   * @description 修改文章
   * @param {object} params 
   * @returns 
   */


  updateArticle(id, params) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].put(`/api/articles/${id}`, params);
  }
  /**
   * @description 删除一篇文章
   * @param {string} id 
   * @returns 
   */


  deleteArticle(id) {
    return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/articles/${id}`);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new Article());

/***/ }),

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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("db82633c", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("45b10e48", content, true, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleList_vue_vue_type_style_index_0_id_7cc2c608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleList_vue_vue_type_style_index_0_id_7cc2c608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleList_vue_vue_type_style_index_0_id_7cc2c608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleList_vue_vue_type_style_index_0_id_7cc2c608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleList_vue_vue_type_style_index_0_id_7cc2c608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul[data-v-7cc2c608]{padding:0}li[data-v-7cc2c608]{list-style:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f20404f4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f20404f4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f20404f4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f20404f4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f20404f4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".user-container .nav-link[data-v-f20404f4]{cursor:pointer!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=f20404f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"user-container"},[_vm._ssrNode("<div class=\"profile-page\" data-v-f20404f4>","</div>",[_vm._ssrNode("<div class=\"user-info\" data-v-f20404f4>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-f20404f4>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-f20404f4>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-f20404f4>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"user-img\" data-v-f20404f4> <h4 data-v-f20404f4>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</h4> <p data-v-f20404f4>"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</p> "),_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n                Edit Profile Settings\n            ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-f20404f4>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-f20404f4>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-f20404f4>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-f20404f4>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-f20404f4>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-f20404f4>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'my' },attrs:{"to":{ name: 'profile', params: { username: _vm.user.username }, query: { tab: 'my' } },"exact":""}},[_vm._v("我发布的文章")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-f20404f4>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'fav' },attrs:{"to":{ name: 'profile', params: { username: _vm.user.username }, query: { tab: 'fav' } },"exact":""}},[_vm._v("我点赞的文章")])],1)],2)]),_vm._ssrNode(" "),_c('article-list',{attrs:{"articles":_vm.articles}})],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=f20404f4&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/articleList.vue?vue&type=template&id=7cc2c608&scoped=true&
var articleListvue_type_template_id_7cc2c608_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',_vm._l((_vm.articles),function(article){return _vm._ssrNode("<li class=\"article-preview\" data-v-7cc2c608>","</li>",[_vm._ssrNode("<div class=\"article-meta\" data-v-7cc2c608>","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: article.author.username } }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-7cc2c608>","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: article.author.username } }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-7cc2c608>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+" data-v-7cc2c608><i class=\"ion-heart\" data-v-7cc2c608></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount))+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: article.slug } }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),0)}
var articleListvue_type_template_id_7cc2c608_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/articleList.vue?vue&type=template&id=7cc2c608&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/articleList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var articleListvue_type_script_lang_js_ = ({
  name: 'articleList',
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/articleList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleListvue_type_script_lang_js_ = (articleListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/articleList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articleListvue_type_script_lang_js_,
  articleListvue_type_template_id_7cc2c608_scoped_true_render,
  articleListvue_type_template_id_7cc2c608_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "7cc2c608",
  "471f6e2c"
  
)

/* harmony default export */ var articleList = (component.exports);
// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  components: {
    articleList: articleList
  },
  middleware: 'authenticated',
  name: 'profile',

  data() {
    return {};
  },

  // 解决点击页码 重新加载 asyncData 问题
  // url 地址栏有相应参数，重新触发 asyncData
  watchQuery: ['tab'],

  async asyncData({
    params,
    query,
    store
  }) {
    // 获取文章列表
    const page = Number.parseInt(params.page || 1);
    const limit = 20;
    const author = params.username;
    const tab = query.tab;
    let user = null;
    const userRet = await api_user["a" /* default */].getProfiles(author);
    if (userRet) user = userRet.data.profile;
    const ret = await article["a" /* default */].getArticles({
      limit,
      favorited: query.tab === 'fav' ? author : void 0,
      author: query.tab === 'fav' ? void 0 : author,
      offset: (page - 1) * limit
    });
    const {
      articles,
      articlesCount
    } = ret.data; // articles.forEach(e => e.favoriteDisabled = false)

    return {
      articles,
      articlesCount,
      limit,
      page,
      tab: tab || 'my',
      user
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/profile/index.vue



function profile_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var profile_component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  profile_injectStyles,
  "f20404f4",
  "2ba73c0a"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (profile_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map