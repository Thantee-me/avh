(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{359:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v}));var o=n(364),r=n(0),l=Object(r.i)("v-card__actions"),c=Object(r.i)("v-card__subtitle"),d=Object(r.i)("v-card__text"),v=Object(r.i)("v-card__title");o.a},360:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7f6d4ad6",content,!0,{sourceMap:!1})},361:function(t,e,n){(e=n(11)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=e},363:function(t,e,n){"use strict";n(355);var o=n(356);e.a=Object(o.a)("flex")},364:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9);var o=n(2),r=(n(16),n(366),n(150)),l=n(372),c=n(62),d=n(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return f({"v-card":!0},c.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},r.a.options.computed.classes.call(this))},styles:function(){var style=f({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},365:function(t,e,n){"use strict";n(355);var o=n(0);e.a=Object(o.i)("spacer","div","v-spacer")},373:function(t,e,n){"use strict";n(10),n(8),n(5),n(9),n(20),n(21),n(4);var o=n(48),r=n(2),l=(n(16),n(360),n(79)),c=n(96),d=n(6),v=n(26),f=n(24);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(v.a,f.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,r=Math.floor(e/2),l=this.length-r+1+n;if(this.value>r&&this.value<l){var c=this.value-r+2,d=this.value+r-2-n;return[1,"..."].concat(Object(o.a)(this.range(c,d)),["...",this.length])}if(this.value===r){var v=this.value+r-1-n;return[].concat(Object(o.a)(this.range(1,v)),["...",this.length])}if(this.value===l){var f=this.value-r+1;return[1,"..."].concat(Object(o.a)(this.range(f,this.length)))}return[].concat(Object(o.a)(this.range(1,r)),["..."],Object(o.a)(this.range(l,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,o){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:o}},[t(l.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},374:function(t,e,n){"use strict";n(68),n(5),n(4),n(9),n(355),n(148);var o=n(356),r=n(61);e.a=Object(o.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,l=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(r.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),l)}})},377:function(t,e,n){"use strict";n(10),n(8),n(9);var o=n(2),r=(n(67),n(5),n(4),n(149),n(31),n(32),n(6)),l=n(69),c=n(97);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},378:function(t,e,n){var content=n(390);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("9eb5ca08",content,!0,{sourceMap:!1})},385:function(t,e,n){var content=n(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2065bca8",content,!0,{sourceMap:!1})},386:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},389:function(t,e,n){"use strict";var o=n(378);n.n(o).a},390:function(t,e,n){(e=n(11)(!1)).push([t.i,".layout-action[data-v-3efe0706]{position:fixed;width:100%;bottom:0}",""]),t.exports=e},391:function(t,e,n){"use strict";var o={props:["selected"],data:function(){return{dialog:!1,selectedsale:[],form:{search:"",page:1,perpage:10,position_id:1},headers:[{text:"ชื่อ - นามสกุล",sortable:!1,alige:"center",class:"title",value:"name"},{text:"เบอร์โทรศัพท์",sortable:!1,alige:"center",class:"title",value:"tell"},{text:"อีเมล์",sortable:!1,alige:"center",class:"title",value:"email"},{text:"สาขา",sortable:!1,alige:"center",class:"title",value:"branch_id"},{text:"ตำแหน่ง",sortable:!1,alige:"center",class:"title",value:"position_id"}],listitems:[]}},methods:{listdata:function(){var t=this;this.$axios.post("/users/show",this.form).then((function(e){t.listitems=e.data})).catch((function(e){t.listitems={list:[],total_perpage:0}}))},open:function(data){this.dialog=!0,this.listdata(),this.selectedsale=data}},watch:{dialog:function(t){0==t&&(this.listitems=[],this.selectedsale=[])}}},r=n(45),l=n(95),c=n.n(l),d=n(152),v=n(364),f=n(359),m=n(475),h=n(404),_=n(363),x=n(140),y=n(418),k=n(90),w=n(76),O=n(44),C=n(373),j=n(365),$=n(382),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"1200px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"mx-1"},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-title",{staticClass:"headline blue-font1"},[t._v("เลือกเซลที่ดูแลลูกค้า")]),t._v(" "),n("v-list-item-icon",[n("v-icon",{attrs:{small:""},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("fas fa-times")])],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"mx-1"},[n("v-layout",{staticClass:"container"},[n("v-data-table",{staticClass:"tablelist w-100 mt-3",attrs:{headers:t.headers,items:t.listitems.User,"show-select":"","hide-default-footer":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listdata()}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-text-field",{staticClass:"input-search-table",attrs:{filled:"",placeholder:"search",rounded:"",dense:"","append-icon":"fas fa-search","hide-details":""},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})]},proxy:!0},{key:"item.branch_id",fn:function(e){var n=e.item;return[t._v("\n                            "+t._s(t.branchName(n.branch_id))+"\n                        ")]}},{key:"item.position_id",fn:function(e){var n=e.item;return[t._v("\n                            "+t._s(t.positionName(n.position_id))+"\n                        ")]}},{key:"footer",fn:function(){return[n("v-pagination",{staticClass:"justify-end",attrs:{length:t.listitems.total_perpage,"total-visible":7,circle:"",color:"primary"},on:{input:function(e){return t.listdata()}},model:{value:t.form.page,callback:function(e){t.$set(t.form,"page",e)},expression:"form.page"}})]},proxy:!0}]),model:{value:t.selectedsale,callback:function(e){t.selectedsale=e},expression:"selectedsale"}})],1),t._v(" "),n("v-layout",{staticClass:"container"},[n("v-flex")],1),t._v(" "),n("v-layout",{staticClass:"mt-3"},[n("v-spacer"),t._v(" "),"detail"!=t.data.type?n("v-flex",{staticClass:"text-right"},[n("v-btn",{staticClass:"btn-danger mx-1",on:{click:function(e){t.dialog=!t.dialog}}},[t._v("ยกเลิก")]),t._v(" "),n("v-btn",{staticClass:"btn-primary mx-1",on:{click:function(e){t.$emit("callback",t.selectedsale),t.dialog=!t.dialog}}},[t._v("ยืนยัน")])],1):t._e()],1)],1)],1)],1)}),[],!1,null,null,null),V=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:f.a,VCardTitle:f.b,VDataTable:m.a,VDialog:h.a,VFlex:_.a,VIcon:x.a,VLayout:y.a,VListItem:k.a,VListItemIcon:w.a,VListItemTitle:O.c,VPagination:C.a,VSpacer:j.a,VTextField:$.a});var I={data:function(){return{dialog:!1,valid:!0,lazy:!1,header:"ข้อมูล",type:"add",key:"",data:{contact_customer_name:"",contact_customer_tell:"",contact_customer_address:""}}},methods:{open:function(t,data,e){"add"==t?(this.type="add",this.data={contact_customer_name:"",contact_customer_tell:"",contact_customer_address:""},this.key=e):(this.type="edit",this.data=JSON.parse(JSON.stringify(data)),this.key=e),this.dialog=!0},save:function(){this.$emit("callback",{data:this.data,type:this.type,key:this.key}),this.dialog=!1}}},P=(n(389),n(346)),S=n(377),B=n(348),z=n(349),E=Object(r.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{overflow:"",right:"",fixed:"",temporary:"","min-width":"320px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-list-item",[n("v-list-item-title",{staticClass:"headline blue-font1"},[t._v(t._s(t.header))])],1),t._v(" "),n("v-row",{staticClass:"mx-1"},[n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"ชื่อผู้ติดต่อ",outlined:"",dense:"",rules:[function(t){return!!t||"Input Request"}]},model:{value:t.data.contact_customer_name,callback:function(e){t.$set(t.data,"contact_customer_name",e)},expression:"data.contact_customer_name"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"เบอร์โทรศัพท์",outlined:"",dense:"",rules:[function(t){return!!t||"Input Request"},function(t){return/(?=.*\d)/.test(t)||"Request only number"},function(t){return t.length>=10||"Min 10 characters"}]},model:{value:t.data.contact_customer_tell,callback:function(e){t.$set(t.data,"contact_customer_tell",e)},expression:"data.contact_customer_tell"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"ที่อยู่ผู้ติดต่อ",outlined:"",dense:"",rules:[function(t){return!!t||"Input Request"}]},model:{value:t.data.contact_customer_address,callback:function(e){t.$set(t.data,"contact_customer_address",e)},expression:"data.contact_customer_address"}})],1)],1)],1),t._v(" "),"detail"!=t.data.type?n("v-layout",{staticClass:"mt-3 layout-action"},[n("v-flex",{staticClass:"p-2"},[n("v-btn",{staticClass:"btn-danger",attrs:{block:""},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("ยกเลิก")])],1),t._v(" "),n("v-flex",{staticClass:"p-2"},[n("v-btn",{staticClass:"btn-primary",attrs:{block:"",disabled:!t.valid},on:{click:function(e){return t.save()}}},[t._v("ยืนยัน")])],1)],1):t._e()],1)}),[],!1,null,"3efe0706",null),D=E.exports;c()(E,{VBtn:d.a,VCol:P.a,VFlex:_.a,VForm:S.a,VLayout:y.a,VListItem:k.a,VListItemTitle:O.c,VNavigationDrawer:B.a,VRow:z.a,VTextField:$.a});var T={props:["type","listitems"],components:{Modallistsale:V,Modalformcontact:D},data:function(){return{valid:!0,lazy:!1,menubilling:!1,menucheck:!1,form:{branch_id:"",customer_code:"",customer_name:"",customer_cedit:"",customer_tax:"",customer_address:"",customer_tell:"",customer_ceditlimit:"",customer_billing_date:"",customer_check_date:"",customer_remark:"",listsale:[],listcontact:[]}}},methods:{addsale:function(data){this.form.listsale=data},savecontact:function(data){"add"==data.type?this.form.listcontact.push(data.data):this.form.listcontact[data.key]=data.data}},mounted:function(){this.$nextTick((function(){"add"!=this.type&&(this.form=this.listitems)}))}},A=n(141),R=n(374),M=n(473),N=n(337),L=n(379),F=Object(r.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-xs":""}},[n("v-card",{staticClass:"my-2"},[n("v-list-item",[n("v-list-item-title",{staticClass:"headline"},[t._v("ข้อมูลลูกค้า")])],1),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-list-item",[n("v-row",{staticClass:"py-2"},[n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{label:"รหัส ลูกค้า",outlined:"",dense:"",readonly:"detail"==t.type,rules:[function(t){return!!t||"Input Request"}]},model:{value:t.form.customer_code,callback:function(e){t.$set(t.form,"customer_code",e)},expression:"form.customer_code"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{label:"ชื่อลูกค้า",outlined:"",dense:"",readonly:"detail"==t.type,rules:[function(t){return!!t||"Input Request"}]},model:{value:t.form.customer_name,callback:function(e){t.$set(t.form,"customer_name",e)},expression:"form.customer_name"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{label:"เครดิต",outlined:"",dense:"",rules:[function(t){return/(?=.*\d)/.test(t)||"Request only number"}],readonly:"detail"==t.type},model:{value:t.form.customer_cedit,callback:function(e){t.$set(t.form,"customer_cedit",e)},expression:"form.customer_cedit"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{label:"เลขประจำตัวผู้เสียภาษี",outlined:"",dense:"",rules:[function(t){return/(?=.*\d)/.test(t)||"Request only number"},function(t){return 13==t.length||"Request 13 characters"}],readonly:"detail"==t.type},model:{value:t.form.customer_tax,callback:function(e){t.$set(t.form,"customer_tax",e)},expression:"form.customer_tax"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"ที่อยู่",outlined:"",dense:"",readonly:"detail"==t.type},model:{value:t.form.customer_address,callback:function(e){t.$set(t.form,"customer_address",e)},expression:"form.customer_address"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{label:"เบอร์โทรศัพท์",outlined:"",dense:"",rules:[function(t){return/(?=.*\d)/.test(t)||"Request only number"}],readonly:"detail"==t.type},model:{value:t.form.customer_tell,callback:function(e){t.$set(t.form,"customer_tell",e)},expression:"form.customer_tell"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{label:"Credit Limit",outlined:"",dense:"",rules:[function(t){return/(?=.*\d)/.test(t)||"Request only number"}],readonly:"detail"==t.type},model:{value:t.form.customer_ceditlimit,callback:function(e){t.$set(t.form,"customer_ceditlimit",e)},expression:"form.customer_ceditlimit"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({attrs:{label:"กำหนดการวางบิล",outlined:"",dense:"",readonly:""},model:{value:t.form.customer_billing_date,callback:function(e){t.$set(t.form,"customer_billing_date",e)},expression:"form.customer_billing_date"}},o))]}}]),model:{value:t.menubilling,callback:function(e){t.menubilling=e},expression:"menubilling"}},[t._v(" "),n("v-date-picker",{on:{input:function(e){t.menubilling=!1}},model:{value:t.form.customer_billing_date,callback:function(e){t.$set(t.form,"customer_billing_date",e)},expression:"form.customer_billing_date"}})],1)],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"6",sm:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({attrs:{label:"กำหนดการรับเช็ค",outlined:"",dense:"",readonly:""},model:{value:t.form.customer_check_date,callback:function(e){t.$set(t.form,"customer_check_date",e)},expression:"form.customer_check_date"}},o))]}}]),model:{value:t.menucheck,callback:function(e){t.menucheck=e},expression:"menucheck"}},[t._v(" "),n("v-date-picker",{on:{input:function(e){t.menucheck=!1}},model:{value:t.form.customer_check_date,callback:function(e){t.$set(t.form,"customer_check_date",e)},expression:"form.customer_check_date"}})],1)],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Remark",outlined:"",dense:"",readonly:"detail"==t.type},model:{value:t.form.customer_remark,callback:function(e){t.$set(t.form,"customer_remark",e)},expression:"form.customer_remark"}})],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"my-2"},[n("v-list-item",{staticClass:"pt-3",attrs:{"two-line":""}},[n("v-list-item-title",{staticClass:"headline blue-font1"},[t._v("สังกัด")]),t._v(" "),"detail"!=t.type?n("v-btn",{staticClass:"btn-type1",attrs:{rounded:"",dense:""},on:{click:function(e){return t.$refs.listsale.open(t.form.listsale)}}},[t._v("เลือกเซล")]):t._e()],1),t._v(" "),n("v-list-item",{staticClass:"pb-5"},[n("client-only",[n("v-simple-table",{staticClass:"tablelist w-100 mt-3 text-center",scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",{staticClass:"tablelist w-100 text-center"},[n("th",{staticClass:"title text-center"},[t._v("ชื่อ - นามสกุล")]),t._v(" "),n("th",{staticClass:"title text-center"},[t._v("เบอร์โทรศัพท์")]),t._v(" "),n("th",{staticClass:"title text-center"},[t._v("อีเมล์")]),t._v(" "),n("th",{staticClass:"title text-center"},[t._v("สาขา")]),t._v(" "),n("th",{staticClass:"title text-center"},[t._v("ตำแหน่ง")]),t._v(" "),n("th",{staticClass:"title text-center"},[t._v("ACTION")])]),t._v(" "),n("tbody",t._l(t.form.listsale,(function(i,e){return n("tr",{key:e},[n("td",{staticClass:"subtitle-1"},[t._v(t._s(i.name))]),t._v(" "),n("td",{staticClass:"subtitle-1"},[t._v(t._s(i.tell))]),t._v(" "),n("td",{staticClass:"subtitle-1"},[t._v(t._s(i.email))]),t._v(" "),n("td",{staticClass:"subtitle-1"},[t._v(t._s(t.branchName(i.branch_id)))]),t._v(" "),n("td",{staticClass:"subtitle-1"},[t._v(t._s(t.positionName(i.position_id)))]),t._v(" "),n("td",{staticClass:"subtitle-1"},["detail"!=t.type?n("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(n){return t.form.listsale.splice(e,1)}}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1):t._e()],1)])})),0)]},proxy:!0}])})],1)],1)],1),t._v(" "),n("div",{staticClass:"mt-5"},[n("v-list-item",{staticClass:"pt-3",attrs:{"two-line":""}},[n("v-list-item-title",{staticClass:"headline blue-font1"},[t._v("รายชื่อผู้ติดต่อ")]),t._v(" "),"detail"!=t.type?n("v-btn",{staticClass:"btn-type1 dense",attrs:{rounded:"",dense:""},on:{click:function(e){return t.$refs.formcontact.open("add",[],"")}}},[n("v-icon",{attrs:{size:"18",color:"white"}},[t._v("fas fa-plus")]),t._v(" "),n("font",{staticClass:"mx-1"},[t._v("เพิ่มข้อมูล")])],1):t._e()],1),t._v(" "),n("v-list-item",[n("client-only",[n("v-simple-table",{staticClass:"tablelist w-100 mt-3 text-center",scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",{staticClass:"tablelist w-100 text-center"},[n("th",{staticClass:"title text-left"},[t._v("ชื่อผู้ติดต่อ")]),t._v(" "),n("th",{staticClass:"title text-left"},[t._v("เบอร์โทรศัพท์")]),t._v(" "),n("th",{staticClass:"title text-left"},[t._v("ที่อยู่")]),t._v(" "),n("th",{staticClass:"title text-right"},[t._v("ACTION")])]),t._v(" "),n("tbody",t._l(t.form.listcontact,(function(i,e){return n("tr",{key:e},[n("td",{staticClass:"subtitle-1 text-left"},[t._v(t._s(i.contact_customer_name))]),t._v(" "),n("td",{staticClass:"subtitle-1 text-left"},[t._v(t._s(i.contact_customer_tell))]),t._v(" "),n("td",{staticClass:"subtitle-1 text-left"},[t._v(t._s(i.contact_customer_address))]),t._v(" "),n("td",{staticClass:"subtitle-1 text-right"},["detail"!=t.type?n("v-avatar",{attrs:{size:"26",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""},on:{click:function(n){return t.$refs.formcontact.open("edit",i,e)}}},[t._v("fas fa-pencil-alt")])],1):t._e(),t._v(" "),"detail"!=t.type?n("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(n){return t.form.listcontact.splice(e,1)}}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1):t._e()],1)])})),0)]},proxy:!0}])})],1)],1)],1),t._v(" "),"detail"!=t.type?n("v-layout",{staticClass:"mt-3"},[n("v-spacer"),t._v(" "),n("v-flex",{staticClass:"text-right"},[n("nuxt-link",{staticClass:"btn btn-danger mx-1",attrs:{to:"/customer",tag:"button"}},[t._v("ยกเลิก")]),t._v(" "),n("v-btn",{staticClass:"btn-primary mx-1",attrs:{disabled:!t.valid},on:{click:function(e){return t.$emit("callback",t.form)}}},[t._v("ยืนยัน")])],1)],1):t._e(),t._v(" "),n("Modallistsale",{ref:"listsale",on:{callback:t.addsale}}),t._v(" "),n("Modalformcontact",{ref:"formcontact",on:{callback:t.savecontact}})],1)],1)}),[],!1,null,null,null);e.a=F.exports;c()(F,{VAvatar:A.a,VBtn:d.a,VCard:v.a,VCol:P.a,VContainer:R.a,VDatePicker:M.a,VFlex:_.a,VForm:S.a,VIcon:x.a,VLayout:y.a,VListItem:k.a,VListItemTitle:O.c,VMenu:N.a,VRow:z.a,VSimpleTable:L.a,VSpacer:j.a,VTextField:$.a})},404:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9),n(31),n(32);var o=n(2),r=(n(16),n(385),n(347)),l=n(124),c=n(99),d=n(154),v=n(157),f=n(156),m=n(155),h=n(35),_=n(98),x=n(6),y=n(7),k=n(0);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(x.a)(l.a,c.a,d.a,v.a,f.a,m.a,h.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===k.v.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}}},render:function(t){var e=[],data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}},style:{}};this.fullscreen||(data.style={maxWidth:"none"===this.maxWidth?void 0:Object(k.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(k.g)(this.width)}),e.push(this.genActivator());var dialog=t("div",data,this.showLazyContent(this.getContentSlot()));return this.transition&&(dialog=t("transition",{props:{name:this.transition,origin:this.origin}},[dialog])),e.push(t("div",{class:this.contentClasses,attrs:O({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(r.a,{props:{root:!0,light:this.light,dark:this.dark}},[dialog])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},486:function(t,e,n){"use strict";n.r(e);var o={components:{Formcustomer:n(391).a},head:function(){return{title:this.title}},data:function(){return{title:"แก้ข้อมูลลูกค้า",breadcrumbs:[{text:"จัดการลูกค้า",disabled:!1,href:"/customer"},{text:"เพิ่มข้อมูลลูกค้า",disabled:!0}]}},methods:{save:function(data){var t=this;this.$axios.post("/saleCustomer/create",data).then((function(e){t.$swal("Insert Success","","success"),t.$router.push("/customer")})).catch((function(e){t.$swal("Insert Error","","warning")}))}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title)}))}},r=n(45),l=n(95),c=n.n(l),d=n(374),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-xs":""}},[n("nav",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,(function(i,e){return n("nuxt-link",{key:e,staticClass:"breadcrumb-item",class:{active:e==t.breadcrumbs.length-1},attrs:{tag:"a",to:i.href?i.href:""}},[t._v(t._s(i.text))])})),1)]),t._v(" "),n("Formcustomer",{attrs:{type:"add"},on:{callback:t.save}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a})}}]);