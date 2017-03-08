! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function(e, r) { return !!t.call(e, r, e) !== n });
        if (t.nodeType) return pe.grep(e, function(e) { return e === t !== n });
        if ("string" == typeof t) {
            if (Ce.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) { return pe.inArray(e, t) > -1 !== n })
    }

    function i(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

    function o(e) { var t = {}; return pe.each(e.match(De) || [], function(e, n) { t[n] = !0 }), t }

    function a() { re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(_e, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : qe.test(n) ? pe.parseJSON(n) : n) } catch (e) {}
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (He(e)) {
            var i, o, a = pe.expando,
                s = e.nodeType,
                u = s ? pe.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), u[l] || (u[l] = s ? {} : { toJSON: pe.noop }), "object" != typeof t && "function" != typeof t || (r ? u[l] = pe.extend(u[l], t) : u[l].data = pe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[pe.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (He(e)) {
            var r, i, o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;
            if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; for (; i--;) delete r[t[i]]; if (n ? !l(r) : !pe.isEmptyObject(r)) return }(n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0) }
        }
    }

    function f(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() { return r.cur() } : function() { return pe.css(e, t, "") },
            u = s(),
            l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== l && +u) && Me.exec(pe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, pe.style(e, t, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function p(e) {
        var t = ze.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, r, i = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function g(e, t) { for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval")) }

    function m(e) { Be.test(e.type) && (e.defaultChecked = e.checked) }

    function v(e, t, n, r, i) {
        for (var o, a, s, u, l, c, d, f = e.length, v = p(t), y = [], x = 0; f > x; x++)
            if (a = e[x], a || 0 === a)
                if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a);
                else if (Ue.test(a)) {
            for (u = u || v.appendChild(t.createElement("div")), l = (We.exec(a) || ["", ""])[1].toLowerCase(), d = Xe[l] || Xe._default, u.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) u = u.lastChild;
            if (!de.leadingWhitespace && $e.test(a) && y.push(t.createTextNode($e.exec(a)[0])), !de.tbody)
                for (a = "table" !== l || Ve.test(a) ? "<table>" !== d[1] || Ve.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;) pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (pe.merge(y, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = v.lastChild
        } else y.push(t.createTextNode(a));
        for (u && v.removeChild(u), de.appendChecked || pe.grep(h(y, "input"), m), x = 0; a = y[x++];)
            if (r && pe.inArray(a, r) > -1) i && i.push(a);
            else if (s = pe.contains(a.ownerDocument, a), u = h(v.appendChild(a), "script"), s && g(u), n)
            for (o = 0; a = u[o++];) Ie.test(a.type || "") && n.push(a);
        return u = null, v
    }

    function y() { return !0 }

    function x() { return !1 }

    function b() { try { return re.activeElement } catch (e) {} }

    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) w(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = x;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) { return pe().off(e), a.apply(this, arguments) }, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function() { pe.event.add(this, t, i, r, n) })
    }

    function T(e, t) { return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function C(e) { return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e }

    function E(e) { var t = it.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function N(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, r, i, o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) pe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                i = pe._data(t);
                for (r in i.events) pe.removeEvent(t, r, i.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function S(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, a, s, u, l, c = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            g = pe.isFunction(p);
        if (g || d > 1 && "string" == typeof p && !de.checkClone && rt.test(p)) return e.each(function(i) {
            var o = e.eq(i);
            g && (t[0] = p.call(this, i, o.html())), S(o, t, n, r)
        });
        if (d && (l = v(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (s = pe.map(h(l, "script"), C), a = s.length; d > c; c++) o = l, c !== f && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; a > c; c++) o = s[c], Ie.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            l = i = null
        }
        return e
    }

    function A(e, t, n) { for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r)); return e }

    function D(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            r = pe.css(n[0], "display");
        return n.detach(), r
    }

    function j(e) {
        var t = re,
            n = lt[e];
        return n || (n = D(e, t), "none" !== n && n || (ut = (ut || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write(), t.close(), n = D(e, t), ut.detach()), lt[e] = n), n
    }

    function L(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function H(e) {
        if (e in Et) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--;)
            if (e = Ct[n] + t, e in Et) return e
    }

    function q(e, t) { for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (o[a] = pe._data(r, "olddisplay", j(r.nodeName)))) : (i = Re(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e }

    function _(e, t, n) { var r = bt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function F(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += pe.css(e, n + Oe[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Oe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Oe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Oe[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Oe[o] + "Width", !0, i))); return a }

    function M(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ht(e),
            a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = gt(e, t, o), (0 > i || null == i) && (i = e.style[t]), dt.test(i)) return i;
            r = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + F(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function O(e, t, n, r, i) { return new O.prototype.init(e, t, n, r, i) }

    function R() { return e.setTimeout(function() { Nt = void 0 }), Nt = pe.now() }

    function P(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Oe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e, t, n) {
        for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Re(e),
            g = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() { s.unqueued || u() }), s.unqueued++, d.always(function() { d.always(function() { s.unqueued--, pe.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = pe.css(e, "display"), c = "none" === l ? pe._data(e, "olddisplay") || j(e.nodeName) : l, "inline" === c && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
        for (r in t)
            if (i = t[r], St.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                f[r] = g && g[r] || pe.style(e, r)
            } else l = void 0;
        if (pe.isEmptyObject(f)) "inline" === ("none" === l ? j(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = pe._data(e, "fxshow", {}), o && (g.hidden = !h), h ? pe(e).show() : d.done(function() { pe(e).hide() }), d.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in f) pe.style(e, t, f[t])
            });
            for (r in f) a = B(h ? g[r] : 0, r, d), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function I(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = pe.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i
    }

    function $(e, t, n) {
        var r, i, o = 0,
            a = $.prefilters.length,
            s = pe.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = Nt || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o); return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1) },
            l = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, { specialEasing: {}, easing: pe.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Nt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (I(c, l.opts.specialEasing); a > o; o++)
            if (r = $.prefilters[o].call(l, e, c, l.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), r;
        return pe.map(c, B, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function z(e) { return pe.attr(e, "class") || "" }

    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(De) || [];
            if (pe.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function U(e, t, n, r) {
        function i(s) { var u; return o[s] = !0, pe.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) }), u }
        var o = {},
            a = e === Kt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function V(e, t) { var n, r, i = pe.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]); return n && pe.extend(!0, e, n), e }

    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) { u.unshift(a); break }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) { o = a; break }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function J(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1])); break }
            if (a !== !0)
                if (a && e.throws) t = a(t);
                else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
        }
        return { state: "success", data: t }
    }

    function G(e) { return e.style && e.style.display || pe.css(e, "display") }

    function Q(e) {
        if (!pe.contains(e.ownerDocument || re, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === G(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function K(e, t, n, r) {
        var i;
        if (pe.isArray(t)) pe.each(t, function(t, i) { n || rn.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== pe.type(t)) r(e, t);
        else
            for (i in t) K(e + "[" + i + "]", t[i], n, r)
    }

    function Z() { try { return new e.XMLHttpRequest } catch (e) {} }

    function ee() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }

    function te(e) { return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
    var ne = [],
        re = e.document,
        ie = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        de = {},
        fe = "1.12.4",
        pe = function(e, t) { return new pe.fn.init(e, t) },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ge = /^-ms-/,
        me = /-([\da-z])/gi,
        ve = function(e, t) { return t.toUpperCase() };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() { return ie.call(this) },
        get: function(e) { return null != e ? 0 > e ? this[e + this.length] : this[e] : ie.call(this) },
        pushStack: function(e) { var t = pe.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e) { return pe.each(this, e) },
        map: function(e) { return this.pushStack(pe.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(ie.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isFunction: function(e) { return "function" === pe.type(e) },
        isArray: Array.isArray || function(e) { return "array" === pe.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { var t = e && e.toString(); return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0 },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try { if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e },
        globalEval: function(t) { t && pe.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(ge, "ms-").replace(me, ve) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(he, "") },
        makeArray: function(e, t) { var r = t || []; return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) { for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]); return i },
        map: function(e, t, r) {
            var i, o, a = 0,
                s = [];
            if (n(e))
                for (i = e.length; i > a; a++) o = t(e[a], a, r), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, r), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) { var n, r, i; return "string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e) ? (n = ie.call(arguments, 2), r = function() { return e.apply(t || this, n.concat(ie.call(arguments))) }, r.guid = e.guid = e.guid || pe.guid++, r) : void 0 },
        now: function() { return +new Date },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { ue["[object " + t + "]"] = t.toLowerCase() });
    var ye = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, p, h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== H && L(t), t = t || H, _)) {
                if (11 !== g && (l = ve.exec(e)))
                    if (i = l[1]) { if (9 === g) { if (!(a = t.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n } else { if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n; if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n }
                if (w.qsa && !X[e + " "] && (!F || !F.test(e))) {
                    if (1 !== g) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = P), d = N(e), o = d.length, u = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = u + " " + f(d[o]);
                        p = d.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p) try { return K.apply(n, h.querySelectorAll(p)), n } catch (e) {} finally { s === P && t.removeAttribute("id") }
                }
            }
            return S(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) { return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r }
            var t = [];
            return e
        }

        function r(e) { return e[P] = !0, e }

        function i(e) { var t = H.createElement("div"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

        function u(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function l(e) { return r(function(t) { return t = +t, r(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function c(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function f(e) { for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value; return r }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l, c = [W, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) { if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o) return c[2] = s[2]; if (u[r] = c, c[2] = e(t, n, a)) return !0 }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) { for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r); return r }

        function m(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : m(v, f, e, s, u),
                    x = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, x, s, u), i)
                    for (l = m(x, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (x[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(d = x[c]) && l.push(y[c] = d);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(d = x[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) { return e === t }, a, !0), l = p(function(e) { return ee(t, e) > -1 }, a, !0), c = [function(e, n, r) { var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)); return t = null, i }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) { for (r = ++s; i > r && !T.relative[e[r].type]; r++); return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) }
                    c.push(n)
                }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, d, f, p = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = A,
                        x = r || o && T.find.TAG("*", l),
                        b = W += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (A = a === H || a || l); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (d = 0, a || c.ownerDocument === H || (L(c), s = !_); f = e[d++];)
                                if (f(c, a || H, s)) { u.push(c); break }
                            l && (W = b)
                        }
                        i && ((c = !f && c) && p--, r && g.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(g, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = G.call(u));
                            v = m(v)
                        }
                        K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = b, A = y), g
                };
            return i ? r(a) : a
        }
        var b, w, T, C, E, N, k, S, A, D, j, L, H, q, _, F, M, O, R, P = "sizzle" + 1 * new Date,
            B = e.document,
            W = 0,
            I = 0,
            $ = n(),
            z = n(),
            X = n(),
            U = function(e, t) { return e === t && (j = !0), 0 },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            J = [],
            G = J.pop,
            Q = J.push,
            K = J.push,
            Z = J.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + re + "$"),
            pe = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re + "|[*])"), ATTR: new RegExp("^" + ie), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            Te = function() { L() };
        try { K.apply(J = Z.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType } catch (e) {
            K = {
                apply: J.length ? function(e, t) { Q.apply(e, Z.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, E = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : B;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = H.documentElement, _ = !E(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function(e) { return e.className = "i", !e.getAttribute("className") }), w.getElementsByTagName = i(function(e) { return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length }), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = i(function(e) { return q.appendChild(e).id = P, !H.getElementsByName || !H.getElementsByName(P).length }), w.getById ? (T.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && _) { var n = t.getElementById(e); return n ? [n] : [] } }, T.filter.ID = function(e) { var t = e.replace(be, we); return function(e) { return e.getAttribute("id") === t } }) : (delete T.find.ID, T.filter.ID = function(e) { var t = e.replace(be, we); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), T.find.TAG = w.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) { return "undefined" != typeof t.getElementsByClassName && _ ? t.getElementsByClassName(e) : void 0 }, M = [], F = [], (w.qsa = me.test(H.querySelectorAll)) && (i(function(e) { q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]") }), i(function(e) {
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) { w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), M.push("!=", oe) }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) { if (e === t) return j = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0
            }, H) : H
        }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && _ && !X[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n))) try { var r = O.call(e, n); if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) { return (e.ownerDocument || e) !== H && L(e), R(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) { for (; t = e[i++];) t === e[i] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += C(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(e) { return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
            filter: {
                TAG: function(e) { var t = e.replace(be, we).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                CLASS: function(e) { var t = $[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                ATTR: function(e, n, r) { return function(i) { var o = t.attr(i, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-")) } },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                        var l, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (f = m, d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1],
                                    x = p && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (x = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++x && f === t) { c[e] = [W, p, x]; break }
                            } else if (y && (f = t, d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p), x === !1)
                                for (;
                                    (f = ++p && f && f[g] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && (d = f[P] || (f[P] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [W, x]), f !== t)););
                            return x -= i, x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) { var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) { for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a]) }) : function(e) { return o(e, 0, i) }) : o }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(se, "$1"));
                    return i[P] ? r(function(e, t, n, r) { for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) { return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() }
                }),
                has: r(function(e) { return function(n) { return t(e, n).length > 0 } }),
                contains: r(function(e) {
                    return e = e.replace(be, we),
                        function(t) { return (t.textContent || t.innerText || C(t)).indexOf(e) > -1 }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                root: function(e) { return e === q },
                focus: function(e) { return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                enabled: function(e) { return e.disabled === !1 },
                disabled: function(e) { return e.disabled === !0 },
                checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) { return !T.pseudos.empty(e) },
                header: function(e) { return ge.test(e.nodeName) },
                input: function(e) { return he.test(e.nodeName) },
                button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                first: l(function() { return [0] }),
                last: l(function(e, t) { return [t - 1] }),
                eq: l(function(e, t, n) { return [0 > n ? n + t : n] }),
                even: l(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                odd: l(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                lt: l(function(e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r); return e }),
                gt: l(function(e, t, n) { for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r); return e })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[b] = s(b);
        for (b in { submit: !0, reset: !0 }) T.pseudos[b] = u(b);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, N = t.tokenize = function(e, n) { var r, i, o, a, s, u, l, c = z[e + " "]; if (c) return n ? 0 : c.slice(0); for (s = e, u = [], l = T.preFilter; s;) { r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(se, " ") }), s = s.slice(r.length)); for (a in T.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length)); if (!r) break } return n ? s.length : s ? t.error(e) : z(e, u).slice(0) }, k = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = N(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                d = !r && N(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) { if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n; break }
            }
            return (l || k(e, d))(r, t, !_, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) { return 1 & e.compareDocumentPosition(H.createElement("div")) }), i(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), w.attributes && i(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), i(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var r; return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
    var xe = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && pe(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        be = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        we = pe.expr.match.needsContext,
        Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) { return 1 === e.nodeType })) }, pe.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (pe.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) pe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) { return this.pushStack(r(this, e || [], !1)) },
        not: function(e) { return this.pushStack(r(this, e || [], !0)) },
        is: function(e) { return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length }
    });
    var Ee, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ke = pe.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || Ee, "string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ne.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Te.test(r[1]) && pe.isPlainObject(t))
                        for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (i = re.getElementById(r[2]), i && i.parentNode) {
                    if (i.id !== r[2]) return Ee.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = re, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        };
    ke.prototype = pe.fn, Ee = pe(re);
    var Se = /^(?:parents|prev(?:Until|All))/,
        Ae = { children: !0, contents: !0, next: !0, prev: !0 };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), pe.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return xe(e, "parentNode") }, parentsUntil: function(e, t, n) { return xe(e, "parentNode", n) }, next: function(e) { return i(e, "nextSibling") }, prev: function(e) { return i(e, "previousSibling") }, nextAll: function(e) { return xe(e, "nextSibling") }, prevAll: function(e) { return xe(e, "previousSibling") }, nextUntil: function(e, t, n) { return xe(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return xe(e, "previousSibling", n) }, siblings: function(e) { return be((e.parentNode || {}).firstChild, e) }, children: function(e) { return be(e.firstChild) }, contents: function(e) { return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes) } }, function(e, t) { pe.fn[e] = function(n, r) { var i = pe.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Ae[e] || (i = pe.uniqueSort(i)), Se.test(e) && (i = i.reverse())), this.pushStack(i) } });
    var De = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, r, i, a = [],
            s = [],
            u = -1,
            l = function() {
                for (i = e.once, r = t = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < a.length;) a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            },
            c = {
                add: function() { return a && (n && !t && (u = a.length - 1, s.push(n)), function t(n) { pe.each(n, function(n, r) { pe.isFunction(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== pe.type(r) && t(r) }) }(arguments), n && !t && l()), this },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function(e) { return e ? pe.inArray(e, a) > -1 : a.length > 0 },
                empty: function() { return a && (a = []), this },
                disable: function() { return i = s = [], a = n = "", this },
                disabled: function() { return !a },
                lock: function() { return i = !0, n || c.disable(), this },
                locked: function() { return !!i },
                fireWith: function(e, n) { return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this },
                fire: function() { return c.fireWith(this, arguments), this },
                fired: function() { return !!r }
            };
        return c
    }, pe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return pe.Deferred(function(n) {
                            pe.each(t, function(t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? pe.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, pe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = ie.call(arguments),
                a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : pe.Deferred(),
                l = function(e, n, r) { return function(i) { n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r) } };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var je;
    pe.fn.ready = function(e) { return pe.ready.promise().done(e), this }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? pe.readyWait++ : pe.ready(!0) },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (je.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!je)
            if (je = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready);
            else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try { n = null == e.frameElement && re.documentElement } catch (e) {}
            n && n.doScroll && ! function t() {
                if (!pe.isReady) {
                    try { n.doScroll("left") } catch (n) { return e.setTimeout(t, 50) }
                    a(), pe.ready()
                }
            }()
        }
        return je.promise(t)
    }, pe.ready.promise();
    var Le;
    for (Le in pe(de)) break;
    de.ownFirst = "0" === Le, de.inlineBlockNeedsLayout = !1, pe(function() {
            var e, t, n, r;
            n = re.getElementsByTagName("body")[0], n && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = re.createElement("div");
            de.deleteExpando = !0;
            try { delete e.test } catch (e) { de.deleteExpando = !1 }
            e = null
        }();
    var He = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    pe.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !l(e) }, data: function(e, t, n) { return c(e, t, n) }, removeData: function(e, t) { return d(e, t) }, _data: function(e, t, n) { return c(e, t, n, !0) }, _removeData: function(e, t) { return d(e, t, !0) } }), pe.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), u(o, r, i[r])));
                        pe._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() { pe.data(this, e) }) : arguments.length > 1 ? this.each(function() { pe.data(this, e, t) }) : o ? u(o, e, pe.data(o, e)) : void 0
            },
            removeData: function(e) { return this.each(function() { pe.removeData(this, e) }) }
        }), pe.extend({
            queue: function(e, t, n) { var r; return e ? (t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []) : void 0 },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function() { pe.dequeue(e, t) };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) { var n = t + "queueHooks"; return pe._data(e, n) || pe._data(e, n, { empty: pe.Callbacks("once memory").add(function() { pe._removeData(e, t + "queue"), pe._removeData(e, n) }) }) }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) { return this.each(function() { pe.dequeue(this, e) }) },
            clearQueue: function(e) { return this.queue(e || "fx", []) },
            promise: function(e, t) {
                var n, r = 1,
                    i = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {--r || i.resolveWith(o, [o]) };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = pe._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        }),
        function() {
            var e;
            de.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Me = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Oe = ["Top", "Right", "Bottom", "Left"],
        Re = function(e, t) { return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e) },
        Pe = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === pe.type(n)) { i = !0; for (s in n) Pe(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(pe(e), n) })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Be = /^(?:checkbox|radio)$/i,
        We = /<([\w:-]+)/,
        Ie = /^$|\/(?:java|ecma)script/i,
        $e = /^\s+/,
        ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var Xe = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var Ue = /<|&#?\w+;/,
        Ve = /<tbody/i;
    ! function() {
        var t, n, r = re.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (de[t] = n in e) || (r.setAttribute(n, "t"), de[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Ye = /^(?:input|select|textarea)$/i,
        Je = /^key/,
        Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qe = /^(?:focusinfocus|focusoutblur)$/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, g, m = pe._data(e);
            if (m) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = pe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) { return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments) }, c.elem = e), t = (t || "").match(De) || [""], s = t.length; s--;) o = Ke.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, d = pe.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && pe.expr.match.needsContext.test(i), namespace: h.join(".") }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, g, m = pe.hasData(e) && pe._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(De) || [""], l = t.length; l--;)
                    if (s = Ke.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || pe.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) pe.event.remove(e, p + t[l], n, r, !0);
                pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || re],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Qe.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !pe.isWindow(r)) {
                    for (u = l.delegateType || p, Qe.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || re) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && He(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && He(r) && a && r[p] && !pe.isWindow(r)) {
                    c = r[a], c && (r[a] = null), pe.event.triggered = p;
                    try { r[p]() } catch (e) {}
                    pe.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, r, i, o, a = [],
                s = ie.call(arguments),
                u = (pe._data(this, "events") || {})[e.type] || [],
                l = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = pe.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({ elem: u, handlers: r })
                    }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ge.test(i) ? this.mouseHooks : Je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== b() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === b() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) { return pe.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, { type: e, isSimulated: !0 });
            pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = re.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, pe.Event = function(e, t) { return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : x) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t) }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) { e._submitBubble = !0 }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e)) },
        teardown: function() { return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit") }
    }), de.change || (pe.event.special.change = {
        setup: function() {
            return Ye.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._justChanged = !0) }), pe.event.add(this, "click._change", function(e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e) })), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e) }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return pe.event.remove(this, "._change"), !Ye.test(this.nodeName) }
    }), de.focusin || pe.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { pe.event.simulate(t, e.target, pe.event.fix(e)) };
        pe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t);
                i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t) - 1;
                i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t))
            }
        }
    }), pe.fn.extend({ on: function(e, t, n, r) { return w(this, e, t, n, r) }, one: function(e, t, n, r) { return w(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function() { pe.event.remove(this, e, n, t) }) }, trigger: function(e, t) { return this.each(function() { pe.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; return n ? pe.event.trigger(e, t, n, !0) : void 0 } });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = p(re),
        st = at.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) { return e.replace(tt, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) N(i, r[a]);
                else N(e, o);
            return r = h(o, "script"), r.length > 0 && g(r, !u && h(e, "script")), r = s = i = null, o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, l = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || He(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i))
                }
        }
    }), pe.fn.extend({
        domManip: S,
        detach: function(e) { return A(this, e, !0) },
        remove: function(e) { return A(this, e) },
        text: function(e) { return Pe(this, function(e) { return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e)) }, null, e, arguments.length) },
        append: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return S(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return S(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return pe.clone(this, e, t) }) },
        html: function(e) {
            return Pe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !$e.test(e)) && !Xe[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return S(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)),
                    n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { pe.fn[e] = function(e) { for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get()); return this.pushStack(i) } });
    var ut, lt = { HTML: "block", BODY: "block" },
        ct = /^margin/,
        dt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        ft = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        pt = re.documentElement;
    ! function() {
        function t() {
            var t, c, d = re.documentElement;
            d.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || { width: "4px" }).width, l.style.marginRight = "50%", r = "4px" === (c || { marginRight: "4px" }).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(u)
        }
        var n, r, i, o, a, s, u = re.createElement("div"),
            l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === l.style.opacity, de.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), de.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(de, { reliableHiddenOffsets: function() { return null == n && t(), o }, boxSizingReliable: function() { return null == n && t(), i }, pixelMarginRight: function() { return null == n && t(), r }, pixelPosition: function() { return null == n && t(), n }, reliableMarginRight: function() { return null == n && t(), a }, reliableMarginLeft: function() { return null == n && t(), s } }))
    }();
    var ht, gt, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }, gt = function(e, t, n) { var r, i, o, a, s = e.style; return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && dt.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + "" }) : pt.currentStyle && (ht = function(e) { return e.currentStyle }, gt = function(e, t, n) { var r, i, o, a, s = e.style; return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), dt.test(a) && !mt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto" });
    var vt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        xt = /^(none|table(?!-c[ea]).+)/,
        bt = new RegExp("^(" + Fe + ")(.*)$", "i"),
        wt = { position: "absolute", visibility: "hidden", display: "block" },
        Tt = { letterSpacing: "0", fontWeight: "400" },
        Ct = ["Webkit", "O", "Moz", "ms"],
        Et = re.createElement("div").style;
    pe.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = gt(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: de.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pe.camelCase(t),
                    u = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = Me.exec(n)) && i[1] && (n = f(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try { u[t] = n } catch (e) {}
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = pe.camelCase(t); return t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = gt(e, t, r)), "normal" === o && t in Tt && (o = Tt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o }
    }), pe.each(["height", "width"], function(e, t) { pe.cssHooks[t] = { get: function(e, n, r) { return n ? xt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, wt, function() { return M(e, t, r) }) : M(e, t, r) : void 0 }, set: function(e, n, r) { var i = r && ht(e); return _(e, n, r ? F(e, t, r, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0) } } }), de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) { return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i)
        }
    }), pe.cssHooks.marginRight = L(de.reliableMarginRight, function(e, t) { return t ? ft(e, { display: "inline-block" }, gt, [e, "marginRight"]) : void 0 }), pe.cssHooks.marginLeft = L(de.reliableMarginLeft, function(e, t) { return t ? (parseFloat(gt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), pe.each({ margin: "", padding: "", border: "Width" }, function(e, t) { pe.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, ct.test(e) || (pe.cssHooks[e + t].set = _) }), pe.fn.extend({
        css: function(e, t) {
            return Pe(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (pe.isArray(t)) { for (r = ht(e), i = t.length; i > a; a++) o[t[a]] = pe.css(e, t[a], !1, r); return o }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() { return q(this, !0) },
        hide: function() { return q(this) },
        toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Re(this) ? pe(this).show() : pe(this).hide() }) }
    }), pe.Tween = O, O.prototype = { constructor: O, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px") }, cur: function() { var e = O.propHooks[this.prop]; return e && e.get ? e.get(this) : O.propHooks._default.get(this) }, run: function(e) { var t, n = O.propHooks[this.prop]; return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this } }, O.prototype.init.prototype = O.prototype, O.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit) } } }, O.propHooks.scrollTop = O.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, pe.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, pe.fx = O.prototype.init, pe.fx.step = {};
    var Nt, kt, St = /^(?:toggle|show|hide)$/,
        At = /queueHooks$/;
    pe.Animation = pe.extend($, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return f(n.elem, e, Me.exec(t), n), n }] }, tweener: function(e, t) { pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De); for (var n, r = 0, i = e.length; i > r; r++) n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t) }, prefilters: [W], prefilter: function(e, t) { t ? $.prefilters.unshift(e) : $.prefilters.push(e) } }), pe.speed = function(e, t, n) { var r = e && "object" == typeof e ? pe.extend({}, e) : { complete: n || !n && t || pe.isFunction(e) && e, duration: e, easing: n && t || t && !pe.isFunction(t) && t }; return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() { pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue) }, r }, pe.fn.extend({
            fadeTo: function(e, t, n, r) { return this.filter(Re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
            animate: function(e, t, n, r) {
                var i = pe.isEmptyObject(e),
                    o = pe.speed(t, n, r),
                    a = function() {
                        var t = $(this, pe.extend({}, e), o);
                        (i || pe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = pe._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && At.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = pe._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = pe.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i) }
        }), pe.each({ slideDown: P("show"), slideUp: P("hide"), slideToggle: P("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { pe.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), pe.timers = [], pe.fx.tick = function() {
            var e, t = pe.timers,
                n = 0;
            for (Nt = pe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), Nt = void 0
        }, pe.fx.timer = function(e) { pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop() }, pe.fx.interval = 13, pe.fx.start = function() { kt || (kt = e.setInterval(pe.fx.tick, pe.fx.interval)) }, pe.fx.stop = function() { e.clearInterval(kt), kt = null }, pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() { e.clearTimeout(i) }
            })
        },
        function() {
            var e, t = re.createElement("input"),
                n = re.createElement("div"),
                r = re.createElement("select"),
                i = r.appendChild(re.createElement("option"));
            n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = i.selected, de.enctype = !!re.createElement("form").enctype, r.disabled = !0, de.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var Dt = /\r/g,
        jt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = pe.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) { return null == e ? "" : e + "" })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)) : void 0
        }
    }), pe.extend({
        valHooks: {
            option: { get: function(e) { var t = pe.find.attr(e, "value"); return null != t ? t : pe.trim(pe.text(e)).replace(jt, " ") } },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], (n.selected || u === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;)
                        if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) > -1) try { r.selected = n = !0 } catch (e) { r.scrollHeight } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() { pe.valHooks[this] = { set: function(e, t) { return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0 } }, de.checkOn || (pe.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var Lt, Ht, qt = pe.expr.attrHandle,
        _t = /^(?:checked|selected)$/i,
        Ft = de.getSetAttribute,
        Mt = de.input;
    pe.fn.extend({ attr: function(e, t) { return Pe(this, pe.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { pe.removeAttr(this, e) }) } }), pe.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ht : Lt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r)) },
        attrHooks: { type: { set: function(e, t) { if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(De);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Mt && Ft || !_t.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ft ? n : r)
        }
    }), Ht = { set: function(e, t, n) { return t === !1 ? pe.removeAttr(e, n) : Mt && Ft || !_t.test(n) ? e.setAttribute(!Ft && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n } }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = qt[t] || pe.find.attr;
        Mt && Ft || !_t.test(t) ? qt[t] = function(e, t, r) { var i, o; return r || (o = qt[t], qt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, qt[t] = o), i } : qt[t] = function(e, t, n) { return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null }
    }), Mt && Ft || (pe.attrHooks.value = { set: function(e, t, n) { return pe.nodeName(e, "input") ? void(e.defaultValue = t) : Lt && Lt.set(e, t, n) } }), Ft || (Lt = { set: function(e, t, n) { var r = e.getAttributeNode(n); return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, qt.id = qt.name = qt.coords = function(e, t, n) { var r; return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null }, pe.valHooks.button = { get: function(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : void 0 }, set: Lt.set }, pe.attrHooks.contenteditable = { set: function(e, t, n) { Lt.set(e, "" !== t && t, n) } }, pe.each(["width", "height"], function(e, t) { pe.attrHooks[t] = { set: function(e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), de.style || (pe.attrHooks.style = { get: function(e) { return e.style.cssText || void 0 }, set: function(e, t) { return e.style.cssText = t + "" } });
    var Ot = /^(?:input|select|textarea|button|object)$/i,
        Rt = /^(?:a|area)$/i;
    pe.fn.extend({ prop: function(e, t) { return Pe(this, pe.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return e = pe.propFix[e] || e, this.each(function() { try { this[e] = void 0, delete this[e] } catch (e) {} }) } }), pe.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = pe.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) { pe.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { pe.propFix[this.toLowerCase()] = this }), de.enctype || (pe.propFix.enctype = "encoding");
    var Pt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e)) return this.each(function(t) { pe(this).addClass(e.call(this, t, z(this))) });
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e)) return this.each(function(t) { pe(this).removeClass(e.call(this, t, z(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) { pe(this).toggleClass(e.call(this, n, z(this), t), t) }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = pe(this), o = e.match(De) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = z(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { pe.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), pe.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } });
    var Bt = e.location,
        Wt = pe.now(),
        It = /\?/,
        $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = pe.trim(t + "");
        return i && !pe.trim(i.replace($t, function(e, t, i, o) { return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "") })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function(t) { var n, r; if (!t || "string" != typeof t) return null; try { e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (e) { n = void 0 } return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n };
    var zt = /#.*$/,
        Xt = /([?&])_=[^&]*/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Yt = /^(?:GET|HEAD)$/,
        Jt = /^\/\//,
        Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qt = {},
        Kt = {},
        Zt = "*/".concat("*"),
        en = Bt.href,
        tn = Gt.exec(en.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: en, type: "GET", isLocal: Vt.test(tn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": pe.parseJSON, "text xml": pe.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e) },
        ajaxPrefilter: X(Qt),
        ajaxTransport: X(Kt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, d, y, x, w, C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, r && (x = Y(f, T, r)), x = J(f, x, T, o), o ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (pe.etag[a] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, y = x.error, o = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? g.resolveWith(p, [d, C, T]) : g.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? d : y]), m.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, f]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, d, f = pe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                g = pe.Deferred(),
                m = pe.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; t = Ut.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === b ? s : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return b || (e = x[n] = x[n] || e, y[e] = t), this },
                    overrideMimeType: function(e) { return b || (f.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) { var t = e || w; return c && c.abort(t), r(0, t), this }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || en) + "").replace(zt, "").replace(Jt, tn[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(De) || [""], null == f.crossDomain && (i = Gt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === tn[1] && i[2] === tn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), U(Qt, f, n, T), 2 === b) return T;
            l = pe.event && f.global, l && 0 === pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Yt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (It.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Xt.test(a) ? a.replace(Xt, "$1_=" + Wt++) : a + (It.test(a) ? "&" : "?") + "_=" + Wt++)), f.ifModified && (pe.lastModified[a] && T.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && T.setRequestHeader("If-None-Match", pe.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) T.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (o in { success: 1, error: 1, complete: 1 }) T[o](f[o]);
            if (c = U(Kt, f, n, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [T, f]), 2 === b) return T;
                f.async && f.timeout > 0 && (u = e.setTimeout(function() { T.abort("timeout") }, f.timeout));
                try { b = 1, c.send(y, r) } catch (e) {
                    if (!(2 > b)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) { return pe.get(e, t, n, "json") },
        getScript: function(e, t) { return pe.get(e, void 0, t, "script") }
    }), pe.each(["get", "post"], function(e, t) { pe[t] = function(e, n, r, i) { return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({ url: e, type: t, dataType: i, data: n, success: r }, pe.isPlainObject(e) && e)) } }), pe._evalUrl = function(e) { return pe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e)) return this.each(function(t) { pe(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) { pe(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = pe.isFunction(e); return this.each(function(n) { pe(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes) }).end() }
    }), pe.expr.filters.hidden = function(e) { return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e) }, pe.expr.filters.visible = function(e) { return !pe.expr.filters.hidden(e) };
    var nn = /%20/g,
        rn = /\[\]$/,
        on = /\r?\n/g,
        an = /^(?:submit|button|image|reset|file)$/i,
        sn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [],
            i = function(e, t) { t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) K(n, e[n], t, i);
        return r.join("&").replace(nn, "+")
    }, pe.fn.extend({ serialize: function() { return pe.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = pe.prop(this, "elements"); return e ? pe.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !Be.test(e)) }).map(function(e, t) { var n = pe(this).val(); return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) { return { name: t.name, value: e.replace(on, "\r\n") } }) : { name: t.name, value: n.replace(on, "\r\n") } }).get() } }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() { return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee() } : Z;
    var un = 0,
        ln = {},
        cn = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() { for (var e in ln) ln[e](void 0, !0) }), de.cors = !!cn && "withCredentials" in cn, cn = de.ajax = !!cn, cn && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(),
                        s = ++un;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, r) {
                        var o, u, l;
                        if (n && (r || 4 === a.readyState))
                            if (delete ln[s], n = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort();
                            else {
                                l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                try { u = a.statusText } catch (e) { u = "" }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && i(o, u, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                },
                abort: function() { n && n(void 0, !0) }
            }
        }
    }), pe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return pe.globalEval(e), e } } }), pe.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() { t && t.onload(void 0, !0) }
            }
        }
    });
    var dn = [],
        fn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = dn.pop() || pe.expando + "_" + Wt++; return this[e] = !0, e } }), pe.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = t.jsonp !== !1 && (fn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(t.data) && "data"); return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(fn, "$1" + i) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || pe.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, dn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0 }), "script") : void 0 }), pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || re;
        var r = Te.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = v([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes))
    };
    var pn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && pn) return pn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { pe.fn[t] = function(e) { return this.on(t, e) } }), pe.expr.filters.animated = function(e) { return pe.grep(pe.timers, function(t) { return e === t.elem }).length }, pe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = pe.css(e, "position"),
                d = pe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = pe.css(e, "top"), u = pe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) { pe.offset.setOffset(this, e, t) });
            var t, n, r = { top: 0, left: 0 },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, pe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), { top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent; return e || pt }) }
    }), pe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(r) { return Pe(this, function(e, r, i) { var o = te(e); return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i) }, e, r, arguments.length, null) }
    }), pe.each(["top", "left"], function(e, t) { pe.cssHooks[t] = L(de.pixelPosition, function(e, n) { return n ? (n = gt(e, t), dt.test(n) ? pe(e).position()[t] + "px" : n) : void 0 }) }), pe.each({ Height: "height", Width: "width" }, function(e, t) {
        pe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            pe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Pe(this, function(t, n, r) { var i; return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a) }, t, o ? r : void 0, o, null)
            }
        })
    }), pe.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), pe.fn.size = function() { return this.length }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return pe });
    var hn = e.jQuery,
        gn = e.$;
    return pe.noConflict = function(t) { return e.$ === pe && (e.$ = gn), t && e.jQuery === pe && (e.jQuery = hn), pe }, t || (e.jQuery = e.$ = pe), pe
});
! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
    function e(t) {
        for (var e = t.css("visibility");
            "inherit" === e;) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e
    }

    function i(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function s() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function n(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function() { t(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, o) }

    function o() { t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).addClass("ui-datepicker-next-hover")) }

    function a(e, i) { t.extend(e, i); for (var s in i) null == i[s] && (e[s] = i[s]); return e }

    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {};
    var h = (t.ui.version = "1.12.0", 0),
        l = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try { s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove") } catch (t) {}
            e(i)
        }
    }(t.cleanData), t.widget = function(e, i, s) {
        var n, o, a, r = {},
            h = e.split(".")[0];
        e = e.split(".")[1];
        var l = h + "-" + e;
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function(e) { return !!t.data(e, l) }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) { return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e) }, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? void(r[e] = function() {
                function t() { return i.prototype[e].apply(this, arguments) }

                function n(t) { return i.prototype[e].apply(this, t) }
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }()) : void(r[e] = s)
        }), o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: h, widgetName: e, widgetFullName: l }), n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
        for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; o < a; o++)
            for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
        return e
    }, t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(n) {
            var o = "string" == typeof n,
                a = l.call(arguments, 1),
                r = this;
            return o ? this.each(function() { var i, o = t.data(this, s); return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'") }) : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
            })), r
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function(e, i) { i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === i && this.destroy() } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() },
        _getCreateOptions: function() { return {} },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() { return this.element },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                    if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) { var e; for (e in t) this._setOption(e, t[e]); return this },
        _setOption: function(t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this },
        _setOptionClasses: function(e) { var i, s, n; for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 }))) },
        _setOptionDisabled: function(t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) },
        enable: function() { return this._setOptions({ disabled: !1 }) },
        disable: function() { return this._setOptions({ disabled: !0 }) },
        _classes: function(e) {
            function i(i, o) { var a, r; for (r = 0; r < i.length; r++) a = n.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]) }
            var s = [],
                n = this;
            return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
        },
        _removeClass: function(t, e, i) { return this._toggleClass(t, e, i, !1) },
        _addClass: function(t, e, i) { return this._toggleClass(t, e, i, !0) },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t,
                o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };
            return o.element.toggleClass(this._classes(o), s), this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                function r() { if (e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments) }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + o.eventNamespace,
                    c = h[2];
                c ? n.on(l, c, r) : i.on(l, r)
            })
        },
        _off: function(e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) },
        _delay: function(t, e) {
            function i() { return ("string" == typeof t ? s[t] : t).apply(s, arguments) }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) },
        _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = { effect: n });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) { t(this)[e](), o && o.call(s[0]), i() })
        }
    });
    t.widget;
    ! function() {
        function e(t, e, i) { return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)] }

        function i(e, i) { return parseInt(t.css(e, i), 10) || 0 }

        function s(e) { var i = e[0]; return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() } }
        var n, o, a = Math.max,
            r = Math.abs,
            h = Math.round,
            l = /left|center|right/,
            c = /top|center|bottom/,
            u = /[\+\-]\d+(\.[\d]+)?%?/,
            d = /^\w+/,
            p = /%$/,
            f = t.fn.position;
        o = function() {
            var e = t("<div>").css("position", "absolute").appendTo("body").offset({ top: 1.5, left: 1.5 }),
                i = 1.5 === e.offset().top;
            return e.remove(), o = function() { return i }, i
        }, t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n) return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = s.children()[0];
                return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return { width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    s = t.isWindow(i[0]),
                    n = !!i[0] && 9 === i[0].nodeType,
                    o = !s && !n;
                return { element: i, isWindow: s, isDocument: n, offset: o ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() }
            }
        }, t.fn.position = function(n) {
            if (!n || !n.of) return f.apply(this, arguments);
            n = t.extend({}, n);
            var p, g, m, _, v, b, y = t(n.of),
                w = t.position.getWithinInfo(n.within),
                k = t.position.getScrollInfo(w),
                x = (n.collision || "flip").split(" "),
                C = {};
            return b = s(y), y[0].preventDefault && (n.at = "left top"), g = b.width, m = b.height, _ = b.offset, v = t.extend({}, _), t.each(["my", "at"], function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === n.at[0] ? v.left += g : "center" === n.at[0] && (v.left += g / 2), "bottom" === n.at[1] ? v.top += m : "center" === n.at[1] && (v.top += m / 2), p = e(C.at, g, m), v.left += p[0], v.top += p[1], this.each(function() {
                var s, l, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = i(this, "marginLeft"),
                    b = i(this, "marginTop"),
                    D = u + f + i(this, "marginRight") + k.width,
                    I = d + b + i(this, "marginBottom") + k.height,
                    T = t.extend({}, v),
                    P = e(C.my, c.outerWidth(), c.outerHeight());
                "right" === n.my[0] ? T.left -= u : "center" === n.my[0] && (T.left -= u / 2), "bottom" === n.my[1] ? T.top -= d : "center" === n.my[1] && (T.top -= d / 2), T.left += P[0], T.top += P[1], o() || (T.left = h(T.left), T.top = h(T.top)), s = { marginLeft: f, marginTop: b }, t.each(["left", "top"], function(e, i) { t.ui.position[x[e]] && t.ui.position[x[e]][i](T, { targetWidth: g, targetHeight: m, elemWidth: u, elemHeight: d, collisionPosition: s, collisionWidth: D, collisionHeight: I, offset: [p[0] + P[0], p[1] + P[1]], my: n.my, at: n.at, within: w, elem: c }) }), n.using && (l = function(t) {
                    var e = _.left - T.left,
                        i = e + g - u,
                        s = _.top - T.top,
                        o = s + m - d,
                        h = { target: { element: y, left: _.left, top: _.top, width: g, height: m }, element: { element: c, left: T.left, top: T.top, width: u, height: d }, horizontal: i < 0 ? "left" : e > 0 ? "right" : "center", vertical: o < 0 ? "top" : s > 0 ? "bottom" : "middle" };
                    g < u && r(e + i) < g && (h.horizontal = "center"), m < d && r(s + o) < m && (h.vertical = "middle"), a(r(e), r(i)) > a(r(s), r(o)) ? h.important = "horizontal" : h.important = "vertical", n.using.call(this, t, h)
                }), c.offset(t.extend(T, { using: l }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        o = s.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        h = n - r,
                        l = r + e.collisionWidth - o - n;
                    e.collisionWidth > o ? h > 0 && l <= 0 ? (i = t.left + h + e.collisionWidth - o - n, t.left += h - i) : l > 0 && h <= 0 ? t.left = n : h > l ? t.left = n + o - e.collisionWidth : t.left = n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = a(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        o = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        h = n - r,
                        l = r + e.collisionHeight - o - n;
                    e.collisionHeight > o ? h > 0 && l <= 0 ? (i = t.top + h + e.collisionHeight - o - n, t.top += h - i) : l > 0 && h <= 0 ? t.top = n : h > l ? t.top = n + o - e.collisionHeight : t.top = n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = a(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within,
                        o = n.offset.left + n.scrollLeft,
                        a = n.width,
                        h = n.isWindow ? n.scrollLeft : n.offset.left,
                        l = t.left - e.collisionPosition.marginLeft,
                        c = l - h,
                        u = l + e.collisionWidth - a - h,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    c < 0 ? (i = t.left + d + p + f + e.collisionWidth - a - o, (i < 0 || i < r(c)) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || r(s) < u) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within,
                        o = n.offset.top + n.scrollTop,
                        a = n.height,
                        h = n.isWindow ? n.scrollTop : n.offset.top,
                        l = t.top - e.collisionPosition.marginTop,
                        c = l - h,
                        u = l + e.collisionHeight - a - h,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    c < 0 ? (s = t.top + p + f + g + e.collisionHeight - a - o, (s < 0 || s < r(c)) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || r(i) < u) && (t.top += p + f + g))
                }
            },
            flipfit: { left: function() { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function() { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } }
        }
    }();
    var c = (t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function(e) { return function(i) { return !!t.data(i, e) } }) : function(e, i, s) { return !!t.data(e, s[3]) } }), t.fn.extend({ disableSelection: function() { var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(t + ".ui-disableSelection", function(t) { t.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } }), "ui-effects-"),
        u = "ui-effects-style",
        d = "ui-effects-animated",
        p = t;
    t.effects = { effect: {} },
        function(t, e) {
            function i(t, e, i) { var s = u[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t) }

            function s(e) {
                var i = l(),
                    s = i._rgba = [];
                return e = e.toLowerCase(), f(h, function(t, n) {
                    var o, a = n.re.exec(e),
                        r = a && n.parse(a),
                        h = n.space || "rgba";
                    if (r) return o = i[h](r), i[c[h].cache] = o[c[h].cache], s = i._rgba = o._rgba, !1
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), i) : o[e]
            }

            function n(t, e, i) { return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t }
            var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }],
                l = t.Color = function(e, i, s, n) { return new t.Color.fn.parse(e, i, s, n) },
                c = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                u = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                d = l.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, {
                parse: function(n, a, r, h) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                    var u = this,
                        d = t.type(n),
                        p = this._rgba = [];
                    return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) { p[e.idx] = i(n[e.idx], e) }), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) { n[e.cache] && (u[e.cache] = n[e.cache].slice()) }) : f(c, function(e, s) {
                        var o = s.cache;
                        f(s.props, function(t, e) {
                            if (!u[o] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[o] = s.to(u._rgba)
                            }
                            u[o][e.idx] = i(n[t], e, !0)
                        }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                    }), this) : void 0
                },
                is: function(t) {
                    var e = l(t),
                        i = !0,
                        s = this;
                    return f(c, function(t, n) { var o, a = e[n.cache]; return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [], f(n.props, function(t, e) { if (null != a[e.idx]) return i = a[e.idx] === o[e.idx] })), i }), i
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(c, function(i, s) { e[s.cache] && t.push(i) }), t.pop()
                },
                transition: function(t, e) {
                    var s = l(t),
                        n = s._space(),
                        o = c[n],
                        a = 0 === this.alpha() ? l("transparent") : this,
                        r = a[o.cache] || o.to(a._rgba),
                        h = r.slice();
                    return s = s[o.cache], f(o.props, function(t, n) {
                        var o = n.idx,
                            a = r[o],
                            l = s[o],
                            c = u[n.type] || {};
                        null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
                    }), this[n](h)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(e)._rgba;
                    return l(t.map(i, function(t, e) { return (1 - s) * n[e] + s * t }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) { return null == t ? e > 2 ? 1 : 0 : t });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) { return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) { return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    o = t[2] / 255,
                    a = t[3],
                    r = Math.max(s, n, o),
                    h = Math.min(s, n, o),
                    l = r - h,
                    c = r + h,
                    u = .5 * c;
                return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : u <= .5 ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    o = t[3],
                    a = s <= .5 ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - a;
                return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
            }, f(c, function(s, n) {
                var o = n.props,
                    a = n.cache,
                    h = n.to,
                    c = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
                    var n, r = t.type(s),
                        u = "array" === r || "object" === r ? s : arguments,
                        d = this[a].slice();
                    return f(o, function(t, e) {
                        var s = u["object" === r ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? (n = l(c(d)), n[a] = d, n) : l(d)
                }, f(o, function(e, i) {
                    l.fn[e] || (l.fn[e] = function(n) {
                        var o, a = t.type(n),
                            h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            c = l[i.idx];
                        return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                    })
                })
            }), l.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var o, a, r = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                                if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                    for (a = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && a && a.style;) try { r = t.css(a, "backgroundColor"), a = a.parentNode } catch (t) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try { e.style[i] = n } catch (t) {}
                        }
                    }, t.fx.step[i] = function(e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) }
                })
            }, l.hook(a), t.cssHooks.borderColor = { expand: function(t) { var e = {}; return f(["Top", "Right", "Bottom", "Left"], function(i, s) { e["border" + s + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(p),
        function() {
            function e(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                return o
            }

            function i(e, i) { var s, o, a = {}; for (s in i) o = i[s], e[s] !== o && (n[s] || !t.fx.step[s] && isNaN(parseFloat(o)) || (a[s] = o)); return a }
            var s = ["add", "remove", "toggle"],
                n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function(n, o, a, r) {
                var h = t.speed(o, a, r);
                return this.queue(function() {
                    var o, a = t(this),
                        r = a.attr("class") || "",
                        l = h.children ? a.find("*").addBack() : a;
                    l = l.map(function() { var i = t(this); return { el: i, start: e(this) } }), o = function() { t.each(s, function(t, e) { n[e] && a[e + "Class"](n[e]) }) }, o(), l = l.map(function() { return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this }), a.attr("class", r), l = l.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, h, { queue: !1, complete: function() { i.resolve(e) } });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, l.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) { e.css(t, "") })
                        }), h.complete.call(a[0])
                    })
                })
            }, t.fn.extend({ addClass: function(e) { return function(i, s, n, o) { return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function(e) { return function(i, s, n, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function(e) { return function(i, s, n, o, a) { return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, s, n, o) } }(t.fn.toggleClass), switchClass: function(e, i, s, n, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o) } })
        }(),
        function() {
            function e(e, i, s, n) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e }

            function i(e) { return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect)) }

            function s(t, e) {
                var i = e.outerWidth(),
                    s = e.outerHeight(),
                    n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    o = n.exec(t) || ["", 0, i, s, 0];
                return { top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? s : parseFloat(o[3]), left: parseFloat(o[4]) || 0 }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) { return function(i) { return !!t(i).data(d) || e(i) } }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
                save: function(t, e) { for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]]) },
                restore: function(t, e) { for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i)) },
                setMode: function(t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        n = { width: e.width(), height: e.height() },
                        o = document.activeElement;
                    try { o.id } catch (t) { o = document.body }
                    return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function(t, s) { i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(n), s.css(i).show()
                },
                removeWrapper: function(e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e }
            }), t.extend(t.effects, {
                version: "1.12.0",
                define: function(e, i, s) { return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s },
                scaledDimensions: function(t, e, i) {
                    if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                        n = "vertical" !== i ? (e || 100) / 100 : 1;
                    return { height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s }
                },
                clipToBox: function(t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } },
                unshift: function(t, e, i) {
                    var s = t.queue();
                    e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
                },
                saveStyle: function(t) { t.data(u, t[0].style.cssText) },
                restoreStyle: function(t) { t[0].style.cssText = t.data(u) || "", t.removeData(u) },
                mode: function(t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return { x: s, y: i }
                },
                createPlaceholder: function(e) {
                    var i, s = e.css("position"),
                        n = e.position();
                    return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({ position: s, left: n.left, top: n.top }), i
                },
                removePlaceholder: function(t) {
                    var e = c + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e))
                },
                cleanUp: function(e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) },
                setTransition: function(e, i, s, n) {
                    return n = n || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (n[i] = o[0] * s + o[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function() {
                    function i(e) {
                        function i() { r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a() }

                        function a() { t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e() }
                        var r = t(this);
                        s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a)
                    }
                    var s = e.apply(this, arguments),
                        n = t.effects.effect[s.effect],
                        o = n.mode,
                        a = s.queue,
                        r = a || "fx",
                        h = s.complete,
                        l = s.mode,
                        c = [],
                        u = function(e) {
                            var i = t(this),
                                s = t.effects.mode(i, l) || o;
                            i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function() { h && h.call(this) }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
                },
                show: function(t) { return function(s) { if (i(s)) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(t.fn.show),
                hide: function(t) {
                    return function(s) { if (i(s)) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) }
                }(t.fn.hide),
                toggle: function(t) { return function(s) { if (i(s) || "boolean" == typeof s) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) { i.indexOf(e) > 0 && (s = [parseFloat(i), e]) }), s
                },
                cssClip: function(t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this) },
                transfer: function(e, i) {
                    var s = t(this),
                        n = t(e.to),
                        o = "fixed" === n.css("position"),
                        a = t("body"),
                        r = o ? a.scrollTop() : 0,
                        h = o ? a.scrollLeft() : 0,
                        l = n.offset(),
                        c = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() },
                        u = s.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: u.top - r, left: u.left - h, height: s.innerHeight(), width: s.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, e.duration, e.easing, function() { d.remove(), t.isFunction(i) && i() })
                }
            }), t.fx.step.clip = function(e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) }
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) { e[i] = function(e) { return Math.pow(e, t + 2) } }), t.extend(e, { Sine: function(t) { return 1 - Math.cos(t * Math.PI / 2) }, Circ: function(t) { return 1 - Math.sqrt(1 - t * t) }, Elastic: function(t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) }, Back: function(t) { return t * t * (3 * t - 2) }, Bounce: function(t) { for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2) } }), t.each(e, function(e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function(t) { return t < .5 ? i(2 * t) / 2 : 1 - i(t * -2 + 2) / 2 } })
        }();
    var f, f = t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var s = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            n = t(this),
            o = e.direction || "up",
            a = n.cssClip(),
            r = { clip: t.extend({}, a) },
            h = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("bounce", function(e, i) {
        var s, n, o, a = t(this),
            r = e.mode,
            h = "hide" === r,
            l = "show" === r,
            c = e.direction || "up",
            u = e.distance,
            d = e.times || 5,
            p = 2 * d + (l || h ? 1 : 0),
            f = e.duration / p,
            g = e.easing,
            m = "up" === c || "down" === c ? "top" : "left",
            _ = "up" === c || "left" === c,
            v = 0,
            b = a.queue().length;
        for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = { opacity: 1 }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; v < d; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
        h && (s = { opacity: 0 }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
    }), t.effects.define("clip", "hide", function(e, i) {
        var s, n = {},
            o = t(this),
            a = e.direction || "vertical",
            r = "both" === a,
            h = r || "horizontal" === a,
            l = r || "vertical" === a;
        s = o.cssClip(), n.clip = { top: l ? (s.bottom - s.top) / 2 : s.top, right: h ? (s.right - s.left) / 2 : s.right, bottom: l ? (s.bottom - s.top) / 2 : s.bottom, left: h ? (s.right - s.left) / 2 : s.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("drop", "hide", function(e, i) {
        var s, n = t(this),
            o = e.mode,
            a = "show" === o,
            r = e.direction || "left",
            h = "up" === r || "down" === r ? "top" : "left",
            l = "up" === r || "left" === r ? "-=" : "+=",
            c = "+=" === l ? "-=" : "+=",
            u = { opacity: 0 };
        t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("explode", "hide", function(e, i) {
        function s() { b.push(this), b.length === u * d && n() }

        function n() { p.css({ visibility: "visible" }), t(b).remove(), i() }
        var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = e.mode,
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            _ = Math.ceil(p.outerWidth() / d),
            v = Math.ceil(p.outerHeight() / u),
            b = [];
        for (o = 0; o < u; o++)
            for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; a < d; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -a * _, top: -o * v }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: _, height: v, left: r + (g ? l * _ : 0), top: h + (g ? c * v : 0), opacity: g ? 0 : 1 }).animate({ left: r + (g ? 0 : l * _), top: h + (g ? 0 : c * v), opacity: g ? 1 : 0 }, e.duration || 500, e.easing, s)
    }), t.effects.define("fade", "toggle", function(e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({ opacity: s ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("fold", "hide", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = "show" === n,
            a = "hide" === n,
            r = e.size || 15,
            h = /([0-9]+)%/.exec(r),
            l = !!e.horizFirst,
            c = l ? ["right", "bottom"] : ["bottom", "right"],
            u = e.duration / 2,
            d = t.effects.createPlaceholder(s),
            p = s.cssClip(),
            f = { clip: t.extend({}, p) },
            g = { clip: t.extend({}, p) },
            m = [p[c[0]], p[c[1]]],
            _ = s.queue().length;
        h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function(i) { d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i() }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4)
    }), t.effects.define("highlight", "show", function(e, i) {
        var s = t(this),
            n = { backgroundColor: s.css("backgroundColor") };
        "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("size", function(e, i) {
        var s, n, o, a = t(this),
            r = ["fontSize"],
            h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            c = e.mode,
            u = "effect" !== c,
            d = e.scale || "both",
            p = e.origin || ["middle", "center"],
            f = a.css("position"),
            g = a.position(),
            m = t.effects.scaledDimensions(a),
            _ = e.from || m,
            v = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = { from: { y: _.height / m.height, x: _.width / m.width }, to: { y: v.height / m.height, x: v.width / m.width } }, "box" !== d && "both" !== d || (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), "content" !== d && "both" !== d || n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), "content" !== d && "both" !== d || (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
            var i = t(this),
                s = t.effects.scaledDimensions(i),
                o = { height: s.height * n.from.y, width: s.width * n.from.x, outerHeight: s.outerHeight * n.from.y, outerWidth: s.outerWidth * n.from.x },
                a = { height: s.height * n.to.y, width: s.width * n.to.x, outerHeight: s.height * n.to.y, outerWidth: s.width * n.to.x };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() { u && t.effects.restoreStyle(i) })
        })), a.animate(v, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = a.offset();
                0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
            }
        })
    }), t.effects.define("scale", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
            a = t.extend(!0, { from: t.effects.scaledDimensions(s), to: t.effects.scaledDimensions(s, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
    }), t.effects.define("puff", "hide", function(e, i) {
        var s = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
        t.effects.effect.scale.call(this, s, i)
    }), t.effects.define("pulsate", "show", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = "show" === n,
            a = "hide" === n,
            r = o || a,
            h = 2 * (e.times || 5) + (r ? 1 : 0),
            l = e.duration / h,
            c = 0,
            u = 1,
            d = s.queue().length;
        for (!o && s.is(":visible") || (s.css("opacity", 0).show(), c = 1); u < h; u++) s.animate({ opacity: c }, l, e.easing), c = 1 - c;
        s.animate({ opacity: c }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1)
    }), t.effects.define("shake", function(e, i) {
        var s = 1,
            n = t(this),
            o = e.direction || "left",
            a = e.distance || 20,
            r = e.times || 3,
            h = 2 * r + 1,
            l = Math.round(e.duration / h),
            c = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o,
            d = {},
            p = {},
            f = {},
            g = n.queue().length;
        for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); s < r; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
        n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1)
    }), t.effects.define("slide", "show", function(e, i) {
        var s, n, o = t(this),
            a = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            r = e.mode,
            h = e.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h,
            u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
            d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    });
    t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function(e, i) { t(this).transfer(e, i) }));
    t.ui.focusable = function(i, s) { var n, o, a, r, h, l = i.nodeName.toLowerCase(); return "area" === l ? (n = i.parentNode, o = n.name, !(!i.href || !o || "map" !== n.nodeName.toLowerCase()) && (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i))) }, t.extend(t.expr[":"], { focusable: function(e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } });
    t.ui.focusable, t.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() { this.refresh() })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    };
    "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
        function s(e, i, s, o) { return t.each(n, function() { i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            a = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
        t.fn["inner" + i] = function(e) { return void 0 === e ? a["inner" + i].call(this) : this.each(function() { t(this).css(o, s(this, e) + "px") }) }, t.fn["outer" + i] = function(e, n) { return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() { t(this).css(o, s(this, e, !0, n) + "px") }) }
    }), t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) });
    t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function() { var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g; return function(e) { return e.replace(t, "\\$1") } }(), t.fn.labels = function() { var e, i, s, n, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n)) }, t.fn.scrollParent = function(e) {
        var i = this.css("position"),
            s = "absolute" === i,
            n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter(function() { var e = t(this); return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"),
                s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s)
        }
    }), t.fn.extend({ uniqueId: function() { var t = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++t) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.widget("ui.accordion", {
        version: "1.12.0",
        options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
        hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
        showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : t() } },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons()))) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") },
        refresh: function() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options,
                s = i.heightStyle,
                n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var e = t(this),
                    i = e.uniqueId().attr("id"),
                    s = e.next(),
                    n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }), this.headers.each(function() { e -= t(this).outerHeight(!0) }), this.headers.next().each(function() { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return "number" == typeof e ? this.headers.eq(e) : t() },
        _setupEvents: function(e) {
            var i = { keydown: "_keydown" };
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, s, n = this.options,
                o = this.active,
                a = t(e.currentTarget),
                r = a[0] === o[0],
                h = r && n.collapsible,
                l = h ? t() : a.next(),
                c = o.next(),
                u = { oldHeader: o, oldPanel: c, newHeader: h ? t() : a, newPanel: l };
            e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = !h && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _animate: function(t, e, i) {
            var s, n, o, a = this,
                r = 0,
                h = t.css("box-sizing"),
                l = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {},
                u = l && c.down || c,
                d = function() { a._toggleComplete(i) };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: n, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: n, complete: d, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0) } })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.ui.safeActiveElement = function(t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.widget("ui.menu", {
        version: "1.12.0",
        defaultElement: "<ul>",
        delay: 300,
        options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) { t.preventDefault() },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target),
                        s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"),
                            s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    a = !1, s = this.previousFilter || "", n = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function(t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) },
        refresh: function() {
            var e, i, s, n, o, a = this,
                r = this.options.icons.submenu,
                h = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                var e = t(this),
                    i = e.prev(),
                    s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t) },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), n < 0 ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) },
        _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) },
        _open: function(e) {
            var i = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") },
        _closeOnDocumentClick: function(e) { return !t(e.target).closest(".ui-menu").length },
        _isDivider: function(t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) }))
        },
        next: function(t) { this._move("next", "first", t) },
        previous: function(t) { this._move("prev", "last", t) },
        isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
        isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
        },
        nextPage: function(e) { var i, s, n; return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return i = t(this), i.offset().top - s - n < 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e) },
        previousPage: function(e) { var i, s, n; return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return i = t(this), i.offset().top - s + n > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e) },
        _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                s = new RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) })
        }
    });
    t.widget("ui.autocomplete", {
        version: "1.12.0",
        defaultElement: "<input>",
        options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === n,
                a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element),
                this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                        e = !1, s = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (n.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", n);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", n);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", n);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", n);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(s) {
                        if (e) return e = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault());
                        if (!i) {
                            var n = t.ui.keyCode;
                            switch (s.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", s);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", s);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", s);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", s)
                            }
                        }
                    },
                    input: function(t) { return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t) },
                    focus: function() { this.selectedItem = null, this.previous = this._value() },
                    blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t)) }
                }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) },
                    menufocus: function(e, i) { var s, n; return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() { t(e.target).trigger(e.originalEvent) })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: n }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, void(s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)))) },
                    menuselect: function(e, i) {
                        var s = i.item.data("ui-autocomplete-item"),
                            n = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() { this.previous = n, this.selectedItem = s })), !1 !== this._trigger("select", e, { item: s }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
                    }
                }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
        },
        _destroy: function() { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
        _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() },
        _isEventTargetInWidget: function(e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) },
        _closeOnClickOutside: function(t) { this._isEventTargetInWidget(t) || this.close() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) { s(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) { s.xhr && s.xhr.abort(), s.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function(t) { n(t) }, error: function() { n([]) } }) }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                e && (!e || i || s) || (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0 },
        _search: function(t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) },
        _response: function() { var e = ++this.requestIndex; return t.proxy(function(t) { e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading") }, this) },
        __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() },
        close: function(t) { this.cancelSearch = !0, this._close(t) },
        _close: function(t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) },
        _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) },
        _normalize: function(e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) { s._renderItemData(e, i) })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) },
        _renderItem: function(e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) },
        _move: function(t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e) },
        widget: function() { return this.menu.element },
        _value: function() { return this.valueMethod.apply(this.element, arguments) },
        _keyEvent: function(t, e) { this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault()) },
        _isContentEditable: function(t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e }
    }), t.extend(t.ui.autocomplete, { escapeRegex: function(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(e, i) { var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function(t) { return s.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: { messages: { noResults: "No search results.", results: function(t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    var g = (t.ui.autocomplete, /ui-corner-([a-z]){2,6}/g);
    t.widget("ui.controlgroup", {
        version: "1.12.0",
        defaultElement: "<div>",
        options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } },
        _create: function() { this._enhance() },
        _enhance: function() { this.element.attr("role", "toolbar"), this.refresh() },
        _destroy: function() { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() },
        _initWidgets: function() {
            var e = this,
                i = [];
            t.each(this.options.items, function(s, n) {
                var o, a = {};
                if (n) return "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[s] && (e["_" + s + "Options"] && (a = e["_" + s + "Options"]("middle")), e.element.find(n).each(function() {
                    var n = t(this),
                        o = n[s]("instance"),
                        r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
                        var h = n[s]("widget");
                        t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0])
                    }
                })))
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this),
                    s = i.data("ui-controlgroup-data");
                s && s[e] && s[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                s = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, i), this._addClass(t, null, s)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
                s = { classes: {} };
            return s.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], s
        },
        _spinnerOptions: function(t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e },
        _buttonOptions: function(t) { return this._buildSimpleOptions(t, "ui-button") },
        _checkboxradioOptions: function(t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") },
        _selectmenuOptions: function(t) { var e = "vertical" === this.options.direction; return { width: !!e && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, function(t) {
                var n = i.options.classes[t] || "";
                n = n.replace(g, "").trim(), s[t] = (n + " " + e[t]).replace(/\s+/g, " ")
            }), s
        },
        _setOption: function(t, e) { return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh() },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
                } else i._updateCornerClass(e[s](), s)
            }), this._callChildMethod("refresh"))
        }
    });
    t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.0",
        options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } },
        _getCreateOptions: function() {
            var e, i, s = this,
                n = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element).each(function() { s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() { this._updateIcon(this.element[0].checked) },
        widget: function() { return this.label },
        _getRadioGroup: function() {
            var e, i = this.element[0].name,
                s = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() { return 0 === t(this).form().length }), e.not(this.element)) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) },
        _setOption: function(t, e) { if ("label" !== t || e) return this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh() },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() { this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(), this.label.append(this.options.label) },
        refresh: function() {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e })
        }
    }]);
    t.ui.checkboxradio;
    t.widget("ui.button", {
        version: "1.12.0",
        defaultElement: "<button>",
        options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
        _getCreateOptions: function() { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e },
        _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) },
        _enhance: function() { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) },
        _updateTooltip: function() { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) },
        _updateIcon: function(e, i) {
            var s = "iconPosition" !== e,
                n = s ? this.options.iconPosition : i,
                o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
        },
        _destroy: function() { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") },
        _attachIconSpace: function(t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) },
        _attachIcon: function(t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function(t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip()
        }
    }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function(t, e) { return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments)) } }), t.fn.button = function(e) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function() { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) });
    t.ui.button;
    t.extend(t.ui, { datepicker: { version: "1.12.0" } });
    var m;
    t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(t) { return a(this._defaults, t || {}), this },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) { var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: s, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, o, a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), "focus" !== s && "both" !== s || e.on("focus", this._showDatepicker), "button" !== s && "both" !== s || (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) { for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n); return s }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, n, o) { var r, h, l, c, u, d = this._dialogInst; return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this },
        _destroyDatepicker: function(e) {
            var i, s = t(e),
                n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || s.removeClass(this.markerClassName).empty(), m === n && (m = null))
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : "div" !== i && "span" !== i || (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : "div" !== i && "span" !== i || (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) { try { return t.data(e, "datepicker") } catch (t) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(e, i, s) { var n, o, r, h, l = this._getInst(e); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), void(l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)))) },
        _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) { var i, s, n = t.datepicker._getInst(e.target); if (t.datepicker._get(n, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1 },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal) try { i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s)) } catch (t) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var s, n, o, r, h, l, c;
                s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() { return r |= "fixed" === t(this).css("position"), !r }), h = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, s = this._getNumberOfMonths(e),
                n = s[1],
                a = 17,
                r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
        },
        _findPos: function(e) { for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] },
        _hideDatepicker: function(e) { var i, s, n, o, a = this._curInst;!a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() { t.datepicker._tidyDialog(a) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === s) || t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e),
                o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
        },
        noWeekends: function(t) { var e = t.getDay(); return [e > 0 && e < 6, ""] },
        iso8601Week: function(t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 },
        parseDate: function(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
            var n, o, a, r, h = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                _ = -1,
                v = -1,
                b = !1,
                y = function(t) { var i = n + 1 < e.length && e.charAt(n + 1) === t; return i && n++, i },
                w = function(t) {
                    var e = y(t),
                        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = "y" === t ? s : 1,
                        o = new RegExp("^\\d{" + n + "," + s + "}"),
                        a = i.substring(h).match(o);
                    if (!a) throw "Missing number at position " + h;
                    return h += a[0].length, parseInt(a[0], 10)
                },
                k = function(e, s, n) {
                    var o = -1,
                        a = t.map(y(e) ? n : s, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) { return -(t[1].length - e[1].length) });
                    if (t.each(a, function(t, e) { var s = e[1]; if (i.substr(h, s.length).toLowerCase() === s.toLowerCase()) return o = e[0], h += s.length, !1 }), o !== -1) return o + 1;
                    throw "Unknown name at position " + h
                },
                x = function() {
                    if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (n = 0; n < e.length; n++)
                if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;
                else switch (e.charAt(n)) {
                    case "d":
                        _ = w("d");
                        break;
                    case "D":
                        k("D", u, d);
                        break;
                    case "o":
                        v = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = k("M", p, f);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
                        break;
                    case "!":
                        r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
                        break;
                    case "'":
                        y("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                }
            if (h < i.length && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (g === -1 ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)), v > -1)
                for (m = 1, _ = v;;) {
                    if (o = this._getDaysInMonth(g, m - 1), _ <= o) break;
                    m++, _ -= o
                }
            if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
            return r
        },
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
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(e) { var i = s + 1 < t.length && t.charAt(s + 1) === e; return i && s++, i },
                l = function(t, e, i) {
                    var s = "" + e;
                    if (h(t))
                        for (; s.length < i;) s = "0" + s;
                    return s
                },
                c = function(t, e, i, s) { return h(t) ? s[e] : i[e] },
                u = "",
                d = !1;
            if (e)
                for (s = 0; s < t.length; s++)
                    if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                    }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                s = !1,
                n = function(i) { var s = e + 1 < t.length && t.charAt(e + 1) === i; return s && e++, s };
            for (e = 0; e < t.length; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    a = this._getFormatConfig(t);
                try { o = this.parseDate(i, s, a) || n } catch (t) { s = e ? "" : s }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) },
        _determineDate: function(e, i, s) {
            var n = function(t) { var e = new Date; return e.setDate(e.getDate() + t), e },
                o = function(i) {
                    try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (t) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = r.exec(i); h;) {
                        switch (h[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(h[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(h[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o))
                        }
                        h = r.exec(i)
                    }
                    return new Date(n, o, a)
                },
                a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return a = a && "Invalid Date" === a.toString() ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function(t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) { var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return e },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = { prev: function() { t.datepicker._adjustDate(s, -i, "M") }, next: function() { t.datepicker._adjustDate(s, +i, "M") }, hide: function() { t.datepicker._hideDatepicker() }, today: function() { t.datepicker._gotoToday(s) }, selectDay: function() { return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return t.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function() { return t.datepicker._selectMonthYear(s, this, "Y"), !1 } };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, R, L = new Date,
                B = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                Y = this._get(t, "isRTL"),
                j = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                K = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                $ = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                tt = t.drawYear;
            if (Z < 0 && (Z += 12, tt--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, Z < 0 && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + X, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; k < U[0]; k++) {
                for (x = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                    if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), I = " ui-corner-all", T = "", $) {
                        if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", I = ""
                        }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = $ && this.maxRows > z ? this.maxRows : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(tt, Z, 1 - H)), N = 0; N < O; N++) {
                        for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; w < 7; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, R = F && !v || !E[0] || Q && A < Q || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                        T += W + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), T += "</tbody></table>" + ($ ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
                }
                y += x
            }
            return y += l, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                _ = this._get(t, "changeYear"),
                v = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!h || c >= s.getMonth()) && (!l || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>"
            }
            if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0),
                n = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && e < i ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e },
        _getMinMaxDate: function(t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) },
        _getDaysInMonth: function(t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() },
        _getFirstDayOfMonth: function(t, e) { return new Date(t, e, 1).getDay() },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
        },
        _getFormatConfig: function(t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } },
        _formatDate: function(t, e, i, s) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t)) }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.0";
    var _ = (t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
    t(document).on("mouseup", function() { _ = !1 });
    t.widget("ui.mouse", {
        version: "1.12.0",
        options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) }).on("click." + this.widgetName, function(i) { if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1 }), this.started = !1
        },
        _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(e) {
            if (!_) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    s = 1 === e.which,
                    n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) { return i._mouseMove(t) }, this._mouseUpDelegate = function(t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault() },
        _mouseDistanceMet: function(t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    }), t.ui.plugin = {
        add: function(e, i, s) { var n, o = t.ui[e].prototype; for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]) },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    }, t.ui.safeBlur = function(e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") };
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.0",
        widgetEventPrefix: "drag",
        options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) },
        _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy()) },
        _mouseCapture: function(e) { var i = this.options; return this._blurActiveElement(e), !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0)) },
        _blockFrames: function(e) { this.iframeBlocks = this.document.find(e).map(function() { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]),
                s = t(e.target);
            this._getHandle(e) && s.closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) },
        _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { i._trigger("stop", e) !== !1 && i._clear() }) : this._trigger("stop", e) !== !1 && this._clear(), !1
        },
        _mouseUp: function(e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) },
        cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this },
        _getHandle: function(e) { return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length },
        _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") },
        _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper),
                n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _isRootNode: function(t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) }
        },
        _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() {
            var e, i, s, n = this.options,
                o = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], void(s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i }
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                h = t.pageX,
                l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) }
        },
        _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
        _trigger: function(e, i, s) { return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s) },
        plugins: {},
        _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, { item: s.element });
            s.sortables = [], t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
            })
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, { item: s.element });
            s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i, s) {
            t.each(s.sortables, function() {
                var n = !1,
                    o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() { this.refreshPositions() }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() { this.refreshPositions() }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body"),
                o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper),
                o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
        drag: function(e, i, s) {
            var n = s.options,
                o = !1,
                a = s.scrollParentNotHidden[0],
                r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this !== s.element[0] && s.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left })
            })
        },
        drag: function(e, i, s) {
            var n, o, a, r, h, l, c, u, d, p, f = s.options,
                g = f.snapTolerance,
                m = i.offset.left,
                _ = m + s.helperProportions.width,
                v = i.offset.top,
                b = v + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, _ < h - g || m > l + g || b < c - g || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - b) <= g, o = Math.abs(u - v) <= g, a = Math.abs(h - _) <= g, r = Math.abs(l - m) <= g, n && (i.position.top = s._convertPositionTo("relative", { top: c - s.helperProportions.height, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = Math.abs(c - v) <= g, o = Math.abs(u - b) <= g, a = Math.abs(h - m) <= g, r = Math.abs(l - _) <= g, n && (i.position.top = s._convertPositionTo("relative", { top: c, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = n || o || a || r || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options,
                a = t.makeArray(t(o.stack)).sort(function(e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) { t(this).css("zIndex", n + e) }), this.css("zIndex", n + a.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper),
                o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    });
    t.ui.draggable;
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.0",
        widgetEventPrefix: "resize",
        options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
        _num: function(t) { return parseFloat(t) || 0 },
        _isNumber: function(t) { return !isNaN(parseFloat(t)) },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        _create: function() {
            var e, i = this.options,
                s = this;
            this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() { i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show()) }).on("mouseleave", function() { i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide()) }), this._mouseInit()
        },
        _destroy: function() { this._mouseDestroy(); var e, i = function(e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, a = this.options,
                r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; i < s.length; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({ zIndex: a.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: r._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se") }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() { this._handles.remove() },
        _mouseCapture: function(e) { var i, s, n = !1; for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0); return !this.options.disabled && n },
        _mouseStart: function(e) {
            var i, s, n, o = this.options,
                a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: a.width(), height: a.height() }, this.originalSize = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }, this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition,
                o = this.axis,
                a = e.pageX - n.left || 0,
                r = e.pageY - n.top || 0,
                h = this._change[o];
            return this._updatePrevProperties(), !!h && (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, h, l = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = { width: c.helper.width() - o, height: c.helper.height() - n }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, { top: h, left: r })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
        _applyChanges: function() { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = { minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0, maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0, minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0, maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o
        },
        _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                h = this.originalPosition.top + this.originalSize.height,
                l = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) { for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) { return { width: this.originalSize.width + e } },
            w: function(t, e) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return { left: s.left + e, width: i.width - e }
            },
            n: function(t, e, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return { top: n.top + i, height: s.height - i }
            },
            s: function(t, e, i) { return { height: this.originalSize.height + i } },
            se: function(e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s])) },
            sw: function(e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s])) },
            ne: function(e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s])) },
            nw: function(e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s])) }
        },
        _propagate: function(e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) },
        plugins: {},
        ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
                s = i.options,
                n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                h = { width: i.size.width - r, height: i.size.height - a },
                l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? { top: c, left: l } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                    n && n.length && t(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
                l = h.options,
                c = h.element,
                u = l.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) { i[t] = h._num(e.css("padding" + s)) }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = { element: d, left: s.left, top: s.top, width: a, height: r }))
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).resizable("instance"),
                r = a.options,
                h = a.containerOffset,
                l = a.position,
                c = a._aspectRatio || e.shiftKey,
                u = { top: 0, left: 0 },
                d = a.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                h = a.outerWidth() - e.sizeDiff.width,
                l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) })
            })
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance"),
                n = s.options,
                o = s.originalSize,
                a = s.originalPosition,
                r = { height: s.size.height - o.height || 0, width: s.size.width - o.width || 0, top: s.position.top - a.top || 0, left: s.position.left - a.left || 0 };
            t(n.alsoResize).each(function() {
                var e = t(this),
                    s = t(this).data("ui-resizable-alsoresize"),
                    n = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }), e.css(n)
            })
        },
        stop: function() { t(this).removeData("ui-resizable-alsoresize") }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
                s = i.options,
                n = i.size,
                o = i.originalSize,
                a = i.originalPosition,
                r = i.axis,
                h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                l = h[0] || 1,
                c = h[1] || 1,
                u = Math.round((n.width - o.width) / l) * l,
                d = Math.round((n.height - o.height) / c) * c,
                p = o.width + u,
                f = o.height + d,
                g = s.maxWidth && s.maxWidth < p,
                m = s.maxHeight && s.maxHeight < f,
                _ = s.minWidth && s.minWidth > p,
                v = s.minHeight && s.minHeight > f;
            s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((f - c <= 0 || p - l <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
        }
    });
    t.ui.resizable;
    t.widget("ui.dialog", {
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
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i)
                }
            },
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
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", e) }))
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(e, i) {
            var s = !1,
                n = this.uiDialog.siblings(".ui-front:visible").map(function() { return +t(this).css("z-index") }).get(),
                o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
        },
        open: function() { var e = this; return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), void this._trigger("open")) },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]),
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() { n.trigger("focus") }), e.preventDefault()) : (this._delay(function() { s.trigger("focus") }), e.preventDefault())
                    }
                },
                mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") })
        },
        _title: function(t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") },
        _createButtonPane: function() { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? { click: s, text: i } : s, s = t.extend({ type: "button" }, s), n = s.click, o = { icon: s.icon, iconPosition: s.iconPosition, showLabel: s.showLabel }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() { n.apply(e.element[0], arguments) })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) { return { position: t.position, offset: t.offset } }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) { i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n)) },
                drag: function(t, s) { i._trigger("drag", t, e(s)) },
                stop: function(n, o) {
                    var a = o.offset.left - i.document.scrollLeft(),
                        r = o.offset.top - i.document.scrollTop();
                    s.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } }
            var i = this,
                s = this.options,
                n = s.resizable,
                o = this.uiDialog.css("position"),
                a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(s, n) { i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n)) },
                resize: function(t, s) { i._trigger("resize", t, e(s)) },
                stop: function(n, o) {
                    var a = i.uiDialog.offset(),
                        r = a.left - i.document.scrollLeft(),
                        h = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (h >= 0 ? "+" : "") + h, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() { this._on(this.widget(), { focusin: function(e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) },
        _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
        _untrackInstance: function() {
            var e = this._trackingInstances(),
                i = t.inArray(this, e);
            i !== -1 && e.splice(i, 1)
        },
        _trackingInstances: function() { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t },
        _minHeight: function() { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                s = !1,
                n = {};
            t.each(e, function(t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function(e, i) { var s, n, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(e) { return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } });
    t.ui.dialog;
    t.widget("ui.droppable", {
        version: "1.12.0",
        widgetEventPrefix: "drop",
        options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
        _create: function() {
            var e, i = this.options,
                s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) { return t.is(s) }, this.proportions = function() { return arguments.length ? void(e = arguments[0]) : e ? e : e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) },
        _splice: function(t) { for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1) },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) { return t.is(i) };
            else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current,
                n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = t(this).droppable("instance"); if (i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e)) return n = !0, !1 }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)))
        },
        ui: function(t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } },
        _addHoverClass: function() { this._addClass("ui-droppable-hover") },
        _removeHoverClass: function() { this._removeClass("ui-droppable-hover") },
        _addActiveClass: function() { this._addClass("ui-droppable-active") },
        _removeActiveClass: function() { this._removeClass("ui-droppable-active") }
    });
    var v = t.ui.intersect = function() {
        function t(t, e, i) { return t >= e && t < e + i }
        return function(e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                h = a + e.helperProportions.height,
                l = i.offset.left,
                c = i.offset.top,
                u = l + i.proportions().width,
                d = c + i.proportions().height;
            switch (s) {
                case "fit":
                    return l <= o && r <= u && c <= a && h <= d;
                case "intersect":
                    return l < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && h - e.helperProportions.height / 2 < d;
                case "pointer":
                    return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
                case "touch":
                    return (a >= c && a <= d || h >= c && h <= d || a < c && h > d) && (o >= l && o <= u || r >= l && r <= u || o < l && r > u);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; s < o.length; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; n < r.length; n++)
                        if (r[n] === o[s].element[0]) { o[s].proportions().height = 0; continue t }
                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight }))
                }
        },
        drop: function(e, i) { var s = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s },
        dragStart: function(e, i) { e.element.parentsUntil("body").on("scroll.droppable", function() { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = v(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() { return t(this).droppable("instance").options.scope === n }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }
    }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } });
    t.ui.droppable, t.widget("ui.progressbar", {
        version: "1.12.0",
        options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() },
        _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() },
        value: function(t) { return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue()) },
        _constrainedValue: function(t) { return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t)) },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.0",
        options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this),
                        s = i.offset(),
                        n = { left: s.left - e.elementPos.left, top: s.top - e.elementPos.top };
                    t.data(this, "selectable-item", { element: this, $element: i, left: n.left, top: n.top, right: n.left + i.outerWidth(), bottom: n.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() },
        _mouseStart: function(e) {
            var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, { unselecting: s.element }))
            }), t(e.target).parents().addBack().each(function() { var s, n = t.data(this, "selectable-item"); if (n) return s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, { selecting: n.element }) : i._trigger("unselecting", e, { unselecting: n.element }), !1 }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = e.pageX,
                    h = e.pageY;
                return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({ left: o, top: a, width: r - o, height: h - a }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        l = !1,
                        c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || c.right < o || c.top > h || c.bottom < a) : "fit" === n.tolerance && (l = c.left > o && c.right < r && c.top > a && c.bottom < h), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, { unselecting: i.element })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, { unselected: s.element })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, { selected: s.element })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.0",
        defaultElement: "<select>",
        options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this,
                s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { i._rendered || i._refreshMenu() })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function(t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, { item: s }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 }
        },
        refresh: function() { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) },
        _position: function() { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) },
        close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) },
        widget: function() { return this.button },
        menuWidget: function() { return this.menu },
        _renderButtonItem: function(e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i },
        _renderMenu: function(e, i) {
            var s = this,
                n = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", { text: o.optgroup }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) },
        _renderItem: function(e, i) {
            var s = t("<li>"),
                n = t("<div>", { title: i.element.attr("title") });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
        },
        _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") },
        _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: { mousedown: function(e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(t) { this._setSelection(), this._toggle(t) },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
        _resizeButton: function() { var t = this.options.width; return t === !1 ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t)) },
        _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
        _getCreateOptions: function() { var t = this._super(); return t.disabled = this.element.prop("disabled"), t },
        _parseOptions: function(e) {
            var i = this,
                s = [];
            e.each(function(e, n) { s.push(i._parseOption(t(n), e)) }), this.items = s
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function() { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.0",
        widgetEventPrefix: "slide",
        options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
        numPages: 5,
        _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 },
        _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
        _createHandles: function() {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = "<span tabindex='0'></span>",
                a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) a.push(o);
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) { t(this).data("ui-slider-handle-index", e) })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
        _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, h, l, c = this,
                u = this.options;
            return !u.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
            }), r = this._start(e, a), r !== !1 && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - h.left - o.width() / 2, top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() { return !0 },
        _mouseDrag: function(t) {
            var e = { x: t.pageX, y: t.pageY },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
        _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
        _normValueFromMouse: function(t) { var e, i, s, n, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o) },
        _uiHash: function(t, e, i) { var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() }; return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s },
        _hasMultipleValues: function() { return this.options.values && this.options.values.length },
        _start: function(t, e) { return this._trigger("start", t, this._uiHash(e)) },
        _slide: function(t, e, i) {
            var s, n, o = this.value(),
                a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function(t, e) { this._trigger("stop", t, this._uiHash(e)) },
        _change: function(t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) },
        value: function(t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value() },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _value: function() { var t = this.options.value; return t = this._trimAlignValue(t) },
        _values: function(t) { var e, i, s; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step,
                s = Math.round((t - e) / i) * i;
            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = t.toString(),
                i = e.indexOf(".");
            return i === -1 ? 0 : e.length - i - 1
        },
        _valueMin: function() { return this.options.min },
        _valueMax: function() { return this.max },
        _refreshRange: function(t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range,
                r = this.options,
                h = this,
                l = !this._animateOff && r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) { i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
                }
                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - o)
                }
                this._slide(e, a, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
        _isOverAxis: function(t, e, i) { return t >= e && t < e + i },
        _isFloating: function(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) },
        _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") })
        },
        _destroy: function() { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() { if (t.data(this, o.widgetName + "-item") === o) return s = t(this), !1 }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() { this === e.target && (n = !0) }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && !(n === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === n || t.contains(this.placeholder[0], n) || "semi-dynamic" === this.options.type && t.contains(this.element[0], n))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() { s._clear(e) })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() { s.push(t(e.item || this).attr(e.attribute || "id") || "") }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + l > r && s + l < h,
                d = "y" === this.options.axis || e + c > o && e + c < a,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                o = s && n;
            return !!o && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") },
        _getDragHorizontalDirection: function() { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") },
        refresh: function(t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this },
        _connectWith: function() { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith },
        _getItemsAsjQuery: function(e) {
            function i() { r.push(this) }
            var s, n, o, a, r = [],
                h = [],
                l = this._connectWith();
            if (l && e)
                for (s = l.length - 1; s >= 0; s--)
                    for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; s < l; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 })
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) { i && !s.forcePlaceholderSize || (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))) }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() { t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) })
        },
        _contactContainers: function(e) {
            var i, s, n, o, a, r, h, l, c, u, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), Math.abs(e[u] - h) < n && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), s[0].style.width && !i.forceHelperSize || s.width(this.currentItem.width()), s[0].style.height && !i.forceHelperSize || s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
        _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
        _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() { var e, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), "document" !== n.containment && "window" !== n.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i,
                s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() { n === this.counter && this.refreshPositions(!s) })
        },
        _clear: function(t, e) {
            function i(t, e, i) { return function(s) { i._trigger(t, s, e._uiHash(e)) } }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) "auto" !== this._storedCSS[s] && "static" !== this._storedCSS[s] || (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (n.push(function(t) { this._trigger("remove", t, this._uiHash()) }), n.push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; s < n.length; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() { t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() },
        _uiHash: function(e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } }
    });
    t.widget("ui.spinner", {
        version: "1.12.0",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
        _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
        _getCreateOptions: function() {
            var e = this._super(),
                i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() },
            keyup: "_stop",
            focus: function() { this.previous = this.element.val() },
            blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t))) },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                    e || (this.element.trigger("focus"), this.previous = s, this._delay(function() { this.previous = s }))
                }
                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, i.call(this) }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) { if (t(e.currentTarget).hasClass("ui-state-active")) return this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") },
        _draw: function() { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) },
        _keydown: function(e) {
            var i = this.options,
                s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function(t) { return !(!this.spinning && this._trigger("start", t) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0) },
        _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, { value: i }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = t.toString(),
                i = e.indexOf(".");
            return i === -1 ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) { var e, i, s = this.options; return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t },
        _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) },
        _setOption: function(t, e) { var i, s, n; return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : ("max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), void this._super(t, e)) },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") },
        _setOptions: r(function(t) { this._super(t) }),
        _parse: function(t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t },
        _format: function(t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t },
        _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
        isValid: function() { var t = this.value(); return null !== t && t === this._adjustValue(t) },
        _value: function(t, e) { var i; "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh() },
        _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
        stepUp: r(function(t) { this._stepUp(t) }),
        _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) },
        stepDown: r(function(t) { this._stepDown(t) }),
        _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) },
        pageUp: r(function(t) { this._stepUp((t || 1) * this.options.page) }),
        pageDown: r(function(t) { this._stepDown((t || 1) * this.options.page) }),
        value: function(t) { return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val()) },
        widget: function() { return this.uiSpinner }
    }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } });
    t.ui.spinner;
    t.widget("ui.tabs", {
        version: "1.12.0",
        delay: 300,
        options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try { i = decodeURIComponent(i) } catch (t) {}
                try { s = decodeURIComponent(s) } catch (t) {}
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) { return e.tabs.index(t) }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) { if (t(n).attr("aria-controls") === s) return e = i, !1 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && e !== -1 || (e = !!this.tabs.length && 0)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), e === -1 && (e = !i && 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                s = this.tabs.index(i),
                n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", s) }, this.delay))
            }
        },
        _panelKeydown: function(e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) },
        _handlePageNav: function(e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
        _findNextTab: function(e, i) {
            function s() { return e > n && (e = 0), e < 0 && (e = n), e }
            for (var n = this.tabs.length - 1; t.inArray(s(), this.options.disabled) !== -1;) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e))) },
        _sanitizeSelector: function(t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) { return i.index(t) }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                s = this.anchors,
                n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"),
                    h = t(s).closest("li"),
                    l = h.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": a, "aria-labelledby": r }), o.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) },
        _createPanel: function(e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || t.inArray(n, e) !== -1 ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() { i -= t(this).outerHeight(!0) }), this.panels.each(function() { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() { i = Math.max(i, t(this).height("").height()) }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                o = n.closest("li"),
                a = o[0] === s[0],
                r = a && i.collapsible,
                h = r ? t() : this._getPanelForTab(o),
                l = s.length ? this._getPanelForTab(s) : t(),
                c = { oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function s() { o.running = !1, o._trigger("activate", e, i) }

            function n() { o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s()) }
            var o = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() { o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return e === !1 ? t() : this.tabs.eq(e) },
        _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) { return t !== e ? t : null }) : t.map(this.tabs, function(t, i) { return i !== e ? i : null })), this._setOptionDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), t.inArray(e, i) !== -1) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this,
                n = this.tabs.eq(e),
                o = n.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(n),
                r = { tab: n, panel: a },
                h = function(t, e) { "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) { setTimeout(function() { a.html(t), s._trigger("load", i, r), h(n, e) }, 1) }).fail(function(t, e) { setTimeout(function() { h(t, e) }, 1) })))
        },
        _ajaxSettings: function(e, i, s) { var n = this; return { url: e.attr("href"), beforeSend: function(e, o) { return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s)) } } },
        _getPanelForTab: function(e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
    }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } });
    t.ui.tabs;
    t.widget("ui.tooltip", {
        version: "1.12.0",
        options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"),
                s = (e.attr("aria-describedby") || "").split(/\s+/),
                n = t.inArray(i, s);
            n !== -1 && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        },
        _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) { s._updateContent(e.element) })
        },
        _setOptionDisabled: function(t) { this[t ? "_disable" : "_enable"]() },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var e = t(this); if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", ""))
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content,
                n = this,
                o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function(i) { n._delay(function() { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) }), void(i && this._open(e, t, i)))
        },
        _open: function(e, i, s) {
            function n(t) { l.of = t, a.is(":hidden") || a.position(l) }
            var o, a, r, h, l = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: n }), n(e)) : a.position(t.extend({ of: i }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() { a.is(":visible") && (n(l.of), clearInterval(r)) }, t.fx.interval)), this._trigger("open", e, { tooltip: a })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
        },
        close: function(e) {
            var i, s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { s._removeTooltip(t(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) { t(i.element).attr("title", i.title), delete s.parents[e] }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)))) : void n.removeData("ui-tooltip-open")
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"),
                s = t("<div>").appendTo(i),
                n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = { element: e, tooltip: i }
        },
        _find: function(t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null },
        _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] },
        _appendTo: function(t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur"),
                    o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } });
    t.ui.tooltip
});
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try { return Object.defineProperty(t, a, { configurable: !0, enumerable: !0, get: function() { return r(o), i }, set: function(e) { r(o), i = e } }), n } catch (e) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() { i = {}, e.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", { size: 1 }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() { return null },
            c = e.attrHooks.value && e.attrHooks.value.set || function() { return n },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                h = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(h) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = { get: function(t, r) { var a, i = e.prop(t, r); return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n }, set: function(t, n, r) { var a; return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r } }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = { get: function(e, t) { var n = (e.nodeName || "").toLowerCase(); return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null) }, set: function(e, t) { var a = (e.nodeName || "").toLowerCase(); return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n) } };
        var h, g, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) { var i; return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments) }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) { return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null) }, e.uaMatch = function(e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }, e.browser || (h = e.uaMatch(navigator.userAgent), g = {}, h.browser && (g[h.browser] = !0, g.version = h.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), e.browser = g), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) { return new t.fn.init(e, n) }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) { return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n) }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({ converters: { "text json": e.parseJSON } });
        var b = e.fn.data;
        e.fn.data = function(t) { var a, i, o = this[0]; return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i) };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() { return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments) }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) { return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) { return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1")) };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) { e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i) }, e.event.remove = function(e, t, n, r, a) { x.call(this, e, A(t) || "", n, r, a) }, e.fn.error = function() { var e = Array.prototype.slice.call(arguments, 0); return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this) }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) { var r = (e._data(this, "lastToggle" + t.guid) || 0) % o; return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1 };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) { return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this) }, e.fn.die = function(t, n) { return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this) }, e.event.trigger = function(e, t, n, a) { return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a) }, e.each(S.split("|"), function(t, n) { e.event.special[n] = { setup: function() { var t = this; return t !== document && (e.event.add(document, n + "." + e.guid, function() { e.event.trigger(n, null, t, !0) }), e._data(this, n, e.guid++)), !1 }, teardown: function() { return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1 } } })
    }(jQuery, window);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 });
        var e = function() { c || a(d).trigger(a.support.transition.end) };
        return setTimeout(e, b), this
    }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = { relatedTarget: this };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") })
    }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" })
    }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b
    }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) { this.init("popover", a, b) };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this };
    var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({ top: g - b - f })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
