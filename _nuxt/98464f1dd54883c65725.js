(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{357:function(t,e,n){"use strict";var r=n(152);e.a=r.a},360:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7f6d4ad6",content,!0,{sourceMap:!1})},361:function(t,e,n){(e=n(11)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=e},363:function(t,e,n){"use strict";n(355);var r=n(356);e.a=Object(r.a)("flex")},365:function(t,e,n){"use strict";n(355);var r=n(0);e.a=Object(r.i)("spacer","div","v-spacer")},366:function(t,e,n){var content=n(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("e23b7040",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n(10),n(8),n(5),n(9),n(20),n(21),n(4);var r=n(48),o=n(2),c=(n(16),n(360),n(79)),l=n(96),d=n(6),v=n(25),h=n(24);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(v.a,h.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),c=this.length-o+1+n;if(this.value>o&&this.value<c){var l=this.value-o+2,d=this.value+o-2-n;return[1,"..."].concat(Object(r.a)(this.range(l,d)),["...",this.length])}if(this.value===o){var v=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,v)),["...",this.length])}if(this.value===c){var h=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(h,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:r}},[t(c.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},383:function(t,e,n){(e=n(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#424242;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=e},384:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(4);var r={data:function(){return{options:{}}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{getDataFromApi:function(){var t=this;return this.loading=!0,new Promise((function(e,n){var r=t.options;r.sortBy,r.sortDesc;t.form.sortBy=t.options.sortBy[0],t.form.sortDesc=t.options.sortDesc[0]}))}}}},483:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(384).a],head:function(){return{title:this.title}},data:function(){return{title:"ระบบจัดการสินค้า",dialogForm:!1,form:{search:"",page:1,perpage:10,sortBy:"name",sortDesc:!1},header:[{text:"รูปสินค้า",sortable:!1,value:"pic",class:"title"},{text:"Real No",align:"center",value:"real_number",class:"title"},{text:"ชื่อสินค้า",align:"center",value:"name",class:"title"},{text:"Brand",align:"center",value:"brand_name",class:"title"},{text:"QTY",align:"center",value:"amount",class:"title"},{text:"Price",align:"center",value:"price",class:"title"},{text:"ACTION",align:"center",sortable:!1,value:"product_id",class:"title"}],itemslist:[]}},methods:{listdata:function(){var t=this;this.$axios.post("/product",this.form).then((function(e){t.itemslist=e.data})).catch((function(e){t.itemslist={list:[],total_perpage:0}}))},del:function(t){var e=this;this.$swal({title:"Are you sure delete?",icon:"warning",buttons:{cancel:!0,confirm:!0}}).then((function(n){1==n&&e.$axios.post("/product_del",{id:t}).then((function(t){e.$swal("Delete Success","","success"),e.listdata()})).catch((function(t){e.$swal("Delete Error","","warning"),e.listdata()}))}))}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title),this.listdata()}))}},o=n(45),c=n(95),l=n.n(c),d=n(141),v=n(475),h=n(363),f=n(140),m=n(121),x=n(418),_=n(373),y=n(365),w=n(382),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{staticClass:"container"},[n("v-flex",[n("v-text-field",{staticClass:"input-search-table",attrs:{filled:"",placeholder:"search",rounded:"",dense:"","append-icon":"fas fa-search","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listdata()},change:function(e){return t.listdata()}},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-flex",{staticClass:"text-right"},[n("nuxt-link",{staticClass:"btn btn-type1 dense",attrs:{tag:"button",to:"/products/add"}},[n("v-icon",{attrs:{size:"20",color:"white"}},[t._v("fas fa-plus")]),t._v(" "),n("font",{staticClass:"mx-1"},[t._v("เพิ่มข้อมูล")])],1)],1)],1),t._v(" "),n("client-only",[n("v-layout",{staticClass:"container"},[n("v-data-table",{staticClass:"tablelist w-100 text-center",attrs:{headers:t.header,items:t.itemslist.list,"items-per-page":t.form.perpage,"hide-default-footer":"",options:t.options,"sort-by":t.form.sortBy,"sort-desc":t.form.sortDesc},on:{"update:options":function(e){t.options=e},"update:sortBy":function(e){return t.$set(t.form,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.form,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.form,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.form,"sortDesc",e)}},scopedSlots:t._u([{key:"item.pic",fn:function(t){var e=t.item;return[n("v-img",{staticClass:"my-5",attrs:{src:e.pic,"max-width":"120","max-height":"90"}})]}},{key:"items",fn:function(e){return[n("td",{staticClass:"subtitle-1"},[t._v(t._s(e.realno))]),t._v(" "),n("td",{staticClass:"subtitle-1"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"subtitle-1"},[t._v(t._s(e.brand))]),t._v(" "),n("td",{staticClass:"subtitle-1"},[t._v(t._s(e.qty))]),t._v(" "),n("td",{staticClass:"subtitle-1",class:{"red-font1":e.price<1}},[t._v(t._s(e.price))])]}},{key:"item.product_id",fn:function(e){var r=e.item;return[n("nuxt-link",{attrs:{tag:"span",to:"/products/"+r.product_id+"/detail"}},[n("v-avatar",{attrs:{size:"26",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-eye")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{tag:"span",to:"/products/"+r.product_id+"/edit"}},[n("v-avatar",{attrs:{size:"26",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-pencil-alt")])],1)],1),t._v(" "),n("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(e){return t.del(r.product_id)}}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1)]}}])})],1)],1),t._v(" "),n("v-layout",{staticClass:"container"},[n("v-flex",[n("v-pagination",{staticClass:"justify-end",attrs:{length:t.itemslist.total_perpage,"total-visible":7,circle:"",color:"primary"},on:{click:function(e){return t.listdata()}},model:{value:t.form.page,callback:function(e){t.$set(t.form,"page",e)},expression:"form.page"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:d.a,VDataTable:v.a,VFlex:h.a,VIcon:f.a,VImg:m.a,VLayout:x.a,VPagination:_.a,VSpacer:y.a,VTextField:w.a})}}]);