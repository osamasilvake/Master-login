import { PricingTableType } from './PricingTable.enum';
import { PricingTable } from './PricingTable.interface';

export const PricingTableList: PricingTable[] = [
	{
		id: PricingTableType.Free,
		price: '0$',
		usage: 'For Personal Use',
		description: 'No credit card required',
		list: [
			{ title: '<b>100</b> Total Memories' },
			{ title: '<b>One</b> Ai persona' },
			{ title: 'Generated Personal Ai Domain' },
			{ title: 'Generated Ai Friend' },
			{ title: 'Synci Memories from Google Drive & Zapier' },
			{ title: 'Unlimited My Ai Conversions' },
			{ title: 'Public Comunity language Acess Drive' }
		]
	},
	{
		id: PricingTableType.Starter,
		price: '15$',
		perMonth: 'two month',
		usage: 'For Personal & Professional Use',
		description: 'Everything included in Free,plus',
		list: [
			{ title: '<b>1000</b> Total Memories' },
			{ title: '<b>Two</b> Ai persona' },
			{ title: 'Generated Ai Domain' },
			{ title: 'Custom Ai Domain' },
			{ title: 'Sync Memories from Google Drive & Zapier' },
			{ title: 'Ai Friends' },
			{ title: 'Sync Memories from Facebook Drive & Youtube' }
		]
	},
	{
		id: PricingTableType.Premium,
		price: '40$',
		perMonth: 'three month',
		usage: 'For Small Business Use',
		description: 'Everything included in Start,plus',
		list: [
			{ title: '<b>2,000</b> Total Memories' },
			{ title: '<b>UnLimited</b> Ai persona' },
			{ title: 'Generated Ai Domain' },
			{ title: 'Ai Friends' },
			{ title: 'Sync Memories from Google Drive & Zapier' },
			{ title: 'Premium Community Lounge Access' }
		]
	}
];