! function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, n) {
            var o, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function h(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function(t) { if ("string" == typeof t) { var e = o.call(arguments, 1); return u(this, t, e) } return h(this, t), this }, n(a))
    }

    function n(t) {!t || t && t.bridget || (t.bridget = i) }
    var o = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) { s.error(t) };
    return n(e || t.jQuery), i
}),
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                var r = s && s[o];
                r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; h > e; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function n(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = n(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; h > l; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) { return e[t](i) }
}),
function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function(t, e) { return (t % e + e) % e }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) { var i = t.indexOf(e); - 1 != i && t.splice(i, 1) }, i.getParent = function(t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[o] = setTimeout(function() { n.apply(s, e), delete s[o] }, i || 100)
        }
    }, i.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try { i = s && JSON.parse(s) } catch (e) { return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + e)) }
                var a = new e(t, i);
                l && l.data(t, o, a)
            })
        })
    }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) {
    "use strict";

    function i(t) { for (var e in t) return !1; return e = null, !0 }

    function n(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

    function o(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
        h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() { this.size = e(this.element) }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = h[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[o];
        e[s] = this.getXValue(a), e[r] = "";
        var u = n ? "paddingTop" : "paddingBottom",
            h = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, d.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            s = parseInt(e, 10),
            r = o === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - n,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, d._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, d.onotransitionend = function(t) { this.ontransitionend(t) };
    var f = { "-webkit-transform": "transform" };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1 }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
    return d.removeTransitionStyles = function() { this.css(c) }, d.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, d.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, d.remove = function() { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, d.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
    }, d.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, d.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, d.hide = function() {
        this.isHidden = !0, this.css({ display: "" });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
    }, d.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, d.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) { return e(t, i, n, o, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, n, o) {
    "use strict";

    function s(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, f[o] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() { t.apply(this, arguments) }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = o, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
    var c = s.prototype;
    n.extend(c, e.prototype), c.option = function(t) { n.extend(this.options, t) }, c._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() { this.items = this._itemize(this.element.children) }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var s = e[o],
                r = new i(s, this);
            n.push(r)
        }
        return n
    }, c._filterFindItemElements = function(t) { return n.filterFindElements(t, this.options.itemSelector) }, c.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() { this.getSize() }, c.getSize = function() { this.size = i(this.element) }, c._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, c.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, c._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, c._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, c.updateStagger = function() { var t = this.options.stagger; return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger) }, c._positionItem = function(t, e, i, n, o) { n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i)) }, c._postLayout = function() { this.resizeContainer() }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() { o.dispatchEvent(t + "Complete", null, [e]) }

        function n() { r++, r == s && i() }
        var o = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) { e.once(t, n) })
    }, c.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), h)
            if (this.$element = this.$element || h(this.element), e) {
                var o = h.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, c.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, c._find = function(t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0 }, c._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            s = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };
        return s
    }, c.handleEvent = n.handleEvent, c.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, c.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, c.onresize = function() { this.resize() }, n.debounceMethod(s, "onresize", 100), c.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.reveal() })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.hide() })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, c.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), n.removeFrom(this.items, t) }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) { t = n.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, s.create = function(t, e) { var i = r(s); return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i };
    var m = { ms: 1, s: 1e3 };
    return s.Item = o, s
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) {
    "use strict";

    function e() { t.Item.apply(this, arguments) }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() { this.id = this.layout.itemGUID++, n.call(this), this.sortData = {} }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function() { o.apply(this, arguments), this.css({ display: "" }) }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) {
    "use strict";

    function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) }
    var n = i.prototype,
        o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function(t) { n[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, n.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, n.getRowHeight = function() { this.getSegmentSize("row", "Height") }, n.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, n.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, n.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
        function o() { i.apply(this, arguments) }
        return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            s = o / n,
            r = n - o % n,
            a = r && 1 > r ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = { x: this.columnWidth * r, y: s }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; h > d; d++) this.colYs[r + d] = u;
        return a
    }, i.prototype._getColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            s = o ? n.left : n.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; u >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, i.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, i.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, i.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) };
    var a = n._getOption;
    return n._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = { x: this.x, y: this.y };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function() { return { height: this.maxY } }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype;
    return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, { x: e, y: i }
    }, i._getContainerSize = function() { return { height: this.y } }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) { return e(t, i, n, o, s, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, n, o, s, r) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0; o < t.length; o++) {
                var s = t[o],
                    r = i.sortData[s],
                    a = n.sortData[s];
                if (r > a || a > r) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
        d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in r.modes) this._initLayoutMode(t) }, l.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() { e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems]) }
        var e, i, n, o = this;
        this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { n = !0, t() })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
            }
        }
        return { matches: i, needReveal: n, needHide: o }
    }, l._getFilterTest = function(t) { return u && this.options.isJQueryFiltering ? function(e) { return u(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return n(e.element, t) } }, l.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                s = o && o[1],
                r = e(s, n),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) { return t && a(r(t)) } : function(t) { return t && r(t) }
        }

        function e(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && i.textContent } }
        return t
    }();
    d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, l._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, l._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, l._manageStamp = function(t) { this._mode()._manageStamp(t) }, l._getContainerSize = function() { return this._mode()._getContainerSize() }, l.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
            var s = this._filter(e).matches;
            for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
            var s = e[n];
            o.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, l.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, d
});
! function(e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t() }(this, function() {
    "use strict";
    var e = function() { o.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.") };
    e.version = "2.0.3", window.addEventListener("mousewheel", function() {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
        var i, l, s = "ScrollMagic.Controller",
            a = { f: "FORWARD", r: "REVERSE", p: "PAUSED" },
            c = n.defaults,
            u = this,
            f = o.extend({}, c, r),
            d = [],
            g = !1,
            p = 0,
            h = a.p,
            v = !0,
            m = 0,
            w = !0,
            y = function() {
                for (var t in f) c.hasOwnProperty(t) || (I(2, 'WARNING: Unknown option "' + t + '"'), delete f[t]);
                if (f.container = o.get.elements(f.container)[0], !f.container) throw I(1, "ERROR creating object " + s + ": No valid scroll container supplied"), s + " init failed.";
                v = f.container === window || f.container === document.body || !document.body.contains(f.container), v && (f.container = window), m = R(), f.container.addEventListener("resize", O), f.container.addEventListener("scroll", O), f.refreshInterval = parseInt(f.refreshInterval) || c.refreshInterval, S(), I(3, "added new " + s + " controller (v" + e.version + ")")
            },
            S = function() { f.refreshInterval > 0 && (l = window.setTimeout(x, f.refreshInterval)) },
            E = function() { return f.vertical ? o.get.scrollTop(f.container) : o.get.scrollLeft(f.container) },
            R = function() { return f.vertical ? o.get.height(f.container) : o.get.width(f.container) },
            b = this._setScrollPos = function(e) { f.vertical ? v ? window.scrollTo(o.get.scrollLeft(), e) : f.container.scrollTop = e : v ? window.scrollTo(e, o.get.scrollTop()) : f.container.scrollLeft = e },
            F = function() {
                if (w && g) {
                    var e = o.type.Array(g) ? g : d.slice(0);
                    g = !1;
                    var t = p;
                    p = u.scrollPos();
                    var n = p - t;
                    0 !== n && (h = n > 0 ? a.f : a.r), h === a.r && e.reverse(), e.forEach(function(t, n) { I(3, "updating Scene " + (n + 1) + "/" + e.length + " (" + d.length + " total)"), t.update(!0) }), 0 === e.length && f.loglevel >= 3 && I(3, "updating 0 Scenes (nothing added to controller)")
                }
            },
            T = function() { i = o.rAF(F) },
            O = function(e) { I(3, "event fired causing an update:", e.type), "resize" == e.type && (m = R(), h = a.p), g !== !0 && (g = !0, T()) },
            x = function() {
                if (!v && m != R()) {
                    var e;
                    try { e = new Event("resize", { bubbles: !1, cancelable: !1 }) } catch (t) { e = document.createEvent("Event"), e.initEvent("resize", !1, !1) }
                    f.container.dispatchEvent(e)
                }
                d.forEach(function(e, t) { e.refresh() }), S()
            },
            I = this._log = function(e, t) { f.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), o.log.apply(window, arguments)) };
        this._options = f;
        var N = function(e) { if (e.length <= 1) return e; var t = e.slice(0); return t.sort(function(e, t) { return e.scrollOffset() > t.scrollOffset() ? 1 : -1 }), t };
        return this.addScene = function(t) {
            if (o.type.Array(t)) t.forEach(function(e, t) { u.addScene(e) });
            else if (t instanceof e.Scene) {
                if (t.controller() !== u) t.addTo(u);
                else if (d.indexOf(t) < 0) {
                    d.push(t), d = N(d), t.on("shift.controller_sort", function() { d = N(d) });
                    for (var n in f.globalSceneOptions) t[n] && t[n].call(t, f.globalSceneOptions[n]);
                    I(3, "adding Scene (now " + d.length + " total)")
                }
            } else I(1, "ERROR: invalid argument supplied for '.addScene()'");
            return u
        }, this.removeScene = function(e) {
            if (o.type.Array(e)) e.forEach(function(e, t) { u.removeScene(e) });
            else {
                var t = d.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), d.splice(t, 1), I(3, "removing Scene (now " + d.length + " left)"), e.remove())
            }
            return u
        }, this.updateScene = function(t, n) { return o.type.Array(t) ? t.forEach(function(e, t) { u.updateScene(e, n) }) : n ? t.update(!0) : g !== !0 && t instanceof e.Scene && (g = g || [], g.indexOf(t) == -1 && g.push(t), g = N(g), T()), u }, this.update = function(e) { return O({ type: "resize" }), e && F(), u }, this.scrollTo = function(n, r) {
            if (o.type.Number(n)) b.call(f.container, n, r);
            else if (n instanceof e.Scene) n.controller() === u ? u.scrollTo(n.scrollOffset(), r) : I(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", n);
            else if (o.type.Function(n)) b = n;
            else {
                var i = o.get.elements(n)[0];
                if (i) {
                    for (; i.parentNode.hasAttribute(t);) i = i.parentNode;
                    var l = f.vertical ? "top" : "left",
                        s = o.get.offset(f.container),
                        a = o.get.offset(i);
                    v || (s[l] -= u.scrollPos()), u.scrollTo(a[l] - s[l], r)
                } else I(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", n)
            }
            return u
        }, this.scrollPos = function(e) { return arguments.length ? (o.type.Function(e) ? E = e : I(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), u) : E.call(u) }, this.info = function(e) { var t = { size: m, vertical: f.vertical, scrollPos: p, scrollDirection: h, container: f.container, isDocument: v }; return arguments.length ? void 0 !== t[e] ? t[e] : void I(1, 'ERROR: option "' + e + '" is not available') : t }, this.loglevel = function(e) { return arguments.length ? (f.loglevel != e && (f.loglevel = e), u) : f.loglevel }, this.enabled = function(e) { return arguments.length ? (w != e && (w = !!e, u.updateScene(d, !0)), u) : w }, this.destroy = function(e) { window.clearTimeout(l); for (var t = d.length; t--;) d[t].destroy(e); return f.container.removeEventListener("resize", O), f.container.removeEventListener("scroll", O), o.cAF(i), I(3, "destroyed " + s + " (reset: " + (e ? "true" : "false") + ")"), null }, y(), u
    };
    var n = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
    e.Controller.addOption = function(e, t) { n.defaults[e] = t }, e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() { return n.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this }, o.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function(n) {
        var i, l, s = "ScrollMagic.Scene",
            a = r.defaults,
            c = this,
            u = o.extend({}, a, n),
            f = "BEFORE",
            d = 0,
            g = { start: 0, end: 0 },
            p = 0,
            h = !0,
            v = function() {
                for (var e in u) a.hasOwnProperty(e) || (m(2, 'WARNING: Unknown option "' + e + '"'), delete u[e]);
                for (var t in a) T(t);
                b(), c.on("change.internal", function(e) { "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? S() : "reverse" === e.what && c.update()) }).on("shift.internal", function(e) { w(), c.update() })
            },
            m = this._log = function(e, t) { u.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + s + ") ->"), o.log.apply(window, arguments)) };
        this.addTo = function(t) { return t instanceof e.Controller ? l != t && (l && l.removeScene(c), l = t, b(), y(!0), S(!0), w(), l.info("container").addEventListener("resize", E), t.addScene(c), c.trigger("add", { controller: l }), m(3, "added " + s + " to controller"), c.update()) : m(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), c }, this.enabled = function(e) { return arguments.length ? (h != e && (h = !!e, c.update(!0)), c) : h }, this.remove = function() {
            if (l) {
                l.info("container").removeEventListener("resize", E);
                var e = l;
                l = void 0, e.removeScene(c), c.trigger("remove"), m(3, "removed " + s + " from controller")
            }
            return c
        }, this.destroy = function(e) { return c.trigger("destroy", { reset: e }), c.remove(), c.off("*.*"), m(3, "destroyed " + s + " (reset: " + (e ? "true" : "false") + ")"), null }, this.update = function(e) {
            if (l)
                if (e)
                    if (l.enabled() && h) {
                        var t, n = l.info("scrollPos");
                        t = u.duration > 0 ? (n - g.start) / (g.end - g.start) : n >= g.start ? 1 : 0, c.trigger("update", { startPos: g.start, endPos: g.end, scrollPos: n }), c.progress(t)
                    } else x && "DURING" === f && N(!0);
            else l.updateScene(c, !1);
            return c
        }, this.refresh = function() { return y(), S(), c }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = f,
                    r = l ? l.info("scrollDirection") : "PAUSED",
                    o = u.reverse || e >= d;
                if (0 === u.duration ? (t = d != e, d = e < 1 && o ? 0 : 1, f = 0 === d ? "BEFORE" : "DURING") : e <= 0 && "BEFORE" !== f && o ? (d = 0, f = "BEFORE", t = !0) : e > 0 && e < 1 && o ? (d = e, f = "DURING", t = !0) : e >= 1 && "AFTER" !== f ? (d = 1, f = "AFTER", t = !0) : "DURING" !== f || o || N(), t) {
                    var i = { progress: d, state: f, scrollDirection: r },
                        s = f != n,
                        a = function(e) { c.trigger(e, i) };
                    s && "DURING" !== n && (a("enter"), a("BEFORE" === n ? "start" : "end")), a("progress"), s && "DURING" !== f && (a("BEFORE" === f ? "start" : "end"), a("leave"))
                }
                return c
            }
            return d
        };
        var w = function() { g = { start: p + u.offset }, l && u.triggerElement && (g.start -= l.info("size") * u.triggerHook), g.end = g.start + u.duration },
            y = function(e) {
                if (i) {
                    var t = "duration";
                    F(t, i.call(c)) && !e && (c.trigger("change", { what: t, newval: u[t] }), c.trigger("shift", { reason: t }))
                }
            },
            S = function(e) {
                var n = 0,
                    r = u.triggerElement;
                if (l && r) {
                    for (var i = l.info(), s = o.get.offset(i.container), a = i.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
                    var f = o.get.offset(r);
                    i.isDocument || (s[a] -= l.scrollPos()), n = f[a] - s[a]
                }
                var d = n != p;
                p = n, d && !e && c.trigger("shift", { reason: "triggerElementPosition" })
            },
            E = function(e) { u.triggerHook > 0 && c.trigger("shift", { reason: "containerResize" }) },
            R = o.extend(r.validate, {
                duration: function(e) {
                    if (o.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                        var t = parseFloat(e) / 100;
                        e = function() { return l ? l.info("size") * t : 0 }
                    }
                    if (o.type.Function(e)) { i = e; try { e = parseFloat(i()) } catch (t) { e = -1 } }
                    if (e = parseFloat(e), !o.type.Number(e) || e < 0) throw i ? (i = void 0, ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                    return e
                }
            }),
            b = function(e) {
                e = arguments.length ? [e] : Object.keys(R), e.forEach(function(e, t) {
                    var n;
                    if (R[e]) try { n = R[e](u[e]) } catch (t) {
                        n = a[e];
                        var r = o.type.String(t) ? [t] : t;
                        o.type.Array(r) ? (r[0] = "ERROR: " + r[0], r.unshift(1), m.apply(this, r)) : m(1, "ERROR: Problem executing validation callback for option '" + e + "':", t.message)
                    } finally { u[e] = n }
                })
            },
            F = function(e, t) {
                var n = !1,
                    r = u[e];
                return u[e] != t && (u[e] = t, b(e), n = r != u[e]), n
            },
            T = function(e) { c[e] || (c[e] = function(t) { return arguments.length ? ("duration" === e && (i = void 0), F(e, t) && (c.trigger("change", { what: e, newval: u[e] }), r.shifts.indexOf(e) > -1 && c.trigger("shift", { reason: e })), c) : u[e] }) };
        this.controller = function() { return l }, this.state = function() { return f }, this.scrollOffset = function() { return g.start }, this.triggerPosition = function() { var e = u.offset; return l && (e += u.triggerElement ? p : l.info("size") * c.triggerHook()), e };
        var O = {};
        this.on = function(e, t) {
            return o.type.Function(t) ? (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    o = n[1];
                "*" != r && (O[r] || (O[r] = []), O[r].push({ namespace: o || "", callback: t }))
            })) : m(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"), c
        }, this.off = function(e, t) {
            return e ? (e = e.trim().split(" "), e.forEach(function(e, n) {
                var r = e.split("."),
                    o = r[0],
                    i = r[1] || "",
                    l = "*" === o ? Object.keys(O) : [o];
                l.forEach(function(e) {
                    for (var n = O[e] || [], r = n.length; r--;) { var o = n[r];!o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1) }
                    n.length || delete O[e]
                })
            }), c) : (m(1, "ERROR: Invalid event name supplied."), c)
        }, this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split("."),
                    o = r[0],
                    i = r[1],
                    l = O[o];
                m(3, "event fired:", o, n ? "->" : "", n || ""), l && l.forEach(function(t, r) { i && i !== t.namespace || t.callback.call(c, new e.Event(o, t.namespace, c, n)) })
            } else m(1, "ERROR: Invalid event name supplied.");
            return c
        };
        var x, I;
        c.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            ("AFTER" === f && t || "DURING" === f && 0 === u.duration) && N(), t && z()
        }).on("progress.internal", function(e) { N() }).on("add.internal", function(e) { z() }).on("destroy.internal", function(e) { c.removePin(e.reset) });
        var N = function(e) {
                if (x && l) {
                    var t = l.info();
                    if (e || "DURING" !== f) {
                        var n = { position: I.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                            r = o.css(x, "position") != n.position;
                        I.pushFollowers ? u.duration > 0 && ("AFTER" === f && 0 === parseFloat(o.css(I.spacer, "padding-top")) ? r = !0 : "BEFORE" === f && 0 === parseFloat(o.css(I.spacer, "padding-bottom")) && (r = !0)) : n[t.vertical ? "top" : "left"] = u.duration * d, o.css(x, n), r && z()
                    } else {
                        "fixed" != o.css(x, "position") && (o.css(x, { position: "fixed" }), z());
                        var i = o.get.offset(I.spacer, !0),
                            s = u.reverse || 0 === u.duration ? t.scrollPos - g.start : Math.round(d * u.duration * 10) / 10;
                        i[t.vertical ? "top" : "left"] += s, o.css(x, { top: i.top, left: i.left })
                    }
                }
            },
            z = function() {
                if (x && l && I.inFlow) {
                    var e = "DURING" === f,
                        t = l.info("vertical"),
                        n = I.spacer.children[0],
                        r = o.isMarginCollapseType(o.css(I.spacer, "display")),
                        i = {};
                    I.relSize.width || I.relSize.autoFullWidth ? e ? o.css(x, { width: o.get.width(I.spacer) }) : o.css(x, { width: "100%" }) : (i["min-width"] = o.get.width(t ? x : n, !0, !0), i.width = e ? i["min-width"] : "auto"), I.relSize.height ? e ? o.css(x, { height: o.get.height(I.spacer) - (I.pushFollowers ? u.duration : 0) }) : o.css(x, { height: "100%" }) : (i["min-height"] = o.get.height(t ? n : x, !0, !r), i.height = e ? i["min-height"] : "auto"), I.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = u.duration * d, i["padding" + (t ? "Bottom" : "Right")] = u.duration * (1 - d)), o.css(I.spacer, i)
                }
            },
            C = function() { l && x && "DURING" === f && !l.info("isDocument") && N() },
            A = function() { l && x && "DURING" === f && ((I.relSize.width || I.relSize.autoFullWidth) && o.get.width(window) != o.get.width(I.spacer.parentNode) || I.relSize.height && o.get.height(window) != o.get.height(I.spacer.parentNode)) && z() },
            P = function(e) { l && x && "DURING" === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail))) };
        this.setPin = function(e, n) {
            var r = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" };
            if (n = o.extend({}, r, n), e = o.get.elements(e)[0], !e) return m(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), c;
            if ("fixed" === o.css(e, "position")) return m(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), c;
            if (x) {
                if (x === e) return c;
                c.removePin()
            }
            x = e;
            var i = x.parentNode.style.display,
                l = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            x.parentNode.style.display = "none";
            var s = "absolute" != o.css(x, "position"),
                a = o.css(x, l.concat(["display"])),
                f = o.css(x, ["width", "height"]);
            x.parentNode.style.display = i, !s && n.pushFollowers && (m(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), n.pushFollowers = !1), window.setTimeout(function() { x && 0 === u.duration && n.pushFollowers && m(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.") }, 0);
            var d = x.parentNode.insertBefore(document.createElement("div"), x),
                g = o.extend(a, { position: s ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
            if (s || o.extend(g, o.css(x, ["width", "height"])), o.css(d, g), d.setAttribute(t, ""), o.addClass(d, n.spacerClass), I = { spacer: d, relSize: { width: "%" === f.width.slice(-1), height: "%" === f.height.slice(-1), autoFullWidth: "auto" === f.width && s && o.isMarginCollapseType(a.display) }, pushFollowers: n.pushFollowers, inFlow: s }, !x.___origStyle) {
                x.___origStyle = {};
                var p = x.style,
                    h = l.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                h.forEach(function(e) { x.___origStyle[e] = p[e] || "" })
            }
            return I.relSize.width && o.css(d, { width: f.width }), I.relSize.height && o.css(d, { height: f.height }), d.appendChild(x), o.css(x, { position: s ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (I.relSize.width || I.relSize.autoFullWidth) && o.css(x, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", C), window.addEventListener("resize", C), window.addEventListener("resize", A), x.addEventListener("mousewheel", P), x.addEventListener("DOMMouseScroll", P), m(3, "added pin"), N(), c
        }, this.removePin = function(e) {
            if (x) {
                if ("DURING" === f && N(!0), e || !l) {
                    var n = I.spacer.children[0];
                    if (n.hasAttribute(t)) {
                        var r = I.spacer.style,
                            i = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, i.forEach(function(e) { margins[e] = r[e] || "" }), o.css(n, margins)
                    }
                    I.spacer.parentNode.insertBefore(n, I.spacer), I.spacer.parentNode.removeChild(I.spacer), x.parentNode.hasAttribute(t) || (o.css(x, x.___origStyle), delete x.___origStyle)
                }
                window.removeEventListener("scroll", C), window.removeEventListener("resize", C), window.removeEventListener("resize", A), x.removeEventListener("mousewheel", P), x.removeEventListener("DOMMouseScroll", P), x = void 0, m(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
            }
            return c
        };
        var L, D = [];
        return c.on("destroy.internal", function(e) { c.removeClassToggle(e.reset) }), this.setClassToggle = function(e, t) {
            var n = o.get.elements(e);
            return 0 !== n.length && o.type.String(t) ? (D.length > 0 && c.removeClassToggle(), L = t, D = n, c.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? o.addClass : o.removeClass;
                D.forEach(function(e, n) { t(e, L) })
            }), c) : (m(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."), c)
        }, this.removeClassToggle = function(e) { return e && D.forEach(function(e, t) { o.removeClass(e, L) }), c.off("start.internal_class end.internal_class"), L = void 0, D = [], c }, v(), c
    };
    var r = {
        defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 },
        validate: {
            offset: function(e) { if (e = parseFloat(e), !o.type.Number(e)) throw ['Invalid value for option "offset":', e]; return e },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = o.get.elements(e)[0];
                    if (!t) throw ['Element defined in option "triggerElement" was not found:', e];
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = { onCenter: .5, onEnter: 1, onLeave: 0 };
                if (o.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw ['Invalid value for option "triggerHook": ', e];
                    e = t[e]
                }
                return e
            },
            reverse: function(e) { return !!e },
            loglevel: function(e) { if (e = parseInt(e), !o.type.Number(e) || e < 0 || e > 3) throw ['Invalid value for option "loglevel":', e]; return e }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(t, n, o, i) { t in r.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (r.defaults[t] = n, r.validate[t] = o, i && r.shifts.push(t)) }, e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() { return n.apply(this, arguments), this.$super = o.extend({}, this), t.apply(this, arguments) || this }, o.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function(e, t, n, r) { r = r || {}; for (var o in r) this[o] = r[o]; return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this };
    var o = e._util = function(e) {
        var t, n = {},
            r = function(e) { return parseFloat(e) || 0 },
            o = function(t) { return t.currentStyle ? t.currentStyle : e.getComputedStyle(t) },
            i = function(t, n, i, l) {
                if (n = n === document ? e : n, n === e) l = !1;
                else if (!p.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var s = (i ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (i && l) {
                    var a = o(n);
                    s += "Height" === t ? r(a.marginTop) + r(a.marginBottom) : r(a.marginLeft) + r(a.marginRight)
                }
                return s
            },
            l = function(e) { return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) { return e[1].toUpperCase() }) };
        n.extend = function(e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function(e) { return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1 };
        var s = 0,
            a = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < a.length; ++t) c = e[a[t] + "RequestAnimationFrame"], u = e[a[t] + "CancelAnimationFrame"] || e[a[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - s)),
                o = e.setTimeout(function() { t(n + r) }, r);
            return s = n + r, o
        }), u || (u = function(t) { e.clearTimeout(t) }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = ["error", "warn", "log"],
            d = e.console || {};
        for (d.log = d.log || function() {}, t = 0; t < f.length; t++) {
            var g = f[t];
            d[g] || (d[g] = d.log)
        }
        n.log = function(e) {
            (e > f.length || e <= 0) && (e = f.length);
            var t = new Date,
                n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
                r = f[e - 1],
                o = Array.prototype.splice.call(arguments, 1),
                i = Function.prototype.bind.call(d[r], d);
            o.unshift(n), i.apply(d, o)
        };
        var p = n.type = function(e) { return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase() };
        p.String = function(e) { return "string" === p(e) }, p.Function = function(e) { return "function" === p(e) }, p.Array = function(e) { return Array.isArray(e) }, p.Number = function(e) { return !p.Array(e) && e - parseFloat(e) + 1 >= 0 }, p.DomElement = function(e) { return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName };
        var h = n.get = {};
        return h.elements = function(t) {
            var n = [];
            if (p.String(t)) try { t = document.querySelectorAll(t) } catch (e) { return n }
            if ("nodelist" === p(t) || p.Array(t))
                for (var r = 0, o = n.length = t.length; r < o; r++) {
                    var i = t[r];
                    n[r] = p.DomElement(i) ? i : h.elements(i)
                } else(p.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, h.scrollTop = function(t) { return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0 }, h.scrollLeft = function(t) { return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0 }, h.width = function(e, t, n) { return i("width", e, t, n) }, h.height = function(e, t, n) { return i("height", e, t, n) }, h.offset = function(e, t) {
            var n = { top: 0, left: 0 };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += h.scrollTop(), n.left += h.scrollLeft())
            }
            return n
        }, n.addClass = function(e, t) { t && (e.classList ? e.classList.add(t) : e.className += " " + t) }, n.removeClass = function(e, t) { t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, n.css = function(e, t) {
            if (p.String(t)) return o(e)[l(t)];
            if (p.Array(t)) {
                var n = {},
                    r = o(e);
                return t.forEach(function(e, t) { n[e] = r[l(e)] }), n
            }
            for (var i in t) {
                var s = t[i];
                s == parseFloat(s) && (s += "px"), e.style[l(i)] = s
            }
        }, n
    }(window || {});
    return e.Scene.prototype.addIndicators = function() { return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this }, e.Scene.prototype.removeIndicators = function() { return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this }, e.Scene.prototype.setTween = function() { return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this }, e.Scene.prototype.removeTween = function() { return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this }, e.Scene.prototype.setVelocity = function() { return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this }, e.Scene.prototype.removeVelocity = function() { return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this }, e
});
! function(e) {
    "use strict";

    function t(e) {
        var t = e.length,
            a = r.type(e);
        return "function" !== a && !r.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    if (!e.jQuery) {
        var r = function(e, t) { return new r.fn.init(e, t) };
        r.isWindow = function(e) { return e && e === e.window }, r.type = function(e) { return e ? "object" == typeof e || "function" == typeof e ? o[n.call(e)] || "object" : typeof e : e + "" }, r.isArray = Array.isArray || function(e) { return "array" === r.type(e) }, r.isPlainObject = function(e) { var t; if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1; try { if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 } for (t in e); return void 0 === t || i.call(e, t) }, r.each = function(e, r, a) {
            var o, i = 0,
                n = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i < n && (o = r.apply(e[i], a), o !== !1); i++);
                else
                    for (i in e)
                        if (o = r.apply(e[i], a), o === !1) break
            } else if (s)
                for (; i < n && (o = r.call(e[i], i, e[i]), o !== !1); i++);
            else
                for (i in e)
                    if (o = r.call(e[i], i, e[i]), o === !1) break; return e
        }, r.data = function(e, t, o) {
            if (void 0 === o) {
                var i = e[r.expando],
                    n = i && a[i];
                if (void 0 === t) return n;
                if (n && t in n) return n[t]
            } else if (void 0 !== t) { var s = e[r.expando] || (e[r.expando] = ++r.uuid); return a[s] = a[s] || {}, a[s][t] = o, o }
        }, r.removeData = function(e, t) {
            var o = e[r.expando],
                i = o && a[o];
            i && (t ? r.each(t, function(e, t) { delete i[t] }) : delete a[o])
        }, r.extend = function() {
            var e, t, a, o, i, n, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); l < u; l++)
                if (i = arguments[l])
                    for (o in i) e = s[o], a = i[o], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, n = e && r.isArray(e) ? e : []) : n = e && r.isPlainObject(e) ? e : {}, s[o] = r.extend(c, n, a)) : void 0 !== a && (s[o] = a));
            return s
        }, r.queue = function(e, a, o) {
            function i(e, r) {
                var a = r || [];
                return e && (t(Object(e)) ? ! function(e, t) {
                    for (var r = +t.length, a = 0, o = e.length; a < r;) e[o++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[o++] = t[a++];
                    return e.length = o, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) { a = (a || "fx") + "queue"; var n = r.data(e, a); return o ? (!n || r.isArray(o) ? n = r.data(e, a, i(o)) : n.push(o), n) : n || [] }
        }, r.dequeue = function(e, t) {
            r.each(e.nodeType ? [e] : e, function(e, a) {
                t = t || "fx";
                var o = r.queue(a, t),
                    i = o.shift();
                "inprogress" === i && (i = o.shift()), i && ("fx" === t && o.unshift("inprogress"), i.call(a, function() { r.dequeue(a, t) }))
            })
        }, r.fn = r.prototype = {
            init: function(e) { if (e.nodeType) return this[0] = e, this; throw new Error("Not a DOM node.") },
            offset: function() { var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 }; return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) } },
            position: function() {
                function e(e) { for (var t = e.offsetParent || document; t && "html" !== t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent; return t || document }
                var t = this[0],
                    a = e(t),
                    o = this.offset(),
                    i = /^(?:body|html)$/i.test(a.nodeName) ? { top: 0, left: 0 } : r(a).offset();
                return o.top -= parseFloat(t.style.marginTop) || 0, o.left -= parseFloat(t.style.marginLeft) || 0, a.style && (i.top += parseFloat(a.style.borderTopWidth) || 0, i.left += parseFloat(a.style.borderLeftWidth) || 0), { top: o.top - i.top, left: o.left - i.left }
            }
        };
        var a = {};
        r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
        for (var o = {}, i = o.hasOwnProperty, n = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
        r.fn.init.prototype = r.fn, e.Velocity = { Utilities: r }
    }
}(window),
function(e) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e() }(function() {
    "use strict";
    return function(e, t, r, a) {
        function o(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var o = e[t];
                o && a.push(o)
            }
            return a
        }

        function i(e) { return y.isWrapped(e) ? e = [].slice.call(e) : y.isNode(e) && (e = [e]), e }

        function n(e) { var t = f.data(e, "velocity"); return null === t ? a : t }

        function s(e) { return function(t) { return Math.round(t * e) * (1 / e) } }

        function l(e, r, a, o) {
            function i(e, t) { return 1 - 3 * t + 3 * e }

            function n(e, t) { return 3 * t - 6 * e }

            function s(e) { return 3 * e }

            function l(e, t, r) { return ((i(t, r) * e + n(t, r)) * e + s(t)) * e }

            function u(e, t, r) { return 3 * i(t, r) * e * e + 2 * n(t, r) * e + s(t) }

            function c(t, r) {
                for (var o = 0; o < y; ++o) {
                    var i = u(r, e, a);
                    if (0 === i) return r;
                    var n = l(r, e, a) - t;
                    r -= n / i
                }
                return r
            }

            function p() { for (var t = 0; t < b; ++t) w[t] = l(t * x, e, a) }

            function f(t, r, o) {
                var i, n, s = 0;
                do n = r + (o - r) / 2, i = l(n, e, a) - t, i > 0 ? o = n : r = n; while (Math.abs(i) > h && ++s < v);
                return n
            }

            function d(t) {
                for (var r = 0, o = 1, i = b - 1; o !== i && w[o] <= t; ++o) r += x;
                --o;
                var n = (t - w[o]) / (w[o + 1] - w[o]),
                    s = r + n * x,
                    l = u(s, e, a);
                return l >= m ? c(t, s) : 0 === l ? s : f(t, r, r + x)
            }

            function g() { V = !0, e === r && a === o || p() }
            var y = 4,
                m = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; P < 4; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function(t) { return V || g(), e === r && a === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, o) };
            C.getControlPoints = function() { return [{ x: e, y: r }, { x: a, y: o }] };
            var T = "generateBezier(" + [e, r, a, o] + ")";
            return C.toString = function() { return T }, C
        }

        function u(e, t) { var r = e; return y.isString(e) ? b.Easings[e] || (r = !1) : r = y.isArray(e) && 1 === e.length ? s.apply(null, e) : y.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : !(!y.isArray(e) || 4 !== e.length) && l.apply(null, e), r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r }

        function c(e) {
            if (e) {
                var t = (new Date).getTime(),
                    r = b.State.calls.length;
                r > 1e4 && (b.State.calls = o(b.State.calls), r = b.State.calls.length);
                for (var i = 0; i < r; i++)
                    if (b.State.calls[i]) {
                        var s = b.State.calls[i],
                            l = s[0],
                            u = s[2],
                            d = s[3],
                            g = !!d,
                            m = null;
                        d || (d = b.State.calls[i][3] = t - 16);
                        for (var h = Math.min((t - d) / u.duration, 1), v = 0, x = l.length; v < x; v++) {
                            var P = l[v],
                                V = P.element;
                            if (n(V)) {
                                var C = !1;
                                if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        f.each(T, function(e, t) { S.setPropertyValue(V, "display", t) })
                                    }
                                    S.setPropertyValue(V, "display", u.display)
                                }
                                u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);
                                for (var k in P)
                                    if ("element" !== k) {
                                        var A, F = P[k],
                                            E = y.isString(F.easing) ? b.Easings[F.easing] : F.easing;
                                        if (1 === h) A = F.endValue;
                                        else { var j = F.endValue - F.startValue; if (A = F.startValue + j * E(h, u, j), !g && A === F.currentValue) continue }
                                        if (F.currentValue = A, "tween" === k) m = A;
                                        else {
                                            var N;
                                            if (S.Hooks.registered[k]) {
                                                N = S.Hooks.getRoot(k);
                                                var H = n(V).rootPropertyValueCache[N];
                                                H && (F.rootPropertyValue = H)
                                            }
                                            var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);
                                            S.Hooks.registered[k] && (S.Normalizations.registered[N] ? n(V).rootPropertyValueCache[N] = S.Normalizations.registered[N]("extract", null, L[1]) : n(V).rootPropertyValueCache[N] = L[1]), "transform" === L[0] && (C = !0)
                                        }
                                    }
                                u.mobileHA && n(V).transformCache.translate3d === a && (n(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V)
                            }
                        }
                        u.display !== a && "none" !== u.display && (b.State.calls[i][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[i][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, m), 1 === h && p(i)
                    }
            }
            b.State.isTicking && w(c)
        }

        function p(e, t) {
            if (!b.State.calls[e]) return !1;
            for (var r = b.State.calls[e][0], o = b.State.calls[e][1], i = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = r.length; u < c; u++) {
                var p = r[u].element;
                t || i.loop || ("none" === i.display && S.setPropertyValue(p, "display", i.display), "hidden" === i.visibility && S.setPropertyValue(p, "visibility", i.visibility));
                var d = n(p);
                if (i.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && d) {
                    d.isAnimating = !1, d.rootPropertyValueCache = {};
                    var g = !1;
                    f.each(S.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            o = d.transformCache[t];
                        d.transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(o) && (g = !0, delete d.transformCache[t])
                    }), i.mobileHA && (g = !0, delete d.transformCache.translate3d), g && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating")
                }
                if (!t && i.complete && !i.loop && u === c - 1) try { i.complete.call(o, o) } catch (e) { setTimeout(function() { throw e }, 1) }
                s && i.loop !== !0 && s(o), d && i.loop === !0 && !t && (f.each(d.tweensContainer, function(e, t) {
                    if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 === 0) {
                        var r = t.startValue;
                        t.startValue = t.endValue, t.endValue = r
                    }
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), b(p, "reverse", { loop: !0, delay: i.delay })), i.queue !== !1 && f.dequeue(p, i.queue)
            }
            b.State.calls[e] = !1;
            for (var y = 0, m = b.State.calls.length; y < m; y++)
                if (b.State.calls[y] !== !1) { l = !0; break }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }
        var f, d = function() { if (r.documentMode) return r.documentMode; for (var e = 7; e > 4; e--) { var t = r.createElement("div"); if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e } return a }(),
            g = function() { var e = 0; return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) { var r, a = (new Date).getTime(); return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function() { t(a + r) }, r) } }(),
            y = { isString: function(e) { return "string" == typeof e }, isArray: Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) }, isFunction: function(e) { return "[object Function]" === Object.prototype.toString.call(e) }, isNode: function(e) { return e && e.nodeType }, isNodeList: function(e) { return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0) }, isWrapped: function(e) { return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e)) }, isSVG: function(e) { return t.SVGElement && e instanceof t.SVGElement }, isEmptyObject: function(e) { for (var t in e) return !1; return !0 } },
            m = !1;
        if (e.fn && e.fn.jquery ? (f = e, m = !0) : f = t.Velocity.Utilities, d <= 8 && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (d <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var h = 400,
            v = "swing",
            b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: f, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: h, easing: v, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function(e) { f.data(e, "velocity", { isSVG: y.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} }) }, hook: null, mock: !1, version: { major: 1, minor: 3, patch: 0 }, debug: !1 };
        t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var x = function() {
            function e(e) { return -e.tension * e.x - e.friction * e.v }

            function t(t, r, a) { var o = { x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction }; return { dx: o.v, dv: e(o) } }

            function r(r, a) {
                var o = { dx: r.v, dv: e(r) },
                    i = t(r, .5 * a, o),
                    n = t(r, .5 * a, i),
                    s = t(r, a, n),
                    l = 1 / 6 * (o.dx + 2 * (i.dx + n.dx) + s.dx),
                    u = 1 / 6 * (o.dv + 2 * (i.dv + n.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function e(t, a, o) {
                var i, n, s, l = { x: -1, v: 0, tension: null, friction: null },
                    u = [0],
                    c = 0,
                    p = 1e-4,
                    f = .016;
                for (t = parseFloat(t) || 500, a = parseFloat(a) || 20, o = o || null, l.tension = t, l.friction = a, i = null !== o, i ? (c = e(t, a), n = c / o * f) : n = f; s = r(s || l, n), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p;);
                return i ? function(e) { return u[e * (u.length - 1) | 0] } : c
            }
        }();
        b.Easings = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, spring: function(e) { return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e) } }, f.each([
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
        ], function(e, t) { b.Easings[t[0]] = l.apply(null, t[1]) });
        var S = b.CSS = {
            RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi },
            Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] },
            Hooks: {
                templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] },
                registered: {},
                register: function() {
                    for (var e = 0; e < S.Lists.colors.length; e++) {
                        var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, o;
                    if (d)
                        for (r in S.Hooks.templates) { a = S.Hooks.templates[r], o = a[0].split(" "); var i = a[1].match(S.RegEx.valueSplit); "Color" === o[0] && (o.push(o.shift()), i.push(i.shift()), S.Hooks.templates[r] = [o.join(" "), i.join(" ")]) }
                    for (r in S.Hooks.templates) {
                        a = S.Hooks.templates[r], o = a[0].split(" ");
                        for (var n in o) {
                            var s = r + o[n],
                                l = n;
                            S.Hooks.registered[s] = [r, l]
                        }
                    }
                },
                getRoot: function(e) { var t = S.Hooks.registered[e]; return t ? t[0] : e },
                cleanRootPropertyValue: function(e, t) { return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t },
                extractValue: function(e, t) {
                    var r = S.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            o = r[1];
                        return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[o]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = S.Hooks.registered[e];
                    if (a) {
                        var o, i, n = a[0],
                            s = a[1];
                        return r = S.Hooks.cleanRootPropertyValue(n, r), o = r.toString().match(S.RegEx.valueSplit), o[s] = t, i = o.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var a;
                                return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case "inject":
                                return "rect(" + r + ")"
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var o = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = o ? o[1] : 0
                                }
                                return a;
                            case "inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (d <= 8) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                        }
                    }
                },
                register: function() {
                    d && !(d > 9) || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
                    for (var e = 0; e < S.Lists.transformsBase.length; e++) ! function() {
                        var t = S.Lists.transformsBase[e];
                        S.Normalizations.registered[t] = function(e, r, o) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return n(r) === a || n(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : n(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var i = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            i = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                            break;
                                        case "scal":
                                        case "scale":
                                            b.State.isAndroid && n(r).transformCache[t] === a && o < 1 && (o = 1), i = !/(\d)$/i.test(o);
                                            break;
                                        case "skew":
                                            i = !/(deg|\d)$/i.test(o);
                                            break;
                                        case "rotate":
                                            i = !/(deg|\d)$/i.test(o)
                                    }
                                    return i || (n(r).transformCache[t] = "(" + o + ")"), n(r).transformCache[t]
                            }
                        }
                    }();
                    for (var t = 0; t < S.Lists.colors.length; t++) ! function() {
                        var e = S.Lists.colors[t];
                        S.Normalizations.registered[e] = function(t, r, o) {
                            switch (t) {
                                case "name":
                                    return e;
                                case "extract":
                                    var i;
                                    if (S.RegEx.wrappedValueAlreadyExtracted.test(o)) i = o;
                                    else { var n, s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" }; /^[A-z]+$/i.test(o) ? n = s[o] !== a ? s[o] : s.black : S.RegEx.isHex.test(o) ? n = "rgb(" + S.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (n = s.black), i = (n || o).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ") }
                                    return (!d || d > 8) && 3 === i.split(" ").length && (i += " 1"), i;
                                case "inject":
                                    return d <= 8 ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (d <= 8 ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: { camelCase: function(e) { return e.replace(/-(\w)/g, function(e, t) { return t.toUpperCase() }) }, SVGAttribute: function(e) { var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2"; return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e) }, prefixCheck: function(e) { if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0]; for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; r < a; r++) { var o; if (o = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) { return e.toUpperCase() }), y.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[e] = o, [o, !0] } return [e, !1] } },
            Values: {
                hexToRgb: function(e) {
                    var t, r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(r, function(e, t, r, a) { return t + t + r + r + a + a }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) { return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e) },
                getUnitType: function(e) { return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px" },
                getDisplayType: function(e) { var t = e && e.tagName.toString().toLowerCase(); return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block" },
                addClass: function(e, t) { e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t },
                removeClass: function(e, t) { e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ") }
            },
            getPropertyValue: function(e, r, o, i) {
                function s(e, r) {
                    var o = 0;
                    if (d <= 8) o = f.css(e, r);
                    else {
                        var l = !1;
                        /^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (l = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e)));
                        var u = function() { l && S.setPropertyValue(e, "display", "none") };
                        if (!i) { if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) { var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0); return u(), c } if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) { var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0); return u(), p } }
                        var g;
                        g = n(e) === a ? t.getComputedStyle(e, null) : n(e).computedStyle ? n(e).computedStyle : n(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), o = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], "" !== o && null !== o || (o = e.style[r]), u()
                    }
                    if ("auto" === o && /^(top|right|bottom|left)$/i.test(r)) {
                        var y = s(e, "position");
                        ("fixed" === y || "absolute" === y && /top|left/i.test(r)) && (o = f(e).position()[r] + "px")
                    }
                    return o
                }
                var l;
                if (S.Hooks.registered[r]) {
                    var u = r,
                        c = S.Hooks.getRoot(u);
                    o === a && (o = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (o = S.Normalizations.registered[c]("extract", e, o)), l = S.Hooks.extractValue(u, o)
                } else if (S.Normalizations.registered[r]) {
                    var p, g;
                    p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g)
                }
                if (!/^[\d-]/.test(l)) {
                    var y = n(e);
                    if (y && y.isSVG && S.Names.SVGAttribute(r))
                        if (/^(height|width)$/i.test(r)) try { l = e.getBBox()[r] } catch (e) { l = 0 } else l = e.getAttribute(r);
                        else l = s(e, S.Names.prefixCheck(r)[0])
                }
                return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function(e, r, a, o, i) {
                var s = r;
                if ("scroll" === r) i.container ? i.container["scroll" + i.direction] = a : "Left" === i.direction ? t.scrollTo(a, i.alternateValue) : t.scrollTo(i.alternateValue, a);
                else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e)) S.Normalizations.registered[r]("inject", e, a), s = "transform", a = n(e).transformCache[r];
                else {
                    if (S.Hooks.registered[r]) {
                        var l = r,
                            u = S.Hooks.getRoot(r);
                        o = o || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, o), r = u
                    }
                    if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], d <= 8) try { e.style[s] = a } catch (e) { b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]") } else {
                        var c = n(e);
                        c && c.isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a
                    }
                    b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                var t = "",
                    r = n(e);
                if ((d || b.State.isAndroid && !b.State.isChrome) && r && r.isSVG) {
                    var a = function(t) { return parseFloat(S.getPropertyValue(e, t)) },
                        o = { translate: [a("translateX"), a("translateY")], skewX: [a("skewX")], skewY: [a("skewY")], scale: 1 !== a("scale") ? [a("scale"), a("scale")] : [a("scaleX"), a("scaleY")], rotate: [a("rotateZ"), 0, 0] };
                    f.each(n(e).transformCache, function(e) { /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), o[e] && (t += e + "(" + o[e].join(" ") + ") ", delete o[e]) })
                } else {
                    var i, s;
                    f.each(n(e).transformCache, function(r) { return i = n(e).transformCache[r], "transformPerspective" === r ? (s = i, !0) : (9 === d && "rotateZ" === r && (r = "rotate"), void(t += r + i + " ")) }), s && (t = "perspective" + s + " " + t)
                }
                S.setPropertyValue(e, "transform", t)
            }
        };
        S.Hooks.register(), S.Normalizations.register(), b.hook = function(e, t, r) {
            var o;
            return e = i(e), f.each(e, function(e, i) {
                if (n(i) === a && b.init(i), r === a) o === a && (o = b.CSS.getPropertyValue(i, t));
                else { var s = b.CSS.setPropertyValue(i, t, r); "transform" === s[0] && b.CSS.flushTransformCache(i), o = s }
            }), o
        };
        var P = function() {
            function e() { return l ? A.promise || null : d }

            function o(e, o) {
                function i(i) {
                    var d, g;
                    if (l.begin && 0 === C) try { l.begin.call(m, m) } catch (e) { setTimeout(function() { throw e }, 1) }
                    if ("scroll" === F) {
                        var h, P, w, T = /^x$/i.test(l.axis) ? "Left" : "Top",
                            k = parseFloat(l.offset) || 0;
                        l.container ? y.isWrapped(l.container) || y.isNode(l.container) ? (l.container = l.container[0] || l.container, h = l.container["scroll" + T], w = h + f(e).position()[T.toLowerCase()] + k) : l.container = null : (h = b.State.scrollAnchor[b.State["scrollProperty" + T]], P = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === T ? "Top" : "Left")]], w = f(e).offset()[T.toLowerCase()] + k), p = { scroll: { rootPropertyValue: !1, startValue: h, currentValue: h, endValue: w, unitType: "", easing: l.easing, scrollData: { container: l.container, direction: T, alternateValue: P } }, element: e }, b.debug && console.log("tweensContainer (scroll): ", p.scroll, e)
                    } else if ("reverse" === F) {
                        if (d = n(e), !d) return;
                        if (!d.tweensContainer) return void f.dequeue(e, l.queue);
                        "none" === d.opts.display && (d.opts.display = "auto"), "hidden" === d.opts.visibility && (d.opts.visibility = "visible"), d.opts.loop = !1, d.opts.begin = null, d.opts.complete = null, x.easing || delete l.easing, x.duration || delete l.duration, l = f.extend({}, d.opts, l), g = f.extend(!0, {}, d ? d.tweensContainer : null);
                        for (var E in g)
                            if ("element" !== E) {
                                var j = g[E].startValue;
                                g[E].startValue = g[E].currentValue = g[E].endValue, g[E].endValue = j, y.isEmptyObject(x) || (g[E].easing = l.easing), b.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(g[E]), e)
                            }
                        p = g
                    } else if ("start" === F) {
                        d = n(e), d && d.tweensContainer && d.isAnimating === !0 && (g = d.tweensContainer);
                        var N = function(t, r) { var i, n, s; return y.isArray(t) ? (i = t[0], !y.isArray(t[1]) && /^[\d-]/.test(t[1]) || y.isFunction(t[1]) || S.RegEx.isHex.test(t[1]) ? s = t[1] : (y.isString(t[1]) && !S.RegEx.isHex.test(t[1]) || y.isArray(t[1])) && (n = r ? t[1] : u(t[1], l.duration), t[2] !== a && (s = t[2]))) : i = t, r || (n = n || l.easing), y.isFunction(i) && (i = i.call(e, o, V)), y.isFunction(s) && (s = s.call(e, o, V)), [i || 0, n, s] };
                        f.each(v, function(e, t) {
                            if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(S.Names.camelCase(e))) {
                                var r = N(t, !0),
                                    o = r[0],
                                    i = r[1],
                                    n = r[2];
                                if (S.RegEx.isHex.test(o)) {
                                    for (var s = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(o), u = n ? S.Values.hexToRgb(n) : a, c = 0; c < s.length; c++) {
                                        var p = [l[c]];
                                        i && p.push(i), u !== a && p.push(u[c]), v[S.Names.camelCase(e) + s[c]] = p
                                    }
                                    delete v[e]
                                }
                            }
                        });
                        for (var H in v) {
                            var O = N(v[H]),
                                z = O[0],
                                q = O[1],
                                $ = O[2];
                            H = S.Names.camelCase(H);
                            var M = S.Hooks.getRoot(H),
                                I = !1;
                            if (d && d.isSVG || "tween" === M || S.Names.prefixCheck(M)[1] !== !1 || S.Normalizations.registered[M] !== a) {
                                (l.display !== a && null !== l.display && "none" !== l.display || l.visibility !== a && "hidden" !== l.visibility) && /opacity|filter/.test(H) && !$ && 0 !== z && ($ = 0), l._cacheValues && g && g[H] ? ($ === a && ($ = g[H].endValue + g[H].unitType), I = d.rootPropertyValueCache[M]) : S.Hooks.registered[H] ? $ === a ? (I = S.getPropertyValue(e, M), $ = S.getPropertyValue(e, H, I)) : I = S.Hooks.templates[M][1] : $ === a && ($ = S.getPropertyValue(e, H));
                                var B, W, G, D = !1,
                                    X = function(e, t) { var r, a; return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) { return r = e, "" }), r || (r = S.Values.getUnitType(e)), [a, r] };
                                B = X(H, $), $ = B[0], G = B[1], B = X(H, z), z = B[0].replace(/^([+-\/*])=/, function(e, t) { return D = t, "" }), W = B[1], $ = parseFloat($) || 0, z = parseFloat(z) || 0, "%" === W && (/^(fontSize|lineHeight)$/.test(H) ? (z /= 100, W = "em") : /^scale/.test(H) ? (z /= 100, W = "") : /(Red|Green|Blue)$/i.test(H) && (z = z / 100 * 255, W = ""));
                                var Y = function() {
                                    var a = { myParent: e.parentNode || r.body, position: S.getPropertyValue(e, "position"), fontSize: S.getPropertyValue(e, "fontSize") },
                                        o = a.position === L.lastPosition && a.myParent === L.lastParent,
                                        i = a.fontSize === L.lastFontSize;
                                    L.lastParent = a.myParent, L.lastPosition = a.position, L.lastFontSize = a.fontSize;
                                    var n = 100,
                                        s = {};
                                    if (i && o) s.emToPx = L.lastEmToPx, s.percentToPxWidth = L.lastPercentToPxWidth, s.percentToPxHeight = L.lastPercentToPxHeight;
                                    else {
                                        var l = d && d.isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                                        b.init(l), a.myParent.appendChild(l), f.each(["overflow", "overflowX", "overflowY"], function(e, t) { b.CSS.setPropertyValue(l, t, "hidden") }), b.CSS.setPropertyValue(l, "position", a.position), b.CSS.setPropertyValue(l, "fontSize", a.fontSize), b.CSS.setPropertyValue(l, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) { b.CSS.setPropertyValue(l, t, n + "%") }), b.CSS.setPropertyValue(l, "paddingLeft", n + "em"), s.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(l, "width", null, !0)) || 1) / n, s.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(l, "height", null, !0)) || 1) / n, s.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(l, "paddingLeft")) || 1) / n, a.myParent.removeChild(l)
                                    }
                                    return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), s.remToPx = L.remToPx, s.vwToPx = L.vwToPx, s.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(s), e), s
                                };
                                if (/[\/*]/.test(D)) W = G;
                                else if (G !== W && 0 !== $)
                                    if (0 === z) W = G;
                                    else {
                                        s = s || Y();
                                        var Q = /margin|padding|left|right|width|text|word|letter/i.test(H) || /X$/.test(H) || "x" === H ? "x" : "y";
                                        switch (G) {
                                            case "%":
                                                $ *= "x" === Q ? s.percentToPxWidth : s.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                $ *= s[G + "ToPx"]
                                        }
                                        switch (W) {
                                            case "%":
                                                $ *= 1 / ("x" === Q ? s.percentToPxWidth : s.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                $ *= 1 / s[W + "ToPx"]
                                        }
                                    }
                                switch (D) {
                                    case "+":
                                        z = $ + z;
                                        break;
                                    case "-":
                                        z = $ - z;
                                        break;
                                    case "*":
                                        z *= $;
                                        break;
                                    case "/":
                                        z = $ / z
                                }
                                p[H] = { rootPropertyValue: I, startValue: $, currentValue: $, endValue: z, unitType: W, easing: q }, b.debug && console.log("tweensContainer (" + H + "): " + JSON.stringify(p[H]), e)
                            } else b.debug && console.log("Skipping [" + M + "] due to a lack of browser support.")
                        }
                        p.element = e
                    }
                    p.element && (S.Values.addClass(e, "velocity-animating"), R.push(p), d = n(e), d && ("" === l.queue && (d.tweensContainer = p, d.opts = l), d.isAnimating = !0), C === V - 1 ? (b.State.calls.push([R, m, l, null, A.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : C++)
                }
                var s, l = f.extend({}, b.defaults, x),
                    p = {};
                switch (n(e) === a && b.init(e), parseFloat(l.delay) && l.queue !== !1 && f.queue(e, l.queue, function(t) { b.velocityQueueEntryFlag = !0, n(e).delayTimer = { setTimeout: setTimeout(t, parseFloat(l.delay)), next: t } }), l.duration.toString().toLowerCase()) {
                    case "fast":
                        l.duration = 200;
                        break;
                    case "normal":
                        l.duration = h;
                        break;
                    case "slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(b.mock) || 1, l.delay *= parseFloat(b.mock) || 1)), l.easing = u(l.easing, l.duration), l.begin && !y.isFunction(l.begin) && (l.begin = null), l.progress && !y.isFunction(l.progress) && (l.progress = null), l.complete && !y.isFunction(l.complete) && (l.complete = null), l.display !== a && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = b.CSS.Values.getDisplayType(e))), l.visibility !== a && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && b.State.isMobile && !b.State.isGingerbread, l.queue === !1 ? l.delay ? setTimeout(i, l.delay) : i() : f.queue(e, l.queue, function(e, t) { return t === !0 ? (A.promise && A.resolver(m), !0) : (b.velocityQueueEntryFlag = !0, void i(e)) }), "" !== l.queue && "fx" !== l.queue || "inprogress" === f.queue(e)[0] || f.dequeue(e)
            }
            var s, l, d, g, m, v, x, w = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || y.isString(arguments[0].properties));
            if (y.isWrapped(this) ? (l = !1, g = 0, m = this, d = this) : (l = !0, g = 1, m = w ? arguments[0].elements || arguments[0].e : arguments[0]), m = i(m)) {
                w ? (v = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (v = arguments[g], x = arguments[g + 1]);
                var V = m.length,
                    C = 0;
                if (!/^(stop|finish|finishAll)$/i.test(v) && !f.isPlainObject(x)) {
                    var T = g + 1;
                    x = {};
                    for (var k = T; k < arguments.length; k++) y.isArray(arguments[k]) || !/^(fast|normal|slow)$/i.test(arguments[k]) && !/^\d/.test(arguments[k]) ? y.isString(arguments[k]) || y.isArray(arguments[k]) ? x.easing = arguments[k] : y.isFunction(arguments[k]) && (x.complete = arguments[k]) : x.duration = arguments[k]
                }
                var A = { promise: null, resolver: null, rejecter: null };
                l && b.Promise && (A.promise = new b.Promise(function(e, t) { A.resolver = e, A.rejecter = t }));
                var F;
                switch (v) {
                    case "scroll":
                        F = "scroll";
                        break;
                    case "reverse":
                        F = "reverse";
                        break;
                    case "finish":
                    case "finishAll":
                    case "stop":
                        f.each(m, function(e, t) { n(t) && n(t).delayTimer && (clearTimeout(n(t).delayTimer.setTimeout), n(t).delayTimer.next && n(t).delayTimer.next(), delete n(t).delayTimer), "finishAll" !== v || x !== !0 && !y.isString(x) || (f.each(f.queue(t, y.isString(x) ? x : ""), function(e, t) { y.isFunction(t) && t() }), f.queue(t, y.isString(x) ? x : "", [])) });
                        var E = [];
                        return f.each(b.State.calls, function(e, t) {
                            t && f.each(t[1], function(r, o) {
                                var i = x === a ? "" : x;
                                return i !== !0 && t[2].queue !== i && (x !== a || t[2].queue !== !1) || void f.each(m, function(r, a) {
                                    if (a === o)
                                        if ((x === !0 || y.isString(x)) && (f.each(f.queue(a, y.isString(x) ? x : ""), function(e, t) { y.isFunction(t) && t(null, !0) }), f.queue(a, y.isString(x) ? x : "", [])), "stop" === v) {
                                            var s = n(a);
                                            s && s.tweensContainer && i !== !1 && f.each(s.tweensContainer, function(e, t) { t.endValue = t.currentValue }), E.push(e)
                                        } else "finish" !== v && "finishAll" !== v || (t[2].duration = 1)
                                })
                            })
                        }), "stop" === v && (f.each(E, function(e, t) { p(t, !0) }), A.promise && A.resolver(m)), e();
                    default:
                        if (!f.isPlainObject(v) || y.isEmptyObject(v)) {
                            if (y.isString(v) && b.Redirects[v]) {
                                s = f.extend({}, x);
                                var j = s.duration,
                                    N = s.delay || 0;
                                return s.backwards === !0 && (m = f.extend(!0, [], m).reverse()), f.each(m, function(e, t) { parseFloat(s.stagger) ? s.delay = N + parseFloat(s.stagger) * e : y.isFunction(s.stagger) && (s.delay = N + s.stagger.call(t, e, V)), s.drag && (s.duration = parseFloat(j) || (/^(callout|transition)/.test(v) ? 1e3 : h), s.duration = Math.max(s.duration * (s.backwards ? 1 - e / V : (e + 1) / V), .75 * s.duration, 200)), b.Redirects[v].call(t, t, s || {}, e, V, m, A.promise ? A : a) }), e()
                            }
                            var H = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return A.promise ? A.rejecter(new Error(H)) : console.log(H), e()
                        }
                        F = "start"
                }
                var L = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                    R = [];
                f.each(m, function(e, t) { y.isNode(t) && o(t, e) }), s = f.extend({}, b.defaults, x), s.loop = parseInt(s.loop, 10);
                var O = 2 * s.loop - 1;
                if (s.loop)
                    for (var z = 0; z < O; z++) {
                        var q = { delay: s.delay, progress: s.progress };
                        z === O - 1 && (q.display = s.display, q.visibility = s.visibility, q.complete = s.complete), P(m, "reverse", q)
                    }
                return e()
            }
        };
        b = f.extend(P, b), b.animate = P;
        var w = t.requestAnimationFrame || g;
        return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() { r.hidden ? (w = function(e) { return setTimeout(function() { e(!0) }, 16) }, c()) : w = t.requestAnimationFrame || g }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(e, t) {
            b.Redirects["slide" + t] = function(e, r, o, i, n, s) {
                var l = f.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                    d = {};
                l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(n, n);
                    for (var r in p) {
                        d[r] = e.style[r];
                        var a = b.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    d.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in d) e.style[t] = d[t];
                    c && c.call(n, n), s && s.resolver(n)
                }, b(e, p, l)
            }
        }), f.each(["In", "Out"], function(e, t) {
            b.Redirects["fade" + t] = function(e, r, o, i, n, s) {
                var l = f.extend({}, r),
                    u = l.complete,
                    c = { opacity: "In" === t ? 1 : 0 };
                o !== i - 1 ? l.complete = l.begin = null : l.complete = function() { u && u.call(n, n), s && s.resolver(n) }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, c, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
});
! function(t) { "function" == typeof require && "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t() }(function() {
    return function(t, a, e, r) {
        function n(t, a) {
            var e = [];
            return !(!t || !a) && (s.each([t, a], function(t, a) {
                var r = [];
                s.each(a, function(t, a) {
                    for (; a.toString().length < 5;) a = "0" + a;
                    r.push(a)
                }), e.push(r.join(""))
            }), parseFloat(e[0]) > parseFloat(e[1]))
        }
        if (!t.Velocity || !t.Velocity.Utilities) return void(a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var i = t.Velocity,
            s = i.Utilities,
            o = i.version,
            l = { major: 1, minor: 1, patch: 0 };
        if (n(l, o)) { var c = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity."; throw alert(c), new Error(c) }
        i.RegisterEffect = i.RegisterUI = function(t, a) {
            function e(t, a, e, r) {
                var n, o = 0;
                s.each(t.nodeType ? [t] : t, function(t, a) { r && (e += t * r), n = a.parentNode, s.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(t, e) { o += parseFloat(i.CSS.getPropertyValue(a, e)) }) }), i.animate(n, { height: ("In" === a ? "+" : "-") + "=" + o }, { queue: !1, easing: "ease-in-out", duration: e * ("In" === a ? .6 : 1) })
            }
            return i.Redirects[t] = function(n, o, l, c, u, f) {
                function p() { o.display !== r && "none" !== o.display || !/Out$/.test(t) || s.each(u.nodeType ? [u] : u, function(t, a) { i.CSS.setPropertyValue(a, "display", "none") }), o.complete && o.complete.call(u, u), f && f.resolver(u || n) }
                var d = l === c - 1;
                "function" == typeof a.defaultDuration ? a.defaultDuration = a.defaultDuration.call(u, u) : a.defaultDuration = parseFloat(a.defaultDuration);
                for (var g = 0; g < a.calls.length; g++) {
                    var y = a.calls[g],
                        X = y[0],
                        m = o.duration || a.defaultDuration || 1e3,
                        Y = y[1],
                        O = y[2] || {},
                        v = {};
                    if (v.duration = m * (Y || 1), v.queue = o.queue || "", v.easing = O.easing || "ease", v.delay = parseFloat(O.delay) || 0, v._cacheValues = O._cacheValues || !0, 0 === g) {
                        if (v.delay += parseFloat(o.delay) || 0, 0 === l && (v.begin = function() {
                                o.begin && o.begin.call(u, u);
                                var a = t.match(/(In|Out)$/);
                                a && "In" === a[0] && X.opacity !== r && s.each(u.nodeType ? [u] : u, function(t, a) { i.CSS.setPropertyValue(a, "opacity", 0) }), o.animateParentHeight && a && e(u, a[0], m + v.delay, o.stagger)
                            }), null !== o.display)
                            if (o.display !== r && "none" !== o.display) v.display = o.display;
                            else if (/In$/.test(t)) {
                            var D = i.CSS.Values.getDisplayType(n);
                            v.display = "inline" === D ? "inline-block" : D
                        }
                        o.visibility && "hidden" !== o.visibility && (v.visibility = o.visibility)
                    }
                    g === a.calls.length - 1 && (v.complete = function() {
                        if (a.reset) {
                            for (var t in a.reset) {
                                var e = a.reset[t];
                                i.CSS.Hooks.registered[t] !== r || "string" != typeof e && "number" != typeof e || (a.reset[t] = [a.reset[t], a.reset[t]])
                            }
                            var s = { duration: 0, queue: !1 };
                            d && (s.complete = p), i.animate(n, a.reset, s)
                        } else d && p()
                    }, "hidden" === o.visibility && (v.visibility = o.visibility)), i.animate(n, X, v)
                }
            }, i
        }, i.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [{ translateY: -30 }, .25],
                    [{ translateY: 0 }, .125],
                    [{ translateY: -15 }, .125],
                    [{ translateY: 0 }, .25]
                ]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [{ translateX: -11 }, .125],
                    [{ translateX: 11 }, .125],
                    [{ translateX: -11 }, .125],
                    [{ translateX: 11 }, .125],
                    [{ translateX: -11 }, .125],
                    [{ translateX: 11 }, .125],
                    [{ translateX: -11 }, .125],
                    [{ translateX: 0 }, .125]
                ]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [{ opacity: [0, "easeInOutQuad", 1] }, .25],
                    [{ opacity: [1, "easeInOutQuad"] }, .25],
                    [{ opacity: [0, "easeInOutQuad"] }, .25],
                    [{ opacity: [1, "easeInOutQuad"] }, .25]
                ]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [{ scaleX: 1.1, scaleY: 1.1 }, .5, { easing: "easeInExpo" }],
                    [{ scaleX: 1, scaleY: 1 }, .5]
                ]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [{ rotateZ: 15 }, .2],
                    [{ rotateZ: -10 }, .2],
                    [{ rotateZ: 5 }, .2],
                    [{ rotateZ: -5 }, .2],
                    [{ rotateZ: 0 }, .2]
                ]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                    [{ scaleX: .9, scaleY: .9, rotateZ: -3 }, .1],
                    [{ scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, .1],
                    [{ scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, .1],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    [{ scaleX: 1, scaleY: 1, rotateZ: 0 }, .2]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [{ opacity: [1, 0] }]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [{ opacity: [0, 1] }]
                ]
            },
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55] }]
                ],
                reset: { transformPerspective: 0 }
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55 }]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45] }]
                ],
                reset: { transformPerspective: 0 }
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25 }]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [{ opacity: [.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90] }, .5],
                    [{ opacity: .8, rotateY: 10 }, .25],
                    [{ opacity: 1, rotateY: 0 }, .25]
                ],
                reset: { transformPerspective: 0 }
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [.9, 1], transformPerspective: [400, 400], rotateY: -10 }, .5],
                    [{ opacity: 0, rotateY: 90 }, .5]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90] }, .5],
                    [{ opacity: .8, rotateX: 10 }, .25],
                    [{ opacity: 1, rotateX: 0 }, .25]
                ],
                reset: { transformPerspective: 0 }
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [.9, 1], transformPerspective: [400, 400], rotateX: -15 }, .5],
                    [{ opacity: 0, rotateX: 90 }, .5]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0 }]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%" }
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 }]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
            },
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160] }, 1, { easing: "easeInOutSine" }]
                ]
            },
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [{ opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" }]
                ],
                reset: { scaleX: 1, scaleY: 1, rotateY: 0 }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0 }]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0 }]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, .625], scaleY: [1, .625], translateZ: 0 }]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: .5, scaleY: .5, translateZ: 0 }]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], scaleX: [1.05, .3], scaleY: [1.05, .3] }, .4],
                    [{ scaleX: .9, scaleY: .9, translateZ: 0 }, .2],
                    [{ scaleX: 1, scaleY: 1 }, .5]
                ]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [{ scaleX: .95, scaleY: .95 }, .35],
                    [{ scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, .35],
                    [{ opacity: [0, 1], scaleX: .3, scaleY: .3 }, .3]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], translateY: [-30, 1e3] }, .6, { easing: "easeOutCirc" }],
                    [{ translateY: 10 }, .2],
                    [{ translateY: 0 }, .2]
                ]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [
                    [{ translateY: 20 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateY: -1e3 }, .8]
                ],
                reset: { translateY: 0 }
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], translateY: [30, -1e3] }, .6, { easing: "easeOutCirc" }],
                    [{ translateY: -10 }, .2],
                    [{ translateY: 0 }, .2]
                ]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [
                    [{ translateY: -20 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateY: 1e3 }, .8]
                ],
                reset: { translateY: 0 }
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [{ opacity: [1, 0], translateX: [30, -1250] }, .6, { easing: "easeOutCirc" }],
                    [{ translateX: -10 }, .2],
                    [{ translateX: 0 }, .2]
                ]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [{ translateX: 30 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateX: -1250 }, .8]
                ],
                reset: { translateX: 0 }
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [{ opacity: [1, 0], translateX: [-30, 1250] }, .6, { easing: "easeOutCirc" }],
                    [{ translateX: 10 }, .2],
                    [{ translateX: 0 }, .2]
                ]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [{ translateX: -30 }, .2],
                    [{ opacity: [0, "easeInCirc", 1], translateX: 1250 }, .8]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [{ opacity: [1, 0], translateY: [0, 20], translateZ: 0 }]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [{ opacity: [0, 1], translateY: -20, translateZ: 0 }]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [{ opacity: [1, 0], translateY: [0, -20], translateZ: 0 }]
                ]
            },
            "transition.slideRightDownIn": {
                defaultDuration: 900,
                calls: [
                    [{ opacity: [1, 0], translateY: [0, -120], translateX: [0, 100] }]
                ]
            },
            "transition.slideLeftUpIn": {
                defaultDuration: 900,
                calls: [
                    [{ opacity: [1, 0], translateY: [0, 120], translateX: [0, -100] }]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [{ opacity: [0, 1], translateY: 20, translateZ: 0 }]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [
                    [{ opacity: [1, 0], translateX: [0, -20], translateZ: 0 }]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [{ opacity: [0, 1], translateX: -20, translateZ: 0 }]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [
                    [{ opacity: [1, 0], translateX: [0, 20], translateZ: 0 }]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [{ opacity: [0, 1], translateX: 20, translateZ: 0 }]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [1, 0], translateY: [0, 75], translateZ: 0 }]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [0, 1], translateY: -675, translateZ: 0 }]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [1, 0], translateY: [0, -675], translateZ: 0 }]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [0, 1], translateY: 75, translateZ: 0 }]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], translateX: [0, -275], translateZ: 0 }]
                ]
            },
            "transition.slideLeftBigInTop": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], translateX: [0, -275], translateY: [0, -80] }]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [{ opacity: [0, 1], translateX: -75, translateZ: 0 }]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], translateX: [0, 275], translateZ: 0 }]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [{ opacity: [0, 1], translateX: 75, translateZ: 0 }]
                ],
                reset: { translateX: 0 }
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180] }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180 }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180] }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180 }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180] }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180 }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180] }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180 }]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            }
        };
        for (var u in i.RegisterEffect.packagedEffects) i.RegisterEffect(u, i.RegisterEffect.packagedEffects[u]);
        i.RunSequence = function(t) {
            var a = s.extend(!0, [], t);
            a.length > 1 && (s.each(a.reverse(), function(t, e) {
                var r = a[t + 1];
                if (r) {
                    var n = e.o || e.options,
                        o = r.o || r.options,
                        l = n && n.sequenceQueue === !1 ? "begin" : "complete",
                        c = o && o[l],
                        u = {};
                    u[l] = function() {
                        var t = r.e || r.elements,
                            a = t.nodeType ? [t] : t;
                        c && c.call(a, a), i(e)
                    }, r.o ? r.o = s.extend({}, o, u) : r.options = s.extend({}, o, u)
                }
            }), a.reverse()), i(a[0])
        }
    }(window.jQuery || window.Zepto || window, window, document)
});
! function(i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function(i) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, o) {
            var s, n = this;
            n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(e), appendDots: i(e), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, t) { return i('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
        var t = 0;
        return e
    }(), e.prototype.activateADA = function() {
        var i = this;
        i.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (0 > t || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({ height: e }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(i) { i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function() { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() { s.disableTransition(), t.call() }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this,
            o = t.getNavTarget();
        null !== o && "object" == typeof o && o.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }))
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; s > i; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t, o = this;
        if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var s in e) {
                if (i < e[s]) { i = t; break }
                t = e[s]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {
        var e = this;
        e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function() { t.disableTransition(i), e.call() }, t.options.speed))
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() { e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay()) }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { var i = this; return i.currentSlide }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (i.options.infinite === !0)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (i.options.centerMode === !0) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s = this,
            n = 0;
        return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (i - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * t * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (i + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? i * s.slideWidth * -1 + s.slideOffset : i * t * -1 + n, s.options.variableWidth === !0 && (o = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), e = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, s.options.centerMode === !0 && (o = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), e = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) { var e = this; return e.options[i] }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (e.options.infinite === !1 ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); i > t;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, t, o, s = this; return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(e, n) { return n.offsetLeft - o + i(n).outerWidth() / 2 > -1 * s.swipeLeft ? (t = n, !1) : void 0 }), e = Math.abs(i(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        var t = this;
        t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e)
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) { i(this).attr({ role: "option", "aria-describedby": "slick-slide" + e.instanceUid + t }) }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(t) { i(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + e.instanceUid + t, id: "slick-slide" + e.instanceUid + t }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({ data: { message: e.options.rtl === !0 ? "next" : "previous" } }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({ data: { message: e.options.rtl === !0 ? "previous" : "next" } }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = document.createElement("img");
                o.onload = function() { e.animate({ opacity: 0 }, 100, function() { e.attr("src", t).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy").removeClass("slick-loading") }), r.$slider.trigger("lazyLoaded", [r, e, t]) }) }, o.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]) }, o.src = t
            })
        }
        var t, o, s, n, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(o))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var i = this;
        i.changeSlide({ data: { message: "next" } })
    }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(i) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var i = this;
        i.changeSlide({ data: { message: "previous" } })
    }, e.prototype.preventDefault = function(i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n = this,
            r = i("img[data-lazy]", n.$slider);
        r.length ? (t = r.first(), o = t.attr("data-lazy"), s = document.createElement("img"), s.onload = function() { t.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), n.options.adaptiveHeight === !0 && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, t, o]), n.progressiveLazyLoad() }, s.onerror = function() { 3 > e ? setTimeout(function() { n.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, o]), n.progressiveLazyLoad()) }, s.src = o) : n.$slider.trigger("allImagesLoaded", [n])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, t = n[e].breakpoint, n.hasOwnProperty(e)) {
                    for (; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) { return s.options.mobileFirst ? i - e : e - i })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) { var o = this; return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || 0 > i || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit()) }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() {
        var i = this;
        i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) { e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) { r.options[i] = e });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0 ? (e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; o > e; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { i(this).attr("id", "") })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(s), void t.asNavFor(s)) : void t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        return e = e || !1, a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i || a.slideCount <= a.options.slidesToShow ? void 0 : (e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (0 > i || i > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (0 > i || i > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = 0 > o ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function() { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 ? a.animateSlide(d, function() { a.postSlide(s) }) : a.postSlide(s))))
    }, e.prototype.startLoad = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) { var e, t, o, s, n, r = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!r.dragging || n && 1 !== n.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), t = r.swipeDirection(), "vertical" !== t ? (void 0 !== i.originalEvent && r.touchObject.swipeLength > 4 && i.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + o * s : r.swipeLeft = e + o * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = e + o * s), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0) }, e.prototype.swipeStart = function(i) { var e, t = this; return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0)) }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i, e = this;
        i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; r > i; i++)
            if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
        return o
    }
});
! function(t) {
    "use strict";
    var s = function(s, e) { this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build() };
    s.prototype = {
        constructor: s,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function() {
            var s = this;
            if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var e = this.stringsElement.children();
                t.each(e, function(e, i) { s.strings.push(t(i).html()) })
            }
            this.init()
        },
        typewrite: function(t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    var e = 0,
                        r = t.substr(s);
                    if ("^" === r.charAt(0)) { var o = 1; /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o) }
                    if ("html" === i.contentType) {
                        var n = t.substr(s).charAt(0);
                        if ("<" === n || "&" === n) {
                            var a = "",
                                h = "";
                            for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
                            s++, a += h
                        }
                    }
                    i.timeout = setTimeout(function() {
                        if (s === t.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function() { i.backspace(t, s) }, i.backDelay)
                        } else {
                            0 === s && i.options.preStringTyped(i.arrayPos);
                            var e = t.substr(0, s + 1);
                            i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function(t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.backSpeed,
                    i = this;
                i.timeout = setTimeout(function() {
                    if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var e = "";
                            "<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(0 > s)););
                        s--, e += "<"
                    }
                    var r = t.substr(0, s);
                    i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
                }, e)
            }
        },
        shuffleArray: function(t) {
            var s, e, i = t.length;
            if (i)
                for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
            return t
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout), this.el.attr("id"), this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("typed"),
                o = "object" == typeof e && e;
            r && r.reset(), i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]()
        })
    }, t.fn.typed.defaults = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, shuffle: !1, backDelay: 500, loop: !1, loopCount: !1, showCursor: !0, cursorChar: "|", attr: null, contentType: "html", callback: function() {}, preStringTyped: function() {}, onStringTyped: function() {}, resetCallback: function() {} }
}(window.jQuery);


var theLanguage = $('html').attr('lang');

if (window.location.href.indexOf("work") != -1) {

    if ($('#geniNav li').hasClass('menu-item-object-custom')) {
        $('#menu-item-26').addClass('current-menu-item');
        console.log('This is work');
    }
}


/*=============================================
=        SCRIPT FOR BROWSER VERSION           =
=============================================*/


var browser = '';
var browserVersion = 0;

if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Opera';
} else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    browser = 'MSIE';
} else if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Netscape';
} else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Chrome';
} else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Safari';
    /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
    browserVersion = new Number(RegExp.$1);
} else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'Firefox';
}
if (browserVersion === 0) {
    browserVersion = parseFloat(new Number(RegExp.$1));
}


