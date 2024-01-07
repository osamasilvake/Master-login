import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Auth from '@/screens/auth/Auth';

import routesTemplate from './Routes.template';

const RoutesCustom: FC = () => (
	<BrowserRouter>
		<Routes>
			{routesTemplate.map((item) => {
				const { routes, template, type } = item;

				return routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<Auth template={route.layout || template} route={route} type={type} />}
					/>
				));
			})}
		</Routes>
	</BrowserRouter>
);
export default RoutesCustom;
