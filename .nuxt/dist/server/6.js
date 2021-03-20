exports.ids = [6];
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=692738e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"home-container"},[_vm._ssrNode("<div class=\"home-page\" data-v-692738e6>","</div>",[_vm._ssrNode("<div class=\"banner\" data-v-692738e6><div class=\"container\" data-v-692738e6><h1 class=\"logo-font\" data-v-692738e6>GitHub</h1> <p data-v-692738e6>一个分享您的知识的地方</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-692738e6>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-692738e6>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-692738e6>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-692738e6>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-692738e6>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-692738e6>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"to":{ name: 'home', query: { tab: 'your_feed' } },"exact":""}},[_vm._v("我的文章")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-692738e6>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"to":{ name: 'home', query: { tab: 'global_feed' } },"exact":""}},[_vm._v("全部文章")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-692738e6>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'tag' },attrs:{"to":{ name: 'home', query: { tab: 'tag', tag: _vm.tag } }}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-692738e6>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-692738e6>","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: article.author.username } }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-692738e6>","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: article.author.username } }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-692738e6>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+" data-v-692738e6><i class=\"ion-heart\" data-v-692738e6></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount))+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: article.slug } }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-692738e6>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-692738e6>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: item === _vm.page }))+" data-v-692738e6>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ name: 'home', query: { page: item, tag: _vm.tag, tab: _vm.tab } }}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-692738e6>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-692738e6>","</div>",[_vm._ssrNode("<p data-v-692738e6>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-692738e6>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{ name: 'home', query: { tab: 'tag', tag: item } }}},[_vm._v(_vm._s(item))])}),1)],2)])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=692738e6&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js


class tag_Tag {
  // 获取所有标签列表
  getTags() {
    return request["b" /* request */].get('/api/tags');
  }

}

/* harmony default export */ var api_tag = (new tag_Tag());
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'home',
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  // 解决点击页码 重新加载 asyncData 问题
  // url 地址栏有相应参数，重新触发 asyncData
  watchQuery: ['page', 'tag', 'tab'],

  // 服务器端渲染 获取首页数据
  async asyncData({
    query,
    store
  }) {
    // 获取文章列表
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const tag = query.tag;
    const tab = query.tab || 'global_feed';
    const loadArticles = store.state.user && tab === 'your_feed' ? api_article["a" /* default */].getFeedArticles : api_article["a" /* default */].getArticles;
    const [articleRes, tagRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), api_tag.getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(e => e.favoriteDisabled = false);
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tag,
      tab: query.tab || 'global_feed'
    };
  },

  methods: {
    async onFavorite(article) {
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
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "692738e6",
  "5be2f7ae"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map