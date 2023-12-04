export interface PricingCard {
	id: string;
	price: string;
	usage: string;
	description: string;
	list: PricingCardFeature[];
	perMonth?: string;
}

interface PricingCardFeature {
	title: string;
}
