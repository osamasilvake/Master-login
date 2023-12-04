export interface SubscriptionCard {
	id: string;
	price: string;
	usage: string;
	description: string;
	list: SubscriptionCardFeature[];
	perMonth?: string;
}

interface SubscriptionCardFeature {
	text: string;
}
