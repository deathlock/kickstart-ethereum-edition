'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/smit/smit/kickstart-ethereum-edition/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
	(0, _inherits3.default)(RequestNew, _Component);

	function RequestNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			description: '',
			recepient: '',
			loading: false,
			errorMessage: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, _this$state, description, recepient, value, accounts;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								_this.setState({ loading: true, errorMessage: '' });

								campaign = (0, _campaign2.default)(_this.props.address);
								_this$state = _this.state, description = _this$state.description, recepient = _this$state.recepient, value = _this$state.value;
								_context.prev = 4;
								_context.next = 7;
								return new _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recepient).send({
									from: accounts[0]
								});

							case 10:
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](4);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:

								_this.setState({ loading: false, value: '' });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.description,
				onChange: function onChange(event) {
					return _this3.setState({ description: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Value (Ether)'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'Recepient'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.recepient,
				onChange: function onChange(event) {
					return _this3.setState({ recepient: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, 'Create!')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;
								return _context2.abrupt('return', { address: address });

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNlcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUVoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7Ozs7Ozs7Ozs7Ozs7OztrTkFDTCxBO1VBQVEsQUFDQSxBQUNQO2dCQUZPLEFBRU0sQUFDYjtjQUhPLEFBR0ksQUFDWDtZQUpPLEFBSUUsQUFDVDtpQkFMTyxBLEFBS087QUFMUCxBQUNQLFdBYUQsQTt3RkFBVyxpQkFBQSxBQUFPLE9BQVA7OERBQUE7O2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFTjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBRXZDOztBQUxJLG1CQUtPLHdCQUFTLE1BQUEsQUFBSyxNQUxyQixBQUtPLEFBQW9C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