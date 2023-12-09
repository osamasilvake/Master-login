import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Auth from '@/screens/auth/Auth';
import Login from '@/screens/auth/Login';
import Dashboard from '@/screens/dashboard/Dashboard';
import MyFiles from '@/screens/my-files/MyFiles';

import { RouterEnum } from './Router.enum';

export const router = createBrowserRouter([
	{
		path: '/auth',
		element: <Auth />,
		children: [
			{
				path: '/auth',
				element: <Login />
			},
			{
				path: 'login',
				element: <Login />
			}
		]
	},
	{
		path: RouterEnum.HOME,
		element: <App />,
		children: [
			{
				path: RouterEnum.HOME,
				element: <Dashboard />
			},
			{
				path: RouterEnum.DASHBOARD,
				element: <Dashboard />
			},
			{
				path: RouterEnum.MY_FILES,
				element: <MyFiles />
			}
		]
	}
]);
