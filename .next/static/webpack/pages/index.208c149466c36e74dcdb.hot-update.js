"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Login.tsx":
/*!******************************!*\
  !*** ./components/Login.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_bootstrap___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\HP\\Desktop\\Next.js Learn\\test-0\\components\\Login.tsx",
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // export const getStaticProps: GetStaticProps = async (context) => {
//     const res = await fetch('http://localhost:3000/user')
//     const res1 = await fetch('http://localhost:3000/admin')
//     const users: User[] = await res.json()
//     const admins: Admin[] = await res1.json()
//     // console.log(users)
//     return {
//         props: {
//             users, admins
//         }
//     }
// }

function Login() {
  _s();

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var loginA = /*#__PURE__*/function () {
    var _ref = (0,C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var res, admins;
      return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return fetch('http://localhost:3000/admin');

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              admins = _context.sent;
              return _context.abrupt("return", {
                props: {
                  admins: admins
                }
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loginA(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loginU = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event) {
      var res, users;
      return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.next = 3;
              return fetch('http://localhost:3000/user');

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              users = _context2.sent;
              return _context2.abrupt("return", {
                props: {
                  users: users
                }
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function loginU(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkA = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(event, n2, p2) {
      var s2, admins, _iterator, _step, admin;

      return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              s2 = false;
              event.preventDefault();
              _context3.next = 4;
              return loginA(event);

            case 4:
              admins = _context3.sent.props.admins;
              console.log(admins);
              _iterator = _createForOfIteratorHelper(admins);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  admin = _step.value;

                  if (admin.name == n2 && admin.password == p2) {
                    s2 = true;
                    alert('Success');
                    router.push('../dashboard/DashboardA');
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!(s2 == false)) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return", alert("Failed!"));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function checkA(_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var checkU = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(event, n1, p1) {
      var s1, s2, users, _iterator2, _step2, user;

      return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              s1 = false;
              s2 = '';
              _context4.next = 4;
              return loginU(event);

            case 4:
              users = _context4.sent.props.users;
              console.log(users);
              _iterator2 = _createForOfIteratorHelper(users);

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  user = _step2.value;

                  if (user.name == n1 && user.password == p1) {
                    s1 = true;

                    if (user.status == 'active') {
                      s1 = true;
                      alert('Success');
                    } else {
                      s1 = false;
                      s2 = 'disabled';
                    }
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (s1 == false && (s2 == 'active' || s2 == '')) {
                alert("Failed!");
              }

              if (s1 == false && s2 == 'disabled') {
                alert('Account disabled');
              }

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function checkU(_x6, _x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();

  var check = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(event) {
      var n1, p1;
      return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              n1 = event.target.formName.value; // console.log(n1)

              p1 = event.target.formPassword.value;
              event.preventDefault(); // console.log(users)

              if (window.location.href == "http://localhost:3001/admin/login/LoginA") {
                checkA(event, n1, p1);
              } else {
                checkU(event, n1, p1);
              }

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function check(_x9) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form, {
    onSubmit: check,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3",
      controlId: "formName",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
        children: "Name: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
        type: "text",
        placeholder: "enter name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3",
      controlId: "formPassword",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
        type: "password",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "primary",
      type: "submit",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 9
  }, this);
} // export async function getStaticUsers(context:any){
//     const res = await fetch('http://localhost:3002/user')
//     const data = res.json()
//     if (!data){
//         return {
//             notFound:true
//         }
//     }
//     return {
//         props: {data}
//     }
// }

_s(Login, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjA4YzE0OTQ2NmMzNmU3NGRjZGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSSxLQUFULEdBQWlCO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0Ysa0VBQVMsRUFBeEI7O0FBRUEsTUFBTUcsTUFBTTtBQUFBLGlTQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFEVztBQUFBLHFCQUVPQyxLQUFLLENBQUMsNkJBQUQsQ0FGWjs7QUFBQTtBQUVMQyxjQUFBQSxHQUZLO0FBQUE7QUFBQSxxQkFHbUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUhuQjs7QUFBQTtBQUdMQyxjQUFBQSxNQUhLO0FBQUEsK0NBSUo7QUFDSEMsZ0JBQUFBLEtBQUssRUFBRTtBQUNIRCxrQkFBQUEsTUFBTSxFQUFOQTtBQURHO0FBREosZUFKSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOTixNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBWUEsTUFBTVEsTUFBTTtBQUFBLGtTQUFHLGtCQUFPUCxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFEVztBQUFBLHFCQUVPQyxLQUFLLENBQUMsNEJBQUQsQ0FGWjs7QUFBQTtBQUVMQyxjQUFBQSxHQUZLO0FBQUE7QUFBQSxxQkFHaUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUhqQjs7QUFBQTtBQUdMSSxjQUFBQSxLQUhLO0FBQUEsZ0RBS0o7QUFDSEYsZ0JBQUFBLEtBQUssRUFBRTtBQUNIRSxrQkFBQUEs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QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLDBEQUFEO0FBQWMsWUFBSSxFQUFDLFVBQW5CO0FBQThCLGdCQUFRO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQVNJLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUgsRUFFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0dBeEh3QjdCO1VBQ0xEOzs7S0FES0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vcGFnZXMvdXNlcnMvVXNlcidcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLydcclxuaW1wb3J0IHsgQWRtaW4gfSBmcm9tICcuLi9wYWdlcy9hZG1pbi9BZG1pbidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyJylcclxuLy8gICAgIGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkbWluJylcclxuLy8gICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgICBjb25zdCBhZG1pbnM6IEFkbWluW10gPSBhd2FpdCByZXMxLmpzb24oKVxyXG4vLyAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIHVzZXJzLCBhZG1pbnNcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBsb2dpbkEgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkbWluJylcclxuICAgICAgICBjb25zdCBhZG1pbnM6IEFkbWluW10gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIGFkbWluc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ2luVSA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcicpXHJcbiAgICAgICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VycylcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgdXNlcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGVja0EgPSBhc3luYyAoZXZlbnQ6IGFueSwgbjI6c3RyaW5nLCBwMjpzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgczIgPSBmYWxzZVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCBhZG1pbnMgPSAoYXdhaXQgbG9naW5BKGV2ZW50KSkucHJvcHMuYWRtaW5zXHJcbiAgICAgICAgY29uc29sZS5sb2coYWRtaW5zKSAgXHJcbiAgICAgICAgZm9yIChsZXQgYWRtaW4gb2YgYWRtaW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChhZG1pbi5uYW1lID09IG4yICYmIGFkbWluLnBhc3N3b3JkID09IHAyKSB7XHJcbiAgICAgICAgICAgICAgICBzMiA9IHRydWVcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdTdWNjZXNzJylcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcuLi9kYXNoYm9hcmQvRGFzaGJvYXJkQScpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzMiA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJGYWlsZWQhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrVSA9IGFzeW5jIChldmVudDogYW55LCBuMTpzdHJpbmcsIHAxOnN0cmluZykgPT4ge1xyXG4gICAgICAgIGxldCBzMSA9IGZhbHNlXHJcbiAgICAgICAgbGV0IHMyID0gJydcclxuICAgICAgICBjb25zdCB1c2VycyA9IChhd2FpdCBsb2dpblUoZXZlbnQpKS5wcm9wcy51c2VycztcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VycykgIFxyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXIubmFtZSA9PSBuMSAmJiB1c2VyLnBhc3N3b3JkID09IHAxKSB7XHJcbiAgICAgICAgICAgICAgICBzMSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnN0YXR1cyA9PSAnYWN0aXZlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgczEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBhbGVydCgnU3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHMxID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBzMiA9ICdkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoczEgPT0gZmFsc2UgJiYgKHMyID09ICdhY3RpdmUnIHx8IHMyID09ICcnKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIkZhaWxlZCFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHMxID09IGZhbHNlICYmIHMyID09ICdkaXNhYmxlZCcpe1xyXG4gICAgICAgICAgICBhbGVydCgnQWNjb3VudCBkaXNhYmxlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBuMSA9IGV2ZW50LnRhcmdldC5mb3JtTmFtZS52YWx1ZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG4xKVxyXG4gICAgICAgIGNvbnN0IHAxID0gZXZlbnQudGFyZ2V0LmZvcm1QYXNzd29yZC52YWx1ZVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VycylcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmID09IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FkbWluL2xvZ2luL0xvZ2luQVwiKSB7XHJcbiAgICAgICAgICAgIGNoZWNrQShldmVudCxuMSxwMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjaGVja1UoZXZlbnQsbjEscDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17Y2hlY2t9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybU5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5hbWU6IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVudGVyIG5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkOiA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNVc2Vycyhjb250ZXh0OmFueSl7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3VzZXInKVxyXG4vLyAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKClcclxuXHJcbi8vICAgICBpZiAoIWRhdGEpe1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIG5vdEZvdW5kOnRydWVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge2RhdGF9XHJcbi8vICAgICB9XHJcbi8vIH0iXSwibmFtZXMiOlsiQnV0dG9uIiwiRm9ybSIsIlJlYWN0IiwidXNlUm91dGVyIiwiTG9naW4iLCJyb3V0ZXIiLCJsb2dpbkEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiYWRtaW5zIiwicHJvcHMiLCJsb2dpblUiLCJ1c2VycyIsImNoZWNrQSIsIm4yIiwicDIiLCJzMiIsImNvbnNvbGUiLCJsb2ciLCJhZG1pbiIsIm5hbWUiLCJwYXNzd29yZCIsImFsZXJ0IiwicHVzaCIsImNoZWNrVSIsIm4xIiwicDEiLCJzMSIsInVzZXIiLCJzdGF0dXMiLCJjaGVjayIsInRhcmdldCIsImZvcm1OYW1lIiwidmFsdWUiLCJmb3JtUGFzc3dvcmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9