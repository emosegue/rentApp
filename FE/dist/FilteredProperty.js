"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CommentaryList = _interopRequireDefault(require("./CommentaryList"));

var _AddCommentary = _interopRequireDefault(require("./AddCommentary"));

var _MapComponent = _interopRequireDefault(require("./MapComponent"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _AuthHelperMethods = _interopRequireDefault(require("../services/AuthHelperMethods"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _FavoriteBorder = _interopRequireDefault(require("@material-ui/icons/FavoriteBorder"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _SimpleRating = _interopRequireDefault(require("./SimpleRating"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var useStyles = function useStyles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    formControl: {
      margin: theme.spacing(3)
    }
  };
};

function getPropertyAsync(_x) {
  return _getPropertyAsync.apply(this, arguments);
}

function _getPropertyAsync() {
  _getPropertyAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(idProperty) {
    var response, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('http://localhost:4000/api/apartments/' + idProperty, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context2.sent;
            data = response.json();
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPropertyAsync.apply(this, arguments);
}

var FilteredProperty = /*#__PURE__*/function (_React$Component) {
  _inherits(FilteredProperty, _React$Component);

  var _super = _createSuper(FilteredProperty);

  function FilteredProperty(props) {
    var _this;

    _classCallCheck(this, FilteredProperty);

    _this = _super.call(this, props);
    _this.state = {
      idProperty: undefined,
      property: {
        other_details: undefined,
        comments: [],
        photos: [],
        address: []
      }
    };
    return _this;
  }

  _createClass(FilteredProperty, [{
    key: "updateList",
    value: function updateList() {
      console.log(this.state.idProperty);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dataProperty;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  idProperty: this.props.location.pathname.replace('/filteredProperty/', '')
                });
                _context.next = 3;
                return getPropertyAsync(this.props.location.pathname.replace('/filteredProperty/', ''));

              case 3:
                dataProperty = _context.sent;
                this.setState({
                  property: dataProperty
                }, function () {
                  this.render();
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "showRating",
    value: function showRating() {
      return /*#__PURE__*/_react.default.createElement(_SimpleRating.default, null);
    }
  }, {
    key: "showAddCommentary",
    value: function showAddCommentary() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "newcommentary-content"
      }, /*#__PURE__*/_react.default.createElement(_AddCommentary.default, {
        idProperty: this.props.location.pathname.replace('/filteredProperty/', ''),
        callbackFromParent: this.updateList
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          checkedA = _this$state.checkedA,
          checkedB = _this$state.checkedB,
          checkedF = _this$state.checkedF,
          checkedG = _this$state.checkedG;
      var classes = this.props.classes;
      var userHelper = new _AuthHelperMethods.default();
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "filtered-content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "property-content"
      }, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
        style: {
          height: 300
        },
        image: this.state.property.photos[0]
      })), /*#__PURE__*/_react.default.createElement(_Box.default, {
        fontWeight: "fontWeightMedium",
        m: 1
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        component: "h2",
        variant: "h3",
        color: "textPrimary"
      }, "$", this.state.property.price)), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        spacing: 3
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6
      }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
        className: classes.paper
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        fontWeight: "fontWeightMedium",
        m: 1
      }, this.state.property.other_details))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6
      }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
        className: classes.paper
      }, /*#__PURE__*/_react.default.createElement(_FormGroup.default, {
        row: true
      }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          checked: this.state.property.garage,
          name: "garage"
        }),
        label: "Garage"
      }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          icon: /*#__PURE__*/_react.default.createElement(_FavoriteBorder.default, null),
          checkedIcon: /*#__PURE__*/_react.default.createElement(_Favorite.default, null),
          checked: this.state.property.kids,
          name: "kids"
        }),
        label: "Ni\xF1os"
      }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          checked: this.state.property.pets,
          name: "pets"
        }),
        label: "Mascotas"
      }), ' ', /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          checked: this.state.property.backyard,
          name: "backyard"
        }),
        label: "Patio"
      }), ' ', /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          checked: this.state.property.pool,
          name: "pool"
        }),
        label: "Piscina"
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        disabled: true,
        multiline: true,
        rows: 2,
        id: "standard-read-only-input",
        label: this.state.property.address.line + this.state.property.address.city + this.state.property.address.province,
        InputProps: {
          readOnly: false
        }
      }), '  ')))), userHelper.loggedIn() ? this.showRating() : '')), /*#__PURE__*/_react.default.createElement("div", {
        className: "commentarylist-content"
      }, /*#__PURE__*/_react.default.createElement(_CommentaryList.default, {
        comments: this.state.property.comments,
        changeProperty: this.setFilter
      })), userHelper.loggedIn() ? this.showAddCommentary() : '', /*#__PURE__*/_react.default.createElement("div", {
        className: "map-content"
      }, /*#__PURE__*/_react.default.createElement(_MapComponent.default, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "calendary-content"
      }));
    }
  }]);

  return FilteredProperty;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(useStyles, {
  withTheme: true
})(FilteredProperty);

exports.default = _default;