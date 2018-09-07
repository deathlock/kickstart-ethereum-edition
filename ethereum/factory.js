import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const Instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x2CAbf1B86Da03FdD93E9B05F3829d75eA3948e68'
);

export default Instance;
