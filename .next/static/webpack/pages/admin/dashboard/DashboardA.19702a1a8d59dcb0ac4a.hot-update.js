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
    var axios, n1, p1, g1, s1, i1, u1;
    return C_Users_HP_Desktop_Next_js_Learn_test_0_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            n1 = event.target.formName.value;
            p1 = event.target.formPassword.value;
            g1 = event.target.formGender.value;
            s1 = event.target.formStatus.value;
            i1 = 12;
            u1 = {
              name: n1,
              password: p1,
              gender: g1,
              status: s1
            }; // console.log(u1)

            axios.post('http://localhost:3000/user', {
              id: i1,
              name: n1,
              password: p1,
              gender: g1,
              status: s1
            }).then(function (response) {
              console.log(response);
            })["catch"](function (error) {
              console.log(error);
            }).then(i1++);

          case 9:
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
    onSubmit: addRequest,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "mb-3",
      controlId: "formName",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
        children: "Name: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
        size: "sm",
        type: "text",
        placeholder: "enter name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
      className: "mb-3",
      controlId: "formPassword",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
        size: "sm",
        type: "password",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "male",
        label: "male",
        value: "male"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "female",
        label: "female",
        value: "female"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Select, {
      "aria-label": "Slect your gender",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
        children: "Open this select menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
        value: "1",
        children: "One"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
        value: "2",
        children: "Two"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
        value: "3",
        children: "Three"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "status",
        id: "active",
        label: "active"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Check, {
        type: "radio",
        name: "status",
        id: "disabled",
        label: "disabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      size: "sm",
      children: "Cancel"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      type: "submit",
      size: "sm",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkL0Rhc2hib2FyZEEuMTk3MDJhMWE4ZDU5ZGNiMGFjNGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLTyxTQUFlRSxVQUF0QjtBQUFBO0FBQUE7OztrU0FBTyxpQkFBMEJDLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQSxZQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDTUMsWUFBQUEsS0FGSCxHQUVXQyxtQkFBTyxDQUFDLDRDQUFELENBRmxCO0FBR0dDLFlBQUFBLEVBSEgsR0FHUUosS0FBSyxDQUFDSyxNQUFOLENBQWFDLFFBQWIsQ0FBc0JDLEtBSDlCO0FBSUdDLFlBQUFBLEVBSkgsR0FJUVIsS0FBSyxDQUFDSyxNQUFOLENBQWFJLFlBQWIsQ0FBMEJGLEtBSmxDO0FBS0dHLFlBQUFBLEVBTEgsR0FLUVYsS0FBSyxDQUFDSyxNQUFOLENBQWFNLFVBQWIsQ0FBd0JKLEtBTGhDO0FBTUdLLFlBQUFBLEVBTkgsR0FNUVosS0FBSyxDQUFDSyxNQUFOLENBQWFRLFVBQWIsQ0FBd0JOLEtBTmhDO0FBT0NPLFlBQUFBLEVBUEQsR0FPTSxFQVBOO0FBUUNDLFlBQUFBLEVBUkQsR0FRTTtBQUNMQyxjQUFBQSxJQUFJLEVBQUVaLEVBREQ7QUFFTGEsY0FBQUEsUUFBUSxFQUFFVCxFQUZMO0FBR0xVLGNBQUFBLE1BQU0sRUFBRVIsRUFISDtBQUlMUyxjQUFBQSxNQUFNLEVBQUVQO0FBSkgsYUFSTixFQWNIOztBQUVBVixZQUFBQSxLQUFLLENBQUNrQixJQUFOLENBQVcsNEJBQVgsRUFBeUM7QUFDckNDLGNBQUFBLEVBQUUsRUFBRVAsRUFEaUM7QUFFckNFLGNBQUFBLElBQUksRUFBRVosRUFGK0I7QUFHckNhLGNBQUFBLFFBQVEsRUFBRVQsRUFIMkI7QUFJckNVLGNBQUFBLE1BQU0sRUFBRVIsRUFKNkI7QUFLckNTLGNBQUFBLE1B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RUksWUFBSSxFQUFDLFFBRlQ7QUFHSSxVQUFFLFVBSE47QUFJSSxhQUFLO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBUUksOERBQUMsdURBQUQ7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLFlBQUksRUFBQyxRQUZUO0FBR0ksVUFBRSxZQUhOO0FBSUksYUFBSztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0osZUErQ0ksOERBQUMsbURBQUQ7QUFBUSxhQUFPLEVBQUMsV0FBaEI7QUFBNEIsVUFBSSxFQUFDLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0NKLGVBbURJLDhEQUFDLG1EQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLFVBQUksRUFBQyxRQUEvQjtBQUF3QyxVQUFJLEVBQUMsSUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5REg7S0ExRHVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZFVzZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXRHcm91cCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3BhZ2VzL3VzZXJzL1VzZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3RhdGljUHJvcHMgfSBmcm9tIFwiLi4vcGFnZXMvYXBpL3VzZXJzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUmVxdWVzdChldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcbiAgICBjb25zdCBuMSA9IGV2ZW50LnRhcmdldC5mb3JtTmFtZS52YWx1ZVxyXG4gICAgY29uc3QgcDEgPSBldmVudC50YXJnZXQuZm9ybVBhc3N3b3JkLnZhbHVlXHJcbiAgICBjb25zdCBnMSA9IGV2ZW50LnRhcmdldC5mb3JtR2VuZGVyLnZhbHVlXHJcbiAgICBjb25zdCBzMSA9IGV2ZW50LnRhcmdldC5mb3JtU3RhdHVzLnZhbHVlXHJcbiAgICBsZXQgaTEgPSAxMlxyXG4gICAgbGV0IHUxID0ge1xyXG4gICAgICAgIG5hbWU6IG4xLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwMSxcclxuICAgICAgICBnZW5kZXI6IGcxLFxyXG4gICAgICAgIHN0YXR1czogczFcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHUxKVxyXG5cclxuICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyJywge1xyXG4gICAgICAgIGlkOiBpMSxcclxuICAgICAgICBuYW1lOiBuMSxcclxuICAgICAgICBwYXNzd29yZDogcDEsXHJcbiAgICAgICAgZ2VuZGVyOiBnMSxcclxuICAgICAgICBzdGF0dXM6IHMxXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihpMSsrKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRVc2VyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUmVxdWVzdH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPk5hbWU6IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVudGVyIG5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5QYXNzd29yZDogPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBzaXplPVwic21cIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX0+R2VuZGVyOjwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZ2VuZGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdtYWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdtYWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdnZW5kZXInXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J2ZlbWFsZSdcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nZmVtYWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtYWxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uU2VsZWN0IGFyaWEtbGFiZWw9XCJTbGVjdCB5b3VyIGdlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5PcGVuIHRoaXMgc2VsZWN0IG1lbnU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T25lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPlR3bzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5UaHJlZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjBweFwiIH19PlN0YXR1czo8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICBpZD17YGFjdGl2ZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BhY3RpdmVgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgZGlzYWJsZWRgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgZGlzYWJsZWRgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cInNtXCIgPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJGb3JtIiwiQnV0dG9uIiwiYWRkUmVxdWVzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInJlcXVpcmUiLCJuMSIsInRhcmdldCIsImZvcm1OYW1lIiwidmFsdWUiLCJwMSIsImZvcm1QYXNzd29yZCIsImcxIiwiZm9ybUdlbmRlciIsInMxIiwiZm9ybVN0YXR1cyIsImkxIiwidTEiLCJuYW1lIiwicGFzc3dvcmQiLCJnZW5kZXIiLCJzdGF0dXMiLCJwb3N0IiwiaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJBZGRVc2VyIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==