/* SCRIPT TO REMOVE VIDEO CONTAINER FOR SAFARI 6.2 AND BELOW */

if (browser == 'Safari' && browserVersion < '6.2') {
    $('#videoplayer').hide();
    $('.video-close').hide();
}

/* SCRIPT FOR OPERA UPDATE CHECK */

if (browser == 'Opera' && browserVersion < '38') {

    $('#outdated-browser').show();

}

/* SCRIPT FOR CHROME UPDATE CHECK */

if (browser == 'Safari' && browserVersion < '8') {

    $('#outdated-browser').show();

}

/* SCRIPT FOR IE UPDATE CHECK */

if (browser == 'MSIE' && browserVersion <= '9') {

    $('#outdated-browser').show();

}

/* SCRIPT FOR FIREFOX UPDATE CHECK */

if (browser == 'Firefox' && browserVersion < '45') {
    $('#outdated-browser').show();
}

/* SCRIPT FOR CHROME UPDATE CHECK */

if (browser == 'Chrome' && browserVersion <= '50') {
    $('#outdated-browser').show();

}

/* SCRIPT TO CLOSE OUTDATED BROWSER ALERT USING CLOSE CROSS */

$('#btnCloseUpdateBrowser').click(function() {
    $('#outdated-browser').hide();
});


