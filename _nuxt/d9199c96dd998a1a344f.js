(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{392:function(t,e,r){"use strict";var l={props:["dataselect"],data:function(){return{dialog:!1,form:{search:"",page:1,perpage:10},listitems:[],headers:[{text:"รหัสลูกค้า",sortable:!1,alige:"center",class:"title",value:"customer_code"},{text:"ชื่อลูกค้า",sortable:!1,alige:"center",class:"title",value:"customer_name"},{text:"เครดิต",sortable:!1,alige:"center",class:"title",value:"customer_cedit"},{text:"เลขประจำตัวผู้เสียภาษี",sortable:!1,alige:"center",class:"title",value:"customer_tax"},{text:"ที่อยู่",sortable:!1,alige:"center",class:"title",value:"customer_address"},{text:"เบอร์โทรศัพท์",sortable:!1,alige:"center",class:"title",value:"customer_tell"}],selectedcustomer:[]}},methods:{listdata:function(){var t=this;this.$axios.post("/customer/index",this.form).then((function(e){t.listitems=e.data})).catch((function(e){t.listitems={list:[],total_perpage:0}}))},open:function(data){this.selectedcustomer=data,this.dialog=!0}},watch:{dialog:function(t){1==t?this.listdata():this.form={search:"",page:1,perpage:10}}}},n=r(45),o=r(95),c=r.n(o),m=r(152),d=r(362),v=r(356),f=r(478),_=r(406),h=r(475),x=r(140),y=r(420),C=r(90),k=r(76),w=r(44),V=r(374),U=r(365),$=r(382),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"","max-width":"1200px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"mx-1"},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-title",{staticClass:"headline blue-font1"},[t._v("ระบบจัดการลูกค้า")]),t._v(" "),r("v-list-item-icon",[r("v-icon",{attrs:{small:""},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("fas fa-times")])],1)],1)],1),t._v(" "),r("v-card-text",{staticClass:"mx-1"},[r("v-layout",{staticClass:"container"},[r("v-data-table",{staticClass:"tablelist w-100 mt-3",attrs:{headers:t.headers,items:t.listitems.Customer,"item-key":"customer_id","show-select":"","hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-text-field",{staticClass:"input-search-table",attrs:{filled:"",placeholder:"search",rounded:"",dense:"","append-icon":"fas fa-search","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listdata()}},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})]},proxy:!0},{key:"item.customer_cedit",fn:function(e){var r=e.item;return[t._v("\n                            "+t._s(r.customer_cedit)+" วัน \n                        ")]}},{key:"footer",fn:function(){return[r("v-pagination",{staticClass:"justify-end",attrs:{length:t.listitems.total_perpage,"total-visible":7,circle:"",color:"primary"},on:{input:function(e){return t.listdata()}},model:{value:t.form.page,callback:function(e){t.$set(t.form,"page",e)},expression:"form.page"}})]},proxy:!0}]),model:{value:t.selectedcustomer,callback:function(e){t.selectedcustomer=e},expression:"selectedcustomer"}})],1),t._v(" "),r("v-layout",{staticClass:"mt-3"},[r("v-spacer"),t._v(" "),r("v-flex",{staticClass:"text-right"},[r("v-btn",{staticClass:"btn-danger mx-1",on:{click:function(e){t.dialog=!t.dialog}}},[t._v("ยกเลิก")]),t._v(" "),r("v-btn",{staticClass:"btn-primary mx-1",on:{click:function(e){t.$emit("callback",t.selectedcustomer),t.dialog=!t.dialog}}},[t._v("ยืนยัน")])],1)],1)],1)],1)],1)}),[],!1,null,null,null),T=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardText:v.a,VCardTitle:v.b,VDataTable:f.a,VDialog:_.a,VFlex:h.a,VIcon:x.a,VLayout:y.a,VListItem:C.a,VListItemIcon:k.a,VListItemTitle:w.c,VPagination:V.a,VSpacer:U.a,VTextField:$.a});var E={props:["type","dataForm"],components:{Modallistcustomer:T},computed:{newarraypermissionuser:function(){var t={},e="",r="",l=-1,n=-1;return this.permissionuser.forEach((function(o){if(r!=o.group_id&&(n++,r=o.group_id,t[n]={}),e!=o.permissions_name){l++,e=o.permissions_name;var c={group:o.group,permissions_id:o.permissions_id,checkvalue:{permissions_id:o.permissions_id}},data={name:o.permissions_name,value:[c]};t[n][l]=data}else{c={group:o.group,permissions_id:o.permissions_id,checkvalue:{permissions_id:o.permissions_id}};t[n][l].value.push(c)}})),t},arraypermissionView:function(){var t=[];return this.permissionuser.forEach((function(e){"View"==e.group&&t.push(e.permissions_id)})),t},arraypermissionEdit:function(){var t=[];return this.permissionuser.forEach((function(e){"Edit"==e.group&&t.push(e.permissions_id)})),t}},data:function(){return{valid:!0,lazy:!1,checkallview:!1,checkalledit:!1,form:{name:"",tell:"",email:"",password:"",position_id:"",branch_id:"",department_id:"",department_name:"",User_customerlist:[],User_permissions:[]},checkunique:[]}},methods:{verifyemail:function(){var t=this;this.$axios.post("/users/checkEmail",{email:this.form.email}).then((function(e){"fail"==e.data?t.checkunique=["The Email is Unique"]:t.checkunique=[]}))},addcustomer:function(data){this.form.User_customerlist=data}},watch:{checkallview:function(t){self=this;for(var e=self.arraypermissionView,r=self.form.User_permissions,l=[],n=0;n<r.length;n++)e.indexOf(r[n].permissions_id)<0&&l.push(r[n]);self.form.User_permissions=l,t&&e.forEach((function(t){var data={permissions_id:t};self.form.User_permissions.push(data)}))},checkalledit:function(t){self=this;for(var e=self.arraypermissionEdit,r=self.form.User_permissions,l=[],n=0;n<r.length;n++)e.indexOf(r[n].permissions_id)<0&&l.push(r[n]);self.form.User_permissions=l,t&&e.forEach((function(t){var data={permissions_id:t};self.form.User_permissions.push(data)}))}},mounted:function(){this.$nextTick((function(){"add"==this.type?this.form={name:"",tell:"",email:"",password:"",position_id:"",branch_id:"",department_id:"",department_name:"",User_customerlist:[],User_permissions:[]}:this.form=this.dataForm}))}},I=r(383),F=r(141),L=r(503),S=r(346),O=r(375),D=r(413),j=r(376),A=r(349),R=r(380),z=Object(n.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{"grid-list-xs":""}},[r("v-card",{staticClass:"my-2"},[r("v-list-item",[r("v-list-item-title",{staticClass:"headline"},[t._v("สร้างบัญชีผู้ใช้")])],1),t._v(" "),r("v-list-item",[r("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{staticClass:"py-2"},[r("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[r("v-text-field",{attrs:{label:"อีเมล์",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"},function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],readonly:"detail"==t.type,"error-messages":t.checkunique},on:{change:function(e){return t.verifyemail()}},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),"add"==t.type?r("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[r("v-text-field",{attrs:{label:"รหัสผ่าน",type:"password",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"}]},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),t._v(" "),r("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[r("v-text-field",{attrs:{label:"ชื่อ - นามสกุล",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"}],readonly:"detail"==t.type},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[r("v-text-field",{attrs:{label:"เบอร์โทร",outlined:"",dense:"",rules:[function(t){return/(?=.*\d)/.test(t)||"Request only number"},function(t){return t.length>=9||"Request min 9 characters"}],readonly:"detail"==t.type},model:{value:t.form.tell,callback:function(e){t.$set(t.form,"tell",e)},expression:"form.tell"}})],1),t._v(" "),r("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[r("v-autocomplete",{attrs:{label:"สาขา",outlined:"",items:t.branchname,"item-text":"name","item-value":"branch_id",rules:[function(t){return!!t||"The input is required"}],dense:"",readonly:"detail"==t.type},model:{value:t.form.branch_id,callback:function(e){t.$set(t.form,"branch_id",e)},expression:"form.branch_id"}})],1),t._v(" "),r("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[r("v-autocomplete",{attrs:{label:"ตำแหน่ง",outlined:"",items:t.positionname,"item-text":"position_name","item-value":"position_id",rules:[function(t){return!!t||"The input is required"}],dense:"",readonly:"detail"==t.type},model:{value:t.form.position_id,callback:function(e){t.$set(t.form,"position_id",e)},expression:"form.position_id"}})],1),t._v(" "),r("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[r("v-text-field",{attrs:{label:"แผนก",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"}],readonly:"detail"==t.type},model:{value:t.form.department_name,callback:function(e){t.$set(t.form,"department_name",e)},expression:"form.department_name"}})],1)],1)],1)],1)],1),t._v(" "),r("v-card",{staticClass:"my-2 pb-3"},[r("v-list-item",{staticClass:"pt-3"},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v("กำหนดสิทธิ์")]),t._v(" "),r("v-list-item-subtitle",{staticClass:"subtitle-1"},[t._v("กรุณาเลือกเพื่อกำหนดสิทธิ์ให้บัญชีผู้ใช้")])],1)],1),t._v(" "),r("v-list-item",{staticClass:"row"},[r("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"8"}}),t._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"2"}},[r("v-checkbox",{staticClass:"mx-1 checkbox-type1",attrs:{label:"All","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:t.checkallview,callback:function(e){t.checkallview=e},expression:"checkallview"}})],1),t._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"2"}},[r("v-checkbox",{staticClass:"mx-1 checkbox-type1",attrs:{label:"All","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:t.checkalledit,callback:function(e){t.checkalledit=e},expression:"checkalledit"}})],1)],1),t._v(" "),t._l(t.newarraypermissionuser,(function(e,l){return r("div",{key:l},[t._l(e,(function(i,e){return r("v-list-item",{key:e,staticClass:"row"},[r("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"8"}},[t._v(t._s(i.name))]),t._v(" "),t._l(i.value,(function(e,l){return r("v-col",{key:l,staticClass:"py-0",attrs:{cols:"4",sm:"2"}},[r("v-checkbox",{ref:e.group,refInFor:!0,staticClass:"mx-1 checkbox-type1",attrs:{value:e.checkvalue,label:e.group,"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:t.form.User_permissions,callback:function(e){t.$set(t.form,"User_permissions",e)},expression:"form.User_permissions"}})],1)}))],2)})),t._v(" "),r("v-divider")],2)}))],2),t._v(" "),4==t.form.position_id||5==t.form.position_id?r("v-flex",{staticClass:"mt-5"},[r("v-layout",[r("v-flex",[r("font",{staticClass:"blue-font1 headline"},[t._v("ระบบจัดการลูกค้า")])],1),t._v(" "),r("v-spacer"),t._v(" "),"detail"!=t.type?r("v-flex",{staticClass:"text-right"},[r("v-btn",{staticClass:"btn-type1 ",attrs:{rounded:"",dense:""},on:{click:function(e){return t.$refs.listcustomer.open(t.form.User_customerlist)}}},[t._v("เลือกลูกค้า")])],1):t._e()],1),t._v(" "),r("client-only",[r("v-simple-table",{staticClass:"tablelist w-100 mt-3 text-center",scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",{staticClass:"tablelist w-100 text-center"},[r("th",{staticClass:"title text-center"},[t._v("รหัสลูกค้า")]),t._v(" "),r("th",{staticClass:"title text-center"},[t._v("ชื่อลูกค้า")]),t._v(" "),r("th",{staticClass:"title text-center"},[t._v("เครดิต")]),t._v(" "),r("th",{staticClass:"title text-center"},[t._v("เลขประจำตัวผู้เสียภาษี")]),t._v(" "),r("th",{staticClass:"title text-center"},[t._v("ที่อยู่")]),t._v(" "),r("th",{staticClass:"title text-center"},[t._v("เบอร์โทรศัพท์")]),t._v(" "),r("th",{staticClass:"title text-center"},[t._v("ACTION")])]),t._v(" "),r("tbody",t._l(t.form.User_customerlist,(function(i,e){return r("tr",{key:e},[r("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_code))]),t._v(" "),r("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_name))]),t._v(" "),r("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_cedit)+" วัน")]),t._v(" "),r("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_tax))]),t._v(" "),r("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_address))]),t._v(" "),r("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_tell))]),t._v(" "),r("td",{staticClass:"subtitle-1"},["detail"!=t.type?r("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(r){return t.form.User_customerlist.splice(e,1)}}},[r("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1):t._e()],1)])})),0)]},proxy:!0}],null,!1,3486114162)})],1)],1):t._e(),t._v(" "),"detail"!=t.type?r("v-layout",{staticClass:"mt-3"},[r("v-spacer"),t._v(" "),r("v-flex",{staticClass:"text-right"},[r("nuxt-link",{staticClass:"btn btn-danger mx-1",attrs:{to:"/users",tag:"button"}},[t._v("ยกเลิก")]),t._v(" "),r("v-btn",{staticClass:"btn-primary mx-1",attrs:{disabled:!t.valid},on:{click:function(e){return t.$emit("callback",t.form)}}},[t._v("ยืนยัน")])],1)],1):t._e(),t._v(" "),r("Modallistcustomer",{ref:"listcustomer",attrs:{dataselect:t.form.listcustomer},on:{callback:t.addcustomer}})],1)],1)}),[],!1,null,null,null);e.a=z.exports;c()(z,{VAutocomplete:I.a,VAvatar:F.a,VBtn:m.a,VCard:d.a,VCheckbox:L.a,VCol:S.a,VContainer:O.a,VDivider:D.a,VFlex:h.a,VForm:j.a,VIcon:x.a,VLayout:y.a,VListItem:C.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VRow:A.a,VSimpleTable:R.a,VSpacer:U.a,VTextField:$.a})},501:function(t,e,r){"use strict";r.r(e);r(25),r(49);var l=r(13),n={components:{Formusers:r(392).a},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,r=t.$axios,l=t.route,e.next=3,r.$post("/users/showDetails",{users_id:l.params.id});case 3:return data=e.sent,e.abrupt("return",{data:data});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.title}},data:function(){return{title:"แก้ข้อมูลผู้ดูแลระบบ",breadcrumbs:[{text:"จัดการผู้ดูแลระบบ",disabled:!1,href:"/users"},{text:"แก้ข้อมูลผู้ดูแลระบบ",disabled:!0}],data:[]}},computed:{newarrayData:function(){var t=[];return this.data.User_permissions.forEach((function(e){var data={permissions_id:e.permissions_id};t.push(data)})),{users_id:this.$route.params.id,name:this.data.User.name,tell:this.data.User.tell,email:this.data.User.email,password:"",position_id:this.data.User.position_id,branch_id:this.data.User.branch_id,department_id:this.data.User.department_id,department_name:this.data.User.department_name,User_customerlist:this.data.User_customerlist,User_permissions:t}}},methods:{save:function(data){var t=this;this.$axios.post("/users/edit",data).then((function(e){t.$swal("Save data Success","","success"),t.$router.push("/users")})).catch((function(e){t.$swal("Save data Error","","warning")}))}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title)}))}},o=r(45),c=r(95),m=r.n(c),d=r(375),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{"grid-list-xs":""}},[r("nav",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,(function(i,e){return r("nuxt-link",{key:e,staticClass:"breadcrumb-item",class:{active:e==t.breadcrumbs.length-1},attrs:{tag:"a",to:i.href?i.href:""}},[t._v(t._s(i.text))])})),1)]),t._v(" "),r("Formusers",{attrs:{type:"edit",dataForm:t.newarrayData},on:{callback:t.save}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:d.a})}}]);