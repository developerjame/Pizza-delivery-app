(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3695],{"8o96":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("QF4Q")
var o=n("gCYW")
var a=n("ISHz")
function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["width"]
var i=Object(r["a"])(e)
var l=Object(o["a"])(i)
var c=false
var s
var u=function e(){if(c)return
var r=Object(o["a"])(i)
var u={width:r.width,height:r.height}
n.some((function(e){return u[e]!=l[e]}))&&"function"===typeof t&&t(u)
l=u
s=Object(a["a"])(e)}
u()
return{remove:function(){c=true
s.cancel()}}}},HMVb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n("ODXe")
var o=n("i/8D")
var a=n("DUTp")
var i=n("IPIv")
var l={}
function c(e,t){if(!o["a"])return 16
var n=e||Object(a["a"])(e).documentElement
if(!t&&l[n])return l[n]
var r=parseInt(Object(i["a"])(n).getPropertyValue("font-size"))
l[n]=r
return r}var s=n("CyAq")
function u(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var o=Object(s["a"])(e),a=Object(r["a"])(o,2),i=a[0],l=a[1]
return"rem"===l?i*c():"em"===l?i*c(n):i}},"M8//":function(e,t,n){"use strict"
n.d(t,"a",(function(){return k}))
var r=n("rePB")
var o=n("1OyB")
var a=n("vuIU")
var i=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var s=n.n(c)
var u=n("17x9")
var d=n.n(u)
var h=n("TSYQ")
var f=n.n(h)
var p=n("cClk")
var b=n("sTNg")
var m=n("yfCu")
var g=n("8o96")
var v=n("ISHz")
var y=n("/UXv")
var w=n("eGSd")
var _=n("BTe1")
var O=n("HMVb")
var x=n("J2CL")
var B=n("oXx0")
var S=n("jtGx")
function H(e){var t=e.colors,n=e.borders,r=e.spacing,o=e.typography,a=e.forms
return{fontFamily:o.fontFamily,fontWeight:o.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest,borderWidth:n.widthSmall,borderStyle:n.style,borderTopColor:t.borderMedium,borderRightColor:t.borderMedium,borderBottomColor:t.borderMedium,borderLeftColor:t.borderMedium,borderRadius:n.radiusMedium,padding:r.small,focusOutlineColor:t.borderBrand,focusOutlineWidth:n.widthMedium,focusOutlineStyle:n.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:o.fontSizeSmall,smallHeight:a.inputHeightSmall,mediumFontSize:o.fontSizeMedium,mediumHeight:a.inputHeightMedium,largeFontSize:o.fontSizeLarge,largeHeight:a.inputHeightLarge}}H.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var j,C,F,z,M
var q={componentId:"chpSa",template:function(e){return"\n\n.chpSa_byIz{position:relative}\n\n.chpSa_cPAP{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.chpSa_blLZ{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border-bottom-color:").concat(e.borderBottomColor||"inherit",";border-collapse:separate;border-image:none;border-left-color:").concat(e.borderLeftColor||"inherit",";border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-right-color:").concat(e.borderRightColor||"inherit",";border-spacing:0;border-style:").concat(e.borderStyle||"inherit",";border-top-color:").concat(e.borderTopColor||"inherit",";border-width:").concat(e.borderWidth||"inherit",";bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space:pre-wrap;widows:2;width:auto;width:100%;word-spacing:normal;word-wrap:break-word;z-index:auto}\n\n[dir=ltr] .chpSa_blLZ{text-align:left}\n\n[dir=rtl] .chpSa_blLZ{text-align:right}\n\n.chpSa_blLZ:focus~.chpSa_cPAP{opacity:1;transform:scale(1)}\n\n.chpSa_blLZ[aria-invalid],.chpSa_blLZ[aria-invalid]:focus,.chpSa_blLZ[aria-invalid]:focus~.chpSa_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.chpSa_blLZ:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ.chpSa_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.chpSa_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.chpSa_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.chpSa_cMDj{font-size:").concat(e.largeFontSize||"inherit","}")},layout:"chpSa_byIz",outline:"chpSa_cPAP",textarea:"chpSa_blLZ",disabled:"chpSa_ywdX",small:"chpSa_doqw",medium:"chpSa_ycrn",large:"chpSa_cMDj"}
var k=(j=Object(B["a"])(),C=Object(x["l"])(H,q),j(F=C(F=(M=z=function(e){Object(i["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(o["a"])(this,n)
e=t.call(this)
e._textareaResize=function(t){var n=e._textarea.style.height
if(n!=e._height){e._manuallyResized=true
e._textarea.style.overflowY="auto"
e._container.style.minHeight=n}}
e.grow=function(t){if(!e._textarea||e._manuallyResized)return
var n=e._textarea.offsetHeight-e._textarea.clientHeight
var r=""
e._textarea.style.height="auto"
e._textarea.style.overflowY="hidden"
r=e._textarea.scrollHeight+n+"px"
var o=Object(O["a"])(e.props.maxHeight,e._container)
if(e.props.maxHeight&&e._textarea.scrollHeight>o)e._textarea.style.overflowY="auto"
else if(e.props.height)if(""===e._textarea.value)r=e.props.height
else if(Object(O["a"])(e.props.height,e._container)>e._textarea.scrollHeight){e._textarea.style.overflowY="auto"
r=e.props.height}var a=Object(O["a"])(r)>o
a||(e._container.style.minHeight=r)
e._height=r
e._textarea.style.height=r}
e.handleChange=function(t){var n=e.props,r=n.onChange,o=n.value,a=n.disabled,i=n.readOnly
if(a||i){t.preventDefault()
return}"undefined"===typeof o&&e.autoGrow()
"function"===typeof r&&r(t)}
e.handleContainerRef=function(t){e._container=t}
e._defaultId=Object(_["a"])("TextArea")
return e}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.autoGrow()}},{key:"componentDidUpdate",value:function(){this.autoGrow()}},{key:"componentWillUnmount",value:function(){this._listener&&this._listener.remove()
this._textareaResizeListener&&this._textareaResizeListener.remove()
this._request&&this._request.cancel()
this._debounced&&this._debounced.cancel()}},{key:"autoGrow",value:function(){if(this.props.autoGrow){this._debounced||(this._debounced=Object(w["a"])(this.grow,200,{leading:false,trailing:true}))
this._listener||(this._listener=Object(m["a"])(window,"resize",this._debounced))
this._textarea&&!this._textareaResizeListener&&(this._textareaResizeListener=Object(g["a"])(this._textarea,this._textareaResize,["height"]))
this._request=Object(v["a"])(this.grow)}}},{key:"focus",value:function(){this._textarea.focus()}},{key:"render",value:function(){var e,t=this
var o=this.props,a=o.autoGrow,i=o.placeholder,l=o.value,c=o.defaultValue,u=o.disabled,d=o.readOnly,h=o.required,p=o.width,m=o.height,g=o.maxHeight,v=o.textareaRef,y=o.resize,w=o.size
var _=Object(S["a"])(this.props,n.propTypes)
var O=(e={},Object(r["a"])(e,q.textarea,true),Object(r["a"])(e,q[w],true),Object(r["a"])(e,q.disabled,u),e)
var x={width:p,resize:y,height:a?null:m,maxHeight:g}
var B=s.a.createElement("textarea",Object.assign({},_,{value:l,defaultValue:c,placeholder:i,ref:function(e){t._textarea=e
for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o]
v.apply(t,[e].concat(r))},style:x,id:this.id,required:h,"aria-required":h,"aria-invalid":this.invalid?"true":null,disabled:u||d,className:f()(O),onChange:this.handleChange}))
return s.a.createElement(b["a"],Object.assign({},Object(S["c"])(this.props,b["a"].propTypes),{vAlign:"top",id:this.id,ref:function(e){t._node=e}}),s.a.createElement("div",{className:q.layout,style:{width:p,maxHeight:g},ref:this.handleContainerRef},B,u||d?null:s.a.createElement("span",{className:q.outline,"aria-hidden":"true"})))}},{key:"minHeight",get:function(){return this._textarea.style.minHeight}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(y["a"])(this._textarea)}},{key:"value",get:function(){return this._textarea.value}}])
n.displayName="TextArea"
return n}(c["Component"]),z.propTypes={label:d.a.node.isRequired,id:d.a.string,size:d.a.oneOf(["small","medium","large"]),layout:d.a.oneOf(["stacked","inline"]),autoGrow:d.a.bool,resize:d.a.oneOf(["none","both","horizontal","vertical"]),width:d.a.string,height:d.a.string,maxHeight:d.a.oneOfType([d.a.number,d.a.string]),messages:d.a.arrayOf(b["d"].message),inline:d.a.bool,placeholder:d.a.string,disabled:d.a.bool,readOnly:d.a.bool,required:d.a.bool,textareaRef:d.a.func,defaultValue:d.a.string,value:Object(p["a"])(d.a.string),onChange:d.a.func},z.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},M))||F)||F)},QLaP:function(e,t,n){"use strict"
var r=function(e,t,n,r,o,a,i,l){false
if(!e){var c
if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var s=[n,r,o,a,i,l]
var u=0
c=new Error(t.replace(/%s/g,(function(){return s[u++]})))
c.name="Invariant Violation"}c.framesToPop=1
throw c}}
e.exports=r},WEeK:function(e,t,n){"use strict"
n.d(t,"a",(function(){return q}))
var r=n("rePB")
var o=n("Ff2n")
var a=n("1OyB")
var i=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var s=n("q1tI")
var u=n.n(s)
var d=n("17x9")
var h=n.n(d)
var f=n("TSYQ")
var p=n.n(f)
var b=n("cClk")
var m=n("nAyT")
var g=n("jtGx")
var v=n("E+IV")
var y=n("tCl5")
var w=n("/UXv")
var _=n("sTNg")
var O=n("TstA")
var x=n("BTe1")
var B=n("J2CL")
function S(e){var t=e.colors,n=e.typography,r=e.borders,o=e.spacing,a=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:r.widthSmall,borderStyle:r.style,borderColor:t.borderMedium,borderRadius:r.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:o.small,focusOutlineWidth:r.widthMedium,focusOutlineStyle:r.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:a.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:a.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:a.inputHeightLarge}}S.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var H,j,C,F,z
var M={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var q=(H=Object(m["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),j=Object(B["l"])(S,M),H(C=j(C=(z=F=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var r
Object(a["a"])(this,n)
r=t.call(this)
r.handleInputRef=function(e){r._input=e
r.props.inputRef(e)}
r.handleChange=function(e){r.props.onChange(e,e.target.value)}
r.handleBlur=function(e){r.props.onBlur(e)
r.setState({hasFocus:false})}
r.handleFocus=function(e){r.props.onFocus(e)
r.setState({hasFocus:true})}
r.state={hasFocus:false}
r._defaultId=Object(x["a"])("TextInput")
r._messagesId=Object(x["a"])("TextInput-messages")
return r}Object(i["a"])(n,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,n=t.type,a=t.size,i=t.htmlSize,l=(t.display,t.textAlign),c=t.placeholder,s=t.value,d=t.defaultValue,h=t.required,f=t.isRequired,b=Object(o["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var m=Object(g["b"])(b)
var v=this.interaction
var y=(e={},Object(r["a"])(e,M.input,true),Object(r["a"])(e,M[a],a),Object(r["a"])(e,M["textAlign--".concat(l)],l),e)
var w=""
m["aria-describedby"]&&(w="".concat(m["aria-describedby"]))
this.hasMessages&&(w=""!==w?"".concat(w," ").concat(this._messagesId):this._messagesId)
return u.a.createElement("input",Object.assign({},m,{className:p()(y),defaultValue:d,value:s,placeholder:c,ref:this.handleInputRef,type:n,id:this.id,required:f||h,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===v,readOnly:"readonly"===v,"aria-describedby":""!==w?w:null,size:i,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,n=t.width,o=t.inline,a=t.display,i=t.label,l=t.renderLabel,c=t.renderBeforeInput,s=t.renderAfterInput,d=t.messages,h=t.inputContainerRef,f=t.icon,b=t.shouldNotWrap
var m=this.interaction
var g=c||s||f
var y=(e={},Object(r["a"])(e,M.facade,true),Object(r["a"])(e,M.disabled,"disabled"===m),Object(r["a"])(e,M.invalid,this.invalid),Object(r["a"])(e,M.focused,this.state.hasFocus),e)
return u.a.createElement(_["a"],{id:this.id,label:Object(v["a"])(l||i),messagesId:this._messagesId,messages:d,inline:"inline-block"===a||o,width:n,inputContainerRef:h,layout:this.props.layout},u.a.createElement("span",{className:p()(y)},g?u.a.createElement(O["a"],{wrap:b?"no-wrap":"wrap"},c&&u.a.createElement(O["a"].Item,{padding:"0 0 0 small"},Object(v["a"])(c)),u.a.createElement(O["a"].Item,{shouldGrow:true,shouldShrink:true},u.a.createElement(O["a"],null,u.a.createElement(O["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(s||f)&&u.a.createElement(O["a"].Item,{padding:"0 small 0 0"},s?Object(v["a"])(s):Object(v["a"])(f))))):this.renderInput()))}},{key:"interaction",get:function(){return Object(y["a"])({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(w["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
n.displayName="TextInput"
return n}(s["Component"]),F.propTypes={renderLabel:h.a.oneOfType([h.a.node,h.a.func]),type:h.a.oneOf(["text","email","url","tel","search","password"]),id:h.a.string,value:Object(b["a"])(h.a.string),defaultValue:h.a.string,interaction:h.a.oneOf(["enabled","disabled","readonly"]),messages:h.a.arrayOf(_["d"].message),size:h.a.oneOf(["small","medium","large"]),textAlign:h.a.oneOf(["start","center"]),width:h.a.string,htmlSize:h.a.oneOfType([h.a.string,h.a.number]),display:h.a.oneOf(["inline-block","block"]),shouldNotWrap:h.a.bool,placeholder:h.a.string,isRequired:h.a.bool,inputRef:h.a.func,inputContainerRef:h.a.func,renderBeforeInput:h.a.oneOfType([h.a.node,h.a.func]),renderAfterInput:h.a.oneOfType([h.a.node,h.a.func]),onChange:h.a.func,onBlur:h.a.func,onFocus:h.a.func,icon:h.a.func,label:h.a.oneOfType([h.a.node,h.a.func]),required:h.a.bool,inline:h.a.bool},F.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},z))||C)||C)},Zgll:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x}))
var r=n("Ff2n")
var o=n("1OyB")
var a=n("vuIU")
var i=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var s=n.n(c)
var u=n("17x9")
var d=n.n(u)
var h=n("oXx0")
var f=n("J2CL")
var p=n("jtGx")
var b=n("6SzX")
var m=n("C6Zt")
var g=n("tPrY")
var v,y,w,_,O
var x=(v=Object(h["a"])(),y=Object(f["l"])(g["a"]),v(w=y(w=(O=_=function(e){Object(i["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(o["a"])(this,n)
for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i]
e=t.call.apply(t,[this].concat(a))
e._baseButton=null
return e}Object(a["a"])(n,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,o=t.renderIcon,a=t.screenReaderLabel,i=t.type,l=t.size,c=t.elementRef,u=t.as,d=t.interaction,h=t.color,f=t.focusColor,g=t.shape,v=t.withBackground,y=t.withBorder,w=t.margin,_=t.cursor,O=t.href,x=Object(r["a"])(t,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var B=this.theme
return s.a.createElement(m["a"],Object.assign({},Object(p["b"])(x),{type:i,size:l,elementRef:c,as:u,interaction:d,color:h,focusColor:f,shape:g,withBackground:v,withBorder:y,margin:w,cursor:_,href:O,renderIcon:n||o,theme:B,ref:function(t){e._baseButton=t}}),s.a.createElement(b["a"],null,a))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
n.displayName="IconButton"
return n}(c["Component"]),_.propTypes={children:d.a.oneOfType([d.a.node,d.a.func]),renderIcon:d.a.oneOfType([d.a.node,d.a.func]),screenReaderLabel:d.a.string.isRequired,type:d.a.oneOf(["button","submit","reset"]),size:d.a.oneOf(["small","medium","large"]),elementRef:d.a.func,as:d.a.elementType,interaction:d.a.oneOf(["enabled","disabled","readonly"]),color:d.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:d.a.oneOf(["info","inverse"]),shape:d.a.oneOf(["rectangle","circle"]),withBackground:d.a.bool,withBorder:d.a.bool,margin:f["c"].spacing,cursor:d.a.string,href:d.a.string},_.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},O))||w)||w)},bZJi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return q}))
var r=n("Ff2n")
var o=n("VTBJ")
var a=n("1OyB")
var i=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var s=n("q1tI")
var u=n.n(s)
var d=n("17x9")
var h=n.n(d)
var f=n("nAyT")
var p=n("KgFQ")
var b=n("jtGx")
var m=n("sQ3t")
var g=n("E+IV")
var v=n("UCAh")
var y=n("BTe1")
var w=n("J2CL")
var _=n("oXx0")
var O=n("jsCG")
var x=n("AdN2")
var B=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
var S,H,j,C,F,z
var M={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var q=(S=Object(f["a"])("8.0.0",{tip:"renderTip",variant:"color"}),H=Object(_["a"])(),j=Object(w["l"])(B,M),S(C=H(C=j(C=(z=F=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(a["a"])(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
e=t.call.apply(t,[this].concat(o))
e._id=Object(y["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(i["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,r=e.as
var a=this.state.hasFocus
var i={"aria-describedby":this._id}
if(r){var l=Object(p["a"])(n,this.props)
var c=Object(b["a"])(this.props,n.propTypes)
return u.a.createElement(l,Object.assign({},c,i),t)}return"function"===typeof t?t({focused:a,getTriggerProps:function(e){return Object(o["a"])({},i,{},e)}}):Object(m["a"])(this.props.children,i)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,o=t.isShowingContent,a=t.defaultIsShowingContent,i=t.on,l=t.placement,c=t.mountNode,s=t.constrain,d=t.offsetX,h=t.offsetY,f=t.positionTarget,p=t.onShowContent,m=t.onHideContent,v=t.tip,y=(t.variant,Object(r["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var w=this.props.variant
w=w?"default"===w?"primary-inverse":"primary":this.props.color
return u.a.createElement(O["a"],Object.assign({},Object(b["b"])(y),{isShowingContent:o,defaultIsShowingContent:a,on:i,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:l,color:"primary"===w?"primary-inverse":"primary",mountNode:c,constrain:s,shadow:"none",offsetX:d,offsetY:h,positionTarget:f,renderTrigger:function(){return e.renderTrigger()},onShowContent:p,onHideContent:m,onFocus:this.handleFocus,onBlur:this.handleBlur}),u.a.createElement("span",{id:this._id,className:M.root,role:"tooltip"},n?Object(g["a"])(n):v))}}])
n.displayName="Tooltip"
return n}(s["Component"]),F.propTypes={children:h.a.oneOfType([h.a.node,h.a.func]).isRequired,renderTip:h.a.oneOfType([h.a.node,h.a.func]),isShowingContent:h.a.bool,defaultIsShowingContent:h.a.bool,as:h.a.elementType,on:h.a.oneOfType([h.a.oneOf(["click","hover","focus"]),h.a.arrayOf(h.a.oneOf(["click","hover","focus"]))]),color:h.a.oneOf(["primary","primary-inverse"]),placement:v["a"].placement,mountNode:v["a"].mountNode,constrain:v["a"].constrain,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),positionTarget:h.a.oneOfType([x["a"],h.a.func]),onShowContent:h.a.func,onHideContent:h.a.func,tip:h.a.node,variant:h.a.oneOf(["default","inverse"])},F.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},z))||C)||C)||C)},cClk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(r,o,a){var i=e.apply(null,arguments)
if(i)return i
if(r[o]&&"function"!==typeof r[t])return new Error(["You provided a '".concat(o,"' prop without an '").concat(t,"' handler on '").concat(a,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},dI71:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("s4An")
function o(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
Object(r["a"])(e,t)}},eGSd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var r,o,a,i
var l=0
var c=[]
var s=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var u=!!n.leading
var d="maxWait"in n
var h=!("trailing"in n)||!!n.trailing
var f=d?Math.max(+n.maxWait||0,t):0
function p(t){var n=r
var i=o
r=o=void 0
l=t
if(true!==s){a=e.apply(i,n)
return a}}function b(e){l=e
c.push(setTimeout(v,t))
return u?p(e):a}function m(e){var n=e-i
var r=e-l
var o=t-n
return d?Math.min(o,f-r):o}function g(e){var n=e-i
var r=e-l
return"undefined"===typeof i||n>=t||n<0||d&&r>=f}function v(){var e=Date.now()
if(g(e))return y(e)
c.push(setTimeout(v,m(e)))}function y(e){O()
if(h&&r)return p(e)
r=o=void 0
return a}function w(){s=true
O()
l=0
r=i=o=void 0}function _(){return 0===c.length?a:y(Date.now())}function O(){c.forEach((function(e){return clearTimeout(e)}))
c=[]}function x(){var e=Date.now()
var n=g(e)
for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u]
r=s
o=this
i=e
if(n){if(0===c.length)return b(i)
if(d){c.push(setTimeout(v,t))
return p(i)}}0===c.length&&c.push(setTimeout(v,t))
return a}x.cancel=w
x.flush=_
return x}},gCYW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var r=n("QF4Q")
var o=n("i/8D")
var a=n("EgqM")
var i=n("DUTp")
function l(e){var t={top:0,left:0,height:0,width:0}
if(!o["a"])return t
var n=Object(r["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var c=e===document?document:Object(i["a"])(n)
var s=c&&c.documentElement
if(!s||!Object(a["a"])(s,n))return t
var u=n.getBoundingClientRect()
var d
for(d in u)t[d]=u[d]
if(c!==document){var h=c.defaultView.frameElement
if(h){var f=l(h)
t.top+=f.top
t.bottom+=f.top
t.left+=f.left
t.right+=f.left}}return{top:t.top+(window.pageYOffset||s.scrollTop)-(s.clientTop||0),left:t.left+(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:c.body.clientWidth-t.width-t.left,bottom:c.body.clientHeight-t.height-t.top}}},"j/Fk":function(e,t,n){"use strict"
n.r(t)
var r=n("oBik")
n.d(t,"defaultConfiguration",(function(){return r["a"]}))
n.d(t,"renderIntoDiv",(function(){return r["d"]}))
n.d(t,"getRCSAuthenticationHeaders",(function(){return r["b"]}))
n.d(t,"getRCSOriginFromHost",(function(){return r["c"]}))},msMH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return q}))
var r=n("rePB")
var o=n("Ff2n")
var a=n("1OyB")
var i=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var s=n("q1tI")
var u=n.n(s)
var d=n("17x9")
var h=n.n(d)
var f=n("TSYQ")
var p=n.n(f)
var b=n("n12J")
var m=n("J2CL")
function g(e,t,n){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(n,' as="input"`.'))}return}var v=n("nAyT")
var y=n("KgFQ")
var w=n("jtGx")
var _=n("oXx0")
function O(e){var t=e.borders,n=e.colors,r=e.spacing,o=e.typography
return{lineHeight:o.lineHeightFit,h1FontSize:o.fontSizeXXLarge,h1FontWeight:o.fontWeightLight,h1FontFamily:o.fontFamily,h2FontSize:o.fontSizeXLarge,h2FontWeight:o.fontWeightNormal,h2FontFamily:o.fontFamily,h3FontSize:o.fontSizeLarge,h3FontWeight:o.fontWeightBold,h3FontFamily:o.fontFamily,h4FontSize:o.fontSizeMedium,h4FontWeight:o.fontWeightBold,h4FontFamily:o.fontFamily,h5FontSize:o.fontSizeSmall,h5FontWeight:o.fontWeightNormal,h5FontFamily:o.fontFamily,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,borderPadding:r.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}O.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
O["instructure"]=function(e){var t=e.typography
return{h1FontFamily:t.fontFamilyHeading,h2FontFamily:t.fontFamilyHeading,h3FontWeight:t.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:t.fontWeightBold,h4FontSize:t.fontSizeLarge,h5FontWeight:t.fontWeightBold,h5FontSize:t.fontSizeMedium}}
var x={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var B=Object(m["e"])({map:x,version:"8.0.0"})
var S,H,j,C,F,z
var M={componentId:"blnAQ",template:function(e){return"\n\n.blnAQ_bGBk{line-height:".concat(e.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(e.h1FontFamily||"inherit",";font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(e.h2FontFamily||"inherit",";font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(e.h3FontFamily||"inherit",";font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(e.h4FontFamily||"inherit",";font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(e.h5FontFamily||"inherit",";font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var q=(S=Object(v["a"])("8.0.0",{ellipsis:"<TruncateText />"}),H=Object(_["a"])(),j=Object(m["l"])(O,M,B),S(C=H(C=j(C=(z=F=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){var e
var t=this.props,a=t.border,i=t.children,l=t.color,c=t.level,s=t.margin,d=t.elementRef,h=t.ellipsis,f=Object(o["a"])(t,["border","children","color","level","margin","elementRef","ellipsis"])
var m=Object(y["a"])(n,this.props,(function(){return"reset"===c?"span":c}))
return u.a.createElement(b["a"],Object.assign({},Object(w["b"])(f),{className:p()((e={},Object(r["a"])(e,M.root,true),Object(r["a"])(e,M["level--".concat(c)],true),Object(r["a"])(e,M["color--".concat(l)],l),Object(r["a"])(e,M["border--".concat(a)],"none"!==a),Object(r["a"])(e,M.ellipsis,h),e)),as:m,margin:s,elementRef:d}),i)}}])
n.displayName="Heading"
return n}(s["Component"]),F.propTypes={border:h.a.oneOf(["none","top","bottom"]),children:g,color:h.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:h.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:h.a.elementType,margin:m["c"].spacing,elementRef:h.a.func,ellipsis:h.a.bool},F.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},z))||C)||C)||C)}}])

//# sourceMappingURL=canvas-rce-async-chunk-c-1b50839fce.js.map