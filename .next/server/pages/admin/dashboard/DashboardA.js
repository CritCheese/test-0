(() => {
var exports = {};
exports.id = "pages/admin/dashboard/DashboardA";
exports.ids = ["pages/admin/dashboard/DashboardA"];
exports.modules = {

/***/ "./components/AddUser.tsx":
/*!********************************!*\
  !*** ./components/AddUser.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRequest": () => (/* binding */ addRequest),
/* harmony export */   "default": () => (/* binding */ AddUser)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\Next.js Learn\\test-0\\components\\AddUser.tsx";

async function addRequest(event) {
  event.preventDefault();

  const axios = __webpack_require__(/*! axios */ "axios");

  const n1 = event.target.formName.value;
  const p1 = event.target.formPassword.value;
  const g1 = event.target.formGender.value;
  const s1 = event.target.formStatus.value;
  const res = await fetch("http://localhost:3000/user");
  let x2 = true;
  let u9;
  u9 = await res.json();

  for (let xx of u9) {
    if (n1 == xx.name) {
      x2 = false;
      console.log("invalid name");
      break;
    }
  }

  if (x2 != true) {
    alert('name existed!');
  } else {
    axios.post('http://localhost:3000/user', {
      name: n1,
      password: p1,
      gender: g1,
      status: s1
    }).then(function (response) {
      console.log(response);
      alert('Success!');
      window.location.reload();
    }).catch(function (error) {
      console.log(error);
      alert('Failed!');
    });
  }
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
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
        size: "sm",
        type: "text",
        placeholder: "enter name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
      className: "mb-3",
      controlId: "formPassword",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
        size: "sm",
        type: "password",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Select, {
        "aria-label": "Select gender",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "male",
          children: "Male"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "female",
          children: "Female"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Select, {
        "aria-label": "Select gender",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "active",
          children: "active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "disabled",
          children: "disabled"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      type: "submit",
      size: "sm",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/EditUser.tsx":
/*!*********************************!*\
  !*** ./components/EditUser.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditUser),
/* harmony export */   "editRequest": () => (/* binding */ editRequest)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\Next.js Learn\\test-0\\components\\EditUser.tsx";


function EditUser() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: editRequest,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
      className: "mb-3",
      controlId: "formNameE2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
        children: "Name: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
        size: "sm",
        type: "text",
        placeholder: "enter name",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
      className: "mb-3",
      controlId: "formPasswordE2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
        children: "Password: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
        size: "sm",
        type: "password",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
      className: "mb-3",
      controlId: "formGenderE2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: "0px"
        },
        children: "Gender:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Select, {
        "aria-label": "Select gender",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "male",
          children: "Male"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "female",
          children: "Female"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
      className: "mb-3",
      controlId: "formStatusE2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: "0px"
        },
        children: "Status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Select, {
        "aria-label": "Select status",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "active",
          children: "active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "disabled",
          children: "disabled"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "primary",
      type: "submit",
      size: "sm",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
async function editRequest(event) {
  let x5 = localStorage.getItem('editU');
  let xx5;

  if (x5 != null) {
    xx5 = parseInt(x5);
  }

  event.preventDefault();

  const axios = __webpack_require__(/*! axios */ "axios");

  const n1 = event.target.formNameE2.value;
  const p1 = event.target.formPasswordE2.value;
  const g1 = event.target.formGenderE2.value;
  const s1 = event.target.formStatusE2.value;
  const res = await fetch("http://localhost:3000/user");
  let x2 = true;
  let u9;
  u9 = await res.json();

  for (let i = 0; i < u9.length; i++) {
    if (u9[i].id == xx5) {
      continue;
    }

    if (n1 == u9[i].name) {
      console.log("invalid name");
      x2 = false;
      break;
    }
  }

  if (x2 != true) {
    alert('name existed!');
  } else {
    axios.patch(`http://localhost:3000/user/${xx5}`, {
      name: n1,
      password: p1,
      gender: g1,
      status: s1
    }).then(function (response) {
      console.log(response);
      alert('Success!');
      localStorage.removeItem('editU');
      window.location.reload();
    }).catch(function (error) {
      console.log(error);
      alert('Failed!');
    });
  }
}

/***/ }),

/***/ "./pages/admin/dashboard/DashboardA.tsx":
/*!**********************************************!*\
  !*** ./pages/admin/dashboard/DashboardA.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delUser": () => (/* binding */ delUser),
