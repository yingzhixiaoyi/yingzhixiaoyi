(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9869f10"],{1704:function(t,e,i){"use strict";i("ef7a")},"2fe2":function(t,e,i){},"5ac0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"friend"},[i("div",{staticClass:"site-content"},[i("section-title",[i("div",{staticClass:"friend-header"},[i("div",{staticClass:"title"},[t._v("友链")]),i("a",{on:{click:t.go}},[t._v("跳转")]),i("div",{staticClass:"apply"},[i("router-link",{attrs:{to:"/about#Guestbook"}},[t._v("+ 加入")])],1)])]),i("div",{staticClass:"statement"},[i("p",[t._v("首先将需要接入本博客站点，然后给我 "),i("router-link",{attrs:{to:"/about#Guestbook"}},[t._v("留言")]),t._v(" 提供您站点的如下信息： ")],1),i("quote",[i("p",[t._v("站点名称："+t._s(t.websiteInfo.name))]),i("p",[t._v("站点链接："+t._s(t.websiteInfo.domain))]),i("p",[t._v("简短描述："+t._s(t.websiteInfo.desc))])]),i("p",[t._v("接入成功后将会以邮件的方式通知。")])],1),i("hr"),i("div",{staticClass:"friend-list animate"},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"friend-item"},[i("a",{attrs:{href:e.path,target:"_blank"}},[i("div",{staticClass:"site-name"},[t._v(t._s(e.siteName))]),i("div",{staticClass:"site-detail"},[t._v(t._s(e.desc))])])])})),0)],1)])},n=[],a=i("fdba"),o=i("c119"),c=i("365c"),u={name:"Friend",data:function(){return{websiteInfo:{},list:[]}},components:{Quote:o["a"],sectionTitle:a["a"]},methods:{go:function(){this.$router.push("/demo")},fetchFriend:function(){var t=this;Object(c["d"])().then((function(e){t.list=e.data||[]})).catch((function(t){console.log(t)}))},getWebSiteInfo:function(){var t=this;this.$store.dispatch("getSiteInfo").then((function(e){t.websiteInfo=e}))}},mounted:function(){this.getWebSiteInfo(),this.fetchFriend()}},r=u,f=(i("1704"),i("2877")),l=Object(f["a"])(r,s,n,!1,null,"3ce4765a",null);e["default"]=l.exports},"9e2b":function(t,e,i){"use strict";i("2fe2")},c119:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quote"},[t._t("default")],2)},n=[],a={name:"quote"},o=a,c=(i("9e2b"),i("2877")),u=Object(c["a"])(o,s,n,!1,null,"8465a266",null);e["a"]=u.exports},ef7a:function(t,e,i){}}]);
//# sourceMappingURL=chunk-a9869f10.2bd0f10d.js.map