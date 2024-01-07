import PrivateLayout from '@/layouts/private/PrivateLayout';
import PublicLayout from '@/layouts/public/PublicLayout';

import { RouteTypeEnum } from './Routes.enum';
import { RoutesTemplateInterface } from './Routes.interface';
import privateRoutes from './types/private';
import publicRoutes from './types/public';
import sessionRoutes from './types/session';

const routesTemplate: RoutesTemplateInterface[] = [
	{
		routes: publicRoutes,
		template: PublicLayout,
		type: RouteTypeEnum.PUBLIC
	},
	{
		routes: sessionRoutes,
		template: PublicLayout,
		type: RouteTypeEnum.SESSION
	},
	{
		routes: privateRoutes,
		template: PrivateLayout,
		type: RouteTypeEnum.PRIVATE
	}
];
export default routesTemplate;