/* harmony export */   "default": () => (/* binding */ DashboardA),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_test_css_1_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/test_css_1.module.css */ "./components/test_css_1.module.css");
/* harmony import */ var _components_test_css_1_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_test_css_1_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AddUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/AddUser */ "./components/AddUser.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_EditUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/EditUser */ "./components/EditUser.tsx");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\Next.js Learn\\test-0\\pages\\admin\\dashboard\\DashboardA.tsx";





function delUser(idx) {
  const axios = __webpack_require__(/*! axios */ "axios");

  axios.delete(`http://localhost:3000/user/${idx}`).then(function (response) {
    // handle success
    console.log(response);
    alert('Success!');
    window.location.reload();
  }).catch(function (error) {
    // handle error
    console.log(error);
  }).then(function () {// always executed
  });
}
function DashboardA({
  users
}) {
  // console.log(users)
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const {
    0: showE,
    1: setShowE
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  const handleCloseE = () => setShowE(false);

  const handleShowE = idx => {
    setShowE(true);
    localStorage.setItem('editU', idx.toString());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: (_components_test_css_1_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "admin dashboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      size: "sm",
      onClick: handleShow,
      children: "Add an User"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      show: show,
      onHide: handleClose,
      backdrop: "static",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "Add an user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 43
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddUser__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
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
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "gender"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "options"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: users.map(r => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: r.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "outline-secondary",
                size: "sm",
                onClick: () => handleShowE(r.id),
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "outline-danger",
                size: "sm",
                onClick: () => delUser(r.id),
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, this)]
          }, r.id, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      show: showE,
      onHide: handleCloseE,
      backdrop: "static",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "Edit User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 43
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditUser__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}
const getStaticProps = async context => {
  let users;
  const res = await fetch("http://localhost:3000/user");
  users = await res.json();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    },
    revalidate: 1
  };
};

/***/ }),

