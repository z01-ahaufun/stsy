(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-audios-audios"],{"11d2":function(t,e,n){"use strict";n.r(e);var i=n("9b17"),o=n("9a4a"),a=n("52fd"),s=n("e0e4"),r=n("68f3");e["default"]={en:i,es:o,fr:a,"zh-Hans":s,"zh-Hant":r}},"36ce":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default",null,{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})],2)},a=[]},"3eb7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},onLoad:function(){},methods:{goto:function(t){uni.navigateTo({url:"/pages/audios/detail?url="+encodeURIComponent(t),success:function(t){},fail:function(){},complete:function(){}})}}};e.default=i},"43f5":function(t,e,n){"use strict";n.r(e);var i=n("51b4"),o=n("fc77");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("b48c");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"74d03d49",null,!1,i["a"],s);e["default"]=c.exports},"4af1":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2909")),a=n("37dc"),s=i(n("11d2")),r=(0,a.initVueI18n)(s.default),c=r.t,d={load:"load",error:"error"},u={add:"add",replace:"replace"},l={auto:"auto",onready:"onready",manual:"manual"},f=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],h={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return f.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==l.manual){for(var i=!1,o=2;o<e.length;o++)if(e[o]!==n[o]){i=!0;break}i&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==l.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var n=null,i=!1;"object"===typeof t?(t.clear&&(this.pageData===u.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===u.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,o=n.showToast,a=void 0===o||o,s=n.toastTitle,r=n.success,d=n.fail,u=n.complete,l=n.needConfirm,f=void 0===l||l,h=n.needLoading,p=void 0===h||h,g=n.loadingTitle,v=void 0===g?"":g;p&&uni.showLoading({title:v});var m=t.database(this.spaceInfo);i&&(m=m.action(i)),m.collection(this.mainCollection).add(e).then((function(t){r&&r(t),a&&uni.showToast({title:s||c("uniCloud.component.add.success")})})).catch((function(t){d&&d(t),f&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){p&&uni.hideLoading(),u&&u()}))},remove:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,o=n.success,a=n.fail,s=n.complete,r=n.confirmTitle,d=n.confirmContent,u=n.needConfirm,l=void 0===u||u,f=n.needLoading,h=void 0===f||f,p=n.loadingTitle,g=void 0===p?"":p;t&&t.length&&(l?uni.showModal({title:r||c("uniCloud.component.remove.showModal.title"),content:d||c("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(n){n.confirm&&e._execRemove(t,i,o,a,s,l,h,g)}}):this._execRemove(t,i,o,a,s,l,h,g))},update:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.action,a=i.showToast,s=void 0===a||a,r=i.toastTitle,d=i.success,u=i.fail,l=i.complete,f=i.needConfirm,h=void 0===f||f,p=i.needLoading,g=void 0===p||p,v=i.loadingTitle,m=void 0===v?"":v;g&&uni.showLoading({title:m});var b=t.database(this.spaceInfo);return o&&(b=b.action(o)),b.collection(this.mainCollection).doc(e).update(n).then((function(t){d&&d(t),s&&uni.showToast({title:r||c("uniCloud.component.update.success")})})).catch((function(t){u&&u(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),l&&l()}))},getTemp:function(){var e,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=t.database(this.spaceInfo);this.action&&(i=i.action(this.action)),i=(e=i).collection.apply(e,(0,o.default)(this.collectionArgs)),this.foreignKey&&(i=i.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(i=i.where(this.where)),this.field&&(i=i.field(this.field)),this.groupby&&(i=i.groupBy(this.groupby)),this.groupField&&(i=i.groupField(this.groupField)),!0===this.distinct&&(i=i.distinct()),this.orderby&&(i=i.orderBy(this.orderby));var a=this.paginationInternal,s=a.current,r=a.size,c={};this.getcount&&(c.getCount=this.getcount);var d={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(c.getTree=d),this.gettreepath&&(c.getTreePath=d),i=i.skip(r*(s-1)).limit(r),n?(i=i.getTemp(c),i.udb=this):i=i.get(c),i},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,a=t.count;this._isEnded=void 0!==a?this.paginationInternal.current*this.paginationInternal.size>=a:i.length<this.pageSize,this.hasMore=!this._isEnded;var s,r=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=a),e&&e(r,this._isEnded,this.paginationInternal),this._dispatchEvent(d.load,r),this.getone||this.pageData===u.replace)?this.dataList=r:n?this.dataList=r:(s=this.dataList).push.apply(s,(0,o.default)(r))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(d.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,i,o,a,s,r,c){var d=this;if(this.collection&&e){var l=Array.isArray(e)?e:[e];if(l.length){r&&uni.showLoading({mask:!0,title:c});var f=t.database(this.spaceInfo),h=f.command,p=f;n&&(p=p.action(n)),p.collection(this.mainCollection).where({_id:h.in(l)}).remove().then((function(t){i&&i(t.result),d.pageData===u.replace?d.refresh():d.removeData(l)})).catch((function(t){o&&o(t),s&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){r&&uni.hideLoading(),a&&a()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var o=e.indexOf(n[i]._id);o>=0&&(n.splice(i,1),e.splice(o,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=h}).call(this,n("a9ff")["default"])},"51b4":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={unicloudDb:n("960d").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("unicloud-db",{attrs:{collection:"audios_list",field:"_id,title,thumbImage,url"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data,o=e.loading,a=e.error;e.options;return[a?n("v-uni-view",[t._v(t._s(a.message))]):o?n("v-uni-view",[t._v("加载中")]):n("v-uni-view",{staticClass:"videos-box"},t._l(i,(function(e,i){return n("v-uni-view",{key:i,staticClass:"video-item-box per_2",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto(e.url)}}},[e.thumbImage?n("v-uni-image",{staticClass:"image",attrs:{src:e.thumbImage,mode:"aspectFill"}}):t._e(),n("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))])],1)})),1)]}}])})],1)},a=[]},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},"848e":function(t,e,n){"use strict";n.r(e);var i=n("4af1"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"8dd4":function(t,e,n){var i=n("d5d3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("0aa47b58",i,!0,{sourceMap:!1,shadowMode:!1})},"960d":function(t,e,n){"use strict";n.r(e);var i=n("36ce"),o=n("848e");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},b48c:function(t,e,n){"use strict";var i=n("8dd4"),o=n.n(i);o.a},d5d3:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".videos-box[data-v-74d03d49]{padding:%?25?%;display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;flex-wrap:wrap}.video-item-box[data-v-74d03d49]{width:%?210?%;text-align:center;margin:%?10?% 0 %?10?% 0}.video-item-box uni-image.image[data-v-74d03d49]{background:url(/static/ui/nopic.png) no-repeat 50% #dadada;width:100%;height:%?260?%;border-radius:%?20?%}.video-item-box uni-text.title[data-v-74d03d49]{font-size:%?28?%;color:#4b4b4b}.video-item-box.per_3[data-v-74d03d49]{width:%?220?%}.video-item-box.per_2[data-v-74d03d49]{width:%?330?%}.video-item-box.per_1[data-v-74d03d49]{width:%?700?%}.video-item-box.per_1 uni-image.image[data-v-74d03d49]{width:100%;height:%?200?%;border-radius:%?20?%}",""]),t.exports=e},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},fc77:function(t,e,n){"use strict";n.r(e);var i=n("3eb7"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}}]);