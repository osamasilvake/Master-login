import { FC } from 'react';

import { RouteTypeEnum } from './Routes.enum';

export interface RoutesInterface {
	path: string;
	component: FC;
	template?: FC<LayoutPageInterface>;
	layout?: FC<LayoutPageInterface>;
}

export interface RoutesTemplateInterface {
	routes: RoutesInterface[];
	template: FC<LayoutPageInterface>;
	type: RouteTypeEnum;
}

export interface LayoutPageInterface {
	Component: FC;
}
