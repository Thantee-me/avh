(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{358:function(t,e,n){"use strict";n(350);var r=n(351);e.a=Object(r.a)("flex")},359:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9);var r=n(2),o=(n(16),n(361),n(146)),l=n(367),c=n(57),d=n(6);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return f({"v-card":!0},c.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},360:function(t,e,n){"use strict";n(350);var r=n(0);e.a=Object(r.i)("spacer","div","v-spacer")},369:function(t,e,n){"use strict";n(66),n(5),n(4),n(9),n(350),n(144);var r=n(351),o=n(56);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,l=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),l)}})},370:function(t,e,n){var content=n(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("50788f08",content,!0,{sourceMap:!1})},371:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=e},372:function(t,e,n){"use strict";n(10),n(8),n(9);var r=n(2),o=(n(63),n(5),n(4),n(145),n(27),n(28),n(6)),l=n(67),c=n(92);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},379:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(4);var r={data:function(){return{options:{}}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{getDataFromApi:function(){var t=this;return this.loading=!0,new Promise((function(e,n){var r=t.options;r.sortBy,r.sortDesc;t.form.sortBy=t.options.sortBy[0],t.form.sortDesc=t.options.sortDesc[0]}))}}}},382:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9),n(63);var r=n(2),o=(n(370),n(375)),l=n(377),c=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=h({},o.b,{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h({},o.a.options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h({},f,{},t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h({},data.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===c.v.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===c.v.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==c.v.backspace&&t!==c.v.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===t){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=input.data||{},input.data.attrs=input.data.attrs||{},input.data.attrs.autocomplete=input.data.attrs.autocomplete||"off",input.data.domProps=input.data.domProps||{},input.data.domProps.value=this.internalSearch,input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(){this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})},388:function(t,e,n){"use strict";n(34);var r=n(2),o=(n(379),{props:["type","user","brand","supplier","type_product","formData"],data:function(){var t;return{valid:!0,lazy:!1,form:[],productnear:[],header:[{text:"Brand",sortable:!1,align:"center",value:"brand_id",class:"title"},{text:"Supplier",sortable:!1,align:"center",value:"supplier_id",class:"title"},{text:"QTY",sortable:!1,align:"center",value:"amount",class:"title"},{text:"Price",sortable:!1,align:"center",value:"price",class:"title"},{text:"วันที่รับสินค้า",sortable:!1,align:"center",value:"date_receive",class:"title"},{text:"สถานที่จัดเก็บ",sortable:!1,align:"center",value:"warehouse_name",class:"title"},(t={text:"ACTION",sortable:!1,align:"center"},Object(r.a)(t,"sortable",!1),Object(r.a)(t,"value","product_id"),Object(r.a)(t,"class","title"),t)]}},methods:{uploadfile:function(t,e){var n=this,r=new FileReader;r.readAsDataURL(e.target.files[0]),r.onload=function(){var data={gallery_pro_id:"",name:r.result};n.form[t].gallery.push(data)}},delgell:function(t,e){this.form[t].gallery.splice(e,1)},brandName:function(t){var text;return this.brand.forEach((function(e){e.id==t&&(text="".concat(e.name))})),text},supplierName:function(t){var text;return this.supplier.forEach((function(e){e.id==t&&(text="".concat(e.name))})),text},appenform:function(){var data=JSON.parse(JSON.stringify(this.form[0]));this.form.push(data)},neardata:function(){var t=this;this.$axios.post("/product_near_data",{id:this.$route.params.id}).then((function(e){t.productnear=e.data})).catch((function(e){t.productnear=[]}))}},mounted:function(){this.$nextTick((function(){"add"==this.type?this.form=[{menu:!1,gallery:[],name:"",real_number:"",detail:"",supplier:"",type:"",brand:"",cost:"",barcode:"",qty:"",minimum:"",receive_date:(new Date).toISOString().substr(0,10),warehouse:"",note:"",user:this.user}]:(this.form=[],this.form.push(this.formData),this.neardata())}))}}),l=n(42),c=n(90),d=n.n(c),h=n(382),f=n(137),v=n(148),m=n(359),y=n(341),_=n(369),x=n(470),I=n(468),S=n(149),O=n(358),w=n(372),k=n(98),j=n(29),C=n(6),D=n(7),$=Object(C.a)(k.a,j.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(D.c)("v-hover should only contain a single element",this),element)):(Object(D.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),P=n(136),V=n(117),B=n(118),E=n(413),F=n(86),T=n(41),A=n(332),M=n(344),z=n(360),R=n(377),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},t._l(t.form,(function(e,r){return n("div",{key:r},[n("v-card",{staticClass:"my-2"},[n("v-list-item",{attrs:{"two-line":"add"==t.type}},[n("v-list-item-title",{staticClass:"headline"},[t._v("อัพโหลดรูปภาพสินค้า")]),t._v(" "),"add"==t.type&&r>0?n("v-list-item-title",{staticClass:"text-right"},[n("v-btn",{staticClass:"btn-danger mx-1",on:{click:function(e){return t.form.splice(r,1)}}},[t._v("ลบ")])],1):t._e()],1),t._v(" "),n("v-item-group",[n("v-container",[n("v-row",[t._l(e.gallery,(function(i,e){return n("v-col",{key:e,attrs:{cols:"3",sm:"2"},on:{click:function(n){return n.stopPropagation(),t.delgell(r,e)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"d-flex align-center",attrs:{dark:"",height:"200"}},[n("v-img",{attrs:{src:i.name,height:"200",contain:"","aspect-ratio":"1.7"}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex display-1 transition-fast-in-fast-out white--text align-center justify-center",staticStyle:{width:"100%",height:"100%"}},[n("v-avatar",{attrs:{size:"48",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1)],1):t._e()])],1)],1)]}}],null,!0)})],1)})),t._v(" "),n("v-col",{attrs:{cols:"3",sm:"2"},on:{click:function(e){return e.stopPropagation(),t.$refs.fileinput[r].click()}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"d-flex transition-fast-in-fast-out display-1 align-center align-center justify-center",attrs:{height:"200"}},[n("v-img",{attrs:{src:"/uploadimg.jpg",height:"200","aspect-ratio":"1.7"}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex display-1 transition-fast-in-fast-out white--text align-center justify-center",staticStyle:{width:"100%",height:"100%"}},[n("v-avatar",{attrs:{size:"48",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-file-upload")])],1)],1):t._e()])],1)],1)]}}],null,!0)})],1),t._v(" "),n("input",{ref:"fileinput",refInFor:!0,staticClass:"d-none",attrs:{type:"file"},on:{change:function(e){return e.stopPropagation(),t.uploadfile(r,e)}}})],2)],1)],1)],1),t._v(" "),n("v-card",{staticClass:"my-2"},[n("v-list-item",[n("v-list-item-title",{staticClass:"headline"},[t._v("ข้อมูลสินค้า")])],1),t._v(" "),n("v-list-item",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{outlined:"",label:"ชื่อสินค้า",rules:[function(t){return!!t||"Input Request"}],"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"n.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{outlined:"",label:"Real number",rules:[function(t){return!!t||"Input Request"}],"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.real_number,callback:function(n){t.$set(e,"real_number",n)},expression:"n.real_number"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{outlined:"",label:"รายละเอียด","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.detail,callback:function(n){t.$set(e,"detail",n)},expression:"n.detail"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{outlined:"",items:t.supplier,"item-text":"name","item-value":"id",label:"บริษัทผู้จำหน่าย",rules:[function(t){return!!t||"Input Request"}],"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.supplier,callback:function(n){t.$set(e,"supplier",n)},expression:"n.supplier"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{outlined:"",items:t.type_product,"item-text":"name","item-value":"id",label:"ชนิดสินค้า",rules:[function(t){return!!t||"Input Request"}],"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.type,callback:function(n){t.$set(e,"type",n)},expression:"n.type"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{outlined:"",items:t.brand,"item-text":"name","item-value":"id",label:"แบรนด์สินค้า",rules:[function(t){return!!t||"Input Request"}],"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.brand,callback:function(n){t.$set(e,"brand",n)},expression:"n.brand"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{type:"number",outlined:"",label:"ราคาต่อหน่วย",rules:[function(t){return!!t||"Input Request"}],"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.cost,callback:function(n){t.$set(e,"cost",n)},expression:"n.cost"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{outlined:"",label:"Barcodenumber","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.barcode,callback:function(n){t.$set(e,"barcode",n)},expression:"n.barcode"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{outlined:"",label:"จำนวน","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.qty,callback:function(n){t.$set(e,"qty",n)},expression:"n.qty"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{type:"number",outlined:"",label:"minimum",rules:[function(t){return!!t||"Input Request"}],"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.minimum,callback:function(n){t.$set(e,"minimum",n)},expression:"n.minimum"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("v-text-field",t._g({attrs:{label:"วันที่รับสินค้าเข้า",outlined:"","hide-details":"",dense:"",readonly:""},model:{value:e.receive_date,callback:function(n){t.$set(e,"receive_date",n)},expression:"n.receive_date"}},o))]}}],null,!0),model:{value:e.menu,callback:function(n){t.$set(e,"menu",n)},expression:"n.menu"}},[t._v(" "),n("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.receive_date,callback:function(n){t.$set(e,"receive_date",n)},expression:"n.receive_date"}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{outlined:"",label:"สถานที่จัดเก็บ","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.warehouse,callback:function(n){t.$set(e,"warehouse",n)},expression:"n.warehouse"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{outlined:"",label:"หมายเหตุ","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:e.note,callback:function(n){t.$set(e,"note",n)},expression:"n.note"}})],1)],1)],1)],1)],1)})),0),t._v(" "),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-title",{staticClass:"headline"},["add"!=t.type?n("font",[t._v("รายการขายสินค้าใกล้เคียง")]):t._e()],1),t._v(" "),"add"==t.type?n("v-btn",{staticClass:"btn-type1",attrs:{rounded:"",dense:""},on:{click:function(e){return t.appenform()}}},[n("v-icon",{attrs:{size:"18",color:"white"}},[t._v("fas fa-plus")]),t._v(" "),n("font",{staticClass:"mx-1"},[t._v("เพิ่มสินค้า")])],1):t._e()],1),t._v(" "),"add"!=t.type?n("v-list-item",[n("v-data-table",{staticClass:"tablelist w-100 text-center",attrs:{headers:t.header,items:t.productnear,"hide-default-footer":""},scopedSlots:t._u([{key:"item.brand_id",fn:function(e){var n=e.item;return[t._v(t._s(t.brandName(n.brand_id)))]}},{key:"item.supplier_id",fn:function(e){var n=e.item;return[t._v(t._s(t.supplierName(n.supplier_id)))]}},{key:"item.product_id",fn:function(e){var r=e.item;return[n("nuxt-link",{attrs:{tag:"span",to:"/products/"+r.product_id+"/detail"}},[n("v-avatar",{attrs:{size:"26",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-eye")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{tag:"span",to:"/products/"+r.product_id+"/edit"}},[n("v-avatar",{attrs:{size:"26",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-pencil-alt")])],1)],1)]}}],null,!1,3290072114)})],1):t._e(),t._v(" "),"detail"!=t.type?n("v-layout",{staticClass:"mt-3"},[n("v-spacer"),t._v(" "),n("v-flex",{staticClass:"text-right"},[n("nuxt-link",{staticClass:"btn btn-danger mx-1",attrs:{to:"/products",tag:"button"}},[t._v("ยกเลิก")]),t._v(" "),n("v-btn",{staticClass:"btn-primary mx-1",on:{click:function(e){return t.$emit("callback",t.form)}}},[t._v("ยืนยัน")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VAutocomplete:h.a,VAvatar:f.a,VBtn:v.a,VCard:m.a,VCol:y.a,VContainer:_.a,VDataTable:x.a,VDatePicker:I.a,VExpandTransition:S.a,VFlex:O.a,VForm:w.a,VHover:$,VIcon:P.a,VImg:V.a,VItemGroup:B.b,VLayout:E.a,VListItem:F.a,VListItemTitle:T.c,VMenu:A.a,VRow:M.a,VSpacer:z.a,VTextField:R.a})},483:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(58);var r,o=n(15),l=(n(46),n(13)),c={components:{Formproducts:n(388).a},head:function(){return{title:this.title}},asyncData:(r=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,l,c,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,n=e.$axios,t.next=3,Promise.all([n.$get("/brand_data"),n.$get("/supplier_data"),n.$get("/type_data")]);case 3:return r=t.sent,l=Object(o.a)(r,3),c=l[0],d=l[1],h=l[2],t.abrupt("return",{brands:c,suppliers:d,type_products:h});case 9:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),data:function(){return{title:"เพิ่มข้อมูลสินค้า",brands:[],suppliers:[],type_products:[],breadcrumbs:[{text:"ระบบจัดการสินค้า",disabled:!1,href:"/customer"},{text:"เพิ่มข้อมูลสินค้า",disabled:!0}]}},methods:{save:function(data){var t=this;this.$axios.post("/product_save",{alldata:data},{headers:{"Content-Type":"application/json"}}).then((function(e){t.$swal("Save data Success","","success"),t.$router.push("/products")})).catch((function(e){t.$swal("Save data Error","","warning")}))}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title)}))}},d=n(42),h=n(90),f=n.n(h),v=n(369),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-xs":""}},[n("nav",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,(function(i,e){return n("nuxt-link",{key:e,staticClass:"breadcrumb-item",class:{active:e==t.breadcrumbs.length-1},attrs:{tag:"a",to:i.href?i.href:""}},[t._v(t._s(i.text))])})),1)]),t._v(" "),n("Formproducts",{attrs:{type:"add",brand:t.brands,user:t.userlogin.id,supplier:t.suppliers,type_product:t.type_products},on:{callback:t.save}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VContainer:v.a})}}]);