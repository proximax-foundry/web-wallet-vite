(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d49e296"],{"00f6":function(e,t,o){"use strict";var r=o("7a23"),c={class:"h-5 text-left"},l={key:0,class:"text-xs text-blue-400 "},n={class:"select mb-3",style:{position:"relative"}},a={value:"0",disabled:"",hidden:"",key:"0"},s={class:"h-3 mb-2"},i={key:0,class:"error text-left"};function d(e,t,o,d,u,p){var b=Object(r["resolveComponent"])("font-awesome-icon");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",c,[Object(r["createVNode"])(r["Transition"],{"enter-active-class":"animate__animated animate__fadeInUp"},{default:Object(r["withCtx"])((function(){return[u.showSelectTitle?(Object(r["openBlock"])(),Object(r["createBlock"])("span",l,Object(r["toDisplayString"])(o.placeholder),1)):Object(r["createCommentVNode"])("",!0)]})),_:1})]),Object(r["createVNode"])("div",n,[u.displayClear?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0,icon:"times",class:"text-gray-400 hover:text-gray-600 cursor-pointer",style:{display:"inline-block",position:"absolute",top:"9px",right:"25px"},onClick:t[1]||(t[1]=function(e){return p.clearSelection()})})):Object(r["createCommentVNode"])("",!0),Object(r["withDirectives"])(Object(r["createVNode"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return u.selectModel=e}),class:"text-gray-600 w-full border-solid border-b border-gray-200 p-2 mb-2 focus:outline-none",onChange:t[3]||(t[3]=function(e){return p.makeSelection()})},[Object(r["createVNode"])("option",a,Object(r["toDisplayString"])(o.placeholder),1),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(o.options,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{value:e.val,key:e.id},Object(r["toDisplayString"])(e.text),9,["value"])})),128))],544),[[r["vModelSelect"],u.selectModel]]),Object(r["createVNode"])("div",s,[u.selectErr?(Object(r["openBlock"])(),Object(r["createBlock"])("div",i,Object(r["toDisplayString"])(o.errorMessage),1)):Object(r["createCommentVNode"])("",!0)])])])}var u={props:["placeholder","errorMessage","options"],name:"SelectInput",data:function(){return{showSelectTitle:!1,selectErr:!1,selectModel:0,displayClear:!1}},methods:{clearSelection:function(){this.selectModel=0,this.showSelectTitle=!1,this.selectErr=!0,this.displayClear=!1},makeSelection:function(){this.showSelectTitle=!0,this.selectErr=!1,this.displayClear=!0}},mounted:function(){var e=this;this.emitter.on("CLEAR_SELECT",(function(t){e.selectModel=t,e.showSelectTitle=!1,e.selectErr=!1,e.displayClear=!1}))}};u.render=d;t["a"]=u},"446e":function(e,t,o){"use strict";var r=o("7a23"),c={class:"text-icon-outline text-icon"},l=Object(r["createVNode"])("div",{class:"w-1/12 flex-none"},null,-1),n={class:"h-3 mb-2"},a={key:0,class:"error error-password text-left"};function s(e,t,o,s,i,d){var u=Object(r["resolveComponent"])("font-awesome-icon");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",{class:["text-outline",i.borderColor]},[Object(r["createVNode"])("div",c,[Object(r["createVNode"])(u,{icon:o.icon,class:"text-blue-primary text-txs text-icon-position"},null,8,["icon"])]),Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.inputText=e}),type:"text",class:"text-placeholder",placeholder:o.placeholder,onClick:t[2]||(t[2]=function(e){return d.clickInputText()}),onBlur:t[3]||(t[3]=function(e){return d.blurInputText()})},null,40,["placeholder"]),[[r["vModelText"],i.inputText]]),l],2),Object(r["createVNode"])("div",n,[e.pswdErr?(Object(r["openBlock"])(),Object(r["createBlock"])("div",a,Object(r["toDisplayString"])(o.errorMessage),1)):Object(r["createCommentVNode"])("",!0)])])}var i={props:["placeholder","errorMessage","icon"],name:"TextInput",data:function(){return{inputText:"",borderColor:"border border-gray-100",textErr:!1}},methods:{clickInputText:function(){this.pswdErr||(this.borderColor="border-2 border-blue-primary")},blurInputText:function(){this.borderColor="border-2 border-red-primary",""==this.inputText&&(this.textErr=!0)}},mounted:function(){var e=this;this.emitter.on("CLEAR_TEXT",(function(t){e.inputText=t,e.textErr=!1,e.borderColor="border border-gray-100"}))}};i.render=s;t["a"]=i},"874b":function(e,t,o){"use strict";var r=o("7a23"),c={class:"text-icon-outline text-icon"},l={class:"inline-block flex-none mr-2"},n={class:"h-3 mb-2"},a={key:0,class:"error error-password text-left"};function s(e,t,o,s,i,d){var u=Object(r["resolveComponent"])("font-awesome-icon");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("div",{class:["text-outline",i.borderColor]},[Object(r["createVNode"])("div",c,[Object(r["createVNode"])(u,{icon:o.icon,class:"text-blue-primary text-txs text-icon-position"},null,8,["icon"])]),Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.inputPassword=e}),type:i.inputType,class:"text-placeholder",placeholder:o.placeholder,onClick:t[2]||(t[2]=function(e){return d.clickInputPassword()}),onBlur:t[3]||(t[3]=function(e){return d.blurInputPassword()}),autocomplete:"off"},null,40,["type","placeholder"]),[[r["vModelDynamic"],i.inputPassword]]),Object(r["createVNode"])("div",l,[i.showPassword?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:0,icon:"eye",class:"text-gray-400 relative",onClick:t[4]||(t[4]=function(e){d.hideShowPassword()})})),i.showPassword?(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:1,icon:"eye-slash",class:"text-gray-400 relative",onClick:t[5]||(t[5]=function(e){d.hideShowPassword()})})):Object(r["createCommentVNode"])("",!0)])],2),Object(r["createVNode"])("div",n,[i.pswdErr?(Object(r["openBlock"])(),Object(r["createBlock"])("div",a,Object(r["toDisplayString"])(o.errorMessage),1)):Object(r["createCommentVNode"])("",!0)])])}var i={props:["placeholder","errorMessage","icon"],name:"PasswordInput",data:function(){return{inputPassword:"",showPassword:!1,inputType:"password",borderColor:"border border-grey-100",eyeIcon:"eye",pswdErr:!1}},methods:{hideShowPassword:function(){this.showPassword=!this.showPassword,this.showPassword?this.eyeIcon="eye-slash":this.eyeIcon="eye",this.showPassword?this.inputType="text":this.inputType="password"},clickInputPassword:function(){this.pswdErr||(this.borderColor="border-2 border-blue-primary")},blurInputPassword:function(){this.borderColor="border-2 border-red-primary",""==this.inputPassword&&(this.pswdErr=!0)}},mounted:function(){var e=this;this.emitter.on("CLEAR_PASSWORD",(function(t){e.inputPassword=t,e.pswdErr=!1,e.borderColor="border border-gray-100"}))}};i.render=s;t["a"]=i},dc93:function(e,t,o){"use strict";o.r(t);var r=o("7a23"),c={class:"container mx-auto text-center"},l=Object(r["createVNode"])("h1",{class:"font-bold big-title"},"Create Wallet",-1),n={class:"mx-auto page-title-gray-line pt-5"},a={class:"w-10/12 lg:w-8/12 self-center inline-block"},s={class:"grid xs:grid-cols-1 md:grid-cols-2"},i={class:"mt-10"},d=Object(r["createVNode"])("button",{type:"submit",class:"default-btn disabled:opacity-50",disabled:""},"Create",-1);function u(e,t,o,u,p,b){var w=Object(r["resolveComponent"])("SelectInput"),m=Object(r["resolveComponent"])("TextInput"),h=Object(r["resolveComponent"])("PasswordInput");return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[l,Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",a,[Object(r["createVNode"])(w,{placeholder:"Select network",errorMessage:"Select a Network",modelValue:p.selectedNetwork,"onUpdate:modelValue":t[1]||(t[1]=function(e){return p.selectedNetwork=e}),options:p.networks},null,8,["modelValue","options"]),Object(r["createVNode"])(m,{placeholder:"Wallet Name",errorMessage:"Insert wallet name",modelValue:p.walletName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.walletName=e}),icon:"wallet"},null,8,["modelValue"]),Object(r["createVNode"])("div",s,[Object(r["createVNode"])(h,{placeholder:"Enter a New Password",errorMessage:"Min. length 8, max. length 30.",icon:"lock",modelValue:p.walletPasword,"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.walletPasword=e}),class:"mr-1"},null,8,["modelValue"]),Object(r["createVNode"])(h,{placeholder:"Confirm New Password",errorMessage:"Password doesn't match.",icon:"lock",modelValue:p.walletConfirmPassword,"onUpdate:modelValue":t[4]||(t[4]=function(e){return p.walletConfirmPassword=e}),class:"ml-1"},null,8,["modelValue"])]),Object(r["createVNode"])("div",i,[Object(r["createVNode"])("button",{type:"button",class:"default-btn mr-5",onClick:t[5]||(t[5]=function(e){b.clearInput()})},"Clear"),d])])])])}var p=o("00f6"),b=o("446e"),w=o("874b"),m={name:"ViewCreateNewWallet",components:{SelectInput:p["a"],TextInput:b["a"],PasswordInput:w["a"]},data:function(){return{selectedNetwork:"pub-test",walletName:"",walletPasword:"",walletConfirmPassword:"",networks:[{id:1,text:"PUBLIC TEST",val:"pub-test"}]}},methods:{clearInput:function(){this.selectedNetwork=0,this.walletName="",this.walletPassword="",this.walletConfirmPassword="",this.emitter.emit("CLEAR_SELECT",0),this.emitter.emit("CLEAR_TEXT",""),this.emitter.emit("CLEAR_PASSWORD","")}}};m.render=u;t["default"]=m}}]);
//# sourceMappingURL=chunk-6d49e296.a804e7a0.js.map