/* SCRIPT FOR SLIDE IN AND OUT OF BROWSER UPDATE WARNING */

setTimeout(function() {

    $('#outdated-browser').addClass('outdated-show ');

}, 1000);

setTimeout(function() {

    $('#outdated-browser').removeClass('outdated-show ');

}, 5000);



/*---------------------------------------------*/
/*     SCRIPT TO FIND PATHNAME & PAGE          */
/*---------------------------------------------*/

var pathname = window.location.pathname; // Returns path only
var url = window.location.href; // Returns full URL



function info() {
    console.log(url);
    console.log(pathname);
}

info();


/*---------------------------------------------*/
/*     SCRIPT FOR SMOOTH SCROLL SIDE MENU      */
/*---------------------------------------------*/


function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}

smoothScroll();


/*--------------------------------------------------*/
/*     SCRIPT FOR MOBILE MENU ASIDE CONTAINER       */
/*--------------------------------------------------*/

function mobileMenu() {
    $('#menu-icon').click(function() {
        $('.aside-container').toggle("slide", { direction: 'right' }, 800);
        $('.aside-container').css('display', 'block');

    });


    $(window).resize(function() {

        var w = $(this).width();
        if (w > 767) {
            console.log('larger than');
            $('.aside-container').fadeOut();
            $('.page-content').css('display', 'block');
            $('.js-toggle-menu').removeClass('open');
        }

    });
}

