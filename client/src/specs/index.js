'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./app.jsx');

var _app2 = _interopRequireDefault(_app);

var _stylesMin = require('./../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EarningsRatings = function (_React$Component) {
  _inherits(EarningsRatings, _React$Component);

  function EarningsRatings(props) {
    _classCallCheck(this, EarningsRatings);

    var _this = _possibleConstructorReturn(this, (EarningsRatings.__proto__ || Object.getPrototypeOf(EarningsRatings)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(EarningsRatings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_app2.default, { pId: this.props.pId })
      );
    }
  }]);

  return EarningsRatings;
}(_react2.default.Component);

exports.default = EarningsRatings;

window.EarningsRatings = EarningsRatings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkVhcm5pbmdzUmF0aW5ncyIsInByb3BzIiwic3RhdGUiLCJwSWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVTO0FBQ1IsYUFBUTtBQUFBO0FBQUE7QUFDUCxzQ0FBQyxhQUFELElBQUssS0FBSyxLQUFLRCxLQUFMLENBQVdFLEdBQXJCO0FBRE8sT0FBUjtBQUdEOzs7O0VBWjJCQyxnQkFBTUMsUzs7a0JBZXJCTCxlOztBQUNmTSxPQUFPTixlQUFQLEdBQXlCQSxlQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanN4JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi9kaXN0L2J1aWxkL3N0eWxlcy5taW4uY3NzJztcblxuY2xhc3MgRWFybmluZ3NSYXRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG5cbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgPEFwcCBwSWQ9e3RoaXMucHJvcHMucElkfS8+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFYXJuaW5nc1JhdGluZ3M7XG53aW5kb3cuRWFybmluZ3NSYXRpbmdzID0gRWFybmluZ3NSYXRpbmdzOyJdfQ==