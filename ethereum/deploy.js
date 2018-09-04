const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const campaignFactory = require("./build/CampaignFactory.json");


const provider = new HDWalletProvider(
	'guitar vague wave hello join book retire butter noble frown inside dawn',
	'https://rinkeby.infura.io/v3/8a3689ebc482423b9e22ec99cb205f8a'
	);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log("Accounts", accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
													.deploy({ data: '0x' + campaignFactory.bytecode })
													.send({ from: accounts[0]});

	console.log("Contract deployed to", result.options.address);
}
deploy();
