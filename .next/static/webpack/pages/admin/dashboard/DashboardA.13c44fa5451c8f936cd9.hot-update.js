"use strict";
self["webpackHotUpdate_N_E"]("pages/admin/dashboard/DashboardA",{

/***/ "./pages/admin/dashboard/DashboardA.tsx":
/*!**********************************************!*\
  !*** ./pages/admin/dashboard/DashboardA.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "delUser": function() { return /* binding */ delUser; },
/* harmony export */   "editUser": function() { return /* binding */ editUser; },
/* harmony export */   "default": function() { return /* binding */ DashboardA; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_AddUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/AddUser */ "./components/AddUser.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\Next.js Learn\\test-0\\pages\\admin\\dashboard\\DashboardA.tsx";


var __N_SSG = true;
function delUser(idx) {
  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  axios["delete"]("http://localhost:3000/user/".concat(idx)).then(function (response) {
    // handle success
    console.log(response);
  })["catch"](function (error) {
    // handle error
    console.log(error);
  }).then(function () {// always executed
  });
}
function editUser(idx) {
  var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  axios.get("http://localhost:3000/user/".concat(idx)).then(function (response) {
    // handle success
    console.log(response);
  })["catch"](function (error) {
    // handle error
    console.log(error);
  }).then(function () {// always executed
  });
}
function DashboardA(_ref) {
  var _this = this;

  var users = _ref.users;
  // console.log(users)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "admin dashboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "primary",
      size: "sm",
      children: "Add an User"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddUser__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Table, {
      striped: true,
      bordered: true,
      hover: true,
      size: "sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "gender"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "options"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: users.map(function (r) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "outline-secondary",
                size: "sm",
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "outline-danger",
                size: "sm",
                onClick: function onClick() {
                  return delUser(r.id);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 33
            }, _this)]
          }, r.id, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, this);
}
_c = DashboardA;

var _c;

$RefreshReg$(_c, "DashboardA");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZGFzaGJvYXJkL0Rhc2hib2FyZEEuMTNjNDRmYTU0NTFjOGY5MzZjZDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBSUE7O0FBZU8sU0FBU0ksT0FBVCxDQUFpQkMsR0FBakIsRUFBNkI7QUFDaEMsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVBRCxFQUFBQSxLQUFLLFVBQUwsc0NBQTJDRCxHQUEzQyxHQUNLRyxJQURMLENBQ1UsVUFBVUMsUUFBVixFQUF5QjtBQUMzQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNILEdBSkwsV0FLVyxVQUFVRyxLQUFWLEVBQXFCO0FBQ3hCO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0gsR0FSTCxFQVNLSixJQVRMLENBU1UsWUFBWSxDQUNkO0FBQ0gsR0FYTDtBQVlIO0FBRU0sU0FBU0ssUUFBVCxDQUFrQlIsR0FBbEIsRUFBK0I7QUFDbEMsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVBRCxFQUFBQSxLQUFLLENBQUNRLEdBQU4sc0NBQXdDVCxHQUF4QyxHQUNDRyxJQURELENBQ00sVUFBVUMsUUFBVixFQUF5QjtBQUMzQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNILEdBSkQsV0FLTyxVQUFVRyxLQUFWLEVBQXFCO0FBQ3hCO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0gsR0FSRCxFQVNDSixJQVRELENBU00sWUFBWSxDQUNkO0FBQ0gsR0FYRDtBQVlIO0FBRWMsU0FBU08sVUFBVCxPQUErRTtBQUFBOztBQUFBLE1BQXpEQyxLQUF5RCxRQUF6REEsS0FBeUQ7QUFDMUY7QUFFQSxzQkFDSSw4REFBQyxzREFBRDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyxtREFBRDtBQUFRLGFBQU8sRUFBQyxTQUFoQjtBQUEwQixVQUFJLEVBQUMsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLDhEQUFDLGtEQUFEO0FBQU8sYUFBTyxNQUFkO0FBQWUsY0FBUSxNQUF2QjtBQUF3QixXQUFLLE1BQTdCO0FBQThCLFVBQUksRUFBQyxJQUFuQztBQUFBLDhCQUNJO0FBQUEsK0JBQ0k7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVdJO0FBQUEsa0JBQ0tBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBdUY7QUFDOUYsOEJBQ0k7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLQSxDQUFDLENBQUNDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEsd0JBQUtELENBQUMsQ0FBQ0U7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBQSx3QkFBS0YsQ0FBQyxDQUFDRztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFBLHdCQUFLSCxDQUFDLENBQUNJO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQUtJO0FBQUEsc0NBQ0ksOERBQUMsbURBQUQ7QUFBUSx1QkFBTyxFQUFDLG1CQUFoQjtBQUFvQyxvQkFBSSxFQUFDLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUksOERBQUMsbURBQUQ7QUFBUSx1QkFBTyxFQUFDLGdCQUFoQjtBQUFpQyxvQkFBSSxFQUFDLElBQXRDO0FBQTJDLHVCQUFPLEVBQUU7QUFBQSx5QkFBTWxCLE9BQU8sQ0FBQ2MsQ0FBQyxDQUFDSyxFQUFILENBQWI7QUFBQSxpQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUEsYUFBU0wsQ0FBQyxDQUFDSyxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFpQkgsU0FsQkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Q0g7S0E1Q3VCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9kYXNoYm9hcmQvRGFzaGJvYXJkQS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFRhYmxlLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9wYWdlcy91c2Vycy9Vc2VyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBBZGRVc2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQWRkVXNlcidcclxuaW1wb3J0IHsgS2V5LCBSZWFjdENoaWxkLCBSZWFjdEZyYWdtZW50LCBSZWFjdFBvcnRhbCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBsZXQgdXNlcnM6IHN0cmluZ1tdXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyXCIpXHJcbiAgICB1c2VycyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdXNlcnM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlcnMpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsVXNlcihpZHg6bnVtYmVyKSB7XHJcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuXHJcbiAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyLyR7aWR4fWApXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjphbnkpIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gYWx3YXlzIGV4ZWN1dGVkXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VXNlcihpZHg6IG51bWJlcikge1xyXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke2lkeH1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yOmFueSkge1xyXG4gICAgICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gYWx3YXlzIGV4ZWN1dGVkXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkQSh7IHVzZXJzIH06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHA+YWRtaW4gZGFzaGJvYXJkPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCIgPkFkZCBhbiBVc2VyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxBZGRVc2VyPjwvQWRkVXNlcj5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+bmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5wYXNzd29yZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5nZW5kZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+c3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPm9wdGlvbnM8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcnMubWFwKChyOiB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZzsgZ2VuZGVyOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3IuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ci5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyLnBhc3N3b3JkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyLmdlbmRlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ci5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBkZWxVc2VyKHIuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJUYWJsZSIsIkJ1dHRvbiIsIkFkZFVzZXIiLCJkZWxVc2VyIiwiaWR4IiwiYXhpb3MiLCJyZXF1aXJlIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZWRpdFVzZXIiLCJnZXQiLCJEYXNoYm9hcmRBIiwidXNlcnMiLCJtYXAiLCJyIiwibmFtZSIsInBhc3N3b3JkIiwiZ2VuZGVyIiwic3RhdHVzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9