mobileMenu();

/*-----------------------------------------*/
/*     SCRIPT FOR MOBILE MENU TOGGLE       */
/*-----------------------------------------*/

function toggleMobileMenu() {
    $('.js-toggle-menu').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.page-content').fadeToggle(1000);
    });
}

toggleMobileMenu();


/*---------------------------------------------------*/
/*     SCRIPT FOR LANGUAGE ACTIVE COLOR CHANGE       */
/*---------------------------------------------------*/

function activeLang() {
    if ($('.lang-item-4').hasClass('current-lang')) {
        console.log('This is current lang');
        $('.lang-item-4 a').addClass('current-lang');
    } else {
        $('.lang-item-7 a').css('color', '#f35c05');
    }
}

activeLang();



/*-----------------------------------------*/
/*     SCRIPT FOR VIDEO CONTAINER TOGGLE   */
/*-----------------------------------------*/

function videoToggle() {
    $('.js-toggle-video').click(function(e) {
        e.preventDefault();

        if ($(this).toggleClass('open').hasClass('open')) {
            $('.video-container').velocity('transition.slideUpBigOut');
            // $('.control').fadeOut('1000');


            setTimeout(function() {
                $('#heroCarousel').addClass('index');
            }, 500);


        } else {
            $('.video-container').velocity('transition.slideDownBigIn');
            // $('.control').fadeIn('1000');

            $('#heroCarousel').removeClass('index');;

        }

        $('.section-one').toggleClass('videoplayer-top');

        // $('#mobile-content').toggleClass('videoplayer-top');



    });
}

