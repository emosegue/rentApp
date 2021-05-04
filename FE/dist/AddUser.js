"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./AddUser.css");

var _reactRouterDom = require("react-router-dom");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _AuthHelperMethods = _interopRequireDefault(require("../services/AuthHelperMethods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = function useStyles(theme) {
  return {
    root: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 400
    }
  };
};

var AddUser = /*#__PURE__*/function (_Component) {
  _inherits(AddUser, _Component);

  var _super = _createSuper(AddUser);

  function AddUser(props) {
    var _this;

    _classCallCheck(this, AddUser);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "Auth", new _AuthHelperMethods.default());

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var state = _this.state;
      state[e.target.name] = e.target.value;

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "sendDetailsToServer", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var _this$state, user_name, name, surname, user_type, phone, date_of_birth, created_at, update_at, email, password;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                e.stopPropagation();
                _this$state = _this.state, user_name = _this$state.user_name, name = _this$state.name, surname = _this$state.surname, user_type = _this$state.user_type, phone = _this$state.phone, date_of_birth = _this$state.date_of_birth, created_at = _this$state.created_at, update_at = _this$state.update_at, email = _this$state.email, password = _this$state.password;
                console.log();
                _context.next = 6;
                return fetch('http://localhost:4000/api/users/signIn', {
                  method: 'POST',
                  body: JSON.stringify({
                    user_name: user_name,
                    name: name,
                    surname: surname,
                    user_type: user_type,
                    phone: phone,
                    date_of_birth: date_of_birth,
                    created_at: created_at,
                    update_at: update_at,
                    email: email,
                    password: password
                  })
                }).then(function (response) {
                  console.log(response.data);

                  if (response.status === 200) {
                    console.log(_this.Auth.setToken(response.data.token)); // this.Auth.setToken(response.data.token);

                    _this.props.history.push('/');

                    window.location.reload(false);
                  } else {
                    _this.setState({
                      message: 'Registration failed.'
                    });
                  }
                }).catch(function (err) {
                  alert(err);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      user_name: ' ',
      name: ' ',
      surname: ' ',
      user_type: 1,
      phone: '',
      date_of_birth: Date,
      created_at: '',
      update_at: '',
      email: '',
      password: '',
      confirmPassword: '',
      successMessage: null
    };
    return _this;
  }

  _createClass(AddUser, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state2 = this.state,
          user_name = _this$state2.user_name,
          name = _this$state2.name,
          surname = _this$state2.surname,
          user_type = _this$state2.user_type,
          phone = _this$state2.phone,
          date_of_birth = _this$state2.date_of_birth,
          created_at = _this$state2.created_at,
          update_at = _this$state2.update_at,
          email = _this$state2.email,
          password = _this$state2.password;
      /* if (this.Auth.loggedIn().valueOf === true) {
        return (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        );
      } else {*/

      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
        className: classes.paper
      }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        spacing: 4,
        justify: "center"
      }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
        htmlFor: "usuario"
      }, "User Name:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "user_name",
        type: "usuario",
        value: user_name,
        required: true,
        "arai-describedby": "usuario-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "usuario-helper"
      }, "Ingrese un de nombre de Usuario."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
        htmlFor: "usuario"
      }, "Name:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "name",
        type: "text",
        value: name,
        required: true,
        "arai-describedby": "name-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "name-helper"
      }, "Ingrese su nombre."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
        htmlFor: "usuario"
      }, "Surname:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "surname",
        type: "text",
        value: surname,
        required: true,
        "arai-describedby": "surname-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "surname-helper"
      }, "Ingrese su Apellido."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
        htmlFor: "usuario"
      }, "Email address:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "email",
        type: "email",
        value: email,
        required: true,
        "arai-describedby": "email-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "email-helper"
      }, "We'll never share your email with anyone else."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
        htmlFor: "usuario"
      }, "Password:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "password",
        type: "password",
        value: password,
        required: true,
        "arai-describedby": "password-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "password-helper"
      }, "Ingrese un Password de 6 y 12 caracteres."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
        htmlFor: "usuario"
      }, "Confirm Password:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "confirmPassword",
        type: "password",
        "arai-describedby": "confirmPassword-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "confirmPassword-helper"
      }, "Password wil remain unchanged if left blank."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
        htmlFor: "usuario"
      }, "Phone:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "phone",
        type: "text",
        value: phone,
        required: true,
        "arai-describedby": "phone-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "phone-helper"
      }, "Ingrese un telefono."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.Input, {
        name: "date_of_birth",
        type: "Date",
        value: date_of_birth,
        required: true,
        "arai-describedby": "date_of_birth-helper",
        onChange: this.handleChange
      }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
        id: "date_of_birth-helper"
      }, "Ingrese la fecha de alta."))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.Button, {
        type: "submit",
        variant: "contained",
        color: "primary",
        onClick: this.sendDetailsToServer
      }, "Register:"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/_react.default.createElement("span", null, "\xBFYa tiene una cuenta? "), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: "/login"
      }, " Login here"), ";")));
    }
  }]);

  return AddUser;
}(_react.Component); //}


var _default = (0, _styles.withStyles)(useStyles, {
  withTheme: true
})(AddUser);

exports.default = _default;