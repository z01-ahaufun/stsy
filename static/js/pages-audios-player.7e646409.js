(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-audios-player"],{"078e":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{url:null,index:null,whereStr:!1,item:null}},onLoad:function(i){t("log","opt: ",i," at pages/audios/player.vue:39"),i.url?this.url=JSON.parse(i.url):this.url="https://www.xuexi.cn/08dc6c56d8f7d4e0873e709a7a84b669/8b1465615bf037425af76b2557c885cd.html",i.index?this.index=JSON.parse(i.index):this.index=1,this.whereStr='url=="'+this.url+'"'},methods:{handleLoad:function(t,i,e){this.item=t.subItem[this.index],uni.setNavigationBarTitle({title:this.item.title})}}};i.default=e}).call(this,e("0de9")["log"])},"11d2":function(t,i,e){"use strict";e.r(i);var n=e("9b17"),a=e("9a4a"),o=e("52fd"),u=e("e0e4"),c=e("68f3");i["default"]={en:n,es:a,fr:o,"zh-Hans":u,"zh-Hant":c}},"36ce":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t._t("default",null,{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})],2)},o=[]},"3a2c":function(t,i,e){"use strict";var n=e("c00f"),a=e.n(n);a.a},"4af1":function(t,i,e){"use strict";(function(t){var n=e("4ea4");e("4160"),e("c975"),e("fb6a"),e("a434"),e("a9e3"),e("b64b"),e("d3b7"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("2909")),o=e("37dc"),u=n(e("11d2")),c=(0,o.initVueI18n)(u.default),d=c.t,l={load:"load",error:"error"},r={add:"add",replace:"replace"},s={auto:"auto",onready:"onready",manual:"manual"},h=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],p={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var i=[];return h.forEach((function(e){i.push(t[e])})),i}),(function(i,e){if(t.paginationInternal.size=t.pageSize,i[0]!==e[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==s.manual){for(var n=!1,a=2;a<i.length;a++)if(i[a]!==e[a]){n=!0;break}n&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==s.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,i){var e=null,n=!1;"object"===typeof t?(t.clear&&(this.pageData===r.replace?this.clear():n=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof i&&(e=i)):"function"===typeof t&&(e=t),this._execLoadData(e,n)},loadMore:function(){this._isEnded||this.loading||(this.pageData===r.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.action,a=e.showToast,o=void 0===a||a,u=e.toastTitle,c=e.success,l=e.fail,r=e.complete,s=e.needConfirm,h=void 0===s||s,p=e.needLoading,f=void 0===p||p,g=e.loadingTitle,v=void 0===g?"":g;f&&uni.showLoading({title:v});var A=t.database(this.spaceInfo);n&&(A=A.action(n)),A.collection(this.mainCollection).add(i).then((function(t){c&&c(t),o&&uni.showToast({title:u||d("uniCloud.component.add.success")})})).catch((function(t){l&&l(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){f&&uni.hideLoading(),r&&r()}))},remove:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.action,a=e.success,o=e.fail,u=e.complete,c=e.confirmTitle,l=e.confirmContent,r=e.needConfirm,s=void 0===r||r,h=e.needLoading,p=void 0===h||h,f=e.loadingTitle,g=void 0===f?"":f;t&&t.length&&(s?uni.showModal({title:c||d("uniCloud.component.remove.showModal.title"),content:l||d("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(e){e.confirm&&i._execRemove(t,n,a,o,u,s,p,g)}}):this._execRemove(t,n,a,o,u,s,p,g))},update:function(i,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.action,o=n.showToast,u=void 0===o||o,c=n.toastTitle,l=n.success,r=n.fail,s=n.complete,h=n.needConfirm,p=void 0===h||h,f=n.needLoading,g=void 0===f||f,v=n.loadingTitle,A=void 0===v?"":v;g&&uni.showLoading({title:A});var m=t.database(this.spaceInfo);return a&&(m=m.action(a)),m.collection(this.mainCollection).doc(i).update(e).then((function(t){l&&l(t),u&&uni.showToast({title:c||d("uniCloud.component.update.success")})})).catch((function(t){r&&r(t),p&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),s&&s()}))},getTemp:function(){var i,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=t.database(this.spaceInfo);this.action&&(n=n.action(this.action)),n=(i=n).collection.apply(i,(0,a.default)(this.collectionArgs)),this.foreignKey&&(n=n.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(n=n.where(this.where)),this.field&&(n=n.field(this.field)),this.groupby&&(n=n.groupBy(this.groupby)),this.groupField&&(n=n.groupField(this.groupField)),!0===this.distinct&&(n=n.distinct()),this.orderby&&(n=n.orderBy(this.orderby));var o=this.paginationInternal,u=o.current,c=o.size,d={};this.getcount&&(d.getCount=this.getcount);var l={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(d.getTree=l),this.gettreepath&&(d.getTreePath=l),n=n.skip(c*(u-1)).limit(c),e?(n=n.getTemp(d),n.udb=this):n=n.get(d),n},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,i){var e=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(n){e.loading=!1,e._execLoadDataSuccess(n.result,t,i)})).catch((function(i){e.loading=!1,e._execLoadDataFail(i,t)})))},_execLoadDataSuccess:function(t,i,e){var n=t.data,o=t.count;this._isEnded=void 0!==o?this.paginationInternal.current*this.paginationInternal.size>=o:n.length<this.pageSize,this.hasMore=!this._isEnded;var u,c=this.getone?n.length?n[0]:void 0:n;(this.getcount&&(this.paginationInternal.count=o),i&&i(c,this._isEnded,this.paginationInternal),this._dispatchEvent(l.load,c),this.getone||this.pageData===r.replace)?this.dataList=c:e?this.dataList=c:(u=this.dataList).push.apply(u,(0,a.default)(c))},_execLoadDataFail:function(t,i){this.errorMessage=t,i&&i(),this.$emit(l.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(i,e,n,a,o,u,c,d){var l=this;if(this.collection&&i){var s=Array.isArray(i)?i:[i];if(s.length){c&&uni.showLoading({mask:!0,title:d});var h=t.database(this.spaceInfo),p=h.command,f=h;e&&(f=f.action(e)),f.collection(this.mainCollection).where({_id:p.in(s)}).remove().then((function(t){n&&n(t.result),l.pageData===r.replace?l.refresh():l.removeData(s)})).catch((function(t){a&&a(t),u&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){c&&uni.hideLoading(),o&&o()}))}}},removeData:function(t){for(var i=t.slice(0),e=this.dataList,n=e.length-1;n>=0;n--){var a=i.indexOf(e[n]._id);a>=0&&(e.splice(n,1),i.splice(a,1))}},_dispatchEvent:function(t,i){this._changeDataFunction?this._changeDataFunction(i,this._isEnded,this.paginationInternal):this.$emit(t,i,this._isEnded,this.paginationInternal)}}};i.default=p}).call(this,e("a9ff")["default"])},"4f53":function(t,i,e){"use strict";var n=e("6cac"),a=e.n(n);a.a},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},"6cac":function(t,i,e){var n=e("eb4d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1bfcbb8e",n,!0,{sourceMap:!1,shadowMode:!1})},"848e":function(t,i,e){"use strict";e.r(i);var n=e("4af1"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"960d":function(t,i,e){"use strict";e.r(i);var n=e("36ce"),a=e("848e");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);var u,c=e("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);i["default"]=d.exports},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9bbe":function(t,i,e){"use strict";e.r(i);var n=e("e385"),a=e("9c6b");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("3a2c");var u,c=e("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"9456fb2a",null,!1,n["a"],u);i["default"]=d.exports},"9c6b":function(t,i,e){"use strict";e.r(i);var n=e("a3d6"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},a3d6:function(t,i,e){"use strict";(function(t){function n(t){var i;return i=Math.floor(t/60),t%=60,i+="",t+="",i=1===i.length?"0"+i:i,t=1===t.length?"0"+t:t,i+":"+t}e("99af"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"ComAudio",props:{play:{type:Boolean,default:!1},src:{type:String},poster:{type:String,default:""},name:{type:String,default:"未知音频"},author:{type:String,default:"未知作者"},autoplay:{type:Boolean},loop:{type:Boolean},obeyMuteSwitch:{type:Boolean},initAudio:{type:Function},index:{type:[String,Number]}},data:function(){return{audioTimeUpdate:"00:00",videoIsPlay:!1}},watch:{play:function(t){t?!this.videoIsPlay&&this.audioPlay():this.videoIsPlay&&this.audioPause()},src:function(){this.audioDestroy(),this.contextInit()}},created:function(){this.contextInit()},beforeDestroy:function(){this.audioDestroy()},methods:{audioPlay:function(){this.innerAudioContext&&this.innerAudioContext.play()},audioPause:function(){this.innerAudioContext&&this.innerAudioContext.pause()},audioOnPlay:function(){this.videoIsPlay=!0,this.$emit("update:play",!0)},audioOnPause:function(){this.videoIsPlay=!1,this.$emit("update:play",!1)},audioDestroy:function(){this.innerAudioContext&&this.innerAudioContext.destroy&&this.innerAudioContext.destroy(),this.audioPropInit()},audioControls:function(){this.videoIsPlay?this.audioPause():this.audioPlay()},handleBtnClick:function(){this.audioControls(),this.$emit("update:play",this.videoIsPlay)},contextInit:function(){t("log","创建"," at uni_modules/luch-audio/components/luch-audio/luch-audio.vue:155");var i=this;if(i.$emit("update:play",!1),i.src){t("log",this.$props," at uni_modules/luch-audio/components/luch-audio/luch-audio.vue:164");var e=uni.createInnerAudioContext();e.autoplay=i.autoplay,e.loop=i.loop,e.obeyMuteSwitch=i.obeyMuteSwitch,e.onPlay((function(){i.audioTimeUpdate=n(Math.floor(e.currentTime)),i.audioOnPlay();for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];i.$emit.apply(i,["onPlay"].concat(a))})),e.onPause((function(){i.audioOnPause();for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];i.$emit.apply(i,["onPause"].concat(e))})),e.onEnded((function(){i.audioOnPause();for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];i.$emit.apply(i,["onEnded"].concat(e))})),e.onTimeUpdate((function(){i.audioTimeUpdate=n(Math.floor(e.currentTime));for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];i.$emit.apply(i,["onPause"].concat(a))})),e.onError((function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];t.apply(void 0,["log"].concat(n,[" at uni_modules/luch-audio/components/luch-audio/luch-audio.vue:187"])),i.$emit.apply(i,["onError"].concat(n))})),e.src=i.src,i.initAudio&&i.initAudio(e,{src:i.src,index:i.index}),this.innerAudioContext=e}},audioPropInit:function(){this.audioTimeUpdate="00:00",this.videoIsPlay=!1}}};i.default=a}).call(this,e("0de9")["log"])},b96c:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={unicloudDb:e("960d").default,luchAudio:e("9bbe").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.whereStr?e("unicloud-db",{attrs:{collection:"audios_list",getone:!0,where:t.whereStr},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLoad.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(i){var n=i.data,a=i.loading,o=i.error;i.options;return[o?e("v-uni-view",[t._v(t._s(o.message))]):a?e("v-uni-view",[t._v("Loading")]):e("v-uni-view",[e("v-uni-image",{staticClass:"itemImage",attrs:{src:n.thumbImage,mode:"widthFix"}}),e("v-uni-view",{staticClass:"sticky",staticStyle:{position:"sticky",top:"0","z-index":"1000"}},[e("luch-audio",{attrs:{poster:n.thumbImage,name:n.title,author:"来源于学习强国",src:n.subItem[t.index].audioStorageInfo[0].url,play:t.audioPlay,autoplay:!0,loop:!0},on:{"update:play":function(i){arguments[0]=i=t.$handleEvent(i),t.audioPlay=i}}})],1),e("v-uni-view",{staticClass:"item_info_box"},[n?e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.item.title))]):t._e(),n?e("v-uni-text",{staticClass:"title-info"},[t._v(t._s(t.item.showSource)+" | "+t._s(t.item.auditTime))]):t._e(),e("v-uni-view",{staticClass:"content"},[e("v-uni-rich-text",{attrs:{nodes:t.item.summary}})],1)],1)],1)]}}],null,!1,1105877051)}):t._e()],1)},o=[]},c00f:function(t,i,e){var n=e("d39c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("4a75cb18",n,!0,{sourceMap:!1,shadowMode:!1})},d39c:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.luch-audio--text-eill[data-v-9456fb2a]{\r\n  /*超出省略号*/overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.luch-audio__warp[data-v-9456fb2a]{display:flex;overflow:hidden;height:67px;border-radius:3px;border:1px solid #e0e0e0}.luch-audio__cover[data-v-9456fb2a]{position:relative;flex-shrink:0;width:65px;height:100%}.luch-audio__cover.luch-audio--cover-bg[data-v-9456fb2a]{background-color:#e6e6e6}.luch-audio__cover .luch-audio__cover-img[data-v-9456fb2a]{width:100%;height:100%}.luch-audio__cover .luch-audio__play-btn[data-v-9456fb2a]{position:absolute;left:50%;top:50%;width:24px;height:24px;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);border-radius:50%;background-size:100% 100%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA2LTA0VDE3OjU1OjA3KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA2LTA1VDA5OjUwOjUwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNi0wNVQwOTo1MDo1MCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OWI0YTlkMi02ZWIzLTUyNDQtYjM4OS03MzdmYTA1OTM1ZWEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyODIyOGJlOC0zZDgxLTlhNDMtOGJjMy02NDA2NTQzYWIwMzQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YjA1NDBlYy1mMjE1LWU4NDEtYjkwYy0xZjBiNGQ3OGJkODkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRiMDU0MGVjLWYyMTUtZTg0MS1iOTBjLTFmMGI0ZDc4YmQ4OSIgc3RFdnQ6d2hlbj0iMjAxOS0wNi0wNFQxNzo1NTowNyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNzc4YjE2NC1mODFhLWU5NDktOThmMC00OGQ0MDZlNmU3ZjYiIHN0RXZ0OndoZW49IjIwMTktMDYtMDRUMTc6NTU6MDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODliNGE5ZDItNmViMy01MjQ0LWIzODktNzM3ZmEwNTkzNWVhIiBzdEV2dDp3aGVuPSIyMDE5LTA2LTA1VDA5OjUwOjUwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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")}.luch-audio__cover .luch-audio__play-btn.luch-audio--btn-pause[data-v-9456fb2a]{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA2LTA0VDE3OjU0OjM1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA2LTA1VDA5OjUwOjI0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNi0wNVQwOTo1MDoyNCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZGU0NjY1NS05N2I2LTBjNGMtYTQ4NS0wN2E1ZjY5ZjU1YjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYTUxOWZkZi0xYWQwLTYwNDUtOGIyNS1hNTZlOGM0YzhkZmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZjRlOTFiYS1iYTBjLWVkNDMtOTc1Yi01YTcwODhmNzdiMWUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJmNGU5MWJhLWJhMGMtZWQ0My05NzViLTVhNzA4OGY3N2IxZSIgc3RFdnQ6d2hlbj0iMjAxOS0wNi0wNFQxNzo1NDozNSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxY2U4ZTUwMi1iYzUwLThkNDktYTU0ZC04OWVjOGUzMDI5ZTIiIHN0RXZ0OndoZW49IjIwMTktMDYtMDRUMTc6NTQ6MzUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmRlNDY2NTUtOTdiNi0wYzRjLWE0ODUtMDdhNWY2OWY1NWI3IiBzdEV2dDp3aGVuPSIyMDE5LTA2LTA1VDA5OjUwOjI0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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")}.luch-audio__audio-con[data-v-9456fb2a]{position:relative;flex:1;display:flex;width:0;padding:0 15px;align-items:center;background-color:#fcfcfc}.luch-audio__audio-con .luch-audio__audio-info[data-v-9456fb2a]{width:100%}.luch-audio__audio-con .luch-audio__audio-title[data-v-9456fb2a]{display:block;padding-bottom:7px;padding-right:25px;font-size:14px;color:#353535}.luch-audio__audio-con .luch-audio__audio-author[data-v-9456fb2a]{display:block;font-size:12px;color:#888}.luch-audio__audio-con .luch-audio__audio-time[data-v-9456fb2a]{position:absolute;right:15px;top:6px;font-size:13px;color:#9d9d9d}',""]),t.exports=i},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},e385:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"luch-audio__warp"},[e("v-uni-view",{staticClass:"luch-audio__cover",class:{"luch-audio--cover-bg":!t.poster}},[t.poster?e("v-uni-image",{staticClass:"luch-audio__cover-img",attrs:{src:t.poster}}):t._e(),e("v-uni-view",{staticClass:"luch-audio__play-btn",class:{"luch-audio--btn-pause":t.videoIsPlay},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleBtnClick.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"luch-audio__audio-con"},[e("v-uni-view",{staticClass:"luch-audio__audio-info"},[e("v-uni-text",{staticClass:"luch-audio__audio-title luch-audio--text-eill"},[t._v(t._s(t.name))]),e("v-uni-text",{staticClass:"luch-audio__audio-author luch-audio--text-eill"},[t._v(t._s(t.author))])],1),e("v-uni-view",{staticClass:"luch-audio__audio-time"},[t._v(t._s(t.audioTimeUpdate))])],1)],1)},o=[]},eb4d:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".itemImage[data-v-9adc6d22]{width:100%;height:%?400?%;background:url(/static/ui/nopic.png) 50% no-repeat #e7e7e7}.item_info_box[data-v-9adc6d22]{margin:%?20?%}.item_info_box uni-text.title[data-v-9adc6d22]{display:block;width:100%;font-size:%?50?%;line-height:%?80?%;font-weight:700;padding:%?10?% 0 %?20?% 0;color:#1a1a1a;text-align:center}.item_info_box uni-text.title-info[data-v-9adc6d22]{display:block;width:100%;text-align:center;font-size:%?26?%;font-weight:400;color:#3a3a3a;padding:%?0?% 0 %?10?% 0}.item_info_box .content[data-v-9adc6d22]{padding:0;margin:0}",""]),t.exports=i},fb63:function(t,i,e){"use strict";e.r(i);var n=e("078e"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},fc6f:function(t,i,e){"use strict";e.r(i);var n=e("b96c"),a=e("fb63");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("4f53");var u,c=e("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"9adc6d22",null,!1,n["a"],u);i["default"]=d.exports}}]);