import dashboardRoutes from '@/screens/dashboard/index.routes';
import tablePricingRoutes from '@/screens/pricing-table/index.routes';

import { RoutesInterface } from '../Routes.interface';

const routes: RoutesInterface[] = [...dashboardRoutes, ...tablePricingRoutes];
export default routes;
