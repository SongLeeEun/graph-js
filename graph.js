(this.webpackJsonpexample = this.webpackJsonpexample || []).push([
    [0], {
      190: function(e, t, n) {},
      202: function(e, t) {},
      320: function(e, t, n) {},
      322: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0),
          r = n.n(i),
          a = n(18),
          o = n.n(a),
          c = (n(190), n(9)),
          s = n(10),
          l = n(151),
          d = n(36),
          u = (n(191), n(168)),
          b = n(385),
          p = n(158),
          h = n.n(p),
          j = n(390),
          f = n(7),
          g = "#2c5a84",
          O = "rgb(33 33 33)",
          x = {
            ln: Math.log
          },
          m = function(e) {
            var t, n = Object(i.useState)(""),
              r = Object(s.a)(n, 2),
              a = r[0],
              o = r[1],
              l = Object(i.useState)(O),
              p = Object(s.a)(l, 2),
              m = (p[0], p[1]),
              v = Object(i.useState)("string" === typeof e.color ? e.color : e.generator.randomBrightColor()),
              y = Object(s.a)(v, 2),
              w = y[0],
              S = (y[1], Object(i.useState)(null)),
              C = Object(s.a)(S, 2),
              k = C[0],
              A = C[1],
              N = Object(i.useState)(null),
              L = Object(s.a)(N, 2),
              E = L[0],
              F = L[1],
              M = Object(i.useRef)(),
              B = Object(i.useState)(!1),
              W = Object(s.a)(B, 2),
              z = W[0],
              H = W[1];
            return Object(i.useEffect)((function() {
              if (M.current) {
                var e = u.a.makeMathField(M.current, {
                  virtualKeyboardMode: "manual",
                  virtualKeyboardLayout: "dvorak",
                  onFocus: function() {
                    m(g), F(Math.random())
                  },
                  onContentDidChange: function(e) {
                    o(e.getValue("ascii-math").replaceAll("\u22c5", "*"))
                  }
                });
                A(e)
              }
            }), [M]), Object(i.useEffect)((function() {
              E && (e.setSelected(e.index), e.index + 1 === e.length && e.setFunctions((function(e) {
                return [].concat(Object(c.a)(e), [
                  [function(e) {
                    return NaN
                  }, "red"]
                ])
              })))
            }), [E]), Object(i.useEffect)((function() {
              try {
                var t = a.trim();
                if (0 == t.length) return;
                t.includes("=") || (t = "f(x)=".concat(t));
                var n = Object(b.a)(t, x);
                if ("function" != typeof n) return;
                try {
                  n(-3.1415), n(Math.PI), e.setFunctions((function(t) {
                    var i = t.slice();
                    return i[e.index] = [n, w], i
                  }))
                } catch (i) {
                  return void H(i.message)
                }
              } catch (r) {
                return void H(r.message)
              }
              H(null)
            }), [a]), Object(f.jsxs)("div", {
              onFocus: function() {
                k.focus(), m(g)
              },
              onBlur: function() {
                e.setSelected(null)
              },
              onClick: function() {
                k.focus(), e.setSelected(e.index)
              },
              style: (t = {
                width: "100%",
                height: "58px",
                border: "1px solid ".concat(e.selected === e.index ? g : O),
                justifyContent: "space-around",
                display: "flex"
              }, Object(d.a)(t, "justifyContent", "center"), Object(d.a)(t, "alignItems", "center"), t),
              children: [Object(f.jsxs)("div", {
                style: {
                  position: "relative",
                  width: "38px",
                  height: "100%",
                  backgroundColor: "".concat(e.selected === e.index ? g : O),
                  float: "left",
                  border: "1px solid ".concat(e.selected !== e.index ? "#252727" : g)
                },
                children: [Object(f.jsx)("label", {
                  className: "blured",
                  style: {
                    position: "absolute",
                    fontSize: "10px",
                    left: 0,
                    top: 0
                  },
                  children: e.index + 1
                }), Object(f.jsx)("div", {
                  style: {
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    top: "50%"
                  },
                  children: z ? Object(f.jsx)(j.a, {
                    title: z,
                    children: Object(f.jsx)(h.a, {
                      style: {
                        color: "#d88181"
                      }
                    })
                  }) : Object(f.jsx)("svg", {
                    style: {
                      color: w
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "currentColor",
                    className: "bi bi-lightning-fill",
                    viewBox: "0 0 16 16",
                    children: Object(f.jsx)("path", {
                      d: "M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"
                    })
                  })
                })]
              }), Object(f.jsx)("div", {
                style: {
                  color: "white",
                  float: "left",
                  width: "calc( 100% - 38px )"
                },
                children: Object(f.jsx)("div", {
                  ref: M,
                  style: {
                    position: "relative",
                    marginLeft: "10px",
                    fontSize: "120%",
                    width: "calc(100% - 10px)"
                  }
                })
              })]
            })
          },
          v = n(169),
          y = n(4),
          w = n(170),
          S = n(378),
          C = n(166),
          k = n.n(C),
          A = n(374),
          N = n(389),
          L = n(384),
          E = n(380),
          F = n(379),
          M = n(381),
          B = n(388),
          W = n(382),
          z = n(326),
          H = n(386),
          P = n(383),
          R = {
            axis: {
              lineWidth: 2,
              strokeStyle: "#878a91",
              shadowBlur: 0
            },
            grid: {
              lineWidth: 2,
              strokeStyle: "#878a91",
              shadowBlur: 0
            },
            outer_grid: {
              lineWidth: 1,
              strokeStyle: "#333435"
            },
            function: {
              lineWidth: 4
            }
          };
  
        function T(e) {
          var t = {};
          for (var n in e) {
            var i = {};
            for (var r in e[n]) i[r] = e[n][r];
            t[n] = i
          }
          return t
        }
        var D = [{
          name: "Line Width",
          property: "lineWidth",
          default: 1,
          description: "Width of lines",
          type: "range",
          range: [1, 4]
        }, {
          name: "Shadow Blur",
          property: "shadowBlur",
          default: 0,
          description: "Specifies the blurring effect.",
          type: "range",
          range: [0, 50]
        }, {
          name: "Line Color",
          property: "strokeStyle",
          default: "#fff",
          description: "Color or style to use for the lines around shapes",
          type: "color"
        }, {
          name: "Shadow Color",
          property: "shadowColor",
          default: "transparent",
          description: "Color of the shadow. Default: fully-transparent black",
          type: "color"
        }, {
          name: "Shadow offset X",
          property: "shadowOffsetX",
          default: 0,
          description: "Horizontal distance the shadow will be offset",
          type: "range",
          range: [0, 50]
        }, {
          name: "Shadow offset Y",
          property: "shadowOffsetY",
          default: 0,
          description: "Vertical distance the shadow will be offset",
          type: "range",
          range: [0, 50]
        }, {
          name: "Line Cap",
          property: "lineCap",
          default: "round",
          description: "Type of endings on the end of lines. Possible values: butt (default), round, square",
          type: "select",
          options: ["butt", "round", "square"]
        }, {
          name: "Line Join",
          property: "lineJoin",
          default: "round",
          description: "Defines the type of corners where two lines meet. Possible values: round, bevel, miter (default)",
          type: "select",
          options: ["round", "bevel", "miter"]
        }];
  
        function I(e) {
          var t = T(R),
            n = function(n) {
              e.forEach((function(e) {
                t[n][e.property] || (t[n][e.property] = e.default)
              }))
            };
          for (var i in t) n(i);
          return t
        }
        n(321);
        var U = n(391),
          _ = n(387),
          J = n(375),
          q = n(94),
          K = (n(314), n(163)),
          V = n.n(K),
          G = n(165),
          X = n.n(G),
          Y = n(164),
          Q = n.n(Y),
          Z = n(393),
          $ = n(377),
          ee = n(392),
          te = n(376);
        var ne = function(e) {
            var t = Object(q.c)("hex", "#121212"),
              n = Object(s.a)(t, 2),
              r = (n[0], n[1], Object(i.useState)(!1)),
              a = Object(s.a)(r, 2),
              o = a[0],
              c = a[1];
            return Object(f.jsxs)("div", {
              children: [Object(f.jsx)(A.a, {
                onClick: function(e) {
                  return c(!0)
                },
                style: {
                  background: "#3f51b5"
                },
                children: Object(f.jsx)(A.a, {
                  onClick: function(e) {
                    c(!0)
                  },
                  style: {
                    background: e.unAppliedSettings[e.name][e.property]
                  }
                })
              }), Object(f.jsx)(A.a, {
                onClick: function() {
                  c(!1)
                },
                style: {
                  position: "fixed",
                  right: 0,
                  top: 0,
                  visibility: o ? "visible" : "hidden",
                  marginRight: "20px",
                  marginTop: "20px",
                  zIndex: 0,
                  cursor: "pointer"
                },
                children: Object(f.jsx)(Q.a, {
                  style: {
                    color: "#bbafaf"
                  }
                })
              }), Object(f.jsx)(V.a, {
                handle: ".handle",
                children: Object(f.jsx)(J.a, {
                  onKeyDown: function(e) {
                    "Escape" === e.code && c(!1)
                  },
                  open: o,
                  anchorReference: "anchorPosition",
                  anchorPosition: {
                    top: 200,
                    left: 400
                  },
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "left"
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  },
                  children: Object(f.jsxs)("div", {
                    children: [Object(f.jsx)("div", {
                      style: {
                        position: "relative",
                        border: "10px solid #1d1d1d",
                        background: "#1d1d1d"
                      },
                      children: Object(f.jsx)(q.a, {
                        width: e.width,
                        height: e.height,
                        color: Object(q.b)("hex", e.unAppliedSettings[e.name][e.property]),
                        onChange: function(t) {
                          e.setNewSettings((function(n) {
                            var i = T(n);
                            return i[e.name][e.property] = t.hex, i
                          }))
                        },
                        hideHSV: !0,
                        dark: !0
                      })
                    }), Object(f.jsx)("div", {
                      style: {
                        textAlign: "center",
                        color: "antiquewhite",
                        cursor: "move"
                      },
                      className: "handle",
                      children: Object(f.jsx)(X.a, {})
                    })]
                  })
                })
              })]
            })
          },
          ie = function(e) {
            var t = Object(i.useState)(),
              n = Object(s.a)(t, 2),
              r = n[0];
            n[1];
            return Object(f.jsx)("div", {
              children: Object(f.jsx)(U.a, {
                valueLabelFormat: r,
                "aria-labelledby": "discrete-slider-restrict",
                valueLabelDisplay: "auto",
                value: e.unAppliedSettings[e.name][e.property],
                min: e.range[0],
                max: e.range[1],
                onChange: function(t, n) {
                  e.setNewSettings((function(t) {
                    var i = T(t);
                    return i[e.name][e.property] = n, i
                  }))
                }
              })
            })
          },
          re = Object(te.a)((function(e) {
            return {
              formControl: {
                margin: e.spacing(1),
                minWidth: 120
              },
              selectEmpty: {
                marginTop: e.spacing(2)
              }
            }
          })),
          ae = function(e) {
            var t = re();
            return Object(f.jsxs)($.a, {
              style: {
                background: "#181a1b"
              },
              className: t.formControl,
              children: [Object(f.jsx)(ee.a, {
                style: {
                  color: "rgb(63, 81, 181)"
                },
                id: "demo-simple-select-label",
                children: e.setting_name
              }), Object(f.jsx)(_.a, {
                labelId: "demo-simple-select-label",
                id: "demo-simple-select",
                value: e.unAppliedSettings[e.name][e.property],
                onChange: function(t) {
                  return function(t) {
                    e.setNewSettings((function(n) {
                      var i = T(n);
                      return i[e.name][e.property] = t.target.value, i
                    }))
                  }(t)
                },
                children: e.values.map((function(e) {
                  return Object(f.jsx)(Z.a, {
                    style: {
                      background: "#181a1b",
                      color: "#3d4eae"
                    },
                    value: e,
                    children: (t = e, t.charAt(0).toUpperCase() + t.slice(1))
                  });
                  var t
                }))
              })]
            })
          };
  
        function oe(e) {
          var t = e.children,
            n = e.value,
            i = e.index,
            r = Object(w.a)(e, ["children", "value", "index"]);
          return Object(f.jsx)("div", Object(y.a)(Object(y.a)({
            role: "tabpanel",
            hidden: n !== i,
            id: "simple-tabpanel-".concat(i),
            "aria-labelledby": "simple-tab-".concat(i)
          }, r), {}, {
            children: n === i && Object(f.jsx)(H.a, {
              p: 3,
              children: Object(f.jsx)(z.a, {
                children: t
              })
            })
          }))
        }
        var ce = function(e) {
            var t = Object(i.useState)(!1),
              n = Object(s.a)(t, 2),
              r = n[0],
              a = n[1],
              o = Object(i.useState)(0),
              c = Object(s.a)(o, 2),
              l = c[0],
              d = c[1];
            return Object(i.useEffect)((function() {
              r && e.setCurrentSettings(e.unAppliedSettings)
            }), [r]), Object(i.useEffect)((function() {
              e.setCurrentSettings(e.unAppliedSettings)
            }), [e.unAppliedSettings]), Object(f.jsxs)("div", {
              style: {
                position: "absolute",
                right: 0,
                bottom: 0,
                marginRight: "10px",
                marginBottom: "10px"
              },
              children: [Object(f.jsx)(S.a, {
                onClick: function() {
                  a(!0)
                },
                className: "shadow",
                style: {
                  background: "#2a2d2f"
                },
                size: "medium",
                color: "contained",
                "aria-label": "Settings",
                children: Object(f.jsx)(k.a, {
                  style: {
                    color: "rgb(255, 255, 255)"
                  }
                })
              }), Object(f.jsxs)(N.a, {
                open: r,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                style: {
                  border: 0
                },
                children: [Object(f.jsx)(F.a, {
                  style: {
                    color: "rgb(177, 176, 175)"
                  },
                  className: "black",
                  id: "alert-dialog-title",
                  children: "Canvas Settings"
                }), Object(f.jsxs)(E.a, {
                  className: "black",
                  children: [Object(f.jsx)(M.a, {
                    position: "static",
                    children: Object(f.jsx)(B.a, {
                      style: {
                        background: "#181a1b"
                      },
                      value: l,
                      variant: "scrollable",
                      "aria-label": "simple tabs example",
                      children: e.settings.map((function(e, t) {
                        return Object(f.jsx)(W.a, Object(y.a)({
                          onClick: function(e) {
                            return d(t)
                          },
                          style: {
                            background: "rgb(24, 26, 27)"
                          },
                          label: e.name
                        }, function(e) {
                          return {
                            id: "simple-tab-".concat(e),
                            "aria-controls": "simple-tabpanel-".concat(e)
                          }
                        }(t)))
                      }))
                    })
                  }), e.settings.map((function(t, n) {
                    return Object(f.jsx)(oe, {
                      value: l,
                      index: n,
                      children: e.settings_prototype.map((function(n) {
                        return Object(f.jsxs)("div", {
                          style: {
                            marginTop: "10px"
                          },
                          children: [Object(f.jsx)(z.a, {
                            variant: "h5",
                            gutterBottom: !0,
                            children: Object(f.jsx)("div", {
                              className: "heading",
                              style: {
                                color: "white"
                              },
                              children: n.name
                            })
                          }), Object(f.jsxs)("div", {
                            style: {
                              display: "flex",
                              marginBottom: "30px",
                              position: "relative"
                            },
                            children: [Object(f.jsx)("div", {
                              className: "muted",
                              style: {
                                width: "50%"
                              },
                              children: Object(f.jsx)("div", {
                                style: {
                                  width: "90%"
                                },
                                children: n.description
                              })
                            }), Object(f.jsx)("div", {
                              style: {
                                width: "50%"
                              },
                              children: function() {
                                switch (n.type) {
                                  case "range":
                                    return Object(f.jsx)("div", {
                                      style: {},
                                      children: Object(f.jsx)(ie, {
                                        name: t.property,
                                        unAppliedSettings: e.unAppliedSettings,
                                        setNewSettings: e.setUnApliedSettings,
                                        property: n.property,
                                        range: n.range
                                      })
                                    });
                                  case "select":
                                    return Object(f.jsx)("div", {
                                      style: {
                                        float: "right"
                                      },
                                      children: Object(f.jsx)(ae, {
                                        setting_name: n.name,
                                        name: t.property,
                                        unAppliedSettings: e.unAppliedSettings,
                                        setNewSettings: e.setUnApliedSettings,
                                        property: n.property,
                                        values: n.options
                                      })
                                    });
                                  case "color":
                                    return Object(f.jsx)("div", {
                                      style: {
                                        float: "right"
                                      },
                                      children: Object(f.jsx)(ne, {
                                        name: t.property,
                                        unAppliedSettings: e.unAppliedSettings,
                                        setNewSettings: e.setUnApliedSettings,
                                        property: n.property,
                                        width: 200,
                                        height: 100
                                      })
                                    })
                                }
                              }()
                            })]
                          }), Object(f.jsx)(P.a, {
                            variant: "inset"
                          })]
                        })
                      }))
                    })
                  }))]
                }), Object(f.jsxs)(L.a, {
                  className: "black",
                  children: [Object(f.jsx)(A.a, {
                    onClick: function() {
                      return a(!1)
                    },
                    variant: "contained",
                    color: "secondary",
                    children: "CANCEL"
                  }), Object(f.jsx)(A.a, {
                    onClick: function() {
                      e.setUnApliedSettings(I(D))
                    },
                    variant: "contained",
                    color: "primary",
                    autoFocus: !0,
                    children: "Revert back to defaults"
                  })]
                })]
              })]
            })
          },
          se = (n(320), n(167)),
          le = n.n(se),
          de = n(12),
          ue = n(13);
  
        function be(e, t) {
          return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
        }
        var pe = function() {
            function e() {
              Object(de.a)(this, e), this.pallete = ["", "#dd7776", "#5c95cb", "#4b9057", "#ac94de", "#dddddd", "#bcbcbd", "#5181ae", "#9a302d"], this.index = 1
            }
            return Object(ue.a)(e, [{
              key: "randomColorFromPallete",
              value: function() {
                return this.index < this.pallete.length ? (this.index++, this.pallete[this.index - 1]) : 0
              }
            }, {
              key: "randomBrightColor",
              value: function() {
                var e = function(e, t, n) {
                  var i, r, a, o, c, s, l, d;
                  switch (1 === arguments.length && (t = e.s, n = e.v, e = e.h), s = n * (1 - t), l = n * (1 - (c = 6 * e - (o = Math.floor(6 * e))) * t), d = n * (1 - (1 - c) * t), o % 6) {
                    case 0:
                      i = n, r = d, a = s;
                      break;
                    case 1:
                      i = l, r = n, a = s;
                      break;
                    case 2:
                      i = s, r = n, a = d;
                      break;
                    case 3:
                      i = s, r = l, a = n;
                      break;
                    case 4:
                      i = d, r = s, a = n;
                      break;
                    case 5:
                      i = n, r = s, a = l
                  }
                  return {
                    r: Math.round(255 * i),
                    g: Math.round(255 * r),
                    b: Math.round(255 * a)
                  }
                }(be(0, 360) / 360, be(50, 90) / 100, be(50, 100) / 100);
                return "rgb(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ")")
              }
            }]), e
          }(),
          he = [{
            name: "Functions",
            property: "function"
          }, {
            name: "Axes",
            property: "axis"
          }, {
            name: "Grid",
            property: "grid"
          }, {
            name: "Smaller Grid",
            property: "outer_grid"
          }];
        var je = function() {
            var e = Object(i.useState)([400, 400]),
              t = Object(s.a)(e, 2),
              n = t[0],
              r = t[1],
              a = Object(i.useState)([
                [function(e) {
                  return NaN
                }, "red"]
              ]),
              o = Object(s.a)(a, 2),
              d = o[0],
              u = o[1],
              b = Object(i.useState)(null),
              p = Object(s.a)(b, 2),
              h = p[0],
              j = p[1],
              g = Object(i.useState)(0),
              O = Object(s.a)(g, 2),
              x = O[0],
              y = O[1],
              w = new pe,
              S = Object(i.useState)(0),
              C = Object(s.a)(S, 2),
              k = C[0],
              N = C[1],
              L = Object(i.useState)(I(D)),
              E = Object(s.a)(L, 2),
              F = E[0],
              M = E[1],
              B = Object(i.useState)(I(D)),
              W = Object(s.a)(B, 2),
              z = W[0],
              H = W[1];
            Object(i.useEffect)((function() {
              var e = window.innerWidth,
                t = window.innerHeight;
              r([e - k, t])
            }), []);
            var P = Object(i.useCallback)((function() {
              var e = window.innerWidth,
                t = window.innerHeight;
              r([e - k, t])
            }));
            return Object(i.useEffect)((function() {
              return window.addEventListener("resize", P),
                function() {
                  return window.removeEventListener("resize", P)
                }
            }), [P]), Object(i.useEffect)((function() {
              y(d.length)
            }), [d]), Object(f.jsxs)("div", {
              className: "App",
              style: {
                width: "100%",
                height: "100%",
                overflow: "hidden !important"
              },
              children: [Object(f.jsx)(v.a, {
                onResize: function(e, t, n) {
                  var i = n.getBoundingClientRect().width;
                  N(i), r([window.innerWidth - i, window.innerHeight])
                },
                maxWidth: "".concat(400, "px"),
                minWidth: "200px",
                maxHeight: "100vh",
                minHeight: "100vh",
                defaultSize: {
                  width: 350,
                  height: "100vh"
                },
                style: {
                  float: "left",
                  width: "20%",
                  height: "100vh"
                },
                children: Object(f.jsxs)("div", {
                  className: "parent",
                  style: {
                    width: "100%",
                    height: "100%",
                    background: "#181a1b",
                    padding: "0 !important",
                    margin: "0 !important",
                    border: "1px solid rgba(33, 32, 31, 0.1)"
                  },
                  children: [Object(f.jsx)("div", {
                    style: {
                      position: "relative",
                      width: "100%",
                      height: "48px",
                      background: "#202224",
                      border: "1px solid rgba(33, 32, 31, 0.1)"
                    },
                    children: Object(f.jsx)(A.a, {
                      onClick: function() {
                        u((function(e) {
                          return [].concat(Object(c.a)(e), [
                            [function(e) {
                              return NaN
                            }, "red"]
                          ])
                        }))
                      },
                      style: {
                        position: "absolute",
                        left: 0,
                        color: "#40648d",
                        marginTop: "5px"
                      },
                      children: Object(f.jsx)(le.a, {})
                    })
                  }), Object(f.jsx)("div", {
                    style: {
                      width: "100%",
                      height: "calc(100% - 48px)",
                      overflow: "auto"
                    },
                    children: d.map((function(e, t) {
                      return Object(f.jsx)(m, {
                        generator: w,
                        color: w.randomColorFromPallete(),
                        selected: h,
                        setSelected: j,
                        length: x,
                        functions: d,
                        setFunctions: u,
                        index: t
                      }, t)
                    }))
                  })]
                })
              }), Object(f.jsx)("div", {
                style: {
                  float: "none",
                  overflow: "hidden",
                  background: "red"
                },
                children: Object(f.jsx)(l.a, {
                  canvasStyle: F,
                  functions: d,
                  width: n[0],
                  height: n[1]
                })
              }), Object(f.jsx)(ce, {
                setCurrentSettings: M,
                currentSettings: F,
                unAppliedSettings: z,
                setUnApliedSettings: H,
                settings: he,
                settings_prototype: D
              })]
            })
          },
          fe = function(e) {
            e && e instanceof Function && n.e(3).then(n.bind(null, 395)).then((function(t) {
              var n = t.getCLS,
                i = t.getFID,
                r = t.getFCP,
                a = t.getLCP,
                o = t.getTTFB;
              n(e), i(e), r(e), a(e), o(e)
            }))
          };
        "development" !== "production".toLowerCase() && (console.log = function() {}, console.warn = function() {}, console.error = function() {}, console.info = function() {}), o.a.render(Object(f.jsx)(r.a.StrictMode, {
          children: Object(f.jsx)(je, {})
        }), document.getElementById("root")), fe()
      }
    },
    [
      [322, 1, 2]
    ]
  ]);
