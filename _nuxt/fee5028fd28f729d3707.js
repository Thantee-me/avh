(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{360:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7f6d4ad6",content,!0,{sourceMap:!1})},361:function(t,e,n){(e=n(11)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=e},363:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9);var r=n(2),o=(n(16),n(365),n(149)),l=n(371),c=n(61),d=n(6);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return v({"v-card":!0},c.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},364:function(t,e,n){"use strict";n(355);var r=n(356);e.a=Object(r.a)("flex")},365:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("e23b7040",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n(355);var r=n(0);e.a=Object(r.i)("spacer","div","v-spacer")},367:function(t,e,n){var content=n(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7c06aa28",content,!0,{sourceMap:!1})},368:function(t,e,n){(e=n(11)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table thead tr:last-child th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table thead tr th{color:rgba(0,0,0,.6)}.theme--light.v-data-table tbody tr:not(:last-child) td:last-child,.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table tbody tr.active{background:#f5f5f5}.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content){background:#eee}.theme--dark.v-data-table{background-color:#424242;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#424242;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr:last-child th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table tbody tr.active{background:#505050}.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content){background:#616161}.v-data-table table{width:100%;border-spacing:0}.v-data-table td,.v-data-table th{padding:0 16px}.v-data-table th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table th{text-align:left}.v-application--is-rtl .v-data-table th{text-align:right}.v-data-table td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0}.v-data-table--dense td{height:24px}.v-data-table--dense th{height:32px}.v-data-table--fixed-header .v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header thead th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header thead tr:nth-child(2) th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th{top:32px}",""]),t.exports=e},373:function(t,e,n){"use strict";n(10),n(8),n(5),n(9),n(20),n(21),n(4);var r=n(48),o=n(2),l=(n(16),n(360),n(79)),c=n(96),d=n(6),h=n(26),v=n(24);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(h.a,v.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),l=this.length-o+1+n;if(this.value>o&&this.value<l){var c=this.value-o+2,d=this.value+o-2-n;return[1,"..."].concat(Object(r.a)(this.range(c,d)),["...",this.length])}if(this.value===o){var h=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,h)),["...",this.length])}if(this.value===l){var v=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(v,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(l,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:r}},[t(l.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},377:function(t,e,n){"use strict";n(10),n(8),n(9);var r=n(2),o=(n(67),n(5),n(4),n(150),n(31),n(32),n(6)),l=n(69),c=n(97);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},379:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9);var r=n(2),o=(n(16),n(367),n(0)),l=n(24),c=n(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(c.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o.g)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},380:function(t,e,n){(e=n(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#424242;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=e},400:function(t,e,n){var content=n(432);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("bd7aff20",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";var r=n(100),o=n(35),l=n(6),c=n(7);e.a=Object(l.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},431:function(t,e,n){"use strict";var r=n(400);n.n(r).a},432:function(t,e,n){(e=n(11)(!1)).push([t.i,".layout-action[data-v-ca604ac0]{position:fixed;width:100%;bottom:0}",""]),t.exports=e},478:function(t,e,n){"use strict";n.r(e);n(25);var r={data:function(){return{dialog:!1,header:"ข้อมูล",valid:!0,lazy:!1,data:{type:"add",name:"",img:"",old_img:""}}},methods:{uploadfile:function(t){var e=this,n=new FileReader;n.readAsDataURL(t.target.files[0]),n.onload=function(){e.data.img=n.result}},open:function(t,data){"add"!=t?(this.data.old_img=data.img?data.img:"",this.data.name=data.name,this.data.id=data.brand_id):(this.data.old_img="",this.data.name="",this.data.id=""),this.data.type=t,this.data.img="",this.dialog=!0},save:function(){var t=this;if("add"==this.data.type)var e="/brand_save";else e="/brand_edit";this.$axios.post(e,this.data,{headers:{"Content-Type":"application/json"}}).then((function(e){"fail"!=e.data?(t.$swal("Save Success","","success"),t.dialog=!1):t.$swal("Save Error","","warning")})).catch((function(e){t.$swal("Save Error","","warning")}))}},watch:{dialog:function(t){0==t&&(this.data={type:"add",name:"",img:"",old_img:""},this.$emit("callback"))}}},o=(n(431),n(45)),l=n(95),c=n.n(l),d=n(141),h=n(152),v=n(363),f=n(346),m=n(153),x=n(364),_=n(377),y=n(401),w=n(140),O=n(121),k=n(419),j=n(90),$=n(44),C=n(348),P=n(349),V=n(383),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{overflow:"",right:"",fixed:"",temporary:"","min-width":"320px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-list-item",[n("v-list-item-title",{staticClass:"headline blue-font1"},[t._v(t._s(t.header))])],1),t._v(" "),n("v-row",{staticClass:"mx-1"},[n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-col",{staticClass:"py-1",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"ชื่อแบรนด์",outlined:"",dense:"",readonly:"detail"==t.data.type,rules:[function(t){return!!t||"Input Request"}]},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1),t._v(" "),n("v-col",{staticClass:"py-1",attrs:{cols:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"d-flex transition-fast-in-fast-out display-1 align-center align-center justify-center",attrs:{height:"200"},on:{click:function(e){return t.$refs.fileinput.click()}}},[n("v-img",{attrs:{src:""!=t.data.img?t.data.img:""!=t.data.old_img?t.data.old_img:"/uploadimg.jpg",height:"200","aspect-ratio":"1.7"}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex display-1 transition-fast-in-fast-out white--text align-center justify-center",staticStyle:{width:"100%",height:"100%"}},[n("v-avatar",{attrs:{size:"48",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-file-upload")])],1)],1):t._e()])],1)],1)]}}])})],1),t._v(" "),n("input",{ref:"fileinput",staticClass:"d-none",attrs:{type:"file"},on:{change:t.uploadfile}})],1)],1),t._v(" "),"detail"!=t.data.type?n("v-layout",{staticClass:"mt-3 layout-action"},[n("v-flex",{staticClass:"p-2"},[n("v-btn",{staticClass:"btn-danger",attrs:{block:""},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("ยกเลิก")])],1),t._v(" "),n("v-flex",{staticClass:"p-2"},[n("v-btn",{staticClass:"btn-primary",attrs:{block:"",disabled:!t.valid},on:{click:function(e){return t.save()}}},[t._v("ยืนยัน")])],1)],1):t._e()],1)}),[],!1,null,"ca604ac0",null),B=component.exports;c()(component,{VAvatar:d.a,VBtn:h.a,VCard:v.a,VCol:f.a,VExpandTransition:m.a,VFlex:x.a,VForm:_.a,VHover:y.a,VIcon:w.a,VImg:O.a,VLayout:k.a,VListItem:j.a,VListItemTitle:$.c,VNavigationDrawer:C.a,VRow:P.a,VTextField:V.a});var S={components:{Modalformbrand:B},head:function(){return{title:this.title}},data:function(){return{title:"แบรนด์สินค้า",dialogForm:!1,listitems:[],form:{search:"",page:1,perpage:10}}},methods:{listdata:function(){var t=this;this.$axios.post("/brand",this.form).then((function(e){t.listitems=e.data})).catch((function(e){t.listitems={list:[],total_perpage:0}}))},del:function(t){var e=this;this.$swal({title:"Are you sure delete?",icon:"warning",buttons:{cancel:!0,confirm:!0}}).then((function(n){1==n&&e.$axios.post("/brand_del",{id:t}).then((function(t){e.$swal("Delete Success","","success"),e.listdata()})).catch((function(t){e.$swal("Delete Error","","warning"),e.listdata()}))}))}},watch:{form:function(t,e){t.page!=e.page&&this.listdata()}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title),this.listdata()}))}},z=n(373),E=n(379),D=n(366),I=Object(o.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{staticClass:"container"},[n("v-flex",[n("v-text-field",{staticClass:"input-search-table",attrs:{filled:"",placeholder:"search",rounded:"",dense:"","append-icon":"fas fa-search","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listdata()},change:function(e){return t.listdata()}},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-flex",{staticClass:"text-right"},[n("v-btn",{staticClass:"btn-type1 ",attrs:{rounded:"",dense:""},on:{click:function(e){return t.$refs.formbrand.open("add",[])}}},[n("v-icon",{attrs:{size:"20",color:"white"}},[t._v("fas fa-plus")]),t._v(" "),n("font",{staticClass:"mx-1"},[t._v("เพิ่มข้อมูล")])],1)],1)],1),t._v(" "),n("client-only",[n("v-layout",{staticClass:"container"},[n("v-simple-table",{staticClass:"tablelist w-100 text-center",scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("th",{staticClass:"title text-left"}),t._v(" "),n("th",{staticClass:"title text-left"},[t._v("ชื่อแบรนด์")]),t._v(" "),n("th",{staticClass:"title text-right"},[t._v("ACTION")])]),t._v(" "),t._l(t.listitems.list,(function(e,r){return n("tbody",{key:r,staticClass:"my-1"},[n("tr",[n("td",[n("v-img",{attrs:{src:e.img,width:"100px"}})],1),t._v(" "),n("td",{staticClass:"text-left subtitle-1"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"text-right"},[n("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(n){return t.$refs.formbrand.open("detail",e)}}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-eye")])],1),t._v(" "),n("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(n){return t.$refs.formbrand.open("edit",e)}}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-pencil-alt")])],1),t._v(" "),n("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(n){return t.del(e.brand_id)}}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1)],1)])])}))]},proxy:!0}])})],1)],1),t._v(" "),n("v-layout",{staticClass:"container"},[n("v-flex",[n("v-pagination",{staticClass:"justify-end",attrs:{length:t.listitems.total_perpage,"total-visible":7,circle:"",color:"primary"},on:{input:function(e){return t.listdata()}},model:{value:t.form.page,callback:function(e){t.$set(t.form,"page",e)},expression:"form.page"}})],1)],1),t._v(" "),n("Modalformbrand",{ref:"formbrand",on:{callback:function(e){return t.listdata()}}})],1)}),[],!1,null,null,null);e.default=I.exports;c()(I,{VAvatar:d.a,VBtn:h.a,VFlex:x.a,VIcon:w.a,VImg:O.a,VLayout:k.a,VPagination:z.a,VSimpleTable:E.a,VSpacer:D.a,VTextField:V.a})}}]);