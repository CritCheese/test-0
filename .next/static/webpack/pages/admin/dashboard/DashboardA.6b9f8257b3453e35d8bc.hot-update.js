"use strict";
self["webpackHotUpdate_N_E"]("pages/admin/dashboard/DashboardA",{

/***/ "./components/AddUser.tsx":
/*!********************************!*\
  !*** ./components/AddUser.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRequest": function() { return /* binding */ addRequest; },
/* harmony export */   "default": function() { return /* binding */ AddUser; }
/* harmony export */ });
/* harmony import */ var C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\HP\\Desktop\\Next.js Learn\\test-0\\components\\AddUser.tsx";

function addRequest(_x) {
  return _addRequest.apply(this, arguments);
}

function _addRequest() {
  _addRequest = (0,C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
    var n1, p1, g1, s1, u1;
    return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            n1 = event.target.formName.value;
            p1 = event.target.formPassword.value;
            g1 = event.target.formGender.value;
            s1 = event.target.formStatus.value;
            u1 = {
              name: n1,
              password: p1,
              gender: g1,
              status: s1
            };

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addRequest.apply(this, arguments);
}

function AddUser() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "mb-3",
      controlId: "formName",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
        children: "Name: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
        size: "sm",
        type: "text",
        placeholder: "enter name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "mb-3",
      controlId: "formPassword",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
        size: "sm",
        type: "password",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "mb-3",
      controlId: "formGender",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        style: {
          marginBottom: "0px"
        },
        children: "Gender:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "male",
        label: "male"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "female",
        label: "female"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "mb-3",
      controlId: "formStatus",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        style: {
          marginBottom: "0px"
        },
        children: "Status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "status",
        id: "active",
        label: "active"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "status",
        id: "disabled",
        label: "disabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      size: "sm",
      children: "Cancel"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      type: "submit",
      size: "sm",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}
_c = AddUser;

var _c;

