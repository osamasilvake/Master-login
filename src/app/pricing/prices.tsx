import { PricingType } from './Pricing.enum';
import { PricingCard } from './Pricing.interface';

export const prices: PricingCard[] = [
	{
		id: PricingType.Free,
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
		id: PricingType.Starter,
		price: '15$',
		perMonth: 'two month',
		usage: 'For Personal & Professional Use',
		description: 'Everthing included in Free,plus',
		list: [
			{ title: '<b>1000</b> Total Memories' },
			{ title: '<b>Two</b> Ai persona' },
			{ title: 'Generated Ai Domain' },
			{ title: 'Custom Ai Domain' },
			{ title: 'Synci Memories from Google Drive & Zapier' },
			{ title: 'Ai Friends' },
			{ title: 'Synci Memories from Facebook Drive & Youtube' }
		]
	},
	{
		id: PricingType.Premium,
		price: '40$',
		perMonth: 'three month',
		usage: 'For Small Bussiness Use',
		description: 'Everthing included in Start,plus',
		list: [
			{ title: '<b>2,000</b> Total Memories' },
			{ title: '<b>UnLimited</b> Ai persona' },
			{ title: 'Generated Ai Domain' },
			{ title: 'Ai Friends' },
			{ title: 'Synci Memories from Google Drive & Zapier' },
			{ title: 'Premuim Community Lanuge Access' }
		]
	}
];
