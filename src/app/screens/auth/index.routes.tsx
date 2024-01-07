import { lazy } from 'react';

import appRoutes from '@/routes/Routes.path';

import { RoutesInterface } from '../../routes/Routes.interface';

const Login = lazy(() => import('./login/Login'));

const authRoutes: RoutesInterface[] = [
	{
		path: appRoutes.AUTH.LOGIN,
		component: Login
	}
];
export default authRoutes;
