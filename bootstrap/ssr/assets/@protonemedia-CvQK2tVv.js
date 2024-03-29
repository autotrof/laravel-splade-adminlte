import ne from "axios";
import { v as vueExports } from "./vue-S2ksly5I.js";
function Ds(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length; ++r < n && t(e2[r], r, e2) !== false; )
    ;
  return e2;
}
function Ns(e2) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e2 ? o : ++i];
      if (r(s[l], l, s) === false)
        break;
    }
    return t;
  };
}
var Vs = Ns();
const Hs = Vs;
function Us(e2, t) {
  for (var r = -1, n = Array(e2); ++r < e2; )
    n[r] = t(r);
  return n;
}
var Ws = typeof global == "object" && global && global.Object === Object && global;
const li = Ws;
var zs = typeof self == "object" && self && self.Object === Object && self, Gs = li || zs || Function("return this")();
const ve = Gs;
var Xs = ve.Symbol;
const ke = Xs;
var ui = Object.prototype, Ks = ui.hasOwnProperty, Js = ui.toString, ft = ke ? ke.toStringTag : void 0;
function Qs(e2) {
  var t = Ks.call(e2, ft), r = e2[ft];
  try {
    e2[ft] = void 0;
    var n = true;
  } catch {
  }
  var i = Js.call(e2);
  return n && (t ? e2[ft] = r : delete e2[ft]), i;
}
var Ys = Object.prototype, Zs = Ys.toString;
function ea(e2) {
  return Zs.call(e2);
}
var ta = "[object Null]", ra = "[object Undefined]", $n = ke ? ke.toStringTag : void 0;
function Be(e2) {
  return e2 == null ? e2 === void 0 ? ra : ta : $n && $n in Object(e2) ? Qs(e2) : ea(e2);
}
function Le(e2) {
  return e2 != null && typeof e2 == "object";
}
var na = "[object Arguments]";
function En(e2) {
  return Le(e2) && Be(e2) == na;
}
var ci = Object.prototype, ia = ci.hasOwnProperty, sa = ci.propertyIsEnumerable, aa = En(/* @__PURE__ */ function() {
  return arguments;
}()) ? En : function(e2) {
  return Le(e2) && ia.call(e2, "callee") && !sa.call(e2, "callee");
};
const di = aa;
var oa = Array.isArray;
const M = oa;
function la() {
  return false;
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = fi && typeof module == "object" && module && !module.nodeType && module, ua = Tn && Tn.exports === fi, xn = ua ? ve.Buffer : void 0, ca = xn ? xn.isBuffer : void 0, da = ca || la;
const yr = da;
var fa = 9007199254740991, pa = /^(?:0|[1-9]\d*)$/;
function Rr(e2, t) {
  var r = typeof e2;
  return t = t ?? fa, !!t && (r == "number" || r != "symbol" && pa.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t;
}
var ha = 9007199254740991;
function Br(e2) {
  return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= ha;
}
var ma = "[object Arguments]", va = "[object Array]", ga = "[object Boolean]", ya = "[object Date]", ba = "[object Error]", wa = "[object Function]", Sa = "[object Map]", Oa = "[object Number]", $a = "[object Object]", Ea = "[object RegExp]", Ta = "[object Set]", xa = "[object String]", _a = "[object WeakMap]", Ia = "[object ArrayBuffer]", Aa = "[object DataView]", Pa = "[object Float32Array]", qa = "[object Float64Array]", Ca = "[object Int8Array]", Fa = "[object Int16Array]", ka = "[object Int32Array]", La = "[object Uint8Array]", Ra = "[object Uint8ClampedArray]", Ba = "[object Uint16Array]", ja = "[object Uint32Array]", L = {};
L[Pa] = L[qa] = L[Ca] = L[Fa] = L[ka] = L[La] = L[Ra] = L[Ba] = L[ja] = true;
L[ma] = L[va] = L[Ia] = L[ga] = L[Aa] = L[ya] = L[ba] = L[wa] = L[Sa] = L[Oa] = L[$a] = L[Ea] = L[Ta] = L[xa] = L[_a] = false;
function Ma(e2) {
  return Le(e2) && Br(e2.length) && !!L[Be(e2)];
}
function Da(e2) {
  return function(t) {
    return e2(t);
  };
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, gt = pi && typeof module == "object" && module && !module.nodeType && module, Na = gt && gt.exports === pi, lr = Na && li.process, Va = function() {
  try {
    var e2 = gt && gt.require && gt.require("util").types;
    return e2 || lr && lr.binding && lr.binding("util");
  } catch {
  }
}();
const _n = Va;
var In = _n && _n.isTypedArray, Ha = In ? Da(In) : Ma;
const hi = Ha;
var Ua = Object.prototype, Wa = Ua.hasOwnProperty;
function za(e2, t) {
  var r = M(e2), n = !r && di(e2), i = !r && !n && yr(e2), s = !r && !n && !i && hi(e2), a = r || n || i || s, o = a ? Us(e2.length, String) : [], l = o.length;
  for (var u in e2)
    (t || Wa.call(e2, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rr(u, l))) && o.push(u);
  return o;
}
var Ga = Object.prototype;
function Xa(e2) {
  var t = e2 && e2.constructor, r = typeof t == "function" && t.prototype || Ga;
  return e2 === r;
}
function Ka(e2, t) {
  return function(r) {
    return e2(t(r));
  };
}
var Ja = Ka(Object.keys, Object);
const Qa = Ja;
var Ya = Object.prototype, Za = Ya.hasOwnProperty;
function eo(e2) {
  if (!Xa(e2))
    return Qa(e2);
  var t = [];
  for (var r in Object(e2))
    Za.call(e2, r) && r != "constructor" && t.push(r);
  return t;
}
function J(e2) {
  var t = typeof e2;
  return e2 != null && (t == "object" || t == "function");
}
var to = "[object AsyncFunction]", ro = "[object Function]", no = "[object GeneratorFunction]", io = "[object Proxy]";
function mi(e2) {
  if (!J(e2))
    return false;
  var t = Be(e2);
  return t == ro || t == no || t == to || t == io;
}
function Ut(e2) {
  return e2 != null && Br(e2.length) && !mi(e2);
}
function Wt(e2) {
  return Ut(e2) ? za(e2) : eo(e2);
}
function jr(e2, t) {
  return e2 && Hs(e2, t, Wt);
}
function so(e2, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ut(r))
      return e2(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== false; )
      ;
    return r;
  };
}
var ao = so(jr);
const Mr = ao;
function vi(e2) {
  return e2;
}
function gi(e2) {
  return typeof e2 == "function" ? e2 : vi;
}
function oo(e2, t) {
  var r = M(e2) ? Ds : Mr;
  return r(e2, gi(t));
}
function te(e2, t) {
  return e2 && jr(e2, gi(t));
}
var lo = Array.prototype, uo = lo.reverse;
function co(e2) {
  return e2 == null ? e2 : uo.call(e2);
}
class yi {
  constructor(t) {
    this.id = t, this.events = {};
  }
  on(t, r) {
    this.events[t] || (this.events[t] = []), this.events[t].push(r);
  }
  off(t, r) {
    this.events[t] && (this.events[t] = this.events[t].filter((n) => n !== r));
  }
  emit(t, r) {
    this.events[t] && this.events[t].forEach((n) => {
      n(r);
    });
  }
}
const Mt = vueExports.ref(0), ie = vueExports.ref(1), R = vueExports.ref({}), ae = vueExports.ref(0), zt = vueExports.ref({}), tt = {}, $e = typeof window > "u";
function fo(e2, t, r) {
  $e || window.addEventListener("popstate", po.bind(this)), Object.keys(t).length > 0 && Mt.value++, tt[ie.value] = new yi(ie.value), Hr(r), Gt(r.head), Ur(e2);
  const n = $e ? "" : location.href, i = Dr(
    n,
    r.head,
    e2,
    t,
    {},
    ie.value,
    Mt.value,
    r.persistentLayout
  );
  bi(i);
}
function po(e2) {
  e2.state && (R.value = e2.state, ae.value = 0, zt.value = {}, Gr.value = {}, Nr.value = R.value.persistentLayoutKey, Gt(R.value.head), Ur(R.value.html, R.value.rememberedState.scrollY), ye("history:popped-state", R.value.url));
}
function Dr(e2, t, r, n, i, s, a, o) {
  const l = {
    url: e2,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: a,
    persistentLayoutKey: o
  };
  return R.value = l, l;
}
function ho(e2) {
  $e || (window.history.pushState(e2, "", e2.url), ye("history:pushed-state", { url: e2.url }));
}
function mo(e2) {
  const t = Dr(
    e2,
    JSON.parse(JSON.stringify(R.value.head)),
    R.value.html,
    JSON.parse(JSON.stringify(R.value.dynamics)),
    { ...R.value.rememberedState },
    R.value.pageVisitId,
    R.value.dynamicVisitId,
    R.value.persistentLayoutKey
  );
  $e || (window.history.replaceState(t, "", t.url), ye("history:replaced-state", { url: t.url }));
}
function bi(e2) {
  $e || (window.history.replaceState(e2, "", e2.url), ye("history:replaced-state", { url: e2.url }));
}
const ur = vueExports.ref(0), Nr = vueExports.ref(null);
function vo(e2) {
  const t = URL.createObjectURL(e2.data), r = e2.headers["content-disposition"].split("filename=")[1], n = document.createElement("a");
  n.href = t, n.download = r, document.body.appendChild(n), n.click(), setTimeout(() => {
    document.body.removeChild(n), URL.revokeObjectURL(t);
  }, 1);
}
function go(e2, t, r) {
  var g;
  ur.value++;
  const n = e2.request.responseURL + (r ? "#" + r : "");
  if (e2.data instanceof Blob) {
    vo(e2);
    return;
  }
  if (J((g = e2.data) == null ? void 0 : g.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e2.data.splade.lazy || e2.data.splade.rehydrate)
    return;
  e2.data.splade.modal && !e2.data.splade.modalTarget && ae.value++;
  const i = Nr.value;
  if (Hr(e2.data.splade), Gt(e2.data.splade.head), n === R.value.url && (t = true), e2.data.splade.modal)
    return Ai(e2.data.html, e2.data.splade.modal);
  if (e2.data.splade.preventRefresh)
    return;
  ae.value = 0, zt.value = {};
  let s = e2.data.html, a = e2.data.dynamics;
  const o = Object.keys(R.value.dynamics).length > 0, l = Object.keys(a).length > 0;
  t ? (l && te(a, (f, h) => {
    a[h] += `<!-- ${ur.value} -->`;
  }), (!l || !o) && (s += `<!-- ${ur.value} -->`)) : (l && Mt.value++, (!l || !o) && (ie.value++, tt[ie.value] = tt[ie.value] || new yi(ie.value)));
  let u = e2.data.splade.persistentLayout && i === e2.data.splade.persistentLayout, c = 0;
  !$e && e2.data.splade.preserveScroll && (c = window.scrollY), Ur(
    u ? R.value.html : s,
    c,
    !t && !e2.data.splade.preventViewTransition
  );
  const v = Dr(
    n,
    e2.data.splade.head,
    u ? R.value.html : s,
    a,
    R.value.rememberedState ? { ...R.value.rememberedState } : {},
    ie.value,
    Mt.value,
    e2.data.splade.persistentLayout
  );
  t ? bi(v) : ho(v);
}
function yo() {
  ae.value--, Gt(wo(ae.value));
}
const wi = vueExports.ref({}), Si = (e2) => wi.value[e2], bo = (e2) => Object.keys(Si.value[e2]).length > 0, Oi = vueExports.ref({}), wo = (e2) => Oi.value[e2], $i = vueExports.ref({}), So = (e2) => $i.value[e2], rt = vueExports.ref([]);
function Oo(e2) {
  rt.value.push(e2);
}
const $o = vueExports.computed(() => co(rt.value));
function Eo(e2) {
  rt.value[e2].dismissed = true, rt.value[e2].html = null;
}
const Vr = vueExports.ref(null);
function To(e2, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = false), typeof s > "u" && (s = false), typeof a > "u" && (a = false);
  const u = new Promise((c, v) => {
    o = c, l = v;
  });
  return Vr.value = {
    title: e2,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: o,
    rejectPromise: l,
    confirmPassword: i,
    confirmPasswordOnce: s,
    confirmDanger: a
  }, u;
}
function xo() {
  Vr.value = null;
}
const Ei = vueExports.ref({});
function Hr(e2) {
  Nr.value = e2.persistentLayout, Ei.value = e2.shared ? e2.shared : {}, $i.value[ae.value] = e2.flash ? e2.flash : {}, Oi.value[ae.value] = e2.head ? e2.head : {}, oo(e2.toasts ? e2.toasts : [], (t) => {
    rt.value.push(t);
  }), wi.value[ae.value] = e2.errors ? e2.errors : {};
}
const Ti = vueExports.ref(() => {
}), xi = vueExports.ref(() => {
}), _i = vueExports.ref(() => {
}), Ii = vueExports.ref(() => {
});
function Gt(e2) {
  Ti.value(e2);
}
function Ur(e2, t, r) {
  xi.value(e2, t, r === true);
}
function Ai(e2, t) {
  zt.value[ae.value] = true, _i.value(e2, t);
}
function _o(e2) {
  return zt.value[e2];
}
function Pi(e2) {
  Ii.value(e2);
}
const Wr = vueExports.ref({});
function qi(e2, t, r) {
  Wr.value[e2] = t, r && Io(e2, t);
}
function zr() {
  return JSON.parse(localStorage.getItem("splade") || "{}") || {};
}
function Io(e2, t) {
  let r = zr();
  r[e2] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Ao(e2, t) {
  return t ? zr()[e2] : Wr.value[e2];
}
function Po(e2, t) {
  if (t) {
    let r = zr();
    delete r[e2], localStorage.setItem("splade", JSON.stringify(r));
  }
  delete Wr.value[e2];
}
function Ke(e2, t, r, n, i, s) {
  if ($e || qi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const o = new URLSearchParams(r).toString();
    o != "" && (e2 = `${e2.split("?")[0]}?${o}`), r = {};
  }
  ye("internal:request", { url: e2, method: t, data: r, headers: n, replace: i });
  const a = ne({
    method: t,
    url: e2,
    data: r,
    headers: {
      "X-Splade": true,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    responseType: s ? "blob" : "json",
    onUploadProgress: (o) => {
      r instanceof FormData && (o.percentage = Math.round(o.loaded / o.total * 100), ye("internal:request-progress", { url: e2, method: t, data: r, headers: n, replace: i, progress: o }));
    }
  });
  return a.then((o) => {
    const l = e2.split("#")[1] || "";
    go(o, i, l), ye("internal:request-response", { url: e2, method: t, data: r, headers: n, replace: i, response: o });
  }).catch(async (o) => {
    if (ye("internal:request-error", { url: e2, method: t, data: r, headers: n, replace: i, error: o }), !o.response)
      return;
    const l = o.response;
    if (l.status == 409 && l.headers["x-splade-redirect-away"])
      return window.location = l.headers["x-splade-redirect-away"];
    let u = {};
    if (l.data instanceof Blob) {
      const c = await l.data.text();
      l.data.type === "application/json" && typeof c == "string" ? u = JSON.parse(c) || {} : l.data.html = c;
    } else
      u = l.data.splade;
    u && !u.lazy && !u.rehydrate && Hr(u), l.status != 422 && Pi(
      l.data.html ? l.data.html : l.data
    );
  }), a;
}
function Ci(e2, t) {
  return typeof t > "u" && (t = {}), Ke(e2, "GET", {}, t, true);
}
function qo(e2, t) {
  return typeof t > "u" && (t = {}), Ke(e2, "GET", {}, t, false);
}
function Co(e2) {
  return Ke(e2, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}
const Gr = vueExports.ref({});
function Fo(e2) {
  const t = Gr.value[e2];
  return t ? (ae.value++, Ai(t.html, t.type), true) : false;
}
function ko(e2, t, r) {
  Gr.value[e2] = { html: t, type: r };
}
function Lo(e2) {
  return Ke(e2, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}
function Ro(e2, t) {
  return Ke(e2, "GET", {}, { "X-Splade-Lazy": t }, false);
}
function Bo(e2, t) {
  return Ke(e2, "GET", {}, { "X-Splade-Rehydrate": t }, false);
}
function jo(e2) {
  typeof e2 > "u" && (e2 = false);
  const t = {
    "X-Splade-Refresh": true
  };
  return e2 && (t["X-Splade-Preserve-Scroll"] = true), Ci(R.value.url, t);
}
function Mo(e2, t) {
  tt[ie.value].on(e2, t);
}
function Do(e2, t) {
  tt[ie.value].off(e2, t);
}
function ye(e2, t) {
  typeof t > "u" && (t = {}), tt[ie.value].emit(e2, t), $e || document.dispatchEvent(new CustomEvent(`splade:${e2}`, { detail: t }));
}
const p = {
  init: fo,
  replace: Ci,
  visit: qo,
  modal: Co,
  slideover: Lo,
  refresh: jo,
  request: Ke,
  lazy: Ro,
  rehydrate: Bo,
  replaceUrlOfCurrentPage: mo,
  htmlForDynamicComponent(e2) {
    return R.value.dynamics[e2];
  },
  setOnHead(e2) {
    Ti.value = e2;
  },
  setOnHtml(e2) {
    xi.value = e2;
  },
  setOnModal(e2) {
    _i.value = e2;
  },
  setOnServerError(e2) {
    Ii.value = e2;
  },
  onServerError: Pi,
  hasValidationErrors: bo,
  validationErrors: Si,
  sharedData: Ei,
  // ref
  flashData: So,
  toasts: rt,
  // ref
  toastsReversed: $o,
  // ref
  confirmModal: Vr,
  // ref
  confirm: To,
  clearConfirmModal: xo,
  pushToast: Oo,
  dismissToast: Eo,
  restore: Ao,
  remember: qi,
  forget: Po,
  popStack: yo,
  currentStack: ae,
  // ref
  stackType: _o,
  pageVisitId: vueExports.computed(() => R.value.pageVisitId),
  // ref
  dynamicVisitId: vueExports.computed(() => R.value.dynamicVisitId),
  // ref
  isSsr: $e,
  openPreloadedModal: Fo,
  registerPreloadedModal: ko,
  on: Mo,
  off: Do,
  emit: ye
};
var No = "[object String]";
function se(e2) {
  return typeof e2 == "string" || !M(e2) && Le(e2) && Be(e2) == No;
}
const ue = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: false,
      default: ""
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  setup(e2) {
    const t = e2, r = vueExports.ref(null);
    function n() {
      r.value = vueExports.h({
        template: t.html,
        data() {
          return { ...t.passthrough };
        }
      }), vueExports.nextTick(() => {
        p.emit("rendered");
      });
    }
    return vueExports.watch(() => t.html, n, { immediate: true }), (i, s) => e2.html ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(r), { key: 0 })) : vueExports.createCommentVNode("", true);
  }
}, Vo = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(e2, { emit: t }) {
    const r = e2, n = t, i = vueExports.ref(null);
    function s() {
      const l = document.createElement("html");
      l.innerHTML = r.html, l.querySelectorAll("a").forEach((c) => c.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const u = i.value;
      if (!u.contentWindow)
        throw new Error("iframe not yet ready.");
      u.contentWindow.document.open(), u.contentWindow.document.write(l.outerHTML), u.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(l) {
      l.keyCode === 27 && o();
    }
    function o() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), n("close");
    }
    return vueExports.onMounted(() => s()), (l, u) => (vueExports.openBlock(), vueExports.createElementBlock("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: o
    }, [
      vueExports.createElementVNode("iframe", {
        ref_key: "iframeElement",
        ref: i,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Ho = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: false,
      default: ""
    },
    components: {
      type: String,
      required: false,
      default: (e2) => {
        if (!p.isSsr) {
          const t = se(e2.el) ? document.getElementById(e2.el) : e2.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: false,
      default: (e2) => {
        if (!p.isSsr) {
          const t = se(e2.el) ? document.getElementById(e2.el) : e2.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: false,
      default: (e2) => {
        if (!p.isSsr) {
          const t = se(e2.el) ? document.getElementById(e2.el) : e2.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: false,
      default: (e2) => {
        if (!p.isSsr) {
          const t = se(e2.el) ? document.getElementById(e2.el) : e2.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e2) {
    const t = e2;
    vueExports.provide("stack", 0);
    const r = vueExports.ref(), n = vueExports.ref([]), i = vueExports.ref(null), s = vueExports.ref(null), a = vueExports.ref(true), o = vueExports.inject("$spladeOptions") || {}, l = vueExports.computed(() => p.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(h) {
      n.value[h] = null, p.popStack();
    }
    function v(h) {
      const m = document.createElement("meta");
      te(h, (d, b) => {
        m[b] = d;
      }), document.getElementsByTagName("head")[0].appendChild(m);
    }
    function g(h) {
      var d;
      let m = "meta";
      te(h, (b, O) => {
        m = `${m}[${O}="${b}"]`;
      });
      try {
        (d = document.querySelector(m)) == null || d.remove();
      } catch {
      }
    }
    p.setOnHead((h) => {
      var m;
      if (!p.isSsr) {
        if (s.value === null) {
          s.value = h.meta;
          return;
        }
        if (s.value.forEach((d) => {
          g(d);
        }), s.value = h.meta, document.title = h.title, h.meta.forEach((d) => {
          v(d);
        }), (m = document.querySelector('link[rel="canonical"]')) == null || m.remove(), h.canonical) {
          const d = document.createElement("link");
          d.rel = "canonical", d.href = h.canonical, document.getElementsByTagName("head")[0].appendChild(d);
        }
      }
    });
    const f = (h, m) => {
      n.value = [], r.value = h, vueExports.nextTick(() => {
        if (!p.isSsr) {
          const d = window.location.hash;
          d && document.getElementById(d.substring(1)) ? window.location.hash = d : window.scrollTo(0, m);
        }
        o.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(b) {
            b.preventDefault(), p.visit(d.href);
          }));
        });
      });
    };
    return p.setOnHtml((h, m, d) => {
      if (!p.isSsr && document.startViewTransition && o.view_transitions && d)
        return document.startViewTransition(() => f(h, m));
      f(h, m);
    }), p.setOnModal(function(h, m) {
      n.value[p.currentStack.value] && (a.value = false), n.value[p.currentStack.value] = { html: h, type: m }, vueExports.nextTick(() => {
        a.value = true;
      });
    }), p.setOnServerError(function(h) {
      i.value = h;
    }), p.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), vueExports.onMounted(() => {
      if (p.isSsr)
        return;
      const h = se(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((m) => {
        delete h.dataset[m];
      });
    }), (h, m) => (vueExports.openBlock(), vueExports.createElementBlock("div", null, [
      vueExports.unref(p).isSsr ? (vueExports.openBlock(), vueExports.createBlock(ue, {
        key: `visit.${vueExports.unref(p).pageVisitId.value}`,
        style: vueExports.normalizeStyle(l.value),
        html: r.value
      }, null, 8, ["style", "html"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.KeepAlive, {
        key: 0,
        max: vueExports.unref(o).max_keep_alive
      }, [
        (vueExports.openBlock(), vueExports.createBlock(ue, {
          key: `visit.${vueExports.unref(p).pageVisitId.value}`,
          style: vueExports.normalizeStyle(l.value),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      vueExports.createVNode(ue, { html: e2.components }, null, 8, ["html"]),
      (vueExports.openBlock(true), vueExports.createElementBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(p).currentStack.value, (d) => (vueExports.openBlock(), vueExports.createBlock(ue, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": vueExports.unref(p).currentStack.value === d,
        animate: a.value,
        onClose: (b) => c(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (vueExports.openBlock(), vueExports.createBlock(Vo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : vueExports.createCommentVNode("", true)
    ]));
  }
};
function Cp(e2) {
  return () => vueExports.h(Ho, e2);
}
var Uo = Object.prototype, Wo = Uo.hasOwnProperty;
function zo(e2, t) {
  return e2 != null && Wo.call(e2, t);
}
var Go = "[object Symbol]";
function Xt(e2) {
  return typeof e2 == "symbol" || Le(e2) && Be(e2) == Go;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ko = /^\w*$/;
function Xr(e2, t) {
  if (M(e2))
    return false;
  var r = typeof e2;
  return r == "number" || r == "symbol" || r == "boolean" || e2 == null || Xt(e2) ? true : Ko.test(e2) || !Xo.test(e2) || t != null && e2 in Object(t);
}
var Jo = ve["__core-js_shared__"];
const cr = Jo;
var An = function() {
  var e2 = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return e2 ? "Symbol(src)_1." + e2 : "";
}();
function Qo(e2) {
  return !!An && An in e2;
}
var Yo = Function.prototype, Zo = Yo.toString;
function Je(e2) {
  if (e2 != null) {
    try {
      return Zo.call(e2);
    } catch {
    }
    try {
      return e2 + "";
    } catch {
    }
  }
  return "";
}
var el = /[\\^$.*+?()[\]{}|]/g, tl = /^\[object .+?Constructor\]$/, rl = Function.prototype, nl = Object.prototype, il = rl.toString, sl = nl.hasOwnProperty, al = RegExp(
  "^" + il.call(sl).replace(el, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ol(e2) {
  if (!J(e2) || Qo(e2))
    return false;
  var t = mi(e2) ? al : tl;
  return t.test(Je(e2));
}
function ll(e2, t) {
  return e2 == null ? void 0 : e2[t];
}
function Qe(e2, t) {
  var r = ll(e2, t);
  return ol(r) ? r : void 0;
}
var ul = Qe(Object, "create");
const bt = ul;
function cl() {
  this.__data__ = bt ? bt(null) : {}, this.size = 0;
}
function dl(e2) {
  var t = this.has(e2) && delete this.__data__[e2];
  return this.size -= t ? 1 : 0, t;
}
var fl = "__lodash_hash_undefined__", pl = Object.prototype, hl = pl.hasOwnProperty;
function ml(e2) {
  var t = this.__data__;
  if (bt) {
    var r = t[e2];
    return r === fl ? void 0 : r;
  }
  return hl.call(t, e2) ? t[e2] : void 0;
}
var vl = Object.prototype, gl = vl.hasOwnProperty;
function yl(e2) {
  var t = this.__data__;
  return bt ? t[e2] !== void 0 : gl.call(t, e2);
}
var bl = "__lodash_hash_undefined__";
function wl(e2, t) {
  var r = this.__data__;
  return this.size += this.has(e2) ? 0 : 1, r[e2] = bt && t === void 0 ? bl : t, this;
}
function Ge(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
Ge.prototype.clear = cl;
Ge.prototype.delete = dl;
Ge.prototype.get = ml;
Ge.prototype.has = yl;
Ge.prototype.set = wl;
function Sl() {
  this.__data__ = [], this.size = 0;
}
function Kr(e2, t) {
  return e2 === t || e2 !== e2 && t !== t;
}
function Kt(e2, t) {
  for (var r = e2.length; r--; )
    if (Kr(e2[r][0], t))
      return r;
  return -1;
}
var Ol = Array.prototype, $l = Ol.splice;
function El(e2) {
  var t = this.__data__, r = Kt(t, e2);
  if (r < 0)
    return false;
  var n = t.length - 1;
  return r == n ? t.pop() : $l.call(t, r, 1), --this.size, true;
}
function Tl(e2) {
  var t = this.__data__, r = Kt(t, e2);
  return r < 0 ? void 0 : t[r][1];
}
function xl(e2) {
  return Kt(this.__data__, e2) > -1;
}
function _l(e2, t) {
  var r = this.__data__, n = Kt(r, e2);
  return n < 0 ? (++this.size, r.push([e2, t])) : r[n][1] = t, this;
}
function Te(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = Sl;
Te.prototype.delete = El;
Te.prototype.get = Tl;
Te.prototype.has = xl;
Te.prototype.set = _l;
var Il = Qe(ve, "Map");
const wt = Il;
function Al() {
  this.size = 0, this.__data__ = {
    hash: new Ge(),
    map: new (wt || Te)(),
    string: new Ge()
  };
}
function Pl(e2) {
  var t = typeof e2;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e2 !== "__proto__" : e2 === null;
}
function Jt(e2, t) {
  var r = e2.__data__;
  return Pl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ql(e2) {
  var t = Jt(this, e2).delete(e2);
  return this.size -= t ? 1 : 0, t;
}
function Cl(e2) {
  return Jt(this, e2).get(e2);
}
function Fl(e2) {
  return Jt(this, e2).has(e2);
}
function kl(e2, t) {
  var r = Jt(this, e2), n = r.size;
  return r.set(e2, t), this.size += r.size == n ? 0 : 1, this;
}
function xe(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = Al;
xe.prototype.delete = ql;
xe.prototype.get = Cl;
xe.prototype.has = Fl;
xe.prototype.set = kl;
var Ll = "Expected a function";
function Jr(e2, t) {
  if (typeof e2 != "function" || t != null && typeof t != "function")
    throw new TypeError(Ll);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e2.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Jr.Cache || xe)(), r;
}
Jr.Cache = xe;
var Rl = 500;
function Bl(e2) {
  var t = Jr(e2, function(n) {
    return r.size === Rl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var jl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ml = /\\(\\)?/g, Dl = Bl(function(e2) {
  var t = [];
  return e2.charCodeAt(0) === 46 && t.push(""), e2.replace(jl, function(r, n, i, s) {
    t.push(i ? s.replace(Ml, "$1") : n || r);
  }), t;
});
const Nl = Dl;
function Fi(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length, i = Array(n); ++r < n; )
    i[r] = t(e2[r], r, e2);
  return i;
}
var Vl = 1 / 0, Pn = ke ? ke.prototype : void 0, qn = Pn ? Pn.toString : void 0;
function Qt(e2) {
  if (typeof e2 == "string")
    return e2;
  if (M(e2))
    return Fi(e2, Qt) + "";
  if (Xt(e2))
    return qn ? qn.call(e2) : "";
  var t = e2 + "";
  return t == "0" && 1 / e2 == -Vl ? "-0" : t;
}
function Qr(e2) {
  return e2 == null ? "" : Qt(e2);
}
function Yr(e2, t) {
  return M(e2) ? e2 : Xr(e2, t) ? [e2] : Nl(Qr(e2));
}
var Hl = 1 / 0;
function $t(e2) {
  if (typeof e2 == "string" || Xt(e2))
    return e2;
  var t = e2 + "";
  return t == "0" && 1 / e2 == -Hl ? "-0" : t;
}
function ki(e2, t, r) {
  t = Yr(t, e2);
  for (var n = -1, i = t.length, s = false; ++n < i; ) {
    var a = $t(t[n]);
    if (!(s = e2 != null && r(e2, a)))
      break;
    e2 = e2[a];
  }
  return s || ++n != i ? s : (i = e2 == null ? 0 : e2.length, !!i && Br(i) && Rr(a, i) && (M(e2) || di(e2)));
}
function W(e2, t) {
  return e2 != null && ki(e2, t, zo);
}
const Ul = {
  props: {
    spinner: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  render() {
    return this.$slots.default({
      spinner: this.spinner
    });
  }
};
function fe(e2, t, ...r) {
  if (e2 in t) {
    let i = t[e2];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e2}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, fe), n;
}
var Dt = ((e2) => (e2[e2.None = 0] = "None", e2[e2.RenderStrategy = 1] = "RenderStrategy", e2[e2.Static = 2] = "Static", e2))(Dt || {}), Ce = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(Ce || {});
function Z({ visible: e2 = true, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Ri(n, r), o = Object.assign(i, { props: a });
  if (e2 || t & 2 && a.static)
    return dr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return fe(l, { 0() {
      return null;
    }, 1() {
      return dr({ ...i, props: { ...a, hidden: true, style: { display: "none" } } });
    } });
  }
  return dr(o);
}
function dr({ props: e2, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Bi(e2, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let v = false, g = [];
    for (let [f, h] of Object.entries(n))
      typeof h == "boolean" && (v = true), h === true && g.push(f);
    v && (c["data-headlessui-state"] = g.join(" "));
  }
  if (o === "template") {
    if (u = Li(u ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [v, ...g] = u ?? [];
      if (!Wl(v) || g.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((m) => m.trim()).filter((m, d, b) => b.indexOf(m) === d).sort((m, d) => m.localeCompare(d)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let f = Ri((a = v.props) != null ? a : {}, l), h = vueExports.cloneVNode(v, f);
      for (let m in f)
        m.startsWith("on") && (h.props || (h.props = {}), h.props[m] = f[m]);
      return h;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return vueExports.h(o, Object.assign({}, l, c), { default: () => u });
}
function Li(e2) {
  return e2.flatMap((t) => t.type === vueExports.Fragment ? Li(t.children) : [t]);
}
function Ri(...e2) {
  if (e2.length === 0)
    return {};
  if (e2.length === 1)
    return e2[0];
  let t = {}, r = {};
  for (let n of e2)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...s) {
      let a = r[n];
      for (let o of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...s);
      }
    } });
  return t;
}
function Bi(e2, t = []) {
  let r = Object.assign({}, e2);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Wl(e2) {
  return e2 == null ? false : typeof e2.type == "string" || typeof e2.type == "object" || typeof e2.type == "function";
}
let zl = 0;
function Gl() {
  return ++zl;
}
function Ye() {
  return Gl();
}
var ji = ((e2) => (e2.Space = " ", e2.Enter = "Enter", e2.Escape = "Escape", e2.Backspace = "Backspace", e2.Delete = "Delete", e2.ArrowLeft = "ArrowLeft", e2.ArrowUp = "ArrowUp", e2.ArrowRight = "ArrowRight", e2.ArrowDown = "ArrowDown", e2.Home = "Home", e2.End = "End", e2.PageUp = "PageUp", e2.PageDown = "PageDown", e2.Tab = "Tab", e2))(ji || {});
function D(e2) {
  var t;
  return e2 == null || e2.value == null ? null : (t = e2.value.$el) != null ? t : e2.value;
}
let Mi = Symbol("Context");
var G = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(G || {});
function Xl() {
  return Zr() !== null;
}
function Zr() {
  return vueExports.inject(Mi, null);
}
function Kl(e2) {
  vueExports.provide(Mi, e2);
}
var Jl = Object.defineProperty, Ql = (e2, t, r) => t in e2 ? Jl(e2, t, { enumerable: true, configurable: true, writable: true, value: r }) : e2[t] = r, Cn = (e2, t, r) => (Ql(e2, typeof t != "symbol" ? t + "" : t, r), r);
class Yl {
  constructor() {
    Cn(this, "current", this.detect()), Cn(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let Et = new Yl();
function Tt(e2) {
  if (Et.isServer)
    return null;
  if (e2 instanceof Node)
    return e2.ownerDocument;
  if (e2 != null && e2.hasOwnProperty("value")) {
    let t = D(e2);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let br = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var qe = ((e2) => (e2[e2.First = 1] = "First", e2[e2.Previous = 2] = "Previous", e2[e2.Next = 4] = "Next", e2[e2.Last = 8] = "Last", e2[e2.WrapAround = 16] = "WrapAround", e2[e2.NoScroll = 32] = "NoScroll", e2))(qe || {}), Di = ((e2) => (e2[e2.Error = 0] = "Error", e2[e2.Overflow = 1] = "Overflow", e2[e2.Success = 2] = "Success", e2[e2.Underflow = 3] = "Underflow", e2))(Di || {}), Zl = ((e2) => (e2[e2.Previous = -1] = "Previous", e2[e2.Next = 1] = "Next", e2))(Zl || {});
function eu(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(br)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ni = ((e2) => (e2[e2.Strict = 0] = "Strict", e2[e2.Loose = 1] = "Loose", e2))(Ni || {});
function tu(e2, t = 0) {
  var r;
  return e2 === ((r = Tt(e2)) == null ? void 0 : r.body) ? false : fe(t, { 0() {
    return e2.matches(br);
  }, 1() {
    let n = e2;
    for (; n !== null; ) {
      if (n.matches(br))
        return true;
      n = n.parentElement;
    }
    return false;
  } });
}
var ru = ((e2) => (e2[e2.Keyboard = 0] = "Keyboard", e2[e2.Mouse = 1] = "Mouse", e2))(ru || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function We(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let nu = ["textarea", "input"].join(",");
function iu(e2) {
  var t, r;
  return (r = (t = e2 == null ? void 0 : e2.matches) == null ? void 0 : t.call(e2, nu)) != null ? r : false;
}
function su(e2, t = (r) => r) {
  return e2.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Lt(e2, t, { sorted: r = true, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2 == null ? void 0 : e2.ownerDocument) != null ? s : document, o = Array.isArray(e2) ? r ? su(e2) : e2 : eu(e2);
  i.length > 0 && o.length > 1 && (o = o.filter((h) => !i.includes(h))), n = n ?? a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: true } : {}, v = 0, g = o.length, f;
  do {
    if (v >= g || v + g <= 0)
      return 0;
    let h = u + v;
    if (t & 16)
      h = (h + g) % g;
    else {
      if (h < 0)
        return 3;
      if (h >= g)
        return 1;
    }
    f = o[h], f == null || f.focus(c), v += l;
  } while (f !== a.activeElement);
  return t & 6 && iu(f) && f.select(), 2;
}
function fr(e2, t, r) {
  Et.isServer || vueExports.watchEffect((n) => {
    document.addEventListener(e2, t, r), n(() => document.removeEventListener(e2, t, r));
  });
}
function au(e2, t, r = vueExports.computed(() => true)) {
  function n(s, a) {
    if (!r.value || s.defaultPrevented)
      return;
    let o = a(s);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e2);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : D(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !tu(o, Ni.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = vueExports.ref(null);
  fr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, true), fr("click", (s) => {
    i.value && (n(s, () => i.value), i.value = null);
  }, true), fr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var Nt = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(Nt || {});
let wr = vueExports.defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e2, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e2, s = { "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return Z({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function ou() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function lu(e2, t, r) {
  Et.isServer || vueExports.watchEffect((n) => {
    window.addEventListener(e2, t, r), n(() => window.removeEventListener(e2, t, r));
  });
}
var vt = ((e2) => (e2[e2.Forwards = 0] = "Forwards", e2[e2.Backwards = 1] = "Backwards", e2))(vt || {});
function uu() {
  let e2 = vueExports.ref(0);
  return lu("keydown", (t) => {
    t.key === "Tab" && (e2.value = t.shiftKey ? 1 : 0);
  }), e2;
}
function Vi(e2, t, r, n) {
  Et.isServer || vueExports.watchEffect((i) => {
    e2 = e2 ?? window, e2.addEventListener(t, r, n), i(() => e2.removeEventListener(t, r, n));
  });
}
function Hi(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function cu(e2) {
  function t() {
    document.readyState !== "loading" && (e2(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Ui(e2) {
  if (!e2)
    return /* @__PURE__ */ new Set();
  if (typeof e2 == "function")
    return new Set(e2());
  let t = /* @__PURE__ */ new Set();
  for (let r of e2.value) {
    let n = D(r);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var Wi = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(Wi || {});
let pt = Object.assign(vueExports.defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: vueExports.ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e2, { attrs: t, slots: r, expose: n }) {
  let i = vueExports.ref(null);
  n({ el: i, $el: i });
  let s = vueExports.computed(() => Tt(i)), a = vueExports.ref(false);
  vueExports.onMounted(() => a.value = true), vueExports.onUnmounted(() => a.value = false), fu({ ownerDocument: s }, vueExports.computed(() => a.value && !!(e2.features & 16)));
  let o = pu({ ownerDocument: s, container: i, initialFocus: vueExports.computed(() => e2.initialFocus) }, vueExports.computed(() => a.value && !!(e2.features & 2)));
  hu({ ownerDocument: s, container: i, containers: e2.containers, previousActiveElement: o }, vueExports.computed(() => a.value && !!(e2.features & 8)));
  let l = uu();
  function u(f) {
    let h = D(i);
    h && ((m) => m())(() => {
      fe(l.value, { [vt.Forwards]: () => {
        Lt(h, qe.First, { skipElements: [f.relatedTarget] });
      }, [vt.Backwards]: () => {
        Lt(h, qe.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let c = vueExports.ref(false);
  function v(f) {
    f.key === "Tab" && (c.value = true, requestAnimationFrame(() => {
      c.value = false;
    }));
  }
  function g(f) {
    if (!a.value)
      return;
    let h = Ui(e2.containers);
    D(i) instanceof HTMLElement && h.add(D(i));
    let m = f.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (zi(h, m) || (c.value ? Lt(D(i), fe(l.value, { [vt.Forwards]: () => qe.Next, [vt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && We(f.target)));
  }
  return () => {
    let f = {}, h = { ref: i, onKeydown: v, onFocusout: g }, { features: m, initialFocus: d, containers: b, ...O } = e2;
    return vueExports.h(vueExports.Fragment, [!!(m & 4) && vueExports.h(wr, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u, features: Nt.Focusable }), Z({ ourProps: h, theirProps: { ...t, ...O }, slot: f, attrs: t, slots: r, name: "FocusTrap" }), !!(m & 4) && vueExports.h(wr, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u, features: Nt.Focusable })]);
  };
} }), { features: Wi }), He = [];
cu(() => {
  function e2(t) {
    t.target instanceof HTMLElement && t.target !== document.body && He[0] !== t.target && (He.unshift(t.target), He = He.filter((r) => r != null && r.isConnected), He.splice(10));
  }
  window.addEventListener("click", e2, { capture: true }), window.addEventListener("mousedown", e2, { capture: true }), window.addEventListener("focus", e2, { capture: true }), document.body.addEventListener("click", e2, { capture: true }), document.body.addEventListener("mousedown", e2, { capture: true }), document.body.addEventListener("focus", e2, { capture: true });
});
function du(e2) {
  let t = vueExports.ref(He.slice());
  return vueExports.watch([e2], ([r], [n]) => {
    n === true && r === false ? Hi(() => {
      t.value.splice(0);
    }) : n === false && r === true && (t.value = He.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function fu({ ownerDocument: e2 }, t) {
  let r = du(t);
  vueExports.onMounted(() => {
    vueExports.watchEffect(() => {
      var n, i;
      t.value || ((n = e2.value) == null ? void 0 : n.activeElement) === ((i = e2.value) == null ? void 0 : i.body) && We(r());
    }, { flush: "post" });
  }), vueExports.onUnmounted(() => {
    We(r());
  });
}
function pu({ ownerDocument: e2, container: t, initialFocus: r }, n) {
  let i = vueExports.ref(null), s = vueExports.ref(false);
  return vueExports.onMounted(() => s.value = true), vueExports.onUnmounted(() => s.value = false), vueExports.onMounted(() => {
    vueExports.watch([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = D(t);
      l && Hi(() => {
        var u, c;
        if (!s.value)
          return;
        let v = D(r), g = (u = e2.value) == null ? void 0 : u.activeElement;
        if (v) {
          if (v === g) {
            i.value = g;
            return;
          }
        } else if (l.contains(g)) {
          i.value = g;
          return;
        }
        v ? We(v) : Lt(l, qe.First | qe.NoScroll) === Di.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e2.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), i;
}
function hu({ ownerDocument: e2, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Vi((s = e2.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = Ui(r);
    D(t) instanceof HTMLElement && o.add(D(t));
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? zi(o, u) ? (n.value = u, We(u)) : (a.preventDefault(), a.stopPropagation(), We(l)) : We(n.value);
  }, true);
}
function zi(e2, t) {
  for (let r of e2)
    if (r.contains(t))
      return true;
  return false;
}
let pr = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
function Fn(e2, t = vueExports.ref(true)) {
  vueExports.watchEffect((r) => {
    var n;
    if (!t.value)
      return;
    let i = D(e2);
    if (!i)
      return;
    r(function() {
      var a;
      if (!i)
        return;
      let o = (a = ht.get(i)) != null ? a : 1;
      if (o === 1 ? ht.delete(i) : ht.set(i, o - 1), o !== 1)
        return;
      let l = pr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, pr.delete(i));
    });
    let s = (n = ht.get(i)) != null ? n : 0;
    ht.set(i, s + 1), s === 0 && (pr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = true);
  });
}
let Gi = Symbol("ForcePortalRootContext");
function mu() {
  return vueExports.inject(Gi, false);
}
let Sr = vueExports.defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(e2, { slots: t, attrs: r }) {
  return vueExports.provide(Gi, e2.force), () => {
    let { force: n, ...i } = e2;
    return Z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function vu(e2) {
  let t = Tt(e2);
  if (!t) {
    if (e2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Xi = vueExports.defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t, attrs: r }) {
  let n = vueExports.ref(null), i = vueExports.computed(() => Tt(n)), s = mu(), a = vueExports.inject(Ki, null), o = vueExports.ref(s === true || a == null ? vu(n.value) : a.resolveTarget());
  return vueExports.watchEffect(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), vueExports.onUnmounted(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    c && o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return vueExports.h(vueExports.Teleport, { to: o.value }, Z({ ourProps: l, theirProps: e2, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ki = Symbol("PortalGroupContext"), gu = vueExports.defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t, slots: r }) {
  let n = vueExports.reactive({ resolveTarget() {
    return e2.target;
  } });
  return vueExports.provide(Ki, n), () => {
    let { target: i, ...s } = e2;
    return Z({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ji = Symbol("StackContext");
var Or = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(Or || {});
function yu() {
  return vueExports.inject(Ji, () => {
  });
}
function bu({ type: e2, enabled: t, element: r, onUpdate: n }) {
  let i = yu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  vueExports.onMounted(() => {
    vueExports.watch(t, (a, o) => {
      a ? s(0, e2, r) : o === true && s(1, e2, r);
    }, { immediate: true, flush: "sync" });
  }), vueExports.onUnmounted(() => {
    t.value && s(1, e2, r);
  }), vueExports.provide(Ji, s);
}
let Qi = Symbol("DescriptionContext");
function wu() {
  let e2 = vueExports.inject(Qi, null);
  if (e2 === null)
    throw new Error("Missing parent");
  return e2;
}
function Su({ slot: e2 = vueExports.ref({}), name: t = "Description", props: r = {} } = {}) {
  let n = vueExports.ref([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return vueExports.provide(Qi, { register: i, slot: e2, name: t, props: r }), vueExports.computed(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
vueExports.defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Ye()}` } }, setup(e2, { attrs: t, slots: r }) {
  let n = wu();
  return vueExports.onMounted(() => vueExports.onUnmounted(n.register(e2.id))), () => {
    let { name: i = "Description", slot: s = vueExports.ref({}), props: a = {} } = n, { id: o, ...l } = e2, u = { ...Object.entries(a).reduce((c, [v, g]) => Object.assign(c, { [v]: vueExports.unref(g) }), {}), id: o };
    return Z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function Ou(e2) {
  let t = vueExports.shallowRef(e2.getSnapshot());
  return vueExports.onUnmounted(e2.subscribe(() => {
    t.value = e2.getSnapshot();
  })), t;
}
function Yt() {
  let e2 = [], t = { addEventListener(r, n, i, s) {
    return r.addEventListener(n, i, s), t.add(() => r.removeEventListener(n, i, s));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    t.add(() => clearTimeout(n));
  }, style(r, n, i) {
    let s = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: s });
    });
  }, group(r) {
    let n = Yt();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e2.push(r), () => {
      let n = e2.indexOf(r);
      if (n >= 0)
        for (let i of e2.splice(n, 1))
          i();
    };
  }, dispose() {
    for (let r of e2.splice(0))
      r();
  } };
  return t;
}
function $u(e2, t) {
  let r = e2(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let a = t[i].call(r, ...s);
    a && (r = a, n.forEach((o) => o()));
  } };
}
function Eu() {
  let e2;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e2 = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, s = e2 - i;
    r.style(n, "paddingRight", `${s}px`);
  } };
}
function Tu() {
  if (!ou())
    return {};
  let e2;
  return { before() {
    e2 = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function i(a) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(a));
    }
    r.style(t.body, "marginTop", `-${e2}px`), window.scrollTo(0, 0);
    let s = null;
    r.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let o = a.target.closest("a");
          if (!o)
            return;
          let { hash: l } = new URL(o.href), u = t.querySelector(l);
          u && !i(u) && (s = u);
        } catch {
        }
    }, true), r.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !i(a.target) && a.preventDefault();
    }, { passive: false }), r.add(() => {
      window.scrollTo(0, window.pageYOffset + e2), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function xu() {
  return { before({ doc: e2, d: t }) {
    t.style(e2.documentElement, "overflow", "hidden");
  } };
}
function _u(e2) {
  let t = {};
  for (let r of e2)
    Object.assign(t, r(t));
  return t;
}
let Ue = $u(() => /* @__PURE__ */ new Map(), { PUSH(e2, t) {
  var r;
  let n = (r = this.get(e2)) != null ? r : { doc: e2, count: 0, d: Yt(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e2, n), this;
}, POP(e2, t) {
  let r = this.get(e2);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e2, d: t, meta: r }) {
  let n = { doc: e2, d: t, meta: _u(r) }, i = [Tu(), Eu(), xu()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
Ue.subscribe(() => {
  let e2 = Ue.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e2)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e2.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Ue.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Ue.dispatch("TEARDOWN", r);
  }
});
function Iu(e2, t, r) {
  let n = Ou(Ue), i = vueExports.computed(() => {
    let s = e2.value ? n.value.get(e2.value) : void 0;
    return s ? s.count > 0 : false;
  });
  return vueExports.watch([e2, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    Ue.dispatch("PUSH", s, r);
    let u = false;
    l(() => {
      u || (Ue.dispatch("POP", o ?? s, r), u = true);
    });
  }, { immediate: true }), i;
}
var Au = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(Au || {});
let $r = Symbol("DialogContext");
function xt(e2) {
  let t = vueExports.inject($r, null);
  if (t === null) {
    let r = new Error(`<${e2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, xt), r;
  }
  return t;
}
let qt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", en = vueExports.defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: qt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Ye()}` } }, emits: { close: (e2) => true }, setup(e2, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = vueExports.ref(false);
  vueExports.onMounted(() => {
    a.value = true;
  });
  let o = vueExports.ref(0), l = Zr(), u = vueExports.computed(() => e2.open === qt && l !== null ? (l.value & G.Open) === G.Open : e2.open), c = vueExports.ref(null), v = vueExports.ref(null), g = vueExports.computed(() => Tt(c));
  if (i({ el: c, $el: c }), !(e2.open !== qt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === qt ? void 0 : e2.open}`);
  let f = vueExports.computed(() => a.value && u.value ? 0 : 1), h = vueExports.computed(() => f.value === 0), m = vueExports.computed(() => o.value > 1), d = vueExports.inject($r, null) !== null, b = vueExports.computed(() => m.value ? "parent" : "leaf"), O = vueExports.computed(() => l !== null ? (l.value & G.Closing) === G.Closing : false), A = vueExports.computed(() => d || O.value ? false : h.value), S = vueExports.computed(() => {
    var E, T, I;
    return (I = Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("body > *")) != null ? T : []).find((C) => C.id === "headlessui-portal-root" ? false : C.contains(D(v)) && C instanceof HTMLElement)) != null ? I : null;
  });
  Fn(S, A);
  let $ = vueExports.computed(() => m.value ? true : h.value), w = vueExports.computed(() => {
    var E, T, I;
    return (I = Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? T : []).find((C) => C.contains(D(v)) && C instanceof HTMLElement)) != null ? I : null;
  });
  Fn(w, $), bu({ type: "Dialog", enabled: vueExports.computed(() => f.value === 0), element: c, onUpdate: (E, T) => {
    if (T === "Dialog")
      return fe(E, { [Or.Add]: () => o.value += 1, [Or.Remove]: () => o.value -= 1 });
  } });
  let _ = Su({ name: "DialogDescription", slot: vueExports.computed(() => ({ open: u.value })) }), q = vueExports.ref(null), P = { titleId: q, panelRef: vueExports.ref(null), dialogState: f, setTitleId(E) {
    q.value !== E && (q.value = E);
  }, close() {
    t("close", false);
  } };
  vueExports.provide($r, P);
  function k() {
    var E, T, I;
    return [...Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? T : []).filter((C) => !(C === document.body || C === document.head || !(C instanceof HTMLElement) || C.contains(D(v)) || P.panelRef.value && C.contains(P.panelRef.value))), (I = P.panelRef.value) != null ? I : c.value];
  }
  let j = vueExports.computed(() => !(!h.value || m.value));
  au(() => k(), (E, T) => {
    P.close(), vueExports.nextTick(() => T == null ? void 0 : T.focus());
  }, j);
  let H = vueExports.computed(() => !(m.value || f.value !== 0));
  Vi((s = g.value) == null ? void 0 : s.defaultView, "keydown", (E) => {
    H.value && (E.defaultPrevented || E.key === ji.Escape && (E.preventDefault(), E.stopPropagation(), P.close()));
  });
  let F = vueExports.computed(() => !(O.value || f.value !== 0 || d));
  return Iu(g, F, (E) => {
    var T;
    return { containers: [...(T = E.containers) != null ? T : [], k] };
  }), vueExports.watchEffect((E) => {
    if (f.value !== 0)
      return;
    let T = D(c);
    if (!T)
      return;
    let I = new ResizeObserver((C) => {
      for (let ge of C) {
        let U = ge.target.getBoundingClientRect();
        U.x === 0 && U.y === 0 && U.width === 0 && U.height === 0 && P.close();
      }
    });
    I.observe(T), E(() => I.disconnect());
  }), () => {
    let { id: E, open: T, initialFocus: I, ...C } = e2, ge = { ...r, ref: c, id: E, role: "dialog", "aria-modal": f.value === 0 ? true : void 0, "aria-labelledby": q.value, "aria-describedby": _.value }, U = { open: f.value === 0 };
    return vueExports.h(Sr, { force: true }, () => [vueExports.h(Xi, () => vueExports.h(gu, { target: c.value }, () => vueExports.h(Sr, { force: false }, () => vueExports.h(pt, { initialFocus: I, containers: k, features: h.value ? fe(b.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => Z({ ourProps: ge, theirProps: C, slot: U, attrs: r, slots: n, visible: f.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" }))))), vueExports.h(wr, { features: Nt.Hidden, ref: v })]);
  };
} });
vueExports.defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Ye()}` } }, setup(e2, { attrs: t, slots: r }) {
  let n = xt("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e2;
    return Z({ ourProps: { id: s, "aria-hidden": true, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
vueExports.defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Ye()}` } }, inheritAttrs: false, setup(e2, { attrs: t, slots: r, expose: n }) {
  let i = xt("DialogBackdrop"), s = vueExports.ref(null);
  return n({ el: s, $el: s }), vueExports.onMounted(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e2, l = { id: a, ref: s, "aria-hidden": true };
    return vueExports.h(Sr, { force: true }, () => vueExports.h(Xi, () => Z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let tn = vueExports.defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Ye()}` } }, setup(e2, { attrs: t, slots: r, expose: n }) {
  let i = xt("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e2, l = { id: a, ref: i.panelRef, onClick: s };
    return Z({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
vueExports.defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Ye()}` } }, setup(e2, { attrs: t, slots: r }) {
  let n = xt("DialogTitle");
  return vueExports.onMounted(() => {
    n.setTitleId(e2.id), vueExports.onUnmounted(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e2;
    return Z({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function Pu(e2) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e2(...r);
  };
}
function hr(e2, ...t) {
  e2 && t.length > 0 && e2.classList.add(...t);
}
function Ct(e2, ...t) {
  e2 && t.length > 0 && e2.classList.remove(...t);
}
var Er = ((e2) => (e2.Finished = "finished", e2.Cancelled = "cancelled", e2))(Er || {});
function qu(e2, t) {
  let r = Yt();
  if (!e2)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e2), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function kn(e2, t, r, n, i, s) {
  let a = Yt(), o = s !== void 0 ? Pu(s) : () => {
  };
  return Ct(e2, ...i), hr(e2, ...t, ...r), a.nextFrame(() => {
    Ct(e2, ...r), hr(e2, ...n), a.add(qu(e2, (l) => (Ct(e2, ...n, ...t), hr(e2, ...i), o(l))));
  }), a.add(() => Ct(e2, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Ne(e2 = "") {
  return e2.split(" ").filter((t) => t.trim().length > 1);
}
let rn = Symbol("TransitionContext");
var Cu = ((e2) => (e2.Visible = "visible", e2.Hidden = "hidden", e2))(Cu || {});
function Fu() {
  return vueExports.inject(rn, null) !== null;
}
function ku() {
  let e2 = vueExports.inject(rn, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function Lu() {
  let e2 = vueExports.inject(nn, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let nn = Symbol("NestingContext");
function Zt(e2) {
  return "children" in e2 ? Zt(e2.children) : e2.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Yi(e2) {
  let t = vueExports.ref([]), r = vueExports.ref(false);
  vueExports.onMounted(() => r.value = true), vueExports.onUnmounted(() => r.value = false);
  function n(s, a = Ce.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (fe(a, { [Ce.Unmount]() {
      t.value.splice(o, 1);
    }, [Ce.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Zt(t) && r.value && (e2 == null || e2()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, Ce.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Zi = Dt.RenderStrategy, lt = vueExports.defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t, attrs: r, slots: n, expose: i }) {
  let s = vueExports.ref(0);
  function a() {
    s.value |= G.Opening, t("beforeEnter");
  }
  function o() {
    s.value &= ~G.Opening, t("afterEnter");
  }
  function l() {
    s.value |= G.Closing, t("beforeLeave");
  }
  function u() {
    s.value &= ~G.Closing, t("afterLeave");
  }
  if (!Fu() && Xl())
    return () => vueExports.h(ut, { ...e2, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = vueExports.ref(null), v = vueExports.computed(() => e2.unmount ? Ce.Unmount : Ce.Hidden);
  i({ el: c, $el: c });
  let { show: g, appear: f } = ku(), { register: h, unregister: m } = Lu(), d = vueExports.ref(g.value ? "visible" : "hidden"), b = { value: true }, O = Ye(), A = { value: false }, S = Yi(() => {
    !A.value && d.value !== "hidden" && (d.value = "hidden", m(O), u());
  });
  vueExports.onMounted(() => {
    let F = h(O);
    vueExports.onUnmounted(F);
  }), vueExports.watchEffect(() => {
    if (v.value === Ce.Hidden && O) {
      if (g.value && d.value !== "visible") {
        d.value = "visible";
        return;
      }
      fe(d.value, { hidden: () => m(O), visible: () => h(O) });
    }
  });
  let $ = Ne(e2.enter), w = Ne(e2.enterFrom), _ = Ne(e2.enterTo), q = Ne(e2.entered), P = Ne(e2.leave), k = Ne(e2.leaveFrom), j = Ne(e2.leaveTo);
  vueExports.onMounted(() => {
    vueExports.watchEffect(() => {
      if (d.value === "visible") {
        let F = D(c);
        if (F instanceof Comment && F.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function H(F) {
    let E = b.value && !f.value, T = D(c);
    !T || !(T instanceof HTMLElement) || E || (A.value = true, g.value && a(), g.value || l(), F(g.value ? kn(T, $, w, _, q, (I) => {
      A.value = false, I === Er.Finished && o();
    }) : kn(T, P, k, j, q, (I) => {
      A.value = false, I === Er.Finished && (Zt(S) || (d.value = "hidden", m(O), u()));
    })));
  }
  return vueExports.onMounted(() => {
    vueExports.watch([g], (F, E, T) => {
      H(T), b.value = false;
    }, { immediate: true });
  }), vueExports.provide(nn, S), Kl(vueExports.computed(() => fe(d.value, { visible: G.Open, hidden: G.Closed }) | s.value)), () => {
    let { appear: F, show: E, enter: T, enterFrom: I, enterTo: C, entered: ge, leave: U, leaveFrom: ct, leaveTo: It, ...Ie } = e2, Ze = { ref: c }, Ae = { ...Ie, ...f.value && g.value && Et.isServer ? { class: vueExports.normalizeClass([r.class, Ie.class, ...$, ...w]) } : {} };
    return Z({ theirProps: Ae, ourProps: Ze, slot: {}, slots: n, attrs: r, features: Zi, visible: d.value === "visible", name: "TransitionChild" });
  };
} }), Ru = lt, ut = vueExports.defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t, attrs: r, slots: n }) {
  let i = Zr(), s = vueExports.computed(() => e2.show === null && i !== null ? (i.value & G.Open) === G.Open : e2.show);
  vueExports.watchEffect(() => {
    if (![true, false].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = vueExports.ref(s.value ? "visible" : "hidden"), o = Yi(() => {
    a.value = "hidden";
  }), l = vueExports.ref(true), u = { show: s, appear: vueExports.computed(() => e2.appear || !l.value) };
  return vueExports.onMounted(() => {
    vueExports.watchEffect(() => {
      l.value = false, s.value ? a.value = "visible" : Zt(o) || (a.value = "hidden");
    });
  }), vueExports.provide(nn, o), vueExports.provide(rn, u), () => {
    let c = Bi(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), v = { unmount: e2.unmount };
    return Z({ ourProps: { ...v, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [vueExports.h(Ru, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...v, ...c }, n.default)] }, attrs: {}, features: Zi, visible: a.value === "visible", name: "Transition" });
  };
} });
const Bu = {
  props: {
    defaultTitle: {
      type: String,
      required: false,
      default: ""
    },
    defaultText: {
      type: String,
      required: false,
      default: ""
    },
    defaultPasswordText: {
      type: String,
      required: false,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: false,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: false,
      default: ""
    },
    confirmPasswordRoute: {
      type: String,
      required: false,
      default: ""
    },
    confirmedPasswordStatusRoute: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false,
      password: "",
      passwordError: "",
      submitting: false
    };
  },
  computed: {
    hasConfirmModal: () => !!p.confirmModal.value,
    title: function() {
      var e2;
      return (e2 = p.confirmModal.value) != null && e2.title ? p.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e2;
      return (e2 = p.confirmModal.value) != null && e2.text ? p.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e2;
      return (e2 = p.confirmModal.value) != null && e2.confirmButton ? p.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e2;
      return (e2 = p.confirmModal.value) != null && e2.cancelButton ? p.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e2;
      return (e2 = p.confirmModal.value) != null && e2.confirmPassword ? p.confirmModal.value.confirmPassword : false;
    },
    confirmPasswordOnce: function() {
      var e2;
      return (e2 = p.confirmModal.value) != null && e2.confirmPasswordOnce ? p.confirmModal.value.confirmPasswordOnce : false;
    },
    confirmDanger: function() {
      var e2;
      return (e2 = p.confirmModal.value) != null && e2.confirmDanger ? p.confirmModal.value.confirmDanger : false;
    }
  },
  watch: {
    hasConfirmModal(e2) {
      e2 && (this.setIsOpen(true), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      p.confirmModal.value.rejectPromise(), this.setIsOpen(false), this.resetPassword();
    },
    resetPassword() {
      this.password = "", this.passwordError = "";
    },
    confirm() {
      if (!this.confirmPassword)
        return this.handleSuccess(null);
      this.submitting = true;
      let e2 = this.password;
      this.passwordError = "", ne.post(this.confirmPasswordRoute, { password: e2 }, { headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      } }).then(() => {
        this.handleSuccess(e2);
      }).catch((t) => {
        t.response.status === 422 ? this.passwordError = t.response.data.errors.password[0] : this.passwordError = "An error occurred. Please try again.";
      }).finally(() => {
        this.submitting = false;
      });
    },
    handleSuccess(e2) {
      p.confirmModal.value.resolvePromise(e2), this.setIsOpen(false), this.resetPassword();
    },
    async setIsOpen(e2) {
      if (e2 && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ne.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), p.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e2;
    },
    emitClose() {
      this.resetPassword(), p.clearConfirmModal();
    },
    setPassword(e2) {
      this.password = e2;
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      confirmPassword: this.confirmPassword,
      confirmDanger: this.confirmDanger,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      setPassword: this.setPassword,
      passwordError: this.passwordError,
      submitting: this.submitting,
      // These HeadlessUI exports will be removed in v1.0
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
};
function es(e2, t) {
  t = Yr(t, e2);
  for (var r = 0, n = t.length; e2 != null && r < n; )
    e2 = e2[$t(t[r++])];
  return r && r == n ? e2 : void 0;
}
function be(e2, t, r) {
  var n = e2 == null ? void 0 : es(e2, t);
  return n === void 0 ? r : n;
}
var ju = function() {
  try {
    var e2 = Qe(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch {
  }
}();
const Ln = ju;
function ts(e2, t, r) {
  t == "__proto__" && Ln ? Ln(e2, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e2[t] = r;
}
var Mu = Object.prototype, Du = Mu.hasOwnProperty;
function Nu(e2, t, r) {
  var n = e2[t];
  (!(Du.call(e2, t) && Kr(n, r)) || r === void 0 && !(t in e2)) && ts(e2, t, r);
}
function Vu(e2, t, r, n) {
  if (!J(e2))
    return e2;
  t = Yr(t, e2);
  for (var i = -1, s = t.length, a = s - 1, o = e2; o != null && ++i < s; ) {
    var l = $t(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e2;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = J(c) ? c : Rr(t[i + 1]) ? [] : {});
    }
    Nu(o, l, u), o = o[l];
  }
  return e2;
}
function St(e2, t, r) {
  return e2 == null ? e2 : Vu(e2, t, r);
}
const Hu = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: false
    },
    remember: {
      type: [Boolean, String],
      default: false,
      required: false
    },
    localStorage: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      values: Object.assign({}, { ...this.default })
    };
  },
  beforeMount() {
    if (this.remember) {
      let e2 = p.restore(this.remember, this.localStorage);
      e2 || (e2 = {}), this.values = Object.assign({}, { ...this.default, ...e2 });
    }
  },
  updated() {
    this.remember && p.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e2 = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e2.values);
        },
        get(t, r) {
          return be(e2.values, r);
        },
        set(t, r, n) {
          St(e2.values, r, n);
        }
      })
    ) : null;
  }
}, Uu = {
  props: {
    parsed: {
      type: Object,
      required: true
    },
    raw: {
      type: Object,
      required: true
    },
    remember: {
      type: Array,
      required: true
    },
    localStorage: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      stores: Object.assign({}, { ...this.parsed, ...this.raw })
    };
  },
  beforeMount() {
    this.remember.forEach((e2) => {
      let t = p.restore(e2, this.localStorage.includes(e2));
      this.stores[e2] = { ...this.stores[e2], ...t };
    });
  },
  updated() {
    this.remember.forEach((e2) => {
      p.remember(e2, { ...this.stores[e2] }, this.localStorage.includes(e2));
    });
  },
  render() {
    const e2 = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.stores, {
        ownKeys() {
          return Object.keys(e2.stores);
        },
        get(t, r) {
          return be(e2.stores, r);
        },
        set(t, r, n) {
          St(e2.stores, r, n);
        }
      })
    ) : null;
  }
};
var Wu = function() {
  return ve.Date.now();
};
const mr = Wu;
var zu = /\s/;
function Gu(e2) {
  for (var t = e2.length; t-- && zu.test(e2.charAt(t)); )
    ;
  return t;
}
var Xu = /^\s+/;
function Ku(e2) {
  return e2 && e2.slice(0, Gu(e2) + 1).replace(Xu, "");
}
var Rn = 0 / 0, Ju = /^[-+]0x[0-9a-f]+$/i, Qu = /^0b[01]+$/i, Yu = /^0o[0-7]+$/i, Zu = parseInt;
function Tr(e2) {
  if (typeof e2 == "number")
    return e2;
  if (Xt(e2))
    return Rn;
  if (J(e2)) {
    var t = typeof e2.valueOf == "function" ? e2.valueOf() : e2;
    e2 = J(t) ? t + "" : t;
  }
  if (typeof e2 != "string")
    return e2 === 0 ? e2 : +e2;
  e2 = Ku(e2);
  var r = Qu.test(e2);
  return r || Yu.test(e2) ? Zu(e2.slice(2), r ? 2 : 8) : Ju.test(e2) ? Rn : +e2;
}
var ec = "Expected a function", tc = Math.max, rc = Math.min;
function er(e2, t, r) {
  var n, i, s, a, o, l, u = 0, c = false, v = false, g = true;
  if (typeof e2 != "function")
    throw new TypeError(ec);
  t = Tr(t) || 0, J(r) && (c = !!r.leading, v = "maxWait" in r, s = v ? tc(Tr(r.maxWait) || 0, t) : s, g = "trailing" in r ? !!r.trailing : g);
  function f(w) {
    var _ = n, q = i;
    return n = i = void 0, u = w, a = e2.apply(q, _), a;
  }
  function h(w) {
    return u = w, o = setTimeout(b, t), c ? f(w) : a;
  }
  function m(w) {
    var _ = w - l, q = w - u, P = t - _;
    return v ? rc(P, s - q) : P;
  }
  function d(w) {
    var _ = w - l, q = w - u;
    return l === void 0 || _ >= t || _ < 0 || v && q >= s;
  }
  function b() {
    var w = mr();
    if (d(w))
      return O(w);
    o = setTimeout(b, m(w));
  }
  function O(w) {
    return o = void 0, g && n ? f(w) : (n = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : O(mr());
  }
  function $() {
    var w = mr(), _ = d(w);
    if (n = arguments, i = this, l = w, _) {
      if (o === void 0)
        return h(l);
      if (v)
        return clearTimeout(o), o = setTimeout(b, t), f(l);
    }
    return o === void 0 && (o = setTimeout(b, t)), a;
  }
  return $.cancel = A, $.flush = S, $;
}
const nc = {
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    request: {
      type: Object,
      required: false,
      default: () => ({})
    },
    manual: {
      type: Boolean,
      required: false,
      default: false
    },
    watchDebounce: {
      type: Number,
      required: false,
      default: 0
    },
    watchValue: {
      validator() {
        return true;
      },
      required: false,
      default: null
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: false,
      debounceFunction: null
    };
  },
  watch: {
    watchValue: {
      deep: true,
      handler() {
        this.processing = true, this.watchDebounce ? this.debounceFunction() : this.performRequest();
      }
    }
  },
  mounted() {
    this.manual || this.$nextTick(this.performRequest);
  },
  created() {
    this.debounceFunction = er(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = true;
      const e2 = {};
      this.acceptHeader && (e2.Accept = this.acceptHeader);
      const t = {
        url: this.url,
        method: this.method,
        headers: { ...e2, ...this.headers }
      };
      Object.keys(this.request).length > 0 && (t.data = this.request), ne(t).then((r) => {
        this.response = r.data, this.processing = false, this.$emit("success", r.data);
      }).catch(() => {
        this.processing = false, this.$emit("error");
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
}, ic = {
  data() {
    return {
      isActivated: true
    };
  },
  deactivated() {
    this.isActivated = false;
  },
  activated() {
    this.isActivated = true;
  },
  render() {
    return this.$slots.default({
      Dialog: en,
      DialogPanel: tn,
      isActivated: this.isActivated
    });
  }
}, rs = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    },
    closeOnEscape: {
      type: Boolean,
      required: false,
      default: true
    },
    ignoreInnerTargets: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e2) {
    const t = e2, r = vueExports.ref(null), n = vueExports.ref(null), i = vueExports.ref(null);
    return vueExports.onMounted(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), vueExports.onBeforeUnmount(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (vueExports.openBlock(), vueExports.createElementBlock("div", {
      ref_key: "root",
      ref: n
    }, [
      vueExports.renderSlot(s.$slots, "default")
    ], 512));
  }
};
function Q(e2) {
  if (e2 == null)
    return window;
  if (e2.toString() !== "[object Window]") {
    var t = e2.ownerDocument;
    return t && t.defaultView || window;
  }
  return e2;
}
function Xe(e2) {
  var t = Q(e2).Element;
  return e2 instanceof t || e2 instanceof Element;
}
function re(e2) {
  var t = Q(e2).HTMLElement;
  return e2 instanceof t || e2 instanceof HTMLElement;
}
function sn(e2) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = Q(e2).ShadowRoot;
  return e2 instanceof t || e2 instanceof ShadowRoot;
}
var ze = Math.max, Vt = Math.min, nt = Math.round;
function xr() {
  var e2 = navigator.userAgentData;
  return e2 != null && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ns() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function it(e2, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e2.getBoundingClientRect(), i = 1, s = 1;
  t && re(e2) && (i = e2.offsetWidth > 0 && nt(n.width) / e2.offsetWidth || 1, s = e2.offsetHeight > 0 && nt(n.height) / e2.offsetHeight || 1);
  var a = Xe(e2) ? Q(e2) : window, o = a.visualViewport, l = !ns() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, v = n.width / i, g = n.height / s;
  return {
    width: v,
    height: g,
    top: c,
    right: u + v,
    bottom: c + g,
    left: u,
    x: u,
    y: c
  };
}
function an(e2) {
  var t = Q(e2), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function sc(e2) {
  return {
    scrollLeft: e2.scrollLeft,
    scrollTop: e2.scrollTop
  };
}
function ac(e2) {
  return e2 === Q(e2) || !re(e2) ? an(e2) : sc(e2);
}
function pe(e2) {
  return e2 ? (e2.nodeName || "").toLowerCase() : null;
}
function je(e2) {
  return ((Xe(e2) ? e2.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e2.document
  )) || window.document).documentElement;
}
function on(e2) {
  return it(je(e2)).left + an(e2).scrollLeft;
}
function Ee(e2) {
  return Q(e2).getComputedStyle(e2);
}
function ln(e2) {
  var t = Ee(e2), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function oc(e2) {
  var t = e2.getBoundingClientRect(), r = nt(t.width) / e2.offsetWidth || 1, n = nt(t.height) / e2.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function lc(e2, t, r) {
  r === void 0 && (r = false);
  var n = re(t), i = re(t) && oc(t), s = je(t), a = it(e2, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((pe(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ln(s)) && (o = ac(t)), re(t) ? (l = it(t, true), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = on(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function is(e2) {
  var t = it(e2), r = e2.offsetWidth, n = e2.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e2.offsetLeft,
    y: e2.offsetTop,
    width: r,
    height: n
  };
}
function tr(e2) {
  return pe(e2) === "html" ? e2 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e2.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e2.parentNode || // DOM Element detected
    (sn(e2) ? e2.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    je(e2)
  );
}
function ss(e2) {
  return ["html", "body", "#document"].indexOf(pe(e2)) >= 0 ? e2.ownerDocument.body : re(e2) && ln(e2) ? e2 : ss(tr(e2));
}
function yt(e2, t) {
  var r;
  t === void 0 && (t = []);
  var n = ss(e2), i = n === ((r = e2.ownerDocument) == null ? void 0 : r.body), s = Q(n), a = i ? [s].concat(s.visualViewport || [], ln(n) ? n : []) : n, o = t.concat(a);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(yt(tr(a)))
  );
}
function uc(e2) {
  return ["table", "td", "th"].indexOf(pe(e2)) >= 0;
}
function Bn(e2) {
  return !re(e2) || // https://github.com/popperjs/popper-core/issues/837
  Ee(e2).position === "fixed" ? null : e2.offsetParent;
}
function cc(e2) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && re(e2)) {
    var n = Ee(e2);
    if (n.position === "fixed")
      return null;
  }
  var i = tr(e2);
  for (sn(i) && (i = i.host); re(i) && ["html", "body"].indexOf(pe(i)) < 0; ) {
    var s = Ee(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rr(e2) {
  for (var t = Q(e2), r = Bn(e2); r && uc(r) && Ee(r).position === "static"; )
    r = Bn(r);
  return r && (pe(r) === "html" || pe(r) === "body" && Ee(r).position === "static") ? t : r || cc(e2) || t;
}
var oe = "top", he = "bottom", Re = "right", we = "left", un = "auto", nr = [oe, he, Re, we], st = "start", Ot = "end", dc = "clippingParents", as = "viewport", mt = "popper", fc = "reference", jn = /* @__PURE__ */ nr.reduce(function(e2, t) {
  return e2.concat([t + "-" + st, t + "-" + Ot]);
}, []), pc = /* @__PURE__ */ [].concat(nr, [un]).reduce(function(e2, t) {
  return e2.concat([t, t + "-" + st, t + "-" + Ot]);
}, []), hc = "beforeRead", mc = "read", vc = "afterRead", gc = "beforeMain", yc = "main", bc = "afterMain", wc = "beforeWrite", Sc = "write", Oc = "afterWrite", $c = [hc, mc, vc, gc, yc, bc, wc, Sc, Oc];
function Ec(e2) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e2.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(s);
  }
  return e2.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function Tc(e2) {
  var t = Ec(e2);
  return $c.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function xc(e2) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e2());
      });
    })), t;
  };
}
function _c(e2) {
  var t = e2.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function Ic(e2, t) {
  var r = Q(e2), n = je(e2), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = ns();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + on(e2),
    y: l
  };
}
function Ac(e2) {
  var t, r = je(e2), n = an(e2), i = (t = e2.ownerDocument) == null ? void 0 : t.body, s = ze(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = ze(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + on(e2), l = -n.scrollTop;
  return Ee(i || r).direction === "rtl" && (o += ze(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Pc(e2, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e2.contains(t))
    return true;
  if (r && sn(r)) {
    var n = t;
    do {
      if (n && e2.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function _r(e2) {
  return Object.assign({}, e2, {
    left: e2.x,
    top: e2.y,
    right: e2.x + e2.width,
    bottom: e2.y + e2.height
  });
}
function qc(e2, t) {
  var r = it(e2, false, t === "fixed");
  return r.top = r.top + e2.clientTop, r.left = r.left + e2.clientLeft, r.bottom = r.top + e2.clientHeight, r.right = r.left + e2.clientWidth, r.width = e2.clientWidth, r.height = e2.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Mn(e2, t, r) {
  return t === as ? _r(Ic(e2, r)) : Xe(t) ? qc(t, r) : _r(Ac(je(e2)));
}
function Cc(e2) {
  var t = yt(tr(e2)), r = ["absolute", "fixed"].indexOf(Ee(e2).position) >= 0, n = r && re(e2) ? rr(e2) : e2;
  return Xe(n) ? t.filter(function(i) {
    return Xe(i) && Pc(i, n) && pe(i) !== "body";
  }) : [];
}
function Fc(e2, t, r, n) {
  var i = t === "clippingParents" ? Cc(e2) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Mn(e2, u, n);
    return l.top = ze(c.top, l.top), l.right = Vt(c.right, l.right), l.bottom = Vt(c.bottom, l.bottom), l.left = ze(c.left, l.left), l;
  }, Mn(e2, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Fe(e2) {
  return e2.split("-")[0];
}
function at(e2) {
  return e2.split("-")[1];
}
function os(e2) {
  return ["top", "bottom"].indexOf(e2) >= 0 ? "x" : "y";
}
function ls(e2) {
  var t = e2.reference, r = e2.element, n = e2.placement, i = n ? Fe(n) : null, s = n ? at(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case oe:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case he:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Re:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case we:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? os(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case st:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Ot:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function us() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function kc(e2) {
  return Object.assign({}, us(), e2);
}
function Lc(e2, t) {
  return t.reduce(function(r, n) {
    return r[n] = e2, r;
  }, {});
}
function cn(e2, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e2.placement : n, s = r.strategy, a = s === void 0 ? e2.strategy : s, o = r.boundary, l = o === void 0 ? dc : o, u = r.rootBoundary, c = u === void 0 ? as : u, v = r.elementContext, g = v === void 0 ? mt : v, f = r.altBoundary, h = f === void 0 ? false : f, m = r.padding, d = m === void 0 ? 0 : m, b = kc(typeof d != "number" ? d : Lc(d, nr)), O = g === mt ? fc : mt, A = e2.rects.popper, S = e2.elements[h ? O : g], $ = Fc(Xe(S) ? S : S.contextElement || je(e2.elements.popper), l, c, a), w = it(e2.elements.reference), _ = ls({
    reference: w,
    element: A,
    strategy: "absolute",
    placement: i
  }), q = _r(Object.assign({}, A, _)), P = g === mt ? q : w, k = {
    top: $.top - P.top + b.top,
    bottom: P.bottom - $.bottom + b.bottom,
    left: $.left - P.left + b.left,
    right: P.right - $.right + b.right
  }, j = e2.modifiersData.offset;
  if (g === mt && j) {
    var H = j[i];
    Object.keys(k).forEach(function(F) {
      var E = [Re, he].indexOf(F) >= 0 ? 1 : -1, T = [oe, he].indexOf(F) >= 0 ? "y" : "x";
      k[F] += H[T] * E;
    });
  }
  return k;
}
var Dn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Nn() {
  for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Rc(e2) {
  e2 === void 0 && (e2 = {});
  var t = e2, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Dn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, v = [], g = false, f = {
      state: c,
      setOptions: function(b) {
        var O = typeof b == "function" ? b(c.options) : b;
        m(), c.options = Object.assign({}, s, c.options, O), c.scrollParents = {
          reference: Xe(o) ? yt(o) : o.contextElement ? yt(o.contextElement) : [],
          popper: yt(l)
        };
        var A = Tc(_c([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = A.filter(function(S) {
          return S.enabled;
        }), h(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var b = c.elements, O = b.reference, A = b.popper;
          if (Nn(O, A)) {
            c.rects = {
              reference: lc(O, rr(A), c.options.strategy === "fixed"),
              popper: is(A)
            }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(k) {
              return c.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === true) {
                c.reset = false, S = -1;
                continue;
              }
              var $ = c.orderedModifiers[S], w = $.fn, _ = $.options, q = _ === void 0 ? {} : _, P = $.name;
              typeof w == "function" && (c = w({
                state: c,
                options: q,
                name: P,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xc(function() {
        return new Promise(function(d) {
          f.forceUpdate(), d(c);
        });
      }),
      destroy: function() {
        m(), g = true;
      }
    };
    if (!Nn(o, l))
      return f;
    f.setOptions(u).then(function(d) {
      !g && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function h() {
      c.orderedModifiers.forEach(function(d) {
        var b = d.name, O = d.options, A = O === void 0 ? {} : O, S = d.effect;
        if (typeof S == "function") {
          var $ = S({
            state: c,
            name: b,
            instance: f,
            options: A
          }), w = function() {
          };
          v.push($ || w);
        }
      });
    }
    function m() {
      v.forEach(function(d) {
        return d();
      }), v = [];
    }
    return f;
  };
}
var Ft = {
  passive: true
};
function Bc(e2) {
  var t = e2.state, r = e2.instance, n = e2.options, i = n.scroll, s = i === void 0 ? true : i, a = n.resize, o = a === void 0 ? true : a, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ft);
  }), o && l.addEventListener("resize", r.update, Ft), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ft);
    }), o && l.removeEventListener("resize", r.update, Ft);
  };
}
const jc = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: Bc,
  data: {}
};
function Mc(e2) {
  var t = e2.state, r = e2.name;
  t.modifiersData[r] = ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Dc = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Mc,
  data: {}
};
var Nc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vc(e2, t) {
  var r = e2.x, n = e2.y, i = t.devicePixelRatio || 1;
  return {
    x: nt(r * i) / i || 0,
    y: nt(n * i) / i || 0
  };
}
function Vn(e2) {
  var t, r = e2.popper, n = e2.popperRect, i = e2.placement, s = e2.variation, a = e2.offsets, o = e2.position, l = e2.gpuAcceleration, u = e2.adaptive, c = e2.roundOffsets, v = e2.isFixed, g = a.x, f = g === void 0 ? 0 : g, h = a.y, m = h === void 0 ? 0 : h, d = typeof c == "function" ? c({
    x: f,
    y: m
  }) : {
    x: f,
    y: m
  };
  f = d.x, m = d.y;
  var b = a.hasOwnProperty("x"), O = a.hasOwnProperty("y"), A = we, S = oe, $ = window;
  if (u) {
    var w = rr(r), _ = "clientHeight", q = "clientWidth";
    if (w === Q(r) && (w = je(r), Ee(w).position !== "static" && o === "absolute" && (_ = "scrollHeight", q = "scrollWidth")), w = w, i === oe || (i === we || i === Re) && s === Ot) {
      S = he;
      var P = v && w === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      m -= P - n.height, m *= l ? 1 : -1;
    }
    if (i === we || (i === oe || i === he) && s === Ot) {
      A = Re;
      var k = v && w === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[q]
      );
      f -= k - n.width, f *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: o
  }, u && Nc), H = c === true ? Vc({
    x: f,
    y: m
  }, Q(r)) : {
    x: f,
    y: m
  };
  if (f = H.x, m = H.y, l) {
    var F;
    return Object.assign({}, j, (F = {}, F[S] = O ? "0" : "", F[A] = b ? "0" : "", F.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", F));
  }
  return Object.assign({}, j, (t = {}, t[S] = O ? m + "px" : "", t[A] = b ? f + "px" : "", t.transform = "", t));
}
function Hc(e2) {
  var t = e2.state, r = e2.options, n = r.gpuAcceleration, i = n === void 0 ? true : n, s = r.adaptive, a = s === void 0 ? true : s, o = r.roundOffsets, l = o === void 0 ? true : o, u = {
    placement: Fe(t.placement),
    variation: at(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Vn(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vn(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Uc = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Hc,
  data: {}
};
function Wc(e2) {
  var t = e2.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !re(s) || !pe(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === false ? s.removeAttribute(a) : s.setAttribute(a, o === true ? "" : o);
    }));
  });
}
function zc(e2) {
  var t = e2.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !re(i) || !pe(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Gc = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Wc,
  effect: zc,
  requires: ["computeStyles"]
};
var Xc = [jc, Dc, Uc, Gc], Kc = /* @__PURE__ */ Rc({
  defaultModifiers: Xc
});
function Jc(e2) {
  return e2 === "x" ? "y" : "x";
}
function Rt(e2, t, r) {
  return ze(e2, Vt(t, r));
}
function Qc(e2, t, r) {
  var n = Rt(e2, t, r);
  return n > r ? r : n;
}
function Yc(e2) {
  var t = e2.state, r = e2.options, n = e2.name, i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? false : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, v = r.padding, g = r.tether, f = g === void 0 ? true : g, h = r.tetherOffset, m = h === void 0 ? 0 : h, d = cn(t, {
    boundary: l,
    rootBoundary: u,
    padding: v,
    altBoundary: c
  }), b = Fe(t.placement), O = at(t.placement), A = !O, S = os(b), $ = Jc(S), w = t.modifiersData.popperOffsets, _ = t.rects.reference, q = t.rects.popper, P = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, k = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
    x: 0,
    y: 0
  };
  if (w) {
    if (s) {
      var F, E = S === "y" ? oe : we, T = S === "y" ? he : Re, I = S === "y" ? "height" : "width", C = w[S], ge = C + d[E], U = C - d[T], ct = f ? -q[I] / 2 : 0, It = O === st ? _[I] : q[I], Ie = O === st ? -q[I] : -_[I], Ze = t.elements.arrow, Ae = f && Ze ? is(Ze) : {
        width: 0,
        height: 0
      }, Pe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : us(), dt = Pe[E], At = Pe[T], Me = Rt(0, _[I], Ae[I]), sr = A ? _[I] / 2 - ct - Me - dt - k.mainAxis : It - Me - dt - k.mainAxis, Ss = A ? -_[I] / 2 + ct + Me + At + k.mainAxis : Ie + Me + At + k.mainAxis, ar = t.elements.arrow && rr(t.elements.arrow), Os = ar ? S === "y" ? ar.clientTop || 0 : ar.clientLeft || 0 : 0, hn = (F = j == null ? void 0 : j[S]) != null ? F : 0, $s = C + sr - hn - Os, Es = C + Ss - hn, mn = Rt(f ? Vt(ge, $s) : ge, C, f ? ze(U, Es) : U);
      w[S] = mn, H[S] = mn - C;
    }
    if (o) {
      var vn, Ts = S === "x" ? oe : we, xs = S === "x" ? he : Re, De = w[$], Pt = $ === "y" ? "height" : "width", gn = De + d[Ts], yn = De - d[xs], or = [oe, we].indexOf(b) !== -1, bn = (vn = j == null ? void 0 : j[$]) != null ? vn : 0, wn = or ? gn : De - _[Pt] - q[Pt] - bn + k.altAxis, Sn = or ? De + _[Pt] + q[Pt] - bn - k.altAxis : yn, On = f && or ? Qc(wn, De, Sn) : Rt(f ? wn : gn, De, f ? Sn : yn);
      w[$] = On, H[$] = On - De;
    }
    t.modifiersData[n] = H;
  }
}
const Zc = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Yc,
  requiresIfExists: ["offset"]
};
var ed = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bt(e2) {
  return e2.replace(/left|right|bottom|top/g, function(t) {
    return ed[t];
  });
}
var td = {
  start: "end",
  end: "start"
};
function Hn(e2) {
  return e2.replace(/start|end/g, function(t) {
    return td[t];
  });
}
function rd(e2, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? pc : l, c = at(n), v = c ? o ? jn : jn.filter(function(h) {
    return at(h) === c;
  }) : nr, g = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  g.length === 0 && (g = v);
  var f = g.reduce(function(h, m) {
    return h[m] = cn(e2, {
      placement: m,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Fe(m)], h;
  }, {});
  return Object.keys(f).sort(function(h, m) {
    return f[h] - f[m];
  });
}
function nd(e2) {
  if (Fe(e2) === un)
    return [];
  var t = Bt(e2);
  return [Hn(e2), t, Hn(t)];
}
function id(e2) {
  var t = e2.state, r = e2.options, n = e2.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? true : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, v = r.rootBoundary, g = r.altBoundary, f = r.flipVariations, h = f === void 0 ? true : f, m = r.allowedAutoPlacements, d = t.options.placement, b = Fe(d), O = b === d, A = l || (O || !h ? [Bt(d)] : nd(d)), S = [d].concat(A).reduce(function(Ae, Pe) {
      return Ae.concat(Fe(Pe) === un ? rd(t, {
        placement: Pe,
        boundary: c,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : Pe);
    }, []), $ = t.rects.reference, w = t.rects.popper, _ = /* @__PURE__ */ new Map(), q = true, P = S[0], k = 0; k < S.length; k++) {
      var j = S[k], H = Fe(j), F = at(j) === st, E = [oe, he].indexOf(H) >= 0, T = E ? "width" : "height", I = cn(t, {
        placement: j,
        boundary: c,
        rootBoundary: v,
        altBoundary: g,
        padding: u
      }), C = E ? F ? Re : we : F ? he : oe;
      $[T] > w[T] && (C = Bt(C));
      var ge = Bt(C), U = [];
      if (s && U.push(I[H] <= 0), o && U.push(I[C] <= 0, I[ge] <= 0), U.every(function(Ae) {
        return Ae;
      })) {
        P = j, q = false;
        break;
      }
      _.set(j, U);
    }
    if (q)
      for (var ct = h ? 3 : 1, It = function(Pe) {
        var dt = S.find(function(At) {
          var Me = _.get(At);
          if (Me)
            return Me.slice(0, Pe).every(function(sr) {
              return sr;
            });
        });
        if (dt)
          return P = dt, "break";
      }, Ie = ct; Ie > 0; Ie--) {
        var Ze = It(Ie);
        if (Ze === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = true, t.placement = P, t.reset = true);
  }
}
const sd = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: id,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}, _e = (e2, t) => {
  const r = e2.__vccOpts || e2;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ad = {
  components: {
    OnClickOutside: rs
  },
  props: {
    spladeId: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: "bottom-start",
      required: false
    },
    strategy: {
      type: String,
      default: "absolute",
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    teleport: {
      type: Boolean,
      default: false,
      required: false
    },
    closeOnClick: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      opened: false,
      popper: null
    };
  },
  computed: {
    buttonStyle() {
      return this.inline ? { display: "inline" } : {};
    },
    wrapperStyle() {
      const e2 = { position: "relative" };
      return this.inline && (e2.display = "inline"), e2;
    }
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted: async function() {
    this.teleport && await vueExports.nextTick();
    const e2 = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Kc(this.$refs.button, e2, {
      placement: this.placement,
      modifiers: [sd, Zc],
      strategy: this.strategy
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  }
}, od = { ref: "tooltip" };
function ld(e2, t, r, n, i, s) {
  const a = vueExports.resolveComponent("OnClickOutside");
  return vueExports.openBlock(), vueExports.createBlock(a, {
    style: vueExports.normalizeStyle(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: vueExports.withCtx(() => [
      vueExports.createElementVNode("div", {
        ref: "button",
        style: vueExports.normalizeStyle(s.buttonStyle)
      }, [
        vueExports.renderSlot(e2.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      vueExports.createElementVNode("div", od, [
        vueExports.renderSlot(e2.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const ud = /* @__PURE__ */ _e(ad, [["render", ld]]), cd = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  setup(e2) {
    const t = vueExports.inject("$splade") || {}, r = vueExports.inject("$spladeOptions") || {};
    return (n, i) => vueExports.unref(t).isSsr ? (vueExports.openBlock(), vueExports.createBlock(ue, {
      key: e2.keepAliveKey,
      html: vueExports.unref(t).htmlForDynamicComponent(e2.name),
      passthrough: e2.passthrough
    }, null, 8, ["html", "passthrough"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.KeepAlive, {
      key: 0,
      max: vueExports.unref(r).max_keep_alive
    }, [
      (vueExports.openBlock(), vueExports.createBlock(ue, {
        key: e2.keepAliveKey,
        html: vueExports.unref(t).htmlForDynamicComponent(e2.name),
        passthrough: e2.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function cs(e2) {
  return e2 && e2.length ? e2[0] : void 0;
}
const dd = {
  inject: ["stack"],
  computed: {
    values() {
      return p.validationErrors(this.stack);
    }
  },
  render() {
    const e2 = this;
    return this.$slots.default({
      has(t) {
        return W(e2.values, t);
      },
      first(t) {
        return cs(e2.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, fd = {
  inject: ["stack"],
  props: {
    private: {
      type: Boolean,
      required: false,
      default: false
    },
    channel: {
      type: String,
      required: true
    },
    listeners: {
      type: Array,
      required: true
    },
    preserveScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["subscribed", "event"],
  data() {
    return {
      subscribed: false,
      subscription: null,
      subscriptions: [],
      events: [],
      pendingVisit: null,
      pendingRefresh: false
    };
  },
  computed: {
    currentStack() {
      return p.currentStack.value;
    }
  },
  watch: {
    currentStack() {
      this.handlePendingVisit(), this.handlePendingRefresh();
    },
    pendingVisit() {
      this.handlePendingVisit();
    },
    pendingRefresh() {
      this.handlePendingRefresh();
    }
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription ? this.bindListeners() : console.error("[Splade Event component] Unable to subscribe to channel: " + this.channel);
  },
  methods: {
    handlePendingVisit() {
      this.pendingVisit && p.currentStack.value === this.stack && (p.visit(this.pendingVisit), this.pendingVisit = null);
    },
    handlePendingRefresh() {
      this.pendingRefresh && p.currentStack.value === this.stack && (p.refresh(this.pendingRefresh.preserveScroll || this.preserveScroll), this.pendingRefresh = false);
    },
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = true, this.$emit("subscribed");
      }), this.listeners.forEach((e2) => {
        const t = this.subscription.listen(e2, (r) => {
          this.$emit("event", { name: e2, data: r });
          const n = "splade.preserveScroll", i = "splade.redirect", s = "splade.refresh", a = "splade.toast";
          let o = null, l = false, u = false, c = [];
          te(r, (v) => {
            J(v) && (i in v && (o = v[i]), n in v && (l = v[n]), s in v && (u = v[s]), a in v && c.push(v));
          }), o ? this.pendingVisit = o : u ? this.pendingRefresh = { preserveScroll: l } : this.events.push({ name: e2, data: r }), c.length > 0 && c.forEach((v) => {
            p.pushToast(v);
          }), this.$root.$emit(`event.${e2}`, r);
        });
        this.subscriptions.push(t);
      });
    },
    unsubscribe() {
      this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
    }
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
};
function pd() {
  this.__data__ = new Te(), this.size = 0;
}
function hd(e2) {
  var t = this.__data__, r = t.delete(e2);
  return this.size = t.size, r;
}
function md(e2) {
  return this.__data__.get(e2);
}
function vd(e2) {
  return this.__data__.has(e2);
}
var gd = 200;
function yd(e2, t) {
  var r = this.__data__;
  if (r instanceof Te) {
    var n = r.__data__;
    if (!wt || n.length < gd - 1)
      return n.push([e2, t]), this.size = ++r.size, this;
    r = this.__data__ = new xe(n);
  }
  return r.set(e2, t), this.size = r.size, this;
}
function Se(e2) {
  var t = this.__data__ = new Te(e2);
  this.size = t.size;
}
Se.prototype.clear = pd;
Se.prototype.delete = hd;
Se.prototype.get = md;
Se.prototype.has = vd;
Se.prototype.set = yd;
var bd = "__lodash_hash_undefined__";
function wd(e2) {
  return this.__data__.set(e2, bd), this;
}
function Sd(e2) {
  return this.__data__.has(e2);
}
function Ht(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.__data__ = new xe(); ++t < r; )
    this.add(e2[t]);
}
Ht.prototype.add = Ht.prototype.push = wd;
Ht.prototype.has = Sd;
function Od(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length; ++r < n; )
    if (t(e2[r], r, e2))
      return true;
  return false;
}
function $d(e2, t) {
  return e2.has(t);
}
var Ed = 1, Td = 2;
function ds(e2, t, r, n, i, s) {
  var a = r & Ed, o = e2.length, l = t.length;
  if (o != l && !(a && l > o))
    return false;
  var u = s.get(e2), c = s.get(t);
  if (u && c)
    return u == t && c == e2;
  var v = -1, g = true, f = r & Td ? new Ht() : void 0;
  for (s.set(e2, t), s.set(t, e2); ++v < o; ) {
    var h = e2[v], m = t[v];
    if (n)
      var d = a ? n(m, h, v, t, e2, s) : n(h, m, v, e2, t, s);
    if (d !== void 0) {
      if (d)
        continue;
      g = false;
      break;
    }
    if (f) {
      if (!Od(t, function(b, O) {
        if (!$d(f, O) && (h === b || i(h, b, r, n, s)))
          return f.push(O);
      })) {
        g = false;
        break;
      }
    } else if (!(h === m || i(h, m, r, n, s))) {
      g = false;
      break;
    }
  }
  return s.delete(e2), s.delete(t), g;
}
var xd = ve.Uint8Array;
const Un = xd;
function _d(e2) {
  var t = -1, r = Array(e2.size);
  return e2.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Id(e2) {
  var t = -1, r = Array(e2.size);
  return e2.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ad = 1, Pd = 2, qd = "[object Boolean]", Cd = "[object Date]", Fd = "[object Error]", kd = "[object Map]", Ld = "[object Number]", Rd = "[object RegExp]", Bd = "[object Set]", jd = "[object String]", Md = "[object Symbol]", Dd = "[object ArrayBuffer]", Nd = "[object DataView]", Wn = ke ? ke.prototype : void 0, vr = Wn ? Wn.valueOf : void 0;
function Vd(e2, t, r, n, i, s, a) {
  switch (r) {
    case Nd:
      if (e2.byteLength != t.byteLength || e2.byteOffset != t.byteOffset)
        return false;
      e2 = e2.buffer, t = t.buffer;
    case Dd:
      return !(e2.byteLength != t.byteLength || !s(new Un(e2), new Un(t)));
    case qd:
    case Cd:
    case Ld:
      return Kr(+e2, +t);
    case Fd:
      return e2.name == t.name && e2.message == t.message;
    case Rd:
    case jd:
      return e2 == t + "";
    case kd:
      var o = _d;
    case Bd:
      var l = n & Ad;
      if (o || (o = Id), e2.size != t.size && !l)
        return false;
      var u = a.get(e2);
      if (u)
        return u == t;
      n |= Pd, a.set(e2, t);
      var c = ds(o(e2), o(t), n, i, s, a);
      return a.delete(e2), c;
    case Md:
      if (vr)
        return vr.call(e2) == vr.call(t);
  }
  return false;
}
function Hd(e2, t) {
  for (var r = -1, n = t.length, i = e2.length; ++r < n; )
    e2[i + r] = t[r];
  return e2;
}
function Ud(e2, t, r) {
  var n = t(e2);
  return M(e2) ? n : Hd(n, r(e2));
}
function fs(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length, i = 0, s = []; ++r < n; ) {
    var a = e2[r];
    t(a, r, e2) && (s[i++] = a);
  }
  return s;
}
function Wd() {
  return [];
}
var zd = Object.prototype, Gd = zd.propertyIsEnumerable, zn = Object.getOwnPropertySymbols, Xd = zn ? function(e2) {
  return e2 == null ? [] : (e2 = Object(e2), fs(zn(e2), function(t) {
    return Gd.call(e2, t);
  }));
} : Wd;
const Kd = Xd;
function Gn(e2) {
  return Ud(e2, Wt, Kd);
}
var Jd = 1, Qd = Object.prototype, Yd = Qd.hasOwnProperty;
function Zd(e2, t, r, n, i, s) {
  var a = r & Jd, o = Gn(e2), l = o.length, u = Gn(t), c = u.length;
  if (l != c && !a)
    return false;
  for (var v = l; v--; ) {
    var g = o[v];
    if (!(a ? g in t : Yd.call(t, g)))
      return false;
  }
  var f = s.get(e2), h = s.get(t);
  if (f && h)
    return f == t && h == e2;
  var m = true;
  s.set(e2, t), s.set(t, e2);
  for (var d = a; ++v < l; ) {
    g = o[v];
    var b = e2[g], O = t[g];
    if (n)
      var A = a ? n(O, b, g, t, e2, s) : n(b, O, g, e2, t, s);
    if (!(A === void 0 ? b === O || i(b, O, r, n, s) : A)) {
      m = false;
      break;
    }
    d || (d = g == "constructor");
  }
  if (m && !d) {
    var S = e2.constructor, $ = t.constructor;
    S != $ && "constructor" in e2 && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof $ == "function" && $ instanceof $) && (m = false);
  }
  return s.delete(e2), s.delete(t), m;
}
var ef = Qe(ve, "DataView");
const Ir = ef;
var tf = Qe(ve, "Promise");
const Ar = tf;
var rf = Qe(ve, "Set");
const Pr = rf;
var nf = Qe(ve, "WeakMap");
const qr = nf;
var Xn = "[object Map]", sf = "[object Object]", Kn = "[object Promise]", Jn = "[object Set]", Qn = "[object WeakMap]", Yn = "[object DataView]", af = Je(Ir), of = Je(wt), lf = Je(Ar), uf = Je(Pr), cf = Je(qr), Ve = Be;
(Ir && Ve(new Ir(new ArrayBuffer(1))) != Yn || wt && Ve(new wt()) != Xn || Ar && Ve(Ar.resolve()) != Kn || Pr && Ve(new Pr()) != Jn || qr && Ve(new qr()) != Qn) && (Ve = function(e2) {
  var t = Be(e2), r = t == sf ? e2.constructor : void 0, n = r ? Je(r) : "";
  if (n)
    switch (n) {
      case af:
        return Yn;
      case of:
        return Xn;
      case lf:
        return Kn;
      case uf:
        return Jn;
      case cf:
        return Qn;
    }
  return t;
});
const Zn = Ve;
var df = 1, ei = "[object Arguments]", ti = "[object Array]", kt = "[object Object]", ff = Object.prototype, ri = ff.hasOwnProperty;
function pf(e2, t, r, n, i, s) {
  var a = M(e2), o = M(t), l = a ? ti : Zn(e2), u = o ? ti : Zn(t);
  l = l == ei ? kt : l, u = u == ei ? kt : u;
  var c = l == kt, v = u == kt, g = l == u;
  if (g && yr(e2)) {
    if (!yr(t))
      return false;
    a = true, c = false;
  }
  if (g && !c)
    return s || (s = new Se()), a || hi(e2) ? ds(e2, t, r, n, i, s) : Vd(e2, t, l, r, n, i, s);
  if (!(r & df)) {
    var f = c && ri.call(e2, "__wrapped__"), h = v && ri.call(t, "__wrapped__");
    if (f || h) {
      var m = f ? e2.value() : e2, d = h ? t.value() : t;
      return s || (s = new Se()), i(m, d, r, n, s);
    }
  }
  return g ? (s || (s = new Se()), Zd(e2, t, r, n, i, s)) : false;
}
function ir(e2, t, r, n, i) {
  return e2 === t ? true : e2 == null || t == null || !Le(e2) && !Le(t) ? e2 !== e2 && t !== t : pf(e2, t, r, n, ir, i);
}
var hf = 1, mf = 2;
function vf(e2, t, r, n) {
  var i = r.length, s = i, a = !n;
  if (e2 == null)
    return !s;
  for (e2 = Object(e2); i--; ) {
    var o = r[i];
    if (a && o[2] ? o[1] !== e2[o[0]] : !(o[0] in e2))
      return false;
  }
  for (; ++i < s; ) {
    o = r[i];
    var l = o[0], u = e2[l], c = o[1];
    if (a && o[2]) {
      if (u === void 0 && !(l in e2))
        return false;
    } else {
      var v = new Se();
      if (n)
        var g = n(u, c, l, e2, t, v);
      if (!(g === void 0 ? ir(c, u, hf | mf, n, v) : g))
        return false;
    }
  }
  return true;
}
function ps(e2) {
  return e2 === e2 && !J(e2);
}
function gf(e2) {
  for (var t = Wt(e2), r = t.length; r--; ) {
    var n = t[r], i = e2[n];
    t[r] = [n, i, ps(i)];
  }
  return t;
}
function hs(e2, t) {
  return function(r) {
    return r == null ? false : r[e2] === t && (t !== void 0 || e2 in Object(r));
  };
}
function yf(e2) {
  var t = gf(e2);
  return t.length == 1 && t[0][2] ? hs(t[0][0], t[0][1]) : function(r) {
    return r === e2 || vf(r, e2, t);
  };
}
function bf(e2, t) {
  return e2 != null && t in Object(e2);
}
function wf(e2, t) {
  return e2 != null && ki(e2, t, bf);
}
var Sf = 1, Of = 2;
function $f(e2, t) {
  return Xr(e2) && ps(t) ? hs($t(e2), t) : function(r) {
    var n = be(r, e2);
    return n === void 0 && n === t ? wf(r, e2) : ir(t, n, Sf | Of);
  };
}
function Ef(e2) {
  return function(t) {
    return t == null ? void 0 : t[e2];
  };
}
function Tf(e2) {
  return function(t) {
    return es(t, e2);
  };
}
function xf(e2) {
  return Xr(e2) ? Ef($t(e2)) : Tf(e2);
}
function _t(e2) {
  return typeof e2 == "function" ? e2 : e2 == null ? vi : typeof e2 == "object" ? M(e2) ? $f(e2[0], e2[1]) : yf(e2) : xf(e2);
}
function _f(e2) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ut(t)) {
      var s = _t(r);
      t = Wt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e2(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function If(e2, t, r, n) {
  for (var i = e2.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e2[s], s, e2))
      return s;
  return -1;
}
var ni = 1 / 0, Af = 17976931348623157e292;
function Pf(e2) {
  if (!e2)
    return e2 === 0 ? e2 : 0;
  if (e2 = Tr(e2), e2 === ni || e2 === -ni) {
    var t = e2 < 0 ? -1 : 1;
    return t * Af;
  }
  return e2 === e2 ? e2 : 0;
}
function dn(e2) {
  var t = Pf(e2), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var qf = Math.max;
function Cf(e2, t, r) {
  var n = e2 == null ? 0 : e2.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : dn(r);
  return i < 0 && (i = qf(n + i, 0)), If(e2, _t(t), i);
}
var Ff = _f(Cf);
const fn = Ff, kf = {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    },
    filepond: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    jsFilepondOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    preview: {
      type: Boolean,
      required: false,
      default: false
    },
    server: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    accept: {
      type: Array,
      required: false,
      default: () => []
    },
    minFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    maxFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    minImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    existingSuffix: {
      type: String,
      required: false,
      default: "_existing"
    },
    orderSuffix: {
      type: String,
      required: false,
      default: "_order"
    },
    dusk: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: [],
      hadExistingFiles: false
    };
  },
  computed: {
    existingField() {
      return this.field + this.existingSuffix;
    },
    orderField() {
      return this.field + this.orderSuffix;
    },
    handlesExistingFiles() {
      return this.existingSuffix && this.hadExistingFiles;
    }
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]');
    const e2 = this.form[this.field];
    this.hadExistingFiles = this.multiple && e2.length > 0 || !this.multiple && e2, this.form.$put(this.field, this.multiple ? [] : null), this.filepond && (this.setExisting(e2), this.initFilepond(e2 || []).then(() => {
      this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
    }));
  },
  methods: {
    /*
     * This extracts the encrypted string from the backend data.
     */
    extractMetadataFromExistingFile(e2) {
      return e2 ? se(e2) ? e2 : M(e2) ? e2.map(this.extractMetadataFromExistingFile) : J(e2) ? e2.options.metadata.metadata : null : null;
    },
    /**
     * This sets the existing files on the form.
     */
    setExisting(e2) {
      this.handlesExistingFiles && (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e2)), this.setOrder());
    },
    /**
     * This determines the order of all files, existing and new, and sets it on the form.
     */
    setOrder() {
      if (!this.multiple || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    /**
     * This is meant for external URLs.
     */
    addFileToFilepond(e2) {
      e2 && this.filepondInstance.addFile(e2);
    },
    addFilesToFilepond(e2) {
      e2.forEach((t) => this.addFileToFilepond(t));
    },
    loadFilepondPlugins() {
      const e2 = [];
      return this.preview && (e2.push(import("filepond-plugin-image-exif-orientation")), e2.push(import("filepond-plugin-image-preview"))), this.accept.length > 0 && e2.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e2.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e2.push(import("filepond-plugin-image-validate-size")), Promise.all(e2);
    },
    initFilepond(e2) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status <= 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), o.setAttribute("data-server", !!r.server), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(a, o) {
              a || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(a, o) {
              a || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(a, o) {
              a || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e2 : [e2]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            // This handles to loading of the file preview of existing files.
            load: (a, o, l, u, c) => {
              const g = ne.CancelToken.source();
              return ne({
                url: a.preview_url,
                method: "GET",
                cancelToken: g.token,
                responseType: "blob"
              }).then((f) => {
                const h = new File([f.data], a.name, { type: a.type });
                o(h);
              }).catch(function(f) {
                axios.isCancel(f) || l(f);
              }), {
                abort: () => {
                  g.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, v, g) => {
            const f = new FormData();
            f.append("file", o, o.name);
            const m = ne.CancelToken.source();
            ne({
              url: r.server,
              method: "POST",
              data: f,
              cancelToken: m.token,
              onUploadProgress: (d) => {
                v(d.lengthComputable, d.loaded, d.total);
              }
            }).then((d) => {
              d.status >= 200 && d.status < 300 ? u(d.data) : c(d.statusText);
            }).catch(function(d) {
              var b;
              axios.isCancel(d) ? g() : c((b = d.response) == null ? void 0 : b.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            ne({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), (s.itemInsertLocation === "before" || s.itemInsertLocation === "after") && (s.itemInsertLocationFreedom = false), this.loadFilepondPlugins(i).then((a) => {
            a.length > 0 && i.registerPlugin(...a.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, s);
          });
        });
      });
    },
    removeFile(e2) {
      this.server && (e2 = fn(this.uploadedFiles, (t) => t.file === e2).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e2) : null);
    },
    addFiles(e2) {
      if (this.multiple) {
        const t = this.form[this.field];
        e2.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e2[0]), this.setExisting(null);
      this.filepond || this.updateFilenames();
    },
    updateFilenames() {
      this.filenames = [];
      const e2 = this.form[this.field];
      this.multiple ? e2.forEach((t) => {
        this.filenames.push(t.name);
      }) : e2 && this.filenames.push(e2.name);
    },
    handleFileInput(e2) {
      this.form.$put(this.field, this.multiple ? [] : null);
      const t = Object.values(e2.target.files);
      this.addFiles(t);
    }
  }
}, Lf = { ref: "file" };
function Rf(e2, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", Lf, [
    vueExports.renderSlot(e2.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Bf = /* @__PURE__ */ _e(kf, [["render", Rf]]), jf = {
  inject: ["stack"],
  computed: {
    values() {
      return p.flashData(this.stack);
    }
  },
  render() {
    const e2 = this;
    return this.$slots.default({
      has(t) {
        return W(e2.values, t);
      },
      ...this.values
    });
  }
};
function pn(e2, t, r) {
  e2 = e2 || {}, t = t || new FormData(), r = r || null;
  for (const n in e2)
    Object.prototype.hasOwnProperty.call(e2, n) && vs(t, ms(r, n), e2[n]);
  return t;
}
function ms(e2, t) {
  return e2 ? e2 + "[" + t + "]" : t;
}
function vs(e2, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => vs(e2, ms(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e2.append(t, r.toISOString());
  if (r instanceof File)
    return e2.append(t, r, r.name);
  if (r instanceof Blob)
    return e2.append(t, r);
  if (typeof r == "boolean")
    return e2.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e2.append(t, r);
  if (typeof r == "number")
    return e2.append(t, `${r}`);
  if (r == null)
    return e2.append(t, "");
  pn(r, e2, t);
}
var Mf = "[object Boolean]";
function gs(e2) {
  return e2 === true || e2 === false || Le(e2) && Be(e2) == Mf;
}
function ys(e2, t) {
  var r = {};
  return t = _t(t), jr(e2, function(n, i, s) {
    ts(r, i, t(n, i, s));
  }), r;
}
function bs(e2, t, r) {
  return e2 === e2 && (r !== void 0 && (e2 = e2 <= r ? e2 : r), t !== void 0 && (e2 = e2 >= t ? e2 : t)), e2;
}
function et(e2, t, r) {
  return e2 = Qr(e2), r = r == null ? 0 : bs(dn(r), 0, e2.length), t = Qt(t), e2.slice(r, r + t.length) == t;
}
const Df = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: true,
      default: ""
    },
    action: {
      type: String,
      required: false,
      default() {
        return p.isSsr ? "" : location.href;
      }
    },
    method: {
      type: String,
      required: false,
      default: "POST"
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    confirmDanger: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: (e2) => e2.confirmDanger
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: false,
      default: false
    },
    requirePassword: {
      type: [Boolean, String],
      required: false,
      default: (e2) => e2.requirePasswordOnce
    },
    background: {
      type: Boolean,
      required: false,
      default: false
    },
    stay: {
      type: Boolean,
      require: false,
      default: false
    },
    restoreOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    resetOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    scrollOnError: {
      type: Boolean,
      required: false,
      default: true
    },
    submitOnChange: {
      type: [Boolean, Array],
      required: false,
      default: false
    },
    escapeValidationMessages: {
      type: Boolean,
      required: false,
      default: true
    },
    keepModal: {
      type: Boolean,
      required: false,
      default: false
    },
    preserveScroll: {
      type: Boolean,
      required: false,
      default: false
    },
    debounce: {
      type: Number,
      required: false,
      default: 0
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    },
    blob: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["success", "error", "reset", "restored"],
  data() {
    return {
      isMounted: false,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: false,
      processingInBackground: false,
      wasSuccessful: false,
      recentlySuccessful: false,
      recentlySuccessfulTimeoutId: null,
      wasUnsuccessful: false,
      recentlyUnsuccessful: false,
      recentlyUnsuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {},
      debounceFunction: null,
      response: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    /*
     * Fetches the raw validation errors from the Splade
     * instances based on the current stack.
     */
    rawErrors() {
      return p.validationErrors(this.stack);
    },
    /*
     * Flattens the raw errors.
     */
    errors() {
      return ys(this.rawErrors, (e2) => e2.join(`
`));
    }
  },
  created() {
    this.debounceFunction = er(() => {
      this.request(this.background);
    }, this.debounce);
  },
  /*
   * It loops through all missing attributes and tries to
   * find a sensible default for that attribute.
   */
  mounted() {
    let e2 = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e2 || (e2 = document), this.formElement = e2, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e2.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? false : "" : e2.querySelector(`[name="${r}[]"]`) ? n = [] : (e2.querySelector(`[name^="${r}."]`) || e2.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === true ? this.$watch("values", () => {
      this.background && (this.processingInBackground = true), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
    }, { deep: true }) : M(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.background && (this.processingInBackground = true), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
      }, { deep: true });
    }), this.isMounted = true;
    const t = this.formElement.querySelector("[autofocus]");
    t && this.focusAndScrollToElement(t);
  },
  methods: {
    $startUploading(e2) {
      this.elementsUploading.push(e2[0]);
    },
    $stopUploading(e2) {
      this.elementsUploading = this.elementsUploading.filter((t) => t != e2[0]);
    },
    hasError(e2) {
      return e2 in this.errors;
    },
    $registerFilepond(e2, t, r) {
      this.fileponds[e2] = {
        addFile: t,
        addFiles: r
      };
    },
    $addFile(e2, t) {
      if (!this.fileponds[e2])
        return console.log("Filepond instance not found");
      this.fileponds[e2].addFile(t);
    },
    $addFiles(e2, t) {
      if (!this.fileponds[e2])
        return console.log("Filepond instance not found");
      this.fileponds[e2].addFiles(t);
    },
    $fileAsUrl(e2) {
      const t = this.values[e2];
      if (!t)
        return "";
      var r = URL.createObjectURL(t), n = new XMLHttpRequest();
      n.open("GET", r, false), n.overrideMimeType("text/plain; charset=x-user-defined"), n.send(), URL.revokeObjectURL(r);
      for (var i = "", s = 0; s < n.responseText.length; s++)
        i += String.fromCharCode(n.responseText.charCodeAt(s) & 255);
      return "data:" + t.type + ";base64," + btoa(i);
    },
    $errorAttributes(e2) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e2]
      };
    },
    reset() {
      this.values = {}, this.$emit("reset");
    },
    restore() {
      this.values = Object.assign({}, { ...this.default }), this.$emit("restored");
    },
    $put(e2, t) {
      return St(this.values, e2, t);
    },
    focusAndScrollToElement(e2) {
      let t = true;
      if (e2._flatpickr && (t = false), e2.tagName === "SELECT" && e2.getAttribute("data-choice") && (t = false), t) {
        const r = new IntersectionObserver((n) => {
          let [i] = n;
          i.isIntersecting && (setTimeout(() => i.target.focus(), 150), r.disconnect());
        });
        r.observe(e2);
      }
      e2.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    /*
     * If a confirmation is needed, it first shows the
     * confirmation dialog and waits for the promise
     * before it performs the request.
     */
    submit(e2) {
      if (this.$uploading) {
        console.log("Not submitting because there are still files uploading");
        return;
      }
      if (e2) {
        const t = e2.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      p.confirm(
        gs(this.confirm) ? "" : this.confirm,
        this.confirmText,
        this.confirmButton,
        this.cancelButton,
        !!this.requirePassword,
        this.requirePasswordOnce,
        !!this.confirmDanger
      ).then((t) => {
        if (!this.requirePassword) {
          this.request();
          return;
        }
        this.method.toUpperCase() !== "GET" && t && this.$put(
          se(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
          t
        ), this.request();
      }).catch(() => {
      });
    },
    /*
     * Maps the values into a FormData instance and then
     * performs an async request.
     */
    async request(e2) {
      if (typeof e2 > "u" && (e2 = false), this.$uploading) {
        console.log("Not submitting because there are still files uploading");
        return;
      }
      await this.$nextTick(), this.background ? this.processingInBackground = true : this.processing = true, this.response = null, this.wasSuccessful = false, this.recentlySuccessful = false, clearTimeout(this.recentlySuccessfulTimeoutId), this.wasUnsuccessful = false, this.recentlyUnsuccessful = false, clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : pn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e2) && (r["X-Splade-Prevent-Refresh"] = true), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = true), this.stack > 0 && this.keepModal && (r["X-Splade-Modal"] = p.stackType(this.stack), r["X-Splade-Modal-Target"] = this.stack);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = false, this.processingInBackground = false, this.wasSuccessful = true, this.recentlySuccessful = true, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3), this.response = s.data;
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      p.request(this.action, n, t, { ...r, ...this.headers }, false, this.blob).then(i).catch(async (s) => {
        if (this.processing = false, this.processingInBackground = false, this.wasUnsuccessful = true, this.recentlyUnsuccessful = true, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = false, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = fn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
        a && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${a}"]`)
        );
      });
    }
  },
  render() {
    const e2 = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e2.values);
          },
          get(t, r) {
            const n = [
              "$all",
              "$attrs",
              "$put",
              "$startUploading",
              "$stopUploading",
              "$uploading",
              "$errorAttributes",
              "$registerFilepond",
              "$addFile",
              "$addFiles",
              "$fileAsUrl",
              "$response",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "processingInBackground",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful",
              "wasUnsuccessful",
              "recentlyUnsuccessful"
            ];
            return r === "$response" ? e2.response : n.includes(r) || et(r, "__v_") ? e2[r] : (!e2.isMounted && !W(e2.values, r) && (e2.missingAttributes.push(r), e2.$put(r, "")), be(e2.values, r));
          },
          set(t, r, n) {
            return e2.$put(r, n);
          }
        }
      )
    );
  }
}, Nf = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsFlatpickrOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: false,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e2) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e2);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e2 = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e2.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: true });
  },
  /*
   * Destroy the observer and Flatpickr instance to prevent memory leaks.
   */
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e2) {
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e2,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2 || n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Vf = { ref: "input" };
function Hf(e2, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", Vf, [
    vueExports.renderSlot(e2.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Uf = /* @__PURE__ */ _e(Nf, [["render", Hf]]), Wf = {
  props: {
    options: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
    jsOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: false
    },
    dusk: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      instance: null
    };
  },
  mounted() {
    const e2 = this.$refs.jodit.querySelector("textarea");
    import("jodit").then((t) => {
      const r = Object.assign({ defaultMode: t.default.Jodit.MODE_WYSIWYG }, this.options, this.jsOptions);
      this.instance = t.default.Jodit.make(e2, r), this.instance.value = this.modelValue, this.instance.events.on("change", (n) => this.$emit("update:modelValue", n)), this.dusk && this.instance.editor.setAttribute("dusk", this.dusk);
    });
  },
  beforeUnmount() {
    this.instance.destruct();
  }
}, zf = { ref: "jodit" };
function Gf(e2, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", zf, [
    vueExports.renderSlot(e2.$slots, "default")
  ], 512);
}
const Xf = /* @__PURE__ */ _e(Wf, [["render", Gf]]), Kf = {
  components: { Render: ue },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return p.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e2) {
      e2 ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, p.lazy(this.url, this.name).then((e2) => {
        this.html = e2.data.html, this.$emit("loaded");
      });
    }
  }
};
function Jf(e2, t, r, n, i, s) {
  const a = vueExports.resolveComponent("Render");
  return i.html ? (vueExports.openBlock(), vueExports.createBlock(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? vueExports.renderSlot(e2.$slots, "default", { key: 1 }) : vueExports.createCommentVNode("", true);
}
const Qf = /* @__PURE__ */ _e(Kf, [["render", Jf]]), Yf = ["href"], Zf = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: false,
      default: "#"
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    data: {
      type: Object,
      required: false,
      default: () => ({})
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({})
    },
    replace: {
      type: Boolean,
      required: false,
      default: false
    },
    confirmDanger: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: (e2) => e2.confirmDanger
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: false,
      default: false
    },
    requirePassword: {
      type: [Boolean, String],
      required: false,
      default: (e2) => e2.requirePasswordOnce
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    },
    slideover: {
      type: Boolean,
      required: false,
      default: false
    },
    away: {
      type: Boolean,
      required: false,
      default: false
    },
    keepModal: {
      type: Boolean,
      required: false,
      default: false
    },
    preserveScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e2) {
    const t = vueExports.inject("stack"), r = vueExports.ref(null), n = e2;
    function i() {
      if (r.value = null, !n.confirm)
        return s();
      p.confirm(
        gs(n.confirm) ? "" : n.confirm,
        n.confirmText,
        n.confirmButton,
        n.cancelButton,
        !!n.requirePassword,
        n.requirePasswordOnce,
        !!n.confirmDanger
      ).then((a) => {
        if (!n.requirePassword) {
          s();
          return;
        }
        a && (r.value = a), s();
      }).catch(() => {
      });
    }
    function s() {
      if (n.away)
        return window.location = n.href;
      const o = t > 0 && n.keepModal;
      if (n.modal && !o)
        return p.modal(n.href);
      if (n.slideover && !o)
        return p.slideover(n.href);
      if (et(n.href, "#")) {
        if (p.openPreloadedModal(n.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + n.href);
      }
      let l = n.method.trim().toUpperCase();
      const u = {
        ...n.headers
      };
      if (o && (u["X-Splade-Modal"] = p.stackType(t), u["X-Splade-Modal-Target"] = t), n.preserveScroll && (u["X-Splade-Preserve-Scroll"] = true), l === "GET")
        return n.replace ? p.replace(n.href, u) : p.visit(n.href, u);
      const c = n.data instanceof FormData ? n.data : pn(n.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), r.value && (c.append(se(n.requirePassword) && n.requirePassword ? n.requirePassword : "password", r.value), r.value = null), p.request(n.href, l, c, u, n.replace);
    }
    return (a, o) => (vueExports.openBlock(), vueExports.createElementBlock("a", {
      href: e2.href,
      onClick: vueExports.withModifiers(i, ["exact", "prevent"])
    }, [
      vueExports.renderSlot(a.$slots, "default")
    ], 8, Yf));
  }
}, ep = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: false,
      default: true
    },
    type: {
      type: String,
      required: true
    },
    stack: {
      type: Number,
      required: true
    },
    onTopOfStack: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: (e2) => e2.type === "modal" ? "2xl" : "md"
    },
    position: {
      type: String,
      required: false,
      default: (e2) => e2.type === "modal" ? "center" : "right"
    },
    name: {
      type: String,
      required: false,
      default: null
    },
    animate: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["close"],
  data() {
    return {
      staticAnimate: true,
      isOpen: false
    };
  },
  mounted() {
    this.staticAnimate = this.animate, this.setIsOpen(true);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(false);
    },
    setIsOpen(e2) {
      e2 || (this.staticAnimate = true), this.isOpen = e2;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      closeButton: this.closeButton,
      animate: this.staticAnimate,
      position: this.position,
      // These HeadlessUI exports will be removed in v1.0
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, tp = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: true
    },
    html: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "modal"
    },
    opened: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e2) {
    const t = e2;
    return p.registerPreloadedModal(t.name, t.html, t.type), t.opened && p.openPreloadedModal(t.name), () => {
    };
  }
}, rp = {
  components: { Render: ue },
  props: {
    name: {
      type: String,
      required: true
    },
    on: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return p.isSsr ? "" : window.location.href;
      }
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    passthrough: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null,
      loading: false
    };
  },
  mounted() {
    this.on.forEach((e2) => {
      this.$splade.on(e2, this.request);
    }), this.poll && setTimeout(() => {
      this.request();
    }, this.poll);
  },
  methods: {
    async request() {
      this.loading = true, p.rehydrate(this.url, this.name).then((e2) => {
        this.html = e2.data.html, this.loading = false, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function np(e2, t, r, n, i, s) {
  const a = vueExports.resolveComponent("Render");
  return i.html ? (vueExports.openBlock(), vueExports.createBlock(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? vueExports.renderSlot(e2.$slots, "placeholder", { key: 1 }) : vueExports.renderSlot(e2.$slots, "default", { key: 2 });
}
const ip = /* @__PURE__ */ _e(rp, [["render", np]]), sp = {
  props: {
    script: {
      type: String,
      required: true
    }
  },
  mounted() {
    var e2 = new Function("obj", "with (obj) { " + this.script + "}");
    e2 = e2.bind(this, this), e2(this.script);
  },
  render() {
    return "";
  }
};
function ap(e2, t) {
  var r = -1, n = Ut(e2) ? Array(e2.length) : [];
  return Mr(e2, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function ws(e2, t) {
  var r = M(e2) ? Fi : ap;
  return r(e2, _t(t));
}
const op = {
  inject: ["stack"],
  props: {
    choices: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsChoicesOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    placeholder: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    dusk: {
      type: String,
      required: false,
      default: null
    },
    remoteUrl: {
      type: String,
      required: false,
      default: null
    },
    optionValue: {
      type: String,
      required: false,
      default: null
    },
    optionLabel: {
      type: String,
      required: false,
      default: null
    },
    remoteRoot: {
      type: String,
      required: false,
      default: null
    },
    selectFirstRemoteOption: {
      type: Boolean,
      required: false,
      default: false
    },
    resetOnNewRemoteUrl: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: false
    };
  },
  computed: {
    /*
     * Returns a boolean whether a selection has been made.
     */
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : false : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    /*
     * When the model value changes, and it's a new
     * section, apply it to the Choices instance.
     */
    modelValue(e2, t) {
      if (!this.choicesInstance && this.multiple && M(e2)) {
        const r = e2.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e2)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e2) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e2);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.stack > 0 && this.element.addEventListener("change", () => {
      this.element.blur();
    }), this.loadRemoteOptions();
  },
  /*
   * Destroy the Choices.js instance to prevent memory leaks.
   */
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    async setOptionsFromRemote(e2) {
      this.destroyChoicesInstance();
      let t = [];
      this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(e2, t);
      var r, n = this.element.options.length - 1;
      for (r = n; r >= 0; r--)
        this.element.remove(r);
      let i = false;
      if (te(t, (s) => {
        var a = document.createElement("option");
        a.value = s.value, a.text = s.label, s.value === `${this.modelValue}` && s.value !== "" && (i = true), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
      }), this.resetOnNewRemoteUrl && (i = false), !i && this.selectFirstRemoteOption) {
        const s = this.placeholder ? t[1] : t[0];
        s && (this.$emit("update:modelValue", this.multiple ? [s.value] : s.value), await this.$nextTick(), i = true);
      }
      if (i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
        return this.initChoices(this.element).then(() => {
          this.loading = false;
        });
      i ? this.element.value = this.modelValue : this.$nextTick(() => {
        this.element.selectedIndex = 0;
      });
    },
    /*
     * Loads the options from a remote URL. It removes all current options from the select
     * element, and then adds the new options. If the components uses Choices.js,
     * it will first destroy the instance and then re-initialize it.
     */
    loadRemoteOptions() {
      this.remoteUrl && (this.loading = true, ne({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e2) => {
        this.setOptionsFromRemote(this.remoteRoot ? be(e2.data, this.remoteRoot) : e2.data);
      }).catch(() => {
        this.setOptionsFromRemote([]);
      }).finally(() => {
        this.loading = false;
      }));
    },
    /**
     * Removes the event listeners and then destroys the Choices.js instance.
     */
    destroyChoicesInstance() {
      var e2;
      this.choices && this.choicesInstance && (this.headlessListener && ((e2 = document.querySelector("#headlessui-portal-root")) == null || e2.removeEventListener("click", this.headlessListener, { capture: true }), this.headlessListener = null), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    /**
     * Transforms the options from the remote URL into an array of objects.
     */
    normalizeOptions(e2, t) {
      const r = M(e2);
      if (!r && J(e2))
        if (this.optionValue && this.optionLabel) {
          let n = be(e2, this.optionValue);
          se(n) || (n = `${n}`), t.push({
            value: n,
            label: be(e2, this.optionLabel)
          });
        } else
          te(e2, (n, i) => {
            se(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e2.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    /*
     * Set the given value on the Choices.js instance.
     */
    setValueOnChoices(e2) {
      Array.isArray(e2) && (e2 = ws(e2, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e2 == null ? e2 = "" : Array.isArray(e2) || (e2 = `${e2}`), this.choicesInstance.setChoiceByValue(e2), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    /*
     * Returns the internal Choices.js item that is currently selected.
     */
    getItemOfCurrentModel() {
      const e2 = this.modelValue;
      return fn(this.choicesInstance._store.choices, (t) => t.value == e2);
    },
    /*
     * This method handles the visibility of the placeholder
     * and applies some additional minor styling.
     */
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e2 = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e2.placeholder ? e2.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e2.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e2.style.minWidth = "0", e2.style.width = t ? "1px" : "auto", e2.style.paddingTop = t ? "0px" : "1px", e2.style.paddingBottom = t ? "0px" : "1px";
    },
    /*
     * Instantiate Choices.js with the combined PHP and JS options.
     */
    initChoices(e2) {
      return new Promise((t) => {
        const r = Array.from(
          e2.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const s = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const a = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                if (!n.choicesInstance)
                  return;
                const l = n.choicesInstance.dropdown.isActive, u = n.choicesInstance.containerOuter.element.contains(o.target);
                !l && u ? n.choicesInstance.showDropdown() : l && !u && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: true })), a.containerInner.element.setAttribute(
                "data-select-name",
                e2.name
              ), e2.hasAttribute("dusk") && e2.removeAttribute("dusk"), n.dusk && (a.containerInner.element.setAttribute("dusk", n.dusk), a.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = a.getValue(true);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                a.getValue().length >= r && a.hideDropdown();
              }, e2.addEventListener("change", n.selectChangeListener), a.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                a.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = a.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                a.choiceList.scrollToChildElement(l, 1), a._highlightChoice(l);
              }, e2.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = a, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e2, s);
        });
      });
    },
    /*
     * Update the 'data-has-selection' attribute based on the current selection.
     */
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, lp = { ref: "select" };
function up(e2, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", lp, [
    vueExports.renderSlot(e2.$slots, "default", { loading: i.loading })
  ], 512);
}
const cp = /* @__PURE__ */ _e(op, [["render", up]]), dp = {
  inject: ["stack"],
  render() {
    const e2 = p.validationErrors(this.stack), t = p.flashData(this.stack), r = p.sharedData.value, n = ys(e2, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e2,
      shared: r,
      hasError(i) {
        return i in e2;
      },
      hasFlash(i) {
        return W(t, i);
      },
      hasShared(i) {
        return W(r, i);
      },
      hasErrors: Object.keys(e2).length > 0
    });
  }
};
function fp(e2, t, r) {
  e2 = Qr(e2), t = Qt(t);
  var n = e2.length;
  r = r === void 0 ? n : bs(dn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e2.slice(r, i) == t;
}
function pp(e2, t) {
  var r = [];
  return Mr(e2, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function hp(e2, t) {
  var r = M(e2) ? fs : pp;
  return r(e2, _t(t));
}
function ii(e2, t) {
  return ir(e2, t);
}
const mp = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: true
    },
    baseUrl: {
      type: String,
      required: false,
      default() {
        return window.location.pathname;
      }
    },
    striped: {
      type: Boolean,
      required: false,
      default: false
    },
    columns: {
      type: Object,
      required: true
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: true
    },
    searchDebounce: {
      type: Number,
      required: false,
      default: 350
    },
    itemsOnThisPage: {
      type: Number,
      required: false,
      default: 0
    },
    itemsOnAllPages: {
      type: Number,
      required: false,
      default: 0
    },
    paginationScroll: {
      type: String,
      required: false,
      default: "top"
    }
  },
  data() {
    return {
      selectedItems: [],
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null,
      isLoading: false,
      processingAction: false
    };
  },
  computed: {
    /**
     * Returns a boolean whether the currently toggled columns
     * differ from the default set of visible columns.
     */
    columnsAreToggled() {
      return !ii(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    /*
     * Returns a boolean whether there are Search Inputs visible
     * that are not (yet) in the query string.
     */
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    },
    allItemsFromAllPagesAreSelected() {
      return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
    },
    allVisibleItemsAreSelected() {
      const e2 = this.selectedItems.length;
      return e2 === 1 && this.selectedItems[0] === "*" || e2 > 0 && e2 === this.itemsOnThisPage;
    },
    hasSelectedItems() {
      return this.selectedItems.length > 0;
    },
    totalSelectedItems() {
      const e2 = this.selectedItems.length;
      return e2 === 1 && this.selectedItems[0] === "*" ? this.itemsOnAllPages : e2;
    },
    scrollToHeadRememberKey() {
      return `spladeTableScrollToHead-${this.spladeId}`;
    }
  },
  created() {
    this.debounceUpdateQuery = er(function(e2, t, r) {
      this.updateQuery(e2, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e2 = this.getCurrentQuery(), t = e2.columns || [];
    te(e2, (r, n) => {
      if (et(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t, p.restore(this.scrollToHeadRememberKey) && this.$nextTick(() => {
      document.querySelector(`div[data-splade-id="${this.spladeId}"]`).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }), p.forget(this.scrollToHeadRememberKey);
  },
  methods: {
    navigate(e2, t) {
      const r = {
        "X-Splade-Modal": p.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack,
        "X-Splade-Prevent-View-Transition": true
      };
      (this.paginationScroll !== "top" || !t) && (r["X-Splade-Preserve-Scroll"] = true), p.request(e2, "GET", {}, r, false).then(() => {
        !p.isSsr && this.paginationScroll === "head" && t && p.remember(this.scrollToHeadRememberKey, true);
      });
    },
    visitLink(e2, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? p.modal(e2) : t === "slideover" ? p.slideover(e2) : p.visit(e2);
    },
    /**
     * Resets the table to its initial state.
     */
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e2 = this.getCurrentQuery();
      e2.columns = [], e2.page = null, e2.perPage = null, e2.sort = null, te(e2, (t, r) => {
        et(r, "filter[") && (e2[r] = null);
      }), this.visitWithQueryObject(e2, null, true);
    },
    /*
     * Returns a boolean whether the given key is visible.
     */
    columnIsVisible(e2) {
      return this.visibleColumns.includes(e2);
    },
    /*
     * Toggles the column key.
     */
    toggleColumn(e2) {
      const t = !this.columnIsVisible(e2), r = hp(this.columns, (i) => i.can_be_hidden ? i.key === e2 ? t : this.visibleColumns.includes(i.key) : true);
      let n = ws(r, (i) => i.key).sort();
      ii(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, false);
    },
    /**
     * Removes the key from being forcefully visible, and sets the value to null.
     */
    disableSearchInput(e2) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e2), this.updateQuery(`filter[${e2}]`, null);
    },
    /*
     * Forces the given Search Input key to be visible, and focuses the input element.
     */
    showSearchInput(e2) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e2], vueExports.nextTick(() => {
        document.querySelector(`[name="searchInput-${e2}"]`).focus();
      });
    },
    /*
     * Returns a boolean whether the key should be visible.
     */
    isForcedVisible(e2) {
      return this.forcedVisibleSearchInputs.includes(e2);
    },
    /*
     * Parses the window's current query as an object.
     */
    getCurrentQuery() {
      const e2 = window.location.search;
      if (!e2)
        return {};
      let t = {};
      return e2.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!fp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], M(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    /*
     * Update the current query
     */
    updateQuery(e2, t, r, n) {
      typeof n > "u" && (n = true);
      let i = this.getCurrentQuery();
      i[e2] = t, (et(e2, "perPage") || et(e2, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e2, t, r) {
      var l;
      typeof r > "u" && (r = true);
      let n = {};
      te(e2, (u, c) => {
        if (!M(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((v, g) => {
          n[`${c}[${g}]`] = v;
        });
      });
      let i = "";
      te(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : p.replaceUrlOfCurrentPage(s);
      this.isLoading = true;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": p.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      p.replace(s, o).then(() => {
        this.isLoading = false, typeof t < "u" && t && vueExports.nextTick(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), a && (u.value = a);
        });
      });
    },
    async performBulkAction(e2, t, r, n, i, s) {
      typeof s > "u" && (s = false);
      let a = null;
      if (t)
        try {
          a = await p.confirm(t === true ? "" : t, r, n, i, !!s);
        } catch {
          return false;
        }
      this.isLoading = true;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = se(s) && s ? s : "password";
        o[l] = a;
      }
      p.request(e2, "POST", o, {}, false).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    setSelectedItems(e2) {
      this.selectedItems = M(e2) ? e2 : [];
    },
    itemIsSelected(e2) {
      return this.selectedItems.length == 1 && this.selectedItems[0] == "*" ? true : this.selectedItems.includes(e2);
    },
    setSelectedItem(e2, t) {
      t ? this.selectedItems.push(e2) : this.selectedItems = this.selectedItems.filter((r) => r !== e2);
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      navigate: this.navigate,
      visit: this.visitLink,
      totalSelectedItems: this.totalSelectedItems,
      allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
      allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
      hasSelectedItems: this.hasSelectedItems,
      setSelectedItems: this.setSelectedItems,
      itemIsSelected: this.itemIsSelected,
      setSelectedItem: this.setSelectedItem,
      performBulkAction: this.performBulkAction,
      processingAction: this.processingAction,
      isLoading: this.isLoading
    });
  }
}, vp = {
  inheritAttrs: false,
  data() {
    return {
      isMounted: false,
      Teleport: vueExports.Teleport
    };
  },
  /*
   * Only render the Teleport component after this component is mounted.
   * Otherwise, the target won't be available in the DOM yet.
   */
  mounted() {
    this.isMounted = true;
  }
};
function gp(e2, t, r, n, i, s) {
  return vueExports.withDirectives((vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(i.isMounted ? i.Teleport : "div"), vueExports.normalizeProps(vueExports.guardReactiveProps(e2.$attrs)), {
    default: vueExports.withCtx(() => [
      vueExports.renderSlot(e2.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [vueExports.vShow, i.isMounted]
  ]);
}
const yp = /* @__PURE__ */ _e(vp, [["render", gp]]), bp = {
  props: {
    autosize: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e2) => {
        vueExports.nextTick(() => e2.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e2) => {
      this.autosizeInstance = e2.default(this.element);
    });
  },
  /*
   * Destroy the Autsize instance to prevent memory leaks.
   */
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e2) => {
      e2.default.destroy(this.element);
    });
  }
}, wp = { ref: "textarea" };
function Sp(e2, t, r, n, i, s) {
  return vueExports.openBlock(), vueExports.createElementBlock("div", wp, [
    vueExports.renderSlot(e2.$slots, "default")
  ], 512);
}
const Op = /* @__PURE__ */ _e(bp, [["render", Sp]]), $p = {
  props: {
    toastKey: {
      type: Number,
      required: true
    },
    autoDismiss: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(false);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e2) {
      this.show = e2;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      // These HeadlessUI exports will be removed in v1.0
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Ep = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Tp = {
  computed: {
    /*
     * Retrieves the toasts from the Splade instance.
     */
    toasts: function() {
      return p.toastsReversed.value;
    },
    /*
     * Determine whether a backdrop should be shown.
     */
    hasBackdrop: function() {
      return p.toasts.value.filter((e2) => !e2.dismissed && e2.backdrop && e2.html).length > 0;
    }
  },
  methods: {
    dismissToast(e2) {
      p.dismissToast(e2);
    }
  },
  render() {
    return this.$slots.default({
      positions: Ep,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ue,
      // These HeadlessUI exports will be removed in v1.0
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, xp = {
  props: {
    default: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e2) {
      return this.toggles[e2] ?? false;
    },
    toggle(e2) {
      this.setToggle(e2, !this.toggled(e2));
    },
    setToggle(e2, t) {
      this.toggles[e2] = t;
    }
  },
  render() {
    const e2 = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e2.toggles);
          },
          get(t, r) {
            const n = Object.keys(e2.toggles);
            if (n.length === 1 && cs(n) === "default") {
              if (r === "toggled")
                return e2.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e2.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e2.toggle("default");
                };
            }
            return r === "setToggle" ? (i, s) => {
              e2.setToggle(i, s);
            } : r === "toggle" ? (i) => {
              e2.toggle(i);
            } : e2.toggled(r);
          }
        }
      )
    );
  }
}, _p = {
  render() {
    return this.$slots.default({
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Ip = {
  props: {
    backendRoute: {
      type: String,
      required: true
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    initialInstance: {
      type: String,
      required: true
    },
    initialSignature: {
      type: String,
      required: true
    },
    methods: {
      type: Array,
      required: true
    },
    originalUrl: {
      type: String,
      required: true
    },
    verb: {
      type: String,
      required: true
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      instance: this.initialInstance,
      signature: this.initialSignature,
      values: Object.assign({}, this.default)
    };
  },
  render() {
    const e2 = this, t = {
      props: new Proxy(this.values, {
        ownKeys: function() {
          return Object.keys(e2.values);
        },
        get: (r, n) => be(e2.values, n),
        set: (r, n, i) => {
          St(e2.values, n, i);
        }
      })
    };
    return this.methods.forEach((r) => {
      t[r] = async (...n) => {
        n.length === 1 && be(n, "0._vts") && (n = []);
        let i = null;
        try {
          i = await ne.post(this.backendRoute, {
            instance: this.instance,
            signature: this.signature,
            url: this.originalUrl,
            verb: this.verb,
            props: this.values,
            method: r,
            data: n
          }, { headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "text/html, application/xhtml+xml"
          } }), this.$emit("success", i.data);
        } catch (s) {
          this.$emit("error", s.response.data), p.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, te(i.data.data, (s, a) => {
          St(this.values, a, s);
        }), i.data.redirect ? p.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          p.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, Ap = {
  created: (e2, t) => {
    if (p.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = p.restore(r);
    n && vueExports.nextTick(() => {
      typeof e2.scrollTo == "function" ? e2.scrollTo(n.left, n.top) : (e2.scrollTop = n.top, e2.scrollLeft = n.left);
    });
    const i = function() {
      p.remember(r, {
        top: e2.scrollTop,
        left: e2.scrollLeft
      });
    };
    e2.addEventListener("scroll", er(i, 100)), i();
  }
}, Cr = {
  /**
   * Inject the default Progress Bar CSS into the HTML Head.
   */
  injectCSS(e2) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e2};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e2}, 0 0 5px ${e2};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e2};
      border-left-color: ${e2};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  /**
   * Starts the progress bar with the configured timeout.
   */
  start(e2, t, r) {
    Cr.timeout = setTimeout(() => r.start(), t);
  },
  /**
   * Updates the progress bar to the percentage from the event.
   */
  progress(e2, t) {
    t.isStarted() && e2.detail.progress.percentage && t.set(Math.max(t.status, e2.detail.progress.percentage / 100 * 0.9));
  },
  /**
   * Clears the timeout and hides the bar.
   */
  stop(e2, t) {
    clearTimeout(Cr.timeout), t.done(), t.remove();
  },
  /**
   * Initializes the progress bar and registers event listeners for Splade request events.
   */
  init(e2) {
    const t = this;
    import("nprogress").then((r) => {
      let n = 0;
      document.addEventListener("splade:internal:request", (s) => {
        n++, n === 1 && t.start(s, e2.delay, r.default);
      });
      const i = (s) => {
        n--, n === 0 ? t.stop(s, r.default) : n < 0 && (n = 0);
      };
      document.addEventListener("splade:internal:request-progress", (s) => t.progress(s, r.default)), document.addEventListener("splade:internal:request-response", (s) => i(s)), document.addEventListener("splade:internal:request-error", (s) => i(s)), r.default.configure({ showSpinner: e2.spinner }), e2.css && this.injectCSS(e2.color);
    });
  }
}, Fp = {
  /**
   * Registers all Splade components and makes the configured
   * options and the Splade core globally available.
   */
  install: (e2, t) => {
    t = t || {}, t.max_keep_alive = W(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = W(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = W(t, "transform_anchors") ? t.transform_anchors : false, t.link_component = W(t, "link_component") ? t.link_component : "Link", t.progress_bar = W(t, "progress_bar") ? t.progress_bar : false, t.components = W(t, "components") ? t.components : {}, t.view_transitions = W(t, "view_transitions") ? t.view_transitions : false, t.suppress_compile_errors = W(t, "suppress_compile_errors") ? t.suppress_compile_errors : false;
    const r = t.prefix;
    if (e2.component(`${r}Button`, Ul).component(`${r}Confirm`, Bu).component(`${r}DataStores`, Uu).component(`${r}Data`, Hu).component(`${r}Defer`, nc).component(`${r}Dialog`, ic).component(`${r}Dropdown`, ud).component(`${r}DynamicHtml`, cd).component(`${r}Errors`, dd).component(`${r}Event`, fd).component(`${r}File`, Bf).component(`${r}Flash`, jf).component(`${r}Form`, Df).component(`${r}Input`, Uf).component(`${r}JoditEditor`, Xf).component(`${r}VueBridge`, Ip).component(`${r}Lazy`, Qf).component(`${r}Modal`, ep).component(`${r}OnClickOutside`, rs).component(`${r}PreloadedModal`, tp).component(`${r}Rehydrate`, ip).component(`${r}Render`, ue).component(`${r}Script`, sp).component(`${r}Select`, cp).component(`${r}State`, dp).component(`${r}Table`, mp).component(`${r}Teleport`, yp).component(`${r}Textarea`, Op).component(`${r}Toast`, $p).component(`${r}Toasts`, Tp).component(`${r}Toggle`, xp).component(`${r}Transition`, _p).component(t.link_component, Zf).directive(`${r}PreserveScroll`, Ap), Object.defineProperty(e2.config.globalProperties, "$splade", { get: () => p }), Object.defineProperty(e2.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e2.provide("$splade", e2.config.globalProperties.$splade), e2.provide("$spladeOptions", e2.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: true,
        spinner: false
      };
      J(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        W(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Cr.init(t.progress_bar);
    }
    t.suppress_compile_errors && (e2.config.compilerOptions.onError = (n) => {
      Promise.resolve().then(() => CompilerErrorMessages6b34f14b).then((i) => {
        console.error({
          message: i.default[n.code] || "Unknown compiler error",
          lineNumber: n.lineNumber,
          compileError: n
        });
      });
    }), te(t.components, (n, i) => {
      e2.component(i, n);
    });
  }
};
function kp(e2, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const a = s.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : true;
  });
  const i = n.port || 9e3;
  e2(async (s, a) => {
    if (s.method == "POST") {
      let o = "";
      s.on("data", (l) => o += l), s.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
const e = {
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  51: "@vnode-* hooks in templates are deprecated. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support will be removed in 3.4.",
  52: 'v-is="component-name" has been deprecated. Use is="vue:component-name" instead. v-is support will be removed in 3.4.',
  53: ""
};
const CompilerErrorMessages6b34f14b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: e
}, Symbol.toStringTag, { value: "Module" }));
export {
  Cp as C,
  Fp as F,
  kp as k
};
