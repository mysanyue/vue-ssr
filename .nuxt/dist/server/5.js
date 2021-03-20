exports.ids = [5];
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=69f9cc80&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"editor-container"},[_vm._ssrNode("<div class=\"editor-page\"><div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"文章标题\""+(_vm._ssrAttr("value",(_vm.params.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"文章描述\""+(_vm._ssrAttr("value",(_vm.params.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"文章内容 - markdown 格式\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.params.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"文章标签 - 多个以逗号分隔 (英文逗号)\""+(_vm._ssrAttr("value",(_vm.tagList)))+" class=\"form-control\"> <div class=\"tag-list\"></div></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.isLoading))+" type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">"+_vm._ssrEscape(_vm._s(_vm.id ? '重新发布' : '发布一篇'))+"</button></fieldset></form></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=69f9cc80&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'editor',

  data() {
    return {
      id: null,
      isLoading: false,
      params: {
        title: '',
        description: '',
        body: ''
      },
      tagList: ''
    };
  },

  mounted() {
    this.id = this.$route.query.id;
    if (this.id) this.getArticleDetail();
  },

  methods: {
    async publish() {
      this.tagList.replace(/，/g, ',');
      this.params.tagList = this.tagList.split(',');

      if (this.id) {
        const ret = await article["a" /* default */].updateArticle(this.id, {
          article: this.params
        });
        if (ret.data) this.$router.go(-1);
      } else {
        const ret = await article["a" /* default */].addArticle({
          article: this.params
        });
        if (ret.data) this.$router.push('/');
      }
    },

    async getArticleDetail() {
      const ret = await article["a" /* default */].getArticle(this.id);
      const {
        title,
        description,
        body,
        tagList
      } = ret.data.article;
      this.params.title = title;
      this.params.description = description;
      this.params.body = body;
      this.tagList = tagList.join(',');
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3a88af92"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map