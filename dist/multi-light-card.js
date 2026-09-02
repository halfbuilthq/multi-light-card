var wt = "M16.76 13L18.76 17H9.24L11.24 13H16.76M15 6H13V11H10L6 19H22L18 11H15V6M16 20C16 21.11 15.11 22 14 22S12 21.11 12 20H16M8.21 10.11L8.76 9H11V2H9V7H6L2 15H5.76L8.21 10.11Z", At = "M14.76 11L16.76 15H7.24L9.24 11H14.76M13 4H11V9H8L4 17H20L16 9H13V4M14 18H10C10 19.11 10.9 20 12 20S14 19.11 14 18Z", St = "M15 2L17 9H7L9 2M13.6 4H10.4L9.55 7H14.45M11 10H13V20H16V22H8V20H11Z", Et = "M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z", Lt = "M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z", Ct = "M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z";
const N = globalThis, I = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, j = /* @__PURE__ */ Symbol(), K = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== j) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (I && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = K.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && K.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Mt = (i) => new lt(typeof i == "string" ? i : i + "", void 0, j), kt = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((r, s, n) => r + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[n + 1], i[0]);
  return new lt(e, i, j);
}, Ht = (i, t) => {
  if (I) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), s = N.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, i.appendChild(r);
  }
}, X = I ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Mt(e);
})(i) : i;
const { is: Nt, defineProperty: Ot, getOwnPropertyDescriptor: Pt, getOwnPropertyNames: Tt, getOwnPropertySymbols: Ut, getPrototypeOf: Vt } = Object, T = globalThis, Y = T.trustedTypes, Rt = Y ? Y.emptyScript : "", zt = T.reactiveElementPolyfillSupport, S = (i, t) => i, B = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Rt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, ct = (i, t) => !Nt(i, t), Q = { attribute: !0, type: String, converter: B, reflect: !1, useDefault: !1, hasChanged: ct };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), T.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let v = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Q) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = /* @__PURE__ */ Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && Ot(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: n } = Pt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: s, set(o) {
      const l = s?.call(this);
      n?.call(this, o), this.requestUpdate(t, l, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(S("elementProperties"))) return;
    const t = Vt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(S("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(S("properties"))) {
      const e = this.properties, r = [...Tt(e), ...Ut(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) e.unshift(X(s));
    } else t !== void 0 && e.push(X(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ht(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const n = (r.converter?.toAttribute !== void 0 ? r.converter : B).toAttribute(e, r.type);
      this._$Em = t, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const n = r.getPropertyOptions(s), o = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : B;
      this._$Em = s;
      const l = o.fromAttribute(e, n.type);
      this[s] = l ?? this._$Ej?.get(s) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, s = !1, n) {
    if (t !== void 0) {
      const o = this.constructor;
      if (s === !1 && (n = this[t]), r ??= o.getPropertyOptions(t), !((r.hasChanged ?? ct)(n, e) || r.useDefault && r.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: s, wrapped: n }, o) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), n !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [s, n] of this._$Ep) this[s] = n;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [s, n] of r) {
        const { wrapped: o } = n, l = this[s];
        o !== !0 || this._$AL.has(s) || l === void 0 || this.C(s, void 0, n, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((r) => r.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
v.elementStyles = [], v.shadowRootOptions = { mode: "open" }, v[S("elementProperties")] = /* @__PURE__ */ new Map(), v[S("finalized")] = /* @__PURE__ */ new Map(), zt?.({ ReactiveElement: v }), (T.reactiveElementVersions ??= []).push("2.1.2");
const q = globalThis, tt = (i) => i, O = q.trustedTypes, et = O ? O.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ht = "$lit$", b = `lit$${Math.random().toFixed(9).slice(2)}$`, pt = "?" + b, Bt = `<${pt}>`, x = document, C = () => x.createComment(""), M = (i) => i === null || typeof i != "object" && typeof i != "function", F = Array.isArray, Dt = (i) => F(i) || typeof i?.[Symbol.iterator] == "function", z = `[ 	
\f\r]`, A = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, it = />/g, $ = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), st = /'/g, nt = /"/g, dt = /^(?:script|style|textarea|title)$/i, ut = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), f = ut(1), It = ut(2), y = /* @__PURE__ */ Symbol.for("lit-noChange"), h = /* @__PURE__ */ Symbol.for("lit-nothing"), ot = /* @__PURE__ */ new WeakMap(), _ = x.createTreeWalker(x, 129);
function gt(i, t) {
  if (!F(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return et !== void 0 ? et.createHTML(t) : t;
}
const jt = (i, t) => {
  const e = i.length - 1, r = [];
  let s, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = A;
  for (let l = 0; l < e; l++) {
    const a = i[l];
    let p, d, c = -1, u = 0;
    for (; u < a.length && (o.lastIndex = u, d = o.exec(a), d !== null); ) u = o.lastIndex, o === A ? d[1] === "!--" ? o = rt : d[1] !== void 0 ? o = it : d[2] !== void 0 ? (dt.test(d[2]) && (s = RegExp("</" + d[2], "g")), o = $) : d[3] !== void 0 && (o = $) : o === $ ? d[0] === ">" ? (o = s ?? A, c = -1) : d[1] === void 0 ? c = -2 : (c = o.lastIndex - d[2].length, p = d[1], o = d[3] === void 0 ? $ : d[3] === '"' ? nt : st) : o === nt || o === st ? o = $ : o === rt || o === it ? o = A : (o = $, s = void 0);
    const m = o === $ && i[l + 1].startsWith("/>") ? " " : "";
    n += o === A ? a + Bt : c >= 0 ? (r.push(p), a.slice(0, c) + ht + a.slice(c) + b + m) : a + b + (c === -2 ? l : m);
  }
  return [gt(i, n + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class k {
  constructor({ strings: t, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let n = 0, o = 0;
    const l = t.length - 1, a = this.parts, [p, d] = jt(t, e);
    if (this.el = k.createElement(p, r), _.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (s = _.nextNode()) !== null && a.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const c of s.getAttributeNames()) if (c.endsWith(ht)) {
          const u = d[o++], m = s.getAttribute(c).split(b), g = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: n, name: g[2], strings: m, ctor: g[1] === "." ? Ft : g[1] === "?" ? Wt : g[1] === "@" ? Zt : U }), s.removeAttribute(c);
        } else c.startsWith(b) && (a.push({ type: 6, index: n }), s.removeAttribute(c));
        if (dt.test(s.tagName)) {
          const c = s.textContent.split(b), u = c.length - 1;
          if (u > 0) {
            s.textContent = O ? O.emptyScript : "";
            for (let m = 0; m < u; m++) s.append(c[m], C()), _.nextNode(), a.push({ type: 2, index: ++n });
            s.append(c[u], C());
          }
        }
      } else if (s.nodeType === 8) if (s.data === pt) a.push({ type: 2, index: n });
      else {
        let c = -1;
        for (; (c = s.data.indexOf(b, c + 1)) !== -1; ) a.push({ type: 7, index: n }), c += b.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const r = x.createElement("template");
    return r.innerHTML = t, r;
  }
}
function w(i, t, e = i, r) {
  if (t === y) return t;
  let s = r !== void 0 ? e._$Co?.[r] : e._$Cl;
  const n = M(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== n && (s?._$AO?.(!1), n === void 0 ? s = void 0 : (s = new n(i), s._$AT(i, e, r)), r !== void 0 ? (e._$Co ??= [])[r] = s : e._$Cl = s), s !== void 0 && (t = w(i, s._$AS(i, t.values), s, r)), t;
}
class qt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, s = (t?.creationScope ?? x).importNode(e, !0);
    _.currentNode = s;
    let n = _.nextNode(), o = 0, l = 0, a = r[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let p;
        a.type === 2 ? p = new H(n, n.nextSibling, this, t) : a.type === 1 ? p = new a.ctor(n, a.name, a.strings, this, t) : a.type === 6 && (p = new Gt(n, this, t)), this._$AV.push(p), a = r[++l];
      }
      o !== a?.index && (n = _.nextNode(), o++);
    }
    return _.currentNode = x, s;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class H {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, r, s) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = s?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = w(this, t, e), M(t) ? t === h || t == null || t === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Dt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== h && M(this._$AH) ? this._$AA.nextSibling.data = t : this.T(x.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = k.createElement(gt(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const n = new qt(s, this), o = n.u(this.options);
      n.p(e), this.T(o), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = ot.get(t.strings);
    return e === void 0 && ot.set(t.strings, e = new k(t)), e;
  }
  k(t) {
    F(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const n of t) s === e.length ? e.push(r = new H(this.O(C()), this.O(C()), this, this.options)) : r = e[s], r._$AI(n), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const r = tt(t).nextSibling;
      tt(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class U {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, s, n) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = n, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = h;
  }
  _$AI(t, e = this, r, s) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = w(this, t, e, 0), o = !M(t) || t !== this._$AH && t !== y, o && (this._$AH = t);
    else {
      const l = t;
      let a, p;
      for (t = n[0], a = 0; a < n.length - 1; a++) p = w(this, l[r + a], e, a), p === y && (p = this._$AH[a]), o ||= !M(p) || p !== this._$AH[a], p === h ? t = h : t !== h && (t += (p ?? "") + n[a + 1]), this._$AH[a] = p;
    }
    o && !s && this.j(t);
  }
  j(t) {
    t === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ft extends U {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === h ? void 0 : t;
  }
}
class Wt extends U {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== h);
  }
}
class Zt extends U {
  constructor(t, e, r, s, n) {
    super(t, e, r, s, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? h) === y) return;
    const r = this._$AH, s = t === h && r !== h || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, n = t !== h && (r === h || s);
    s && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Gt {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const Jt = q.litHtmlPolyfillSupport;
Jt?.(k, H), (q.litHtmlVersions ??= []).push("3.3.3");
const Kt = (i, t, e) => {
  const r = e?.renderBefore ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const n = e?.renderBefore ?? null;
    r._$litPart$ = s = new H(t.insertBefore(C(), n), n, void 0, e ?? {});
  }
  return s._$AI(i), s;
};
const W = globalThis;
class E extends v {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Kt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return y;
  }
}
E._$litElement$ = !0, E.finalized = !0, W.litElementHydrateSupport?.({ LitElement: E });
const Xt = W.litElementPolyfillSupport;
Xt?.({ LitElement: E });
(W.litElementVersions ??= []).push("4.2.2");
const Yt = {
  title: "Lighting",
  show_group_control: !0
}, Qt = {
  title: "Title",
  entities: "Lights",
  show_group_control: "Show whole-room brightness"
}, te = {
  title: "Optional card heading.",
  entities: "Add as many light entities as you need. Their order is preserved.",
  show_group_control: "Adjusts all configured dimmable lights together. On/off-only lights are ignored."
};
function ee() {
  return {
    schema: [
      { name: "title", selector: { text: {} } },
      {
        name: "entities",
        required: !0,
        selector: {
          entity: {
            domain: "light",
            multiple: !0,
            reorder: !0
          }
        }
      },
      { name: "show_group_control", selector: { boolean: {} } }
    ],
    computeLabel: (i) => i.name ? Qt[i.name] : void 0,
    computeHelper: (i) => i.name ? te[i.name] : void 0,
    assertConfig: (i) => mt(i)
  };
}
function mt(i) {
  if (!Array.isArray(i.entities) || i.entities.length === 0)
    throw new Error("Select at least one light.");
  for (const t of i.entities)
    if (typeof t != "string" || !t.startsWith("light."))
      throw new Error("Every configured entity must be a light.");
}
function ft(i) {
  const t = Array.from(
    new Set(
      (Array.isArray(i.entities) ? i.entities : []).filter((e) => typeof e == "string").map((e) => e.trim()).filter(Boolean)
    )
  );
  return {
    ...Yt,
    ...i,
    type: i.type || "custom:multi-light-card",
    entities: t
  };
}
function re(i) {
  const t = Object.values(i?.states ?? {}).filter((e) => e.entity_id.startsWith("light.")).slice(0, 5).map((e) => e.entity_id);
  return ft({
    type: "custom:multi-light-card",
    entities: t
  });
}
const ie = kt`
  :host {
    --light-accent: var(--state-light-active-color, #2eb7b4);
    --light-accent-deep: #138e8d;
    --light-warm: #ffbd52;
    --light-soft: color-mix(in srgb, var(--light-accent) 10%, transparent);
    display: block;
    container-type: inline-size;
  }

  * {
    box-sizing: border-box;
  }

  button,
  input {
    font: inherit;
  }

  button {
    color: inherit;
  }

  ha-card {
    display: block;
    overflow: hidden;
    border-radius: var(--ha-card-border-radius, 24px);
    color: var(--primary-text-color, #eef2f4);
    background:
      radial-gradient(circle at 92% 2%, var(--light-soft), transparent 34%),
      var(--ha-card-background, var(--card-background-color, #191b1d));
  }

  .card {
    padding: clamp(18px, 4.2cqw, 30px);
  }

  h1,
  p {
    margin: 0;
  }

  .header,
  .title-group,
  .row-main,
  .status-line,
  .row-controls,
  .brightness-control,
  .colour-controls {
    display: flex;
    align-items: center;
  }

  .header {
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 26px;
  }

  .title-group {
    min-width: 0;
    gap: 14px;
  }

  .header-icon,
  .light-icon {
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--light-accent) 20%, transparent);
    color: var(--light-accent);
    background: var(--light-soft);
  }

  .header-icon {
    width: 56px;
    height: 56px;
    border-radius: 18px;
  }

  .header-icon svg {
    width: 29px;
    height: 29px;
  }

  .light-icon {
    width: 46px;
    height: 46px;
    border-radius: 15px;
  }

  .light-icon svg {
    width: 25px;
    height: 25px;
  }

  svg {
    fill: currentColor;
  }

  .title-copy,
  .light-copy {
    min-width: 0;
  }

  h1 {
    overflow: hidden;
    font-size: clamp(23px, 5cqw, 30px);
    font-weight: 760;
    letter-spacing: -0.75px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .subtitle {
    margin-top: 3px;
    color: var(--secondary-text-color, #aeb4ba);
    font-size: 14px;
  }

  .all-off {
    min-height: 38px;
    padding: 0 16px;
    border: 1px solid color-mix(in srgb, var(--light-accent) 76%, transparent);
    border-radius: 999px;
    color: var(--light-accent);
    background: transparent;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition:
      background 160ms ease,
      transform 160ms ease;
  }

  .all-off:hover:not(:disabled) {
    background: var(--light-soft);
  }

  .all-off:active:not(:disabled) {
    transform: scale(0.97);
  }

  .all-off:disabled {
    cursor: default;
    opacity: 0.42;
  }

  .group-control {
    margin-bottom: 8px;
    padding: 24px 20px 23px;
    border: 1px solid color-mix(in srgb, var(--divider-color, #404347) 80%, transparent);
    border-radius: 17px;
    background: color-mix(
      in srgb,
      var(--ha-card-background, var(--card-background-color, #191b1d)) 96%,
      var(--light-accent) 4%
    );
  }

  .group-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: 720;
  }

  .group-heading output {
    color: var(--light-accent);
    font-variant-numeric: tabular-nums;
  }

  .lights {
    margin: 0 calc(clamp(18px, 4.2cqw, 30px) * -1)
      calc(clamp(18px, 4.2cqw, 30px) * -1);
  }

  .light-row {
    display: grid;
    grid-template-columns: minmax(178px, 1fr) minmax(210px, 1.05fr);
    gap: clamp(14px, 3cqw, 28px);
    align-items: center;
    min-height: 124px;
    padding: 17px clamp(18px, 4.2cqw, 30px);
    border-top: 1px solid var(--divider-color, #33363a);
  }

  .light-row.off .light-icon,
  .light-row.unavailable .light-icon {
    color: var(--secondary-text-color, #8f969d);
    background: color-mix(
      in srgb,
      var(--secondary-text-color, #8f969d) 8%,
      transparent
    );
  }

  .light-row.unavailable {
    opacity: 0.62;
  }

  .light-row.off .brightness-control,
  .light-row.off .colour-controls {
    opacity: 0.56;
  }

  .light-row.off input:disabled {
    opacity: 0.75;
  }

  .light-row.off .colour-swatch:disabled {
    opacity: 0.9;
  }

  .row-main {
    min-width: 0;
    gap: 14px;
  }

  .entity-button {
    display: block;
    min-width: 0;
    padding: 0;
    border: 0;
    text-align: left;
    background: transparent;
    cursor: pointer;
  }

  .light-name {
    overflow: hidden;
    font-size: 17px;
    font-weight: 720;
    letter-spacing: -0.25px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .status-line {
    gap: 7px;
    margin-top: 4px;
    color: var(--secondary-text-color, #aeb4ba);
    font-size: 13px;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--light-accent);
  }

  .off .status-dot,
  .unavailable .status-dot {
    background: var(--secondary-text-color, #8f969d);
  }

  .status-separator {
    opacity: 0.55;
  }

  .row-controls {
    min-width: 0;
    justify-content: flex-end;
    gap: clamp(11px, 2.6cqw, 20px);
  }

  .brightness-control {
    min-width: 116px;
    flex: 1 1 170px;
    gap: 10px;
  }

  .brightness-control output {
    width: 36px;
    flex: 0 0 auto;
    color: var(--secondary-text-color, #aeb4ba);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  input[type="range"] {
    width: 100%;
    height: 28px;
    margin: 0;
    background: transparent;
    cursor: pointer;
    appearance: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      var(--range-active, var(--light-accent)) 0 var(--range-value, 0%),
      color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 24%, transparent)
        var(--range-value, 0%) 100%
    );
  }

  input[type="range"]::-moz-range-track {
    height: 6px;
    border-radius: 999px;
    background: color-mix(
      in srgb,
      var(--secondary-text-color, #9aa1a8) 24%,
      transparent
    );
  }

  input[type="range"]::-moz-range-progress {
    height: 6px;
    border-radius: 999px;
    background: var(--range-active, var(--light-accent));
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    margin-top: -6px;
    border: 2px solid color-mix(in srgb, white 46%, transparent);
    border-radius: 50%;
    background: var(--range-active, var(--light-accent));
    box-shadow: 0 2px 8px color-mix(in srgb, black 42%, transparent);
    appearance: none;
  }

  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: 2px solid color-mix(in srgb, white 46%, transparent);
    border-radius: 50%;
    background: var(--range-active, var(--light-accent));
    box-shadow: 0 2px 8px color-mix(in srgb, black 42%, transparent);
  }

  input[type="range"]:focus-visible {
    outline: 2px solid var(--light-accent);
    outline-offset: 3px;
    border-radius: 999px;
  }

  input[type="range"]:disabled {
    cursor: default;
    opacity: 0.32;
  }

  .colour-controls {
    flex: 0 0 auto;
    gap: 9px;
  }

  .colour-swatch {
    width: 34px;
    height: 34px;
    padding: 4px;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 34%, transparent);
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
  }

  .colour-swatch span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--swatch);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, white 30%, transparent);
  }

  .temperature {
    width: clamp(68px, 12cqw, 96px) !important;
    --range-active: var(--light-warm);
  }

  .temperature::-webkit-slider-runnable-track {
    height: 22px !important;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 24%, transparent);
    background: linear-gradient(90deg, #ffb64b, #fff1cb 54%, #dcecff) !important;
  }

  .temperature::-moz-range-track {
    height: 22px !important;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 24%, transparent);
    background: linear-gradient(90deg, #ffb64b, #fff1cb 54%, #dcecff) !important;
  }

  .temperature::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    margin-top: 2px;
    border-color: white;
    background: transparent;
    box-shadow: 0 0 0 1px color-mix(in srgb, black 52%, transparent);
  }

  .temperature::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-color: white;
    background: transparent;
    box-shadow: 0 0 0 1px color-mix(in srgb, black 52%, transparent);
  }

  .power {
    position: relative;
    width: 48px;
    height: 30px;
    flex: 0 0 auto;
    padding: 0;
    border: 1px solid color-mix(in srgb, var(--secondary-text-color, #9aa1a8) 38%, transparent);
    border-radius: 999px;
    background: color-mix(
      in srgb,
      var(--secondary-text-color, #9aa1a8) 14%,
      transparent
    );
    cursor: pointer;
    transition:
      background 160ms ease,
      border-color 160ms ease;
  }

  .power::after {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #f4f7f7;
    box-shadow: 0 2px 6px color-mix(in srgb, black 36%, transparent);
    content: "";
    transition: transform 180ms ease;
  }

  .power[aria-checked="true"] {
    border-color: color-mix(in srgb, var(--light-accent) 74%, transparent);
    background: var(--light-accent);
  }

  .power[aria-checked="true"]::after {
    transform: translateX(18px);
  }

  .power:focus-visible,
  .colour-swatch:focus-visible,
  .all-off:focus-visible,
  .entity-button:focus-visible {
    outline: 2px solid var(--light-accent);
    outline-offset: 3px;
  }

  .power:disabled,
  .colour-swatch:disabled {
    cursor: default;
    opacity: 0.42;
  }

  @container (max-width: 560px) {
    .light-row {
      grid-template-columns: minmax(0, 1fr);
      gap: 13px;
      min-height: 0;
      padding-block: 16px;
    }

    .row-controls {
      padding-left: 60px;
    }
  }

  @container (max-width: 390px) {
    .card {
      padding: 16px;
    }

    .header-icon {
      width: 46px;
      height: 46px;
    }

    .all-off {
      min-height: 34px;
      padding-inline: 12px;
      font-size: 13px;
    }

    .group-control {
      padding: 15px 16px;
    }

    .lights {
      margin-inline: -16px;
      margin-bottom: -16px;
    }

    .light-row {
      padding-inline: 16px;
    }

    .row-controls {
      flex-wrap: wrap;
      padding-left: 0;
    }

    .brightness-control {
      order: 2;
      min-width: calc(100% - 59px);
    }

    .colour-controls {
      margin-left: auto;
    }

    .temperature {
      width: 76px !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`, se = /* @__PURE__ */ new Set(["hs", "xy", "rgb", "rgbw", "rgbww"]), ne = /* @__PURE__ */ new Set([
  "brightness",
  "color_temp",
  "hs",
  "xy",
  "rgb",
  "rgbw",
  "rgbww",
  "white"
]);
function at(i, t) {
  return i?.states[t];
}
function Z(i) {
  const t = i?.attributes.supported_color_modes;
  return Array.isArray(t) ? t.filter((e) => typeof e == "string") : [];
}
function L(i) {
  const t = Z(i);
  return typeof i?.attributes.brightness == "number" || t.some((e) => ne.has(e));
}
function bt(i) {
  return Z(i).includes("color_temp");
}
function $t(i) {
  return Z(i).some((t) => se.has(t));
}
function _t(i) {
  const t = Number(i?.attributes.brightness);
  return Number.isFinite(t) ? Math.round(Math.min(255, Math.max(0, t)) / 255 * 100) : i?.state === "on" && L(i) ? 100 : 0;
}
function oe(i, t, e) {
  if (i?.formatEntityName && t)
    try {
      return i.formatEntityName(t, [{ type: "entity" }]);
    } catch {
    }
  return t?.attributes.friendly_name ?? e.split(".").pop()?.replace(/_/g, " ").replace(/\b\w/g, (r) => r.toUpperCase()) ?? e;
}
function xt(i) {
  const t = Number(i?.attributes.min_color_temp_kelvin);
  return Number.isFinite(t) ? t : 2e3;
}
function vt(i) {
  const t = Number(i?.attributes.max_color_temp_kelvin);
  return Number.isFinite(t) ? t : 6500;
}
function G(i) {
  const t = xt(i), e = vt(i), r = Number(i?.attributes.color_temp_kelvin);
  return Number.isFinite(r) ? Math.min(e, Math.max(t, r)) : 3e3;
}
function ae(i) {
  const t = i / 100, e = t <= 66 ? 255 : 329.698727446 * Math.pow(t - 60, -0.1332047592), r = t <= 66 ? 99.4708025861 * Math.log(t) - 161.1195681661 : 288.1221695283 * Math.pow(t - 60, -0.0755148492), s = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.044792731;
  return [e, r, s].map(
    (n) => Math.round(Math.min(255, Math.max(0, n)))
  );
}
function le(i) {
  const t = i?.attributes.rgb_color;
  if (Array.isArray(t) && t.length === 3 && t.every((o) => Number.isFinite(Number(o))))
    return `rgb(${t.map(Number).join(", ")})`;
  const e = i?.attributes.hs_color;
  if (Array.isArray(e) && e.length === 2 && e.every((o) => Number.isFinite(Number(o))))
    return `hsl(${Number(e[0])} ${Number(e[1])}% 52%)`;
  const [r, s, n] = ae(G(i));
  return `rgb(${r}, ${s}, ${n})`;
}
function ce(i) {
  if ($t(i)) {
    const t = Number(i?.attributes.hs_color?.[0]), e = Number(i?.attributes.hs_color?.[1]);
    return Number.isFinite(t) && Number.isFinite(e) && e >= 18 ? t < 16 || t >= 345 ? "Red" : t < 34 ? "Orange" : t < 52 ? "Amber" : t < 75 ? "Yellow" : t < 165 ? "Green" : t < 200 ? "Aqua" : t < 255 ? "Blue" : t < 300 ? "Purple" : "Pink" : "Colour";
  }
  if (bt(i)) {
    const t = G(i);
    return t < 3500 ? "Warm white" : t > 5e3 ? "Cool white" : "Neutral white";
  }
  return "";
}
function he(i) {
  const t = i.filter(
    (e) => e.state === "on" && L(e)
  );
  return t.length === 0 ? 0 : Math.round(
    t.reduce(
      (e, r) => e + _t(r),
      0
    ) / t.length
  );
}
function pe(i) {
  const t = `${i?.entity_id ?? ""} ${i?.attributes.friendly_name ?? ""}`.toLowerCase();
  return t.includes("strip") || t.includes("led") ? Et : t.includes("floor") || t.includes("lamp") ? St : t.includes("ceiling") || t.includes("downlight") ? wt : t.includes("pendant") ? At : Ct;
}
function de(i) {
  return !i || ["unavailable", "unknown"].includes(i.state) ? "unavailable" : i.state === "on" ? "on" : "off";
}
const P = class P extends E {
  constructor() {
    super(...arguments), this._pending = /* @__PURE__ */ new Set();
  }
  static getConfigForm() {
    return ee();
  }
  static getStubConfig(t) {
    return re(t);
  }
  setConfig(t) {
    mt(t), this._config = ft({ ...t }), this._masterValue = void 0;
  }
  getCardSize() {
    const t = this._config?.entities.length ?? 1;
    return Math.max(3, Math.ceil(2.2 + t * 1.55));
  }
  getGridOptions() {
    return {
      columns: 6,
      min_columns: 3
    };
  }
  _configuredStates() {
    return (this._config?.entities ?? []).map((t) => at(this.hass, t)).filter((t) => !!t);
  }
  _openMoreInfo(t) {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  async _run(t, e, r) {
    if (!(!this.hass || this._pending.has(t))) {
      this._pending = new Set(this._pending).add(t);
      try {
        await this.hass.callService("light", e, r);
      } finally {
        const s = new Set(this._pending);
        s.delete(t), this._pending = s;
      }
    }
  }
  _toggle(t) {
    const e = t.state === "on" ? "turn_off" : "turn_on";
    this._run(t.entity_id, e, { entity_id: t.entity_id });
  }
  _setBrightness(t, e) {
    this._run(t.entity_id, "turn_on", {
      entity_id: t.entity_id,
      brightness_pct: e
    });
  }
  _setColorTemperature(t, e) {
    this._run(t.entity_id, "turn_on", {
      entity_id: t.entity_id,
      color_temp_kelvin: e
    });
  }
  _setMasterBrightness(t) {
    const e = this._configuredStates().filter(L).map((r) => r.entity_id);
    e.length !== 0 && (this._masterValue = t, this._run("group-brightness", "turn_on", {
      entity_id: e,
      brightness_pct: t
    }));
  }
  _turnAllOff() {
    const t = this._config?.entities ?? [];
    t.length !== 0 && this._run("all-off", "turn_off", { entity_id: t });
  }
  _renderIcon(t) {
    return It`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d=${t}></path>
      </svg>
    `;
  }
  _renderLight(t) {
    const e = at(this.hass, t), r = de(e), s = r === "unavailable", n = r === "on", o = L(e), l = bt(e), a = $t(e), p = _t(e), d = xt(e), c = vt(e), u = G(e), m = (u - d) / Math.max(1, c - d) * 100, g = oe(this.hass, e, t), J = ce(e), V = this._pending.has(t), yt = s ? "Unavailable" : n ? "On" : "Off";
    return f`
      <section class="light-row ${r}" aria-label=${g}>
        <div class="row-main">
          <div class="light-icon">${this._renderIcon(pe(e))}</div>
          <button
            class="entity-button light-copy"
            type="button"
            @click=${() => this._openMoreInfo(t)}
            aria-label="Open ${g} details"
          >
            <div class="light-name">${g}</div>
            <div class="status-line">
              <span class="status-dot" aria-hidden="true"></span>
              <span>${yt}</span>
              ${o && n ? f`
                    <span class="status-separator">·</span>
                    <span>${p}%</span>
                  ` : h}
              ${J && n ? f`
                    <span class="status-separator">·</span>
                    <span>${J}</span>
                  ` : h}
            </div>
          </button>
        </div>

        <div class="row-controls">
          ${o ? f`
                <label class="brightness-control">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    .value=${String(p || 1)}
                    style="--range-value: ${p}%"
                    ?disabled=${s || !n || V}
                    aria-label="${g} brightness"
                    @change=${(R) => e && this._setBrightness(
      e,
      Number(R.target.value)
    )}
                  />
                  <output>${p}%</output>
                </label>
              ` : h}

          ${a || l ? f`
                <div class="colour-controls">
                  ${a ? f`
                        <button
                          class="colour-swatch"
                          type="button"
                          style="--swatch: ${le(e)}"
                          ?disabled=${s || !n}
                          @click=${() => this._openMoreInfo(t)}
                          aria-label="Choose ${g} colour"
                          title="Choose colour"
                        >
                          <span aria-hidden="true"></span>
                        </button>
                      ` : h}
                  ${l ? f`
                        <input
                          class="temperature"
                          type="range"
                          min=${d}
                          max=${c}
                          step="50"
                          .value=${String(u)}
                          style="--range-value: ${m}%"
                          ?disabled=${s || !n || V}
                          aria-label="${g} colour temperature"
                          title="Colour temperature"
                          @change=${(R) => e && this._setColorTemperature(
      e,
      Number(R.target.value)
    )}
                        />
                      ` : h}
                </div>
              ` : h}

          <button
            class="power"
            type="button"
            role="switch"
            aria-checked=${n ? "true" : "false"}
            aria-label="Turn ${g} ${n ? "off" : "on"}"
            ?disabled=${s || V}
            @click=${() => e && this._toggle(e)}
          ></button>
        </div>
      </section>
    `;
  }
  render() {
    const t = this._config;
    if (!t) return h;
    const e = this._configuredStates(), r = e.filter((l) => l.state === "on").length, s = e.filter(L), n = this._masterValue ?? he(e), o = t.entities.length;
    return f`
      <ha-card>
        <div class="card">
          <header class="header">
            <div class="title-group">
              <div class="header-icon">
                ${this._renderIcon(Lt)}
              </div>
              <div class="title-copy">
                <h1>${t.title || "Lighting"}</h1>
                <p class="subtitle">${r} of ${o} on</p>
              </div>
            </div>
            <button
              class="all-off"
              type="button"
              ?disabled=${r === 0 || this._pending.has("all-off")}
              @click=${this._turnAllOff}
            >
              All off
            </button>
          </header>

          ${t.show_group_control !== !1 && s.length > 0 ? f`
                <section class="group-control" aria-label="Whole-room brightness">
                  <div class="group-heading">
                    <span>Whole room</span>
                    <output>${n}%</output>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    .value=${String(n || 1)}
                    style="--range-value: ${n}%"
                    ?disabled=${this._pending.has("group-brightness")}
                    aria-label="Whole-room brightness"
                    @input=${(l) => {
      this._masterValue = Number(
        l.target.value
      );
    }}
                    @change=${(l) => this._setMasterBrightness(
      Number(l.target.value)
    )}
                  />
                </section>
              ` : h}

          <div class="lights">
            ${t.entities.map((l) => this._renderLight(l))}
          </div>
        </div>
      </ha-card>
    `;
  }
};
P.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 },
  _pending: { state: !0 },
  _masterValue: { state: !0 }
}, P.styles = ie;
let D = P;
customElements.get("multi-light-card") || customElements.define("multi-light-card", D);
window.customCards = window.customCards || [];
window.customCards.some((i) => i.type === "multi-light-card") || window.customCards.push({
  type: "multi-light-card",
  name: "Multi-Light Card",
  preview: !0,
  description: "Tasteful, capability-aware controls for any number of Home Assistant lights.",
  documentationURL: "https://github.com/halfbuilthq/multi-light-card"
});
export {
  D as MultiLightCard
};
//# sourceMappingURL=multi-light-card.js.map
