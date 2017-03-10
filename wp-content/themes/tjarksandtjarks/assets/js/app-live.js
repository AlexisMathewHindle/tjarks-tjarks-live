if (! function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) { var e = !!t && "length" in t && t.length,
                i = pt.type(t); return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t) }

        function n(t, e, i) { if (pt.isFunction(e)) return pt.grep(t, function(t, n) { return !!e.call(t, n, t) !== i }); if (e.nodeType) return pt.grep(t, function(t) { return t === e !== i }); if ("string" == typeof e) { if (Ct.test(e)) return pt.filter(e, t, i);
                e = pt.filter(e, t) } return pt.grep(t, function(t) { return pt.inArray(t, e) > -1 !== i }) }

        function s(t, e) { do t = t[e]; while (t && 1 !== t.nodeType); return t }

        function o(t) { var e = {}; return pt.each(t.match(Et) || [], function(t, i) { e[i] = !0 }), e }

        function r() { nt.addEventListener ? (nt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (nt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a)) }

        function a() {
            (nt.addEventListener || "load" === t.event.type || "complete" === nt.readyState) && (r(), pt.ready()) }

        function l(t, e, i) { if (void 0 === i && 1 === t.nodeType) { var n = "data-" + e.replace(Mt, "-$1").toLowerCase(); if (i = t.getAttribute(n), "string" == typeof i) { try { i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : At.test(i) ? pt.parseJSON(i) : i) } catch (t) {}
                    pt.data(t, e, i) } else i = void 0 } return i }

        function c(t) { var e; for (e in t)
                if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0 }

        function h(t, e, i, n) { if (Ot(t)) { var s, o, r = pt.expando,
                    a = t.nodeType,
                    l = a ? pt.cache : t,
                    c = a ? t[r] : t[r] && r; if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e) return c || (c = a ? t[r] = it.pop() || pt.guid++ : r), l[c] || (l[c] = a ? {} : { toJSON: pt.noop }), "object" != typeof e && "function" != typeof e || (n ? l[c] = pt.extend(l[c], e) : l[c].data = pt.extend(l[c].data, e)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[pt.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[pt.camelCase(e)])) : s = o, s } }

        function u(t, e, i) { if (Ot(t)) { var n, s, o = t.nodeType,
                    r = o ? pt.cache : t,
                    a = o ? t[pt.expando] : pt.expando; if (r[a]) { if (e && (n = i ? r[a] : r[a].data)) { pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in n ? e = [e] : (e = pt.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length; for (; s--;) delete n[e[s]]; if (i ? !c(n) : !pt.isEmptyObject(n)) return }(i || (delete r[a].data, c(r[a]))) && (o ? pt.cleanData([t], !0) : ut.deleteExpando || r != r.window ? delete r[a] : r[a] = void 0) } } }

        function d(t, e, i, n) { var s, o = 1,
                r = 20,
                a = n ? function() { return n.cur() } : function() { return pt.css(t, e, "") },
                l = a(),
                c = i && i[3] || (pt.cssNumber[e] ? "" : "px"),
                h = (pt.cssNumber[e] || "px" !== c && +l) && Ht.exec(pt.css(t, e)); if (h && h[3] !== c) { c = c || h[3], i = i || [], h = +l || 1;
                do o = o || ".5", h /= o, pt.style(t, e, h + c); while (o !== (o = a() / l) && 1 !== o && --r) } return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s }

        function p(t) { var e = Bt.split("|"),
                i = t.createDocumentFragment(); if (i.createElement)
                for (; e.length;) i.createElement(e.pop()); return i }

        function f(t, e) { var i, n, s = 0,
                o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0; if (!o)
                for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || pt.nodeName(n, e) ? o.push(n) : pt.merge(o, f(n, e)); return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], o) : o }

        function g(t, e) { for (var i, n = 0; null != (i = t[n]); n++) pt._data(i, "globalEval", !e || pt._data(e[n], "globalEval")) }

        function m(t) { Ft.test(t.type) && (t.defaultChecked = t.checked) }

        function v(t, e, i, n, s) { for (var o, r, a, l, c, h, u, d = t.length, v = p(e), y = [], b = 0; d > b; b++)
                if (r = t[b], r || 0 === r)
                    if ("object" === pt.type(r)) pt.merge(y, r.nodeType ? [r] : r);
                    else if (Vt.test(r)) { for (l = l || v.appendChild(e.createElement("div")), c = (Wt.exec(r) || ["", ""])[1].toLowerCase(), u = Yt[c] || Yt._default, l.innerHTML = u[1] + pt.htmlPrefilter(r) + u[2], o = u[0]; o--;) l = l.lastChild; if (!ut.leadingWhitespace && qt.test(r) && y.push(e.createTextNode(qt.exec(r)[0])), !ut.tbody)
                    for (r = "table" !== c || Xt.test(r) ? "<table>" !== u[1] || Xt.test(r) ? 0 : l : l.firstChild, o = r && r.childNodes.length; o--;) pt.nodeName(h = r.childNodes[o], "tbody") && !h.childNodes.length && r.removeChild(h); for (pt.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = v.lastChild } else y.push(e.createTextNode(r)); for (l && v.removeChild(l), ut.appendChecked || pt.grep(f(y, "input"), m), b = 0; r = y[b++];)
                if (n && pt.inArray(r, n) > -1) s && s.push(r);
                else if (a = pt.contains(r.ownerDocument, r), l = f(v.appendChild(r), "script"), a && g(l), i)
                for (o = 0; r = l[o++];) jt.test(r.type || "") && i.push(r); return l = null, v }

        function y() { return !0 }

        function b() { return !1 }

        function _() { try { return nt.activeElement } catch (t) {} }

        function w(t, e, i, n, s, o) { var r, a; if ("object" == typeof e) { "string" != typeof i && (n = n || i, i = void 0); for (a in e) w(t, a, i, n, e[a], o); return t } if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), s === !1) s = b;
            else if (!s) return t; return 1 === o && (r = s, s = function(t) { return pt().off(t), r.apply(this, arguments) }, s.guid = r.guid || (r.guid = pt.guid++)), t.each(function() { pt.event.add(this, e, s, n, i) }) }

        function x(t, e) { return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

        function C(t) { return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t }

        function k(t) { var e = se.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }

        function T(t, e) { if (1 === e.nodeType && pt.hasData(t)) { var i, n, s, o = pt._data(t),
                    r = pt._data(e, o),
                    a = o.events; if (a) { delete r.handle, r.events = {}; for (i in a)
                        for (n = 0, s = a[i].length; s > n; n++) pt.event.add(e, i, a[i][n]) }
                r.data && (r.data = pt.extend({}, r.data)) } }

        function S(t, e) { var i, n, s; if (1 === e.nodeType) { if (i = e.nodeName.toLowerCase(), !ut.noCloneEvent && e[pt.expando]) { s = pt._data(e); for (n in s.events) pt.removeEvent(e, n, s.handle);
                    e.removeAttribute(pt.expando) } "script" === i && e.text !== t.text ? (C(e).text = t.text, k(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ut.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ft.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue) } }

        function D(t, e, i, n) { e = ot.apply([], e); var s, o, r, a, l, c, h = 0,
                u = t.length,
                d = u - 1,
                p = e[0],
                g = pt.isFunction(p); if (g || u > 1 && "string" == typeof p && !ut.checkClone && ne.test(p)) return t.each(function(s) { var o = t.eq(s);
                g && (e[0] = p.call(this, s, o.html())), D(o, e, i, n) }); if (u && (c = v(e, t[0].ownerDocument, !1, t, n), s = c.firstChild, 1 === c.childNodes.length && (c = s), s || n)) { for (a = pt.map(f(c, "script"), C), r = a.length; u > h; h++) o = c, h !== d && (o = pt.clone(o, !0, !0), r && pt.merge(a, f(o, "script"))), i.call(t[h], o, h); if (r)
                    for (l = a[a.length - 1].ownerDocument, pt.map(a, k), h = 0; r > h; h++) o = a[h], jt.test(o.type || "") && !pt._data(o, "globalEval") && pt.contains(l, o) && (o.src ? pt._evalUrl && pt._evalUrl(o.src) : pt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
                c = s = null } return t }

        function I(t, e, i) { for (var n, s = e ? pt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || pt.cleanData(f(n)), n.parentNode && (i && pt.contains(n.ownerDocument, n) && g(f(n, "script")), n.parentNode.removeChild(n)); return t }

        function E(t, e) { var i = pt(e.createElement(t)).appendTo(e.body),
                n = pt.css(i[0], "display"); return i.detach(), n }

        function P(t) { var e = nt,
                i = ce[t]; return i || (i = E(t, e), "none" !== i && i || (le = (le || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), i = E(t, e), le.detach()), ce[t] = i), i }

        function $(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

        function O(t) { if (t in ke) return t; for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = Ce.length; i--;)
                if (t = Ce[i] + e, t in ke) return t }

        function A(t, e) { for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = pt._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Lt(n) && (o[r] = pt._data(n, "olddisplay", P(n.nodeName)))) : (s = Lt(n), (i && "none" !== i || !s) && pt._data(n, "olddisplay", s ? i : pt.css(n, "display")))); for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none")); return t }

        function M(t, e, i) { var n = _e.exec(e); return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e }

        function N(t, e, i, n, s) { for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += pt.css(t, i + zt[o], !0, s)), n ? ("content" === i && (r -= pt.css(t, "padding" + zt[o], !0, s)), "margin" !== i && (r -= pt.css(t, "border" + zt[o] + "Width", !0, s))) : (r += pt.css(t, "padding" + zt[o], !0, s), "padding" !== i && (r += pt.css(t, "border" + zt[o] + "Width", !0, s))); return r }

        function H(t, e, i) { var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = fe(t),
                r = ut.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o); if (0 >= s || null == s) { if (s = ge(t, e, o), (0 > s || null == s) && (s = t.style[e]), ue.test(s)) return s;
                n = r && (ut.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0 } return s + N(t, e, i || (r ? "border" : "content"), n, o) + "px" }

        function z(t, e, i, n, s) { return new z.prototype.init(t, e, i, n, s) }

        function L() { return t.setTimeout(function() { Te = void 0 }), Te = pt.now() }

        function R(t, e) { var i, n = { height: t },
                s = 0; for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = zt[s], n["margin" + i] = n["padding" + i] = t; return e && (n.opacity = n.width = t), n }

        function F(t, e, i) { for (var n, s = (q.tweeners[e] || []).concat(q.tweeners["*"]), o = 0, r = s.length; r > o; o++)
                if (n = s[o].call(i, e, t)) return n }

        function W(t, e, i) { var n, s, o, r, a, l, c, h, u = this,
                d = {},
                p = t.style,
                f = t.nodeType && Lt(t),
                g = pt._data(t, "fxshow");
            i.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, u.always(function() { u.always(function() { a.unqueued--, pt.queue(t, "fx").length || a.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = pt.css(t, "display"), h = "none" === c ? pt._data(t, "olddisplay") || P(t.nodeName) : c, "inline" === h && "none" === pt.css(t, "float") && (ut.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ut.shrinkWrapBlocks() || u.always(function() { p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2] })); for (n in e)
                if (s = e[n], De.exec(s)) { if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) { if ("show" !== s || !g || void 0 === g[n]) continue;
                        f = !0 }
                    d[n] = g && g[n] || pt.style(t, n) } else c = void 0;
            if (pt.isEmptyObject(d)) "inline" === ("none" === c ? P(t.nodeName) : c) && (p.display = c);
            else { g ? "hidden" in g && (f = g.hidden) : g = pt._data(t, "fxshow", {}), o && (g.hidden = !f), f ? pt(t).show() : u.done(function() { pt(t).hide() }), u.done(function() { var e;
                    pt._removeData(t, "fxshow"); for (e in d) pt.style(t, e, d[e]) }); for (n in d) r = F(f ? g[n] : 0, n, u), n in g || (g[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0)) } }

        function j(t, e) { var i, n, s, o, r; for (i in t)
                if (n = pt.camelCase(i), s = e[n], o = t[i], pt.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = pt.cssHooks[n], r && "expand" in r) { o = r.expand(o), delete t[n]; for (i in o) i in t || (t[i] = o[i], e[i] = s) } else e[n] = s }

        function q(t, e, i) { var n, s, o = 0,
                r = q.prefilters.length,
                a = pt.Deferred().always(function() { delete l.elem }),
                l = function() { if (s) return !1; for (var e = Te || L(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o); return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1) },
                c = a.promise({ elem: t, props: pt.extend({}, e), opts: pt.extend(!0, { specialEasing: {}, easing: pt.easing._default }, i), originalProperties: e, originalOptions: i, startTime: Te || L(), duration: i.duration, tweens: [], createTween: function(e, i) { var n = pt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing); return c.tweens.push(n), n }, stop: function(e) { var i = 0,
                            n = e ? c.tweens.length : 0; if (s) return this; for (s = !0; n > i; i++) c.tweens[i].run(1); return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this } }),
                h = c.props; for (j(h, c.opts.specialEasing); r > o; o++)
                if (n = q.prefilters[o].call(c, t, h, c.opts)) return pt.isFunction(n.stop) && (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(n.stop, n)), n;
            return pt.map(h, F, c), pt.isFunction(c.opts.start) && c.opts.start.call(t, c), pt.fx.timer(pt.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always) }

        function B(t) { return pt.attr(t, "class") || "" }

        function Y(t) { return function(e, i) { "string" != typeof e && (i = e, e = "*"); var n, s = 0,
                    o = e.toLowerCase().match(Et) || []; if (pt.isFunction(i))
                    for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i) } }

        function V(t, e, i, n) {
            function s(a) { var l; return o[a] = !0, pt.each(t[a] || [], function(t, a) { var c = a(e, i, n); return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1) }), l } var o = {},
                r = t === Ze; return s(e.dataTypes[0]) || !o["*"] && s("*") }

        function X(t, e) { var i, n, s = pt.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]); return i && pt.extend(!0, t, i), t }

        function U(t, e, i) { for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type")); if (s)
                for (r in a)
                    if (a[r] && a[r].test(s)) { l.unshift(r); break }
            if (l[0] in i) o = l[0];
            else { for (r in i) { if (!l[0] || t.converters[r + " " + l[0]]) { o = r; break }
                    n || (n = r) }
                o = o || n } return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0 }

        function G(t, e, i, n) { var s, o, r, a, l, c = {},
                h = t.dataTypes.slice(); if (h[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r]; for (o = h.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) { if (r = c[l + " " + o] || c["* " + o], !r)
                    for (s in c)
                        if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) { r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], h.unshift(a[1])); break }
                if (r !== !0)
                    if (r && t.throws) e = r(e);
                    else try { e = r(e) } catch (t) { return { state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o } } } return { state: "success", data: e } }

        function K(t) { return t.style && t.style.display || pt.css(t, "display") }

        function Q(t) { if (!pt.contains(t.ownerDocument || nt, t)) return !0; for (; t && 1 === t.nodeType;) { if ("none" === K(t) || "hidden" === t.type) return !0;
                t = t.parentNode } return !1 }

        function Z(t, e, i, n) { var s; if (pt.isArray(e)) pt.each(e, function(e, s) { i || ni.test(t) ? n(t, s) : Z(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n) });
            else if (i || "object" !== pt.type(e)) n(t, e);
            else
                for (s in e) Z(t + "[" + s + "]", e[s], i, n) }

        function J() { try { return new t.XMLHttpRequest } catch (t) {} }

        function tt() { try { return new t.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

        function et(t) { return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow) }
        var it = [],
            nt = t.document,
            st = it.slice,
            ot = it.concat,
            rt = it.push,
            at = it.indexOf,
            lt = {},
            ct = lt.toString,
            ht = lt.hasOwnProperty,
            ut = {},
            dt = "1.12.4",
            pt = function(t, e) { return new pt.fn.init(t, e) },
            ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            gt = /^-ms-/,
            mt = /-([\da-z])/gi,
            vt = function(t, e) { return e.toUpperCase() };
        pt.fn = pt.prototype = { jquery: dt, constructor: pt, selector: "", length: 0, toArray: function() { return st.call(this) }, get: function(t) { return null != t ? 0 > t ? this[t + this.length] : this[t] : st.call(this) }, pushStack: function(t) { var e = pt.merge(this.constructor(), t); return e.prevObject = this, e.context = this.context, e }, each: function(t) { return pt.each(this, t) }, map: function(t) { return this.pushStack(pt.map(this, function(e, i) { return t.call(e, i, e) })) }, slice: function() { return this.pushStack(st.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(t) { var e = this.length,
                    i = +t + (0 > t ? e : 0); return this.pushStack(i >= 0 && e > i ? [this[i]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: rt, sort: it.sort, splice: it.splice }, pt.extend = pt.fn.extend = function() { var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1; for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || pt.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (s = arguments[a]))
                    for (n in s) t = r[n], i = s[n], r !== i && (c && i && (pt.isPlainObject(i) || (e = pt.isArray(i))) ? (e ? (e = !1, o = t && pt.isArray(t) ? t : []) : o = t && pt.isPlainObject(t) ? t : {}, r[n] = pt.extend(c, o, i)) : void 0 !== i && (r[n] = i));
            return r }, pt.extend({ expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(t) { throw new Error(t) }, noop: function() {}, isFunction: function(t) { return "function" === pt.type(t) }, isArray: Array.isArray || function(t) { return "array" === pt.type(t) }, isWindow: function(t) { return null != t && t == t.window }, isNumeric: function(t) { var e = t && t.toString(); return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0 }, isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 }, isPlainObject: function(t) { var e; if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1; try { if (t.constructor && !ht.call(t, "constructor") && !ht.call(t.constructor.prototype, "isPrototypeOf")) return !1 } catch (t) { return !1 } if (!ut.ownFirst)
                    for (e in t) return ht.call(t, e); for (e in t); return void 0 === e || ht.call(t, e) }, type: function(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t }, globalEval: function(e) { e && pt.trim(e) && (t.execScript || function(e) { t.eval.call(t, e) })(e) }, camelCase: function(t) { return t.replace(gt, "ms-").replace(mt, vt) }, nodeName: function(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }, each: function(t, e) { var n, s = 0; if (i(t))
                    for (n = t.length; n > s && e.call(t[s], s, t[s]) !== !1; s++);
                else
                    for (s in t)
                        if (e.call(t[s], s, t[s]) === !1) break; return t }, trim: function(t) { return null == t ? "" : (t + "").replace(ft, "") }, makeArray: function(t, e) { var n = e || []; return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : rt.call(n, t)), n }, inArray: function(t, e, i) { var n; if (e) { if (at) return at.call(e, t, i); for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i } return -1 }, merge: function(t, e) { for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++]; if (i !== i)
                    for (; void 0 !== e[n];) t[s++] = e[n++]; return t.length = s, t }, grep: function(t, e, i) { for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o), n !== a && s.push(t[o]); return s }, map: function(t, e, n) { var s, o, r = 0,
                    a = []; if (i(t))
                    for (s = t.length; s > r; r++) o = e(t[r], r, n), null != o && a.push(o);
                else
                    for (r in t) o = e(t[r], r, n), null != o && a.push(o); return ot.apply([], a) }, guid: 1, proxy: function(t, e) { var i, n, s; return "string" == typeof e && (s = t[e], e = t, t = s), pt.isFunction(t) ? (i = st.call(arguments, 2), n = function() { return t.apply(e || this, i.concat(st.call(arguments))) }, n.guid = t.guid = t.guid || pt.guid++, n) : void 0 }, now: function() { return +new Date }, support: ut }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = it[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { lt["[object " + e + "]"] = e.toLowerCase() });
        var yt = function(t) {
            function e(t, e, i, n) { var s, o, r, a, l, c, u, p, f = e && e.ownerDocument,
                    g = e ? e.nodeType : 9; if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i; if (!n && ((e ? e.ownerDocument || e : F) !== O && $(e), e = e || O, M)) { if (11 !== g && (c = vt.exec(t)))
                        if (s = c[1]) { if (9 === g) { if (!(r = e.getElementById(s))) return i; if (r.id === s) return i.push(r), i } else if (f && (r = f.getElementById(s)) && L(e, r) && r.id === s) return i.push(r), i } else { if (c[2]) return Z.apply(i, e.getElementsByTagName(t)), i; if ((s = c[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)), i }
                    if (w.qsa && !Y[t + " "] && (!N || !N.test(t))) { if (1 !== g) f = e, p = t;
                        else if ("object" !== e.nodeName.toLowerCase()) { for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = R), u = T(t), o = u.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) u[o] = l + " " + d(u[o]);
                            p = u.join(","), f = yt.test(t) && h(e.parentNode) || e } if (p) try { return Z.apply(i, f.querySelectorAll(p)), i } catch (t) {} finally { a === R && e.removeAttribute("id") } } } return D(t.replace(at, "$1"), e, i, n) }

            function i() {
                function t(i, n) { return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n } var e = []; return t }

            function n(t) { return t[R] = !0, t }

            function s(t) { var e = O.createElement("div"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function o(t, e) { for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e }

            function r(t, e) { var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X); if (n) return n; if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1 }

            function a(t) { return function(e) { var i = e.nodeName.toLowerCase(); return "input" === i && e.type === t } }

            function l(t) { return function(e) { var i = e.nodeName.toLowerCase(); return ("input" === i || "button" === i) && e.type === t } }

            function c(t) { return n(function(e) { return e = +e, n(function(i, n) { for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s])) }) }) }

            function h(t) { return t && "undefined" != typeof t.getElementsByTagName && t }

            function u() {}

            function d(t) { for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value; return n }

            function p(t, e, i) { var n = e.dir,
                    s = i && "parentNode" === n,
                    o = j++; return e.first ? function(e, i, o) { for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o) } : function(e, i, r) { var a, l, c, h = [W, o]; if (r) { for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, r)) return !0 } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) { if (c = e[R] || (e[R] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === W && a[1] === o) return h[2] = a[2]; if (l[n] = h, h[2] = t(e, i, r)) return !0 } } }

            function f(t) { return t.length > 1 ? function(e, i, n) { for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0 } : t[0] }

            function g(t, i, n) { for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n); return n }

            function m(t, e, i, n, s) { for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), c && e.push(a))); return r }

            function v(t, e, i, s, o, r) { return s && !s[R] && (s = v(s)), o && !o[R] && (o = v(o, r)), n(function(n, r, a, l) { var c, h, u, d = [],
                        p = [],
                        f = r.length,
                        v = n || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : m(v, d, t, a, l),
                        b = i ? o || (n ? t : f || s) ? [] : r : y; if (i && i(y, b, a, l), s)
                        for (c = m(b, p), s(c, [], a, l), h = c.length; h--;)(u = c[h]) && (b[p[h]] = !(y[p[h]] = u)); if (n) { if (o || t) { if (o) { for (c = [], h = b.length; h--;)(u = b[h]) && c.push(y[h] = u);
                                o(null, b = [], c, l) } for (h = b.length; h--;)(u = b[h]) && (c = o ? tt(n, u) : d[h]) > -1 && (n[c] = !(r[c] = u)) } } else b = m(b === r ? b.splice(f, b.length) : b), o ? o(null, r, b, l) : Z.apply(r, b) }) }

            function y(t) { for (var e, i, n, s = t.length, o = x.relative[t[0].type], r = o || x.relative[" "], a = o ? 1 : 0, l = p(function(t) { return t === e }, r, !0), c = p(function(t) { return tt(e, t) > -1 }, r, !0), h = [function(t, i, n) { var s = !o && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n)); return e = null, s }]; s > a; a++)
                    if (i = x.relative[t[a].type]) h = [p(f(h), i)];
                    else { if (i = x.filter[t[a].type].apply(null, t[a].matches), i[R]) { for (n = ++a; s > n && !x.relative[t[n].type]; n++); return v(a > 1 && f(h), a > 1 && d(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && d(t)) }
                        h.push(i) }
                return f(h) }

            function b(t, i) { var s = i.length > 0,
                    o = t.length > 0,
                    r = function(n, r, a, l, c) { var h, u, d, p = 0,
                            f = "0",
                            g = n && [],
                            v = [],
                            y = I,
                            b = n || o && x.find.TAG("*", c),
                            _ = W += null == y ? 1 : Math.random() || .1,
                            w = b.length; for (c && (I = r === O || r || c); f !== w && null != (h = b[f]); f++) { if (o && h) { for (u = 0, r || h.ownerDocument === O || ($(h), a = !M); d = t[u++];)
                                    if (d(h, r || O, a)) { l.push(h); break }
                                c && (W = _) }
                            s && ((h = !d && h) && p--, n && g.push(h)) } if (p += f, s && f !== p) { for (u = 0; d = i[u++];) d(g, v, r, a); if (n) { if (p > 0)
                                    for (; f--;) g[f] || v[f] || (v[f] = K.call(l));
                                v = m(v) }
                            Z.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l) } return c && (W = _, I = y), g }; return s ? n(r) : r }
            var _, w, x, C, k, T, S, D, I, E, P, $, O, A, M, N, H, z, L, R = "sizzle" + 1 * new Date,
                F = t.document,
                W = 0,
                j = 0,
                q = i(),
                B = i(),
                Y = i(),
                V = function(t, e) { return t === e && (P = !0), 0 },
                X = 1 << 31,
                U = {}.hasOwnProperty,
                G = [],
                K = G.pop,
                Q = G.push,
                Z = G.push,
                J = G.slice,
                tt = function(t, e) { for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1 },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                rt = new RegExp(it + "+", "g"),
                at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                lt = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ut = new RegExp(ot),
                dt = new RegExp("^" + nt + "$"),
                pt = { ID: new RegExp("^#(" + nt + ")"), CLASS: new RegExp("^\\.(" + nt + ")"), TAG: new RegExp("^(" + nt + "|[*])"), ATTR: new RegExp("^" + st), PSEUDO: new RegExp("^" + ot), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"), bool: new RegExp("^(?:" + et + ")$", "i"), needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i") },
                ft = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = /'|\\/g,
                _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                wt = function(t, e, i) { var n = "0x" + e - 65536; return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
                xt = function() { $() };
            try { Z.apply(G = J.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType } catch (t) { Z = { apply: G.length ? function(t, e) { Q.apply(t, J.call(e)) } : function(t, e) { for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1 } } }
            w = e.support = {}, k = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, $ = e.setDocument = function(t) { var e, i, n = t ? t.ownerDocument || t : F; return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, A = O.documentElement, M = !k(O), (i = O.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), w.attributes = s(function(t) { return t.className = "i", !t.getAttribute("className") }), w.getElementsByTagName = s(function(t) { return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length }), w.getElementsByClassName = mt.test(O.getElementsByClassName), w.getById = s(function(t) { return A.appendChild(t).id = R, !O.getElementsByName || !O.getElementsByName(R).length }), w.getById ? (x.find.ID = function(t, e) { if ("undefined" != typeof e.getElementById && M) { var i = e.getElementById(t); return i ? [i] : [] } }, x.filter.ID = function(t) { var e = t.replace(_t, wt); return function(t) { return t.getAttribute("id") === e } }) : (delete x.find.ID, x.filter.ID = function(t) { var e = t.replace(_t, wt); return function(t) { var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id"); return i && i.value === e } }), x.find.TAG = w.getElementsByTagName ? function(t, e) { return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) { var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t); if ("*" === t) { for (; i = o[s++];) 1 === i.nodeType && n.push(i); return n } return o }, x.find.CLASS = w.getElementsByClassName && function(t, e) { return "undefined" != typeof e.getElementsByClassName && M ? e.getElementsByClassName(t) : void 0 }, H = [], N = [], (w.qsa = mt.test(O.querySelectorAll)) && (s(function(t) { A.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || N.push(".#.+[+~]") }), s(function(t) { var e = O.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:") })), (w.matchesSelector = mt.test(z = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function(t) { w.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), H.push("!=", ot) }), N = N.length && new RegExp(N.join("|")), H = H.length && new RegExp(H.join("|")), e = mt.test(A.compareDocumentPosition), L = e || mt.test(A.contains) ? function(t, e) { var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode; return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))) } : function(t, e) { if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1 }, V = e ? function(t, e) { if (t === e) return P = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === O || t.ownerDocument === F && L(F, t) ? -1 : e === O || e.ownerDocument === F && L(F, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) { if (t === e) return P = !0, 0; var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        l = [e]; if (!s || !o) return t === O ? -1 : e === O ? 1 : s ? -1 : o ? 1 : E ? tt(E, t) - tt(E, e) : 0; if (s === o) return r(t, e); for (i = t; i = i.parentNode;) a.unshift(i); for (i = e; i = i.parentNode;) l.unshift(i); for (; a[n] === l[n];) n++; return n ? r(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0 }, O) : O }, e.matches = function(t, i) { return e(t, null, null, i) }, e.matchesSelector = function(t, i) { if ((t.ownerDocument || t) !== O && $(t), i = i.replace(ht, "='$1']"), w.matchesSelector && M && !Y[i + " "] && (!H || !H.test(i)) && (!N || !N.test(i))) try { var n = z.call(t, i); if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (t) {}
                return e(i, O, null, [t]).length > 0 }, e.contains = function(t, e) { return (t.ownerDocument || t) !== O && $(t), L(t, e) }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== O && $(t); var i = x.attrHandle[e.toLowerCase()],
                    n = i && U.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !M) : void 0; return void 0 !== n ? n : w.attributes || !M ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) { var e, i = [],
                    n = 0,
                    s = 0; if (P = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(V), P) { for (; e = t[s++];) e === t[s] && (n = i.push(s)); for (; n--;) t.splice(i[n], 1) } return E = null, t }, C = e.getText = function(t) { var e, i = "",
                    n = 0,
                    s = t.nodeType; if (s) { if (1 === s || 9 === s || 11 === s) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += C(t) } else if (3 === s || 4 === s) return t.nodeValue } else
                    for (; e = t[n++];) i += C(e); return i }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(t) { return t[1] = t[1].replace(_t, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) { var e, i = !t[6] && t[2]; return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } },
                filter: {
                    TAG: function(t) { var e = t.replace(_t, wt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                    CLASS: function(t) { var e = q[t + " "]; return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function(t) { return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "") }) },
                    ATTR: function(t, i, n) { return function(s) { var o = e.attr(s, t); return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) { return !!t.parentNode } : function(e, i, l) {
                            var c, h, u, d, p, f, g = o !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (o) { for (; g;) { for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling" } return !0 }
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (d = m, u = d[R] || (d[R] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === W && c[1],
                                        b = p && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++b && d === e) { h[t] = [W, p, b]; break }
                                } else if (y && (d = e, u = d[R] || (d[R] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === W && c[1], b = p), b === !1)
                                    for (;
                                        (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (u = d[R] || (d[R] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [W, b]), d !== e)););
                                return b -= s, b === n || b % n === 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) { var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return o[R] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) { for (var n, s = o(t, i), r = s.length; r--;) n = tt(t, s[r]), t[n] = !(e[n] = s[r]) }) : function(t) { return o(t, 0, s) }) : o }
                },
                pseudos: { not: n(function(t) { var e = [],
                            i = [],
                            s = S(t.replace(at, "$1")); return s[R] ? n(function(t, e, i, n) { for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o)) }) : function(t, n, o) { return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop() } }), has: n(function(t) { return function(i) { return e(t, i).length > 0 } }), contains: n(function(t) { return t = t.replace(_t, wt),
                            function(e) { return (e.textContent || e.innerText || C(e)).indexOf(t) > -1 } }), lang: n(function(t) { return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, wt).toLowerCase(),
                            function(e) { var i;
                                do
                                    if (i = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1 } }), target: function(e) { var i = t.location && t.location.hash; return i && i.slice(1) === e.id }, root: function(t) { return t === A }, focus: function(t) { return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) }, enabled: function(t) { return t.disabled === !1 }, disabled: function(t) { return t.disabled === !0 }, checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected }, selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, t.selected === !0 }, empty: function(t) { for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0 }, parent: function(t) { return !x.pseudos.empty(t) }, header: function(t) { return gt.test(t.nodeName) }, input: function(t) { return ft.test(t.nodeName) }, button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e }, text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) }, first: c(function() { return [0] }), last: c(function(t, e) { return [e - 1] }), eq: c(function(t, e, i) { return [0 > i ? i + e : i] }), even: c(function(t, e) { for (var i = 0; e > i; i += 2) t.push(i); return t }), odd: c(function(t, e) { for (var i = 1; e > i; i += 2) t.push(i); return t }), lt: c(function(t, e, i) { for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n); return t }), gt: c(function(t, e, i) { for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n); return t }) }
            }, x.pseudos.nth = x.pseudos.eq;
            for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[_] = a(_);
            for (_ in { submit: !0, reset: !0 }) x.pseudos[_] = l(_);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = e.tokenize = function(t, i) { var n, s, o, r, a, l, c, h = B[t + " "]; if (h) return i ? 0 : h.slice(0); for (a = t, l = [], c = x.preFilter; a;) { n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ct.exec(a)) && (n = s.shift(), o.push({ value: n, type: s[0].replace(at, " ") }), a = a.slice(n.length)); for (r in x.filter) !(s = pt[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({ value: n, type: r, matches: s }), a = a.slice(n.length)); if (!n) break } return i ? a.length : a ? e.error(t) : B(t, l).slice(0) }, S = e.compile = function(t, e) { var i, n = [],
                    s = [],
                    o = Y[t + " "]; if (!o) { for (e || (e = T(t)), i = e.length; i--;) o = y(e[i]), o[R] ? n.push(o) : s.push(o);
                    o = Y(t, b(s, n)), o.selector = t } return o }, D = e.select = function(t, e, i, n) { var s, o, r, a, l, c = "function" == typeof t && t,
                    u = !n && T(t = c.selector || t); if (i = i || [], 1 === u.length) { if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && w.getById && 9 === e.nodeType && M && x.relative[o[1].type]) { if (e = (x.find.ID(r.matches[0].replace(_t, wt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length) } for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !x.relative[a = r.type]);)
                        if ((l = x.find[a]) && (n = l(r.matches[0].replace(_t, wt), yt.test(o[0].type) && h(e.parentNode) || e))) { if (o.splice(s, 1), t = n.length && d(o), !t) return Z.apply(i, n), i; break } } return (c || S(t, u))(n, e, !M, i, !e || yt.test(t) && h(e.parentNode) || e), i }, w.sortStable = R.split("").sort(V).join("") === R, w.detectDuplicates = !!P, $(), w.sortDetached = s(function(t) { return 1 & t.compareDocumentPosition(O.createElement("div")) }), s(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || o("type|href|height|width", function(t, e, i) { return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), w.attributes && s(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || o("value", function(t, e, i) { return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue }), s(function(t) { return null == t.getAttribute("disabled") }) || o(et, function(t, e, i) { var n; return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }), e
        }(t);
        pt.find = yt, pt.expr = yt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = yt.uniqueSort, pt.text = yt.getText, pt.isXMLDoc = yt.isXML, pt.contains = yt.contains;
        var bt = function(t, e, i) { for (var n = [], s = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) { if (s && pt(t).is(i)) break;
                        n.push(t) }
                return n },
            _t = function(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i },
            wt = pt.expr.match.needsContext,
            xt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Ct = /^.[^:#\[\.,]*$/;
        pt.filter = function(t, e, i) { var n = e[0]; return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? pt.find.matchesSelector(n, t) ? [n] : [] : pt.find.matches(t, pt.grep(e, function(t) { return 1 === t.nodeType })) }, pt.fn.extend({ find: function(t) { var e, i = [],
                    n = this,
                    s = n.length; if ("string" != typeof t) return this.pushStack(pt(t).filter(function() { for (e = 0; s > e; e++)
                        if (pt.contains(n[e], this)) return !0 })); for (e = 0; s > e; e++) pt.find(t, n[e], i); return i = this.pushStack(s > 1 ? pt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i }, filter: function(t) { return this.pushStack(n(this, t || [], !1)) }, not: function(t) { return this.pushStack(n(this, t || [], !0)) }, is: function(t) { return !!n(this, "string" == typeof t && wt.test(t) ? pt(t) : t || [], !1).length } });
        var kt, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            St = pt.fn.init = function(t, e, i) { var n, s; if (!t) return this; if (i = i || kt, "string" == typeof t) { if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t); if (n[1]) { if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), xt.test(n[1]) && pt.isPlainObject(e))
                            for (n in e) pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]); return this } if (s = nt.getElementById(n[2]), s && s.parentNode) { if (s.id !== n[2]) return kt.find(t);
                        this.length = 1, this[0] = s } return this.context = nt, this.selector = t, this } return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof i.ready ? i.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this)) };
        St.prototype = pt.fn, kt = pt(nt);
        var Dt = /^(?:parents|prev(?:Until|All))/,
            It = { children: !0, contents: !0, next: !0, prev: !0 };
        pt.fn.extend({ has: function(t) { var e, i = pt(t, this),
                    n = i.length; return this.filter(function() { for (e = 0; n > e; e++)
                        if (pt.contains(this, i[e])) return !0 }) }, closest: function(t, e) { for (var i, n = 0, s = this.length, o = [], r = wt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) { o.push(i); break }
                return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o) }, index: function(t) { return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(t, e) { return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e)))) }, addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) } }), pt.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return bt(t, "parentNode") }, parentsUntil: function(t, e, i) { return bt(t, "parentNode", i) }, next: function(t) { return s(t, "nextSibling") }, prev: function(t) { return s(t, "previousSibling") }, nextAll: function(t) { return bt(t, "nextSibling") }, prevAll: function(t) { return bt(t, "previousSibling") }, nextUntil: function(t, e, i) { return bt(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return bt(t, "previousSibling", i) }, siblings: function(t) { return _t((t.parentNode || {}).firstChild, t) }, children: function(t) { return _t(t.firstChild) }, contents: function(t) { return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes) } }, function(t, e) { pt.fn[t] = function(i, n) { var s = pt.map(this, e, i); return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = pt.filter(n, s)), this.length > 1 && (It[t] || (s = pt.uniqueSort(s)), Dt.test(t) && (s = s.reverse())), this.pushStack(s) } });
        var Et = /\S+/g;
        pt.Callbacks = function(t) { t = "string" == typeof t ? o(t) : pt.extend({}, t); var e, i, n, s, r = [],
                a = [],
                l = -1,
                c = function() { for (s = t.once, n = e = !0; a.length; l = -1)
                        for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = r.length, i = !1);
                    t.memory || (i = !1), e = !1, s && (r = i ? [] : "") },
                h = { add: function() { return r && (i && !e && (l = r.length - 1, a.push(i)), function e(i) { pt.each(i, function(i, n) { pt.isFunction(n) ? t.unique && h.has(n) || r.push(n) : n && n.length && "string" !== pt.type(n) && e(n) }) }(arguments), i && !e && c()), this }, remove: function() { return pt.each(arguments, function(t, e) { for (var i;
                                (i = pt.inArray(e, r, i)) > -1;) r.splice(i, 1), l >= i && l-- }), this }, has: function(t) { return t ? pt.inArray(t, r) > -1 : r.length > 0 }, empty: function() { return r && (r = []), this }, disable: function() { return s = a = [], r = i = "", this }, disabled: function() { return !r }, lock: function() { return s = !0, i || h.disable(), this }, locked: function() { return !!s }, fireWith: function(t, i) { return s || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this }, fire: function() { return h.fireWith(this, arguments), this }, fired: function() { return !!n } }; return h }, pt.extend({ Deferred: function(t) { var e = [
                        ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pt.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = { state: function() { return i }, always: function() { return s.done(arguments).fail(arguments), this }, then: function() { var t = arguments; return pt.Deferred(function(i) { pt.each(e, function(e, o) { var r = pt.isFunction(t[e]) && t[e];
                                    s[o[1]](function() { var t = r && r.apply(this, arguments);
                                        t && pt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments) }) }), t = null }).promise() }, promise: function(t) { return null != t ? pt.extend(t, n) : n } },
                    s = {}; return n.pipe = n.then, pt.each(e, function(t, o) { var r = o[2],
                        a = o[3];
                    n[o[1]] = r.add, a && r.add(function() { i = a }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() { return s[o[0] + "With"](this === s ? n : this, arguments), this }, s[o[0] + "With"] = r.fireWith }), n.promise(s), t && t.call(s, s), s }, when: function(t) { var e, i, n, s = 0,
                    o = st.call(arguments),
                    r = o.length,
                    a = 1 !== r || t && pt.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : pt.Deferred(),
                    c = function(t, i, n) { return function(s) { i[t] = this, n[t] = arguments.length > 1 ? st.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n) } }; if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && pt.isFunction(o[s].promise) ? o[s].promise().progress(c(s, i, e)).done(c(s, n, o)).fail(l.reject) : --a; return a || l.resolveWith(n, o), l.promise() } });
        var Pt;
        pt.fn.ready = function(t) { return pt.ready.promise().done(t), this }, pt.extend({ isReady: !1, readyWait: 1, holdReady: function(t) { t ? pt.readyWait++ : pt.ready(!0) }, ready: function(t) {
                (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || (Pt.resolveWith(nt, [pt]), pt.fn.triggerHandler && (pt(nt).triggerHandler("ready"), pt(nt).off("ready")))) } }), pt.ready.promise = function(e) { if (!Pt)
                if (Pt = pt.Deferred(), "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll) t.setTimeout(pt.ready);
                else if (nt.addEventListener) nt.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
            else { nt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a); var i = !1; try { i = null == t.frameElement && nt.documentElement } catch (t) {}
                i && i.doScroll && ! function e() { if (!pt.isReady) { try { i.doScroll("left") } catch (i) { return t.setTimeout(e, 50) }
                        r(), pt.ready() } }() } return Pt.promise(e) }, pt.ready.promise();
        var $t;
        for ($t in pt(ut)) break;
        ut.ownFirst = "0" === $t, ut.inlineBlockNeedsLayout = !1, pt(function() { var t, e, i, n;
                i = nt.getElementsByTagName("body")[0], i && i.style && (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ut.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n)) }),
            function() { var t = nt.createElement("div");
                ut.deleteExpando = !0; try { delete t.test } catch (t) { ut.deleteExpando = !1 }
                t = null }();
        var Ot = function(t) { var e = pt.noData[(t.nodeName + " ").toLowerCase()],
                    i = +t.nodeType || 1; return (1 === i || 9 === i) && (!e || e !== !0 && t.getAttribute("classid") === e) },
            At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Mt = /([A-Z])/g;
        pt.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(t) { return t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando], !!t && !c(t) }, data: function(t, e, i) { return h(t, e, i) }, removeData: function(t, e) { return u(t, e) }, _data: function(t, e, i) { return h(t, e, i, !0) }, _removeData: function(t, e) { return u(t, e, !0) } }), pt.fn.extend({ data: function(t, e) { var i, n, s, o = this[0],
                        r = o && o.attributes; if (void 0 === t) { if (this.length && (s = pt.data(o), 1 === o.nodeType && !pt._data(o, "parsedAttrs"))) { for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = pt.camelCase(n.slice(5)), l(o, n, s[n])));
                            pt._data(o, "parsedAttrs", !0) } return s } return "object" == typeof t ? this.each(function() { pt.data(this, t) }) : arguments.length > 1 ? this.each(function() { pt.data(this, t, e) }) : o ? l(o, t, pt.data(o, t)) : void 0 }, removeData: function(t) { return this.each(function() { pt.removeData(this, t) }) } }), pt.extend({ queue: function(t, e, i) { var n; return t ? (e = (e || "fx") + "queue", n = pt._data(t, e), i && (!n || pt.isArray(i) ? n = pt._data(t, e, pt.makeArray(i)) : n.push(i)), n || []) : void 0 }, dequeue: function(t, e) { e = e || "fx"; var i = pt.queue(t, e),
                        n = i.length,
                        s = i.shift(),
                        o = pt._queueHooks(t, e),
                        r = function() { pt.dequeue(t, e) }; "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire() }, _queueHooks: function(t, e) { var i = e + "queueHooks"; return pt._data(t, i) || pt._data(t, i, { empty: pt.Callbacks("once memory").add(function() { pt._removeData(t, e + "queue"), pt._removeData(t, i) }) }) } }), pt.fn.extend({ queue: function(t, e) { var i = 2; return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function() { var i = pt.queue(this, t, e);
                        pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t) }) }, dequeue: function(t) { return this.each(function() { pt.dequeue(this, t) }) }, clearQueue: function(t) { return this.queue(t || "fx", []) }, promise: function(t, e) { var i, n = 1,
                        s = pt.Deferred(),
                        o = this,
                        r = this.length,
                        a = function() {--n || s.resolveWith(o, [o]) }; for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = pt._data(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a)); return a(), s.promise(e) } }),
            function() { var t;
                ut.shrinkWrapBlocks = function() { if (null != t) return t;
                    t = !1; var e, i, n; return i = nt.getElementsByTagName("body")[0], i && i.style ? (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(nt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0 } }();
        var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ht = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
            zt = ["Top", "Right", "Bottom", "Left"],
            Lt = function(t, e) { return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t) },
            Rt = function(t, e, i, n, s, o, r) { var a = 0,
                    l = t.length,
                    c = null == i; if ("object" === pt.type(i)) { s = !0; for (a in i) Rt(t, e, a, i[a], !0, o, r) } else if (void 0 !== n && (s = !0, pt.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) { return c.call(pt(t), i) })), e))
                    for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i))); return s ? t : c ? e.call(t) : l ? e(t[0], i) : o },
            Ft = /^(?:checkbox|radio)$/i,
            Wt = /<([\w:-]+)/,
            jt = /^$|\/(?:java|ecma)script/i,
            qt = /^\s+/,
            Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() { var t = nt.createElement("div"),
                e = nt.createDocumentFragment(),
                i = nt.createElement("input");
            t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ut.leadingWhitespace = 3 === t.firstChild.nodeType, ut.tbody = !t.getElementsByTagName("tbody").length, ut.htmlSerialize = !!t.getElementsByTagName("link").length, ut.html5Clone = "<:nav></:nav>" !== nt.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), ut.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", ut.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), i = nt.createElement("input"), i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ut.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.noCloneEvent = !!t.addEventListener, t[pt.expando] = 1, ut.attributes = !t.getAttribute(pt.expando) }();
        var Yt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ut.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
        Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
        var Vt = /<|&#?\w+;/,
            Xt = /<tbody/i;
        ! function() { var e, i, n = nt.createElement("div"); for (e in { submit: !0, change: !0, focusin: !0 }) i = "on" + e, (ut[e] = i in t) || (n.setAttribute(i, "t"), ut[e] = n.attributes[i].expando === !1);
            n = null }();
        var Ut = /^(?:input|select|textarea)$/i,
            Gt = /^key/,
            Kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Qt = /^(?:focusinfocus|focusoutblur)$/,
            Zt = /^([^.]*)(?:\.(.+)|)/;
        pt.event = { global: {}, add: function(t, e, i, n, s) { var o, r, a, l, c, h, u, d, p, f, g, m = pt._data(t); if (m) { for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = pt.guid++), (r = m.events) || (r = m.events = {}), (h = m.handle) || (h = m.handle = function(t) { return "undefined" == typeof pt || t && pt.event.triggered === t.type ? void 0 : pt.event.dispatch.apply(h.elem, arguments) }, h.elem = t), e = (e || "").match(Et) || [""], a = e.length; a--;) o = Zt.exec(e[a]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (c = pt.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = pt.event.special[p] || {}, u = pt.extend({ type: p, origType: g, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && pt.expr.match.needsContext.test(s), namespace: f.join(".") }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, c.setup && c.setup.call(t, n, f, h) !== !1 || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), pt.event.global[p] = !0);
                    t = null } }, remove: function(t, e, i, n, s) { var o, r, a, l, c, h, u, d, p, f, g, m = pt.hasData(t) && pt._data(t); if (m && (h = m.events)) { for (e = (e || "").match(Et) || [""], c = e.length; c--;)
                        if (a = Zt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) { for (u = pt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = h[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, u.remove && u.remove.call(t, r));
                            l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || pt.removeEvent(t, p, m.handle), delete h[p]) } else
                            for (p in h) pt.event.remove(t, p + e[c], i, n, !0);
                    pt.isEmptyObject(h) && (delete m.handle, pt._removeData(t, "events")) } }, trigger: function(e, i, n, s) { var o, r, a, l, c, h, u, d = [n || nt],
                    p = ht.call(e, "type") ? e.type : e,
                    f = ht.call(e, "namespace") ? e.namespace.split(".") : []; if (a = h = n = n || nt, 3 !== n.nodeType && 8 !== n.nodeType && !Qt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : pt.makeArray(i, [e]), c = pt.event.special[p] || {}, s || !c.trigger || c.trigger.apply(n, i) !== !1)) { if (!s && !c.noBubble && !pt.isWindow(n)) { for (l = c.delegateType || p, Qt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), h = a;
                        h === (n.ownerDocument || nt) && d.push(h.defaultView || h.parentWindow || t) } for (u = 0;
                        (a = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : c.bindType || p, o = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle"), o && o.apply(a, i), o = r && a[r], o && o.apply && Ot(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault()); if (e.type = p, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), i) === !1) && Ot(n) && r && n[p] && !pt.isWindow(n)) { h = n[r], h && (n[r] = null), pt.event.triggered = p; try { n[p]() } catch (t) {}
                        pt.event.triggered = void 0, h && (n[r] = h) } return e.result } }, dispatch: function(t) { t = pt.event.fix(t); var e, i, n, s, o, r = [],
                    a = st.call(arguments),
                    l = (pt._data(this, "events") || {})[t.type] || [],
                    c = pt.event.special[t.type] || {}; if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) { for (r = pt.event.handlers.call(this, t, l), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, i = 0;
                            (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, t), t.result } }, handlers: function(t, e) { var i, n, s, o, r = [],
                    a = e.delegateCount,
                    l = t.target; if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) { for (n = [], i = 0; a > i; i++) o = e[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? pt(s, this).index(l) > -1 : pt.find(s, this, null, [l]).length), n[s] && n.push(o);
                            n.length && r.push({ elem: l, handlers: n }) }
                return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r }, fix: function(t) { if (t[pt.expando]) return t; var e, i, n, s = t.type,
                    o = t,
                    r = this.fixHooks[s]; for (r || (this.fixHooks[s] = r = Kt.test(s) ? this.mouseHooks : Gt.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new pt.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i]; return t.target || (t.target = o.srcElement || nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) { return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) { var i, n, s, o = e.button,
                        r = e.fromElement; return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || nt, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t } }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== _() && this.focus) try { return this.focus(), !1 } catch (t) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === _() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return pt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(t) { return pt.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }, simulate: function(t, e, i) { var n = pt.extend(new pt.Event, i, { type: t, isSimulated: !0 });
                pt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault() } }, pt.removeEvent = nt.removeEventListener ? function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i) } : function(t, e, i) { var n = "on" + e;
            t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null), t.detachEvent(n, i)) }, pt.Event = function(t, e) { return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e) }, pt.Event.prototype = { constructor: pt.Event, isDefaultPrevented: b, isPropagationStopped: b, isImmediatePropagationStopped: b, preventDefault: function() { var t = this.originalEvent;
                this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1) }, stopPropagation: function() { var t = this.originalEvent;
                this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0) }, stopImmediatePropagation: function() { var t = this.originalEvent;
                this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation() } }, pt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) { pt.event.special[t] = { delegateType: e, bindType: e, handle: function(t) { var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj; return s && (s === n || pt.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i } } }), ut.submit || (pt.event.special.submit = { setup: function() { return !pt.nodeName(this, "form") && void pt.event.add(this, "click._submit keypress._submit", function(t) { var e = t.target,
                        i = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                    i && !pt._data(i, "submit") && (pt.event.add(i, "submit._submit", function(t) { t._submitBubble = !0 }), pt._data(i, "submit", !0)) }) }, postDispatch: function(t) { t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t)) }, teardown: function() { return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit") } }), ut.change || (pt.event.special.change = { setup: function() { return Ut.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function(t) { "checked" === t.originalEvent.propertyName && (this._justChanged = !0) }), pt.event.add(this, "click._change", function(t) { this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t) })), !1) : void pt.event.add(this, "beforeactivate._change", function(t) { var e = t.target;
                    Ut.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {!this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t) }), pt._data(e, "change", !0)) }) }, handle: function(t) { var e = t.target; return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() { return pt.event.remove(this, "._change"), !Ut.test(this.nodeName) } }), ut.focusin || pt.each({ focus: "focusin", blur: "focusout" }, function(t, e) { var i = function(t) { pt.event.simulate(e, t.target, pt.event.fix(t)) };
            pt.event.special[e] = { setup: function() { var n = this.ownerDocument || this,
                        s = pt._data(n, e);
                    s || n.addEventListener(t, i, !0), pt._data(n, e, (s || 0) + 1) }, teardown: function() { var n = this.ownerDocument || this,
                        s = pt._data(n, e) - 1;
                    s ? pt._data(n, e, s) : (n.removeEventListener(t, i, !0), pt._removeData(n, e)) } } }), pt.fn.extend({ on: function(t, e, i, n) { return w(this, t, e, i, n) }, one: function(t, e, i, n) { return w(this, t, e, i, n, 1) }, off: function(t, e, i) { var n, s; if (t && t.preventDefault && t.handleObj) return n = t.handleObj, pt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" == typeof t) { for (s in t) this.off(s, e, t[s]); return this } return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = b), this.each(function() { pt.event.remove(this, t, i, e) }) }, trigger: function(t, e) { return this.each(function() { pt.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var i = this[0]; return i ? pt.event.trigger(t, e, i, !0) : void 0 } });
        var Jt = / jQuery\d+="(?:null|\d+)"/g,
            te = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
            ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ie = /<script|<style|<link/i,
            ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            se = /^true\/(.*)/,
            oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            re = p(nt),
            ae = re.appendChild(nt.createElement("div"));
        pt.extend({ htmlPrefilter: function(t) { return t.replace(ee, "<$1></$2>") }, clone: function(t, e, i) { var n, s, o, r, a, l = pt.contains(t.ownerDocument, t); if (ut.html5Clone || pt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(o = ae.firstChild)), !(ut.noCloneEvent && ut.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                    for (n = f(o), a = f(t), r = 0; null != (s = a[r]); ++r) n[r] && S(s, n[r]); if (e)
                    if (i)
                        for (a = a || f(t), n = n || f(o), r = 0; null != (s = a[r]); r++) T(s, n[r]);
                    else T(t, o);
                return n = f(o, "script"), n.length > 0 && g(n, !l && f(t, "script")), n = a = s = null, o }, cleanData: function(t, e) { for (var i, n, s, o, r = 0, a = pt.expando, l = pt.cache, c = ut.attributes, h = pt.event.special; null != (i = t[r]); r++)
                    if ((e || Ot(i)) && (s = i[a], o = s && l[s])) { if (o.events)
                            for (n in o.events) h[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, o.handle);
                        l[s] && (delete l[s], c || "undefined" == typeof i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a), it.push(s)) } } }), pt.fn.extend({
            domManip: D,
            detach: function(t) { return I(this, t, !0) },
            remove: function(t) { return I(this, t) },
            text: function(t) { return Rt(this, function(t) { return void 0 === t ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || nt).createTextNode(t)) }, null, t, arguments.length) },
            append: function() { return D(this, arguments, function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var e = x(this, t);
                        e.appendChild(t) } }) },
            prepend: function() { return D(this, arguments, function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var e = x(this, t);
                        e.insertBefore(t, e.firstChild) } }) },
            before: function() { return D(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
            after: function() { return D(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
            empty: function() { for (var t, e = 0; null != (t = this[e]); e++) { for (1 === t.nodeType && pt.cleanData(f(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && pt.nodeName(t, "select") && (t.options.length = 0) } return this },
            clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return pt.clone(this, t, e) }) },
            html: function(t) { return Rt(this, function(t) { var e = this[0] || {},
                        i = 0,
                        n = this.length; if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Jt, "") : void 0; if ("string" == typeof t && !ie.test(t) && (ut.htmlSerialize || !te.test(t)) && (ut.leadingWhitespace || !qt.test(t)) && !Yt[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) { t = pt.htmlPrefilter(t); try { for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (pt.cleanData(f(e, !1)), e.innerHTML = t);
                            e = 0 } catch (t) {} }
                    e && this.empty().append(t) }, null, t, arguments.length) },
            replaceWith: function() {
                var t = [];
                return D(this, arguments, function(e) {
                    var i = this.parentNode;
                    pt.inArray(this, t) < 0 && (pt.cleanData(f(this)),
                        i && i.replaceChild(e, this))
                }, t)
            }
        }), pt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { pt.fn[t] = function(t) { for (var i, n = 0, s = [], o = pt(t), r = o.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), pt(o[n])[e](i), rt.apply(s, i.get()); return this.pushStack(s) } });
        var le, ce = { HTML: "block", BODY: "block" },
            he = /^margin/,
            ue = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
            de = function(t, e, i, n) { var s, o, r = {}; for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                s = i.apply(t, n || []); for (o in e) t.style[o] = r[o]; return s },
            pe = nt.documentElement;
        ! function() {
            function e() { var e, h, u = nt.documentElement;
                u.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = s = a = !1, n = r = !0, t.getComputedStyle && (h = t.getComputedStyle(c), i = "1%" !== (h || {}).top, a = "2px" === (h || {}).marginLeft, s = "4px" === (h || { width: "4px" }).width, c.style.marginRight = "50%", n = "4px" === (h || { marginRight: "4px" }).marginRight, e = c.appendChild(nt.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", r = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", o = 0 === c.getClientRects().length, o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), u.removeChild(l) } var i, n, s, o, r, a, l = nt.createElement("div"),
                c = nt.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", ut.opacity = "0.5" === c.style.opacity, ut.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ut.clearCloneStyle = "content-box" === c.style.backgroundClip, l = nt.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), ut.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pt.extend(ut, { reliableHiddenOffsets: function() { return null == i && e(), o }, boxSizingReliable: function() { return null == i && e(), s }, pixelMarginRight: function() { return null == i && e(), n }, pixelPosition: function() { return null == i && e(), i }, reliableMarginRight: function() { return null == i && e(), r }, reliableMarginLeft: function() { return null == i && e(), a } })) }();
        var fe, ge, me = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (fe = function(e) { var i = e.ownerDocument.defaultView; return i && i.opener || (i = t), i.getComputedStyle(e) }, ge = function(t, e, i) { var n, s, o, r, a = t.style; return i = i || fe(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== r && void 0 !== r || pt.contains(t.ownerDocument, t) || (r = pt.style(t, e)), i && !ut.pixelMarginRight() && ue.test(r) && he.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o), void 0 === r ? r : r + "" }) : pe.currentStyle && (fe = function(t) { return t.currentStyle }, ge = function(t, e, i) { var n, s, o, r, a = t.style; return i = i || fe(t), r = i ? i[e] : void 0, null == r && a && a[e] && (r = a[e]), ue.test(r) && !me.test(e) && (n = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)), void 0 === r ? r : r + "" || "auto" });
        var ve = /alpha\([^)]*\)/i,
            ye = /opacity\s*=\s*([^)]*)/i,
            be = /^(none|table(?!-c[ea]).+)/,
            _e = new RegExp("^(" + Nt + ")(.*)$", "i"),
            we = { position: "absolute", visibility: "hidden", display: "block" },
            xe = { letterSpacing: "0", fontWeight: "400" },
            Ce = ["Webkit", "O", "Moz", "ms"],
            ke = nt.createElement("div").style;
        pt.extend({ cssHooks: { opacity: { get: function(t, e) { if (e) { var i = ge(t, "opacity"); return "" === i ? "1" : i } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: ut.cssFloat ? "cssFloat" : "styleFloat" }, style: function(t, e, i, n) { if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) { var s, o, r, a = pt.camelCase(e),
                        l = t.style; if (e = pt.cssProps[a] || (pt.cssProps[a] = O(a) || a), r = pt.cssHooks[e] || pt.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e]; if (o = typeof i, "string" === o && (s = Ht.exec(i)) && s[1] && (i = d(t, e, s), o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (pt.cssNumber[a] ? "" : "px")), ut.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try { l[e] = i } catch (t) {} } }, css: function(t, e, i, n) { var s, o, r, a = pt.camelCase(e); return e = pt.cssProps[a] || (pt.cssProps[a] = O(a) || a), r = pt.cssHooks[e] || pt.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = ge(t, e, n)), "normal" === o && e in xe && (o = xe[e]), "" === i || i ? (s = parseFloat(o), i === !0 || isFinite(s) ? s || 0 : o) : o } }), pt.each(["height", "width"], function(t, e) { pt.cssHooks[e] = { get: function(t, i, n) { return i ? be.test(pt.css(t, "display")) && 0 === t.offsetWidth ? de(t, we, function() { return H(t, e, n) }) : H(t, e, n) : void 0 }, set: function(t, i, n) { var s = n && fe(t); return M(t, i, n ? N(t, e, n, ut.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, s), s) : 0) } } }), ut.opacity || (pt.cssHooks.opacity = { get: function(t, e) { return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "" }, set: function(t, e) { var i = t.style,
                    n = t.currentStyle,
                    s = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(o.replace(ve, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ve.test(o) ? o.replace(ve, s) : o + " " + s) } }), pt.cssHooks.marginRight = $(ut.reliableMarginRight, function(t, e) { return e ? de(t, { display: "inline-block" }, ge, [t, "marginRight"]) : void 0 }), pt.cssHooks.marginLeft = $(ut.reliableMarginLeft, function(t, e) { return e ? (parseFloat(ge(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - de(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), pt.each({ margin: "", padding: "", border: "Width" }, function(t, e) { pt.cssHooks[t + e] = { expand: function(i) { for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + zt[n] + e] = o[n] || o[n - 2] || o[0]; return s } }, he.test(t) || (pt.cssHooks[t + e].set = M) }), pt.fn.extend({ css: function(t, e) { return Rt(this, function(t, e, i) { var n, s, o = {},
                        r = 0; if (pt.isArray(e)) { for (n = fe(t), s = e.length; s > r; r++) o[e[r]] = pt.css(t, e[r], !1, n); return o } return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e) }, t, e, arguments.length > 1) }, show: function() { return A(this, !0) }, hide: function() { return A(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { Lt(this) ? pt(this).show() : pt(this).hide() }) } }), pt.Tween = z, z.prototype = { constructor: z, init: function(t, e, i, n, s, o) { this.elem = t, this.prop = i, this.easing = s || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (pt.cssNumber[i] ? "" : "px") }, cur: function() { var t = z.propHooks[this.prop]; return t && t.get ? t.get(this) : z.propHooks._default.get(this) }, run: function(t) { var e, i = z.propHooks[this.prop]; return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : z.propHooks._default.set(this), this } }, z.prototype.init.prototype = z.prototype, z.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) }, set: function(t) { pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit) } } }, z.propHooks.scrollTop = z.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, pt.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, pt.fx = z.prototype.init, pt.fx.step = {};
        var Te, Se, De = /^(?:toggle|show|hide)$/,
            Ie = /queueHooks$/;
        pt.Animation = pt.extend(q, { tweeners: { "*": [function(t, e) { var i = this.createTween(t, e); return d(i.elem, t, Ht.exec(e), i), i }] }, tweener: function(t, e) { pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Et); for (var i, n = 0, s = t.length; s > n; n++) i = t[n], q.tweeners[i] = q.tweeners[i] || [], q.tweeners[i].unshift(e) }, prefilters: [W], prefilter: function(t, e) { e ? q.prefilters.unshift(t) : q.prefilters.push(t) } }), pt.speed = function(t, e, i) { var n = t && "object" == typeof t ? pt.extend({}, t) : { complete: i || !i && e || pt.isFunction(t) && t, duration: t, easing: i && e || e && !pt.isFunction(e) && e }; return n.duration = pt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in pt.fx.speeds ? pt.fx.speeds[n.duration] : pt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() { pt.isFunction(n.old) && n.old.call(this), n.queue && pt.dequeue(this, n.queue) }, n }, pt.fn.extend({ fadeTo: function(t, e, i, n) { return this.filter(Lt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) }, animate: function(t, e, i, n) { var s = pt.isEmptyObject(t),
                        o = pt.speed(e, i, n),
                        r = function() { var e = q(this, pt.extend({}, t), o);
                            (s || pt._data(this, "finish")) && e.stop(!0) }; return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r) }, stop: function(t, e, i) { var n = function(t) { var e = t.stop;
                        delete t.stop, e(i) }; return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() { var e = !0,
                            s = null != t && t + "queueHooks",
                            o = pt.timers,
                            r = pt._data(this); if (s) r[s] && r[s].stop && n(r[s]);
                        else
                            for (s in r) r[s] && r[s].stop && Ie.test(s) && n(r[s]); for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));!e && i || pt.dequeue(this, t) }) }, finish: function(t) { return t !== !1 && (t = t || "fx"), this.each(function() { var e, i = pt._data(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = pt.timers,
                            r = n ? n.length : 0; for (i.finish = !0, pt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1)); for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish }) } }), pt.each(["toggle", "show", "hide"], function(t, e) { var i = pt.fn[e];
                pt.fn[e] = function(t, n, s) { return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, s) } }), pt.each({ slideDown: R("show"), slideUp: R("hide"), slideToggle: R("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { pt.fn[t] = function(t, i, n) { return this.animate(e, t, i, n) } }), pt.timers = [], pt.fx.tick = function() { var t, e = pt.timers,
                    i = 0; for (Te = pt.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                e.length || pt.fx.stop(), Te = void 0 }, pt.fx.timer = function(t) { pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop() }, pt.fx.interval = 13, pt.fx.start = function() { Se || (Se = t.setInterval(pt.fx.tick, pt.fx.interval)) }, pt.fx.stop = function() { t.clearInterval(Se), Se = null }, pt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pt.fn.delay = function(e, i) { return e = pt.fx ? pt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) { var s = t.setTimeout(i, e);
                    n.stop = function() { t.clearTimeout(s) } }) },
            function() { var t, e = nt.createElement("input"),
                    i = nt.createElement("div"),
                    n = nt.createElement("select"),
                    s = n.appendChild(nt.createElement("option"));
                i = nt.createElement("div"), i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), t = i.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ut.getSetAttribute = "t" !== i.className, ut.style = /top/.test(t.getAttribute("style")), ut.hrefNormalized = "/a" === t.getAttribute("href"), ut.checkOn = !!e.value, ut.optSelected = s.selected, ut.enctype = !!nt.createElement("form").enctype, n.disabled = !0, ut.optDisabled = !s.disabled, e = nt.createElement("input"), e.setAttribute("value", ""), ut.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ut.radioValue = "t" === e.value }();
        var Ee = /\r/g,
            Pe = /[\x20\t\r\n\f]+/g;
        pt.fn.extend({ val: function(t) { var e, i, n, s = this[0]; return arguments.length ? (n = pt.isFunction(t), this.each(function(i) { var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, pt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : pt.isArray(s) && (s = pt.map(s, function(t) { return null == t ? "" : t + "" })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s)) })) : s ? (e = pt.valHooks[s.type] || pt.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(Ee, "") : null == i ? "" : i)) : void 0 } }), pt.extend({ valHooks: { option: { get: function(t) { var e = pt.find.attr(t, "value"); return null != e ? e : pt.trim(pt.text(t)).replace(Pe, " ") } }, select: { get: function(t) { for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === s) && (ut.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup"))) { if (e = pt(i).val(), o) return e;
                                r.push(e) }
                        return r }, set: function(t, e) { for (var i, n, s = t.options, o = pt.makeArray(e), r = s.length; r--;)
                            if (n = s[r], pt.inArray(pt.valHooks.option.get(n), o) > -1) try { n.selected = i = !0 } catch (t) { n.scrollHeight } else n.selected = !1;
                        return i || (t.selectedIndex = -1), s } } } }), pt.each(["radio", "checkbox"], function() { pt.valHooks[this] = { set: function(t, e) { return pt.isArray(e) ? t.checked = pt.inArray(pt(t).val(), e) > -1 : void 0 } }, ut.checkOn || (pt.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) });
        var $e, Oe, Ae = pt.expr.attrHandle,
            Me = /^(?:checked|selected)$/i,
            Ne = ut.getSetAttribute,
            He = ut.input;
        pt.fn.extend({ attr: function(t, e) { return Rt(this, pt.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { pt.removeAttr(this, t) }) } }), pt.extend({ attr: function(t, e, i) { var n, s, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, i) : (1 === o && pt.isXMLDoc(t) || (e = e.toLowerCase(), s = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Oe : $e)), void 0 !== i ? null === i ? void pt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = pt.find.attr(t, e), null == n ? void 0 : n)) }, attrHooks: { type: { set: function(t, e) { if (!ut.radioValue && "radio" === e && pt.nodeName(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e } } } }, removeAttr: function(t, e) { var i, n, s = 0,
                    o = e && e.match(Et); if (o && 1 === t.nodeType)
                    for (; i = o[s++];) n = pt.propFix[i] || i, pt.expr.match.bool.test(i) ? He && Ne || !Me.test(i) ? t[n] = !1 : t[pt.camelCase("default-" + i)] = t[n] = !1 : pt.attr(t, i, ""), t.removeAttribute(Ne ? i : n) } }), Oe = { set: function(t, e, i) { return e === !1 ? pt.removeAttr(t, i) : He && Ne || !Me.test(i) ? t.setAttribute(!Ne && pt.propFix[i] || i, i) : t[pt.camelCase("default-" + i)] = t[i] = !0, i } }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) { var i = Ae[e] || pt.find.attr;
            He && Ne || !Me.test(e) ? Ae[e] = function(t, e, n) { var s, o; return n || (o = Ae[e], Ae[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ae[e] = o), s } : Ae[e] = function(t, e, i) { return i ? void 0 : t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null } }), He && Ne || (pt.attrHooks.value = { set: function(t, e, i) { return pt.nodeName(t, "input") ? void(t.defaultValue = e) : $e && $e.set(t, e, i) } }), Ne || ($e = { set: function(t, e, i) { var n = t.getAttributeNode(i); return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0 } }, Ae.id = Ae.name = Ae.coords = function(t, e, i) { var n; return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null }, pt.valHooks.button = { get: function(t, e) { var i = t.getAttributeNode(e); return i && i.specified ? i.value : void 0 }, set: $e.set }, pt.attrHooks.contenteditable = { set: function(t, e, i) { $e.set(t, "" !== e && e, i) } }, pt.each(["width", "height"], function(t, e) { pt.attrHooks[e] = { set: function(t, i) { return "" === i ? (t.setAttribute(e, "auto"), i) : void 0 } } })), ut.style || (pt.attrHooks.style = { get: function(t) { return t.style.cssText || void 0 }, set: function(t, e) { return t.style.cssText = e + "" } });
        var ze = /^(?:input|select|textarea|button|object)$/i,
            Le = /^(?:a|area)$/i;
        pt.fn.extend({ prop: function(t, e) { return Rt(this, pt.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return t = pt.propFix[t] || t, this.each(function() { try { this[t] = void 0, delete this[t] } catch (t) {} }) } }), pt.extend({ prop: function(t, e, i) { var n, s, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, s = pt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = pt.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : ze.test(t.nodeName) || Le.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), ut.hrefNormalized || pt.each(["href", "src"], function(t, e) { pt.propHooks[e] = { get: function(t) { return t.getAttribute(e, 4) } } }), ut.optSelected || (pt.propHooks.selected = { get: function(t) { var e = t.parentNode; return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null }, set: function(t) { var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex) } }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { pt.propFix[this.toLowerCase()] = this }), ut.enctype || (pt.propFix.enctype = "encoding");
        var Re = /[\t\r\n\f]/g;
        pt.fn.extend({ addClass: function(t) { var e, i, n, s, o, r, a, l = 0; if (pt.isFunction(t)) return this.each(function(e) { pt(this).addClass(t.call(this, e, B(this))) }); if ("string" == typeof t && t)
                    for (e = t.match(Et) || []; i = this[l++];)
                        if (s = B(i), n = 1 === i.nodeType && (" " + s + " ").replace(Re, " ")) { for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            a = pt.trim(n), s !== a && pt.attr(i, "class", a) }
                return this }, removeClass: function(t) { var e, i, n, s, o, r, a, l = 0; if (pt.isFunction(t)) return this.each(function(e) { pt(this).removeClass(t.call(this, e, B(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof t && t)
                    for (e = t.match(Et) || []; i = this[l++];)
                        if (s = B(i), n = 1 === i.nodeType && (" " + s + " ").replace(Re, " ")) { for (r = 0; o = e[r++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            a = pt.trim(n), s !== a && pt.attr(i, "class", a) }
                return this }, toggleClass: function(t, e) { var i = typeof t; return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(i) { pt(this).toggleClass(t.call(this, i, B(this), e), e) }) : this.each(function() { var e, n, s, o; if ("string" === i)
                        for (n = 0, s = pt(this), o = t.match(Et) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else void 0 !== t && "boolean" !== i || (e = B(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || t === !1 ? "" : pt._data(this, "__className__") || "")) }) }, hasClass: function(t) { var e, i, n = 0; for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + B(i) + " ").replace(Re, " ").indexOf(e) > -1) return !0;
                return !1 } }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { pt.fn[e] = function(t, i) { return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), pt.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } });
        var Fe = t.location,
            We = pt.now(),
            je = /\?/,
            qe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        pt.parseJSON = function(e) { if (t.JSON && t.JSON.parse) return t.JSON.parse(e + ""); var i, n = null,
                s = pt.trim(e + ""); return s && !pt.trim(s.replace(qe, function(t, e, s, o) { return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "") })) ? Function("return " + s)() : pt.error("Invalid JSON: " + e) }, pt.parseXML = function(e) { var i, n; if (!e || "string" != typeof e) return null; try { t.DOMParser ? (n = new t.DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new t.ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e)) } catch (t) { i = void 0 } return i && i.documentElement && !i.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), i };
        var Be = /#.*$/,
            Ye = /([?&])_=[^&]*/,
            Ve = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ue = /^(?:GET|HEAD)$/,
            Ge = /^\/\//,
            Ke = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Qe = {},
            Ze = {},
            Je = "*/".concat("*"),
            ti = Fe.href,
            ei = Ke.exec(ti.toLowerCase()) || [];
        pt.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ti, type: "GET", isLocal: Xe.test(ei[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Je, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": pt.parseJSON, "text xml": pt.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(t, e) { return e ? X(X(t, pt.ajaxSettings), e) : X(pt.ajaxSettings, t) }, ajaxPrefilter: Y(Qe), ajaxTransport: Y(Ze), ajax: function(e, i) {
                function n(e, i, n, s) { var o, u, y, b, w, C = i;
                    2 !== _ && (_ = 2, l && t.clearTimeout(l), h = void 0, a = s || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (b = U(d, x, n)), b = G(d, b, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (pt.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (pt.etag[r] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, u = b.data, y = b.error, o = !y)) : (y = C, !e && C || (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (i || C) + "", o ? g.resolveWith(p, [u, C, x]) : g.rejectWith(p, [x, C, y]), x.statusCode(v), v = void 0, c && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : y]), m.fireWith(p, [x, C]), c && (f.trigger("ajaxComplete", [x, d]), --pt.active || pt.event.trigger("ajaxStop"))) } "object" == typeof e && (i = e, e = void 0), i = i || {}; var s, o, r, a, l, c, h, u, d = pt.ajaxSetup({}, i),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
                    g = pt.Deferred(),
                    m = pt.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    b = {},
                    _ = 0,
                    w = "canceled",
                    x = { readyState: 0, getResponseHeader: function(t) { var e; if (2 === _) { if (!u)
                                    for (u = {}; e = Ve.exec(a);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()] } return null == e ? null : e }, getAllResponseHeaders: function() { return 2 === _ ? a : null }, setRequestHeader: function(t, e) { var i = t.toLowerCase(); return _ || (t = b[i] = b[i] || t, y[t] = e), this }, overrideMimeType: function(t) { return _ || (d.mimeType = t), this }, statusCode: function(t) { var e; if (t)
                                if (2 > _)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else x.always(t[x.status]);
                            return this }, abort: function(t) { var e = t || w; return h && h.abort(e), n(0, e), this } }; if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || ti) + "").replace(Be, "").replace(Ge, ei[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = pt.trim(d.dataType || "*").toLowerCase().match(Et) || [""], null == d.crossDomain && (s = Ke.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === ei[1] && s[2] === ei[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (ei[3] || ("http:" === ei[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pt.param(d.data, d.traditional)), V(Qe, d, i, x), 2 === _) return x;
                c = pt.event && d.global, c && 0 === pt.active++ && pt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ue.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (je.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ye.test(r) ? r.replace(Ye, "$1_=" + We++) : r + (je.test(r) ? "&" : "?") + "_=" + We++)), d.ifModified && (pt.lastModified[r] && x.setRequestHeader("If-Modified-Since", pt.lastModified[r]), pt.etag[r] && x.setRequestHeader("If-None-Match", pt.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Je + "; q=0.01" : "") : d.accepts["*"]); for (o in d.headers) x.setRequestHeader(o, d.headers[o]); if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === _)) return x.abort();
                w = "abort"; for (o in { success: 1, error: 1, complete: 1 }) x[o](d[o]); if (h = V(Ze, d, i, x)) { if (x.readyState = 1, c && f.trigger("ajaxSend", [x, d]), 2 === _) return x;
                    d.async && d.timeout > 0 && (l = t.setTimeout(function() { x.abort("timeout") }, d.timeout)); try { _ = 1, h.send(y, n) } catch (t) { if (!(2 > _)) throw t;
                        n(-1, t) } } else n(-1, "No Transport"); return x }, getJSON: function(t, e, i) { return pt.get(t, e, i, "json") }, getScript: function(t, e) { return pt.get(t, void 0, e, "script") } }), pt.each(["get", "post"], function(t, e) { pt[e] = function(t, i, n, s) { return pt.isFunction(i) && (s = s || n, n = i, i = void 0), pt.ajax(pt.extend({ url: t, type: e, dataType: s, data: i, success: n }, pt.isPlainObject(t) && t)) } }), pt._evalUrl = function(t) { return pt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, pt.fn.extend({ wrapAll: function(t) { if (pt.isFunction(t)) return this.each(function(e) { pt(this).wrapAll(t.call(this, e)) }); if (this[0]) { var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild; return t }).append(this) } return this }, wrapInner: function(t) { return pt.isFunction(t) ? this.each(function(e) { pt(this).wrapInner(t.call(this, e)) }) : this.each(function() { var e = pt(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t) }) }, wrap: function(t) { var e = pt.isFunction(t); return this.each(function(i) { pt(this).wrapAll(e ? t.call(this, i) : t) }) }, unwrap: function() { return this.parent().each(function() { pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes) }).end() } }), pt.expr.filters.hidden = function(t) { return ut.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Q(t) }, pt.expr.filters.visible = function(t) { return !pt.expr.filters.hidden(t) };
        var ii = /%20/g,
            ni = /\[\]$/,
            si = /\r?\n/g,
            oi = /^(?:submit|button|image|reset|file)$/i,
            ri = /^(?:input|select|textarea|keygen)/i;
        pt.param = function(t, e) { var i, n = [],
                s = function(t, e) { e = pt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) }; if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() { s(this.name, this.value) });
            else
                for (i in t) Z(i, t[i], e, s); return n.join("&").replace(ii, "+") }, pt.fn.extend({ serialize: function() { return pt.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = pt.prop(this, "elements"); return t ? pt.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !pt(this).is(":disabled") && ri.test(this.nodeName) && !oi.test(t) && (this.checked || !Ft.test(t)) }).map(function(t, e) { var i = pt(this).val(); return null == i ? null : pt.isArray(i) ? pt.map(i, function(t) { return { name: e.name, value: t.replace(si, "\r\n") } }) : { name: e.name, value: i.replace(si, "\r\n") } }).get() } }), pt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() { return this.isLocal ? tt() : nt.documentMode > 8 ? J() : /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || tt() } : J;
        var ai = 0,
            li = {},
            ci = pt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() { for (var t in li) li[t](void 0, !0) }), ut.cors = !!ci && "withCredentials" in ci, ci = ut.ajax = !!ci, ci && pt.ajaxTransport(function(e) { if (!e.crossDomain || ut.cors) { var i; return { send: function(n, s) { var o, r = e.xhr(),
                            a = ++ai; if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"); for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(e.hasContent && e.data || null), i = function(t, n) { var o, l, c; if (i && (n || 4 === r.readyState))
                                if (delete li[a], i = void 0, r.onreadystatechange = pt.noop, n) 4 !== r.readyState && r.abort();
                                else { c = {}, o = r.status, "string" == typeof r.responseText && (c.text = r.responseText); try { l = r.statusText } catch (t) { l = "" }
                                    o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404 }
                            c && s(o, l, c, r.getAllResponseHeaders()) }, e.async ? 4 === r.readyState ? t.setTimeout(i) : r.onreadystatechange = li[a] = i : i() }, abort: function() { i && i(void 0, !0) } } } }), pt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return pt.globalEval(t), t } } }), pt.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1) }), pt.ajaxTransport("script", function(t) { if (t.crossDomain) { var e, i = nt.head || pt("head")[0] || nt.documentElement; return { send: function(n, s) { e = nt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success")) }, i.insertBefore(e, i.firstChild) }, abort: function() { e && e.onload(void 0, !0) } } } });
        var hi = [],
            ui = /(=)\?(?=&|$)|\?\?/;
        pt.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = hi.pop() || pt.expando + "_" + We++; return this[t] = !0, t } }), pt.ajaxPrefilter("json jsonp", function(e, i, n) { var s, o, r, a = e.jsonp !== !1 && (ui.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ui.test(e.data) && "data"); return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ui, "$1" + s) : e.jsonp !== !1 && (e.url += (je.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() { return r || pt.error(s + " was not called"), r[0] }, e.dataTypes[0] = "json", o = t[s], t[s] = function() { r = arguments }, n.always(function() { void 0 === o ? pt(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, hi.push(s)), r && pt.isFunction(o) && o(r[0]), r = o = void 0 }), "script") : void 0 }), pt.parseHTML = function(t, e, i) { if (!t || "string" != typeof t) return null; "boolean" == typeof e && (i = e, e = !1), e = e || nt; var n = xt.exec(t),
                s = !i && []; return n ? [e.createElement(n[1])] : (n = v([t], e, s), s && s.length && pt(s).remove(), pt.merge([], n.childNodes)) };
        var di = pt.fn.load;
        pt.fn.load = function(t, e, i) { if ("string" != typeof t && di) return di.apply(this, arguments); var n, s, o, r = this,
                a = t.indexOf(" "); return a > -1 && (n = pt.trim(t.slice(a, t.length)), t = t.slice(0, a)), pt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && pt.ajax({ url: t, type: s || "GET", dataType: "html", data: e }).done(function(t) { o = arguments, r.html(n ? pt("<div>").append(pt.parseHTML(t)).find(n) : t) }).always(i && function(t, e) { r.each(function() { i.apply(this, o || [t.responseText, e, t]) }) }), this }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { pt.fn[e] = function(t) { return this.on(e, t) } }), pt.expr.filters.animated = function(t) { return pt.grep(pt.timers, function(e) { return t === e.elem }).length }, pt.offset = { setOffset: function(t, e, i) { var n, s, o, r, a, l, c, h = pt.css(t, "position"),
                    u = pt(t),
                    d = {}; "static" === h && (t.style.position = "relative"), a = u.offset(), o = pt.css(t, "top"), l = pt.css(t, "left"), c = ("absolute" === h || "fixed" === h) && pt.inArray("auto", [o, l]) > -1, c ? (n = u.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : u.css(d) } }, pt.fn.extend({
            offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { pt.offset.setOffset(this, t, e) }); var e, i, n = { top: 0, left: 0 },
                    s = this[0],
                    o = s && s.ownerDocument; return o ? (e = o.documentElement, pt.contains(e, s) ? ("undefined" != typeof s.getBoundingClientRect && (n = s.getBoundingClientRect()), i = et(o), { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) }) : n) : void 0 },
            position: function() {
                if (this[0]) {
                    var t, e, i = { top: 0, left: 0 },
                        n = this[0];
                    return "fixed" === pt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (i = t.offset()), i.top += pt.css(t[0], "borderTopWidth", !0), i.left += pt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - pt.css(n, "marginTop", !0),
                        left: e.left - i.left - pt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent; return t || pe }) }
        }), pt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) { var i = /Y/.test(e);
            pt.fn[t] = function(n) { return Rt(this, function(t, n, s) { var o = et(t); return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? pt(o).scrollLeft() : s, i ? s : pt(o).scrollTop()) : t[n] = s) }, t, n, arguments.length, null) } }), pt.each(["top", "left"], function(t, e) { pt.cssHooks[e] = $(ut.pixelPosition, function(t, i) { return i ? (i = ge(t, e), ue.test(i) ? pt(t).position()[e] + "px" : i) : void 0 }) }), pt.each({ Height: "height", Width: "width" }, function(t, e) { pt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) { pt.fn[n] = function(n, s) { var o = arguments.length && (i || "boolean" != typeof n),
                        r = i || (n === !0 || s === !0 ? "margin" : "border"); return Rt(this, function(e, i, n) { var s; return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? pt.css(e, i, r) : pt.style(e, i, n, r) }, e, o ? n : void 0, o, null) } }) }), pt.fn.extend({ bind: function(t, e, i) { return this.on(t, null, e, i) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, i, n) { return this.on(e, t, i, n) }, undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } }), pt.fn.size = function() { return this.length }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return pt });
        var pi = t.jQuery,
            fi = t.$;
        return pt.noConflict = function(e) { return t.$ === pt && (t.$ = fi), e && t.jQuery === pt && (t.jQuery = pi), pt }, e || (t.jQuery = t.$ = pt), pt
    }), ! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
        function e(t) { for (var e = t.css("visibility");
                "inherit" === e;) t = t.parent(), e = t.css("visibility"); return "hidden" !== e }

        function i(t) { for (var e, i; t.length && t[0] !== document;) { if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent() } return 0 }

        function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

        function s(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function() { t(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, o) }

        function o() { t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).addClass("ui-datepicker-next-hover")) }

        function r(e, i) { t.extend(e, i); for (var n in i) null == i[n] && (e[n] = i[n]); return e }

        function a(t) { return function() { var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change") } }
        t.ui = t.ui || {};
        var l = (t.ui.version = "1.12.0", 0),
            c = Array.prototype.slice;
        t.cleanData = function(e) { return function(i) { var n, s, o; for (o = 0; null != (s = i[o]); o++) try { n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove") } catch (t) {}
                e(i) } }(t.cleanData), t.widget = function(e, i, n) { var s, o, r, a = {},
                l = e.split(".")[0];
            e = e.split(".")[1]; var c = l + "-" + e; return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function(e) { return !!t.data(e, c) }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) { return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e) }, t.extend(o, s, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function(e, n) { return t.isFunction(n) ? void(a[e] = function() {
                    function t() { return i.prototype[e].apply(this, arguments) }

                    function s(t) { return i.prototype[e].apply(this, t) } return function() { var e, i = this._super,
                            o = this._superApply; return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e } }()) : void(a[e] = n) }), o.prototype = t.widget.extend(r, { widgetEventPrefix: s ? r.widgetEventPrefix || e : e }, a, { constructor: o, namespace: l, widgetName: e, widgetFullName: c }), s ? (t.each(s._childConstructors, function(e, i) { var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto) }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o }, t.widget.extend = function(e) { for (var i, n, s = c.call(arguments, 1), o = 0, r = s.length; o < r; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n); return e }, t.widget.bridge = function(e, i) { var n = i.prototype.widgetFullName || e;
            t.fn[e] = function(s) { var o = "string" == typeof s,
                    r = c.call(arguments, 1),
                    a = this; return o ? this.each(function() { var i, o = t.data(this, n); return "instance" === s ? (a = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r), i !== o && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'") }) : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))), this.each(function() { var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this)) })), a } }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function(e, i) { i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === i && this.destroy() } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: function() { return {} }, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function() { var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace) }, _destroy: t.noop, widget: function() { return this.element }, option: function(e, i) { var n, s, o, r = e; if (0 === arguments.length) return t.widget.extend({}, this.options); if ("string" == typeof e)
                    if (r = {}, n = e.split("."), e = n.shift(), n.length) { for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]]; if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i } else { if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i }
                return this._setOptions(r), this }, _setOptions: function(t) { var e; for (e in t) this._setOption(e, t[e]); return this }, _setOption: function(t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this }, _setOptionClasses: function(e) { var i, n, s; for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({ element: n, keys: i, classes: e, add: !0 }))) }, _setOptionDisabled: function(t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) }, enable: function() { return this._setOptions({ disabled: !1 }) }, disable: function() { return this._setOptions({ disabled: !0 }) }, _classes: function(e) {
                function i(i, o) { var r, a; for (a = 0; a < i.length; a++) r = s.classesElementLookup[i[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), s.classesElementLookup[i[a]] = r, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]]) } var n = [],
                    s = this; return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ") }, _removeClass: function(t, e, i) { return this._toggleClass(t, e, i, !1) }, _addClass: function(t, e, i) { return this._toggleClass(t, e, i, !0) }, _toggleClass: function(t, e, i, n) { n = "boolean" == typeof n ? n : i; var s = "string" == typeof t || null === t,
                    o = { extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n }; return o.element.toggleClass(this._classes(o), n), this }, _on: function(e, i, n) { var s, o = this; "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
                    function a() { if (e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments) } "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++); var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        h = l[2];
                    h ? s.on(c, h, a) : i.on(c, a) }) }, _off: function(e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) }, _delay: function(t, e) {
                function i() { return ("string" == typeof t ? n[t] : t).apply(n, arguments) } var n = this; return setTimeout(i, e || 0) }, _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) }, _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) }, _trigger: function(e, i, n) { var s, o, r = this.options[e]; if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]); return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented()) } }, t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) { t.Widget.prototype["_" + e] = function(n, s, o) { "string" == typeof s && (s = { effect: s }); var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = { duration: s }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) { t(this)[e](), o && o.call(n[0]), i() }) } }), t.widget, ! function() {
            function e(t, e, i) { return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)] }

            function i(e, i) { return parseInt(t.css(e, i), 10) || 0 }

            function n(e) { var i = e[0]; return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() } } var s, o, r = Math.max,
                a = Math.abs,
                l = Math.round,
                c = /left|center|right/,
                h = /top|center|bottom/,
                u = /[\+\-]\d+(\.[\d]+)?%?/,
                d = /^\w+/,
                p = /%$/,
                f = t.fn.position;
            o = function() { var e = t("<div>").css("position", "absolute").appendTo("body").offset({ top: 1.5, left: 1.5 }),
                    i = 1.5 === e.offset().top; return e.remove(), o = function() { return i }, i }, t.position = { scrollbarWidth: function() { if (void 0 !== s) return s; var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0]; return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i }, getScrollInfo: function(e) { var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                        o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight; return { width: o ? t.position.scrollbarWidth() : 0, height: s ? t.position.scrollbarWidth() : 0 } }, getWithinInfo: function(e) { var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType,
                        o = !n && !s; return { element: i, isWindow: n, isDocument: s, offset: o ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() } } }, t.fn.position = function(s) { if (!s || !s.of) return f.apply(this, arguments);
                s = t.extend({}, s); var p, g, m, v, y, b, _ = t(s.of),
                    w = t.position.getWithinInfo(s.within),
                    x = t.position.getScrollInfo(w),
                    C = (s.collision || "flip").split(" "),
                    k = {}; return b = n(_), _[0].preventDefault && (s.at = "left top"), g = b.width, m = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function() { var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]] }), 1 === C.length && (C[1] = C[0]), "right" === s.at[0] ? y.left += g : "center" === s.at[0] && (y.left += g / 2), "bottom" === s.at[1] ? y.top += m : "center" === s.at[1] && (y.top += m / 2), p = e(k.at, g, m), y.left += p[0], y.top += p[1], this.each(function() { var n, c, h = t(this),
                        u = h.outerWidth(),
                        d = h.outerHeight(),
                        f = i(this, "marginLeft"),
                        b = i(this, "marginTop"),
                        T = u + f + i(this, "marginRight") + x.width,
                        S = d + b + i(this, "marginBottom") + x.height,
                        D = t.extend({}, y),
                        I = e(k.my, h.outerWidth(), h.outerHeight()); "right" === s.my[0] ? D.left -= u : "center" === s.my[0] && (D.left -= u / 2), "bottom" === s.my[1] ? D.top -= d : "center" === s.my[1] && (D.top -= d / 2), D.left += I[0], D.top += I[1], o() || (D.left = l(D.left), D.top = l(D.top)), n = { marginLeft: f, marginTop: b }, t.each(["left", "top"], function(e, i) { t.ui.position[C[e]] && t.ui.position[C[e]][i](D, { targetWidth: g, targetHeight: m, elemWidth: u, elemHeight: d, collisionPosition: n, collisionWidth: T, collisionHeight: S, offset: [p[0] + I[0], p[1] + I[1]], my: s.my, at: s.at, within: w, elem: h }) }), s.using && (c = function(t) { var e = v.left - D.left,
                            i = e + g - u,
                            n = v.top - D.top,
                            o = n + m - d,
                            l = { target: { element: _, left: v.left, top: v.top, width: g, height: m }, element: { element: h, left: D.left, top: D.top, width: u, height: d }, horizontal: i < 0 ? "left" : e > 0 ? "right" : "center", vertical: o < 0 ? "top" : n > 0 ? "bottom" : "middle" };
                        g < u && a(e + i) < g && (l.horizontal = "center"), m < d && a(n + o) < m && (l.vertical = "middle"), r(a(e), a(i)) > r(a(n), a(o)) ? l.important = "horizontal" : l.important = "vertical", s.using.call(this, t, l) }), h.offset(t.extend(D, { using: c })) }) }, t.ui.position = { fit: { left: function(t, e) { var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            o = n.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            l = s - a,
                            c = a + e.collisionWidth - o - s;
                        e.collisionWidth > o ? l > 0 && c <= 0 ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : c > 0 && l <= 0 ? t.left = s : l > c ? t.left = s + o - e.collisionWidth : t.left = s : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = r(t.left - a, t.left) }, top: function(t, e) { var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            o = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            l = s - a,
                            c = a + e.collisionHeight - o - s;
                        e.collisionHeight > o ? l > 0 && c <= 0 ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : c > 0 && l <= 0 ? t.top = s : l > c ? t.top = s + o - e.collisionHeight : t.top = s : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = r(t.top - a, t.top) } }, flip: { left: function(t, e) { var i, n, s = e.within,
                            o = s.offset.left + s.scrollLeft,
                            r = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            c = t.left - e.collisionPosition.marginLeft,
                            h = c - l,
                            u = c + e.collisionWidth - r - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        h < 0 ? (i = t.left + d + p + f + e.collisionWidth - r - o, (i < 0 || i < a(h)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < u) && (t.left += d + p + f)) }, top: function(t, e) { var i, n, s = e.within,
                            o = s.offset.top + s.scrollTop,
                            r = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            c = t.top - e.collisionPosition.marginTop,
                            h = c - l,
                            u = c + e.collisionHeight - r - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            g = -2 * e.offset[1];
                        h < 0 ? (n = t.top + p + f + g + e.collisionHeight - r - o, (n < 0 || n < a(h)) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, (i > 0 || a(i) < u) && (t.top += p + f + g)) } }, flipfit: { left: function() { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function() { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } } } }();
        var h = (t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function(e) { return function(i) { return !!t.data(i, e) } }) : function(e, i, n) { return !!t.data(e, n[3]) } }), t.fn.extend({ disableSelection: function() { var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(t + ".ui-disableSelection", function(t) { t.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } }), "ui-effects-"),
            u = "ui-effects-style",
            d = "ui-effects-animated",
            p = t;
        t.effects = { effect: {} },
            function(t, e) {
                function i(t, e, i) { var n = u[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t) }

                function n(e) { var i = c(),
                        n = i._rgba = []; return e = e.toLowerCase(), f(l, function(t, s) { var o, r = s.re.exec(e),
                            a = r && s.parse(r),
                            l = s.space || "rgba"; if (a) return o = i[l](a), i[h[l].cache] = o[h[l].cache], n = i._rgba = o._rgba, !1 }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e] }

                function s(t, e, i) { return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t } var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    a = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }],
                    c = t.Color = function(e, i, n, s) { return new t.Color.fn.parse(e, i, n, s) },
                    h = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                    u = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                    d = c.support = {},
                    p = t("<p>")[0],
                    f = t.each;
                p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(h, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), c.fn = t.extend(c.prototype, { parse: function(s, r, a, l) { if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(r), r = e); var u = this,
                            d = t.type(s),
                            p = this._rgba = []; return r !== e && (s = [s, r, a, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(h.rgba.props, function(t, e) { p[e.idx] = i(s[e.idx], e) }), this) : "object" === d ? (s instanceof c ? f(h, function(t, e) { s[e.cache] && (u[e.cache] = s[e.cache].slice()) }) : f(h, function(e, n) { var o = n.cache;
                            f(n.props, function(t, e) { if (!u[o] && n.to) { if ("alpha" === t || null == s[t]) return;
                                    u[o] = n.to(u._rgba) }
                                u[o][e.idx] = i(s[t], e, !0) }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o]))) }), this) : void 0 }, is: function(t) { var e = c(t),
                            i = !0,
                            n = this; return f(h, function(t, s) { var o, r = e[s.cache]; return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) { if (null != r[e.idx]) return i = r[e.idx] === o[e.idx] })), i }), i }, _space: function() { var t = [],
                            e = this; return f(h, function(i, n) { e[n.cache] && t.push(i) }), t.pop() }, transition: function(t, e) { var n = c(t),
                            s = n._space(),
                            o = h[s],
                            r = 0 === this.alpha() ? c("transparent") : this,
                            a = r[o.cache] || o.to(r._rgba),
                            l = a.slice(); return n = n[o.cache], f(o.props, function(t, s) { var o = s.idx,
                                r = a[o],
                                c = n[o],
                                h = u[s.type] || {};
                            null !== c && (null === r ? l[o] = c : (h.mod && (c - r > h.mod / 2 ? r += h.mod : r - c > h.mod / 2 && (r -= h.mod)), l[o] = i((c - r) * e + r, s))) }), this[s](l) }, blend: function(e) { if (1 === this._rgba[3]) return this; var i = this._rgba.slice(),
                            n = i.pop(),
                            s = c(e)._rgba; return c(t.map(i, function(t, e) { return (1 - n) * s[e] + n * t })) }, toRgbaString: function() { var e = "rgba(",
                            i = t.map(this._rgba, function(t, e) { return null == t ? e > 2 ? 1 : 0 : t }); return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")" }, toHslaString: function() { var e = "hsla(",
                            i = t.map(this.hsla(), function(t, e) { return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t }); return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")" }, toHexString: function(e) { var i = this._rgba.slice(),
                            n = i.pop(); return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) { return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t }).join("") }, toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), c.fn.parse.prototype = c.fn, h.hsla.to = function(t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        r = t[3],
                        a = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        c = a - l,
                        h = a + l,
                        u = .5 * h; return e = l === a ? 0 : n === a ? 60 * (s - o) / c + 360 : s === a ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === c ? 0 : u <= .5 ? c / h : c / (2 - h), [Math.round(e) % 360, i, u, null == r ? 1 : r] }, h.hsla.from = function(t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = n <= .5 ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r; return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o] }, f(h, function(n, s) { var o = s.props,
                        r = s.cache,
                        l = s.to,
                        h = s.from;
                    c.fn[n] = function(n) { if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice(); var s, a = t.type(n),
                            u = "array" === a || "object" === a ? n : arguments,
                            d = this[r].slice(); return f(o, function(t, e) { var n = u["object" === a ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e) }), h ? (s = c(h(d)), s[r] = d, s) : c(d) }, f(o, function(e, i) { c.fn[e] || (c.fn[e] = function(s) { var o, r = t.type(s),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                c = this[l](),
                                h = c[i.idx]; return "undefined" === r ? h : ("function" === r && (s = s.call(this, h), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s), o && (s = h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = s, this[l](c))) }) }) }), c.hook = function(e) { var i = e.split(" ");
                    f(i, function(e, i) { t.cssHooks[i] = { set: function(e, s) { var o, r, a = ""; if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) { if (s = c(o || s), !d.rgba && 1 !== s._rgba[3]) { for (r = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === a || "transparent" === a) && r && r.style;) try { a = t.css(r, "backgroundColor"), r = r.parentNode } catch (t) {}
                                        s = s.blend(a && "transparent" !== a ? a : "_default") }
                                    s = s.toRgbaString() } try { e.style[i] = s } catch (t) {} } }, t.fx.step[i] = function(e) { e.colorInit || (e.start = c(e.elem, i), e.end = c(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) } }) }, c.hook(r), t.cssHooks.borderColor = { expand: function(t) { var e = {}; return f(["Top", "Right", "Bottom", "Left"], function(i, n) { e["border" + n + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(p),
            function() {
                function e(e) { var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {}; if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]); return o }

                function i(e, i) { var n, o, r = {}; for (n in i) o = i[n], e[n] !== o && (s[n] || !t.fx.step[n] && isNaN(parseFloat(o)) || (r[n] = o)); return r } var n = ["add", "remove", "toggle"],
                    s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) { t.fx.step[i] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0) } }), t.fn.addBack || (t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function(s, o, r, a) { var l = t.speed(o, r, a); return this.queue(function() { var o, r = t(this),
                            a = r.attr("class") || "",
                            c = l.children ? r.find("*").addBack() : r;
                        c = c.map(function() { var i = t(this); return { el: i, start: e(this) } }), o = function() { t.each(n, function(t, e) { s[e] && r[e + "Class"](s[e]) }) }, o(), c = c.map(function() { return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this }), r.attr("class", a), c = c.map(function() { var e = this,
                                i = t.Deferred(),
                                n = t.extend({}, l, { queue: !1, complete: function() { i.resolve(e) } }); return this.el.animate(this.diff, n), i.promise() }), t.when.apply(t, c.get()).done(function() { o(), t.each(arguments, function() { var e = this.el;
                                t.each(this.diff, function(t) { e.css(t, "") }) }), l.complete.call(r[0]) }) }) }, t.fn.extend({ addClass: function(e) { return function(i, n, s, o) { return n ? t.effects.animateClass.call(this, { add: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function(e) { return function(i, n, s, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function(e) { return function(i, n, s, o, r) { return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? { add: i } : { remove: i }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, n, s, o) } }(t.fn.toggleClass), switchClass: function(e, i, n, s, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, n, s, o) } }) }(),
            function() {
                function e(e, i, n, s) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e }

                function i(e) { return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects.effect[e] || !!t.isFunction(e) || "object" == typeof e && !e.effect }

                function n(t, e) { var i = e.outerWidth(),
                        n = e.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                        o = s.exec(t) || ["", 0, i, n, 0]; return { top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? n : parseFloat(o[3]), left: parseFloat(o[4]) || 0 } }
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) { return function(i) { return !!t(i).data(d) || e(i) } }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, { save: function(t, e) { for (var i = 0, n = e.length; i < n; i++) null !== e[i] && t.data(h + e[i], t[0].style[e[i]]) }, restore: function(t, e) { for (var i, n = 0, s = e.length; n < s; n++) null !== e[n] && (i = t.data(h + e[n]), t.css(e[n], i)) }, setMode: function(t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e }, createWrapper: function(e) { if (e.parent().is(".ui-effects-wrapper")) return e.parent(); var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                            s = { width: e.width(), height: e.height() },
                            o = document.activeElement; try { o.id } catch (t) { o = document.body } return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function(t, n) { i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(s), n.css(i).show() }, removeWrapper: function(e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e } }), t.extend(t.effects, {
                    version: "1.12.0",
                    define: function(e, i, n) { return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n },
                    scaledDimensions: function(t, e, i) { if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                            s = "vertical" !== i ? (e || 100) / 100 : 1; return { height: t.height() * s, width: t.width() * n, outerHeight: t.outerHeight() * s, outerWidth: t.outerWidth() * n } },
                    clipToBox: function(t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } },
                    unshift: function(t, e, i) { var n = t.queue();
                        e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue() },
                    saveStyle: function(t) { t.data(u, t[0].style.cssText) },
                    restoreStyle: function(t) { t[0].style.cssText = t.data(u) || "", t.removeData(u) },
                    mode: function(t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e },
                    getBaseline: function(t, e) { var i, n; switch (t[0]) {
                            case "top":
                                i = 0; break;
                            case "middle":
                                i = .5; break;
                            case "bottom":
                                i = 1; break;
                            default:
                                i = t[0] / e.height } switch (t[1]) {
                            case "left":
                                n = 0; break;
                            case "center":
                                n = .5; break;
                            case "right":
                                n = 1; break;
                            default:
                                n = t[1] / e.width } return { x: n, y: i } },
                    createPlaceholder: function(e) {
                        var i, n = e.css("position"),
                            s = e.position();
                        return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute",
                            i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(h + "placeholder", i)), e.css({ position: n, left: s.left, top: s.top }), i
                    },
                    removePlaceholder: function(t) { var e = h + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e)) },
                    cleanUp: function(e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) },
                    setTransition: function(e, i, n, s) { return s = s || {}, t.each(i, function(t, i) { var o = e.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1]) }), s }
                }), t.fn.extend({ effect: function() {
                        function i(e) {
                            function i() { a.removeData(d), t.effects.cleanUp(a), "hide" === n.mode && a.hide(), r() }

                            function r() { t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e() } var a = t(this);
                            n.mode = h.shift(), t.uiBackCompat === !1 || o ? "none" === n.mode ? (a[c](), r()) : s.call(a[0], n, i) : (a.is(":hidden") ? "hide" === c : "show" === c) ? (a[c](), r()) : s.call(a[0], n, r) } var n = e.apply(this, arguments),
                            s = t.effects.effect[n.effect],
                            o = s.mode,
                            r = n.queue,
                            a = r || "fx",
                            l = n.complete,
                            c = n.mode,
                            h = [],
                            u = function(e) { var i = t(this),
                                    n = t.effects.mode(i, c) || o;
                                i.data(d, !0), h.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e() }; return t.fx.off || !s ? c ? this[c](n.duration, l) : this.each(function() { l && l.call(this) }) : r === !1 ? this.each(u).each(i) : this.queue(a, u).queue(a, i) }, show: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "show", this.effect.call(this, s) } }(t.fn.show), hide: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "hide", this.effect.call(this, s) } }(t.fn.hide), toggle: function(t) { return function(n) { if (i(n) || "boolean" == typeof n) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "toggle", this.effect.call(this, s) } }(t.fn.toggle), cssUnit: function(e) { var i = this.css(e),
                            n = []; return t.each(["em", "px", "%", "pt"], function(t, e) { i.indexOf(e) > 0 && (n = [parseFloat(i), e]) }), n }, cssClip: function(t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this) }, transfer: function(e, i) { var n = t(this),
                            s = t(e.to),
                            o = "fixed" === s.css("position"),
                            r = t("body"),
                            a = o ? r.scrollTop() : 0,
                            l = o ? r.scrollLeft() : 0,
                            c = s.offset(),
                            h = { top: c.top - a, left: c.left - l, height: s.innerHeight(), width: s.innerWidth() },
                            u = n.offset(),
                            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: u.top - a, left: u.left - l, height: n.innerHeight(), width: n.innerWidth(), position: o ? "fixed" : "absolute" }).animate(h, e.duration, e.easing, function() { d.remove(), t.isFunction(i) && i() }) } }), t.fx.step.clip = function(e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) }
            }(),
            function() { var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) { e[i] = function(e) { return Math.pow(e, t + 2) } }), t.extend(e, { Sine: function(t) { return 1 - Math.cos(t * Math.PI / 2) }, Circ: function(t) { return 1 - Math.sqrt(1 - t * t) }, Elastic: function(t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) }, Back: function(t) { return t * t * (3 * t - 2) }, Bounce: function(t) { for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2) } }), t.each(e, function(e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function(t) { return t < .5 ? i(2 * t) / 2 : 1 - i(t * -2 + 2) / 2 } }) }();
        var f, f = t.effects;
        t.effects.define("blind", "hide", function(e, i) { var n = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
                s = t(this),
                o = e.direction || "up",
                r = s.cssClip(),
                a = { clip: t.extend({}, r) },
                l = t.effects.createPlaceholder(s);
            a.clip[n[o][0]] = a.clip[n[o][1]], "show" === e.mode && (s.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), s.animate(a, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("bounce", function(e, i) { var n, s, o, r = t(this),
                a = e.mode,
                l = "hide" === a,
                c = "show" === a,
                h = e.direction || "up",
                u = e.distance,
                d = e.times || 5,
                p = 2 * d + (c || l ? 1 : 0),
                f = e.duration / p,
                g = e.easing,
                m = "up" === h || "down" === h ? "top" : "left",
                v = "up" === h || "left" === h,
                y = 0,
                b = r.queue().length; for (t.effects.createPlaceholder(r), o = r.css(m), u || (u = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), c && (s = { opacity: 1 }, s[m] = o, r.css("opacity", 0).css(m, v ? 2 * -u : 2 * u).animate(s, f, g)), l && (u /= Math.pow(2, d - 1)), s = {}, s[m] = o; y < d; y++) n = {}, n[m] = (v ? "-=" : "+=") + u, r.animate(n, f, g).animate(s, f, g), u = l ? 2 * u : u / 2;
            l && (n = { opacity: 0 }, n[m] = (v ? "-=" : "+=") + u, r.animate(n, f, g)), r.queue(i), t.effects.unshift(r, b, p + 1) }), t.effects.define("clip", "hide", function(e, i) { var n, s = {},
                o = t(this),
                r = e.direction || "vertical",
                a = "both" === r,
                l = a || "horizontal" === r,
                c = a || "vertical" === r;
            n = o.cssClip(), s.clip = { top: c ? (n.bottom - n.top) / 2 : n.top, right: l ? (n.right - n.left) / 2 : n.right, bottom: c ? (n.bottom - n.top) / 2 : n.bottom, left: l ? (n.right - n.left) / 2 : n.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("drop", "hide", function(e, i) { var n, s = t(this),
                o = e.mode,
                r = "show" === o,
                a = e.direction || "left",
                l = "up" === a || "down" === a ? "top" : "left",
                c = "up" === a || "left" === a ? "-=" : "+=",
                h = "+=" === c ? "-=" : "+=",
                u = { opacity: 0 };
            t.effects.createPlaceholder(s), n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, u[l] = c + n, r && (s.css(u), u[l] = h + n, u.opacity = 1), s.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("explode", "hide", function(e, i) {
            function n() { b.push(this), b.length === u * d && s() }

            function s() { p.css({ visibility: "visible" }), t(b).remove(), i() } var o, r, a, l, c, h, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = u,
                p = t(this),
                f = e.mode,
                g = "show" === f,
                m = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / d),
                y = Math.ceil(p.outerHeight() / u),
                b = []; for (o = 0; o < u; o++)
                for (l = m.top + o * y, h = o - (u - 1) / 2, r = 0; r < d; r++) a = m.left + r * v, c = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -r * v, top: -o * y }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: y, left: a + (g ? c * v : 0), top: l + (g ? h * y : 0), opacity: g ? 0 : 1 }).animate({ left: a + (g ? 0 : c * v), top: l + (g ? 0 : h * y), opacity: g ? 1 : 0 }, e.duration || 500, e.easing, n) }), t.effects.define("fade", "toggle", function(e, i) { var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({ opacity: n ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("fold", "hide", function(e, i) { var n = t(this),
                s = e.mode,
                o = "show" === s,
                r = "hide" === s,
                a = e.size || 15,
                l = /([0-9]+)%/.exec(a),
                c = !!e.horizFirst,
                h = c ? ["right", "bottom"] : ["bottom", "right"],
                u = e.duration / 2,
                d = t.effects.createPlaceholder(n),
                p = n.cssClip(),
                f = { clip: t.extend({}, p) },
                g = { clip: t.extend({}, p) },
                m = [p[h[0]], p[h[1]]],
                v = n.queue().length;
            l && (a = parseInt(l[1], 10) / 100 * m[r ? 0 : 1]), f.clip[h[0]] = a, g.clip[h[0]] = a, g.clip[h[1]] = 0, o && (n.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), n.queue(function(i) { d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i() }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(n, v, 4) }), t.effects.define("highlight", "show", function(e, i) { var n = t(this),
                s = { backgroundColor: n.css("backgroundColor") }; "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("size", function(e, i) { var n, s, o, r = t(this),
                a = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = e.mode,
                u = "effect" !== h,
                d = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = r.css("position"),
                g = r.position(),
                m = t.effects.scaledDimensions(r),
                v = e.from || m,
                y = e.to || t.effects.scaledDimensions(r, 0);
            t.effects.createPlaceholder(r), "show" === h && (o = v, v = y, y = o), s = { from: { y: v.height / m.height, x: v.width / m.width }, to: { y: y.height / m.height, x: y.width / m.width } }, "box" !== d && "both" !== d || (s.from.y !== s.to.y && (v = t.effects.setTransition(r, l, s.from.y, v), y = t.effects.setTransition(r, l, s.to.y, y)), s.from.x !== s.to.x && (v = t.effects.setTransition(r, c, s.from.x, v), y = t.effects.setTransition(r, c, s.to.x, y))), "content" !== d && "both" !== d || s.from.y !== s.to.y && (v = t.effects.setTransition(r, a, s.from.y, v), y = t.effects.setTransition(r, a, s.to.y, y)), p && (n = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * n.y + g.top, v.left = (m.outerWidth - v.outerWidth) * n.x + g.left, y.top = (m.outerHeight - y.outerHeight) * n.y + g.top, y.left = (m.outerWidth - y.outerWidth) * n.x + g.left), r.css(v), "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(a), c = c.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() { var i = t(this),
                    n = t.effects.scaledDimensions(i),
                    o = { height: n.height * s.from.y, width: n.width * s.from.x, outerHeight: n.outerHeight * s.from.y, outerWidth: n.outerWidth * s.from.x },
                    r = { height: n.height * s.to.y, width: n.width * s.to.x, outerHeight: n.height * s.to.y, outerWidth: n.width * s.to.x };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), r = t.effects.setTransition(i, l, s.to.y, r)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, c, s.from.x, o), r = t.effects.setTransition(i, c, s.to.x, r)), u && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, function() { u && t.effects.restoreStyle(i) }) })), r.animate(y, { queue: !1, duration: e.duration, easing: e.easing, complete: function() { var e = r.offset();
                    0 === y.opacity && r.css("opacity", v.opacity), u || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i() } }) }), t.effects.define("scale", function(e, i) { var n = t(this),
                s = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                r = t.extend(!0, { from: t.effects.scaledDimensions(n), to: t.effects.scaledDimensions(n, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
            e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i) }), t.effects.define("puff", "hide", function(e, i) { var n = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
            t.effects.effect.scale.call(this, n, i) }), t.effects.define("pulsate", "show", function(e, i) { var n = t(this),
                s = e.mode,
                o = "show" === s,
                r = "hide" === s,
                a = o || r,
                l = 2 * (e.times || 5) + (a ? 1 : 0),
                c = e.duration / l,
                h = 0,
                u = 1,
                d = n.queue().length; for (!o && n.is(":visible") || (n.css("opacity", 0).show(), h = 1); u < l; u++) n.animate({ opacity: h }, c, e.easing), h = 1 - h;
            n.animate({ opacity: h }, c, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1) }), t.effects.define("shake", function(e, i) { var n = 1,
                s = t(this),
                o = e.direction || "left",
                r = e.distance || 20,
                a = e.times || 3,
                l = 2 * a + 1,
                c = Math.round(e.duration / l),
                h = "up" === o || "down" === o ? "top" : "left",
                u = "up" === o || "left" === o,
                d = {},
                p = {},
                f = {},
                g = s.queue().length; for (t.effects.createPlaceholder(s), d[h] = (u ? "-=" : "+=") + r, p[h] = (u ? "+=" : "-=") + 2 * r, f[h] = (u ? "-=" : "+=") + 2 * r, s.animate(d, c, e.easing); n < a; n++) s.animate(p, c, e.easing).animate(f, c, e.easing);
            s.animate(p, c, e.easing).animate(d, c / 2, e.easing).queue(i), t.effects.unshift(s, g, l + 1) }), t.effects.define("slide", "show", function(e, i) { var n, s, o = t(this),
                r = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
                a = e.mode,
                l = e.direction || "left",
                c = "up" === l || "down" === l ? "top" : "left",
                h = "up" === l || "left" === l,
                u = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0),
                d = {};
            t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[c], d[c] = (h ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(c, d[c]), d.clip = n, d[c] = s), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function(e, i) { t(this).transfer(e, i) })), t.ui.focusable = function(i, n) { var s, o, r, a, l, c = i.nodeName.toLowerCase(); return "area" === c ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && (r = t("img[usemap='#" + o + "']"), r.length > 0 && r.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(c) ? (a = !i.disabled, a && (l = t(i).closest("fieldset")[0], l && (a = !l.disabled))) : a = "a" === c ? i.href || n : n, a && t(i).is(":visible") && e(t(i))) }, t.extend(t.expr[":"], { focusable: function(e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } }), t.ui.focusable, t.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = { _formResetHandler: function() { var e = t(this);
                setTimeout(function() { var i = e.data("ui-form-reset-instances");
                    t.each(i, function() { this.refresh() }) }) }, _bindFormResetHandler: function() { if (this.form = this.element.form(), this.form.length) { var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t) } }, _unbindFormResetHandler: function() { if (this.form.length) { var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset") } } }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, o) { return t.each(s, function() { i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i } var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                r = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
            t.fn["inner" + i] = function(e) { return void 0 === e ? r["inner" + i].call(this) : this.each(function() { t(this).css(o, n(this, e) + "px") }) }, t.fn["outer" + i] = function(e, s) { return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() { t(this).css(o, n(this, e, !0, s) + "px") }) } }), t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function() { var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g; return function(e) { return e.replace(t, "\\$1") } }(), t.fn.labels = function() { var e, i, n, s, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s)) }, t.fn.scrollParent = function(e) { var i = this.css("position"),
                n = "absolute" === i,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() { var e = t(this); return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0); return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document) }, t.extend(t.expr[":"], { tabbable: function(e) { var i = t.attr(e, "tabindex"),
                    n = null != i; return (!n || i >= 0) && t.ui.focusable(e, n) } }), t.fn.extend({ uniqueId: function() { var t = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++t) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.widget("ui.accordion", { version: "1.12.0", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() { var e = this.options;
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh() }, _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : t() } }, _createIcons: function() { var e, i, n = this.options.icons;
                n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons")) }, _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() }, _destroy: function() { var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "") }, _setOption: function(t, e) { return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons()))) }, _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) }, _keydown: function(e) { if (!e.altKey && !e.ctrlKey) { var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        o = !1; switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n]; break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n]; break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e); break;
                        case i.HOME:
                            o = this.headers[0]; break;
                        case i.END:
                            o = this.headers[n - 1] }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault()) } }, _panelKeyDown: function(e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") }, refresh: function() { var e = this.options;
                this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh() }, _processPanels: function() { var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels))) }, _refresh: function() { var e, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() { var e = t(this),
                        i = e.uniqueId().attr("id"),
                        n = e.next(),
                        s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s), n.attr("aria-labelledby", i) }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() { var i = t(this),
                        n = i.css("position"); "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0)) }), this.headers.each(function() { e -= t(this).outerHeight(!0) }), this.headers.next().each(function() { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() { var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide() }).height(e)) }, _activate: function(e) { var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function(e) { return "number" == typeof e ? this.headers.eq(e) : t() }, _setupEvents: function(e) { var i = { keydown: "_keydown" };
                e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers) }, _eventHandler: function(e) { var i, n, s = this.options,
                    o = this.active,
                    r = t(e.currentTarget),
                    a = r[0] === o[0],
                    l = a && s.collapsible,
                    c = l ? t() : r.next(),
                    h = o.next(),
                    u = { oldHeader: o, oldPanel: h, newHeader: l ? t() : r, newPanel: c };
                e.preventDefault(), a && !s.collapsible || this._trigger("beforeActivate", e, u) === !1 || (s.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active"))) }, _toggle: function(e) { var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({ "aria-hidden": "true" }), n.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && n.length ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function(t, e, i) { var n, s, o, r = this,
                    a = 0,
                    l = t.css("box-sizing"),
                    c = t.length && (!e.length || t.index() < e.index()),
                    h = this.options.animate || {},
                    u = c && h.down || h,
                    d = function() { r._toggleComplete(i) }; return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || h.easing, o = o || u.duration || h.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: s, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: s, complete: d, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0) } })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d) }, _toggleComplete: function(t) { var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t) } }), t.ui.safeActiveElement = function(t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.widget("ui.menu", {
            version: "1.12.0",
            defaultElement: "<ul>",
            delay: 300,
            options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
            _create: function() { this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({ "mousedown .ui-menu-item": function(t) { t.preventDefault() }, "click .ui-menu-item": function(e) { var i = t(e.target),
                            n = t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function(e) { if (!this.previousFilter) { var i = t(e.target).closest(".ui-menu-item"),
                                n = t(e.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n)) } }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function(t, e) { var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i) }, blur: function(e) { this._delay(function() { var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                            i && this.collapseAll(e) }) }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } }) },
            _destroy: function() { var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() { var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove() }) },
            _keydown: function(e) { var i, n, s, o, r = !0; switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e); break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e); break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e); break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e); break;
                    case t.ui.keyCode.UP:
                        this.previous(e); break;
                    case t.ui.keyCode.DOWN:
                        this.next(e); break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e); break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e); break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e); break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e); break;
                    default:
                        r = !1, n = this.previousFilter || "", s = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter }
                r && e.preventDefault() },
            _activate: function(t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) },
            refresh: function() { var e, i, n, s, o, r = this,
                    a = this.options.icons.submenu,
                    l = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() { var e = t(this),
                        i = e.prev(),
                        n = t("<span>").data("ui-menu-submenu-caret", !0);
                    r._addClass(n, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id")) }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() { var e = t(this);
                    r._isDivider(e) && r._addClass(e, "ui-menu-divider", "ui-widget-content") }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur() },
            _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
            _setOption: function(t, e) { if ("icons" === t) { var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu) }
                this._super(t, e) },
            _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t) },
            focus: function(t, e) { var i, n, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e }) },
            _scrollIntoView: function(e) { var i, n, s, o, r, a;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), s < 0 ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a)) },
            blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) },
            _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) },
            _open: function(e) { var i = t.extend({ of: this.active }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i) },
            collapseAll: function(e, i) { clearTimeout(this.timer), this.timer = this._delay(function() { var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n }, this.delay) },
            _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") },
            _closeOnDocumentClick: function(e) { return !t(e.target).closest(".ui-menu").length },
            _isDivider: function(t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) },
            collapse: function(t) { var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e)) },
            expand: function(t) { var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) })) },
            next: function(t) { this._move("next", "first", t) },
            previous: function(t) { this._move("prev", "last", t) },
            isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
            isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
            _move: function(t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()),
                    this.focus(i, n)
            },
            nextPage: function(e) { var i, n, s; return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return i = t(this), i.offset().top - n - s < 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e) },
            previousPage: function(e) { var i, n, s; return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return i = t(this), i.offset().top - n + s > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e) },
            _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
            select: function(e) { this.active = this.active || t(e.target).closest(".ui-menu-item"); var i = { item: this.active };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i) },
            _filterMenuItems: function(e) { var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = new RegExp("^" + i, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) }) }
        }), t.widget("ui.autocomplete", { version: "1.12.0", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function() { var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    r = "input" === s;
                this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, { keydown: function(s) { if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                        e = !1, n = !1, i = !1; var o = t.ui.keyCode; switch (s.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", s); break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", s); break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", s); break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", s); break;
                            case o.ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s)); break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s); break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault()); break;
                            default:
                                i = !0, this._searchTimeout(s) } }, keypress: function(n) { if (e) return e = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault()); if (!i) { var s = t.ui.keyCode; switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n); break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n); break;
                                case s.UP:
                                    this._keyEvent("previous", n); break;
                                case s.DOWN:
                                    this._keyEvent("next", n) } } }, input: function(t) { return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t) }, focus: function() { this.selectedItem = null, this.previous = this._value() }, blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t)) } }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, { mousedown: function(e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) }, menufocus: function(e, i) { var n, s; return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() { t(e.target).trigger(e.originalEvent) })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: s }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion)))) }, menuselect: function(e, i) { var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() { this.previous = s, this.selectedItem = n })), !1 !== this._trigger("select", e, { item: n }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n } }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _destroy: function() { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() }, _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() }, _isEventTargetInWidget: function(e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) }, _closeOnClickOutside: function(t) { this._isEventTargetInWidget(t) || this.close() }, _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e }, _initSource: function() { var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) { n(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) { n.xhr && n.xhr.abort(), n.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function(t) { s(t) }, error: function() { s([]) } }) }) : this.source = this.options.source }, _searchTimeout: function(t) { clearTimeout(this.searching), this.searching = this._delay(function() { var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    e && (!e || i || n) || (this.selectedItem = null, this.search(null, t)) }, this.options.delay) }, search: function(t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0 }, _search: function(t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) }, _response: function() { var e = ++this.requestIndex; return t.proxy(function(t) { e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading") }, this) }, __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() }, close: function(t) { this.cancelSearch = !0, this._close(t) }, _close: function(t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) }, _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) }, _normalize: function(e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) }, _suggest: function(e) { var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" }) }, _resizeMenu: function() { var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function(e, i) { var n = this;
                t.each(i, function(t, i) { n._renderItemData(e, i) }) }, _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) }, _renderItem: function(e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) }, _move: function(t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e) }, widget: function() { return this.menu.element }, _value: function() { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function(t, e) { this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault()) }, _isContentEditable: function(t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e } }), t.extend(t.ui.autocomplete, { escapeRegex: function(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(e, i) { var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function(t) { return n.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function(t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function(e) { var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion)) } });
        var g = (t.ui.autocomplete, /ui-corner-([a-z]){2,6}/g);
        t.widget("ui.controlgroup", { version: "1.12.0", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function() { this._enhance() }, _enhance: function() { this.element.attr("role", "toolbar"), this.refresh() }, _destroy: function() { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() }, _initWidgets: function() { var e = this,
                    i = [];
                t.each(this.options.items, function(n, s) { var o, r = {}; if (s) return "controlgroupLabel" === n ? (o = e.element.find(s), o.each(function() { var e = t(this);
                        e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>") }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (e["_" + n + "Options"] && (r = e["_" + n + "Options"]("middle")), e.element.find(s).each(function() { var s = t(this),
                            o = s[n]("instance"),
                            a = t.widget.extend({}, r); if ("button" !== n || !s.parent(".ui-spinner").length) { o || (o = s[n]()[n]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), s[n](a); var l = s[n]("widget");
                            t.data(l[0], "ui-controlgroup-data", o ? o : s[n]("instance")), i.push(l[0]) } }))) }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item") }, _callChildMethod: function(e) { this.childWidgets.each(function() { var i = t(this),
                        n = i.data("ui-controlgroup-data");
                    n && n[e] && n[e]() }) }, _updateCornerClass: function(t, e) { var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                    n = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, i), this._addClass(t, null, n) }, _buildSimpleOptions: function(t, e) { var i = "vertical" === this.options.direction,
                    n = { classes: {} }; return n.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], n }, _spinnerOptions: function(t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e }, _buttonOptions: function(t) { return this._buildSimpleOptions(t, "ui-button") }, _checkboxradioOptions: function(t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") }, _selectmenuOptions: function(t) { var e = "vertical" === this.options.direction; return { width: !!e && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } }, _resolveClassesValues: function(e, i) { var n = {}; return t.each(e, function(t) { var s = i.options.classes[t] || "";
                    s = s.replace(g, "").trim(), n[t] = (s + " " + e[t]).replace(/\s+/g, " ") }), n }, _setOption: function(t, e) { return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh() }, refresh: function() { var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) { var s = e[n]().data("ui-controlgroup-data"); if (s && i["_" + s.widgetName + "Options"]) { var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o) } else i._updateCornerClass(e[n](), n) }), this._callChildMethod("refresh")) } }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, { version: "1.12.0", options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function() { var e, i, n = this,
                    s = this._super() || {}; return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element).each(function() { n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (s.label = this.originalLabel), e = this.element[0].disabled, null != e && (s.disabled = e), s }, _create: function() { var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } }) }, _readType: function() { var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type) }, _enhance: function() { this._updateIcon(this.element[0].checked) }, widget: function() { return this.label }, _getRadioGroup: function() { var e, i = this.element[0].name,
                    n = "input[name='" + t.ui.escapeSelector(i) + "']"; return i ? (e = this.form.length ? t(this.form[0].elements).filter(n) : t(n).filter(function() { return 0 === t(this).form().length }), e.not(this.element)) : t([]) }, _toggleClasses: function() { var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() { var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active") }) }, _destroy: function() { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) }, _setOption: function(t, e) { if ("label" !== t || e) return this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh() }, _updateIcon: function(e) { var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon) }, _updateLabel: function() { this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(), this.label.append(this.options.label) }, refresh: function() { var t = this.element[0].checked,
                    e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e }) } }]), t.ui.checkboxradio, t.widget("ui.button", { version: "1.12.0", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 }, _getCreateOptions: function() { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e }, _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) }, _enhance: function() { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) }, _updateTooltip: function() { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) }, _updateIcon: function(e, i) { var n = "iconPosition" !== e,
                    s = n ? this.options.iconPosition : i,
                    o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s)) }, _destroy: function() { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") }, _attachIconSpace: function(t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) }, _attachIcon: function(t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) }, _setOptions: function(t) { var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t) }, _setOption: function(t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) }, refresh: function() { var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip() } }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function(t, e) { return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments)) } }), t.fn.button = function(e) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function() { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) }), t.ui.button, t.extend(t.ui, { datepicker: { version: "1.12.0" } });
        var m;
        t.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() { return this.dpDiv },
            setDefaults: function(t) { return r(this._defaults, t || {}), this },
            _attachDatepicker: function(e, i) { var n, s, o;
                n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o) },
            _newInst: function(e, i) { var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: n, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
            _connectDatepicker: function(e, i) { var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e)) },
            _attachments: function(e, i) { var n, s, o, r = this._get(i, "appendText"),
                    a = this._get(i, "isRTL");
                i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), "focus" !== n && "both" !== n || e.on("focus", this._showDatepicker), "button" !== n && "both" !== n || (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: s, title: s }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 })) },
            _autoSize: function(t) { if (this._get(t, "autoSize") && !t.inline) { var e, i, n, s, o = new Date(2009, 11, 20),
                        r = this._get(t, "dateFormat");
                    r.match(/[DM]/) && (e = function(t) { for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s); return n }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length) } },
            _inlineDatepicker: function(e, i) { var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block")) },
            _dialogDatepicker: function(e, i, n, s, o) { var a, l, c, h, u, d = this._dialogInst; return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + h, c / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this },
            _destroyDatepicker: function(e) { var i, n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(), m === s && (m = null)) },
            _enableDatepicker: function(e) { var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t })) },
            _disableDatepicker: function(e) { var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e) },
            _isDisabledDatepicker: function(t) { if (!t) return !1; for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1 },
            _getInst: function(e) { try { return t.data(e, "datepicker") } catch (t) { throw "Missing instance data for this datepicker" } },
            _optionDatepicker: function(e, i, n) { var s, o, a, l, c = this._getInst(e); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), r(c.settings, s), null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (c.settings.minDate = this._formatDate(c, a)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)))) },
            _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) },
            _refreshDatepicker: function(t) { var e = this._getInst(t);
                e && this._updateDatepicker(e) },
            _setDateDatepicker: function(t, e) { var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i)) },
            _getDateDatepicker: function(t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null },
            _doKeyDown: function(e) { var i, n, s, o = t.datepicker._getInst(e.target),
                    r = !0,
                    a = o.dpDiv.is(".ui-datepicker-rtl"); if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), r = !1; break;
                    case 13:
                        return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker(); break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M"); break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey; break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey; break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey; break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M"); break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey; break;
                    default:
                        r = !1 } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
                r && (e.preventDefault(), e.stopPropagation()) },
            _doKeyPress: function(e) { var i, n, s = t.datepicker._getInst(e.target); if (t.datepicker._get(s, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1 },
            _doKeyUp: function(e) { var i, n = t.datepicker._getInst(e.target); if (n.input.val() !== n.lastVal) try { i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n)) } catch (t) {}
                return !0 },
            _showDatepicker: function(e) { if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) { var n, s, o, a, l, c, h;
                    n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), o = s ? s.apply(e, [e, n]) : {}, o !== !1 && (r(n.settings, o), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() { return a |= "fixed" === t(this).css("position"), !a }), l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px" }), n.inline || (c = t.datepicker._get(n, "showAnim"), h = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[c] ? n.dpDiv.show(c, t.datepicker._get(n, "showOptions"), h) : n.dpDiv[c || "show"](c ? h : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n)) } },
            _updateDatepicker: function(e) { this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e); var i, n = this._getNumberOfMonths(e),
                    s = n[1],
                    r = 17,
                    a = e.dpDiv.find("." + this._dayOverClass + " a");
                a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0)) },
            _shouldFocusInput: function(t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") },
            _checkOffset: function(e, i, n) { var s = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    r = e.input ? e.input.outerWidth() : 0,
                    a = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop()); return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + a) : 0), i },
            _findPos: function(e) { for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] },
            _hideDatepicker: function(e) { var i, n, s, o, r = this._curInst;!r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function() { t.datepicker._tidyDialog(r) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) },
            _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
            _checkExternalClick: function(e) { if (t.datepicker._curInst) { var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n) || t.datepicker._hideDatepicker() } },
            _adjustDate: function(e, i, n) { var s = t(e),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o)) },
            _gotoToday: function(e) { var i, n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n) },
            _selectMonthYear: function(e, i, n) { var s = t(e),
                    o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s) },
            _selectDay: function(e, i, n, s) { var o, r = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))) },
            _clearDate: function(e) { var i = t(e);
                this._selectDate(i, "") },
            _selectDate: function(e, i) { var n, s = t(e),
                    o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null) },
            _updateAlternate: function(e) { var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s)) },
            noWeekends: function(t) { var e = t.getDay(); return [e > 0 && e < 6, ""] },
            iso8601Week: function(t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 },
            parseDate: function(e, i, n) { if (null == e || null == i) throw "Invalid arguments"; if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null; var s, o, r, a, l = 0,
                    c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    h = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                    u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    v = -1,
                    y = -1,
                    b = !1,
                    _ = function(t) { var i = s + 1 < e.length && e.charAt(s + 1) === t; return i && s++, i },
                    w = function(t) { var e = _(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            r = i.substring(l).match(o); if (!r) throw "Missing number at position " + l; return l += r[0].length, parseInt(r[0], 10) },
                    x = function(e, n, s) { var o = -1,
                            r = t.map(_(e) ? s : n, function(t, e) { return [
                                    [e, t]
                                ] }).sort(function(t, e) { return -(t[1].length - e[1].length) }); if (t.each(r, function(t, e) { var n = e[1]; if (i.substr(l, n.length).toLowerCase() === n.toLowerCase()) return o = e[0], l += n.length, !1 }), o !== -1) return o + 1; throw "Unknown name at position " + l },
                    C = function() { if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++ }; for (s = 0; s < e.length; s++)
                    if (b) "'" !== e.charAt(s) || _("'") ? C() : b = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            v = w("d"); break;
                        case "D":
                            x("D", u, d); break;
                        case "o":
                            y = w("o"); break;
                        case "m":
                            m = w("m"); break;
                        case "M":
                            m = x("M", p, f); break;
                        case "y":
                            g = w("y"); break;
                        case "@":
                            a = new Date(w("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate(); break;
                        case "!":
                            a = new Date((w("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate(); break;
                        case "'":
                            _("'") ? C() : b = !0; break;
                        default:
                            C() }
                    if (l < i.length && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
                if (g === -1 ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= h ? 0 : -100)), y > -1)
                    for (m = 1, v = y; o = this._getDaysInMonth(g, m - 1), !(v <= o);) m++, v -= o; if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date"; return a },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) { if (!e) return ""; var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) { var i = n + 1 < t.length && t.charAt(n + 1) === e; return i && n++, i },
                    c = function(t, e, i) { var n = "" + e; if (l(t))
                            for (; n.length < i;) n = "0" + n; return n },
                    h = function(t, e, i, n) { return l(t) ? n[e] : i[e] },
                    u = "",
                    d = !1; if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                u += c("d", e.getDate(), 2); break;
                            case "D":
                                u += h("D", e.getDay(), s, o); break;
                            case "o":
                                u += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3); break;
                            case "m":
                                u += c("m", e.getMonth() + 1, 2); break;
                            case "M":
                                u += h("M", e.getMonth(), r, a); break;
                            case "y":
                                u += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100; break;
                            case "@":
                                u += e.getTime(); break;
                            case "!":
                                u += 1e4 * e.getTime() + this._ticksTo1970; break;
                            case "'":
                                l("'") ? u += "'" : d = !0; break;
                            default:
                                u += t.charAt(n) }
                        return u },
            _possibleChars: function(t) { var e, i = "",
                    n = !1,
                    s = function(i) { var n = e + 1 < t.length && t.charAt(e + 1) === i; return n && e++, n }; for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789"; break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0; break;
                        default:
                            i += t.charAt(e) }
                    return i },
            _get: function(t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] },
            _setDateFromField: function(t, e) { if (t.input.val() !== t.lastVal) { var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        r = this._getFormatConfig(t); try { o = this.parseDate(i, n, r) || s } catch (t) { n = e ? "" : n }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t) } },
            _getDefaultDate: function(t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) },
            _determineDate: function(e, i, n) { var s = function(t) { var e = new Date; return e.setDate(e.getDate() + t), e },
                    o = function(i) { try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (t) {} for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) { switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(l[1], 10); break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(l[1], 10); break;
                                case "m":
                                case "M":
                                    o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o)); break;
                                case "y":
                                case "Y":
                                    s += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o)) }
                            l = a.exec(i) } return new Date(s, o, r) },
                    r = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime()); return r = r && "Invalid Date" === r.toString() ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r) },
            _daylightSavingAdjust: function(t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null },
            _setDate: function(t, e, i) { var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t)) },
            _getDate: function(t) { var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return e },
            _attachHandlers: function(e) { var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() { var e = { prev: function() { t.datepicker._adjustDate(n, -i, "M") }, next: function() { t.datepicker._adjustDate(n, +i, "M") }, hide: function() { t.datepicker._hideDatepicker() }, today: function() { t.datepicker._gotoToday(n) }, selectDay: function() { return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return t.datepicker._selectMonthYear(n, this, "M"), !1 }, selectYear: function() { return t.datepicker._selectMonthYear(n, this, "Y"), !1 } };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]) }) },
            _generateHTML: function(t) { var e, i, n, s, o, r, a, l, c, h, u, d, p, f, g, m, v, y, b, _, w, x, C, k, T, S, D, I, E, P, $, O, A, M, N, H, z, L, R, F = new Date,
                    W = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                    j = this._get(t, "isRTL"),
                    q = this._get(t, "showButtonPanel"),
                    B = this._get(t, "hideIfNoPrevNext"),
                    Y = this._get(t, "navigationAsDateFormat"),
                    V = this._getNumberOfMonths(t),
                    X = this._get(t, "showCurrentAtPos"),
                    U = this._get(t, "stepMonths"),
                    G = 1 !== V[0] || 1 !== V[1],
                    K = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    J = t.drawMonth - X,
                    tt = t.drawYear; if (J < 0 && (J += 12, tt--), Z)
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - V[0] * V[1] + 1, Z.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) J--, J < 0 && (J = 11, tt--); for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - U, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + U, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? K : W, r = Y ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (j ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", x = 0; x < V[0]; x++) { for (C = "", this.maxRows = 4, k = 0; k < V[1]; k++) { if (T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), S = " ui-corner-all", D = "", G) { if (D += "<div class='ui-datepicker-group", V[1] > 1) switch (k) {
                                case 0:
                                    D += " ui-datepicker-group-first", S = " ui-corner-" + (j ? "right" : "left"); break;
                                case V[1] - 1:
                                    D += " ui-datepicker-group-last", S = " ui-corner-" + (j ? "left" : "right"); break;
                                default:
                                    D += " ui-datepicker-group-middle", S = "" }
                            D += "'>" } for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? j ? o : n : "") + (/all|right/.test(S) && 0 === x ? j ? n : o : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, x > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) E = (w + h) % 7, I += "<th scope='col'" + ((w + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[E] + "'>" + p[E] + "</span></th>"; for (D += I + "</tr></thead><tbody>", P = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), $ = (this._getFirstDayOfMonth(tt, J) - h + 7) % 7, O = Math.ceil(($ + P) / 7), A = G && this.maxRows > O ? this.maxRows : O, this.maxRows = A, M = this._daylightSavingAdjust(new Date(tt, J, 1 - $)), N = 0; N < A; N++) { for (D += "<tr>", H = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(M) + "</td>" : "", w = 0; w < 7; w++) z = m ? m.apply(t.input ? t.input[0] : null, [M]) : [!0, ""], L = M.getMonth() !== J, R = L && !y || !z[0] || Q && M < Q || Z && M > Z, H += "<td class='" + ((w + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (M.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === M.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + z[1] + (M.getTime() === K.getTime() ? " " + this._currentClass : "") + (M.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + M.getMonth() + "' data-year='" + M.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + M.getDate() + "</span>" : "<a class='ui-state-default" + (M.getTime() === W.getTime() ? " ui-state-highlight" : "") + (M.getTime() === K.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + M.getDate() + "</a>") + "</td>", M.setDate(M.getDate() + 1), M = this._daylightSavingAdjust(M);
                            D += H + "</tr>" }
                        J++, J > 11 && (J = 0, tt++), D += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), C += D }
                    _ += C } return _ += c, t._keyEvent = !1, _ },
            _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) { var l, c, h, u, d, p, f, g, m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    y = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    _ = ""; if (o || !m) _ += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                else { for (l = n && n.getFullYear() === i, c = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++)(!l || h >= n.getMonth()) && (!c || h <= s.getMonth()) && (_ += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + a[h] + "</option>");
                    _ += "</select>" } if (y || (b += _ + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else { for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null }
                return b += this._get(t, "yearSuffix"), y && (b += (!o && m && v ? "" : "&#xa0;") + _), b += "</div>" },
            _adjustInstDate: function(t, e, i) { var n = t.selectedYear + ("Y" === i ? e : 0),
                    s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t) },
            _restrictMinMax: function(t, e) { var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && e < i ? i : e; return n && s > n ? n : s },
            _notifyChange: function(t) { var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]) },
            _getNumberOfMonths: function(t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e },
            _getMinMaxDate: function(t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) },
            _getDaysInMonth: function(t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() },
            _getFirstDayOfMonth: function(t, e) { return new Date(t, e, 1).getDay() },
            _canAdjustMonth: function(t, e, i, n) { var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1)); return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o) },
            _isInRange: function(t, e) { var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    r = null,
                    a = null,
                    l = this._get(t, "yearRange"); return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a) },
            _getFormatConfig: function(t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } },
            _formatDate: function(t, e, i, n) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t)) }
        }), t.fn.datepicker = function(e) { if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) }, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.0";
        var v = (t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
        t(document).on("mouseup", function() { v = !1 }), t.widget("ui.mouse", { version: "1.12.0", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() { var e = this;
                this.element.on("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) }).on("click." + this.widgetName, function(i) { if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1 }), this.started = !1 }, _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function(e) { if (!v) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e; var i = this,
                        n = 1 === e.which,
                        s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length; return !(n && !s && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), 0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) { return i._mouseMove(t) }, this._mouseUpDelegate = function(t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), v = !0, 0))) } }, _mouseMove: function(e) { if (this._mouseMoved) { if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e); if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e) } return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) }, _mouseUp: function(e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, v = !1, e.preventDefault() }, _mouseDistanceMet: function(t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return !0 } }), t.ui.plugin = { add: function(e, i, n) { var s, o = t.ui[e].prototype; for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]]) }, call: function(t, e, i, n) { var s, o = t.plugins[e]; if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i) } }, t.ui.safeBlur = function(e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") }, t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "drag",
            options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
            _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() },
            _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) },
            _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy()) },
            _mouseCapture: function(e) { var i = this.options; return this._blurActiveElement(e), !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 || (this.handle = this._getHandle(e), !this.handle || (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), 0))) },
            _blockFrames: function(e) { this.iframeBlocks = this.document.find(e).map(function() { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) },
            _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
            _blurActiveElement: function(e) { var i = t.ui.safeActiveElement(this.document[0]),
                    n = t(e.target);
                this._getHandle(e) && n.closest(i).length || t.ui.safeBlur(i) },
            _mouseStart: function(e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) },
            _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } },
            _mouseDrag: function(e, i) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) { var n = this._uiHash(); if (this._trigger("drag", e, n) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = n.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1 },
            _mouseStop: function(e) { var i = this,
                    n = !1; return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { i._trigger("stop", e) !== !1 && i._clear() }) : this._trigger("stop", e) !== !1 && this._clear(), !1 },
            _mouseUp: function(e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) },
            cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this },
            _getHandle: function(e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length;
            },
            _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") },
            _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") },
            _createHelper: function(e) { var i = this.options,
                    n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element; return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s },
            _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
            _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
            _isRootNode: function(t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] },
            _getParentOffset: function() { var e = this.offsetParent.offset(),
                    i = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
            _getRelativeOffset: function() { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) } },
            _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
            _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
            _setContainment: function() { var e, i, n, s = this.options,
                    o = this.document[0]; return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null) },
            _convertPositionTo: function(t, e) { e || (e = this.position); var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]); return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i } },
            _generatePosition: function(t, e) { var i, n, s, o, r = this.options,
                    a = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    c = t.pageY; return a && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (c = this.originalPageY)), { top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left) } },
            _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
            _trigger: function(e, i, n) { return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n) },
            plugins: {},
            _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
        }), t.ui.plugin.add("draggable", "connectToSortable", { start: function(e, i, n) { var s = t.extend({}, i, { item: n.element });
                n.sortables = [], t(n.options.connectToSortable).each(function() { var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s)) }) }, stop: function(e, i, n) { var s = t.extend({}, i, { item: n.element });
                n.cancelHelperRemoval = !1, t.each(n.sortables, function() { var t = this;
                    t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s)) }) }, drag: function(e, i, n) { t.each(n.sortables, function() { var s = !1,
                        o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() { return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() { this.refreshPositions() }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() { this.refreshPositions() })) }) } }), t.ui.plugin.add("draggable", "cursor", { start: function(e, i, n) { var s = t("body"),
                    o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor) }, stop: function(e, i, n) { var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor) } }), t.ui.plugin.add("draggable", "opacity", { start: function(e, i, n) { var s = t(i.helper),
                    o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity) }, stop: function(e, i, n) { var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity) } }), t.ui.plugin.add("draggable", "scroll", { start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) }, drag: function(e, i, n) { var s = n.options,
                    o = !1,
                    r = n.scrollParentNotHidden[0],
                    a = n.document[0];
                r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e) } }), t.ui.plugin.add("draggable", "snap", { start: function(e, i, n) { var s = n.options;
                n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() { var e = t(this),
                        i = e.offset();
                    this !== n.element[0] && n.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left }) }) }, drag: function(e, i, n) { var s, o, r, a, l, c, h, u, d, p, f = n.options,
                    g = f.snapTolerance,
                    m = i.offset.left,
                    v = m + n.helperProportions.width,
                    y = i.offset.top,
                    b = y + n.helperProportions.height; for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, c = l + n.snapElements[d].width, h = n.snapElements[d].top - n.margins.top, u = h + n.snapElements[d].height, v < l - g || m > c + g || b < h - g || y > u + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(h - b) <= g, o = Math.abs(u - y) <= g, r = Math.abs(l - v) <= g, a = Math.abs(c - m) <= g, s && (i.position.top = n._convertPositionTo("relative", { top: h - n.helperProportions.height, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: u, left: 0 }).top), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l - n.helperProportions.width }).left), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: c }).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = Math.abs(h - y) <= g, o = Math.abs(u - b) <= g, r = Math.abs(l - m) <= g, a = Math.abs(c - v) <= g, s && (i.position.top = n._convertPositionTo("relative", { top: h, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: u - n.helperProportions.height, left: 0 }).top), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l }).left), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: c - n.helperProportions.width }).left)), !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = s || o || r || a || p) } }), t.ui.plugin.add("draggable", "stack", { start: function(e, i, n) { var s, o = n.options,
                    r = t.makeArray(t(o.stack)).sort(function(e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) });
                r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function(e) { t(this).css("zIndex", s + e) }), this.css("zIndex", s + r.length)) } }), t.ui.plugin.add("draggable", "zIndex", { start: function(e, i, n) { var s = t(i.helper),
                    o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex) }, stop: function(e, i, n) { var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex) } }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, { version: "1.12.0", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(t) { return parseFloat(t) || 0 }, _isNumber: function(t) { return !isNaN(parseFloat(t)) }, _hasScroll: function(e, i) { if ("hidden" === t(e).css("overflow")) return !1; var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1; return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s) }, _create: function() { var e, i = this.options,
                    n = this;
                this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() { i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show()) }).on("mouseleave", function() { i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide()) }), this._mouseInit() }, _destroy: function() { this._mouseDestroy(); var e, i = function(e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _setOption: function(t, e) { switch (this._super(t, e), t) {
                    case "handles":
                        this._removeHandles(), this._setupHandles() } }, _setupHandles: function() { var e, i, n, s, o, r = this.options,
                    a = this; if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({ zIndex: r.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function(e) { var i, n, s, o;
                    e = e || this.element; for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: a._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]) }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se") }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide")) }, _removeHandles: function() { this._handles.remove() }, _mouseCapture: function(e) { var i, n, s = !1; for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0); return !this.options.disabled && s }, _mouseStart: function(e) { var i, n, s, o = this.options,
                    r = this.element; return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: n }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: r.width(), height: r.height() }, this.originalSize = this._helper ? { width: r.outerWidth(), height: r.outerHeight() } : { width: r.width(), height: r.height() }, this.sizeDiff = { width: r.outerWidth() - r.width(), height: r.outerHeight() - r.height() }, this.originalPosition = { left: i, top: n }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0 }, _mouseDrag: function(e) { var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    r = e.pageX - s.left || 0,
                    a = e.pageY - s.top || 0,
                    l = this._change[o]; return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) }, _mouseStop: function(e) { this.resizing = !1; var i, n, s, o, r, a, l, c = this.options,
                    h = this; return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, o = n ? 0 : h.sizeDiff.width, r = { width: h.helper.width() - o, height: h.helper.height() - s }, a = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, l = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, c.animate || this.element.css(t.extend(r, { top: l, left: a })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function() { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t }, _updateVirtualBoundaries: function(t) { var e, i, n, s, o, r = this.options;
                o = { minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0, maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0, maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o }, _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) }, _updateRatio: function(t) { var e = this.position,
                    i = this.size,
                    n = this.axis; return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t }, _respectSize: function(t) { var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    c = /sw|nw|w/.test(i),
                    h = /nw|ne|n/.test(i); return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && c && (t.left = a - e.minWidth), n && c && (t.left = a - e.maxWidth), r && h && (t.top = l - e.minHeight), s && h && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t }, _getPaddingPlusBorderDimensions: function(t) { for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } }, _proportionallyResize: function() { if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function() { var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function(t, e) { return { width: this.originalSize.width + e } }, w: function(t, e) { var i = this.originalSize,
                        n = this.originalPosition; return { left: n.left + e, width: i.width - e } }, n: function(t, e, i) { var n = this.originalSize,
                        s = this.originalPosition; return { top: s.top + i, height: n.height - i } }, s: function(t, e, i) { return { height: this.originalSize.height + i } }, se: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, sw: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n])) }, ne: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, nw: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n])) } }, _propagate: function(e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) }, plugins: {}, ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } }), t.ui.plugin.add("resizable", "animate", { stop: function(e) { var i = t(this).resizable("instance"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    a = o ? 0 : i.sizeDiff.width,
                    l = { width: i.size.width - a, height: i.size.height - r },
                    c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, h && c ? { top: h, left: c } : {}), { duration: n.animateDuration, easing: n.animateEasing, step: function() { var n = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                        s && s.length && t(s[0]).css({ width: n.width, height: n.height }), i._updateCache(n), i._propagate("resize", e) } }) } }), t.ui.plugin.add("resizable", "containment", { start: function() { var e, i, n, s, o, r, a, l = t(this).resizable("instance"),
                    c = l.options,
                    h = l.element,
                    u = c.containment,
                    d = u instanceof t ? u.get(0) : /parent/.test(u) ? h.parent().get(0) : u;
                d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = { left: 0, top: 0 }, l.containerPosition = { left: 0, top: 0 }, l.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) { i[t] = l._num(e.css("padding" + n)) }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = { element: d, left: n.left, top: n.top, width: r, height: a })) }, resize: function(e) { var i, n, s, o, r = t(this).resizable("instance"),
                    a = r.options,
                    l = r.containerOffset,
                    c = r.position,
                    h = r._aspectRatio || e.shiftKey,
                    u = { top: 0, left: 0 },
                    d = r.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (u = l), c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), h && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), h && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, h && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, h && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height) }, stop: function() { var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.containerOffset,
                    s = e.containerPosition,
                    o = e.containerElement,
                    r = t(e.helper),
                    a = r.offset(),
                    l = r.outerWidth() - e.sizeDiff.width,
                    c = r.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: a.left - s.left - n.left, width: l, height: c }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: a.left - s.left - n.left, width: l, height: c }) } }), t.ui.plugin.add("resizable", "alsoResize", { start: function() { var e = t(this).resizable("instance"),
                    i = e.options;
                t(i.alsoResize).each(function() { var e = t(this);
                    e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) }) }) }, resize: function(e, i) { var n = t(this).resizable("instance"),
                    s = n.options,
                    o = n.originalSize,
                    r = n.originalPosition,
                    a = { height: n.size.height - o.height || 0, width: n.size.width - o.width || 0, top: n.position.top - r.top || 0, left: n.position.left - r.left || 0 };
                t(s.alsoResize).each(function() { var e = t(this),
                        n = t(this).data("ui-resizable-alsoresize"),
                        s = {},
                        o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function(t, e) { var i = (n[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (s[e] = i || null) }), e.css(s) }) }, stop: function() { t(this).removeData("ui-resizable-alsoresize") } }), t.ui.plugin.add("resizable", "ghost", { start: function() { var e = t(this).resizable("instance"),
                    i = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper) }, resize: function() { var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width }) }, stop: function() { var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0)) } }), t.ui.plugin.add("resizable", "grid", { resize: function() { var e, i = t(this).resizable("instance"),
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    r = i.originalPosition,
                    a = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    c = l[0] || 1,
                    h = l[1] || 1,
                    u = Math.round((s.width - o.width) / c) * c,
                    d = Math.round((s.height - o.height) / h) * h,
                    p = o.width + u,
                    f = o.height + d,
                    g = n.maxWidth && n.maxWidth < p,
                    m = n.maxHeight && n.maxHeight < f,
                    v = n.minWidth && n.minWidth > p,
                    y = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += c), y && (f += h), g && (p -= c), m && (f -= h), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((f - h <= 0 || p - c <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - h > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = h - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - c > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = c - e.width, i.size.width = p, i.position.left = r.left + o.width - p)) } }), t.ui.resizable, t.widget("ui.dialog", {
            version: "1.12.0",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: { my: "center", at: "center", of: window, collision: "fit", using: function(e) { var i = t(this).css(e).offset().top;
                        i < 0 && t(this).css("top", e.top - i) } },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
            resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
            _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
            _init: function() { this.options.autoOpen && this.open() },
            _appendTo: function() { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) },
            _destroy: function() { var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element) },
            widget: function() { return this.uiDialog },
            disable: t.noop,
            enable: t.noop,
            close: function(e) { var i = this;
                this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", e) })) },
            isOpen: function() { return this._isOpen },
            moveToTop: function() { this._moveToTop() },
            _moveToTop: function(e, i) { var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function() { return +t(this).css("z-index") }).get(),
                    o = Math.max.apply(null, s); return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n },
            open: function() { var e = this; return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), void this._trigger("open")) },
            _focusTabbable: function() { var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus") },
            _keepFocus: function(e) {
                function i() { var e = t.ui.safeActiveElement(this.document[0]),
                        i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                    i || this._focusTabbable() }
                e.preventDefault(), i.call(this), this._delay(i) },
            _createWrapper: function() { this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, { keydown: function(e) { if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e); if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) { var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() { s.trigger("focus") }), e.preventDefault()) : (this._delay(function() { n.trigger("focus") }), e.preventDefault()) } }, mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") }) },
            _createTitlebar: function() { var e;
                this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") }) },
            _title: function(t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") },
            _createButtonPane: function() { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() },
            _createButtons: function() { var e = this,
                    i = this.options.buttons; return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) { var s, o;
                    n = t.isFunction(n) ? { click: n, text: i } : n, n = t.extend({ type: "button" }, n), s = n.click, o = { icon: n.icon, iconPosition: n.iconPosition, showLabel: n.showLabel }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() { s.apply(e.element[0], arguments) }) }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog)) },
            _makeDraggable: function() {
                function e(t) { return { position: t.position, offset: t.offset } } var i = this,
                    n = this.options;
                this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(n, s) { i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s)) }, drag: function(t, n) { i._trigger("drag", t, e(n)) }, stop: function(s, o) { var r = o.offset.left - i.document.scrollLeft(),
                            a = o.offset.top - i.document.scrollTop();
                        n.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o)) } }) },
            _makeResizable: function() {
                function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } } var i = this,
                    n = this.options,
                    s = n.resizable,
                    o = this.uiDialog.css("position"),
                    r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: n.maxWidth, maxHeight: n.maxHeight, minWidth: n.minWidth, minHeight: this._minHeight(), handles: r, start: function(n, s) { i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s)) }, resize: function(t, n) { i._trigger("resize", t, e(n)) }, stop: function(s, o) { var r = i.uiDialog.offset(),
                            a = r.left - i.document.scrollLeft(),
                            l = r.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o)) } }).css("position", o) },
            _trackFocus: function() { this._on(this.widget(), { focusin: function(e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) },
            _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
            _untrackInstance: function() { var e = this._trackingInstances(),
                    i = t.inArray(this, e);
                i !== -1 && e.splice(i, 1) },
            _trackingInstances: function() { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t },
            _minHeight: function() { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) },
            _position: function() { var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide() },
            _setOptions: function(e) { var i = this,
                    n = !1,
                    s = {};
                t.each(e, function(t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e) }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s) },
            _setOption: function(e, i) { var n, s, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
            _size: function() { var t, e, i, n = this.options;
                this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight()) },
            _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) },
            _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
            _allowInteraction: function(e) { return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length },
            _createOverlay: function() { if (this.options.modal) { var e = !0;
                    this._delay(function() { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1) } },
            _destroyOverlay: function() { if (this.options.modal && this.overlay) { var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null } }
        }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } }), t.ui.dialog, t.widget("ui.droppable", { version: "1.12.0", widgetEventPrefix: "drop", options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() { var e, i = this.options,
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) { return t.is(n) }, this.proportions = function() { return arguments.length ? void(e = arguments[0]) : e ? e : e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable") }, _addToManager: function(e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) }, _splice: function(t) { for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1) }, _destroy: function() { var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e) }, _setOption: function(e, i) { if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) { return t.is(i) };
                else if ("scope" === e) { var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i) }
                this._super(e, i) }, _activate: function(e) { var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i)) }, _deactivate: function(e) { var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i)) }, _over: function(e) { var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i))) }, _out: function(e) { var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i))) }, _drop: function(e, i) { var n = i || t.ui.ddmanager.current,
                    s = !1; return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = t(this).droppable("instance"); if (i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && y(n, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e)) return s = !0, !1 }), !s && !!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)) }, ui: function(t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } }, _addHoverClass: function() { this._addClass("ui-droppable-hover") }, _removeHoverClass: function() { this._removeClass("ui-droppable-hover") }, _addActiveClass: function() { this._addClass("ui-droppable-active") }, _removeActiveClass: function() { this._removeClass("ui-droppable-active") } });
        var y = t.ui.intersect = function() {
            function t(t, e, i) { return t >= e && t < e + i } return function(e, i, n, s) { if (!i.offset) return !1; var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    a = o + e.helperProportions.width,
                    l = r + e.helperProportions.height,
                    c = i.offset.left,
                    h = i.offset.top,
                    u = c + i.proportions().width,
                    d = h + i.proportions().height; switch (n) {
                    case "fit":
                        return c <= o && a <= u && h <= r && l <= d;
                    case "intersect":
                        return c < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < u && h < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                    case "pointer":
                        return t(s.pageY, h, i.proportions().height) && t(s.pageX, c, i.proportions().width);
                    case "touch":
                        return (r >= h && r <= d || l >= h && l <= d || r < h && l > d) && (o >= c && o <= u || a >= c && a <= u || o < c && a > u);
                    default:
                        return !1 } } }();
        t.ui.ddmanager = { current: null, droppables: { default: [] }, prepareOffsets: function(e, i) { var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    r = i ? i.type : null,
                    a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; n < o.length; n++)
                    if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) { for (s = 0; s < a.length; s++)
                            if (a[s] === o[n].element[0]) { o[n].proportions().height = 0; continue t }
                        o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({ width: o[n].element[0].offsetWidth, height: o[n].element[0].offsetHeight })) } }, drop: function(e, i) { var n = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && y(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), n }, dragStart: function(e, i) { e.element.parentsUntil("body").on("scroll.droppable", function() { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) }, drag: function(e, i) { e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() { if (!this.options.disabled && !this.greedyChild && this.visible) { var n, s, o, r = y(e, this, this.options.tolerance, i),
                            a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                        a && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() { return t(this).droppable("instance").options.scope === s }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i))) } }) }, dragStop: function(e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) } }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } }), t.ui.droppable, t.widget("ui.progressbar", { version: "1.12.0", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() }, _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() }, value: function(t) { return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue()) }, _constrainedValue: function(t) { return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t)) }, _setOptions: function(t) { var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue() }, _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) }, _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) }, _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function() { var e = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete") } }), t.widget("ui.selectable", t.ui.mouse, { version: "1.12.0", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function() { var e = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() { e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() { var i = t(this),
                            n = i.offset(),
                            s = { left: n.left - e.elementPos.left, top: n.top - e.elementPos.top };
                        t.data(this, "selectable-item", { element: this, $element: i, left: s.left, top: s.top, right: s.left + i.outerWidth(), bottom: s.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") }) }) }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper") }, _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() }, _mouseStart: function(e) { var i = this,
                    n = this.options;
                this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() { var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, { unselecting: n.element })) }), t(e.target).parents().addBack().each(function() { var n, s = t.data(this, "selectable-item"); if (s) return n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, { selecting: s.element }) : i._trigger("unselecting", e, { unselecting: s.element }), !1 })) }, _mouseDrag: function(e) { if (this.dragged = !0, !this.options.disabled) { var i, n = this,
                        s = this.options,
                        o = this.opos[0],
                        r = this.opos[1],
                        a = e.pageX,
                        l = e.pageY; return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({ left: o, top: r, width: a - o, height: l - r }), this.selectees.each(function() { var i = t.data(this, "selectable-item"),
                            c = !1,
                            h = {};
                        i && i.element !== n.element[0] && (h.left = i.left + n.elementPos.left, h.right = i.right + n.elementPos.left, h.top = i.top + n.elementPos.top, h.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? c = !(h.left > a || h.right < o || h.top > l || h.bottom < r) : "fit" === s.tolerance && (c = h.left > o && h.right < a && h.top > r && h.bottom < l), c ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, { unselecting: i.element }))))) }), !1 } }, _mouseStop: function(e) { var i = this; return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() { var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, { unselected: n.element }) }), t(".ui-selecting", this.element[0]).each(function() { var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, { selected: n.element }) }), this._trigger("stop", e), this.helper.remove(), !1 } }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.0",
            defaultElement: "<select>",
            options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null },
            _create: function() { var e = this.element.uniqueId().attr("id");
                this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t() },
            _drawButton: function() { var e, i = this,
                    n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { i._rendered || i._refreshMenu() }) },
            _drawMenu: function() { var e = this;
                this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function(t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) }, focus: function(t, i) { var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, { item: n }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id")) } }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 } },
            refresh: function() { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() },
            _refreshMenu: function() { var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled"))) },
            open: function(t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) },
            _position: function() { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) },
            close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) },
            widget: function() { return this.button },
            menuWidget: function() { return this.menu },
            _renderButtonItem: function(e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i },
            _renderMenu: function(e, i) { var n = this,
                    s = "";
                t.each(i, function(i, o) { var r;
                    o.optgroup !== s && (r = t("<li>", { text: o.optgroup }), n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), s = o.optgroup), n._renderItemData(e, o) }) },
            _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) },
            _renderItem: function(e, i) { var n = t("<li>"),
                    s = t("<div>", { title: i.element.attr("title") }); return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e) },
            _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") },
            _move: function(t, e) { var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n) },
            _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") },
            _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) },
            _setSelection: function() { var t;
                this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus()) },
            _documentClick: { mousedown: function(e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } },
            _buttonEvents: { mousedown: function() { var t;
                    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange() }, click: function(t) { this._setSelection(), this._toggle(t) }, keydown: function(e) { var i = !0; switch (e.keyCode) {
                        case t.ui.keyCode.TAB:
                        case t.ui.keyCode.ESCAPE:
                            this.close(e), i = !1; break;
                        case t.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(e); break;
                        case t.ui.keyCode.UP:
                            e.altKey ? this._toggle(e) : this._move("prev", e); break;
                        case t.ui.keyCode.DOWN:
                            e.altKey ? this._toggle(e) : this._move("next", e); break;
                        case t.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e); break;
                        case t.ui.keyCode.LEFT:
                            this._move("prev", e); break;
                        case t.ui.keyCode.RIGHT:
                            this._move("next", e); break;
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.PAGE_UP:
                            this._move("first", e); break;
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_DOWN:
                            this._move("last", e); break;
                        default:
                            this.menu.trigger(e), i = !1 }
                    i && e.preventDefault() } },
            _selectFocusedItem: function(t) { var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t) },
            _select: function(t, e) { var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e) },
            _setAria: function(t) { var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e) },
            _setOption: function(t, e) {
                if ("icons" === t) { var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button) }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function(t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) },
            _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
            _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
            _resizeButton: function() { var t = this.options.width; return t === !1 ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t)) },
            _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
            _getCreateOptions: function() { var t = this._super(); return t.disabled = this.element.prop("disabled"), t },
            _parseOptions: function(e) { var i = this,
                    n = [];
                e.each(function(e, s) { n.push(i._parseOption(t(s), e)) }), this.items = n },
            _parseOption: function(t, e) { var i = t.parent("optgroup"); return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") } },
            _destroy: function() { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) }
        }]), t.widget("ui.slider", t.ui.mouse, { version: "1.12.0", widgetEventPrefix: "slide", options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 }, _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function() { var e, i, n = this.options,
                    s = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    r = []; for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; e < i; e++) r.push(o);
                this.handles = s.add(t(r.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) { t(this).data("ui-slider-handle-index", e) }) }, _createRange: function() { var e = this.options;
                e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) }, _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() }, _mouseCapture: function(e) { var i, n, s, o, r, a, l, c, h = this,
                    u = this.options; return !u.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) { var i = Math.abs(n - h.values(e));
                    (s > i || s === i && (e === h._lastChangedValue || h.values(e) === u.min)) && (s = i, o = t(this), r = e) }), a = this._start(e, r), a !== !1 && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), c = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? { left: 0, top: 0 } : { left: e.pageX - l.left - o.width() / 2, top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0)) }, _mouseStart: function() { return !0 }, _mouseDrag: function(t) { var e = { x: t.pageX, y: t.pageY },
                    i = this._normValueFromMouse(e); return this._slide(t, this._handleIndex, i), !1 }, _mouseStop: function(t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function(t) { var e, i, n, s, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o) }, _uiHash: function(t, e, i) { var n = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() }; return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n }, _hasMultipleValues: function() { return this.options.values && this.options.values.length }, _start: function(t, e) { return this._trigger("start", t, this._uiHash(e)) }, _slide: function(t, e, i) { var n, s, o = this.value(),
                    r = this.values();
                this._hasMultipleValues() && (s = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), r[e] = i), i !== o && (n = this._trigger("slide", t, this._uiHash(e, i, r)), n !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))) }, _stop: function(t, e) { this._trigger("stop", t, this._uiHash(e)) }, _change: function(t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) }, value: function(t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value() }, values: function(e, i) { var n, s, o; if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e); if (!arguments.length) return this._values(); if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value(); for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue() }, _setOption: function(e, i) { var n, s = 0; switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", ""); break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                        this._animateOff = !1; break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _setOptionDisabled: function(t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) }, _value: function() { var t = this.options.value; return t = this._trimAlignValue(t) }, _values: function(t) { var e, i, n; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]); return i } return [] }, _trimAlignValue: function(t) { if (t <= this._valueMin()) return this._valueMin(); if (t >= this._valueMax()) return this._valueMax(); var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i; return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5)) }, _calculateNewMax: function() { var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step,
                    n = Math.round((t - e) / i) * i;
                t = n + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision())) }, _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t }, _precisionOf: function(t) { var e = t.toString(),
                    i = e.indexOf("."); return i === -1 ? 0 : e.length - i - 1 }, _valueMin: function() { return this.options.min }, _valueMax: function() { return this.max }, _refreshRange: function(t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) }, _refreshValue: function() { var e, i, n, s, o, r = this.options.range,
                    a = this.options,
                    l = this,
                    c = !this._animateOff && a.animate,
                    h = {};
                this._hasMultipleValues() ? this.handles.each(function(n) { i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](h, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({ left: i + "%" }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: a.animate })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({ bottom: i + "%" }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: a.animate }))), e = i }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](h, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ width: i + "%" }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ height: i + "%" }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({ height: 100 - i + "%" }, a.animate)) }, _handleEvents: { keydown: function(e) { var i, n, s, o, r = t(e.target).data("ui-slider-handle-index"); switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, r), i === !1)) return } switch (o = this.options.step, n = s = this._hasMultipleValues() ? this.values(r) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            s = this._valueMin(); break;
                        case t.ui.keyCode.END:
                            s = this._valueMax(); break;
                        case t.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages); break;
                        case t.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages); break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (n === this._valueMax()) return;
                            s = this._trimAlignValue(n + o); break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (n === this._valueMin()) return;
                            s = this._trimAlignValue(n - o) }
                    this._slide(e, r, s) }, keyup: function(e) { var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active")) } } }), t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "sort",
            ready: !1,
            options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
            _isOverAxis: function(t, e, i) { return t >= e && t < e + i },
            _isFloating: function(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) },
            _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
            _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() },
            _setHandleClassName: function() { var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") }) },
            _destroy: function() { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this },
            _mouseCapture: function(e, i) { var n = null,
                    s = !1,
                    o = this; return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(e), t(e.target).parents().each(function() { if (t.data(this, o.widgetName + "-item") === o) return n = t(this), !1 }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !n || this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() { this === e.target && (s = !0) }), !s) || (this.currentItem = n, this._removeCurrentsFromItems(), 0))) },
            _mouseStart: function(e, i, n) { var s, o, r = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this)); return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0 },
            _mouseDrag: function(e) { var i, n, s, o, r = this.options,
                    a = !1; for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) { if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash()); break }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 },
            _mouseStop: function(e, i) { if (e) { if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) { var n = this,
                            s = this.placeholder.offset(),
                            o = this.options.axis,
                            r = {};
                        o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() { n._clear(e) }) } else this._clear(e, i); return !1 } },
            cancel: function() { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this },
            serialize: function(e) { var i = this._getItemsAsjQuery(e && e.connected),
                    n = []; return e = e || {}, t(i).each(function() { var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2])) }), !n.length && e.key && n.push(e.key + "="), n.join("&") },
            toArray: function(e) { var i = this._getItemsAsjQuery(e && e.connected),
                    n = []; return e = e || {}, i.each(function() { n.push(t(e.item || this).attr(e.attribute || "id") || "") }), n },
            _intersectsWith: function(t) { var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = t.left,
                    r = o + t.width,
                    a = t.top,
                    l = a + t.height,
                    c = this.offset.click.top,
                    h = this.offset.click.left,
                    u = "x" === this.options.axis || n + c > a && n + c < l,
                    d = "y" === this.options.axis || e + h > o && e + h < r,
                    p = u && d; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l },
            _intersectsWithPointer: function(t) { var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    o = n && s; return !!o && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) },
            _intersectsWithSides: function(t) { var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection(); return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e) },
            _getDragVerticalDirection: function() { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") },
            _getDragHorizontalDirection: function() { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") },
            refresh: function(t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this },
            _connectWith: function() { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith },
            _getItemsAsjQuery: function(e) {
                function i() { a.push(this) } var n, s, o, r, a = [],
                    l = [],
                    c = this._connectWith(); if (c && e)
                    for (n = c.length - 1; n >= 0; n--)
                        for (o = t(c[n], this.document[0]), s = o.length - 1; s >= 0; s--) r = t.data(o[s], this.widgetFullName), r && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]); for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i); return t(a) },
            _removeCurrentsFromItems: function() { var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) { for (var i = 0; i < e.length; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0 }) },
            _refreshItems: function(e) { this.items = [], this.containers = [this]; var i, n, s, o, r, a, l, c, h = this.items,
                    u = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith(); if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o)); for (i = u.length - 1; i >= 0; i--)
                    for (r = u[i][1], a = u[i][0], n = 0, c = a.length; n < c; n++) l = t(a[n]), l.data(this.widgetName + "-item", r), h.push({ item: l, instance: r, width: 0, height: 0, left: 0, top: 0 }) },
            refreshPositions: function(e) { this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var i, n, s, o; for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this },
            _createPlaceholder: function(e) { e = e || this; var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = { element: function() { var n = e.currentItem[0].nodeName.toLowerCase(),
                            s = t("<" + n + ">", e.document[0]); return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s }, update: function(t, s) { i && !n.forcePlaceholderSize || (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))) } }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder) },
            _createTrPlaceholder: function(e, i) { var n = this;
                e.children().each(function() { t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) }) },
            _contactContainers: function(e) { var i, n, s, o, r, a, l, c, h, u, d = null,
                    p = null; for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) { if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], p = i } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else { for (s = 1e4, o = null, h = d.floating || this._isFloating(this.currentItem), r = h ? "left" : "top", a = h ? "width" : "height", u = h ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], c = !1, e[u] - l > this.items[n][a] / 2 && (c = !0), Math.abs(e[u] - l) < s && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = c ? "up" : "down")); if (!o && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1 } },
            _createHelper: function(e) { var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem; return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), n },
            _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
            _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
            _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
            _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
            _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
            _setContainment: function() {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
            },
            _convertPositionTo: function(e, i) { i || (i = this.position); var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName); return { top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n } },
            _generatePosition: function(e) { var i, n, s = this.options,
                    o = e.pageX,
                    r = e.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), { top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft()) } },
            _rearrange: function(t, e, i, n) { i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var s = this.counter;
                this._delay(function() { s === this.counter && this.refreshPositions(!n) }) },
            _clear: function(t, e) {
                function i(t, e, i) { return function(n) { i._trigger(t, n, e._uiHash(e)) } }
                this.reverting = !1; var n, s = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !e && s.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (s.push(function(t) { this._trigger("remove", t, this._uiHash()) }), s.push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), s.push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) { for (n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval },
            _trigger: function() { t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() },
            _uiHash: function(e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } }
        }), t.widget("ui.spinner", { version: "1.12.0", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function() { var e = this._super(),
                    i = this.element; return t.each(["min", "max", "step"], function(t, n) { var s = i.attr(n);
                    null != s && s.length && (e[n] = s) }), e }, _events: { keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() }, keyup: "_stop", focus: function() { this.previous = this.element.val() }, blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t))) }, mousewheel: function(t, e) { if (e) { if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault() } }, "mousedown .ui-spinner-button": function(e) {
                    function i() { var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                        e || (this.element.trigger("focus"), this.previous = n, this._delay(function() { this.previous = n })) } var n;
                    n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, i.call(this) }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function(e) { if (t(e.currentTarget).hasClass("ui-state-active")) return this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") }, _draw: function() { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) }, _keydown: function(e) { var i = this.options,
                    n = t.ui.keyCode; switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0 } return !1 }, _start: function(t) { return !(!this.spinning && this._trigger("start", t) === !1 || (this.counter || (this.counter = 1), this.spinning = !0, 0)) }, _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) }, _spin: function(t, e) { var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, { value: i }) === !1 || (this._value(i), this.counter++) }, _increment: function(e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 }, _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t }, _precisionOf: function(t) { var e = t.toString(),
                    i = e.indexOf("."); return i === -1 ? 0 : e.length - i - 1 }, _adjustValue: function(t) { var e, i, n = this.options; return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t }, _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) }, _setOption: function(t, e) { var i, n, s; return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : ("max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e)) }, _setOptionDisabled: function(t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") }, _setOptions: a(function(t) { this._super(t) }), _parse: function(t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t }, _format: function(t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t }, _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function() { var t = this.value(); return null !== t && t === this._adjustValue(t) }, _value: function(t, e) { var i; "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh() }, _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) }, stepUp: a(function(t) { this._stepUp(t) }), _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) }, stepDown: a(function(t) { this._stepDown(t) }), _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) }, pageUp: a(function(t) { this._stepUp((t || 1) * this.options.page) }), pageDown: a(function(t) { this._stepDown((t || 1) * this.options.page) }), value: function(t) { return arguments.length ? void a(this._value).call(this, t) : this._parse(this.element.val()) }, widget: function() { return this.uiSpinner } }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } }), t.ui.spinner, t.widget("ui.tabs", { version: "1.12.0", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function() { var t = /#.*$/; return function(e) { var i, n;
                    i = e.href.replace(t, ""), n = location.href.replace(t, ""); try { i = decodeURIComponent(i) } catch (t) {} try { n = decodeURIComponent(n) } catch (t) {} return e.hash.length > 1 && i === n } }(), _create: function() { var e = this,
                    i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) { return e.tabs.index(t) }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active) }, _initialActive: function() { var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1); return null === e && (n && this.tabs.each(function(i, s) { if (t(s).attr("aria-controls") === n) return e = i, !1 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && e !== -1 || (e = !!this.tabs.length && 0)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), e === -1 && (e = !i && 0)), !i && e === !1 && this.anchors.length && (e = 0), e }, _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } }, _tabKeydown: function(e) { var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    n = this.tabs.index(i),
                    s = !0; if (!this._handlePageNav(e)) { switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++; break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--; break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1; break;
                        case t.ui.keyCode.HOME:
                            n = 0; break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                        default:
                            return }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", n) }, this.delay)) } }, _panelKeydown: function(e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) }, _handlePageNav: function(e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 }, _findNextTab: function(e, i) {
                function n() { return e > s && (e = 0), e < 0 && (e = s), e } for (var s = this.tabs.length - 1; t.inArray(n(), this.options.disabled) !== -1;) e = i ? e + 1 : e - 1; return e }, _focusNextTab: function(t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t }, _setOption: function(t, e) { return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e))) }, _sanitizeSelector: function(t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function() { var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) { return i.index(t) }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh() }, _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) }, _processTabs: function() { var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) { var s, o, r, a = t(n).uniqueId().attr("id"),
                        l = t(n).closest("li"),
                        c = l.attr("aria-controls");
                    e._isLocal(n) ? (s = n.hash, r = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + r, o = e.element.find(s), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({ "aria-controls": r, "aria-labelledby": a }), o.attr("aria-labelledby", a) }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels))) }, _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) }, _createPanel: function(e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) }, _setOptionDisabled: function(e) { var i, n, s; for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), e === !0 || t.inArray(s, e) !== -1 ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0) }, _setupEvents: function(e) { var i = {};
                e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs) }, _setupHeightStyle: function(e) { var i, n = this.element.parent(); "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() { var e = t(this),
                        n = e.css("position"); "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0)) }), this.element.children().not(this.panels).each(function() { i -= t(this).outerHeight(!0) }), this.panels.each(function() { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() { i = Math.max(i, t(this).height("").height()) }).height(i)) }, _eventHandler: function(e) { var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s.closest("li"),
                    r = o[0] === n[0],
                    a = r && i.collapsible,
                    l = a ? t() : this._getPanelForTab(o),
                    c = n.length ? this._getPanelForTab(n) : t(),
                    h = { oldTab: n, oldPanel: c, newTab: a ? t() : o, newPanel: l };
                e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = !a && this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, h)) }, _toggle: function(e, i) {
                function n() { o.running = !1, o._trigger("activate", e, i) }

                function s() { o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n()) } var o = this,
                    r = i.newPanel,
                    a = i.oldPanel;
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() { o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _activate: function(e) { var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function(e) { return e === !1 ? t() : this.tabs.eq(e) }, _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e }, _destroy: function() { this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() { var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls") }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "") }, enable: function(e) { var i = this.options.disabled;
                i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) { return t !== e ? t : null }) : t.map(this.tabs, function(t, i) { return i !== e ? i : null })), this._setOptionDisabled(i)) }, disable: function(e) { var i = this.options.disabled; if (i !== !0) { if (void 0 === e) i = !0;
                    else { if (e = this._getIndex(e), t.inArray(e, i) !== -1) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e] }
                    this._setOptionDisabled(i) } }, load: function(e, i) { e = this._getIndex(e); var n = this,
                    s = this.tabs.eq(e),
                    o = s.find(".ui-tabs-anchor"),
                    r = this._getPanelForTab(s),
                    a = { tab: s, panel: r },
                    l = function(t, e) { "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) { setTimeout(function() { r.html(t), n._trigger("load", i, a), l(s, e) }, 1) }).fail(function(t, e) { setTimeout(function() { l(t, e) }, 1) }))) }, _ajaxSettings: function(e, i, n) { var s = this; return { url: e.attr("href"), beforeSend: function(e, o) { return s._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, n)) } } }, _getPanelForTab: function(e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) } }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } }), t.ui.tabs, t.widget("ui.tooltip", { version: "1.12.0", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null }, _addDescribedBy: function(e, i) { var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" "))) }, _removeDescribedBy: function(e) { var i = e.data("ui-tooltip-id"),
                    n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n);
                s !== -1 && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby") }, _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) }, _setOption: function(e, i) { var n = this;
                this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) { n._updateContent(e.element) }) }, _setOptionDisabled: function(t) { this[t ? "_disable" : "_enable"]() }, _disable: function() { var e = this;
                t.each(this.tooltips, function(i, n) { var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0], e.close(s, !0) }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var e = t(this); if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") })) }, _enable: function() { this.disabledTitles.each(function() { var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")) }), this.disabledTitles = t([]) }, open: function(e) { var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() { var e, n = t(this);
                    n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = { element: this, title: n.attr("title") }, n.attr("title", "")) }), this._registerCloseHandlers(e, n), this._updateContent(n, e)) }, _updateContent: function(t, e) { var i, n = this.options.content,
                    s = this,
                    o = e ? e.type : null; return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : (i = n.call(t[0], function(i) { s._delay(function() { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) }), void(i && this._open(e, t, i))) }, _open: function(e, i, n) {
                function s(t) { c.of = t, r.is(":hidden") || r.position(c) } var o, r, a, l, c = t.extend({}, this.options.position); if (n) { if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = t("<div>").html(r.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: s }), s(e)) : r.position(t.extend({ of: i }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() { r.is(":visible") && (s(c.of), clearInterval(a)) }, t.fx.interval)), this._trigger("open", e, { tooltip: r }) } }, _registerCloseHandlers: function(e, i) { var n = { keyup: function(e) { if (e.keyCode === t.ui.keyCode.ESCAPE) { var n = t.Event(e);
                            n.currentTarget = i[0], this.close(n, !0) } } };
                i[0] !== this.element[0] && (n.remove = function() { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n) }, close: function(e) { var i, n = this,
                    s = t(e ? e.currentTarget : this.element),
                    o = this._find(s); return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { n._removeTooltip(t(this)) }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) { t(i.element).attr("title", i.title), delete n.parents[e] }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open") }, _tooltip: function(e) { var i = t("<div>").attr("role", "tooltip"),
                    n = t("<div>").appendTo(i),
                    s = i.uniqueId().attr("id"); return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = { element: e, tooltip: i } }, _find: function(t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null }, _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] }, _appendTo: function(t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e }, _destroy: function() { var e = this;
                t.each(this.tooltips, function(i, n) { var s = t.Event("blur"),
                        o = n.element;
                    s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title")) }), this.liveRegion.remove() } }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } }), t.ui.tooltip
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery),
function(t) { "use strict";

    function e() { var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var i in e)
            if (void 0 !== t.style[i]) return { end: e[i] };
        return !1 }
    t.fn.emulateTransitionEnd = function(e) { var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() { i = !0 }); var s = function() { i || t(n).trigger(t.support.transition.end) }; return setTimeout(s, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }) }) }(jQuery),
function(t) { "use strict";

    function e(e) { return this.each(function() { var i = t(this),
                s = i.data("bs.alert");
            s || i.data("bs.alert", s = new n(this)), "string" == typeof e && s[e].call(i) }) } var i = '[data-dismiss="alert"]',
        n = function(e) { t(e).on("click", i, this.close) };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() { r.detach().trigger("closed.bs.alert").remove() } var s = t(this),
            o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")); var r = t("#" === o ? [] : o);
        e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i()) }; var s = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() { return t.fn.alert = s, this }, t(document).on("click.bs.alert.data-api", i, n.prototype.close) }(jQuery),
function(t) {
    "use strict";

    function e(e) { return this.each(function() { var n = t(this),
                s = n.data("bs.button"),
                o = "object" == typeof e && e;
            s || n.data("bs.button", s = new i(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e) }) }
    var i = function(e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1 };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) { var i = "disabled",
            n = this.$element,
            s = n.is("input") ? "val" : "html",
            o = n.data();
        e += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() { n[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1)) }, this), 0) }, i.prototype.toggle = function() { var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]'); if (e.length) { var i = this.$element.find("input"); "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() { return t.fn.button = n, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) { var n = t(i.target).closest(".btn");
        e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) })
}(jQuery),
function(t) { "use strict";

    function e(e) { return this.each(function() { var n = t(this),
                s = n.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : o.slide;
            s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : r ? s[r]() : o.interval && s.pause().cycle() }) } var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) { switch (t.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            t.preventDefault() } }, i.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) { var i = this.getItemIndex(e); if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e; var n = "prev" == t ? -1 : 1,
            s = (i + n) % this.$items.length; return this.$items.eq(s) }, i.prototype.to = function(t) { var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t)) }, i.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() { if (!this.sliding) return this.slide("next") }, i.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, i.prototype.slide = function(e, n) { var s = this.$element.find(".item.active"),
            o = n || this.getItemForDirection(e, s),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this; if (o.hasClass("active")) return this.sliding = !1; var c = o[0],
            h = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a }); if (this.$element.trigger(h), !h.isDefaultPrevented()) { if (this.sliding = !0, r && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                u && u.addClass("active") } var d = t.Event("slid.bs.carousel", { relatedTarget: c, direction: a }); return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(a), o.addClass(a), s.one("bsTransitionEnd", function() { o.removeClass([e, a].join(" ")).addClass("active"), s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(d) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this } }; var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() { return t.fn.carousel = n, this }; var s = function(i) { var n, s = t(this),
            o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")); if (o.hasClass("carousel")) { var r = t.extend({}, o.data(), s.data()),
                a = s.attr("data-slide-to");
            a && (r.interval = !1), e.call(o, r), a && o.data("bs.carousel").to(a), i.preventDefault() } };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() { var i = t(this);
            e.call(i, i.data()) }) }) }(jQuery),
function(t) { "use strict";

    function e(e) { var i; return t(e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")) }

    function i(e) { return this.each(function() { var i = t(this),
                s = i.data("bs.collapse"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);!s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), "string" == typeof e && s[e]() }) } var n = function(e, i) { this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = { toggle: !0 }, n.prototype.dimension = function() { return this.$element.hasClass("width") ? "width" : "height" }, n.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(s && s.length && (e = s.data("bs.collapse")) && e.transitioning)) { var o = t.Event("show.bs.collapse"); if (this.$element.trigger(o), !o.isDefaultPrevented()) { s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null)); var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var a = function() { this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!t.support.transition) return a.call(this); var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l]) } } } }, n.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var e = t.Event("hide.bs.collapse"); if (this.$element.trigger(e), !e.isDefaultPrevented()) { var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var s = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this) } } }, n.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, n.prototype.getParent = function() { return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) { var s = t(n);
            this.addAriaAndCollapsedClass(e(s), s) }, this)).end() }, n.prototype.addAriaAndCollapsedClass = function(t, e) { var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i) }; var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() { return t.fn.collapse = s, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) { var s = t(this);
        s.attr("data-target") || n.preventDefault(); var o = e(s),
            r = o.data("bs.collapse"),
            a = r ? "toggle" : s.data();
        i.call(o, a) }) }(jQuery),
function(t) { "use strict";

    function e(e) { var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")); var n = i && t(i); return n && n.length ? n : e.parent() }

    function i(i) { i && 3 === i.which || (t(s).remove(), t(o).each(function() { var n = t(this),
                s = e(n),
                o = { relatedTarget: this };
            s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o))))) })) }

    function n(e) { return this.each(function() { var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i) }) } var s = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        r = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
    r.VERSION = "3.3.7", r.prototype.toggle = function(n) { var s = t(this); if (!s.is(".disabled, :disabled")) { var o = e(s),
                r = o.hasClass("open"); if (i(), !r) { "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i); var a = { relatedTarget: this }; if (o.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a)) } return !1 } }, r.prototype.keydown = function(i) { if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) { var n = t(this); if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) { var s = e(n),
                    r = s.hasClass("open"); if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && s.find(o).trigger("focus"), n.trigger("click"); var a = s.find(".dropdown-menu li:not(.disabled):visible a"); if (a.length) { var l = a.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus") } } } }; var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = a, this }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown) }(jQuery),
function(t) { "use strict";

    function e(e, n) { return this.each(function() { var s = t(this),
                o = s.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            o || s.data("bs.modal", o = new i(this, r)), "string" == typeof e ? o[e](n) : r.show && o.show(n) }) } var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) { var n = this,
            s = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { n.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var s = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus(); var o = t.Event("shown.bs.modal", { relatedTarget: e });
            s ? n.$dialog.one("bsTransitionEnd", function() { n.$element.trigger("focus").trigger(o) }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o) })) }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() { var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) { var n = this,
            s = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var o = t.support.transition && s; if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var r = function() { n.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r() } else e && e() }, i.prototype.handleUpdate = function() { this.adjustDialog() }, i.prototype.adjustDialog = function() { var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() { var t = window.innerWidth; if (!t) { var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left) }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function() { var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function() { var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t); var e = t.offsetWidth - t.clientWidth; return this.$body[0].removeChild(t), e }; var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() { return t.fn.modal = n, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) { var n = t(this),
            s = n.attr("href"),
            o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            r = o.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(s) && s }, o.data(), n.data());
        n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) { t.isDefaultPrevented() || o.one("hidden.bs.modal", function() { n.is(":visible") && n.trigger("focus") }) }), e.call(o, r, this) }) }(jQuery),
function(t) { "use strict";

    function e(e) { return this.each(function() { var n = t(this),
                s = n.data("bs.tooltip"),
                o = "object" == typeof e && e;!s && /destroy|hide/.test(e) || (s || n.data("bs.tooltip", s = new i(this, o)), "string" == typeof e && s[e]()) }) } var i = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, n) { if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var s = this.options.trigger.split(" "), o = s.length; o--;) { var r = s[o]; if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) { var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.getOptions = function(e) { return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() { var e = {},
            i = this.getDefaults(); return this._options && t.each(this._options, function(t, n) { i[t] != n && (e[t] = n) }), e }, i.prototype.enter = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }, i.prototype.isInStateTrue = function() { for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1 }, i.prototype.leave = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide() }, i.prototype.show = function() { var e = t.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(e); var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (e.isDefaultPrevented() || !n) return; var s = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade"); var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var h = this.getPosition(),
                u = o[0].offsetWidth,
                d = o[0].offsetHeight; if (c) { var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && h.bottom + d > f.bottom ? "top" : "top" == a && h.top - d < f.top ? "bottom" : "right" == a && h.right + u > f.width ? "left" : "left" == a && h.left - u < f.left ? "right" : a, o.removeClass(p).addClass(a) } var g = this.getCalculatedOffset(a, h, u, d);
            this.applyPlacement(g, a); var m = function() { var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s) };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m() } }, i.prototype.applyPlacement = function(e, i) { var n = this.tip(),
            s = n[0].offsetWidth,
            o = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({ using: function(t) { n.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), n.addClass("in"); var l = n[0].offsetWidth,
            c = n[0].offsetHeight; "top" == i && c != o && (e.top = e.top + o - c); var h = this.getViewportAdjustedDelta(i, e, l, c);
        h.left ? e.left += h.left : e.top += h.top; var u = /top|bottom/.test(i),
            d = u ? 2 * h.left - s + l : 2 * h.top - o + c,
            p = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], u) }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, i.prototype.setContent = function() { var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right") }, i.prototype.hide = function(e) {
        function n() { "in" != s.hoverState && o.detach(), s.$element && s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e() } var s = this,
            o = t(this.$tip),
            r = t.Event("hide.bs." + this.type); if (this.$element.trigger(r), !r.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this }, i.prototype.fixTitle = function() { var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, i.prototype.hasContent = function() { return this.getTitle() }, i.prototype.getPosition = function(e) { e = e || this.$element; var i = e[0],
            n = "BODY" == i.tagName,
            s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, { width: s.right - s.left, height: s.bottom - s.top })); var o = window.SVGElement && i instanceof window.SVGElement,
            r = n ? { top: 0, left: 0 } : o ? null : e.offset(),
            a = { scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            l = n ? { width: t(window).width(), height: t(window).height() } : null; return t.extend({}, s, a, l, r) }, i.prototype.getCalculatedOffset = function(t, e, i, n) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - n / 2, left: e.left - i } : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) { var s = { top: 0, left: 0 }; if (!this.$viewport) return s; var o = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport); if (/right|left/.test(t)) { var a = e.top - o - r.scroll,
                l = e.top + o - r.scroll + n;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l) } else { var c = e.left - o,
                h = e.left + o + i;
            c < r.left ? s.left = r.left - c : h > r.right && (s.left = r.left + r.width - h) } return s }, i.prototype.getTitle = function() { var t = this.$element,
            e = this.options; return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title) }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t)); return t }, i.prototype.tip = function() { if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) { var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }, i.prototype.destroy = function() { var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null }) }; var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = n, this } }(jQuery),
function(t) { "use strict";

    function e(e) { return this.each(function() { var n = t(this),
                s = n.data("bs.popover"),
                o = "object" == typeof e && e;!s && /destroy|hide/.test(e) || (s || n.data("bs.popover", s = new i(this, o)), "string" == typeof e && s[e]()) }) } var i = function(t, e) { this.init("popover", t, e) }; if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.setContent = function() { var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, i.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, i.prototype.getContent = function() { var t = this.$element,
            e = this.options; return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() { return t.fn.popover = n, this } }(jQuery),
function(t) { "use strict";

    function e(i, n) { this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

    function i(i) { return this.each(function() { var n = t(this),
                s = n.data("bs.scrollspy"),
                o = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]() }) }
    e.VERSION = "3.3.7", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() { var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var e = t(this),
                s = e.data("target") || e.attr("href"),
                o = /^#./.test(s) && t(s); return o && o.length && o.is(":visible") && [
                [o[i]().top + n, s]
            ] || null }).sort(function(t, e) { return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) }) }, e.prototype.process = function() { var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            o = this.targets,
            r = this.activeTarget; if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = o[o.length - 1]) && this.activate(t); if (r && e < s[0]) return this.activeTarget = null, this.clear(); for (t = s.length; t--;) r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t]) }, e.prototype.activate = function(e) { this.activeTarget = e, this.clear(); var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy") }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = n, this }, t(window).on("load.bs.scrollspy.data-api", function() { t('[data-spy="scroll"]').each(function() { var e = t(this);
            i.call(e, e.data()) }) }) }(jQuery),
function(t) {
    "use strict";

    function e(e) { return this.each(function() { var n = t(this),
                s = n.data("bs.tab");
            s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]() }) }
    var i = function(e) { this.element = t(e) };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() { var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target"); if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) { var s = i.find(".active:last a"),
                o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                r = t.Event("show.bs.tab", { relatedTarget: s[0] }); if (s.trigger(o), e.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) { var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() { s.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: s[0] }) }) } } }, i.prototype.activate = function(e, n, s) {
        function o() { r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s() } var r = n.find("> .active"),
            a = s && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), r.removeClass("in") };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() { return t.fn.tab = n, this };
    var s = function(i) { i.preventDefault(), e.call(t(this), "show") };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s);
}(jQuery),
function(t) { "use strict";

    function e(e) { return this.each(function() { var n = t(this),
                s = n.data("bs.affix"),
                o = "object" == typeof e && e;
            s || n.data("bs.affix", s = new i(this, o)), "string" == typeof e && s[e]() }) } var i = function(e, n) { this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, n) { var s = this.$target.scrollTop(),
            o = this.$element.offset(),
            r = this.$target.height(); if (null != i && "top" == this.affixed) return s < i && "top"; if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + r <= t - n) && "bottom"; var a = null == this.affixed,
            l = a ? s : o.top,
            c = a ? r : e; return null != i && s <= i ? "top" : null != n && l + c >= t - n && "bottom" }, i.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix"); var t = this.$target.scrollTop(),
            e = this.$element.offset(); return this.pinnedOffset = e.top - t }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var e = this.$element.height(),
                n = this.options.offset,
                s = n.top,
                o = n.bottom,
                r = Math.max(t(document).height(), t(document.body).height()); "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element)); var a = this.getState(r, e, s, o); if (this.affixed != a) { null != this.unpin && this.$element.css("top", ""); var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix"); if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == a && this.$element.offset({ top: r - e - o }) } }; var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() { return t.fn.affix = n, this }, t(window).on("load", function() { t('[data-spy="affix"]').each(function() { var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n) }) }) }(jQuery), ! function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) { "use strict";

    function i(i, o, a) {
        function l(t, e, n) { var s, o = "$()." + i + '("' + e + '")'; return t.each(function(t, l) { var c = a.data(l, i); if (!c) return void r(i + " not initialized. Cannot call methods, i.e. " + o); var h = c[e]; if (!h || "_" == e.charAt(0)) return void r(o + " is not a valid method"); var u = h.apply(c, n);
                s = void 0 === s ? u : s }), void 0 !== s ? s : t }

        function c(t, e) { t.each(function(t, n) { var s = a.data(n, i);
                s ? (s.option(e), s._init()) : (s = new o(n, e), a.data(n, i, s)) }) }
        a = a || e || t.jQuery, a && (o.prototype.option || (o.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function(t) { if ("string" == typeof t) { var e = s.call(arguments, 1); return l(this, t, e) } return c(this, t), this }, n(a)) }

    function n(t) {!t || t && t.bridget || (t.bridget = i) } var s = Array.prototype.slice,
        o = t.console,
        r = "undefined" == typeof o ? function() {} : function(t) { o.error(t) }; return n(e || t.jQuery), i }),
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {} var e = t.prototype; return e.on = function(t, e) { if (t && e) { var i = this._events = this._events || {},
                n = i[t] = i[t] || []; return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {}; return n[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = 0,
                s = i[n];
            e = e || []; for (var o = this._onceEvents && this._onceEvents[t]; s;) { var r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e), n += r ? 0 : 1, s = i[n] } return this } }, t }),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() { "use strict";

    function t(t) { var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e); return i && e }

    function e() {}

    function i() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; c > e; e++) { var i = l[e];
            t[i] = 0 } return t }

    function n(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

    function s() { if (!h) { h = !0; var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box"; var i = document.body || document.documentElement;
            i.appendChild(e); var s = n(e);
            o.isBoxSizeOuter = r = 200 == t(s.width), i.removeChild(e) } }

    function o(e) { if (s(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) { var o = n(e); if ("none" == o.display) return i(); var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight; for (var h = a.isBorderBox = "border-box" == o.boxSizing, u = 0; c > u; u++) { var d = l[u],
                    p = o[d],
                    f = parseFloat(p);
                a[d] = isNaN(f) ? 0 : f } var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                _ = a.borderTopWidth + a.borderBottomWidth,
                w = h && r,
                x = t(o.width);
            x !== !1 && (a.width = x + (w ? 0 : g + b)); var C = t(o.height); return C !== !1 && (a.height = C + (w ? 0 : m + _)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + _), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a } } var r, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        c = l.length,
        h = !1; return o }),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() { "use strict"; var t = function() { var t = Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var n = e[i],
                s = n + "MatchesSelector"; if (t[s]) return s } }(); return function(e, i) { return e[t](i) } }),
function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) { var i = {};
    i.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function(t, e) { return (t % e + e) % e }, i.makeArray = function(t) { var e = []; if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t); return e }, i.removeFrom = function(t, e) { var i = t.indexOf(e); - 1 != i && t.splice(i, 1) }, i.getParent = function(t, i) { for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) { var e = "on" + t.type;
        this[e] && this[e](t) }, i.filterFindElements = function(t, n) { t = i.makeArray(t); var s = []; return t.forEach(function(t) { if (t instanceof HTMLElement) { if (!n) return void s.push(t);
                e(t, n) && s.push(t); for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o]) } }), s }, i.debounceMethod = function(t, e, i) { var n = t.prototype[e],
            s = e + "Timeout";
        t.prototype[e] = function() { var t = this[s];
            t && clearTimeout(t); var e = arguments,
                o = this;
            this[s] = setTimeout(function() { n.apply(o, e), delete o[s] }, i || 100) } }, i.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() }; var n = t.console; return i.htmlInit = function(e, s) { i.docReady(function() { var o = i.toDashed(s),
                r = "data-" + o,
                a = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + o),
                c = i.makeArray(a).concat(i.makeArray(l)),
                h = r + "-options",
                u = t.jQuery;
            c.forEach(function(t) { var i, o = t.getAttribute(r) || t.getAttribute(h); try { i = o && JSON.parse(o) } catch (e) { return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + e)) } var a = new e(t, i);
                u && u.data(t, s, a) }) }) }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) { "use strict";

    function i(t) { for (var e in t) return !1; return e = null, !0 }

    function n(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

    function s(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) } var o = document.documentElement.style,
        r = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
        c = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        h = n.prototype = Object.create(t.prototype);
    h.constructor = n, h._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, h.handleEvent = function(t) { var e = "on" + t.type;
        this[e] && this[e](t) }, h.getSize = function() { this.size = e(this.element) }, h.css = function(t) { var e = this.element.style; for (var i in t) { var n = c[i] || i;
            e[n] = t[i] } }, h.getPosition = function() { var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            s = t[i ? "top" : "bottom"],
            o = this.layout.size,
            r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10),
            a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? o.paddingLeft : o.paddingRight, a -= i ? o.paddingTop : o.paddingBottom, this.position.x = r, this.position.y = a }, h.layoutPosition = function() { var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            s = i ? "paddingLeft" : "paddingRight",
            o = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[s];
        e[o] = this.getXValue(a), e[r] = ""; var l = n ? "paddingTop" : "paddingBottom",
            c = n ? "top" : "bottom",
            h = n ? "bottom" : "top",
            u = this.position.y + t[l];
        e[c] = this.getYValue(u), e[h] = "", this.css(e), this.emitEvent("layout", [this]) }, h.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, h.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, h._transitionTo = function(t, e) { this.getPosition(); var i = this.position.x,
            n = this.position.y,
            s = parseInt(t, 10),
            o = parseInt(e, 10),
            r = s === this.position.x && o === this.position.y; if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition(); var a = t - i,
            l = e - n,
            c = {};
        c.transform = this.getTranslate(a, l), this.transition({ to: c, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, h.getTranslate = function(t, e) { var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"); return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, h.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, h.moveTo = h._transitionTo, h.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, h._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, h.transition = function(t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var n = this.element.offsetHeight;
            n = null }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var u = "opacity," + s(a);
    h.enableTransition = function() { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: u, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1) } }, h.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, h.onotransitionend = function(t) { this.ontransitionend(t) }; var d = { "-webkit-transform": "transform" };
    h.ontransitionend = function(t) { if (t.target === this.element) { var e = this._transn,
                n = d[t.propertyName] || t.propertyName; if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) { var s = e.onEnd[n];
                s.call(this), delete e.onEnd[n] }
            this.emitEvent("transitionEnd", [this]) } }, h.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1 }, h._removeStyles = function(t) { var e = {}; for (var i in t) e[i] = "";
        this.css(e) }; var p = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return h.removeTransitionStyles = function() { this.css(p) }, h.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, h.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, h.remove = function() { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, h.reveal = function() { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, h.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, h.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, h.hide = function() { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, h.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, h.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n }),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, s, o) { return e(t, i, n, s, o) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, n, s) { "use strict";

    function o(t, e) { var i = n.getQueryElement(t); if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e); var s = ++u;
        this.element.outlayerGUID = s, d[s] = this, this._create(); var o = this._getOption("initLayout");
        o && this.layout() }

    function r(t) {
        function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e }

    function a(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2]; if (!i.length) return 0;
        i = parseFloat(i); var s = f[n] || 1; return i * s } var l = t.console,
        c = t.jQuery,
        h = function() {},
        u = 0,
        d = {};
    o.namespace = "outlayer", o.Item = s, o.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var p = o.prototype;
    n.extend(p, e.prototype), p.option = function(t) { n.extend(this.options, t) }, p._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, o.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, p._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle); var t = this._getOption("resize");
        t && this.bindResize() }, p.reloadItems = function() { this.items = this._itemize(this.element.children) }, p._itemize = function(t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) { var o = e[s],
                r = new i(o, this);
            n.push(r) } return n }, p._filterFindItemElements = function(t) { return n.filterFindElements(t, this.options.itemSelector) }, p.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, p.layout = function() { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0 }, p._init = p.layout, p._resetLayout = function() { this.getSize() }, p.getSize = function() { this.size = i(this.element) }, p._getMeasurement = function(t, e) { var n, s = this.options[t];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? i(n)[e] : s) : this[t] = 0 }, p.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, p._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, p._layoutItems = function(t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var i = [];
            t.forEach(function(t) { var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n) }, this), this._processLayoutQueue(i) } }, p._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, p._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, p.updateStagger = function() { var t = this.options.stagger; return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger) }, p._positionItem = function(t, e, i, n, s) { n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i)) }, p._postLayout = function() { this.resizeContainer() }, p.resizeContainer = function() { var t = this._getOption("resizeContainer"); if (t) { var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, p._getContainerSize = h, p._setContainerMeasure = function(t, e) { if (void 0 !== t) { var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, p._emitCompleteOnItems = function(t, e) {
        function i() { s.dispatchEvent(t + "Complete", null, [e]) }

        function n() { r++, r == o && i() } var s = this,
            o = e.length; if (!e || !o) return void i(); var r = 0;
        e.forEach(function(e) { e.once(t, n) }) }, p.dispatchEvent = function(t, e, i) { var n = e ? [e].concat(i) : i; if (this.emitEvent(t, n), c)
            if (this.$element = this.$element || c(this.element), e) { var s = c.Event(e);
                s.type = t, this.$element.trigger(s, i) } else this.$element.trigger(t, i) }, p.ignore = function(t) { var e = this.getItem(t);
        e && (e.isIgnored = !0) }, p.unignore = function(t) { var e = this.getItem(t);
        e && delete e.isIgnored }, p.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, p.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, p._find = function(t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0 }, p._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, p._getBoundingRect = function() { var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, p._manageStamp = h, p._getElementOffset = function(t) { var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            s = i(t),
            o = { left: e.left - n.left - s.marginLeft, top: e.top - n.top - s.marginTop, right: n.right - e.right - s.marginRight, bottom: n.bottom - e.bottom - s.marginBottom }; return o }, p.handleEvent = n.handleEvent, p.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, p.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, p.onresize = function() { this.resize() }, n.debounceMethod(o, "onresize", 100), p.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, p.needsResizeLayout = function() { var t = i(this.element),
            e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, p.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, p.appended = function(t) { var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e)) }, p.prepended = function(t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, p.reveal = function(t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.reveal() }) } }, p.hide = function(t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.hide() }) } }, p.revealItemElements = function(t) { var e = this.getItems(t);
        this.reveal(e) }, p.hideItemElements = function(t) { var e = this.getItems(t);
        this.hide(e) }, p.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, p.getItems = function(t) { t = n.makeArray(t); var e = []; return t.forEach(function(t) { var i = this.getItem(t);
            i && e.push(i) }, this), e }, p.remove = function(t) { var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), n.removeFrom(this.items, t) }, this) }, p.destroy = function() { var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID;
        delete d[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace) }, o.data = function(t) { t = n.getQueryElement(t); var e = t && t.outlayerGUID; return e && d[e] }, o.create = function(t, e) { var i = r(o); return i.defaults = n.extend({}, o.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, o.compatOptions), i.namespace = t, i.data = o.data, i.Item = r(s), n.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i }; var f = { ms: 1, s: 1e3 }; return o.Item = s, o }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) { "use strict";

    function e() { t.Item.apply(this, arguments) } var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() { this.id = this.layout.itemGUID++, n.call(this), this.sortData = {} }, i.updateSortData = function() { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData,
                e = this.layout._sorters; for (var i in t) { var n = e[i];
                this.sortData[i] = n(this.element, this) } } }; var s = i.destroy; return i.destroy = function() { s.apply(this, arguments), this.css({ display: "" }) }, e }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) { "use strict";

    function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } var n = i.prototype,
        s = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"]; return s.forEach(function(t) { n[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), n.needsVerticalResizeLayout = function() { var e = t(this.isotope.element),
            i = this.isotope.size && e; return i && e.innerHeight != this.isotope.size.innerHeight }, n._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, n.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, n.getRowHeight = function() { this.getSegmentSize("row", "Height") }, n.getSegmentSize = function(t, e) { var i = t + e,
            n = "outer" + e; if (this._getMeasurement(i, n), !this[i]) { var s = this.getFirstItemSize();
            this[i] = s && s[n] || this.isotope.size["inner" + e] } }, n.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, n.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, n.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
        function s() { i.apply(this, arguments) } return s.prototype = Object.create(n), s.prototype.constructor = s, e && (s.options = e), s.prototype.namespace = t, i.modes[t] = s, s }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, e) { var i = t.create("masonry"); return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0 }, i.prototype.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth } var n = this.columnWidth += this.gutter,
            s = this.containerWidth + this.gutter,
            o = s / n,
            r = n - s % n,
            a = r && 1 > r ? "round" : "floor";
        o = Math[a](o), this.cols = Math.max(o, 1) }, i.prototype.getContainerWidth = function() { var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth }, i.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols); for (var s = this._getColGroup(n), o = Math.min.apply(Math, s), r = s.indexOf(o), a = { x: this.columnWidth * r, y: o }, l = o + t.size.outerHeight, c = this.cols + 1 - s.length, h = 0; c > h; h++) this.colYs[r + h] = l; return a }, i.prototype._getColGroup = function(t) { if (2 > t) return this.colYs; for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) { var s = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, s) } return e }, i.prototype._manageStamp = function(t) { var i = e(t),
            n = this._getElementOffset(t),
            s = this._getOption("originLeft"),
            o = s ? n.left : n.right,
            r = o + i.outerWidth,
            a = Math.floor(o / this.columnWidth);
        a = Math.max(0, a); var l = Math.floor(r / this.columnWidth);
        l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l); for (var c = this._getOption("originTop"), h = (c ? n.top : n.bottom) + i.outerHeight, u = a; l >= u; u++) this.colYs[u] = Math.max(h, this.colYs[u]) }, i.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, i.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, i.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) { "use strict"; var i = t.create("masonry"),
        n = i.prototype,
        s = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }; for (var o in e.prototype) s[o] || (n[o] = e.prototype[o]); var r = n.measureColumns;
    n.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) }; var a = n._getOption; return n._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("fitRows"),
        i = e.prototype; return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var n = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n }, i._getContainerSize = function() { return { height: this.maxY } }, e }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype; return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function() { return { height: this.y } }, e }),
function(t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, s, o, r, a) { return e(t, i, n, s, o, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, n, s, o, r) {
    function a(t, e) { return function(i, n) { for (var s = 0; s < t.length; s++) { var o = t[s],
                    r = i.sortData[o],
                    a = n.sortData[o]; if (r > a || a > r) { var l = void 0 !== e[o] ? e[o] : e,
                        c = l ? 1 : -1; return (r > a ? 1 : -1) * c } } return 0 } }
    var l = t.jQuery,
        c = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
        h = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    h.Item = o, h.LayoutMode = r;
    var u = h.prototype;
    u._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t);
    }, u.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, u._itemize = function() { for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) { var n = t[i];
            n.id = this.itemGUID++ } return this._updateItemsSortData(t), t }, u._initLayoutMode = function(t) { var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this) }, u.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, u._layout = function() { var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, u.arrange = function(t) { this.option(t), this._getIsInstant(); var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, u._init = u.arrange, u._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, u._getIsInstant = function() { var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited; return this._isInstant = e, e }, u._bindArrangeComplete = function() {
        function t() { e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems]) } var e, i, n, s = this;
        this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { n = !0, t() }) }, u._filter = function(t) { var e = this.options.filter;
        e = e || "*"; for (var i = [], n = [], s = [], o = this._getFilterTest(e), r = 0; r < t.length; r++) { var a = t[r]; if (!a.isIgnored) { var l = o(a);
                l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || s.push(a) } } return { matches: i, needReveal: n, needHide: s } }, u._getFilterTest = function(t) { return l && this.options.isJQueryFiltering ? function(e) { return l(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return n(e.element, t) } }, u.updateSortData = function(t) { var e;
        t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, u._getSorters = function() { var t = this.options.getSortData; for (var e in t) { var i = t[e];
            this._sorters[e] = d(i) } }, u._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && e > i; i++) { var n = t[i];
            n.updateSortData() } };
    var d = function() {
        function t(t) { if ("string" != typeof t) return t; var i = c(t).split(" "),
                n = i[0],
                s = n.match(/^\[(.+)\]$/),
                o = s && s[1],
                r = e(o, n),
                a = h.sortDataParsers[i[1]]; return t = a ? function(t) { return t && a(r(t)) } : function(t) { return t && r(t) } }

        function e(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && i.textContent } } return t }();
    h.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, u._sort = function() { var t = this.options.sortBy; if (t) { var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t) } }, u._mode = function() { var t = this.options.layoutMode,
            e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, u._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, u._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, u._manageStamp = function(t) { this._mode()._manageStamp(t) }, u._getContainerSize = function() { return this._mode()._getContainerSize() }, u.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, u.appended = function(t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i) } }, u.prepended = function(t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, u._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, u.insert = function(t) { var e = this.addItems(t); if (e.length) { var i, n, s = e.length; for (i = 0; s > i; i++) n = e[i], this.element.appendChild(n.element); var o = this._filter(e).matches; for (i = 0; s > i; i++) e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; s > i; i++) delete e[i].isLayoutInstant;
            this.reveal(o) } };
    var p = u.remove;
    return u.remove = function(t) { t = s.makeArray(t); var e = this.getItems(t);
        p.call(this, t); for (var i = e && e.length, n = 0; i && i > n; n++) { var o = e[n];
            s.removeFrom(this.filteredItems, o) } }, u.shuffle = function() { for (var t = 0; t < this.items.length; t++) { var e = this.items[t];
            e.sortData.random = Math.random() }
        this.options.sortBy = "random", this._sort(), this._layout() }, u._noTransition = function(t, e) { var i = this.options.transitionDuration;
        this.options.transitionDuration = 0; var n = t.apply(this, e); return this.options.transitionDuration = i, n }, u.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, h
}), ! function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e() }(this, function() { "use strict"; var t = function() { s.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.") };
    t.version = "2.0.3", window.addEventListener("mousewheel", function() {}); var e = "data-scrollmagic-pin-spacer";
    t.Controller = function(n) { var o, r, a = "ScrollMagic.Controller",
            l = { f: "FORWARD", r: "REVERSE", p: "PAUSED" },
            c = i.defaults,
            h = this,
            u = s.extend({}, c, n),
            d = [],
            p = !1,
            f = 0,
            g = l.p,
            m = !0,
            v = 0,
            y = !0,
            b = function() { for (var e in u) c.hasOwnProperty(e) || (I(2, 'WARNING: Unknown option "' + e + '"'), delete u[e]); if (u.container = s.get.elements(u.container)[0], !u.container) throw I(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
                m = u.container === window || u.container === document.body || !document.body.contains(u.container), m && (u.container = window), v = x(), u.container.addEventListener("resize", S), u.container.addEventListener("scroll", S), u.refreshInterval = parseInt(u.refreshInterval) || c.refreshInterval, _(), I(3, "added new " + a + " controller (v" + t.version + ")") },
            _ = function() { u.refreshInterval > 0 && (r = window.setTimeout(D, u.refreshInterval)) },
            w = function() { return u.vertical ? s.get.scrollTop(u.container) : s.get.scrollLeft(u.container) },
            x = function() { return u.vertical ? s.get.height(u.container) : s.get.width(u.container) },
            C = this._setScrollPos = function(t) { u.vertical ? m ? window.scrollTo(s.get.scrollLeft(), t) : u.container.scrollTop = t : m ? window.scrollTo(t, s.get.scrollTop()) : u.container.scrollLeft = t },
            k = function() { if (y && p) { var t = s.type.Array(p) ? p : d.slice(0);
                    p = !1; var e = f;
                    f = h.scrollPos(); var i = f - e;
                    0 !== i && (g = i > 0 ? l.f : l.r), g === l.r && t.reverse(), t.forEach(function(e, i) { I(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + d.length + " total)"), e.update(!0) }), 0 === t.length && u.loglevel >= 3 && I(3, "updating 0 Scenes (nothing added to controller)") } },
            T = function() { o = s.rAF(k) },
            S = function(t) { I(3, "event fired causing an update:", t.type), "resize" == t.type && (v = x(), g = l.p), p !== !0 && (p = !0, T()) },
            D = function() { if (!m && v != x()) { var t; try { t = new Event("resize", { bubbles: !1, cancelable: !1 }) } catch (e) { t = document.createEvent("Event"), t.initEvent("resize", !1, !1) }
                    u.container.dispatchEvent(t) }
                d.forEach(function(t, e) { t.refresh() }), _() },
            I = this._log = function(t, e) { u.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), s.log.apply(window, arguments)) };
        this._options = u; var E = function(t) { if (t.length <= 1) return t; var e = t.slice(0); return e.sort(function(t, e) { return t.scrollOffset() > e.scrollOffset() ? 1 : -1 }), e }; return this.addScene = function(e) { if (s.type.Array(e)) e.forEach(function(t, e) { h.addScene(t) });
            else if (e instanceof t.Scene) { if (e.controller() !== h) e.addTo(h);
                else if (d.indexOf(e) < 0) { d.push(e), d = E(d), e.on("shift.controller_sort", function() { d = E(d) }); for (var i in u.globalSceneOptions) e[i] && e[i].call(e, u.globalSceneOptions[i]);
                    I(3, "adding Scene (now " + d.length + " total)") } } else I(1, "ERROR: invalid argument supplied for '.addScene()'"); return h }, this.removeScene = function(t) { if (s.type.Array(t)) t.forEach(function(t, e) { h.removeScene(t) });
            else { var e = d.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"), d.splice(e, 1), I(3, "removing Scene (now " + d.length + " left)"), t.remove()) } return h }, this.updateScene = function(e, i) { return s.type.Array(e) ? e.forEach(function(t, e) { h.updateScene(t, i) }) : i ? e.update(!0) : p !== !0 && e instanceof t.Scene && (p = p || [], p.indexOf(e) == -1 && p.push(e), p = E(p), T()), h }, this.update = function(t) { return S({ type: "resize" }), t && k(), h }, this.scrollTo = function(i, n) { if (s.type.Number(i)) C.call(u.container, i, n);
            else if (i instanceof t.Scene) i.controller() === h ? h.scrollTo(i.scrollOffset(), n) : I(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i);
            else if (s.type.Function(i)) C = i;
            else { var o = s.get.elements(i)[0]; if (o) { for (; o.parentNode.hasAttribute(e);) o = o.parentNode; var r = u.vertical ? "top" : "left",
                        a = s.get.offset(u.container),
                        l = s.get.offset(o);
                    m || (a[r] -= h.scrollPos()), h.scrollTo(l[r] - a[r], n) } else I(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i) } return h }, this.scrollPos = function(t) { return arguments.length ? (s.type.Function(t) ? w = t : I(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), h) : w.call(h) }, this.info = function(t) { var e = { size: v, vertical: u.vertical, scrollPos: f, scrollDirection: g, container: u.container, isDocument: m }; return arguments.length ? void 0 !== e[t] ? e[t] : void I(1, 'ERROR: option "' + t + '" is not available') : e }, this.loglevel = function(t) { return arguments.length ? (u.loglevel != t && (u.loglevel = t), h) : u.loglevel }, this.enabled = function(t) { return arguments.length ? (y != t && (y = !!t, h.updateScene(d, !0)), h) : y }, this.destroy = function(t) { window.clearTimeout(r); for (var e = d.length; e--;) d[e].destroy(t); return u.container.removeEventListener("resize", S), u.container.removeEventListener("scroll", S), s.cAF(o), I(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null }, b(), h }; var i = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
    t.Controller.addOption = function(t, e) { i.defaults[t] = e }, t.Controller.extend = function(e) { var i = this;
        t.Controller = function() { return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this }, s.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller }, t.Scene = function(i) { var o, r, a = "ScrollMagic.Scene",
            l = n.defaults,
            c = this,
            h = s.extend({}, l, i),
            u = "BEFORE",
            d = 0,
            p = { start: 0, end: 0 },
            f = 0,
            g = !0,
            m = function() { for (var t in h) l.hasOwnProperty(t) || (v(2, 'WARNING: Unknown option "' + t + '"'), delete h[t]); for (var e in l) T(e);
                C(), c.on("change.internal", function(t) { "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? _() : "reverse" === t.what && c.update()) }).on("shift.internal", function(t) { y(), c.update() }) },
            v = this._log = function(t, e) { h.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), s.log.apply(window, arguments)) };
        this.addTo = function(e) { return e instanceof t.Controller ? r != e && (r && r.removeScene(c), r = e, C(), b(!0), _(!0), y(), r.info("container").addEventListener("resize", w), e.addScene(c), c.trigger("add", { controller: r }), v(3, "added " + a + " to controller"), c.update()) : v(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), c }, this.enabled = function(t) { return arguments.length ? (g != t && (g = !!t, c.update(!0)), c) : g }, this.remove = function() { if (r) { r.info("container").removeEventListener("resize", w); var t = r;
                r = void 0, t.removeScene(c), c.trigger("remove"), v(3, "removed " + a + " from controller") } return c }, this.destroy = function(t) { return c.trigger("destroy", { reset: t }), c.remove(), c.off("*.*"), v(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null }, this.update = function(t) { if (r)
                if (t)
                    if (r.enabled() && g) { var e, i = r.info("scrollPos");
                        e = h.duration > 0 ? (i - p.start) / (p.end - p.start) : i >= p.start ? 1 : 0, c.trigger("update", { startPos: p.start, endPos: p.end, scrollPos: i }), c.progress(e) } else D && "DURING" === u && E(!0);
            else r.updateScene(c, !1); return c }, this.refresh = function() { return b(), _(), c }, this.progress = function(t) { if (arguments.length) { var e = !1,
                    i = u,
                    n = r ? r.info("scrollDirection") : "PAUSED",
                    s = h.reverse || t >= d; if (0 === h.duration ? (e = d != t, d = t < 1 && s ? 0 : 1, u = 0 === d ? "BEFORE" : "DURING") : t <= 0 && "BEFORE" !== u && s ? (d = 0, u = "BEFORE", e = !0) : t > 0 && t < 1 && s ? (d = t, u = "DURING", e = !0) : t >= 1 && "AFTER" !== u ? (d = 1, u = "AFTER", e = !0) : "DURING" !== u || s || E(), e) { var o = { progress: d, state: u, scrollDirection: n },
                        a = u != i,
                        l = function(t) { c.trigger(t, o) };
                    a && "DURING" !== i && (l("enter"), l("BEFORE" === i ? "start" : "end")), l("progress"), a && "DURING" !== u && (l("BEFORE" === u ? "start" : "end"), l("leave")) } return c } return d }; var y = function() { p = { start: f + h.offset }, r && h.triggerElement && (p.start -= r.info("size") * h.triggerHook), p.end = p.start + h.duration },
            b = function(t) { if (o) { var e = "duration";
                    k(e, o.call(c)) && !t && (c.trigger("change", { what: e, newval: h[e] }), c.trigger("shift", { reason: e })) } },
            _ = function(t) { var i = 0,
                    n = h.triggerElement; if (r && n) { for (var o = r.info(), a = s.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode; var u = s.get.offset(n);
                    o.isDocument || (a[l] -= r.scrollPos()), i = u[l] - a[l] } var d = i != f;
                f = i, d && !t && c.trigger("shift", { reason: "triggerElementPosition" }) },
            w = function(t) { h.triggerHook > 0 && c.trigger("shift", { reason: "containerResize" }) },
            x = s.extend(n.validate, { duration: function(t) { if (s.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) { var e = parseFloat(t) / 100;
                        t = function() { return r ? r.info("size") * e : 0 } } if (s.type.Function(t)) { o = t; try { t = parseFloat(o()) } catch (e) { t = -1 } } if (t = parseFloat(t), !s.type.Number(t) || t < 0) throw o ? (o = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t]; return t } }),
            C = function(t) { t = arguments.length ? [t] : Object.keys(x), t.forEach(function(t, e) { var i; if (x[t]) try { i = x[t](h[t]) } catch (e) { i = l[t]; var n = s.type.String(e) ? [e] : e;
                        s.type.Array(n) ? (n[0] = "ERROR: " + n[0], n.unshift(1), v.apply(this, n)) : v(1, "ERROR: Problem executing validation callback for option '" + t + "':", e.message) } finally { h[t] = i } }) },
            k = function(t, e) { var i = !1,
                    n = h[t]; return h[t] != e && (h[t] = e, C(t), i = n != h[t]), i },
            T = function(t) { c[t] || (c[t] = function(e) { return arguments.length ? ("duration" === t && (o = void 0), k(t, e) && (c.trigger("change", { what: t, newval: h[t] }), n.shifts.indexOf(t) > -1 && c.trigger("shift", { reason: t })), c) : h[t] }) };
        this.controller = function() { return r }, this.state = function() { return u }, this.scrollOffset = function() { return p.start }, this.triggerPosition = function() { var t = h.offset; return r && (t += h.triggerElement ? f : r.info("size") * c.triggerHook()), t }; var S = {};
        this.on = function(t, e) { return s.type.Function(e) ? (t = t.trim().split(" "), t.forEach(function(t) { var i = t.split("."),
                    n = i[0],
                    s = i[1]; "*" != n && (S[n] || (S[n] = []), S[n].push({ namespace: s || "", callback: e })) })) : v(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), c }, this.off = function(t, e) { return t ? (t = t.trim().split(" "), t.forEach(function(t, i) { var n = t.split("."),
                    s = n[0],
                    o = n[1] || "",
                    r = "*" === s ? Object.keys(S) : [s];
                r.forEach(function(t) { for (var i = S[t] || [], n = i.length; n--;) { var s = i[n];!s || o !== s.namespace && "*" !== o || e && e != s.callback || i.splice(n, 1) }
                    i.length || delete S[t] }) }), c) : (v(1, "ERROR: Invalid event name supplied."), c) }, this.trigger = function(e, i) { if (e) { var n = e.trim().split("."),
                    s = n[0],
                    o = n[1],
                    r = S[s];
                v(3, "event fired:", s, i ? "->" : "", i || ""), r && r.forEach(function(e, n) { o && o !== e.namespace || e.callback.call(c, new t.Event(s, e.namespace, c, i)) }) } else v(1, "ERROR: Invalid event name supplied."); return c }; var D, I;
        c.on("shift.internal", function(t) { var e = "duration" === t.reason;
            ("AFTER" === u && e || "DURING" === u && 0 === h.duration) && E(), e && P() }).on("progress.internal", function(t) { E() }).on("add.internal", function(t) { P() }).on("destroy.internal", function(t) { c.removePin(t.reset) }); var E = function(t) { if (D && r) { var e = r.info(); if (t || "DURING" !== u) { var i = { position: I.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                            n = s.css(D, "position") != i.position;
                        I.pushFollowers ? h.duration > 0 && ("AFTER" === u && 0 === parseFloat(s.css(I.spacer, "padding-top")) ? n = !0 : "BEFORE" === u && 0 === parseFloat(s.css(I.spacer, "padding-bottom")) && (n = !0)) : i[e.vertical ? "top" : "left"] = h.duration * d, s.css(D, i), n && P() } else { "fixed" != s.css(D, "position") && (s.css(D, { position: "fixed" }), P()); var o = s.get.offset(I.spacer, !0),
                            a = h.reverse || 0 === h.duration ? e.scrollPos - p.start : Math.round(d * h.duration * 10) / 10;
                        o[e.vertical ? "top" : "left"] += a, s.css(D, { top: o.top, left: o.left }) } } },
            P = function() { if (D && r && I.inFlow) { var t = "DURING" === u,
                        e = r.info("vertical"),
                        i = I.spacer.children[0],
                        n = s.isMarginCollapseType(s.css(I.spacer, "display")),
                        o = {};
                    I.relSize.width || I.relSize.autoFullWidth ? t ? s.css(D, { width: s.get.width(I.spacer) }) : s.css(D, { width: "100%" }) : (o["min-width"] = s.get.width(e ? D : i, !0, !0), o.width = t ? o["min-width"] : "auto"), I.relSize.height ? t ? s.css(D, { height: s.get.height(I.spacer) - (I.pushFollowers ? h.duration : 0) }) : s.css(D, { height: "100%" }) : (o["min-height"] = s.get.height(e ? i : D, !0, !n), o.height = t ? o["min-height"] : "auto"), I.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = h.duration * d, o["padding" + (e ? "Bottom" : "Right")] = h.duration * (1 - d)), s.css(I.spacer, o) } },
            $ = function() { r && D && "DURING" === u && !r.info("isDocument") && E() },
            O = function() { r && D && "DURING" === u && ((I.relSize.width || I.relSize.autoFullWidth) && s.get.width(window) != s.get.width(I.spacer.parentNode) || I.relSize.height && s.get.height(window) != s.get.height(I.spacer.parentNode)) && P() },
            A = function(t) { r && D && "DURING" === u && !r.info("isDocument") && (t.preventDefault(), r._setScrollPos(r.info("scrollPos") - ((t.wheelDelta || t[r.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail))) };
        this.setPin = function(t, i) { var n = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" }; if (i = s.extend({}, n, i), t = s.get.elements(t)[0], !t) return v(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), c; if ("fixed" === s.css(t, "position")) return v(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), c; if (D) { if (D === t) return c;
                c.removePin() }
            D = t; var o = D.parentNode.style.display,
                r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            D.parentNode.style.display = "none"; var a = "absolute" != s.css(D, "position"),
                l = s.css(D, r.concat(["display"])),
                u = s.css(D, ["width", "height"]);
            D.parentNode.style.display = o, !a && i.pushFollowers && (v(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1), window.setTimeout(function() { D && 0 === h.duration && i.pushFollowers && v(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.") }, 0); var d = D.parentNode.insertBefore(document.createElement("div"), D),
                p = s.extend(l, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" }); if (a || s.extend(p, s.css(D, ["width", "height"])), s.css(d, p), d.setAttribute(e, ""), s.addClass(d, i.spacerClass), I = { spacer: d, relSize: { width: "%" === u.width.slice(-1), height: "%" === u.height.slice(-1), autoFullWidth: "auto" === u.width && a && s.isMarginCollapseType(l.display) }, pushFollowers: i.pushFollowers, inFlow: a }, !D.___origStyle) { D.___origStyle = {}; var f = D.style,
                    g = r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                g.forEach(function(t) { D.___origStyle[t] = f[t] || "" }) } return I.relSize.width && s.css(d, { width: u.width }), I.relSize.height && s.css(d, { height: u.height }), d.appendChild(D), s.css(D, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (I.relSize.width || I.relSize.autoFullWidth) && s.css(D, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", $), window.addEventListener("resize", $), window.addEventListener("resize", O), D.addEventListener("mousewheel", A), D.addEventListener("DOMMouseScroll", A), v(3, "added pin"), E(), c }, this.removePin = function(t) { if (D) { if ("DURING" === u && E(!0), t || !r) { var i = I.spacer.children[0]; if (i.hasAttribute(e)) { var n = I.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, o.forEach(function(t) { margins[t] = n[t] || "" }), s.css(i, margins) }
                    I.spacer.parentNode.insertBefore(i, I.spacer), I.spacer.parentNode.removeChild(I.spacer), D.parentNode.hasAttribute(e) || (s.css(D, D.___origStyle), delete D.___origStyle) }
                window.removeEventListener("scroll", $), window.removeEventListener("resize", $), window.removeEventListener("resize", O), D.removeEventListener("mousewheel", A), D.removeEventListener("DOMMouseScroll", A), D = void 0, v(3, "removed pin (reset: " + (t ? "true" : "false") + ")") } return c }; var M, N = []; return c.on("destroy.internal", function(t) { c.removeClassToggle(t.reset) }), this.setClassToggle = function(t, e) { var i = s.get.elements(t); return 0 !== i.length && s.type.String(e) ? (N.length > 0 && c.removeClassToggle(), M = e, N = i, c.on("enter.internal_class leave.internal_class", function(t) { var e = "enter" === t.type ? s.addClass : s.removeClass;
                N.forEach(function(t, i) { e(t, M) }) }), c) : (v(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), c) }, this.removeClassToggle = function(t) { return t && N.forEach(function(t, e) { s.removeClass(t, M) }), c.off("start.internal_class end.internal_class"), M = void 0, N = [], c }, m(), c }; var n = { defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 }, validate: { offset: function(t) { if (t = parseFloat(t), !s.type.Number(t)) throw ['Invalid value for option "offset":', t]; return t }, triggerElement: function(t) { if (t = t || void 0) { var e = s.get.elements(t)[0]; if (!e) throw ['Element defined in option "triggerElement" was not found:', t];
                    t = e } return t }, triggerHook: function(t) { var e = { onCenter: .5, onEnter: 1, onLeave: 0 }; if (s.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                else { if (!(t in e)) throw ['Invalid value for option "triggerHook": ', t];
                    t = e[t] } return t }, reverse: function(t) { return !!t }, loglevel: function(t) { if (t = parseInt(t), !s.type.Number(t) || t < 0 || t > 3) throw ['Invalid value for option "loglevel":', t]; return t } }, shifts: ["duration", "offset", "triggerHook"] };
    t.Scene.addOption = function(e, i, s, o) { e in n.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (n.defaults[e] = i, n.validate[e] = s, o && n.shifts.push(e)) }, t.Scene.extend = function(e) { var i = this;
        t.Scene = function() { return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this }, s.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene }, t.Event = function(t, e, i, n) { n = n || {}; for (var s in n) this[s] = n[s]; return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this }; var s = t._util = function(t) { var e, i = {},
            n = function(t) { return parseFloat(t) || 0 },
            s = function(e) { return e.currentStyle ? e.currentStyle : t.getComputedStyle(e) },
            o = function(e, i, o, r) { if (i = i === document ? t : i, i === t) r = !1;
                else if (!f.DomElement(i)) return 0;
                e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase(); var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0; if (o && r) { var l = s(i);
                    a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight) } return a },
            r = function(t) { return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) { return t[1].toUpperCase() }) };
        i.extend = function(t) { for (t = t || {}, e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t }, i.isMarginCollapseType = function(t) { return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1 }; var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = t.requestAnimationFrame,
            h = t.cancelAnimationFrame; for (e = 0; !c && e < l.length; ++e) c = t[l[e] + "RequestAnimationFrame"], h = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        c || (c = function(e) { var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - a)),
                s = t.setTimeout(function() { e(i + n) }, n); return a = i + n, s }), h || (h = function(e) { t.clearTimeout(e) }), i.rAF = c.bind(t), i.cAF = h.bind(t); var u = ["error", "warn", "log"],
            d = t.console || {}; for (d.log = d.log || function() {}, e = 0; e < u.length; e++) { var p = u[e];
            d[p] || (d[p] = d.log) }
        i.log = function(t) {
            (t > u.length || t <= 0) && (t = u.length); var e = new Date,
                i = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3),
                n = u[t - 1],
                s = Array.prototype.splice.call(arguments, 1),
                o = Function.prototype.bind.call(d[n], d);
            s.unshift(i), o.apply(d, s) }; var f = i.type = function(t) { return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase() };
        f.String = function(t) { return "string" === f(t) }, f.Function = function(t) { return "function" === f(t) }, f.Array = function(t) { return Array.isArray(t) }, f.Number = function(t) { return !f.Array(t) && t - parseFloat(t) + 1 >= 0 }, f.DomElement = function(t) { return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName }; var g = i.get = {}; return g.elements = function(e) { var i = []; if (f.String(e)) try { e = document.querySelectorAll(e) } catch (t) { return i }
            if ("nodelist" === f(e) || f.Array(e))
                for (var n = 0, s = i.length = e.length; n < s; n++) { var o = e[n];
                    i[n] = f.DomElement(o) ? o : g.elements(o) } else(f.DomElement(e) || e === document || e === t) && (i = [e]); return i }, g.scrollTop = function(e) { return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0 }, g.scrollLeft = function(e) { return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0 }, g.width = function(t, e, i) { return o("width", t, e, i) }, g.height = function(t, e, i) { return o("height", t, e, i) }, g.offset = function(t, e) { var i = { top: 0, left: 0 }; if (t && t.getBoundingClientRect) { var n = t.getBoundingClientRect();
                i.top = n.top, i.left = n.left, e || (i.top += g.scrollTop(), i.left += g.scrollLeft()) } return i }, i.addClass = function(t, e) { e && (t.classList ? t.classList.add(e) : t.className += " " + e) }, i.removeClass = function(t, e) { e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, i.css = function(t, e) { if (f.String(e)) return s(t)[r(e)]; if (f.Array(e)) { var i = {},
                    n = s(t); return e.forEach(function(t, e) { i[t] = n[r(t)] }), i } for (var o in e) { var a = e[o];
                a == parseFloat(a) && (a += "px"), t.style[r(o)] = a } }, i }(window || {}); return t.Scene.prototype.addIndicators = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this }, t.Scene.prototype.removeIndicators = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this }, t.Scene.prototype.setTween = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this }, t.Scene.prototype.removeTween = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this }, t.Scene.prototype.setVelocity = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this }, t.Scene.prototype.removeVelocity = function() { return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this }, t }), ! function(t) { "use strict";

    function e(t) { var e = t.length,
            n = i.type(t); return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t) } if (!t.jQuery) { var i = function(t, e) { return new i.fn.init(t, e) };
        i.isWindow = function(t) { return t && t === t.window }, i.type = function(t) { return t ? "object" == typeof t || "function" == typeof t ? s[r.call(t)] || "object" : typeof t : t + "" }, i.isArray = Array.isArray || function(t) { return "array" === i.type(t) }, i.isPlainObject = function(t) { var e; if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1; try { if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1 } catch (t) { return !1 } for (e in t); return void 0 === e || o.call(t, e) }, i.each = function(t, i, n) { var s, o = 0,
                r = t.length,
                a = e(t); if (n) { if (a)
                    for (; o < r && (s = i.apply(t[o], n), s !== !1); o++);
                else
                    for (o in t)
                        if (s = i.apply(t[o], n), s === !1) break } else if (a)
                for (; o < r && (s = i.call(t[o], o, t[o]), s !== !1); o++);
            else
                for (o in t)
                    if (s = i.call(t[o], o, t[o]), s === !1) break; return t }, i.data = function(t, e, s) { if (void 0 === s) { var o = t[i.expando],
                    r = o && n[o]; if (void 0 === e) return r; if (r && e in r) return r[e] } else if (void 0 !== e) { var a = t[i.expando] || (t[i.expando] = ++i.uuid); return n[a] = n[a] || {}, n[a][e] = s, s } }, i.removeData = function(t, e) { var s = t[i.expando],
                o = s && n[s];
            o && (e ? i.each(e, function(t, e) { delete o[e] }) : delete n[s]) }, i.extend = function() { var t, e, n, s, o, r, a = arguments[0] || {},
                l = 1,
                c = arguments.length,
                h = !1; for ("boolean" == typeof a && (h = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && (a = this, l--); l < c; l++)
                if (o = arguments[l])
                    for (s in o) t = a[s], n = o[s], a !== n && (h && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, r = t && i.isArray(t) ? t : []) : r = t && i.isPlainObject(t) ? t : {}, a[s] = i.extend(h, r, n)) : void 0 !== n && (a[s] = n));
            return a }, i.queue = function(t, n, s) {
            function o(t, i) { var n = i || []; return t && (e(Object(t)) ? ! function(t, e) { for (var i = +e.length, n = 0, s = t.length; n < i;) t[s++] = e[n++]; if (i !== i)
                        for (; void 0 !== e[n];) t[s++] = e[n++]; return t.length = s, t }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n } if (t) { n = (n || "fx") + "queue"; var r = i.data(t, n); return s ? (!r || i.isArray(s) ? r = i.data(t, n, o(s)) : r.push(s), r) : r || [] } }, i.dequeue = function(t, e) { i.each(t.nodeType ? [t] : t, function(t, n) { e = e || "fx"; var s = i.queue(n, e),
                    o = s.shift(); "inprogress" === o && (o = s.shift()), o && ("fx" === e && s.unshift("inprogress"), o.call(n, function() { i.dequeue(n, e) })) }) }, i.fn = i.prototype = { init: function(t) { if (t.nodeType) return this[0] = t, this; throw new Error("Not a DOM node.") }, offset: function() { var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 }; return { top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) } }, position: function() {
                function t(t) { for (var e = t.offsetParent || document; e && "html" !== e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent; return e || document } var e = this[0],
                    n = t(e),
                    s = this.offset(),
                    o = /^(?:body|html)$/i.test(n.nodeName) ? { top: 0, left: 0 } : i(n).offset(); return s.top -= parseFloat(e.style.marginTop) || 0, s.left -= parseFloat(e.style.marginLeft) || 0, n.style && (o.top += parseFloat(n.style.borderTopWidth) || 0, o.left += parseFloat(n.style.borderLeftWidth) || 0), { top: s.top - o.top, left: s.left - o.left } } }; var n = {};
        i.expando = "velocity" + (new Date).getTime(), i.uuid = 0; for (var s = {}, o = s.hasOwnProperty, r = s.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) s["[object " + a[l] + "]"] = a[l].toLowerCase();
        i.fn.init.prototype = i.fn, t.Velocity = { Utilities: i } } }(window),
function(t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t() }(function() {
    "use strict";
    return function(t, e, i, n) {
        function s(t) { for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) { var s = t[e];
                s && n.push(s) } return n }

        function o(t) { return g.isWrapped(t) ? t = [].slice.call(t) : g.isNode(t) && (t = [t]), t }

        function r(t) { var e = d.data(t, "velocity"); return null === e ? n : e }

        function a(t) { return function(e) { return Math.round(e * t) * (1 / t) } }

        function l(t, i, n, s) {
            function o(t, e) { return 1 - 3 * e + 3 * t }

            function r(t, e) { return 3 * e - 6 * t }

            function a(t) { return 3 * t }

            function l(t, e, i) { return ((o(e, i) * t + r(e, i)) * t + a(e)) * t }

            function c(t, e, i) { return 3 * o(e, i) * t * t + 2 * r(e, i) * t + a(e) }

            function h(e, i) { for (var s = 0; s < g; ++s) { var o = c(i, t, n); if (0 === o) return i; var r = l(i, t, n) - e;
                    i -= r / o } return i }

            function u() { for (var e = 0; e < b; ++e) C[e] = l(e * _, t, n) }

            function d(e, i, s) { var o, r, a = 0;
                do r = i + (s - i) / 2, o = l(r, t, n) - e, o > 0 ? s = r : i = r; while (Math.abs(o) > v && ++a < y); return r }

            function p(e) { for (var i = 0, s = 1, o = b - 1; s !== o && C[s] <= e; ++s) i += _;--s; var r = (e - C[s]) / (C[s + 1] - C[s]),
                    a = i + r * _,
                    l = c(a, t, n); return l >= m ? h(e, a) : 0 === l ? a : d(e, i, i + _) }

            function f() { k = !0, t === i && n === s || u() }
            var g = 4,
                m = .001,
                v = 1e-7,
                y = 10,
                b = 11,
                _ = 1 / (b - 1),
                w = "Float32Array" in e;
            if (4 !== arguments.length) return !1;
            for (var x = 0; x < 4; ++x)
                if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
            t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
            var C = w ? new Float32Array(b) : new Array(b),
                k = !1,
                T = function(e) { return k || f(), t === i && n === s ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), i, s) };
            T.getControlPoints = function() { return [{ x: t, y: i }, { x: n, y: s }] };
            var S = "generateBezier(" + [t, i, n, s] + ")";
            return T.toString = function() { return S }, T
        }

        function c(t, e) { var i = t; return g.isString(t) ? b.Easings[t] || (i = !1) : i = g.isArray(t) && 1 === t.length ? a.apply(null, t) : g.isArray(t) && 2 === t.length ? _.apply(null, t.concat([e])) : !(!g.isArray(t) || 4 !== t.length) && l.apply(null, t), i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i }

        function h(t) { if (t) { var e = (new Date).getTime(),
                    i = b.State.calls.length;
                i > 1e4 && (b.State.calls = s(b.State.calls), i = b.State.calls.length); for (var o = 0; o < i; o++)
                    if (b.State.calls[o]) { var a = b.State.calls[o],
                            l = a[0],
                            c = a[2],
                            p = a[3],
                            f = !!p,
                            m = null;
                        p || (p = b.State.calls[o][3] = e - 16); for (var v = Math.min((e - p) / c.duration, 1), y = 0, _ = l.length; y < _; y++) { var x = l[y],
                                k = x.element; if (r(k)) { var T = !1; if (c.display !== n && null !== c.display && "none" !== c.display) { if ("flex" === c.display) { var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        d.each(S, function(t, e) { w.setPropertyValue(k, "display", e) }) }
                                    w.setPropertyValue(k, "display", c.display) }
                                c.visibility !== n && "hidden" !== c.visibility && w.setPropertyValue(k, "visibility", c.visibility); for (var D in x)
                                    if ("element" !== D) { var I, E = x[D],
                                            P = g.isString(E.easing) ? b.Easings[E.easing] : E.easing; if (1 === v) I = E.endValue;
                                        else { var $ = E.endValue - E.startValue; if (I = E.startValue + $ * P(v, c, $), !f && I === E.currentValue) continue } if (E.currentValue = I, "tween" === D) m = I;
                                        else { var O; if (w.Hooks.registered[D]) { O = w.Hooks.getRoot(D); var A = r(k).rootPropertyValueCache[O];
                                                A && (E.rootPropertyValue = A) } var M = w.setPropertyValue(k, D, E.currentValue + (0 === parseFloat(I) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);
                                            w.Hooks.registered[D] && (w.Normalizations.registered[O] ? r(k).rootPropertyValueCache[O] = w.Normalizations.registered[O]("extract", null, M[1]) : r(k).rootPropertyValueCache[O] = M[1]), "transform" === M[0] && (T = !0) } }
                                c.mobileHA && r(k).transformCache.translate3d === n && (r(k).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && w.flushTransformCache(k) } }
                        c.display !== n && "none" !== c.display && (b.State.calls[o][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[o][2].visibility = !1), c.progress && c.progress.call(a[1], a[1], v, Math.max(0, p + c.duration - e), p, m), 1 === v && u(o) } }
            b.State.isTicking && C(h) }

        function u(t, e) { if (!b.State.calls[t]) return !1; for (var i = b.State.calls[t][0], s = b.State.calls[t][1], o = b.State.calls[t][2], a = b.State.calls[t][4], l = !1, c = 0, h = i.length; c < h; c++) { var u = i[c].element;
                e || o.loop || ("none" === o.display && w.setPropertyValue(u, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(u, "visibility", o.visibility)); var p = r(u); if (o.loop !== !0 && (d.queue(u)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(u)[1])) && p) { p.isAnimating = !1, p.rootPropertyValueCache = {}; var f = !1;
                    d.each(w.Lists.transforms3D, function(t, e) { var i = /^scale/.test(e) ? 1 : 0,
                            s = p.transformCache[e];
                        p.transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(s) && (f = !0, delete p.transformCache[e]) }), o.mobileHA && (f = !0, delete p.transformCache.translate3d), f && w.flushTransformCache(u), w.Values.removeClass(u, "velocity-animating") } if (!e && o.complete && !o.loop && c === h - 1) try { o.complete.call(s, s) } catch (t) { setTimeout(function() { throw t }, 1) }
                a && o.loop !== !0 && a(s), p && o.loop === !0 && !e && (d.each(p.tweensContainer, function(t, e) { if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 === 0) { var i = e.startValue;
                        e.startValue = e.endValue, e.endValue = i } /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100) }), b(u, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && d.dequeue(u, o.queue) }
            b.State.calls[t] = !1; for (var g = 0, m = b.State.calls.length; g < m; g++)
                if (b.State.calls[g] !== !1) { l = !0; break }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []) }
        var d, p = function() { if (i.documentMode) return i.documentMode; for (var t = 7; t > 4; t--) { var e = i.createElement("div"); if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t } return n }(),
            f = function() { var t = 0; return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) { var i, n = (new Date).getTime(); return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() { e(n + i) }, i) } }(),
            g = { isString: function(t) { return "string" == typeof t }, isArray: Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) }, isFunction: function(t) { return "[object Function]" === Object.prototype.toString.call(t) }, isNode: function(t) { return t && t.nodeType }, isNodeList: function(t) { return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0) }, isWrapped: function(t) { return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t)) }, isSVG: function(t) { return e.SVGElement && t instanceof e.SVGElement }, isEmptyObject: function(t) { for (var e in t) return !1; return !0 } },
            m = !1;
        if (t.fn && t.fn.jquery ? (d = t, m = !0) : d = e.Velocity.Utilities, p <= 8 && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400,
            y = "swing",
            b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: e.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: i.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: d, Redirects: {}, Easings: {}, Promise: e.Promise, defaults: { queue: "", duration: v, easing: y, begin: n, complete: n, progress: n, display: n, visibility: n, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function(t) { d.data(t, "velocity", { isSVG: g.isSVG(t), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} }) }, hook: null, mock: !1, version: { major: 1, minor: 3, patch: 0 }, debug: !1 };
        e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var _ = function() {
            function t(t) { return -t.tension * t.x - t.friction * t.v }

            function e(e, i, n) { var s = { x: e.x + n.dx * i, v: e.v + n.dv * i, tension: e.tension, friction: e.friction }; return { dx: s.v, dv: t(s) } }

            function i(i, n) { var s = { dx: i.v, dv: t(i) },
                    o = e(i, .5 * n, s),
                    r = e(i, .5 * n, o),
                    a = e(i, n, r),
                    l = 1 / 6 * (s.dx + 2 * (o.dx + r.dx) + a.dx),
                    c = 1 / 6 * (s.dv + 2 * (o.dv + r.dv) + a.dv); return i.x = i.x + l * n, i.v = i.v + c * n, i } return function t(e, n, s) { var o, r, a, l = { x: -1, v: 0, tension: null, friction: null },
                    c = [0],
                    h = 0,
                    u = 1e-4,
                    d = .016; for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, s = s || null, l.tension = e, l.friction = n, o = null !== s, o ? (h = t(e, n), r = h / s * d) : r = d; a = i(a || l, r), c.push(1 + a.x), h += 16, Math.abs(a.x) > u && Math.abs(a.v) > u;); return o ? function(t) { return c[t * (c.length - 1) | 0] } : h } }();
        b.Easings = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, spring: function(t) { return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t) } }, d.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(t, e) { b.Easings[e[0]] = l.apply(null, e[1]) });
        var w = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function() { for (var t = 0; t < w.Lists.colors.length; t++) { var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                        w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e] } var i, n, s; if (p)
                        for (i in w.Hooks.templates) { n = w.Hooks.templates[i], s = n[0].split(" "); var o = n[1].match(w.RegEx.valueSplit); "Color" === s[0] && (s.push(s.shift()), o.push(o.shift()), w.Hooks.templates[i] = [s.join(" "), o.join(" ")]) }
                    for (i in w.Hooks.templates) { n = w.Hooks.templates[i], s = n[0].split(" "); for (var r in s) { var a = i + s[r],
                                l = r;
                            w.Hooks.registered[a] = [i, l] } } }, getRoot: function(t) { var e = w.Hooks.registered[t]; return e ? e[0] : t }, cleanRootPropertyValue: function(t, e) { return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e }, extractValue: function(t, e) { var i = w.Hooks.registered[t]; if (i) { var n = i[0],
                            s = i[1]; return e = w.Hooks.cleanRootPropertyValue(n, e), e.toString().match(w.RegEx.valueSplit)[s] } return e }, injectValue: function(t, e, i) { var n = w.Hooks.registered[t]; if (n) { var s, o, r = n[0],
                            a = n[1]; return i = w.Hooks.cleanRootPropertyValue(r, i), s = i.toString().match(w.RegEx.valueSplit), s[a] = e, o = s.join(" ") } return i } }, Normalizations: { registered: { clip: function(t, e, i) { switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n; return w.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(w.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case "inject":
                                return "rect(" + i + ")" } }, blur: function(t, e, i) { switch (t) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i); if (!n && 0 !== n) { var s = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = s ? s[1] : 0 } return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none" } }, opacity: function(t, e, i) { if (p <= 8) switch (t) {
                            case "name":
                                return "filter";
                            case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i); return i = n ? n[1] / 100 : 1;
                            case "inject":
                                return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")" } else switch (t) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return i;
                            case "inject":
                                return i } } }, register: function() { p && !(p > 9) || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D)); for (var t = 0; t < w.Lists.transformsBase.length; t++) ! function() { var e = w.Lists.transformsBase[t];
                        w.Normalizations.registered[e] = function(t, i, s) { switch (t) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return r(i) === n || r(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : r(i).transformCache[e].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1; switch (e.substr(0, e.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(s); break;
                                        case "scal":
                                        case "scale":
                                            b.State.isAndroid && r(i).transformCache[e] === n && s < 1 && (s = 1), o = !/(\d)$/i.test(s); break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(s); break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(s) } return o || (r(i).transformCache[e] = "(" + s + ")"), r(i).transformCache[e] } } }(); for (var e = 0; e < w.Lists.colors.length; e++) ! function() { var t = w.Lists.colors[e];
                        w.Normalizations.registered[t] = function(e, i, s) { switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o; if (w.RegEx.wrappedValueAlreadyExtracted.test(s)) o = s;
                                    else { var r, a = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" }; /^[A-z]+$/i.test(s) ? r = a[s] !== n ? a[s] : a.black : w.RegEx.isHex.test(s) ? r = "rgb(" + w.Values.hexToRgb(s).join(" ") + ")" : /^rgba?\(/i.test(s) || (r = a.black), o = (r || s).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ") } return (!p || p > 8) && 3 === o.split(" ").length && (o += " 1"), o;
                                case "inject":
                                    return p <= 8 ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")" } } }() } }, Names: { camelCase: function(t) { return t.replace(/-(\w)/g, function(t, e) { return e.toUpperCase() }) }, SVGAttribute: function(t) { var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2"; return (p || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t) }, prefixCheck: function(t) { if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0]; for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; i < n; i++) { var s; if (s = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) { return t.toUpperCase() }), g.isString(b.State.prefixElement.style[s])) return b.State.prefixMatches[t] = s, [s, !0] } return [t, !1] } }, Values: { hexToRgb: function(t) { var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; return t = t.replace(i, function(t, e, i, n) { return e + e + i + i + n + n }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0] }, isCSSNullValue: function(t) { return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t) }, getUnitType: function(t) { return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px" }, getDisplayType: function(t) { var e = t && t.tagName.toString().toLowerCase(); return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block" }, addClass: function(t, e) { t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e }, removeClass: function(t, e) { t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ") } }, getPropertyValue: function(t, i, s, o) {
                function a(t, i) { var s = 0; if (p <= 8) s = d.css(t, i);
                    else { var l = !1; /^(width|height)$/.test(i) && 0 === w.getPropertyValue(t, "display") && (l = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))); var c = function() { l && w.setPropertyValue(t, "display", "none") }; if (!o) { if ("height" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) { var h = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0); return c(), h } if ("width" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) { var u = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0); return c(), u } } var f;
                        f = r(t) === n ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), s = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i], "" !== s && null !== s || (s = t.style[i]), c() } if ("auto" === s && /^(top|right|bottom|left)$/i.test(i)) { var g = a(t, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (s = d(t).position()[i] + "px") } return s } var l; if (w.Hooks.registered[i]) { var c = i,
                        h = w.Hooks.getRoot(c);
                    s === n && (s = w.getPropertyValue(t, w.Names.prefixCheck(h)[0])), w.Normalizations.registered[h] && (s = w.Normalizations.registered[h]("extract", t, s)), l = w.Hooks.extractValue(c, s) } else if (w.Normalizations.registered[i]) { var u, f;
                    u = w.Normalizations.registered[i]("name", t), "transform" !== u && (f = a(t, w.Names.prefixCheck(u)[0]), w.Values.isCSSNullValue(f) && w.Hooks.templates[i] && (f = w.Hooks.templates[i][1])), l = w.Normalizations.registered[i]("extract", t, f) } if (!/^[\d-]/.test(l)) { var g = r(t); if (g && g.isSVG && w.Names.SVGAttribute(i))
                        if (/^(height|width)$/i.test(i)) try { l = t.getBBox()[i] } catch (t) { l = 0 } else l = t.getAttribute(i);
                        else l = a(t, w.Names.prefixCheck(i)[0]) } return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l }, setPropertyValue: function(t, i, n, s, o) { var a = i; if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? e.scrollTo(n, o.alternateValue) : e.scrollTo(o.alternateValue, n);
                else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", t)) w.Normalizations.registered[i]("inject", t, n), a = "transform", n = r(t).transformCache[i];
                else { if (w.Hooks.registered[i]) { var l = i,
                            c = w.Hooks.getRoot(i);
                        s = s || w.getPropertyValue(t, c), n = w.Hooks.injectValue(l, n, s), i = c } if (w.Normalizations.registered[i] && (n = w.Normalizations.registered[i]("inject", t, n), i = w.Normalizations.registered[i]("name", t)), a = w.Names.prefixCheck(i)[0], p <= 8) try { t.style[a] = n } catch (t) { b.debug && console.log("Browser does not support [" + n + "] for [" + a + "]") } else { var h = r(t);
                        h && h.isSVG && w.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[a] = n }
                    b.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n) } return [a, n] }, flushTransformCache: function(t) { var e = "",
                    i = r(t); if ((p || b.State.isAndroid && !b.State.isChrome) && i && i.isSVG) { var n = function(e) { return parseFloat(w.getPropertyValue(t, e)) },
                        s = { translate: [n("translateX"), n("translateY")], skewX: [n("skewX")], skewY: [n("skewY")], scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")], rotate: [n("rotateZ"), 0, 0] };
                    d.each(r(t).transformCache, function(t) { /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), s[t] && (e += t + "(" + s[t].join(" ") + ") ", delete s[t]) }) } else { var o, a;
                    d.each(r(t).transformCache, function(i) { return o = r(t).transformCache[i], "transformPerspective" === i ? (a = o, !0) : (9 === p && "rotateZ" === i && (i = "rotate"), void(e += i + o + " ")) }), a && (e = "perspective" + a + " " + e) }
                w.setPropertyValue(t, "transform", e) } };
        w.Hooks.register(), w.Normalizations.register(), b.hook = function(t, e, i) { var s; return t = o(t), d.each(t, function(t, o) { if (r(o) === n && b.init(o), i === n) s === n && (s = b.CSS.getPropertyValue(o, e));
                else { var a = b.CSS.setPropertyValue(o, e, i); "transform" === a[0] && b.CSS.flushTransformCache(o), s = a } }), s };
        var x = function() {
            function t() { return l ? I.promise || null : p }

            function s(t, s) {
                function o(o) { var p, f; if (l.begin && 0 === T) try { l.begin.call(m, m) } catch (t) { setTimeout(function() { throw t }, 1) }
                    if ("scroll" === E) { var v, x, C, S = /^x$/i.test(l.axis) ? "Left" : "Top",
                            D = parseFloat(l.offset) || 0;
                        l.container ? g.isWrapped(l.container) || g.isNode(l.container) ? (l.container = l.container[0] || l.container, v = l.container["scroll" + S], C = v + d(t).position()[S.toLowerCase()] + D) : l.container = null : (v = b.State.scrollAnchor[b.State["scrollProperty" + S]], x = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], C = d(t).offset()[S.toLowerCase()] + D), u = { scroll: { rootPropertyValue: !1, startValue: v, currentValue: v, endValue: C, unitType: "", easing: l.easing, scrollData: { container: l.container, direction: S, alternateValue: x } }, element: t }, b.debug && console.log("tweensContainer (scroll): ", u.scroll, t) } else if ("reverse" === E) { if (p = r(t), !p) return; if (!p.tweensContainer) return void d.dequeue(t, l.queue); "none" === p.opts.display && (p.opts.display = "auto"), "hidden" === p.opts.visibility && (p.opts.visibility = "visible"), p.opts.loop = !1, p.opts.begin = null, p.opts.complete = null, _.easing || delete l.easing, _.duration || delete l.duration, l = d.extend({}, p.opts, l), f = d.extend(!0, {}, p ? p.tweensContainer : null); for (var P in f)
                            if ("element" !== P) { var $ = f[P].startValue;
                                f[P].startValue = f[P].currentValue = f[P].endValue, f[P].endValue = $, g.isEmptyObject(_) || (f[P].easing = l.easing), b.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(f[P]), t) }
                        u = f } else if ("start" === E) { p = r(t), p && p.tweensContainer && p.isAnimating === !0 && (f = p.tweensContainer); var O = function(e, i) { var o, r, a; return g.isArray(e) ? (o = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (g.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = i ? e[1] : c(e[1], l.duration), e[2] !== n && (a = e[2]))) : o = e, i || (r = r || l.easing), g.isFunction(o) && (o = o.call(t, s, k)), g.isFunction(a) && (a = a.call(t, s, k)), [o || 0, r, a] };
                        d.each(y, function(t, e) { if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(w.Names.camelCase(t))) { var i = O(e, !0),
                                    s = i[0],
                                    o = i[1],
                                    r = i[2]; if (w.RegEx.isHex.test(s)) { for (var a = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(s), c = r ? w.Values.hexToRgb(r) : n, h = 0; h < a.length; h++) { var u = [l[h]];
                                        o && u.push(o), c !== n && u.push(c[h]), y[w.Names.camelCase(t) + a[h]] = u }
                                    delete y[t] } } }); for (var A in y) { var H = O(y[A]),
                                z = H[0],
                                L = H[1],
                                R = H[2];
                            A = w.Names.camelCase(A); var F = w.Hooks.getRoot(A),
                                W = !1; if (p && p.isSVG || "tween" === F || w.Names.prefixCheck(F)[1] !== !1 || w.Normalizations.registered[F] !== n) {
                                (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(A) && !R && 0 !== z && (R = 0), l._cacheValues && f && f[A] ? (R === n && (R = f[A].endValue + f[A].unitType), W = p.rootPropertyValueCache[F]) : w.Hooks.registered[A] ? R === n ? (W = w.getPropertyValue(t, F), R = w.getPropertyValue(t, A, W)) : W = w.Hooks.templates[F][1] : R === n && (R = w.getPropertyValue(t, A)); var j, q, B, Y = !1,
                                    V = function(t, e) { var i, n; return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) { return i = t, "" }), i || (i = w.Values.getUnitType(t)), [n, i] };
                                j = V(A, R), R = j[0], B = j[1], j = V(A, z), z = j[0].replace(/^([+-\/*])=/, function(t, e) { return Y = e, "" }), q = j[1], R = parseFloat(R) || 0, z = parseFloat(z) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(A) ? (z /= 100, q = "em") : /^scale/.test(A) ? (z /= 100, q = "") : /(Red|Green|Blue)$/i.test(A) && (z = z / 100 * 255, q = "")); var X = function() { var n = { myParent: t.parentNode || i.body, position: w.getPropertyValue(t, "position"), fontSize: w.getPropertyValue(t, "fontSize") },
                                        s = n.position === M.lastPosition && n.myParent === M.lastParent,
                                        o = n.fontSize === M.lastFontSize;
                                    M.lastParent = n.myParent, M.lastPosition = n.position, M.lastFontSize = n.fontSize; var r = 100,
                                        a = {}; if (o && s) a.emToPx = M.lastEmToPx, a.percentToPxWidth = M.lastPercentToPxWidth, a.percentToPxHeight = M.lastPercentToPxHeight;
                                    else { var l = p && p.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                        b.init(l), n.myParent.appendChild(l), d.each(["overflow", "overflowX", "overflowY"], function(t, e) { b.CSS.setPropertyValue(l, e, "hidden") }), b.CSS.setPropertyValue(l, "position", n.position), b.CSS.setPropertyValue(l, "fontSize", n.fontSize), b.CSS.setPropertyValue(l, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) { b.CSS.setPropertyValue(l, e, r + "%") }), b.CSS.setPropertyValue(l, "paddingLeft", r + "em"), a.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(l, "width", null, !0)) || 1) / r, a.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(l, "height", null, !0)) || 1) / r, a.emToPx = M.lastEmToPx = (parseFloat(w.getPropertyValue(l, "paddingLeft")) || 1) / r, n.myParent.removeChild(l) } return null === M.remToPx && (M.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(e.innerWidth) / 100, M.vhToPx = parseFloat(e.innerHeight) / 100), a.remToPx = M.remToPx, a.vwToPx = M.vwToPx, a.vhToPx = M.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(a), t), a }; if (/[\/*]/.test(Y)) q = B;
                                else if (B !== q && 0 !== R)
                                    if (0 === z) q = B;
                                    else { a = a || X(); var U = /margin|padding|left|right|width|text|word|letter/i.test(A) || /X$/.test(A) || "x" === A ? "x" : "y"; switch (B) {
                                            case "%":
                                                R *= "x" === U ? a.percentToPxWidth : a.percentToPxHeight; break;
                                            case "px":
                                                break;
                                            default:
                                                R *= a[B + "ToPx"] } switch (q) {
                                            case "%":
                                                R *= 1 / ("x" === U ? a.percentToPxWidth : a.percentToPxHeight); break;
                                            case "px":
                                                break;
                                            default:
                                                R *= 1 / a[q + "ToPx"] } }
                                switch (Y) {
                                    case "+":
                                        z = R + z; break;
                                    case "-":
                                        z = R - z; break;
                                    case "*":
                                        z *= R; break;
                                    case "/":
                                        z = R / z }
                                u[A] = { rootPropertyValue: W, startValue: R, currentValue: R, endValue: z, unitType: q, easing: L }, b.debug && console.log("tweensContainer (" + A + "): " + JSON.stringify(u[A]), t) } else b.debug && console.log("Skipping [" + F + "] due to a lack of browser support.") }
                        u.element = t }
                    u.element && (w.Values.addClass(t, "velocity-animating"), N.push(u), p = r(t), p && ("" === l.queue && (p.tweensContainer = u, p.opts = l), p.isAnimating = !0), T === k - 1 ? (b.State.calls.push([N, m, l, null, I.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, h())) : T++) } var a, l = d.extend({}, b.defaults, _),
                    u = {}; switch (r(t) === n && b.init(t), parseFloat(l.delay) && l.queue !== !1 && d.queue(t, l.queue, function(e) { b.velocityQueueEntryFlag = !0, r(t).delayTimer = { setTimeout: setTimeout(e, parseFloat(l.delay)), next: e } }), l.duration.toString().toLowerCase()) {
                    case "fast":
                        l.duration = 200; break;
                    case "normal":
                        l.duration = v; break;
                    case "slow":
                        l.duration = 600; break;
                    default:
                        l.duration = parseFloat(l.duration) || 1 }
                b.mock !== !1 && (b.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(b.mock) || 1, l.delay *= parseFloat(b.mock) || 1)), l.easing = c(l.easing, l.duration), l.begin && !g.isFunction(l.begin) && (l.begin = null), l.progress && !g.isFunction(l.progress) && (l.progress = null), l.complete && !g.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = b.CSS.Values.getDisplayType(t))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && b.State.isMobile && !b.State.isGingerbread, l.queue === !1 ? l.delay ? setTimeout(o, l.delay) : o() : d.queue(t, l.queue, function(t, e) { return e === !0 ? (I.promise && I.resolver(m), !0) : (b.velocityQueueEntryFlag = !0, void o(t)) }), "" !== l.queue && "fx" !== l.queue || "inprogress" === d.queue(t)[0] || d.dequeue(t) } var a, l, p, f, m, y, _, C = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)); if (g.isWrapped(this) ? (l = !1, f = 0, m = this, p = this) : (l = !0, f = 1, m = C ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) { C ? (y = arguments[0].properties || arguments[0].p, _ = arguments[0].options || arguments[0].o) : (y = arguments[f], _ = arguments[f + 1]); var k = m.length,
                    T = 0; if (!/^(stop|finish|finishAll)$/i.test(y) && !d.isPlainObject(_)) { var S = f + 1;
                    _ = {}; for (var D = S; D < arguments.length; D++) g.isArray(arguments[D]) || !/^(fast|normal|slow)$/i.test(arguments[D]) && !/^\d/.test(arguments[D]) ? g.isString(arguments[D]) || g.isArray(arguments[D]) ? _.easing = arguments[D] : g.isFunction(arguments[D]) && (_.complete = arguments[D]) : _.duration = arguments[D] } var I = { promise: null, resolver: null, rejecter: null };
                l && b.Promise && (I.promise = new b.Promise(function(t, e) { I.resolver = t, I.rejecter = e })); var E; switch (y) {
                    case "scroll":
                        E = "scroll"; break;
                    case "reverse":
                        E = "reverse"; break;
                    case "finish":
                    case "finishAll":
                    case "stop":
                        d.each(m, function(t, e) { r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer), "finishAll" !== y || _ !== !0 && !g.isString(_) || (d.each(d.queue(e, g.isString(_) ? _ : ""), function(t, e) { g.isFunction(e) && e() }), d.queue(e, g.isString(_) ? _ : "", [])) }); var P = []; return d.each(b.State.calls, function(t, e) { e && d.each(e[1], function(i, s) { var o = _ === n ? "" : _; return o !== !0 && e[2].queue !== o && (_ !== n || e[2].queue !== !1) || void d.each(m, function(i, n) { if (n === s)
                                        if ((_ === !0 || g.isString(_)) && (d.each(d.queue(n, g.isString(_) ? _ : ""), function(t, e) { g.isFunction(e) && e(null, !0) }), d.queue(n, g.isString(_) ? _ : "", [])), "stop" === y) { var a = r(n);
                                            a && a.tweensContainer && o !== !1 && d.each(a.tweensContainer, function(t, e) { e.endValue = e.currentValue }), P.push(t) } else "finish" !== y && "finishAll" !== y || (e[2].duration = 1) }) }) }), "stop" === y && (d.each(P, function(t, e) { u(e, !0) }), I.promise && I.resolver(m)), t();
                    default:
                        if (!d.isPlainObject(y) || g.isEmptyObject(y)) { if (g.isString(y) && b.Redirects[y]) { a = d.extend({}, _); var $ = a.duration,
                                    O = a.delay || 0; return a.backwards === !0 && (m = d.extend(!0, [], m).reverse()), d.each(m, function(t, e) { parseFloat(a.stagger) ? a.delay = O + parseFloat(a.stagger) * t : g.isFunction(a.stagger) && (a.delay = O + a.stagger.call(e, t, k)), a.drag && (a.duration = parseFloat($) || (/^(callout|transition)/.test(y) ? 1e3 : v), a.duration = Math.max(a.duration * (a.backwards ? 1 - t / k : (t + 1) / k), .75 * a.duration, 200)), b.Redirects[y].call(e, e, a || {}, t, k, m, I.promise ? I : n) }), t() } var A = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting."; return I.promise ? I.rejecter(new Error(A)) : console.log(A), t() }
                        E = "start" } var M = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                    N = [];
                d.each(m, function(t, e) { g.isNode(e) && s(e, t) }), a = d.extend({}, b.defaults, _), a.loop = parseInt(a.loop, 10); var H = 2 * a.loop - 1; if (a.loop)
                    for (var z = 0; z < H; z++) { var L = { delay: a.delay, progress: a.progress };
                        z === H - 1 && (L.display = a.display, L.visibility = a.visibility, L.complete = a.complete), x(m, "reverse", L) }
                return t() } };
        b = d.extend(x, b), b.animate = x;
        var C = e.requestAnimationFrame || f;
        return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() { i.hidden ? (C = function(t) { return setTimeout(function() { t(!0) }, 16) }, h()) : C = e.requestAnimationFrame || f }), t.Velocity = b, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function(t, e) { b.Redirects["slide" + e] = function(t, i, s, o, r, a) { var l = d.extend({}, i),
                    c = l.begin,
                    h = l.complete,
                    u = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                    p = {};
                l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() { c && c.call(r, r); for (var i in u) { p[i] = t.style[i]; var n = b.CSS.getPropertyValue(t, i);
                        u[i] = "Down" === e ? [n, 0] : [0, n] }
                    p.overflow = t.style.overflow, t.style.overflow = "hidden" }, l.complete = function() { for (var e in p) t.style[e] = p[e];
                    h && h.call(r, r), a && a.resolver(r) }, b(t, u, l) } }), d.each(["In", "Out"], function(t, e) { b.Redirects["fade" + e] = function(t, i, s, o, r, a) { var l = d.extend({}, i),
                    c = l.complete,
                    h = { opacity: "In" === e ? 1 : 0 };
                s !== o - 1 ? l.complete = l.begin = null : l.complete = function() { c && c.call(r, r), a && a.resolver(r) }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, h, l) } }), b
    }(window.jQuery || window.Zepto || window, window, document)
}), ! function(t) { "function" == typeof require && "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t() }(function() {
    return function(t, e, i, n) {
        function s(t, e) { var i = []; return !(!t || !e) && (r.each([t, e], function(t, e) { var n = [];
                r.each(e, function(t, e) { for (; e.toString().length < 5;) e = "0" + e;
                    n.push(e) }), i.push(n.join("")) }), parseFloat(i[0]) > parseFloat(i[1])) }
        if (!t.Velocity || !t.Velocity.Utilities) return void(e.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var o = t.Velocity,
            r = o.Utilities,
            a = o.version,
            l = { major: 1, minor: 1, patch: 0 };
        if (s(l, a)) { var c = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity."; throw alert(c), new Error(c) }
        o.RegisterEffect = o.RegisterUI = function(t, e) {
            function i(t, e, i, n) { var s, a = 0;
                r.each(t.nodeType ? [t] : t, function(t, e) { n && (i += t * n), s = e.parentNode, r.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(t, i) { a += parseFloat(o.CSS.getPropertyValue(e, i)) }) }), o.animate(s, { height: ("In" === e ? "+" : "-") + "=" + a }, { queue: !1, easing: "ease-in-out", duration: i * ("In" === e ? .6 : 1) }) }
            return o.Redirects[t] = function(s, a, l, c, h, u) {
                function d() { a.display !== n && "none" !== a.display || !/Out$/.test(t) || r.each(h.nodeType ? [h] : h, function(t, e) { o.CSS.setPropertyValue(e, "display", "none") }), a.complete && a.complete.call(h, h), u && u.resolver(h || s) }
                var p = l === c - 1;
                "function" == typeof e.defaultDuration ? e.defaultDuration = e.defaultDuration.call(h, h) : e.defaultDuration = parseFloat(e.defaultDuration);
                for (var f = 0; f < e.calls.length; f++) {
                    var g = e.calls[f],
                        m = g[0],
                        v = a.duration || e.defaultDuration || 1e3,
                        y = g[1],
                        b = g[2] || {},
                        _ = {};
                    if (_.duration = v * (y || 1), _.queue = a.queue || "", _.easing = b.easing || "ease", _.delay = parseFloat(b.delay) || 0, _._cacheValues = b._cacheValues || !0, 0 === f) {
                        if (_.delay += parseFloat(a.delay) || 0, 0 === l && (_.begin = function() {
                                a.begin && a.begin.call(h, h);
                                var e = t.match(/(In|Out)$/);
                                e && "In" === e[0] && m.opacity !== n && r.each(h.nodeType ? [h] : h, function(t, e) { o.CSS.setPropertyValue(e, "opacity", 0) }), a.animateParentHeight && e && i(h, e[0], v + _.delay, a.stagger)
                            }), null !== a.display)
                            if (a.display !== n && "none" !== a.display) _.display = a.display;
                            else if (/In$/.test(t)) { var w = o.CSS.Values.getDisplayType(s);
                            _.display = "inline" === w ? "inline-block" : w }
                        a.visibility && "hidden" !== a.visibility && (_.visibility = a.visibility)
                    }
                    f === e.calls.length - 1 && (_.complete = function() { if (e.reset) { for (var t in e.reset) { var i = e.reset[t];
                                o.CSS.Hooks.registered[t] !== n || "string" != typeof i && "number" != typeof i || (e.reset[t] = [e.reset[t], e.reset[t]]) } var r = { duration: 0, queue: !1 };
                            p && (r.complete = d), o.animate(s, e.reset, r) } else p && d() }, "hidden" === a.visibility && (_.visibility = a.visibility)), o.animate(s, m, _)
                }
            }, o
        }, o.RegisterEffect.packagedEffects = { "callout.bounce": { defaultDuration: 550, calls: [
                    [{ translateY: -30 }, .25],
                    [{ translateY: 0 }, .125],
                    [{ translateY: -15 }, .125],
                    [{ translateY: 0 }, .25]
                ] }, "callout.shake": { defaultDuration: 800, calls: [
                    [{ translateX: -11 }, .125],
                    [{ translateX: 11 }, .125],
                    [{ translateX: -11 }, .125],
                    [{ translateX: 11 }, .125],
                    [{ translateX: -11 }, .125],
                    [{ translateX: 11 }, .125],
                    [{ translateX: -11 }, .125],
                    [{ translateX: 0 }, .125]
                ] }, "callout.flash": { defaultDuration: 1100, calls: [
                    [{ opacity: [0, "easeInOutQuad", 1] }, .25],
                    [{ opacity: [1, "easeInOutQuad"] }, .25],
                    [{ opacity: [0, "easeInOutQuad"] }, .25],
                    [{ opacity: [1, "easeInOutQuad"] }, .25]
                ] }, "callout.pulse": { defaultDuration: 825, calls: [
                    [{ scaleX: 1.1, scaleY: 1.1 }, .5, { easing: "easeInExpo" }],
                    [{ scaleX: 1, scaleY: 1 }, .5]
                ] }, "callout.swing": { defaultDuration: 950, calls: [
                    [{ rotateZ: 15 }, .2],
                    [{ rotateZ: -10 }, .2],
                    [{ rotateZ: 5 }, .2],
                    [{ rotateZ: -5 }, .2],
                    [{ rotateZ: 0 }, .2]
                ] }, "callout.tada": { defaultDuration: 1e3, calls: [
                    [{ scaleX: .9, scaleY: .9, rotateZ: -3 }, .1],
                    [{ scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, .1],
                    [{ scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, .1],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    [{ scaleX: 1, scaleY: 1, rotateZ: 0 }, .2]
                ] }, "transition.fadeIn": { defaultDuration: 500, calls: [
                    [{ opacity: [1, 0] }]
                ] }, "transition.fadeOut": { defaultDuration: 500, calls: [
                    [{ opacity: [0, 1] }]
                ] }, "transition.flipXIn": { defaultDuration: 700, calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55] }]
                ], reset: { transformPerspective: 0 } }, "transition.flipXOut": { defaultDuration: 700, calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55 }]
                ], reset: { transformPerspective: 0, rotateY: 0 } }, "transition.flipYIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45] }]
                ], reset: { transformPerspective: 0 } }, "transition.flipYOut": { defaultDuration: 800, calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25 }]
                ], reset: { transformPerspective: 0, rotateX: 0 } }, "transition.flipBounceXIn": { defaultDuration: 900, calls: [
                    [{ opacity: [.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90] }, .5],
                    [{ opacity: .8, rotateY: 10 }, .25],
                    [{ opacity: 1, rotateY: 0 }, .25]
                ], reset: { transformPerspective: 0 } }, "transition.flipBounceXOut": { defaultDuration: 800, calls: [
                    [{ opacity: [.9, 1], transformPerspective: [400, 400], rotateY: -10 }, .5],
                    [{ opacity: 0, rotateY: 90 }, .5]
                ], reset: { transformPerspective: 0, rotateY: 0 } }, "transition.flipBounceYIn": { defaultDuration: 850, calls: [
                    [{ opacity: [.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90] }, .5],
                    [{ opacity: .8, rotateX: 10 }, .25],
                    [{ opacity: 1, rotateX: 0 }, .25]
                ], reset: { transformPerspective: 0 } }, "transition.flipBounceYOut": { defaultDuration: 800, calls: [
                    [{ opacity: [.9, 1], transformPerspective: [400, 400], rotateX: -15 }, .5],
                    [{ opacity: 0, rotateX: 90 }, .5]
                ], reset: { transformPerspective: 0, rotateX: 0 } }, "transition.swoopIn": { defaultDuration: 850, calls: [
                    [{ opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0 }]
                ], reset: { transformOriginX: "50%", transformOriginY: "50%" } }, "transition.swoopOut": { defaultDuration: 850, calls: [
                    [{ opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 }]
                ], reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 } }, "transition.whirlIn": { defaultDuration: 850, calls: [
                    [{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160] }, 1, { easing: "easeInOutSine" }]
                ] }, "transition.whirlOut": { defaultDuration: 750, calls: [
                    [{ opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" }]
                ], reset: { scaleX: 1, scaleY: 1, rotateY: 0 } }, "transition.shrinkIn": { defaultDuration: 750, calls: [
                    [{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0 }]
                ] }, "transition.shrinkOut": { defaultDuration: 600, calls: [
                    [{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0 }]
                ], reset: { scaleX: 1, scaleY: 1 } }, "transition.expandIn": { defaultDuration: 700, calls: [
                    [{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, .625], scaleY: [1, .625], translateZ: 0 }]
                ] }, "transition.expandOut": { defaultDuration: 700, calls: [
                    [{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: .5, scaleY: .5, translateZ: 0 }]
                ], reset: { scaleX: 1, scaleY: 1 } }, "transition.bounceIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], scaleX: [1.05, .3], scaleY: [1.05, .3] }, .4],
                    [{ scaleX: .9, scaleY: .9, translateZ: 0 }, .2],
                    [{ scaleX: 1, scaleY: 1 }, .5]
                ] }, "transition.bounceOut": { defaultDuration: 800, calls: [
                    [{ scaleX: .95, scaleY: .95 }, .35],
                    [{ scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, .35],
                    [{ opacity: [0, 1], scaleX: .3, scaleY: .3 }, .3]
                ], reset: { scaleX: 1, scaleY: 1 } }, "transition.bounceUpIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], translateY: [-30, 1e3] }, .6, { easing: "easeOutCirc" }],
                    [{ translateY: 10 }, .2],
                    [{ translateY: 0 }, .2]
                ] }, "transition.bounceUpOut": { defaultDuration: 1e3, calls: [
                    [{ translateY: 20 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateY: -1e3 }, .8]
                ], reset: { translateY: 0 } }, "transition.bounceDownIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], translateY: [30, -1e3] }, .6, { easing: "easeOutCirc" }],
                    [{ translateY: -10 }, .2],
                    [{ translateY: 0 }, .2]
                ] }, "transition.bounceDownOut": { defaultDuration: 1e3, calls: [
                    [{ translateY: -20 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateY: 1e3 }, .8]
                ], reset: { translateY: 0 } }, "transition.bounceLeftIn": { defaultDuration: 750, calls: [
                    [{ opacity: [1, 0], translateX: [30, -1250] }, .6, { easing: "easeOutCirc" }],
                    [{ translateX: -10 }, .2],
                    [{ translateX: 0 }, .2]
                ] }, "transition.bounceLeftOut": { defaultDuration: 750, calls: [
                    [{ translateX: 30 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateX: -1250 }, .8]
                ], reset: { translateX: 0 } }, "transition.bounceRightIn": { defaultDuration: 750, calls: [
                    [{ opacity: [1, 0], translateX: [-30, 1250] }, .6, { easing: "easeOutCirc" }],
                    [{ translateX: 10 }, .2],
                    [{ translateX: 0 }, .2]
                ] }, "transition.bounceRightOut": { defaultDuration: 750, calls: [
                    [{ translateX: -30 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateX: 1250 }, .8]
                ], reset: { translateX: 0 } }, "transition.slideUpIn": { defaultDuration: 900, calls: [
                    [{ opacity: [1, 0], translateY: [0, 20], translateZ: 0 }]
                ] }, "transition.slideUpOut": { defaultDuration: 900, calls: [
                    [{ opacity: [0, 1], translateY: -20, translateZ: 0 }]
                ], reset: { translateY: 0 } }, "transition.slideDownIn": { defaultDuration: 900, calls: [
                    [{ opacity: [1, 0], translateY: [0, -20], translateZ: 0 }]
                ] }, "transition.slideRightDownIn": { defaultDuration: 900, calls: [
                    [{ opacity: [1, 0], translateY: [0, -120], translateX: [0, 100] }]
                ] }, "transition.slideLeftUpIn": { defaultDuration: 900, calls: [
                    [{ opacity: [1, 0], translateY: [0, 120], translateX: [0, -100] }]
                ] }, "transition.slideDownOut": { defaultDuration: 900, calls: [
                    [{ opacity: [0, 1], translateY: 20, translateZ: 0 }]
                ], reset: { translateY: 0 } }, "transition.slideLeftIn": { defaultDuration: 1e3, calls: [
                    [{ opacity: [1, 0], translateX: [0, -20], translateZ: 0 }]
                ] }, "transition.slideLeftOut": { defaultDuration: 1050, calls: [
                    [{ opacity: [0, 1], translateX: -20, translateZ: 0 }]
                ], reset: { translateX: 0 } }, "transition.slideRightIn": { defaultDuration: 1e3, calls: [
                    [{ opacity: [1, 0], translateX: [0, 20], translateZ: 0 }]
                ] }, "transition.slideRightOut": { defaultDuration: 1050, calls: [
                    [{ opacity: [0, 1], translateX: 20, translateZ: 0 }]
                ], reset: { translateX: 0 } }, "transition.slideUpBigIn": { defaultDuration: 850, calls: [
                    [{ opacity: [1, 0], translateY: [0, 75], translateZ: 0 }]
                ] }, "transition.slideUpBigOut": { defaultDuration: 800, calls: [
                    [{ opacity: [0, 1], translateY: -675, translateZ: 0 }]
                ], reset: { translateY: 0 } }, "transition.slideDownBigIn": { defaultDuration: 850, calls: [
                    [{ opacity: [1, 0], translateY: [0, -675], translateZ: 0 }]
                ] }, "transition.slideDownBigOut": { defaultDuration: 800, calls: [
                    [{ opacity: [0, 1], translateY: 75, translateZ: 0 }]
                ], reset: { translateY: 0 } }, "transition.slideLeftBigIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], translateX: [0, -275], translateZ: 0 }]
                ] }, "transition.slideLeftBigInTop": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], translateX: [0, -275], translateY: [0, -80] }]
                ] }, "transition.slideLeftBigOut": { defaultDuration: 750, calls: [
                    [{ opacity: [0, 1], translateX: -75, translateZ: 0 }]
                ], reset: { translateX: 0 } }, "transition.slideRightBigIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], translateX: [0, 275], translateZ: 0 }]
                ] }, "transition.slideRightBigOut": { defaultDuration: 750, calls: [
                    [{ opacity: [0, 1], translateX: 75, translateZ: 0 }]
                ], reset: { translateX: 0 } }, "transition.perspectiveUpIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180] }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveUpOut": { defaultDuration: 850, calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180 }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 } }, "transition.perspectiveDownIn": { defaultDuration: 800, calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180] }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveDownOut": { defaultDuration: 850, calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180 }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 } }, "transition.perspectiveLeftIn": { defaultDuration: 950, calls: [
                    [{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180] }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveLeftOut": { defaultDuration: 950, calls: [
                    [{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180 }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 } }, "transition.perspectiveRightIn": { defaultDuration: 950, calls: [
                    [{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180] }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveRightOut": { defaultDuration: 950, calls: [
                    [{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180 }]
                ], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 } } };
        for (var h in o.RegisterEffect.packagedEffects) o.RegisterEffect(h, o.RegisterEffect.packagedEffects[h]);
        o.RunSequence = function(t) { var e = r.extend(!0, [], t);
            e.length > 1 && (r.each(e.reverse(), function(t, i) { var n = e[t + 1]; if (n) { var s = i.o || i.options,
                        a = n.o || n.options,
                        l = s && s.sequenceQueue === !1 ? "begin" : "complete",
                        c = a && a[l],
                        h = {};
                    h[l] = function() { var t = n.e || n.elements,
                            e = t.nodeType ? [t] : t;
                        c && c.call(e, e), o(i) }, n.o ? n.o = r.extend({}, a, h) : n.options = r.extend({}, a, h) } }), e.reverse()), o(e[0]) }
    }(window.jQuery || window.Zepto || window, window, document)
}), ! function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, n) { var s, o = this;
            o.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: t(e), appendDots: t(e), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, i) { return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, o.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, s = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, n, s), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0) } var i = 0; return e }(), e.prototype.activateADA = function() { var t = this;
        t.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) { var s = this; if ("boolean" == typeof i) n = i, i = null;
        else if (0 > i || i >= s.slideCount) return !1;
        s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : n === !0 ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) { t(i).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit() }, e.prototype.animateHeight = function() { var t = this; if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) { var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({ height: e }, t.options.speed) } }, e.prototype.animateSlide = function(e, i) { var n = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), t({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(t) { t = Math.ceil(t), s.options.vertical === !1 ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n)) }, complete: function() { i && i.call() } })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() { s.disableTransition(), i.call() }, s.options.speed)) }, e.prototype.getNavTarget = function() { var e = this,
            i = e.options.asNavFor; return i && null !== i && (i = t(i).not(e.$slider)), i }, e.prototype.asNavFor = function(e) { var i = this,
            n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() { var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0) }) }, e.prototype.applyTransition = function(t) { var e = this,
            i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i) }, e.prototype.autoPlay = function() { var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed)) }, e.prototype.autoPlayClear = function() { var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer) }, e.prototype.autoPlayIterator = function() { var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e)) }, e.prototype.buildArrows = function() { var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() { var e, i, n = this; if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) { for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false") } }, e.prototype.buildOut = function() { var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) { t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable") }, e.prototype.buildRows = function() { var t, e, i, n, s, o, r, a = this; if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) { for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), t = 0; s > t; t++) { var l = document.createElement("div"); for (e = 0; e < a.options.rows; e++) { var c = document.createElement("div"); for (i = 0; i < a.options.slidesPerRow; i++) { var h = t * r + (e * a.options.slidesPerRow + i);
                        o.get(h) && c.appendChild(o.get(h)) }
                    l.appendChild(c) }
                n.appendChild(l) }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" }) } }, e.prototype.checkResponsive = function(e, i) { var n, s, o, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || t(window).width(); if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) { s = null; for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? o < r.breakpoints[n] && (s = r.breakpoints[n]) : o > r.breakpoints[n] && (s = r.breakpoints[n]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = s), e || a === !1 || r.$slider.trigger("breakpoint", [r, a]) } }, e.prototype.changeSlide = function(e, i) { var n, s, o, r = this,
            a = t(e.currentTarget); switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = r.slideCount % r.options.slidesToScroll !== 0, n = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, i); break;
            case "next":
                s = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, i); break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus"); break;
            default:
                return } }, e.prototype.checkNavigable = function(t) { var e, i, n = this; if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
        else
            for (var s in e) { if (t < e[s]) { t = i; break }
                i = e[s] }
        return t }, e.prototype.cleanUpEvents = function() { var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition) }, e.prototype.cleanUpSlideEvents = function() { var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1)) }, e.prototype.cleanUpRows = function() { var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t)) }, e.prototype.clickHandler = function(t) { var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()) }, e.prototype.destroy = function(e) { var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { t(this).attr("style", t(this).data("originalStyling")) }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i]) }, e.prototype.disableTransition = function(t) { var e = this,
            i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i) }, e.prototype.fadeSlide = function(t, e) { var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }), e && setTimeout(function() { i.disableTransition(t), e.call() }, i.options.speed)) }, e.prototype.fadeSlideOut = function(t) { var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) { var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit()) }, e.prototype.focusHandler = function() { var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) { i.stopImmediatePropagation(); var n = t(this);
            setTimeout(function() { e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay()) }, 0) }) }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { var t = this; return t.currentSlide }, e.prototype.getDotCount = function() { var t = this,
            e = 0,
            i = 0,
            n = 0; if (t.options.infinite === !0)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0) n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll); return n - 1 }, e.prototype.getLeft = function(t) { var e, i, n, s = this,
            o = 0; return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, o = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, o = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, o = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, o = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + o, s.options.variableWidth === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = s.options.rtl === !0 ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, s.options.centerMode === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = s.options.rtl === !0 ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e }, e.prototype.getOption = e.prototype.slickGetOption = function(t) { var e = this; return e.options[t] }, e.prototype.getNavigableIndexes = function() { var t, e = this,
            i = 0,
            n = 0,
            s = []; for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; return s }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, i, n, s = this; return n = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(e, o) { return o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * s.swipeLeft ? (i = o, !1) : void 0 }), e = Math.abs(t(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) { var i = this;
        i.changeSlide({ data: { message: "index", index: parseInt(t) } }, e) }, e.prototype.init = function(e) { var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay()) }, e.prototype.initADA = function() { var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) { t(this).attr({ role: "option", "aria-describedby": "slick-slide" + e.instanceUid + i }) }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) { t(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + e.instanceUid + i, id: "slick-slide" + e.instanceUid + i }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA() }, e.prototype.initArrowEvents = function() { var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide)) }, e.prototype.initDotEvents = function() { var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
            e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() { var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition) }, e.prototype.initUI = function() { var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show() }, e.prototype.keyHandler = function(t) { var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({ data: { message: e.options.rtl === !0 ? "next" : "previous" } }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({ data: { message: e.options.rtl === !0 ? "previous" : "next" } })) }, e.prototype.lazyLoad = function() {
        function e(e) { t("img[data-lazy]", e).each(function() { var e = t(this),
                    i = t(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function() { e.animate({ opacity: 0 }, 100, function() { e.attr("src", i).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy").removeClass("slick-loading") }), r.$slider.trigger("lazyLoaded", [r, e, i]) }) }, n.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]) }, n.src = i }) } var i, n, s, o, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), o = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, o <= r.slideCount && o++)), i = r.$slider.find(".slick-slide").slice(s, o), e(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), e(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(n)) }, e.prototype.loadSlider = function() { var t = this;
        t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad() }, e.prototype.next = e.prototype.slickNext = function() { var t = this;
        t.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() { var t = this;
        t.checkResponsive(), t.setPosition() }, e.prototype.pause = e.prototype.slickPause = function() { var t = this;
        t.autoPlayClear(), t.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function() { var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1 }, e.prototype.postSlide = function(t) { var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA()) }, e.prototype.prev = e.prototype.slickPrev = function() { var t = this;
        t.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(t) { t.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) { e = e || 1; var i, n, s, o = this,
            r = t("img[data-lazy]", o.$slider);
        r.length ? (i = r.first(), n = i.attr("data-lazy"), s = document.createElement("img"), s.onload = function() { i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, n]), o.progressiveLazyLoad() }, s.onerror = function() { 3 > e ? setTimeout(function() { o.progressiveLazyLoad(e + 1) }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, n]), o.progressiveLazyLoad()) }, s.src = n) : o.$slider.trigger("allImagesLoaded", [o]) }, e.prototype.refresh = function(e) { var i, n, s = this;
        n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, { currentSlide: i }), s.init(), e || s.changeSlide({ data: { message: "index", index: i } }, !1) }, e.prototype.registerBreakpoints = function() { var e, i, n, s = this,
            o = s.options.responsive || null; if ("array" === t.type(o) && o.length) { s.respondTo = s.options.respondTo || "window"; for (e in o)
                if (n = s.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) { for (; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                    s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings }
            s.breakpoints.sort(function(t, e) { return s.options.mobileFirst ? t - e : e - t }) } }, e.prototype.reinit = function() { var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]) }, e.prototype.resize = function() { var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50)) }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) { var n = this; return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit()) }, e.prototype.setCSS = function(t) { var e, i, n = this,
            s = {};
        n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(s) : (s = {}, n.cssTransitions === !1 ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s))) }, e.prototype.setDimensions = function() { var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({ padding: "0px " + t.options.centerPadding }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({ padding: t.options.centerPadding + " 0px" })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length))); var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e) }, e.prototype.setFade = function() { var e, i = this;
        i.$slides.each(function(n, s) { e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(s).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(s).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) }), i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 }) }, e.prototype.setHeight = function() { var t = this; if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) { var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e) } }, e.prototype.setOption = e.prototype.slickSetOption = function() { var e, i, n, s, o, r = this,
            a = !1; if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) r.options[n] = s;
        else if ("multiple" === o) t.each(n, function(t, e) { r.options[t] = e });
        else if ("responsive" === o)
            for (i in s)
                if ("array" !== t.type(r.options.responsive)) r.options.responsive = [s[i]];
                else { for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[i]) }
        a && (r.unload(), r.reinit()) }, e.prototype.setPosition = function() { var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]) }, e.prototype.setProps = function() { var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1 }, e.prototype.setSlideClasses = function(t) { var e, i, n, s, o = this;
        i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), o.options.centerMode === !0 ? (e = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = o.options.infinite === !0 ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad() }, e.prototype.setupInfinite = function() { var e, i, n, s = this; if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (i = null, s.slideCount > s.options.slidesToShow)) { for (n = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned"); for (e = 0; n > e; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { t(this).attr("id", "") }) } }, e.prototype.interrupt = function(t) { var e = this;
        t || e.autoPlay(), e.interrupted = t }, e.prototype.selectHandler = function(e) { var i = this,
            n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            s = parseInt(n.attr("data-slick-index")); return s || (s = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(s), void i.asNavFor(s)) : void i.slideHandler(s) }, e.prototype.slideHandler = function(t, e, i) { var n, s, o, r, a, l = null,
            c = this; return e = e || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() { c.postSlide(n) }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function() { c.postSlide(n) }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), s = 0 > n ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), o = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(o), c.fadeSlide(s, function() { c.postSlide(s) })) : c.postSlide(s), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() { c.postSlide(s) }) : c.postSlide(s)))) }, e.prototype.startLoad = function() { var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var t, e, i, n, s = this; return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? s.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(t) { var e, i, n = this; if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1; if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) { switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0; break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1 } "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i])) } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {}) }, e.prototype.swipeHandler = function(t) { var e = this; if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t); break;
            case "move":
                e.swipeMove(t); break;
            case "end":
                e.swipeEnd(t) } }, e.prototype.swipeMove = function(t) { var e, i, n, s, o, r = this; return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || o && 1 !== o.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + n * s : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = e + n * s), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0) }, e.prototype.swipeStart = function(t) { var e, i = this; return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0)) }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() { var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit()) }, e.prototype.unload = function() { var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, e.prototype.unslick = function(t) { var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy() }, e.prototype.updateArrows = function() { var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, e.prototype.updateDots = function() { var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")) }, e.prototype.visibility = function() { var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1) }, t.fn.slick = function() { var t, i, n = this,
            s = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            r = n.length; for (t = 0; r > t; t++)
            if ("object" == typeof s || "undefined" == typeof s ? n[t].slick = new e(n[t], s) : i = n[t].slick[s].apply(n[t].slick, o), "undefined" != typeof i) return i;
        return n }
}), ! function(t) { "use strict"; var e = function(e, i) { this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build() };
    e.prototype = { constructor: e, init: function() { var t = this;
            t.timeout = setTimeout(function() { for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) }, t.startDelay) }, build: function() { var e = this; if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) { this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children()); var i = this.stringsElement.children();
                t.each(i, function(i, n) { e.strings.push(t(n).html()) }) }
            this.init() }, typewrite: function(t, e) { if (this.stop !== !0) { var i = Math.round(70 * Math.random()) + this.typeSpeed,
                    n = this;
                n.timeout = setTimeout(function() { var i = 0,
                        s = t.substr(e); if ("^" === s.charAt(0)) { var o = 1; /^\^\d+/.test(s) && (s = /\d+/.exec(s)[0], o += s.length, i = parseInt(s)), t = t.substring(0, e) + t.substring(e + o) } if ("html" === n.contentType) { var r = t.substr(e).charAt(0); if ("<" === r || "&" === r) { var a = "",
                                l = ""; for (l = "<" === r ? ">" : ";"; t.substr(e + 1).charAt(0) !== l && (a += t.substr(e).charAt(0), e++, !(e + 1 > t.length)););
                            e++, a += l } }
                    n.timeout = setTimeout(function() { if (e === t.length) { if (n.options.onStringTyped(n.arrayPos), n.arrayPos === n.strings.length - 1 && (n.options.callback(), n.curLoop++, n.loop === !1 || n.curLoop === n.loopCount)) return;
                            n.timeout = setTimeout(function() { n.backspace(t, e) }, n.backDelay) } else { 0 === e && n.options.preStringTyped(n.arrayPos); var i = t.substr(0, e + 1);
                            n.attr ? n.el.attr(n.attr, i) : n.isInput ? n.el.val(i) : "html" === n.contentType ? n.el.html(i) : n.el.text(i), e++, n.typewrite(t, e) } }, i) }, i) } }, backspace: function(t, e) { if (this.stop !== !0) { var i = Math.round(70 * Math.random()) + this.backSpeed,
                    n = this;
                n.timeout = setTimeout(function() { if ("html" === n.contentType && ">" === t.substr(e).charAt(0)) { for (var i = "";
                            "<" !== t.substr(e - 1).charAt(0) && (i -= t.substr(e).charAt(0), e--, !(0 > e)););
                        e--, i += "<" } var s = t.substr(0, e);
                    n.attr ? n.el.attr(n.attr, s) : n.isInput ? n.el.val(s) : "html" === n.contentType ? n.el.html(s) : n.el.text(s), e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.shuffle && (n.sequence = n.shuffleArray(n.sequence)), n.init()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e)) }, i) } }, shuffleArray: function(t) { var e, i, n = t.length; if (n)
                for (; --n;) i = Math.floor(Math.random() * (n + 1)), e = t[i], t[i] = t[n], t[n] = e; return t }, reset: function() { var t = this;
            clearInterval(t.timeout), this.el.attr("id"), this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback() } }, t.fn.typed = function(i) { return this.each(function() { var n = t(this),
                s = n.data("typed"),
                o = "object" == typeof i && i;
            s && s.reset(), n.data("typed", s = new e(this, o)), "string" == typeof i && s[i]() }) }, t.fn.typed.defaults = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, shuffle: !1, backDelay: 500, loop: !1, loopCount: !1, showCursor: !0, cursorChar: "|", attr: null, contentType: "html", callback: function() {}, preStringTyped: function() {}, onStringTyped: function() {}, resetCallback: function() {} } }(window.jQuery);
var theLanguage = $("html").attr("lang");
window.location.href.indexOf("work") != -1 && $("#geniNav li").hasClass("menu-item-object-custom") && ($("#menu-item-26").addClass("current-menu-item"), console.log("This is work"));
var browser = "",
    browserVersion = 0;
/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent) ? browser = "Opera" : /MSIE (\d+\.\d+);/.test(navigator.userAgent) ? browser = "MSIE" : /Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent) ? browser = "Netscape" : /Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent) ? browser = "Chrome" : /Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent) ? (browser = "Safari", /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent), browserVersion = new Number(RegExp.$1)) : /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) && (browser = "Firefox"), 0 === browserVersion && (browserVersion = parseFloat(new Number(RegExp.$1))), "Safari" == browser && browserVersion < "6.2" && ($("#videoplayer").hide(), $(".video-close").hide()), "Opera" == browser && browserVersion < "38" && $("#outdated-browser").show(), "Safari" == browser && browserVersion < "8" && $("#outdated-browser").show(), "MSIE" == browser && browserVersion <= "9" && $("#outdated-browser").show(), "Firefox" == browser && browserVersion < "45" && $("#outdated-browser").show(), "Chrome" == browser && browserVersion <= "50" && $("#outdated-browser").show(), $("#btnCloseUpdateBrowser").click(function() { $("#outdated-browser").hide() }), setTimeout(function() { $("#outdated-browser").addClass("outdated-show ") }, 1e3), setTimeout(function() { $("#outdated-browser").removeClass("outdated-show ") }, 5e3);
var pathname = window.location.pathname,
    url = window.location.href;
console.log(url), console.log(pathname), $('a[href*="#"]:not([href="#"])').click(function() { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var t = $(this.hash); if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html, body").animate({ scrollTop: t.offset().top }, 1e3), !1 } }), $("#menu-icon").click(function() { $(".aside-container").toggle("slide", { direction: "right" }, 800), $(".aside-container").css("display", "block") }), $(window).resize(function() { var t = $(this).width();
    t > 767 && (console.log("larger than"), $(".aside-container").fadeOut(), $(".page-content").css("display", "block"), $(".js-toggle-menu").removeClass("open")) }), $("#click_contact").click(function() { $(".aside-container").toggle("slide", { direction: "right" }, 800) }), $(".js-toggle-menu").click(function(t) { t.preventDefault(), $(this).toggleClass("open"), $(".page-content").fadeToggle(1e3) }), $(".lang-item-4").hasClass("current-lang") ? (console.log("This is current lang"), $(".lang-item-4 a").addClass("current-lang")) : $(".lang-item-7 a").css("color", "#f35c05"), $(".js-toggle-video").click(function(t) { t.preventDefault(), $(this).toggleClass("open").hasClass("open") ? ($(".video-container").velocity("transition.slideUpBigOut"), setTimeout(function() { $("#heroCarousel").addClass("index") }, 500)) : ($(".video-container").velocity("transition.slideDownBigIn"), $("#heroCarousel").removeClass("index")) });
var iframe = $("#videoplayer")[0],
    player = $f(iframe);
$(".js-toggle-video").click(function() { player.api("pause") }), $("#videoplayer").bind("ended", function() { $(this).parent().velocity("transition.slideUpBigOut"), $(".js-toggle-video").toggleClass("open"), $("#section-one").toggleClass("videoplayer-top") }), $(function() { $(window).scroll(function() { $(this).scrollTop() > 210 ? $(".carousel-indicators").fadeOut() : $(".carousel-indicators").fadeIn() }) }), $(document).ready(function(t) { $(".carousel-indicators").click(function() { $(".carousel").carousel("prev") }), $(".left").click(function() { $(".carousel").carousel("prev") }), $(".right").click(function() { $(".carousel").carousel("next") }) }), $(function() {
    function t() { if ($(this).scrollTop() >= 280) { var t = $(this).scrollTop();
            $(".hero-scroll").css({ top: Math.ceil(e.top + .4 * t - 111) }), $(".section-one").css({ top: Math.ceil(i.top + .5 * t) }) } else $(".hero-scroll").css({ top: 0 }) } var e = $(".hero-scroll").position(),
        i = $(".section-one").position(),
        n = !1;
    $(window).scroll(function() { n = !0 }), setInterval(function() { n && (n = !1, t()) }, 1) });
var is_chrome = navigator.userAgent.indexOf("Chrome") > -1,
    is_explorer = navigator.userAgent.indexOf("MSIE") > -1,
    is_firefox = navigator.userAgent.indexOf("Firefox") > -1,
    is_safari = navigator.userAgent.indexOf("Safari") > -1,
    is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
is_chrome && is_safari && (is_safari = !1), is_chrome && is_opera && (is_chrome = !1);
var iframeNoodles = $("#noodles-video")[0],
    playerNoodles = $f(iframeNoodles);
$(".close").click(function() { playerNoodles.api("pause") }), $(".modal").on("hidden.bs.modal", function() { playerNoodles.api("pause") }), $(document).ready(function() { $(".work-buttons button").click(function() { $("button").removeClass("active"), $(this).addClass("active") }) }), $(document).ready(function() { $(".team-buttons button").click(function() { $("button").removeClass("active"), $(this).addClass("active") }) }), $(window).load(function() { $grid = $(".grid"), $grid.isotope(), $(".work-buttons button").click(function() { var t = $(this).attr("id"),
            e = t.replace("-button", ""); return "all" == e ? ($grid.isotope({ itemSelector: ".col-md-4", percentPosition: !0, filter: "*", layoutMode: "fitRows", masonry: { columnWidth: 50 } }), !1) : void $grid.isotope({ filter: "." + e }) }) }), $(function() { var t = $("#Portfolio");
    t.isotope({ itemSelector: ".portfolio-item", layoutMode: "fitRows" }), $("#filters").on("click", "a", function() { var e = $(this).attr("data-filter");
        $("#filters a").removeClass("active"), $(this).addClass("active"), t.isotope({ filter: e }) }) });
var grid = $(".grid");
if ($(window).load(function() { $grid.isotope(), $(".team-buttons button").click(function() { var t = $(this).attr("id"),
                e = t.replace("-button", ""); return "all" == e ? ($grid.isotope({ itemSelector: ".col-md-2", percentPosition: !0, filter: "*", masonry: { columnWidth: ".col-md-2", isFitWidth: !0 } }), !1) : void $grid.isotope({ filter: "." + e }) }) }), $("#trigger-homeTitle").length > 0) {
    var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-homeTitle", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".text-row h1").addClass("show-title"), setTimeout(function() { $(".text-row-split").addClass("show-content") }, 500), "en-GB" == theLanguage && $(function() { $(".textChange").typed({ strings: ["packaging", "branding", "web", "research", "creative"], typeSpeed: 100, backDelay: 750 }) }), "de-DE" == theLanguage && $(function() { $(".textChange").typed({ strings: ["verpackung", "branding", "web", "kreativ", "forschung"], typeSpeed: 100, backDelay: 750 }) }) });
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-oneLeft", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".leftSide_Two").addClass("animate-img"), console.log("this is working") });
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-threeImgOne", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) {
        $("#leftSide-One").addClass("animate-img"), setTimeout(function() { $("#rightSide-One").addClass("animate-img") }, 500), setTimeout(function() {
            $("#rightSide-Two").addClass("animate-img")
        }, 1e3)
    })
}
if ($("#trigger-aboutTitle").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-aboutTitle", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".about-title").addClass("show-title"), "en-GB" == theLanguage && $(function() { $(".textChangeAbout").typed({ strings: ["innovative.", "creative.", "passionate.", "precise.", "efficient.", "experts.", "<span id='test11'>Tjarks &amp; Tjarks.</span>"], typeSpeed: 100, backDelay: 1350 }) }), "de-DE" == theLanguage && $(".textChangeAbout").typed({ strings: ["innovativ", "kreativ", "leidenschaftlich", "präzise", "effizient", "experten", "Tjarks & Tjarks"], typeSpeed: 100, backDelay: 1350, loop: !1 }), setTimeout(function() { $(".typed-cursor").hide() }, 26e3) }), scene.reverse(!1); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-aboutContent", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".about-content").addClass("show-content"), setTimeout(function() { $(".counter").addClass("show-content") }, 500), $(".counting-1").each(function() { $(this).prop("Counter", 0).animate({ Counter: $(this).text() }, { duration: 1e3, easing: "easeOutExpo", step: function(t) { $(this).text(Math.ceil(t)) } }) }), $(".counting-2").each(function() { $(this).prop("Counter", 0).animate({ Counter: $(this).text() }, { duration: 1500, easing: "easeOutExpo", step: function(t) { $(this).text(Math.ceil(t)) } }) }), $(".counting-3").each(function() { $(this).prop("Counter", 0).animate({ Counter: $(this).text() }, { duration: 2e3, easing: "easeOutExpo", step: function(t) { $(this).text(Math.ceil(t)) }, complete: function() { $(".counting-3").append('<span class="counter-plus">+</span>') } }) }), $(".counting-4").each(function() { $(this).prop("Counter", 0).animate({ Counter: $(this).text() }, { duration: 2500, easing: "easeOutExpo", step: function(t) { $(this).text(Math.ceil(t)) }, complete: function() { $(".counting-4").append('<span class="counter-plus">+</span>') } }) }) }), scene.reverse(!1); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-mainContent", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".sliderContent").addClass("show-content") }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-mainContent", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".senior-titleThree").addClass("show-title"), setTimeout(function() { $(".senior-contentThree").addClass("show-content") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-imgOne", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".left-container").addClass("animate-img"), setTimeout(function() { $(".right-containerOne").addClass("animate-img") }, 500), setTimeout(function() { $(".right-containerTwo").addClass("animate-img") }, 1e3) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotOne", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotOne").addClass("animate-img"), setTimeout(function() { $("#teamShotTwo").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotTwo", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotFour").addClass("animate-img"), setTimeout(function() { $("#teamShotThree").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotThree", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotSix").addClass("animate-img"), setTimeout(function() { $("#teamShotFive").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotFour", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotEight").addClass("animate-img"), setTimeout(function() { $("#teamShotSeven").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotFour", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotEight").addClass("animate-img"), setTimeout(function() { $("#teamShotSeven").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotFive", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotTen").addClass("animate-img"), setTimeout(function() { $("#teamShotNine").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotSix", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotTwelve").addClass("animate-img"), setTimeout(function() { $("#teamShotEleven").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotSeven", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotFourteen").addClass("animate-img"), setTimeout(function() { $("#teamShotThirteen").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotEight", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotSixteen").addClass("animate-img"), setTimeout(function() { $("#teamShotFifteen").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotNine", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotSeventeen").addClass("animate-img"), setTimeout(function() { $("#teamShotEighteen").addClass("animate-img") }, 500) }); var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-headshotTen", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $("#teamShotNineteen").addClass("animate-img"), setTimeout(function() { $("#teamShotTwenty").addClass("animate-img") }, 500) }) }
if ($("#trigger-servicesImgOne").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-servicesImgOne", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function(t) { $(".servicesOne").addClass("animate-img"), setTimeout(function() { $(".servicesTwo").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgThree").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgThree", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesFour").addClass("animate-img"), setTimeout(function() { $(".servicesThree").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgFive").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgFive", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesFive").addClass("animate-img"), setTimeout(function() { $(".servicesSix").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgSeven").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgSeven", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesEight").addClass("animate-img"), setTimeout(function() { $(".servicesSeven").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgNine").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgNine", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesNine").addClass("animate-img"), setTimeout(function() { $(".servicesTen").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgEleven").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgEleven", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesEleven").addClass("animate-img"), setTimeout(function() { $(".servicesTwelve").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgThirteen").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgThirteen", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesThirteen").addClass("animate-img"), setTimeout(function() { $(".servicesFourteen").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgFifteen").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgFifteen", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesFifteen").addClass("animate-img"), setTimeout(function() { $(".servicesSixteen").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgSeventeen").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgSeventeen", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesSeventeen").addClass("animate-img"), setTimeout(function() { $(".servicesEighteen").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgNineTeen").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgNineTeen", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesNineteen").addClass("animate-img"), setTimeout(function() { $(".servicesTwenty").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgTwentyOne").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgTwentyOne", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesTwentyOne").addClass("animate-img"), setTimeout(function() { $(".servicesTweentyTwo").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgTwentyThree").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgTwentyThree", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesTwentyThree").addClass("animate-img"), setTimeout(function() { $(".servicesTwentyFour").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgTwentyFive").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgTwentyFive", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesTwentyFive").addClass("animate-img"), setTimeout(function() { $(".servicesTweentySix").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgTwentySeven").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgTwentySeven", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesTwentySeven").addClass("animate-img"), setTimeout(function() { $(".servicesTwentyEight").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgTwentyNine").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgTwentyNine", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesTwentyNine").addClass("animate-img"), setTimeout(function() { $(".servicesThirty").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgThirtyOne").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgThirtyOne", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesThirtyOne").addClass("animate-img"), setTimeout(function() { $(".servicesThirtyTwo").addClass("animate-img") }, 500) }) }
if ($("#trigger-serviceImgThirtyThree").length > 0) { var controller = new ScrollMagic.Controller,
        scene = new ScrollMagic.Scene({ triggerElement: "#trigger-serviceImgThirtyThree", triggerHook: "onEnter", offset: 100 }).addTo(controller);
    scene.on("enter", function() { $(".servicesThirtyThree").addClass("animate-img"), setTimeout(function() { $(".servicesThirtyFour").addClass("animate-img") }, 500) }) }
var controller = new ScrollMagic.Controller,
    scene = new ScrollMagic.Scene({ triggerElement: "#footer", triggerHook: "onEnter", offset: 100 }).addTo(controller);
scene.on("enter", function() { $("#main-footer").addClass("show-footer") }), $(".career-footer").length > 0 && $(".careerContainer").css("display", "none"), $("#roleOne").click(function() { $(".role-one").show(), $(".role-two").hide(), $(".role-three").hide() }), $("#roleTwo").click(function() { $(".role-two").show(), $(".role-one").hide(), $(".role-three").hide() }), $("#roleThree").click(function() { $(".role-two").hide(), $(".role-one").hide(), $(".role-three").show() }), $(document).ready(function() { $(".seniorSlider").slick({ slidesToShow: 3, slidesToScroll: 1, arrows: !0, autoplay: !0, autoplaySpeed: 5e3, asNavFor: ".seniorSliderContent", centerMode: !0, focusOnSelect: !0, centerPadding: 0, pauseOnHover: !0, prevArrow: "<img class='a-left control-c prev slick-prev' src='http://tjarksandtjarks.com/wp-content/themes/tjarksandtjarks/assets/img/back_white.png'>", nextArrow: "<img class='a-right control-c next slick-next' src='http://tjarksandtjarks.com/wp-content/themes/tjarksandtjarks/assets/img/forward_white.png'>", responsive: [{ breakpoint: 997, settings: { arrows: !0, centerMode: !0, centerPadding: 0, slidesToShow: 1, slidesToScroll: 1, infinite: !0, variableWidth: !1 } }] }), $(".seniorSliderContent").slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, asNavFor: ".seniorSlider" }) }), $("#uk-office, #js-officeOne").click(function(t) { t.preventDefault(), $(".js-toggle-addressOne").toggleClass("open"), $(".js-toggle-addressTwo").hasClass("open") && $(".js-toggle-addressTwo").toggleClass("open") }), $("#us-office, #js-officeTwo").click(function(t) { t.preventDefault(), $(".js-toggle-addressTwo").toggleClass("open"), $(".js-toggle-addressOne").hasClass("open") && $(".js-toggle-addressOne").toggleClass("open") });