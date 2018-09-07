import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
	static async getInitialProps() {
		const campaings = await factory.methods.getDeployedCampaigns().call();

		return {campaings};
	}

	renderCampaings() {
		const items = this.props.campaings.map(address => {
			return {
				header: address,
				description: <a>View campaing</a>,
				fluid: true
			};
		});

		return <Card.Group items={items} />;
	}

	render() {
		return (
		<Layout>
			<div>
			<h3>Open Campaings</h3>

			<Button
				floated="right"
				content="Create Campaign"
				icon="add circle"
				primary
			/>

			{this.renderCampaings()}


			</div>
		</Layout>
		)
	}
}

export default CampaignIndex;
