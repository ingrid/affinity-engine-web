(function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.IntlPolyfill=r()})(this,function(){"use strict"
function e(e){if("function"==typeof Math.log10)return Math.floor(Math.log10(e))
var r=Math.round(Math.log(e)*Math.LOG10E)
return r-(Number("1e"+r)>e)}function r(e){for(var t in e)(e instanceof r||fe.call(e,t))&&me(this,t,{value:e[t],enumerable:!0,writable:!0,configurable:!0})}function t(){me(this,"length",{writable:!0,value:0}),arguments.length&&ye.apply(this,he.call(arguments))}function n(){if(je.disableRegExpRestore)return function(){}
for(var e={lastMatch:RegExp.lastMatch||"",leftContext:RegExp.leftContext,multiline:RegExp.multiline,input:RegExp.input},r=!1,n=1;n<=9;n++)r=(e["$"+n]=RegExp["$"+n])||r
return function(){var n=/[.?*+^$[\]\\(){}|-]/g,a=e.lastMatch.replace(n,"\\$&"),i=new t
if(r)for(var o=1;o<=9;o++){var s=e["$"+o]
s?(s=s.replace(n,"\\$&"),a=a.replace(s,"("+s+")")):a="()"+a,ye.call(i,a.slice(0,a.indexOf("(")+1)),a=a.slice(a.indexOf("(")+1)}var l=be.call(i,"")+a
l=l.replace(/(\\\(|\\\)|[^()])+/g,function(e){return"[\\s\\S]{"+e.replace("\\","").length+"}"})
var c=new RegExp(l,e.multiline?"gm":"g")
c.lastIndex=e.leftContext.length,c.exec(e.input)}}function a(e){if(null===e)throw new TypeError("Cannot convert null or undefined to object")
return"object"===(void 0===e?"undefined":ce.typeof(e))?e:Object(e)}function i(e){return"number"==typeof e?e:Number(e)}function o(e){var r=i(e)
return isNaN(r)?0:0===r||-0===r||r===1/0||r===-1/0?r:r<0?-1*Math.floor(Math.abs(r)):Math.floor(Math.abs(r))}function s(e){var r=o(e)
return r<=0?0:r===1/0?Math.pow(2,53)-1:Math.min(r,Math.pow(2,53)-1)}function l(e){return fe.call(e,"__getInternalProperties")?e.__getInternalProperties(ze):de(null)}function c(e){Le=e}function u(e){for(var r=e.length;r--;){var t=e.charAt(r)
t>="a"&&t<="z"&&(e=e.slice(0,r)+t.toUpperCase()+e.slice(r+1))}return e}function g(e){return!!Oe.test(e)&&(!Fe.test(e)&&!Se.test(e))}function f(e){for(var r=void 0,t=void 0,n=1,a=(t=(e=e.toLowerCase()).split("-")).length;n<a;n++)if(2===t[n].length)t[n]=t[n].toUpperCase()
else if(4===t[n].length)t[n]=t[n].charAt(0).toUpperCase()+t[n].slice(1)
else if(1===t[n].length&&"x"!==t[n])break;(r=(e=be.call(t,"-")).match(Ee))&&r.length>1&&(r.sort(),e=e.replace(RegExp("(?:"+Ee.source+")+","i"),be.call(r,""))),fe.call(Pe.tags,e)&&(e=Pe.tags[e])
for(var i=1,o=(t=e.split("-")).length;i<o;i++)fe.call(Pe.subtags,t[i])?t[i]=Pe.subtags[t[i]]:fe.call(Pe.extLang,t[i])&&(t[i]=Pe.extLang[t[i]][0],1===i&&Pe.extLang[t[1]][1]===t[0]&&(t=he.call(t,i++),o-=1))
return be.call(t,"-")}function m(){return Le}function v(e){var r=u(String(e))
return!1!==Ne.test(r)}function d(e){if(void 0===e)return new t
for(var r=new t,n=a(e="string"==typeof e?[e]:e),i=s(n.length),o=0;o<i;){var l=String(o)
if(l in n){var c=n[l]
if(null===c||"string"!=typeof c&&"object"!==(void 0===c?"undefined":ce.typeof(c)))throw new TypeError("String or Object type expected")
var u=String(c)
if(!g(u))throw new RangeError("'"+u+"' is not a structurally valid language tag")
u=f(u),-1===ve.call(r,u)&&ye.call(r,u)}o++}return r}function h(e,r){for(var t=r;t;){if(ve.call(e,t)>-1)return t
var n=t.lastIndexOf("-")
if(n<0)return
n>=2&&"-"===t.charAt(n-2)&&(n-=2),t=t.substring(0,n)}}function p(e,t){for(var n=0,a=t.length,i=void 0,o=void 0,s=void 0;n<a&&!i;)o=t[n],i=h(e,s=String(o).replace(Te,"")),n++
var l=new r
if(void 0!==i){if(l["[[locale]]"]=i,String(o)!==String(s)){var c=o.match(Te)[0],u=o.indexOf("-u-")
l["[[extension]]"]=c,l["[[extensionIndex]]"]=u}}else l["[[locale]]"]=m()
return l}function y(e,r){return p(e,r)}function b(e,t,n,a,i){if(0===e.length)throw new ReferenceError("No locale data has been provided for this object yet.")
var o=void 0,s=(o="lookup"===n["[[localeMatcher]]"]?p(e,t):y(e,t))["[[locale]]"],l=void 0,c=void 0
if(fe.call(o,"[[extension]]")){var u=o["[[extension]]"]
c=(l=String.prototype.split.call(u,"-")).length}var g=new r
g["[[dataLocale]]"]=s
for(var m="-u",v=0,d=a.length;v<d;){var h=a[v],b=i[s][h],w=b[0],x="",j=ve
if(void 0!==l){var z=j.call(l,h)
if(-1!==z)if(z+1<c&&l[z+1].length>2){var D=l[z+1];-1!==j.call(b,D)&&(x="-"+h+"-"+(w=D))}else-1!==j(b,"true")&&(w="true")}if(fe.call(n,"[["+h+"]]")){var k=n["[["+h+"]]"];-1!==j.call(b,k)&&k!==w&&(w=k,x="")}g["[["+h+"]]"]=w,m+=x,v++}if(m.length>2){var O=s.indexOf("-x-");-1===O?s+=m:s=s.substring(0,O)+m+s.substring(O),s=f(s)}return g["[[locale]]"]=s,g}function w(e,r){for(var n=r.length,a=new t,i=0;i<n;){var o=r[i]
void 0!==h(e,String(o).replace(Te,""))&&ye.call(a,o),i++}return he.call(a)}function x(e,r){return w(e,r)}function j(e,t,n){var i=void 0,o=void 0
if(void 0!==n&&(n=new r(a(n)),void 0!==(i=n.localeMatcher)&&"lookup"!==(i=String(i))&&"best fit"!==i))throw new RangeError('matcher should be "lookup" or "best fit"')
o=void 0===i||"best fit"===i?x(e,t):w(e,t)
for(var s in o)fe.call(o,s)&&me(o,s,{writable:!1,configurable:!1,value:o[s]})
return me(o,"length",{writable:!1}),o}function z(e,r,t,n,a){var i=e[r]
if(void 0!==i){if(i="boolean"===t?Boolean(i):"string"===t?String(i):i,void 0!==n&&-1===ve.call(n,i))throw new RangeError("'"+i+"' is not an allowed value for `"+r+"`")
return i}return a}function D(e,r,t,n,a){var i=e[r]
if(void 0!==i){if(i=Number(i),isNaN(i)||i<t||i>n)throw new RangeError("Value is not a number or outside accepted range")
return Math.floor(i)}return a}function k(){var e=arguments[0],r=arguments[1]
return this&&this!==_e?O(a(this),e,r):new _e.NumberFormat(e,r)}function O(e,i,o){var s=l(e),c=n()
if(!0===s["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object")
me(e,"__getInternalProperties",{value:function(){if(arguments[0]===ze)return s}}),s["[[initializedIntlObject]]"]=!0
var u=d(i)
o=void 0===o?{}:a(o)
var g=new r,f=z(o,"localeMatcher","string",new t("lookup","best fit"),"best fit")
g["[[localeMatcher]]"]=f
var m=je.NumberFormat["[[localeData]]"],h=b(je.NumberFormat["[[availableLocales]]"],u,g,je.NumberFormat["[[relevantExtensionKeys]]"],m)
s["[[locale]]"]=h["[[locale]]"],s["[[numberingSystem]]"]=h["[[nu]]"],s["[[dataLocale]]"]=h["[[dataLocale]]"]
var p=h["[[dataLocale]]"],y=z(o,"style","string",new t("decimal","percent","currency"),"decimal")
s["[[style]]"]=y
var w=z(o,"currency","string")
if(void 0!==w&&!v(w))throw new RangeError("'"+w+"' is not a valid currency code")
if("currency"===y&&void 0===w)throw new TypeError("Currency code is required when style is currency")
var x=void 0
"currency"===y&&(w=w.toUpperCase(),s["[[currency]]"]=w,x=F(w))
var j=z(o,"currencyDisplay","string",new t("code","symbol","name"),"symbol")
"currency"===y&&(s["[[currencyDisplay]]"]=j)
var k=D(o,"minimumIntegerDigits",1,21,1)
s["[[minimumIntegerDigits]]"]=k
var O=D(o,"minimumFractionDigits",0,20,"currency"===y?x:0)
s["[[minimumFractionDigits]]"]=O
var E=D(o,"maximumFractionDigits",O,20,"currency"===y?Math.max(O,x):"percent"===y?Math.max(O,0):Math.max(O,3))
s["[[maximumFractionDigits]]"]=E
var L=o.minimumSignificantDigits,P=o.maximumSignificantDigits
void 0===L&&void 0===P||(P=D(o,"maximumSignificantDigits",L=D(o,"minimumSignificantDigits",1,21,1),21,21),s["[[minimumSignificantDigits]]"]=L,s["[[maximumSignificantDigits]]"]=P)
var N=z(o,"useGrouping","boolean",void 0,!0)
s["[[useGrouping]]"]=N
var T=m[p].patterns[y]
return s["[[positivePattern]]"]=T.positivePattern,s["[[negativePattern]]"]=T.negativePattern,s["[[boundFormat]]"]=void 0,s["[[initializedNumberFormat]]"]=!0,ge&&(e.format=S.call(e)),c(),e}function F(e){return void 0!==Me[e]?Me[e]:2}function S(){var e=null!==this&&"object"===ce.typeof(this)&&l(this)
if(!e||!e["[[initializedNumberFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.")
if(void 0===e["[[boundFormat]]"]){var r=function(e){return P(this,Number(e))},t=xe.call(r,this)
e["[[boundFormat]]"]=t}return e["[[boundFormat]]"]}function E(e,r){for(var t=L(e,r),n=[],a=0,i=0;t.length>i;i++){var o=t[i],s={}
s.type=o["[[type]]"],s.value=o["[[value]]"],n[a]=s,a+=1}return n}function L(e,r){var n=l(e),a=n["[[dataLocale]]"],i=n["[[numberingSystem]]"],o=je.NumberFormat["[[localeData]]"][a],s=o.symbols[i]||o.symbols.latn,c=void 0
!isNaN(r)&&r<0?(r=-r,c=n["[[negativePattern]]"]):c=n["[[positivePattern]]"]
for(var u=new t,g=c.indexOf("{",0),f=0,m=0,v=c.length;g>-1&&g<v;){if(-1===(f=c.indexOf("}",g)))throw new Error
if(g>m){var d=c.substring(m,g)
ye.call(u,{"[[type]]":"literal","[[value]]":d})}var h=c.substring(g+1,f)
if("number"===h)if(isNaN(r)){var p=s.nan
ye.call(u,{"[[type]]":"nan","[[value]]":p})}else if(isFinite(r)){"percent"===n["[[style]]"]&&isFinite(r)&&(r*=100)
var y=void 0
y=fe.call(n,"[[minimumSignificantDigits]]")&&fe.call(n,"[[maximumSignificantDigits]]")?N(r,n["[[minimumSignificantDigits]]"],n["[[maximumSignificantDigits]]"]):T(r,n["[[minimumIntegerDigits]]"],n["[[minimumFractionDigits]]"],n["[[maximumFractionDigits]]"]),Ie[i]?function(){var e=Ie[i]
y=String(y).replace(/\d/g,function(r){return e[r]})}():y=String(y)
var b=void 0,w=void 0,x=y.indexOf(".",0)
if(x>0?(b=y.substring(0,x),w=y.substring(x+1,x.length)):(b=y,w=void 0),!0===n["[[useGrouping]]"]){var j=s.group,z=[],D=o.patterns.primaryGroupSize||3,k=o.patterns.secondaryGroupSize||D
if(b.length>D){var O=b.length-D,F=O%k,S=b.slice(0,F)
for(S.length&&ye.call(z,S);F<O;)ye.call(z,b.slice(F,F+k)),F+=k
ye.call(z,b.slice(O))}else ye.call(z,b)
if(0===z.length)throw new Error
for(;z.length;){var E=we.call(z)
ye.call(u,{"[[type]]":"integer","[[value]]":E}),z.length&&ye.call(u,{"[[type]]":"group","[[value]]":j})}}else ye.call(u,{"[[type]]":"integer","[[value]]":b})
if(void 0!==w){var L=s.decimal
ye.call(u,{"[[type]]":"decimal","[[value]]":L}),ye.call(u,{"[[type]]":"fraction","[[value]]":w})}}else{var P=s.infinity
ye.call(u,{"[[type]]":"infinity","[[value]]":P})}else if("plusSign"===h){var _=s.plusSign
ye.call(u,{"[[type]]":"plusSign","[[value]]":_})}else if("minusSign"===h){var M=s.minusSign
ye.call(u,{"[[type]]":"minusSign","[[value]]":M})}else if("percentSign"===h&&"percent"===n["[[style]]"]){var I=s.percentSign
ye.call(u,{"[[type]]":"literal","[[value]]":I})}else if("currency"===h&&"currency"===n["[[style]]"]){var A=n["[[currency]]"],R=void 0
"code"===n["[[currencyDisplay]]"]?R=A:"symbol"===n["[[currencyDisplay]]"]?R=o.currencies[A]||A:"name"===n["[[currencyDisplay]]"]&&(R=A),ye.call(u,{"[[type]]":"currency","[[value]]":R})}else{var q=c.substring(g,f)
ye.call(u,{"[[type]]":"literal","[[value]]":q})}m=f+1,g=c.indexOf("{",m)}if(m<v){var C=c.substring(m,v)
ye.call(u,{"[[type]]":"literal","[[value]]":C})}return u}function P(e,r){for(var t=L(e,r),n="",a=0;t.length>a;a++)n+=t[a]["[[value]]"]
return n}function N(r,t,n){var a=n,i=void 0,o=void 0
if(0===r)i=be.call(Array(a+1),"0"),o=0
else{o=e(Math.abs(r))
var s=Math.round(Math.exp(Math.abs(o-a+1)*Math.LN10))
i=String(Math.round(o-a+1<0?r*s:r/s))}if(o>=a)return i+be.call(Array(o-a+1+1),"0")
if(o===a-1)return i
if(o>=0?i=i.slice(0,o+1)+"."+i.slice(o+1):o<0&&(i="0."+be.call(Array(1-(o+1)),"0")+i),i.indexOf(".")>=0&&n>t){for(var l=n-t;l>0&&"0"===i.charAt(i.length-1);)i=i.slice(0,-1),l--
"."===i.charAt(i.length-1)&&(i=i.slice(0,-1))}return i}function T(e,r,t,n){var a=n,i=Math.pow(10,a)*e,o=0===i?"0":i.toFixed(0),s=void 0,l=(s=o.indexOf("e"))>-1?o.slice(s+1):0
l&&(o=o.slice(0,s).replace(".",""),o+=be.call(Array(l-(o.length-1)+1),"0"))
var c=void 0
if(0!==a){var u=o.length
u<=a&&(o=be.call(Array(a+1-u+1),"0")+o,u=a+1)
var g=o.substring(0,u-a)
o=g+"."+o.substring(u-a,o.length),c=g.length}else c=o.length
for(var f=n-t;f>0&&"0"===o.slice(-1);)o=o.slice(0,-1),f--
return"."===o.slice(-1)&&(o=o.slice(0,-1)),c<r&&(o=be.call(Array(r-c+1),"0")+o),o}function _(e){for(var r=0;r<Ge.length;r+=1)if(e.hasOwnProperty(Ge[r]))return!1
return!0}function M(e){for(var r=0;r<Ce.length;r+=1)if(e.hasOwnProperty(Ce[r]))return!1
return!0}function I(e,r){for(var t={_:{}},n=0;n<Ce.length;n+=1)e[Ce[n]]&&(t[Ce[n]]=e[Ce[n]]),e._[Ce[n]]&&(t._[Ce[n]]=e._[Ce[n]])
for(var a=0;a<Ge.length;a+=1)r[Ge[a]]&&(t[Ge[a]]=r[Ge[a]]),r._[Ge[a]]&&(t._[Ge[a]]=r._[Ge[a]])
return t}function A(e){return e.pattern12=e.extendedPattern.replace(/'([^']*)'/g,function(e,r){return r||"'"}),e.pattern=e.pattern12.replace("{ampm}","").replace(Re,""),e}function R(e,r){switch(e.charAt(0)){case"G":return r.era=["short","short","short","long","narrow"][e.length-1],"{era}"
case"y":case"Y":case"u":case"U":case"r":return r.year=2===e.length?"2-digit":"numeric","{year}"
case"Q":case"q":return r.quarter=["numeric","2-digit","short","long","narrow"][e.length-1],"{quarter}"
case"M":case"L":return r.month=["numeric","2-digit","short","long","narrow"][e.length-1],"{month}"
case"w":return r.week=2===e.length?"2-digit":"numeric","{weekday}"
case"W":return r.week="numeric","{weekday}"
case"d":return r.day=2===e.length?"2-digit":"numeric","{day}"
case"D":case"F":case"g":return r.day="numeric","{day}"
case"E":return r.weekday=["short","short","short","long","narrow","short"][e.length-1],"{weekday}"
case"e":return r.weekday=["numeric","2-digit","short","long","narrow","short"][e.length-1],"{weekday}"
case"c":return r.weekday=["numeric",void 0,"short","long","narrow","short"][e.length-1],"{weekday}"
case"a":case"b":case"B":return r.hour12=!0,"{ampm}"
case"h":case"H":return r.hour=2===e.length?"2-digit":"numeric","{hour}"
case"k":case"K":return r.hour12=!0,r.hour=2===e.length?"2-digit":"numeric","{hour}"
case"m":return r.minute=2===e.length?"2-digit":"numeric","{minute}"
case"s":return r.second=2===e.length?"2-digit":"numeric","{second}"
case"S":case"A":return r.second="numeric","{second}"
case"z":case"Z":case"O":case"v":case"V":case"X":case"x":return r.timeZoneName=e.length<4?"short":"long","{timeZoneName}"}}function q(e,r){if(!qe.test(r)){var t={originalPattern:r,_:{}}
return t.extendedPattern=r.replace(Ae,function(e){return R(e,t._)}),e.replace(Ae,function(e){return R(e,t)}),A(t)}}function C(e){var r=e.availableFormats,t=e.timeFormats,n=e.dateFormats,a=[],i=void 0,o=void 0,s=void 0,l=void 0,c=void 0,u=[],g=[]
for(i in r)r.hasOwnProperty(i)&&(s=q(i,o=r[i]))&&(a.push(s),_(s)?g.push(s):M(s)&&u.push(s))
for(i in t)t.hasOwnProperty(i)&&(s=q(i,o=t[i]))&&(a.push(s),u.push(s))
for(i in n)n.hasOwnProperty(i)&&(s=q(i,o=n[i]))&&(a.push(s),g.push(s))
for(l=0;l<u.length;l+=1)for(c=0;c<g.length;c+=1)o="long"===g[c].month?g[c].weekday?e.full:e.long:"short"===g[c].month?e.medium:e.short,(s=I(g[c],u[l])).originalPattern=o,s.extendedPattern=o.replace("{0}",u[l].extendedPattern).replace("{1}",g[c].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi,""),a.push(A(s))
return a}function G(e,r){if(Ze[e]&&Ze[e][r]){var t
return t={originalPattern:Ze[e][r],_:ae({},e,r),extendedPattern:"{"+e+"}"},ae(t,e,r),ae(t,"pattern12","{"+e+"}"),ae(t,"pattern","{"+e+"}"),t}}function Z(e,r,t,n,a){var i=e[r]&&e[r][t]?e[r][t]:e.gregory[t],o={narrow:["short","long"],short:["long","narrow"],long:["short","narrow"]},s=fe.call(i,n)?i[n]:fe.call(i,o[n][0])?i[o[n][0]]:i[o[n][1]]
return null!==a?s[a]:s}function B(){var e=arguments[0],r=arguments[1]
return this&&this!==_e?U(a(this),e,r):new _e.DateTimeFormat(e,r)}function U(e,a,i){var o=l(e),s=n()
if(!0===o["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object")
me(e,"__getInternalProperties",{value:function(){if(arguments[0]===ze)return o}}),o["[[initializedIntlObject]]"]=!0
var c=d(a)
i=K(i,"any","date")
var g=new r,f=z(i,"localeMatcher","string",new t("lookup","best fit"),"best fit")
g["[[localeMatcher]]"]=f
var m=je.DateTimeFormat,v=m["[[localeData]]"],h=b(m["[[availableLocales]]"],c,g,m["[[relevantExtensionKeys]]"],v)
o["[[locale]]"]=h["[[locale]]"],o["[[calendar]]"]=h["[[ca]]"],o["[[numberingSystem]]"]=h["[[nu]]"],o["[[dataLocale]]"]=h["[[dataLocale]]"]
var p=h["[[dataLocale]]"],y=i.timeZone
if(void 0!==y&&"UTC"!==(y=u(y)))throw new RangeError("timeZone is not supported.")
o["[[timeZone]]"]=y,g=new r
for(var w in Ue)if(fe.call(Ue,w)){var x=z(i,w,"string",Ue[w])
g["[["+w+"]]"]=x}var j=void 0,D=v[p],k=$(D.formats)
if(f=z(i,"formatMatcher","string",new t("basic","best fit"),"best fit"),D.formats=k,"basic"===f)j=Y(g,k)
else{var O=z(i,"hour12","boolean")
g.hour12=void 0===O?D.hour12:O,j=H(g,k)}for(var F in Ue)if(fe.call(Ue,F)&&fe.call(j,F)){var S=j[F]
S=j._&&fe.call(j._,F)?j._[F]:S,o["[["+F+"]]"]=S}var E=void 0,L=z(i,"hour12","boolean")
if(o["[[hour]]"])if(L=void 0===L?D.hour12:L,o["[[hour12]]"]=L,!0===L){var P=D.hourNo0
o["[[hourNo0]]"]=P,E=j.pattern12}else E=j.pattern
else E=j.pattern
return o["[[pattern]]"]=E,o["[[boundFormat]]"]=void 0,o["[[initializedDateTimeFormat]]"]=!0,ge&&(e.format=W.call(e)),s(),e}function $(e){return"[object Array]"===Object.prototype.toString.call(e)?e:C(e)}function K(e,t,n){if(void 0===e)e=null
else{var i=a(e)
e=new r
for(var o in i)e[o]=i[o]}e=de(e)
var s=!0
return"date"!==t&&"any"!==t||void 0===e.weekday&&void 0===e.year&&void 0===e.month&&void 0===e.day||(s=!1),"time"!==t&&"any"!==t||void 0===e.hour&&void 0===e.minute&&void 0===e.second||(s=!1),!s||"date"!==n&&"all"!==n||(e.year=e.month=e.day="numeric"),!s||"time"!==n&&"all"!==n||(e.hour=e.minute=e.second="numeric"),e}function Y(e,r){for(var t=-1/0,n=void 0,a=0,i=r.length;a<i;){var o=r[a],s=0
for(var l in Ue)if(fe.call(Ue,l)){var c=e["[["+l+"]]"],u=fe.call(o,l)?o[l]:void 0
if(void 0===c&&void 0!==u)s-=20
else if(void 0!==c&&void 0===u)s-=120
else{var g=["2-digit","numeric","narrow","short","long"],f=ve.call(g,c),m=ve.call(g,u),v=Math.max(Math.min(m-f,2),-2)
2===v?s-=6:1===v?s-=3:-1===v?s-=6:-2===v&&(s-=8)}}s>t&&(t=s,n=o),a++}return n}function H(e,r){var t=[]
for(var n in Ue)fe.call(Ue,n)&&void 0!==e["[["+n+"]]"]&&t.push(n)
if(1===t.length){var a=G(t[0],e["[["+t[0]+"]]"])
if(a)return a}for(var i=-1/0,o=void 0,s=0,l=r.length;s<l;){var c=r[s],u=0
for(var g in Ue)if(fe.call(Ue,g)){var f=e["[["+g+"]]"],m=fe.call(c,g)?c[g]:void 0
if(f!==(fe.call(c._,g)?c._[g]:void 0)&&(u-=2),void 0===f&&void 0!==m)u-=20
else if(void 0!==f&&void 0===m)u-=120
else{var v=["2-digit","numeric","narrow","short","long"],d=ve.call(v,f),h=ve.call(v,m),p=Math.max(Math.min(h-d,2),-2)
h<=1&&d>=2||h>=2&&d<=1?p>0?u-=6:p<0&&(u-=8):p>1?u-=3:p<-1&&(u-=6)}}c._.hour12!==e.hour12&&(u-=1),u>i&&(i=u,o=c),s++}return o}function W(){var e=null!==this&&"object"===ce.typeof(this)&&l(this)
if(!e||!e["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.")
if(void 0===e["[[boundFormat]]"]){var r=function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0]
return V(this,void 0===e?Date.now():i(e))},t=xe.call(r,this)
e["[[boundFormat]]"]=t}return e["[[boundFormat]]"]}function X(e,r){if(!isFinite(r))throw new RangeError("Invalid valid date passed to format")
var a=e.__getInternalProperties(ze)
n()
for(var i=a["[[locale]]"],o=new _e.NumberFormat([i],{useGrouping:!1}),s=new _e.NumberFormat([i],{minimumIntegerDigits:2,useGrouping:!1}),l=Q(r,a["[[calendar]]"],a["[[timeZone]]"]),c=a["[[pattern]]"],u=new t,g=0,f=c.indexOf("{"),m=0,v=a["[[dataLocale]]"],d=je.DateTimeFormat["[[localeData]]"][v].calendars,h=a["[[calendar]]"];-1!==f;){var p=void 0
if(-1===(m=c.indexOf("}",f)))throw new Error("Unclosed pattern")
f>g&&ye.call(u,{type:"literal",value:c.substring(g,f)})
var y=c.substring(f+1,m)
if(Ue.hasOwnProperty(y)){var b=a["[["+y+"]]"],w=l["[["+y+"]]"]
if("year"===y&&w<=0?w=1-w:"month"===y?w++:"hour"===y&&!0===a["[[hour12]]"]&&0===(w%=12)&&!0===a["[[hourNo0]]"]&&(w=12),"numeric"===b)p=P(o,w)
else if("2-digit"===b)(p=P(s,w)).length>2&&(p=p.slice(-2))
else if(b in Be)switch(y){case"month":p=Z(d,h,"months",b,l["[["+y+"]]"])
break
case"weekday":try{p=Z(d,h,"days",b,l["[["+y+"]]"])}catch(e){throw new Error("Could not find weekday data for locale "+i)}break
case"timeZoneName":p=""
break
case"era":try{p=Z(d,h,"eras",b,l["[["+y+"]]"])}catch(e){throw new Error("Could not find era data for locale "+i)}break
default:p=l["[["+y+"]]"]}ye.call(u,{type:y,value:p})}else"ampm"===y?(p=Z(d,h,"dayPeriods",l["[[hour]]"]>11?"pm":"am",null),ye.call(u,{type:"dayPeriod",value:p})):ye.call(u,{type:"literal",value:c.substring(f,m+1)})
g=m+1,f=c.indexOf("{",g)}return m<c.length-1&&ye.call(u,{type:"literal",value:c.substr(m+1)}),u}function V(e,r){for(var t=X(e,r),n="",a=0;t.length>a;a++)n+=t[a].value
return n}function J(e,r){for(var t=X(e,r),n=[],a=0;t.length>a;a++){var i=t[a]
n.push({type:i.type,value:i.value})}return n}function Q(e,t,n){var a=new Date(e),i="get"+(n||"")
return new r({"[[weekday]]":a[i+"Day"](),"[[era]]":+(a[i+"FullYear"]()>=0),"[[year]]":a[i+"FullYear"](),"[[month]]":a[i+"Month"](),"[[day]]":a[i+"Date"](),"[[hour]]":a[i+"Hours"](),"[[minute]]":a[i+"Minutes"](),"[[second]]":a[i+"Seconds"](),"[[inDST]]":!1})}function ee(e,r){if(!e.number)throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat")
var t=void 0,n=[r],a=r.split("-")
for(a.length>2&&4===a[1].length&&ye.call(n,a[0]+"-"+a[2]);t=we.call(n);)ye.call(je.NumberFormat["[[availableLocales]]"],t),je.NumberFormat["[[localeData]]"][t]=e.number,e.date&&(e.date.nu=e.number.nu,ye.call(je.DateTimeFormat["[[availableLocales]]"],t),je.DateTimeFormat["[[localeData]]"][t]=e.date)
void 0===Le&&c(r)}var re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},te=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(r,t,n,a){var i=r&&r.defaultProps,o=arguments.length-3
if(t||0===o||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s])
else t||(t=i||{})
if(1===o)t.children=a
else if(o>1){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+3]
t.children=l}return{$$typeof:e,type:r,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),ne=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),ae=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},ie=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},oe="undefined"==typeof global?self:global,se=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r
if(Symbol.iterator in Object(r))return e(r,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),le={},ce=Object.freeze({jsx:te,asyncToGenerator:function(e){return function(){var r=e.apply(this,arguments)
return new Promise(function(e,t){function n(a,i){try{var o=r[a](i),s=o.value}catch(e){return void t(e)}if(!o.done)return Promise.resolve(s).then(function(e){return n("next",e)},function(e){return n("throw",e)})
e(s)}return n("next")})}},classCallCheck:function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},createClass:ne,defineEnumerableProperties:function(e,r){for(var t in r){var n=r[t]
n.configurable=n.enumerable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,t,n)}return e},defaults:function(e,r){for(var t=Object.getOwnPropertyNames(r),n=0;n<t.length;n++){var a=t[n],i=Object.getOwnPropertyDescriptor(r,a)
i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e,a,i)}return e},defineProperty:ae,get:function e(r,t,n){null===r&&(r=Function.prototype)
var a=Object.getOwnPropertyDescriptor(r,t)
if(void 0===a){var i=Object.getPrototypeOf(r)
return null===i?void 0:e(i,t,n)}if("value"in a)return a.value
var o=a.get
if(void 0!==o)return o.call(n)},inherits:function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r)
e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)},interopRequireDefault:function(e){return e&&e.__esModule?e:{default:e}},interopRequireWildcard:function(e){if(e&&e.__esModule)return e
var r={}
if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])
return r.default=e,r},newArrowCheck:function(e,r){if(e!==r)throw new TypeError("Cannot instantiate an arrow function")},objectDestructuringEmpty:function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},objectWithoutProperties:function(e,r){var t={}
for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t},possibleConstructorReturn:function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!r||"object"!=typeof r&&"function"!=typeof r?e:r},selfGlobal:oe,set:function e(r,t,n,a){var i=Object.getOwnPropertyDescriptor(r,t)
if(void 0===i){var o=Object.getPrototypeOf(r)
null!==o&&e(o,t,n,a)}else if("value"in i&&i.writable)i.value=n
else{var s=i.set
void 0!==s&&s.call(a,n)}return n},slicedToArray:se,slicedToArrayLoose:function(e,r){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e)){for(var t,n=[],a=e[Symbol.iterator]();!(t=a.next()).done&&(n.push(t.value),!r||n.length!==r););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},taggedTemplateLiteral:function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))},taggedTemplateLiteralLoose:function(e,r){return e.raw=r,e},temporalRef:function(e,r,t){if(e===t)throw new ReferenceError(r+" is not defined - temporal dead zone")
return e},temporalUndefined:le,toArray:function(e){return Array.isArray(e)?e:Array.from(e)},toConsumableArray:function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r]
return t}return Array.from(e)},typeof:re,extends:ie,instanceof:function(e,r){return null!=r&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r}}),ue=function(){var e=function(){}
try{return Object.defineProperty(e,"a",{get:function(){return 1}}),Object.defineProperty(e,"prototype",{writable:!1}),1===e.a&&e.prototype instanceof Object}catch(e){return!1}}(),ge=!ue&&!Object.prototype.__defineGetter__,fe=Object.prototype.hasOwnProperty,me=ue?Object.defineProperty:function(e,r,t){"get"in t&&e.__defineGetter__?e.__defineGetter__(r,t.get):(!fe.call(e,r)||"value"in t)&&(e[r]=t.value)},ve=Array.prototype.indexOf||function(e){var r=this
if(!r.length)return-1
for(var t=arguments[1]||0,n=r.length;t<n;t++)if(r[t]===e)return t
return-1},de=Object.create||function(e,r){function t(){}var n=void 0
t.prototype=e,n=new t
for(var a in r)fe.call(r,a)&&me(n,a,r[a])
return n},he=Array.prototype.slice,pe=Array.prototype.concat,ye=Array.prototype.push,be=Array.prototype.join,we=Array.prototype.shift,xe=Function.prototype.bind||function(e){var r=this,t=he.call(arguments,1)
return r.length,function(){return r.apply(e,pe.call(t,he.call(arguments)))}},je=de(null),ze=Math.random()
r.prototype=de(null),t.prototype=de(null)
var De="(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",ke="[0-9a-wy-z](?:-[a-z0-9]{2,8})+",Oe=RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$","i"),Fe=RegExp("^(?!x).*?-("+De+")-(?:\\w{4,8}-(?!x-))*\\1\\b","i"),Se=RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b","i"),Ee=RegExp("-"+ke,"ig"),Le=void 0,Pe={tags:{"art-lojban":"jbo","i-ami":"ami","i-bnn":"bnn","i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","no-bok":"nb","no-nyn":"nn","sgn-BE-FR":"sfb","sgn-BE-NL":"vgt","sgn-CH-DE":"sgg","zh-guoyu":"cmn","zh-hakka":"hak","zh-min-nan":"nan","zh-xiang":"hsn","sgn-BR":"bzs","sgn-CO":"csn","sgn-DE":"gsg","sgn-DK":"dsl","sgn-ES":"ssp","sgn-FR":"fsl","sgn-GB":"bfi","sgn-GR":"gss","sgn-IE":"isg","sgn-IT":"ise","sgn-JP":"jsl","sgn-MX":"mfs","sgn-NI":"ncs","sgn-NL":"dse","sgn-NO":"nsl","sgn-PT":"psr","sgn-SE":"swl","sgn-US":"ase","sgn-ZA":"sfs","zh-cmn":"cmn","zh-cmn-Hans":"cmn-Hans","zh-cmn-Hant":"cmn-Hant","zh-gan":"gan","zh-wuu":"wuu","zh-yue":"yue"},subtags:{BU:"MM",DD:"DE",FX:"FR",TP:"TL",YD:"YE",ZR:"CD",heploc:"alalc97",in:"id",iw:"he",ji:"yi",jw:"jv",mo:"ro",ayx:"nun",bjd:"drl",ccq:"rki",cjr:"mom",cka:"cmr",cmk:"xch",drh:"khk",drw:"prs",gav:"dev",hrr:"jal",ibi:"opa",kgh:"kml",lcq:"ppr",mst:"mry",myt:"mry",sca:"hle",tie:"ras",tkk:"twm",tlw:"weo",tnf:"prs",ybd:"rki",yma:"lrr"},extLang:{aao:["aao","ar"],abh:["abh","ar"],abv:["abv","ar"],acm:["acm","ar"],acq:["acq","ar"],acw:["acw","ar"],acx:["acx","ar"],acy:["acy","ar"],adf:["adf","ar"],ads:["ads","sgn"],aeb:["aeb","ar"],aec:["aec","ar"],aed:["aed","sgn"],aen:["aen","sgn"],afb:["afb","ar"],afg:["afg","sgn"],ajp:["ajp","ar"],apc:["apc","ar"],apd:["apd","ar"],arb:["arb","ar"],arq:["arq","ar"],ars:["ars","ar"],ary:["ary","ar"],arz:["arz","ar"],ase:["ase","sgn"],asf:["asf","sgn"],asp:["asp","sgn"],asq:["asq","sgn"],asw:["asw","sgn"],auz:["auz","ar"],avl:["avl","ar"],ayh:["ayh","ar"],ayl:["ayl","ar"],ayn:["ayn","ar"],ayp:["ayp","ar"],bbz:["bbz","ar"],bfi:["bfi","sgn"],bfk:["bfk","sgn"],bjn:["bjn","ms"],bog:["bog","sgn"],bqn:["bqn","sgn"],bqy:["bqy","sgn"],btj:["btj","ms"],bve:["bve","ms"],bvl:["bvl","sgn"],bvu:["bvu","ms"],bzs:["bzs","sgn"],cdo:["cdo","zh"],cds:["cds","sgn"],cjy:["cjy","zh"],cmn:["cmn","zh"],coa:["coa","ms"],cpx:["cpx","zh"],csc:["csc","sgn"],csd:["csd","sgn"],cse:["cse","sgn"],csf:["csf","sgn"],csg:["csg","sgn"],csl:["csl","sgn"],csn:["csn","sgn"],csq:["csq","sgn"],csr:["csr","sgn"],czh:["czh","zh"],czo:["czo","zh"],doq:["doq","sgn"],dse:["dse","sgn"],dsl:["dsl","sgn"],dup:["dup","ms"],ecs:["ecs","sgn"],esl:["esl","sgn"],esn:["esn","sgn"],eso:["eso","sgn"],eth:["eth","sgn"],fcs:["fcs","sgn"],fse:["fse","sgn"],fsl:["fsl","sgn"],fss:["fss","sgn"],gan:["gan","zh"],gds:["gds","sgn"],gom:["gom","kok"],gse:["gse","sgn"],gsg:["gsg","sgn"],gsm:["gsm","sgn"],gss:["gss","sgn"],gus:["gus","sgn"],hab:["hab","sgn"],haf:["haf","sgn"],hak:["hak","zh"],hds:["hds","sgn"],hji:["hji","ms"],hks:["hks","sgn"],hos:["hos","sgn"],hps:["hps","sgn"],hsh:["hsh","sgn"],hsl:["hsl","sgn"],hsn:["hsn","zh"],icl:["icl","sgn"],ils:["ils","sgn"],inl:["inl","sgn"],ins:["ins","sgn"],ise:["ise","sgn"],isg:["isg","sgn"],isr:["isr","sgn"],jak:["jak","ms"],jax:["jax","ms"],jcs:["jcs","sgn"],jhs:["jhs","sgn"],jls:["jls","sgn"],jos:["jos","sgn"],jsl:["jsl","sgn"],jus:["jus","sgn"],kgi:["kgi","sgn"],knn:["knn","kok"],kvb:["kvb","ms"],kvk:["kvk","sgn"],kvr:["kvr","ms"],kxd:["kxd","ms"],lbs:["lbs","sgn"],lce:["lce","ms"],lcf:["lcf","ms"],liw:["liw","ms"],lls:["lls","sgn"],lsg:["lsg","sgn"],lsl:["lsl","sgn"],lso:["lso","sgn"],lsp:["lsp","sgn"],lst:["lst","sgn"],lsy:["lsy","sgn"],ltg:["ltg","lv"],lvs:["lvs","lv"],lzh:["lzh","zh"],max:["max","ms"],mdl:["mdl","sgn"],meo:["meo","ms"],mfa:["mfa","ms"],mfb:["mfb","ms"],mfs:["mfs","sgn"],min:["min","ms"],mnp:["mnp","zh"],mqg:["mqg","ms"],mre:["mre","sgn"],msd:["msd","sgn"],msi:["msi","ms"],msr:["msr","sgn"],mui:["mui","ms"],mzc:["mzc","sgn"],mzg:["mzg","sgn"],mzy:["mzy","sgn"],nan:["nan","zh"],nbs:["nbs","sgn"],ncs:["ncs","sgn"],nsi:["nsi","sgn"],nsl:["nsl","sgn"],nsp:["nsp","sgn"],nsr:["nsr","sgn"],nzs:["nzs","sgn"],okl:["okl","sgn"],orn:["orn","ms"],ors:["ors","ms"],pel:["pel","ms"],pga:["pga","ar"],pks:["pks","sgn"],prl:["prl","sgn"],prz:["prz","sgn"],psc:["psc","sgn"],psd:["psd","sgn"],pse:["pse","ms"],psg:["psg","sgn"],psl:["psl","sgn"],pso:["pso","sgn"],psp:["psp","sgn"],psr:["psr","sgn"],pys:["pys","sgn"],rms:["rms","sgn"],rsi:["rsi","sgn"],rsl:["rsl","sgn"],sdl:["sdl","sgn"],sfb:["sfb","sgn"],sfs:["sfs","sgn"],sgg:["sgg","sgn"],sgx:["sgx","sgn"],shu:["shu","ar"],slf:["slf","sgn"],sls:["sls","sgn"],sqk:["sqk","sgn"],sqs:["sqs","sgn"],ssh:["ssh","ar"],ssp:["ssp","sgn"],ssr:["ssr","sgn"],svk:["svk","sgn"],swc:["swc","sw"],swh:["swh","sw"],swl:["swl","sgn"],syy:["syy","sgn"],tmw:["tmw","ms"],tse:["tse","sgn"],tsm:["tsm","sgn"],tsq:["tsq","sgn"],tss:["tss","sgn"],tsy:["tsy","sgn"],tza:["tza","sgn"],ugn:["ugn","sgn"],ugy:["ugy","sgn"],ukl:["ukl","sgn"],uks:["uks","sgn"],urk:["urk","ms"],uzn:["uzn","uz"],uzs:["uzs","uz"],vgt:["vgt","sgn"],vkk:["vkk","ms"],vkt:["vkt","ms"],vsi:["vsi","sgn"],vsl:["vsl","sgn"],vsv:["vsv","sgn"],wuu:["wuu","zh"],xki:["xki","sgn"],xml:["xml","sgn"],xmm:["xmm","ms"],xms:["xms","sgn"],yds:["yds","sgn"],ysl:["ysl","sgn"],yue:["yue","zh"],zib:["zib","sgn"],zlm:["zlm","ms"],zmi:["zmi","ms"],zsl:["zsl","sgn"],zsm:["zsm","ms"]}},Ne=/^[A-Z]{3}$/,Te=/-u(?:-[0-9a-z]{2,8})+/gi,_e={}
Object.defineProperty(_e,"getCanonicalLocales",{enumerable:!1,configurable:!0,writable:!0,value:function(e){for(var r=d(e),t=[],n=r.length,a=0;a<n;)t[a]=r[a],a++
return t}})
var Me={BHD:3,BYR:0,XOF:0,BIF:0,XAF:0,CLF:4,CLP:0,KMF:0,DJF:0,XPF:0,GNF:0,ISK:0,IQD:3,JPY:0,JOD:3,KRW:0,KWD:3,LYD:3,OMR:3,PYG:0,RWF:0,TND:3,UGX:0,UYI:0,VUV:0,VND:0}
me(_e,"NumberFormat",{configurable:!0,writable:!0,value:k}),me(_e.NumberFormat,"prototype",{writable:!1}),je.NumberFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["nu"],"[[localeData]]":{}},me(_e.NumberFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:xe.call(function(e){if(!fe.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor")
var r=n(),t=arguments[1],a=this["[[availableLocales]]"],i=d(e)
return r(),j(a,i,t)},je.NumberFormat)}),me(_e.NumberFormat.prototype,"format",{configurable:!0,get:S}),Object.defineProperty(_e.NumberFormat.prototype,"formatToParts",{configurable:!0,enumerable:!1,writable:!0,value:function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0],r=null!==this&&"object"===ce.typeof(this)&&l(this)
if(!r||!r["[[initializedNumberFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.")
return E(this,Number(e))}})
var Ie={arab:["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],arabext:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],bali:["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],beng:["০","১","২","৩","৪","৫","৬","৭","৮","৯"],deva:["०","१","२","३","४","५","६","७","८","९"],fullwide:["０","１","２","３","４","５","６","７","８","９"],gujr:["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],guru:["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],hanidec:["〇","一","二","三","四","五","六","七","八","九"],khmr:["០","១","២","៣","៤","៥","៦","៧","៨","៩"],knda:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],laoo:["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],latn:["0","1","2","3","4","5","6","7","8","9"],limb:["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],mlym:["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],mong:["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],mymr:["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],orya:["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],tamldec:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],telu:["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],thai:["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],tibt:["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"]}
me(_e.NumberFormat.prototype,"resolvedOptions",{configurable:!0,writable:!0,value:function(){var e=void 0,t=new r,n=["locale","numberingSystem","style","currency","currencyDisplay","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","useGrouping"],a=null!==this&&"object"===ce.typeof(this)&&l(this)
if(!a||!a["[[initializedNumberFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.")
for(var i=0,o=n.length;i<o;i++)fe.call(a,e="[["+n[i]+"]]")&&(t[n[i]]={value:a[e],writable:!0,configurable:!0,enumerable:!0})
return de({},t)}})
var Ae=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,Re=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,qe=/[rqQASjJgwWIQq]/,Ce=["era","year","month","day","weekday","quarter"],Ge=["hour","minute","second","hour12","timeZoneName"],Ze={second:{numeric:"s","2-digit":"ss"},minute:{numeric:"m","2-digit":"mm"},year:{numeric:"y","2-digit":"yy"},day:{numeric:"d","2-digit":"dd"},month:{numeric:"L","2-digit":"LL",narrow:"LLLLL",short:"LLL",long:"LLLL"},weekday:{narrow:"ccccc",short:"ccc",long:"cccc"}},Be=de(null,{narrow:{},short:{},long:{}})
me(_e,"DateTimeFormat",{configurable:!0,writable:!0,value:B}),me(B,"prototype",{writable:!1})
var Ue={weekday:["narrow","short","long"],era:["narrow","short","long"],year:["2-digit","numeric"],month:["2-digit","numeric","narrow","short","long"],day:["2-digit","numeric"],hour:["2-digit","numeric"],minute:["2-digit","numeric"],second:["2-digit","numeric"],timeZoneName:["short","long"]}
je.DateTimeFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["ca","nu"],"[[localeData]]":{}},me(_e.DateTimeFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:xe.call(function(e){if(!fe.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor")
var r=n(),t=arguments[1],a=this["[[availableLocales]]"],i=d(e)
return r(),j(a,i,t)},je.NumberFormat)}),me(_e.DateTimeFormat.prototype,"format",{configurable:!0,get:W}),Object.defineProperty(_e.DateTimeFormat.prototype,"formatToParts",{enumerable:!1,writable:!0,configurable:!0,value:function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0],r=null!==this&&"object"===ce.typeof(this)&&l(this)
if(!r||!r["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.")
return J(this,void 0===e?Date.now():i(e))}}),me(_e.DateTimeFormat.prototype,"resolvedOptions",{writable:!0,configurable:!0,value:function(){var e=void 0,t=new r,n=["locale","calendar","numberingSystem","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"],a=null!==this&&"object"===ce.typeof(this)&&l(this)
if(!a||!a["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.")
for(var i=0,o=n.length;i<o;i++)fe.call(a,e="[["+n[i]+"]]")&&(t[n[i]]={value:a[e],writable:!0,configurable:!0,enumerable:!0})
return de({},t)}})
var $e=_e.__localeSensitiveProtos={Number:{},Date:{}}
if($e.Number.toLocaleString=function(){if("[object Number]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()")
return P(new k(arguments[0],arguments[1]),this)},$e.Date.toLocaleString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var r=arguments[0],t=arguments[1]
return V(new B(r,t=K(t,"any","all")),e)},$e.Date.toLocaleDateString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var r=arguments[0],t=arguments[1]
return V(new B(r,t=K(t,"date","date")),e)},$e.Date.toLocaleTimeString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var r=arguments[0],t=arguments[1]
return V(new B(r,t=K(t,"time","time")),e)},me(_e,"__applyLocaleSensitivePrototypes",{writable:!0,configurable:!0,value:function(){me(Number.prototype,"toLocaleString",{writable:!0,configurable:!0,value:$e.Number.toLocaleString}),me(Date.prototype,"toLocaleString",{writable:!0,configurable:!0,value:$e.Date.toLocaleString})
for(var e in $e.Date)fe.call($e.Date,e)&&me(Date.prototype,e,{writable:!0,configurable:!0,value:$e.Date[e]})}}),me(_e,"__addLocaleData",{value:function(e){if(!g(e.locale))throw new Error("Object passed doesn't identify itself with a valid language tag")
ee(e,e.locale)}}),me(_e,"__disableRegExpRestore",{value:function(){je.disableRegExpRestore=!0}}),"undefined"==typeof Intl)try{window.Intl=_e,_e.__applyLocaleSensitivePrototypes()}catch(e){}return _e})
