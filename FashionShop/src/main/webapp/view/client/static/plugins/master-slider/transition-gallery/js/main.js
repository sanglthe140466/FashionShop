function generateOutput(){var n = ""; n += 'data-effect="' + selected_show.code() + '" \n', n += 'data-duration="' + showduration.val() + '" \n', (showdelay.val() !== "0" || showdelay.val() !== "") && (n += 'data-delay="' + showdelay.val() + '" \n'), showease.val() !== "linear" && (n += 'data-ease="' + showease.val() + '" \n'), selected_hide && selected_hide.code() !== selected_show.code() && (n += 'data-hide-effect="' + selected_hide.code() + '" \n'), hidetime.val() !== "" && (n += 'data-hide-time="' + hidetime.val() + '" \n'), hideduration.val() !== "" && (n += 'data-hide-duration="' + hideduration.val() + '" \n'), hideease.val() !== "null" && (n += 'data-hide-ease="' + hideease.val() + '" \n'), eff_parameters.name = selected_show.code(), eff_parameters.duration = showduration.val(), (showdelay.val() !== "0" || showdelay.val() !== "") && (eff_parameters.delay = showdelay.val()), showease.val() !== "linear" && (eff_parameters.ease = showease.val()), selected_hide && (end_eff_parameters.name = selected_hide.code()), hideduration.val() !== "" && (end_eff_parameters.duration = hideduration.val()), hideease.val() !== "null" && (end_eff_parameters.ease = hideease.val()), hidetime.val() !== "" && (end_eff_parameters.time = hidetime.val()), output.html(n)}function setSceneSize(){var n = sh.val(), t = sw.val(); scene.width(t), scene.height(n), scene.css("top", (scene.parent().height() - n) / 2), box.css("top", (n - box.height()) / 2), box.css("left", (t - box.width()) / 2)}var transitions, selected_hide, selected_show, eff_parameters, end_eff_parameters, layer; window.averta = {}, function(){function f(){var t, n, i; if ("result"in arguments.callee)return arguments.callee.result; t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, n = document.getElementsByTagName("script")[0]; for (i in n.style)if (t.test(i))return arguments.callee.result = i.match(t)[0]; return arguments.callee.result = "WebkitOpacity"in n.style?"Webkit":"KhtmlOpacity"in n.style?"Khtml":""}function n(n){var u = document.body || document.documentElement, r = u.style, t = n, i; if (typeof r[t] == "string")return!0; for (v = ["Moz", "Webkit", "Khtml", "O", "ms"], t = t.charAt(0).toUpperCase() + t.substr(1), i = 0; i < v.length; i++)if (typeof r[v[i] + t] == "string")return!0; return!1}function e(){return n("transition")}function t(){return n("transform")}function o(){var n, i, u, r; if (!t())return!1; n = document.createElement("p"), u = {WebkitTransform:"-webkit-transform", OTransform:"-o-transform", MSTransform:"-ms-transform", MozTransform:"-moz-transform", Transform:"transform"}, document.body.insertBefore(n, null); for (r in u)n.style[r] !== undefined && (n.style[r] = "translate3d(1px,1px,1px)", i = window.getComputedStyle(n).getPropertyValue(u[r])); return document.body.removeChild(n), i != null && i.length > 0 && i !== "none"}var i, r, u; window.package = function(n){window[n] || (window[n] = {})}, i = function(n, t){for (var i in t)n[i] = t[i]}, Function.prototype.extend = function(n){typeof n.prototype.constructor == "function"?(i(this.prototype, n.prototype), this.prototype.constructor = this):(this.prototype.extend(n), this.prototype.constructor = this)}, r = {Moz:"-moz-", Webkit:"-webkit-", Khtml:"-khtml-", O:"-o-", ms:"-ms-", Icab:"-icab-"}, $(document).ready(function(){window._jcsspfx = f(), window._csspfx = r[window._jcsspfx], window._cssanim = e(), window._css3d = o(), window._css2d = t(), window._touch = "ontouchstart"in document}), window.parseQueryString = function(n){var t = {}; return n.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(n, i, r, u){t[i] = u}), t}, u = 50 / 3, window.requestAnimationFrame || (window.requestAnimationFrame = function(){return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n){window.setTimeout(n, u)}}()), window.getComputedStyle || (window.getComputedStyle = function(n){return this.el = n, this.getPropertyValue = function(t){var i = /(\-([a-z]){1})/g; return t == "float" && (t = "styleFloat"), i.test(t) && (t = t.replace(i, function(){return arguments[2].toUpperCase()})), n.currentStyle[t]?n.currentStyle[t]:null}, n.currentStyle}), $.jqLoadFix = function(){if (this.complete){var n = this; setTimeout(function(){$(n).load()}, 1)}}}(), function(){"use strict"; var t = null, n; window.CSSTween = function(n, i, r, u){this.$element = n, this.duration = i || 1e3, this.delay = r || 0, this.ease = u || "linear", t || (t = window._jcsspfx === "O"?"otransitionend":window._jcsspfx == "Webkit"?"webkitTransitionEnd":"transitionend")}, n = CSSTween.prototype, n.to = function(n, t){return this.to_cb = n, this.to_cb_target = t, this}, n.from = function(n, t){return this.fr_cb = n, this.fr_cb_target = t, this}, n.onComplete = function(n, t){return this.oc_fb = n, this.oc_fb_target = t, this}, n.chain = function(n){return this.chained_tween = n, this}, n.reset = function(){clearTimeout(this.start_to), clearTimeout(this.end_to), this.$element.css(window._jcsspfx + "TransitionDuration", "").css(window._jcsspfx + "TransitionProperty", "").css(window._jcsspfx + "TransitionTimingFunction", "").css(window._jcsspfx + "TransitionDelay", "")}, n.start = function(){this.fresh = !0, clearTimeout(this.start_to), clearTimeout(this.end_to), this.fr_cb && (this.$element.css(window._jcsspfx + "TransitionDuration", "0ms"), this.fr_cb.call(this.fr_cb_target)); var n = this; return this.onTransComplete = function(){n.fresh && (n.reset(), n.fresh = !1, n.chained_tween && n.chained_tween.start(), n.oc_fb && n.oc_fb.call(n.oc_fb_target))}, this.start_to = setTimeout(function(){n.$element.css(window._jcsspfx + "TransitionDuration", n.duration + "ms").css(window._jcsspfx + "TransitionProperty", "all"), n.delay > 0?n.$element.css(window._jcsspfx + "TransitionDelay", n.delay + "ms"):n.$element.css(window._jcsspfx + "TransitionDelay", ""), n.ease != "linear" && n.$element.css(window._jcsspfx + "TransitionTimingFunction", n.ease), n.to_cb && n.to_cb.call(n.to_cb_target)}, 100), this.end_to = setTimeout(function(){n.onTransComplete()}, 100 + this.duration), this}}(), function(){"use strict"; function t(t, i){var r, u, f; return(i.x !== undefined || i.y !== undefined) && (n?(r = window._jcsspfx + "Transform", i.x !== undefined && (i[r] = (i[r] || "") + " translateX(" + i.x + "px)", delete i.x), i.y !== undefined && (i[r] = (i[r] || "") + " translateY(" + i.y + "px)", delete i.y)):(i.x !== undefined && (u = t.css("right") !== "auto"?"right":"left", i[u] = i.x + "px", delete i.x), i.y !== undefined && (f = t.css("right") !== "auto"?"right":"left", i[f] = i.y + "px", delete i.y))), i}var n = null; window.CTween = {}, CTween.setPos = function(n, i){n.css(t(n, i))}, CTween.animate = function(i, r, u, f){var e, o; if (n == null && (n = window._cssanim), f = f || {}, t(i, u), n){if (e = new CSSTween(i, r, f.delay, EaseDic[f.ease]), e.to(function(){i.css(u)}), f.complete)e.onComplete(f.complete, f.target); return e.start(), e.stop = e.reset, e}return f.delay && i.delay(f.delay), f.complete && (o = function(){f.complete.call(f.target)}), i.stop(!0).animate(u, r, f.ease || "linear", o), i}, CTween.fadeOut = function(n, t, i){var r = {}; i && (r.complete = function(){n.remove()}), CTween.animate(n, t || 1e3, {opacity:0}, r)}, CTween.fadeIn = function(n, t){n.css("opacity", 0), CTween.animate(n, t || 1e3, {opacity:1})}}(), function(){window.EaseDic = {linear:"linear", ease:"ease", easeIn:"ease-in", easeOut:"ease-out", easeInOut:"ease-in-out", easeInCubic:"cubic-bezier(.55,.055,.675,.19)", easeOutCubic:"cubic-bezier(.215,.61,.355,1)", easeInOutCubic:"cubic-bezier(.645,.045,.355,1)", easeInCirc:"cubic-bezier(.6,.04,.98,.335)", easeOutCirc:"cubic-bezier(.075,.82,.165,1)", easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)", easeInExpo:"cubic-bezier(.95,.05,.795,.035)", easeOutExpo:"cubic-bezier(.19,1,.22,1)", easeInOutExpo:"cubic-bezier(1,0,0,1)", easeInQuad:"cubic-bezier(.55,.085,.68,.53)", easeOutQuad:"cubic-bezier(.25,.46,.45,.94)", easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)", easeInQuart:"cubic-bezier(.895,.03,.685,.22)", easeOutQuart:"cubic-bezier(.165,.84,.44,1)", easeInOutQuart:"cubic-bezier(.77,0,.175,1)", easeInQuint:"cubic-bezier(.755,.05,.855,.06)", easeOutQuint:"cubic-bezier(.23,1,.32,1)", easeInOutQuint:"cubic-bezier(.86,0,.07,1)", easeInSine:"cubic-bezier(.47,0,.745,.715)", easeOutSine:"cubic-bezier(.39,.575,.565,1)", easeInOutSine:"cubic-bezier(.445,.05,.55,.95)", easeInBack:"cubic-bezier(.6,-.28,.735,.045)", easeOutBack:"cubic-bezier(.175, .885,.32,1.275)", easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"}}(), function(){window.MSLayerEffects = {}; var t, n = {opacity:0}; MSLayerEffects.setup = function(){if (!t){t = !0; var i = MSLayerEffects, r = window._jcsspfx + "Transform", u = window._jcsspfx + "TransformOrigin", f = $.browser.opera; _2d = window._css2d && window._cssanim && !f, i.defaultValues = {left:0, top:0, opacity:1, right:0, bottom:0}, i.defaultValues[r] = "perspective(2000px)", i.defaultValues[u] = "", i.presetEffParams = {random:"30|300", long:300, short:30, "false":!1, "true":!0, tl:"top left", bl:"bottom left", tr:"top right", br:"bottom right", rt:"top right", lb:"bottom left", lt:"top left", rb:"bottom right", t:"top", b:"bottom", r:"right", l:"left", c:"center"}, i.fade = function(){return n}, i.left = _2d?function(n, t){var i = t === !1?{}:{opacity:0}; return i[r] = "translateX(" + - n + "px)", i}:function(n, t){var i = t === !1?{}:{opacity:0}; return i.left = - n + "px", i}, i.right = _2d?function(n, t){var i = t === !1?{}:{opacity:0}; return i[r] = "translateX(" + n + "px)", i}:function(n, t){var i = t === !1?{}:{opacity:0}; return i.left = n + "px", i}, i.top = _2d?function(n, t){var i = t === !1?{}:{opacity:0}; return i[r] = "translateY(" + - n + "px)", i}:function(n, t){var i = t === !1?{}:{opacity:0}; return i.top = - n + "px", i}, i.bottom = _2d?function(n, t){var i = t === !1?{}:{opacity:0}; return i[r] = "translateY(" + n + "px)", i}:function(n, t){var i = t === !1?{}:{opacity:0}; return i.top = n + "px", i}, i.rotate = _2d?function(n, t){var i = {opacity:0}; return i[r] = " rotate(" + n + "deg)", t && (i[u] = t), i}:function(){return n}, i.rotateleft = _2d?function(n, t, f, e){var o = i.left(t, e); return o[r] += " rotate(" + n + "deg)", f && (o[u] = f), o}:function(n, t, r, u){return i.left(t, u)}, i.rotateright = _2d?function(n, t, f, e){var o = i.right(t, e); return o[r] += " rotate(" + n + "deg)", f && (o[u] = f), o}:function(n, t, r, u){return i.right(t, u)}, i.rotatetop = _2d?function(n, t, f, e){var o = i.top(t, e); return o[r] += " rotate(" + n + "deg)", f && (o[u] = f), o}:function(n, t, r, u){return i.top(t, u)}, i.rotatebottom = _2d?function(n, t, f, e){var o = i.bottom(t, e); return o[r] += " rotate(" + n + "deg)", f && (o[u] = f), o}:function(n, t, r, u){return i.bottom(t, u)}, i.skewleft = _2d?function(n, t, u){var f = i.left(t, u); return f[r] += " skewX(" + n + "deg)", f}:function(n, t, r){return i.left(t, r)}, i.skewright = _2d?function(n, t, u){var f = i.right(t, u); return f[r] += " skewX(" + - n + "deg)", f}:function(n, t, r){return i.right(t, r)}, i.skewtop = _2d?function(n, t, u){var f = i.top(t, u); return f[r] += " skewY(" + n + "deg)", f}:function(n, t, r){return i.top(t, r)}, i.skewbottom = _2d?function(n, t, u){var f = i.bottom(t, u); return f[r] += " skewY(" + - n + "deg)", f}:function(n, t, r){return i.bottom(t, r)}, i.front = window._css3d?function(n, t){var i = t === !1?{}:{opacity:0}; return i[r] = "perspective(2000px) translate3d(0 , 0 ," + n + "px ) rotate(0.001deg)", i}:function(){return n}, i.back = window._css3d?function(n, t){var i = t === !1?{}:{opacity:0}; return i[r] = "perspective(2000px) translate3d(0 , 0 ," + - n + "px ) rotate(0.001deg)", i}:function(){return n}, i.rotatefront = window._css3d?function(n, t, i, f){var e = f === !1?{}:{opacity:0}; return e[r] = "perspective(2000px) translate3d(0 , 0 ," + t + "px ) rotate(" + (n || .001) + "deg)", i && (e[u] = i), e}:function(n, t, i, r){return r}, i.rotateback = window._css3d?function(n, t, i, f){var e = f === !1?{}:{opacity:0}; return e[r] = "perspective(2000px) translate3d(0 , 0 ," + - t + "px ) rotate(" + (n || .001) + "deg)", i && (e[u] = i), e}:function(n, t, i, r){return r}, i.rotate3dleft = window._css3d?function(n, t, f, e, o, s){var h = i.left(e, s); return h[r] += (n?" rotateX(" + n + "deg)":" ") + (t?" rotateY(" + t + "deg)":"") + (f?" rotateZ(" + f + "deg)":""), o && (h[u] = o), h}:function(n, t, r, u, f, e){return i.left(u, e)}, i.rotate3dright = window._css3d?function(n, t, f, e, o, s){var h = i.right(e, s); return h[r] += (n?" rotateX(" + n + "deg)":" ") + (t?" rotateY(" + t + "deg)":"") + (f?" rotateZ(" + f + "deg)":""), o && (h[u] = o), h}:function(n, t, r, u, f, e){return i.right(u, e)}, i.rotate3dtop = window._css3d?function(n, t, f, e, o, s){var h = i.top(e, s); return h[r] += (n?" rotateX(" + n + "deg)":" ") + (t?" rotateY(" + t + "deg)":"") + (f?" rotateZ(" + f + "deg)":""), o && (h[u] = o), h}:function(n, t, r, u, f, e){return i.top(u, e)}, i.rotate3dbottom = window._css3d?function(n, t, f, e, o, s){var h = i.bottom(e, s); return h[r] += (n?" rotateX(" + n + "deg)":" ") + (t?" rotateY(" + t + "deg)":"") + (f?" rotateZ(" + f + "deg)":""), o && (h[u] = o), h}:function(n, t, r, u, f, e){return i.bottom(u, e)}}}}(), function(){window.MSLayerElement = function(){this.$cont = $("<div><\/div>").addClass("layer-cont"), this.start_anim = {name:"fade", duration:1e3, ease:"linear", delay:0}, this.end_anim = {duration:1e3, ease:"linear"}, this.type = "text", this.swipe = !0, this.resizable = !0, this.minWidth = - 1, this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom", "font-size", "line-height"]}; var n = MSLayerElement.prototype; n.__playAnimation = function(n, t){var i = {}; n.ease && (i.ease = n.ease), this.show_tween && this.show_tween.reset(), this.show_tween = CTween.animate(this.$element, n.duration, t, i)}, n._randomParam = function(n){var t = Number(n.slice(0, n.indexOf("|"))), i = Number(n.slice(n.indexOf("|") + 1)); return t + Math.random() * (i - t)}, n._parseEff = function(n){var t = [], u, i, r, f; if (n.indexOf("(") !== - 1)for (u = n.slice(0, n.indexOf("(")).toLowerCase(), t = n.slice(n.indexOf("(") + 1, - 1).replace(/\"|\'|\s/g, "").split(","), n = u, r = 0, f = t.length; r < f; ++r)i = t[r], i in MSLayerEffects.presetEffParams && (i = MSLayerEffects.presetEffParams[i]), t[r] = i; return{eff_name:n, eff_params:t}}, n._parseEffParams = function(n){for (var r = [], t, i = 0, u = n.length; i < u; ++i)t = n[i], typeof t == "string" && t.indexOf("|") !== - 1 && (t = this._randomParam(t)), r[i] = t; return r}, n._checkPosKey = function(n, t){return n === "left" && !(n in this.baseStyle) && "right"in this.baseStyle?(t.right = - parseInt(t.left) + "px", delete t.left, !0):n === "top" && !(n in this.baseStyle) && "bottom"in this.baseStyle?(t.bottom = - parseInt(t.top) + "px", delete t.top, !0):!1}, n.setStartAnim = function(n){$.extend(this.start_anim, n), $.extend(this.start_anim, this._parseEff(this.start_anim.name))}, n.setEndAnim = function(n){$.extend(this.end_anim, n)}, n.create = function(){this.$element.css("display", "none"), this.$element.removeAttr("data-delay").removeAttr("data-effect").removeAttr("data-duration").removeAttr("data-type"), this.end_anim.name || (this.end_anim.name = this.start_anim.name), this.end_anim.time && (this.autoHide = !0), $.extend(this.end_anim, this._parseEff(this.end_anim.name))}, n.init = function(){var n, t, i; for (this.initialized = !0, this.baseStyle = {}, t = 0, i = this.__cssConfig.length; t < i; t++)n = this.$element.css(this.__cssConfig[t]), n != "auto" && n != "" && n != "normal" && (this.baseStyle[this.__cssConfig[t]] = parseInt(n))}, n.locate = function(){var r = this.slide.$layers, t = parseFloat(r.css("width")), i, n; if (this.visible(this.minWidth < t), this.resizable){i = t / this.slide.slider.options.width; for (n in this.baseStyle)this.$element.css(n, this.baseStyle[n] * i + "px")}}, n.start = function(){var n, u, i, r, t; if (!this.isShowing){this.isShowing = !0, i = MSLayerEffects[this.start_anim.eff_name].apply(null, this._parseEffParams(this.start_anim.eff_params)), r = {}; for (n in i)this._checkPosKey(n, i) || (r[n] = MSLayerEffects.defaultValues[n], n in this.baseStyle && (u = this.baseStyle[n], i[n] = u + parseFloat(i[n]) + "px", r[n] = u + "px"), this.$element.css(n, i[n])); t = this, clearTimeout(this.to), this.to = setTimeout(function(){t.$element.css("display", ""), t.__playAnimation(t.start_anim, r)}, t.start_anim.delay || .01), this.autoHide && (clearTimeout(this.hto), this.hto = setTimeout(function(){t.hide()}, t.end_anim.time))}}, n.hide = function(){this.isShowing = !1; var n = MSLayerEffects[this.end_anim.eff_name].apply(null, this._parseEffParams(this.end_anim.eff_params)); for (key in n)this._checkPosKey(key, n) || key in this.baseStyle && (n[key] = this.baseStyle[key] + parseFloat(n[key]) + "px"); this.__playAnimation(this.end_anim, n), clearTimeout(this.to), clearTimeout(this.hto)}, n.reset = function(){this.isShowing = !1, this.$element[0].style.display = "none", this.$element[0].style[window._jcsspfx + "TransitionDuration"] = "0ms", clearTimeout(this.to), clearTimeout(this.hto)}, n.destroy = function(){this.$element.remove(), this.$cont.remove()}, n.visible = function(n){this.isVisible != n && (this.isVisible = n, this.$element.css("display", n?"":"none"))}}(), transitions = [{name:"Basic", trans:["fade", "left(short)", "left(long)", "left(short,false)", "left(long,false)", "left(800)", "left(200|800)", "right(short)", "right(long)", "right(short,false)", "right(long,false)", "right(800)", "right(200|800)", "top(short)", "top(long)", "top(short,false)", "top(long,false)", "top(800)", "top(200|800)", "bottom(short)", "bottom(long)", "bottom(short,false)", "bottom(long,false)", "bottom(800)", "bottom(200|800)"]}, {name:"Rotate", trans:["rotate(50,c)", "rotate(150,tl)", "rotate(-150,b)", "rotate(90,tr)", "rotate(-180,br)", "rotate(20,br)", "rotate(20|180,l)", "rotate(180|300)", "rotate(-180|180,bl)", "rotate(-360|360,tr)", "rotateleft(40,50,c)", "rotateleft(150,short,tl)", "rotateleft(-150,long,b)", "rotateleft(90,400,tr)", "rotateleft(-180,800,br)", "rotateleft(20,120,br)", "rotateleft(20|180,100|300,l)", "rotateleft(180|300,long)", "rotateleft(-180|180,30,bl)", "rotateleft(-360|360,10|120,tr)", "rotateright(40,50,c)", "rotateright(150,short,tl)", "rotateright(-150,long,b)", "rotateright(90,400,tr)", "rotateright(-180,800,br)", "rotateright(20,120,br)", "rotateright(20|180,100|300,l)", "rotateright(180|300,long)", "rotateright(-180|180,30,bl)", "rotateright(-360|360,10|120,tr)", "rotatetop(40,50,c)", "rotatetop(150,short,tl)", "rotatetop(-150,long,b)", "rotatetop(90,400,tr)", "rotatetop(-180,800,br)", "rotatetop(20,120,br)", "rotatetop(20|180,100|300,l)", "rotatetop(180|300,long)", "rotatetop(-180|180,30,bl)", "rotatetop(-360|360,10|120,tr)", "rotatebottom(40,50,c)", "rotatebottom(150,short,tl)", "rotatebottom(-150,long,b)", "rotatebottom(90,400,tr)", "rotatebottom(-180,800,br)", "rotatebottom(20,120,br)", "rotatebottom(20|180,100|300,l)", "rotatebottom(180|300,long)", "rotatebottom(-180|180,30,bl)", "rotatebottom(-360|360,10|120,tr)"]}, {name:"Skew", trans:["skewleft(15,long)", "skewleft(-15,long)", "skewleft(10,150)", "skewleft(-10,150)", "skewleft(23,500)", "skewleft(20|30,200|400)", "skewright(15,long)", "skewright(-15,long)", "skewright(10,150)", "skewright(-10,150)", "skewright(23,500)", "skewright(20|30,200|400)", "skewtop(15,long)", "skewtop(-15,long)", "skewtop(10,150)", "skewtop(-10,150)", "skewtop(23,500)", "skewtop(20|30,200|400)", "skewbottom(15,long)", "skewbottom(-15,long)", "skewbottom(10,150)", "skewbottom(-10,150)", "skewbottom(23,500)", "skewbottom(20|30,200|400)"]}, {name:"3D Basic", trans:["front(long)", "front(800)", "front(1300)", "front(200|800)", "back(long)", "back(1300)", "back(800)", "back(200|800)", "rotatefront(40,400,c)", "rotatefront(150,600,tl)", "rotatefront(-150,600,b)", "rotatefront(90,600,tr)", "rotatefront(-180,1300,br)", "rotatefront(20,620,br)", "rotatefront(20|180,500|1000,l)", "rotatefront(180|300,500)", "rotatefront(-180|180,700,bl)", "rotatefront(-360|360,400|900,tr)", "rotateback(40,400,c)", "rotateback(150,600,tl)", "rotateback(-150,600,b)", "rotateback(90,600,tr)", "rotateback(-180,1300,br)", "rotateback(20,620,br)", "rotateback(20|180,500|1000,l)", "rotateback(180|300,500)", "rotateback(-180|180,700,bl)", "rotateback(-360|360,400|900,tr)"]}, {name:"3D Rotation", trans:["rotate3dleft(90,0,0,0)", "rotate3dleft(0,90,0,0)", "rotate3dleft(45,0,0,0)", "rotate3dleft(0,45,0,0)", "rotate3dleft(180,0,0,0)", "rotate3dleft(0,180,0,0)", "rotate3dleft(0,180,0,0,r)", "rotate3dleft(0,180,0,0,l)", "rotate3dleft(180,0,0,0,t)", "rotate3dleft(180,0,0,0,b)", "rotate3dleft(80,0,0,short)", "rotate3dleft(80,0,0,long)", "rotate3dleft(30,0,0,10)", "rotate3dleft(30,50,0,50)", "rotate3dleft(180,50,0,200)", "rotate3dleft(-30,50,0,50)", "rotate3dleft(180,-50,0,100)", "rotate3dleft(180|360,-50|50,0,100|400,br)", "rotate3dright(80,0,0,short)", "rotate3dright(80,0,0,long)", "rotate3dright(30,0,0,10)", "rotate3dright(30,50,0,50)", "rotate3dright(180,50,0,200)", "rotate3dright(-30,50,0,50)", "rotate3dright(180,-50,0,100)", "rotate3dright(180|360,-50|50,0,100|400,br)", "rotate3dtop(80,0,0,short)", "rotate3dtop(80,0,0,long)", "rotate3dtop(30,0,0,10)", "rotate3dtop(30,50,0,50)", "rotate3dtop(180,50,0,200)", "rotate3dtop(-30,50,0,50)", "rotate3dtop(180,-50,0,100)", "rotate3dtop(180|360,-50|50,0,100|400,br)", "rotate3dbottom(80,0,0,short)", "rotate3dbottom(80,0,0,long)", "rotate3dbottom(30,0,0,10)", "rotate3dbottom(30,50,0,50)", "rotate3dbottom(180,50,0,200)", "rotate3dbottom(-30,50,0,50)", "rotate3dbottom(180,-50,0,100)", "rotate3dbottom(180|360,-50|50,0,50|100,br)", ]}], window.TransitionObject = function(n){this.element = document.createElement("li"), this._id = n, this.show = !1, this.hide = !1; var t = this; this.text = document.createElement("p"), this.show_btn = $('<div class="showbtn" title="Set as show transition">SHOW<\/div>').appendTo(this.element).click(function(){t.setAsShow()}), this.hide_btn = $('<div class="hidebtn" title="Set as hide transition">HIDE<\/div>').appendTo(this.element).click(function(){t.setAsHide()}), this.element.appendChild(this.text)}, TransitionObject.prototype = {constructor:TransitionObject, name:function(n){if (!n)return this._name; this.text.innerHTML = n, this._tr = n.slice(12), this._name = n}, code:function(n){if (!n)return this._code; this._code = n}, setAsShow:function(n){if (this.show){n !== !1 && this.playShow(); return}this.show_btn.addClass("selected"), this.show = !0, selected_show && selected_show.unsetShow(), selected_show = this, generateOutput(), n !== !1 && this.playShow()}, unsetShow:function(){this.show = !1, this.show_btn.removeClass("selected")}, setAsHide:function(n){if (this.hide){n !== !1 && this.playHide(); return}this.hide_btn.addClass("selected"), this.hide = !0, selected_hide && selected_hide.unsetHide(), selected_hide = this, generateOutput(), n !== !1 && this.playHide()}, unsetHide:function(){this.hide = !1, this.hide_btn.removeClass("selected")}, playHide:function(){layer.reset(), layer.setEndAnim(end_eff_parameters), $.extend(layer.end_anim, layer._parseEff(layer.end_anim.name)), layer.$element.css("display", ""), layer.$element.css("opacity", ""), layer.$element.css(window._jcsspfx + "Transform", "perspective(2000px)"), layer.hide()}, playShow:function(){layer.reset(), layer.setStartAnim(eff_parameters), layer.$element.css("opacity", ""), layer.$element.css(window._jcsspfx + "Transform", "perspective(2000px)"), layer.start()}}, window.TransitionGroup = function(){this.element = document.createElement("div"), this.element.className = "transition-group", this.title = document.createElement("div"), this.title.className = "title", this.element.appendChild(this.title), this.ul = document.createElement("ul"), this.element.appendChild(this.ul), this.element.tg = this, this.text = document.createElement("p"), this.title.appendChild(this.text), this.trans_list = [], this.i = 0}, TransitionGroup.id = 1, TransitionGroup.prototype = {constructor:TransitionGroup, addTitle:function(n){this.text.innerHTML = n}, addTransition:function(n){this.ul.appendChild(n.element), this.trans_list.push(n), n.group = this}}, window.TransitionGallery = function(n, t){this.transitions = t, this.element = n, this.id = TransitionGroup.id, TransitionGroup.id += 100, this.trans_list = []}, TransitionGallery.prototype = {constructor:TransitionGallery, create:function(){for (var t, r, e = 0, i, f, n = 0, u = this.transitions.length; n < u; ++n){for (r = new TransitionGroup, r.addTitle(this.transitions[n].name), i = 0, f = this.transitions[n].trans.length; i < f; ++i)t = new TransitionObject(this.id * e++), t.name(this.transitions[n].trans[i]), t.code(this.transitions[n].trans[i]), this.transitions[n].trans[i] === "fade" && (t.setAsShow(!1), t.setAsHide(!1), generateOutput()), r.addTransition(t), this.trans_list.push(t); this.element.appendChild(r.element)}return this}}; var scene = $("#scene"), sw = $("#sw"), sh = $("#sh"), box = $("#box"), showdelay = $("#showdelay"), showduration = $("#showduration"), showease = $("#showease"), hidetime = $("#hidetime"), hideduration = $("#hideduration"), hideease = $("#hideease"), output = $("#output"); sw.on("change", function(){setSceneSize()}); sh.on("change", function(){setSceneSize()}); eff_parameters = {}, end_eff_parameters = {}; $(".options input, .options select").on("change", generateOutput); setSceneSize(), $(window).resize(function(){setSceneSize()}), $(document).ready(function(){MSLayerEffects.setup(), layer = new MSLayerElement, layer.$element = box, layer.init()})