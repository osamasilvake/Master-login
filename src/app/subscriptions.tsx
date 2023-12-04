import { SubscriptionType } from './Subscription.enum';
import { SubscriptionCard } from './Subscription.interface';

export const subscriptions: SubscriptionCard[] = [
	{
		id: SubscriptionType.Free,
		price: '0$',
		usage: 'For Personal Use',
		description: 'No credit card required',
		list: [
			{ text: '<b>100</b> Total Memories' },
			{ text: '<b>One</b> Ai persona' },
			{ text: 'Generated Personal Ai Domain' },
			{ text: 'Generated Ai Domain' },
			{ text: 'Generated Ai Domain' },
			{ text: 'Synci Memories from Google Drive & Zapier' },
			{ text: 'Synci Memories from Google Drive & Zapier' },
			{ text: 'Public Comunity language Acess Drive' }
		]
	},
	{
		id: SubscriptionType.Starter,
		price: '15$',
		perMonth: 'two month',
		usage: 'For Personal & Professional Use',
		description: 'Everthing included in Free,plus',
		list: [
			{ text: '<b>1000</b> Total Memories' },
			{ text: '<b>Two</b> Ai persona' },
			{ text: 'Generated Ai Domain' },
			{ text: 'Generated Ai Domain' },
			{ text: 'Synci Memories from Google Drive & Zapier' },
			{ text: 'Synci Memories from Google Drive & Zapier' },
			{ text: 'Synci Memories from Google Drive & Zapier' }
		]
	},
	{
		id: SubscriptionType.Premium,
		price: '40$',
		perMonth: 'three month',
		usage: 'For Small Bussiness Use',
		description: 'Everthing included in Start,plus',
		list: [
			{ text: '<b>UnLimited</b> Total Memories' },
			{ text: '<b>UnLimited</b> Ai persona' },
			{ text: 'Generated Ai Domain' },
			{ text: 'Ai FriendsAi' },
			{ text: 'Synci Memories from Google Drive & Zapier' },
			{ text: 'Synci Memories from Google Drive & Zapier' }
		]
	}
];
