webpackJsonp([1],{"Ekd+":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAADD0lEQVRoQ9WaS4oVMRRAT0QH/nAdKm7AkRtwoDTozFkrCoKiE/8/nDhQG0UHfhHsHbgcV2G3DQpXrqSavOr6JJXcvHoNDfW66lXV6ZzcJDfXEfyIiHPOSfi3VTkWkf3AWeAE8Mo1Ly4ip4AzwAfn3O9VAdL3FJFDwBXgCaBML/6DeaiPwHHgPvDWOfdnFeB8S10HHgDHgF/ANaf66QHwHDjqT1wFNp1zf+cM56HOA5+Aw8C2B9xoWuwgsA48A44AW8BTYGOuWrb0UyhtqcfAG+fcTtjHDgAXgPeeXi+cpZY9+t0AvjZdaBfM9zWNLDeBe3PV0kOdAz4H+j0EXodxYQHMw81WyzH9wniwB8zDzU7LGP1GweamZax+UWBz0TJFv2iwZWvZo58Gty9jE4jOPtYelP0DqkbLKfoltVgwl6wWLafqNwmslpY5+k0Gs46WufplgVlFyxL6ZYMFWl4E3uXOLUvpVwSslJYl9SsGlqtlaf2Kgk3V0kK/4mCpWlrpZwIWq6WlfmZgY1pq3ghoJ16i5n7tad7Y56i54thNEuaWO2Mr39Rn9V1vAjagpZ7ak3gpBWOqYnhzEdGVeDiI62lNEpnoVw0siJa3gLs+tadg5nlLaxV1L2BbRHTJc9nnKqvkLU3AgsH3NHDJObfltayWtywO1pF2/gGsaUa55kq8KFjP4PvIb3JoqNcNkCor8WJgKXm/GloWARvc9ejZjrLWMhssRr++AdhSyyywFP0G4EzS6ZPBpug3AFd8l2cSWI5+tbRMBiuhXw0tk8BK6metZTSYhX6WWkaBWepnpeUoWA39ErTUagZd8nwfK9UYBKupX2kte8GWod+Ilknp9L7NdR0wuytellSK1DG3HNSyqxwiLLhqEi8LSw+L5EvMPVPmll0FLO2830LFS8wLWF7TkSDqrCAKS45mp19OtGyKxGar39RoqWV92lKz1m9StBQRLbj6NlRwZdlncu/dEy3XtcXuAPqrGwa79X65D6z5/Va03Ae8VDAN6beBn76qdCVKZtv/OB8t14CTWhP8D3hivB1iGzyUAAAAAElFTkSuQmCC"},JQEr:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},i,!1,function(t){e("bL1K")},null,null).exports,a=e("/ocq"),s=e("mvHQ"),c=e.n(s),l=navigator.userAgent,p=l.indexOf("Android")>-1||l.indexOf("Linux")>-1,u=!!l.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),d={name:"HomeHeader",methods:{button:function(t){1==t?this.$router.push({path:"/Video?myid=https://media.byton.cn/20181217/BYT_UIUX_FHD_v04_CN-PRESS-OC_v03.mp4"}):2==t?this.$router.push({path:"/Video?myid=https://media.byton.cn/20181217/BYT_BRST_TECH_SAFETY_EN_v01_H264_40MBit.mp4"}):(p&&Android.toBrandStore(c()({id:"1127858930945388545"})),u&&window.webkit.messageHandlers.getBrandStoreId.postMessage({id:"1127858930945388545"}))}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"img"},[e("div",{staticClass:"button4",on:{click:function(n){return t.button(1)}}}),t._v(" "),e("div",{staticClass:"button5",on:{click:function(n){return t.button(2)}}}),t._v(" "),e("div",{staticClass:"button6",on:{click:function(n){return t.button(3)}}})])},staticRenderFns:[]};var m=e("VU/8")(d,v,!1,function(t){e("fOvm")},"data-v-68d0470a",null).exports,f={name:"HomeVideo",data:function(){return{controla:"",promptTypr:!0}},methods:{closeButton:function(){alert("a"),this.$router.push({path:"/"})},control:function(t){this.promptTypr=!1,1==t&&this.controla.play()},ifPrompt:function(t){t&&"none"!=t&&("wifi"==t?(this.controla.play(),console.log("wifi"),this.promptTypr=!1):(this.controla.pause(),console.log("no wifi"),this.promptTypr=!0))}},mounted:function(){var t=this;window.navigator||alert("No navigator!"),this.controla=document.getElementById("my-video");var n=navigator.connection||navigator.mozConnection||navigator.webkitConnection;alert(n.type),this.ifPrompt(n.type),n.onchange=function(n){alert(n.currentTarget.type),t.ifPrompt(n.currentTarget.type)}}},A={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"video"},[o("img",{staticClass:"closeButton",attrs:{src:e("Ekd+"),alt:""},on:{click:function(n){return t.closeButton()}}}),t._v(" "),o("div",{staticClass:"dome",on:{click:function(n){return t.closeButton()}}},[t._v("111111111111")]),t._v(" "),o("video",{attrs:{id:"my-video",controls:"",width:"250","webkit-playsinline":"true",playsinline:"true","x5-playsinline":""}},[o("source",{attrs:{src:t.$route.query.myid,type:"video/mp4"}}),t._v("\n    Sorry, your browser doesn't support embedded videos.\n  ")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.promptTypr,expression:"promptTypr"}],staticClass:"prompt"},[o("p",[t._v("当前非WIFI环境，播放视频会消耗数据流量，确定播放？")]),t._v(" "),o("div",{staticClass:"pause",on:{click:function(n){return t.control(0)}}},[t._v("暂停播放")]),t._v(" "),o("div",{staticClass:"play",on:{click:function(n){return t.control(1)}}},[t._v("继续播放")])])])},staticRenderFns:[]};var w=e("VU/8")(f,A,!1,function(t){e("JQEr")},"data-v-e8ee62e4",null).exports;o.a.use(a.a);var h=new a.a({routes:[{path:"/",name:"HomeHeader",component:m},{path:"/Video",name:"Video",component:w}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},bL1K:function(t,n){},fOvm:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.54e6218c52dd955e29c5.js.map