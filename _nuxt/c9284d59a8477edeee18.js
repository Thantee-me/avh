(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{363:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9);var r=n(2),o=(n(16),n(365),n(149)),l=n(371),c=n(61),d=n(6);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return f({"v-card":!0},c.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},364:function(t,e,n){"use strict";n(355);var r=n(356);e.a=Object(r.a)("flex")},366:function(t,e,n){"use strict";n(355);var r=n(0);e.a=Object(r.i)("spacer","div","v-spacer")},374:function(t,e,n){"use strict";n(68),n(5),n(4),n(9),n(355),n(148);var r=n(356),o=n(62);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,l=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),l)}})},375:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("50788f08",content,!0,{sourceMap:!1})},376:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=e},377:function(t,e,n){"use strict";n(10),n(8),n(9);var r=n(2),o=(n(67),n(5),n(4),n(150),n(31),n(32),n(6)),l=n(69),c=n(97);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},384:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(4);var r={data:function(){return{options:{}}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{getDataFromApi:function(){var t=this;return this.loading=!0,new Promise((function(e,n){var r=t.options;r.sortBy,r.sortDesc;t.form.sortBy=t.options.sortBy[0],t.form.sortDesc=t.options.sortDesc[0]}))}}}},388:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(9),n(67);var r=n(2),o=(n(375),n(381)),l=n(383),c=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=h({},o.b,{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h({},o.a.options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h({},f,{},t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h({},data.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===c.v.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===c.v.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==c.v.backspace&&t!==c.v.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===t){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=input.data||{},input.data.attrs=input.data.attrs||{},input.data.attrs.autocomplete=input.data.attrs.autocomplete||"off",input.data.domProps=input.data.domProps||{},input.data.domProps.value=this.internalSearch,input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(){this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})},394:function(t,e,n){"use strict";n(25);var r=n(2),o=(n(384),{props:["type","user","brand","supplier","type_product","formData"],data:function(){var t;return{valid:!0,lazy:!1,form:[],productnear:[],header:[{text:"Brand",sortable:!1,align:"center",value:"brand_id",class:"title"},{text:"Supplier",sortable:!1,align:"center",value:"supplier_id",class:"title"},{text:"QTY",sortable:!1,align:"center",value:"amount",class:"title"},{text:"Price",sortable:!1,align:"center",value:"price",class:"title"},{text:"วันที่รับสินค้า",sortable:!1,align:"center",value:"date_receive",class:"title"},{text:"สถานที่จัดเก็บ",sortable:!1,align:"center",value:"warehouse_name",class:"title"},(t={text:"ACTION",sortable:!1,align:"center"},Object(r.a)(t,"sortable",!1),Object(r.a)(t,"value","product_id"),Object(r.a)(t,"class","title"),t)],newBrand:[],real_number_list:[],search_realnumber:"",isLoading:!1,checkselectreal:!1,test:1}},methods:{uploadfile:function(t,e){var n=this,r=new FileReader;r.readAsDataURL(e.target.files[0]),r.onload=function(){var data={gallery_pro_id:"",name:r.result};n.form[t].gallery.push(data)}},delgell:function(t,e){this.form[t].gallery.splice(e,1)},brandName:function(t){var text;return this.brand.forEach((function(e){e.id==t&&(text="".concat(e.name))})),text},supplierName:function(t){var text;return this.supplier.forEach((function(e){e.id==t&&(text="".concat(e.name))})),text},appenform:function(){var data=JSON.parse(JSON.stringify(this.form[0])),t=this.form.length;data.brand="",this.form.push(data),this.form[t].brandSelect=this.brandSelect(t)},neardata:function(){var t=this;this.$axios.post("/product_near_data",{id:this.$route.params.id}).then((function(e){t.productnear=e.data})).catch((function(e){t.productnear=[]}))},realgetdata:function(t){self=this,self.real_number_list.forEach((function(e,n){t==e.product_real&&self.$axios.post("/product_getdata",{product_id:e.product_id}).then((function(t){var data=t.data;data.real_number&&(self.form[0].name=data.name,self.form[0].real_number=data.real_number,self.form[0].detail=data.details,self.form[0].supplier=data.supplier_id,self.form[0].type=data.type_id,self.form[0].brand=data.brand_id,self.form[0].cost=data.price,self.form[0].barcode=data.barcode_number,self.form[0].qty=data.amount,self.form[0].minimum=data.min_noti,self.form[0].receive_date=data.date_receive,self.form[0].warehouse=data.warehouse_name,self.form[0].note=data.remarks,self.form[0].gallery=data.gallery,self.form[0].brandSelect=self.brandSelect(0))}))}))},brandSelect:function(t){self=this;var e=[],n=[];return self.form.forEach((function(e,r){r!=t&&n.push(e.brand)})),self.brand.forEach((function(t){n.indexOf(t.id)<0&&e.push(t)})),e},updatebrandselect:function(){self=this,self.form.forEach((function(t,e){self.form[e].brandSelect=self.brandSelect(e)}))}},watch:{search_realnumber:function(t){var e=0;self=this,(null==t||t.length<0)&&(e=1),1==self.isLoading&&(e=2),self.real_number_list.length>0&&self.real_number_list.forEach((function(t){self.search_realnumber==t.real_number&&(e=3,self.search_realnumber=self.search_realnumber)})),0==e&&(self.isLoading=!0,self.$axios.post("/product_autocomplete",{real_number:self.search_realnumber}).then((function(t){t.data.length>0?(self.real_number_list=t.data,self.isLoading=!1):(self.real_number_list=[{real_number:self.search_realnumber}],self.isLoading=!1)})))}},mounted:function(){this.$nextTick((function(){"add"==this.type?(this.form=[{menu:!1,gallery:[],name:"",real_number:"",detail:"",supplier:"",type:"",brand:"",cost:"",barcode:"",qty:"",minimum:"",receive_date:(new Date).toISOString().substr(0,10),warehouse:"",note:"",user:this.user}],this.form[0].brandSelect=this.brandSelect(0)):(this.form=[],this.form.push(this.formData),this.real_number_list=[{real_number:this.formData.real_number,product_real:this.formData.real_number}],console.log(),this.form[0].brandSelect=this.brandSelect(0),this.neardata())}))}}),l=n(45),c=n(95),d=n.n(c),h=n(388),f=n(141),m=n(152),v=n(363),_=n(346),y=n(374),x=n(478),I=n(476),S=n(153),w=n(364),O=n(377),k=n(402),j=n(140),D=n(121),$=n(122),C=n(421),P=n(90),V=n(44),B=n(337),E=n(349),F=n(366),T=n(383),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},t._l(t.form,(function(e,r){return n("div",{key:r},[n("v-card",{staticClass:"my-2"},[n("v-list-item",{attrs:{"two-line":"add"==t.type}},[n("v-list-item-title",{staticClass:"headline"},[t._v("อัพโหลดรูปภาพสินค้า")]),t._v(" "),"add"==t.type&&r>0?n("v-list-item-title",{staticClass:"text-right"},[n("v-btn",{staticClass:"btn-danger mx-1",on:{click:function(e){return t.form.splice(r,1)}}},[t._v("ลบ")])],1):t._e()],1),t._v(" "),n("v-item-group",[n("v-container",[n("v-row",[t._l(e.gallery,(function(i,e){return n("v-col",{key:e,attrs:{cols:"3",sm:"2"},on:{click:function(n){return n.stopPropagation(),t.delgell(r,e)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"d-flex align-center",attrs:{dark:"",height:"200"}},[n("v-img",{attrs:{src:i.name,height:"200",contain:"","aspect-ratio":"1.7"}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex display-1 transition-fast-in-fast-out white--text align-center justify-center",staticStyle:{width:"100%",height:"100%"}},[n("v-avatar",{attrs:{size:"48",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1)],1):t._e()])],1)],1)]}}],null,!0)})],1)})),t._v(" "),n("v-col",{attrs:{cols:"3",sm:"2"},on:{click:function(e){return e.stopPropagation(),t.$refs.fileinput[r].click()}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"d-flex transition-fast-in-fast-out display-1 align-center align-center justify-center",attrs:{height:"200"}},[n("v-img",{attrs:{src:"/uploadimg.jpg",height:"200","aspect-ratio":"1.7"}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex display-1 transition-fast-in-fast-out white--text align-center justify-center",staticStyle:{width:"100%",height:"100%"}},[n("v-avatar",{attrs:{size:"48",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-file-upload")])],1)],1):t._e()])],1)],1)]}}],null,!0)})],1),t._v(" "),n("input",{ref:"fileinput",refInFor:!0,staticClass:"d-none",attrs:{type:"file"},on:{change:function(e){return e.stopPropagation(),t.uploadfile(r,e)}}})],2)],1)],1)],1),t._v(" "),n("v-card",{staticClass:"my-2"},[n("v-list-item",[n("v-list-item-title",{staticClass:"headline"},[t._v("ข้อมูลสินค้า")])],1),t._v(" "),n("v-list-item",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{outlined:"",label:"ชื่อสินค้า",rules:[function(t){return!!t||"Input Request"}],dense:"",readonly:"detail"==t.type||r>0},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"n.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-autocomplete",{attrs:{outlined:"",label:"Real number",items:t.real_number_list,"item-text":"real_number","item-value":"product_real","search-input":t.search_realnumber,rules:[function(t){return!!t||"Input Request"}],dense:"",readonly:"detail"==t.type||r>0},on:{"update:searchInput":function(e){t.search_realnumber=e},"update:search-input":function(e){t.search_realnumber=e},change:t.realgetdata},model:{value:e.real_number,callback:function(n){t.$set(e,"real_number",n)},expression:"n.real_number"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{outlined:"",label:"รายละเอียด",dense:"",readonly:"detail"==t.type},model:{value:e.detail,callback:function(n){t.$set(e,"detail",n)},expression:"n.detail"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{outlined:"","hide-selected":"","no-filter":"",items:e.brandSelect,"item-text":"name","item-value":"id",label:"แบรนด์สินค้า",rules:[function(t){return!!t||"Input Request"}],dense:"",readonly:"detail"==t.type},on:{change:t.updatebrandselect},model:{value:e.brand,callback:function(n){t.$set(e,"brand",n)},expression:"n.brand"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{outlined:"",items:t.type_product,"item-text":"name","item-value":"id",label:"ชนิดสินค้า",rules:[function(t){return!!t||"Input Request"}],dense:"",readonly:"detail"==t.type||r>0},model:{value:e.type,callback:function(n){t.$set(e,"type",n)},expression:"n.type"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{outlined:"",items:t.supplier,"item-text":"name","item-value":"id",label:"บริษัทผู้จำหน่าย",rules:[function(t){return!!t||"Input Request"}],dense:"",readonly:"detail"==t.type},model:{value:e.supplier,callback:function(n){t.$set(e,"supplier",n)},expression:"n.supplier"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{type:"number",outlined:"",label:"ราคาต่อหน่วย",rules:[function(t){return!!t||"Input Request"}],dense:"",readonly:"detail"==t.type},model:{value:e.cost,callback:function(n){t.$set(e,"cost",n)},expression:"n.cost"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{outlined:"",label:"Barcodenumber",dense:"",readonly:"detail"==t.type},model:{value:e.barcode,callback:function(n){t.$set(e,"barcode",n)},expression:"n.barcode"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{outlined:"",label:"จำนวน",dense:"",readonly:"detail"==t.type},model:{value:e.qty,callback:function(n){t.$set(e,"qty",n)},expression:"n.qty"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{type:"number",outlined:"",label:"minimum",rules:[function(t){return!!t||"Input Request"}],dense:"",readonly:"detail"==t.type},model:{value:e.minimum,callback:function(n){t.$set(e,"minimum",n)},expression:"n.minimum"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("v-text-field",t._g({attrs:{label:"วันที่รับสินค้าเข้า",outlined:"",dense:"",readonly:""},model:{value:e.receive_date,callback:function(n){t.$set(e,"receive_date",n)},expression:"n.receive_date"}},o))]}}],null,!0),model:{value:e.menu,callback:function(n){t.$set(e,"menu",n)},expression:"n.menu"}},[t._v(" "),n("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.receive_date,callback:function(n){t.$set(e,"receive_date",n)},expression:"n.receive_date"}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{outlined:"",label:"สถานที่จัดเก็บ",dense:"",readonly:"detail"==t.type},model:{value:e.warehouse,callback:function(n){t.$set(e,"warehouse",n)},expression:"n.warehouse"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{outlined:"",label:"หมายเหตุ",dense:"",readonly:"detail"==t.type},model:{value:e.note,callback:function(n){t.$set(e,"note",n)},expression:"n.note"}})],1)],1)],1)],1)],1)})),0),t._v(" "),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-title",{staticClass:"headline"},["add"!=t.type?n("font",[t._v("รายการขายสินค้าใกล้เคียง")]):t._e()],1),t._v(" "),"add"==t.type?n("v-btn",{staticClass:"btn-type1",attrs:{rounded:"",dense:""},on:{click:function(e){return t.appenform()}}},[n("v-icon",{attrs:{size:"18",color:"white"}},[t._v("fas fa-plus")]),t._v(" "),n("font",{staticClass:"mx-1"},[t._v("เพิ่มสินค้า")])],1):t._e()],1),t._v(" "),"add"!=t.type?n("v-list-item",[n("v-data-table",{staticClass:"tablelist w-100 text-center",attrs:{headers:t.header,items:t.productnear,"hide-default-footer":""},scopedSlots:t._u([{key:"item.brand_id",fn:function(e){var n=e.item;return[t._v(t._s(t.brandName(n.brand_id)))]}},{key:"item.supplier_id",fn:function(e){var n=e.item;return[t._v(t._s(t.supplierName(n.supplier_id)))]}},{key:"item.product_id",fn:function(e){var r=e.item;return[n("nuxt-link",{attrs:{tag:"span",to:"/products/"+r.product_id+"/detail"}},[n("v-avatar",{attrs:{size:"26",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-eye")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{tag:"span",to:"/products/"+r.product_id+"/edit"}},[n("v-avatar",{attrs:{size:"26",color:"primary"}},[n("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-pencil-alt")])],1)],1)]}}],null,!1,3290072114)})],1):t._e(),t._v(" "),"detail"!=t.type?n("v-layout",{staticClass:"mt-3"},[n("v-spacer"),t._v(" "),n("v-flex",{staticClass:"text-right"},[n("nuxt-link",{staticClass:"btn btn-danger mx-1",attrs:{to:"/products",tag:"button"}},[t._v("ยกเลิก")]),t._v(" "),n("v-btn",{staticClass:"btn-primary mx-1",on:{click:function(e){return t.$emit("callback",t.form)}}},[t._v("ยืนยัน")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VAutocomplete:h.a,VAvatar:f.a,VBtn:m.a,VCard:v.a,VCol:_.a,VContainer:y.a,VDataTable:x.a,VDatePicker:I.a,VExpandTransition:S.a,VFlex:w.a,VForm:O.a,VHover:k.a,VIcon:j.a,VImg:D.a,VItemGroup:$.b,VLayout:C.a,VListItem:P.a,VListItemTitle:V.c,VMenu:B.a,VRow:E.a,VSpacer:F.a,VTextField:T.a})},402:function(t,e,n){"use strict";var r=n(100),o=n(35),l=n(6),c=n(7);e.a=Object(l.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},497:function(t,e,n){"use strict";n.r(e);n(25),n(5),n(4),n(41);var r=n(15),o=(n(49),n(13)),l={components:{Formproducts:n(394).a},head:function(){return{title:this.title}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,d,h,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,n=t.$axios,o=t.route,e.next=3,Promise.all([n.$get("/brand_data"),n.$get("/supplier_data"),n.$get("/type_data"),n.$post("/product_view_edit",{id:o.params.id})]);case 3:return l=e.sent,c=Object(r.a)(l,4),d=c[0],h=c[1],f=c[2],m=c[3],e.abrupt("return",{brands:d,suppliers:h,type_products:f,data:m});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"แก้ไขข้อมูลสินค้า",brands:[],suppliers:[],type_products:[],breadcrumbs:[{text:"ระบบจัดการสินค้า",disabled:!1,href:"/products"},{text:"แก้ไขข้อมูลสินค้า",disabled:!0}],data:[]}},computed:{newarray:function(){return{menu:!1,product_id:this.$route.params.id,gallery:this.data.gallery,name:this.data.name,real_number:this.data.real_number,detail:this.data.details,supplier:this.data.supplier_id,type:this.data.type_id,brand:this.data.brand_id,cost:this.data.price,barcode:this.data.barcode_number,qty:this.data.amount,minimum:this.data.min_noti,receive_date:this.data.date_receive,warehouse:this.data.warehouse_name,note:this.data.remarks,user:this.user}}},methods:{save:function(data){var t=this;this.$axios.post("/product_edit",{alldata:data},{headers:{"Content-Type":"application/json"}}).then((function(e){t.$swal("Save data Success","","success"),t.$router.push("/products")})).catch((function(e){t.$swal("Save data Error","","warning")}))}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title)}))}},c=n(45),d=n(95),h=n.n(d),f=n(374),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-xs":""}},[n("nav",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,(function(i,e){return n("nuxt-link",{key:e,staticClass:"breadcrumb-item",class:{active:e==t.breadcrumbs.length-1},attrs:{tag:"a",to:i.href?i.href:""}},[t._v(t._s(i.text))])})),1)]),t._v(" "),n("Formproducts",{attrs:{type:"edit",brand:t.brands,user:t.userlogin.id,supplier:t.suppliers,type_product:t.type_products,formData:t.newarray},on:{callback:t.save}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VContainer:f.a})}}]);