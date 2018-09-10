import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
	state = {
		loadingApprove: false,
		loadingFinalize: false
	};

	onApprove = async () => {
		const campaign = Campaign(this.props.address);

		this.setState({ loadingApprove: true });

		try {
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.approveRequest(this.props.id).send({
				from: accounts[0]
			});
		} catch (err) {
			console.log(err);
		}
		this.setState({ loadingApprove: false });
	};

	onFinalize = async () => {
		const campaign = Campaign(this.props.address);
		this.setState({ loadingFinalize: true });

		try {
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.finalizeRequest(this.props.id).send({
				from: accounts[0]
			});
		} catch (err) {
			console.log(err);
		}
		this.setState({ loadingFinalize: false });
	};


	render(){
		const { Row, Cell } = Table;
		const { id, request, approversCount } = this.props;
		const readyToFinalize = request.approvalCount > approversCount / 2;

		return (
				<Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
				<Cell>{id}</Cell>
				<Cell>{request.description}</Cell>
				<Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
				<Cell>{request.recipient}</Cell>
				<Cell>{request.approvalCount}/{approversCount}</Cell>
				<Cell>
					{ request.complete ? null : (
					<Button color="green" loading={this.state.loadingApprove} basic onClick={this.onApprove}>Approve</Button>
					)
					}
				</Cell>
				<Cell>
					{ request.complete ? null : (
					<Button color="teal" loading={this.state.loadingFinalize} basic onClick={this.onFinalize}>Finalize</Button>
					)
					}
				</Cell>
				</Row>
			);
	}
}


export default RequestRow;
