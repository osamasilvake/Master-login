import { FC } from 'react';

import { RouteTypeEnum } from '@/routes/Routes.enum';

import { LayoutPageInterface, RoutesInterface } from '../../routes/Routes.interface';

export interface AuthInterface {
	route: RoutesInterface;
	template: FC<LayoutPageInterface>;
	type?: RouteTypeEnum;
}

export interface AuthStateInterface {
	intendedUrl: string;
}
