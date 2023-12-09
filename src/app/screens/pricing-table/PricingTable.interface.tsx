export interface PricingTable {
	id: string;
	price: string;
	usage: string;
	description: string;
	list: PricingTableFeature[];
	perMonth?: string;
}

interface PricingTableFeature {
	title: string;
}