videoToggle();


/*-----------------------------------------*/
/*     SCRIPT TO PAUSE VIDEO ON HIDE       */
/*-----------------------------------------*/


var iframe = $('#videoplayer')[0];
var player = $f(iframe);

function videoPause() {
    $('.js-toggle-video').click(function() {
        player.api('pause');
    });
}

videoPause();


/*---------------------------------------------*/
/*     SCRIPT TO FADE VIDEO OUT ON END         */
/*---------------------------------------------*/

function videoFadeEnd() {
    $('#videoplayer').bind('ended', function() {
        $(this).parent().velocity('transition.slideUpBigOut');
        $('.js-toggle-video').toggleClass('open');
        $('#section-one').toggleClass('videoplayer-top');
    });
}

videoFadeEnd();


/*----------------------------------------------------*/
/*     SCRIPT FOR FOR HIDING CAROUSEL INDICATORS      */
/*----------------------------------------------------*/

// $(function() {

//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 210) {
//             $('.carousel-indicators').fadeOut();
//         } else {
//             $('.carousel-indicators').fadeIn();
//         }
//     });
// });

// $(document).ready(function(e) {
//     $(".carousel-indicators").click(function() {
//         $(".carousel").carousel('prev');
//     });
//     $(".left").click(function() {
//         $(".carousel").carousel('prev');
//     });
//     $(".right").click(function() {
//         $(".carousel").carousel('next');
//     });
// });