/***/ "./components/test_css_1.module.css":
/*!******************************************!*\
  !*** ./components/test_css_1.module.css ***!
  \******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "test_css_1_container__3qumy"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/dashboard/DashboardA.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUM3RCxNQUFJZixLQUFKO0FBQ0EsUUFBTWpELEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsNEJBQUQsQ0FBdkI7QUFDQWdELEVBQUFBLEtBQUssR0FBRyxNQUFNakQsR0FBRyxDQUFDSSxJQUFKLEVBQWQ7QUFDQSxTQUFPO0FBQ0g2RCxJQUFBQSxLQUFLLEVBQUU7QUFDSGhCLE1BQUFBLEtBQUssRUFBRWlCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZW5CLEtBQWYsQ0FBWDtBQURKLEtBREo7QUFJSG9CLElBQUFBLFVBQVUsRUFBRTtBQUpULEdBQVA7QUFNSCxDQVZNOzs7Ozs7Ozs7O0FDL0ZQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtMC8uL2NvbXBvbmVudHMvQWRkVXNlci50c3giLCJ3ZWJwYWNrOi8vdGVzdC0wLy4vY29tcG9uZW50cy9FZGl0VXNlci50c3giLCJ3ZWJwYWNrOi8vdGVzdC0wLy4vcGFnZXMvYWRtaW4vZGFzaGJvYXJkL0Rhc2hib2FyZEEudHN4Iiwid2VicGFjazovL3Rlc3QtMC8uL2NvbXBvbmVudHMvdGVzdF9jc3NfMS5tb2R1bGUuY3NzIiwid2VicGFjazovL3Rlc3QtMC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdGVzdC0wL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0LTAvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly90ZXN0LTAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vcGFnZXMvdXNlcnMvVXNlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFJlcXVlc3QoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuICAgIGNvbnN0IG4xID0gZXZlbnQudGFyZ2V0LmZvcm1OYW1lLnZhbHVlXHJcbiAgICBjb25zdCBwMSA9IGV2ZW50LnRhcmdldC5mb3JtUGFzc3dvcmQudmFsdWVcclxuICAgIGNvbnN0IGcxID0gZXZlbnQudGFyZ2V0LmZvcm1HZW5kZXIudmFsdWVcclxuICAgIGNvbnN0IHMxID0gZXZlbnQudGFyZ2V0LmZvcm1TdGF0dXMudmFsdWVcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJcIilcclxuICAgIGxldCB4MiA9IHRydWVcclxuICAgIGxldCB1OTogVXNlcltdXHJcbiAgICB1OSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICBmb3IgKGxldCB4eCBvZiB1OSl7XHJcbiAgICAgICAgaWYgKG4xID09IHh4Lm5hbWUpe1xyXG4gICAgICAgICAgICB4MiA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW52YWxpZCBuYW1lXCIpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoeDIgIT0gdHJ1ZSl7XHJcbiAgICAgICAgYWxlcnQoJ25hbWUgZXhpc3RlZCEnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcicsIHtcclxuICAgICAgICBuYW1lOiBuMSxcclxuICAgICAgICBwYXNzd29yZDogcDEsXHJcbiAgICAgICAgZ2VuZGVyOiBnMSxcclxuICAgICAgICBzdGF0dXM6IHMxXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1N1Y2Nlc3MhJylcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCEnKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRVc2VyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2FkZFJlcXVlc3R9PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybU5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID5OYW1lOiA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHNpemU9XCJzbVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbnRlciBuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UGFzc3dvcmQ6IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdlbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjBweFwiIH19PkdlbmRlcjo8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3QgYXJpYS1sYWJlbD1cIlNlbGVjdCBnZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFsZVwiPk1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjBweFwiIH19PlN0YXR1czo8L3A+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3QgYXJpYS1sYWJlbD1cIlNlbGVjdCBnZW5kZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWN0aXZlXCI+YWN0aXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRpc2FibGVkXCI+ZGlzYWJsZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cInNtXCIgPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vcGFnZXMvdXNlcnMvVXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFVzZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtlZGl0UmVxdWVzdH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtTmFtZUUyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+TmFtZTogPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBzaXplPVwic21cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgbmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1QYXNzd29yZEUyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCA+UGFzc3dvcmQ6IDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgc2l6ZT1cInNtXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdlbmRlckUyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX0+R2VuZGVyOjwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBhcmlhLWxhYmVsPVwiU2VsZWN0IGdlbmRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFsZVwiPk1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVN0YXR1c0UyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX0+U3RhdHVzOjwvcD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBhcmlhLWxhYmVsPVwiU2VsZWN0IHN0YXR1c1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWN0aXZlXCI+YWN0aXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRpc2FibGVkXCI+ZGlzYWJsZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cInNtXCIgPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXRSZXF1ZXN0KGV2ZW50OiBhbnkpIHtcclxuICAgIGxldCB4NSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlZGl0VScpXHJcbiAgICBsZXQgeHg1XHJcbiAgICBpZiAoeDUgIT0gbnVsbCkge1xyXG4gICAgICAgIHh4NSA9IHBhcnNlSW50KHg1KVxyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG4gICAgY29uc3QgbjEgPSBldmVudC50YXJnZXQuZm9ybU5hbWVFMi52YWx1ZVxyXG4gICAgY29uc3QgcDEgPSBldmVudC50YXJnZXQuZm9ybVBhc3N3b3JkRTIudmFsdWVcclxuICAgIGNvbnN0IGcxID0gZXZlbnQudGFyZ2V0LmZvcm1HZW5kZXJFMi52YWx1ZVxyXG4gICAgY29uc3QgczEgPSBldmVudC50YXJnZXQuZm9ybVN0YXR1c0UyLnZhbHVlXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyXCIpXHJcbiAgICBsZXQgeDIgPSB0cnVlXHJcbiAgICBsZXQgdTk6IFVzZXJbXVxyXG4gICAgdTkgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1OS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh1OVtpXS5pZCA9PSB4eDUpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4xID09IHU5W2ldLm5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnZhbGlkIG5hbWVcIilcclxuICAgICAgICAgICAgeDIgPSBmYWxzZVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoeDIgIT0gdHJ1ZSl7XHJcbiAgICAgICAgYWxlcnQoJ25hbWUgZXhpc3RlZCEnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBheGlvcy5wYXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvJHt4eDV9YCwge1xyXG4gICAgICAgIG5hbWU6IG4xLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwMSxcclxuICAgICAgICBnZW5kZXI6IGcxLFxyXG4gICAgICAgIHN0YXR1czogczFcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBhbGVydCgnU3VjY2VzcyEnKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZWRpdFUnKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQhJylcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90ZXN0X2Nzc18xLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgVGFibGUsIEJ1dHRvbiwgTW9kYWwsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IEFkZFVzZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BZGRVc2VyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRWRpdFVzZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9FZGl0VXNlcidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsVXNlcihpZHg6IG51bWJlcikge1xyXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG4gICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci8ke2lkeH1gKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1N1Y2Nlc3MhJylcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gYWx3YXlzIGV4ZWN1dGVkXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZEEoeyB1c2VycyB9OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VycylcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0UsIHNldFNob3dFXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlRSA9ICgpID0+IHNldFNob3dFKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3dFID0gKGlkeDpudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRTaG93RSh0cnVlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZWRpdFUnLCBpZHgudG9TdHJpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPHA+YWRtaW4gZGFzaGJvYXJkPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCIgb25DbGljaz17aGFuZGxlU2hvd30+QWRkIGFuIFVzZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9IGJhY2tkcm9wPSdzdGF0aWMnPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj48Yj5BZGQgYW4gdXNlcjwvYj48L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRVc2VyPjwvQWRkVXNlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcblxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5uYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnBhc3N3b3JkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmdlbmRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5zdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+b3B0aW9uczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCgocjogeyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmc7IGdlbmRlcjogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3IubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ci5wYXNzd29yZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ci5nZW5kZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Iuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dFKHIuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gZGVsVXNlcihyLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0V9IG9uSGlkZT17aGFuZGxlQ2xvc2VFfSBiYWNrZHJvcD0nc3RhdGljJz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+PGI+RWRpdCBVc2VyPC9iPjwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVkaXRVc2VyPjwvRWRpdFVzZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgbGV0IHVzZXJzOiBzdHJpbmdbXVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlclwiKVxyXG4gICAgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXJzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXJzKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDFcclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwidGVzdF9jc3NfMV9jb250YWluZXJfXzNxdW15XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJGb3JtIiwiQnV0dG9uIiwiYWRkUmVxdWVzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInJlcXVpcmUiLCJuMSIsInRhcmdldCIsImZvcm1OYW1lIiwidmFsdWUiLCJwMSIsImZvcm1QYXNzd29yZCIsImcxIiwiZm9ybUdlbmRlciIsInMxIiwiZm9ybVN0YXR1cyIsInJlcyIsImZldGNoIiwieDIiLCJ1OSIsImpzb24iLCJ4eCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJwb3N0IiwicGFzc3dvcmQiLCJnZW5kZXIiLCJzdGF0dXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyb3IiLCJBZGRVc2VyIiwibWFyZ2luQm90dG9tIiwiUmVhY3QiLCJFZGl0VXNlciIsImVkaXRSZXF1ZXN0IiwieDUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieHg1IiwicGFyc2VJbnQiLCJmb3JtTmFtZUUyIiwiZm9ybVBhc3N3b3JkRTIiLCJmb3JtR2VuZGVyRTIiLCJmb3JtU3RhdHVzRTIiLCJpIiwibGVuZ3RoIiwiaWQiLCJwYXRjaCIsInJlbW92ZUl0ZW0iLCJzdHlsZXMiLCJDb250YWluZXIiLCJUYWJsZSIsIk1vZGFsIiwidXNlU3RhdGUiLCJkZWxVc2VyIiwiaWR4IiwiZGVsZXRlIiwiRGFzaGJvYXJkQSIsInVzZXJzIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJzaG93RSIsInNldFNob3dFIiwiaGFuZGxlQ2xvc2VFIiwiaGFuZGxlU2hvd0UiLCJzZXRJdGVtIiwidG9TdHJpbmciLCJjb250YWluZXIiLCJtYXAiLCJyIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==