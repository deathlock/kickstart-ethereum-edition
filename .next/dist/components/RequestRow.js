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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/smit/smit/kickstart-ethereum-edition/components/RequestRow.js';


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loadingApprove: false,
			loadingFinalize: false
		}, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);

							_this.setState({ loadingApprove: true });

							_context.prev = 2;
							_context.next = 5;
							return _web2.default.eth.getAccounts();

						case 5:
							accounts = _context.sent;
							_context.next = 8;
							return campaign.methods.approveRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 8:
							_context.next = 13;
							break;

						case 10:
							_context.prev = 10;
							_context.t0 = _context['catch'](2);

							console.log(_context.t0);

						case 13:
							_this.setState({ loadingApprove: false });

						case 14:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2, [[2, 10]]);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);

							_this.setState({ loadingFinalize: true });

							_context2.prev = 2;
							_context2.next = 5;
							return _web2.default.eth.getAccounts();

						case 5:
							accounts = _context2.sent;
							_context2.next = 8;
							return campaign.methods.finalizeRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 8:
							_context2.next = 13;
							break;

						case 10:
							_context2.prev = 10;
							_context2.t0 = _context2['catch'](2);

							console.log(_context2.t0);

						case 13:
							_this.setState({ loadingFinalize: false });

						case 14:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2, [[2, 10]]);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: 'render',
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    request = _props.request,
			    approversCount = _props.approversCount;

			var readyToFinalize = request.approvalCount > approversCount / 2;

			return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, request.recipient), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', loading: this.state.loadingApprove, basic: true, onClick: this.onApprove, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Approve')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', loading: this.state.loadingFinalize, basic: true, onClick: this.onFinalize, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Finalize')));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9hZGluZ0FwcHJvdmUiLCJsb2FkaW5nRmluYWxpemUiLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJjb25zb2xlIiwibG9nIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O2tOQUNMLEE7bUJBQVEsQUFDUyxBQUNoQjtvQkFGTyxBQUVVLEE7QUFGVixBQUNQLFcsQUFJRCxxRkFBWSxtQkFBQTtpQkFBQTtpRUFBQTtjQUFBO3NDQUFBO1dBQ0w7QUFESyxrQkFDTSx3QkFBUyxNQUFBLEFBQUssTUFEcEIsQUFDTSxBQUFvQixBQUVyQzs7YUFBQSxBQUFLLFNBQVMsRUFBRSxnQkFITCxBQUdYLEFBQWMsQUFBa0I7O3VCQUhyQjt1QkFBQTtjQU1hLGNBQUEsQUFBSyxJQU5sQixBQU1hLEFBQVM7O1dBQTFCO0FBTkksMkJBQUE7dUJBQUE7dUJBT0osQUFBUyxR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