/*------------------------------*/
/*     SCRIPT FOR OFFSETTING    */
/*------------------------------*/

$(function() {

    var topPane = $('.hero-scroll').position();
    var bottomPane = $('.section-one').position();
    var scrolling = false;

    function parallax() {
        if ($(this).scrollTop() >= 280) {
            var st = $(this).scrollTop();

            $('.hero-scroll').css({ top: Math.ceil(topPane.top + st * 0.4 - 111) });
            $('.section-one').css({ top: Math.ceil(bottomPane.top + st * 0.5) });
        } else {
            $('.hero-scroll').css({ top: 0 });
        }
    }

    $(window).scroll(function() {
        scrolling = true;
    });

    setInterval(function() {
        if (scrolling) {
            scrolling = false;
            parallax();
        }
    }, 1);

});


/*------------------------------------------*/
/*    SCRIPT TO PREVENT JITTER ON SCROLL    */
/*------------------------------------------*/


/* ANOTHER SCRIPT FOR BROWSER CHECK */

var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
if ((is_chrome) && (is_safari)) { is_safari = false; }
if ((is_chrome) && (is_opera)) { is_chrome = false; }


/*------------------------------------------*/
/*  SCRIPT TO NOODLES VIDEO PAUSE ON CLOSE  */
/*------------------------------------------*/

