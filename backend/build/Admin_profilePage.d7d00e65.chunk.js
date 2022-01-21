(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9497],{74748:(e,t,r)=>{"use strict";var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(87757)),l=a(r(59713)),u=a(r(48926)),s=a(r(63038)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=G(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(67294)),d=a(r(78384)),c=r(68547),f=r(97132),p=r(80831),m=r(23724),g=a(r(78718)),h=a(r(57557)),y=r(15482),w=r(62031),b=r(49425),v=r(5493),O=r(78862),P=r(19408),E=r(34626),j=r(9008),M=r(84686),S=r(43808),k=r(91767),x=r(55967),_=a(r(28649)),A=a(r(48765)),I=a(r(84734)),L=a(r(92651)),C=r(91871),D=a(r(32860)),W=r(26595);function G(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(G=function(e){return e?r:t})(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=(0,d.default)(x.TextInput).withConfig({displayName:"ProfilePage__PasswordInput",componentId:"sc-1fhx3cm-0"})(["::-ms-reveal{display:none;}"]),T=(0,d.default)(k.FieldAction).withConfig({displayName:"ProfilePage__FieldActionWrapper",componentId:"sc-1fhx3cm-1"})(["svg{height:1rem;width:1rem;path{fill:",";}}"],(function(e){return e.theme.colors.neutral600})),N=function(){var e=(0,i.useState)(!1),t=(0,s.default)(e,2),r=t[0],a=t[1],n=(0,i.useState)(!1),l=(0,s.default)(n,2),d=l[0],k=l[1],x=(0,i.useState)(!1),G=(0,s.default)(x,2),U=G[0],N=G[1],z=(0,L.default)(),F=z.changeLocale,H=z.localeNames,R=(0,c.useAppInfos)().setUserDisplayName,V=(0,m.useQueryClient)(),Q=(0,f.useIntl)().formatMessage,Y=(0,c.useNotification)(),Z=(0,c.useOverlayBlocker)(),J=Z.lockApp,K=Z.unlockApp,X=(0,M.useNotifyAT)().notifyStatus;(0,c.useFocusWhenNavigate)();var $=(0,m.useQuery)("user",(function(){return(0,C.fetchUser)()}),{onSuccess:function(){X(Q({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError:function(){Y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ee=$.status,te=$.data,re="success"!==ee,ae=(0,m.useMutation)((function(e){return(0,C.putUser)((0,h.default)(e,"confirmPassword"))}),{onSuccess:function(){var e=(0,u.default)(o.default.mark((function e(t){var r;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.invalidateQueries("user");case 2:c.auth.setUserInfo(t),r=t.username||(0,W.getFullName)(t.firstname,t.lastname),R(r),F(t.preferedLanguage),Y({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onSettled:function(){K()},refetchActive:!0}),ne=ae.isLoading,oe=function(){var e=(0,u.default)(o.default.mark((function e(t,r){var a,n;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.setErrors,J(),n=t.username||null,ae.mutate(q(q({},t),{},{username:n}),{onError:function(e){var t,r=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data;return null!==r&&void 0!==r&&r.data?a(r.data):Y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),le=(0,g.default)(te,["email","firstname","lastname","username","preferedLanguage"]);return re?i.default.createElement(w.Main,{"aria-busy":"true"},i.default.createElement(y.Helmet,{title:Q({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),i.default.createElement(O.HeaderLayout,{title:Q({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),i.default.createElement(O.ContentLayout,null,i.default.createElement(c.LoadingIndicatorPage,null))):i.default.createElement(w.Main,{"aria-busy":ne},i.default.createElement(y.Helmet,{title:Q({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),i.default.createElement(p.Formik,{onSubmit:oe,initialValues:le,validateOnChange:!1,validationSchema:D.default,enableReinitialize:!0},(function(e){var t=e.errors,n=e.values,o=e.handleChange,l=e.isSubmitting;return i.default.createElement(c.Form,null,i.default.createElement(O.HeaderLayout,{title:te.username||(0,W.getFullName)(te.firstname,te.lastname),primaryAction:i.default.createElement(P.Button,{startIcon:i.default.createElement(I.default,null),loading:l,type:"submit"},Q({id:"form.button.save",defaultMessage:"Save"}))}),i.default.createElement(v.Box,{paddingBottom:10},i.default.createElement(O.ContentLayout,null,i.default.createElement(j.Stack,{size:6},i.default.createElement(v.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},i.default.createElement(j.Stack,{size:4},i.default.createElement(b.Typography,{variant:"delta",as:"h2"},Q({id:"Settings.profile.form.section.profile.title",defaultMessage:"Profile"})),i.default.createElement(E.Grid,{gap:5},i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(c.GenericInput,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:t.firstname,onChange:o,value:n.firstname||"",type:"text",name:"firstname"})),i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(c.GenericInput,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:t.lastname,onChange:o,value:n.lastname||"",type:"text",name:"lastname"})),i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(c.GenericInput,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:t.email,onChange:o,value:n.email||"",type:"email",name:"email"})),i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(c.GenericInput,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:t.username,onChange:o,value:n.username||"",type:"text",name:"username"}))))),i.default.createElement(v.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},i.default.createElement(j.Stack,{size:4},i.default.createElement(b.Typography,{variant:"delta",as:"h2"},Q({id:"Settings.profile.form.section.password.title",defaultMessage:"Change password"})),i.default.createElement(E.Grid,{gap:5},i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(B,{error:t.currentPassword?Q({id:t.currentPassword,defaultMessage:t.currentPassword}):"",onChange:o,value:n.currentPassword||"",label:Q({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:U?"text":"password",endAction:i.default.createElement(T,{onClick:function(e){e.stopPropagation(),N((function(e){return!e}))},label:Q(U?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},U?i.default.createElement(_.default,null):i.default.createElement(A.default,null))}))),i.default.createElement(E.Grid,{gap:5},i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(B,{error:t.password?Q({id:t.password,defaultMessage:t.password}):"",onChange:o,value:n.password||"",label:Q({id:"Auth.form.password.label",defaultMessage:"Password"}),name:"password",type:r?"text":"password",endAction:i.default.createElement(T,{onClick:function(e){e.stopPropagation(),a((function(e){return!e}))},label:Q(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?i.default.createElement(_.default,null):i.default.createElement(A.default,null))})),i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(B,{error:t.confirmPassword?Q({id:t.confirmPassword,defaultMessage:t.confirmPassword}):"",onChange:o,value:n.confirmPassword||"",label:Q({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:d?"text":"password",endAction:i.default.createElement(T,{onClick:function(e){e.stopPropagation(),k((function(e){return!e}))},label:Q(d?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},d?i.default.createElement(_.default,null):i.default.createElement(A.default,null))}))))),i.default.createElement(v.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},i.default.createElement(j.Stack,{size:4},i.default.createElement(j.Stack,{size:1},i.default.createElement(b.Typography,{variant:"delta",as:"h2"},Q({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),i.default.createElement(b.Typography,null,Q({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Selection will change the interface language only for you. Please refer to this {documentation} to make other languages available for your team."},{documentation:i.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},Q({id:"Settings.profile.form.section.experience.documentation",defaultMessage:"documentation"}))}))),i.default.createElement(E.Grid,{gap:5},i.default.createElement(E.GridItem,{s:12,col:6},i.default.createElement(S.Select,{label:Q({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:Q({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:Q({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:function(){o({target:{name:"preferedLanguage",value:null}})},clearLabel:Q({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:n.preferedLanguage,onChange:function(e){o({target:{name:"preferedLanguage",value:e}})}},Object.keys(H).map((function(e){var t=H[e];return i.default.createElement(S.Option,{value:e,key:e},t)})))))))))))})))};t.default=N},91871:(e,t,r)=>{"use strict";var a=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.putUser=t.fetchUser=void 0;var n=a(r(87757)),o=a(r(48926)),l=r(53777),u=function(){var e=(0,o.default)(n.default.mark((function e(){var t,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.axiosInstance.get("/admin/users/me");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchUser=u;var s=function(){var e=(0,o.default)(n.default.mark((function e(t){var r,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.axiosInstance.put("/admin/users/me",t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.putUser=s},32860:(e,t,r)=>{"use strict";var a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(n,u,s):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(53209)),o=r(37108);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var u=n.object().shape(o.profileValidation);t.default=u},33694:(e,t,r)=>{"use strict";var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(59713)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(53209)),u=r(21600),s=a(r(20703));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=l.object().shape(c(c({},u.commonUserSchema),{},{isActive:l.bool()},s.default));t.default=f},37108:(e,t,r)=>{"use strict";var a=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"editValidation",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"profileValidation",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"rolesValidation",{enumerable:!0,get:function(){return l.default}});var n=a(r(33694)),o=a(r(21600)),l=a(r(20703))},21600:(e,t,r)=>{"use strict";var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.commonUserSchema=void 0;var o=a(r(59713)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(53209)),u=r(68547);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={firstname:l.mixed().required(u.translatedErrors.required),lastname:l.mixed(),email:l.string().email(u.translatedErrors.email).lowercase().required(u.translatedErrors.required),username:l.string().nullable(),password:l.string().min(8,u.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:l.string().min(8,u.translatedErrors.minLength).oneOf([l.ref("password"),null],"components.Input.error.password.noMatch").when("password",(function(e,t){return e?t.required(u.translatedErrors.required):t}))};t.commonUserSchema=c;var f=d(d({},c),{},{currentPassword:l.string().when(["password","confirmPassword"],(function(e,t,r){return e||t?r.required(u.translatedErrors.required):r})),preferedLanguage:l.string().nullable()});t.default=f},20703:(e,t,r)=>{"use strict";var a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(n,u,s):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(53209)),o=r(68547);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var u={roles:n.array().min(1,o.translatedErrors.required).required(o.translatedErrors.required)};t.default=u}}]);