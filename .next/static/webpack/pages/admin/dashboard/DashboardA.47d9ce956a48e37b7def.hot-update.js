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
  axios.post("http://localhost:3000/user", {
    id: i1,
    name: n1,
    password: p1
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
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
        size: "sm",
        type: "text",
        placeholder: "enter name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
      className: "mb-3",
      controlId: "formPassword",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
        size: "sm",
        type: "password",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "male",
        label: "male"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "gender",
        id: "female",
        label: "female"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "status",
        id: "active",
        label: "active"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
        type: "radio",
        name: "status",
        id: "disabled",
        label: "disabled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "secondary",
      size: "sm",
      children: "Cancel"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      type: "submit",
      size: "sm",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkL0Rhc2hib2FyZEEuNDdkOWNlOTU2YTQ4ZTM3YjdkZWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS08sU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBOEI7QUFDakMsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBLE1BQU1DLEVBQUUsR0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLFFBQWIsQ0FBc0JDLEtBQWpDO0FBQ0EsTUFBTUMsRUFBRSxHQUFHUCxLQUFLLENBQUNJLE1BQU4sQ0FBYUksWUFBYixDQUEwQkYsS0FBckM7QUFDQSxNQUFNRyxFQUFFLEdBQUdULEtBQUssQ0FBQ0ksTUFBTixDQUFhTSxVQUFiLENBQXdCSixLQUFuQztBQUNBLE1BQU1LLEVBQUUsR0FBR1gsS0FBSyxDQUFDSSxNQUFOLENBQWFRLFVBQWIsQ0FBd0JOLEtBQW5DO0FBQ0EsTUFBSU8sRUFBRSxHQUFHLEVBQVQ7QUFDQSxNQUFJQyxFQUFFLEdBQUc7QUFDTEMsSUFBQUEsSUFBSSxFQUFFWixFQUREO0FBRUxhLElBQUFBLFFBQVEsRUFBRVQsRUFGTDtBQUdMVSxJQUFBQSxNQUFNLEVBQUVSLEVBSEg7QUFJTFMsSUFBQUEsTUFBTSxFQUFFUDtBQUpILEdBQVQ7QUFNQVEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLEVBQVo7QUFFQWIsRUFBQUEsS0FBSyxDQUFDb0IsSUFBTiwrQkFBd0M7QUFDcENDLElBQUFBLEVBQUUsRUFBRVQsRUFEZ0M7QUFFcENFLElBQUFBLElBQUksRUFBRVosRUFGOEI7QUFHcENhLElBQUFBLFFBQVEsRUFBRVQ7QUFIMEIsR0FBeEMsRUFNQ2dCLElBTkQsQ0FNTSxVQUFVQyxRQUFWLEVBQXdCO0FBQzFCTCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNELEdBUkgsV0FTUyxVQUFV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RS8uL2NvbXBvbmVudHMvQWRkVXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dEdyb3VwIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vcGFnZXMvdXNlcnMvVXNlclwiO1xyXG5pbXBvcnQgeyBnZXRTdGF0aWNQcm9wcyB9IGZyb20gXCIuLi9wYWdlcy9hcGkvdXNlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSZXF1ZXN0KGV2ZW50OmFueSl7XHJcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuICAgIGNvbnN0IG4xID0gZXZlbnQudGFyZ2V0LmZvcm1OYW1lLnZhbHVlXHJcbiAgICBjb25zdCBwMSA9IGV2ZW50LnRhcmdldC5mb3JtUGFzc3dvcmQudmFsdWVcclxuICAgIGNvbnN0IGcxID0gZXZlbnQudGFyZ2V0LmZvcm1HZW5kZXIudmFsdWVcclxuICAgIGNvbnN0IHMxID0gZXZlbnQudGFyZ2V0LmZvcm1TdGF0dXMudmFsdWVcclxuICAgIGxldCBpMSA9IDEyXHJcbiAgICBsZXQgdTEgPSB7XHJcbiAgICAgICAgbmFtZTogbjEsIFxyXG4gICAgICAgIHBhc3N3b3JkOiBwMSxcclxuICAgICAgICBnZW5kZXI6IGcxLFxyXG4gICAgICAgIHN0YXR1czogczFcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHUxKVxyXG5cclxuICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyYCx7XHJcbiAgICAgICAgaWQ6IGkxLFxyXG4gICAgICAgIG5hbWU6IG4xLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwMSxcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2U6YW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yOmFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oaTEgKyspXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFVzZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRSZXF1ZXN0fT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1OYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+TmFtZTogPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBzaXplPVwic21cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgbmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1QYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgPlBhc3N3b3JkOiA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHNpemU9XCJzbVwiIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1HZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwcHhcIiB9fT5HZW5kZXI6PC9wPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdnZW5kZXInXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BtYWxlYH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17YG1hbGVgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZ2VuZGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgZmVtYWxlYH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17YGZlbWFsZWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX0+U3RhdHVzOjwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgYWN0aXZlYH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17YGFjdGl2ZWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BkaXNhYmxlZGB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BkaXNhYmxlZGB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwic21cIiA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkZvcm0iLCJCdXR0b24iLCJhZGRSZXF1ZXN0IiwiZXZlbnQiLCJheGlvcyIsInJlcXVpcmUiLCJuMSIsInRhcmdldCIsImZvcm1OYW1lIiwidmFsdWUiLCJwMSIsImZvcm1QYXNzd29yZCIsImcxIiwiZm9ybUdlbmRlciIsInMxIiwiZm9ybVN0YXR1cyIsImkxIiwidTEiLCJuYW1lIiwicGFzc3dvcmQiLCJnZW5kZXIiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJBZGRVc2VyIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==