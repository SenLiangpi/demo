webpackJsonp([1],{"29xn":function(t,e){},"6oBS":function(t,e){},A1tS:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAtCAYAAAC0wKvmAAAAAXNSR0IArs4c6QAAAVZJREFUWAnd109Og1AQx/FCSMoV3Dd6g+49jEv+LXRh3LnqCjiAK5feQT2GnqA7PQHgjBFC+wq8mfmZGF9CgLb5fngseGW1+lcjTdObPM/PkJMK+xjHu67btW37gkQGIAzDxyAI3gm5QCJBPwPe85VznBHGCL2sqmo//o30+AD4DcQB0MhJAIlMAihkFkAgi4AV8QIsiDegRUSABhEDUkQFSBA14IuYAB/EDCwhEGAOgQFTCBTokaZpXun4nLY3ODBCnmlFrPgcNrIsuy2KYsvBJEnWvIfNgIL31Luj7TOKok1Zlh8MDP8q+EQ7RvGObst1H+eeeQZH8au6rh/GF2oCluKmGfjE1YBvXAVI4mJAGhcBmrg3oI17AZb4ImCNzwKI+CSAip8EkHEHQMcPAHrLzOjdjFcgfuQ6T0X+sWYM60Ecx08/L36wuHNBdIu+lznni7/8wRdFlGBzppRycwAAAABJRU5ErkJggg=="},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")({name:"App"},r,!1,function(t){a("29xn")},null,null).exports,o=a("/ocq"),i=a("mvHQ"),c=a.n(i),n=a("Au9i"),u=a.n(n),d={data:function(){return{ifSelect:!1,indexSelect:0,preSelect:{dkcp:[],productType:[],productSubType:[],remainingMoneyRate:[0],jrjg:[],sfbl:[],dkqx:[]},proSelect:{dkcp:[],jrjg:"",sfbl:"",dkqx:"",remainingMoneyRate:[0]},slots:[],product:[{flex:2,values:[],className:"slot1",defaultIndex:0,textAlign:"right"},{flex:1,values:[],className:"slot2",textAlign:"left"}],mechanism:[{flex:1,values:["中国银行","建设银行","苏州银行","工商银行","交通银行"],className:"slot1",textAlign:"center"}],proportion:[{flex:1,values:["20%","30%","40%","50%","60%"],className:"slot1",textAlign:"center"}],deadline:[{flex:1,values:["12期","24期","36期","42期","54期"],className:"slot1",textAlign:"center"}],allData:{}}},methods:{productSeries:function(t){switch(t){case 1:return"分期";case 2:return"5050";case 3:return"343";case 4:return"分期回租";case 5:return"分期直租"}},productSeriesB:function(t){switch(t){case"分期":return"1";case"5050":return"2";case"343":return"3";case"分期回租":return"4";case"分期直租":return"5"}},count:function(){if(this.proSelect.dkcp[0])if(this.proSelect.jrjg[0])if(this.proSelect.sfbl[0])if(this.proSelect.dkqx[0]){var t;t=this.proSelect.remainingMoneyRate[0]?(1*this.proSelect.remainingMoneyRate[0]).toFixed(2):"";var e=this.proSelect.dkcp[0]+"#"+this.proSelect.productType[0]+"#"+this.proSelect.productSubType[0]+"#"+this.proSelect.dkcp[1]+"#"+this.proSelect.jrjg[0]+"#"+(1*this.proSelect.sfbl[0]).toFixed(2)+"#"+t+"#"+this.proSelect.dkqx[0]+"#";if(console.log(e),console.log(this.allData.result.products[e]),this.allData.result.products[e]){var a={downPaymentRate:this.proSelect.sfbl[0],vechilePrice:368e3,totalAmount:this.allData.result.products[e].totalAmount,bindingInsurancePrice:this.allData.result.conf.bindingInsurancePrice,discountAmount:this.allData.result.products[e].discountAmount,remainingMoneyRate:this.proSelect.remainingMoneyRate[0],terms:this.proSelect.dkqx[0],rate:this.allData.result.products[e].rate,discountRate:this.allData.result.products[e].discountRate,interestRate:this.allData.result.products[e].interestRate,discountInterestRate:this.allData.result.products[e].discountInterestRate,minimalPriceOfVehicle:this.allData.result.conf.minimalPriceOfVehicle},s=void 0,r=void 0,l=0;console.log(a);var o=void 0,i=void 0,c=void 0,u=void 0,d=void 0,p=void 0;"/"!==this.allData.result.products[e].remainingMoneyAmountCal&&(l=new Function("data","return "+this.allData.result.products[e].remainingMoneyAmountCal)(a)),console.log(this.allData.result.products[e].remainingMoneyAmountCal),console.log(this.allData.result.products[e].downPaymentAmountCal),console.log(this.allData.result.products[e].loanAmountCal),console.log(this.allData.result.products[e].monthlyPaymentCalRate),console.log(this.allData.result.products[e].totalFeeCalRateCustomer),console.log(this.allData.result.products[e].monthlyPaymentCalInterestRate),console.log(this.allData.result.products[e].totalFeeCalInterestRateCustomer),o=new Function("data","return "+this.allData.result.products[e].downPaymentAmountCal),i=new Function("data","return "+this.allData.result.products[e].loanAmountCal),c=new Function("data","return "+this.allData.result.products[e].monthlyPaymentCalRate),u=new Function("data","return "+this.allData.result.products[e].totalFeeCalRateCustomer),d=new Function("data","return "+this.allData.result.products[e].monthlyPaymentCalInterestRate),p=new Function("data","return "+this.allData.result.products[e].totalFeeCalInterestRateCustomer),console.log(a),2==this.allData.result.products[e].maintainTag?(s=u(a),r=c(a)):(s=p(a),r=d(a)),this.$router.push({path:"/about?terms="+this.proSelect.dkqx[0]+"&downPaymentRate="+this.proSelect.sfbl[0]+"&remainingMoneyRate="+this.proSelect.remainingMoneyRate[0]+"\n      &loanAmountCal="+i(a)+"&totalCustomerInterest="+s+"&downPaymentAmountCal="+o(a)+"&monthlySupply="+r+"\n      &tail="+l})}else Object(n.Toast)({message:"未找到对应数据",duration:3e3})}else Object(n.Toast)({message:"请选择贷款期限",duration:3e3});else Object(n.Toast)({message:"请选择首付比例",duration:3e3});else Object(n.Toast)({message:"请选择金融机构",duration:3e3});else Object(n.Toast)({message:"请选择贷款产品",duration:3e3})},selectCancel:function(){this.ifSelect=!1},onValuesChange:function(t,e){switch(console.log(t),console.log(e),this.indexSelect){case 0:if(this.preSelect.dkcp[0]!=e[0])for(var a in this.allData.result.display)if(console.log(this.allData.result.display[a].productName),console.log(e[0]),console.log(this.allData.result.display[a].productName==e[0]),this.allData.result.display[a].productName==e[0])for(var s in this.product[1].values=[],this.preSelect.productType[0]=this.allData.result.display[a].productType[0].name,this.preSelect.productSubType[0]=this.allData.result.display[a].productType[0].data.productSubType[0].name,this.allData.result.display[a].productType[0].data.productSubType[0].data.productSeries)this.product[0].defaultIndex=a,this.product[1].values.push(this.productSeries(1*this.allData.result.display[a].productType[0].data.productSubType[0].data.productSeries[s].name));console.log(this.preSelect),this.preSelect.dkcp=[],this.preSelect.dkcp[0]=e[0],this.preSelect.dkcp[1]=this.productSeriesB(e[1]);break;case 1:this.preSelect.jrjg=e;break;case 2:this.preSelect.sfbl=e;break;case 3:this.preSelect.dkqx=e}},selectOk:function(){var t=c()(this.preSelect);switch(this.proSelect=JSON.parse(t),console.log(this.proSelect),this.ifSelect=!1,this.indexSelect){case 0:this.proSelect.jrjg=[],this.proSelect.sfbl=[],this.proSelect.dkqx=[];break;case 1:this.proSelect.sfbl=[],this.proSelect.dkqx=[];break;case 2:this.proSelect.dkqx=[]}for(var e in this.allData.result.display)if(this.allData.result.display[e].productName==this.proSelect.dkcp[0])for(var a in this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries)if(this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].name==this.proSelect.dkcp[1]){for(var s in console.log(this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data),this.mechanism[0].values=[],this.proportion[0].values=[],this.deadline[0].values=[],this.preSelect.remainingMoneyRate=[],this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.remainingMoneyRate[0]?this.preSelect.remainingMoneyRate.push(this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.remainingMoneyRate[0]):this.preSelect.remainingMoneyRate.push(0),this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.partner)this.mechanism[0].values.push(this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.partner[s]);for(var r in this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.downPaymentRate)this.proportion[0].values.push(this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.downPaymentRate[r]);for(var l in this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.terms)this.deadline[0].values.push(this.allData.result.display[e].productType[0].data.productSubType[0].data.productSeries[a].data.terms[l])}},clickSelect:function(t){switch(t){case 0:this.slots=this.product;break;case 1:if(!this.proSelect.dkcp[0])return void Object(n.Toast)({message:"请先选择贷款产品",duration:3e3});this.slots=this.mechanism;break;case 2:if(!this.proSelect.dkcp[0])return void Object(n.Toast)({message:"请先选择贷款产品",duration:3e3});if(!this.proSelect.jrjg[0])return void Object(n.Toast)({message:"请先选择金融机构",duration:3e3});this.slots=this.proportion;break;case 3:if(!this.proSelect.dkcp[0])return void Object(n.Toast)({message:"请先选择贷款产品",duration:3e3});if(!this.proSelect.jrjg[0])return void Object(n.Toast)({message:"请先选择金融机构",duration:3e3});if(!this.proSelect.sfbl[0])return void Object(n.Toast)({message:"请先选择首付比例",duration:3e3});this.slots=this.deadline}this.indexSelect=t,this.ifSelect=!0}},mounted:function(){var t=this;this.$http({url:"https://ec-service-test.byton.cn/api-vendor/v2/portal/vendor/product/cal?cityCode=NJ&mode=&edition=",type:"GET",data:""}).then(function(e){var a=e.data;for(var s in console.log(a),a.result.display)console.log(a.result.display[s]),t.product[0].values.push(a.result.display[s].productName);for(var r in t.preSelect.dkcp=[],t.preSelect.dkcp.push(t.product[0].values[0]),t.preSelect.productType.push(a.result.display[0].productType[0].name),t.preSelect.productSubType.push(a.result.display[0].productType[0].data.productSubType[0].name),a.result.display[0].productType[0].data.productSubType[0].data.productSeries)t.product[1].values.push(t.productSeries(1*a.result.display[0].productType[0].data.productSubType[0].data.productSeries[r].name));t.preSelect.dkcp.push(t.productSeriesB(t.product[1].values[0])),t.allData=a,console.log(t.product),console.log(t.allData)}).catch(function(t){console.log(t),Object(n.Toast)({message:t,duration:3e3})})}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"data"}},[s("div",{staticStyle:{"background-color":"#fff"}},[s("div",{staticClass:"list",on:{click:function(e){return t.clickSelect(0)}}},[s("p",[t._v("贷款产品")]),t._v(" "),""==t.proSelect.dkcp?s("span",[t._v("请选择")]):s("span",{domProps:{textContent:t._s(t.proSelect.dkcp[0]+t.productSeries(1*t.proSelect.dkcp[1]))}},[t._v("分享")]),t._v(" "),s("img",{attrs:{src:a("A1tS"),alt:""}})]),t._v(" "),s("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),s("div",{staticClass:"list",on:{click:function(e){return t.clickSelect(1)}}},[s("p",[t._v("请选择金融机构")]),t._v(" "),""==t.proSelect.jrjg?s("span",[t._v("请选择")]):s("span",{domProps:{textContent:t._s(t.proSelect.jrjg[0])}},[t._v("分享")]),t._v(" "),s("img",{attrs:{src:a("A1tS"),alt:""}})]),t._v(" "),s("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),s("div",{staticClass:"list",on:{click:function(e){return t.clickSelect(2)}}},[s("p",[t._v("首付比例")]),t._v(" "),""==t.proSelect.sfbl?s("span",[t._v("请选择")]):s("span",{domProps:{textContent:t._s(100*t.proSelect.sfbl[0]+"%")}}),t._v(" "),s("img",{attrs:{src:a("A1tS"),alt:""}})]),t._v(" "),s("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),s("div",{staticClass:"list"},[s("p",[t._v("尾款比例")]),t._v(" "),s("span",{domProps:{textContent:t._s(100*t.proSelect.remainingMoneyRate[0]+"%")}},[t._v("30%")])]),t._v(" "),s("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),s("div",{staticClass:"list",on:{click:function(e){return t.clickSelect(3)}}},[s("p",[t._v("贷款期限")]),t._v(" "),""==t.proSelect.dkqx?s("span",[t._v("请选择")]):s("span",{domProps:{textContent:t._s(t.proSelect.dkqx[0]+"期")}}),t._v(" "),s("img",{attrs:{src:a("A1tS"),alt:""}})]),t._v(" "),s("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),t._m(0),t._v(" "),s("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),t._m(1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ifSelect,expression:"ifSelect"}],staticClass:"select_back"},[s("div",{staticStyle:{width:"100vw",height:"100%"},on:{click:t.selectCancel}}),t._v(" "),s("div",{staticClass:"select"},[s("div",{staticClass:"s_top"},[s("div",{staticStyle:{color:"#9e9e9e",width:"50vw",float:"left","padding-left":"4vw"},on:{click:t.selectCancel}},[t._v("取消")]),t._v(" "),s("div",{staticStyle:{color:"#ba6954",width:"42vw",float:"left","text-align":"right","padding-right":"4vw"},on:{click:function(e){return t.selectOk()}}},[t._v("确定")])]),t._v(" "),s("mt-picker",{attrs:{slots:t.slots},on:{change:t.onValuesChange}})],1)])]),t._v(" "),s("div",{staticClass:"button",on:{click:t.count}},[t._v("计算")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("p",[this._v("年华费率")]),this._v(" "),e("span",[this._v("4.00%")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("p",[this._v("贷款城市")]),this._v(" "),e("span",[this._v("上海")])])}]};var h=a("VU/8")(d,p,!1,function(t){a("Xu+A")},null,null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"result"}},[a("div",{staticStyle:{"padding-top":"0px","background-color":"#f4f4f4","min-height":"100vh"}},[a("div",{staticClass:"loan_amount"},[a("p",[t._v("贷款金额")]),t._v(" "),a("h3",[t._v(t._s((1*t.$route.query.loanAmountCal).toFixed(2)))])]),t._v(" "),a("div",{staticClass:"detail"},[a("p",[t._v("总利息："),a("font",{attrs:{color:"#fd7272"}},[t._v("￥"+t._s((1*t.$route.query.totalCustomerInterest).toFixed(2)))])],1),t._v(" "),a("p",[t._v("贷款期限："),a("font",{attrs:{color:"#333334"}},[t._v(t._s(t.$route.query.terms)+"期")])],1),t._v(" "),a("p",[t._v("首付比例："),a("font",{attrs:{color:"#333334"}},[t._v(t._s(100*t.$route.query.downPaymentRate)+"%")])],1),t._v(" "),a("p",[t._v("尾款比例："),a("font",{attrs:{color:"#333334"}},[t._v(t._s(100*t.$route.query.remainingMoneyRate)+"%")])],1)]),t._v(" "),a("div",{staticClass:"list",on:{click:function(e){return t.clickSelect(1)}}},[a("p",[t._v("首付金额")]),t._v(" "),a("span",{staticClass:"item-note"},[t._v("￥"+t._s((1*t.$route.query.downPaymentAmountCal).toFixed(2)))])]),t._v(" "),a("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),a("div",{staticClass:"list",on:{click:function(e){return t.clickSelect(1)}}},[a("p",[t._v("预估月供")]),t._v(" "),a("span",{staticClass:"item-note"},[t._v("￥"+t._s((1*t.$route.query.monthlySupply).toFixed(2)))])]),t._v(" "),a("div",{staticStyle:{width:"92vw",height:"1px","background-color":"#f5f5f5",margin:"0 auto"}}),t._v(" "),a("div",{staticClass:"list",on:{click:function(e){return t.clickSelect(1)}}},[a("p",[t._v("尾款金额")]),t._v(" "),a("span",{staticClass:"item-note"},[t._v("￥"+t._s((1*t.$route.query.tail).toFixed(2)))])]),t._v(" "),a("router-link",{staticStyle:{width:"100vw","text-decoration":"none"},attrs:{to:"/"}},[a("div",{staticClass:"button",on:{click:t.count}},[t._v("重新计算")])])],1)])},staticRenderFns:[]};var m=a("VU/8")({methods:{}},v,!1,function(t){a("6oBS")},null,null).exports;s.default.use(o.a);var S=new o.a({routes:[{path:"/",name:"data",component:h},{path:"/about",name:"data",component:m}]}),f=(a("d8/S"),a("mtWM")),y=a.n(f),g=a("mw3O"),_=a.n(g);s.default.config.productionTip=!1,s.default.use(u.a),s.default.prototype.$http=y.a,s.default.prototype.qs=_.a,new s.default({el:"#app",router:S,components:{App:l},template:"<App/>"})},"Xu+A":function(t,e){},"d8/S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.abb064060f05dfe9a3ec.js.map