/* VIMEO HEADER BEING CALLED IN HEADER */

var iframeNoodles = $('#noodles-video')[0];
var playerNoodles = $f(iframeNoodles);

$('.close').click(function() {
    playerNoodles.api('pause');
});

$('.modal').on('hidden.bs.modal', function() {
    playerNoodles.api('pause');
})


/*---------------------------------------------*/
/*     SCRIPT  FOR ACTIVE MENU ON WORK PAGE    */
/*---------------------------------------------*/


$(document).ready(function() {

    $('.work-buttons button').click(function() {
        $('button').removeClass("active");
        $(this).addClass("active");
    });

});

// $('#noodles-modal').modal({
//     show:true,
//     backdrop:true,
//     keyboard:true
// })


/*--------------------------------------------*/
/*     SCRIPT FOR ACTIVE MENU ON WORK PAGE    */
/*--------------------------------------------*/

$(document).ready(function() {

    $('.team-buttons button').click(function() {
        $('button').removeClass("active");
        $(this).addClass("active");
    });

});


/*-----------------------------------------------*/
/*     SCRIPT FOR SECONDARY MENU ON WORK PAGE    */
/*-----------------------------------------------*/



$(window).load(function() {
    $grid = $('.grid');
    $grid.isotope();

    //$('#packaging,#artwork,#branding,#webDesign,#retail,#style,#advertising, #all-button').click(function() {

    $('.work-buttons button').click(function() {

        var id = $(this).attr('id');
        var className = id.replace("-button", "");

        if (className == 'all') {
            $grid.isotope({
                itemSelector: '.col-md-4',
                percentPosition: true,
                filter: '*',
                layoutMode: 'fitRows',
                masonry: {
                    columnWidth: 50
                }

            });
            return false;
        }
        $grid.isotope({
            filter: '.' + className
        });
    });
});


$(function() {
    var $container = $('#Portfolio');

    $container.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
    });

    $('#filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({ filter: filterValue });
    });
});

/*-----------------------------------------------*/
/*     SCRIPT FOR SECONDARY MENU ON TEAM PAGE    */
/*-----------------------------------------------*/


var grid = $('.grid');

$(window).load(function() {

    $grid.isotope();

    $('.team-buttons button').click(function() {

        var id = $(this).attr('id');
        var className = id.replace("-button", "");

        if (className == 'all') {
            $grid.isotope({
                itemSelector: '.col-md-2',
                percentPosition: true,
                filter: '*',
                masonry: {
                    columnWidth: '.col-md-2',
                    isFitWidth: true
                }
            });
            return false;
        }
        $grid.isotope({
            filter: '.' + className
        });
    });
});



/*-----------------------------------------------*/
/*    SCENE FOR ANIMATION ON HOME PAGE           */
/*-----------------------------------------------*/


if ($('#trigger-homeTitle').length > 0) {


    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-homeTitle",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);


    scene.on("enter", function(event) {

        $('.text-row h1').addClass('show-title');

        setTimeout(function() {
            $('.text-row-split').addClass('show-content');
        }, 500);

        /*=======================================================================
        =            SCRIPT FOR CHANGING TYPE ON HOMEPAGE MAIN TITLE            =
        =======================================================================*/


        if (theLanguage == 'en-GB') {

            function remove_en() {

                $('.typed-cursor').hide();
                $('.textChange').css('marginRight', '10px');

            }

            setTimeout(function() {
                remove_en();
            }, 10000);
        }



        if (theLanguage == 'en-GB') {

            $(function() {

                $(".textChange").typed({
                    strings: ["packaging", "branding", "web", "research", "creative"],
                    typeSpeed: 100,
                    backDelay: 750,
                });

            });

        }

        if (theLanguage == 'de-DE') {

            function remove_de() {

                $('.typed-cursor').hide();
                // $('.textChange').css('marginRight', '10px');

            }

            setTimeout(function() {
                remove_de();
            }, 10000);


        }

        if (theLanguage == 'de-DE') {

            $(function() {

                $(".textChange").typed({
                    strings: ["Verpackungs", "Branding", "Web", "Forschungs", "Kreativ"],
                    typeSpeed: 100,
                    backDelay: 750,
                });

            });


        }


    });

    /* SCENE FOR SECTION LEFT SIDE BOTTOM IMAGES  */

    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger-oneLeft",
            triggerHook: 'onEnter',
            offset: 100
        })
        .addTo(controller);

    scene.on("enter", function(event) {

        $('.leftSide_Two').addClass('animate-img');

        console.log('this is working');

    });

    /*    SCENE FOR SECTION THREE 1ST ROW IMAGES   */


    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger-threeImgOne",
            triggerHook: 'onEnter',
            offset: 100
        })
        .addTo(controller);

    scene.on("enter", function(event) {

        $('#leftSide-One').addClass('animate-img');

        setTimeout(function() {
            $('#rightSide-One').addClass('animate-img');
        }, 500);

        setTimeout(function() {
            $('#rightSide-Two').addClass('animate-img');
        }, 1000);

    });

}


/*-----------------------------------------------*/
/*    SCENE FOR ANIMATION ON ABOUT PAGE           */
/*-----------------------------------------------*/

if ($('#trigger-aboutTitle').length > 0) {

    var controller = new ScrollMagic.Controller();


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-aboutTitle",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {

        $('.about-title').addClass('show-title');

        /*=======================================================================
        =            SCRIPT FOR CHANGING TYPE ON ABOUT TITLE                      =
          =======================================================================*/

        if (theLanguage == 'en-GB') {

            $(function() {

                $(".textChangeAbout").typed({
                    strings: ["innovative.", "creative.", "passionate.", "precise.", "efficient.", "experts.", "<span id='test11'>Tjarks &amp; Tjarks.</span>"],
                    typeSpeed: 100,
                    backDelay: 1350,
                });

            });

        }

        if (theLanguage == 'de-DE') {

            $(".textChangeAbout").typed({
                strings: ["innovativ", "kreativ", "leidenschaftlich", "präzise", "effizient", "professionell", "Experten", "Tjarks & Tjarks"],
                typeSpeed: 100,
                backDelay: 1350,
                loop: false,
            });
        }

        //SCRIPT FOR TIMING OUT HIDE OF CURSOR

        setTimeout(function() {

            $('.typed-cursor').hide();

        }, 26000);


    });
    scene.reverse(false);


    /*    SCENE FOR 1ST CONTENT FADE IN ON ABOUT PAGE AS WELL AS COUNT DOWN START   */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-aboutContent",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {

        $('.about-content').addClass('show-content');

        setTimeout(function() {
            $('.counter').addClass('show-content');
        }, 500);


        /*=============================================
        =    SCRIPT FOR COUNTER ON ABOUT PAGE          =
        =============================================*/


        $('.counting-1').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        $('.counting-2').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));

                },
            });
        });

        $('.counting-3').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                },
                complete: function() {
                    $('.counting-3').append('<span class="counter-plus">+</span>');
                }
            });
        });

        $('.counting-4').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2500,
                easing: 'easeOutExpo',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                },
                complete: function() {
                    $('.counting-4').append('<span class="counter-plus">+</span>');
                }
            });
        });
    });
    scene.reverse(false);


    /*    SCENE FOR 2ND CONTENT FADE IN ON ABOUT PAGE      */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-mainContent",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.sliderContent').addClass('show-content');
    });


    /*    SCENE FOR 3RD CONTENT FADE IN ON ABOUT PAGE WITH TITLE     */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-mainContent",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.senior-titleThree').addClass('show-title');
        setTimeout(function() {
            $('.senior-contentThree').addClass('show-content');
        }, 500);
    });

    /*    SCENE FOR IMAGE GROUP   */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-imgOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.left-container').addClass('animate-img');

        setTimeout(function() {
            $('.right-containerOne').addClass('animate-img');
        }, 500);

        setTimeout(function() {
            $('.right-containerTwo').addClass('animate-img');
        }, 1000);

    });

    /*    SCENE FOR HEADSHOT IMAGES 1ST ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotOne').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotTwo').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 2ND ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotTwo",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotFour').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotThree').addClass('animate-img');
        }, 500);
    });



    /*    SCENE FOR HEADSHOT IMAGES 3RD ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotThree",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotSix').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotFive').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 4TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotFour",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotEight').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotSeven').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 4TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotFour",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotEight').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotSeven').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 5TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotFive",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotTen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotNine').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 6TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotSix",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotTwelve').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotEleven').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 7TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotSeven",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotFourteen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotThirteen').addClass('animate-img');
        }, 500);
    });


    /*    SCENE FOR HEADSHOT IMAGES 8TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotEight",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotSixteen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotFifteen').addClass('animate-img');
        }, 500);
    });

    /*    SCENE FOR HEADSHOT IMAGES 9TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotNine",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotSeventeen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotEighteen').addClass('animate-img');
        }, 500);
    });

    /*    SCENE FOR HEADSHOT IMAGES 9TH ROW  */


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-headshotTen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('#teamShotNineteen').addClass('animate-img');

        setTimeout(function() {
            $('#teamShotTwenty').addClass('animate-img');
        }, 500);
    });

}



/*-----------------------------------------------*/
/*    SCENE FOR ANIMATION ON SERVICES PAGE       */
/*-----------------------------------------------*/



if ($('#trigger-servicesImgOne').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-servicesImgOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function(event) {
        $('.servicesOne').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwo').addClass('animate-img');
        }, 500);
    });

}

if ($('#trigger-serviceImgThree').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger-serviceImgThree",
            triggerHook: 'onEnter',
            offset: 100
        })
        .addTo(controller);

    scene.on("enter", function() {

        $('.servicesFour').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThree').addClass('animate-img');
        }, 500);

    });

}

if ($('#trigger-serviceImgFive').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgFive",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesFive').addClass('animate-img');

        setTimeout(function() {
            $('.servicesSix').addClass('animate-img');
        }, 500);
    });
}

if ($('#trigger-serviceImgSeven').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgSeven",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesEight').addClass('animate-img');

        setTimeout(function() {
            $('.servicesSeven').addClass('animate-img');
        }, 500);
    });
}

if ($('#trigger-serviceImgNine').length > 0) {


    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgNine",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesNine').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTen').addClass('animate-img');
        }, 500);
    });
}




if ($('#trigger-serviceImgEleven').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '#trigger-serviceImgEleven',
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {

        $('.servicesEleven').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwelve').addClass('animate-img');
        }, 500);

    });


}


if ($('#trigger-serviceImgThirteen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgThirteen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesThirteen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesFourteen').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgFifteen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgFifteen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesFifteen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesSixteen').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgSeventeen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgSeventeen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesSeventeen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesEighteen').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgNineTeen').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgNineTeen",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesNineteen').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwenty').addClass('animate-img');
        }, 500);
    });
}



if ($('#trigger-serviceImgTwentyOne').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyOne').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTweentyTwo').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentyThree').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyThree",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyThree').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwentyFour').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentyFive').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyFive",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyFive').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTweentySix').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentySeven').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentySeven",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentySeven').addClass('animate-img');

        setTimeout(function() {
            $('.servicesTwentyEight').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgTwentyNine').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgTwentyNine",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesTwentyNine').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThirty').addClass('animate-img');
        }, 500);
    });
}

if ($('#trigger-serviceImgThirtyOne').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgThirtyOne",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesThirtyOne').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThirtyTwo').addClass('animate-img');
        }, 500);
    });
}


if ($('#trigger-serviceImgThirtyThree').length > 0) {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-serviceImgThirtyThree",
        triggerHook: 'onEnter',
        offset: 100
    })

    .addTo(controller);

    scene.on("enter", function() {
        $('.servicesThirtyThree').addClass('animate-img');

        setTimeout(function() {
            $('.servicesThirtyFour').addClass('animate-img');
        }, 500);
    });
}

/*=====================================================
=            SCRIPT FOR FOR FOOTER FADE IN            =
=====================================================*/


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#footer",
    triggerHook: 'onEnter',
    offset: 100
})

.addTo(controller);

scene.on("enter", function() {

    $('#main-footer').addClass('show-footer');

});

/*=====================================================================
=            SCRIPT TO HIDE CAREER LINK IF ON CAREERS PAGE            =
=====================================================================*/


if ($('.career-footer').length > 0) {

    $('.careerContainer').css('display', 'none');
}

/*=====================================================
=            SCRIPT TO SHOW AVAILABLE JOBS            =
=====================================================*/


$('#roleOne').click(function() {
    $('.role-one').show();
    $('#roleOne').addClass('js-active-jobs');
    $('#roleTwo').removeClass('js-active-jobs');
    $('#roleThree').removeClass('js-active-jobs');
    $('#roleFour').removeClass('js-active-jobs');
    $('#roleFive').removeClass('js-active-jobs');
    $('.role-two').hide();
    $('.role-three').hide();
    $('.role-four').hide();
    $('.role-five').hide();

});

$('#roleTwo').click(function() {
    $('.role-two').show();
    $('#roleOne').removeClass('js-active-jobs');
    $('#roleTwo').addClass('js-active-jobs');
    $('#roleThree').removeClass('js-active-jobs');
    $('#roleFour').removeClass('js-active-jobs');
    $('#roleFive').removeClass('js-active-jobs');
    $('.role-one').hide();
    $('.role-three').hide();
    $('.role-four').hide();
    $('.role-five').hide();
});

$('#roleThree').click(function() {
    $('.role-two').hide();
    $('.role-one').hide();
    $('.role-three').show();
    $('.role-four').hide();
    $('.role-five').hide();
    $('#roleOne').removeClass('js-active-jobs');
    $('#roleTwo').removeClass('js-active-jobs');
    $('#roleThree').addClass('js-active-jobs');
    $('#roleFour').removeClass('js-active-jobs');
    $('#roleFive').removeClass('js-active-jobs');

});

$('#roleFour').click(function() {
    $('.role-two').hide();
    $('.role-one').hide();
    $('.role-three').hide();
    $('.role-four').show();
    $('.role-five').hide();
    $('#roleOne').removeClass('js-active-jobs');
    $('#roleTwo').removeClass('js-active-jobs');
    $('#roleThree').removeClass('js-active-jobs');
    $('#roleFour').addClass('js-active-jobs');
    $('#roleFive').removeClass('js-active-jobs');

});

$('#roleFive').click(function() {
    $('.role-two').hide();
    $('.role-one').hide();
    $('.role-three').hide();
    $('.role-four').hide();
    $('.role-five').show();
    $('#roleOne').removeClass('js-active-jobs');
    $('#roleTwo').removeClass('js-active-jobs');
    $('#roleThree').removeClass('js-active-jobs');
    $('#roleFour').removeClass('js-active-jobs');
    $('#roleFive').addClass('js-active-jobs');

});

/*===================================================================
=            SCRIPT FOR ABOUT PAGE MANAGER IMAGE SCROLL             =
===================================================================*/

$(document).ready(function() {

    $('.seniorSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.seniorSliderContent',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        pauseOnHover: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='http://geni-packaging.com/wordpress/wp-content/themes/tjarksandtjarks/assets/img/back_white.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='http://geni-packaging.com/wordpress/wp-content/themes/tjarksandtjarks/assets/img/forward_white.png'>",
        responsive: [{
            breakpoint: 997,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: 0,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: false,
            }
        }]

    });

    $('.seniorSliderContent').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.seniorSlider'
    });

});

/*=============================================
=   SCRIPT FOR FOOTER ADDRESS PLUS ANIMATION   =
=============================================*/



$('#uk-office, #js-officeOne').click(function(e) {
    e.preventDefault();

    $('.js-toggle-addressOne').toggleClass('open');

    if ($('.js-toggle-addressTwo').hasClass('open')) {
        $('.js-toggle-addressTwo').toggleClass('open');
    }

});



$('#us-office, #js-officeTwo').click(function(e) {
    e.preventDefault();
    $('.js-toggle-addressTwo').toggleClass('open');

    if ($('.js-toggle-addressOne').hasClass('open')) {
        $('.js-toggle-addressOne').toggleClass('open');
    }
});


/*=============================================
=   SCRIPT FOR HOMEPAGE ALDI IMAGE ROTATION   =
=============================================*/


var images = new Array('http://geni-packaging.com/wordpress/wp-content/uploads/2016/12/25-Year-Aldi-Nord-Design-Agency-Tjarks-and-Tjarks-Design-2.jpg', 'http://geni-packaging.com/wordpress/wp-content/uploads/2016/12/25-Year-Aldi-Design-Agency-Tjarks-and-Tjarks-Design-Light.jpg');
var index = 1;

function rotateImage() {
    $('#aldiImage').fadeOut(1000, function() {
        $(this).attr('src', images[index]);

        $(this).fadeIn(1000, function() {

            if (index == images.length - 1) {
                index = 0;
            } else {
                index++;
            }
        });
    });
}

$(document).ready(function() {
    setInterval(rotateImage, 4500);
});

/*=============================================
=   SCENE FOR ANIMATION ON 25 YEARS ALDI PAGE
=============================================*/

// var scene = new ScrollMagic.Scene({
//         triggerElement: "#trigger-aldiCounter",
//         triggerHook: 'onEnter',
//         offset: 100
//     })

//     .addTo(controller);

//     scene.on("enter", function(event) {

//         $('.about-content').addClass('show-content');

//         setTimeout(function() {
//             $('.counter').addClass('show-content');
//         }, 500);

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-aldiYears",
    triggerHook: 'onEnter',
    offset: 100
})

.addTo(controller);

scene.on("enter", function(event) {


    $('.counter').addClass('show-content');



    /*=============================================
    =    SCRIPT FOR COUNTER ON ABOUT PAGE          =
    =============================================*/


    $('.counting-aldi-1').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'easeOutExpo',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.counting-aldi-2').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'easeOutExpo',
            step: function(now) {
                $(this).text(Math.ceil(now));

            },
        });
    });

    $('.counting-aldi-3').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'easeOutExpo',
            step: function(now) {
                $(this).text(Math.ceil(now));
            },
            complete: function() {
                $('.counting-3').append('<span class="counter-plus">+</span>');
            }
        });
    });

});
scene.reverse(false);