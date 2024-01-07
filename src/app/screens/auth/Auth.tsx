import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import Loader from '@/components/common/loader/Loader';
import appRoutes from '@/routes/Routes.path';
import { selectAuth } from '@/slices/auth/Auth.slice';

import { isPrivate } from '../../routes/types';
import { AuthInterface, AuthStateInterface } from './Auth.interface';

const Auth: FC<AuthInterface> = (props) => {
	const { route, template, type } = props;
	const auth = useSelector(selectAuth);

	const { pathname, state } = useLocation();
	const isUser = !!auth.user; // true or false

	/**
	 * authentication state
	 * -------------------------------------------------------------
	 * loader 							: Loader
	 * -------------------------------------------------------------
	 * !user + private + !login 		: Login
	 * !user + !(private + !login) 		: Route
	 * -------------------------------------------------------------
	 * login							: Intended URL | Default URL
	 * others							: Route
	 * -------------------------------------------------------------
	 */
	if (auth.loader) {
		return <Loader />;
	} else if (!isUser) {
		if (type && isPrivate(type) && route.path !== appRoutes.AUTH.LOGIN) {
			const condition = route.path !== appRoutes.HOME;
			return <Navigate to={appRoutes.AUTH.LOGIN} state={{ intendedUrl: condition && pathname }} replace />;
		}
		const Template = route.template || template;
		return <Template Component={route.component} />;
	} else if (route.path === appRoutes.AUTH.LOGIN) {
		const defaultUrl = appRoutes.HOME;
		const intendedUrl = (state as AuthStateInterface)?.intendedUrl;
		return <Navigate to={intendedUrl || defaultUrl} />;
	}
	const Template = route.template || template;
	return <Template Component={route.component} />;
};
export default Auth;
