webpackJsonp([0],{"Ekd+":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAADD0lEQVRoQ9WaS4oVMRRAT0QH/nAdKm7AkRtwoDTozFkrCoKiE/8/nDhQG0UHfhHsHbgcV2G3DQpXrqSavOr6JJXcvHoNDfW66lXV6ZzcJDfXEfyIiHPOSfi3VTkWkf3AWeAE8Mo1Ly4ip4AzwAfn3O9VAdL3FJFDwBXgCaBML/6DeaiPwHHgPvDWOfdnFeB8S10HHgDHgF/ANaf66QHwHDjqT1wFNp1zf+cM56HOA5+Aw8C2B9xoWuwgsA48A44AW8BTYGOuWrb0UyhtqcfAG+fcTtjHDgAXgPeeXi+cpZY9+t0AvjZdaBfM9zWNLDeBe3PV0kOdAz4H+j0EXodxYQHMw81WyzH9wniwB8zDzU7LGP1GweamZax+UWBz0TJFv2iwZWvZo58Gty9jE4jOPtYelP0DqkbLKfoltVgwl6wWLafqNwmslpY5+k0Gs46WufplgVlFyxL6ZYMFWl4E3uXOLUvpVwSslJYl9SsGlqtlaf2Kgk3V0kK/4mCpWlrpZwIWq6WlfmZgY1pq3ghoJ16i5n7tad7Y56i54thNEuaWO2Mr39Rn9V1vAjagpZ7ak3gpBWOqYnhzEdGVeDiI62lNEpnoVw0siJa3gLs+tadg5nlLaxV1L2BbRHTJc9nnKqvkLU3AgsH3NHDJObfltayWtywO1pF2/gGsaUa55kq8KFjP4PvIb3JoqNcNkCor8WJgKXm/GloWARvc9ejZjrLWMhssRr++AdhSyyywFP0G4EzS6ZPBpug3AFd8l2cSWI5+tbRMBiuhXw0tk8BK6metZTSYhX6WWkaBWepnpeUoWA39ErTUagZd8nwfK9UYBKupX2kte8GWod+Ilknp9L7NdR0wuytellSK1DG3HNSyqxwiLLhqEi8LSw+L5EvMPVPmll0FLO2830LFS8wLWF7TkSDqrCAKS45mp19OtGyKxGar39RoqWV92lKz1m9StBQRLbj6NlRwZdlncu/dEy3XtcXuAPqrGwa79X65D6z5/Va03Ae8VDAN6beBn76qdCVKZtv/OB8t14CTWhP8D3hivB1iGzyUAAAAAElFTkSuQmCC"},FboG:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(t){n("bL1K")},null,null).exports,r=n("/ocq"),s=navigator.userAgent,l=(navigator.appVersion,s.indexOf("Android")>-1||s.indexOf("Linux")>-1),c=!!s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),d={name:"HomeHeader",methods:{button:function(t){1==t?(localStorage.setItem("videoUrl","https://media.byton.cn/20181217/BYT_UIUX_FHD_v04_CN-PRESS-OC_v03.mp4"),this.$router.push({path:"/Video?myid=https://media.byton.cn/20181217/BYT_UIUX_FHD_v04_CN-PRESS-OC_v03.mp4"})):2==t?(localStorage.setItem("videoUrl","https://media.byton.cn/20181217/BYT_BRST_TECH_SAFETY_EN_v01_H264_40MBit.mp4"),this.$router.push({path:"/Video?myid=https://media.byton.cn/20181217/BYT_BRST_TECH_SAFETY_EN_v01_H264_40MBit.mp4"})):(l&&android.toBrandStore("1133919800218972161"),c&&window.webkit.messageHandlers.getBrandStoreId.postMessage({id:"1133919800218972161"}))}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("div",{staticClass:"button4",on:{click:function(e){return t.button(1)}}}),t._v(" "),n("div",{staticClass:"button5",on:{click:function(e){return t.button(2)}}}),t._v(" "),n("div",{staticClass:"button6",on:{click:function(e){return t.button(3)}}})])},staticRenderFns:[]};var u=n("VU/8")(d,p,!1,function(t){n("NLAe")},"data-v-252dd085",null).exports,A={name:"HomeVideo",data:function(){return{controla:"",promptTypr:!0}},methods:{videoUrl:function(){return localStorage.getItem("videoUrl")},closeButton:function(){this.$router.push({path:"/"})},control:function(t){this.promptTypr=!1,1==t&&this.controla.play()},ifPrompt:function(t){t&&"none"!=t&&("wifi"==t?(this.controla.play(),console.log("wifi"),this.promptTypr=!1):(this.controla.pause(),console.log("no wifi"),this.promptTypr=!0))}},mounted:function(){document.getElementById("my-video").play()}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"video"},[o("img",{staticClass:"closeButton",attrs:{src:n("Ekd+"),alt:""},on:{click:function(e){return t.closeButton()}}}),t._v(" "),o("video",{attrs:{id:"my-video",controls:"",width:"250","webkit-playsinline":"true",playsinline:"true","x5-playsinline":"",autoplay:"autoplay"}},[o("source",{attrs:{src:t.videoUrl(),type:"video/mp4"}}),t._v("\n    Sorry, your browser doesn't support embedded videos.\n  ")])])},staticRenderFns:[]};var v=n("VU/8")(A,m,!1,function(t){n("FboG")},"data-v-e31c0332",null).exports;o.a.use(r.a);var f=new r.a({routes:[{path:"/",name:"HomeHeader",component:u},{path:"/Video",name:"Video",component:v}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:f,components:{App:a},template:"<App/>"})},NLAe:function(t,e){},bL1K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e544281a22cc6bb89efd.js.map