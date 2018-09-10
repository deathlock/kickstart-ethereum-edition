'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3.js');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x2CAbf1B86Da03FdD93E9B05F3829d75eA3948e68');

exports.default = Instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsIkluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNoQixLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFEZ0IsWUFFaEIsQUFGZ0IsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zbWl0L3NtaXQva2lja3N0YXJ0LWV0aGVyZXVtLWVkaXRpb24ifQ==