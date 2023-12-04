import { AiOutlineCheck } from 'react-icons/ai';

import { SubscriptionType } from './Subscription.enum';
import { subscriptions } from './subscriptions';

const Subscription = () => (
	<div className="bg-gradient-to-t from-white to-violet-300">
		<header className="text-center pt-5 pb-7">
			<h1 className="text-2xl font-semibold pb-1">Select a Subscription</h1>
			<p className="text-sm text-gray-500">Start for free or take advantage of our most popular upgruade features.</p>
		</header>

		<main className="flex flex-wrap justify-center gap-4 pb-8">
			{subscriptions?.map((subscription) => (
				<div key={subscription.id} className="bg-white shadow-sm pb-5 w-80 md:w-64">
					<div
						className={`bg-gradient-to-t text-center pt-6 h-36 ${
							// eslint-disable-next-line no-nested-ternary
							subscription.id === SubscriptionType.Free
								? 'from-emerald-600 to-emerald-300'
								: // eslint-disable-next-line no-nested-ternary
								subscription.id === SubscriptionType.Starter
								? 'from-orange-600 to-orange-300'
								: subscription.id === SubscriptionType.Premium
								? 'from-violet-700 to-violet-400'
								: ''
						}`}>
						<h2
							className={`text-white text-sm inline-block px-2 py-1 rounded-lg ${
								// eslint-disable-next-line no-nested-ternary
								subscription.id === SubscriptionType.Free
									? 'bg-emerald-300'
									: // eslint-disable-next-line no-nested-ternary
									subscription.id === SubscriptionType.Starter
									? 'bg-orange-300'
									: subscription.id === SubscriptionType.Premium
									? 'bg-violet-400'
									: ''
							}`}>
							{subscription.id}
						</h2>
						<p className="text-3xl text-white pt-1">{subscription.price}</p>
						<p className="text-xs text-white">{subscription.perMonth}</p>
					</div>
					<div className="text-center px-2 pt-5">
						<p className="text-sm font-bold">{subscription.usage}</p>
						<p className="text-sm font-semibold pt-1 pb-5">{subscription.description}</p>
						<button className="bg-white border-blue-400 border-2 text-sm px-10 py-1 rounded-2xl text-blue-800">
							Get Started
						</button>
						<ul className="pt-6 px-4 space-y-4">
							{subscription.list?.map((item, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<li key={index} className="flex items-center gap-3">
									<div>
										<AiOutlineCheck className="text-indigo-700" />
									</div>
									<p className="text-start text-sm font-medium">
										<span className="font-medium" dangerouslySetInnerHTML={{ __html: item.text }} />
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</main>
	</div>
);

export default Subscription;
