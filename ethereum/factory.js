import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const Instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xC92C4c23683009DF412B22Eb512d9fC12d592865'
);

export default Instance;