$RefreshReg$(_c, "AddUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkL0Rhc2hib2FyZEEuNmI5ZjgyNTdiMzQ1M2UzNWQ4YmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLTyxTQUFlRSxVQUF0QjtBQUFBO0FBQUE7OztrU0FBTyxpQkFBMEJDLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQyxZQUFBQSxFQURILEdBQ1FELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxRQUFiLENBQXNCQyxLQUQ5QjtBQUVHQyxZQUFBQSxFQUZILEdBRVFMLEtBQUssQ0FBQ0UsTUFBTixDQUFhSSxZQUFiLENBQTBCRixLQUZsQztBQUdHRyxZQUFBQSxFQUhILEdBR1FQLEtBQUssQ0FBQ0UsTUFBTixDQUFhTSxVQUFiLENBQXdCSixLQUhoQztBQUlHSyxZQUFBQSxFQUpILEdBSVFULEtBQUssQ0FBQ0UsTUFBTixDQUFhUSxVQUFiLENBQXdCTixLQUpoQztBQUtDTyxZQUFBQSxFQUxELEdBS1c7QUFDVkMsY0FBQUEsSUFBSSxFQUFFWCxFQURJO0FBRVZZLGNBQUFBLFFBQVEsRUFBRVIsRUFGQTtBQUdWUyxjQUFBQSxNQUFNLEVBQUVQLEVBSEU7QUFJVlEsY0FBQUEsTUFBTSxFQUFFTjtBQUpFLGFBTFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFlUSxTQUFTTyxPQUFULEdBQW1CO0FBQzlCLHNCQUNJLDhEQUFDLGlEQUFEO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBWSxlQUFTLEVBQUMsTUFBdEI7QUFBNkIsZUFBUyxFQUFDLFVBQXZDO0FBQUEsOEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLHlEQUFEO0FBQWMsWUFBSSxFQUFDLElBQW5CO0FBQXdCLFlBQUksRUFBQyxNQUE3QjtBQUFvQyxtQkFBVyxFQUFDLFlBQWhEO0FBQTZELGdCQUFRO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLDhEQUFDLHVEQUFEO0FBQVksZUFBUyxFQUFDLE1BQXRCO0FBQTZCLGVBQVMsRUFBQyxjQUF2QztBQUFBLDhCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyx5REFBRDtBQUFjLFlBQUksRUFBQyxJQUFuQjtBQUF3QixZQUFJLEVBQUMsVUFBN0I7QUFBd0MsZ0JBQVE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBU0ksOERBQUMsdURBQUQ7QUFBWSxlQUFTLEVBQUMsTUFBdEI7QUFBNkIsZUFBUyxFQUFDLFlBQXZDO0FBQUEsOEJBQ0k7QUFBRyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsWUFBWSxFQUFFO0FBQWhCLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLHVEQUFEO0FBQ0ksWUFBSSxFQUFDLE9BRFQ7QUFFSSxZQUFJLEVBQUMsUUFGVDtBQUdJLFVBQUUsUUFITjtBQUlJLGFBQUs7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFRSSw4REFBQyx1REFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFHSSxVQUFFLFVBSE47QUFJSSxhQUFLO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLGVBd0JJLDhEQUFDLHVEQUFEO0FBQVksZUFBUyxFQUFDLE1BQXRCO0FBQTZCLGVBQVMsRUFBQyxZQUF2QztBQUFBLDhCQUNJO0FBQUcsYUFBSyxFQUFFO0FBQUVBLFVBQUFBLFlBQVksRUFBRTtBQUFoQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyx1REFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFHSSxVQUFFLFVBSE47QUFJSSxhQUFLO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBUUksOERBQUMsdURBQUQ7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLFlBQUksRUFBQyxRQUZUO0FBR0ksVUFBRSxZQUhOO0FBSUksYUFBSztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUF1Q0ksOERBQUMsbURBQUQ7QUFBUSxhQUFPLEVBQUMsV0FBaEI7QUFBNEIsVUFBSSxFQUFDLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNKLGVBMkNJLDhEQUFDLG1EQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUF3QyxVQUFJLEVBQUMsSUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpREg7S0FsRHVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZFVzZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXRHcm91cCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3BhZ2VzL3VzZXJzL1VzZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3RhdGljUHJvcHMgfSBmcm9tIFwiLi4vcGFnZXMvYXBpL3VzZXJzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUmVxdWVzdChldmVudDphbnkpe1xyXG4gICAgY29uc3QgbjEgPSBldmVudC50YXJnZXQuZm9ybU5hbWUudmFsdWVcclxuICAgIGNvbnN0IHAxID0gZXZlbnQudGFyZ2V0LmZvcm1QYXNzd29yZC52YWx1ZVxyXG4gICAgY29uc3QgZzEgPSBldmVudC50YXJnZXQuZm9ybUdlbmRlci52YWx1ZVxyXG4gICAgY29uc3QgczEgPSBldmVudC50YXJnZXQuZm9ybVN0YXR1cy52YWx1ZVxyXG4gICAgbGV0IHUxOlVzZXIgPSB7XHJcbiAgICAgICAgbmFtZTogbjEsIFxyXG4gICAgICAgIHBhc3N3b3JkOiBwMSxcclxuICAgICAgICBnZW5kZXI6IGcxLFxyXG4gICAgICAgIHN0YXR1czogczFcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVXNlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybU5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5OYW1lOiA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHNpemU9XCJzbVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbnRlciBuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UGFzc3dvcmQ6IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjBweFwiIH19PkdlbmRlcjo8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2dlbmRlcidcclxuICAgICAgICAgICAgICAgICAgICBpZD17YG1hbGVgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgbWFsZWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdnZW5kZXInXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BmZW1hbGVgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgZmVtYWxlYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1TdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwcHhcIiB9fT5TdGF0dXM6PC9wPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BhY3RpdmVgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgYWN0aXZlYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICBpZD17YGRpc2FibGVkYH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17YGRpc2FibGVkYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJGb3JtIiwiQnV0dG9uIiwiYWRkUmVxdWVzdCIsImV2ZW50IiwibjEiLCJ0YXJnZXQiLCJmb3JtTmFtZSIsInZhbHVlIiwicDEiLCJmb3JtUGFzc3dvcmQiLCJnMSIsImZvcm1HZW5kZXIiLCJzMSIsImZvcm1TdGF0dXMiLCJ1MSIsIm5hbWUiLCJwYXNzd29yZCIsImdlbmRlciIsInN0YXR1cyIsIkFkZFVzZXIiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9