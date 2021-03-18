exports.ids = [2];
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

}

/* harmony default export */ __webpack_exports__["a"] = (new Article());

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=223952a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"detial-container"},[_vm._ssrNode("<div class=\"article-page\">","</div>",[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=223952a2&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleMeta.vue?vue&type=template&id=280f852b&
var articleMetavue_type_template_id_280f852b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: _vm.article.author.username } }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{ name: 'profile', params: { username: _vm.article.author.username } }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.following }))+"><i class=\"ion-plus-round\"></i>\n      Follow Eric Simons <span class=\"counter\">(10)</span></button>\n    \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.author.favorited }))+"><i class=\"ion-heart\"></i>\n      Favorite Post <span class=\"counter\">(29)</span></button>")],2)}
var articleMetavue_type_template_id_280f852b_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue?vue&type=template&id=280f852b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleMeta.vue?vue&type=script&lang=js&
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
/* harmony default export */ var articleMetavue_type_script_lang_js_ = ({
  name: 'articleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleMetavue_type_script_lang_js_ = (articleMetavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articleMetavue_type_script_lang_js_,
  articleMetavue_type_template_id_280f852b_render,
  articleMetavue_type_template_id_280f852b_staticRenderFns,
  false,
  null,
  null,
  "6abb977f"
  
)

/* harmony default export */ var articleMeta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleComments.vue?vue&type=template&id=232bd6e6&
var articleCommentsvue_type_template_id_232bd6e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-8 offset-md-2"},[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile', params: { username: comment.author.username } }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile', params: { username: comment.author.username } }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt)))+"</span>")],2)],2)})],2)}
var articleCommentsvue_type_template_id_232bd6e6_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleComments.vue?vue&type=template&id=232bd6e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleComments.vue?vue&type=script&lang=js&
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

/* harmony default export */ var articleCommentsvue_type_script_lang_js_ = ({
  name: 'articleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: []
    };
  },

  mounted() {
    this.getComments();
  },

  methods: {
    async getComments() {
      const {
        data
      } = await api_article["a" /* default */].getComments(this.article.slug);
      this.comments = data.comments;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/articleComments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleCommentsvue_type_script_lang_js_ = (articleCommentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/articleComments.vue





/* normalize component */

var articleComments_component = Object(componentNormalizer["a" /* default */])(
  components_articleCommentsvue_type_script_lang_js_,
  articleCommentsvue_type_template_id_232bd6e6_render,
  articleCommentsvue_type_template_id_232bd6e6_staticRenderFns,
  false,
  null,
  null,
  "5e9d4eee"
  
)

/* harmony default export */ var articleComments = (articleComments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'article',

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  components: {
    articleMeta: articleMeta,
    ArticleComments: articleComments
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await api_article["a" /* default */].getArticle(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a(); // markdown -> html

    article.body = md.render(article.body);
    return {
      article
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "463f2dd0"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map