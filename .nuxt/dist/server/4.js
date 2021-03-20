exports.ids = [4];
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=0edde8c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"detial-container"},[_vm._ssrNode("<div class=\"article-page\">","</div>",[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"data":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"data":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_c('article-comments',{attrs:{"data":_vm.article}})],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=0edde8c0&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleMeta.vue?vue&type=template&id=61a9e820&
var articleMetavue_type_template_id_61a9e820_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: _vm.data.author.username } }}},[_c('img',{attrs:{"src":_vm.data.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{ name: 'profile', params: { username: _vm.data.author.username } }}},[_vm._v(_vm._s(_vm.data.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.data.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.data.author.following }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.isMyUser ? '编辑' : '关注')+" ")+((!_vm.isMyUser)?("<span class=\"counter\">(0)</span>"):"<!---->")+"</button>\n    \n  <button"+(_vm._ssrAttr("disabled",_vm.data.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.data.author.favorited, 'btn-outline-danger': _vm.isMyUser }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.isMyUser ? '删除' : '点赞')+" ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.data.favoritesCount)+")")+"</span></button>")],2)}
var articleMetavue_type_template_id_61a9e820_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue?vue&type=template&id=61a9e820&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

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
    data: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    isMyUser() {
      return this.user.username === this.data.author.username;
    }

  },
  methods: {
    goPage() {
      if (this.isMyUser) this.$router.push({
        path: '/editor',
        query: {
          id: this.data.slug
        }
      });
    },

    async deleteArticle(id) {
      const article = this.data;

      if (this.isMyUser) {
        await api_article["a" /* default */].deleteArticle(id);
        window.location.reload();
      } else {
        article.favoriteDisabled = true;

        if (article.favorited) {
          // 取消点赞
          await api_article["a" /* default */].deleteFavorite(article.slug);
          article.favorited = false;
          article.favoritesCount -= 1;
        } else {
          // 添加点赞
          await api_article["a" /* default */].addFavorite(article.slug);
          article.favorited = true;
          article.favoritesCount += 1;
        }

        article.favoriteDisabled = false;
      }
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
  articleMetavue_type_template_id_61a9e820_render,
  articleMetavue_type_template_id_61a9e820_staticRenderFns,
  false,
  null,
  null,
  "2bfd358f"
  
)

/* harmony default export */ var articleMeta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleComments.vue?vue&type=template&id=3cf4a065&
var articleCommentsvue_type_template_id_3cf4a065_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-8 offset-md-2"},[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"文明发言...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">提交评论</button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile', params: { username: comment.author.username } }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'profile', params: { username: comment.author.username } }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt)))+"</span>")],2)],2)})],2)}
var articleCommentsvue_type_template_id_3cf4a065_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleComments.vue?vue&type=template&id=3cf4a065&

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
    data: {
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
      } = await api_article["a" /* default */].getComments(this.data.slug);
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
  articleCommentsvue_type_template_id_3cf4a065_render,
  articleCommentsvue_type_template_id_3cf4a065_staticRenderFns,
  false,
  null,
  null,
  "4ac164fe"
  
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
      title: `${this.article.title} - 三月风`,
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
  "0008a908"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map