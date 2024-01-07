import { lazy } from 'react';

import PrivateLayout from '@/layouts/private/PrivateLayoutNoSidebar';
import { RoutesInterface } from '@/routes/Routes.interface';
import appRoutes from '@/routes/Routes.path';

const PricingTable = lazy(() => import('./PricingTable'));

const tablePricingRoutes: RoutesInterface[] = [
	{
		path: appRoutes.SCREENS.PRICING_TABLE.MAIN,
		component: PricingTable,
		layout: PrivateLayout
	}
];
export default tablePricingRoutes;
