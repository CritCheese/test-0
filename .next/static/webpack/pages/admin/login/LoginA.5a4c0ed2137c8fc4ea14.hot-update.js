"use strict";
self["webpackHotUpdate_N_E"]("pages/admin/login/LoginA",{

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
      var s1, users, _iterator2, _step2, user;

      return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              s1 = false;
              _context4.next = 3;
              return loginU(event);

            case 3:
              users = _context4.sent.props.users;
              console.log(users);
              _iterator2 = _createForOfIteratorHelper(users);

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  user = _step2.value;

                  if (user.name == n1 && user.password == p1 && user.status == 'active') {
                    if (user.status == 'active') {
                      s1 = true;
                      alert('Success');
                    } // break

                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (s1 == false) {
                alert("Failed!");
              }

            case 8:
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
        lineNumber: 109,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
        type: "text",
        placeholder: "enter name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
      className: "mb-3",
      controlId: "formPassword",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
        type: "password",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap___WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "primary",
      type: "submit",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbG9naW4vTG9naW5BLjVhNGMwZWQyMTM3YzhmYzRlYTE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7Q0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ksS0FBVCxHQUFpQjtBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdGLGtFQUFTLEVBQXhCOztBQUVBLE1BQU1HLE1BQU07QUFBQSxpU0FBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRFc7QUFBQSxxQkFFT0MsS0FBSyxDQUFDLDZCQUFELENBRlo7O0FBQUE7QUFFTEMsY0FBQUEsR0FGSztBQUFBO0FBQUEscUJBR21CQSxHQUFHLENBQUNDLElBQUosRUFIbkI7O0FBQUE7QUFHTEMsY0FBQUEsTUFISztBQUFBLCtDQUlKO0FBQ0hDLGdCQUFBQSxLQUFLLEVBQUU7QUFDSEQsa0JBQUFBLE1BQU0sRUFBTkE7QUFERztBQURKLGVBSkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTk4sTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQVlBLE1BQU1RLE1BQU07QUFBQSxrU0FBRyxrQkFBT1AsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRFc7QUFBQSxxQkFFT0MsS0FBSyxDQUFDLDRCQUFELENBRlo7O0FBQUE7QUFFTEMsY0FBQUEsR0FGSztBQUFBO0FBQUEscUJBR2lCQSxHQUFHLENBQUNDLElBQUosRUFIakI7O0FBQUE7QUFHTEksY0FBQUEsS0FISztBQUFBLGdEQUtKO0FBQ0hGLGdCQUFBQSxLQUFLLEVBQUU7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O0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVILEVBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztHQWxId0I3QjtVQUNMRDs7O0tBREtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9naW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3BhZ2VzL3VzZXJzL1VzZXInXHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC8nXHJcbmltcG9ydCB7IEFkbWluIH0gZnJvbSAnLi4vcGFnZXMvYWRtaW4vQWRtaW4nXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcicpXHJcbi8vICAgICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hZG1pbicpXHJcbi8vICAgICBjb25zdCB1c2VyczogVXNlcltdID0gYXdhaXQgcmVzLmpzb24oKVxyXG4vLyAgICAgY29uc3QgYWRtaW5zOiBBZG1pbltdID0gYXdhaXQgcmVzMS5qc29uKClcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKVxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgICAgICB1c2VycywgYWRtaW5zXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgbG9naW5BID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hZG1pbicpXHJcbiAgICAgICAgY29uc3QgYWRtaW5zOiBBZG1pbltdID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBhZG1pbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2dpblUgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXInKVxyXG4gICAgICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2hlY2tBID0gYXN5bmMgKGV2ZW50OiBhbnksIG4yOnN0cmluZywgcDI6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHMyID0gZmFsc2VcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgYWRtaW5zID0gKGF3YWl0IGxvZ2luQShldmVudCkpLnByb3BzLmFkbWluc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkbWlucykgIFxyXG4gICAgICAgIGZvciAobGV0IGFkbWluIG9mIGFkbWlucykge1xyXG4gICAgICAgICAgICBpZiAoYWRtaW4ubmFtZSA9PSBuMiAmJiBhZG1pbi5wYXNzd29yZCA9PSBwMikge1xyXG4gICAgICAgICAgICAgICAgczIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBhbGVydCgnU3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLi4vZGFzaGJvYXJkL0Rhc2hib2FyZEEnKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoczIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRmFpbGVkIVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1UgPSBhc3luYyAoZXZlbnQ6IGFueSwgbjE6c3RyaW5nLCBwMTpzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgczEgPSBmYWxzZVxyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gKGF3YWl0IGxvZ2luVShldmVudCkpLnByb3BzLnVzZXJzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKSAgXHJcbiAgICAgICAgZm9yIChsZXQgdXNlciBvZiB1c2Vycykge1xyXG4gICAgICAgICAgICBpZiAodXNlci5uYW1lID09IG4xICYmIHVzZXIucGFzc3dvcmQgPT0gcDEgJiYgdXNlci5zdGF0dXMgPT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnN0YXR1cyA9PSAnYWN0aXZlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgczEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBhbGVydCgnU3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHMxID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbjEgPSBldmVudC50YXJnZXQuZm9ybU5hbWUudmFsdWVcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuMSlcclxuICAgICAgICBjb25zdCBwMSA9IGV2ZW50LnRhcmdldC5mb3JtUGFzc3dvcmQudmFsdWVcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiA9PSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi9sb2dpbi9Mb2dpbkFcIikge1xyXG4gICAgICAgICAgICBjaGVja0EoZXZlbnQsbjEscDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tVKGV2ZW50LG4xLHAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2NoZWNrfT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1OYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1lOiA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbnRlciBuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDogPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljVXNlcnMoY29udGV4dDphbnkpe1xyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi91c2VyJylcclxuLy8gICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpXHJcblxyXG4vLyAgICAgaWYgKCFkYXRhKXtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICBub3RGb3VuZDp0cnVlXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtkYXRhfVxyXG4vLyAgICAgfVxyXG4vLyB9Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm0iLCJSZWFjdCIsInVzZVJvdXRlciIsIkxvZ2luIiwicm91dGVyIiwibG9naW5BIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwicmVzIiwianNvbiIsImFkbWlucyIsInByb3BzIiwibG9naW5VIiwidXNlcnMiLCJjaGVja0EiLCJuMiIsInAyIiwiczIiLCJjb25zb2xlIiwibG9nIiwiYWRtaW4iLCJuYW1lIiwicGFzc3dvcmQiLCJhbGVydCIsInB1c2giLCJjaGVja1UiLCJuMSIsInAxIiwiczEiLCJ1c2VyIiwic3RhdHVzIiwiY2hlY2siLCJ0YXJnZXQiLCJmb3JtTmFtZSIsInZhbHVlIiwiZm9ybVBhc3N3b3JkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==