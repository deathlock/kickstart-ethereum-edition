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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/smit/smit/kickstart-ethereum-edition/pages/index.js?entry';


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex() {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'renderCampaings',
		value: function renderCampaings() {
			var items = this.props.campaings.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 21
						}
					}, 'View campaing')),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, 'Open Campaings'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				floated: 'right',
				content: 'Create Campaign',
				icon: 'add circle',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}))), this.renderCampaings()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaings;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedCampaigns().call();

							case 2:
								campaings = _context.sent;
								return _context.abrupt('return', { campaings: campaings });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWluZ3MiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaW5ncyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUVmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7b0NBT2EsQUFDakI7T0FBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNqRDs7YUFBTyxBQUNFLEFBQ1I7a0NBQ0MsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtpQkFBM0I7bUJBQUEsQUFDQztBQUREO01BQUEsa0JBQ0MsY0FBQTs7aUJBQUE7bUJBQUE7QUFBQTtBQUFBLFFBSkksQUFHTCxBQUNDLEFBR0Y7WUFQRCxBQUFPLEFBT0MsQUFFUjtBQVRPLEFBQ047QUFGRixBQUFjLEFBWWQsSUFaYzs7d0NBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0EsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFEQSxBQUNBLEFBRUEsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDO2FBQUQsQUFDUyxBQUNSO2FBRkQsQUFFUyxBQUNSO1VBSEQsQUFHTSxBQUNMO2FBSkQ7O2VBQUE7aUJBTEQsQUFHQSxBQUNDLEFBQ0EsQUFTQTtBQVRBO0FBQ0MsY0FSSCxBQUNBLEFBQ0MsQUFjQyxBQUFLLEFBTVA7Ozs7Ozs7Ozs7OztlQTVDd0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOztZQUF6RDtBO3lDQUVDLEVBQUMsV0FBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSm1CLEEsQUFpRDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zbWl0L3NtaXQva2lja3N0YXJ0LWV0aGVyZXVtLWVkaXRpb24ifQ==