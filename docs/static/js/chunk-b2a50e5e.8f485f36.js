(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2a50e5e"],{"01c9":function(t,s,e){"use strict";e("5c84")},"2a01":function(t,s,e){"use strict";e("48f7")},"2fe2":function(t,s,e){},"3df6":function(t,s,e){},"3f85":function(t,s,e){"use strict";e("e8ba")},"48f7":function(t,s,e){},"5c84":function(t,s,e){},"6dc7":function(t,s,e){},"9e2b":function(t,s,e){"use strict";e("2fe2")},bb51:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("banner",{attrs:{isHome:"true"}}),e("div",{staticClass:"site-content animate"},[e("div",{staticClass:"notify"},[t.hideSlogan?e("div",{staticClass:"search-result"},[t.searchWords?e("span",[t._v('搜索结果："'+t._s(t.searchWords)+'" 相关文章')]):t.category?e("span",[t._v('分类 "'+t._s(t.category)+'" 相关文章')]):t._e()]):e("quote",[t._v(t._s(t.notice))])],1),t.hideSlogan?t._e():e("div",{staticClass:"top-feature"},[e("section-title",[e("div",{staticStyle:{display:"flex","align-items":"flex-end"}},[t._v("散心风景 "),e("small-ico")],1)]),e("div",{staticClass:"feature-content"},t._l(t.features,(function(t){return e("div",{key:t.title,staticClass:"feature-item"},[e("Feature",{attrs:{data:t}})],1)})),0)],1),e("main",{staticClass:"site-main",class:{search:t.hideSlogan}},[t.hideSlogan?t._e():e("section-title",[t._v("推荐")]),t._l(t.postList,(function(t){return[e("post",{key:t.id,attrs:{post:t}})]}))],2),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hasNextPage,expression:"hasNextPage"}],staticClass:"more"},[e("div",{staticClass:"more-btn",on:{click:t.loadMore}},[t._v("More")])])])],1)},i=[],n=(e("99af"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:{"home-banner":t.isHome},attrs:{id:"banner"}},[e("div",{staticClass:"banner-img",style:{"background-image":"url("+t.src+")"}},[t.isHome?[e("div",{staticClass:"focusinfo"},[e("div",{staticClass:"header-tou"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:t.websiteInfo.avatar}})])],1),e("div",{staticClass:"header-info"},[e("p",[t._v(t._s(t.websiteInfo.slogan))])]),e("div",{staticClass:"top-social"},t._l(t.socials,(function(t){return e("div",{key:t.id,attrs:{title:t.title}},[e("a",{style:{color:t.color},attrs:{href:t.href,target:"_blank"}},[e("i",{staticClass:"iconfont",class:t.icon})])])})),0)]),e("div",{staticClass:"slant-left"}),e("div",{staticClass:"slant-right"})]:t._e()],2)])}),o=[],c=e("ed08"),r={name:"banner",data:function(){return{websiteInfo:{},socials:[]}},props:{src:{type:String,default:"https://picsum.photos/1920/1080/?image="+Object(c["a"])(0,1084)},isHome:{type:[Boolean,String],default:!1}},created:function(){this.getWebSiteInfo(),this.getSocial()},methods:{getSocial:function(){var t=this;this.$store.dispatch("getSocials").then((function(s){t.socials=s}))},getWebSiteInfo:function(){var t=this;this.$store.dispatch("getSiteInfo").then((function(s){t.websiteInfo=s}))}}},l=r,u=(e("3f85"),e("2877")),f=Object(u["a"])(l,n,o,!1,null,"828e8d94",null),d=f.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"feature"},[e("a",[e("div",{staticClass:"feature-title"},[e("span",{staticClass:"foverlay"},[t._v(t._s(t.data.title))])]),e("img",{attrs:{src:t.data.img}})])])},p=[],m={name:"feature",props:{data:{type:Object,default:function(){return{title:"Akina",img:"https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature1.jpg",href:"https://zhebk.cn/Web/Akina.html"}}}}},v=m,g=(e("bd97"),Object(u["a"])(v,h,p,!1,null,"54146d01",null)),_=g.exports,b=e("fdba"),C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",{staticClass:"post post-list"},[e("div",{staticClass:"post-entry"},[e("div",{staticClass:"feature"},[e("router-link",{attrs:{to:{path:"/contents",query:{id:t.post.id}}}},[e("img",{attrs:{src:t.post.banner}})])],1),e("h1",{staticClass:"entry-title"},[e("router-link",{attrs:{to:{path:"/contents",query:{id:t.post.id}}}},[t.post.isTop?e("span",{staticStyle:{color:"#ff6d6d","font-weight":"600"}},[t._v("[置顶] ")]):t._e(),t._v(t._s(t.post.title)+" ")])],1),e("div",{staticClass:"p-time"},[e("i",{staticClass:"iconfont iconmeditor-time"}),t._v(" "+t._s(t._f("parseTime")(t.post.pubTime))),t.post.isHot?e("i",{staticClass:"iconfont iconfire",staticStyle:{"margin-left":"5px",color:"#ff6d6d"}}):t._e()]),e("p",{staticClass:"summary"},[t._v(t._s(t.post.summary))]),e("footer",{staticClass:"entry-footer"},[e("div",{staticClass:"post-more"},[e("router-link",{attrs:{to:{path:"/contents",query:{id:t.post.id}}}},[e("i",{staticClass:"iconfont iconfish-li",staticStyle:{"font-size":"25px"}})])],1),e("div",{staticClass:"info-meta"},[e("div",{staticClass:"comnum"},[e("span",[e("i",{staticClass:"iconfont iconcomment"}),e("a",{attrs:{href:"https://zhebk.cn/Web/Akina.html"}},[t._v(t._s(t.post.commentsCount)+" 条评论")])])]),e("div",{staticClass:"views"},[e("span",[e("i",{staticClass:"iconfont iconeyes"}),t._v(t._s(t.post.viewsCount)+" 热度")])])])])]),e("hr")])},y=[],k={name:"post",props:{post:{type:Object}}},w=k,x=(e("dc68"),Object(u["a"])(w,C,y,!1,null,"64310047",null)),S=x.exports,j=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",{staticClass:"loader loader-7"},[e("div",{staticClass:"line line1"}),e("div",{staticClass:"line line2"}),e("div",{staticClass:"line line3"})])])}],O={name:"small-ico"},P=O,I=(e("01c9"),Object(u["a"])(P,j,$,!1,null,"8c50d684",null)),L=I.exports,N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"quote"},[t._t("default")],2)},W=[],E={name:"quote"},q=E,H=(e("9e2b"),Object(u["a"])(q,N,W,!1,null,"8465a266",null)),z=H.exports,A=e("365c"),F={name:"Home",props:["cate","words"],data:function(){return{features:[],postList:[],currPage:1,hasNextPage:!1}},components:{Banner:d,Feature:_,sectionTitle:b["a"],Post:S,SmallIco:L,Quote:z},computed:{searchWords:function(){return this.$route.params.words},category:function(){return this.$route.params.cate},hideSlogan:function(){return this.category||this.searchWords},notice:function(){return this.$store.getters.notice}},watch:{"$route.params":function(t,s){t.words&&this.fetchList()}},methods:{fetchFocus:function(){var t=this;Object(A["b"])().then((function(s){t.features=s.data||[]})).catch((function(t){console.log(t)}))},fetchList:function(){var t=this;Object(A["c"])().then((function(s){t.postList=s.data.items||[],t.currPage=s.data.page,t.hasNextPage=s.data.hasNextPage})).catch((function(t){console.log(t)}))},loadMore:function(){var t=this;Object(A["c"])({page:this.currPage+1}).then((function(s){t.postList=t.postList.concat(s.data.items||[]),t.currPage=s.data.page,t.hasNextPage=s.data.hasNextPage}))}},mounted:function(){this.fetchFocus(),this.fetchList()}},T=F,M=(e("2a01"),Object(u["a"])(T,a,i,!1,null,"2a4d3a42",null));s["default"]=M.exports},bd97:function(t,s,e){"use strict";e("6dc7")},dc68:function(t,s,e){"use strict";e("3df6")},e8ba:function(t,s,e){}}]);
//# sourceMappingURL=chunk-b2a50e5e.8f485f36.js.map