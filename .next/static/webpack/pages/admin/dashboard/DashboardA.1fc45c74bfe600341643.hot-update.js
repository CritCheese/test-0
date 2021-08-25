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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\Next.js Learn\\test-0\\components\\AddUser.tsx";

function addRequest(event) {
  event.preventDefault();

  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  var n1 = event.target.formName.value;
  var p1 = event.target.formPassword.value;
  var g1 = event.target.formGender.value;
  var s1 = event.target.formStatus.value;
  var i1 = 12;
  var u1 = {
    name: n1,
    password: p1,
    gender: g1,
    status: s1
  };
  console.log(u1);
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
}
function AddUser() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: addRequest,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
      className: "mb-3",
      controlId: "formName",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
        children: "Name: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
      className: "mb-3",
      controlId: "formPassword",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
      className: "mb-3",
      controlId: "formGender",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: "0px"
        },
        children: "Gender:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "male",
        label: "male"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "female",
        label: "female"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
      className: "mb-3",
      controlId: "formStatus",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: "0px"
        },
        children: "Status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "status",
        id: "active",
        label: "active"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "status",
        id: "disabled",
        label: "disabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "secondary",
      size: "sm",
      children: "Cancel"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      type: "submit",
      size: "sm",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkL0Rhc2hib2FyZEEuMWZjNDVjNzRiZmU2MDAzNDE2NDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS08sU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBOEI7QUFDakNBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjs7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBQ0EsTUFBTUMsRUFBRSxHQUFHSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsUUFBYixDQUFzQkMsS0FBakM7QUFDQSxNQUFNQyxFQUFFLEdBQUdSLEtBQUssQ0FBQ0ssTUFBTixDQUFhSSxZQUFiLENBQTBCRixLQUFyQztBQUNBLE1BQU1HLEVBQUUsR0FBR1YsS0FBSyxDQUFDSyxNQUFOLENBQWFNLFVBQWIsQ0FBd0JKLEtBQW5DO0FBQ0EsTUFBTUssRUFBRSxHQUFHWixLQUFLLENBQUNLLE1BQU4sQ0FBYVEsVUFBYixDQUF3Qk4sS0FBbkM7QUFDQSxNQUFJTyxFQUFFLEdBQUcsRUFBVDtBQUNBLE1BQUlDLEVBQUUsR0FBRztBQUNMQyxJQUFBQSxJQUFJLEVBQUVaLEVBREQ7QUFFTGEsSUFBQUEsUUFBUSxFQUFFVCxFQUZMO0FBR0xVLElBQUFBLE1BQU0sRUFBRVIsRUFISDtBQUlMUyxJQUFBQSxNQUFNLEVBQUVQO0FBSkgsR0FBVDtBQU1BUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sRUFBWjtBQUVBYixFQUFBQSxLQUFLLENBQUNvQixJQUFOLENBQVcsNEJBQVgsRUFBd0M7QUFDcENDLElBQUFBLEVBQUUsRUFBRVQsRUFEZ0M7QUFFcENFLElBQUFBLElBQUksRUFBRVosRUFGOEI7QUFHcENhLElBQUFBLFFBQVEsRUFBRVQsRUFIMEI7QUFJcENVLElBQUFBLE1BQU0sRUFBRVIsRUFKNEI7QUFLcENTLElBQUFBLE1BQU0sRUFBRVA7QUFMNEIs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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlESDtLQWxEdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkVXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dEdyb3VwIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vcGFnZXMvdXNlcnMvVXNlclwiO1xyXG5pbXBvcnQgeyBnZXRTdGF0aWNQcm9wcyB9IGZyb20gXCIuLi9wYWdlcy9hcGkvdXNlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSZXF1ZXN0KGV2ZW50OmFueSl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcbiAgICBjb25zdCBuMSA9IGV2ZW50LnRhcmdldC5mb3JtTmFtZS52YWx1ZVxyXG4gICAgY29uc3QgcDEgPSBldmVudC50YXJnZXQuZm9ybVBhc3N3b3JkLnZhbHVlXHJcbiAgICBjb25zdCBnMSA9IGV2ZW50LnRhcmdldC5mb3JtR2VuZGVyLnZhbHVlXHJcbiAgICBjb25zdCBzMSA9IGV2ZW50LnRhcmdldC5mb3JtU3RhdHVzLnZhbHVlXHJcbiAgICBsZXQgaTEgPSAxMlxyXG4gICAgbGV0IHUxID0ge1xyXG4gICAgICAgIG5hbWU6IG4xLCBcclxuICAgICAgICBwYXNzd29yZDogcDEsXHJcbiAgICAgICAgZ2VuZGVyOiBnMSxcclxuICAgICAgICBzdGF0dXM6IHMxXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh1MSlcclxuXHJcbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcicse1xyXG4gICAgICAgIGlkOiBpMSxcclxuICAgICAgICBuYW1lOiBuMSwgICBcclxuICAgICAgICBwYXNzd29yZDogcDEsXHJcbiAgICAgICAgZ2VuZGVyOiBnMSxcclxuICAgICAgICBzdGF0dXM6IHMxXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlOmFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjphbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGkxICsrKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRVc2VyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUmVxdWVzdH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPk5hbWU6IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImVudGVyIG5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5QYXNzd29yZDogPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBzaXplPVwic21cIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR2VuZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX0+R2VuZGVyOjwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZ2VuZGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdtYWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdtYWxlJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZ2VuZGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgZmVtYWxlYH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17YGZlbWFsZWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX0+U3RhdHVzOjwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgYWN0aXZlYH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17YGFjdGl2ZWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BkaXNhYmxlZGB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BkaXNhYmxlZGB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwic21cIiA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkZvcm0iLCJCdXR0b24iLCJhZGRSZXF1ZXN0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicmVxdWlyZSIsIm4xIiwidGFyZ2V0IiwiZm9ybU5hbWUiLCJ2YWx1ZSIsInAxIiwiZm9ybVBhc3N3b3JkIiwiZzEiLCJmb3JtR2VuZGVyIiwiczEiLCJmb3JtU3RhdHVzIiwiaTEiLCJ1MSIsIm5hbWUiLCJwYXNzd29yZCIsImdlbmRlciIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsIkFkZFVzZXIiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9