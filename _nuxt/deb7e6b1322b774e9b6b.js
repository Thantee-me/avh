(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{362:function(t,e,n){"use strict";n(10),n(6),n(5),n(4),n(9);var r=n(2),l=(n(16),n(364),n(152)),o=n(370),c=n(62),d=n(7);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(o.a,c.a,l.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},l.a.options.computed.classes.call(this))},styles:function(){var style=v({},l.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},371:function(t,e,n){var content=n(372);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("50788f08",content,!0,{sourceMap:!1})},372:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=e},375:function(t,e,n){"use strict";n(68),n(5),n(4),n(9),n(358),n(151);var r=n(363),l=n(61);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},384:function(t,e,n){"use strict";n(10),n(6),n(5),n(4),n(9),n(67);var r=n(2),l=(n(371),n(379)),o=n(381),c=n(61),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=v(v({},l.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=l.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:l.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return v(v({},l.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=l.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),v(v({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=l.a.options.computed.listData.call(this);return data.props=v(v({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.v.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.v.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.v.backspace&&t!==d.v.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===t){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,l.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.n)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.n)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=l.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?l.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;l.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){l.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){l.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){l.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})},396:function(t,e,n){"use strict";n(16);var r={data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,products:[{real:Number}]}},methods:{addproduct:function(){var data={real:Number};this.products.push(data)}}},l=n(46),o=n(96),c=n.n(o),d=n(384),h=n(155),v=n(362),f=n(348),m=n(375),x=n(485),I=n(483),y=n(141),S=n(427),_=n(91),C=n(45),O=n(339),w=n(351),D=n(382),k=n(381),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticClass:"my-3"},[n("v-list-item",[n("v-list-item-title",{staticClass:"headline"},[t._v("การโยกย้ายสินค้า")])],1),t._v(" "),n("v-list-item",[n("v-row",[n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{dense:"",outlined:"",label:"เลขที่การโยกย้ายสินค้า","hide-details":""}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{dense:"",outlined:"",label:"วันที่ทำรายการ","hide-details":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{dense:"",outlined:"",label:"สาขาต้นทาง","hide-details":""}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-autocomplete",{attrs:{dense:"",outlined:"",label:"สาขาปลายทาง","hide-details":""}})],1)],1)],1)],1),t._v(" "),n("v-card",{staticClass:"my-3"},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-title",{staticClass:"headline"},[t._v("การโยกย้ายสินค้า")]),t._v(" "),n("v-btn",{staticClass:"btn-type1 ",attrs:{rounded:"",dense:""},on:{click:function(e){return t.addproduct()}}},[n("v-icon",{attrs:{size:"18",color:"white"}},[t._v("fas fa-plus")]),t._v(" "),n("font",{staticClass:"mx-1"},[t._v("เพิ่มสินค้า")])],1)],1),t._v(" "),t._l(t.products,(function(p,e){return n("v-list-item",{key:e},[n("v-row",[n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{dense:"","hide-details":"",label:"Real No",outlined:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{dense:"","hide-details":"",label:"รายละเอียดสินค้า",outlined:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"3"}},[n("v-text-field",{attrs:{dense:"","hide-details":"",label:"แบรนด์",outlined:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"2",sm:"1"}},[n("v-text-field",{attrs:{dense:"","hide-details":"",label:"สต็อกกลาง",outlined:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"2",sm:"1"}},[n("v-text-field",{attrs:{dense:"","hide-details":"",label:"จำนวนโยกย้าย",outlined:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"2",sm:"1"}},[n("v-btn",{staticClass:"btn-danger",on:{click:function(n){return n.stopPropagation(),t.products.splice(e,1)}}},[n("v-icon",{attrs:{small:""}},[t._v("fas fa-times")])],1)],1)],1)],1)})),t._v(" "),n("v-list-item",[n("v-layout",{staticClass:"row"},[n("v-col",{staticClass:"row",attrs:{cols:"12",sm:"4","offset-sm":"8"}},[n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("p",{staticClass:"m-0 subtitle-1"},[t._v("รายการทั้งหมด")]),t._v(" "),n("p",{staticClass:"m-0 subtitle-1"},[t._v("จำนวนชิ้นทั้งหมด")])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[n("p",{staticClass:"m-0 subtitle-1"},[t._v("0 รายการ")]),t._v(" "),n("p",{staticClass:"m-0 subtitle-1"},[t._v("0 ชิ้น")])])],1)],1)],1)],2),t._v(" "),n("v-layout",{staticClass:"mt-3"},[n("v-spacer"),t._v(" "),n("v-flex",{staticClass:"text-right"},[n("nuxt-link",{staticClass:"btn btn-danger mx-1",attrs:{to:"/tranfer_product",tag:"button"}},[t._v("ยกเลิก")]),t._v(" "),n("v-btn",{staticClass:"btn-primary mx-1"},[t._v("ยืนยัน")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VAutocomplete:d.a,VBtn:h.a,VCard:v.a,VCol:f.a,VContainer:m.a,VDatePicker:x.a,VFlex:I.a,VIcon:y.a,VLayout:S.a,VListItem:_.a,VListItemTitle:C.c,VMenu:O.a,VRow:w.a,VSpacer:D.a,VTextField:k.a})},507:function(t,e,n){"use strict";n.r(e);var r={components:{Formtranferproduct:n(396).a},head:function(){return{title:this.title}},data:function(){return{title:"ฟอร์มการโยกย้ายสินค้า",breadcrumbs:[{text:"การโยกย้ายสินค้า",disabled:!1,href:"/tranfer_product"},{text:"ฟอร์มการโยกย้ายสินค้า",disabled:!0}]}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title)}))}},l=n(46),o=n(96),c=n.n(o),d=n(375),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-xs":""}},[n("nav",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,(function(i,e){return n("nuxt-link",{key:e,staticClass:"breadcrumb-item",class:{active:e==t.breadcrumbs.length-1},attrs:{tag:"a",to:i.href?i.href:""}},[t._v(t._s(i.text))])})),1)]),t._v(" "),n("Formtranferproduct",{attrs:{type:"edit"}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a})}}]);