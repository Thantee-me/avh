(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{396:function(t,e,l){"use strict";var r={props:["dataselect"],data:function(){return{dialog:!1,form:{search:"",page:1,perpage:10},listitems:[],headers:[{text:"รหัสลูกค้า",sortable:!1,alige:"center",class:"title",value:"customer_code"},{text:"ชื่อลูกค้า",sortable:!1,alige:"center",class:"title",value:"customer_name"},{text:"เครดิต",sortable:!1,alige:"center",class:"title",value:"customer_cedit"},{text:"เลขประจำตัวผู้เสียภาษี",sortable:!1,alige:"center",class:"title",value:"customer_tax"},{text:"ที่อยู่",sortable:!1,alige:"center",class:"title",value:"customer_address"},{text:"เบอร์โทรศัพท์",sortable:!1,alige:"center",class:"title",value:"customer_tell"}],selectedcustomer:[]}},methods:{listdata:function(){var t=this;this.$axios.post("/customer/index",this.form).then((function(e){t.listitems=e.data})).catch((function(e){t.listitems={list:[],total_perpage:0}}))},open:function(data){this.selectedcustomer=data,this.dialog=!0}},watch:{dialog:function(t){1==t?this.listdata():this.form={search:"",page:1,perpage:10}}}},n=l(46),o=l(96),c=l.n(o),m=l(154),d=l(363),v=l(358),f=l(486),_=l(415),h=l(364),x=l(141),y=l(428),C=l(91),k=l(76),w=l(45),V=l(375),$=l(384),T=l(381),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-dialog",{attrs:{persistent:"","max-width":"1200px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[l("v-card",[l("v-card-title",{staticClass:"mx-1"},[l("v-list-item",{attrs:{"two-line":""}},[l("v-list-item-title",{staticClass:"headline blue-font1"},[t._v("ระบบจัดการลูกค้า")]),t._v(" "),l("v-list-item-icon",[l("v-icon",{attrs:{small:""},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("fas fa-times")])],1)],1)],1),t._v(" "),l("v-card-text",{staticClass:"mx-1"},[l("v-layout",{staticClass:"container"},[l("v-data-table",{staticClass:"tablelist w-100 mt-3",attrs:{headers:t.headers,items:t.listitems.Customer,"item-key":"customer_id","show-select":"","hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[l("v-text-field",{staticClass:"input-search-table",attrs:{filled:"",placeholder:"search",rounded:"",dense:"","append-icon":"fas fa-search","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listdata()}},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})]},proxy:!0},{key:"item.customer_cedit",fn:function(e){var l=e.item;return[t._v("\n                            "+t._s(l.customer_cedit)+" วัน \n                        ")]}},{key:"footer",fn:function(){return[l("v-pagination",{staticClass:"justify-end",attrs:{length:t.listitems.total_perpage,"total-visible":7,circle:"",color:"primary"},on:{input:function(e){return t.listdata()}},model:{value:t.form.page,callback:function(e){t.$set(t.form,"page",e)},expression:"form.page"}})]},proxy:!0}]),model:{value:t.selectedcustomer,callback:function(e){t.selectedcustomer=e},expression:"selectedcustomer"}})],1),t._v(" "),l("v-layout",{staticClass:"mt-3"},[l("v-spacer"),t._v(" "),l("v-flex",{staticClass:"text-right"},[l("v-btn",{staticClass:"btn-danger mx-1",on:{click:function(e){t.dialog=!t.dialog}}},[t._v("ยกเลิก")]),t._v(" "),l("v-btn",{staticClass:"btn-primary mx-1",on:{click:function(e){t.$emit("callback",t.selectedcustomer),t.dialog=!t.dialog}}},[t._v("ยืนยัน")])],1)],1)],1)],1)],1)}),[],!1,null,null,null),U=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardText:v.a,VCardTitle:v.b,VDataTable:f.a,VDialog:_.a,VFlex:h.a,VIcon:x.a,VLayout:y.a,VListItem:C.a,VListItemIcon:k.a,VListItemTitle:w.c,VPagination:V.a,VSpacer:$.a,VTextField:T.a});var E={props:["type","dataForm"],components:{Modallistcustomer:U},computed:{newarraypermissionuser:function(){var t={},e="",l="",r=-1,n=-1;return this.permissionuser.forEach((function(o){if(l!=o.group_id&&(n++,l=o.group_id,t[n]={}),e!=o.permissions_name){r++,e=o.permissions_name;var c={group:o.group,permissions_id:o.permissions_id,checkvalue:{permissions_id:o.permissions_id}},data={name:o.permissions_name,value:[c]};t[n][r]=data}else{c={group:o.group,permissions_id:o.permissions_id,checkvalue:{permissions_id:o.permissions_id}};t[n][r].value.push(c)}})),t},arraypermissionView:function(){var t=[];return this.permissionuser.forEach((function(e){"View"==e.group&&t.push(e.permissions_id)})),t},arraypermissionEdit:function(){var t=[];return this.permissionuser.forEach((function(e){"Edit"==e.group&&t.push(e.permissions_id)})),t}},data:function(){return{valid:!0,lazy:!1,checkallview:!1,checkalledit:!1,form:{name:"",tell:"",email:"",password:"",position_id:"",branch_id:"",department_id:"",department_name:"",User_customerlist:[],User_permissions:[]},checkunique:[]}},methods:{verifyemail:function(){var t=this;this.$axios.post("/users/checkEmail",{email:this.form.email}).then((function(e){"fail"==e.data?t.checkunique=["The Email is Unique"]:t.checkunique=[]}))},addcustomer:function(data){this.form.User_customerlist=data}},watch:{checkallview:function(t){self=this;for(var e=self.arraypermissionView,l=self.form.User_permissions,r=[],n=0;n<l.length;n++)e.indexOf(l[n].permissions_id)<0&&r.push(l[n]);self.form.User_permissions=r,t&&e.forEach((function(t){var data={permissions_id:t};self.form.User_permissions.push(data)}))},checkalledit:function(t){self=this;for(var e=self.arraypermissionEdit,l=self.form.User_permissions,r=[],n=0;n<l.length;n++)e.indexOf(l[n].permissions_id)<0&&r.push(l[n]);self.form.User_permissions=r,t&&e.forEach((function(t){var data={permissions_id:t};self.form.User_permissions.push(data)}))}},mounted:function(){this.$nextTick((function(){"add"==this.type?this.form={name:"",tell:"",email:"",password:"",position_id:"",branch_id:"",department_id:"",department_name:"",User_customerlist:[],User_permissions:[]}:this.form=this.dataForm}))}},I=l(383),F=l(142),L=l(482),S=l(348),O=l(376),A=l(419),j=l(378),z=l(351),D=l(382),R=Object(n.a)(E,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-container",{attrs:{"grid-list-xs":""}},[l("v-card",{staticClass:"my-2"},[l("v-list-item",[l("v-list-item-title",{staticClass:"headline"},[t._v("สร้างบัญชีผู้ใช้")])],1),t._v(" "),l("v-list-item",[l("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-row",{staticClass:"py-2"},[l("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[l("v-text-field",{attrs:{label:"อีเมล์",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"},function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],readonly:"detail"==t.type,"error-messages":t.checkunique},on:{change:function(e){return t.verifyemail()}},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),"add"==t.type?l("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[l("v-text-field",{attrs:{label:"รหัสผ่าน",type:"password",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"}]},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),t._v(" "),l("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[l("v-text-field",{attrs:{label:"ชื่อ - นามสกุล",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"}],readonly:"detail"==t.type},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),l("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[l("v-text-field",{attrs:{label:"เบอร์โทร",outlined:"",dense:"",rules:[function(t){return/(?=.*\d)/.test(t)||"Request only number"},function(t){return t.length>=9||"Request min 9 characters"}],readonly:"detail"==t.type},model:{value:t.form.tell,callback:function(e){t.$set(t.form,"tell",e)},expression:"form.tell"}})],1),t._v(" "),l("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[l("v-autocomplete",{attrs:{label:"สาขา",outlined:"",items:t.branchname,"item-text":"name","item-value":"branch_id",rules:[function(t){return!!t||"The input is required"}],dense:"",readonly:"detail"==t.type},model:{value:t.form.branch_id,callback:function(e){t.$set(t.form,"branch_id",e)},expression:"form.branch_id"}})],1),t._v(" "),l("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[l("v-autocomplete",{attrs:{label:"ตำแหน่ง",outlined:"",items:t.positionname,"item-text":"position_name","item-value":"position_id",rules:[function(t){return!!t||"The input is required"}],dense:"",readonly:"detail"==t.type},model:{value:t.form.position_id,callback:function(e){t.$set(t.form,"position_id",e)},expression:"form.position_id"}})],1),t._v(" "),l("v-col",{staticClass:"py-sm-0",attrs:{cols:"6",sm:"3"}},[l("v-text-field",{attrs:{label:"แผนก",outlined:"",dense:"",rules:[function(t){return!!t||"The input is required"}],readonly:"detail"==t.type},model:{value:t.form.department_name,callback:function(e){t.$set(t.form,"department_name",e)},expression:"form.department_name"}})],1)],1)],1)],1)],1),t._v(" "),l("v-card",{staticClass:"my-2 pb-3"},[l("v-list-item",{staticClass:"pt-3"},[l("v-list-item-content",[l("v-list-item-title",{staticClass:"headline"},[t._v("กำหนดสิทธิ์")]),t._v(" "),l("v-list-item-subtitle",{staticClass:"subtitle-1"},[t._v("กรุณาเลือกเพื่อกำหนดสิทธิ์ให้บัญชีผู้ใช้")])],1)],1),t._v(" "),l("v-list-item",{staticClass:"row"},[l("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"8"}}),t._v(" "),l("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"2"}},[l("v-checkbox",{staticClass:"mx-1 checkbox-type1",attrs:{label:"All","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:t.checkallview,callback:function(e){t.checkallview=e},expression:"checkallview"}})],1),t._v(" "),l("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"2"}},[l("v-checkbox",{staticClass:"mx-1 checkbox-type1",attrs:{label:"All","hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:t.checkalledit,callback:function(e){t.checkalledit=e},expression:"checkalledit"}})],1)],1),t._v(" "),t._l(t.newarraypermissionuser,(function(e,r){return l("div",{key:r},[t._l(e,(function(i,e){return l("v-list-item",{key:e,staticClass:"row"},[l("v-col",{staticClass:"py-0",attrs:{cols:"4",sm:"8"}},[t._v(t._s(i.name))]),t._v(" "),t._l(i.value,(function(e,r){return l("v-col",{key:r,staticClass:"py-0",attrs:{cols:"4",sm:"2"}},[l("v-checkbox",{ref:e.group,refInFor:!0,staticClass:"mx-1 checkbox-type1",attrs:{value:e.checkvalue,label:e.group,"hide-details":"",dense:"",readonly:"detail"==t.type},model:{value:t.form.User_permissions,callback:function(e){t.$set(t.form,"User_permissions",e)},expression:"form.User_permissions"}})],1)}))],2)})),t._v(" "),l("v-divider")],2)}))],2),t._v(" "),4==t.form.position_id||5==t.form.position_id?l("v-flex",{staticClass:"mt-5"},[l("v-layout",[l("v-flex",[l("font",{staticClass:"blue-font1 headline"},[t._v("ระบบจัดการลูกค้า")])],1),t._v(" "),l("v-spacer"),t._v(" "),"detail"!=t.type?l("v-flex",{staticClass:"text-right"},[l("v-btn",{staticClass:"btn-type1 ",attrs:{rounded:"",dense:""},on:{click:function(e){return t.$refs.listcustomer.open(t.form.User_customerlist)}}},[t._v("เลือกลูกค้า")])],1):t._e()],1),t._v(" "),l("client-only",[l("v-simple-table",{staticClass:"tablelist w-100 mt-3 text-center",scopedSlots:t._u([{key:"default",fn:function(){return[l("thead",{staticClass:"tablelist w-100 text-center"},[l("th",{staticClass:"title text-center"},[t._v("รหัสลูกค้า")]),t._v(" "),l("th",{staticClass:"title text-center"},[t._v("ชื่อลูกค้า")]),t._v(" "),l("th",{staticClass:"title text-center"},[t._v("เครดิต")]),t._v(" "),l("th",{staticClass:"title text-center"},[t._v("เลขประจำตัวผู้เสียภาษี")]),t._v(" "),l("th",{staticClass:"title text-center"},[t._v("ที่อยู่")]),t._v(" "),l("th",{staticClass:"title text-center"},[t._v("เบอร์โทรศัพท์")]),t._v(" "),l("th",{staticClass:"title text-center"},[t._v("ACTION")])]),t._v(" "),l("tbody",t._l(t.form.User_customerlist,(function(i,e){return l("tr",{key:e},[l("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_code))]),t._v(" "),l("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_name))]),t._v(" "),l("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_cedit)+" วัน")]),t._v(" "),l("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_tax))]),t._v(" "),l("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_address))]),t._v(" "),l("td",{staticClass:"subtitle-1"},[t._v(t._s(i.customer_tell))]),t._v(" "),l("td",{staticClass:"subtitle-1"},["detail"!=t.type?l("v-avatar",{attrs:{size:"26",color:"primary"},on:{click:function(l){return t.form.User_customerlist.splice(e,1)}}},[l("v-icon",{staticClass:"text-white",attrs:{small:""}},[t._v("fas fa-trash")])],1):t._e()],1)])})),0)]},proxy:!0}],null,!1,3486114162)})],1)],1):t._e(),t._v(" "),"detail"!=t.type?l("v-layout",{staticClass:"mt-3"},[l("v-spacer"),t._v(" "),l("v-flex",{staticClass:"text-right"},[l("nuxt-link",{staticClass:"btn btn-danger mx-1",attrs:{to:"/users",tag:"button"}},[t._v("ยกเลิก")]),t._v(" "),l("v-btn",{staticClass:"btn-primary mx-1",attrs:{disabled:!t.valid},on:{click:function(e){return t.$emit("callback",t.form)}}},[t._v("ยืนยัน")])],1)],1):t._e(),t._v(" "),l("Modallistcustomer",{ref:"listcustomer",attrs:{dataselect:t.form.listcustomer},on:{callback:t.addcustomer}})],1)],1)}),[],!1,null,null,null);e.a=R.exports;c()(R,{VAutocomplete:I.a,VAvatar:F.a,VBtn:m.a,VCard:d.a,VCheckbox:L.a,VCol:S.a,VContainer:O.a,VDivider:A.a,VFlex:h.a,VForm:j.a,VIcon:x.a,VLayout:y.a,VListItem:C.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VRow:z.a,VSimpleTable:D.a,VSpacer:$.a,VTextField:T.a})},501:function(t,e,l){"use strict";l.r(e);var r={components:{Formusers:l(396).a},head:function(){return{title:this.title}},data:function(){return{title:"เพิ่มผู้ดูแลระบบ",breadcrumbs:[{text:"จัดการผู้ดูแลระบบ",disabled:!1,href:"/users"},{text:"เพิ่มผู้ดูแลระบบ",disabled:!0}]}},methods:{save:function(data){var t=this;this.$axios.post("/users/create",data).then((function(e){t.$swal("Save data Success","","success"),t.$router.push("/users")})).catch((function(e){t.$swal("Save data Error","","warning")}))}},mounted:function(){this.$nextTick((function(){this.$store.dispatch("setnametitle",this.title)}))}},n=l(46),o=l(96),c=l.n(o),m=l(376),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-container",{attrs:{"grid-list-xs":""}},[l("nav",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,(function(i,e){return l("nuxt-link",{key:e,staticClass:"breadcrumb-item",class:{active:e==t.breadcrumbs.length-1},attrs:{tag:"a",to:i.href?i.href:""}},[t._v(t._s(i.text))])})),1)]),t._v(" "),l("Formusers",{attrs:{type:"add"},on:{callback:t.save}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:m.a})}}]);